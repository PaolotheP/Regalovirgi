import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui.jsx";

/* Funzione AI bloccata: contenuto dietro vetro smerigliato + invito al piano. */
export default function GlassLock({ title, desc, children, compact = false }) {
  const nav = useNavigate();
  return (
    <div className="relative overflow-hidden rounded-xl3 glass">
      <div className="frosted p-6 select-none" aria-hidden>
        {children}
      </div>
      <div className="absolute inset-0 grid place-items-center bg-scrim/30 p-6 text-center backdrop-blur-[1px]">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-sm">
          <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl glass-brand text-glow">
            <Lock size={24} />
          </div>
          <h3 className="font-display text-lg font-bold text-text-hi">{title}</h3>
          {!compact && <p className="mt-1.5 text-sm text-text-soft">{desc}</p>}
          <Button className="mt-4" onClick={() => nav("/pricing")}>
            <Sparkles size={16} /> Passa al piano superiore <ArrowRight size={16} />
          </Button>
          <p className="mt-2 text-xs text-text-mute">In arrivo con i piani superiori.</p>
        </motion.div>
      </div>
    </div>
  );
}
