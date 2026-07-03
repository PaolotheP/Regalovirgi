/* =========================================================================
   SIRIO — DIRITTO PENALE · curriculum (indice) + aggregazione contenuti.
   Fonte dei contenuti: Compendio di Diritto penale (Neldiritto Editore),
   PARTE GENERALE — testo integrale fornito dall'editore (sostituisce i
   vecchi contenuti basati sul SuperCompendio, eliminati). I riferimenti
   di studio ("fonte") citano il manuale consigliato del corso:
   Marinucci · Dolcini · Gatta, Manuale di Diritto penale, Parte generale.
   ========================================================================= */
import { PEN_CAP1 } from "./content/cap01_intro.js";
import { PEN_CAP2 } from "./content/cap02_legalita.js";
import { PEN_CAP3 } from "./content/cap03_tempo.js";
import { PEN_CAP4 } from "./content/cap04_spazio.js";
import { PEN_CAP5 } from "./content/cap05_reato.js";
import { PEN_CAP6 } from "./content/cap06_causalita.js";
import { PEN_CAP7 } from "./content/cap07_scriminanti.js";
import { PEN_CAP8A } from "./content/cap08a_dolo.js";
import { PEN_CAP8B } from "./content/cap08b_colpa.js";
import { PEN_CAP9A } from "./content/cap09a_circostanze.js";
import { PEN_CAP9B } from "./content/cap09b_concorso.js";
import { PEN_CAP10A } from "./content/cap10a_pene.js";
import { PEN_CAP10B } from "./content/cap10b_misure.js";

export const CHAPTERS = [
  { part: "generale", n: 1, title: "Introduzione al diritto penale" },
  { part: "generale", n: 2, title: "Il principio di legalità" },
  { part: "generale", n: 3, title: "La legge penale nel tempo" },
  { part: "generale", n: 4, title: "La legge penale nello spazio e le immunità" },
  { part: "generale", n: 5, title: "La struttura del reato" },
  { part: "generale", n: 6, title: "Causalità e offensività" },
  { part: "generale", n: 7, title: "Le cause di giustificazione" },
  { part: "generale", n: 8, title: "L'elemento soggettivo" },
  { part: "generale", n: 9, title: "Le forme di manifestazione" },
  { part: "generale", n: 10, title: "Le conseguenze del reato" },
];

/* Etichette delle parti: l'esame verte sulla Parte generale (il manuale di
   riferimento è la Parte generale del Marinucci·Dolcini·Gatta). */
export const PARTS = [{ key: "generale", label: "Parte generale" }];

export const TOPICS = [
  ...PEN_CAP1, ...PEN_CAP2, ...PEN_CAP3, ...PEN_CAP4, ...PEN_CAP5, ...PEN_CAP6,
  ...PEN_CAP7, ...PEN_CAP8A, ...PEN_CAP8B, ...PEN_CAP9A, ...PEN_CAP9B,
  ...PEN_CAP10A, ...PEN_CAP10B,
];

/* Video lezioni (demo) sugli argomenti-cardine dell'orale. */
const VIDEO = {
  causalita: { title: "Il caso Franzese e la probabilità logica", chapters: [["La teoria condizionalistica", 0], ["Il caso e le Sezioni Unite", 280], ["Il principio di diritto", 560]] },
  doloEventuale: { title: "Il caso ThyssenKrupp", chapters: [["I fatti", 0], ["La prima formula di Frank", 280], ["Gli indicatori del dolo", 560]] },
  tentativo: { title: "Il delitto tentato, passo per passo", chapters: [["L'iter criminis", 0], ["Idoneità e univocità", 260], ["Desistenza e recesso", 520]] },
  legittimaDifesa: { title: "La legittima difesa in pratica", chapters: [["I requisiti", 0], ["La difesa domiciliare", 300], ["Eccesso colposo", 560]] },
  concorsoPersone: { title: "Il concorso di persone spiegato bene", chapters: [["La struttura", 0], ["Concorso morale e materiale", 280], ["Il concorso anomalo", 560]] },
};
TOPICS.forEach((t) => { if (VIDEO[t.id] && !t.media?.video) t.media = { ...t.media, video: VIDEO[t.id] }; });

/* Tutto l'indice entra nel piano di studi. */
export const PLAN_TOPICS = TOPICS.filter((t) => t.inPlan !== false);
