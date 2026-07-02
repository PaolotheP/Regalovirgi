import { useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Shuffle, RotateCcw } from "lucide-react";
import { TOPICS, getTopic } from "../data/curriculum.js";
import { Button, Pill } from "../components/ui.jsx";
import { PageHeader } from "./common.jsx";
import { shuffle } from "../lib/utils.js";

export default function Flashcards() {
  const [sp] = useSearchParams();
  const nav = useNavigate();
  const tid = sp.get("t");
  const [order, setOrder] = useState(0);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);

  const cards = useMemo(() => {
    let base = [];
    const src = tid ? TOPICS.filter((t) => t.id === tid) : TOPICS;
    src.forEach((t) => (t.flashcards || []).forEach((f) => base.push({ topic: t.title, front: f[0], back: f[1] })));
    return order ? shuffle(base, order) : base;
  }, [tid, order]);

  const c = cards[i];
  const topic = tid ? getTopic(tid) : null;
  const go = (d) => { setFlip(false); setI((x) => (x + d + cards.length) % cards.length); };

  if (!cards.length) return <div><PageHeader title="Flashcard" /><p className="text-text-soft">Nessuna flashcard.</p></div>;

  return (
    <div>
      <PageHeader eyebrow="Sintesi e memoria" title="Flashcard"
        sub={topic ? `Argomento: ${topic.title}` : "Recupero attivo su tutti gli argomenti. Tocca la carta per girarla."}
        right={<div className="flex gap-2">
          <Button size="sm" variant="ghost" onClick={() => { setOrder((o) => o + 1); setI(0); setFlip(false); }}><Shuffle size={15} /> Mescola</Button>
          {tid && <Button size="sm" variant="ghost" onClick={() => nav("/app/flashcards")}>Tutte</Button>}
        </div>} />

      <div className="mx-auto max-w-xl">
        <div className="mb-3 flex items-center justify-between">
          <Pill tone="soft">{i + 1} / {cards.length}</Pill>
          <Pill tone="glow">{c.topic}</Pill>
        </div>
        <div className="[perspective:1600px]">
          <motion.div className="relative min-h-[260px] cursor-pointer [transform-style:preserve-3d]" onClick={() => setFlip((f) => !f)}
            animate={{ rotateY: flip ? 180 : 0 }} transition={{ duration: 0.55 }}>
            <div className="glass-strong absolute inset-0 grid content-center rounded-xl3 p-8 [backface-visibility:hidden]">
              <div className="text-[0.68rem] font-bold uppercase tracking-widest text-glow">Fronte</div>
              <p className="mt-3 font-display text-xl font-semibold text-text-hi">{c.front}</p>
              <div className="absolute bottom-5 right-6 text-xs text-text-mute">tocca per girare</div>
            </div>
            <div className="glass-brand absolute inset-0 grid content-center rounded-xl3 p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="text-[0.68rem] font-bold uppercase tracking-widest text-glow">Retro</div>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-text-hi">{c.back}</p>
            </div>
          </motion.div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => go(-1)}><ChevronLeft size={18} /> Precedente</Button>
          <button onClick={() => setFlip((f) => !f)} className="text-sm text-text-soft hover:text-glow"><RotateCcw size={15} className="mr-1 inline" /> gira</button>
          <Button variant="ghost" onClick={() => go(1)}>Successiva <ChevronRight size={18} /></Button>
        </div>
      </div>
    </div>
  );
}
