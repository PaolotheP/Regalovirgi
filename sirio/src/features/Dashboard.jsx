import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CalendarRange, Flame, Layers, Target, ArrowRight, PlayCircle, Sparkles, BookOpen,
  Gauge, Star, Zap, AlarmClock, Compass, Trophy,
} from "lucide-react";
import { useStore, useSelectors } from "../lib/store.jsx";
import { getTopic, PLAN_TOPICS } from "../data/curriculum.js";
import { Card, Button, Ring, Progress, Pill, Counter, Reveal } from "../components/ui.jsx";
import { LogoMark } from "../components/Logo.jsx";
import { startTour } from "./Direxi.jsx";
import { greeting } from "../lib/direxi.js";
import { daysBetween, parseDate, today, toISO, fmtDate } from "../lib/utils.js";
import { planNeedsRemodel, isSprint } from "../lib/plan.js";
import { cn } from "../lib/utils.js";

/* Soglia di prontezza di chi ha superato l'esame (dal Gemello del promosso). */
const PASS_THRESHOLD = 72;

export default function Dashboard() {
  const { state, dispatch } = useStore();
  const sel = useSelectors();
  const nav = useNavigate();
  const p = state.profile;
  const gg = p.examDate ? Math.max(0, daysBetween(today(), parseDate(p.examDate))) : null;
  const sprint = isSprint(state.plan);

  const firstTime = state.study.sessions.length === 0 && sel.totalExercises === 0;
  const hello = greeting(p.name, { firstTime });

  const todayTask = useMemo(() => {
    if (!state.plan) return null;
    const iso = toISO(today());
    const todayEntries = state.plan.schedule.filter((s) => s.date === iso);
    const studio = todayEntries.find((s) => s.kind === "studio" && s.topicId);
    if (studio) return { ...studio, topic: getTopic(studio.topicId) };
    const special = todayEntries.find((s) => s.kind !== "studio");
    if (special) return special;
    const upcoming = state.plan.schedule.filter((s) => s.kind === "studio" && s.topicId);
    const t = upcoming.find((s) => s.date >= iso) || upcoming[upcoming.length - 1];
    return t ? { ...t, topic: getTopic(t.topicId) } : null;
  }, [state.plan]);

  const needsRemodel = planNeedsRemodel(state.plan);

  // stelle che si stanno spegnendo (le più urgenti)
  const fading = useMemo(() => {
    return PLAN_TOPICS
      .map((t) => ({ t, temp: sel.temp(t.id), m: sel.mastery(t.id) }))
      .filter((x) => x.m > 0)
      .sort((a, b) => a.temp - b.temp)
      .slice(0, 4);
  }, [state.progress]);

  // priorità sprint: argomenti pesanti e deboli
  const priorities = useMemo(() => {
    if (!sprint) return [];
    return PLAN_TOPICS
      .map((t) => ({ t, m: sel.mastery(t.id), w: Math.max(1, (t.pages?.[1] || 0) - (t.pages?.[0] || 0)) }))
      .sort((a, b) => (a.m - b.m) || (b.w - a.w))
      .slice(0, 5);
  }, [sprint, state.progress]);

  const readiness = sel.overall;

  return (
    <div>
      {/* ============ SALUTO: la stella sopra, al centro ============ */}
      <div className="mb-8 flex flex-col items-center text-center">
        <motion.div initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}>
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <LogoMark size={64} />
          </motion.div>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="mt-3 font-display text-4xl font-bold tracking-tight text-text-hi">
          {hello}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="mt-1 text-sm text-text-soft">
          {firstTime ? "Il tuo cielo ti aspetta: accendiamo la prima stella." : "Il tuo cielo ti aspettava. Riprendiamo da dove brilla meno."}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="mt-4 flex gap-2">
          <Pill tone="warm" className={sel.streak >= 2 ? "animate-pulseWarm" : undefined}>
            <Flame size={13} className="text-accent-500" /> {sel.streak} giorni di fila
          </Pill>
          <Pill tone="soft"><Sparkles size={13} /> Livello {sel.level}</Pill>
          <Pill tone="glow"><Star size={13} /> {state.litStars.length} stelle accese</Pill>
        </motion.div>
      </div>

      {needsRemodel && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex flex-wrap items-center gap-3 rounded-xl2 border border-amber-400/25 bg-amber-400/[0.08] px-4 py-3">
          <Target size={18} className="text-amber-500" />
          <span className="flex-1 text-sm text-text">Hai saltato alcuni giorni. Rimodelliamo il piano sul tempo che resta?</span>
          <Button size="sm" onClick={() => { dispatch({ type: "REMODEL_PLAN" }); }}>Rimodella il piano</Button>
        </motion.div>
      )}

      {/* ============ MODALITÀ SPRINT ============ */}
      {sprint && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <Card glass="glass-warm" className="mb-6 p-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-warm-grad text-white"><Zap size={24} /></div>
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-xl font-bold text-text-hi">Modalità Sprint: ultimo miglio</h2>
                <p className="text-sm text-text-soft">Niente argomenti nuovi: solo le priorità che pesano di più all'esame.</p>
              </div>
              <Button variant="warm" size="sm" onClick={() => nav("/app/ripasso")}><Zap size={14} /> Ripasso last minute</Button>
            </div>
            {priorities.length > 0 && (
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {priorities.map(({ t, m }, i) => (
                  <motion.button key={t.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                    onClick={() => nav(`/app/topic/${t.id}`)}
                    className="rounded-xl2 border border-accent-400/30 bg-accent-400/[0.07] p-3 text-left transition hover:border-accent-400/60">
                    <div className="text-[0.62rem] font-bold uppercase tracking-wider text-accent-600">priorità {i + 1}</div>
                    <div className="mt-1 line-clamp-2 text-xs font-semibold leading-snug text-text-hi">{t.title}</div>
                    <Progress value={m} tone="warm" className="mt-2 h-1.5" />
                  </motion.button>
                ))}
              </div>
            )}
          </Card>
        </motion.div>
      )}

      {/* ============ RIGA VITALE (count-up) ============ */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card hover onClick={() => nav("/app/piano")} className="p-6">
          <div className="eyebrow">All'esame</div>
          <div className="mt-1 font-display text-5xl font-bold text-gradient">{gg == null ? "—" : <Counter value={gg} />}</div>
          <div className="text-sm text-text-mute">giorni{p.examDate ? ` · ${fmtDate(parseDate(p.examDate))}` : ""}</div>
          <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-glow">
            <CalendarRange size={15} /> Vai al piano <ArrowRight size={13} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <Ring value={readiness} size={96}>
                <span className="font-display text-xl font-bold text-text-hi"><Counter value={readiness} />%</span>
              </Ring>
              {/* tacca della soglia dei promossi */}
              <div className="absolute inset-0 grid place-items-center" style={{ transform: `rotate(${(PASS_THRESHOLD / 100) * 360}deg)` }}>
                <div className="h-full w-[2px]"><div className="mx-auto h-3 w-[2px] rounded bg-accent-500" /></div>
              </div>
            </div>
            <div>
              <div className="eyebrow">Prontezza</div>
              <div className={cn("mt-1 text-sm font-semibold", readiness >= PASS_THRESHOLD ? "text-emerald-500" : "text-text-soft")}>
                {readiness >= PASS_THRESHOLD ? "Oltre la soglia dei promossi" : <>soglia dei promossi: <b className="text-accent-500">{PASS_THRESHOLD}%</b></>}
              </div>
              <div className="mt-1 text-sm text-text-mute"><Counter value={sel.totalExercises} /> esercizi svolti</div>
              {sel.calibration != null && (
                <div className="mt-1 inline-flex items-center gap-1 text-xs text-text-mute"><Gauge size={12} /> calibrazione {sel.calibration}</div>
              )}
            </div>
          </div>
        </Card>

        <Card hover onClick={() => nav("/app/leitner")} className="p-6">
          <div className="eyebrow">Da ripassare oggi</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-5xl font-bold text-text-hi"><Counter value={sel.dueLeitnerCount} /></span>
            <span className="text-sm text-text-mute">carte errori</span>
          </div>
          <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-glow">
            <Layers size={15} /> Apri lo schedario <ArrowRight size={13} />
          </div>
        </Card>
      </div>

      {/* ============ COSA STUDIO OGGI ============ */}
      {todayTask && (
        <Card glass="glass-brand" className="mt-6 flex flex-wrap items-center gap-5 p-6">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-grad text-white">
            {todayTask.topic ? <PlayCircle size={28} /> : todayTask.kind === "simulazione" ? <Trophy size={26} /> : <AlarmClock size={26} />}
          </div>
          <div className="min-w-0 flex-1">
            <div className="eyebrow">Cosa studio oggi</div>
            <h3 className="mt-0.5 font-display text-xl font-bold text-text-hi">
              {todayTask.topic ? todayTask.topic.title : todayTask.label}
            </h3>
            <p className="text-sm text-text-soft">
              {todayTask.topic ? todayTask.topic.subtitle : todayTask.kind === "ripasso" || todayTask.kind === "consolidamento" ? "Niente di nuovo: oggi si consolida ciò che hai acceso." : "Mettiti alla prova come fosse il giorno dell'esame."}
            </p>
          </div>
          {todayTask.topic ? (
            <Button onClick={() => nav(`/app/topic/${todayTask.topic.id}`)}>Inizia a studiare <ArrowRight size={16} /></Button>
          ) : todayTask.kind === "ripasso" || todayTask.kind === "consolidamento" ? (
            <Button variant="warm" onClick={() => nav("/app/heatmap")}><Sparkles size={15} /> Sveglia le stelle spente</Button>
          ) : (
            <Button onClick={() => nav("/app/quiz")}>Vai alla prova <ArrowRight size={16} /></Button>
          )}
        </Card>
      )}

      {/* ============ STELLE CHE SI SPENGONO ============ */}
      {fading.length > 0 && (
        <Reveal className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-text-hi">Stelle che si stanno spegnendo</h2>
            <button onClick={() => nav("/app/heatmap")} className="text-sm text-glow hover:underline">Apri la costellazione <ArrowRight size={13} className="inline" /></button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {fading.map(({ t, temp }) => (
              <Card key={t.id} hover onClick={() => nav(`/app/topic/${t.id}`)} className="p-4">
                <div className="flex items-center justify-between">
                  <Star size={20} className={cn(temp >= 45 ? "fill-accent-400 text-accent-400" : "text-glow")}
                    style={{ opacity: 0.35 + (temp / 100) * 0.65 }} />
                  <span className="text-xs font-bold text-text-mute">{temp}° di luce</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold text-text-hi line-clamp-2">{t.title}</h3>
                <Progress value={temp} className="mt-2" />
              </Card>
            ))}
          </div>
        </Reveal>
      )}

      {/* ============ AZIONI RAPIDE (nascoste in sprint) ============ */}
      {!sprint && (
        <Reveal className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Compass, "Guida (Direxi)", startTour],
            [BookOpen, "Argomenti", "/app/argomenti"],
            [Target, "Quiz + scommessa", "/app/quiz"],
            [Star, "La costellazione", "/app/heatmap"],
          ].map(([Icon, label, to]) => (
            <Card key={label} hover onClick={() => (typeof to === "function" ? to() : nav(to))} className="flex items-center gap-3 p-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/12 text-glow"><Icon size={18} /></div>
              <span className="font-semibold text-text-hi">{label}</span>
              <ArrowRight size={16} className="ml-auto text-glow" />
            </Card>
          ))}
        </Reveal>
      )}
    </div>
  );
}
