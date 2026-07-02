/* =========================================================================
   Contenuti trasversali: mentori, Q&A, bandi, libreria, gemello del promosso,
   coorte, stanze di co-studio, glossario, ripasso last minute.
   Bandi: dati statici reali (giu. 2026) da giustizia.it / Altalex:
   - Magistrato ordinario: D.M. 22/10/2025, G.U. 4ª S.S. n.83 del 24/10/2025, 450 posti.
   - Notaio: D.M. 16/12/2025, G.U. 4ª S.S. n.101 del 30/12/2025, 400 posti.
   - Magistratura tributaria: bandi 2026 attesi (riforma L.130/2022), 3 prove scritte.
   ========================================================================= */

export const MENTORI = [
  { nome: "Giulia M.", ruolo: "Idonea concorso magistratura 2024, primo tentativo", rating: 4.9, seguiti: 37, hue: 210, contact: "roberto", real: true,
    msg: "Ciao Giulia, preparo l'esame di Diritto penale: ti va di darmi qualche consiglio sul metodo per la parte generale?" },
  { nome: "Roberto G.", ruolo: "Ha superato l'esame di Diritto penale · tutor", rating: 5.0, seguiti: 44, hue: 250, contact: "roberto", real: true,
    msg: "Ciao Roberto, sto preparando Diritto penale: posso chiederti come hai organizzato il ripasso di dolo e colpa?" },
  { nome: "Marlen M.", ruolo: "Redazione Neldiritto · supporto allo studio", rating: 4.9, seguiti: 61, hue: 160, contact: "marlen", real: true,
    msg: "Ciao Marlen, sto usando il SuperCompendio per Diritto penale: posso chiederti un chiarimento sulle cause di giustificazione?" },
  { nome: "Studente anonimo", ruolo: "Ha superato Diritto penale · 30 e lode", rating: 4.7, seguiti: 19, hue: 300, contact: null, real: false,
    msg: "Ciao, preparo Diritto penale parte generale: mi dai qualche dritta sulle domande più frequenti all'orale?" },
  { nome: "Paolo G.", ruolo: "Coordinatore community Sirio", rating: 4.9, seguiti: 52, hue: 30, contact: "paolo", real: true,
    msg: "Ciao Paolo, sto preparando Diritto penale: posso chiederti come funziona la community e i gruppi di coorte?" },
  { nome: "Studente anonimo", ruolo: "Ha superato Diritto penale · 28", rating: 4.6, seguiti: 12, hue: 190, contact: null, real: false,
    msg: "Ciao, come hai gestito i tempi e l'ansia nello studio della parte generale di Diritto penale?" },
];

export const QA = [
  { tag: "ORALE", q: "All'orale di Diritto penale, su quali argomenti insiste di più la commissione?",
    a: "Dolo (in particolare dolo eventuale vs colpa cosciente, con il caso ThyssenKrupp), nesso di causalità (Franzese) e cause di giustificazione. Conviene padroneggiarli con gli articoli del codice alla mano.", up: 142, down: 6, who: "Studente che ha sostenuto l'esame · 2025" },
  { tag: "METODO", q: "Conviene studiare prima la parte generale o la speciale?",
    a: "Quasi tutti consigliano di consolidare prima la parte generale: dà le chiavi di lettura per ragionare sulle singole fattispecie della speciale.", up: 98, down: 4, who: "Studente idoneo · 2024" },
  { tag: "DOLO", q: "Come si imposta la distinzione dolo eventuale / colpa cosciente in sede d'esame?",
    a: "Parti dal dato comune (evento previsto, non voluto come scopo), poi sposta tutto sull'atteggiamento volitivo: accettazione del rischio vs fiducia di evitarlo. Chiudi citando ThyssenKrupp (SU 2014) e la teoria del bilanciamento.", up: 167, down: 9, who: "Studente che ha sostenuto l'esame · 2025" },
  { tag: "CAUSALITÀ", q: "Quanto contano le sentenze (Franzese, ThyssenKrupp) all'esame?",
    a: "Molto: non serve citarne tante, ma le sentenze-chiave della parte generale vanno conosciute bene. Franzese per la causalità, ThyssenKrupp per il dolo eventuale, Raso per l'imputabilità.", up: 89, down: 5, who: "Studente idoneo · 2024" },
  { tag: "PROGRAMMA", q: "Il programma segue il codice o un manuale specifico?",
    a: "È ancorato al codice penale e a un manuale istituzionale; utile affiancare un compendio aggiornato per fissare gli schemi. Verifica sempre il programma ufficiale dell'anno in corso.", up: 76, down: 3, who: "Studente del Dipartimento di Giurisprudenza · 2025" },
];

export const BANDI = [
  { nome: "Concorso in magistratura ordinaria", ente: "Ministero della Giustizia · G.U. 4ª S.S. n.83 del 24/10/2025", stato: "open", statoLabel: "APERTO",
    posti: "450", prove: "3 scritti + orale", titolo: "Laurea LMG/01", scadenza: "Domande chiuse 24/11/2025",
    note: "Tre elaborati teorici (civile, penale, amministrativo), 8 ore ciascuno.",
    timeline: [["24 nov 2025", "Domande"], ["22-23 giu 2026", "Identificazione"], ["24-26 giu 2026", "Scritti"], ["2026/27", "Orali"]] },
  { nome: "Concorso per 400 posti di notaio", ente: "Ministero della Giustizia · G.U. 4ª S.S. n.101 del 30/12/2025", stato: "open", statoLabel: "APERTO",
    posti: "400", prove: "3 scritti + orale", titolo: "Laurea in giurisprudenza + pratica 18 mesi", scadenza: "Domande entro 29/01/2026",
    note: "Tre prove teorico-pratiche (un atto di ultima volontà, due atti tra vivi). Idoneità ≥ 210/300.",
    timeline: [["29 gen 2026", "Domande"], ["15-16 giu 2026", "Identificazione"], ["17-19 giu 2026", "Scritti"], ["2026/27", "Orali"]] },
  { nome: "Concorso per magistrati tributari", ente: "Ministero dell'Economia e delle Finanze · riforma L.130/2022", stato: "soon", statoLabel: "IN ARRIVO",
    posti: "stimati 460", prove: "3 scritti + orale (nuovo impianto)", titolo: "Laurea giuridica/economica", scadenza: "Pubblicazione attesa 2026",
    note: "I nuovi bandi eliminano la preselettiva e ripristinano tre prove scritte.",
    timeline: [["2026", "Pubblicazione"], ["2026", "Domande"], ["2026/27", "Scritti"], ["2027", "Orali"]] },
];

export const LIBRARY = [
  { nome: "SuperCompendio di Diritto penale", meta: "31 MB · PDF", tipo: "pdf", scaricato: true },
  { nome: "Podcast — Il nesso di causalità", meta: "18 MB · audio", tipo: "audio", scaricato: true },
  { nome: "Podcast — Dolo eventuale e colpa cosciente", meta: "21 MB · audio", tipo: "audio", scaricato: true },
  { nome: "Mappa — Le cause di giustificazione", meta: "3 MB · immagine", tipo: "map", scaricato: true },
  { nome: "Video — Il caso ThyssenKrupp", meta: "140 MB · video", tipo: "video", scaricato: false },
  { nome: "Codice penale annotato", meta: "22 MB · PDF", tipo: "pdf", scaricato: false },
];

/* Il Gemello del Promosso — traiettoria predefinita e realistica */
export const TWIN = {
  nome: "Un candidato come te",
  profilo: "Stesso esame (Diritto penale), stesso livello di partenza, ~8 settimane a disposizione.",
  esito: "Superato con 28/30.",
  tappe: [
    { sett: "Settimana 1-2", dove: "Principi, struttura del reato, elemento oggettivo", nota: "Aveva sottovalutato la causalità: ci è tornato due volte." },
    { sett: "Settimana 3-4", dove: "Colpevolezza: dolo, colpa, imputabilità", nota: "Errore tipico: confondere dolo eventuale e colpa cosciente. Risolto con le schede comparative." },
    { sett: "Settimana 5", dove: "Verifica intermedia + ripasso attivo", nota: "Qui aveva accelerato: 2 simulazioni in più della media." },
    { sett: "Settimana 6-7", dove: "Forme di manifestazione: tentativo, concorso, circostanze", nota: "Punto debole iniziale: il tentativo nel dolo eventuale." },
    { sett: "Settimana 8", dove: "Ripasso last minute + simulazione finale", nota: "Ha chiuso con lo Schedario Leitner quasi vuoto." },
  ],
  erroriTipici: ["Dolo eventuale vs colpa cosciente", "Cause sopravvenute (art. 41 co. 2)", "Desistenza vs recesso attivo"],
};

/* Gruppi di coorte (simulati) */
export const COHORT = {
  nome: "Diritto penale · sessione estiva",
  membri: 128,
  avanzamentoMedio: 41,
  attivita: [
    { chi: "Aurora B.", cosa: "ha completato «Le cause di giustificazione»", quando: "2 h fa", hue: 210 },
    { chi: "Marco T.", cosa: "ha svolto una simulazione (24/30)", quando: "5 h fa", hue: 190 },
    { chi: "Sofia R.", cosa: "ha aggiunto «causalità omissiva» al ripasso", quando: "ieri", hue: 320 },
    { chi: "Lorenzo P.", cosa: "ha raggiunto il livello 6", quando: "ieri", hue: 250 },
  ],
};

/* Stanze di co-studio dal vivo (body doubling, presenza simulata) */
export const COSTUDY_ROOMS = [
  { id: "silenzio", nome: "Sala del Silenzio", desc: "Studio in silenzio assoluto, timer condiviso", presenti: 14, hue: 210 },
  { id: "pomodoro", nome: "Sala Pomodoro", desc: "Cicli 25/5 sincronizzati", presenti: 9, hue: 160 },
  { id: "notturna", nome: "Sala Notturna", desc: "Per chi studia a tarda sera", presenti: 6, hue: 260 },
  { id: "sprint", nome: "Sala Sprint Esame", desc: "Ultime settimane, ritmo intenso", presenti: 22, hue: 30 },
];
export const COSTUDY_PEOPLE = ["Aurora", "Marco", "Sofia", "Lorenzo", "Chiara", "Matteo", "Elena", "Davide", "Martina", "Riccardo", "Sara", "Beatrice"];

export const GLOSSARIO = [
  ["Antigiuridicità", "Contrasto del fatto tipico con l'ordinamento; assenza di cause di giustificazione."],
  ["Condicio sine qua non", "Teoria causale: è causa ogni antecedente necessario (eliminazione mentale)."],
  ["Dolo eventuale", "L'agente si rappresenta l'evento come possibile e ne accetta il rischio."],
  ["Colpa cosciente", "Colpa con previsione (art. 61 n.3): prevede l'evento ma confida di evitarlo."],
  ["Scriminante", "Causa di giustificazione: rende lecito un fatto altrimenti tipico."],
  ["Prognosi postuma", "Giudizio ex ante e in concreto sull'idoneità degli atti (tentativo)."],
  ["Posizione di garanzia", "Obbligo giuridico di impedire l'evento (reati omissivi impropri, art. 40 cpv.)."],
  ["Preterintenzione", "Evento più grave di quello voluto (artt. 43, 584)."],
  ["Actio libera in causa", "Stato di incapacità preordinato in cui si commette il reato (art. 87)."],
  ["Cumulo giuridico", "Trattamento del reato continuato: pena del più grave aumentata (art. 81)."],
];

export const RIPASSO = {
  intro: "Solo l'indispensabile della parte generale, per un'ultima rilettura lucida. ~18 minuti.",
  voci: [
    { t: "Principio di legalità (art. 25 Cost.)", min: 2, testo: "Nullum crimen, nulla poena sine lege. Corollari: riserva di legge, tassatività, divieto di analogia (malam partem), irretroattività, prevedibilità." },
    { t: "Successione di leggi (art. 2 c.p.)", min: 2, testo: "Irretroattività sfavorevole (assoluta); retroattività favorevole (derogabile). Abolitio criminis (co.2); tempus commissi delicti: teoria della condotta." },
    { t: "Causalità (artt. 40-41)", min: 3, testo: "Condicio sine qua non + controfattuale; Franzese (SU 2002): probabilità logica. Art. 41 co.2: cause sopravvenute da sole sufficienti interrompono." },
    { t: "Cause di giustificazione (artt. 50-54)", min: 3, testo: "Rilevano oggettivamente (art. 59 co.1). Consenso (50), esercizio del diritto (51), legittima difesa (52), uso legittimo armi (53), stato di necessità (54)." },
    { t: "Dolo e colpa (artt. 42-43)", min: 3, testo: "Dolo: rappresentazione + volontà; intenzionale/diretto/eventuale. Colpa: regole cautelari + prevedibilità. Dolo eventuale vs colpa cosciente: ThyssenKrupp 2014." },
    { t: "Imputabilità (artt. 85-98)", min: 2, testo: "Capacità di intendere e volere. Minore di 14: non imputabile (97). Vizio totale (88)/parziale (89). Ubriachezza volontaria: non esclude (92)." },
    { t: "Tentativo e concorso (artt. 56, 110)", min: 3, testo: "Tentativo: atti idonei e univoci; desistenza vs recesso attivo. Concorso di persone: contributo causale + dolo di concorso." },
  ],
};
