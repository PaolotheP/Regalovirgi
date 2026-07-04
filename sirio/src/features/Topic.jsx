import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, BookOpen, Star, Sparkles, Lightbulb, Layers as LayersIcon, Map, Mic, Video,
  CheckSquare, SplitSquareVertical, PenLine, Grid3x3, Table, ArrowRight, ArrowLeft, GraduationCap, BadgeCheck, Volume2, VolumeX,
} from "lucide-react";
import { getTopic, TOPICS } from "../data/curriculum.js";
import { useStore, useSelectors } from "../lib/store.jsx";
import { Card, Pill, Ring, Reveal } from "../components/ui.jsx";
import { BackLink, Certified } from "./common.jsx";
import { useSpeaker } from "../lib/hooks.js";
import { cn } from "../lib/utils.js";

const FN_META = {
  mcq: { icon: CheckSquare, label: "Risposta multipla", to: (id) => `/app/quiz/${id}` },
  verofalso: { icon: SplitSquareVertical, label: "Vero / Falso", to: (id) => `/app/verofalso/${id}` },
  aperta: { icon: PenLine, label: "Domande aperte", to: (id) => `/app/aperta/${id}` },
  flashcards: { icon: Grid3x3, label: "Flashcard", to: (id) => `/app/flashcards?t=${id}` },
  mappa: { icon: Map, label: "Mappa concettuale", to: (id) => `/app/mappe?t=${id}` },
  comparativa: { icon: Table, label: "Scheda comparativa", to: (id) => `/app/topic/${id}#comparativa` },
  esempi: { icon: Lightbulb, label: "Esempi pratici", to: (id) => `/app/topic/${id}#esempi` },
  video: { icon: Video, label: "Video lezione", to: (id) => `/app/video?t=${id}` },
  podcast: { icon: Mic, label: "Podcast", to: (id) => `/app/podcast?t=${id}` },
};

export default function Topic() {
  const { id } = useParams();
  const nav = useNavigate();
  const topic = getTopic(id);
  const { state, dispatch } = useStore();
  const sel = useSelectors();

  useEffect(() => {
    if (topic) dispatch({ type: "STUDY_SECTION", topicId: topic.id, section: "spiegazione" });
    // eslint-disable-next-line
  }, [id]);

  if (!topic) return <div><BackLink to="/app/argomenti">Argomenti</BackLink><p className="text-text-soft">Argomento non trovato.</p></div>;

  const mastery = sel.mastery(topic.id);
  const temp = sel.temp(topic.id);

  // argomento precedente/successivo nella sequenza (swipe + frecce)
  const order = TOPICS.findIndex((t) => t.id === topic.id);
  const prev = order > 0 ? TOPICS[order - 1] : null;
  const next = order < TOPICS.length - 1 ? TOPICS[order + 1] : null;
  const onSwipe = (e, info) => {
    if (info.offset.x < -90 && next) nav(`/app/topic/${next.id}`);
    else if (info.offset.x > 90 && prev) nav(`/app/topic/${prev.id}`);
  };

  return (
    <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.12}
      dragDirectionLock onDragEnd={onSwipe} dragMomentum={false}>
      <BackLink to="/app/argomenti">Tutti gli argomenti</BackLink>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Pill tone="glow">{topic.part === "generale" ? "Parte generale" : "Parte speciale"}</Pill>
            <Pill tone="soft">Cap. {topic.chapter} · {topic.chapterTitle}</Pill>
            {topic.articoli?.slice(0, 3).map((a) => <Pill key={a} tone="soft">{a}</Pill>)}
            <Certified />
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-text-hi sm:text-4xl">{topic.title}</h1>
          <p className="mt-2 text-text-soft">{topic.subtitle}</p>
        </div>
        <Card className="flex items-center gap-4 p-4">
          <div className="relative">
            <Ring value={mastery} size={72} stroke={7}><span className="font-display text-lg font-bold text-text-hi">{mastery}%</span></Ring>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-text-hi">Padronanza</div>
            <div className="flex items-center gap-1.5 text-text-mute">
              <Star size={13} className={cn(temp >= 45 ? "fill-accent-400 text-accent-400" : "text-glow")} style={{ opacity: 0.35 + (temp / 100) * 0.65 }} />
              {mastery > 0 ? `${temp}° di luce` : "stella spenta"}
            </div>
          </div>
        </Card>
      </div>

      {/* Funzioni consigliate */}
      <Reveal>
        <Card glass="glass-brand" className="p-5">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-glow/15 text-glow"><Sparkles size={20} /></div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-text-hi">Funzioni consigliate per questo argomento</h3>
                <BadgeCheck size={16} className="text-glow" />
              </div>
              <p className="mt-1 text-sm text-text-soft">
                Per come si apprende «{topic.title}», l'editore consiglia di partire da queste funzioni.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(topic.consigliate || ["mcq", "flashcards"]).map((k) => {
                  const m = FN_META[k]; if (!m) return null;
                  return (
                    <button key={k} onClick={() => nav(m.to(topic.id))}
                      className="inline-flex items-center gap-2 rounded-full border border-glow/30 bg-glow/10 px-3.5 py-1.5 text-sm font-semibold text-glow transition hover:bg-glow/20">
                      <m.icon size={15} /> {m.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>
      </Reveal>

      {/* Lettura a strati */}
      <LayeredReading topic={topic} goal={state.profile.goal} />

      {/* Sintesi / punti chiave */}
      <Section icon={Star} title="Punti chiave" sub="L'essenziale certificato dalla redazione">
        <Card className="p-5">
          <ul className="space-y-2.5">
            {topic.sintesi.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-brand-grad text-xs font-bold text-white">{i + 1}</span>
                <span className="pt-0.5 text-sm text-text">{s}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* Scheda comparativa */}
      {topic.comparativa && (
        <Section icon={Table} title="Scheda comparativa" sub="Per non confondere gli istituti" anchor="comparativa">
          <Comparativa data={topic.comparativa} />
        </Section>
      )}

      {/* Esempi */}
      {topic.esempi?.length > 0 && (
        <Section icon={Lightbulb} title="Esempi pratici" anchor="esempi">
          <div className="grid gap-4 md:grid-cols-2">
            {topic.esempi.map((e, i) => (
              <Card key={i} className="p-5">
                <div className="mb-2 flex items-center gap-2 text-glow"><Lightbulb size={16} /><span className="font-display font-bold">{e.titolo}</span></div>
                <p className="text-sm leading-relaxed text-text" dangerouslySetInnerHTML={{ __html: e.testo }} />
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* Contenuti extra */}
      <Section icon={LayersIcon} title="Contenuti extra" sub="Podcast, video e mappa di questo argomento">
        <div className="grid gap-4 sm:grid-cols-3">
          {topic.media?.podcast && <ExtraCard icon={Mic} title="Podcast" desc={topic.media.podcast.title} onClick={() => nav(`/app/podcast?t=${topic.id}`)} />}
          {topic.media?.video && <ExtraCard icon={Video} title="Video lezione" desc={topic.media.video.title} onClick={() => nav(`/app/video?t=${topic.id}`)} />}
          {topic.media?.mappa && <ExtraCard icon={Map} title="Mappa concettuale" desc="Il quadro d'insieme" onClick={() => nav(`/app/mappe?t=${topic.id}`)} />}
        </div>
      </Section>

      {/* Esercitazione */}
      <Section icon={GraduationCap} title="Esercitazione" sub="Verifica la tua preparazione">
        <div className="grid gap-3 sm:grid-cols-2">
          {topic.quiz?.length > 0 && <ToolCard icon={CheckSquare} title="Risposta multipla" desc={`${topic.quiz.length} domande con correzione e fonte`} onClick={() => nav(`/app/quiz/${topic.id}`)} />}
          {topic.veroFalso?.length > 0 && <ToolCard icon={SplitSquareVertical} title="Vero / Falso argomentato" desc="Scegli e confronta la motivazione" onClick={() => nav(`/app/verofalso/${topic.id}`)} />}
          {topic.aperta && <ToolCard icon={PenLine} title="Domanda aperta" desc="Traccia di risposta certificata" onClick={() => nav(`/app/aperta/${topic.id}`)} />}
          {topic.flashcards?.length > 0 && <ToolCard icon={Grid3x3} title="Flashcard" desc={`${topic.flashcards.length} carte fronte/retro`} onClick={() => nav(`/app/flashcards?t=${topic.id}`)} />}
        </div>
      </Section>

      {/* viaggio: argomento precedente / successivo (anche con swipe) */}
      <div className="mt-10 flex items-stretch gap-3">
        {prev ? (
          <Card hover onClick={() => nav(`/app/topic/${prev.id}`)} className="flex flex-1 items-center gap-3 p-4">
            <ArrowLeft size={18} className="shrink-0 text-glow" />
            <div className="min-w-0 text-left">
              <div className="text-[0.62rem] font-bold uppercase tracking-wider text-text-mute">precedente</div>
              <div className="truncate text-sm font-semibold text-text-hi">{prev.title}</div>
            </div>
          </Card>
        ) : <div className="flex-1" />}
        {next ? (
          <Card hover onClick={() => nav(`/app/topic/${next.id}`)} className="flex flex-1 items-center justify-end gap-3 p-4 text-right">
            <div className="min-w-0">
              <div className="text-[0.62rem] font-bold uppercase tracking-wider text-text-mute">successivo</div>
              <div className="truncate text-sm font-semibold text-text-hi">{next.title}</div>
            </div>
            <ArrowRight size={18} className="shrink-0 text-glow" />
          </Card>
        ) : <div className="flex-1" />}
      </div>
      <p className="mt-2 text-center text-[0.65rem] italic text-text-mute">puoi anche scorrere lateralmente per cambiare argomento</p>
    </motion.div>
  );
}

function LayeredReading({ topic, goal }) {
  const { state } = useStore();
  const { speaking, toggle } = useSpeaker();
  // densità iniziale in base all'obiettivo
  const startOpen = goal >= 95 ? ["appr", "giur", "ecc"] : goal >= 80 ? ["appr"] : [];
  return (
    <Section icon={BookOpen} title="Spiegazione" sub="Lettura a strati: apri i livelli che ti servono"
      action={state.a11y.audioFirst && (
        <button onClick={() => toggle(topic.title + ". " + topic.layers.essenziale)}
          className={cn("flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-sm font-semibold transition",
            speaking ? "text-accent-500 animate-pulseWarm" : "text-text-soft hover:text-glow")}>
          {speaking ? <><VolumeX size={15} /> Ferma</> : <><Volume2 size={15} /> Ascolta</>}
        </button>
      )}>
      <Card className="p-6">
        <p className="prose-nplus text-[1.02rem] leading-relaxed" dangerouslySetInnerHTML={{ __html: topic.layers.essenziale }} />
        <div className="mt-4 space-y-2">
          {topic.layers.approfondimenti?.length > 0 && <LayerGroup id="appr" label="Approfondimenti" tone="brand" items={topic.layers.approfondimenti} defOpen={startOpen.includes("appr")} />}
          {topic.layers.giurisprudenza?.length > 0 && <LayerGroup id="giur" label="Giurisprudenza" tone="glow" items={topic.layers.giurisprudenza} defOpen={startOpen.includes("giur")} />}
          {topic.layers.eccezioni?.length > 0 && <LayerGroup id="ecc" label="Eccezioni e casi limite" tone="warn" items={topic.layers.eccezioni} defOpen={startOpen.includes("ecc")} />}
        </div>
      </Card>
    </Section>
  );
}

function LayerGroup({ label, items, tone, defOpen }) {
  const [open, setOpen] = useState(defOpen);
  const toneCls = { brand: "text-brand-500 border-brand-400/25 bg-brand-500/[0.07]", glow: "text-glow border-glow/25 bg-glow/[0.06]", warn: "text-accent-600 border-accent-400/25 bg-accent-400/[0.07]" }[tone];
  return (
    <div className={cn("rounded-xl2 border", toneCls)}>
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between px-4 py-3 text-left">
        <span className="text-sm font-bold">{label} <span className="opacity-60">· {items.length}</span></span>
        <ChevronDown size={18} className={cn("transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="space-y-3 px-4 pb-4">
              {items.map((it, i) => (
                <div key={i}>
                  <div className="text-sm font-semibold text-text-hi">{it.label}</div>
                  <p className="mt-0.5 text-sm leading-relaxed text-text-soft" dangerouslySetInnerHTML={{ __html: it.body }} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Comparativa({ data }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="grid grid-cols-3 gap-px bg-fill/5 text-sm">
        <div className="bg-bg-2/60 px-4 py-3 font-display font-bold text-text-mute">{data.titolo}</div>
        <div className="bg-brand-500/10 px-4 py-3 font-display font-bold text-brand-500">{data.a}</div>
        <div className="bg-glow/10 px-4 py-3 font-display font-bold text-glow">{data.b}</div>
        {data.righe.map((r, i) => (
          <div key={i} className="contents">
            <div className="bg-bg-2/40 px-4 py-3 font-semibold text-text-soft">{r.profilo}</div>
            <div className="bg-fill/[0.02] px-4 py-3 text-text">{r.a}</div>
            <div className="bg-fill/[0.02] px-4 py-3 text-text">{r.b}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Section({ icon: Icon, title, sub, children, anchor, action }) {
  return (
    <section id={anchor} className="scroll-mt-24">
      <div className="mb-4 mt-8 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/12 text-glow"><Icon size={20} /></div>
        <div className="flex-1"><h2 className="font-display text-xl font-bold text-text-hi">{title}</h2>{sub && <p className="text-sm text-text-soft">{sub}</p>}</div>
        {action}
      </div>
      {children}
    </section>
  );
}

function ExtraCard({ icon: Icon, title, desc, onClick }) {
  return (
    <Card hover onClick={onClick} className="flex items-center gap-3 p-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/12 text-glow"><Icon size={20} /></div>
      <div className="min-w-0"><div className="font-semibold text-text-hi">{title}</div><div className="truncate text-xs text-text-soft">{desc}</div></div>
      <ArrowRight size={16} className="ml-auto shrink-0 text-glow" />
    </Card>
  );
}
function ToolCard({ icon: Icon, title, desc, onClick }) {
  return (
    <Card hover onClick={onClick} className="flex items-center gap-3 p-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/12 text-glow"><Icon size={20} /></div>
      <div className="min-w-0 flex-1"><div className="font-semibold text-text-hi">{title}</div><div className="text-xs text-text-soft">{desc}</div></div>
      <ArrowRight size={16} className="shrink-0 text-glow" />
    </Card>
  );
}
