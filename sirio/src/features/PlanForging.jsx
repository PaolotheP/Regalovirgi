import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoMark } from "../components/Logo.jsx";

/* ====================== LA COSTELLAZIONE SI FORMA ========================
 * L'attesa dell'elaborazione del piano come momento di valore: le stelle
 * appaiono e si collegano mentre micro-testi raccontano cosa sta facendo
 * l'algoritmo. Nessun trucco: il piano viene generato davvero al termine.
 * ======================================================================== */

function makeStars(n = 26) {
  let s = 21;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const pts = Array.from({ length: n }, (_, i) => ({
    id: i, x: 8 + rnd() * 84, y: 12 + rnd() * 70, r: 2.2 + rnd() * 2.6,
  }));
  // collega ogni stella alla più vicina già apparsa: tracciati organici
  const links = [];
  for (let i = 1; i < pts.length; i++) {
    let best = 0, bd = Infinity;
    for (let j = 0; j < i; j++) {
      const d = (pts[i].x - pts[j].x) ** 2 + (pts[i].y - pts[j].y) ** 2;
      if (d < bd) { bd = d; best = j; }
    }
    links.push([pts[best], pts[i]]);
  }
  return { pts, links };
}

export default function PlanForging({ steps, onDone, duration = 5600 }) {
  const { pts, links } = useMemo(() => makeStars(26), []);
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const per = duration / steps.length;
    const iv = setInterval(() => setMsgIdx((i) => Math.min(steps.length - 1, i + 1)), per);
    const done = setTimeout(() => { clearInterval(iv); onDone?.(); }, duration + 400);
    return () => { clearInterval(iv); clearTimeout(done); };
  }, [steps.length, duration, onDone]);

  const appearAt = (i) => (i / pts.length) * (duration / 1000) * 0.72;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[400] grid place-items-center overflow-hidden"
      style={{ background: "radial-gradient(120% 100% at 50% 20%, #101a3d 0%, #0a1024 55%, #060a18 100%)" }}>
      {/* cielo che si accende */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {links.map(([a, b], i) => (
          <motion.line key={"l" + i} x1={`${a.x}%`} y1={`${a.y}%`} x2={`${b.x}%`} y2={`${b.y}%`}
            stroke="#7ea2e0" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.35 }}
            transition={{ delay: appearAt(i + 1) + 0.25, duration: 0.6 }} />
        ))}
        {pts.map((p, i) => (
          <motion.circle key={p.id} cx={`${p.x}%`} cy={`${p.y}%`} r={p.r} fill="#cfe3ff"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.75], scale: [0, 1.6, 1] }}
            transition={{ delay: appearAt(i), duration: 0.7 }} />
        ))}
      </svg>

      <div className="relative z-10 flex max-w-md flex-col items-center px-6 text-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="relative grid h-28 w-28 place-items-center">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/15" />
          <div className="absolute inset-3 rounded-full border border-white/10" />
        </motion.div>
        <div className="-mt-[5.5rem] mb-8">
          <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.2, repeat: Infinity }}>
            <LogoMark size={64} />
          </motion.div>
        </div>

        <h2 className="font-display text-2xl font-bold text-white">La tua costellazione prende forma</h2>
        <div className="mt-4 h-12">
          <AnimatePresence mode="wait">
            <motion.p key={msgIdx}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-[#9db8e8]">
              {steps[msgIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* progresso */}
        <div className="mt-2 h-1 w-56 overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-[#4ec3ff] to-[#2f7bff]"
            initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: duration / 1000, ease: "linear" }} />
        </div>
      </div>
    </motion.div>
  );
}
