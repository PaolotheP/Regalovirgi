import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, BookMarked, Plus, Sparkles } from "lucide-react";
import { TOPICS, getTopic } from "../data/curriculum.js";
import { useStore } from "../lib/store.jsx";
import { Card, Button, Pill, Textarea, toast } from "../components/ui.jsx";
import { PageHeader, BackLink } from "./common.jsx";
import GlassLock from "../components/GlassLock.jsx";
import { cn } from "../lib/utils.js";

function TopicPicker({ kind, title, sub, filter }) {
  const nav = useNavigate();
  const list = TOPICS.filter(filter);
  return (
    <div>
      <PageHeader eyebrow="Esercitazione" title={title} sub={sub} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t) => (
          <Card key={t.id} hover onClick={() => nav(`/app/${kind}/${t.id}`)} className="p-5">
            <Pill tone="soft">{t.part === "generale" ? "Parte generale" : "Parte speciale"}</Pill>
            <h3 className="mt-3 font-display text-lg font-bold text-text-hi">{t.title}</h3>
            <p className="mt-1 text-sm text-text-soft line-clamp-2">{t.subtitle}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ VERO / FALSO --------------------------- */
export function VeroFalsoHub() {
  return <TopicPicker kind="verofalso" title="Vero / Falso argomentato" filter={(t) => t.veroFalso?.length}
    sub="Non basta scegliere: bisogna sostenere il perché. Scegli, confronta con la traccia attesa e — con il piano superiore — fatti valutare la motivazione." />;
}

export function VeroFalsoRun() {
  const { id } = useParams();
  const topic = getTopic(id);
  const { dispatch } = useStore();
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState(null);
  const list = topic?.veroFalso || [];
  const vf = list[idx];
  if (!topic || !vf) return <div><BackLink to="/app/verofalso">Scegli argomento</BackLink></div>;

  const answered = chosen !== null;
  const correct = chosen === vf.vero;

  function choose(val) {
    if (answered) return;
    setChosen(val);
    dispatch({ type: "RECORD_QUIZ", topicId: topic.id, correct: val === vf.vero ? 1 : 0, total: 1, mode: "verofalso",
      wrongCards: val === vf.vero ? [] : [{ key: topic.id + ":vf" + idx, q: vf.aff, a: (vf.vero ? "Vero" : "Falso") + " — " + vf.traccia.slice(0, 80) }] });
  }
  function next() { if (idx === list.length - 1) { toast("Serie completata"); } else { setIdx(idx + 1); setChosen(null); } }

  return (
    <div className="mx-auto max-w-2xl">
      <BackLink to="/app/verofalso">Scegli argomento</BackLink>
      <Pill tone="soft" className="mb-3">Affermazione {idx + 1} / {list.length} · {topic.title}</Pill>
      <Card glass="glass-strong" className="p-6">
        <h2 className="font-display text-xl font-bold leading-snug text-text-hi">{vf.aff}</h2>
        <div className="mt-5 flex gap-3">
          {[true, false].map((v) => (
            <button key={String(v)} disabled={answered} onClick={() => choose(v)}
              className={cn("flex-1 rounded-xl2 border px-4 py-3.5 font-display text-lg font-bold transition-all",
                !answered && "border-line/10 bg-fill/[0.03] hover:border-glow/50",
                answered && v === vf.vero && "border-emerald-400/60 bg-emerald-400/10 text-emerald-500",
                answered && v === chosen && v !== vf.vero && "border-rose-400/60 bg-rose-400/10 text-rose-500",
                answered && v !== vf.vero && v !== chosen && "opacity-50")}>
              {v ? "Vero" : "Falso"}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {answered && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 space-y-4">
              <Pill tone={correct ? "ok" : "err"}>
                {correct ? <><Check size={13} /> Corretto</> : <><X size={13} /> La risposta esatta è «{vf.vero ? "Vero" : "Falso"}»</>}
              </Pill>
              <div className="rounded-xl2 border-l-2 border-glow bg-fill/[0.03] p-4">
                <div className="mb-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-glow">Traccia attesa</div>
                <p className="text-sm leading-relaxed text-text">{vf.traccia}</p>
              </div>
              <div>
                <div className="mb-2 text-sm font-semibold text-text-hi">Vuoi che l'AI valuti la tua motivazione?</div>
                <GlassLock title="Correzione AI della motivazione" desc="Scrivi il tuo ragionamento e l'AI lo confronta con la traccia, segnalando le sfumature." compact>
                  <Textarea placeholder="Scrivi qui la tua motivazione, come faresti a voce all'esame…" rows={3} />
                  <div className="mt-2 text-xs text-text-mute">Valutazione: struttura · esattezza · completezza</div>
                </GlassLock>
              </div>
              <Button className="w-full" onClick={next}>{idx === list.length - 1 ? "Concludi" : <>Prossima affermazione <ArrowRight size={16} /></>}</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}

/* ------------------------------ DOMANDE APERTE ------------------------- */
export function ApertaHub() {
  return <TopicPicker kind="aperta" title="Domande aperte" filter={(t) => t.aperta}
    sub="Rispondi come all'orale e confronta con la traccia certificata. La correzione avanzata con AI è nel piano superiore." />;
}

export function ApertaRun() {
  const { id } = useParams();
  const topic = getTopic(id);
  const { state, dispatch } = useStore();
  const [shown, setShown] = useState(false);
  const [oralText, setOralText] = useState("");
  if (!topic?.aperta) return <div><BackLink to="/app/aperta">Scegli argomento</BackLink></div>;
  const da = topic.aperta;

  return (
    <div className="mx-auto max-w-2xl">
      <BackLink to="/app/aperta">Scegli argomento</BackLink>
      <Pill tone="soft" className="mb-3">{topic.title}</Pill>
      <Card glass="glass-strong" className="p-6">
        <h2 className="font-display text-xl font-bold leading-snug text-text-hi">{da.q}</h2>
        <Textarea className="mt-4" placeholder="Esponi l'istituto in modo disteso e ordinato…" rows={6} />
        <div className="mt-3 flex flex-wrap gap-2">
          <Button onClick={() => { setShown(true); dispatch({ type: "STUDY_SECTION", topicId: topic.id, section: "aperta" }); }}>Mostra la traccia certificata</Button>
        </div>
        <AnimatePresence>
          {shown && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 space-y-4">
              <div className="rounded-xl2 border-l-2 border-glow bg-fill/[0.03] p-4">
                <div className="mb-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-glow">Traccia di risposta certificata</div>
                <p className="text-sm leading-relaxed text-text">{da.traccia}</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-glow"><BookMarked size={13} /> {da.fonte}</div>
              </div>
              <GlassLock title="Correzione AI della tua risposta" desc="Punteggio su struttura, fondamento normativo, completezza e chiarezza, con i punti mancanti." compact>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {["Struttura", "Fondamento normativo", "Completezza", "Chiarezza"].map((v) => (
                    <div key={v} className="flex items-center justify-between rounded-lg bg-fill/5 px-3 py-2"><span className="text-text-soft">{v}</span><span className="font-bold text-glow">8.0</span></div>
                  ))}
                </div>
              </GlassLock>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Aggiungi una domanda uscita al tuo orale */}
      <Card className="mt-4 p-5">
        <div className="flex items-center gap-2"><Sparkles size={16} className="text-glow" /><h3 className="font-display font-bold text-text-hi">Hai già sostenuto questo esame?</h3></div>
        <p className="mt-1 text-sm text-text-soft">Aggiungi una domanda che ti è stata posta davvero all'orale: aiuterà chi preparerà la prova dopo di te.</p>
        <div className="mt-3 flex gap-2">
          <input value={oralText} onChange={(e) => setOralText(e.target.value)} placeholder="Scrivi la domanda uscita al tuo orale…"
            className="flex-1 rounded-xl bg-fill/[0.04] border border-line/10 px-4 py-2.5 text-text-hi placeholder:text-text-mute outline-none focus:border-brand-400" />
          <Button onClick={() => { if (oralText.trim()) { dispatch({ type: "ADD_ORAL", text: oralText.trim() }); setOralText(""); toast("Domanda aggiunta"); } }}><Plus size={16} /> Aggiungi</Button>
        </div>
        {state.oral.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {state.oral.map((o, i) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full border border-line/10 bg-fill/5 px-3 py-1.5 text-sm">
                {o}<button onClick={() => dispatch({ type: "REMOVE_ORAL", index: i })} className="text-text-mute hover:text-rose-400"><X size={14} /></button>
              </span>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
