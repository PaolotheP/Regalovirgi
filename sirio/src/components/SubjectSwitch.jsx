/* =========================================================================
   SIRIO — Selettore della MATERIA (coerente con la metafora del cielo).
   Ogni materia è una costellazione: le card mostrano un piccolo cielo con
   le stelle della materia. Il cambio materia mantiene progressi separati
   per ciascun cielo e riparte con una dissolvenza stellata.
   ========================================================================= */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, BookOpenText, ArrowLeftRight, X } from "lucide-react";
import { SUBJECTS, getSubject, currentSubjectId, switchSubject } from "../lib/subject.js";
import { cn } from "../lib/utils.js";

/* piccolo cielo deterministico per la card (stelle + linee) */
function MiniSky({ hue, lit = 5 }) {
  const pts = [[14, 30], [30, 12], [48, 22], [66, 10], [82, 26], [58, 38], [24, 44]];
  return (
    <svg viewBox="0 0 96 52" className="h-14 w-full" aria-hidden>
      {pts.slice(0, -1).map(([x, y], i) => {
        const [nx, ny] = pts[i + 1];
        return <line key={i} x1={x} y1={y} x2={nx} y2={ny} stroke={`hsl(${hue} 70% 60% / 0.35)`} strokeWidth="1" />;
      })}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i < lit ? 2.6 : 1.6}
          fill={i < lit ? `hsl(${hue} 85% 68%)` : `hsl(${hue} 30% 55% / 0.5)`}
          className={i < lit ? "animate-twinkle" : undefined}
          style={{ animationDelay: `${i * 0.4}s` }} />
      ))}
    </svg>
  );
}

/* Le due card-costellazione (usate nell'onboarding e nel cambio materia) */
export function SubjectCards({ value, onPick }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {SUBJECTS.map((s) => {
        const on = value === s.id;
        return (
          <button key={s.id} onClick={() => onPick(s.id)}
            className={cn("relative rounded-xl3 border p-4 text-left transition",
              on ? "border-glow/55 bg-glow/10 shadow-soft" : "border-line/10 bg-fill/[0.03] hover:border-brand-400/40")}>
            <MiniSky hue={s.hue} lit={on ? 7 : 4} />
            <div className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-text-mute">{s.costellazione}</div>
            <div className="mt-0.5 font-display text-lg font-bold leading-tight text-text-hi">{s.nome}</div>
            <div className="mt-1 text-xs leading-relaxed text-text-soft">{s.desc}</div>
            <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-line/15 bg-fill/[0.04] px-2.5 py-1 text-[0.65rem] font-semibold text-text-soft">
              <BookOpenText size={11} className="text-glow" /> {s.manuale}
            </div>
            {on && (
              <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-glow text-white shadow-soft">
                <Check size={14} />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/* Dissolvenza stellata + ricarica sul nuovo cielo */
export function performSubjectSwitch(id) {
  const target = getSubject(id);
  if (!target || id === currentSubjectId()) return;
  let onboarded = false;
  try { onboarded = !!JSON.parse(localStorage.getItem(target.storageKey) || "null")?.onboarded; } catch {}
  switchSubject(id);
  try { window.location.hash = onboarded ? "#/app" : "#/onboarding"; } catch {}
  // la ricarica avviene dietro l'overlay (vedi SwitchVeil)
  setTimeout(() => { try { window.location.reload(); } catch {} }, 700);
}

function SwitchVeil({ subject }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="fixed inset-0 z-[400] grid place-items-center bg-[#070b18]">
      <div className="text-center">
        <div className="mx-auto w-40"><MiniSky hue={subject.hue} lit={7} /></div>
        <div className="mt-3 font-display text-xl font-bold text-white">Preparo il cielo di {subject.short}…</div>
        <div className="mt-1 text-sm text-white/60">I progressi dell'altra materia restano al sicuro.</div>
      </div>
    </motion.div>
  );
}

/* Modale "Cambia materia" richiamabile dalla barra laterale */
export default function SubjectSwitchModal({ open, onClose }) {
  const cur = currentSubjectId();
  const [pick, setPick] = useState(cur);
  const [veil, setVeil] = useState(null);
  useEffect(() => { if (open) setPick(cur); }, [open, cur]);

  const confirm = () => {
    if (pick === cur) { onClose?.(); return; }
    const target = getSubject(pick);
    setVeil(target);
    performSubjectSwitch(pick);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[120] grid place-items-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-scrim/60 backdrop-blur-sm" onClick={() => !veil && onClose?.()} />
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
            className="glass-strong relative w-full max-w-xl rounded-xl3 p-5 shadow-soft">
            <div className="mb-1 flex items-center gap-2">
              <ArrowLeftRight size={17} className="text-glow" />
              <h3 className="font-display text-xl font-bold text-text-hi">Cambia materia</h3>
              <button onClick={() => onClose?.()} aria-label="Chiudi" className="ml-auto grid h-8 w-8 place-items-center rounded-lg text-text-mute transition hover:bg-fill/[0.06] hover:text-text-hi"><X size={16} /></button>
            </div>
            <p className="mb-4 text-sm text-text-soft">Ogni materia è una costellazione a sé: piano, stelle e progressi restano separati e ti aspettano quando torni.</p>
            <SubjectCards value={pick} onPick={setPick} />
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => onClose?.()} className="rounded-full px-4 py-2 text-sm font-semibold text-text-soft transition hover:text-text-hi">Annulla</button>
              <button onClick={confirm} disabled={pick === cur}
                className={cn("rounded-full px-5 py-2 text-sm font-bold text-white transition",
                  pick === cur ? "bg-fill/20 text-text-mute" : "bg-brand-grad shadow-soft hover:brightness-110")}>
                Vai a {getSubject(pick).short}
              </button>
            </div>
          </motion.div>
          <AnimatePresence>{veil && <SwitchVeil subject={veil} />}</AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
