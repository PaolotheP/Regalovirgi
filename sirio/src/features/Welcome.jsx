import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CalendarRange, Trophy, Flame, Layers, Target, BookOpen, Users, GitBranch, Brain, Gauge,
  Grid3x3, Map, ArrowRight, ShieldCheck, Anchor, Zap,
} from "lucide-react";
import Background from "../components/Background.jsx";
import { Logo } from "../components/Logo.jsx";
import { useStore } from "../lib/store.jsx";
import { Button, Modal, Pill } from "../components/ui.jsx";

const FEATURES = [
  { icon: CalendarRange, name: "Piano di studi", desc: "Un percorso su misura che si rimodella da solo se salti dei giorni." },
  { icon: Flame, name: "La costellazione", desc: "Ogni argomento è una stella: si accende quando lo padroneggi, sbiadisce se non ripassi." },
  { icon: Gauge, name: "Scommessa sulla risposta", desc: "Punta quanto sei sicuro: alleni la calibrazione, non solo la memoria." },
  { icon: Layers, name: "Schedario Leitner degli errori", desc: "Ogni errore torna a intervalli crescenti finché non lo padroneggi." },
  { icon: Target, name: "Lettura a strati", desc: "Apri solo la densità che ti serve: essenziale, poi esempi e giurisprudenza." },
  { icon: Trophy, name: "La Classifica", desc: "Dove sei rispetto agli altri candidati, con modalità anonima." },
  { icon: Users, name: "Gruppi di coorte", desc: "Chi prepara il tuo stesso esame, con avanzamento condiviso." },
  { icon: GitBranch, name: "Il Gemello del Promosso", desc: "La traiettoria reale di chi ce l'ha fatta partendo come te." },
  { icon: BookOpen, name: "Schede comparative", desc: "Gli istituti che si confondono, messi a confronto colonna per colonna." },
  { icon: Grid3x3, name: "Flashcard", desc: "Recupero attivo, fronte e retro, su tutti gli argomenti." },
  { icon: Map, name: "Mappe concettuali", desc: "Il quadro d'insieme prima del dettaglio." },
  { icon: Brain, name: "Tutor & Esaminatore AI", desc: "Assistenza sui contenuti certificati (nei piani superiori)." },
];

export default function Welcome() {
  const nav = useNavigate();
  const { state } = useStore();
  const [demo, setDemo] = useState(null);
  const start = () => nav(state.onboarded ? "/app" : "/onboarding");

  const colA = FEATURES.slice(0, 6);
  const colB = FEATURES.slice(6);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Logo />
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => nav("/pricing")}>Vedi i piani</Button>
          <Button size="sm" onClick={start}>{state.onboarded ? "Riprendi" : "Inizia"} <ArrowRight size={15} /></Button>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 lg:grid-cols-2 lg:py-16">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Pill tone="glow"><span className="font-display text-base font-extrabold leading-none">β</span></Pill>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-text-hi sm:text-6xl">
              <span className="text-gradient">Sirio</span>. La piattaforma che guida all'apprendimento.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-text-soft">
              Il tuo esame è un cielo: ogni argomento una stella da accendere. Un corso completo e guidato di Neldiritto che si adatta al tuo tempo, giorno per giorno, fino alla prova.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={start}>{state.onboarded ? "Riprendi il percorso" : "Crea il tuo piano di studi personalizzato"} <ArrowRight size={18} /></Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-text-soft">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-glow" /> Materiali certificati</span>
              <span className="inline-flex items-center gap-2"><Anchor size={16} className="text-glow" /> Ancorato alle fonti</span>
              <span className="inline-flex items-center gap-2"><Zap size={16} className="text-glow" /> Adattivo al tuo ritmo</span>
            </div>
          </motion.div>
        </div>

        {/* colonne animate delle funzioni */}
        <div className="relative hidden h-[520px] gap-4 overflow-hidden lg:grid lg:grid-cols-2 mask-fade-b">
          <MarqueeCol items={colA} onDemo={setDemo} speed={26} />
          <MarqueeCol items={colB} onDemo={setDemo} speed={32} reverse />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-bg to-transparent" />
        </div>
      </section>

      {/* spirito */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            [ShieldCheck, "Materiali certificati", "Con materiali certificati dall'editore e da professori universitari."],
            [Target, "Costruito per apprendere", "Ripetizione spaziata, calibrazione, lettura a strati: le tecniche che funzionano davvero."],
            [Users, "Non sei solo", "Coorti, mentori e stanze di co-studio: la community che ti tiene in carreggiata."],
          ].map(([Icon, t, d], i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass rounded-xl3 p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/12 text-glow"><Icon size={22} /></div>
              <h3 className="mt-4 font-display text-lg font-bold text-text-hi">{t}</h3>
              <p className="mt-1.5 text-sm text-text-soft">{d}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button size="lg" onClick={start}>Inizia ora <ArrowRight size={18} /></Button>
        </div>
      </section>

      <Modal open={!!demo} onClose={() => setDemo(null)}>
        {demo && (
          <div>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-grad text-white"><demo.icon size={26} /></div>
            <h3 className="mt-4 font-display text-2xl font-bold text-text-hi">{demo.name}</h3>
            <p className="mt-2 text-text-soft">{demo.desc}</p>
            <div className="mt-4 rounded-xl2 glass p-4 text-sm text-text-mute">
              Anteprima della funzione. Crea il tuo piano per provarla dal vivo dentro la piattaforma.
            </div>
            <div className="mt-5 flex gap-2">
              <Button className="flex-1" onClick={start}>Provala davvero <ArrowRight size={16} /></Button>
              <Button variant="ghost" onClick={() => setDemo(null)}>Torna indietro</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

function MarqueeCol({ items, onDemo, speed, reverse }) {
  const loop = [...items, ...items];
  return (
    <div className="relative">
      <motion.div className="flex flex-col gap-4" initial={{ y: reverse ? "-50%" : "0%" }}
        animate={{ y: reverse ? "0%" : "-50%" }} transition={{ duration: speed, ease: "linear", repeat: Infinity }}>
        {loop.map((f, i) => (
          <div key={i} className="glass rounded-xl2 p-4">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/12 text-glow"><f.icon size={17} /></div>
              <div className="font-display text-sm font-bold text-text-hi">{f.name}</div>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-text-soft">{f.desc}</p>
            <button onClick={() => onDemo(f)} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-glow hover:underline">
              Prova <ArrowRight size={12} />
            </button>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
