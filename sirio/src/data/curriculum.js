/* =========================================================================
   SIRIO — CURRICULUM della MATERIA CORRENTE (facciata multi-materia).
   Tutte le schermate importano da qui (TOPICS, CHAPTERS, getTopic, …):
   questo modulo sceglie i dati della materia selezionata (lib/subject.js)
   e li ri-espone con le stesse firme di sempre — così l'aggiunta di una
   materia non tocca nessuna schermata.

   SCHEMA di ogni argomento:
   {
     id, part, chapter, chapterTitle,
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
import { currentSubjectId } from "../lib/subject.js";
import * as PENALE from "./penale/curriculum.js";
import * as TRIBUTARIO from "./tributario/curriculum.js";

const D = currentSubjectId() === "tributario" ? TRIBUTARIO : PENALE;

export const CHAPTERS = D.CHAPTERS;
export const PARTS = D.PARTS;
export const TOPICS = D.TOPICS;
export const PLAN_TOPICS = D.PLAN_TOPICS;

export const TOPIC_MAP = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
export const getTopic = (id) => TOPIC_MAP[id];

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
