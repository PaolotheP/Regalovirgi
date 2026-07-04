import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PersonStanding, Volume2, Mic, Type, Waves, WifiOff, RotateCcw, AlertTriangle } from "lucide-react";
import { useStore } from "../lib/store.jsx";
import { Modal, Pill, toast } from "./ui.jsx";
import { voiceSupported } from "../lib/hooks.js";
import { currentSubject } from "../lib/subject.js";
import { cn } from "../lib/utils.js";

function Toggle({ on, onChange, disabled }) {
  return (
    <button onClick={() => !disabled && onChange(!on)} aria-pressed={on} disabled={disabled}
      className={cn("relative h-7 w-12 shrink-0 rounded-full transition-colors",
        on ? "bg-glow/80" : "bg-fill/15", disabled && "opacity-40 cursor-not-allowed")}>
      <motion.span layout transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className={cn("absolute top-1 h-5 w-5 rounded-full bg-white shadow", on ? "left-6" : "left-1")} />
    </button>
  );
}

const OPTIONS = [
  { key: "audioFirst", icon: Volume2, label: "Studio in ascolto (audio-first)",
    desc: "Aggiunge «Ascolta» ai contenuti: la piattaforma legge ad alta voce, per studiare in movimento o a occhi riposati." },
  { key: "voiceNav", icon: Mic, label: "Comandi vocali",
    desc: "Naviga a mani libere: di' «apri il piano», «cielo», «quiz»… Compare un microfono in alto.", needsVoice: true },
  { key: "dsa", icon: Type, label: "Lettura facilitata (DSA)",
    desc: "Spaziatura generosa fra lettere e righe, paragrafi più corti allo sguardo: pensata per dislessia e affaticamento visivo." },
  { key: "reduceMotion", icon: Waves, label: "Riduci le animazioni",
    desc: "Transizioni essenziali e nessun movimento decorativo, per chi soffre il motion o vuole massima sobrietà." },
];

/* Azzeramento dati della materia corrente, con conferma esplicita (beta) */
function ResetSection({ onClose }) {
  const { dispatch } = useStore();
  const [arming, setArming] = useState(false);
  useEffect(() => {
    if (!arming) return;
    const t = setTimeout(() => setArming(false), 6000);
    return () => clearTimeout(t);
  }, [arming]);
  const subj = currentSubject();

  const doReset = () => {
    try { localStorage.removeItem(subj.storageKey); } catch {}
    dispatch({ type: "RESET" });
    toast("Dati azzerati: si riparte da capo");
    onClose?.();
    try { window.location.hash = "#/"; setTimeout(() => window.location.reload(), 250); } catch {}
  };

  return (
    <div className={cn("mt-4 rounded-xl2 border p-3.5 transition", arming ? "border-rose-400/45 bg-rose-400/10" : "border-line/10 bg-fill/[0.03]")}>
      <div className="flex items-start gap-3">
        {arming ? <AlertTriangle size={17} className="mt-0.5 shrink-0 text-rose-500" /> : <RotateCcw size={17} className="mt-0.5 shrink-0 text-text-mute" />}
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-text-hi">{arming ? "Confermi davvero?" : "Ricomincia da capo"}</div>
          <p className="mt-0.5 text-xs leading-relaxed text-text-soft">
            {arming
              ? <>Verranno cancellati <b className="text-text-hi">solo</b> i dati di <b className="text-text-hi">{subj.nome}</b> su questo dispositivo: piano, stelle, quiz, diario. L'altra materia non viene toccata. Non si può annullare.</>
              : <>Azzera i progressi di {subj.nome} su questo dispositivo e rifai l'onboarding. Utile in fase di prova.</>}
          </p>
          <div className="mt-2 flex gap-2">
            {!arming ? (
              <button onClick={() => setArming(true)}
                className="rounded-full border border-line/20 px-3 py-1.5 text-xs font-semibold text-text-soft transition hover:border-rose-400/50 hover:text-rose-500">
                Azzera i miei dati…
              </button>
            ) : (
              <>
                <button onClick={doReset}
                  className="rounded-full bg-rose-500 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-rose-600">
                  Sì, azzera tutto
                </button>
                <button onClick={() => setArming(false)}
                  className="rounded-full border border-line/20 px-3 py-1.5 text-xs font-semibold text-text-soft transition hover:text-text-hi">
                  Annulla
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function A11yPanel({ open, onClose }) {
  const { state, dispatch } = useStore();
  return (
    <Modal open={open} onClose={onClose} className="max-w-lg">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-glow/12 text-glow"><PersonStanding size={22} /></div>
        <div>
          <h3 className="font-display text-xl font-bold text-text-hi">Accessibilità e impostazioni</h3>
          <p className="text-sm text-text-soft">Sirio si adatta a te, non il contrario.</p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {OPTIONS.map((o) => {
          const unsupported = o.needsVoice && !voiceSupported();
          return (
            <div key={o.key} className="flex items-start gap-3 rounded-xl2 border border-line/10 bg-fill/[0.03] p-3.5">
              <o.icon size={18} className="mt-0.5 shrink-0 text-glow" />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-text-hi">{o.label}</div>
                <p className="mt-0.5 text-xs leading-relaxed text-text-soft">{o.desc}</p>
                {unsupported && <Pill tone="warn" className="mt-1.5">non supportato da questo browser</Pill>}
              </div>
              <Toggle on={!!state.a11y[o.key]} disabled={unsupported}
                onChange={(v) => dispatch({ type: "SET_A11Y", patch: { [o.key]: v } })} />
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-xl2 border border-emerald-400/25 bg-emerald-400/10 p-3.5">
        <WifiOff size={17} className="mt-0.5 shrink-0 text-emerald-500" />
        <p className="text-xs leading-relaxed text-text">
          <b className="text-text-hi">Funziona anche offline.</b> Dopo la prima apertura, contenuti e progressi vivono nel tuo
          browser: puoi studiare in treno o con connessione instabile, a basso consumo di dati.
        </p>
      </div>

      <ResetSection onClose={onClose} />
    </Modal>
  );
}
