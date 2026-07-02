/* =========================================================================
   SIRIO — CONTENUTI · PARTE GENERALE del Diritto penale (blocco C).
   Rielaborati dal SuperCompendio di Diritto penale (Neldiritto Editore),
   Capitoli 6-7: forme di manifestazione, tentativo, circostanze, concorso
   di persone, concorso di reati, pena, misure di sicurezza ed estinzione.
   Taglio da esame/concorso (Bari, Sapienza, LUISS), con riforma Cartabia.
   ========================================================================= */

export const GEN_C = [
  /* ============= 1 · FORME DI MANIFESTAZIONE DEL REATO ============= */
  {
    id: "formeReato", part: "generale", chapter: 6, chapterTitle: "Le forme di manifestazione del reato",
    title: "Le forme di manifestazione: reato consumato, permanente, abituale", subtitle: "Consumazione, permanenza e abitualità: struttura e tempus commissi delicti",
    articoli: ["art. 158 c.p.", "art. 605 c.p.", "art. 572 c.p."], pages: [45, 46], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Il reato è <strong>consumato</strong> quando risultano integrati tutti gli elementi della fattispecie astratta, nel massimo grado di offesa concretamente possibile: è questo che lo distingue dal reato <em>tentato</em>, in cui il fatto tipico non si perfeziona. In base alla struttura della condotta si distinguono poi figure particolari. Il reato <strong>permanente</strong> è quello in cui l'offesa al bene giuridico si protrae nel tempo per la volontà dell'agente, che conserva il potere di farla cessare (es. il sequestro di persona, art. 605). Il reato <strong>abituale</strong>, invece, richiede la <em>reiterazione</em> di più condotte omogenee, valutate come un unico fatto (es. i maltrattamenti, art. 572). Questa classificazione non è teorica: incide sul <em>tempus commissi delicti</em>, sulla decorrenza della prescrizione, sulla flagranza e sulla stessa individuazione della legge applicabile.",
      approfondimenti: [
        { label: "Reato permanente", body: "L'offesa al bene giuridico si protrae per effetto della <strong>condotta volontaria</strong> dell'agente, che ha il potere di farla cessare. Si distingue una fase di <em>consumazione</em> (istantanea) e una di <em>permanenza</em> (perdurante). Rileva su più piani: il <strong>tempus commissi delicti</strong> (e quindi il dies a quo della prescrizione, art. 158, decorre dalla cessazione della permanenza), la flagranza, il concorso di persone (possibile fino alla cessazione) e la legge applicabile." },
        { label: "Reato abituale", body: "Si perfeziona solo con la <strong>reiterazione</strong> di più condotte: può essere <em>proprio</em> (le singole condotte non sono di per sé reato: es. atti persecutori, art. 612-bis) o <em>improprio</em> (le singole condotte sono già reato ma la reiterazione ne muta il titolo). Nei maltrattamenti (art. 572) i singoli atti vessatori acquistano rilievo penale unitario in virtù del loro carattere abituale." },
        { label: "Reato istantaneo ed eventualmente permanente", body: "Nel reato istantaneo l'offesa si esaurisce nel momento della realizzazione (es. omicidio). Alcune figure sono <strong>istantanee con effetti permanenti</strong> (es. bigamia) o <strong>eventualmente permanenti</strong> (es. il sequestro, che può protrarsi o esaurirsi rapidamente): qui la permanenza dipende dal caso concreto." },
      ],
      giurisprudenza: [
        { label: "Prescrizione e permanenza", body: "Per costante giurisprudenza (art. 158 c.p.), nel reato permanente il termine di prescrizione decorre dal giorno in cui è <strong>cessata la permanenza</strong>, non da quello di inizio della condotta; nel reato abituale, dal giorno dell'<strong>ultima condotta</strong> integrante l'abitualità." },
      ],
      eccezioni: [
        { label: "Maltrattamenti e unicità del reato", body: "Il reato abituale resta <strong>unitario</strong> anche se le condotte si susseguono nel tempo: non si applica il cumulo del concorso di reati, perché è la stessa fattispecie a richiedere la pluralità di atti come elemento costitutivo." },
      ],
    },
    sintesi: [
      "Consumato = integrati tutti gli elementi tipici, nel massimo dell'offesa concreta.",
      "Permanente (es. sequestro, art. 605): offesa protratta per volontà dell'agente.",
      "Abituale (es. maltrattamenti, art. 572): reiterazione di più condotte omogenee.",
      "La prescrizione (art. 158) decorre dalla cessazione della permanenza / ultima condotta.",
      "Il reato abituale resta unitario: non si applica il concorso di reati.",
    ],
    esempi: [
      { titolo: "Sequestro vs maltrattamenti", testo: "Marco tiene rinchiusa in un capannone la vittima di un rapimento per dieci giorni: il <strong>sequestro di persona</strong> (art. 605) è reato <em>permanente</em>, perché si consuma già con la privazione della libertà, ma continua a offendere il bene protetto finché dura la costrizione, sicché il reato resta in corso fino alla liberazione. Luca, invece, per mesi umilia, minaccia e percuote la convivente Anna: i <strong>maltrattamenti</strong> (art. 572) sono reato <em>abituale</em>, perché nessun singolo episodio, isolatamente, esprime l'intero disvalore, che nasce dalla reiterazione delle condotte vessatorie considerate unitariamente." },
    ],
    flashcards: [
      ["Quando un reato è consumato?", "Quando sono integrati tutti gli elementi della fattispecie, con la massima offesa concretamente realizzabile (a differenza del tentato)."],
      ["Cos'è il reato permanente e un esempio?", "Reato in cui l'offesa si protrae nel tempo per volontà dell'agente; es. il sequestro di persona (art. 605)."],
      ["Cos'è il reato abituale e un esempio?", "Reato che richiede la reiterazione di più condotte omogenee; es. i maltrattamenti (art. 572) e gli atti persecutori (art. 612-bis)."],
      ["Da quando decorre la prescrizione nel reato permanente?", "Dal giorno in cui è cessata la permanenza (art. 158 c.p.), non dall'inizio della condotta."],
    ],
    comparativa: {
      titolo: "Reato permanente vs reato abituale",
      a: "Reato permanente", b: "Reato abituale",
      righe: [
        { profilo: "Condotta", a: "Unica, che si protrae nel tempo", b: "Pluralità di condotte reiterate" },
        { profilo: "Esempio tipico", a: "Sequestro di persona (art. 605)", b: "Maltrattamenti (art. 572)" },
        { profilo: "Decorrenza prescrizione", a: "Dalla cessazione della permanenza", b: "Dall'ultima condotta abituale" },
      ],
    },
    quiz: [
      { q: "Il reato di sequestro di persona (art. 605 c.p.) appartiene alla categoria dei reati:", opts: ["Istantanei", "Permanenti", "Abituali", "Complessi"], correct: 1, why: "Il sequestro è reato permanente: l'offesa alla libertà si protrae per la volontà dell'agente finché dura la privazione. Non è abituale (che richiede più condotte) né istantaneo.", fonte: "Cap. 6 — §2", difficulty: 2, commonError: "Confondere la durata dell'offesa (permanenza) con la reiterazione di condotte (abitualità)." },
      { q: "I maltrattamenti contro familiari o conviventi (art. 572 c.p.) sono un reato:", opts: ["Permanente", "Istantaneo con effetti permanenti", "Abituale", "Di pericolo presunto"], correct: 2, why: "I maltrattamenti sono il tipico reato abituale: il disvalore penale nasce dalla reiterazione di più condotte vessatorie omogenee, valutate unitariamente.", fonte: "Cap. 6 — §2", difficulty: 2, commonError: "Qualificarlo come permanente: qui non c'è una condotta unica protratta, ma una pluralità di atti." },
      { q: "Nel reato permanente il termine di prescrizione (art. 158 c.p.) decorre:", opts: ["Dall'inizio della condotta illecita", "Dalla cessazione della permanenza", "Dalla scoperta del fatto di reato", "Dalla sentenza di primo grado"], correct: 1, why: "L'art. 158 stabilisce che per il reato permanente la prescrizione decorre dal giorno in cui è cessata la permanenza, poiché fino ad allora il reato è in fase di consumazione.", fonte: "Cap. 6 — §2 (art. 158)", difficulty: 3, commonError: "Far decorrere il termine dall'inizio della privazione, quando invece il reato è ancora in corso." },
      { q: "Nel reato abituale la pluralità di condotte comporta:", opts: ["Tanti reati quante le condotte, in concorso materiale", "Un unico reato, di cui è elemento la reiterazione", "Sempre il più mite regime del reato continuato", "L'applicazione del cumulo materiale delle pene"], correct: 1, why: "Il reato abituale è unitario: la reiterazione è elemento costitutivo della fattispecie, sicché non si applicano né il concorso di reati né la continuazione.", fonte: "Cap. 6 — §2", difficulty: 3, commonError: "Frammentare la condotta abituale in tanti reati autonomi cumulabili." },
    ],
    veroFalso: [
      { aff: "Nel reato permanente l'agente conserva il potere di far cessare l'offesa.", vero: true, traccia: "Vero. La permanenza dipende dalla condotta volontaria dell'agente, che mantiene il potere di interromperla (es. liberando la vittima del sequestro). Finché non lo fa, il reato resta in fase di consumazione." },
      { aff: "Il reato abituale può perfezionarsi con una sola condotta.", vero: false, traccia: "Falso. Il reato abituale richiede necessariamente la reiterazione di più condotte omogenee: un singolo episodio non integra la fattispecie (nel reato abituale proprio la singola condotta può non essere neppure reato)." },
    ],
    aperta: { q: "Il candidato distingua reato consumato, permanente e abituale, con esempi.", traccia: "Il reato è consumato quando sono integrati tutti gli elementi della fattispecie, con la massima offesa concretamente realizzabile (distinguendosi così dal tentato). In base alla struttura si individuano figure particolari: il reato permanente, in cui l'offesa si protrae nel tempo per la condotta volontaria dell'agente che ha il potere di farla cessare (es. sequestro di persona, art. 605); e il reato abituale, che si perfeziona solo con la reiterazione di più condotte omogenee, valutate unitariamente (es. maltrattamenti, art. 572; atti persecutori, art. 612-bis). La distinzione rileva per il tempus commissi delicti, la prescrizione (art. 158, che decorre dalla cessazione della permanenza o dall'ultima condotta), la flagranza, il concorso di persone e la legge applicabile.", fonte: "Cap. 6 — §§1-2" },
    consigliate: ["mappa", "comparativa", "esempi", "flashcards", "mcq"],
    media: { mappa: true },
  },

  /* ===================== 2 · IL TENTATIVO ===================== */
  {
    id: "tentativo", part: "generale", chapter: 6, chapterTitle: "Le forme di manifestazione del reato",
    title: "Il tentativo", subtitle: "Art. 56 c.p.: atti idonei e univoci, desistenza e recesso attivo",
    articoli: ["art. 56 c.p.", "art. 49 c.p.", "art. 115 c.p."], pages: [46, 47], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Il delitto tentato (art. 56) ricorre quando l'agente compie <strong>atti idonei, diretti in modo non equivoco</strong> a commettere un delitto, ma l'azione non si compie oppure l'evento non si verifica. La norma estende così la punibilità a una condotta che non ha realizzato il fatto tipico, anticipando la soglia dell'intervento penale. I requisiti oggettivi sono l'<strong>idoneità</strong> degli atti (la loro concreta attitudine a produrre l'evento, valutata con giudizio <em>ex ante</em>) e la loro <strong>univocità</strong> (la direzione non equivoca verso la commissione del delitto). Sul piano soggettivo occorre il <strong>dolo</strong> del corrispondente delitto consumato. Il tentativo è configurabile solo per i delitti e va tenuto distinto sia dal <em>reato impossibile</em> (art. 49), sia dalle figure premiali della desistenza e del recesso attivo, che intervengono quando l'agente arresta o neutralizza il proprio proposito criminoso.",
      approfondimenti: [
        { label: "Idoneità e prognosi postuma", body: "L'idoneità degli atti si accerta con <strong>prognosi postuma a base parziale</strong>: il giudice si colloca idealmente nel momento della condotta (ex ante) e valuta, con le conoscenze allora disponibili (integrate da quelle superiori dell'agente), se gli atti erano idonei a produrre l'evento secondo l'<em>id quod plerumque accidit</em>. L'univocità esprime invece la direzione non equivoca degli atti verso il delitto." },
        { label: "Desistenza e recesso attivo", body: "La <strong>desistenza volontaria</strong> (art. 56 co. 3): l'agente interrompe volontariamente l'azione non ancora completata e non è punibile per il tentativo (risponde solo degli atti già compiuti se di per sé reato). Il <strong>recesso attivo o pentimento operoso</strong> (art. 56 co. 4): l'azione è completa ma l'agente impedisce volontariamente l'evento; qui il tentativo resta punibile, con una diminuzione di pena da un terzo alla metà." },
        { label: "Tentativo e dolo eventuale", body: "Secondo l'orientamento prevalente il tentativo è <strong>incompatibile con il dolo eventuale</strong>: l'univocità degli atti postula una direzione finalistica verso l'evento, che mal si concilia con la mera accettazione del rischio. È invece pacificamente incompatibile con la colpa e con le contravvenzioni (art. 56 richiede il delitto)." },
      ],
      giurisprudenza: [
        { label: "Univocità in concreto", body: "La giurisprudenza (a partire da Cass. SU e prassi consolidata) accoglie una concezione <strong>oggettiva</strong> dell'univocità: la direzione non equivoca va desunta dalle modalità concrete della condotta e dal contesto, non dalla sola intenzione dichiarata dall'agente." },
      ],
      eccezioni: [
        { label: "Reato impossibile (art. 49 co. 2)", body: "Se gli atti sono <strong>inidonei</strong> o l'oggetto è <strong>inesistente</strong>, non c'è tentativo ma reato impossibile: l'agente non è punibile (salva l'applicabilità di misure di sicurezza). Il discrimine dal tentativo sta proprio nell'idoneità degli atti." },
      ],
    },
    sintesi: [
      "Art. 56: atti idonei e diretti in modo non equivoco a commettere un delitto.",
      "Idoneità = prognosi postuma a base parziale (giudizio ex ante); univocità = direzione non equivoca.",
      "Desistenza (co. 3): azione incompleta, non punibile per il tentativo.",
      "Recesso attivo (co. 4): azione completa + evento impedito, pena diminuita 1/3-1/2.",
      "Incompatibile con dolo eventuale, colpa e contravvenzioni; diverso dal reato impossibile (art. 49).",
    ],
    esempi: [
      { titolo: "Desistenza o recesso?", testo: "Marco punta la pistola contro il rivale e sta per premere il grilletto, poi, di sua iniziativa, abbassa l'arma e rinuncia: si ha <strong>desistenza volontaria</strong> (art. 56 co. 3), che rende non punibile il tentato omicidio (fermo restando che risponderà dei reati già eventualmente commessi, ad esempio minacce o detenzione illegale dell'arma). Se invece Marco ha già sparato ferendo la vittima, ma poi la soccorre chiamando l'ambulanza e le salva la vita, si ha <strong>recesso attivo</strong> (art. 56 co. 4): qui l'azione era completa, sicché il tentativo resta punibile, ma con pena diminuita da un terzo alla metà." },
    ],
    flashcards: [
      ["Quali sono i requisiti oggettivi del tentativo?", "L'idoneità degli atti e la loro direzione non equivoca (univocità) verso la commissione di un delitto (art. 56)."],
      ["Come si accerta l'idoneità degli atti?", "Con prognosi postuma a base parziale: giudizio ex ante, con le conoscenze del momento e quelle superiori dell'agente."],
      ["Differenza tra desistenza e recesso attivo?", "Desistenza (co. 3): azione incompleta, non punibilità per il tentativo. Recesso attivo (co. 4): azione completa, evento impedito, pena diminuita 1/3-1/2."],
      ["Il tentativo è compatibile col dolo eventuale?", "Per l'orientamento prevalente no: l'univocità postula una direzione finalistica incompatibile con la mera accettazione del rischio."],
    ],
    comparativa: {
      titolo: "Desistenza volontaria vs recesso attivo",
      a: "Desistenza (art. 56 co. 3)", b: "Recesso attivo (art. 56 co. 4)",
      righe: [
        { profilo: "Stato dell'azione", a: "Non ancora completata", b: "Completata" },
        { profilo: "Condotta richiesta", a: "Interruzione dell'azione", b: "Impedimento attivo dell'evento" },
        { profilo: "Effetto sulla pena", a: "Non punibile per il tentativo", b: "Tentativo punibile, pena diminuita 1/3-1/2" },
      ],
    },
    quiz: [
      { q: "Ai sensi dell'art. 56 c.p., il tentativo richiede atti:", opts: ["Meramente preparatori e generici, purché seri", "Idonei e diretti in modo non equivoco", "Esecutivi, ancorché equivoci nella direzione", "Idonei ma diretti verso una contravvenzione"], correct: 1, why: "L'art. 56 richiede atti idonei (efficaci secondo prognosi postuma) e univoci (diretti in modo non equivoco). Il tentativo è configurabile solo per i delitti, non per le contravvenzioni.", fonte: "Cap. 6 — §3 (art. 56)", difficulty: 2, commonError: "Ritenere punibili i meri atti preparatori privi di idoneità e univocità." },
      { q: "L'idoneità degli atti nel tentativo si valuta con:", opts: ["Prognosi postuma a base parziale", "Giudizio ex post fondato sull'evento", "Valutazione statistica pura del rischio", "L'intenzione dichiarata dall'agente"], correct: 0, why: "L'idoneità si accerta con prognosi postuma a base parziale: il giudice si pone ex ante, con le conoscenze del momento e quelle superiori dell'agente, valutando l'attitudine causale secondo l'id quod plerumque accidit.", fonte: "Cap. 6 — §3.1", difficulty: 3, commonError: "Valutare l'idoneità ex post, sulla base del fatto che l'evento non si è verificato." },
      { q: "Nella desistenza volontaria (art. 56 co. 3) l'agente:", opts: ["È punito per il tentativo con pena ridotta di un terzo", "Non è punibile per il tentativo, salvi gli atti-reato", "Risponde comunque del corrispondente delitto consumato", "Beneficia soltanto di una circostanza attenuante comune"], correct: 1, why: "La desistenza presuppone un'azione non ancora completata: chi vi recede volontariamente non è punibile per il tentativo, ma risponde degli atti già compiuti che costituiscano di per sé reato.", fonte: "Cap. 6 — §3.2", difficulty: 3, commonError: "Confondere la desistenza (non punibilità) col recesso attivo (mera diminuzione di pena)." },
      { q: "Il recesso attivo (art. 56 co. 4) presuppone che:", opts: ["L'azione non sia stata ancora del tutto completata", "L'azione sia completa e l'evento venga impedito", "L'evento dannoso o pericoloso si sia comunque verificato", "L'agente ignori di aver posto in essere il reato"], correct: 1, why: "Nel recesso attivo l'azione è compiuta ma l'agente impedisce volontariamente il verificarsi dell'evento: il tentativo resta punibile, con diminuzione di pena da un terzo alla metà.", fonte: "Cap. 6 — §3.2", difficulty: 3, commonError: "Assimilare il recesso alla desistenza, dando la non punibilità anche quando l'azione è già completa." },
      { q: "Manca del tutto il tentativo, e si ha reato impossibile (art. 49 co. 2), quando:", opts: ["L'agente desiste spontaneamente dall'azione", "Gli atti sono inidonei o l'oggetto inesistente", "Il delitto è aggravato da circostanze speciali", "Concorrono più persone nel medesimo fatto"], correct: 1, why: "L'inidoneità degli atti o l'inesistenza dell'oggetto integrano il reato impossibile (art. 49 co. 2), non punibile: il discrimine col tentativo è proprio l'idoneità degli atti.", fonte: "Cap. 6 — §3 (art. 49)", difficulty: 4, commonError: "Configurare un tentativo punibile anche in presenza di atti radicalmente inidonei." },
    ],
    veroFalso: [
      { aff: "Il tentativo è configurabile anche per le contravvenzioni.", vero: false, traccia: "Falso. L'art. 56 c.p. limita il tentativo ai soli delitti. Per le contravvenzioni la figura non è configurabile, così come non lo è per i delitti colposi (manca l'univocità direzionale) e, secondo l'orientamento prevalente, con il dolo eventuale." },
      { aff: "Nel recesso attivo il tentativo resta punibile, sia pure con pena diminuita.", vero: true, traccia: "Vero. A differenza della desistenza (che esclude la punibilità del tentativo), nel recesso attivo (art. 56 co. 4) l'azione è già completa: l'agente che impedisce l'evento risponde del tentativo con pena diminuita da un terzo alla metà." },
    ],
    aperta: { q: "Il candidato illustri la struttura del delitto tentato, distinguendo desistenza e recesso attivo.", traccia: "Il delitto tentato (art. 56) estende la punibilità a chi compie atti idonei, diretti in modo non equivoco a commettere un delitto, quando l'azione non si compie o l'evento non si verifica. Requisiti oggettivi sono l'idoneità (accertata con prognosi postuma a base parziale, giudizio ex ante) e l'univocità (direzione non equivoca degli atti, in concezione oggettiva); sul piano soggettivo occorre il dolo del delitto consumato (incompatibile, per i più, con il dolo eventuale, con la colpa e con le contravvenzioni). Vanno distinte la desistenza volontaria (co. 3): azione incompleta, non punibilità per il tentativo; e il recesso attivo (co. 4): azione completa ed evento impedito volontariamente, con tentativo punibile e pena diminuita da un terzo alla metà. Il tentativo si distingue infine dal reato impossibile (art. 49 co. 2), che ricorre per inidoneità degli atti o inesistenza dell'oggetto.", fonte: "Cap. 6 — §3" },
    consigliate: ["comparativa", "esempi", "mcq", "aperta", "flashcards"],
    media: { mappa: true },
  },

  /* ===================== 3 · LE CIRCOSTANZE DEL REATO ===================== */
  {
    id: "circostanze", part: "generale", chapter: 6, chapterTitle: "Le forme di manifestazione del reato",
    title: "Le circostanze del reato", subtitle: "Classificazione, imputazione (art. 59), bilanciamento (art. 69), recidiva",
    articoli: ["art. 59 c.p.", "art. 69 c.p.", "art. 99 c.p.", "art. 62-bis c.p."], pages: [48, 53], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Le circostanze sono <strong>elementi accessori</strong> del reato che, presupponendo una fattispecie già perfetta in tutti i suoi elementi costitutivi, ne modificano la gravità e incidono sulla misura della pena: si dicono <strong>aggravanti</strong> se la aumentano, <strong>attenuanti</strong> se la diminuiscono. Vanno perciò tenute distinte dagli elementi costitutivi, la cui assenza esclude in radice il reato. Si classificano in comuni (applicabili a una generalità di reati, artt. 61-62) e speciali, oggettive e soggettive (art. 70), ad effetto comune o ad effetto speciale. Il regime di <em>imputazione</em> è dettato dall'art. 59, che dopo la L. 19/1990 richiede la colpevolezza per le aggravanti ma valuta le attenuanti a favore del reo anche se ignorate. Quando concorrono circostanze eterogenee, la loro incidenza è determinata dal giudizio di <strong>bilanciamento</strong> (art. 69).",
      approfondimenti: [
        { label: "Classificazione", body: "<strong>Comuni</strong> (artt. 61-62, per una generalità di reati) o <strong>speciali</strong> (per singole figure); <strong>aggravanti</strong> o <strong>attenuanti</strong>; <strong>oggettive</strong> (relative a natura, mezzi, oggetto, tempo, luogo, gravità del danno) o <strong>soggettive</strong> (relative a intensità del dolo, grado della colpa, condizioni o qualità personali, rapporti col soggetto passivo — art. 70); ad <strong>effetto comune</strong> (variazione fino a un terzo) o <strong>ad effetto speciale</strong> (variazione superiore al terzo, o pena di specie diversa)." },
        { label: "Imputazione (art. 59)", body: "Le <strong>aggravanti</strong> sono imputate se conosciute o ignorate per colpa (criterio di colpevolezza, dopo la L. 19/1990); le <strong>attenuanti</strong> sono valutate a favore del reo anche se non conosciute o ritenute per errore inesistenti (imputazione oggettiva). Le circostanze putative (erroneamente supposte) di regola non giovano né nuocciono, con le eccezioni di legge." },
        { label: "Recidiva (art. 99) e attenuanti generiche (art. 62-bis)", body: "La <strong>recidiva</strong> è la circostanza aggravante soggettiva inerente alla persona del colpevole che ha già subìto condanna e commette un nuovo delitto non colposo: semplice, aggravata, reiterata. Dopo Corte cost. n. 185/2015 la recidiva reiterata è di regola <strong>facoltativa</strong>. Le <strong>attenuanti generiche</strong> (art. 62-bis) consentono al giudice di valorizzare elementi non tipizzati che riducono la gravità del fatto o denotano minore capacità a delinquere." },
      ],
      giurisprudenza: [
        { label: "Bilanciamento e limiti (art. 69)", body: "Il giudizio di comparazione (art. 69) è di regola libero, ma la legge pone <strong>divieti di prevalenza/equivalenza</strong> (es. per talune aggravanti). La Corte costituzionale ha più volte dichiarato illegittimi divieti di prevalenza delle attenuanti che producevano trattamenti sanzionatori sproporzionati e irragionevoli (art. 3 e 27 Cost.)." },
      ],
      eccezioni: [
        { label: "Circostanze e reato circostanziato", body: "Le circostanze non vanno confuse con gli elementi costitutivi: un elemento specializzante (es. l'età nella fattispecie autonoma) può dare vita a un <strong>titolo di reato autonomo</strong> anziché a una circostanza, con conseguente inapplicabilità del bilanciamento ex art. 69." },
      ],
    },
    sintesi: [
      "Circostanze = elementi accessori che incidono sulla pena (aggravanti/attenuanti).",
      "Classificazione: comuni/speciali, oggettive/soggettive (art. 70), effetto comune/speciale.",
      "Art. 59: aggravanti se conosciute o ignorate per colpa; attenuanti a favore del reo anche se ignorate.",
      "Art. 69: bilanciamento in caso di concorso eterogeneo, con limiti legali di prevalenza.",
      "Recidiva (art. 99, spesso facoltativa) e attenuanti generiche (art. 62-bis).",
    ],
    esempi: [
      { titolo: "Aggravante ignorata per colpa", testo: "Luca percuote un uomo al termine di una lite, senza sapere che si tratta di un pubblico ufficiale in servizio. Se l'ignoranza dipende da sua <em>colpa</em> — ad esempio perché l'uomo indossava l'uniforme e altri indizi rendevano evidente la qualifica — l'aggravante gli è imputata ex art. 59 co. 2. Se invece quella qualità era del tutto occulta e per lui inconoscibile (agente in borghese, in un contesto neutro), l'aggravante non gli si applica, per difetto di colpevolezza. Al contrario, un'eventuale <strong>attenuante</strong> gioverebbe a Luca anche qualora egli non ne fosse a conoscenza, secondo il criterio oggettivo favorevole al reo." },
    ],
    flashcards: [
      ["Cosa sono le circostanze del reato?", "Elementi accessori che, presupposto un reato perfetto, ne modificano la gravità incidendo sulla pena (aggravanti o attenuanti)."],
      ["Come si imputano aggravanti e attenuanti (art. 59)?", "Le aggravanti se conosciute o ignorate per colpa; le attenuanti a favore del reo anche se non conosciute o ritenute inesistenti per errore."],
      ["Cos'è il giudizio di bilanciamento (art. 69)?", "La comparazione tra circostanze eterogenee concorrenti (aggravanti e attenuanti), che possono essere ritenute prevalenti, equivalenti o subvalenti, con i limiti di legge."],
      ["Cosa sono le attenuanti generiche (art. 62-bis)?", "Circostanze atipiche che il giudice può riconoscere per ridurre la pena, valorizzando elementi che attenuano la gravità del fatto o la capacità a delinquere."],
    ],
    comparativa: {
      titolo: "Circostanze aggravanti vs attenuanti",
      a: "Aggravanti", b: "Attenuanti",
      righe: [
        { profilo: "Effetto sulla pena", a: "La aumentano", b: "La diminuiscono" },
        { profilo: "Imputazione (art. 59)", a: "Se conosciute o ignorate per colpa", b: "A favore del reo anche se ignorate" },
        { profilo: "Esempio", a: "Recidiva (art. 99)", b: "Attenuanti generiche (art. 62-bis)" },
      ],
    },
    quiz: [
      { q: "Le circostanze aggravanti, ai sensi dell'art. 59 c.p., sono imputate all'agente:", opts: ["Sempre, in via puramente oggettiva", "Se conosciute o ignorate per colpa", "Soltanto se effettivamente volute", "Solo se contestate per iscritto"], correct: 1, why: "Dopo la L. 19/1990 l'art. 59 co. 2 richiede, per le aggravanti, che siano conosciute ovvero ignorate per colpa o ritenute inesistenti per errore determinato da colpa: criterio di colpevolezza.", fonte: "Cap. 6 — §4.2 (art. 59)", difficulty: 3, commonError: "Ritenere ancora vigente l'imputazione puramente oggettiva delle aggravanti." },
      { q: "Le circostanze attenuanti sono valutate a favore del reo:", opts: ["Solo se da lui effettivamente conosciute in concreto", "Anche se non conosciute o ritenute inesistenti", "Soltanto se di natura oggettiva e non soggettiva", "Solo se espressamente richieste dalla difesa tecnica"], correct: 1, why: "L'art. 59 co. 1 stabilisce che le attenuanti sono valutate a favore dell'agente anche se da lui non conosciute o ritenute per errore inesistenti (imputazione oggettiva favorevole).", fonte: "Cap. 6 — §4.2 (art. 59)", difficulty: 2, commonError: "Applicare alle attenuanti lo stesso criterio soggettivo previsto per le aggravanti." },
      { q: "Il giudizio di comparazione tra circostanze eterogenee è disciplinato dall'art.:", opts: ["59 c.p.", "69 c.p.", "81 c.p.", "133 c.p."], correct: 1, why: "L'art. 69 c.p. regola il bilanciamento in caso di concorso eterogeneo: le circostanze possono essere ritenute prevalenti, equivalenti o subvalenti, con i limiti posti dalla legge.", fonte: "Cap. 6 — §4.3 (art. 69)", difficulty: 2, commonError: "Confondere l'art. 69 (bilanciamento) con l'art. 59 (imputazione) o l'art. 81 (concorso di reati)." },
      { q: "La recidiva (art. 99 c.p.) è una circostanza:", opts: ["Oggettiva, comune e a effetto comune", "Aggravante soggettiva inerente al colpevole", "Attenuante generica ad effetto speciale", "Aggravante applicabile anche alle contravvenzioni", ], correct: 1, why: "La recidiva è aggravante soggettiva inerente alla persona del colpevole (art. 70): presuppone una precedente condanna per delitto non colposo e la commissione di un nuovo delitto non colposo.", fonte: "Cap. 6 — §4.4 (art. 99)", difficulty: 3, commonError: "Qualificarla come circostanza oggettiva o applicarla alle contravvenzioni." },
      { q: "Le attenuanti generiche (art. 62-bis c.p.) consentono al giudice di:", opts: ["Escludere del tutto la punibilità del fatto", "Valorizzare elementi atipici che riducono la pena", "Aumentare la pena oltre il massimo edittale previsto", "Derogare al giudizio di bilanciamento di cui all'art. 69"], correct: 1, why: "L'art. 62-bis permette di riconoscere circostanze non tipizzate che attenuano la gravità del fatto o denotano minore capacità a delinquere, con conseguente diminuzione di pena.", fonte: "Cap. 6 — §4.6 (art. 62-bis)", difficulty: 2, commonError: "Confondere le generiche (mera diminuzione di pena) con cause di non punibilità." },
    ],
    veroFalso: [
      { aff: "Un'aggravante del tutto ignota e inconoscibile all'agente gli viene comunque imputata.", vero: false, traccia: "Falso. Dopo la L. 19/1990, l'art. 59 co. 2 richiede che l'aggravante sia conosciuta o ignorata per colpa. Se era del tutto occulta e inconoscibile, non è imputabile all'agente per difetto di colpevolezza." },
      { aff: "Il giudizio di bilanciamento ex art. 69 incontra limiti legali di prevalenza per talune circostanze.", vero: true, traccia: "Vero. Pur essendo di regola libero, il bilanciamento è soggetto a divieti di prevalenza o equivalenza per specifiche circostanze; la Corte costituzionale ha però censurato quelli che generavano pene sproporzionate e irragionevoli (artt. 3 e 27 Cost.)." },
    ],
    aperta: { q: "Il candidato esponga la classificazione delle circostanze e il regime di imputazione e bilanciamento.", traccia: "Le circostanze sono elementi accessori che, presupposto un reato perfetto, ne modificano la gravità incidendo sulla pena. Si classificano in comuni (artt. 61-62) e speciali; aggravanti e attenuanti; oggettive e soggettive (art. 70); ad effetto comune (variazione fino a un terzo) e ad effetto speciale. L'imputazione (art. 59, dopo la L. 19/1990) è di colpevolezza per le aggravanti (conosciute o ignorate per colpa) e oggettiva favorevole per le attenuanti (valutate anche se ignorate). Il concorso eterogeneo è risolto dal bilanciamento (art. 69), con giudizio di prevalenza, equivalenza o subvalenza soggetto ai limiti di legge, più volte scrutinati dalla Corte costituzionale. Tra le figure di rilievo: la recidiva (art. 99, spesso facoltativa dopo Corte cost. 185/2015) e le attenuanti generiche (art. 62-bis).", fonte: "Cap. 6 — §4" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: { mappa: true },
  },

  /* ============= 4 · IL CONCORSO DI PERSONE NEL REATO ============= */
  {
    id: "concorsoPersone", part: "generale", chapter: 6, chapterTitle: "Le forme di manifestazione del reato",
    title: "Il concorso di persone nel reato", subtitle: "Art. 110 c.p.: contributo causale, concorso anomalo, cooperazione colposa",
    articoli: ["art. 110 c.p.", "art. 116 c.p.", "art. 117 c.p.", "art. 113 c.p."], pages: [53, 57], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "L'art. 110 c.p. è una <strong>clausola generale di tipizzazione per sussunzione</strong>: stabilisce che, quando più persone concorrono nel medesimo reato, ciascuna soggiace alla pena per esso prevista. La sua funzione è estendere la tipicità, rendendo punibili anche condotte di partecipazione che, isolatamente considerate, sarebbero atipiche (ad esempio quella di chi fa da <em>palo</em> o istiga l'esecutore). Gli elementi costitutivi del concorso sono quattro: la <strong>pluralità di agenti</strong>; la <strong>realizzazione del fatto</strong>, almeno a livello di tentativo; un <strong>contributo causale</strong>, materiale o morale, apportato da ciascun concorrente; e il <strong>dolo di concorso</strong>, cioè la coscienza e volontà di cooperare con altri alla realizzazione del reato. La disciplina si completa con figure particolari quali il concorso anomalo (art. 116), il mutamento del titolo (art. 117) e la cooperazione colposa (art. 113).",
      approfondimenti: [
        { label: "Il contributo: materiale e morale", body: "Il contributo può essere <strong>materiale</strong> (esecutivo o agevolatore, es. il palo) o <strong>morale</strong> (<em>determinazione</em>: far sorgere in altri il proposito criminoso; <em>istigazione/rafforzamento</em> di un proposito già esistente). Occorre l'efficienza causale del contributo: la giurisprudenza richiede almeno che abbia agevolato o reso più sicura la realizzazione del reato." },
        { label: "Concorso anomalo (116) e mutamento del titolo (117)", body: "Il <strong>concorso anomalo</strong> (art. 116): se il reato commesso è diverso da quello voluto da taluno dei concorrenti, questi ne risponde purché l'evento diverso sia <em>conseguenza prevedibile</em> della sua condotta (Corte cost. 42/1965 ha innestato il requisito della prevedibilità, salvando la norma dal profilo dell'art. 27 Cost.). L'art. 117 disciplina il <strong>mutamento del titolo</strong> per taluni concorrenti in ragione di una qualità o condizione personale (es. reato proprio)." },
        { label: "Reato proprio, cooperazione colposa, attenuanti", body: "Nel <strong>reato proprio</strong> l'estraneo (extraneus) concorre col soggetto qualificato (intraneus) se ne conosce la qualifica. La <strong>cooperazione colposa</strong> (art. 113) punisce il concorso nel delitto colposo, richiedendo la consapevolezza di cooperare con altri (non la volontà dell'evento). L'art. 114 prevede l'attenuante del contributo di <strong>minima importanza</strong>; l'art. 118 rende personali le circostanze soggettive." },
      ],
      giurisprudenza: [
        { label: "Concorso morale e prova", body: "La giurisprudenza richiede che il contributo morale (istigazione, rafforzamento) sia provato in concreto nella sua efficacia causale sulla decisione dell'autore materiale: non basta la mera connivenza o la presenza passiva sul luogo del reato, salvo che integri un rafforzamento del proposito altrui." },
      ],
      eccezioni: [
        { label: "Mero accordo non punibile (art. 115)", body: "L'art. 115 esclude la punibilità del <strong>semplice accordo</strong> a commettere un reato e dell'istigazione non accolta, quando il reato non è commesso (salva l'applicabilità di misure di sicurezza). È il rovescio del concorso: senza realizzazione del fatto non c'è responsabilità concorsuale." },
      ],
    },
    sintesi: [
      "Art. 110: chi concorre nel medesimo reato soggiace alla pena prevista (tipizzazione per sussunzione).",
      "Elementi: pluralità di agenti, fatto, contributo causale (materiale/morale), dolo di concorso.",
      "Concorso anomalo (116): risponde del reato diverso se prevedibile (Corte cost. 42/1965).",
      "Mutamento del titolo (117); reato proprio: extraneus punibile se conosce la qualifica.",
      "Cooperazione colposa (113); attenuante minima importanza (114); art. 118; accordo non punibile (115).",
    ],
    esempi: [
      { titolo: "Il palo e il concorso anomalo", testo: "Marco fa <em>il palo</em> all'esterno mentre il complice Luca si introduce in un'abitazione per rubare: si tratta di un contributo materiale agevolatore, sicché Marco risponde del furto <strong>in concorso</strong> (art. 110), pur non avendo sottratto nulla di persona. Se però Luca, sorpreso dal proprietario, lo aggredisce con violenza trasformando il furto in <strong>rapina</strong>, Marco ne risponde soltanto se questo esito era per lui <em>prevedibile</em> in base alle circostanze concrete (concorso anomalo, art. 116); in mancanza di tale prevedibilità, egli continua a rispondere del solo furto." },
    ],
    flashcards: [
      ["Quali sono gli elementi del concorso di persone?", "Pluralità di agenti, realizzazione del fatto (almeno tentato), contributo causale materiale o morale, dolo di concorso."],
      ["Cos'è il concorso anomalo (art. 116)?", "Quando il reato commesso è diverso da quello voluto: il concorrente ne risponde se l'evento diverso era conseguenza prevedibile della sua condotta (Corte cost. 42/1965)."],
      ["Cos'è la cooperazione colposa (art. 113)?", "Il concorso nel delitto colposo: richiede la consapevolezza di cooperare con altri, non la volontà dell'evento."],
      ["Il mero accordo a delinquere è punibile (art. 115)?", "No: se il reato non è commesso, l'accordo e l'istigazione non accolta non sono punibili (salve misure di sicurezza)."],
    ],
    comparativa: {
      titolo: "Concorso morale: determinazione vs istigazione",
      a: "Determinazione", b: "Istigazione / rafforzamento",
      righe: [
        { profilo: "Stato del proposito", a: "Assente: viene fatto sorgere", b: "Già esistente: viene rafforzato" },
        { profilo: "Contributo del concorrente", a: "Crea il proposito criminoso altrui", b: "Consolida o eccita un proposito preesistente" },
        { profilo: "Nesso causale", a: "Causa la decisione dell'autore", b: "Incide sulla persistenza della decisione" },
      ],
    },
    quiz: [
      { q: "L'art. 110 c.p. rispetto alle condotte atipiche di partecipazione opera come:", opts: ["Causa di non punibilità sopravvenuta", "Clausola di tipizzazione per sussunzione", "Circostanza aggravante ad effetto speciale", "Norma meramente processuale e non sostanziale"], correct: 1, why: "L'art. 110 è una clausola generale che tipizza per sussunzione le condotte atipiche di partecipazione, rendendole punibili con la pena prevista per il reato al quale si concorre.", fonte: "Cap. 6 — §5", difficulty: 3, commonError: "Considerare l'art. 110 una mera regola sanzionatoria e non una norma di parte generale che estende la tipicità." },
      { q: "Il contributo morale al reato può assumere la forma di:", opts: ["Sola esecuzione materiale della condotta tipica", "Determinazione o istigazione del proposito altrui", "Semplice connivenza passiva sul luogo del reato", "Accordo criminoso non seguito dalla commissione del reato"], correct: 1, why: "Il concorso morale si realizza determinando in altri il proposito criminoso o istigando/rafforzando un proposito già esistente, purché con efficacia causale provata.", fonte: "Cap. 6 — §5.1", difficulty: 2, commonError: "Ritenere sufficiente la mera connivenza o presenza passiva sul luogo del reato." },
      { q: "Nel concorso anomalo (art. 116 c.p.) il concorrente risponde del reato diverso da quello voluto:", opts: ["In ogni caso, a titolo di responsabilità oggettiva", "Se l'evento diverso era per lui prevedibile", "Solo se lo ha voluto in modo diretto", "In nessun caso, mancando il dolo"], correct: 1, why: "Corte cost. 42/1965 ha richiesto, per salvare la norma dal contrasto con l'art. 27 Cost., che l'evento diverso sia conseguenza prevedibile della condotta del concorrente.", fonte: "Cap. 6 — §5.4 (art. 116)", difficulty: 4, commonError: "Applicare l'art. 116 come pura responsabilità oggettiva, ignorando il requisito della prevedibilità." },
      { q: "Nel reato proprio, l'extraneus concorre col soggetto qualificato:", opts: ["In nessun caso, difettando la qualifica", "Se conosce la qualifica dell'intraneus", "Solo se anch'egli è soggetto qualificato", "Soltanto nei reati di natura colposa"], correct: 1, why: "L'estraneo può concorrere nel reato proprio purché sia consapevole della qualifica soggettiva dell'intraneus, che fonda o muta il titolo del reato (cfr. art. 117).", fonte: "Cap. 6 — §5.5", difficulty: 3, commonError: "Escludere sempre la punibilità dell'estraneo nei reati propri." },
      { q: "La cooperazione nel delitto colposo (art. 113 c.p.) richiede:", opts: ["La volontà dell'evento lesivo non voluto", "La consapevolezza di cooperare con altri", "Il dolo di concorso nel fatto illecito", "Un previo accordo criminoso tra gli agenti"], correct: 1, why: "L'art. 113 richiede la coscienza di cooperare con altri nella condotta colposa; non è necessaria (né compatibile) la volontà dell'evento, che resta non voluto.", fonte: "Cap. 6 — §5.2 (art. 113)", difficulty: 3, commonError: "Pretendere il dolo di concorso o la volontà dell'evento nel reato colposo." },
    ],
    veroFalso: [
      { aff: "Ai fini del concorso di persone è sempre necessario che ciascun concorrente ponga in essere la condotta tipica.", vero: false, traccia: "Falso. Grazie all'art. 110, sono tipizzate e punibili anche condotte atipiche di partecipazione (agevolazione materiale, contributo morale): non occorre che ogni concorrente realizzi la condotta descritta dalla norma incriminatrice." },
      { aff: "Il semplice accordo a commettere un reato, se il reato non è commesso, non è punibile.", vero: true, traccia: "Vero. L'art. 115 esclude la punibilità del mero accordo e dell'istigazione non accolta quando il reato non è commesso, salva l'eventuale applicazione di misure di sicurezza. Manca la realizzazione del fatto." },
    ],
    aperta: { q: "Il candidato illustri gli elementi del concorso di persone e le figure del concorso anomalo e della cooperazione colposa.", traccia: "L'art. 110 tipizza per sussunzione le condotte di partecipazione: chi concorre nel medesimo reato soggiace alla pena prevista. Elementi costitutivi sono la pluralità di agenti, la realizzazione del fatto (almeno a livello di tentativo), il contributo causale — materiale (esecutivo o agevolatore) o morale (determinazione, istigazione, rafforzamento) — e il dolo di concorso (coscienza e volontà di concorrere con altri). Il concorso anomalo (art. 116) fa rispondere il concorrente del reato diverso da quello voluto se questo era conseguenza prevedibile della sua condotta (Corte cost. 42/1965). L'art. 117 disciplina il mutamento del titolo per la qualifica personale (reato proprio, cui l'extraneus concorre se conosce la qualifica). La cooperazione colposa (art. 113) richiede la consapevolezza di cooperare, non la volontà dell'evento. Rilevano infine l'attenuante di minima importanza (114), la personalità delle circostanze soggettive (118) e la non punibilità del mero accordo (115).", fonte: "Cap. 6 — §5" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: { mappa: true },
  },

  /* ======= 5 · CONCORSO DI REATI E CONCORSO APPARENTE DI NORME ======= */
  {
    id: "concorsoReati", part: "generale", chapter: 6, chapterTitle: "Le forme di manifestazione del reato",
    title: "Il concorso di reati e il concorso apparente di norme", subtitle: "Concorso formale/materiale, reato continuato (art. 81), specialità e assorbimento",
    articoli: ["art. 81 c.p.", "art. 15 c.p.", "art. 84 c.p."], pages: [57, 61], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Si ha <strong>concorso di reati</strong> quando uno stesso soggetto viola più norme incriminatrici, o più volte la medesima norma. Il concorso è <strong>formale</strong> quando con una sola azione od omissione si integrano più reati, ed è invece <strong>materiale</strong> quando a più azioni corrispondono più reati. Al concorso materiale si applica il cumulo materiale (temperato) delle pene; al concorso formale e al reato continuato, di regola più favorevole, il cumulo giuridico (art. 81). Diverso è il <strong>concorso apparente di norme</strong>, che è tale solo in apparenza: più disposizioni sembrano applicabili al fatto, ma una sola deve effettivamente trovare applicazione, per evitare il <em>bis in idem</em> sostanziale. Il criterio legale di risoluzione è la specialità (art. 15), affiancato in via dottrinale dalla sussidiarietà e dalla consunzione o assorbimento.",
      approfondimenti: [
        { label: "Concorso formale, materiale e reato continuato", body: "Nel <strong>concorso materiale</strong> vige il cumulo materiale delle pene (temperato). Nel <strong>concorso formale</strong> (art. 81 co. 1) e nel <strong>reato continuato</strong> (art. 81 co. 2 — più violazioni in esecuzione di un <em>medesimo disegno criminoso</em>) si applica il <strong>cumulo giuridico</strong>: pena del reato più grave aumentata fino al triplo, di regola più favorevole. Il reato continuato presuppone un programma unitario deliberato ab origine." },
        { label: "Criteri del concorso apparente", body: "Il criterio legale è la <strong>specialità</strong> (art. 15): la norma speciale prevale su quella generale (<em>lex specialis derogat generali</em>), quando contiene tutti gli elementi dell'altra più uno specializzante. La dottrina e la giurisprudenza discutono i criteri valoriali della <strong>sussidiarietà</strong> (la norma sussidiaria si applica solo se non ricorre quella primaria) e della <strong>consunzione/assorbimento</strong> (il disvalore di un reato è già ricompreso in un altro)." },
        { label: "Reato complesso, progressivo, ante/post factum", body: "Il <strong>reato complesso</strong> (art. 84) è un caso legale di assorbimento: una figura contiene come elementi costitutivi o circostanze fatti che sarebbero autonomi reati (es. la rapina = violenza/minaccia + furto). Il <strong>reato progressivo</strong> e la <strong>progressione criminosa</strong> comportano l'assorbimento dell'offesa minore in quella maggiore. L'<strong>ante factum</strong> e il <strong>post factum non punibili</strong> restano assorbiti nel reato principale (es. la detenzione anteriore all'uso, la vendita della refurtiva dopo il furto)." },
      ],
      giurisprudenza: [
        { label: "Le SU e il criterio di specialità", body: "Le Sezioni Unite tendono a privilegiare il criterio <strong>strutturale della specialità</strong> ex art. 15, come unico criterio dotato di sicura base legale, guardando con cautela ai criteri valoriali (consunzione) per il rischio di incertezza applicativa e di violazione della legalità." },
      ],
      eccezioni: [
        { label: "Continuazione e reati eterogenei", body: "Il reato continuato è ammesso anche tra reati eterogenei e, dopo le riforme, pure in fase esecutiva. Ma richiede sempre l'unicità del disegno criminoso deliberato ab origine: non basta la mera reiterazione o l'occasionalità del contesto." },
      ],
    },
    sintesi: [
      "Concorso formale: una sola azione, più reati; materiale: più azioni, più reati.",
      "Reato continuato (art. 81 co. 2): più violazioni nel medesimo disegno criminoso → cumulo giuridico.",
      "Concorso apparente: una sola norma applicabile, per evitare il bis in idem sostanziale.",
      "Criteri: specialità (art. 15, legale), sussidiarietà, consunzione/assorbimento (valoriali).",
      "Reato complesso (art. 84), progressivo, ante/post factum non punibili: casi di assorbimento.",
    ],
    esempi: [
      { titolo: "La rapina come reato complesso", testo: "La <strong>rapina</strong> (art. 628) fonde in un'unica figura la violenza o minaccia e la sottrazione della cosa: è un <em>reato complesso</em> (art. 84), sicché al rapinatore non si contestano separatamente la violenza privata e il furto, perché entrambi sono già assorbiti nella fattispecie. Diversamente, se Marco con un solo colpo di pistola uccide un uomo e ne ferisce un altro che gli stava accanto, realizza con un'unica azione più eventi lesivi: si configura allora un <strong>concorso formale</strong> di reati, al quale si applica il cumulo giuridico dell'art. 81 (pena del reato più grave aumentata fino al triplo)." },
    ],
    flashcards: [
      ["Differenza tra concorso formale e materiale di reati?", "Formale: una sola azione/omissione integra più reati. Materiale: più azioni od omissioni integrano più reati."],
      ["Cos'è il reato continuato e come si punisce?", "Più violazioni di legge in esecuzione di un medesimo disegno criminoso (art. 81 co. 2): cumulo giuridico, pena del reato più grave aumentata fino al triplo."],
      ["Qual è il criterio legale del concorso apparente di norme?", "La specialità (art. 15): la norma speciale, contenente tutti gli elementi della generale più uno specializzante, prevale su quella generale."],
      ["Cos'è il reato complesso (art. 84)?", "Una fattispecie che contiene come elementi costitutivi o circostanze fatti che di per sé sarebbero reati autonomi (es. la rapina); caso legale di assorbimento."],
    ],
    comparativa: {
      titolo: "Concorso formale di reati vs concorso apparente di norme",
      a: "Concorso formale di reati", b: "Concorso apparente di norme",
      righe: [
        { profilo: "Norme applicabili", a: "Più norme, tutte effettivamente violate", b: "Più norme apparenti, una sola applicabile" },
        { profilo: "Esito sanzionatorio", a: "Pluralità di reati (cumulo giuridico, art. 81)", b: "Un solo reato" },
        { profilo: "Criterio risolutivo", a: "Unicità dell'azione, pluralità di offese", b: "Specialità/sussidiarietà/consunzione" },
      ],
    },
    quiz: [
      { q: "Si ha concorso formale di reati quando:", opts: ["Con più azioni distinte si violano più norme incriminatrici", "Con una sola azione od omissione si violano più norme", "Una sola norma risulta in concreto applicabile al fatto", "Il reato si protrae nel tempo e diviene permanente"], correct: 1, why: "Il concorso formale (art. 81 co. 1) ricorre quando con una sola azione od omissione si commettono più violazioni della stessa o di diverse disposizioni di legge.", fonte: "Cap. 6 — §6.1 (art. 81)", difficulty: 2, commonError: "Scambiare il concorso formale (una azione) con quello materiale (più azioni)." },
      { q: "Il reato continuato (art. 81 co. 2 c.p.) presuppone:", opts: ["La sola pluralità materiale dei reati commessi", "Più violazioni nel medesimo disegno criminoso", "L'identità del bene giuridico offeso dai reati", "Che i reati siano necessariamente omogenei"], correct: 1, why: "L'elemento qualificante è il medesimo disegno criminoso, ossia un programma unitario deliberato ab origine; la continuazione è ammessa anche tra reati eterogenei.", fonte: "Cap. 6 — §6.3 (art. 81)", difficulty: 3, commonError: "Ravvisare la continuazione nella mera reiterazione occasionale, senza il disegno unitario." },
      { q: "Al concorso formale e al reato continuato si applica:", opts: ["Il cumulo materiale integrale delle pene irrogate", "Il cumulo giuridico ex art. 81 c.p.", "Una sola pena, senza alcun aumento sanzionatorio", "L'assorbimento del reato meno grave in quello grave"], correct: 1, why: "Per il concorso formale e la continuazione l'art. 81 prevede il cumulo giuridico: pena che dovrebbe infliggersi per la violazione più grave, aumentata fino al triplo (di regola più favorevole del cumulo materiale).", fonte: "Cap. 6 — §6.3", difficulty: 2, commonError: "Applicare il cumulo materiale anche al concorso formale/continuato." },
      { q: "Il criterio dotato di sicura base legale per risolvere il concorso apparente è:", opts: ["La sussidiarietà tra le norme", "La consunzione del disvalore", "La specialità ex art. 15 c.p.", "L'assorbimento di tipo valoriale"], correct: 2, why: "L'art. 15 codifica il principio di specialità, unico criterio a base legale certa; sussidiarietà e consunzione sono criteri valoriali di elaborazione dottrinale, guardati con cautela dalle SU.", fonte: "Cap. 6 — §6.5 (art. 15)", difficulty: 4, commonError: "Attribuire alla consunzione o alla sussidiarietà lo stesso fondamento legale della specialità." },
      { q: "La rapina (art. 628 c.p.), che unisce violenza e sottrazione, è un esempio di:", opts: ["Concorso materiale di più reati distinti", "Reato complesso ex art. 84 c.p.", "Reato continuato unitario", "Concorso formale di reati"], correct: 1, why: "La rapina è reato complesso (art. 84): assorbe come elementi costitutivi la violenza/minaccia e la sottrazione, che non si contestano autonomamente. È un caso legale di assorbimento.", fonte: "Cap. 6 — §6.6 (art. 84)", difficulty: 3, commonError: "Contestare separatamente furto e violenza privata quando sono già assorbiti nella figura complessa." },
    ],
    veroFalso: [
      { aff: "Nel concorso apparente di norme più disposizioni sono effettivamente applicate al fatto.", vero: false, traccia: "Falso. Nel concorso apparente le norme sono solo apparentemente concorrenti: una sola deve trovare applicazione (per specialità, sussidiarietà o consunzione), a differenza del concorso formale in cui più reati sono realmente integrati." },
      { aff: "Il reato continuato può configurarsi anche tra reati di specie diversa.", vero: true, traccia: "Vero. La continuazione (art. 81 co. 2) è ammessa anche tra reati eterogenei, purché commessi in esecuzione di un medesimo disegno criminoso deliberato ab origine; è ammessa anche in sede esecutiva." },
    ],
    aperta: { q: "Il candidato distingua il concorso di reati dal concorso apparente di norme, illustrandone i criteri.", traccia: "Nel concorso di reati un soggetto viola più norme (o più volte la stessa): è formale se con una sola azione/omissione (art. 81 co. 1), materiale se con più azioni. Al concorso formale e al reato continuato — più violazioni nel medesimo disegno criminoso (art. 81 co. 2) — si applica il cumulo giuridico (pena del reato più grave aumentata fino al triplo), mentre al concorso materiale il cumulo materiale temperato. Il concorso apparente di norme è invece solo apparente: più norme sembrano applicabili, ma una sola lo è, per evitare il bis in idem sostanziale. Criterio legale è la specialità (art. 15); di elaborazione dottrinale la sussidiarietà e la consunzione/assorbimento (le SU privilegiano la specialità strutturale). Casi affini di assorbimento sono il reato complesso (art. 84), il reato progressivo e la progressione criminosa, l'ante e il post factum non punibili.", fonte: "Cap. 6 — §6" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: { mappa: true },
  },

  /* ===================== 6 · LA PENA ===================== */
  {
    id: "pena", part: "generale", chapter: 7, chapterTitle: "La pena",
    title: "La pena", subtitle: "Pene principali e accessorie, sostitutive (Cartabia), commisurazione (art. 133), tenuità (131-bis)",
    articoli: ["art. 17 c.p.", "art. 133 c.p.", "art. 131-bis c.p.", "L. 689/1981"], pages: [62, 68], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "La pena è la sanzione afflittiva che consegue alla commissione di un reato ed è costituzionalmente orientata alla <strong>finalità rieducativa</strong> del condannato (art. 27 co. 3 Cost.), senza mai poter consistere in trattamenti contrari al senso di umanità. Si distinguono le <strong>pene principali</strong> — inflitte dal giudice con la sentenza di condanna: ergastolo, reclusione e multa per i delitti, arresto e ammenda per le contravvenzioni (art. 17) — dalle <strong>pene accessorie</strong>, che conseguono di diritto alla condanna o vi si aggiungono e incidono su status, capacità e diritti del reo, senza poter essere applicate in via autonoma. La commisurazione in concreto segue l'art. 133 (gravità del reato e capacità a delinquere). Su questo impianto si innestano la riforma <em>Cartabia</em>, con le pene sostitutive delle pene detentive brevi, e la causa di non punibilità per particolare tenuità del fatto (art. 131-bis).",
      approfondimenti: [
        { label: "Pene principali e accessorie", body: "Le <strong>principali</strong> sono elencate dall'art. 17 (ergastolo, reclusione, multa per i delitti; arresto e ammenda per le contravvenzioni). Le <strong>accessorie</strong> (es. interdizione dai pubblici uffici, interdizione da una professione, incapacità di contrattare con la P.A.) conseguono alla condanna e non possono essere inflitte in via autonoma; incidono su status e capacità del condannato." },
        { label: "Pene sostitutive e misure alternative (Cartabia)", body: "La riforma <strong>Cartabia</strong> (d.lgs. 150/2022) ha ridisegnato le <strong>pene sostitutive</strong> delle pene detentive brevi: semilibertà sostitutiva, detenzione domiciliare sostitutiva, lavoro di pubblica utilità sostitutivo e pena pecuniaria sostitutiva, applicabili dal giudice della cognizione. Distinte sono le <strong>misure alternative alla detenzione</strong> (affidamento in prova, detenzione domiciliare, semilibertà: ord. penit.), disposte in fase esecutiva dalla magistratura di sorveglianza." },
        { label: "Commisurazione (133) e tenuità (131-bis)", body: "L'art. 133 fissa i criteri di <strong>commisurazione</strong>: gravità del reato (natura, mezzi, oggetto, tempo, luogo, intensità del dolo o grado della colpa, entità del danno) e <strong>capacità a delinquere</strong> del reo. La <strong>non punibilità per particolare tenuità del fatto</strong> (art. 131-bis) esclude la punibilità, per i reati entro certi limiti edittali, quando l'offesa è di particolare tenuità e il comportamento non abituale (ambito ampliato dalla riforma Cartabia)." },
      ],
      giurisprudenza: [
        { label: "Automatismi sanzionatori", body: "La Corte costituzionale ha ripetutamente censurato gli <strong>automatismi</strong> nell'applicazione delle pene, specie accessorie, imponendo che siano proporzionate e graduabili dal giudice, in coerenza con gli artt. 3 e 27 Cost. (es. sent. n. 222/2018 sulle pene accessorie nei reati fallimentari)." },
      ],
      eccezioni: [
        { label: "Tenuità e reati esclusi", body: "L'art. 131-bis non si applica quando l'offesa non è tenue, il comportamento è abituale, o per espresse esclusioni di legge (es. talune fattispecie di particolare allarme sociale o con soglie edittali superiori a quelle previste)." },
      ],
    },
    sintesi: [
      "Pene principali (art. 17): ergastolo, reclusione, multa (delitti); arresto, ammenda (contravvenzioni).",
      "Pene accessorie: conseguono alla condanna, incidono su capacità e diritti; non autonome.",
      "Cartabia: pene sostitutive (giudice della cognizione) e misure alternative (sorveglianza).",
      "Art. 133: commisurazione su gravità del reato + capacità a delinquere.",
      "Art. 131-bis: non punibilità per particolare tenuità del fatto (non abituale).",
    ],
    esempi: [
      { titolo: "Pena sostitutiva o misura alternativa?", testo: "Il giudice che condanna Marco a un anno di reclusione può, già con la sentenza di cognizione, sostituire quella pena detentiva breve con il lavoro di pubblica utilità o con la detenzione domiciliare sostitutiva: si tratta delle <strong>pene sostitutive</strong> introdotte dalla riforma Cartabia. Ben diverso è il caso di Anna, già condannata in via definitiva, che dal carcere chiede l'affidamento in prova al servizio sociale: qui si è di fronte a una <strong>misura alternativa</strong> alla detenzione, che non spetta al giudice della condanna ma è disposta dal <em>magistrato di sorveglianza</em> nella fase esecutiva." },
    ],
    flashcards: [
      ["Quali sono le pene principali (art. 17)?", "Per i delitti: ergastolo, reclusione, multa. Per le contravvenzioni: arresto e ammenda."],
      ["Le pene accessorie possono essere inflitte in via autonoma?", "No: conseguono alla condanna a una pena principale e incidono su capacità e diritti del condannato (es. interdizione dai pubblici uffici)."],
      ["Cosa ha introdotto la riforma Cartabia sulle pene sostitutive?", "Le pene sostitutive delle pene detentive brevi (semilibertà, detenzione domiciliare, lavoro di pubblica utilità, pena pecuniaria sostitutivi), applicate dal giudice della cognizione."],
      ["Cosa prevede l'art. 131-bis c.p.?", "La non punibilità per particolare tenuità del fatto: offesa di particolare tenuità e comportamento non abituale, entro determinati limiti edittali."],
    ],
    comparativa: {
      titolo: "Pene principali vs pene accessorie",
      a: "Pene principali", b: "Pene accessorie",
      righe: [
        { profilo: "Modo di applicazione", a: "Inflitte dal giudice con la condanna", b: "Conseguono di diritto o sono aggiunte alla condanna" },
        { profilo: "Autonomia", a: "Possono essere inflitte da sole", b: "Non applicabili in via autonoma" },
        { profilo: "Contenuto", a: "Ergastolo, reclusione, multa, arresto, ammenda", b: "Interdizioni, incapacità, decadenze su status e diritti" },
      ],
    },
    quiz: [
      { q: "Le pene principali per i delitti, ai sensi dell'art. 17 c.p., sono:", opts: ["Arresto, ammenda e libertà controllata", "Ergastolo, reclusione e multa", "Reclusione, arresto e ammenda", "Interdizione e sospensione dai pubblici uffici"], correct: 1, why: "L'art. 17 distingue le pene principali per i delitti (ergastolo, reclusione, multa) da quelle per le contravvenzioni (arresto e ammenda).", fonte: "Cap. 7 — §2.1 (art. 17)", difficulty: 2, commonError: "Attribuire ai delitti l'arresto e l'ammenda, che riguardano le contravvenzioni." },
      { q: "Le pene accessorie:", opts: ["Possono essere inflitte in via del tutto autonoma", "Conseguono alla condanna a pena principale", "Sostituiscono senz'altro la pena detentiva", "Sono disposte solo dal giudice di sorveglianza"], correct: 1, why: "Le pene accessorie non hanno vita autonoma: conseguono di diritto o vengono aggiunte alla condanna a una pena principale, incidendo su capacità e diritti del condannato.", fonte: "Cap. 7 — §2.2", difficulty: 2, commonError: "Ritenere le pene accessorie irrogabili da sole, indipendentemente da una pena principale." },
      { q: "Le pene sostitutive delle pene detentive brevi (riforma Cartabia) sono applicate:", opts: ["Dal magistrato di sorveglianza in fase esecutiva", "Dal giudice della cognizione con la sentenza", "Dal pubblico ministero titolare dell'azione", "Dalla direzione della polizia penitenziaria"], correct: 1, why: "La riforma Cartabia ha collocato le pene sostitutive nella competenza del giudice della cognizione, che le applica con la sentenza di condanna; le misure alternative restano invece alla sorveglianza.", fonte: "Cap. 7 — §3", difficulty: 3, commonError: "Confondere le pene sostitutive (cognizione) con le misure alternative (esecuzione)." },
      { q: "L'art. 133 c.p. commisura la pena in base a:", opts: ["La sola gravità oggettiva del reato commesso", "Gravità del reato e capacità a delinquere", "La sola capacità a delinquere del colpevole", "L'allarme sociale in concreto suscitato dal fatto"], correct: 1, why: "L'art. 133 individua due parametri: la gravità del reato (natura, mezzi, oggetto, danno, intensità del dolo o grado della colpa) e la capacità a delinquere del colpevole.", fonte: "Cap. 7 — §5 (art. 133)", difficulty: 2, commonError: "Limitare la commisurazione alla sola gravità oggettiva del fatto, trascurando la capacità a delinquere." },
      { q: "La non punibilità per particolare tenuità del fatto (art. 131-bis) richiede:", opts: ["Solo la lieve entità della pena edittale prevista", "Offesa particolarmente tenue e condotta non abituale", "L'integrale risarcimento del danno cagionato alla vittima", "Il consenso espresso dalla persona offesa dal reato"], correct: 1, why: "L'art. 131-bis esclude la punibilità quando l'offesa è di particolare tenuità e il comportamento non abituale, entro i limiti edittali fissati (ambito ampliato dalla Cartabia).", fonte: "Cap. 7 — §4 (art. 131-bis)", difficulty: 3, commonError: "Applicare la tenuità anche ai comportamenti abituali o ignorando i requisiti oggettivi dell'offesa." },
    ],
    veroFalso: [
      { aff: "Le pene accessorie possono essere applicate anche in via del tutto autonoma rispetto a una pena principale.", vero: false, traccia: "Falso. Le pene accessorie conseguono di diritto alla condanna a una pena principale o vi si aggiungono: non hanno applicazione autonoma. Incidono su capacità e diritti del condannato (interdizioni, incapacità)." },
      { aff: "Con la riforma Cartabia le pene sostitutive delle pene detentive brevi sono applicate dal giudice della cognizione.", vero: true, traccia: "Vero. La Cartabia (d.lgs. 150/2022) ha ridisegnato le pene sostitutive (semilibertà, detenzione domiciliare, lavoro di pubblica utilità, pena pecuniaria sostitutivi), attribuendone l'applicazione al giudice che pronuncia la condanna, distinguendole dalle misure alternative di competenza della sorveglianza." },
    ],
    aperta: { q: "Il candidato tratti il sistema delle pene, distinguendo pene principali, accessorie e sostitutive, e i criteri di commisurazione.", traccia: "La pena è la sanzione afflittiva conseguente al reato, orientata dalla finalità rieducativa (art. 27 co. 3 Cost.). Le pene principali (art. 17) sono l'ergastolo, la reclusione e la multa per i delitti, l'arresto e l'ammenda per le contravvenzioni; sono inflitte dal giudice con la condanna. Le pene accessorie (interdizioni, incapacità) conseguono alla condanna e non hanno applicazione autonoma; la Corte costituzionale ne ha censurato gli automatismi (sent. 222/2018). La riforma Cartabia ha ridisegnato le pene sostitutive delle pene detentive brevi (semilibertà, detenzione domiciliare, lavoro di pubblica utilità, pena pecuniaria sostitutivi), applicate dal giudice della cognizione, distinte dalle misure alternative disposte dalla sorveglianza in fase esecutiva. La commisurazione segue l'art. 133 (gravità del reato e capacità a delinquere). Rileva infine la non punibilità per particolare tenuità del fatto (art. 131-bis), per offese tenui e non abituali.", fonte: "Cap. 7 — §§1-5" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: { mappa: true },
  },

  /* ======= 7 · MISURE DI SICUREZZA E CAUSE DI ESTINZIONE ======= */
  {
    id: "misureEstinzione", part: "generale", chapter: 7, chapterTitle: "La pena",
    title: "Misure di sicurezza e cause di estinzione", subtitle: "Pericolosità sociale, estinzione del reato/della pena, giustizia riparativa (Cartabia)",
    articoli: ["art. 199 c.p.", "art. 203 c.p.", "art. 150 c.p.", "art. 163 c.p."], pages: [69, 76], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Le <strong>misure di sicurezza</strong> sono le sanzioni del cosiddetto <em>doppio binario</em>: si affiancano alla pena e si applicano ai soggetti <strong>socialmente pericolosi</strong> (art. 203) che abbiano commesso un fatto di reato o un quasi-reato, con una finalità non retributiva ma di prevenzione speciale, cioè di neutralizzazione della pericolosità. Dopo Corte cost. n. 139/1982 tale pericolosità va sempre accertata in concreto dal giudice. Le <strong>cause di estinzione</strong> incidono invece sulla punibilità del fatto o sull'esecuzione della sanzione: alcune estinguono il <strong>reato</strong> e operano prima del giudicato (es. prescrizione, oblazione, remissione di querela), altre estinguono la <strong>pena</strong> e operano dopo la condanna irrevocabile (es. indulto, grazia, riabilitazione). La riforma Cartabia ha infine introdotto un sistema organico di <strong>giustizia riparativa</strong>, volontaria e consensuale.",
      approfondimenti: [
        { label: "Le misure di sicurezza", body: "Presupposti: commissione di un fatto preveduto come reato (o di un quasi-reato) e <strong>pericolosità sociale</strong> (art. 203). Si distinguono in <strong>personali detentive</strong> (es. assegnazione a colonia agricola/casa di lavoro; ricovero in REMS per gli infermi di mente, dopo la chiusura degli OPG), <strong>personali non detentive</strong> (libertà vigilata, divieto di soggiorno, espulsione dello straniero) e <strong>patrimoniali</strong> (cauzione di buona condotta e, soprattutto, <strong>confisca</strong>, art. 240)." },
        { label: "Cause di estinzione del reato", body: "Operano prima della condanna definitiva ed estinguono la punibilità del fatto: <strong>morte del reo prima della condanna</strong> (art. 150), <strong>amnistia propria</strong>, <strong>prescrizione</strong>, <strong>oblazione</strong> (nelle contravvenzioni), <strong>remissione di querela</strong>, <strong>sospensione condizionale della pena</strong> (art. 163) e <strong>perdono giudiziale</strong> (minori). Non toccano l'esistenza del reato, ma la sua perseguibilità/punibilità." },
        { label: "Cause di estinzione della pena", body: "Operano dopo il giudicato ed estinguono (in tutto o in parte) la pena: <strong>morte del reo dopo la condanna</strong>, <strong>amnistia impropria</strong>, <strong>indulto</strong> e <strong>grazia</strong>, <strong>prescrizione della pena</strong>, <strong>liberazione condizionale</strong>, <strong>riabilitazione</strong>. Presuppongono una condanna irrevocabile." },
      ],
      giurisprudenza: [
        { label: "Pericolosità in concreto", body: "Dopo Corte cost. n. 139/1982 la pericolosità sociale, presupposto delle misure di sicurezza, dev'essere sempre accertata <strong>in concreto</strong> dal giudice al momento dell'applicazione: sono venute meno le presunzioni legali di pericolosità che operavano in automatico." },
      ],
      eccezioni: [
        { label: "Giustizia riparativa (Cartabia)", body: "Il d.lgs. 150/2022 ha introdotto una disciplina organica della <strong>giustizia riparativa</strong>: programmi (mediazione, dialogo riparativo) accessibili in ogni stato e grado, su base volontaria e consensuale, il cui esito può incidere sul trattamento sanzionatorio, in un'ottica di riparazione dell'offesa e reinserimento, coerente con l'art. 27 Cost." },
      ],
    },
    sintesi: [
      "Misure di sicurezza: fatto-reato + pericolosità sociale (art. 203), a fini di prevenzione speciale.",
      "Tipi: personali detentive (REMS, casa di lavoro), non detentive (libertà vigilata), patrimoniali (confisca).",
      "Estinzione del reato (pre-giudicato): morte del reo, prescrizione, oblazione, sospensione condizionale.",
      "Estinzione della pena (post-giudicato): indulto, grazia, prescrizione della pena, riabilitazione.",
      "Cartabia: giustizia riparativa organica, volontaria, incidente sul trattamento sanzionatorio.",
    ],
    esempi: [
      { titolo: "Estinzione del reato o della pena?", testo: "Se l'imputato Marco muore prima che sia pronunciata una sentenza definitiva, si estingue il <strong>reato</strong> (art. 150), perché viene meno il soggetto cui riferire la punibilità e non si è ancora formato il giudicato. Se invece muore dopo la condanna irrevocabile, a estinguersi è la <strong>pena</strong>. Lo stesso criterio temporale vale per la prescrizione: quella <em>del reato</em> opera prima del giudicato, quella <em>della pena</em> dopo. L'indulto e la grazia, per parte loro, riguardano sempre e soltanto la pena, poiché presuppongono necessariamente una condanna definitiva." },
    ],
    flashcards: [
      ["Quali sono i presupposti delle misure di sicurezza?", "La commissione di un fatto preveduto come reato (o quasi-reato) e la pericolosità sociale del soggetto (art. 203), accertata in concreto."],
      ["Come si classificano le misure di sicurezza?", "Personali detentive (es. REMS, casa di lavoro), personali non detentive (libertà vigilata, espulsione) e patrimoniali (cauzione, confisca)."],
      ["Differenza tra estinzione del reato e della pena?", "L'estinzione del reato opera prima della condanna definitiva (es. prescrizione, oblazione); quella della pena dopo il giudicato (es. indulto, grazia, riabilitazione)."],
      ["Cosa ha introdotto la Cartabia in tema di giustizia riparativa?", "Una disciplina organica di programmi riparativi (mediazione, dialogo), volontari e consensuali, il cui esito può incidere sul trattamento sanzionatorio."],
    ],
    comparativa: {
      titolo: "Estinzione del reato vs estinzione della pena",
      a: "Cause di estinzione del reato", b: "Cause di estinzione della pena",
      righe: [
        { profilo: "Momento", a: "Prima della condanna definitiva", b: "Dopo il giudicato" },
        { profilo: "Oggetto", a: "La punibilità del fatto", b: "L'esecuzione della pena inflitta" },
        { profilo: "Esempi", a: "Prescrizione del reato, oblazione, remissione di querela", b: "Indulto, grazia, prescrizione della pena, riabilitazione" },
      ],
    },
    quiz: [
      { q: "Le misure di sicurezza presuppongono:", opts: ["La sola condanna a una pena detentiva", "Un fatto-reato e la pericolosità sociale", "L'assoluzione piena dell'imputato nel merito", "Il consenso espresso dall'interessato alla misura"], correct: 1, why: "Le misure di sicurezza si fondano sulla commissione di un fatto preveduto come reato (o quasi-reato) e sulla pericolosità sociale (art. 203), a fini di prevenzione speciale (doppio binario).", fonte: "Cap. 7 — §10 (art. 203)", difficulty: 2, commonError: "Confondere il presupposto (pericolosità) con la mera colpevolezza per il reato." },
      { q: "Dopo Corte cost. n. 139/1982, la pericolosità sociale:", opts: ["È presunta ex lege in via automatica", "Va accertata in concreto dal giudice", "Non è più richiesta dall'ordinamento", "Coincide senz'altro con la recidiva reiterata"], correct: 1, why: "La Consulta ha eliminato le presunzioni legali di pericolosità: essa deve essere accertata in concreto al momento dell'applicazione della misura di sicurezza.", fonte: "Cap. 7 — §10", difficulty: 3, commonError: "Ritenere ancora operanti le presunzioni automatiche di pericolosità sociale." },
      { q: "La morte del reo prima della condanna definitiva (art. 150 c.p.):", opts: ["Estingue la pena già inflitta", "Estingue il reato commesso", "Sospende soltanto il processo", "Non produce alcun effetto estintivo"], correct: 1, why: "La morte del reo prima della condanna è causa di estinzione del reato (art. 150): manca il soggetto cui applicare la sanzione e non si è formato il giudicato.", fonte: "Cap. 7 — §8 (art. 150)", difficulty: 2, commonError: "Qualificarla come estinzione della pena, che presuppone invece una condanna definitiva." },
      { q: "Quale tra queste è causa di estinzione della PENA (non del reato)?", opts: ["L'oblazione nelle contravvenzioni", "La remissione della querela di parte", "L'indulto concesso per legge", "La sospensione condizionale della pena"], correct: 2, why: "L'indulto opera dopo il giudicato, condonando in tutto o in parte la pena inflitta: è causa di estinzione della pena. Oblazione, remissione e sospensione condizionale incidono invece sul reato.", fonte: "Cap. 7 — §9", difficulty: 3, commonError: "Collocare l'indulto tra le cause di estinzione del reato anziché della pena." },
      { q: "La giustizia riparativa introdotta dalla riforma Cartabia si caratterizza per:", opts: ["L'obbligatorietà del programma per l'imputato", "La volontarietà e il consenso delle parti", "La sola finalità risarcitoria in sede civile", "L'esclusiva competenza del giudice di sorveglianza"], correct: 1, why: "I programmi di giustizia riparativa (d.lgs. 150/2022) sono volontari e consensuali, accessibili in ogni stato e grado; il loro esito positivo può incidere sul trattamento sanzionatorio, in chiave rieducativa (art. 27 Cost.).", fonte: "Cap. 7 — §11", difficulty: 3, commonError: "Ridurre la giustizia riparativa al mero risarcimento civile del danno o ritenerla obbligatoria." },
    ],
    veroFalso: [
      { aff: "La confisca è una misura di sicurezza patrimoniale.", vero: true, traccia: "Vero. La confisca (art. 240 c.p.) rientra, nella sistematica del codice, tra le misure di sicurezza patrimoniali, accanto alla cauzione di buona condotta; incide sul patrimonio sottraendo cose pertinenti al reato." },
      { aff: "L'amnistia propria e la prescrizione del reato estinguono la pena dopo il giudicato.", vero: false, traccia: "Falso. Amnistia propria e prescrizione del reato sono cause di estinzione del reato, che operano prima della condanna definitiva. Dopo il giudicato incidono invece sulla pena l'amnistia impropria, l'indulto, la grazia, la prescrizione della pena e la riabilitazione." },
    ],
    aperta: { q: "Il candidato illustri le misure di sicurezza e distingua le cause di estinzione del reato da quelle della pena.", traccia: "Le misure di sicurezza sono sanzioni del doppio binario, applicate a soggetti socialmente pericolosi (art. 203) autori di un fatto-reato o quasi-reato, a fini di prevenzione speciale; dopo Corte cost. 139/1982 la pericolosità va accertata in concreto. Si distinguono in personali detentive (REMS per gli infermi di mente, casa di lavoro), personali non detentive (libertà vigilata, espulsione) e patrimoniali (cauzione, confisca). Le cause di estinzione incidono sulla punibilità: quelle del reato operano prima del giudicato (morte del reo ex art. 150, prescrizione, oblazione, remissione di querela, sospensione condizionale, perdono giudiziale); quelle della pena dopo il giudicato (morte del reo, amnistia impropria, indulto, grazia, prescrizione della pena, liberazione condizionale, riabilitazione). La riforma Cartabia ha infine introdotto un sistema organico di giustizia riparativa, volontaria e consensuale, il cui esito può incidere sul trattamento sanzionatorio.", fonte: "Cap. 7 — §§8-11" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: { mappa: true },
  },
];
