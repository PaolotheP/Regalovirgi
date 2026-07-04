import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, BookMarked, Users, Target, Gauge, RotateCcw, Trophy, Star } from "lucide-react";
import { TOPICS, getTopic, cohortWrongPct } from "../data/curriculum.js";
import { useStore } from "../lib/store.jsx";
import { Card, Button, Pill, Progress, Ring, Counter } from "../components/ui.jsx";
import { PageHeader, BackLink } from "./common.jsx";
import { direxiCelebrate } from "../lib/direxi.js";
import { clamp, cn, shuffle } from "../lib/utils.js";

// Mescola le opzioni in modo deterministico (per argomento+indice) così la
// risposta corretta è distribuita uniformemente tra A/B/C/D e non è più
// riconoscibile dalla posizione. Stabile all'interno della sessione.
function shuffleOpts(q, key) {
  let s = 0;
  for (const c of key) s = (s * 31 + c.charCodeAt(0)) % 233280;
  const order = shuffle([...q.opts.keys()], s + 7);
  return { ...q, opts: order.map((i) => q.opts[i]), correct: order.indexOf(q.correct) };
}

const CONF = [
  { v: 33, label: "Incerto" },
  { v: 66, label: "Abbastanza sicuro" },
  { v: 100, label: "Sicuro" },
];

export function QuizHub() {
  const nav = useNavigate();
  const list = TOPICS.filter((t) => t.quiz?.length);
  return (
    <div>
      <PageHeader eyebrow="Esercitazione" title="Risposta multipla" helpKey="quiz"
        sub="Quiz con correzione, spiegazione e fonte. Prima di rispondere, scommetti quanto sei sicuro: allena la tua calibrazione." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t) => (
          <Card key={t.id} hover onClick={() => nav(`/app/quiz/${t.id}`)} className="p-5">
            <div className="flex items-center justify-between">
              <Pill tone="soft">{t.part === "generale" ? "Parte generale" : "Parte speciale"}</Pill>
              <span className="text-xs text-text-mute">{t.quiz.length} domande</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-bold text-text-hi">{t.title}</h3>
            <p className="mt-1 text-sm text-text-soft line-clamp-2">{t.subtitle}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function QuizRun() {
  const { id } = useParams();
  const topic = getTopic(id);
  const { state, dispatch } = useStore();
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState("bet"); // bet -> answer -> reveal
  const [conf, setConf] = useState(null);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [wrongCards, setWrongCards] = useState([]);
  const [betLog, setBetLog] = useState([]);

  const questions = useMemo(() => (topic?.quiz || []).map((q, i) => shuffleOpts(q, topic.id + ":" + i)), [topic]);
  const q = questions[idx];

  if (!topic || !q) return <div><BackLink to="/app/quiz">Tutti i quiz</BackLink><p className="text-text-soft">Quiz non disponibile.</p></div>;

  const wrongPct = cohortWrongPct(topic.id, idx, q.difficulty);

  function pick(i) {
    if (phase !== "answer") return;
    setPicked(i);
    setPhase("reveal");
    const correct = i === q.correct;
    if (correct) setScore((s) => s + 1);
    else setWrongCards((w) => [...w, { key: topic.id + ":" + idx, q: q.q, a: q.opts[q.correct] }]);
    dispatch({ type: "RECORD_BET", correct, confidence: conf });
    setBetLog((b) => [...b, { correct, confidence: conf }]);
  }

  function next() {
    if (idx === questions.length - 1) {
      dispatch({ type: "RECORD_QUIZ", topicId: topic.id, correct: score, total: questions.length, mode: "multipla", wrongCards });
      dispatch({ type: "LOG_SESSION", topicId: topic.id, label: `${topic.title} · quiz`, minutes: Math.max(5, questions.length * 2) });
      // la stella si accende quando la padronanza supera la soglia
      const oldM = state.progress[topic.id]?.mastery || 0;
      const pct = Math.round((score / questions.length) * 100);
      const newM = clamp(Math.round(oldM * 0.45 + pct * 0.55), 0, 100);
      if (newM >= 60 && !state.litStars.includes(topic.id)) {
        dispatch({ type: "LIGHT_STAR", topicId: topic.id });
        direxiCelebrate(`Hai acceso una stella: ${topic.title} ✨ La vedi brillare nella tua costellazione.`);
      }
      setPhase("done");
    } else {
      setIdx((x) => x + 1);
      setPhase("bet"); setConf(null); setPicked(null);
    }
  }

  if (phase === "done") return <QuizResult topic={topic} score={score} total={questions.length} betLog={betLog} onRetry={() => { setIdx(0); setPhase("bet"); setConf(null); setPicked(null); setScore(0); setWrongCards([]); setBetLog([]); }} />;

  return (
    <div className="mx-auto max-w-2xl">
      <BackLink to="/app/quiz">Tutti i quiz</BackLink>
      <div className="mb-4 flex items-center justify-between">
        <Pill tone="soft">Domanda {idx + 1} / {questions.length}</Pill>
        <span className="text-sm text-text-soft">Punteggio <b className="text-glow">{score}</b></span>
      </div>
      <Progress value={(idx / questions.length) * 100} className="mb-6" />

      <Card glass="glass-strong" className="p-6">
        <div className="mb-2 flex items-center gap-2">
          <Pill tone="glow">{topic.title}</Pill>
          <span className="text-xs text-text-mute">difficoltà {"●".repeat(q.difficulty)}{"○".repeat(5 - q.difficulty)}</span>
        </div>
        <h2 className="font-display text-xl font-bold leading-snug text-text-hi">{q.q}</h2>

        {/* Scommessa sulla risposta (solo CSS: mai bloccata a opacità 0) */}
        {phase === "bet" && (
          <div className="anim-fadein">
              <div className="mt-6 rounded-xl2 glass-brand p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-glow"><Target size={16} /> Quanto sei sicuro di saperla?</div>
                <div className="grid grid-cols-3 gap-2">
                  {CONF.map((c) => (
                    <button key={c.v} onClick={() => { setConf(c.v); setPhase("answer"); }}
                      className="rounded-xl border border-line/10 bg-fill/[0.03] px-2 py-3 text-center transition hover:border-glow/50 hover:bg-glow/5">
                      <div className="font-display text-lg font-bold text-text-hi">{c.v}%</div>
                      <div className="text-xs text-text-soft">{c.label}</div>
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-text-mute">La scommessa premia chi ha ragione ed è ben calibrato; penalizza la sicurezza a vuoto.</p>
              </div>
          </div>
        )}

        {/* Opzioni */}
        {phase !== "bet" && (
          <div className="mt-6 space-y-2.5">
            {q.opts.map((o, i) => {
              const isCorrect = i === q.correct;
              const isPicked = i === picked;
              const reveal = phase === "reveal";
              return (
                <button key={i} disabled={reveal} onClick={() => pick(i)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-xl2 border px-4 py-3.5 text-left transition-all",
                    !reveal && "border-line/10 bg-fill/[0.03] hover:border-glow/50 hover:bg-glow/5",
                    reveal && isCorrect && "border-emerald-400/60 bg-emerald-400/10",
                    reveal && isPicked && !isCorrect && "border-rose-400/60 bg-rose-400/10",
                    reveal && !isCorrect && !isPicked && "border-line/8 opacity-60"
                  )}>
                  <span className={cn("grid h-7 w-7 shrink-0 place-items-center rounded-lg font-display font-bold",
                    reveal && isCorrect ? "bg-emerald-400 text-emerald-950" : reveal && isPicked ? "bg-rose-400 text-rose-950" : "bg-fill/8 text-text-hi")}>
                    {"ABCD"[i]}
                  </span>
                  <span className="pt-0.5 text-[0.97rem]">{o}</span>
                  {reveal && isCorrect && <Check size={18} className="ml-auto mt-1 shrink-0 text-emerald-400" />}
                  {reveal && isPicked && !isCorrect && <X size={18} className="ml-auto mt-1 shrink-0 text-rose-400" />}
                </button>
              );
            })}
          </div>
        )}

        {/* Correzione rivelata A TAPPE: verdetto → coorte → spiegazione → calibrazione */}
        <AnimatePresence>
          {phase === "reveal" && (
            <div className="mt-5 space-y-3">
              {/* 1. il verdetto, netto */}
              <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 380, damping: 18 }}
                className={cn("flex items-center justify-center gap-2 rounded-xl2 border py-3 font-display text-xl font-bold",
                  picked === q.correct ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-500" : "border-rose-400/40 bg-rose-400/10 text-rose-500")}>
                {picked === q.correct ? <><Check size={22} /> Corretto!</> : <><X size={22} /> Sbagliato</>}
              </motion.div>
              {/* 2. il muro della coorte */}
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="flex items-center gap-3 rounded-xl2 border border-amber-400/20 bg-amber-400/[0.06] px-4 py-3">
                <Users size={18} className="shrink-0 text-amber-500" />
                <div className="text-sm">
                  <b className="text-text-hi">Il {wrongPct}% dei candidati sbaglia qui.</b>
                  {q.commonError && <span className="text-text-soft"> Errore più frequente: {q.commonError}</span>}
                </div>
              </motion.div>
              {/* 3. la spiegazione */}
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
                className="rounded-xl2 border-l-2 border-glow bg-fill/[0.03] p-4">
                <div className="mb-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-glow">
                  {picked === q.correct ? "Perché è giusta" : `Risposta esatta: ${"ABCD"[q.correct]}`}
                </div>
                <p className="text-sm leading-relaxed text-text font-serif">{q.why}</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-glow">
                  <BookMarked size={13} /> {q.fonte}
                </div>
              </motion.div>
              {/* 4. la calibrazione */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <CalibHint correct={picked === q.correct} confidence={conf} />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
                <Button className="w-full" onClick={next}>
                  {idx === questions.length - 1 ? <>Vedi il risultato <Trophy size={16} /></> : <>Domanda successiva <ArrowRight size={16} /></>}
                </Button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}

function CalibHint({ correct, confidence }) {
  let msg, tone;
  if (correct && confidence >= 66) { msg = "Sicuro e corretto: calibrazione perfetta."; tone = "ok"; }
  else if (correct) { msg = "Corretto, ma eri poco sicuro: puoi fidarti di più."; tone = "glow"; }
  else if (confidence >= 66) { msg = "Sicurezza a vuoto: eri convinto ma hai sbagliato. Segnato per il ripasso."; tone = "err"; }
  else { msg = "Sbagliato, ma eri incerto: onestà premiata."; tone = "warn"; }
  return (
    <div className="flex items-center gap-2 text-sm">
      <Gauge size={16} className="text-text-soft" />
      <Pill tone={tone}>{msg}</Pill>
    </div>
  );
}

function QuizResult({ topic, score, total, betLog, onRetry }) {
  const nav = useNavigate();
  const pct = Math.round((score / total) * 100);
  const calib = useMemo(() => {
    if (!betLog.length) return null;
    const avgConf = betLog.reduce((s, b) => s + b.confidence, 0) / betLog.length / 100;
    const avgAcc = betLog.reduce((s, b) => s + (b.correct ? 1 : 0), 0) / betLog.length;
    return Math.round(100 - Math.abs(avgConf - avgAcc) * 100);
  }, [betLog]);
  return (
    <div className="mx-auto max-w-lg text-center">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <Card glass="glass-strong" className="p-8">
          {/* 1. il verdetto */}
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="mb-4 font-display text-2xl font-bold text-text-hi">
            {pct >= 80 ? "⭐ Stella accesa!" : pct >= 50 ? "Buon lavoro" : "Si riparte"}
          </motion.div>
          {/* 2. il punteggio che sale */}
          <Ring value={pct} size={130} className="mx-auto">
            <div>
              <div className="font-display text-3xl font-bold text-text-hi"><Counter value={score} duration={1.2} />/{total}</div>
              <div className="text-xs text-text-mute"><Counter value={pct} duration={1.2} />%</div>
            </div>
          </Ring>
          {/* 3. i dettagli, in sequenza */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            className="mt-6 flex items-center justify-center gap-6">
            <div><div className="font-display text-xl font-bold text-glow">{calib ?? "—"}</div><div className="text-xs text-text-mute">calibrazione</div></div>
            <div className="h-8 w-px bg-fill/10" />
            <div><div className="font-display text-xl font-bold text-text-hi">{total - score}</div><div className="text-xs text-text-mute">nel ripasso errori</div></div>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }} className="mt-5 text-sm text-text-soft">
            {pct >= 80 ? "Ottimo controllo dell'istituto: la stella brilla nella tua costellazione." : pct >= 50 ? "Buona base: rivedi i punti deboli e la stella si accenderà." : "Riprendi la spiegazione e riprova: ogni stella parte dal buio."}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
            className="mt-6 flex flex-wrap justify-center gap-2">
            <Button onClick={onRetry}><RotateCcw size={16} /> Riprova</Button>
            <Button variant="ghost" onClick={() => nav(`/app/topic/${topic.id}`)}>Torna all'argomento</Button>
            <Button variant="ghost" onClick={() => nav("/app/heatmap")}><Star size={15} /> Vedi la costellazione</Button>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}
