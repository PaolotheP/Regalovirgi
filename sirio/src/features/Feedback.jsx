import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bug, Lightbulb, Rocket, Sparkles, TrendingUp, ThumbsDown, ThumbsUp,
  MessageCircle, Send, Trash2, Copy, Mail, Star,
} from "lucide-react";
import { useStore } from "../lib/store.jsx";
import { Card, Button, Pill, Textarea, toast } from "../components/ui.jsx";
import { PageHeader } from "./common.jsx";
import { cn } from "../lib/utils.js";

const TO = ["p.garofoli05@gmail.com", "info@neldiritto.it"];

export const FEEDBACK_CATS = [
  { id: "bug", label: "Bug", icon: Bug, emoji: "🪲", color: "text-rose-500", chip: "border-rose-400/40 bg-rose-400/10", desc: "Qualcosa si rompe o non funziona" },
  { id: "consiglio", label: "Consiglio", icon: Lightbulb, emoji: "💡", color: "text-amber-500", chip: "border-amber-400/40 bg-amber-400/10", desc: "Un suggerimento su ciò che esiste" },
  { id: "funzione", label: "Nuova funzione", icon: Rocket, emoji: "🚀", color: "text-violet-500", chip: "border-violet-400/40 bg-violet-400/10", desc: "Qualcosa che Sirio dovrebbe avere" },
  { id: "idea", label: "Idea", icon: Sparkles, emoji: "✨", color: "text-glow", chip: "border-glow/40 bg-glow/10", desc: "Un'intuizione, anche vaga" },
  { id: "miglioria", label: "Miglioramento", icon: TrendingUp, emoji: "📈", color: "text-emerald-500", chip: "border-emerald-400/40 bg-emerald-400/10", desc: "Buono, ma può essere meglio" },
  { id: "inutile", label: "Cosa inutile", icon: ThumbsDown, emoji: "🗑️", color: "text-slate-400", chip: "border-slate-400/40 bg-slate-400/10", desc: "Non ti serve, toglila pure" },
  { id: "utile", label: "Cosa utile", icon: ThumbsUp, emoji: "💙", color: "text-brand-500", chip: "border-brand-400/40 bg-brand-400/10", desc: "Ti è piaciuta: dillo!" },
  { id: "altro", label: "Altro", icon: MessageCircle, emoji: "💬", color: "text-text-soft", chip: "border-line/25 bg-fill/10", desc: "Tutto il resto" },
];
const catOf = (id) => FEEDBACK_CATS.find((c) => c.id === id) || FEEDBACK_CATS[7];

function buildEmail(items, name) {
  const subject = `⭐ Sirio Beta — feedback di ${name || "uno studente"} (${items.length} segnalazion${items.length === 1 ? "e" : "i"})`;
  const lines = [
    "⭐ SIRIO — LA PIATTAFORMA CHE GUIDA ALL'APPRENDIMENTO",
    "════════════════════════════════════════",
    `Da: ${name || "Studente beta"}`,
    `Data: ${new Date().toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}`,
    `Segnalazioni: ${items.length}`,
    "════════════════════════════════════════",
    "",
  ];
  const byCat = {};
  items.forEach((f) => { (byCat[f.cat] = byCat[f.cat] || []).push(f); });
  for (const c of FEEDBACK_CATS) {
    const list = byCat[c.id];
    if (!list?.length) continue;
    lines.push(`${c.emoji} ${c.label.toUpperCase()} (${list.length})`);
    lines.push("────────────────────────");
    list.forEach((f, i) => { lines.push(`${i + 1}. ${f.text}`); lines.push(""); });
  }
  lines.push("════════════════════════════════════════");
  lines.push("Inviato dalla pagina Feedback beta di Sirio · Neldiritto Editore");
  return { subject, body: lines.join("\n") };
}

export default function Feedback() {
  const { state, dispatch } = useStore();
  const [cat, setCat] = useState("bug");
  const [text, setText] = useState("");
  const items = state.feedback;
  const active = catOf(cat);

  const add = () => {
    const t = text.trim();
    if (!t) return;
    dispatch({ type: "FEEDBACK_ADD", cat, text: t });
    setText("");
    toast("Segnalazione aggiunta alla lista", { icon: <active.icon size={14} /> });
  };

  const email = useMemo(() => buildEmail(items, state.profile.name), [items, state.profile.name]);
  const mailto = `mailto:${TO.join(",")}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`;

  const copyAll = async () => {
    try { await navigator.clipboard.writeText(email.body); toast("Testo copiato: incollalo dove vuoi", { icon: <Copy size={14} /> }); }
    catch { toast("Copia non riuscita"); }
  };

  return (
    <div>
      <PageHeader eyebrow="Costruisci Sirio con noi" title="Feedback beta" helpKey="feedback"
        sub="Sei tra i primi: ogni segnalazione conta. Scegli una categoria, scrivi, aggiungi alla lista — e invia tutto con un tocco." />

      {/* categorie */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {FEEDBACK_CATS.map((c, i) => {
          const on = cat === c.id;
          return (
            <motion.button key={c.id} onClick={() => setCat(c.id)}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}
              className={cn("rounded-xl2 border p-3.5 text-left transition-all",
                on ? cn(c.chip, "shadow-soft") : "border-line/10 bg-fill/[0.03] hover:border-line/25")}>
              <div className="flex items-center gap-2">
                <span className="text-xl leading-none">{c.emoji}</span>
                <c.icon size={16} className={c.color} />
              </div>
              <div className={cn("mt-2 text-sm font-bold", on ? "text-text-hi" : "text-text")}>{c.label}</div>
              <div className="mt-0.5 text-[0.68rem] leading-snug text-text-mute">{c.desc}</div>
            </motion.button>
          );
        })}
      </div>

      {/* composer */}
      <Card glass="glass-strong" className="mt-5 p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-lg">{active.emoji}</span>
          <span className="text-sm font-bold text-text-hi">{active.label}</span>
          <span className="text-xs text-text-mute">· {active.desc}</span>
        </div>
        <Textarea rows={3} value={text} onChange={(e) => setText(e.target.value)}
          placeholder={cat === "bug" ? "Cosa è successo? Dove? Cosa ti aspettavi?" : "Racconta…"} />
        <div className="mt-3 flex justify-end">
          <Button size="sm" onClick={add} disabled={!text.trim()}><Star size={14} /> Aggiungi alla lista</Button>
        </div>
      </Card>

      {/* lista + invio */}
      <Card className="mt-5 p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <h3 className="font-display text-lg font-bold text-text-hi">Le tue segnalazioni</h3>
          <Pill tone={items.length ? "glow" : "soft"}>{items.length}</Pill>
          <div className="flex-1" />
          {items.length > 0 && (
            <button onClick={() => dispatch({ type: "FEEDBACK_CLEAR" })} className="text-xs font-semibold text-text-mute transition hover:text-rose-500">
              Svuota tutto
            </button>
          )}
        </div>
        {items.length === 0 ? (
          <p className="text-sm text-text-mute">Ancora nessuna segnalazione. Anche una piccolezza — un bottone storto, una parola che non torna — per noi è un regalo.</p>
        ) : (
          <div className="space-y-2">
            <AnimatePresence initial={false}>
              {items.map((f) => {
                const c = catOf(f.cat);
                return (
                  <motion.div key={f.id} layout
                    initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12, height: 0 }}
                    className={cn("flex items-start gap-3 rounded-xl2 border p-3", c.chip)}>
                    <span className="text-lg leading-none">{c.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[0.65rem] font-bold uppercase tracking-wider text-text-mute">{c.label}</div>
                      <p className="mt-0.5 text-sm leading-relaxed text-text">{f.text}</p>
                    </div>
                    <button onClick={() => dispatch({ type: "FEEDBACK_REMOVE", id: f.id })}
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-text-mute transition hover:bg-rose-400/10 hover:text-rose-500">
                      <Trash2 size={14} />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {items.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="mt-5 rounded-xl2 glass-brand p-4">
            <div className="flex flex-wrap items-center gap-3">
              <Mail size={18} className="shrink-0 text-glow" />
              <p className="min-w-0 flex-1 text-sm text-text">
                L'email parte già <b className="text-text-hi">formattata e ordinata per categoria</b>, indirizzata a{" "}
                <b className="text-text-hi">p.garofoli05@gmail.com</b> e <b className="text-text-hi">info@neldiritto.it</b>.
              </p>
              <div className="flex gap-2">
                <Button as="a" href={mailto} size="sm"><Send size={14} /> Invia via email</Button>
                <Button variant="ghost" size="sm" onClick={copyAll}><Copy size={14} /> Copia il testo</Button>
              </div>
            </div>
          </motion.div>
        )}
      </Card>
    </div>
  );
}
