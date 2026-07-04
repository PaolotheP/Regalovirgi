/* =========================================================================
   Professori di Diritto tributario — dati REALI da ricerca (luglio 2026).
   VERIFICATO dalla scheda ufficiale del corso (syllabus LUM a.a. 2024-25,
   lum.it): "DIRITTO TRIBUTARIO", IUS-12, 6 CFU, L-18 Economia e
   Organizzazione Aziendale (3° anno) — prof. Stefano Loconte responsabile
   (4 CFU) con il prof. Mauro Tortorelli (2 CFU). Esame orale (~4 domande,
   ~30 minuti). Ateneo: Università LUM "Giuseppe Degennaro" (fino al 2020
   "Jean Monnet"), Casamassima (Bari); l'Economia afferisce oggi al
   Dipartimento di Management, Finanza e Tecnologia (MFT).
   NB: gli incarichi possono variare per anno accademico; verificare sul
   catalogo ufficiale prima dell'uso in produzione. Nessuna frase è
   attribuita ai docenti (vedi nota su EXAM_QUESTIONS).
   ========================================================================= */

export const UNIVERSITIES = [
  { id: "lum", nome: 'Università LUM "Giuseppe Degennaro" (già Jean Monnet)', citta: "Casamassima · Bari — Economia" },
  { id: "bari", nome: 'Università di Bari "Aldo Moro"', citta: "Bari" },
  { id: "sapienza", nome: "Sapienza Università di Roma", citta: "Roma" },
  { id: "luiss", nome: "LUISS Guido Carli", citta: "Roma" },
];

export const PROFESSORS = [
  {
    id: "loconte", nome: "Stefano Loconte", uni: "lum",
    corso: "Diritto tributario · Economia (L-18), 3° anno — responsabile del corso",
    tilt: "Il corso segue il suo manuale: principi costituzionali, Statuto del contribuente, accertamento, IRPEF e categorie reddituali. Esame orale (~4 domande su tutto il programma).",
    topics: ["capacitaContributiva", "avvisoAccertamento", "irpef", "elusione"],
  },
  {
    id: "tortorelli", nome: "Mauro Tortorelli", uni: "lum",
    corso: "Diritto tributario · Economia (L-18) — modulo integrativo",
    tilt: "Modulo integrativo del corso LUM: accertamento, riscossione e tutela del contribuente.",
    topics: ["controlli", "metodiAccertamento", "riscossione", "processo"],
  },
];

export const professorsByUni = (uni) => PROFESSORS.filter((p) => p.uni === uni);
export const getProfessor = (id) => PROFESSORS.find((p) => p.id === id);

/* Domande d'esame rappresentative di Diritto tributario, taggate per
   argomento. FONTI (ricerca luglio 2026): raccolta pubblica LexIuris per
   l'orale di diritto tributario, paniere IUS/12 Univ. Pegaso (Skuola.net)
   e formulazioni istituzionali tipiche — tutte allineate al programma
   ufficiale del corso LUM, ma NON sono domande d'esame ufficiali
   LUM/Loconte (nessun paniere LUM è pubblico); nessuna frase è attribuita
   a docenti reali. Riformulate sul quadro normativo attuale (ADER, Corti
   di giustizia tributaria ex L. 130/2022). */
export const EXAM_QUESTIONS = [
  { topic: "tributi", q: "Qual è la differenza fra tributi e altre entrate dello Stato? Come si classificano i tributi (imposta, tassa, contributo)?" },
  { topic: "tributi", q: "Qual è la differenza tra imposte dirette e indirette?" },
  { topic: "tributi", q: "Che cosa distingue l'imposta dalla tassa? Faccia qualche esempio." },
  { topic: "presupposto", q: "Quali sono gli elementi costitutivi dell'imposta (presupposto, base imponibile, aliquota, soggetti)?" },
  { topic: "riservaLegge", q: "Cosa stabilisce la riserva di legge dell'art. 23 Cost.? È una riserva assoluta o relativa?" },
  { topic: "capacitaContributiva", q: "Che cos'è la capacità contributiva (art. 53 Cost.) e quali requisiti deve avere (effettività, attualità)?" },
  { topic: "capacitaContributiva", q: "In cosa consiste il principio di progressività del sistema tributario?" },
  { topic: "fonti", q: "Qual è la potestà legislativa dello Stato e delle Regioni in campo tributario?" },
  { topic: "interpretazione", q: "Come si interpreta la legge tributaria? È ammessa l'analogia?" },
  { topic: "statuto", q: "Quali sono i principi fondamentali dello Statuto dei diritti del contribuente (L. 212/2000)?" },
  { topic: "statuto", q: "Che cos'è l'interpello e quali tipologie ne esistono?" },
  { topic: "elusione", q: "Cosa si intende per elusione fiscale e abuso del diritto (art. 10-bis L. 212/2000)? In cosa differiscono dall'evasione?" },
  { topic: "soggettiImposta", q: "Qual è la differenza tra sostituto d'imposta e responsabile d'imposta?" },
  { topic: "soggettiImposta", q: "Come opera la solidarietà nel rapporto d'imposta (paritetica e dipendente)?" },
  { topic: "soggettiImposta", q: "Il domicilio fiscale: nozione e differenza con la residenza fiscale." },
  { topic: "dichiarazione", q: "Qual è la natura giuridica della dichiarazione dei redditi? È ritrattabile?" },
  { topic: "controlli", q: "In cosa consistono il controllo automatizzato (art. 36-bis d.P.R. 600/1973) e il controllo formale (art. 36-ter)?" },
  { topic: "metodiAccertamento", q: "Quali sono i metodi di accertamento: analitico, analitico-induttivo, induttivo puro e sintetico?" },
  { topic: "avvisoAccertamento", q: "L'avviso di accertamento: requisiti (motivazione, notifica), termini di decadenza e natura 'esecutiva'." },
  { topic: "deflattivi", q: "Che cos'è l'autotutela tributaria?" },
  { topic: "deflattivi", q: "In cosa consiste l'accertamento con adesione e quali effetti produce sulle sanzioni?" },
  { topic: "deflattivi", q: "La conciliazione giudiziale e gli altri istituti deflattivi del contenzioso." },
  { topic: "irpef", q: "Quali sono presupposto e soggetti passivi dell'IRPEF? Come si determina la residenza fiscale delle persone fisiche?" },
  { topic: "redditiFondiariCapitale", q: "Quali sono le sei categorie reddituali IRPEF? Caratteri dei redditi fondiari e dei redditi di capitale." },
  { topic: "redditiLavoro", q: "Redditi di lavoro dipendente e di lavoro autonomo: criteri di determinazione e ritenute d'acconto." },
  { topic: "redditoImpresa", q: "Come si determina il reddito d'impresa? Illustri i principi di competenza e di inerenza." },
  { topic: "fiscalitaImprese", q: "L'IRES: presupposto, soggetti passivi e aliquota; cenni all'IRAP e al suo presupposto." },
  { topic: "riscossione", q: "La riscossione: che cosa sono il ruolo e la cartella di pagamento?" },
  { topic: "riscossione", q: "Le sanzioni amministrative tributarie: principi e ravvedimento operoso." },
  { topic: "processo", q: "Il processo tributario: ricorso, termini, gradi di giudizio e Corti di giustizia tributaria dopo la riforma del 2022." },
];
