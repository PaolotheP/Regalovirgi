/* =========================================================================
   SIRIO — DIRITTO PENALE · Capitolo 5: La struttura del reato.
   Fonte: Marinucci·Dolcini·Gatta, Manuale di Diritto penale, Parte generale —
   Il reato: nozione e oggetto (Sez. I), i soggetti (Sez. II), l'elemento
   oggettivo (Sez. III). Il rapporto di causalità è trattato in altro modulo.
   ========================================================================= */

export const PEN_CAP5 = [
  {
    id: "reato",
    part: "generale",
    chapter: 5,
    chapterTitle: "La struttura del reato",
    title: "Nozione e oggetto del reato",
    subtitle: "Definizione formale e sostanziale, bipartizione e tripartizione, delitti e contravvenzioni, bene giuridico, classificazioni dei reati",
    articoli: ["art. 17 c.p.", "art. 39 c.p.", "art. 42 c.p.", "art. 56 c.p.", "art. 25, co. 2 Cost."],
    pages: [67, 72],
    depth: "deep",
    layers: {
      essenziale:
        "Il <strong>reato</strong> è un fatto umano antigiuridico al quale l'ordinamento ricollega, come conseguenza, una <strong>pena</strong>. La <em>nozione formale</em> considera reato solo la condotta compiutamente descritta e vietata dalla legge penale (nullum crimen sine lege) e si collega alla concezione analitica, che impone di riscontrare nella fattispecie tutti gli elementi costitutivi. La <em>nozione sostanziale</em> descrive invece il reato come offesa di un bene giuridico. Il codice Rocco predilige l'approccio formale; con la Costituzione si è affermata una <strong>concezione teleologica</strong>, che attinge dalla Carta gli scopi e i limiti del diritto penale (offensività, personalità della responsabilità, proporzionalità) e i beni giuridici tutelati. I reati si dividono in <strong>delitti</strong> e <strong>contravvenzioni</strong> secondo il criterio formale dell'art. 39 c.p., fondato sulla pena principale comminata (art. 17 c.p.): ergastolo, reclusione e multa per i delitti; arresto e ammenda per le contravvenzioni. La distinzione incide su elemento soggettivo, tentativo, recidiva, procedibilità, prescrizione, oblazione e altri istituti. Quanto alla struttura, la <strong>teoria della bipartizione</strong> scompone il reato in elemento oggettivo (il fatto, comprensivo dell'assenza di cause di giustificazione come elementi negativi) ed elemento soggettivo (la colpevolezza); la <strong>teoria della tripartizione</strong>, prevalente, distingue fatto, antigiuridicità e colpevolezza. Il <strong>bene giuridico</strong> è l'interesse protetto dalla norma penale (oggetto giuridico del reato): in base ad esso si distinguono reati monoffensivi, plurioffensivi e di mero scopo. Altre classificazioni fondamentali: reati comuni e propri, di evento e di mera condotta, di danno e di pericolo, istantanei, permanenti e abituali.",
      approfondimenti: [
        {
          label: "Bipartizione vs tripartizione: la posta in gioco",
          body:
            "La differenza essenziale risiede nella <strong>collocazione delle cause di giustificazione</strong>. La teoria bipartita le concepisce come <em>elementi negativi del fatto</em>: ciò finirebbe però con l'ascriverle all'oggetto della colpevolezza, imponendo, in caso di dolo, l'accertamento della consapevolezza della loro assenza. Prevale la tripartizione, capace di cogliere la differenza sostanziale tra tipicità e antigiuridicità: è infatti indiscusso che le cause di giustificazione operino <strong>oggettivamente</strong> (art. 59, co. 1 c.p.), a differenza degli elementi del fatto tipico. Le concezioni quadripartite, rimaste isolate, aggiungono un quarto elemento: la conformità del fatto al tipo (tesi respinta come duplicazione) oppure la punibilità."
        },
        {
          label: "La punibilità come quarto elemento",
          body:
            "Secondo una concezione quadripartita, la <strong>punibilità</strong> assurgerebbe a elemento essenziale del reato, anziché costituirne una mera 'normale conseguenza': ove la punibilità difetti per qualsiasi ragione, non vi sarebbe reato nonostante la compresenza degli altri elementi. La tesi è respinta dai più osservando che possono esservi ragioni di opportunità <em>esterne</em> al fatto illecito che giustificano l'esenzione da pena nonostante la commissione di un reato completo di tutti i suoi elementi: paradigmatico l'art. 649 c.p., che rende non punibili taluni fatti contro il patrimonio commessi in danno di congiunti."
        },
        {
          label: "Oggetto giuridico, ratio della norma, oggetto materiale",
          body:
            "L'<strong>oggetto giuridico</strong> è l'interesse protetto dalla norma penale, che può avere consistenza materiale (il patrimonio) o immateriale (la pubblica fede nei reati di falso). Non va confuso con la <em>ratio</em> della norma, cioè il fine di politica criminale perseguito dal legislatore, né con l'<strong>oggetto materiale</strong> del reato, che è l'entità materiale su cui insiste concretamente la condotta delittuosa: la persona uccisa nell'omicidio, la cosa mobile altrui nel furto. Secondo la concezione sostanziale, l'intervento penale si giustifica solo a presidio di beni giuridici coincidenti con valori essenziali della società, preesistenti alla norma incriminatrice e costituzionalmente tutelati."
        },
        {
          label: "Le classificazioni dei reati",
          body:
            "In base al <strong>soggetto attivo</strong>: reati comuni ('chiunque') e propri (richiedono una qualifica). In base alla <strong>condotta</strong>: commissivi e omissivi; a forma libera e a forma vincolata; di mera condotta e di evento. In base all'<strong>offesa</strong>: reati di danno (lesione effettiva del bene) e di pericolo (esposizione del bene a nocumento potenziale); monoffensivi e plurioffensivi. In base al <strong>tempo</strong>: reati istantanei (la consumazione coincide con la condotta: omicidio), permanenti (l'offesa si protrae per un tempo apprezzabile per volontà dell'agente: sequestro di persona), abituali (occorre la reiterazione di più condotte: maltrattamenti contro familiari e conviventi)."
        }
      ],
      giurisprudenza: [
        {
          label: "La lettura costituzionalmente orientata del reato",
          body:
            "Dall'esigenza di un'interpretazione costituzionalmente orientata della disciplina codicistica è scaturita, con l'avallo della giurisprudenza costituzionale, la <strong>concezione teleologica</strong> del reato: la Costituzione è fonte da cui attingere gli scopi e i limiti del diritto penale — necessaria offensività del fatto, personalità della responsabilità penale (art. 27 Cost.), proporzionalità tra illecito e sanzione — oltre che punto di riferimento per individuare il bene giuridico tutelato dalle singole incriminazioni. Ne discende che i reati privi di qualsiasi attitudine offensiva verso beni costituzionalmente rilevanti sono esposti a censura di illegittimità."
        }
      ],
      eccezioni: [
        {
          label: "Contravvenzioni: non sempre procedibili d'ufficio",
          body:
            "Storicamente le contravvenzioni sono sempre state procedibili d'ufficio, ma la <strong>riforma Cartabia</strong> ha introdotto la procedibilità a querela di parte per le contravvenzioni di cui agli artt. 659 e 660 c.p. Attenzione anche all'elemento soggettivo: le contravvenzioni sono punibili indifferentemente a titolo di dolo o di colpa (art. 42, co. 4 c.p.), mentre i delitti richiedono il dolo, salva espressa previsione del delitto colposo (art. 42, co. 2 c.p.)."
        },
        {
          label: "Errore da evitare: bene giuridico = oggetto materiale",
          body:
            "È un errore ricorrente confondere il bene giuridico (interesse protetto, eventualmente immateriale) con l'oggetto materiale (entità fisica su cui cade la condotta). Nel furto il bene giuridico è il patrimonio, l'oggetto materiale è la cosa mobile sottratta. Altro errore: ritenere che il tentativo sia configurabile per ogni reato — l'art. 56 c.p. lo circoscrive ai soli delitti."
        }
      ]
    },
    sintesi: [
      "Reato: fatto umano antigiuridico cui l'ordinamento ricollega una pena.",
      "Criterio formale ex artt. 17 e 39 c.p.: delitti e contravvenzioni distinti per pena principale.",
      "Tentativo, recidiva e cooperazione colposa: solo per i delitti; oblazione: solo contravvenzioni.",
      "Tripartizione (prevalente): fatto, antigiuridicità, colpevolezza; bipartizione: fatto e colpevolezza.",
      "Bene giuridico: interesse protetto dalla norma; reati monoffensivi, plurioffensivi, di mero scopo.",
      "Classificazioni: comuni/propri, evento/mera condotta, danno/pericolo, istantanei/permanenti/abituali."
    ],
    esempi: [
      {
        titolo: "Marco e la distinzione delitto/contravvenzione",
        testo:
          "Marco viene sorpreso mentre disturba il riposo dei vicini con schiamazzi notturni (art. 659 c.p.) e, in un'altra occasione, sottrae un portafoglio in metropolitana (furto, art. 624 c.p.). Il primo fatto è una <strong>contravvenzione</strong>: è punito con arresto o ammenda, è punibile indifferentemente per dolo o colpa e — dopo la riforma Cartabia — è procedibile a querela; Marco potrebbe estinguere il reato con l'oblazione. Il furto è invece un <strong>delitto</strong>: punito con reclusione e multa, richiede il dolo, ammette il tentativo (se Marco fosse stato bloccato con la mano nella borsa risponderebbe ex artt. 56 e 624 c.p.) e può fondare la recidiva. Un solo autore, due categorie di reato, due regimi profondamente diversi."
      },
      {
        titolo: "La dott.ssa Bianchi e il peculato plurioffensivo",
        testo:
          "La dott.ssa Bianchi, funzionaria comunale, si appropria di somme dell'ente di cui ha la disponibilità per ragione del suo ufficio. Il peculato è l'esempio classico di <strong>reato plurioffensivo</strong>: offende al contempo il patrimonio della P.A. e il buon andamento dell'amministrazione. Diversamente, se la stessa dott.ssa Bianchi diffamasse un collega, commetterebbe un reato <strong>monoffensivo</strong>, posto a presidio del solo onore. La distinzione non è accademica: individuare tutti i beni tutelati serve, ad esempio, a identificare le persone offese legittimate a sporgere querela e a valutare l'offensività in concreto del fatto."
      }
    ],
    flashcards: [
      ["Qual è il criterio distintivo tra delitti e contravvenzioni?", "Il criterio formale ex art. 39 c.p.: la pena principale comminata. Delitti: ergastolo, reclusione, multa; contravvenzioni: arresto, ammenda (art. 17 c.p.)."],
      ["In cosa consiste la teoria della tripartizione?", "Scompone il reato in tre elementi: fatto tipico, antigiuridicità (assenza di cause di giustificazione), colpevolezza. È la teoria prevalente."],
      ["Cosa sono gli elementi negativi del fatto?", "Nella teoria bipartita, l'assenza di cause di giustificazione, ricondotta alla tipicità come elemento negativo del fatto oggettivo."],
      ["Che cos'è il bene giuridico?", "L'interesse protetto dalla norma penale (oggetto giuridico del reato); coincide con valori essenziali della società, preesistenti alla norma e costituzionalmente tutelati."],
      ["Differenza tra reato permanente e abituale?", "Nel permanente l'offesa si protrae nel tempo per volontà dell'agente (sequestro di persona); nell'abituale occorre la reiterazione di più condotte (maltrattamenti)."],
      ["Il tentativo è configurabile per le contravvenzioni?", "No: ex art. 56 c.p. il tentativo è configurabile per i soli delitti."]
    ],
    comparativa: {
      titolo: "Reato di danno vs reato di pericolo",
      a: "Reato di danno",
      b: "Reato di pericolo",
      righe: [
        { profilo: "Tipo di offesa al bene", a: "Lesione: nocumento effettivo del bene giuridico tutelato", b: "Esposizione a pericolo: nocumento potenziale del bene" },
        { profilo: "Momento di tutela", a: "Tutela repressiva: il bene è già stato compromesso", b: "Tutela anticipata: si punisce prima della lesione" },
        { profilo: "Esempi", a: "Omicidio (vita), furto (patrimonio)", b: "Strage come messa in pericolo dell'incolumità pubblica, reati ostativi o di scopo" },
        { profilo: "Rapporto con l'offensività", a: "Offesa in re ipsa nella lesione accertata", b: "Legittimo purché la condotta sia idonea premessa della lesione di beni costituzionalmente rilevanti" }
      ]
    },
    quiz: [
      {
        q: "In base a quale criterio si distinguono i delitti dalle contravvenzioni?",
        opts: [
          "In base alla gravità concreta del fatto accertata dal giudice",
          "In base all'elemento soggettivo richiesto dalla fattispecie",
          "In base al tipo di pena principale comminata (art. 39 c.p.)",
          "In base alla procedibilità d'ufficio o a querela di parte"
        ],
        correct: 2,
        difficulty: 1,
        commonError: "Molti indicano l'elemento soggettivo: è una conseguenza della distinzione, non il criterio, che è formale e fondato sulla pena.",
        why: "In mancanza di una nozione legislativa, il criterio accolto è quello formale ex art. 39 c.p.: si guarda alla pena principale (art. 17 c.p.). Ergastolo, reclusione e multa per i delitti; arresto e ammenda per le contravvenzioni.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Nozione e oggetto del reato"
      },
      {
        q: "Quali sono gli elementi del reato secondo la teoria della tripartizione?",
        opts: [
          "Fatto tipico, antigiuridicità e colpevolezza",
          "Condotta, evento e nesso di causalità",
          "Elemento oggettivo, elemento soggettivo e punibilità",
          "Tipicità, offensività e imputabilità"
        ],
        correct: 0,
        difficulty: 2,
        commonError: "Si confonde la scomposizione del reato con gli elementi del solo fatto tipico (condotta, evento, nesso causale).",
        why: "La tripartizione scompone l'illecito penale in fatto (elementi oggettivi), antigiuridicità (assenza di cause di giustificazione) e colpevolezza. È la costruzione prevalente.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Nozione e oggetto del reato"
      },
      {
        q: "Qual è la differenza essenziale tra teoria bipartita e teoria tripartita?",
        opts: [
          "Solo la tripartita richiede l'accertamento del dolo o della colpa",
          "La collocazione delle cause di giustificazione nella struttura del reato",
          "Solo la bipartita distingue tra delitti e contravvenzioni",
          "La bipartita nega rilevanza all'evento nei reati di mera condotta"
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Si pensa che le due teorie divergano sull'elemento soggettivo, che invece entrambe richiedono: divergono sulla collocazione delle scriminanti.",
        why: "La bipartita riconduce l'assenza di cause di giustificazione al fatto come elemento negativo; la tripartita ne fa un autonomo elemento (antigiuridicità). Prevale la tripartita, coerente con l'operatività oggettiva delle scriminanti ex art. 59, co. 1 c.p.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Nozione e oggetto del reato"
      },
      {
        q: "Quale dei seguenti istituti è applicabile alle sole contravvenzioni?",
        opts: [
          "Il tentativo ex art. 56 c.p.",
          "La recidiva ex art. 99 c.p.",
          "La cooperazione colposa ex art. 113 c.p.",
          "L'oblazione ex artt. 162 e 162-bis c.p."
        ],
        correct: 3,
        difficulty: 2,
        commonError: "Si invertono i regimi: tentativo, recidiva e cooperazione colposa riguardano i soli delitti, non le contravvenzioni.",
        why: "L'oblazione è una causa estintiva del reato applicabile alle sole contravvenzioni. Tentativo, recidiva e cooperazione colposa sono invece configurabili unicamente per i delitti.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Nozione e oggetto del reato"
      },
      {
        q: "Perché la concezione quadripartita che eleva la punibilità a elemento del reato è respinta dai più?",
        opts: [
          "Perché la punibilità coincide sempre con l'antigiuridicità del fatto",
          "Perché ragioni di opportunità esterne al fatto possono escludere la pena pur in presenza di un reato completo",
          "Perché la punibilità è una nozione processuale estranea al diritto sostanziale",
          "Perché la punibilità rientra già nella colpevolezza come suo presupposto"
        ],
        correct: 1,
        difficulty: 5,
        commonError: "Si liquida la tesi come 'processuale': l'obiezione vera è dogmatica e valorizza le cause di non punibilità come l'art. 649 c.p.",
        why: "Può accadere che ragioni di opportunità esterne all'illecito giustifichino l'esenzione da pena nonostante un reato completo di tutti i suoi elementi (es. art. 649 c.p.): la punibilità è quindi normale conseguenza, non elemento costitutivo.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Nozione e oggetto del reato"
      },
      {
        q: "Il sequestro di persona è l'esempio tipico di reato:",
        opts: [
          "Abituale, perché richiede più condotte reiterate",
          "Istantaneo, perché si consuma con la privazione della libertà",
          "Permanente, perché l'offesa si protrae per un tempo apprezzabile",
          "Di mera condotta, perché prescinde da qualsiasi evento"
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Si confonde il permanente con l'abituale: nel permanente basta una condotta la cui offesa perdura; nell'abituale servono più episodi.",
        why: "Nel reato permanente la consumazione richiede la protrazione per un tempo apprezzabile dell'offesa al bene giuridico: il sequestro di persona ne è l'esempio classico, mentre i maltrattamenti sono reato abituale e l'omicidio istantaneo.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Nozione e oggetto del reato"
      }
    ],
    veroFalso: [
      {
        aff: "Il peculato è un reato monoffensivo perché tutela solo il patrimonio della P.A.",
        vero: false,
        traccia: "Falso. Il peculato è l'esempio tipico di reato plurioffensivo: è posto a presidio di una pluralità di beni giuridici, il patrimonio e il buon andamento della pubblica amministrazione. Monoffensiva è invece, ad esempio, la diffamazione."
      },
      {
        aff: "Secondo la teoria bipartita, l'assenza di cause di giustificazione è un elemento negativo del fatto.",
        vero: true,
        traccia: "Vero. La bipartizione riconduce alla tipicità anche l'assenza di scriminanti, delineate come elementi negativi del fatto. Questa impostazione è criticata perché finirebbe con l'imporre, in caso di dolo, l'accertamento della consapevolezza dell'assenza di cause di giustificazione, che invece operano oggettivamente ex art. 59, co. 1 c.p."
      },
      {
        aff: "Le contravvenzioni sono punibili sia a titolo di dolo sia a titolo di colpa.",
        vero: true,
        traccia: "Vero. In base all'art. 42, co. 4 c.p. le contravvenzioni sono punibili indifferentemente per dolo o colpa, mentre i delitti richiedono il dolo, salvi i casi di delitto colposo espressamente previsti dalla legge (art. 42, co. 2 c.p.)."
      }
    ],
    aperta: {
      q: "Il candidato illustri la nozione di reato e le principali teorie sulla sua scomposizione analitica, soffermandosi sulla collocazione delle cause di giustificazione.",
      traccia:
        "Il reato è un fatto umano antigiuridico cui l'ordinamento ricollega una pena. Alla nozione formale (condotta descritta e vietata dalla legge, nel rispetto del nullum crimen sine lege) si affianca quella sostanziale (offesa di un bene giuridico); con la Costituzione si è affermata una concezione teleologica, che trae dalla Carta i limiti del diritto penale e i beni tutelati. Ai fini ermeneutici il reato viene scomposto analiticamente: la teoria bipartita distingue elemento oggettivo (il fatto, comprensivo dell'assenza di scriminanti quali elementi negativi) ed elemento soggettivo (colpevolezza); la teoria tripartita, prevalente, distingue fatto, antigiuridicità e colpevolezza. Il discrimine sta nella collocazione delle cause di giustificazione: la tripartizione ne fa un autonomo piano di valutazione, coerentemente con la loro operatività oggettiva ex art. 59, co. 1 c.p., mentre la bipartizione finirebbe per attrarle nell'oggetto del dolo. Le concezioni quadripartite, che aggiungono la conformità al tipo o la punibilità, sono rimaste isolate.",
      fonte: "Marinucci·Dolcini·Gatta, PG — Nozione e oggetto del reato"
    },
    consigliate: ["mappa", "comparativa", "flashcards", "mcq", "aperta"],
    media: {
      podcast: {
        title: "Il reato: nozione, teorie, classificazioni",
        chapters: [
          ["Nozione formale, sostanziale e teleologica", 0],
          ["Delitti e contravvenzioni", 240],
          ["Bipartizione, tripartizione, quadripartizione", 520],
          ["Bene giuridico e classificazioni dei reati", 820]
        ]
      },
      mappa: true
    }
  },
  {
    id: "soggetti",
    part: "generale",
    chapter: 5,
    chapterTitle: "La struttura del reato",
    title: "I soggetti del reato",
    subtitle: "Soggetto attivo, reati comuni e propri, responsabilità degli enti ex d.lgs. 231/2001, persona offesa e danneggiato, oggetto materiale",
    articoli: ["art. 27 Cost.", "artt. 5-8 d.lgs. 231/2001", "art. 120 c.p.", "art. 185 c.p.", "art. 74 c.p.p."],
    pages: [73, 83],
    depth: "std",
    layers: {
      essenziale:
        "Il <strong>soggetto attivo</strong> del reato è la persona fisica che realizza il fatto vietato. Si distinguono <strong>reati comuni</strong>, commettibili da 'chiunque', e <strong>reati propri</strong>, il cui autore deve possedere particolari qualità di fatto o di diritto (il pubblico ufficiale nei reati contro la P.A., la madre nell'infanticidio); i reati propri si suddividono in esclusivi (o di mano propria: incesto, bigamia), semiesclusivi (senza qualifica il fatto resta reato comune: peculato/appropriazione indebita) e non esclusivi (senza qualifica il fatto è illecito solo extrapenale: bancarotta). A lungo si è ritenuto che <em>societas delinquere non potest</em>, in forza dell'art. 27, co. 1 Cost.; il <strong>d.lgs. 231/2001</strong> ha però introdotto una responsabilità dell'ente 'amministrativa dipendente da reato', che ricalca ampiamente la disciplina penale. L'ente risponde se un <strong>reato-presupposto</strong> del catalogo è commesso <strong>nell'interesse o a vantaggio</strong> dell'ente da soggetti apicali o subordinati (criteri oggettivi, art. 5), e se sussiste la <strong>colpa di organizzazione</strong> (criterio soggettivo): la mancata adozione ed efficace attuazione di idonei modelli organizzativi. La responsabilità dell'ente è <strong>autonoma</strong> (art. 8) rispetto a quella della persona fisica. Il <strong>soggetto passivo</strong> (persona offesa) è il titolare del bene o interesse tutelato dalla norma; va distinto dal <strong>danneggiato</strong>, cioè chiunque subisca dal reato un danno risarcibile: solo il danneggiato può costituirsi parte civile, solo la persona offesa può sporgere querela e prestare il consenso scriminante. Diverso ancora è l'<strong>oggetto materiale</strong>, entità su cui insiste concretamente la condotta.",
      approfondimenti: [
        {
          label: "La natura della responsabilità degli enti",
          body:
            "Tre tesi: <strong>amministrativa</strong> (minoritaria: valorizza il nomen juris e le norme divergenti dal sistema penale, come la prescrizione ex art. 22); <strong>penale</strong> (valorizza il collegamento a un reato, l'accertamento nel processo penale, le sanzioni afflittive, l'autonomia ex art. 8, tentativo e concorso formale, i principi ex artt. 2-3 del decreto); <strong>tertium genus</strong>, prevalente in giurisprudenza: un microsistema autonomo a cavallo tra penale e amministrativo. È comunque indiscusso, anche alla luce della giurisprudenza CEDU, che la natura punitiva della responsabilità imponga l'applicazione dei fondamentali principi garantistici del diritto penale."
        },
        {
          label: "Interesse e vantaggio: due criteri alternativi",
          body:
            "L'<strong>interesse</strong> esprime l'obiettiva preordinazione del reato agli scopi sociali e si valuta <em>ex ante</em>, con giudizio prognostico; il <strong>vantaggio</strong> è il concreto risultato conseguito e si accerta <em>ex post</em>. La giurisprudenza maggioritaria, in linea con la Relazione governativa, li intende in chiave <strong>alternativa</strong>; parte della dottrina (tesi monistica) li riduce a un'endiadi. In caso di concorso tra interesse dell'ente e interesse dell'autore, si è ritenuto sufficiente anche un interesse marginale della società, come quello a evitare sanzioni."
        },
        {
          label: "Ambito soggettivo e criteri soggettivi di imputazione",
          body:
            "Il decreto si applica a enti con personalità giuridica, società e associazioni anche prive di personalità; sono esclusi Stato, enti pubblici territoriali, enti pubblici non economici ed enti con funzioni di rilievo costituzionale (partiti e sindacati). Esclusa l'impresa individuale; inclusa la società unipersonale se percepibile la dualità tra socio e società. Per il reato dell'<strong>apicale</strong> (art. 6) l'ente si esonera provando: modello organizzativo idoneo adottato ed efficacemente attuato, organismo di vigilanza, elusione fraudolenta del modello, vigilanza non omessa. Per il reato del <strong>subordinato</strong> (art. 7) è il p.m. a dover dimostrare l'inosservanza degli obblighi di direzione e vigilanza."
        }
      ],
      giurisprudenza: [
        {
          label: "SU Thyssenkrupp (Cass., Sez. Un., 18 settembre 2014, n. 38343)",
          body:
            "Pronuncia cardine del sistema 231: sposa la tesi del <strong>tertium genus</strong>; chiarisce che nei reati colposi di evento interesse e vantaggio vanno riferiti alla <strong>condotta</strong> e non all'evento (altrimenti i criteri non si configurerebbero mai, dato il danno che l'ente subisce dall'evento lesivo); esclude che l'art. 6 configuri un'inversione dell'onere della prova, gravando sull'accusa la dimostrazione del reato del qualificato e della carente regolamentazione interna, con ampia facoltà di prova liberatoria per l'ente."
        },
        {
          label: "Messa alla prova e tenuità del fatto: inapplicabili all'ente",
          body:
            "Per Cass., Sez. Un., 6 aprile 2023, n. 14840 la sospensione con messa alla prova, trattamento sanzionatorio penale, non è applicabile agli enti: osta la riserva di legge ex art. 25, co. 2 Cost. e il divieto di analogia, non essendo gli enti contemplati come destinatari. Cass., Sez. III, 10 ottobre 2024, n. 37237 ha escluso anche l'estensione dell'art. 131-bis c.p.: data l'autonomia della responsabilità dell'ente, l'applicazione della causa di non punibilità all'agente non impedisce di sanzionare l'ente, la cui responsabilità va comunque accertata sulla colpa organizzativa, senza automatismi."
        },
        {
          label: "La querela nella truffa (Cass., Sez. II, 19 settembre 2023, n. 43062)",
          body:
            "Il principio per cui solo il titolare dell'interesse protetto può sporgere querela subisce un'eccezione nella <strong>truffa</strong>: la querela è valida sia se presentata dalla vittima degli artifici e raggiri, sia se presentata da chi ha patito il danno patrimoniale, ove non coincidenti. La ragione sta nella duplice direzione offensiva della condotta, che si estrinseca sia nell'azione decettiva sia nell'acquisizione del profitto."
        }
      ],
      eccezioni: [
        {
          label: "Soggetto passivo del reato ≠ soggetto passivo della condotta",
          body:
            "I due concetti possono non coincidere: nella mutilazione fraudolenta della propria persona a fini di frode assicurativa (art. 642 c.p.), il soggetto passivo della condotta coincide con il soggetto attivo, mentre la persona offesa è la compagnia assicurativa. Esistono inoltre reati a soggetto passivo indeterminato (c.d. vaghi o vaganti) e reati senza soggetto passivo (c.d. ostativi o di scopo), legittimi purché puniscano condotte che siano idonea premessa alla lesione di beni costituzionalmente rilevanti."
        },
        {
          label: "Errore da evitare: l'ente risponde per fatto altrui",
          body:
            "L'ente risponde per <strong>fatto proprio</strong>, fondato sulla colpa di organizzazione, non per fatto altrui: ex art. 8 d.lgs. 231/2001 la responsabilità sussiste anche quando l'autore del reato non è identificato, non è imputabile o il reato è estinto per causa diversa dall'amnistia (principio di autonomia). La colpevolezza dell'ente non va confusa con quella della persona fisica autrice del reato-presupposto."
        }
      ]
    },
    sintesi: [
      "Soggetto attivo: persona fisica che realizza il fatto; reati comuni vs propri.",
      "Reati propri: esclusivi, semiesclusivi, non esclusivi, a seconda del ruolo della qualifica.",
      "D.lgs. 231/2001: responsabilità dell'ente per reati-presupposto, natura prevalente tertium genus.",
      "Criteri oggettivi: interesse (ex ante) o vantaggio (ex post), autore apicale o subordinato.",
      "Criterio soggettivo: colpa di organizzazione; responsabilità autonoma ex art. 8.",
      "Persona offesa (querela, consenso) ≠ danneggiato (parte civile, risarcimento ex art. 185 c.p.)."
    ],
    esempi: [
      {
        titolo: "L'ingegner Rossi e la società Alfa s.p.a.",
        testo:
          "L'ingegner Rossi, amministratore delegato di Alfa s.p.a., omette gli investimenti in sicurezza per contenere i costi; un operaio subisce lesioni gravi per violazione della normativa antinfortunistica. Rossi risponde penalmente come persona fisica; ma anche <strong>Alfa</strong> può essere chiamata a rispondere ex d.lgs. 231/2001: le lesioni colpose con violazione antinfortunistica rientrano tra i reati-presupposto, il risparmio di spesa integra l'interesse o vantaggio riferito alla condotta (come chiarito dalle Sezioni Unite Thyssenkrupp), e Rossi è soggetto apicale. Alfa potrà esonerarsi solo provando di aver adottato ed efficacemente attuato un modello organizzativo idoneo, di aver istituito l'organismo di vigilanza, e che Rossi ha eluso fraudolentemente il modello."
      },
      {
        titolo: "Giulia, il furto e le due qualifiche",
        testo:
          "Un ladro sottrae dall'auto di Giulia la borsa che le aveva prestato l'amica Sara. Chi è persona offesa e chi danneggiato? Giulia, detentrice qualificata della cosa, è <strong>soggetto passivo</strong> del furto e può sporgere querela; Sara, proprietaria che subisce la perdita patrimoniale, è <strong>danneggiata</strong> e potrà costituirsi parte civile per il risarcimento ex art. 185 c.p. Le due posizioni possono coincidere (spesso il derubato è anche il danneggiato) ma restano concettualmente distinte: nell'omicidio, ad esempio, la persona offesa è la vittima, mentre danneggiati — titolari della pretesa risarcitoria — sono i suoi congiunti."
      }
    ],
    flashcards: [
      ["Cosa distingue i reati comuni dai reati propri?", "Nei comuni il soggetto attivo è 'chiunque'; nei propri occorre una particolare qualità di fatto o di diritto, che è elemento costitutivo del reato."],
      ["Quali enti sono esclusi dal d.lgs. 231/2001?", "Stato, enti pubblici territoriali, enti pubblici non economici, enti con funzioni di rilievo costituzionale (partiti e sindacati); esclusa anche l'impresa individuale."],
      ["Differenza tra interesse e vantaggio ex art. 5 d.lgs. 231/2001?", "L'interesse è la preordinazione del reato agli scopi sociali, valutata ex ante; il vantaggio è il risultato concreto conseguito, accertato ex post. Criteri alternativi per la giurisprudenza."],
      ["Cos'è la colpa di organizzazione?", "Il criterio soggettivo di imputazione dell'illecito all'ente: mancata adozione o inefficace attuazione di modelli organizzativi idonei a prevenire reati della specie di quello verificatosi."],
      ["Chi può costituirsi parte civile nel processo penale?", "Il danneggiato dal reato, cioè chi subisce un danno patrimoniale o non patrimoniale risarcibile (art. 74 c.p.p.), anche se diverso dalla persona offesa."],
      ["Cosa prevede l'art. 8 d.lgs. 231/2001?", "L'autonomia della responsabilità dell'ente: essa sussiste anche se l'autore del reato non è identificato, non è imputabile o il reato è estinto per causa diversa dall'amnistia."]
    ],
    comparativa: {
      titolo: "Persona offesa vs danneggiato dal reato",
      a: "Persona offesa",
      b: "Danneggiato",
      righe: [
        { profilo: "Definizione", a: "Titolare del bene o interesse tutelato dalla norma incriminatrice", b: "Chiunque subisca dal reato un danno patrimoniale o non patrimoniale risarcibile" },
        { profilo: "Poteri processuali", a: "Facoltà ex art. 90 c.p.p., querela (art. 120 c.p.), istanza", b: "Costituzione di parte civile ex art. 74 c.p.p. per il risarcimento ex art. 185 c.p." },
        { profilo: "Consenso scriminante", a: "Solo la persona offesa può prestare il valido consenso ex art. 50 c.p.", b: "Il danneggiato in quanto tale non può prestare il consenso scriminante" },
        { profilo: "Esempio di non coincidenza", a: "Nell'omicidio: la vittima", b: "Nell'omicidio: i congiunti del defunto, titolari della pretesa risarcitoria" }
      ]
    },
    quiz: [
      {
        q: "Il peculato commesso da chi non riveste la qualifica di pubblico ufficiale degrada ad appropriazione indebita: si tratta quindi di un reato proprio:",
        opts: [
          "Esclusivo o di mano propria",
          "Semiesclusivo",
          "Non esclusivo",
          "A concorso necessario"
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Si risponde 'esclusivo' pensando che la qualifica sia sempre decisiva per l'illiceità: qui invece il fatto resta reato (comune) anche senza qualifica.",
        why: "Nei reati propri semiesclusivi la qualifica incide sulla qualificazione giuridica di un fatto comunque illecito penalmente: senza qualifica si configura un reato comune (appropriazione indebita anziché peculato). Negli esclusivi il fatto sarebbe lecito; nei non esclusivi sarebbe illecito solo extrapenale.",
        fonte: "Marinucci·Dolcini·Gatta, PG — I soggetti del reato"
      },
      {
        q: "Quale tesi sulla natura della responsabilità degli enti prevale in giurisprudenza?",
        opts: [
          "La tesi della natura amministrativa, fondata sul nomen juris",
          "La tesi della natura penale, fondata sulle sanzioni afflittive",
          "La tesi della natura civile da illecito extracontrattuale",
          "La tesi del tertium genus, accolta dalle Sezioni Unite"
        ],
        correct: 3,
        difficulty: 2,
        commonError: "Molti scelgono la natura amministrativa fidandosi del nomen juris del decreto, che la giurisprudenza reputa non decisivo.",
        why: "Le Sezioni Unite (sent. n. 38343/2014, Thyssenkrupp) hanno sposato la tesi del tertium genus: un microsistema autonomo a cavallo tra responsabilità penale e amministrativa, cui si applicano comunque i principi garantistici penalistici data la natura punitiva.",
        fonte: "Marinucci·Dolcini·Gatta, PG — I soggetti del reato"
      },
      {
        q: "Nei reati colposi di evento, i criteri dell'interesse e del vantaggio ex art. 5 d.lgs. 231/2001 vanno riferiti:",
        opts: [
          "Alla condotta e non all'evento",
          "All'evento e non alla condotta",
          "Indifferentemente alla condotta o all'evento",
          "Al solo profitto conseguito dall'ente dopo l'evento"
        ],
        correct: 0,
        difficulty: 4,
        commonError: "Si riferiscono i criteri all'evento lesivo: ma nessun ente ha interesse alla morte o alle lesioni, che anzi gli impongono risarcimenti.",
        why: "La giurisprudenza è pacifica (SU Thyssenkrupp n. 38343/2014): interesse e vantaggio vanno riferiti alla condotta (es. risparmio di spesa da violazione cautelare), altrimenti nei reati colposi di evento i criteri non si configurerebbero mai.",
        fonte: "Marinucci·Dolcini·Gatta, PG — I soggetti del reato"
      },
      {
        q: "Chi può costituirsi parte civile nel processo penale?",
        opts: [
          "Soltanto la persona offesa dal reato",
          "Soltanto chi ha sporto querela nei termini",
          "Il danneggiato che ha subito un danno risarcibile",
          "Qualunque cittadino portatore di un interesse diffuso"
        ],
        correct: 2,
        difficulty: 1,
        commonError: "Si attribuisce la costituzione di parte civile alla persona offesa: è invece facoltà del danneggiato, anche se le due figure spesso coincidono.",
        why: "La costituzione di parte civile ex art. 74 c.p.p. spetta al danneggiato, cioè a chi subisce dal reato un danno patrimoniale o non patrimoniale risarcibile ex art. 185 c.p.; alla persona offesa spettano querela, istanza e le facoltà ex art. 90 c.p.p.",
        fonte: "Marinucci·Dolcini·Gatta, PG — I soggetti del reato"
      },
      {
        q: "In base all'art. 8 d.lgs. 231/2001, l'ente risponde anche quando:",
        opts: [
          "Il reato-presupposto non rientra nel catalogo ma è di analoga gravità",
          "L'autore del reato non è stato identificato o non è imputabile",
          "Il fatto è stato commesso da un soggetto esterno all'organizzazione",
          "Il reato è estinto per amnistia intervenuta prima della condanna"
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Si include l'amnistia tra le cause irrilevanti: l'art. 8 fa invece salva proprio l'estinzione per amnistia; e il catalogo è tassativo.",
        why: "Il principio di autonomia della responsabilità dell'ente (art. 8) opera anche se l'autore non è identificato, non è imputabile o il reato è estinto per cause diverse dall'amnistia. Restano fermi la tassatività del catalogo e il requisito dell'appartenenza dell'autore all'organizzazione.",
        fonte: "Marinucci·Dolcini·Gatta, PG — I soggetti del reato"
      },
      {
        q: "Nel caso di reato commesso da un soggetto subordinato, l'ente risponde:",
        opts: [
          "Sempre, salvo elusione fraudolenta del modello organizzativo",
          "Solo se l'organismo di vigilanza ha omesso i controlli",
          "Mai, perché l'art. 5 richiede la qualifica apicale dell'autore",
          "Solo se il p.m. dimostra l'inosservanza degli obblighi di direzione e vigilanza"
        ],
        correct: 3,
        difficulty: 4,
        commonError: "Si applica al subordinato il rigido meccanismo dell'art. 6, che vale invece per gli apicali (con elusione fraudolenta del modello).",
        why: "Per i reati dei sottoposti opera l'art. 7: l'ente è sanzionato solo se il p.m. dimostra che il reato è stato reso possibile dall'inosservanza degli obblighi di direzione e vigilanza, comunque esclusa se l'ente ha adottato ed efficacemente attuato un modello idoneo.",
        fonte: "Marinucci·Dolcini·Gatta, PG — I soggetti del reato"
      }
    ],
    veroFalso: [
      {
        aff: "La sospensione del procedimento con messa alla prova è applicabile anche agli enti ex d.lgs. 231/2001.",
        vero: false,
        traccia: "Falso. Le Sezioni Unite (sent. n. 14840/2023) hanno escluso l'applicabilità della messa alla prova agli enti: trattandosi di un trattamento sanzionatorio penale, ostano la riserva di legge ex art. 25, co. 2 Cost. e il divieto di analogia, non essendo gli enti espressamente contemplati come destinatari dell'istituto."
      },
      {
        aff: "La disciplina del d.lgs. 231/2001 si applica anche all'impresa individuale.",
        vero: false,
        traccia: "Falso. La giurisprudenza maggioritaria esclude l'impresa individuale, che non è soggetto di diritto distinto dalla persona fisica. È invece applicabile alla società unipersonale, a condizione che nel caso concreto sia percepibile la dualità soggettiva tra socio unico e società."
      },
      {
        aff: "Soggetto passivo del reato e danneggiato possono coincidere nella stessa persona.",
        vero: true,
        traccia: "Vero. Nel furto, chi detiene la cosa sottratta è al contempo persona offesa e danneggiato. Le posizioni restano però concettualmente distinte e possono separarsi: nell'omicidio la persona offesa è la vittima, i danneggiati sono i congiunti titolari della pretesa risarcitoria."
      }
    ],
    aperta: {
      q: "Il candidato illustri i criteri oggettivi e soggettivi di imputazione della responsabilità da reato degli enti ai sensi del d.lgs. 231/2001.",
      traccia:
        "Superato il dogma societas delinquere non potest, il d.lgs. 231/2001 ha introdotto una responsabilità dell'ente 'amministrativa dipendente da reato', qualificata dalla giurisprudenza prevalente come tertium genus (SU n. 38343/2014). Sul piano oggettivo (art. 5), occorre: un reato-presupposto compreso nel catalogo tassativo; la commissione nell'interesse (preordinazione agli scopi sociali, valutata ex ante) o a vantaggio (risultato concreto, accertato ex post) dell'ente — criteri alternativi che, nei reati colposi di evento, vanno riferiti alla condotta; la qualità di apicale o subordinato dell'autore. Sul piano soggettivo, rileva la colpa di organizzazione. Per il reato dell'apicale (art. 6) l'ente si esonera provando l'adozione ed efficace attuazione di modelli idonei, l'istituzione dell'organismo di vigilanza, l'elusione fraudolenta del modello e l'assenza di omessa vigilanza; per il reato del subordinato (art. 7) grava sul p.m. la prova dell'inosservanza degli obblighi di direzione e vigilanza. La responsabilità è autonoma ex art. 8.",
      fonte: "Marinucci·Dolcini·Gatta, PG — I soggetti del reato"
    },
    consigliate: ["flashcards", "comparativa", "mcq", "esempi"],
    media: {
      podcast: {
        title: "I soggetti del reato e la responsabilità degli enti",
        chapters: [
          ["Soggetto attivo: reati comuni e propri", 0],
          ["Il d.lgs. 231/2001: natura e criteri di imputazione", 260],
          ["Modelli organizzativi e sanzioni", 600],
          ["Persona offesa, danneggiato, oggetto materiale", 840]
        ]
      },
      mappa: true
    }
  },
  {
    id: "condotta",
    part: "generale",
    chapter: 5,
    chapterTitle: "La struttura del reato",
    title: "L'elemento oggettivo: condotta ed evento",
    subtitle: "Azione e omissione, reati omissivi propri e impropri, clausola di equivalenza ex art. 40 cpv., posizione di garanzia, evento naturalistico e giuridico",
    articoli: ["art. 40 c.p.", "art. 42, co. 1 c.p.", "art. 593 c.p.", "artt. 16-17 d.lgs. 81/2008"],
    pages: [84, 94],
    depth: "deep",
    layers: {
      essenziale:
        "La <strong>condotta</strong> è il primo elemento costitutivo del reato: il comportamento umano vietato. In forza del <strong>principio di materialità</strong>, corollario della legalità, si puniscono solo fatti umani estrinsecatisi nel mondo materiale, mai meri modi di essere (bando al diritto penale dell'autore). Ogni condotta richiede previsione legale, coscienza e volontà (<em>suitas</em>, art. 42, co. 1 c.p.) e offensività. L'<strong>azione</strong> è il movimento corporeo che modifica il mondo esteriore; l'<strong>omissione</strong> va intesa in senso normativo, come mancato compimento di un'azione giuridicamente doverosa, non come mera inerzia. Elementi di ogni reato omissivo: situazione tipica, condotta omissiva, possibilità fisico-reale di agire (<em>ad impossibilia nemo tenetur</em>). Secondo la tesi maggioritaria, i <strong>reati omissivi propri</strong> consistono nel mancato compimento di un'azione comandata alla generalità dei consociati da norme di parte speciale (omissione di soccorso, art. 593 c.p.); i <strong>reati omissivi impropri</strong> nel mancato impedimento di un evento che si ha l'obbligo giuridico di impedire. La loro disciplina è nella <strong>clausola di equivalenza</strong> dell'art. 40, co. 2 c.p.: 'non impedire un evento che si ha l'obbligo giuridico di impedire, equivale a cagionarlo'. La clausola converte le sole fattispecie di evento naturalistico <em>a forma libera</em> e presuppone una <strong>posizione di garanzia</strong>: obbligo specifico, precostituito al pericolo, assistito da effettivi poteri impeditivi. Le posizioni si distinguono in <em>di controllo</em> (neutralizzare fonti di pericolo) e <em>di protezione</em> (preservare un bene), originarie o derivate. L'<strong>evento</strong> è inteso in senso naturalistico (accadimento esteriore causalmente collegato alla condotta) o giuridico (offesa al bene tutelato).",
      approfondimenti: [
        {
          label: "Le fonti dell'obbligo di garanzia: tre teorie",
          body:
            "La <strong>teoria formale</strong>, in ossequio alla riserva di legge, ammette solo obblighi nascenti da legge, contratto, provvedimento del giudice, precedente azione pericolosa, volontaria assunzione (negotiorum gestio) e consuetudine; è criticata perché dilaterebbe eccessivamente la responsabilità. La <strong>teoria funzionale</strong> guarda all'effettivo dominio del garante sulle cause dell'evento, ma stride con riserva di legge e determinatezza. Prevale la <strong>tesi mista</strong>: vi è posizione di garanzia quando all'obbligo imposto da una fonte formale si accompagna l'effettiva titolarità di poteri impeditivi."
        },
        {
          label: "Requisiti dell'obbligo di garanzia",
          body:
            "Tre requisiti: <strong>poteri impeditivi</strong> esercitabili in concreto (il genitore che non sa nuotare non risponde dell'annegamento del figlio), bastando anche poteri sollecitatori volti a far intervenire chi può evitare l'evento; <strong>specificità</strong> dell'obbligo, in base a legalità-tassatività, con esclusione degli obblighi indeterminati come i generici doveri di solidarietà; <strong>precostituzione</strong> della titolarità dei poteri rispetto alla situazione di pericolo, in base alla personalità della responsabilità penale. Non fondano responsabilità ex art. 40 cpv. gli obblighi di mera sorveglianza (es. organismo di vigilanza ex d.lgs. 231/2001) né i meri obblighi di attivarsi (es. art. 593 c.p.)."
        },
        {
          label: "La delega di funzioni",
          body:
            "Codificata dall'art. 16 d.lgs. 81/2008, consente al garante originario di trasferire la posizione di garanzia. Requisiti: atto scritto con data certa, accettazione, professionalità ed esperienza del delegato, attribuzione di tutti i poteri di organizzazione, gestione e controllo e dell'autonomia di spesa necessaria. Non sono delegabili la valutazione dei rischi e la nomina del R.S.P.P. (art. 17). La delega genera posizioni di garanzia <em>derivate</em>, ma non esonera il delegante: il suo obbligo si trasforma in obbligo di vigilanza sul corretto espletamento delle funzioni trasferite, con responsabilità congiunta in caso di omessa vigilanza."
        },
        {
          label: "Pluralità di garanti e principio di affidamento",
          body:
            "Quando il medesimo obbligo grava su più soggetti, l'imputazione dell'evento considera l'area di rischio governata da ciascuno e la colpevolezza individuale; nell'attività medica d'équipe opera il <strong>principio di affidamento</strong>: ciascuno può confidare nella diligenza dei colleghi, salvo elementi che ne rivelino l'inaffidabilità. In caso di successione di garanti (es. cessione d'azienda), la giurisprudenza esclude che il subentro liberi il primo garante dalla responsabilità per la propria condotta: alla sua responsabilità si aggiunge quella del successore che, potendo, non abbia esercitato i poteri impeditivi."
        }
      ],
      giurisprudenza: [
        {
          label: "I presupposti della posizione di garanzia (Cass., Sez. II, 5 febbraio 2021, n. 4633)",
          body:
            "La giurisprudenza richiede la ricorrenza congiunta di quattro presupposti: a) un bene giuridico che necessiti di protezione, non potendo il titolare proteggerlo da solo; b) una fonte giuridica, anche negoziale, con finalità di tutelarlo; c) un obbligo gravante su una o più persone specificamente individuate; d) la dotazione, in capo a queste, di poteri atti a impedire la lesione o di mezzi idonei a sollecitare gli interventi necessari. Su tali basi si fonda anche la responsabilità del collegio sindacale delle società (Cass., Sez. V, 10 gennaio 2024, n. 1162)."
        },
        {
          label: "Il caso Ciontoli/Vannini: garanzia da ospitalità e attività pericolosa",
          body:
            "Cass., Sez. I, 6 marzo 2020, n. 9049 ha chiarito che la posizione di garanzia non può fondarsi sul generale dovere di non ledere l'altrui sfera giuridica, privo di capacità selettiva, ma può nascere dall'assunzione volontaria del dovere di protezione, come nel ferimento della vittima ospite della famiglia. Cass., Sez. V, 19 luglio 2021, n. 27905 (Vannini-bis) ha ritenuto fondata la garanzia dei familiari sul rapporto di ospitalità e confidenza e sulla precedente attività pericolosa che aveva reso la vittima incapace di tutelare il proprio bene vita, in presenza di effettivi poteri impeditivi e in assenza di alternative."
        },
        {
          label: "Delega di funzioni: limiti (Cass. n. 49771/2019; Cons. St. n. 814/2024)",
          body:
            "Per Cass., Sez. IV, 14 novembre 2019, n. 49771 non è delegabile l'obbligo di vigilanza sul corretto espletamento delle funzioni trasferite ex art. 16, co. 3, d.lgs. 81/2008, che residua sempre in capo al delegante. Il Consiglio di Stato (Sez. I, 19 giugno 2024, n. 814) ha inoltre chiarito che la delega di funzioni in materia di salute e sicurezza sul lavoro non può considerarsi implicitamente prorogata: occorre l'atto scritto con data certa."
        }
      ],
      eccezioni: [
        {
          label: "L'art. 40 cpv. non converte i reati a forma vincolata",
          body:
            "La clausola di equivalenza opera solo sulle fattispecie di <strong>evento naturalistico a forma libera</strong>: un'omissione non può riprodurre il disvalore insito in particolari modalità di azione, sicché applicare l'art. 40 cpv. ai reati a forma vincolata (es. truffa) costituirebbe un'estensione indebita, in violazione della legalità. Esistono peraltro rare norme di parte speciale che prevedono espressamente reati omissivi impropri (es. art. 659 c.p.: 'chiunque... non impedendo...')."
        },
        {
          label: "Errore da evitare: ogni obbligo giuridico fonda l'art. 40 cpv.",
          body:
            "Solo gli obblighi a contenuto <strong>impeditivo</strong> fondano la responsabilità omissiva impropria. Non bastano gli obblighi di sorveglianza (vigilare e informare, senza poteri impeditivi: es. i membri dell'organismo di vigilanza ex d.lgs. 231/2001) né i meri obblighi di attivarsi imposti a chiunque (l'omissione di soccorso ex art. 593 c.p. resta reato omissivo proprio: chi non soccorre non risponde della morte del pericolante ex artt. 40 cpv. e 575 c.p.)."
        }
      ]
    },
    sintesi: [
      "Principio di materialità: si puniscono fatti umani, non modi di essere.",
      "Omissione in senso normativo: mancato compimento di un'azione giuridicamente doverosa.",
      "Omissivi propri: violazione di un comando rivolto a tutti (art. 593 c.p.).",
      "Omissivi impropri: mancato impedimento dell'evento ex art. 40 cpv. + posizione di garanzia.",
      "Clausola di equivalenza: solo reati di evento a forma libera; obbligo specifico e poteri impeditivi.",
      "Posizioni di controllo (fonti di pericolo) e di protezione (beni); originarie o derivate.",
      "Evento naturalistico: accadimento esteriore; evento giuridico: offesa al bene tutelato."
    ],
    esempi: [
      {
        titolo: "Il bagnino Luca e il passante Andrea",
        testo:
          "In uno stabilimento balneare, un bagnante rischia di annegare. <strong>Luca</strong>, bagnino assunto con contratto, ha una posizione di garanzia (di protezione, derivata dalla volontaria assunzione contrattuale con effettiva presa in carico): se resta inerte e il bagnante muore, risponde di omicidio ex artt. 40 cpv. e 575 c.p., perché non ha impedito un evento che aveva l'obbligo giuridico di impedire. <strong>Andrea</strong>, semplice passante, non ha alcuna posizione di garanzia: su di lui grava solo il mero obbligo di attivarsi ex art. 593 c.p.; se omette di prestare soccorso risponde del reato omissivo proprio di omissione di soccorso, ma non della morte. Stessa inerzia, imputazioni radicalmente diverse: decide la titolarità dell'obbligo impeditivo."
      },
      {
        titolo: "La delega del datore di lavoro Franchi",
        testo:
          "L'imprenditore Franchi delega con atto scritto e data certa la gestione della sicurezza dello stabilimento all'ing. Moretti, professionista esperto, attribuendogli pieni poteri organizzativi e autonomia di spesa. La delega è valida ex art. 16 d.lgs. 81/2008 e Moretti diventa garante derivato, le cui omissioni rilevano ex art. 40 cpv. c.p. Franchi però non è libero da ogni incombenza: non poteva delegare la valutazione dei rischi né la nomina del R.S.P.P. (art. 17) e conserva l'obbligo di vigilare sul corretto espletamento delle funzioni trasferite. Se un operaio si infortuna e Franchi non ha vigilato diligentemente su Moretti, risponderà congiuntamente a lui del mancato impedimento dell'evento."
      }
    ],
    flashcards: [
      ["Cosa dispone l'art. 40, co. 2 c.p.?", "La clausola di equivalenza: 'non impedire un evento che si ha l'obbligo giuridico di impedire, equivale a cagionarlo'. Fonda i reati omissivi impropri."],
      ["Quali sono gli elementi di ogni reato omissivo?", "Situazione tipica (circostanze che attualizzano l'obbligo), condotta omissiva (mancato compimento dell'azione imposta), possibilità fisico-reale di agire."],
      ["Differenza tra posizione di controllo e di protezione?", "Controllo: neutralizzare una fonte di pericolo sotto la propria signoria (datore di lavoro). Protezione: preservare un bene affidato da possibili offese (genitori verso i figli, art. 30 Cost.)."],
      ["Quali fattispecie sono convertibili ex art. 40 cpv.?", "Solo i reati di evento naturalistico a forma libera: l'omissione non può riprodurre il disvalore delle particolari modalità richieste dalle fattispecie a forma vincolata."],
      ["Gli obblighi di sorveglianza fondano la responsabilità omissiva impropria?", "No: chi vigila e informa senza poteri impeditivi (es. organismo di vigilanza ex d.lgs. 231/2001) non è garante ex art. 40 cpv. c.p."],
      ["Cosa distingue evento naturalistico ed evento giuridico?", "Il naturalistico è l'accadimento esteriore causalmente collegato alla condotta (la morte nell'omicidio); il giuridico è l'offesa al bene tutelato, presente in ogni reato."]
    ],
    comparativa: {
      titolo: "Reato omissivo proprio vs improprio",
      a: "Omissivo proprio",
      b: "Omissivo improprio",
      righe: [
        { profilo: "Contenuto della condotta", a: "Mancato compimento di un'azione comandata alla generalità dei consociati", b: "Mancato impedimento di un evento che si ha l'obbligo giuridico di impedire" },
        { profilo: "Fonte normativa", a: "Norme espresse di parte speciale (es. omissione di soccorso, art. 593 c.p.)", b: "Combinazione dell'art. 40 cpv. c.p. con fattispecie commissive di evento a forma libera (rare previsioni espresse: art. 659 c.p.)" },
        { profilo: "Soggetto attivo", a: "Chiunque si trovi nella situazione tipica", b: "Solo il titolare di una posizione di garanzia con effettivi poteri impeditivi" },
        { profilo: "Struttura", a: "Tendenzialmente di mera condotta, senza evento da imputare", b: "Richiede evento naturalistico e rapporto di causalità tra omissione ed evento" }
      ]
    },
    quiz: [
      {
        q: "Cosa stabilisce la clausola di equivalenza di cui all'art. 40, co. 2 c.p.?",
        opts: [
          "Che ogni omissione è punita al pari della corrispondente azione",
          "Che il concorso di cause preesistenti non esclude il nesso causale",
          "Che l'evento non voluto è imputato a titolo di responsabilità oggettiva",
          "Che non impedire un evento che si ha l'obbligo giuridico di impedire equivale a cagionarlo"
        ],
        correct: 3,
        difficulty: 1,
        commonError: "Si generalizza: non ogni omissione equivale all'azione, ma solo quella di chi ha l'obbligo giuridico di impedire l'evento.",
        why: "L'art. 40 cpv. c.p. equipara il mancato impedimento alla causazione, fondando i reati omissivi impropri: presuppone un obbligo giuridico impeditivo (posizione di garanzia) e opera sulle fattispecie di evento a forma libera.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'elemento oggettivo del reato"
      },
      {
        q: "Secondo la tesi maggioritaria, i reati omissivi propri si caratterizzano per:",
        opts: [
          "La necessità di accertare il nesso causale tra omissione ed evento",
          "Il mancato compimento di un'azione comandata alla generalità dei consociati da norme di parte speciale",
          "La titolarità di una posizione di garanzia in capo al soggetto attivo",
          "La derivazione dalla combinazione con la clausola dell'art. 40 cpv. c.p."
        ],
        correct: 1,
        difficulty: 2,
        commonError: "Si attribuiscono ai reati omissivi propri i caratteri degli impropri: posizione di garanzia, evento e art. 40 cpv. riguardano questi ultimi.",
        why: "Per la tesi maggioritaria, fondata sulla struttura della fattispecie, i reati omissivi propri (tendenzialmente di mera condotta) sono previsti espressamente da norme di parte speciale e puniscono la violazione di un comando rivolto a tutti, come l'omissione di soccorso ex art. 593 c.p.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'elemento oggettivo del reato"
      },
      {
        q: "La conversione ex art. 40 cpv. c.p. è possibile per:",
        opts: [
          "Le sole fattispecie di evento naturalistico a forma libera",
          "Tutte le fattispecie di parte speciale, anche a forma vincolata",
          "I soli reati di mera condotta espressamente previsti",
          "Le sole contravvenzioni punite a titolo di colpa"
        ],
        correct: 0,
        difficulty: 4,
        commonError: "Si estende la clausola anche ai reati a forma vincolata come la truffa: ma l'omissione non può riprodurre il disvalore delle specifiche modalità di condotta.",
        why: "La clausola di equivalenza immette nell'ordinamento tante fattispecie omissive quante sono quelle attive suscettibili di conversione: solo quelle di evento naturalistico a forma libera, perché nei reati a forma vincolata l'applicazione dell'art. 40 cpv. sarebbe un'estensione indebita.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'elemento oggettivo del reato"
      },
      {
        q: "Il datore di lavoro, rispetto al pericolo di infortuni, è titolare di una posizione di garanzia:",
        opts: [
          "Di protezione, derivata dal contratto di lavoro",
          "Di mera sorveglianza sull'attività dei dipendenti",
          "Di controllo su una fonte di pericolo sotto la propria signoria",
          "Sollecitatoria, limitata alla segnalazione dei rischi"
        ],
        correct: 2,
        difficulty: 3,
        commonError: "Si qualifica la posizione come 'di protezione' guardando ai lavoratori tutelati: il criterio guarda però al contenuto dell'obbligo, che è neutralizzare la fonte di pericolo.",
        why: "Le posizioni di controllo impongono di neutralizzare fonti di pericolo che il garante ha sotto la propria signoria (l'impresa rispetto agli infortuni); le posizioni di protezione impongono invece di preservare un bene affidato in forza di un legame col titolare (genitori-figli).",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'elemento oggettivo del reato"
      },
      {
        q: "I membri dell'organismo di vigilanza ex d.lgs. 231/2001 rispondono ex art. 40 cpv. c.p. dei reati non impediti?",
        opts: [
          "Sì, perché il loro incarico nasce da una fonte formale qualificata",
          "Sì, ma solo per i reati commessi dai soggetti apicali",
          "No, perché il loro obbligo cessa con l'adozione del modello organizzativo",
          "No, perché sono titolari di obblighi di sorveglianza privi di poteri impeditivi"
        ],
        correct: 3,
        difficulty: 5,
        commonError: "Si ritiene che la fonte formale dell'incarico basti a fondare la garanzia: occorrono invece effettivi poteri impeditivi, che l'ODV non possiede.",
        why: "Solo gli obblighi a contenuto impeditivo fondano la responsabilità omissiva impropria. Gli obblighi di sorveglianza — vigilare sull'altrui attività e informare taluno delle irregolarità, senza poteri giuridici impeditivi — come quelli dell'ODV, sono inidonei a fondare l'equivalenza ex art. 40 cpv. c.p.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'elemento oggettivo del reato"
      },
      {
        q: "Dopo una valida delega di funzioni ex art. 16 d.lgs. 81/2008, il delegante:",
        opts: [
          "È esonerato da ogni responsabilità per gli eventi successivi",
          "Conserva un obbligo di vigilanza sul corretto espletamento delle funzioni trasferite",
          "Risponde in ogni caso in solido con il delegato per culpa in eligendo",
          "Trasferisce anche la valutazione dei rischi e la nomina del R.S.P.P."
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Si pensa che la delega liberi integralmente il delegante o, all'opposto, che lo lasci sempre responsabile: la legge trasforma il suo obbligo in dovere di vigilanza.",
        why: "Ex art. 16, co. 3, d.lgs. 81/2008 l'obbligo di garanzia del delegante si trasforma in obbligo di vigilanza sul delegato: in caso di evento lesivo, il delegante che non abbia diligentemente vigilato risponde congiuntamente al delegato. Valutazione dei rischi e nomina del R.S.P.P. restano indelegabili (art. 17).",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'elemento oggettivo del reato"
      },
      {
        q: "Aderendo alla concezione giuridica dell'evento:",
        opts: [
          "I reati si dividono in reati di evento e reati di mera condotta",
          "L'evento è l'accadimento esteriore causalmente collegato alla condotta",
          "Un evento, inteso come offesa al bene tutelato, è ravvisabile in ogni fattispecie",
          "Il nesso di causalità va accertato anche nei reati di mera condotta"
        ],
        correct: 2,
        difficulty: 4,
        commonError: "Si confondono le due concezioni: la divisione tra reati di evento e di mera condotta discende da quella naturalistica, non da quella giuridica.",
        why: "Per la concezione giuridica l'evento coincide con l'offesa al bene tutelato, presente in ogni reato (un reato inoffensivo sarebbe costituzionalmente illegittimo); per quella naturalistica l'evento è un accadimento esteriore, sicché esistono reati di evento e reati di mera condotta.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'elemento oggettivo del reato"
      }
    ],
    veroFalso: [
      {
        aff: "L'omissione penalmente rilevante consiste nella mera inerzia fisico-naturalistica del soggetto.",
        vero: false,
        traccia: "Falso. L'omissione va intesa in senso normativo: è il mancato compimento di un'azione giuridicamente doverosa, non un semplice 'non fare'. Occorrono la situazione tipica che attualizza l'obbligo, la condotta omissiva e la possibilità fisico-reale di agire (ad impossibilia nemo tenetur)."
      },
      {
        aff: "Il genitore che non sa nuotare non risponde ex art. 40 cpv. c.p. della morte per annegamento del figlio, se privo di qualsiasi potere anche sollecitatorio.",
        vero: true,
        traccia: "Vero. L'obbligo di garanzia presuppone poteri impeditivi esercitabili in concreto: chi non è in grado di impedire l'evento, né di attivare chi potrebbe farlo, non può risponderne. Sono però sufficienti anche poteri di natura sollecitatoria esigibili dal garante, volti a far intervenire chi dispone del potere di evitare l'evento."
      },
      {
        aff: "La distinzione tra reati di evento e di mera condotta rileva anche per la configurabilità del reato omissivo improprio.",
        vero: true,
        traccia: "Vero. Solo i reati di evento, in combinato disposto con l'art. 40, co. 2 c.p., possono dar vita a un reato omissivo improprio; inoltre solo nei reati di evento occorre accertare il nesso di causalità e può operare il recesso attivo dal delitto tentato."
      }
    ],
    aperta: {
      q: "Il candidato illustri la struttura dei reati omissivi impropri, soffermandosi sulla clausola di equivalenza di cui all'art. 40, co. 2 c.p. e sui criteri di identificazione della posizione di garanzia.",
      traccia:
        "I reati omissivi impropri consistono nel mancato impedimento di un evento che si ha l'obbligo giuridico di impedire e risultano, di regola, dalla combinazione della clausola di equivalenza ex art. 40 cpv. c.p. con fattispecie commissive di evento naturalistico a forma libera, non essendo convertibili le fattispecie a forma vincolata. Elementi costitutivi: situazione tipica, condotta omissiva, possibilità di agire, evento naturalistico, nesso causale tra omissione ed evento, obbligo giuridico impeditivo. Sulle fonti dell'obbligo si confrontano la teoria formale (legge, contratto, provvedimento del giudice, precedente attività pericolosa, negotiorum gestio, consuetudine), quella funzionale (effettivo dominio sulle cause dell'evento) e la prevalente tesi mista, che richiede fonte formale ed effettiva titolarità di poteri impeditivi. L'obbligo deve essere specifico e precostituito al pericolo. Le posizioni di garanzia si distinguono in posizioni di controllo di fonti di pericolo e di protezione di beni, originarie o derivate (come nella delega di funzioni ex art. 16 d.lgs. 81/2008, che lascia al delegante un obbligo di vigilanza). Restano estranei all'art. 40 cpv. gli obblighi di sorveglianza e i meri obblighi di attivarsi.",
      fonte: "Marinucci·Dolcini·Gatta, PG — L'elemento oggettivo del reato"
    },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: {
      podcast: {
        title: "Condotta, omissione, posizione di garanzia, evento",
        chapters: [
          ["Principio di materialità, azione e omissione", 0],
          ["Omissivi propri e impropri: l'art. 40 cpv.", 280],
          ["Posizione di garanzia e delega di funzioni", 620],
          ["L'evento naturalistico e giuridico", 960]
        ]
      },
      mappa: true
    }
  }
];
