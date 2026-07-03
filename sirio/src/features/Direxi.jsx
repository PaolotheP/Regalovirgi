import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowLeft, X, CalendarRange, BookOpen, Target, Star, Layers, Grid3x3,
  Mic, UsersRound, GraduationCap, Zap, Brain, Sparkles, CheckCircle2, Sun,
} from "lucide-react";
import { useStore } from "../lib/store.jsx";
import { clamp } from "../lib/utils.js";

/* Avvia il tour da qualunque punto (pulsante "?" nella topbar). */
export function startTour() {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("sirio-tour"));
}

/* ------------------------- Mascotte "Direxi" --------------------------- */
/* Piccola stella-compagna di Sirio: corpo a quattro punte in vetro blu,
   viso luminoso, guance ambrate. Fluttua, pensa (bagliore) e festeggia.
   Esportata: la usa anche il compagno d'angolo. */
export function DirexiStar({ mood = "hi", size = 92, thinking = false }) {
  return (
    <motion.svg width={size} height={size} viewBox="0 0 120 120"
      className="shrink-0 drop-shadow-[0_10px_26px_rgba(78,165,255,0.5)]"
      animate={{ y: [0, -6, 0], rotate: mood === "cheer" ? [0, -6, 6, 0] : [-2, 2, -2] }}
      transition={{ duration: mood === "cheer" ? 1.6 : 4, repeat: Infinity, ease: "easeInOut" }}>
      <defs>
        <linearGradient id="dx-star" x1="20" y1="16" x2="100" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#bfe4ff" /><stop offset="0.5" stopColor="#3f8cff" /><stop offset="1" stopColor="#16307e" />
        </linearGradient>
        <radialGradient id="dx-face" cx="0.5" cy="0.44" r="0.62">
          <stop offset="0" stopColor="#ffffff" /><stop offset="0.75" stopColor="#cfe8ff" /><stop offset="1" stopColor="#8ec4ff" />
        </radialGradient>
      </defs>
      {/* alone (più forte quando "pensa") */}
      <motion.circle cx="60" cy="62" r="46" fill="#4ea5ff"
        animate={{ opacity: thinking ? [0.14, 0.3, 0.14] : 0.14 }}
        transition={{ duration: 1.4, repeat: thinking ? Infinity : 0 }} />
      {/* corpo a stella (4 punte morbide) */}
      <path fill="url(#dx-star)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4"
        d="M60 6 C64.5 40 70.5 48 112 62 C70.5 76 64.5 84 60 118 C55.5 84 49.5 76 8 62 C49.5 48 55.5 40 60 6 Z" />
      {/* viso luminoso */}
      <circle cx="60" cy="62" r="21" fill="url(#dx-face)" />
      {/* occhi */}
      <circle cx="53.5" cy="59" r="3.6" fill="#0a1330" />
      <circle cx="66.5" cy="59" r="3.6" fill="#0a1330" />
      <circle cx="54.6" cy="57.9" r="1.2" fill="#fff" />
      <circle cx="67.6" cy="57.9" r="1.2" fill="#fff" />
      {/* bocca */}
      <path d={mood === "cheer" ? "M52 67 q8 9 16 0" : mood === "point" ? "M54 68.5 q6 4 12 1" : "M53 68 q7 6 14 0"}
        fill="none" stroke="#0a1330" strokeWidth="2.3" strokeLinecap="round" />
      {/* guance ambrate */}
      <circle cx="46.5" cy="65" r="2.8" fill="#ff9a45" opacity="0.55" />
      <circle cx="73.5" cy="65" r="2.8" fill="#ff9a45" opacity="0.55" />
      {/* scintille compagne */}
      <motion.circle cx="97" cy="26" r="2.6" fill="#ffd7a8"
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.2, repeat: Infinity }} />
      <motion.circle cx="22" cy="32" r="2" fill="#bfe6ff"
        animate={{ opacity: [1, 0.35, 1] }} transition={{ duration: 2.8, repeat: Infinity }} />
    </motion.svg>
  );
}
const Direxi = DirexiStar;

const STEPS = [
  { target: null, icon: Sparkles, mood: "hi", title: "Ciao, sono Direxi ✨",
    text: "Sono la tua stella-compagna su Sirio. Vivo nell'angolo dello schermo: quando hai un dubbio su una funzione, tocca il «?» e te la spiego. Ora ti mostro il cielo, funzione per funzione. Partiamo dal cuore di tutto: il piano." },
  { target: "materia", icon: BookOpen, mood: "point", title: "La tua materia",
    text: "Qui vedi la materia che stai preparando. Ogni materia è una costellazione a sé: piano, stelle e progressi restano separati. Con «Cambia» passi all'altro cielo quando vuoi — al ritorno ritrovi tutto come l'avevi lasciato." },
  { target: "piano", icon: CalendarRange, mood: "point", title: "Il tuo Piano di studi",
    text: "È il centro della piattaforma: distribuisce gli argomenti sui giorni che ti separano dall'esame, in proporzione alle pagine dell'indice, e riserva gli ultimi giorni al solo ripasso. Se salti dei giorni si rimodella da solo, e dal calendario puoi trascinare gli argomenti dove preferisci." },
  { target: "heatmap", icon: Star, mood: "point", title: "La tua costellazione",
    text: "Ogni argomento è una stella: si accende quando lo padroneggi e perde luce nei giorni senza ripasso, come la memoria. Il cielo ti mostra a colpo d'occhio dove sei forte e cosa si sta spegnendo: il pulsante «Sveglia le stelle spente» avvia il ripasso mirato." },
  { target: "argomenti", icon: BookOpen, mood: "point", title: "Studiare un argomento",
    text: "Ogni argomento usa la Lettura a strati: parti dall'essenziale e apri solo la densità che ti serve — approfondimenti, giurisprudenza, esempi concreti. Così leggi sempre al livello giusto per il tuo obiettivo, senza disperderti." },
  { target: "quiz", icon: Target, mood: "point", title: "Quiz e Scommessa",
    text: "Prima di rispondere, punta quanto sei sicuro. Il punteggio premia chi è preparato E ben calibrato: imparerai a fidarti di te al punto giusto, che è esattamente ciò che serve all'orale. Ogni errore diventa una carta da ripassare." },
  { target: "leitner", icon: Layers, mood: "point", title: "Schedario degli errori",
    text: "Ogni risposta sbagliata torna a intervalli crescenti (metodo Leitner a 5 scatole), finché non la padroneggi davvero. Svuota il mazzo e non ripeterai lo stesso errore all'esame." },
  { target: "flashcards", icon: Grid3x3, mood: "point", title: "Flashcard",
    text: "Allenano il recupero attivo, fronte/retro: il modo più efficace per fissare definizioni e formule. Bastano pochi minuti tra un'attività e l'altra." },
  { target: "podcast", icon: Mic, mood: "point", title: "Podcast, Video e Mappe",
    text: "Il contenuto di studio da ascoltare o guardare, diviso in capitoli navigabili e con velocità regolabile: perfetto mentre cammini o in pausa. Le mappe ti danno il quadro d'insieme prima del dettaglio." },
  { target: "costudy", icon: UsersRound, mood: "point", title: "Studia in compagnia",
    text: "Entra in un gruppo di coorte, sfida la classifica o apri una stanza di co-studio con videochiamata reale: la community ti tiene in carreggiata nei giorni in cui la motivazione cala." },
  { target: "mentori", icon: GraduationCap, mood: "point", title: "Mentori e Q&A",
    text: "Chiedi a chi ha già superato quell'esame e leggi le domande più utili, votate dalla community. Metodo ed esperienza reale che nessun manuale può darti." },
  { target: "ripasso", icon: Zap, mood: "point", title: "Ripasso last minute",
    text: "Nelle ore prima della prova trovi qui solo l'indispensabile e un glossario essenziale: una rilettura lucida e senza dispersione, pensata per l'ultimo miglio." },
  { target: "ai", icon: Brain, mood: "hi", title: "Le funzioni AI",
    text: "Tutor ed Esaminatore AI arriveranno con i piani superiori: per ora le vedi «dietro vetro». Tutto il resto funziona già, subito e senza costi." },
  { target: "theme", icon: Sun, mood: "hi", title: "I quattro temi",
    text: "Chiaro per il giorno, Scuro per la sera, Notturno a bassissima luce blu per lo studio a tarda ora, e Auto che segue l'orario. Il cambio è un'onda che si espande: provala. I tuoi occhi ringraziano." },
  { target: "feedback", icon: CheckCircle2, mood: "cheer", title: "Sei una stella beta ✨",
    text: "Sirio cresce con te: dal pannello Feedback segnali bug, idee e proposte, divisi per categoria, e li invii all'editore con un tocco. Ora comincia dal tuo piano: un passo al giorno e la tua costellazione si accende. In bocca al lupo!" },
];

function computeLayout(target) {
  const vw = (typeof window !== "undefined" && window.innerWidth) || 1024;
  const vh = (typeof window !== "undefined" && window.innerHeight) || 768;
  const BW = Math.min(370, vw - 28);
  const EH = 320;
  let rect = null;
  if (target && typeof document !== "undefined") {
    const el = document.querySelector(`[data-tour="${target}"]`);
    if (el) {
      try { el.scrollIntoView?.({ block: "nearest", inline: "nearest" }); } catch {}
      const r = el.getBoundingClientRect?.();
      if (r && r.width > 4 && r.height > 4) rect = { top: r.top, left: r.left, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
    }
  }
  if (!rect) return { rect: null, place: "center", bx: (vw - BW) / 2, by: Math.max(24, vh / 2 - EH / 2), bw: BW };
  if (rect.right + 24 + BW <= vw) return { rect, place: "right", bx: rect.right + 20, by: clamp(rect.top - 14, 16, vh - EH - 16), bw: BW };
  if (rect.bottom + 16 + EH <= vh) return { rect, place: "below", bx: clamp(rect.left, 16, vw - BW - 16), by: rect.bottom + 16, bw: BW };
  return { rect, place: "center", bx: (vw - BW) / 2, by: Math.max(24, vh / 2 - EH / 2), bw: BW };
}

export default function DirexiTour() {
  const { state, dispatch } = useStore();
  const loc = useLocation();
  const [active, setActive] = useState(false);
  const [i, setI] = useState(0);
  const [layout, setLayout] = useState({ rect: null, place: "center", bx: 0, by: 0, bw: 360 });
  const started = useRef(false);
  const step = STEPS[i];

  const close = useCallback(() => { setActive(false); dispatch({ type: "SET_TOUR_SEEN" }); }, [dispatch]);
  const begin = useCallback(() => { setI(0); setActive(true); }, []);

  // avvio manuale dal pulsante "?"
  useEffect(() => {
    const h = () => begin();
    window.addEventListener("sirio-tour", h);
    return () => window.removeEventListener("sirio-tour", h);
  }, [begin]);

  // primo accesso: parte da solo sulla dashboard
  useEffect(() => {
    if (started.current) return;
    if (!state.tourSeen && loc.pathname === "/app") {
      started.current = true;
      const t = setTimeout(() => begin(), 850);
      return () => clearTimeout(t);
    }
  }, [state.tourSeen, loc.pathname, begin]);

  // misura il bersaglio ad ogni passo + su resize/scroll
  useLayoutEffect(() => {
    if (!active) return;
    const measure = () => setLayout(computeLayout(step.target));
    measure();
    const t = setTimeout(measure, 260); // dopo eventuale scroll fluido
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    return () => { clearTimeout(t); window.removeEventListener("resize", measure); window.removeEventListener("scroll", measure, true); };
  }, [active, i, step.target]);

  if (!active) return null;

  const last = i === STEPS.length - 1;
  const go = (d) => setI((x) => clamp(x + d, 0, STEPS.length - 1));
  const pad = 10;
  const r = layout.rect;

  return (
    <div className="fixed inset-0 z-[300]">
      {/* velo scuro con "buco" spotlight sul bersaglio */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <mask id="direxi-hole">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {r && (
              <motion.rect fill="black" rx="16" ry="16"
                initial={false}
                animate={{ x: r.left - pad, y: r.top - pad, width: r.width + pad * 2, height: r.height + pad * 2 }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }} />
            )}
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="rgb(var(--c-scrim))" opacity="0.74" mask="url(#direxi-hole)" />
      </svg>

      {/* anello luminoso attorno al bersaglio */}
      {r && (
        <motion.div className="pointer-events-none absolute rounded-2xl"
          initial={false}
          animate={{ left: r.left - pad, top: r.top - pad, width: r.width + pad * 2, height: r.height + pad * 2 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          style={{ boxShadow: "0 0 0 2px rgba(120,210,255,0.9), 0 0 0 6px rgba(78,195,255,0.28), 0 0 40px rgba(78,195,255,0.5)" }} />
      )}

      {/* barra superiore: passo + salta */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
          Direxi · {i + 1} / {STEPS.length}
        </span>
        <button onClick={close} className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/25">
          Salta la guida <X size={14} />
        </button>
      </div>

      {/* mascotte + fumetto che si spostano insieme accanto alla funzione */}
      <motion.div className="absolute left-0 top-0" style={{ width: layout.bw }}
        initial={false} animate={{ x: layout.bx, y: layout.by }} transition={{ type: "spring", stiffness: 210, damping: 26 }}>
        <div className="relative">
          {/* codina del fumetto verso il bersaglio */}
          {layout.place === "right" && <div className="absolute -left-2 top-16 h-4 w-4 rotate-45 rounded-sm border-b border-l border-line/20 bg-bg-2" />}
          {layout.place === "below" && <div className="absolute left-10 -top-2 h-4 w-4 rotate-45 rounded-sm border-l border-t border-line/20 bg-bg-2" />}

          <AnimatePresence mode="wait">
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.94, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: -6 }}
              transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
              className="glass-strong rounded-xl3 p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <Direxi mood={step.mood} size={78} />
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-center gap-2">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-grad text-white"><step.icon size={16} /></div>
                    <h3 className="font-display text-lg font-bold leading-tight text-text-hi">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text">{step.text}</p>
                </div>
              </div>

              {/* puntini di avanzamento */}
              <div className="mt-4 flex items-center justify-center gap-1.5">
                {STEPS.map((_, k) => (
                  <button key={k} onClick={() => setI(k)}
                    className={cnDot(k === i)} aria-label={`Passo ${k + 1}`} />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-2">
                <button onClick={() => go(-1)} disabled={i === 0}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-text-soft transition enabled:hover:text-glow disabled:opacity-40">
                  <ArrowLeft size={15} /> Indietro
                </button>
                {last ? (
                  <button onClick={close} className="btn btn-primary px-5 py-2.5 text-sm">
                    Inizia a studiare <ArrowRight size={15} />
                  </button>
                ) : (
                  <button onClick={() => go(1)} className="btn btn-primary px-5 py-2.5 text-sm">
                    Avanti <ArrowRight size={15} />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

function cnDot(active) {
  return "h-1.5 rounded-full transition-all " + (active ? "w-5 bg-glow" : "w-1.5 bg-fill/25 hover:bg-fill/45");
}
