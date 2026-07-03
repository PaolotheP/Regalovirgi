import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  CheckCircle2, Circle, Flag, RefreshCw, FileCheck2, Trophy,
  ArrowRight, RotateCcw, CalendarDays, Sparkles, ChevronDown, Rows3, CalendarRange, Hand, Zap,
} from "lucide-react";
import { useStore, useSelectors } from "../lib/store.jsx";
import { getTopic, TOPICS } from "../data/curriculum.js";
import { getBook } from "../data/books.js";
import { Card, Button, Ring, Pill, toast } from "../components/ui.jsx";
import { PageHeader } from "./common.jsx";
import { fmtShort, parseDate, toISO, today, daysBetween, addDays } from "../lib/utils.js";
import { cn } from "../lib/utils.js";

export default function Plan() {
  const { state, dispatch } = useStore();
  const sel = useSelectors();
  const nav = useNavigate();
  const plan = state.plan;
  const [view, setView] = useState("timeline");

  /* NB: tutti gli hook PRIMA di qualsiasi return condizionale (regole degli
     hook di React: un ordine variabile tra render fa perdere il primo click). */
  const todayISO = toISO(today());

  /* --- GIORNI dallo schedule --- */
  const days = useMemo(() => {
    const map = new Map();
    (plan?.schedule || []).forEach((s) => {
      if (!map.has(s.date)) map.set(s.date, { date: s.date, topics: [], special: null });
      const d = map.get(s.date);
      if (s.kind === "studio" && s.topicId) d.topics.push(s.topicId);
      else if (!d.special) d.special = { kind: s.kind, label: s.label };
    });
    return [...map.values()].sort((a, b) => (a.date < b.date ? -1 : 1));
  }, [plan?.schedule]);

  const dayFill = (d) => {
    if (d.topics.length) return Math.round(d.topics.reduce((n, id) => n + sel.mastery(id), 0) / d.topics.length);
    return d.date < todayISO ? 100 : 0;
  };

  const firstIncomplete = days.findIndex((d) => d.topics.length && dayFill(d) < 60);
  const [selIdx, setSelIdx] = useState(firstIncomplete >= 0 ? firstIncomplete : 0);

  const dotRefs = useRef({});
  useEffect(() => {
    if (view !== "timeline") return;
    const el = dotRefs.current[selIdx];
    try { el?.scrollIntoView?.({ behavior: "smooth", block: "center" }); } catch {}
  }, [selIdx, view]);
  useEffect(() => {
    const fi = days.findIndex((d) => d.topics.length && dayFill(d) < 60);
    if (fi >= 0) setSelIdx(fi);
    // eslint-disable-next-line
  }, [sel.overall]);

  const ripassi = useMemo(() => state.todo.map((text) => {
    const t = TOPICS.find((x) => x.title.toLowerCase().includes(text.toLowerCase()) || text.toLowerCase().includes(x.title.toLowerCase().split(" ")[0]));
    return { text, topic: t };
  }), [state.todo]);

  if (!plan) return <div><PageHeader title="Piano di studi" /><Card className="p-8 text-center"><p className="text-text-soft">Completa l'onboarding per generare il piano.</p><Button className="mt-4" onClick={() => nav("/onboarding")}>Crea il piano</Button></Card></div>;

  const book = getBook(plan.bookId);
  const gg = plan.examDate ? Math.max(0, daysBetween(today(), parseDate(plan.examDate))) : plan.horizonDays;
  const studiedDays = days.filter((d) => d.topics.length).length;
  const doneDays = days.filter((d) => d.topics.length && dayFill(d) >= 60).length;

  return (
    <div>
      <PageHeader eyebrow="Il cuore della piattaforma" title="Il tuo piano di studi" helpKey="piano"
        sub={`${gg} giorni alla prova · obiettivo ${plan.goal}% · ${plan.hoursPerDay}h/giorno${book ? ` · ${book.nome}` : ""}. Si adatta al tuo ritmo; dal calendario puoi trascinare gli argomenti.`}
        right={<Button variant="ghost" size="sm" onClick={() => { dispatch({ type: "REMODEL_PLAN" }); toast("Piano rimodellato sui giorni rimasti", { icon: <RefreshCw size={14} /> }); }}><RefreshCw size={15} /> Rimodella</Button>} />

      {plan.remodeledAt === todayISO && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          className="mb-5 rounded-xl2 border border-glow/25 bg-glow/[0.07] px-4 py-3 text-sm text-glow">
          Il piano è stato rimodellato sui giorni che restano: le stelle si sono riordinate.
        </motion.div>
      )}

      {/* selettore vista */}
      <div className="mb-4 inline-flex rounded-full glass p-1">
        {[["timeline", Rows3, "Percorso"], ["calendar", CalendarRange, "Calendario"]].map(([id, Icon, label]) => (
          <button key={id} onClick={() => setView(id)}
            className={cn("relative flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition",
              view === id ? "text-white" : "text-text-soft hover:text-text-hi")}>
            {view === id && <motion.span layoutId="planview" className="absolute inset-0 rounded-full bg-brand-grad" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
            <Icon size={14} className="relative z-10" /><span className="relative z-10">{label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {view === "timeline" ? (
          <motion.div key="tl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            <Timeline days={days} dayFill={dayFill} selIdx={selIdx} setSelIdx={setSelIdx}
              dotRefs={dotRefs} todayISO={todayISO} reviewFrom={plan.reviewFrom} nav={nav} sel={sel}
              doneDays={doneDays} studiedDays={studiedDays} />
          </motion.div>
        ) : (
          <motion.div key="cal" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            <CalendarView days={days} plan={plan} todayISO={todayISO} dispatch={dispatch} nav={nav} sel={sel} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== PROPOSTE DI RIPASSO ===== */}
      <Card className="mt-5 p-5">
        <div className="flex items-center gap-2">
          <RotateCcw size={17} className="text-glow" />
          <h3 className="font-display font-bold text-text-hi">Proposte di ripasso</h3>
          <span className="ml-auto text-xs text-text-mute">dai tuoi «argomenti da rivedere»</span>
        </div>
        {ripassi.length === 0 ? (
          <p className="mt-2 text-sm text-text-mute">Segna nel <button onClick={() => nav("/app/diario")} className="text-glow hover:underline">Diario</button> gli argomenti da rivedere: te li riproporremo qui.</p>
        ) : (
          <div className="mt-3 flex flex-wrap gap-2">
            {ripassi.map((r, i) => (
              <button key={i} onClick={() => r.topic ? nav(`/app/topic/${r.topic.id}`) : nav("/app/quiz")}
                className="inline-flex items-center gap-2 rounded-full border border-glow/30 bg-glow/10 px-3.5 py-1.5 text-sm font-semibold text-glow transition hover:bg-glow/20">
                <Sparkles size={14} /> {r.topic ? r.topic.title : r.text} <ArrowRight size={13} />
              </button>
            ))}
          </div>
        )}
      </Card>

      {/* ===== 3 PERIODI ===== */}
      <h2 className="mb-3 mt-8 font-display text-lg font-bold text-text-hi">I periodi del percorso</h2>
      <div className="grid gap-4 lg:grid-cols-3">
        {plan.periods.map((per, i) => {
          const done = per.topics.filter((id) => sel.mastery(id) >= 60).length;
          const prog = per.topics.length ? Math.round((done / per.topics.length) * 100) : 0;
          return (
            <Card key={per.key} hover className="flex h-full flex-col p-5">
              <div className="flex items-center justify-between">
                <Pill tone="glow">Periodo {i + 1}</Pill>
                <span className="text-xs text-text-mute">{fmtShort(parseDate(per.startDate))} → {fmtShort(parseDate(per.endDate))}</span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Ring value={prog} size={52} stroke={6}><span className="text-[0.65rem] font-bold text-text-hi">{prog}%</span></Ring>
                <h3 className="font-display text-lg font-bold text-text-hi">{per.nome}</h3>
              </div>
              <p className="mt-2 text-sm text-text-soft">{per.desc}</p>
              <div className="mt-3 space-y-1.5">
                {per.topics.map((id) => {
                  const t = getTopic(id); if (!t) return null;
                  const m = sel.mastery(id);
                  return (
                    <button key={id} onClick={() => nav(`/app/topic/${id}`)} className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm hover:bg-fill/5">
                      {m >= 60 ? <CheckCircle2 size={15} className="shrink-0 text-emerald-400" /> : <Circle size={15} className="shrink-0 text-text-mute" />}
                      <span className="flex-1 truncate text-text">{t.title}</span>
                    </button>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>

      {/* side boxes */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Card hover className="p-5">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/12 text-glow"><FileCheck2 size={18} /></div>
          <h3 className="mt-3 font-display font-bold text-text-hi">Q&A sul corso</h3>
          <p className="mt-1 text-sm text-text-soft">Le domande di chi ha già sostenuto l'esame.</p>
          <Button variant="ghost" size="sm" className="mt-3" onClick={() => nav("/app/qa")}>Apri</Button>
        </Card>
        <Card hover className="p-5">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/12 text-accent-500"><Trophy size={18} /></div>
          <h3 className="mt-3 font-display font-bold text-text-hi">Mentore ex studente</h3>
          <p className="mt-1 text-sm text-text-soft">Chi quell'esame l'ha già superato.</p>
          <Button variant="ghost" size="sm" className="mt-3" onClick={() => nav("/app/mentori")}>Trova un mentore</Button>
        </Card>
      </div>
    </div>
  );
}

/* ========================= TIMELINE VERTICALE =========================== */
function specialVisual(kind) {
  if (kind === "simulazione") return { icon: Trophy, cls: "border-accent-400 text-accent-500" };
  if (kind === "verifica") return { icon: Flag, cls: "border-glow text-glow" };
  if (kind === "ripasso") return { icon: Zap, cls: "border-accent-400/70 text-accent-500" };
  return { icon: RotateCcw, cls: "border-glow/70 text-glow" }; // consolidamento
}

function Timeline({ days, dayFill, selIdx, setSelIdx, dotRefs, todayISO, reviewFrom, nav, sel, doneDays, studiedDays }) {
  let sprintShown = false;
  return (
    <Card glass="glass-strong" className="p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <CalendarDays size={18} className="text-glow" />
        <h2 className="font-display text-lg font-bold text-text-hi">Il tuo percorso</h2>
        <span className="ml-auto text-xs text-text-mute">{doneDays}/{studiedDays} giornate padroneggiate</span>
      </div>

      <div className="relative">
        {days.map((d, i) => {
          const fill = dayFill(d);
          const isToday = d.date === todayISO;
          const isSel = i === selIdx;
          const isSpecial = !!d.special && !d.topics.length;
          const past = d.date < todayISO;
          const connectorLit = past || fill >= 60;
          const isFirst = i === 0, isLast = i === days.length - 1;
          const showSprint = reviewFrom && !sprintShown && d.date >= reviewFrom && (sprintShown = true);
          const sv = isSpecial ? specialVisual(d.special.kind) : null;
          return (
            <div key={d.date}>
              {showSprint && (
                <div className="mb-4 mt-2 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-400/50 to-transparent" />
                  <Pill tone="warm"><Zap size={12} /> Ultimo miglio: solo ripasso ed esercizi</Pill>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-400/50 to-transparent" />
                </div>
              )}
              <div ref={(el) => (dotRefs.current[i] = el)} className="relative flex gap-4">
                <div className="relative flex w-16 shrink-0 flex-col items-center">
                  <div className="pointer-events-none absolute left-1/2 w-[3px] -translate-x-1/2 rounded-full"
                    style={{ top: isFirst ? "34px" : 0, bottom: isLast ? "calc(100% - 34px)" : 0, background: connectorLit ? "rgb(var(--c-glow) / 0.55)" : "rgb(var(--c-fill) / 0.12)" }} />
                  <button onClick={() => setSelIdx(i)} className="relative z-10 my-1">
                    <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                      className={cn("grid place-items-center rounded-full transition", isSel && "ring-2 ring-glow ring-offset-2 ring-offset-bg-2")}>
                      {isSpecial ? (
                        <div className={cn("grid h-14 w-14 place-items-center rounded-full border-2 bg-bg-2", sv.cls)}>
                          <sv.icon size={20} />
                        </div>
                      ) : (
                        <div className="rounded-full" style={{ background: `conic-gradient(rgb(var(--c-glow)) ${fill}%, rgb(var(--c-fill) / 0.14) 0)`, width: 56, height: 56, padding: 5 }}>
                          <div className={cn("grid h-full w-full place-items-center rounded-full text-sm font-bold", isToday ? "bg-brand-600 text-white" : "bg-bg-2 text-text-soft")}>
                            {fill >= 100 ? <CheckCircle2 size={22} className="text-glow" /> : fmtShort(parseDate(d.date)).split(" ")[0]}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </button>
                </div>

                <div className="min-w-0 flex-1 pb-5 pt-1.5">
                  <button onClick={() => setSelIdx(i)} className="flex w-full items-center gap-2 text-left">
                    <Pill tone={isToday ? "ok" : "glow"}>{fmtShort(parseDate(d.date))}{isToday ? " · oggi" : ""}</Pill>
                    <span className="truncate text-sm font-semibold text-text-hi">
                      {isSpecial ? d.special.label : d.topics.length ? (d.topics.length > 1 ? `${d.topics.length} argomenti` : getTopic(d.topics[0])?.title) : "Ripasso libero"}
                    </span>
                    {!isSpecial && d.topics.length > 0 && (
                      <motion.span animate={{ rotate: isSel ? 180 : 0 }} className="ml-auto text-text-mute"><ChevronDown size={16} /></motion.span>
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isSel && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }} className="overflow-hidden">
                        <div className="mt-3">
                          {isSpecial ? (
                            d.special.kind === "ripasso" || d.special.kind === "consolidamento" ? (
                              <div className="flex flex-wrap items-center gap-2">
                                <Button size="sm" variant="warm" onClick={() => nav("/app/heatmap")}><Sparkles size={14} /> Sveglia le stelle spente</Button>
                                <Button size="sm" variant="ghost" onClick={() => nav("/app/leitner")}>Schedario errori</Button>
                                <Button size="sm" variant="ghost" onClick={() => nav("/app/quiz")}>Quiz</Button>
                              </div>
                            ) : (
                              <Button onClick={() => nav("/app/quiz")}>{d.special.kind === "simulazione" ? "Avvia la simulazione" : "Fai la verifica"} <ArrowRight size={16} /></Button>
                            )
                          ) : d.topics.length ? (
                            <div className="grid gap-2 sm:grid-cols-2">
                              {d.topics.map((id) => {
                                const t = getTopic(id); if (!t) return null;
                                const m = sel.mastery(id);
                                return (
                                  <button key={id} onClick={() => nav(`/app/topic/${id}`)} className="flex items-center gap-3 rounded-xl2 border border-line/10 bg-fill/[0.03] p-3 text-left transition hover:border-glow/40">
                                    <Ring value={m} size={42} stroke={5}><span className="text-[0.6rem] font-bold text-text-hi">{m}%</span></Ring>
                                    <div className="min-w-0 flex-1"><div className="truncate text-sm font-semibold text-text-hi">{t.title}</div><div className="truncate text-xs text-text-mute">{t.pages ? `p. ${t.pages[0]}-${t.pages[1]}` : t.subtitle}</div></div>
                                    <ArrowRight size={15} className="shrink-0 text-glow" />
                                  </button>
                                );
                              })}
                            </div>
                          ) : (
                            <p className="text-sm text-text-mute">Nessun nuovo argomento: usa questa giornata per ripassare le stelle più fioche nella <button onClick={() => nav("/app/heatmap")} className="text-glow hover:underline">costellazione</button>.</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

/* ================== CALENDARIO CON TRASCINAMENTO (FLIP) ================== */
function CalendarView({ days, plan, todayISO, dispatch, nav, sel }) {
  const byDate = useMemo(() => {
    const m = new Map();
    days.forEach((d) => m.set(d.date, d));
    return m;
  }, [days]);

  // settimane dal lunedì della settimana di inizio fino all'esame
  const weeks = useMemo(() => {
    const first = parseDate(days[0]?.date || todayISO);
    const last = parseDate(days[days.length - 1]?.date || todayISO);
    const start = addDays(first, -((first.getDay() + 6) % 7)); // lunedì
    const out = [];
    let cur = start;
    while (cur <= last) {
      const week = [];
      for (let i = 0; i < 7; i++) { week.push(toISO(cur)); cur = addDays(cur, 1); }
      out.push(week);
    }
    return out.slice(0, 30); // sicurezza per orizzonti lunghissimi
  }, [days, todayISO]);

  const [dragging, setDragging] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

  const onDragEnd = (topicId, info) => {
    setDragging(null); setHoverDate(null);
    try {
      const el = document.elementFromPoint(info.point.x - window.scrollX, info.point.y - window.scrollY);
      const cell = el?.closest?.("[data-caldate]");
      const toDate = cell?.getAttribute("data-caldate");
      if (toDate && toDate >= todayISO) {
        dispatch({ type: "MOVE_TOPIC", topicId, toDate });
        toast(`Spostato al ${fmtShort(parseDate(toDate))}`, { icon: <Hand size={14} /> });
      } else if (toDate) {
        toast("Puoi spostare solo su giorni futuri");
      }
    } catch {}
  };

  const trackHover = (info) => {
    try {
      const el = document.elementFromPoint(info.point.x - window.scrollX, info.point.y - window.scrollY);
      setHoverDate(el?.closest?.("[data-caldate]")?.getAttribute("data-caldate") || null);
    } catch {}
  };

  return (
    // durante il drag la card sale sopra header/sidebar (glass crea stacking context)
    <Card glass="glass-strong" className={cn("p-4 sm:p-5", dragging && "relative z-[60]")}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Hand size={16} className="text-glow" />
        <span className="text-sm text-text-soft">Trascina un argomento su un'altra data: il piano si riordina da solo.</span>
      </div>
      <div className="mb-2 grid grid-cols-7 gap-1.5 text-center">
        {["lun", "mar", "mer", "gio", "ven", "sab", "dom"].map((d) => (
          <div key={d} className="text-[0.62rem] font-bold uppercase tracking-wider text-text-mute">{d}</div>
        ))}
      </div>
      <LayoutGroup>
        <div className="space-y-1.5">
          {weeks.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7 gap-1.5">
              {week.map((date) => {
                const d = byDate.get(date);
                const inPlan = !!d;
                const isToday = date === todayISO;
                const past = date < todayISO;
                const isHover = hoverDate === date && dragging;
                const sprint = plan.reviewFrom && date >= plan.reviewFrom && date < plan.finalSim;
                return (
                  <div key={date} data-caldate={date}
                    className={cn("min-h-[72px] rounded-xl border p-1.5 transition-colors",
                      isHover ? "border-glow bg-glow/15" :
                      isToday ? "border-glow/50 bg-glow/[0.07]" :
                      sprint && inPlan ? "border-accent-400/25 bg-accent-400/[0.05]" :
                      inPlan ? "border-line/10 bg-fill/[0.03]" : "border-line/5 bg-transparent opacity-45",
                      past && "opacity-40")}>
                    <div className={cn("mb-1 text-[0.62rem] font-bold", isToday ? "text-glow" : "text-text-mute")}>
                      {parseDate(date).getDate()}{isToday && " · oggi"}
                    </div>
                    <div className="space-y-1">
                      {d?.topics.map((id) => {
                        const t = getTopic(id); if (!t) return null;
                        const m = sel.mastery(id);
                        return (
                          <motion.div key={id} layoutId={`chip-${id}`}
                            drag={!past} dragSnapToOrigin dragElastic={0.12} dragMomentum={false}
                            onDragStart={() => setDragging(id)}
                            onDrag={(e, info) => trackHover(info)}
                            onDragEnd={(e, info) => onDragEnd(id, info)}
                            whileDrag={{ scale: 1.08, zIndex: 60, boxShadow: "0 18px 40px rgba(20,40,90,0.35)" }}
                            onClick={() => !dragging && nav(`/app/topic/${id}`)}
                            className={cn("cursor-grab select-none truncate rounded-md px-1.5 py-1 text-[0.62rem] font-semibold leading-tight active:cursor-grabbing",
                              m >= 60 ? "bg-emerald-400/15 text-emerald-600 border border-emerald-400/30" : "bg-brand-500/12 text-glow border border-glow/25")}
                            title={t.title}>
                            {t.title}
                          </motion.div>
                        );
                      })}
                      {d?.special && (
                        <div className={cn("truncate rounded-md px-1.5 py-1 text-[0.6rem] font-bold",
                          d.special.kind === "simulazione" ? "bg-accent-500/15 text-accent-600" :
                          d.special.kind === "verifica" ? "bg-glow/12 text-glow" : "bg-accent-400/10 text-accent-500")}>
                          {d.special.kind === "ripasso" ? "solo ripasso" : d.special.kind === "consolidamento" ? "consolidamento" : d.special.label}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </LayoutGroup>
    </Card>
  );
}
