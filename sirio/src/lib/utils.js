import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/* ----------------------------- Date helpers ---------------------------- */
export const MS_DAY = 86400000;

export function today() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}
export function parseDate(s) {
  if (!s) return null;
  const d = new Date(s + "T00:00:00");
  return isNaN(d) ? null : d;
}
export function toISO(d) {
  // componenti LOCALI, non UTC: per l'utenza italiana (UTC+1/+2) l'ISO UTC
  // della mezzanotte locale cadrebbe nel giorno precedente.
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
export function addDays(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}
export function daysBetween(a, b) {
  return Math.round((b - a) / MS_DAY);
}
export function fmtDate(d, opts) {
  return new Date(d).toLocaleDateString("it-IT", opts || { day: "numeric", month: "long", year: "numeric" });
}
export function fmtShort(d) {
  return new Date(d).toLocaleDateString("it-IT", { day: "numeric", month: "short" });
}
export function fmtTime(sec) {
  sec = Math.max(0, Math.floor(sec || 0));
  const m = Math.floor(sec / 60), s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/* ------------------------------- misc ---------------------------------- */
export function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
export function pct(v) { return `${Math.round(v)}%`; }
export function uid() { return Math.random().toString(36).slice(2, 10); }
export function shuffle(arr, seed = 1) {
  // deterministic-ish shuffle so a given quiz stays stable within a session
  const a = [...arr];
  let s = seed;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
