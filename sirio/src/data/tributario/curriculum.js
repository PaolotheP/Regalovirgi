/* =========================================================================
   SIRIO — DIRITTO TRIBUTARIO · curriculum (indice) + aggregazione contenuti.
   Fonte dei contenuti: dispensa del corso di Diritto tributario (LUM
   "Giuseppe Degennaro", Facoltà di Economia — corso del prof. Stefano
   Loconte, a.a. di riferimento del programma), costruita sul "Manuale di
   diritto tributario" di Stefano Loconte (CEDAM). I riferimenti di studio
   ("fonte") citano il manuale Loconte.
   Tono dei contenuti: MOLTO semplice e chiaro — ogni concetto è definito,
   spiegato con parole comuni e accompagnato da un esempio concreto.
   ========================================================================= */
import { TRIB_CAP1 } from "./content/cap1_fondamenta.js";
import { TRIB_CAP2 } from "./content/cap2_principi.js";
import { TRIB_CAP3 } from "./content/cap3_rapporto.js";
import { TRIB_CAP4 } from "./content/cap4_accertamento.js";
import { TRIB_CAP5A } from "./content/cap5a_redditi.js";
import { TRIB_CAP5B } from "./content/cap5b_impresa.js";
import { TRIB_CAP6 } from "./content/cap6_tutela.js";

export const CHAPTERS = [
  { part: "generale", n: 1, title: "Le fondamenta: fiscalità e tributi" },
  { part: "generale", n: 2, title: "Principi costituzionali e fonti" },
  { part: "generale", n: 3, title: "Il rapporto d'imposta" },
  { part: "generale", n: 4, title: "Dichiarazione, controlli e accertamento" },
  { part: "generale", n: 5, title: "Le imposte sui redditi" },
  { part: "generale", n: 6, title: "Riscossione, sanzioni e processo" },
];

/* Etichette delle parti (il corso di Tributario è un percorso unico) */
export const PARTS = [{ key: "generale", label: "Il corso" }];

export const TOPICS = [...TRIB_CAP1, ...TRIB_CAP2, ...TRIB_CAP3, ...TRIB_CAP4, ...TRIB_CAP5A, ...TRIB_CAP5B, ...TRIB_CAP6];

/* Video lezioni (demo) sugli argomenti-cardine dell'esame. */
const VIDEO = {
  tributi: { title: "Imposta, tassa e contributo in 10 minuti", chapters: [["Le entrate dello Stato", 0], ["L'imposta", 220], ["Tassa e contributo", 440]] },
  capacitaContributiva: { title: "L'art. 53 spiegato semplice", chapters: [["Capacità contributiva", 0], ["Effettività e attualità", 260], ["La progressività", 520]] },
  avvisoAccertamento: { title: "Anatomia di un avviso di accertamento", chapters: [["Cos'è e quando arriva", 0], ["Motivazione e notifica", 260], ["Cosa può fare il contribuente", 520]] },
  irpef: { title: "Come si calcola l'IRPEF", chapters: [["Il presupposto", 0], ["Dal reddito all'imposta", 240], ["La residenza fiscale", 500]] },
  processo: { title: "Il ricorso tributario, passo per passo", chapters: [["Gli atti impugnabili", 0], ["Il primo grado", 260], ["Appello e Cassazione", 520]] },
};
TOPICS.forEach((t) => { if (VIDEO[t.id] && !t.media?.video) t.media = { ...t.media, video: VIDEO[t.id] }; });

/* Tutto l'indice entra nel piano di studi. */
export const PLAN_TOPICS = TOPICS.filter((t) => t.inPlan !== false);
