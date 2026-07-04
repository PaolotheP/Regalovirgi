import { today, toISO, addDays, parseDate, daysBetween, clamp } from "./utils.js";
import { PLAN_TOPICS } from "../data/curriculum.js";

/* =======================================================================
 *  SIRIO — Generatore ALGORITMICO del Piano di studi (nessuna AI).
 *
 *  Principi:
 *  1. PAGINE = TEMPO: i giorni sono distribuiti in proporzione alle pagine
 *     di ogni argomento nell'indice (i più corposi respirano di più).
 *  2. PARTENZA PERSONALE: gli argomenti già studiati prima di Sirio non
 *     vengono ripianificati da zero — entrano nel circuito del ripasso.
 *  3. ULTIMO MIGLIO: gli ultimi giorni sono di SOLO ripasso ed esercizi,
 *     senza argomenti nuovi; chiudono verifiche e simulazione finale.
 *  4. CONSOLIDAMENTO: circa una volta a settimana un giorno è dedicato a
 *     rivedere ciò che si è appena studiato, non ad avanzare.
 *  5. ADATTIVO: se salti dei giorni, il piano si rimodella sui giorni
 *     rimasti; puoi anche trascinare gli argomenti sul calendario.
 * ======================================================================= */

const PERIOD_META = [
  { key: "fondamenta", nome: "Fondamenta", desc: "Le basi: principi, struttura del reato, elemento oggettivo." },
  { key: "nucleo", nome: "Nucleo", desc: "Il cuore dell'esame: colpevolezza, dolo e colpa, cause di giustificazione." },
  { key: "consolidamento", nome: "Consolidamento", desc: "Forme di manifestazione, pena e ripasso attivo verso la prova." },
];

export function planHorizon(profile) {
  const exam = parseDate(profile.examDate);
  const start = today();
  let days = exam ? daysBetween(start, exam) : 56;
  days = clamp(days, 7, 400);
  return { start, exam, days };
}

const weightOf = (t) => Math.max(1, (t.pages?.[1] || 0) - (t.pages?.[0] || 0));

/* Centro del blocco-pagine di ogni argomento → giorno proporzionale. */
function pageWeightedOffsets(weights, span) {
  const total = weights.reduce((a, b) => a + b, 0) || 1;
  const last = Math.max(0, span - 1);
  const offs = [];
  let cum = 0;
  for (let i = 0; i < weights.length; i++) {
    const center = cum + weights[i] / 2;
    cum += weights[i];
    offs.push(clamp(Math.round((center / total) * last), 0, last));
  }
  return offs;
}

/* Quanti giorni finali riservare al solo ripasso (fase sprint). */
function reviewPhaseLength(days) {
  if (days < 10) return 1;
  return clamp(Math.round(days * 0.16), 2, 12);
}

export function generatePlan(profile) {
  const { start, days } = planHorizon(profile);
  const all = PLAN_TOPICS;

  // partenza personale: escludi il già studiato (resta nel ripasso)
  const studiedSet = new Set(profile.startFromZero ? [] : (profile.studiedBefore || []));
  const topics = all.filter((t) => !studiedSet.has(t.id));

  const reviewDays = reviewPhaseLength(days);
  const studySpan = Math.max(1, days - reviewDays - 1); // ultimo giorno: simulazione

  const schedule = [];

  if (topics.length > 0) {
    const w = topics.map(weightOf);
    const offs = pageWeightedOffsets(w, studySpan);
    topics.forEach((t, i) => {
      schedule.push({ date: toISO(addDays(start, offs[i])), topicId: t.id, kind: "studio", pages: t.pages || null });
    });
    // consolidamento settimanale: un giorno senza nuovi argomenti
    const busy = new Set(schedule.map((s) => s.date));
    for (let d = 6; d < studySpan - 2; d += 7) {
      const date = toISO(addDays(start, d));
      if (!busy.has(date)) schedule.push({ date, topicId: null, kind: "consolidamento", label: "Consolidamento della settimana" });
    }
  }

  // fase finale: SOLO ripasso ed esercitazione, mai argomenti nuovi
  for (let d = studySpan; d < days - 1; d++) {
    schedule.push({ date: toISO(addDays(start, d)), topicId: null, kind: "ripasso", label: "Solo ripasso ed esercizi" });
  }

  // periodi (per pagine cumulate) — se tutto è già studiato, un unico periodo di ripasso
  let periods;
  if (topics.length >= 3) {
    const w = topics.map(weightOf);
    const offs = pageWeightedOffsets(w, studySpan);
    const totalW = w.reduce((a, b) => a + b, 0);
    const n = topics.length;
    const t1 = totalW / 3, t2 = (2 * totalW) / 3;
    let acc = 0, c1 = n, c2 = n;
    for (let i = 0; i < n; i++) { acc += w[i]; if (c1 === n && acc >= t1) c1 = i + 1; if (c2 === n && acc >= t2) c2 = i + 1; }
    c1 = clamp(c1, 1, n - 1); c2 = clamp(c2, c1 + 1, n);
    const buckets = [topics.slice(0, c1), topics.slice(c1, c2), topics.slice(c2)];
    const endOff = [offs[c1 - 1], offs[c2 - 1], studySpan - 1];
    periods = PERIOD_META.map((meta, i) => ({
      ...meta, index: i,
      startDate: toISO(addDays(start, i === 0 ? 0 : Math.min(studySpan - 1, endOff[i - 1] + 1))),
      endDate: toISO(addDays(start, endOff[i])),
      topics: buckets[i].map((t) => t.id),
      verifica: i < 2 ? toISO(addDays(start, endOff[i])) : null,
    }));
    schedule.push({ date: toISO(addDays(start, clamp(endOff[0], 1, days - 2))), topicId: null, kind: "verifica", label: "Verifica 1" });
    schedule.push({ date: toISO(addDays(start, clamp(endOff[1], 1, days - 2))), topicId: null, kind: "verifica", label: "Verifica 2" });
  } else {
    periods = [{
      ...PERIOD_META[2], index: 0,
      startDate: toISO(start), endDate: toISO(addDays(start, days - 1)),
      topics: (topics.length ? topics : all).map((t) => t.id), verifica: null,
    }];
    schedule.push({ date: toISO(addDays(start, Math.max(1, Math.round(days / 2)))), topicId: null, kind: "verifica", label: "Verifica di metà percorso" });
  }

  schedule.push({ date: toISO(addDays(start, Math.max(1, days - 1))), topicId: null, kind: "simulazione", label: "Simulazione finale" });
  schedule.sort((a, b) => (a.date < b.date ? -1 : 1));

  return {
    generatedAt: toISO(start),
    examDate: profile.examDate || null,
    horizonDays: days, goal: profile.goal, hoursPerDay: profile.hoursPerDay, bookId: profile.bookId,
    startFromZero: profile.startFromZero !== false,
    studiedBefore: [...studiedSet],
    reviewFrom: toISO(addDays(start, studySpan)),
    periods, schedule,
    finalSim: toISO(addDays(start, Math.max(1, days - 1))),
    remodeledAt: null,
  };
}

/* -------- Rimodella dopo giorni saltati (stessa filosofia, meno tempo) --- */
export function remodelPlan(plan, profile, progress) {
  const start = today();
  const exam = parseDate(profile.examDate);
  let remaining = exam ? daysBetween(start, exam) : 21;
  remaining = clamp(remaining, 3, 400);

  const studiedSet = new Set(plan?.studiedBefore || []);
  const done = new Set(PLAN_TOPICS.filter((t) => (progress[t.id]?.mastery || 0) >= 60).map((t) => t.id));
  const todo = PLAN_TOPICS.filter((t) => !done.has(t.id) && !studiedSet.has(t.id));

  const reviewDays = reviewPhaseLength(remaining);
  const studySpan = Math.max(1, remaining - reviewDays - 1);

  const schedule = [];
  if (todo.length) {
    const w = todo.map(weightOf);
    const offs = pageWeightedOffsets(w, studySpan);
    todo.forEach((t, i) => schedule.push({ date: toISO(addDays(start, offs[i])), topicId: t.id, kind: "studio", pages: t.pages || null }));
  }
  for (let d = studySpan; d < remaining - 1; d++) {
    schedule.push({ date: toISO(addDays(start, d)), topicId: null, kind: "ripasso", label: "Solo ripasso ed esercizi" });
  }
  schedule.push({ date: toISO(addDays(start, Math.max(1, remaining - 2))), topicId: null, kind: "verifica", label: "Verifica di recupero" });
  schedule.push({ date: toISO(addDays(start, Math.max(1, remaining - 1))), topicId: null, kind: "simulazione", label: "Simulazione finale" });
  schedule.sort((a, b) => (a.date < b.date ? -1 : 1));

  // periodi e simulazione RICALCOLATI sul nuovo orizzonte (non quelli stantii)
  const periods = [{
    key: "recupero", nome: "Recupero", index: 0,
    desc: "Il percorso rimodellato sui giorni che restano, pesato sulle pagine.",
    startDate: toISO(start), endDate: toISO(addDays(start, Math.max(0, remaining - 1))),
    topics: (todo.length ? todo : PLAN_TOPICS).map((t) => t.id), verifica: null,
  }];

  return {
    ...plan, schedule, periods,
    remodeledAt: toISO(start), horizonDays: remaining,
    reviewFrom: toISO(addDays(start, studySpan)),
    finalSim: toISO(addDays(start, Math.max(1, remaining - 1))),
  };
}

export function planNeedsRemodel(plan) {
  if (!plan || !plan.schedule?.length) return false;
  const todayISO = toISO(today());
  const overdue = plan.schedule.filter((s) => s.kind === "studio" && s.date < todayISO);
  if (!overdue.length) return false;
  const firstOverdue = parseDate(overdue[0].date);
  return daysBetween(firstOverdue, today()) >= 3;
}

/* Sprint: sei nella fase finale (o a ≤7 giorni dall'esame)? */
export function isSprint(plan) {
  if (!plan) return false;
  const t = toISO(today());
  if (plan.reviewFrom && t >= plan.reviewFrom) return true;
  if (plan.examDate) {
    const gg = daysBetween(today(), parseDate(plan.examDate));
    return gg >= 0 && gg <= 7;
  }
  return false;
}
