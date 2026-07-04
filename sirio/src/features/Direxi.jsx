import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowLeft, X, CalendarRange, BookOpen, Target, Star, Layers, Grid3x3,
  Mic, UsersRound, GraduationCap, Zap, Brain, Sparkles, CheckCircle2, Sun,
} from "lucide-react";
import { useStore } from "../lib/store.jsx";
import { clamp } from "../lib/utils.js";

/* Avvia il tour da qualunque punto (pulsante "?" nella topbar). */
export function startTour() {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("sirio-tour"));
}

/* ------------------------- Mascotte "Direxi" --------------------------- */
/* Piccola stella-compagna di Sirio: corpo a quattro punte in vetro blu,
   viso luminoso, guance ambrate. Fluttua, pensa (bagliore) e festeggia.
   Esportata: la usa anche il compagno d'angolo. */
export function DirexiStar({ mood = "hi", size = 92, thinking = false }) {
  return (
    <motion.svg width={size} height={size} viewBox="0 0 120 120"
      className="shrink-0 drop-shadow-[0_10px_26px_rgba(78,165,255,0.5)]"
      animate={{ y: [0, -6, 0], rotate: mood === "cheer" ? [0, -6, 6, 0] : [-2, 2, -2] }}
      transition={{ duration: mood === "cheer" ? 1.6 : 4, repeat: Infinity, ease: "easeInOut" }}>
      <defs>
        <linearGradient id="dx-star" x1="20" y1="16" x2="100" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#bfe4ff" /><stop offset="0.5" stopColor="#3f8cff" /><stop offset="1" stopColor="#16307e" />
        </linearGradient>
        <radialGradient id="dx-face" cx="0.5" cy="0.44" r="0.62">
          <stop offset="0" stopColor="#ffffff" /><stop offset="0.75" stopColor="#cfe8ff" /><stop offset="1" stopColor="#8ec4ff" />
        </radialGradient>
      </defs>
      {/* alone (più forte quando "pensa") */}
      <motion.circle cx="60" cy="62" r="46" fill="#4ea5ff"
        animate={{ opacity: thinking ? [0.14, 0.3, 0.14] : 0.14 }}
        transition={{ duration: 1.4, repeat: thinking ? Infinity : 0 }} />
      {/* corpo a stella (4 punte morbide) */}
      <path fill="url(#dx-star)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4"
        d="M60 6 C64.5 40 70.5 48 112 62 C70.5 76 64.5 84 60 118 C55.5 84 49.5 76 8 62 C49.5 48 55.5 40 60 6 Z" />
      {/* viso luminoso */}
      <circle cx="60" cy="62" r="21" fill="url(#dx-face)" />
      {/* occhi */}
      <circle cx="53.5" cy="59" r="3.6" fill="#0a1330" />
      <circle cx="66.5" cy="59" r="3.6" fill="#0a1330" />
      <circle cx="54.6" cy="57.9" r="1.2" fill="#fff" />
      <circle cx="67.6" cy="57.9" r="1.2" fill="#fff" />
      {/* bocca */}
      <path d={mood === "cheer" ? "M52 67 q8 9 16 0" : mood === "point" ? "M54 68.5 q6 4 12 1" : "M53 68 q7 6 14 0"}
        fill="none" stroke="#0a1330" strokeWidth="2.3" strokeLinecap="round" />
      {/* guance ambrate */}
      <circle cx="46.5" cy="65" r="2.8" fill="#ff9a45" opacity="0.55" />
      <circle cx="73.5" cy="65" r="2.8" fill="#ff9a45" opacity="0.55" />
      {/* scintille compagne */}
      <motion.circle cx="97" cy="26" r="2.6" fill="#ffd7a8"
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.2, repeat: Infinity }} />
      <motion.circle cx="22" cy="32" r="2" fill="#bfe6ff"
        animate={{ opacity: [1, 0.35, 1] }} transition={{ duration: 2.8, repeat: Infinity }} />
    </motion.svg>
  );
}
const Direxi = DirexiStar;

const STEPS = [
  { target: null, icon: Sparkles, mood: "hi", title: "Ciao, sono Direxi ✨",
    text: "Sono la tua stella-compagna su Sirio. Vivo nell'angolo dello schermo: quando hai un dubbio su una funzione, tocca il «?» e te la spiego. Ora ti accompagno funzione per funzione: per ognuna ti mostro anche com'è fatta la schermata, così quando ci arriverai saprai già muoverti.",
    how: ["Tocca «Avanti» per scorrere le funzioni una alla volta.", "Sotto ogni spiegazione trovi l'anteprima della schermata vera.", "Puoi riaprire questa guida quando vuoi dal pulsante «?» in alto."] },
  { target: "materia", icon: BookOpen, mood: "point", title: "La tua materia",
    text: "Qui vedi la materia che stai preparando. Ogni materia è una costellazione a sé: piano, stelle e progressi restano separati, come due cieli diversi. Cambiare materia non cancella nulla: al ritorno ritrovi tutto come l'avevi lasciato.",
    how: ["Tocca la scheda «Materia» in cima al menu.", "Scegli la costellazione e conferma con «Vai a…».", "L'app riparte sul nuovo cielo; i progressi dell'altro restano al sicuro."] },
  { target: "piano", icon: CalendarRange, mood: "point", title: "Il tuo Piano di studi",
    text: "È il centro di tutto: distribuisce gli argomenti sui giorni che ti separano dall'esame, in proporzione alle pagine dell'indice, e riserva gli ultimi giorni al solo ripasso. Se salti dei giorni si rimodella da solo: nessun senso di colpa, si riparte da dove sei.",
    how: ["Apri «Piano di studi» dal menu: il giorno di oggi è evidenziato.", "Tocca l'argomento del giorno e poi «Studia ora».", "Dal calendario puoi trascinare gli argomenti su altri giorni."] },
  { target: "heatmap", icon: Star, mood: "point", title: "La tua costellazione",
    text: "Ogni argomento è una stella: si accende quando lo padroneggi e perde luce nei giorni senza ripasso, proprio come la memoria. In un colpo d'occhio vedi dove sei forte e cosa si sta spegnendo.",
    how: ["Apri «Costellazione» dal menu.", "Le stelle spente o fioche sono gli argomenti da rinfrescare.", "Tocca «Sveglia le stelle spente» per un ripasso mirato solo su quelle."] },
  { target: "argomenti", icon: BookOpen, mood: "point", title: "Studiare un argomento",
    text: "Ogni argomento usa la Lettura a strati: parti dall'essenziale (poche righe, il cuore del tema) e apri solo la densità che ti serve — approfondimenti, giurisprudenza, eccezioni, esempi concreti. Così leggi sempre al livello giusto per il tuo obiettivo.",
    how: ["Apri «Argomenti» e scegli un capitolo dall'indice.", "Leggi l'Essenziale, poi apri gli strati che ti servono.", "In fondo trovi sintesi, esempi, quiz e la domanda da orale."] },
  { target: "quiz", icon: Target, mood: "point", title: "Quiz e Scommessa",
    text: "Prima di rispondere, punta quanto sei sicuro. Il punteggio premia chi è preparato E ben calibrato: imparerai a fidarti di te al punto giusto, che è esattamente ciò che serve all'orale. Ogni errore ti viene rispiegato, con la fonte del manuale.",
    how: ["Apri «Quiz» e scegli l'argomento.", "Sposta la scommessa (quanto ti senti sicuro), poi rispondi.", "Leggi la spiegazione: gli errori finiscono da soli nello Schedario."] },
  { target: "leitner", icon: Layers, mood: "point", title: "Schedario degli errori",
    text: "Ogni risposta sbagliata diventa una carta che torna a intervalli crescenti (metodo Leitner a 5 scatole), finché non la padroneggi davvero. Svuota il mazzo e non ripeterai lo stesso errore all'esame.",
    how: ["Apri «Schedario»: trovi le carte in scadenza oggi.", "Rispondi a mente, poi gira la carta e dichiara se la sapevi.", "Le carte giuste salgono di scatola; quelle sbagliate ripartono."] },
  { target: "flashcards", icon: Grid3x3, mood: "point", title: "Flashcard",
    text: "Allenano il recupero attivo, fronte/retro: il modo più efficace per fissare definizioni e concetti. Bastano pochi minuti tra un'attività e l'altra, anche dal telefono in autobus.",
    how: ["Scegli l'argomento e scorri le carte.", "Prova a rispondere PRIMA di girare la carta.", "Segna quelle difficili: torneranno più spesso."] },
  { target: "podcast", icon: Mic, mood: "point", title: "Podcast, Video e Mappe",
    text: "Lo stesso contenuto di studio, da ascoltare o guardare: episodi divisi in capitoli navigabili, velocità regolabile, perfetti mentre cammini o in pausa. Le mappe ti danno il quadro d'insieme prima del dettaglio.",
    how: ["Apri «Podcast» (o «Video», «Mappe») dal menu.", "Scegli l'argomento e salta al capitolo che ti serve.", "Regola la velocità (1×, 1.25×, 1.5×) come preferisci."] },
  { target: "costudy", icon: UsersRound, mood: "point", title: "Studia in compagnia",
    text: "Entra in un gruppo di coorte, sfida la classifica o apri una stanza di co-studio: la community ti tiene in carreggiata nei giorni in cui la motivazione cala. Studiare insieme, anche a distanza, funziona.",
    how: ["Apri «Co-studio» e scegli una stanza aperta.", "Imposta un timer pomodoro condiviso e studia in silenzio.", "In «Coorte» e «Classifica» vedi come procede il gruppo."] },
  { target: "mentori", icon: GraduationCap, mood: "point", title: "Mentori e Q&A",
    text: "Chiedi a chi ha già superato quell'esame e leggi le domande più utili, votate dalla community. Metodo ed esperienza reale che nessun manuale può darti.",
    how: ["Apri «Mentori» e scegli un profilo affine al tuo corso.", "In «Q&A» cerca prima tra le domande già risposte.", "Vota le risposte utili: aiuti chi arriva dopo di te."] },
  { target: "ripasso", icon: Zap, mood: "point", title: "Ripasso last minute",
    text: "Nelle ore prima della prova trovi qui solo l'indispensabile e un glossario essenziale: una rilettura lucida e senza dispersione, pensata per l'ultimo miglio. Niente panico: solo ciò che conta.",
    how: ["Aprilo il giorno prima (o la mattina) dell'esame.", "Scorri le voci in ordine: ognuna dice quanti minuti richiede.", "Chiudi con il glossario: i termini che fanno bella figura all'orale."] },
  { target: "ai", icon: Brain, mood: "hi", title: "Le funzioni AI",
    text: "Tutor ed Esaminatore AI arriveranno con i piani superiori: per ora le vedi «dietro vetro», così sai già cosa aspettarti. Tutto il resto della piattaforma funziona già, subito e senza costi.",
    how: ["Le riconosci dal vetro smerigliato e dal lucchetto.", "Puoi sbirciare com'è fatta la schermata, ma non serve per la beta.", "Tutto ciò che ti serve per l'esame è già attivo."] },
  { target: "theme", icon: Sun, mood: "hi", title: "I quattro temi",
    text: "Chiaro per il giorno, Scuro per la sera, Notturno a bassissima luce blu per lo studio a tarda ora, e Auto che segue l'orario. Il cambio è un'onda che si espande dal pulsante: provala.",
    how: ["Tocca l'icona del tema in alto a destra.", "Ogni tocco passa al tema successivo.", "«Auto» sceglie da solo in base all'ora del giorno."] },
  { target: "feedback", icon: CheckCircle2, mood: "cheer", title: "Sei una stella beta ✨",
    text: "Sirio cresce con te: dal pannello Feedback segnali bug, idee e proposte, divisi per categoria, e li invii all'editore con un tocco. Anche una parola storta per te è un regalo per noi. Ora comincia dal tuo piano: un passo al giorno e la tua costellazione si accende. In bocca al lupo!",
    how: ["Apri «Feedback beta» in fondo al menu.", "Scegli la categoria (bug, idea, proposta…) e scrivi due righe.", "Tocca «Invia»: si prepara un'email già pronta per l'editore."] },
];

/* ---------- Anteprime in miniatura delle schermate (per il tour) ----------
   Piccole ricostruzioni fedeli di ogni pagina: mostrano COM'È FATTA la
   funzione mentre Direxi la spiega, così il processo si capisce a colpo
   d'occhio anche prima di aprirla. Solo elementi di tema (nessuna immagine). */
function Bar({ w = "100%", h = 6, tone = "soft" }) {
  const bg = tone === "hi" ? "bg-text-hi/50" : tone === "glow" ? "bg-glow/70" : "bg-fill/25";
  return <div className={`rounded-full ${bg}`} style={{ width: w, height: h }} />;
}
function Frame({ label, children }) {
  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-line/12 bg-bg-2/85">
      <div className="flex items-center gap-1.5 border-b border-line/10 bg-fill/[0.05] px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
        <span className="ml-1.5 truncate text-[0.58rem] font-bold uppercase tracking-[0.14em] text-text-mute">{label}</span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}
function PvPill({ children, on }) {
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6rem] font-bold ${on ? "bg-glow/15 text-glow" : "bg-fill/10 text-text-mute"}`}>{children}</span>;
}
function PvStars({ lit = 4 }) {
  const pts = [[12, 26], [30, 10], [50, 20], [70, 8], [88, 22], [62, 34], [24, 38]];
  return (
    <svg viewBox="0 0 100 46" className="h-16 w-full">
      {pts.slice(0, -1).map(([x, y], i) => <line key={i} x1={x} y1={y} x2={pts[i + 1][0]} y2={pts[i + 1][1]} stroke="currentColor" className="text-glow/30" strokeWidth="1" />)}
      {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i < lit ? 2.6 : 1.5} className={i < lit ? "fill-glow" : "fill-fill/40"} />)}
    </svg>
  );
}
function TourPreview({ step }) {
  const t = step.target;
  if (t === null) return (
    <Frame label="Il tuo cruscotto">
      <div className="flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-lg bg-brand-grad text-[0.6rem] font-bold text-white">✦</span><Bar w="45%" h={8} tone="hi" /></div>
      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {["Oggi", "Piano", "Stelle"].map((x) => (
          <div key={x} className="rounded-lg border border-line/10 bg-fill/[0.04] p-2">
            <div className="text-[0.56rem] font-bold uppercase tracking-wider text-text-mute">{x}</div>
            <Bar w="70%" h={5} />
          </div>
        ))}
      </div>
    </Frame>
  );
  if (t === "materia") return (
    <Frame label="Cambia materia">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-glow/50 bg-glow/10 p-2"><PvStars lit={6} /><div className="mt-1 text-[0.62rem] font-bold text-text-hi">Diritto penale</div><PvPill on>✓ attiva</PvPill></div>
        <div className="rounded-lg border border-line/10 bg-fill/[0.03] p-2"><PvStars lit={3} /><div className="mt-1 text-[0.62rem] font-bold text-text-soft">Diritto tributario</div><PvPill>progressi salvati</PvPill></div>
      </div>
    </Frame>
  );
  if (t === "piano") return (
    <Frame label="Piano di studi">
      <div className="space-y-1.5">
        {[["Ieri", false, "60%"], ["OGGI", true, "78%"], ["Domani", false, "52%"]].map(([d, on, w]) => (
          <div key={d} className={`flex items-center gap-2 rounded-lg border p-1.5 ${on ? "border-glow/45 bg-glow/10" : "border-line/10 bg-fill/[0.03]"}`}>
            <span className={`h-2 w-2 shrink-0 rounded-full ${on ? "bg-glow" : "bg-fill/30"}`} />
            <span className={`w-12 shrink-0 text-[0.58rem] font-bold ${on ? "text-glow" : "text-text-mute"}`}>{d}</span>
            <Bar w={w} h={5} tone={on ? "hi" : "soft"} />
            {on && <span className="ml-auto shrink-0 rounded-full bg-brand-grad px-2 py-0.5 text-[0.56rem] font-bold text-white">Studia ora</span>}
          </div>
        ))}
      </div>
    </Frame>
  );
  if (t === "heatmap") return (
    <Frame label="La tua costellazione">
      <PvStars lit={4} />
      <div className="mt-1.5 flex items-center justify-between">
        <div className="flex gap-1"><PvPill on>4 accese</PvPill><PvPill>3 da svegliare</PvPill></div>
        <span className="rounded-full border border-glow/40 px-2 py-0.5 text-[0.58rem] font-bold text-glow">Sveglia le stelle spente</span>
      </div>
    </Frame>
  );
  if (t === "argomenti") return (
    <Frame label="Lettura a strati">
      <div className="rounded-lg border border-glow/40 bg-glow/8 p-2"><div className="text-[0.6rem] font-bold text-glow">ESSENZIALE</div><div className="mt-1 space-y-1"><Bar /><Bar w="85%" /><Bar w="60%" /></div></div>
      {["Approfondimenti", "Giurisprudenza", "Eccezioni"].map((x) => (
        <div key={x} className="mt-1.5 flex items-center justify-between rounded-lg border border-line/10 bg-fill/[0.03] px-2 py-1.5">
          <span className="text-[0.62rem] font-semibold text-text-soft">{x}</span><span className="text-[0.7rem] font-bold text-glow">+</span>
        </div>
      ))}
    </Frame>
  );
  if (t === "quiz") return (
    <Frame label="Quiz con scommessa">
      <Bar w="90%" h={7} tone="hi" />
      <div className="mt-2 space-y-1">
        {[false, true, false, false].map((ok, k) => (
          <div key={k} className={`flex items-center gap-2 rounded-lg border px-2 py-1 ${ok ? "border-emerald-400/50 bg-emerald-400/10" : "border-line/10 bg-fill/[0.03]"}`}>
            <span className={`text-[0.6rem] font-bold ${ok ? "text-emerald-500" : "text-text-mute"}`}>{"ABCD"[k]}</span><Bar w={`${70 - k * 8}%`} h={4} />{ok && <span className="ml-auto text-[0.62rem] font-bold text-emerald-500">✓</span>}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2"><span className="text-[0.58rem] font-bold uppercase tracking-wider text-text-mute">Scommessa</span><div className="h-1.5 flex-1 rounded-full bg-fill/15"><div className="h-full w-3/4 rounded-full bg-brand-grad" /></div><span className="text-[0.62rem] font-bold text-glow">75%</span></div>
    </Frame>
  );
  if (t === "leitner") return (
    <Frame label="Schedario (5 scatole)">
      <div className="flex items-end justify-between gap-1.5">
        {[5, 3, 2, 1, 1].map((n, k) => (
          <div key={k} className="flex-1 text-center">
            <div className="relative mx-auto rounded-md border border-line/15 bg-fill/[0.05]" style={{ height: 18 + n * 5 }}>
              {k === 0 && <span className="absolute -top-1.5 right-0 grid h-3.5 w-3.5 place-items-center rounded-full bg-rose-500 text-[0.5rem] font-bold text-white">{n}</span>}
            </div>
            <div className="mt-1 text-[0.55rem] font-bold text-text-mute">{k + 1}</div>
          </div>
        ))}
      </div>
      <div className="mt-1.5 text-center text-[0.6rem] text-text-soft">le carte salgono di scatola a ogni risposta giusta</div>
    </Frame>
  );
  if (t === "flashcards") return (
    <Frame label="Flashcard">
      <div className="flex items-center justify-center gap-3">
        <div className="w-1/3 rounded-lg border border-line/12 bg-fill/[0.05] p-2 text-center"><div className="text-[0.58rem] font-bold uppercase text-text-mute">Fronte</div><div className="mt-1 font-display text-base font-bold text-text-hi">?</div></div>
        <span className="text-glow">⇄</span>
        <div className="w-1/3 rounded-lg border border-glow/40 bg-glow/10 p-2 text-center"><div className="text-[0.58rem] font-bold uppercase text-glow">Retro</div><div className="mt-1 space-y-1"><Bar h={4} /><Bar w="70%" h={4} /></div></div>
      </div>
    </Frame>
  );
  if (t === "podcast") return (
    <Frame label="Podcast a capitoli">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-grad text-[0.65rem] text-white">▶</span>
        <div className="flex-1"><div className="h-1.5 rounded-full bg-fill/15"><div className="h-full w-1/3 rounded-full bg-glow" /></div>
          <div className="mt-1 flex justify-between text-[0.55rem] text-text-mute"><span>Cap. 1</span><span>Cap. 2</span><span>Cap. 3</span></div></div>
        <PvPill on>1.25×</PvPill>
      </div>
    </Frame>
  );
  if (t === "costudy") return (
    <Frame label="Stanza di co-studio">
      <div className="flex items-center gap-1.5">
        {["A", "S", "M"].map((x) => <span key={x} className="grid h-6 w-6 place-items-center rounded-full bg-brand-500/20 text-[0.6rem] font-bold text-glow">{x}</span>)}
        <PvPill on>● LIVE</PvPill>
        <span className="ml-auto rounded-full bg-fill/10 px-2 py-0.5 font-mono text-[0.62rem] font-bold text-text-hi">25:00</span>
      </div>
      <div className="mt-2 rounded-lg rounded-tl-none border border-line/10 bg-fill/[0.04] px-2 py-1.5 text-[0.62rem] text-text-soft">Pausa tra 10 minuti, tieni duro ✊</div>
    </Frame>
  );
  if (t === "mentori") return (
    <Frame label="Mentori · Q&A">
      <div className="flex items-center gap-2 rounded-lg border border-line/10 bg-fill/[0.03] p-2">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-grad text-[0.6rem] font-bold text-white">G</span>
        <div className="min-w-0 flex-1"><Bar w="55%" h={5} tone="hi" /><div className="mt-1"><Bar w="80%" h={4} /></div></div>
        <PvPill on>30 e lode</PvPill>
      </div>
      <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-line/10 bg-fill/[0.03] p-2">
        <span className="text-[0.62rem] font-bold text-glow">▲ 24</span><Bar w="65%" h={4} /><PvPill>risposta del mentore</PvPill>
      </div>
    </Frame>
  );
  if (t === "ripasso") return (
    <Frame label="Ripasso last minute">
      <div className="space-y-1.5">
        {[["Il tributo e le sue specie", "2′"], ["Artt. 23 e 53 Cost.", "3′"], ["Glossario essenziale", "4′"]].map(([x, m]) => (
          <div key={x} className="flex items-center gap-2 rounded-lg border border-line/10 bg-fill/[0.03] px-2 py-1.5">
            <span className="grid h-3.5 w-3.5 place-items-center rounded border border-glow/50 text-[0.55rem] text-glow">✓</span>
            <span className="flex-1 truncate text-[0.62rem] font-semibold text-text-soft">{x}</span>
            <span className="text-[0.6rem] font-bold text-text-mute">{m}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
  if (t === "ai") return (
    <Frame label="Tutor AI (dietro vetro)">
      <div className="relative">
        <div className="space-y-1.5 blur-[2px]"><Bar w="85%" /><Bar w="70%" /><Bar w="90%" /></div>
        <div className="absolute inset-0 grid place-items-center">
          <span className="rounded-full border border-line/20 bg-bg-2/90 px-2.5 py-1 text-[0.6rem] font-bold text-text-soft">🔒 Nei piani superiori</span>
        </div>
      </div>
    </Frame>
  );
  if (t === "theme") return (
    <Frame label="Quattro temi">
      <div className="grid grid-cols-4 gap-1.5 text-center">
        {[["Chiaro", "#edf2fa", "#1b2b4a"], ["Scuro", "#101a30", "#dbe7ff"], ["Notte", "#05070d", "#8fa3c8"], ["Auto", "linear-gradient(90deg,#edf2fa 50%,#05070d 50%)", "#7f92b8"]].map(([n, bg, fg]) => (
          <div key={n}>
            <div className="mx-auto grid h-9 w-full place-items-center rounded-lg border border-line/15" style={{ background: bg }}><span className="text-[0.6rem] font-bold" style={{ color: fg }}>Aa</span></div>
            <div className="mt-1 text-[0.55rem] font-bold text-text-mute">{n}</div>
          </div>
        ))}
      </div>
    </Frame>
  );
  if (t === "feedback") return (
    <Frame label="Feedback beta">
      <div className="flex flex-wrap gap-1.5">
        <PvPill on>🐞 Bug</PvPill><PvPill>💡 Idea</PvPill><PvPill>🚀 Proposta</PvPill>
      </div>
      <div className="mt-2 rounded-lg border border-line/10 bg-fill/[0.04] p-2"><Bar w="90%" h={4} /><div className="mt-1"><Bar w="60%" h={4} /></div></div>
      <div className="mt-2 text-right"><span className="rounded-full bg-brand-grad px-2.5 py-1 text-[0.6rem] font-bold text-white">Invia all'editore ✉</span></div>
    </Frame>
  );
  return null;
}

function computeLayout(target) {
  const vw = (typeof window !== "undefined" && window.innerWidth) || 1024;
  const vh = (typeof window !== "undefined" && window.innerHeight) || 768;
  const BW = Math.min(390, vw - 28);
  const EH = Math.min(640, vh - 40); // la scheda ora include anteprima + "come si usa"
  let rect = null;
  if (target && typeof document !== "undefined") {
    const el = document.querySelector(`[data-tour="${target}"]`);
    if (el) {
      try { el.scrollIntoView?.({ block: "nearest", inline: "nearest" }); } catch {}
      const r = el.getBoundingClientRect?.();
      if (r && r.width > 4 && r.height > 4) rect = { top: r.top, left: r.left, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
    }
  }
  if (!rect) return { rect: null, place: "center", bx: (vw - BW) / 2, by: Math.max(24, vh / 2 - EH / 2), bw: BW };
  if (rect.right + 24 + BW <= vw) return { rect, place: "right", bx: rect.right + 20, by: clamp(rect.top - 14, 16, vh - EH - 16), bw: BW };
  if (rect.bottom + 16 + EH <= vh) return { rect, place: "below", bx: clamp(rect.left, 16, vw - BW - 16), by: rect.bottom + 16, bw: BW };
  return { rect, place: "center", bx: (vw - BW) / 2, by: Math.max(24, vh / 2 - EH / 2), bw: BW };
}

export default function DirexiTour() {
  const { state, dispatch } = useStore();
  const loc = useLocation();
  const [active, setActive] = useState(false);
  const [i, setI] = useState(0);
  const [layout, setLayout] = useState({ rect: null, place: "center", bx: 0, by: 0, bw: 360 });
  const started = useRef(false);
  const step = STEPS[i];

  const close = useCallback(() => { setActive(false); dispatch({ type: "SET_TOUR_SEEN" }); }, [dispatch]);
  const begin = useCallback(() => { setI(0); setActive(true); }, []);

  // avvio manuale dal pulsante "?"
  useEffect(() => {
    const h = () => begin();
    window.addEventListener("sirio-tour", h);
    return () => window.removeEventListener("sirio-tour", h);
  }, [begin]);

  // primo accesso: parte da solo sulla dashboard
  useEffect(() => {
    if (started.current) return;
    if (!state.tourSeen && loc.pathname === "/app") {
      started.current = true;
      const t = setTimeout(() => begin(), 850);
      return () => clearTimeout(t);
    }
  }, [state.tourSeen, loc.pathname, begin]);

  // misura il bersaglio ad ogni passo + su resize/scroll
  useLayoutEffect(() => {
    if (!active) return;
    const measure = () => setLayout(computeLayout(step.target));
    measure();
    const t = setTimeout(measure, 260); // dopo eventuale scroll fluido
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    return () => { clearTimeout(t); window.removeEventListener("resize", measure); window.removeEventListener("scroll", measure, true); };
  }, [active, i, step.target]);

  if (!active) return null;

  const last = i === STEPS.length - 1;
  const go = (d) => setI((x) => clamp(x + d, 0, STEPS.length - 1));
  const pad = 10;
  const r = layout.rect;

  return (
    <div className="fixed inset-0 z-[300]">
      {/* velo scuro con "buco" spotlight sul bersaglio */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <mask id="direxi-hole">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {r && (
              <motion.rect fill="black" rx="16" ry="16"
                initial={false}
                animate={{ x: r.left - pad, y: r.top - pad, width: r.width + pad * 2, height: r.height + pad * 2 }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }} />
            )}
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="rgb(var(--c-scrim))" opacity="0.74" mask="url(#direxi-hole)" />
      </svg>

      {/* anello luminoso attorno al bersaglio */}
      {r && (
        <motion.div className="pointer-events-none absolute rounded-2xl"
          initial={false}
          animate={{ left: r.left - pad, top: r.top - pad, width: r.width + pad * 2, height: r.height + pad * 2 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          style={{ boxShadow: "0 0 0 2px rgba(120,210,255,0.9), 0 0 0 6px rgba(78,195,255,0.28), 0 0 40px rgba(78,195,255,0.5)" }} />
      )}

      {/* barra superiore: passo + salta */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
          Direxi · {i + 1} / {STEPS.length}
        </span>
        <button onClick={close} className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/25">
          Salta la guida <X size={14} />
        </button>
      </div>

      {/* mascotte + fumetto che si spostano insieme accanto alla funzione */}
      <motion.div className="absolute left-0 top-0" style={{ width: layout.bw }}
        initial={false} animate={{ x: layout.bx, y: layout.by }} transition={{ type: "spring", stiffness: 210, damping: 26 }}>
        <div className="relative">
          {/* codina del fumetto verso il bersaglio */}
          {layout.place === "right" && <div className="absolute -left-2 top-16 h-4 w-4 rotate-45 rounded-sm border-b border-l border-line/20 bg-bg-2" />}
          {layout.place === "below" && <div className="absolute left-10 -top-2 h-4 w-4 rotate-45 rounded-sm border-l border-t border-line/20 bg-bg-2" />}

          <AnimatePresence mode="wait">
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.94, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: -6 }}
              transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
              className="glass-strong flex max-h-[min(84vh,660px)] flex-col rounded-xl3 p-5 shadow-soft">
              {/* contenuto scorrevole; i comandi restano sempre visibili sotto */}
              <div className="min-h-0 flex-1 overflow-y-auto pr-1">
              <div className="flex items-start gap-3">
                <Direxi mood={step.mood} size={78} />
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-center gap-2">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-grad text-white"><step.icon size={16} /></div>
                    <h3 className="font-display text-lg font-bold leading-tight text-text-hi">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text">{step.text}</p>
                </div>
              </div>

              {/* anteprima in miniatura della schermata di cui si parla */}
              <TourPreview step={step} />

              {/* passi concreti: come si usa la funzione */}
              {step.how && (
                <div className="mt-3 rounded-xl border border-line/10 bg-fill/[0.03] p-3">
                  <div className="mb-1.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-glow">Come si usa</div>
                  <ol className="space-y-1">
                    {step.how.map((h, k) => (
                      <li key={k} className="flex gap-2 text-xs leading-relaxed">
                        <span className="shrink-0 font-bold text-glow">{k + 1}.</span>
                        <span className="text-text-soft">{h}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              </div>

              {/* puntini di avanzamento */}
              <div className="mt-4 flex items-center justify-center gap-1.5">
                {STEPS.map((_, k) => (
                  <button key={k} onClick={() => setI(k)}
                    className={cnDot(k === i)} aria-label={`Passo ${k + 1}`} />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-2">
                <button onClick={() => go(-1)} disabled={i === 0}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-text-soft transition enabled:hover:text-glow disabled:opacity-40">
                  <ArrowLeft size={15} /> Indietro
                </button>
                {last ? (
                  <button onClick={close} className="btn btn-primary px-5 py-2.5 text-sm">
                    Inizia a studiare <ArrowRight size={15} />
                  </button>
                ) : (
                  <button onClick={() => go(1)} className="btn btn-primary px-5 py-2.5 text-sm">
                    Avanti <ArrowRight size={15} />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

function cnDot(active) {
  return "h-1.5 rounded-full transition-all " + (active ? "w-5 bg-glow" : "w-1.5 bg-fill/25 hover:bg-fill/45");
}
