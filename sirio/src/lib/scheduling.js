import { today, toISO, addDays, parseDate, daysBetween } from "./utils.js";

/* ------------------------- Leitner (ripetizione spaziata) --------------- *
 * 5 scatole con intervalli crescenti. Una carta risposta bene sale di
 * scatola (intervallo più lungo); sbagliata torna alla scatola 1.
 * ----------------------------------------------------------------------- */
export const LEITNER_INTERVALS = { 1: 1, 2: 2, 3: 4, 4: 8, 5: 16 };

export function leitnerNextDue(box) {
  const days = LEITNER_INTERVALS[box] ?? 1;
  return toISO(addDays(today(), days));
}

export function isDue(card) {
  return card.due <= toISO(today());
}

/* --------------------------- Mappa termica ----------------------------- *
 * "Temperatura" della memoria per un argomento (0 = spento/freddo,
 * 100 = caldissimo). Parte dal livello di padronanza e decade nel tempo
 * secondo una curva dell'oblio esponenziale; una padronanza più alta
 * decade più lentamente (halfLife maggiore).
 * ----------------------------------------------------------------------- */
export function memoryTemp(entry) {
  if (!entry || !entry.lastStudied) return 0;
  const mastery = entry.mastery || 0;
  if (mastery <= 0) return 0;
  const last = parseDate(entry.lastStudied);
  if (!last) return mastery;
  const days = Math.max(0, daysBetween(last, today()));
  // half-life fra 2 e 9 giorni a seconda della padronanza
  const halfLife = 2 + (mastery / 100) * 7;
  const decay = Math.pow(0.5, days / halfLife);
  return Math.round(mastery * decay);
}

export function tempClass(temp) {
  if (temp >= 80) return "hot";
  if (temp >= 55) return "warm";
  if (temp >= 30) return "cool";
  if (temp > 0) return "cold";
  return "off";
}
