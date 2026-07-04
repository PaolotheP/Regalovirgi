/* =========================================================================
   Professori di Diritto penale (parte generale) — dati REALI da ricerca.
   Fonti (verificate luglio 2026):
   - Bari: uniba.it (syllabi Giurisprudenza LMG) — Muscatiello, Bottalico; docente Losappio.
   - Sapienza: corsidilaurea.uniroma1.it — Donini (canale A-L), Gambardella (M-Z), Trapasso.
   - LUISS: luiss.it/cattedreonline — Bellacosa (Dir. Penale 1), Sabia (canale D), Gullo.
   NB: le assegnazioni dei canali cambiano ogni anno accademico; verificare sul
   catalogo ufficiale prima dell'uso in produzione. Nessuna frase è attribuita
   ai docenti: le domande sono prompt dottrinali standard di parte generale
   (fonti: lexiuris.it, formazionegiuridica.org, Studocu/Docsity).
   ========================================================================= */

export const UNIVERSITIES = [
  { id: "bari", nome: 'Università di Bari "Aldo Moro"', citta: "Bari" },
  { id: "lum", nome: 'Università LUM "Giuseppe Degennaro" (già Jean Monnet)', citta: "Casamassima · Bari" },
  { id: "sapienza", nome: "Sapienza Università di Roma", citta: "Roma" },
  { id: "luiss", nome: "LUISS Guido Carli", citta: "Roma" },
];

export const PROFESSORS = [
  // Bari
  { id: "muscatiello", nome: "Vincenzo Bruno Muscatiello", uni: "bari", corso: "Diritto penale I (M-Z)", tilt: "Definizioni sistematiche, reato tentato e concorso di persone.", topics: ["reato", "tentativo", "concorsoPersone", "causalita"] },
  { id: "bottalico", nome: "Filippo Bottalico", uni: "bari", corso: "Diritto penale I (A-L)", tilt: "Struttura del reato, tipicità e offensività, causalità.", topics: ["reato", "causalita", "doloEventuale", "scriminanti"] },
  { id: "losappio", nome: "Giuseppe Losappio", uni: "bari", corso: "Diritto penale", tilt: "Colpevolezza, forme di manifestazione, sanzioni.", topics: ["dolo", "colpa", "circostanze", "concorsoReati"] },
  // Sapienza
  { id: "donini", nome: "Massimo Donini", uni: "sapienza", corso: "Diritto penale I (A-L)", tilt: "Impianto costituzionale, bene giuridico, offensività e colpevolezza.", topics: ["legalita", "reato", "doloEventuale", "causalita"] },
  { id: "gambardella", nome: "Marco Gambardella", uni: "sapienza", corso: "Diritto penale I (M-Z)", tilt: "Successione di leggi penali e abolitio criminis, legge penale nel tempo.", topics: ["legalita", "successione", "causalita", "concorsoReati"] },
  { id: "trapasso", nome: "Maria Teresa Trapasso", uni: "sapienza", corso: "Diritto penale (IUS/17)", tilt: "Colpevolezza, colpa e responsabilità, casistica giurisprudenziale.", topics: ["colpa", "dolo", "imputabilita", "scriminanti"] },
  // LUISS
  { id: "bellacosa", nome: "Maurizio Bellacosa", uni: "luiss", corso: "Diritto Penale 1 (parte generale)", tilt: "Parte generale con taglio economico-d'impresa e compliance (231).", topics: ["reato", "dolo", "concorsoPersone", "causalita"] },
  { id: "sabia", nome: "Rossella Sabia", uni: "luiss", corso: "Diritto Penale 1 (canale D)", tilt: "Struttura del reato, colpevolezza, casi applicativi.", topics: ["reato", "doloEventuale", "colpa", "scriminanti"] },
  { id: "gullo", nome: "Antonino Gullo", uni: "luiss", corso: "Diritto Penale (ordinario)", tilt: "Diritto penale d'impresa, responsabilità degli enti, tentativo.", topics: ["tentativo", "concorsoPersone", "reato", "circostanze"] },
];

export const professorsByUni = (uni) => PROFESSORS.filter((p) => p.uni === uni);
export const getProfessor = (id) => PROFESSORS.find((p) => p.id === id);

/* 25 domande d'esame rappresentative (parte generale), taggate per argomento.
   Fonte: banche domande aperte lexiuris.it / formazionegiuridica.org (accesso libero). */
export const EXAM_QUESTIONS = [
  { topic: "legalita", q: "Illustri il principio di legalità e i suoi corollari." },
  { topic: "legalita", q: "Che cos'è il principio di tassatività/determinatezza e quali conseguenze ha sulla redazione delle norme?" },
  { topic: "successione", q: "Spieghi la successione di leggi penali nel tempo e la nozione di abolitio criminis (art. 2 c.p.)." },
  { topic: "reato", q: "Che cosa distingue il reato di evento dal reato di mera condotta?" },
  { topic: "causalita", q: "Illustri il nesso di causalità e la teoria condizionalistica; cosa ha stabilito la sentenza Franzese?" },
  { topic: "dolo", q: "Spieghi la struttura e l'oggetto del dolo e la differenza tra coscienza e volontà." },
  { topic: "dolo", q: "Distingua dolo intenzionale, diretto ed eventuale." },
  { topic: "doloEventuale", q: "Qual è la differenza tra dolo eventuale e colpa cosciente? Quali criteri usa la giurisprudenza (ThyssenKrupp)?" },
  { topic: "colpa", q: "Che cos'è la colpa e quali sono le regole cautelari la cui inosservanza la determina?" },
  { topic: "responsabilitaOggettiva", q: "Spieghi la preterintenzione e la sua collocazione sistematica." },
  { topic: "reato", q: "Che cosa si intende per responsabilità oggettiva e come si concilia con l'art. 27 Cost.?" },
  { topic: "tentativo", q: "Illustri il reato tentato (art. 56 c.p.) e la nozione di atto idoneo e univoco." },
  { topic: "tentativo", q: "Qual è la differenza tra delitto tentato e delitto consumato?" },
  { topic: "tentativo", q: "È configurabile il tentativo nel dolo eventuale?" },
  { topic: "scriminanti", q: "Illustri la sistematica delle scriminanti (cause di giustificazione)." },
  { topic: "scriminanti", q: "Spieghi la legittima difesa (art. 52 c.p.) e i requisiti di attualità e proporzione." },
  { topic: "scriminanti", q: "Che cos'è lo stato di necessità (art. 54 c.p.) e come si distingue dalla legittima difesa?" },
  { topic: "imputabilita", q: "Che cos'è l'imputabilità e quali cause la escludono o la diminuiscono? Come rileva l'ubriachezza?" },
  { topic: "concorsoPersone", q: "Illustri il concorso di persone nel reato (art. 110) e la distinzione tra concorso morale e materiale." },
  { topic: "concorsoReati", q: "Distingua concorso formale di reati e concorso apparente di norme (principio di specialità)." },
  { topic: "reato", q: "Che cos'è il reato omissivo proprio e improprio, e cosa si intende per posizione di garanzia?" },
  { topic: "reato", q: "Illustri il concetto di bene giuridico e il principio di offensività." },
  { topic: "reato", q: "Che cos'è il reato impossibile (art. 49 c.p.)?" },
  { topic: "circostanze", q: "Spieghi la recidiva e il bilanciamento tra circostanze aggravanti e attenuanti." },
  { topic: "reato", q: "Illustri la prescrizione del reato e la prescrizione della pena." },
];
