import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, BookOpen, Target } from "lucide-react";
import { CHAPTERS, PARTS, topicsByChapter } from "../data/curriculum.js";
import { currentSubject } from "../lib/subject.js";
const SUBJ = currentSubject();
import { useSelectors } from "../lib/store.jsx";
import { Card, Pill, Progress, Reveal, Modal, Ring, Button } from "../components/ui.jsx";
import { PageHeader, Certified } from "./common.jsx";
import { useLongPress } from "../lib/hooks.js";
import { cn } from "../lib/utils.js";

function TopicCard({ t, m, onOpen, onPeek, i }) {
  const lp = useLongPress(() => onPeek(t));
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.45, delay: (i % 6) * 0.06, ease: [0.2, 0.8, 0.2, 1] }}>
      <Card hover className="flex h-full flex-col p-5"
        onClick={() => { if (!lp.didLongPress()) onOpen(t); }}
        onPointerDown={lp.onPointerDown} onPointerUp={lp.onPointerUp}
        onPointerLeave={lp.onPointerLeave} onPointerCancel={lp.onPointerCancel}>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold leading-snug text-text-hi">{t.title}</h3>
          <ChevronRight size={18} className="mt-0.5 shrink-0 text-glow" />
        </div>
        <p className="mt-1 flex-1 text-sm text-text-soft line-clamp-2">{t.subtitle}</p>
        <div className="mt-3 flex items-center gap-2">
          <Progress value={m} className="flex-1" />
          <span className="text-xs font-semibold text-text-soft">{m}%</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {t.quiz?.length > 0 && <Pill tone="soft">{t.quiz.length} quiz</Pill>}
          {t.flashcards?.length > 0 && <Pill tone="soft">{t.flashcards.length} card</Pill>}
        </div>
      </Card>
    </motion.div>
  );
}

export default function Topics() {
  const nav = useNavigate();
  const sel = useSelectors();
  const [part, setPart] = useState("generale");
  const [peek, setPeek] = useState(null);
  const chapters = CHAPTERS.filter((c) => c.part === part);

  const openTopic = (t) => nav(`/app/topic/${t.id}`);
  const peekText = peek ? String(peek.layers?.essenziale || peek.subtitle || "").replace(/<[^>]+>/g, " ").slice(0, 220) : "";

  return (
    <div>
      <PageHeader eyebrow="Il programma completo" title="Argomenti" helpKey="argomenti"
        sub={`Tutto l'indice di ${SUBJ.nome}, dal compendio dell'editore. Tieni premuta una card per l'anteprima.`}
        right={<Certified />} />

      {PARTS.length > 1 && (
        <div className="mb-6 inline-flex rounded-full glass p-1">
          {PARTS.map(({ key: k, label: l }) => (
            <button key={k} onClick={() => setPart(k)}
              className={cn("relative rounded-full px-5 py-2 text-sm font-semibold transition", part === k ? "text-white" : "text-text-soft hover:text-text-hi")}>
              {part === k && <motion.span layoutId="topicspart" className="absolute inset-0 rounded-full bg-brand-grad" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
              <span className="relative z-10">{l}</span>
            </button>
          ))}
        </div>
      )}

      <div className="space-y-8">
        {chapters.map((ch) => {
          const topics = topicsByChapter(ch.part, ch.n);
          if (!topics.length) return null;
          return (
            <Reveal key={ch.n}>
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500/12 font-display text-sm font-bold text-glow">{ch.n}</div>
                <h2 className="font-display text-lg font-bold text-text-hi">{ch.title}</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {topics.map((t, i) => (
                  <TopicCard key={t.id} t={t} i={i} m={sel.mastery(t.id)} onOpen={openTopic} onPeek={setPeek} />
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* anteprima al tocco prolungato */}
      <Modal open={!!peek} onClose={() => setPeek(null)}>
        {peek && (
          <div>
            <div className="flex items-center gap-3">
              <Ring value={sel.mastery(peek.id)} size={52} stroke={6}>
                <span className="text-[0.65rem] font-bold text-text-hi">{sel.mastery(peek.id)}%</span>
              </Ring>
              <div className="min-w-0">
                <div className="eyebrow">Anteprima</div>
                <h3 className="font-display text-lg font-bold leading-tight text-text-hi">{peek.title}</h3>
              </div>
            </div>
            <p className="mt-3 font-serif text-sm leading-relaxed text-text">{peekText}…</p>
            <div className="mt-4 flex gap-2">
              <Button className="flex-1" size="sm" onClick={() => { setPeek(null); openTopic(peek); }}>
                <BookOpen size={15} /> Apri l'argomento
              </Button>
              {peek.quiz?.length > 0 && (
                <Button variant="ghost" size="sm" onClick={() => { setPeek(null); nav(`/app/quiz/${peek.id}`); }}>
                  <Target size={15} /> Quiz
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
