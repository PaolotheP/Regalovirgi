import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Check, X, PartyPopper } from "lucide-react";
import { useStore, useSelectors } from "../lib/store.jsx";
import { Card, Button, Pill } from "../components/ui.jsx";
import { PageHeader } from "./common.jsx";
import { getTopic } from "../data/curriculum.js";

export default function Leitner() {
  const { state, dispatch } = useStore();
  const sel = useSelectors();
  const nav = useNavigate();
  const due = sel.dueLeitner;
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);

  const boxes = useMemo(() => {
    const b = [0, 0, 0, 0, 0];
    state.leitner.cards.forEach((c) => { b[c.box - 1]++; });
    return b;
  }, [state.leitner.cards]);

  const card = due[i];

  function review(correct) {
    dispatch({ type: "REVIEW_LEITNER", id: card.id, correct, remove: correct });
    setFlip(false);
    setI((x) => x + 1);
  }

  return (
    <div>
      <PageHeader eyebrow="Ripetizione spaziata" title="Schedario degli errori"
        sub="Ogni risposta sbagliata diventa una carta che ritorna a intervalli crescenti finché non la padroneggi. Svuota il mazzo." />

      {/* stato scatole */}
      <div className="mb-6 grid grid-cols-5 gap-2">
        {boxes.map((n, k) => (
          <Card key={k} className="p-3 text-center">
            <div className="text-xs text-text-mute">Scatola {k + 1}</div>
            <div className="font-display text-2xl font-bold text-text-hi">{n}</div>
            <div className="text-[0.65rem] text-text-mute">ogni {[1, 2, 4, 8, 16][k]}g</div>
          </Card>
        ))}
      </div>

      {state.leitner.cards.length === 0 ? (
        <Card className="p-10 text-center">
          <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/12 text-glow"><Layers size={26} /></div>
          <h3 className="font-display text-lg font-bold text-text-hi">Il mazzo è vuoto</h3>
          <p className="mx-auto mt-1 max-w-sm text-sm text-text-soft">Quando sbagli una domanda nei quiz, finisce qui e torna al momento giusto per essere ripassata.</p>
          <Button className="mt-4" onClick={() => nav("/app/quiz")}>Vai ai quiz</Button>
        </Card>
      ) : !card ? (
        <Card className="p-10 text-center">
          <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-400/12 text-emerald-500"><PartyPopper size={26} /></div>
          <h3 className="font-display text-lg font-bold text-text-hi">Tutto ripassato per oggi!</h3>
          <p className="mx-auto mt-1 max-w-sm text-sm text-text-soft">Nessuna carta in scadenza. Torna domani o svolgi nuovi quiz.</p>
          <Button className="mt-4" variant="ghost" onClick={() => nav("/app/quiz")}>Nuovi quiz</Button>
        </Card>
      ) : (
        <div className="mx-auto max-w-xl">
          <div className="mb-3 flex items-center justify-between">
            <Pill tone="soft">{i + 1} / {due.length} in scadenza</Pill>
            <Pill tone="glow">Scatola {card.box}</Pill>
          </div>
          <div className="[perspective:1600px]">
            <motion.div className="relative min-h-[220px] cursor-pointer [transform-style:preserve-3d]" onClick={() => setFlip((f) => !f)}
              animate={{ rotateY: flip ? 180 : 0 }} transition={{ duration: 0.5 }}>
              <div className="glass-strong absolute inset-0 rounded-xl3 p-7 [backface-visibility:hidden]">
                <div className="text-[0.68rem] font-bold uppercase tracking-widest text-glow">{getTopic(card.topicId)?.title || "Domanda"}</div>
                <p className="mt-3 font-display text-lg font-semibold text-text-hi">{card.q}</p>
                <div className="absolute bottom-5 right-6 text-xs text-text-mute">tocca per la risposta</div>
              </div>
              <div className="glass-brand absolute inset-0 rounded-xl3 p-7 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="text-[0.68rem] font-bold uppercase tracking-widest text-glow">Risposta corretta</div>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-text-hi">{card.a}</p>
              </div>
            </motion.div>
          </div>
          <AnimatePresence>
            {flip && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex gap-3">
                <Button variant="ghost" className="flex-1 border-rose-400/30 text-rose-500" onClick={() => review(false)}><X size={16} /> Non la sapevo</Button>
                <Button className="flex-1" onClick={() => review(true)}><Check size={16} /> La sapevo</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
