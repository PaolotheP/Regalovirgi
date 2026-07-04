import { createContext, useContext, useEffect, useMemo, useReducer, useRef } from "react";
import { get as idbGet, set as idbSet, del as idbDel } from "idb-keyval";
import { today, toISO, uid, clamp } from "./utils.js";
import { TOPICS } from "../data/curriculum.js";
import { generatePlan, remodelPlan } from "./plan.js";
import { leitnerNextDue, memoryTemp } from "./scheduling.js";
import { currentSubject, currentSubjectId } from "./subject.js";

/* Ogni materia salva i propri progressi in un bucket separato:
   penale = "sirio_v1" (chiave storica), tributario = "sirio_v1:tributario". */
const KEY = currentSubject().storageKey;
const OLD_KEY = currentSubjectId() === "penale" ? "nplus_beta_v1" : null; // migrazione dalla beta N+

/* ------------------------------ initial state -------------------------- */
function freshState() {
  return {
    v: 1,
    onboarded: false,
    profile: {
      name: "",
      mode: "esame",
      university: "",
      faculty: currentSubjectId() === "tributario" ? "Economia" : "Giurisprudenza",
      year: "",
      exam: currentSubjectId(),
      examDate: "",
      hoursPerDay: 2,
      goal: 80,
      professorId: "",
      bookId: "",
      startFromZero: true,
      studiedBefore: [], // id degli argomenti già studiati prima di Sirio
    },
    plan: null,
    progress: {}, // topicId -> { mastery, lastStudied, studyCount, sections:{}, quiz:{best,attempts,lastPct} }
    study: { sessions: [], days: {} }, // days: iso -> minutes
    leitner: { cards: [] },
    calibration: { bets: [] },
    todo: [],
    oral: [],
    votes: {},
    anon: false,
    tier: "free",
    cohortJoined: false,
    messages: [],
    uploads: [],
    gamification: { xp: 0, badges: [], lastActive: "", streak: 0 },
    lastVisit: "",
    theme: "light", // chiaro di default; opzioni: light | dark | night | auto
    tourSeen: false,
    a11y: { dsa: false, reduceMotion: false, audioFirst: false, voiceNav: false },
    feedback: [], // segnalazioni beta: { id, cat, text, at }
    litStars: [], // argomenti già celebrati come "stella accesa"
  };
}

function load() {
  try {
    const raw = localStorage.getItem(KEY) || (OLD_KEY && localStorage.getItem(OLD_KEY));
    if (!raw) return freshState();
    const parsed = JSON.parse(raw);
    const base = freshState();
    /* bucket appena seminato dal cambio materia: porta con sé solo le
       preferenze condivise (tema, accessibilità, nome, tour già visto) */
    if (parsed.__seed) {
      return {
        ...base,
        theme: ["light", "dark", "night", "auto"].includes(parsed.theme) ? parsed.theme : base.theme,
        a11y: { ...base.a11y, ...(parsed.a11y || {}) },
        tourSeen: !!parsed.tourSeen,
        profile: { ...base.profile, name: parsed.profile?.name || "" },
      };
    }
    const st = { ...base, ...parsed, profile: { ...base.profile, ...(parsed.profile || {}) }, a11y: { ...base.a11y, ...(parsed.a11y || {}) } };
    // il vecchio tema "dark" della beta resta valido; tutto il resto migra pulito
    if (!["light", "dark", "night", "auto"].includes(st.theme)) st.theme = "light";
    return st;
  } catch {
    return freshState();
  }
}

/* Risolve il tema effettivo: "auto" segue sistema e orario (7–19 chiaro). */
export function resolveTheme(theme) {
  if (theme !== "auto") return theme;
  try {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)")?.matches) return "dark";
  } catch {}
  const h = new Date().getHours();
  return h >= 7 && h < 19 ? "light" : "dark";
}

/* -------------------------------- reducer ------------------------------ */
function reducer(state, action) {
  switch (action.type) {
    case "RESET":
      return freshState();

    case "SET_THEME":
      return ["light", "dark", "night", "auto"].includes(action.theme) ? { ...state, theme: action.theme } : state;
    case "SET_A11Y":
      return { ...state, a11y: { ...state.a11y, ...action.patch } };
    case "SET_TOUR_SEEN":
      return { ...state, tourSeen: true };

    case "FEEDBACK_ADD":
      return { ...state, feedback: [...state.feedback, { id: uid(), cat: action.cat, text: action.text, at: toISO(today()) }] };
    case "FEEDBACK_REMOVE":
      return { ...state, feedback: state.feedback.filter((f) => f.id !== action.id) };
    case "FEEDBACK_CLEAR":
      return { ...state, feedback: [] };

    case "LIGHT_STAR":
      return state.litStars.includes(action.topicId) ? state : { ...state, litStars: [...state.litStars, action.topicId] };

    /* Trascina un argomento su un'altra data del calendario */
    case "MOVE_TOPIC": {
      if (!state.plan) return state;
      const schedule = state.plan.schedule.map((s) =>
        s.kind === "studio" && s.topicId === action.topicId ? { ...s, date: action.toDate } : s
      );
      schedule.sort((a, b) => (a.date < b.date ? -1 : 1));
      return { ...state, plan: { ...state.plan, schedule, movedAt: toISO(today()) } };
    }

    case "PATCH_PROFILE":
      return { ...state, profile: { ...state.profile, ...action.patch } };

    case "COMPLETE_ONBOARDING": {
      const plan = generatePlan(state.profile);
      return { ...state, onboarded: true, plan, lastVisit: toISO(today()) };
    }

    case "REGEN_PLAN":
      return { ...state, plan: generatePlan(state.profile) };

    case "REMODEL_PLAN": {
      if (!state.plan) return state;
      return { ...state, plan: remodelPlan(state.plan, state.profile, state.progress) };
    }

    case "STUDY_SECTION": {
      const { topicId, section } = action;
      const p = state.progress[topicId] || { mastery: 0, studyCount: 0, sections: {}, quiz: {} };
      const sections = { ...p.sections, [section]: true };
      const np = { ...p, sections, lastStudied: toISO(today()), studyCount: (p.studyCount || 0) + 1 };
      return {
        ...state,
        progress: { ...state.progress, [topicId]: np },
        gamification: addXp(state.gamification, 8),
      };
    }

    case "LOG_SESSION": {
      const { topicId, label, minutes } = action;
      const iso = toISO(today());
      const days = { ...state.study.days, [iso]: (state.study.days[iso] || 0) + minutes };
      const sessions = [{ date: iso, topicId, label, minutes }, ...state.study.sessions].slice(0, 60);
      return { ...state, study: { sessions, days } };
    }

    case "RECORD_QUIZ": {
      const { topicId, correct, total, mode, wrongCards } = action;
      const p = state.progress[topicId] || { mastery: 0, studyCount: 0, sections: {}, quiz: {} };
      const lastPct = total ? Math.round((correct / total) * 100) : 0;
      const best = Math.max(p.quiz?.best || 0, lastPct);
      // mastery is a smoothed blend of study + quiz performance
      const mastery = clamp(Math.round((p.mastery || 0) * 0.45 + lastPct * 0.55), 0, 100);
      const quiz = { best, attempts: (p.quiz?.attempts || 0) + 1, lastPct, lastMode: mode };
      const np = { ...p, quiz, mastery, lastStudied: toISO(today()) };
      // add wrong answers to Leitner deck
      let cards = state.leitner.cards;
      if (wrongCards && wrongCards.length) {
        const existing = new Set(cards.map((c) => c.key));
        const toAdd = wrongCards
          .filter((w) => !existing.has(w.key))
          .map((w) => ({
            id: uid(), key: w.key, topicId, q: w.q, a: w.a, box: 1,
            due: leitnerNextDue(1), createdAt: toISO(today()),
          }));
        cards = [...cards, ...toAdd];
      }
      const xp = 6 * correct + 2 * (total - correct);
      return {
        ...state,
        progress: { ...state.progress, [topicId]: np },
        leitner: { cards },
        gamification: addXp(state.gamification, xp),
      };
    }

    case "REVIEW_LEITNER": {
      const { id, correct } = action;
      const cards = state.leitner.cards
        .map((c) => {
          if (c.id !== id) return c;
          const box = correct ? Math.min(5, c.box + 1) : 1;
          return { ...c, box, due: leitnerNextDue(box), lastReview: toISO(today()) };
        })
        .filter((c) => !(correct && c.id === id && c.box >= 5 && action.remove)); // mastered cards can be removed
      return { ...state, leitner: { cards }, gamification: addXp(state.gamification, correct ? 5 : 1) };
    }

    case "RECORD_BET": {
      const bets = [...state.calibration.bets, { correct: action.correct, confidence: action.confidence }].slice(-200);
      return { ...state, calibration: { bets } };
    }

    case "ADD_TODO":
      return state.todo.includes(action.text) ? state : { ...state, todo: [...state.todo, action.text] };
    case "REMOVE_TODO":
      return { ...state, todo: state.todo.filter((_, i) => i !== action.index) };

    case "ADD_ORAL":
      return { ...state, oral: [...state.oral, action.text] };
    case "REMOVE_ORAL":
      return { ...state, oral: state.oral.filter((_, i) => i !== action.index) };

    case "VOTE":
      return { ...state, votes: { ...state.votes, [action.id]: state.votes[action.id] === action.value ? 0 : action.value } };

    case "SET_ANON":
      return { ...state, anon: action.value };

    case "SET_TIER":
      return { ...state, tier: action.tier };

    case "JOIN_COHORT":
      return { ...state, cohortJoined: true, gamification: addXp(state.gamification, 20) };

    case "SEND_MESSAGE":
      return { ...state, messages: [{ to: action.to, at: Date.now() }, ...state.messages].slice(0, 40) };

    case "ADD_UPLOAD":
      return { ...state, uploads: [...state.uploads, action.meta] };
    case "REMOVE_UPLOAD":
      return { ...state, uploads: state.uploads.filter((u) => u.id !== action.id) };

    case "TICK_VISIT": {
      // streak & remodel bookkeeping done on mount
      const iso = toISO(today());
      let { streak, lastActive } = state.gamification;
      if (lastActive !== iso) {
        const y = toISO(new Date(today().getTime() - 86400000));
        streak = lastActive === y ? streak + 1 : 1;
      }
      return { ...state, gamification: { ...state.gamification, streak, lastActive: iso }, lastVisit: iso };
    }

    default:
      return state;
  }
}

function addXp(g, amount) {
  return { ...g, xp: (g.xp || 0) + amount };
}

/* -------------------------------- context ------------------------------ */
const StoreCtx = createContext(null);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, load);
  const saveTimer = useRef(null);

  // persist (debounced)
  useEffect(() => {
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
    }, 250);
    return () => clearTimeout(saveTimer.current);
  }, [state]);

  // streak tick + auto-remodel plan on return after missed days
  useEffect(() => {
    dispatch({ type: "TICK_VISIT" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // applica tema effettivo + classi di accessibilità alla radice del documento
  useEffect(() => {
    const root = typeof document !== "undefined" && document.documentElement;
    if (!root) return;
    const apply = () => {
      const t = resolveTheme(state.theme);
      root.classList.toggle("dark", t === "dark");
      root.classList.toggle("night", t === "night");
      root.classList.remove("light"); // il chiaro è il default di :root
      root.classList.toggle("dsa", !!state.a11y.dsa);
      root.classList.toggle("rm", !!state.a11y.reduceMotion);
    };
    apply();
    // in "auto" ricontrolla l'orario ogni minuto
    if (state.theme === "auto") {
      const id = setInterval(apply, 60000);
      return () => clearInterval(id);
    }
  }, [state.theme, state.a11y.dsa, state.a11y.reduceMotion]);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

/* --------------------------- derived selectors ------------------------- */
export function useSelectors() {
  const { state } = useStore();
  return useMemo(() => buildSelectors(state), [state]);
}

export function buildSelectors(state) {
  const level = Math.floor(Math.sqrt((state.gamification.xp || 0) / 40)) + 1;
  const xpForNext = 40 * level * level;
  const xpForPrev = 40 * (level - 1) * (level - 1);

  const dueLeitner = state.leitner.cards.filter((c) => c.due <= toISO(today()));
  const totalExercises = Object.values(state.progress).reduce((n, p) => n + (p.quiz?.attempts || 0), 0);

  // overall mastery across studied topics
  const masteries = TOPICS.map((t) => state.progress[t.id]?.mastery || 0);
  const overall = masteries.length ? Math.round(masteries.reduce((a, b) => a + b, 0) / masteries.length) : 0;

  // calibration index: how well confidence matches correctness (0..100, higher=better calibrated)
  const bets = state.calibration.bets;
  let calibration = null, overconfidence = 0;
  if (bets.length >= 4) {
    const avgConf = bets.reduce((s, b) => s + b.confidence, 0) / bets.length / 100;
    const avgAcc = bets.reduce((s, b) => s + (b.correct ? 1 : 0), 0) / bets.length;
    overconfidence = Math.round((avgConf - avgAcc) * 100);
    calibration = Math.round(100 - Math.abs(avgConf - avgAcc) * 100);
  }

  return {
    level, xpForNext, xpForPrev, xp: state.gamification.xp || 0,
    streak: state.gamification.streak || 0,
    dueLeitner, dueLeitnerCount: dueLeitner.length,
    leitnerCount: state.leitner.cards.length,
    totalExercises, overall, hasExercised: totalExercises > 0,
    calibration, overconfidence,
    temp: (topicId) => memoryTemp(state.progress[topicId]),
    mastery: (topicId) => state.progress[topicId]?.mastery || 0,
  };
}

/* --------------------------- uploaded files (idb) ---------------------- */
export async function saveUploadBlob(id, blob) { await idbSet("upload:" + id, blob); }
export async function getUploadBlob(id) { return idbGet("upload:" + id); }
export async function deleteUploadBlob(id) { await idbDel("upload:" + id); }
