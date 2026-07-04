import { cn } from "../lib/utils.js";

/* Marchio SIRIO — la stella più luminosa. Quattro punte con alone e
   piccola stella compagna (Sirio B), in vetro blu con cuore chiaro. */
export function LogoMark({ size = 40, className, glow = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className={cn(glow && "drop-shadow-[0_4px_18px_rgba(78,165,255,0.5)]", className)} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="si-star" x1="130" y1="120" x2="390" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9fd8ff" /><stop offset="0.5" stopColor="#2f7bff" /><stop offset="1" stopColor="#12206b" />
        </linearGradient>
        <radialGradient id="si-core" cx="0.45" cy="0.42" r="0.62">
          <stop offset="0" stopColor="#ffffff" /><stop offset="0.6" stopColor="#bfe2ff" /><stop offset="1" stopColor="#2f6fe6" />
        </radialGradient>
        <radialGradient id="si-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#4ea5ff" stopOpacity="0.5" /><stop offset="0.7" stopColor="#4ea5ff" stopOpacity="0.12" /><stop offset="1" stopColor="#4ea5ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* alone */}
      <circle cx="240" cy="268" r="210" fill="url(#si-halo)" />
      {/* stella principale a 4 punte */}
      <path fill="url(#si-star)"
        d="M240 58 C252 190 268 218 400 268 C268 318 252 346 240 478 C228 346 212 318 80 268 C212 218 228 190 240 58 Z" />
      {/* cuore luminoso */}
      <circle cx="240" cy="268" r="34" fill="url(#si-core)" />
      {/* stella compagna (Sirio B) */}
      <path fill="url(#si-star)" d="M406 96 C410 138 416 148 458 156 C416 164 410 174 406 216 C402 174 396 164 354 156 C396 148 402 138 406 96 Z" />
      <circle cx="406" cy="156" r="9" fill="#dff0ff" />
    </svg>
  );
}

export function Logo({ size = 36, showText = true, className }) {
  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      <LogoMark size={size} />
      {showText && (
        <div className="leading-none">
          <div className="flex items-center gap-1.5 font-display text-xl font-bold tracking-tight text-text-hi">
            Sirio
            {/* etichetta beta: discreta ma sempre visibile (lettera greca β) */}
            <span title="Versione beta: il tuo feedback conta"
              className="rounded-full border border-glow/30 bg-glow/10 px-1.5 py-px font-sans text-[0.6rem] font-bold leading-none text-glow">β</span>
          </div>
          <div className="mt-0.5 text-[0.56rem] font-sans font-semibold uppercase tracking-[0.22em] text-text-mute">Neldiritto</div>
        </div>
      )}
    </div>
  );
}
