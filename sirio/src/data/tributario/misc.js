/* =========================================================================
   Diritto tributario — contenuti trasversali: mentori, Q&A, bandi,
   libreria, gemello del promosso, coorte, stanze di co-studio, glossario,
   ripasso last minute.
   Glossario e ripasso sono ricavati dalla dispensa del corso LUM (che
   apre proprio con un glossario) e dal programma ufficiale del corso.
   Bandi: dati statici reali (giu. 2026) da giustizia.it / MEF.
   ========================================================================= */

export const MENTORI = [
  { nome: "Giulia M.", ruolo: "Ha superato Diritto tributario · 30/30", rating: 4.9, seguiti: 31, hue: 160, contact: "roberto", real: true,
    msg: "Ciao Giulia, preparo l'esame di Diritto tributario: ti va di darmi qualche consiglio sul metodo?" },
  { nome: "Roberto G.", ruolo: "Ha superato Diritto tributario · tutor", rating: 5.0, seguiti: 40, hue: 190, contact: "roberto", real: true,
    msg: "Ciao Roberto, sto preparando Diritto tributario: posso chiederti come hai organizzato il ripasso di accertamento e IRPEF?" },
  { nome: "Marlen M.", ruolo: "Redazione Neldiritto · supporto allo studio", rating: 4.9, seguiti: 61, hue: 210, contact: "marlen", real: true,
    msg: "Ciao Marlen, sto studiando Diritto tributario: posso chiederti un chiarimento sulle categorie reddituali?" },
  { nome: "Studente anonimo", ruolo: "Ha superato Diritto tributario · 28", rating: 4.7, seguiti: 17, hue: 300, contact: null, real: false,
    msg: "Ciao, preparo Diritto tributario: mi dai qualche dritta sulle domande più frequenti all'orale?" },
  { nome: "Paolo G.", ruolo: "Coordinatore community Sirio", rating: 4.9, seguiti: 52, hue: 30, contact: "paolo", real: true,
    msg: "Ciao Paolo, sto preparando Diritto tributario: posso chiederti come funziona la community e i gruppi di coorte?" },
  { nome: "Studente anonimo", ruolo: "Economia LUM · esame superato", rating: 4.6, seguiti: 12, hue: 250, contact: null, real: false,
    msg: "Ciao, come hai gestito lo studio di Diritto tributario insieme agli altri esami del semestre?" },
];

export const QA = [
  { tag: "ORALE", q: "All'orale di Diritto tributario, su quali argomenti insiste di più la commissione?",
    a: "I grandi classici: capacità contributiva (art. 53 Cost.), differenza imposta/tassa, avviso di accertamento, sostituto d'imposta e residenza fiscale IRPEF. L'esame è di solito un colloquio breve (circa 4 domande): conviene saper definire ogni istituto in due frasi chiare.", up: 118, down: 4, who: "Studente che ha sostenuto l'esame · 2025" },
  { tag: "METODO", q: "Da dove conviene iniziare a studiare la materia?",
    a: "Dalle fondamenta: cos'è un tributo e i principi costituzionali. Se capisci bene capacità contributiva e riserva di legge, tutto il resto (accertamento, IRPEF, processo) si aggancia lì sopra.", up: 96, down: 3, who: "Studente idoneo · 2024" },
  { tag: "DEFINIZIONI", q: "Come si risponde alla domanda 'differenza tra imposta e tassa'?",
    a: "Parti dalla funzione: l'imposta finanzia la spesa pubblica in base alla capacità contributiva (la paghi perché possiedi/produci ricchezza); la tassa è legata a un servizio specifico che ricevi (es. tassa universitaria). Chiudi con un esempio ciascuna.", up: 141, down: 6, who: "Studente che ha sostenuto l'esame · 2025" },
  { tag: "ACCERTAMENTO", q: "Quanto conta la parte su controlli e accertamento?",
    a: "Molto: è il cuore 'procedurale' della materia. Tieni a mente la sequenza dichiarazione → controlli (36-bis/36-ter) → istruttoria → avviso di accertamento → istituti deflattivi → riscossione → eventuale processo. Se sai la filiera, ogni domanda trova il suo posto.", up: 87, down: 5, who: "Studente idoneo · 2024" },
  { tag: "PROGRAMMA", q: "Il programma segue il manuale del corso?",
    a: "Sì: il corso LUM segue il Manuale di diritto tributario di Loconte (CEDAM) e il programma ufficiale ricalca i suoi capitoli. Verifica sempre la scheda dell'insegnamento dell'anno in corso.", up: 74, down: 2, who: "Studentessa di Economia · 2025" },
];

export const BANDI = [
  { nome: "Concorso per magistrati tributari", ente: "Ministero dell'Economia e delle Finanze · riforma L.130/2022", stato: "soon", statoLabel: "IN ARRIVO",
    posti: "stimati 460", prove: "3 scritti + orale (nuovo impianto)", titolo: "Laurea giuridica/economica", scadenza: "Pubblicazione attesa 2026",
    note: "La riforma della giustizia tributaria apre la magistratura tributaria professionale anche ai laureati in economia.",
    timeline: [["2026", "Pubblicazione"], ["2026", "Domande"], ["2026/27", "Scritti"], ["2027", "Orali"]] },
  { nome: "Agenzia delle Entrate — funzionari tributari", ente: "Agenzia delle Entrate · concorsi periodici", stato: "open", statoLabel: "RICORRENTE",
    posti: "cicli annuali", prove: "Prova scritta tecnico-professionale", titolo: "Laurea in economia o giurisprudenza", scadenza: "Bandi pubblicati sul sito AdE",
    note: "Il diritto tributario è la materia principale delle prove.",
    timeline: [["2026", "Bandi"], ["2026", "Prove"], ["2026/27", "Assunzioni"]] },
  { nome: "Concorso in magistratura ordinaria", ente: "Ministero della Giustizia · G.U. 4ª S.S. n.83 del 24/10/2025", stato: "open", statoLabel: "APERTO",
    posti: "450", prove: "3 scritti + orale", titolo: "Laurea LMG/01", scadenza: "Domande chiuse 24/11/2025",
    note: "Tre elaborati teorici (civile, penale, amministrativo), 8 ore ciascuno.",
    timeline: [["24 nov 2025", "Domande"], ["22-23 giu 2026", "Identificazione"], ["24-26 giu 2026", "Scritti"], ["2026/27", "Orali"]] },
];

export const LIBRARY = [
  { nome: "Dispensa del corso — Diritto tributario", meta: "8 MB · PDF", tipo: "pdf", scaricato: true },
  { nome: "Podcast — Capacità contributiva e progressività", meta: "16 MB · audio", tipo: "audio", scaricato: true },
  { nome: "Podcast — L'avviso di accertamento", meta: "19 MB · audio", tipo: "audio", scaricato: true },
  { nome: "Mappa — Le categorie reddituali IRPEF", meta: "3 MB · immagine", tipo: "map", scaricato: true },
  { nome: "Video — Il processo tributario dopo la riforma", meta: "120 MB · video", tipo: "video", scaricato: false },
  { nome: "Testo Unico delle Imposte sui Redditi (TUIR)", meta: "18 MB · PDF", tipo: "pdf", scaricato: false },
];

/* Il Gemello del Promosso — traiettoria predefinita e realistica */
export const TWIN = {
  nome: "Una candidata come te",
  profilo: "Stesso esame (Diritto tributario, Economia), stesso livello di partenza, ~7 settimane a disposizione.",
  esito: "Superato con 28/30.",
  tappe: [
    { sett: "Settimana 1-2", dove: "Fondamenta: tributi, principi costituzionali, fonti", nota: "All'inizio confondeva imposta e tassa: risolto con la scheda comparativa." },
    { sett: "Settimana 3", dove: "Statuto del contribuente, elusione, soggetti", nota: "L'interpello le sembrava astratto: gli esempi pratici hanno sbloccato tutto." },
    { sett: "Settimana 4", dove: "Dichiarazione, controlli e accertamento", nota: "Qui ha rallentato: è la parte più 'procedurale', l'ha ripassata due volte." },
    { sett: "Settimana 5-6", dove: "IRPEF e categorie reddituali, fiscalità delle imprese", nota: "Punto debole iniziale: competenza vs cassa nel reddito d'impresa." },
    { sett: "Settimana 7", dove: "Riscossione, processo + ripasso last minute", nota: "Ha chiuso con lo Schedario errori quasi vuoto e 2 simulazioni." },
  ],
  erroriTipici: ["Imposta vs tassa", "Residenza vs domicilio fiscale", "Competenza vs cassa"],
};

/* Gruppi di coorte (simulati) */
export const COHORT = {
  nome: "Diritto tributario · sessione autunnale",
  membri: 74,
  avanzamentoMedio: 38,
  attivita: [
    { chi: "Aurora B.", cosa: "ha completato «L'avviso di accertamento»", quando: "1 h fa", hue: 160 },
    { chi: "Marco T.", cosa: "ha svolto una simulazione (26/30)", quando: "4 h fa", hue: 190 },
    { chi: "Sofia R.", cosa: "ha aggiunto «residenza fiscale» al ripasso", quando: "ieri", hue: 320 },
    { chi: "Lorenzo P.", cosa: "ha raggiunto il livello 5", quando: "ieri", hue: 250 },
  ],
};

/* Stanze di co-studio dal vivo (body doubling, presenza simulata) */
export const COSTUDY_ROOMS = [
  { id: "silenzio", nome: "Sala del Silenzio", desc: "Studio in silenzio assoluto, timer condiviso", presenti: 11, hue: 210 },
  { id: "pomodoro", nome: "Sala Pomodoro", desc: "Cicli 25/5 sincronizzati", presenti: 8, hue: 160 },
  { id: "notturna", nome: "Sala Notturna", desc: "Per chi studia a tarda sera", presenti: 5, hue: 260 },
  { id: "sprint", nome: "Sala Sprint Esame", desc: "Ultime settimane, ritmo intenso", presenti: 17, hue: 30 },
];
export const COSTUDY_PEOPLE = ["Aurora", "Marco", "Sofia", "Lorenzo", "Chiara", "Matteo", "Elena", "Davide", "Martina", "Riccardo", "Sara", "Beatrice"];

/* Glossario — voci base della materia, con definizioni semplici
   (ricavate dal glossario in apertura della dispensa del corso). */
export const GLOSSARIO = [
  ["Obbligazione tributaria", "Il rapporto per cui il contribuente deve pagare una somma all'ente pubblico: nasce dalla legge quando si verifica il presupposto."],
  ["Presupposto", "Il fatto che fa scattare l'imposta (es. possiedi una casa → IMU; produci reddito → IRPEF)."],
  ["Base imponibile", "Il valore su cui si calcola l'imposta applicando l'aliquota (reddito 100, aliquota 20% → imposta 20)."],
  ["Aliquota", "La percentuale che, applicata alla base imponibile, dice quanto pagare. Può essere proporzionale o progressiva."],
  ["Imposta", "Tributo dovuto in base alla propria capacità contributiva, per finanziare la spesa pubblica (es. IRPEF)."],
  ["Tassa", "Tributo legato a un servizio specifico ricevuto dal singolo (es. tassa universitaria)."],
  ["Capacità contributiva", "La forza economica di ciascuno (art. 53 Cost.): si paga in proporzione a ciò che si ha."],
  ["Sostituto d'imposta", "Chi paga l'imposta al posto di un altro per legge (es. il datore di lavoro trattiene l'IRPEF in busta paga)."],
  ["Avviso di accertamento", "L'atto con cui il Fisco contesta al contribuente imposte non dichiarate o dichiarate male."],
  ["Ravvedimento operoso", "Rimediare spontaneamente a un errore fiscale pagando il dovuto con sanzioni ridotte."],
];

export const RIPASSO = {
  intro: "Solo l'indispensabile della materia, per un'ultima rilettura lucida. ~18 minuti.",
  voci: [
    { t: "Il tributo e le sue specie", min: 2, testo: "Tributo = prestazione coattiva per legge. Imposta: capacità contributiva (IRPEF). Tassa: servizio specifico. Contributo: figura intermedia (opera pubblica che avvantaggia)." },
    { t: "Principi costituzionali (artt. 23 e 53)", min: 3, testo: "Art. 23: riserva di legge RELATIVA (la legge fissa gli elementi essenziali). Art. 53: capacità contributiva (effettiva e attuale) + progressività del sistema." },
    { t: "Statuto del contribuente e abuso", min: 2, testo: "L. 212/2000: chiarezza, irretroattività, affidamento, interpello. Art. 10-bis: abuso/elusione = vantaggi fiscali indebiti senza sostanza economica (≠ evasione: violazione diretta)." },
    { t: "Soggetti e obbligazione", min: 2, testo: "Contribuente; sostituto (paga al posto di: datore di lavoro); responsabile (paga insieme a: notaio). Solidarietà paritetica vs dipendente. Residenza fiscale: iscrizione anagrafica/residenza/domicilio per >183 giorni." },
    { t: "Dichiarazione e controlli", min: 3, testo: "Autotassazione: dichiari e versi da solo. Controllo automatizzato (36-bis), formale (36-ter), sostanziale. PVC a fine verifica. Termini di decadenza per l'accertamento." },
    { t: "Avviso di accertamento e deflattivi", min: 3, testo: "Requisiti: motivazione + notifica; oggi è atto 'esecutivo'. Metodi: analitico, analitico-induttivo, induttivo, sintetico. Deflattivi: autotutela, adesione (sanzioni 1/3), conciliazione." },
    { t: "IRPEF e redditi", min: 3, testo: "Presupposto: possesso di redditi; 6 categorie (fondiari, capitale, lavoro dipendente, lavoro autonomo, impresa, diversi). Impresa: competenza + inerenza, derivazione dal bilancio. IRES 24%." },
    { t: "Riscossione e processo", min: 2, testo: "Riscossione: spontanea (versamenti) o coattiva (ruolo → cartella → esecuzione, ADER). Sanzioni: legalità e proporzionalità; ravvedimento operoso. Processo: ricorso in 60 gg alle Corti di giustizia tributaria (L. 130/2022), appello, Cassazione." },
  ],
};
