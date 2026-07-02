/* =========================================================================
   SIRIO — CURRICULUM (struttura dell'indice) + aggregazione dei contenuti.
   Fonte: SuperCompendio di Diritto penale (Neldiritto Editore), ed. 2026.
   L'indice completo (Parte Generale capp. 1-7, Parte Speciale capp. 1-16)
   è mappato in "argomenti" navigabili. Ogni argomento segue lo SCHEMA:

   {
     id, part: 'generale'|'speciale', chapter, chapterTitle,
     title, subtitle, articoli:[], pages:[from,to], depth:'deep'|'std',
     layers: { essenziale, approfondimenti:[{label,body}],
               giurisprudenza:[{label,body}], eccezioni:[{label,body}] },
     sintesi:[...], esempi:[{titolo,testo}], flashcards:[[fronte,retro]],
     comparativa: { titolo, a, b, righe:[{profilo,a,b}] } | null,
     quiz:[{ q, opts, correct, why, fonte, difficulty:1-5, commonError }],
     veroFalso:[{ aff, vero, traccia }],
     aperta:{ q, traccia, fonte },
     consigliate:['flashcards'|'mcq'|'mappa'|'esempi'|'comparativa'|'verofalso'|'aperta'|'video'|'podcast'],
     media:{ podcast?:{title,chapters}, video?:{title,chapters}, mappa?:true }
   }
   ========================================================================= */
import { PARTE_GENERALE } from "./content/parteGenerale.js";
import { PARTE_SPECIALE } from "./content/parteSpeciale.js";

export const CHAPTERS = [
  { part: "generale", n: 1, title: "Caratteri e principi del diritto penale" },
  { part: "generale", n: 2, title: "L'efficacia della legge penale" },
  { part: "generale", n: 3, title: "Il reato" },
  { part: "generale", n: 4, title: "L'elemento oggettivo del reato" },
  { part: "generale", n: 5, title: "L'elemento soggettivo del reato" },
  { part: "generale", n: 6, title: "Le forme di manifestazione del reato" },
  { part: "generale", n: 7, title: "La pena" },
  { part: "speciale", n: 1, title: "Nozioni introduttive" },
  { part: "speciale", n: 2, title: "I delitti contro la personalità dello Stato" },
  { part: "speciale", n: 3, title: "I delitti contro la Pubblica Amministrazione" },
  { part: "speciale", n: 4, title: "I delitti contro l'amministrazione della giustizia" },
  { part: "speciale", n: 5, title: "I delitti contro il sentimento religioso e la pietà dei defunti" },
  { part: "speciale", n: 6, title: "I delitti contro l'ordine pubblico" },
  { part: "speciale", n: 7, title: "I delitti contro l'incolumità pubblica" },
  { part: "speciale", n: 8, title: "I delitti contro l'ambiente" },
  { part: "speciale", n: 9, title: "I delitti contro la fede pubblica" },
  { part: "speciale", n: 10, title: "I delitti contro il patrimonio culturale" },
  { part: "speciale", n: 11, title: "I delitti contro la moralità pubblica e il buon costume" },
  { part: "speciale", n: 12, title: "I delitti contro gli animali" },
  { part: "speciale", n: 13, title: "I delitti contro la famiglia" },
  { part: "speciale", n: 14, title: "I delitti contro la persona" },
  { part: "speciale", n: 15, title: "I delitti contro il patrimonio" },
  { part: "speciale", n: 16, title: "Le contravvenzioni" },
];

export const TOPICS = [...PARTE_GENERALE, ...PARTE_SPECIALE];

export const TOPIC_MAP = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
export const getTopic = (id) => TOPIC_MAP[id];

/* Argomenti che entrano nel Piano di studi (spina dorsale: Parte Generale,
   in ordine pedagogico — è ciò che l'esame verifica e la base per capire tutto). */
export const PLAN_TOPICS = PARTE_GENERALE.filter((t) => t.inPlan !== false);

/* Argomenti raggruppati per capitolo (per l'indice/programma). */
export function topicsByChapter(part, n) {
  return TOPICS.filter((t) => t.part === part && t.chapter === n);
}

/* Percentuale-coorte "sbaglia qui" stimata dalla difficoltà della domanda
   (Il Muro della Coorte). Deterministica per non cambiare a ogni render. */
const WRONG_BY_DIFF = { 1: 18, 2: 30, 3: 45, 4: 60, 5: 72 };
export function cohortWrongPct(topicId, qIndex, difficulty = 3) {
  const base = WRONG_BY_DIFF[difficulty] ?? 40;
  let h = 0;
  const s = topicId + ":" + qIndex;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 1000;
  const jitter = (h % 9) - 4; // -4..+4
  return Math.max(8, Math.min(88, base + jitter));
}
