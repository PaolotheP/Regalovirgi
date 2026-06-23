/* =========================================================================
   N+ — CONTENUTI TRASVERSALI (vetrina, ripasso, glossario, community, bandi).
   Bandi/concorsi: dati statici tratti da fonti ufficiali e di settore (giu. 2026):
   - Concorso magistrato ordinario: D.M. 22 ottobre 2025, G.U. 4ª Serie Speciale
     n. 83 del 24 ottobre 2025, 450 posti (giustizia.it; Altalex 28/10/2025).
   - Concorso notaio: D.M. 16 dicembre 2025, G.U. 4ª Serie Speciale n. 101 del
     30 dicembre 2025, 400 posti (giustizia.it; Altalex 10/01/2026).
   - Concorso magistratura tributaria: bandi 2026 attesi (riforma L. 130/2022),
     ripristino di tre prove scritte (concorsando.it; Altalex 13/01/2026).
   Date prove scritte 2026 presso Fiera di Roma (giustizia.it).
   ========================================================================= */

/* Argomenti "vetrina" (più leggeri): compaiono nel piano e nell'indice */
NPLUS.showcase = [
  { id: "circostanze", icon: "layers", title: "Le circostanze del reato",
    desc: "Aggravanti e attenuanti, comuni e speciali, il bilanciamento (art. 69).",
    nota: "Argomento in vetrina: scheda di studio in arrivo nella versione completa." },
  { id: "concorsoReati", icon: "stack", title: "Il concorso di reati",
    desc: "Concorso formale e materiale, reato continuato (art. 81), cumulo giuridico.",
    nota: "Argomento in vetrina: scheda di studio in arrivo nella versione completa." },
  { id: "errore", icon: "compass", title: "L'errore e il reato aberrante",
    desc: "Errore sul fatto e sul precetto (artt. 5, 47), aberratio ictus e delicti (82-83).",
    nota: "Argomento in vetrina: scheda di studio in arrivo nella versione completa." },
  { id: "legalita", icon: "book", title: "Il principio di legalità",
    desc: "Riserva di legge, tassatività, divieto di analogia, irretroattività.",
    nota: "Argomento in vetrina: scheda di studio in arrivo nella versione completa." },
  { id: "efficacia", icon: "globe", title: "L'efficacia della legge penale",
    desc: "Limiti temporali (art. 2) e spaziali (artt. 3-10), successione di leggi.",
    nota: "Argomento in vetrina: scheda di studio in arrivo nella versione completa." },
  { id: "omissivi", icon: "minus", title: "I reati omissivi",
    desc: "Omissivi propri e impropri, posizione di garanzia, art. 40 cpv.",
    nota: "Argomento in vetrina: scheda di studio in arrivo nella versione completa." }
];

/* Altre materie: pura vetrina, NON cliccabile */
NPLUS.subjects = [
  { name: "Diritto civile", desc: "Obbligazioni, contratti, responsabilità" },
  { name: "Diritto costituzionale", desc: "Fonti, organi, giustizia costituzionale" },
  { name: "Diritto amministrativo", desc: "Atto, procedimento, giustizia amm.va" },
  { name: "Diritto processuale penale", desc: "Indagini, dibattimento, impugnazioni" },
  { name: "Diritto commerciale", desc: "Società, contratti d'impresa, crisi" },
  { name: "Diritto dell'Unione europea", desc: "Fonti, libertà, tutela giurisdizionale" }
];

/* Flashcard generali aggiuntive (oltre a quelle per argomento) — totale ≥ 10 argomenti */
NPLUS.flashcardsGen = [
  { topic: "Principio di legalità", front: "Quali sono i corollari del principio di legalità?", back: "Riserva di legge, precisione/tassatività/determinatezza, divieto di analogia in materia penale, irretroattività della legge sfavorevole, prevedibilità." },
  { topic: "Successione di leggi", front: "Cosa dispone l'art. 2 c.p. in caso di abolitio criminis?", back: "Nessuno può essere punito per un fatto che, secondo legge posteriore, non costituisce più reato: se interviene dopo il giudicato, revoca della condanna e cessazione dell'esecuzione." },
  { topic: "Reati omissivi", front: "Da cosa può derivare la posizione di garanzia nei reati omissivi impropri?", back: "Dalla legge, da un contratto, da un provvedimento dell'autorità, dalla precedente azione pericolosa e, secondo alcuni, dalla volontaria assunzione." },
  { topic: "Circostanze", front: "Cos'è il giudizio di bilanciamento (art. 69 c.p.)?", back: "La comparazione tra circostanze aggravanti e attenuanti concorrenti, che possono essere ritenute equivalenti o prevalenti le une sulle altre, con effetti sulla pena." },
  { topic: "Concorso di reati", front: "Cos'è il reato continuato (art. 81 cpv.)?", back: "Più violazioni della stessa o di diverse disposizioni di legge commesse con un medesimo disegno criminoso: si applica il cumulo giuridico (pena del reato più grave aumentata)." },
  { topic: "Errore", front: "Quando l'ignoranza della legge penale scusa (art. 5, dopo C. cost. 364/1988)?", back: "Solo se inevitabile (incolpevole): quando permane nonostante l'assolvimento dei doveri di informazione e conoscenza." },
  { topic: "Aberratio ictus", front: "Cos'è l'aberratio ictus monolesiva (art. 82)?", back: "L'offesa, per errore nei mezzi di esecuzione o altra causa, colpisce una persona diversa da quella voluta: il colpevole risponde come se avesse offeso la persona designata." },
  { topic: "Reato impossibile", front: "Quando si ha reato impossibile (art. 49 co. 2)?", back: "Quando, per inidoneità dell'azione o inesistenza dell'oggetto, è impossibile l'evento dannoso o pericoloso: manca l'offesa, espressione del principio di offensività." }
];

/* Punti chiave certificati ulteriori (bollino editore) per la sezione dedicata */
NPLUS.puntiExtra = [
  { topic: "Riserva di codice", testo: "L'art. 3-bis c.p. (d.lgs. 21/2018) impone che i nuovi reati siano introdotti solo modificando il codice penale o in leggi organiche di settore." },
  { topic: "Principio di offensività", testo: "Non vi è reato senza offesa (lesione o messa in pericolo) di un bene giuridico di rilievo costituzionale (artt. 25, 27, 3 Cost.)." },
  { topic: "Responsabilità degli enti", testo: "Il d.lgs. 231/2001 fonda la responsabilità dell'ente sulla colpa di organizzazione: inadeguatezza del modello rispetto al rischio-reato." }
];

/* Ripasso Last Minute — sintesi essenziale dell'intero compendio (parte generale) */
NPLUS.ripasso = {
  intro: "Niente argomenti nuovi. Solo i nodi che cadono più spesso e gli articoli da avere a mente, in una sintesi pensata per un'ultima rilettura lucida. Tempo di lettura stimato: 18 minuti.",
  voci: [
    { t: "Principio di legalità (art. 25 Cost., art. 1 c.p.)", min: "2 min", testo: "Nullum crimen, nulla poena sine lege. Corollari: riserva di legge (tendenzialmente assoluta), precisione/tassatività, divieto di analogia in malam partem, irretroattività sfavorevole, prevedibilità." },
    { t: "Successione di leggi penali (art. 2 c.p.)", min: "2 min", testo: "Irretroattività sfavorevole (assoluta, art. 25 Cost.); retroattività favorevole (derogabile, fondata sull'art. 3 Cost.). Abolitio criminis (co. 2); modifiche (co. 3-4); leggi eccezionali/temporanee (co. 5). Tempus commissi delicti: teoria della condotta." },
    { t: "Struttura del reato", min: "2 min", testo: "Bipartizione (oggettivo/soggettivo, scriminanti = elementi negativi del fatto) e tripartizione (fatto, antigiuridicità, colpevolezza). Delitti/contravvenzioni: criterio formale (artt. 17, 39)." },
    { t: "Causalità (artt. 40-41)", min: "2 min", testo: "Condicio sine qua non + giudizio controfattuale; leggi di copertura; Franzese (S.U. 2002): probabilità logica e certezza processuale. Art. 41 co. 2: cause sopravvenute da sole sufficienti interrompono il nesso." },
    { t: "Cause di giustificazione (artt. 50-54)", min: "2 min", testo: "Rilevano oggettivamente (art. 59 co. 1). Consenso (50), esercizio del diritto/adempimento del dovere (51), legittima difesa (52), uso legittimo delle armi (53), stato di necessità (54). Eccesso colposo (55), putatività (59 co. 4)." },
    { t: "Dolo e colpa (artt. 42-43)", min: "3 min", testo: "Dolo: rappresentazione + volontà; intenzionale/diretto/eventuale. Colpa: involontarietà + violazione regole cautelari + prevedibilità/evitabilità; generica/specifica/cosciente. Dolo eventuale vs colpa cosciente: accettazione del rischio vs fiducia (ThyssenKrupp 2014)." },
    { t: "Imputabilità (artt. 85-98)", min: "2 min", testo: "Capacità di intendere e di volere. Minore di 14: non imputabile (97). Vizio totale (88)/parziale (89). Ubriachezza volontaria: non esclude (92). Stati emotivi irrilevanti (90)." },
    { t: "Tentativo e concorso (artt. 56, 110)", min: "3 min", testo: "Tentativo: atti idonei e univoci; desistenza (non punibilità) vs recesso attivo (diminuzione). Concorso di persone: contributo causale materiale/morale + dolo di concorso; artt. 116-118." }
  ]
};

/* Glossario (per Ripasso Last Minute) */
NPLUS.glossario = [
  ["Antigiuridicità", "Contrasto del fatto tipico con l'intero ordinamento; coincide con l'assenza di cause di giustificazione."],
  ["Condicio sine qua non", "Teoria causale per cui è causa ogni antecedente necessario dell'evento (eliminazione mentale)."],
  ["Dolo eventuale", "Forma di dolo in cui l'agente si rappresenta l'evento come possibile e ne accetta il rischio."],
  ["Colpa cosciente", "Colpa con previsione (art. 61 n. 3): l'agente prevede l'evento ma confida di evitarlo."],
  ["Scriminante", "Causa di giustificazione che rende lecito in tutto l'ordinamento un fatto altrimenti tipico."],
  ["Scusante", "Causa di esclusione della colpevolezza fondata sull'inesigibilità della condotta (es. caso fortuito)."],
  ["Prognosi postuma", "Giudizio ex ante e in concreto per valutare l'idoneità degli atti nel tentativo (e nel reato impossibile)."],
  ["Reato proprio", "Reato il cui soggetto attivo deve possedere una particolare qualifica naturalistica o giuridica."],
  ["Preterintenzione", "Realizzazione di un evento più grave di quello voluto (artt. 43, 584, 593-ter)."],
  ["Actio libera in causa", "Stato di incapacità preordinato o colpevolmente provocato, in cui si commette il reato (art. 87)."],
  ["Posizione di garanzia", "Obbligo giuridico di impedire l'evento, fondante i reati omissivi impropri (art. 40 cpv.)."],
  ["Cumulo giuridico", "Trattamento sanzionatorio del reato continuato: pena del reato più grave aumentata (art. 81)."]
];

/* Mentori ex studenti */
NPLUS.mentori = [
  { nome: "Giulia M.", avatar: "illu1", role: "Idonea concorso magistratura 2024 · al primo tentativo", rating: "4,9", seguiti: 37, msg: "Ciao Giulia, preparo l'esame di Diritto penale all'Università di Bari: ti dispiace se ti chiedo qualche consiglio sul metodo per la parte generale?" },
  { nome: "Riccardo T.", avatar: "illu2", role: "Abilitato avvocato · cultore di Diritto penale", rating: "4,8", seguiti: 24, msg: "Ciao Riccardo, sto preparando l'esame di Diritto penale: posso chiederti come hai organizzato il ripasso del dolo e della colpa?" },
  { nome: "Studente anonimo", avatar: "anon", role: "Ha superato Diritto penale · 30 e lode", rating: "4,7", seguiti: 19, msg: "Ciao, preparo l'esame di Diritto penale parte generale: ti va di darmi qualche dritta sulle domande più frequenti all'orale?" },
  { nome: "Federica L.", avatar: "illu3", role: "Dottoranda in Diritto penale · tutor d'aula", rating: "5,0", seguiti: 41, msg: "Ciao Federica, sto studiando le cause di giustificazione per l'esame di Diritto penale: posso farti due domande sulla legittima difesa?" },
  { nome: "Studente anonimo", avatar: "anon", role: "Ha superato Diritto penale · 28", rating: "4,6", seguiti: 12, msg: "Ciao, preparo l'esame di Diritto penale: come hai gestito l'ansia e i tempi nello studio della parte generale?" },
  { nome: "Antonio P.", avatar: "illu4", role: "Praticante avvocato · Foro di Bari", rating: "4,9", seguiti: 28, msg: "Ciao Antonio, preparo l'esame di Diritto penale all'Università di Bari: posso chiederti consigli sulla causalità e sul caso Franzese?" }
];

/* Domande & Risposte sull'ESAME di Diritto penale (Univ. di Bari) */
NPLUS.qa = [
  { tag: "ORALE", q: "All'orale di Diritto penale, su quali argomenti della parte generale insiste di più la commissione?",
    a: "Dalla mia esperienza, i nodi ricorrenti sono il dolo (in particolare dolo eventuale vs colpa cosciente, con il caso ThyssenKrupp), il nesso di causalità (sentenza Franzese) e le cause di giustificazione. Conviene padroneggiare bene questi istituti e saperli esporre con gli articoli del codice alla mano.",
    up: 142, down: 6, who: "Studente che ha sostenuto l'esame · 2025" },
  { tag: "METODO", q: "Conviene studiare prima la parte generale o la parte speciale?",
    a: "Quasi tutti consigliano di consolidare prima la parte generale: senza una solida comprensione di reato, elemento soggettivo e cause di giustificazione, la parte speciale risulta mnemonica. La generale dà le 'chiavi di lettura' per ragionare sulle singole fattispecie.",
    up: 98, down: 4, who: "Studente idoneo · 2024" },
  { tag: "DOLO", q: "Come si imposta la distinzione tra dolo eventuale e colpa cosciente in sede d'esame?",
    a: "Parti dal dato comune (l'evento è previsto, non è lo scopo), poi sposta tutto sull'atteggiamento volitivo: accettazione del rischio (dolo) vs fiducia di evitarlo (colpa). Chiudi citando ThyssenKrupp (S.U. 2014) e la teoria del bilanciamento / prima formula di Frank. È una risposta che fa sempre buona impressione.",
    up: 167, down: 9, who: "Studente che ha sostenuto l'esame · 2025" },
  { tag: "PROGRAMMA", q: "Il programma di Diritto penale a Bari segue il codice o un manuale specifico?",
    a: "Il programma è ancorato al codice penale e a un manuale istituzionale: per la parte generale è utile affiancare un compendio aggiornato (come il SuperCompendio NLD) per fissare gli schemi e ripassare prima dell'orale. Verifica sempre il programma ufficiale dell'insegnamento sull'anno in corso.",
    up: 76, down: 3, who: "Studente del Dipartimento di Giurisprudenza · 2025" },
  { tag: "CAUSALITÀ", q: "Quanto è importante conoscere la giurisprudenza (Franzese, ThyssenKrupp) all'esame?",
    a: "Molto: non serve citarne tante, ma le 'sentenze-chiave' della parte generale vanno conosciute bene. Franzese per la causalità (probabilità logica), ThyssenKrupp per il dolo eventuale, Raso per l'imputabilità. Saperle richiamare al punto giusto dimostra padronanza.",
    up: 89, down: 5, who: "Studente idoneo · 2024" }
];

/* Bandi & Concorsi (dati statici reali — vedi commento in testa al file) */
NPLUS.bandi = [
  {
    nome: "Concorso in magistratura ordinaria",
    ente: "Ministero della Giustizia · G.U. 4ª Serie Speciale n. 83 del 24/10/2025",
    stato: "open", statoLabel: "APERTO",
    posti: "450", prove: "3 scritti + orale", titolo: "Laurea LMG/01",
    scadenza: "Domande chiuse il 24/11/2025",
    note: "Tre elaborati teorici (diritto civile, penale, amministrativo), 8 ore ciascuno. Niente test psico-attitudinali nel nuovo impianto.",
    timeline: [ ["24 nov 2025","Domande"], ["22-23 giu 2026","Identificazione"], ["24-26 giu 2026","Prove scritte"], ["2026/27","Correzione e orali"] ]
  },
  {
    nome: "Concorso per 400 posti di notaio",
    ente: "Ministero della Giustizia · G.U. 4ª Serie Speciale n. 101 del 30/12/2025",
    stato: "open", statoLabel: "APERTO",
    posti: "400", prove: "3 scritti + orale", titolo: "Laurea in giurisprudenza + pratica 18 mesi",
    scadenza: "Domande entro il 29/01/2026",
    note: "Tre prove teorico-pratiche: un atto di ultima volontà e due atti tra vivi (uno di diritto commerciale). Idoneità con almeno 210/300.",
    timeline: [ ["29 gen 2026","Domande"], ["15-16 giu 2026","Identificazione"], ["17-19 giu 2026","Prove scritte"], ["2026/27","Orali"] ]
  },
  {
    nome: "Concorso per magistrati tributari",
    ente: "Ministero dell'Economia e delle Finanze · riforma L. 130/2022",
    stato: "soon", statoLabel: "IN ARRIVO",
    posti: "stimati 460", prove: "3 scritti + orale (nuovo impianto)", titolo: "Laurea giuridica/economica",
    scadenza: "Pubblicazione attesa nel 2026",
    note: "I nuovi bandi prevedono l'eliminazione della preselettiva e il ripristino di tre prove scritte. In attuazione della riforma della giustizia tributaria.",
    timeline: [ ["2026","Pubblicazione"], ["2026","Domande"], ["2026/27","Scritti"], ["2027","Orali"] ]
  }
];

/* Libreria offline */
NPLUS.libreria = [
  { nome: "SuperCompendio di Diritto penale", meta: "31 MB · PDF", tipo: "pdf", scaricato: true },
  { nome: "Podcast — Il nesso di causalità", meta: "18 MB · audio", tipo: "audio", scaricato: true },
  { nome: "Podcast — Dolo eventuale e colpa cosciente", meta: "21 MB · audio", tipo: "audio", scaricato: true },
  { nome: "Mappa — Le cause di giustificazione", meta: "3 MB · immagine", tipo: "map", scaricato: true },
  { nome: "Video — Il caso ThyssenKrupp", meta: "140 MB · video", tipo: "video", scaricato: false },
  { nome: "Video — Causalità e probabilità logica", meta: "126 MB · video", tipo: "video", scaricato: false },
  { nome: "Codice penale annotato", meta: "22 MB · PDF", tipo: "pdf", scaricato: false }
];

/* Diario del ripasso — sessioni recenti (statiche) */
NPLUS.diario = {
  streak: 18,
  sessioni: [
    ["Oggi", "Penale · dolo eventuale (richiamo libero)", "95′"],
    ["Ieri", "Penale · le scriminanti (quiz)", "60′"],
    ["21 giu", "Penale · causalità (palestra)", "80′"],
    ["20 giu", "Penale · punti chiave imputabilità", "45′"],
    ["19 giu", "Penale · tentativo (flashcard)", "35′"]
  ]
};

/* Classifica — nomi inventati (la posizione dell'utente è calcolata) */
NPLUS.classificaNomi = [
  ["Aurora B.", 942], ["Lorenzo P.", 928], ["Marco T.", 915], ["Sofia R.", 902],
  ["Giulia M.", 889], ["Davide C.", 877], ["Chiara V.", 861], ["Matteo S.", 848],
  ["Elena F.", 833], ["Francesco D.", 820], ["Martina G.", 808], ["Alessandro N.", 795]
];
