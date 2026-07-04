import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Sparkles, Info, ArrowRight, AlarmClock, Target, BookOpen } from "lucide-react";
import { CHAPTERS, PARTS, topicsByChapter } from "../data/curriculum.js";
const partBadge = (p) => (PARTS.length > 1 ? (p === "generale" ? "PG · " : "PS · ") : "");
import { useSelectors } from "../lib/store.jsx";
import { Card, Pill, Button, Modal, Ring } from "../components/ui.jsx";
import { PageHeader } from "./common.jsx";
import { useLongPress } from "../lib/hooks.js";
import { cn } from "../lib/utils.js";

/* ============================ LA COSTELLAZIONE ===========================
 * Ogni argomento è una stella: si accende quando lo padroneggi e perde luce
 * col passare dei giorni senza ripasso (curva dell'oblio). Un solo sistema
 * al posto della vecchia mappa termica: il cielo del tuo esame.
 * ======================================================================== */

const VB = { w: 1000, h: 640 };

function hashOf(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100000;
  return h;
}

/* path di una stella a 4 punte centrata in (0,0) */
function starPath(r) {
  const k = r * 0.22;
  return `M 0 ${-r} C ${k} ${-k}, ${k} ${-k}, ${r} 0 C ${k} ${k}, ${k} ${k}, 0 ${r} C ${-k} ${k}, ${-k} ${k}, ${-r} 0 C ${-k} ${-k}, ${-k} ${-k}, 0 ${-r} Z`;
}

/* disposizione: capitoli come asterismi in una griglia serpentina */
function useSkyLayout() {
  return useMemo(() => {
    const rows = CHAPTERS.map((ch) => ({ ch, topics: topicsByChapter(ch.part, ch.n) })).filter((r) => r.topics.length);
    const cols = 4;
    const cw = VB.w / cols;
    const rh = VB.h / Math.ceil(rows.length / cols);
    const stars = [];
    const links = [];
    const clusters = rows.map((r, ci) => {
      const gx = ci % cols, gy = Math.floor(ci / cols);
      const cx = gx * cw + cw / 2 + ((hashOf(r.ch.title) % 40) - 20);
      const cy = gy * rh + rh / 2 + ((hashOf(r.ch.title + "y") % 30) - 15);
      const pts = r.topics.map((t, i) => {
        const h = hashOf(t.id);
        const angle = (i / r.topics.length) * Math.PI * 2 + (h % 100) / 100;
        const rad = 34 + ((h >> 3) % 42);
        const x = Math.max(24, Math.min(VB.w - 24, cx + Math.cos(angle) * rad * 1.35));
        const y = Math.max(24, Math.min(VB.h - 24, cy + Math.sin(angle) * rad));
        const weight = Math.max(1, (t.pages?.[1] || 0) - (t.pages?.[0] || 0));
        return { t, x, y, weight };
      });
      pts.forEach((p, i) => { if (i > 0) links.push([pts[i - 1], p]); });
      stars.push(...pts);
      return { ch: r.ch, cx, cy, pts };
    });
    return { stars, links, clusters };
  }, []);
}

function starVisual(temp, mastery) {
  if (mastery <= 0) return { color: "rgb(var(--c-text-mute))", opacity: 0.3, glow: 0, lit: false };
  const p = temp / 100;
  return {
    color: p > 0.45 ? "rgb(var(--c-star))" : "rgb(var(--c-glow))",
    opacity: 0.35 + p * 0.65,
    glow: p, lit: p > 0.45,
  };
}

function SkyStar({ p, sel, onOpen, onPeek }) {
  const temp = sel.temp(p.t.id);
  const mastery = sel.mastery(p.t.id);
  const v = starVisual(temp, mastery);
  const r = 6 + Math.min(6, p.weight / 7) + (v.lit ? 2 : 0);
  const lp = useLongPress(() => onPeek(p.t));
  return (
    <g transform={`translate(${p.x},${p.y})`} className="cursor-pointer" role="button" aria-label={p.t.title}
      onClick={() => { if (!lp.didLongPress()) onOpen(p.t); }}
      onPointerDown={lp.onPointerDown} onPointerUp={lp.onPointerUp} onPointerLeave={lp.onPointerLeave} onPointerCancel={lp.onPointerCancel}>
      {/* alone */}
      {v.glow > 0.15 && (
        <motion.circle r={r * 2.6} fill={v.color} initial={false}
          animate={{ opacity: [v.glow * 0.14, v.glow * 0.3, v.glow * 0.14] }}
          transition={{ duration: 3.4, repeat: Infinity, delay: (hashOf(p.t.id) % 20) / 10 }} />
      )}
      <motion.path d={starPath(r)} fill={v.color} initial={false}
        animate={{ opacity: v.opacity, scale: [1, v.lit ? 1.08 : 1.02, 1] }}
        transition={{ duration: 3.8, repeat: Infinity, delay: (hashOf(p.t.id) % 30) / 10 }}
        whileHover={{ scale: 1.35 }} />
      {/* etichetta al passaggio */}
      <title>{p.t.title} — {mastery > 0 ? `${temp}° di luce` : "stella spenta"}</title>
    </g>
  );
}

export default function Heatmap() {
  const nav = useNavigate();
  const sel = useSelectors();
  const { stars, links, clusters } = useSkyLayout();
  const [peek, setPeek] = useState(null);
  const [wakeOpen, setWakeOpen] = useState(false);

  const lit = stars.filter((p) => { const t = sel.temp(p.t.id); return sel.mastery(p.t.id) > 0 && t >= 45; });
  const fading = stars.filter((p) => { const t = sel.temp(p.t.id); return sel.mastery(p.t.id) > 0 && t < 45; })
    .sort((a, b) => sel.temp(a.t.id) - sel.temp(b.t.id));
  const off = stars.length - lit.length - fading.length;

  const openTopic = (t) => nav(`/app/topic/${t.id}`);
  const peekText = peek ? String(peek.layers?.essenziale || peek.subtitle || "").replace(/<[^>]+>/g, " ").slice(0, 220) : "";

  return (
    <div>
      <PageHeader eyebrow="Il cielo da aprire ogni giorno" title="La tua costellazione" helpKey="cielo"
        sub="Ogni argomento è una stella: si accende quando lo padroneggi e perde luce nei giorni senza ripasso. Tienila premuta per un'anteprima, toccala per studiare."
        right={fading.length > 0 && (
          <Button variant="warm" size="sm" onClick={() => setWakeOpen(true)} className="animate-pulseWarm">
            <AlarmClock size={15} /> Sveglia le stelle spente ({fading.length})
          </Button>
        )} />

      {/* legenda + contatori */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Pill tone="warm"><Star size={12} className="fill-current" /> {lit.length} accese</Pill>
        <Pill tone="glow"><Sparkles size={12} /> {fading.length} in decadenza</Pill>
        <Pill tone="soft">{off} da accendere</Pill>
      </div>

      {lit.length + fading.length === 0 && (
        <Card glass="glass-brand" className="mb-5 flex items-center gap-3 p-4">
          <Info size={18} className="shrink-0 text-glow" />
          <p className="text-sm text-text">Il tuo cielo è ancora buio: le stelle si accendono quando studi e superi i quiz. Comincia dal primo argomento del piano — stasera la vedrai brillare qui.</p>
        </Card>
      )}

      {/* ============ IL CIELO ============ */}
      <Card glass="glass-strong" className="overflow-hidden p-0">
        <div className="relative">
          <svg viewBox={`0 0 ${VB.w} ${VB.h}`} className="block w-full" style={{ aspectRatio: `${VB.w}/${VB.h}` }}>
            {/* fondo cielo: sempre notturno, in ogni tema (è il cielo di Sirio) */}
            <defs>
              <radialGradient id="skybg" cx="0.5" cy="0.2" r="1">
                <stop offset="0" stopColor="#101a3d" /><stop offset="0.6" stopColor="#0a1024" /><stop offset="1" stopColor="#060a18" />
              </radialGradient>
            </defs>
            <rect width={VB.w} height={VB.h} fill="url(#skybg)" rx="0" />
            {/* polvere di stelle di fondo */}
            {Array.from({ length: 70 }, (_, i) => {
              const h = hashOf("dust" + i);
              return <circle key={i} cx={h % VB.w} cy={(h >> 2) % VB.h} r={0.9 + (h % 10) / 12} fill="#9db8e8" opacity={0.12 + (h % 20) / 100} />;
            })}
            {/* tracciati fra le stelle */}
            {links.map(([a, b], i) => {
              const va = starVisual(sel.temp(a.t.id), sel.mastery(a.t.id));
              const vb = starVisual(sel.temp(b.t.id), sel.mastery(b.t.id));
              const on = Math.min(va.glow, vb.glow);
              return (
                <motion.line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={on > 0.4 ? "rgb(var(--c-star))" : "#7ea2e0"} strokeWidth={on > 0.4 ? 1.4 : 0.8}
                  initial={false} animate={{ opacity: 0.08 + on * 0.5 }} transition={{ duration: 0.8 }} />
              );
            })}
            {/* nomi dei capitoli */}
            {clusters.map((c) => (
              <text key={`${c.ch.part}-${c.ch.n}`} x={c.cx} y={c.cy - 4} textAnchor="middle"
                fill="#8ca6d8" opacity="0.4" fontSize="11" fontStyle="italic" fontFamily="Fraunces, Georgia, serif">
                {c.ch.title.length > 26 ? c.ch.title.slice(0, 24) + "…" : c.ch.title}
              </text>
            ))}
            {/* le stelle */}
            {stars.map((p) => (
              <SkyStar key={p.t.id} p={p} sel={sel} onOpen={openTopic} onPeek={setPeek} />
            ))}
          </svg>
          <div className="pointer-events-none absolute bottom-3 right-4 text-[0.65rem] italic text-white/40 font-display">
            tieni premuta una stella per l'anteprima
          </div>
        </div>
      </Card>

      {/* ============ ELENCO PER CAPITOLI (accessibile) ============ */}
      <h2 className="mb-3 mt-8 font-display text-lg font-bold text-text-hi">Le stelle, capitolo per capitolo</h2>
      <div className="space-y-5">
        {clusters.map(({ ch, pts }) => (
          <div key={`${ch.part}-${ch.n}`}>
            <div className="mb-2 font-sans text-xs font-bold uppercase tracking-wider text-text-mute">
              {partBadge(ch.part)}Cap. {ch.n} — {ch.title}
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {pts.map(({ t }) => {
                const temp = sel.temp(t.id);
                const mastery = sel.mastery(t.id);
                const v = starVisual(temp, mastery);
                return (
                  <motion.button key={t.id} whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} onClick={() => openTopic(t)}
                    className={cn("flex items-center gap-2.5 rounded-xl2 border p-3 text-left transition",
                      v.lit ? "border-accent-400/40 bg-accent-400/10" : mastery > 0 ? "border-glow/25 bg-glow/[0.06]" : "border-line/10 bg-fill/[0.03]")}>
                    <Star size={16} style={{ color: v.color, opacity: Math.max(0.4, v.opacity) }} className={v.lit ? "fill-current" : undefined} />
                    <span className="min-w-0 flex-1 truncate text-xs font-semibold text-text">{t.title}</span>
                    <span className="text-[0.62rem] font-bold text-text-mute">{mastery > 0 ? `${temp}°` : "—"}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ============ PEEK (tocco prolungato) ============ */}
      <Modal open={!!peek} onClose={() => setPeek(null)}>
        {peek && (
          <div>
            <div className="flex items-center gap-3">
              <Ring value={sel.mastery(peek.id)} size={52} stroke={6}>
                <span className="text-[0.65rem] font-bold text-text-hi">{sel.mastery(peek.id)}%</span>
              </Ring>
              <div className="min-w-0">
                <div className="eyebrow">Anteprima</div>
                <h3 className="font-display text-lg font-bold leading-tight text-text-hi">{peek.title}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text font-serif">{peekText}…</p>
            <div className="mt-4 flex gap-2">
              <Button className="flex-1" size="sm" onClick={() => { setPeek(null); openTopic(peek); }}>
                <BookOpen size={15} /> Apri l'argomento
              </Button>
              {peek.quiz?.length > 0 && (
                <Button variant="ghost" size="sm" onClick={() => { setPeek(null); nav(`/app/quiz/${peek.id}`); }}>
                  <Target size={15} /> Quiz
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>

      {/* ============ SVEGLIA LE STELLE SPENTE ============ */}
      <Modal open={wakeOpen} onClose={() => setWakeOpen(false)} className="max-w-lg">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-500/15 text-accent-500"><AlarmClock size={22} /></div>
          <div>
            <h3 className="font-display text-xl font-bold text-text-hi">Sveglia le stelle spente</h3>
            <p className="text-sm text-text-soft">Ripasso mirato solo su ciò che sta perdendo luce.</p>
          </div>
        </div>
        <div className="mt-4 max-h-64 space-y-2 overflow-y-auto pr-1">
          {fading.slice(0, 10).map(({ t }) => {
            const temp = sel.temp(t.id);
            return (
              <button key={t.id} onClick={() => { setWakeOpen(false); nav(t.quiz?.length ? `/app/quiz/${t.id}` : `/app/topic/${t.id}`); }}
                className="flex w-full items-center gap-3 rounded-xl2 border border-line/10 bg-fill/[0.03] p-3 text-left transition hover:border-accent-400/40">
                <Star size={16} className="shrink-0 text-glow" style={{ opacity: 0.35 + (temp / 100) * 0.6 }} />
                <span className="min-w-0 flex-1 truncate text-sm font-semibold text-text">{t.title}</span>
                <Pill tone="warn">{temp}°</Pill>
                <ArrowRight size={14} className="shrink-0 text-glow" />
              </button>
            );
          })}
        </div>
        {fading[0] && (
          <Button className="mt-4 w-full" variant="warm"
            onClick={() => { const t = fading[0].t; setWakeOpen(false); nav(t.quiz?.length ? `/app/quiz/${t.id}` : `/app/topic/${t.id}`); }}>
            <Sparkles size={16} /> Inizia dalla più fioca: {fading[0].t.title.slice(0, 30)}{fading[0].t.title.length > 30 ? "…" : ""}
          </Button>
        )}
      </Modal>
    </div>
  );
}
