import { forwardRef, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Check } from "lucide-react";
import { cn } from "../lib/utils.js";

/* ------------------------------- Ripple -------------------------------- */
/* Onda al click, iniettata nel DOM (nessun re-render). Sicura in jsdom. */
function spawnRipple(e) {
  const el = e.currentTarget;
  if (!el || typeof document === "undefined" || el.disabled) return;
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) || 40;
  const cx = (e.clientX ?? rect.left + rect.width / 2) - rect.left;
  const cy = (e.clientY ?? rect.top + rect.height / 2) - rect.top;
  const span = document.createElement("span");
  span.className = "ripple-ink";
  span.style.width = span.style.height = size + "px";
  span.style.left = cx - size / 2 + "px";
  span.style.top = cy - size / 2 + "px";
  el.appendChild(span);
  span.addEventListener("animationend", () => span.remove());
  setTimeout(() => span.remove(), 900);
}

/* ------------------------------- Button -------------------------------- */
export const Button = forwardRef(function Button(
  { as = "button", variant = "primary", size = "md", className, children, onPointerDown, ...props },
  ref
) {
  const Comp = as;
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-5 py-2.5 text-[0.95rem]", lg: "px-7 py-3.5 text-base" };
  const variants = {
    primary: "btn-primary",
    warm: "btn-warm",
    ghost: "btn-ghost",
    outline: "border border-brand-400/50 text-brand-500 hover:bg-brand-500/10",
    subtle: "bg-fill/[0.06] hover:bg-fill/[0.12] text-text-hi border border-line/10",
  };
  return (
    <Comp ref={ref}
      className={cn("btn", sizes[size], variants[variant], className)}
      onPointerDown={(e) => { spawnRipple(e); onPointerDown?.(e); }}
      {...props}>
      {children}
    </Comp>
  );
});

/* -------------------------------- Card --------------------------------- */
export function Card({ className, glass = "glass", hover = false, children, ...props }) {
  return (
    <div className={cn(glass, "rounded-xl2", hover && "card-hover cursor-pointer", className)} {...props}>
      {children}
    </div>
  );
}

/* ------------------------------- Badges -------------------------------- */
export function Pill({ className, tone = "default", children }) {
  const tones = {
    default: "bg-brand-500/15 text-brand-500 border-brand-400/25",
    soft: "bg-fill/[0.06] text-text-soft border-line/10",
    ok: "bg-emerald-400/15 text-emerald-500 border-emerald-400/30",
    warn: "bg-accent-500/15 text-accent-600 border-accent-400/30",
    err: "bg-rose-400/15 text-rose-500 border-rose-400/30",
    glow: "bg-glow/15 text-glow border-glow/30",
    warm: "bg-accent-500/15 text-accent-600 border-accent-400/35",
  };
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold tracking-wide", tones[tone], className)}>
      {children}
    </span>
  );
}

/* ------------------------------ Progress ------------------------------- */
export function Progress({ value = 0, className, barClass, tone = "brand" }) {
  const grad = tone === "warm" ? "from-accent-400 to-accent-600" : "from-glow to-brand-500";
  return (
    <div className={cn("h-2 rounded-full bg-fill/10 overflow-hidden", className)}>
      <motion.div
        className={cn("h-full rounded-full bg-gradient-to-r", grad, barClass)}
        initial={{ width: 0 }}
        animate={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      />
    </div>
  );
}

/* Anello di progresso */
export function Ring({ value = 0, size = 92, stroke = 8, children, className, tone = "brand" }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (Math.max(0, Math.min(100, value)) / 100) * c;
  const gid = tone === "warm" ? "ringgrad-warm" : "ringgrad";
  return (
    <div className={cn("relative inline-grid place-items-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgb(var(--c-fill) / 0.10)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={`url(#${gid})`} strokeWidth={stroke}
          strokeLinecap="round" strokeDasharray={c} initial={{ strokeDashoffset: c }} animate={{ strokeDashoffset: off }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <defs>
          <linearGradient id="ringgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5cc6ff" /><stop offset="1" stopColor="#2f7bff" />
          </linearGradient>
          <linearGradient id="ringgrad-warm" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffb066" /><stop offset="1" stopColor="#f26a12" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">{children}</div>
    </div>
  );
}

/* --------------------------- Contatore animato ------------------------- */
export function Counter({ value = 0, duration = 1.1, className, format = (n) => n }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const to = Number(value) || 0;
    if (typeof requestAnimationFrame !== "function") { setN(to); return; }
    let raf, start = null;
    const tick = (t) => {
      if (start == null) start = t;
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => (typeof cancelAnimationFrame === "function" ? cancelAnimationFrame(raf) : undefined);
  }, [value, duration]);
  return <span className={className}>{format(n)}</span>;
}

/* ------------------------ Mini grafico a barre ------------------------- */
export function Bars({ data = [], className, height = 120 }) {
  const max = Math.max(1, ...data.map((d) => d.value || 0));
  return (
    <div className={cn("flex items-end gap-2", className)} style={{ height }}>
      {data.map((d, i) => (
        <div key={i} className="flex min-w-0 flex-1 flex-col items-center gap-1.5">
          <div className="flex w-full flex-1 items-end">
            <motion.div
              className={cn("w-full rounded-t-md", d.tone === "warm" ? "bg-gradient-to-t from-accent-600 to-accent-400" : "bg-gradient-to-t from-brand-600 to-glow")}
              initial={{ height: 0 }} whileInView={{ height: `${((d.value || 0) / max) * 100}%` }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ minHeight: 3 }} />
          </div>
          <span className="truncate text-[0.6rem] font-medium text-text-mute">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------ Skeleton ------------------------------- */
export function Skeleton({ className }) {
  return <div className={cn("skeleton", className)} />;
}
export function SkeletonCard({ className }) {
  return (
    <div className={cn("glass rounded-xl2 p-5", className)}>
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="mt-3 h-8 w-2/3" />
      <Skeleton className="mt-4 h-2 w-full" />
    </div>
  );
}

/* ------------------------------ Segmented ------------------------------ */
export function Segmented({ options, value, onChange, className, cols }) {
  return (
    <div className={cn("grid gap-2", className)} style={cols ? { gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` } : undefined}>
      {options.map((o) => {
        const on = value === o.value;
        return (
          <button key={o.value} onClick={() => onChange(o.value)}
            className={cn(
              "relative rounded-xl2 border px-4 py-3 text-left transition-all",
              on ? "border-transparent text-white" : "border-line/10 bg-fill/[0.03] text-text-soft hover:border-brand-400/40"
            )}>
            {on && <motion.div layoutId={"seg" + (className || "")} className="absolute inset-0 rounded-xl2 bg-brand-grad -z-0" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
            <span className="relative z-10 block font-semibold">{o.label}</span>
            {o.desc && <span className={cn("relative z-10 block text-xs mt-0.5", on ? "text-white/70" : "text-text-mute")}>{o.desc}</span>}
          </button>
        );
      })}
    </div>
  );
}

/* -------------------------------- Fields ------------------------------- */
export function Field({ label, children, hint }) {
  return (
    <label className="block">
      {label && <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-text-soft">{label}</span>}
      {children}
      {hint && <span className="mt-1.5 block text-xs text-text-mute">{hint}</span>}
    </label>
  );
}
export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn("w-full rounded-xl bg-fill/[0.05] border border-line/10 px-4 py-3 text-text-hi placeholder:text-text-mute outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15", className)} {...props} />;
});
export const Textarea = forwardRef(function Textarea({ className, ...props }, ref) {
  return <textarea ref={ref} className={cn("w-full rounded-xl bg-fill/[0.05] border border-line/10 px-4 py-3 text-text-hi placeholder:text-text-mute outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15 leading-relaxed resize-y min-h-[120px]", className)} {...props} />;
});

/* -------------------- Select (dropdown animato) ------------------------ */
export function Select({ value, onChange, options, placeholder = "—", className }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    window.addEventListener("mousedown", h);
    return () => window.removeEventListener("mousedown", h);
  }, []);
  const current = options.find((o) => String(o.value) === String(value));
  return (
    <div ref={ref} className={cn("relative", className)}>
      <button type="button" onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-2 rounded-xl bg-fill/[0.05] border border-line/10 px-4 py-3 text-left text-text-hi outline-none transition focus:border-brand-400">
        <span className={cn(!current && "text-text-mute")}>{current ? current.label : placeholder}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown size={16} className="text-text-mute" /></motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
            className="glass-strong absolute z-50 mt-2 max-h-64 w-full overflow-auto rounded-xl p-1.5 shadow-soft">
            {options.map((o) => {
              const on = String(o.value) === String(value);
              return (
                <li key={o.value}>
                  <button type="button" onClick={() => { onChange(o.value); setOpen(false); }}
                    className={cn("flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition", on ? "bg-brand-500/15 text-text-hi" : "text-text-soft hover:bg-fill/[0.06]")}>
                    {o.label}{on && <Check size={15} className="text-glow" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------- Modal -------------------------------- */
export function Modal({ open, onClose, children, className }) {
  useEffect(() => {
    if (!open) return;
    const h = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[120] grid place-items-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-scrim/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className={cn("relative w-full max-w-md glass-strong rounded-xl3 p-7 shadow-soft", className)}
            initial={{ scale: 0.92, y: 22, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.94, y: 12, opacity: 0 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}>
            <button onClick={onClose} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg border border-line/10 text-text-mute hover:text-glow hover:border-glow/40 transition">
              <X size={18} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------- Toaster ------------------------------- */
export function toast(message, opts = {}) {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("sirio-toast", { detail: { message, ...opts } }));
}
export function Toaster() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const h = (e) => {
      const id = Math.random().toString(36).slice(2);
      setItems((x) => [...x, { id, ...e.detail }]);
      setTimeout(() => setItems((x) => x.filter((i) => i.id !== id)), e.detail.duration || 2600);
    };
    window.addEventListener("sirio-toast", h);
    return () => window.removeEventListener("sirio-toast", h);
  }, []);
  const tones = { ok: "text-emerald-400", warn: "text-accent-500", err: "text-rose-400", glow: "text-glow" };
  return (
    <div className="fixed bottom-24 left-1/2 z-[200] flex w-max max-w-[calc(100vw-7rem)] -translate-x-1/2 flex-col items-center gap-2 sm:bottom-6">
      <AnimatePresence>
        {items.map((t) => (
          <motion.div key={t.id}
            initial={{ opacity: 0, y: 24, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="glass-strong flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-text-hi shadow-soft">
            {t.icon && <span className={cn(tones[t.tone] || "text-glow")}>{t.icon}</span>}
            {t.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* --------------------------- Section header ---------------------------- */
export function SectionTitle({ icon: Icon, title, sub, action }) {
  return (
    <div className="mb-4 mt-8 flex items-center gap-3">
      {Icon && <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/12 text-glow"><Icon size={20} /></div>}
      <div className="flex-1">
        <h2 className="font-display text-xl font-bold text-text-hi">{title}</h2>
        {sub && <p className="text-sm text-text-soft">{sub}</p>}
      </div>
      {action}
    </div>
  );
}

/* ------------------------------ Reveal --------------------------------- */
export function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}>
      {children}
    </motion.div>
  );
}
