import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, HelpCircle, Compass, MessageSquareHeart, Lightbulb, Star, Flame, Clock } from "lucide-react";
import { useStore, useSelectors } from "../lib/store.jsx";
import { DIREXI_GUIDES, guideForPath } from "../lib/direxi.js";
import { DirexiStar, startTour } from "../features/Direxi.jsx";
import { toISO, today, addDays } from "../lib/utils.js";
import { cn } from "../lib/utils.js";

/* Pulsantino "?" da mettere accanto a ogni funzione: apre la guida di Direxi. */
export function HelpDot({ guide, className, size = 15 }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); window.dispatchEvent(new CustomEvent("sirio-direxi", { detail: { type: "guide", key: guide } })); }}
      aria-label="Spiegazione di Direxi" title="Chiedi a Direxi"
      className={cn("grid h-6 w-6 shrink-0 place-items-center rounded-full text-text-mute transition hover:bg-glow/12 hover:text-glow", className)}>
      <HelpCircle size={size} />
    </button>
  );
}

/* ------------------- Recap settimanale (dati locali) -------------------- */
function useWeekRecap() {
  const { state } = useStore();
  const sel = useSelectors();
  return useMemo(() => {
    const days = state.study.days || {};
    let minutes = 0;
    for (let i = 0; i < 7; i++) {
      minutes += days[toISO(addDays(today(), -i))] || 0;
    }
    const weekAgo = toISO(addDays(today(), -7));
    const touched = Object.values(state.progress).filter((p) => p.lastStudied && p.lastStudied >= weekAgo).length;
    return { minutes, touched, lit: state.litStars.length, streak: sel.streak };
  }, [state.study.days, state.progress, state.litStars, sel.streak]);
}

export default function DirexiCompanion() {
  const loc = useLocation();
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const [guideKey, setGuideKey] = useState(null);
  const [celebration, setCelebration] = useState(null);
  const [thinking, setThinking] = useState(false);
  const recap = useWeekRecap();

  // eventi: guida richiesta dal "?" o celebrazione
  useEffect(() => {
    const h = (e) => {
      const d = e.detail || {};
      if (d.type === "guide") {
        setThinking(true);
        setGuideKey(d.key || null);
        setTimeout(() => { setThinking(false); setOpen(true); }, 320);
      } else if (d.type === "celebrate") {
        setCelebration(d.message || "Ottimo lavoro!");
        setTimeout(() => setCelebration(null), 4200);
      }
    };
    window.addEventListener("sirio-direxi", h);
    return () => window.removeEventListener("sirio-direxi", h);
  }, []);

  // cambiando pagina, la guida torna contestuale
  useEffect(() => { setGuideKey(null); }, [loc.pathname]);

  const guide = (guideKey && DIREXI_GUIDES[guideKey]) || guideForPath(loc.pathname);

  return (
    <>
      {/* ---- la stella nell'angolo (sotto drawer/scrim/modali: z-25) ---- */}
      <div className="fixed bottom-5 right-5 z-[25]">
        <AnimatePresence>
          {celebration && (
            <motion.div key="cel"
              initial={{ opacity: 0, y: 14, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 340, damping: 24 }}
              className="glass-strong absolute bottom-full right-0 mb-3 w-64 rounded-xl2 p-3.5 shadow-soft">
              <div className="flex items-start gap-2">
                <Star size={16} className="mt-0.5 shrink-0 text-accent-500" />
                <p className="text-sm font-semibold leading-snug text-text-hi">{celebration}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => { setGuideKey(null); setOpen((o) => !o); }}
          aria-label="Direxi, la tua guida" title="Direxi"
          initial={{ scale: 0, rotate: -40 }} animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.6 }}
          whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }}
          className="relative grid h-16 w-16 place-items-center">
          {celebration && (
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent-400/30" />
          )}
          <DirexiStar size={62} mood={celebration ? "cheer" : "hi"} thinking={thinking} />
        </motion.button>
      </div>

      {/* ---- pannello guida ---- */}
      <AnimatePresence>
        {open && (
          <motion.div key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-24 right-5 z-[28] w-[min(24rem,calc(100vw-2rem))]">
            <div className="glass-strong rounded-xl3 p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <DirexiStar size={54} mood="point" />
                <div className="min-w-0 flex-1">
                  <div className="eyebrow">Direxi ti spiega</div>
                  <h3 className="font-display text-lg font-bold leading-tight text-text-hi">{guide.titolo}</h3>
                </div>
                <button onClick={() => setOpen(false)} className="grid h-8 w-8 place-items-center rounded-lg border border-line/10 text-text-mute transition hover:text-glow">
                  <X size={16} />
                </button>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text">{guide.testo}</p>
              {guide.consiglio && (
                <div className="mt-3 flex items-start gap-2 rounded-xl2 bg-accent-500/10 border border-accent-400/25 p-3">
                  <Lightbulb size={15} className="mt-0.5 shrink-0 text-accent-500" />
                  <p className="text-xs leading-relaxed text-text"><b className="text-text-hi">Consiglio:</b> {guide.consiglio}</p>
                </div>
              )}

              {/* recap settimanale */}
              <div className="mt-4 rounded-xl2 border border-line/10 bg-fill/[0.03] p-3">
                <div className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-text-mute">La tua settimana</div>
                <div className="grid grid-cols-4 gap-1 text-center">
                  {[
                    [Clock, `${recap.minutes}′`, "studio"],
                    [Compass, recap.touched, "argomenti"],
                    [Star, recap.lit, "stelle"],
                    [Flame, recap.streak, "streak"],
                  ].map(([Icon, v, l]) => (
                    <div key={l}>
                      <Icon size={14} className="mx-auto text-glow" />
                      <div className="mt-0.5 font-display text-base font-bold text-text-hi">{v}</div>
                      <div className="text-[0.6rem] text-text-mute">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button onClick={() => { setOpen(false); startTour(); }}
                  className="btn btn-primary flex-1 px-4 py-2 text-xs"><Compass size={14} /> Tour completo</button>
                <button onClick={() => { setOpen(false); nav("/app/feedback"); }}
                  className="btn btn-ghost flex-1 px-4 py-2 text-xs"><MessageSquareHeart size={14} /> Feedback beta</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
