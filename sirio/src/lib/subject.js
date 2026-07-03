/* =========================================================================
   SIRIO — MATERIE (multi-subject).
   Ogni materia ha i propri contenuti (src/data/<id>/) e il proprio "cielo":
   piano, stelle, progressi e quiz vivono in un bucket di localStorage
   separato per materia, così i percorsi non si mescolano mai.

   La materia corrente è decisa PRIMA del caricamento dei dati (i moduli
   contenuto esportano costanti): il cambio materia scrive la chiave e
   ricarica l'app dietro una dissolvenza (vedi SubjectSwitch in common.jsx).
   ========================================================================= */

export const SUBJECT_KEY = "sirio_subject";

export const SUBJECTS = [
  {
    id: "penale",
    nome: "Diritto penale",
    short: "Penale",
    costellazione: "La costellazione del Reato",
    desc: "Parte generale — dal principio di legalità alle conseguenze del reato.",
    manuale: "Marinucci · Dolcini · Gatta",
    hue: 215, // blu Sirio
    /* bucket storico: la materia originale conserva la chiave esistente,
       così chi ha già usato Sirio non perde nulla. */
    storageKey: "sirio_v1",
  },
  {
    id: "tributario",
    nome: "Diritto tributario",
    short: "Tributario",
    costellazione: "La costellazione del Tributo",
    desc: "Dal ruolo della fiscalità al processo tributario, spiegato semplice.",
    manuale: "Loconte",
    hue: 160, // verde-acqua
    storageKey: "sirio_v1:tributario",
  },
];

export const getSubject = (id) => SUBJECTS.find((s) => s.id === id);

export function currentSubjectId() {
  try {
    const s = localStorage.getItem(SUBJECT_KEY);
    if (SUBJECTS.some((x) => x.id === s)) return s;
  } catch {}
  return "penale";
}

export const currentSubject = () => getSubject(currentSubjectId());

/* true solo al primissimo accesso, quando la materia non è mai stata scelta */
export function subjectChosen() {
  try { return SUBJECTS.some((x) => x.id === localStorage.getItem(SUBJECT_KEY)); } catch { return false; }
}

export function persistSubjectChoice(id) {
  try { localStorage.setItem(SUBJECT_KEY, id); } catch {}
}

/* Cambio materia: al nuovo bucket (se vuoto) vengono passate le preferenze
   condivise (tema, accessibilità, nome), poi l'app riparte sul nuovo cielo. */
export function switchSubject(id) {
  const from = currentSubject();
  const to = getSubject(id);
  if (!to || to.id === from.id) return false;
  try {
    if (!localStorage.getItem(to.storageKey)) {
      const prev = JSON.parse(localStorage.getItem(from.storageKey) || "null");
      if (prev) {
        const carry = {
          theme: prev.theme,
          a11y: prev.a11y,
          tourSeen: prev.tourSeen,
          profile: { name: prev.profile?.name || "" },
        };
        localStorage.setItem(to.storageKey, JSON.stringify({ __seed: true, ...carry }));
      }
    }
  } catch {}
  persistSubjectChoice(id);
  return true;
}
