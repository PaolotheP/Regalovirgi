import { useMemo } from "react";

/* Sfondo SIRIO per-tema.
   Chiaro: cielo diurno arioso (blob morbidi blu + alba ambra).
   Scuro: spazio profondo con campo stellato che scintilla.
   Notturno: crepuscolo caldo, stelle ambrate e fioche. */

function seededStars(n, seed = 7) {
  let s = seed;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  return Array.from({ length: n }, (_, i) => ({
    id: i,
    x: rnd() * 100, y: rnd() * 100,
    r: 0.6 + rnd() * 1.6,
    tw: rnd() > 0.72, // solo alcune scintillano
    d: (rnd() * 4).toFixed(2),
  }));
}

export default function Background() {
  const stars = useMemo(() => seededStars(110), []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg transition-colors duration-500">
      {/* blob aurora (si tingono coi token del tema) */}
      <div className="absolute -top-48 -right-28 h-[46rem] w-[46rem] rounded-full bg-brand-500/15 blur-[150px] animate-aurora" />
      <div className="absolute top-1/3 -left-44 h-[38rem] w-[38rem] rounded-full bg-glow/10 blur-[150px] animate-aurora" style={{ animationDelay: "3s" }} />
      <div className="absolute -bottom-52 left-1/4 h-[44rem] w-[44rem] rounded-full bg-accent-500/10 blur-[160px] animate-aurora" style={{ animationDelay: "6s" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(1100px 640px at 50% -12%, rgb(var(--c-glow) / 0.10), transparent 62%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(900px 560px at 92% 8%, rgba(255,138,61,0.05), transparent 60%)" }} />

      {/* campo stellato: invisibile di giorno, vivo di notte */}
      <svg className="sirio-stars absolute inset-0 h-full w-full transition-opacity duration-700" preserveAspectRatio="none">
        {stars.map((st) => (
          <circle key={st.id} cx={`${st.x}%`} cy={`${st.y}%`} r={st.r}
            fill="rgb(var(--c-star))"
            className={st.tw ? "animate-twinkle" : undefined}
            style={{ opacity: st.tw ? undefined : 0.5, animationDelay: `${st.d}s` }} />
        ))}
      </svg>
    </div>
  );
}
