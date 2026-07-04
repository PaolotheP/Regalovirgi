import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate, useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, CalendarRange, BookOpen, Sparkles, Menu, X, Lock,
  CheckSquare, SplitSquareVertical, PenLine, Layers, Grid3x3, Mic, Video, Map,
  Star, Upload, Trophy, LineChart, Users, UsersRound, GitBranch, GraduationCap,
  MessageCircleQuestion, Briefcase, Brain, Zap, Gavel, ArrowLeft, HelpCircle,
  Sun, Moon, MoonStar, SunMoon, Flame, MessageSquareHeart, PersonStanding, Check,
} from "lucide-react";
import { Logo } from "./Logo.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import SubjectSwitchModal from "./SubjectSwitch.jsx";
import { currentSubject } from "../lib/subject.js";
import { useStore, useSelectors, resolveTheme } from "../lib/store.jsx";
import DirexiTour from "../features/Direxi.jsx";
import DirexiCompanion from "./DirexiCompanion.jsx";
import A11yPanel from "./A11yPanel.jsx";
import { useVoiceNav } from "../lib/hooks.js";
import { toast } from "./ui.jsx";
import { cn } from "../lib/utils.js";

const NAV = [
  { group: "Studio" },
  { to: "/app", icon: LayoutDashboard, label: "Cruscotto", end: true, tour: "dashboard" },
  { to: "/app/piano", icon: CalendarRange, label: "Piano di studi", tour: "piano" },
  { to: "/app/heatmap", icon: Star, label: "La costellazione", tour: "heatmap" },
  { to: "/app/argomenti", icon: BookOpen, label: "Argomenti", tour: "argomenti" },
  { to: "/app/ripasso", icon: Zap, label: "Ripasso last minute", tour: "ripasso" },
  { group: "Esercitazione" },
  { to: "/app/quiz", icon: CheckSquare, label: "Risposta multipla", tour: "quiz" },
  { to: "/app/verofalso", icon: SplitSquareVertical, label: "Vero / Falso" },
  { to: "/app/aperta", icon: PenLine, label: "Domande aperte" },
  { to: "/app/leitner", icon: Layers, label: "Schedario errori", badge: "leitner", tour: "leitner" },
  { to: "/app/flashcards", icon: Grid3x3, label: "Flashcard", tour: "flashcards" },
  { group: "Assistenza AI" },
  { to: "/app/tutor", icon: Brain, label: "Tutor AI", lock: true, tour: "ai" },
  { to: "/app/esaminatore", icon: Gavel, label: "Esaminatore AI", lock: true },
  { to: "/app/palestra", icon: PenLine, label: "Palestra di scrittura", lock: true },
  { group: "Contenuti" },
  { to: "/app/podcast", icon: Mic, label: "Podcast", tour: "podcast" },
  { to: "/app/video", icon: Video, label: "Video lezioni" },
  { to: "/app/mappe", icon: Map, label: "Mappe" },
  { to: "/app/punti", icon: Star, label: "Punti chiave" },
  { to: "/app/upload", icon: Upload, label: "I miei file" },
  { group: "Progressi & Community" },
  { to: "/app/classifica", icon: Trophy, label: "Classifica" },
  { to: "/app/diario", icon: LineChart, label: "Diario del ripasso" },
  { to: "/app/coorte", icon: Users, label: "Gruppo di coorte" },
  { to: "/app/costudy", icon: UsersRound, label: "Stanze di co-studio", tour: "costudy" },
  { to: "/app/gemello", icon: GitBranch, label: "Gemello del promosso" },
  { to: "/app/mentori", icon: GraduationCap, label: "Mentore ex studente", tour: "mentori" },
  { to: "/app/qa", icon: MessageCircleQuestion, label: "Domande & Risposte" },
  { to: "/app/bandi", icon: Briefcase, label: "Bandi & Concorsi" },
  { group: "Beta" },
  { to: "/app/feedback", icon: MessageSquareHeart, label: "Feedback beta", tour: "feedback" },
];

/* Materia corrente: chip sopra il menu, apre il cambio costellazione */
function SubjectChip({ onOpen }) {
  const s = currentSubject();
  return (
    <button onClick={onOpen} data-tour="materia" title="Cambia materia"
      className="mx-4 mb-1 mt-1 flex items-center gap-2.5 rounded-xl glass px-3 py-2.5 text-left transition hover:border-glow/40">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-sm"
        style={{ background: `hsl(${s.hue} 70% 55% / 0.15)`, color: `hsl(${s.hue} 80% 60%)` }}>✦</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-text-mute">Materia</span>
        <span className="block truncate text-sm font-semibold text-text-hi">{s.nome}</span>
      </span>
      <span className="text-[0.65rem] font-semibold text-glow">Cambia</span>
    </button>
  );
}

function NavItems({ onNavigate }) {
  const sel = useSelectors();
  return (
    <nav className="flex flex-col gap-0.5 px-2 pb-8">
      {NAV.map((n, i) =>
        n.group ? (
          <div key={i} className="px-3 pb-1.5 pt-5 font-sans text-[0.62rem] font-bold uppercase tracking-[0.18em] text-text-mute">
            {n.group}
          </div>
        ) : (
          <NavLink key={n.to} to={n.to} end={n.end} onClick={onNavigate} data-tour={n.tour}
            className={({ isActive }) =>
              cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 font-sans text-sm font-medium transition-all",
                isActive ? "glass-brand text-text-hi" : "text-text-soft hover:bg-fill/[0.05] hover:text-text-hi"
              )
            }>
            <n.icon size={18} className="shrink-0 opacity-90" />
            <span className="flex-1">{n.label}</span>
            {n.lock && <Lock size={13} className="text-text-mute" />}
            {n.badge === "leitner" && sel.dueLeitnerCount > 0 && (
              <span className="grid h-5 min-w-[20px] place-items-center rounded-full bg-rose-500/80 px-1 text-[0.65rem] font-bold text-white">
                {sel.dueLeitnerCount}
              </span>
            )}
          </NavLink>
        )
      )}
    </nav>
  );
}

/* --------------- Selettore dei 4 temi con onda radiale ------------------ */
const THEMES = [
  { id: "light", icon: Sun, label: "Chiaro", desc: "Per lo studio di giorno" },
  { id: "dark", icon: Moon, label: "Scuro", desc: "Il cielo di Sirio, la sera" },
  { id: "night", icon: MoonStar, label: "Notturno", desc: "Pochissima luce blu, per la notte" },
  { id: "auto", icon: SunMoon, label: "Auto", desc: "Segue l'orario e il sistema" },
];

function applyThemeClasses(theme) {
  const root = document.documentElement;
  const t = resolveTheme(theme);
  root.classList.toggle("dark", t === "dark");
  root.classList.toggle("night", t === "night");
}

export function ThemePicker() {
  const { state, dispatch } = useStore();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    window.addEventListener("mousedown", h);
    return () => window.removeEventListener("mousedown", h);
  }, []);

  const pick = (id, e) => {
    setOpen(false);
    if (id === state.theme) return;
    // onda radiale dal punto del click (View Transitions API, con fallback dolce)
    try {
      const root = document.documentElement;
      root.style.setProperty("--vt-x", `${e?.clientX ?? window.innerWidth - 60}px`);
      root.style.setProperty("--vt-y", `${e?.clientY ?? 40}px`);
      if (document.startViewTransition) {
        document.startViewTransition(() => applyThemeClasses(id));
      } else {
        applyThemeClasses(id);
      }
    } catch {}
    dispatch({ type: "SET_THEME", theme: id });
  };

  const current = THEMES.find((t) => t.id === state.theme) || THEMES[0];
  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen((o) => !o)} data-tour="theme"
        aria-label="Cambia tema" title={`Tema: ${current.label}`}
        className="grid h-9 w-9 place-items-center rounded-full glass text-text-soft transition hover:text-glow">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={current.id}
            initial={{ y: 12, opacity: 0, rotate: -30 }} animate={{ y: 0, opacity: 1, rotate: 0 }} exit={{ y: -12, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2 }}>
            <current.icon size={17} className={current.id === "night" ? "text-accent-400" : current.id === "light" ? "text-accent-500" : undefined} />
          </motion.span>
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
            className="glass-strong absolute right-0 top-11 z-50 w-64 rounded-xl2 p-1.5 shadow-soft">
            <div className="px-3 pb-1 pt-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-text-mute">Tema</div>
            {THEMES.map((t) => {
              const on = state.theme === t.id;
              return (
                <button key={t.id} onClick={(e) => pick(t.id, e)}
                  className={cn("flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition",
                    on ? "bg-glow/12 text-text-hi" : "text-text-soft hover:bg-fill/[0.06] hover:text-text-hi")}>
                  <t.icon size={17} className={t.id === "night" ? "text-accent-400" : "text-glow"} />
                  <span className="flex-1">
                    <span className="block text-sm font-semibold">{t.label}</span>
                    <span className="block text-[0.68rem] text-text-mute">{t.desc}</span>
                  </span>
                  {on && <Check size={15} className="text-glow" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* profondità delle rotte: avanti = entra da destra, indietro = esce */
function depthOf(path) {
  if (path === "/app") return 1;
  const segs = path.replace(/^\/app\/?/, "").split("/").filter(Boolean);
  return 1 + segs.length;
}

export default function Shell() {
  const [open, setOpen] = useState(false);
  const openedAt = useRef(0);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [subjOpen, setSubjOpen] = useState(false);
  const { state } = useStore();
  const nav = useNavigate();
  const loc = useLocation();
  const sel = useSelectors();
  const showBack = loc.pathname !== "/app";

  // direzione del viaggio (per le transizioni di pagina)
  const prevDepth = useRef(depthOf(loc.pathname));
  const dir = depthOf(loc.pathname) >= prevDepth.current ? 1 : -1;
  useEffect(() => { prevDepth.current = depthOf(loc.pathname); }, [loc.pathname]);

  const voice = useVoiceNav(
    (to) => (typeof to === "number" ? nav(to) : nav(to)),
    (msg) => toast(msg, { icon: <Mic size={14} /> })
  );

  return (
    <div className="min-h-screen lg:pl-72">
      {/* Sidebar desktop */}
      <motion.aside
        initial={{ x: -24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-line/8 bg-bg-2/70 backdrop-blur-xl lg:flex">
        <div className="flex h-16 items-center px-5">
          <button onClick={() => nav("/app")}><Logo /></button>
        </div>
        <SubjectChip onOpen={() => setSubjOpen(true)} />
        <div className="no-scrollbar flex-1 overflow-y-auto" data-tour-scroller>
          <NavItems />
        </div>
      </motion.aside>

      {/* Drawer mobile — apertura fluida.
          Tween breve (non spring a coda lunga) + scrim "indulgente": un tocco
          arrivato mentre il menu si sta ancora aprendo non deve richiuderlo
          (era la causa del "bisogna premere due volte" segnalato in beta). */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 z-40 bg-scrim/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => { if (Date.now() - openedAt.current > 420) setOpen(false); }} />
            <motion.aside className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-line/10 bg-bg-2/95 backdrop-blur-xl lg:hidden"
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}>
              <div className="flex h-16 items-center justify-between px-5">
                <Logo />
                <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg border border-line/10 text-text-mute"><X size={18} /></button>
              </div>
              <SubjectChip onOpen={() => setSubjOpen(true)} />
              <div className="no-scrollbar flex-1 overflow-y-auto">
                <NavItems onNavigate={() => setOpen(false)} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Top bar */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-2.5 border-b border-line/8 bg-bg-2/70 px-4 backdrop-blur-xl lg:px-8">
        <button className="grid h-10 w-10 place-items-center rounded-xl glass lg:hidden" aria-label="Apri il menu" title="Apri il menu" onClick={() => { openedAt.current = Date.now(); setOpen(true); }}><Menu size={20} /></button>
        <div className="lg:hidden"><Logo showText={false} /></div>
        {showBack && (
          <button onClick={() => nav(-1)} aria-label="Indietro"
            className="flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-sm font-semibold text-text-soft transition hover:text-glow hover:border-glow/40">
            <ArrowLeft size={16} /> <span className="hidden sm:inline">Indietro</span>
          </button>
        )}
        <div className="flex-1" />
        {state.a11y.voiceNav && voice.supported && (
          <button onClick={() => (voice.listening ? voice.stop() : voice.start())}
            aria-label="Comandi vocali" title="Comandi vocali"
            className={cn("grid h-9 w-9 place-items-center rounded-full glass transition",
              voice.listening ? "text-rose-500 animate-pulseWarm" : "text-text-soft hover:text-glow")}>
            <Mic size={17} />
          </button>
        )}
        <button onClick={() => setA11yOpen(true)} aria-label="Accessibilità" title="Accessibilità" data-tour="a11y"
          className="grid h-9 w-9 place-items-center rounded-full glass text-text-soft transition hover:text-glow">
          <PersonStanding size={18} />
        </button>
        <ThemePicker />
        <button onClick={() => window.dispatchEvent(new CustomEvent("sirio-direxi", { detail: { type: "guide" } }))}
          aria-label="Guida di Direxi" title="Chiedi a Direxi" data-tour="help"
          className="grid h-9 w-9 place-items-center rounded-full glass text-text-soft transition hover:text-glow">
          <HelpCircle size={18} />
        </button>
        <button onClick={() => nav("/app/heatmap")} className="hidden items-center gap-2 rounded-full glass px-3.5 py-1.5 text-sm sm:flex">
          <Flame size={15} className="text-accent-500" />
          <span className="font-semibold text-text-hi">{sel.streak}</span>
          <span className="text-text-mute">giorni</span>
        </button>
        <button onClick={() => nav("/app")} className="flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-sm">
          <Sparkles size={15} className="text-glow" />
          <span className="font-semibold text-text-hi">Lv {sel.level}</span>
        </button>
      </header>

      {/* pb-28: lascia respiro alla stella Direxi fissa in basso a destra */}
      <main className="mx-auto w-full max-w-6xl px-4 py-6 pb-28 lg:px-8 lg:py-10 lg:pb-28">
        {/* Transizione di pagina in SOLO CSS (autoriparante): la vecchia
            AnimatePresence mode="wait" poteva restare bloccata a opacità 0
            se una navigazione interrompeva l'uscita → pagina "vuota". */}
        <div key={loc.pathname} className="anim-pagein" style={{ "--pgx": `${dir * 28}px` }}>
          <ErrorBoundary resetKey={loc.pathname}>
            <Outlet />
          </ErrorBoundary>
        </div>
      </main>

      {/* Direxi: tour spotlight + stella compagna nell'angolo */}
      <DirexiTour />
      <DirexiCompanion />
      <A11yPanel open={a11yOpen} onClose={() => setA11yOpen(false)} />
      <SubjectSwitchModal open={subjOpen} onClose={() => setSubjOpen(false)} />
    </div>
  );
}
