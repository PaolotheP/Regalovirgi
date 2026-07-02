/* =========================================================================
   SIRIO — CONTENUTI · PARTE SPECIALE (extra) del Diritto penale.
   Rielaborati dal SuperCompendio di Diritto penale (Neldiritto Editore).
   Un argomento per ciascun capitolo della parte speciale.
   Stessa struttura di parteSpeciale.js: depth "std", inPlan false.
   ========================================================================= */

export const SPEC_EXTRA = [
  /* ===================== 1 · NOZIONI INTRODUTTIVE ================== */
  {
    id: "ps-intro", part: "speciale", chapter: 1, chapterTitle: "Nozioni introduttive",
    title: "Nozioni introduttive alla parte speciale", subtitle: "Classificazione dei reati, bene giuridico e tecniche di tutela",
    articoli: ["art. 39 c.p.", "artt. 17, 39 c.p."], pages: [81, 82], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "La parte speciale del diritto penale cataloga le singole fattispecie criminose, ordinandole nei <strong>Titoli</strong> del Libro II del codice secondo il <strong>bene giuridico</strong> tutelato: si procede dai beni collettivi di rango primario (personalità dello Stato, PA, amministrazione della giustizia, ordine e incolumità pubblica, fede pubblica) fino ai beni individuali (famiglia, persona, patrimonio). La <em>summa divisio</em> è quella tra <strong>delitti</strong> e <strong>contravvenzioni</strong> (art. 39 c.p.), distinti non in base alla gravità o al bene offeso ma in base alla <em>specie della pena</em> comminata (art. 17 c.p.). Il bene giuridico non è però un semplice criterio ordinatore: esso orienta anche l'interpretazione delle norme e l'accertamento dell'offesa in concreto, in ossequio al principio di offensività (artt. 25 e 27 Cost.).",
      approfondimenti: [
        { label: "Il bene giuridico come criterio di sistemazione", body: "Ogni Titolo del Libro II raggruppa i reati intorno all'interesse protetto. Il bene giuridico svolge una duplice funzione: <strong>classificatoria</strong> (ordina le fattispecie) ed <strong>ermeneutica</strong> (guida l'interpretazione teleologica e l'accertamento dell'offesa in concreto, in ossequio al principio di offensività)." },
        { label: "Le tecniche di tutela", body: "Il legislatore protegge i beni con tecniche diverse: reati di <strong>danno</strong> (richiedono la lesione effettiva) e di <strong>pericolo</strong>, concreto (da accertare) o presunto/astratto; reati <strong>monoffensivi</strong> e <strong>plurioffensivi</strong>; reati a tutela anticipata (attentato) rispetto a beni di rango primario." },
      ],
      giurisprudenza: [],
      eccezioni: [],
    },
    sintesi: [
      "La parte speciale descrive le singole fattispecie ordinate per bene giuridico.",
      "Summa divisio: delitti e contravvenzioni (art. 39 c.p.), distinti dalla specie di pena (art. 17).",
      "Il bene giuridico ha funzione classificatoria ed ermeneutica.",
      "Tecniche di tutela: reati di danno e di pericolo (concreto o presunto).",
      "Distinzione tra reati monoffensivi e plurioffensivi.",
    ],
    esempi: [
      { titolo: "Danno o pericolo?", testo: "Se Marco spara e uccide la vittima, risponde di omicidio (575), reato di <strong>danno</strong> perché richiede l'evento morte come lesione effettiva del bene. Se invece Marco fa esplodere un ordigno in una piazza affollata, la strage (422) e l'incendio (423) sono reati di <strong>pericolo comune</strong>: puniscono la sola messa in pericolo dell'incolumità di un numero indeterminato di persone, a prescindere dal fatto che si producano vittime effettive. La differenza sta dunque nel momento in cui la tutela penale interviene: alla lesione consumata nel danno, alla mera esposizione a rischio nel pericolo." },
    ],
    flashcards: [
      ["Qual è il criterio con cui sono ordinati i reati nel Libro II?", "Il bene giuridico tutelato: ogni Titolo raggruppa le fattispecie intorno all'interesse protetto."],
      ["Come si distinguono delitti e contravvenzioni?", "In base alla specie della pena (art. 39 richiama l'art. 17): reclusione/multa per i delitti, arresto/ammenda per le contravvenzioni."],
      ["Che cosa sono i reati di pericolo presunto?", "Reati in cui la pericolosità della condotta è presunta dalla legge (iuris et de iure), senza necessità di accertamento in concreto."],
    ],
    comparativa: null,
    quiz: [
      { q: "Il criterio principale di classificazione dei reati nel Libro II del codice è:", opts: ["La gravità della pena comminata", "Il bene giuridico protetto", "Il regime di procedibilità", "La qualifica del soggetto attivo"], correct: 1, why: "I Titoli del Libro II sono ordinati secondo il bene giuridico protetto (funzione classificatoria). La gravità della pena rileva per la distinzione delitto/contravvenzione ma non ordina i Titoli; procedibilità e soggetto attivo sono profili ulteriori.", fonte: "Parte speciale, Cap. 1 (art. 39)", difficulty: 2, commonError: "Confondere il criterio ordinatore (bene giuridico) con la distinzione delitti/contravvenzioni (specie di pena)." },
      { q: "La distinzione tra delitti e contravvenzioni (art. 39 c.p.) si fonda su:", opts: ["L'elemento soggettivo richiesto", "La specie della pena", "La natura del bene offeso", "La forma della condotta tipica"], correct: 1, why: "L'art. 39 rinvia all'art. 17: sono delitti i reati puniti con reclusione o multa, contravvenzioni quelli puniti con arresto o ammenda. L'elemento soggettivo differisce (dolo di regola nei delitti, dolo o colpa nelle contravvenzioni) ma è conseguenza, non criterio, della distinzione.", fonte: "Parte speciale, Cap. 1 (art. 39)", difficulty: 2, commonError: "Ritenere che il criterio distintivo sia l'elemento soggettivo anziché la specie di pena." },
      { q: "Un reato di pericolo concreto si caratterizza perché:", opts: ["La pericolosità è presunta dalla legge iuris et de iure", "Il giudice accerta in concreto la messa in pericolo", "Richiede sempre la lesione effettiva del bene", "È necessariamente un reato plurioffensivo"], correct: 1, why: "Nel pericolo concreto la messa in pericolo è elemento della fattispecie e va accertata dal giudice; nel pericolo presunto essa è presunta iuris et de iure. Il reato di danno, invece, richiede la lesione effettiva.", fonte: "Parte speciale, Cap. 1", difficulty: 3, commonError: "Confondere pericolo concreto (accertamento richiesto) e pericolo presunto (pericolosità presunta)." },
    ],
    veroFalso: [
      { aff: "La distinzione tra delitti e contravvenzioni dipende dal bene giuridico offeso.", vero: false, traccia: "Falso. La distinzione dipende dalla specie della pena (art. 39, che richiama l'art. 17): reclusione/multa per i delitti, arresto/ammenda per le contravvenzioni. Il bene giuridico è il criterio di sistemazione dei Titoli, non di distinzione tra le due categorie." },
    ],
    aperta: { q: "Il candidato illustri la funzione del bene giuridico nella parte speciale del diritto penale.", traccia: "Il bene giuridico è l'interesse protetto dalla norma incriminatrice. Svolge una funzione classificatoria, ordinando i Titoli del Libro II (dalla personalità dello Stato al patrimonio); una funzione ermeneutica, guidando l'interpretazione teleologica; e una funzione critica/garantista, poiché in un ordinamento costituzionale il reato deve offendere beni di rilievo costituzionale (principio di offensività, artt. 25 e 27 Cost.). Da esso discendono le classificazioni tra reati di danno e di pericolo e tra reati monoffensivi e plurioffensivi.", fonte: "Parte speciale, Cap. 1" },
    consigliate: ["flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 2 · PERSONALITÀ DELLO STATO =============== */
  {
    id: "ps-stato", part: "speciale", chapter: 2, chapterTitle: "I delitti contro la personalità dello Stato",
    title: "I delitti contro la personalità dello Stato", subtitle: "Attentati, terrorismo e associazioni sovversive",
    articoli: ["artt. 241-313 c.p.", "art. 270-bis c.p."], pages: [82, 88], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo I del Libro II tutela la <strong>personalità dello Stato</strong>, bene di rango primario che si presenta in una duplice dimensione: quella <strong>internazionale</strong> (indipendenza, integrità territoriale, rapporti con gli altri Stati) e quella <strong>interna</strong> (ordinamento costituzionale, ordine democratico, funzionamento degli organi). Trattandosi di beni fondamentali, il legislatore ricorre a tecniche di tutela fortemente anticipata: emblematica è la figura dell'<strong>attentato</strong>, che punisce già gli atti diretti a ledere il bene senza attendere l'evento. Accanto agli attentati rilevano i delitti <strong>associativi</strong> con finalità di terrorismo, anche internazionale, o di eversione dell'ordine democratico (art. 270-bis), la cui nozione di finalità terroristica è precisata dall'art. 270-sexies. La giurisprudenza tende a leggere queste fattispecie in chiave di offensività, per evitare l'incriminazione di meri propositi.",
      approfondimenti: [
        { label: "I delitti di attentato", body: "Il legislatore anticipa la soglia di punibilità: è punito il compimento di <strong>atti diretti</strong> a ledere il bene, indipendentemente dall'evento e talora senza le rigorose condizioni del tentativo (idoneità e univocità ex art. 56). La giurisprudenza tende però a leggere l'attentato in chiave di offensività, richiedendo atti idonei e diretti in modo non equivoco." },
        { label: "I delitti associativi e di terrorismo", body: "L'associazione con finalità di terrorismo anche internazionale ed eversione dell'ordine democratico (270-bis) punisce chi promuove, organizza o partecipa ad associazioni che si propongono atti di violenza con dette finalità. La nozione di condotta con finalità di terrorismo è precisata dall'art. 270-sexies." },
      ],
      giurisprudenza: [
        { label: "Attentato e offensività", body: "Le Sezioni Unite e la Corte costituzionale hanno ridimensionato la portata dei reati di attentato, richiedendo che gli atti siano concretamente idonei a mettere in pericolo il bene protetto, per evitare l'incriminazione di meri propositi (principio di offensività)." },
      ],
      eccezioni: [],
    },
    sintesi: [
      "Titolo I: tutela la personalità internazionale e interna dello Stato.",
      "Tecnica dell'attentato: punibilità anticipata di atti diretti a ledere il bene.",
      "Associazioni con finalità di terrorismo ed eversione (art. 270-bis).",
      "L'art. 270-sexies definisce le condotte con finalità di terrorismo.",
      "La giurisprudenza legge l'attentato in chiave di offensività.",
    ],
    esempi: [
      { titolo: "Attentato vs tentativo", testo: "Se Marco tenta di uccidere un rivale, risponde di omicidio tentato ex art. 56: occorrono atti <em>idonei</em> e <em>diretti in modo non equivoco</em> a cagionare l'evento. Nei delitti di <strong>attentato</strong> contro la personalità dello Stato, invece, la soglia di punibilità è anticipata: basta il compimento di atti diretti a ledere il bene, senza attendere l'evento e talora senza le rigorose condizioni del tentativo. La giurisprudenza, però, per evitare di punire il mero proposito, esige comunque che gli atti siano concretamente idonei e offensivi del bene protetto." },
    ],
    flashcards: [
      ["Quale bene tutela il Titolo I del Libro II?", "La personalità dello Stato, nella dimensione internazionale (indipendenza, integrità) e interna (ordinamento costituzionale, ordine democratico)."],
      ["Che cos'è un delitto di attentato?", "Un reato a tutela anticipata: punisce il compimento di atti diretti a ledere il bene, a prescindere dall'evento e talora dai rigori del tentativo."],
      ["Cosa punisce l'art. 270-bis c.p.?", "L'associazione con finalità di terrorismo anche internazionale o di eversione dell'ordine democratico (promozione, organizzazione, partecipazione)."],
    ],
    comparativa: null,
    quiz: [
      { q: "I delitti di attentato contro la personalità dello Stato si caratterizzano per:", opts: ["Il necessario verificarsi dell'evento lesivo", "Una tutela penale fortemente anticipata", "La punibilità a titolo di colpa", "La natura contravvenzionale del fatto"], correct: 1, why: "L'attentato anticipa la soglia di punibilità al compimento di atti diretti a ledere il bene, senza attendere l'evento. La giurisprudenza li rilegge però in chiave di offensività. Sono delitti dolosi, non contravvenzioni.", fonte: "Parte speciale, Cap. 2", difficulty: 3, commonError: "Ritenere che l'attentato richieda il verificarsi dell'evento lesivo, come nei reati di danno." },
      { q: "L'art. 270-bis c.p. incrimina:", opts: ["Il singolo atto terroristico isolato dal contesto", "Le associazioni con finalità eversive", "L'apologia pubblica di un reato commesso", "Il vilipendio delle istituzioni repubblicane"], correct: 1, why: "L'art. 270-bis punisce chi promuove, costituisce, organizza, dirige o partecipa ad associazioni che si propongono il compimento di atti di violenza con finalità di terrorismo o eversione. Il singolo atto e l'apologia sono fattispecie diverse.", fonte: "Parte speciale, Cap. 2 (art. 270-bis)", difficulty: 2, commonError: "Confondere il reato associativo con la punizione del singolo atto terroristico." },
      { q: "La giurisprudenza interpreta i reati di attentato:", opts: ["Come reati di mero sospetto soggettivo", "In chiave di offensività concreta", "Come fattispecie di natura colposa", "Come illeciti meramente amministrativi"], correct: 1, why: "Per evitare l'incriminazione di meri propositi, la giurisprudenza richiede che gli atti siano concretamente idonei e diretti a mettere in pericolo il bene protetto, in ossequio al principio di offensività.", fonte: "Parte speciale, Cap. 2", difficulty: 3, commonError: "Ritenere che l'attentato punisca il mero sospetto o l'intenzione non tradotta in atti idonei." },
    ],
    veroFalso: [
      { aff: "Nei delitti di attentato la punibilità è anticipata rispetto ai comuni delitti tentati.", vero: true, traccia: "Vero. L'attentato punisce il compimento di atti diretti a ledere il bene, anticipando la soglia rispetto al tentativo (56); la giurisprudenza esige comunque atti concretamente offensivi in chiave di offensività." },
    ],
    aperta: { q: "Il candidato illustri la struttura dei delitti di attentato contro la personalità dello Stato.", traccia: "I delitti di attentato realizzano una tutela penale fortemente anticipata a beni di rango primario (indipendenza, integrità, ordine costituzionale). Sono punibili gli atti diretti a ledere il bene, indipendentemente dall'evento e talora senza le condizioni del tentativo ex art. 56. Per evitare frizioni con i principi di materialità e offensività, dottrina e giurisprudenza richiedono che gli atti siano concretamente idonei e diretti in modo non equivoco. Accanto agli attentati si collocano i delitti associativi (270-bis) e i delitti di opinione, oggetto di crescente ridimensionamento interpretativo.", fonte: "Parte speciale, Cap. 2" },
    consigliate: ["flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 3 · PUBBLICA AMMINISTRAZIONE ============== */
  {
    id: "ps-pa", part: "speciale", chapter: 3, chapterTitle: "I delitti contro la Pubblica Amministrazione",
    title: "I delitti contro la Pubblica Amministrazione", subtitle: "Peculato, concussione, corruzione, induzione indebita",
    articoli: ["artt. 314-360 c.p."], pages: [89, 105], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo II tutela il <strong>buon andamento e l'imparzialità</strong> della Pubblica Amministrazione, valori di rilievo costituzionale (art. 97 Cost.). Le figure cardine si distinguono per il tipo di condotta del pubblico agente: il <strong>peculato</strong> (314) punisce l'appropriazione di denaro o cosa mobile posseduti per ragione dell'ufficio; la <strong>concussione</strong> (317) la costrizione del privato con la minaccia di un male ingiusto; l'<strong>induzione indebita</strong> (319-quater) una pressione più tenue, con la conseguente punibilità anche dell'indotto; la <strong>corruzione</strong> il libero accordo illecito (<em>pactum sceleris</em>), nelle forme impropria (318) e propria (319). Presupposto comune è la <strong>qualifica soggettiva</strong> di pubblico ufficiale o incaricato di pubblico servizio (artt. 357-358). Va infine ricordato che l'abuso d'ufficio (art. 323) è stato abrogato dalla L. 114/2024.",
      approfondimenti: [
        { label: "Peculato e le sue figure", body: "Il peculato (314) presuppone il <strong>possesso</strong> o la disponibilità del denaro/cosa mobile altrui <em>per ragione dell'ufficio o servizio</em>, cui segue l'appropriazione. La riforma del 2024 (d.lgs. 150/2022 e L. 114/2024) ha introdotto l'art. 314-bis (indebita destinazione di denaro o cose mobili) per i casi di distrazione a un uso diverso ma pubblico, distinti dall'appropriazione. Il peculato d'uso (314 co. 2) riguarda l'uso momentaneo con restituzione." },
        { label: "Corruzione: propria, impropria, in atti giudiziari", body: "La corruzione è un reato-accordo (pactum sceleris) a concorso necessario: risponde sia il pubblico agente sia il corruttore (321). Si distingue la corruzione <strong>impropria</strong> (318, per l'esercizio delle funzioni) da quella <strong>propria</strong> (319, per un atto contrario ai doveri d'ufficio), più grave; l'art. 319-ter punisce la corruzione in atti giudiziari. La riforma Severino (2012) ha trasformato il 318 in corruzione per l'esercizio della funzione." },
      ],
      giurisprudenza: [
        { label: "Concussione, induzione e abuso d'ufficio (SS.UU. Maldera)", body: "Cass. SS.UU. 24 ottobre 2013, n. 12228 (Maldera) ha tracciato il confine tra concussione (317, costrizione: prospettazione di un male ingiusto che coarta la vittima) e induzione indebita (319-quater, induzione: pressione più tenue con prospettazione di un vantaggio, per cui l'indotto è punibile). L'abuso d'ufficio (art. 323) è stato invece <strong>abrogato</strong> dalla L. 9 agosto 2024, n. 114." },
      ],
      eccezioni: [],
    },
    sintesi: [
      "Titolo II: tutela buon andamento e imparzialità della PA (art. 97 Cost.).",
      "Peculato (314): appropriazione di denaro/cosa posseduti per ragione dell'ufficio.",
      "Concussione (317): costrizione; l'unica vittima non è punibile.",
      "Induzione indebita (319-quater): induzione; anche l'indotto è punibile.",
      "Corruzione: impropria (318) e propria (319); reato-accordo con il privato (321).",
      "Abuso d'ufficio (323): abrogato dalla L. 114/2024.",
    ],
    esempi: [
      { titolo: "Concussione, induzione, corruzione", testo: "Il pubblico ufficiale Rossi minaccia l'imprenditore Marco di ritardargli una licenza dovuta se non gli versa una somma: coartato dal timore di un danno ingiusto, Marco paga. È <strong>concussione</strong> (317) e Marco è vittima non punibile. Se invece Rossi lo persuade a pagare prospettandogli un indebito vantaggio (per esempio un'agevolazione non dovuta), si ha <strong>induzione indebita</strong> (319-quater): qui anche l'indotto Marco risponde, perché conservava un margine di scelta. Se infine Rossi e Marco si accordano liberamente sul <em>do ut des</em>, è <strong>corruzione</strong> (318 impropria o 319 propria): entrambi sono puniti (art. 321)." },
    ],
    flashcards: [
      ["Cosa presuppone il peculato (art. 314)?", "Il possesso o la disponibilità del denaro/cosa mobile altrui per ragione dell'ufficio o servizio, seguiti dall'appropriazione."],
      ["Differenza tra corruzione propria e impropria?", "L'impropria (318) è per l'esercizio delle funzioni; la propria (319), più grave, è per un atto contrario ai doveri d'ufficio."],
      ["Che fine ha fatto l'abuso d'ufficio (art. 323)?", "È stato abrogato dalla L. 9 agosto 2024, n. 114; la relativa area di illiceità penale è venuta meno."],
    ],
    comparativa: {
      titolo: "Concussione vs Induzione indebita",
      a: "Concussione (317)", b: "Induzione indebita (319-quater)",
      righe: [
        { profilo: "Condotta del pubblico agente", a: "Costrizione (minaccia di un male ingiusto)", b: "Induzione (pressione più tenue, persuasione)" },
        { profilo: "Posizione del privato", a: "Vittima: non punibile", b: "Indotto: punibile (co. 2)" },
        { profilo: "Movente del privato", a: "Evitare un danno ingiusto", b: "Conseguire un indebito vantaggio" },
      ],
    },
    quiz: [
      { q: "Il pubblico ufficiale che si appropria del denaro di cui ha il possesso per ragione dell'ufficio commette:", opts: ["Corruzione (318)", "Peculato (314)", "Concussione (317)", "Appropriazione indebita (646)"], correct: 1, why: "Il peculato (314) sanziona l'appropriazione, da parte del pubblico agente, del denaro o della cosa mobile altrui di cui abbia il possesso per ragione dell'ufficio o servizio. Se l'agente fosse un privato si avrebbe appropriazione indebita (646).", fonte: "Parte speciale, Cap. 3 (art. 314)", difficulty: 2, commonError: "Applicare al pubblico ufficiale l'appropriazione indebita anziché il peculato." },
      { q: "La differenza tra concussione (317) e induzione indebita (319-quater) sta:", opts: ["Nella diversa qualifica soggettiva dell'agente pubblico", "Nel tipo di pressione e nella sorte del privato", "Nell'oggetto materiale della condotta illecita", "Nel bene giuridico protetto dalle due norme"], correct: 1, why: "Secondo le SS.UU. Maldera la concussione richiede la costrizione (male ingiusto prospettato: la vittima non è punibile); l'induzione indebita una pressione più tenue con prospettazione di un vantaggio, per cui l'indotto è punibile (co. 2). Il bene e la qualifica coincidono.", fonte: "Parte speciale, Cap. 3 (artt. 317, 319-quater)", difficulty: 4, commonError: "Ritenere che nell'induzione indebita, come nella concussione, il privato sia sempre vittima non punibile." },
      { q: "La corruzione propria (art. 319 c.p.) si distingue dall'impropria (318) perché:", opts: ["Ha per oggetto un atto contrario ai doveri", "Punisce il solo privato corruttore, non l'agente", "Integra una mera contravvenzione punita con arresto", "Prescinde del tutto dall'accordo tra le parti"], correct: 0, why: "Nella corruzione propria (319) il pactum ha per oggetto un atto contrario ai doveri d'ufficio ed è più grave; nell'impropria (318) l'accordo è per l'esercizio delle funzioni. Entrambe sono reati-accordo che puniscono anche il corruttore (321).", fonte: "Parte speciale, Cap. 3 (artt. 318, 319)", difficulty: 3, commonError: "Invertire corruzione propria (atto contrario ai doveri) e impropria (esercizio della funzione)." },
    ],
    veroFalso: [
      { aff: "Nell'induzione indebita a dare o promettere utilità (art. 319-quater) è punibile anche il privato indotto.", vero: true, traccia: "Vero. A differenza della concussione (dove il privato è vittima non punibile), l'art. 319-quater co. 2 punisce anche chi dà o promette denaro o altra utilità, essendo l'induzione una pressione più tenue che lascia margine di autodeterminazione all'indotto (SS.UU. Maldera)." },
    ],
    aperta: { q: "Il candidato distingua concussione, induzione indebita e corruzione.", traccia: "Concussione (317): il pubblico agente, con costrizione (minaccia di un male ingiusto), coarta il privato-vittima, che non è punibile. Induzione indebita (319-quater): il pubblico agente induce con una pressione più tenue, prospettando un indebito vantaggio, sicché l'indotto conserva margini di scelta ed è punibile (co. 2). Corruzione (318 impropria, 319 propria): reato-accordo a concorso necessario, in cui pubblico agente e privato si accordano liberamente sul do ut des (pactum sceleris), entrambi puniti (321). Il criterio distintivo è il tipo di pressione (costrizione/induzione/accordo paritario) e la conseguente punibilità del privato. Il confine tra 317 e 319-quater è tracciato dalle SS.UU. Maldera (2013). L'abuso d'ufficio (323) è stato abrogato dalla L. 114/2024.", fonte: "Parte speciale, Cap. 3" },
    consigliate: ["comparativa", "flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 4 · AMMINISTRAZIONE DELLA GIUSTIZIA ======= */
  {
    id: "ps-giustizia", part: "speciale", chapter: 4, chapterTitle: "I delitti contro l'amministrazione della giustizia",
    title: "I delitti contro l'amministrazione della giustizia", subtitle: "Calunnia, falsa testimonianza, favoreggiamento",
    articoli: ["artt. 361-401 c.p."], pages: [106, 117], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo III tutela il corretto funzionamento della <strong>giurisdizione</strong>, cioè l'interesse dello Stato al retto svolgimento dell'attività giudiziaria. Le figure centrali colpiscono chi svia o inquina tale attività: la <strong>calunnia</strong> (368) punisce chi incolpa davanti all'autorità una persona determinata che sa innocente ed è reato plurioffensivo, ledendo anche l'onore e la libertà dell'incolpato; la <strong>falsa testimonianza</strong> (372) colpisce il testimone che afferma il falso, nega il vero o tace, in tutto o in parte, ciò che sa. Il <strong>favoreggiamento</strong> può essere personale (378: aiutare taluno a eludere le investigazioni o a sottrarsi alle ricerche dopo un reato) o reale (379: aiutare ad assicurare il profitto del reato). Opera infine la causa di non punibilità dell'art. 384, per chi agisce costretto dalla necessità di salvare sé o un prossimo congiunto da un grave nocumento nella libertà o nell'onore.",
      approfondimenti: [
        { label: "Calunnia e simulazione di reato", body: "La calunnia (368) richiede l'incolpazione di una persona <strong>determinata</strong> che si sa innocente, davanti all'autorità; è a dolo generico con la consapevolezza dell'innocenza. Va distinta dalla simulazione di reato (367), in cui si denuncia un reato mai avvenuto (o si simulano tracce) <em>senza</em> incolpare una persona determinata. L'autocalunnia (369) punisce chi incolpa se stesso." },
        { label: "Favoreggiamento e cause di non punibilità", body: "Il favoreggiamento personale (378) punisce chi, dopo un reato, aiuta taluno a eludere le investigazioni o a sottrarsi alle ricerche. Opera però l'art. 384: non è punibile chi ha commesso il fatto (favoreggiamento, falsa testimonianza, ecc.) per esservi stato costretto dalla necessità di salvare sé o un prossimo congiunto da un grave e inevitabile nocumento nella libertà o nell'onore." },
      ],
      giurisprudenza: [
        { label: "Falsa testimonianza e diritto al silenzio", body: "La Corte costituzionale e le Sezioni Unite hanno esteso le garanzie del non tenuto a deporre: non è punibile per falsa testimonianza chi avrebbe dovuto essere avvertito della facoltà di astenersi o del rischio di autoincriminazione (nemo tenetur se detegere), con applicazione dell'art. 384." },
      ],
      eccezioni: [],
    },
    sintesi: [
      "Titolo III: tutela il funzionamento della giurisdizione.",
      "Calunnia (368): incolpare un innocente sapendolo tale, davanti all'autorità.",
      "Simulazione di reato (367): denunciare un reato inesistente senza incolpare qualcuno.",
      "Falsa testimonianza (372): affermare il falso, negare il vero o tacere.",
      "Favoreggiamento personale (378) e reale (379); non punibilità ex art. 384.",
    ],
    esempi: [
      { titolo: "Calunnia o simulazione?", testo: "Anna denuncia il vicino Marco per un furto, pur sapendo con certezza che è del tutto estraneo al fatto: incolpando davanti all'autorità una persona determinata che sa innocente, commette <strong>calunnia</strong> (368), reato che offende sia la giustizia sia l'onore di Marco. Se invece Anna denuncia un furto mai avvenuto, o dissemina tracce di un reato inesistente, senza però accusare alcuno in particolare, risponde di <strong>simulazione di reato</strong> (367). Il discrimine è proprio l'incolpazione di un soggetto individuato." },
    ],
    flashcards: [
      ["Cosa richiede la calunnia (art. 368)?", "Incolpare, davanti all'autorità, una persona determinata di un reato, sapendola innocente (dolo con consapevolezza dell'innocenza)."],
      ["In cosa consiste la falsa testimonianza (art. 372)?", "Nel testimone che afferma il falso, nega il vero o tace, in tutto o in parte, ciò che sa intorno ai fatti su cui è interrogato."],
      ["Cosa prevede l'art. 384 c.p.?", "Una causa di non punibilità per chi commette il fatto (favoreggiamento, falsa testimonianza...) costretto dalla necessità di salvare sé o un prossimo congiunto da grave nocumento a libertà o onore."],
    ],
    comparativa: {
      titolo: "Calunnia vs Simulazione di reato",
      a: "Calunnia (368)", b: "Simulazione di reato (367)",
      righe: [
        { profilo: "Oggetto dell'accusa", a: "Persona determinata che si sa innocente", b: "Reato inesistente, senza incolpare qualcuno" },
        { profilo: "Bene aggredito", a: "Giustizia e onore/libertà dell'incolpato", b: "Solo la giustizia (attività inquirente)" },
        { profilo: "Dolo", a: "Consapevolezza dell'innocenza dell'accusato", b: "Coscienza che il reato non è avvenuto" },
      ],
    },
    quiz: [
      { q: "Integra il delitto di calunnia (art. 368 c.p.) chi:", opts: ["Denuncia un reato inesistente senza accusare nessuno", "Incolpa una persona che sa innocente", "Tace come testimone il vero che conosce", "Aiuta il reo a sottrarsi alle ricerche"], correct: 1, why: "La calunnia esige l'incolpazione di una persona determinata che si sa innocente, davanti all'autorità. La denuncia di reato inesistente senza incolpare è simulazione (367); il tacere del testimone è falsa testimonianza (372); l'aiuto alla fuga è favoreggiamento (378).", fonte: "Parte speciale, Cap. 4 (art. 368)", difficulty: 2, commonError: "Confondere calunnia (incolpazione di persona determinata) e simulazione di reato (nessuna incolpazione)." },
      { q: "La falsa testimonianza (art. 372) può realizzarsi:", opts: ["Solo affermando attivamente una circostanza falsa", "Affermando il falso, negando il vero o tacendo", "Soltanto in presenza di un dolo specifico di danno", "Esclusivamente nelle cause di natura civile"], correct: 1, why: "L'art. 372 prevede tre condotte alternative: affermare il falso, negare il vero, tacere in tutto o in parte ciò che si sa. Il reato è a dolo generico e rileva in ogni sede in cui si assume l'ufficio di testimone.", fonte: "Parte speciale, Cap. 4 (art. 372)", difficulty: 3, commonError: "Ritenere che la falsa testimonianza si integri solo con la menzogna attiva e non anche con la reticenza." },
      { q: "L'art. 384 c.p. rende non punibile chi commette il fatto per:", opts: ["Un errore inevitabile sulla legge penale", "Salvare sé o un congiunto da grave nocumento", "Motivi di natura economica o patrimoniale", "L'ordine vincolante di un superiore gerarchico"], correct: 1, why: "L'art. 384 co. 1 esclude la punibilità per taluni delitti contro la giustizia quando il fatto è commesso per la necessità di salvare sé medesimo o un prossimo congiunto da un grave e inevitabile nocumento nella libertà o nell'onore.", fonte: "Parte speciale, Cap. 4 (art. 384)", difficulty: 3, commonError: "Ignorare che l'esimente copre anche il prossimo congiunto, non solo l'agente." },
    ],
    veroFalso: [
      { aff: "La simulazione di reato (art. 367) richiede l'incolpazione di una persona determinata.", vero: false, traccia: "Falso. La simulazione di reato consiste nel denunciare un reato mai avvenuto o nel simularne le tracce, senza incolpare alcuno. Se si incolpa una persona determinata sapendola innocente si ha calunnia (368)." },
    ],
    aperta: { q: "Il candidato distingua calunnia e simulazione di reato.", traccia: "Entrambe offendono l'amministrazione della giustizia sviando l'attività inquirente. La calunnia (368) presuppone l'incolpazione, davanti all'autorità, di una persona determinata che si sa innocente: è plurioffensiva, ledendo anche l'onore e la libertà dell'incolpato, e richiede il dolo con consapevolezza dell'innocenza. La simulazione di reato (367) consiste invece nel denunciare o simulare le tracce di un reato mai commesso, senza indirizzare l'accusa verso una persona determinata: offende la sola giustizia. Il discrimine è dunque l'incolpazione di un soggetto individuato.", fonte: "Parte speciale, Cap. 4" },
    consigliate: ["comparativa", "flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 5 · SENTIMENTO RELIGIOSO E DEFUNTI ======== */
  {
    id: "ps-religioso", part: "speciale", chapter: 5, chapterTitle: "I delitti contro il sentimento religioso e la pietà dei defunti",
    title: "I delitti contro il sentimento religioso e la pietà dei defunti", subtitle: "Confessioni religiose e pietà verso i morti",
    articoli: ["artt. 402-413 c.p."], pages: [118, 118], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo IV tutela due beni ideali e collettivi: il <strong>sentimento religioso</strong> e la <strong>pietà dei defunti</strong>. Il sistema originario del codice accordava una tutela privilegiata alla religione cattolica, quale religione dello Stato; con la Corte cost. n. 168/2005 e la L. 85/2006 tale disparità è stata rimossa, sicché oggi tutte le confessioni religiose ricevono protezione <strong>paritaria</strong>, in attuazione dei principi di uguaglianza e libertà religiosa (artt. 3, 8 e 19 Cost.). Le fattispecie residue (403-405) puniscono il vilipendio di una confessione mediante offesa a chi la professa o alle cose di culto e il turbamento delle funzioni religiose. Distinti sono i delitti contro la pietà dei defunti (407 ss.), che colpiscono la violazione di sepolcro, il vilipendio e la sottrazione di cadavere: qui l'oggetto materiale è il cadavere o le ceneri, ma il bene protetto ha natura ideale e collettiva, non patrimoniale.",
      approfondimenti: [
        { label: "Tutela paritaria delle confessioni", body: "Corte cost. n. 168/2005 e la L. 85/2006 hanno superato la tutela privilegiata della religione cattolica: oggi tutte le confessioni religiose ricevono uguale protezione (art. 3 e 8 Cost.). Le fattispecie (403 vilipendio di una confessione mediante offesa a chi la professa; 404 offese a cose oggetto di culto; 405 turbamento di funzioni religiose) sono a tutela del sentimento religioso individuale e collettivo." },
        { label: "I delitti contro la pietà dei defunti", body: "Tutelano il sentimento di pietà verso i morti: violazione di sepolcro (407), violazione di cadavere e vilipendio (410), distruzione o sottrazione di cadavere (411). L'oggetto materiale è il cadavere o le ceneri; il bene protetto è di natura collettiva e ideale, non patrimoniale." },
      ],
      giurisprudenza: [],
      eccezioni: [],
    },
    sintesi: [
      "Titolo IV: tutela il sentimento religioso e la pietà dei defunti.",
      "Dopo la L. 85/2006 le confessioni religiose sono protette in modo paritario.",
      "Vilipendio di confessione mediante offesa a chi la professa (403) e a cose di culto (404).",
      "Turbamento di funzioni religiose del culto (405).",
      "Pietà dei defunti: violazione di sepolcro (407), di cadavere (410-411).",
    ],
    esempi: [
      { titolo: "Tutela paritaria", testo: "Prima del 2006, se Marco vilipendeva pubblicamente la religione cattolica commetteva reato, ma un'analoga offesa a un'altra confessione restava impunita, in ragione della tutela privilegiata della religione dello Stato. Oggi, dopo la L. 85/2006, l'offesa recata pubblicamente a <strong>qualunque</strong> confessione religiosa, mediante vilipendio di chi la professa, è punita allo stesso modo: la scelta attua i principi di uguaglianza (art. 3 Cost.) e di libertà religiosa (artt. 8 e 19 Cost.), superando ogni discriminazione tra i culti." },
    ],
    flashcards: [
      ["Come sono tutelate oggi le confessioni religiose?", "In modo paritario: dopo Corte cost. 168/2005 e L. 85/2006 è venuta meno la tutela privilegiata della religione cattolica."],
      ["Cosa tutelano i delitti contro la pietà dei defunti?", "Il sentimento collettivo di pietà verso i morti: violazione di sepolcro (407), di cadavere, distruzione o sottrazione di cadavere (410-411)."],
      ["Che cosa punisce l'art. 405 c.p.?", "Il turbamento di funzioni, cerimonie o pratiche religiose del culto, compiute con l'assistenza di un ministro o in luogo di culto."],
    ],
    comparativa: null,
    quiz: [
      { q: "Dopo la riforma del 2006, la tutela penale delle confessioni religiose è:", opts: ["Riservata alla sola religione cattolica", "Paritaria tra tutte le confessioni", "Integralmente abrogata dal legislatore", "Ridotta a mero illecito amministrativo"], correct: 1, why: "Corte cost. 168/2005 e la L. 85/2006 hanno superato la tutela privilegiata della religione dello Stato, estendendo una protezione uguale a tutte le confessioni religiose (artt. 3, 8, 19 Cost.).", fonte: "Parte speciale, Cap. 5", difficulty: 2, commonError: "Ritenere ancora vigente la tutela privilegiata della sola religione cattolica." },
      { q: "I delitti contro la pietà dei defunti (artt. 407 ss.) tutelano:", opts: ["Il patrimonio ereditario dei congiunti", "Il sentimento di pietà verso i morti", "La salute e l'igiene pubblica", "L'ordine e la sicurezza pubblica"], correct: 1, why: "Il bene protetto è il sentimento ideale e collettivo di pietà verso i defunti; l'oggetto materiale (cadavere, sepolcro, ceneri) non ha rilievo patrimoniale. La salute pubblica è tutelata da altre norme.", fonte: "Parte speciale, Cap. 5", difficulty: 3, commonError: "Attribuire natura patrimoniale ai delitti contro la pietà dei defunti." },
      { q: "L'art. 405 c.p. punisce:", opts: ["Il vilipendio di un cadavere umano sepolto", "Il turbamento delle funzioni del culto", "La bestemmia pronunciata contro la divinità", "La violazione di un sepolcro o di una tomba"], correct: 1, why: "L'art. 405 sanziona chi turba o impedisce funzioni, cerimonie o pratiche religiose del culto svolte con l'assistenza di un ministro o in luogo di culto. Il vilipendio di cadavere è nel 410, la violazione di sepolcro nel 407.", fonte: "Parte speciale, Cap. 5 (art. 405)", difficulty: 3, commonError: "Confondere il turbamento delle funzioni (405) con le fattispecie sui defunti." },
    ],
    veroFalso: [
      { aff: "Oggi solo la religione cattolica gode di tutela penale come confessione religiosa.", vero: false, traccia: "Falso. Dopo Corte cost. 168/2005 e la L. 85/2006 la tutela è paritaria: tutte le confessioni religiose ricevono uguale protezione, in coerenza con i principi di uguaglianza e libertà religiosa (artt. 3, 8, 19 Cost.)." },
    ],
    aperta: { q: "Il candidato illustri l'evoluzione della tutela del sentimento religioso.", traccia: "Nel sistema originario del codice la religione cattolica, quale religione dello Stato, godeva di tutela privilegiata (vilipendio della religione dello Stato). Con la Corte cost. n. 168/2005 e la L. 85/2006 tale disparità è stata rimossa: le confessioni religiose sono ora protette in modo paritario, in attuazione degli artt. 3, 8 e 19 Cost. Le fattispecie residue (403-405) puniscono il vilipendio di una confessione mediante offesa a chi la professa o alle cose di culto e il turbamento delle funzioni religiose, a tutela del sentimento religioso individuale e collettivo. Distinti sono i delitti contro la pietà dei defunti (407 ss.).", fonte: "Parte speciale, Cap. 5" },
    consigliate: ["flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 6 · ORDINE PUBBLICO ====================== */
  {
    id: "ps-ordine", part: "speciale", chapter: 6, chapterTitle: "I delitti contro l'ordine pubblico",
    title: "I delitti contro l'ordine pubblico", subtitle: "Associazione per delinquere e associazione mafiosa",
    articoli: ["artt. 414-421 c.p.", "artt. 416, 416-bis c.p."], pages: [119, 123], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo V tutela l'<strong>ordine pubblico</strong>, inteso come pace e sicurezza della collettività, cioè il tranquillo e ordinato svolgimento della vita sociale. Le figure cardine sono i <strong>reati associativi</strong>, che puniscono il <em>pactum</em> associativo in sé, come reati autonomi e di pericolo distinti dai reati-fine. L'<strong>associazione per delinquere</strong> (416) richiede tre o più persone, un vincolo stabile e permanente e un programma criminoso indeterminato di più delitti; l'<strong>associazione di tipo mafioso</strong> (416-bis) aggiunge il <em>quid pluris</em> del <strong>metodo mafioso</strong>, ossia l'avvalersi della forza di intimidazione del vincolo e della condizione di assoggettamento e omertà che ne deriva. La giurisprudenza (SS.UU. Mannino) ammette inoltre il concorso esterno in associazione mafiosa. Rilevano infine l'istigazione a delinquere (414) e la devastazione e saccheggio (419).",
      approfondimenti: [
        { label: "Associazione per delinquere (416)", body: "Richiede: <strong>tre o più</strong> associati; un <strong>vincolo stabile</strong> e permanente (non l'accordo occasionale del concorso ex 110); un <strong>programma criminoso indeterminato</strong> di più delitti; una minima organizzazione. È reato di pericolo, autonomo rispetto ai reati-fine, che si punisce a prescindere dalla loro commissione. Distinte le figure di promotori/organizzatori e semplici partecipi." },
        { label: "Associazione mafiosa (416-bis)", body: "Il quid pluris è il <strong>metodo mafioso</strong>: l'associazione si avvale della forza di intimidazione del vincolo associativo e della condizione di assoggettamento e omertà che ne deriva, per commettere delitti, acquisire attività economiche, appalti, o condizionare il voto. La giurisprudenza (mafie 'delocalizzate', silenti) discute se il metodo debba manifestarsi in concreto sul territorio." },
      ],
      giurisprudenza: [
        { label: "Concorso esterno in associazione mafiosa", body: "Le Sezioni Unite (Demitry 1994; Mannino 2005; Carnevale) hanno riconosciuto il concorso esterno (110-416-bis) per chi, pur non inserito stabilmente, fornisce un contributo concreto, specifico e causalmente rilevante alla conservazione o al rafforzamento dell'associazione." },
      ],
      eccezioni: [],
    },
    sintesi: [
      "Titolo V: tutela l'ordine pubblico (pace e sicurezza collettiva).",
      "Associazione per delinquere (416): tre o più persone, vincolo stabile, programma di più delitti.",
      "Reato associativo autonomo e di pericolo, distinto dai reati-fine.",
      "Associazione mafiosa (416-bis): metodo mafioso (intimidazione, assoggettamento, omertà).",
      "Concorso esterno (110-416-bis): contributo concreto e causale (SS.UU. Mannino).",
    ],
    esempi: [
      { titolo: "Concorso o associazione?", testo: "Marco, Anna e un complice si accordano per rapinare una singola banca e, compiuto il colpo, si separano definitivamente: rispondono in <strong>concorso</strong> (110) nell'unica rapina, poiché l'accordo era occasionale e circoscritto. Se invece i tre costituiscono un sodalizio stabile e organizzato, con ruoli e mezzi, per commettere una serie indeterminata di rapine future, rispondono anche di <strong>associazione per delinquere</strong> (416): reato autonomo e di pericolo che punisce il <em>pactum</em> associativo in sé, a prescindere dai reati-fine effettivamente commessi." },
    ],
    flashcards: [
      ["Quali sono gli elementi dell'associazione per delinquere (416)?", "Tre o più associati, vincolo stabile e permanente, programma criminoso indeterminato di più delitti, minima organizzazione."],
      ["Cosa distingue l'associazione mafiosa (416-bis)?", "Il metodo mafioso: forza di intimidazione del vincolo associativo, con assoggettamento e omertà di chi vi è sottoposto."],
      ["Cos'è il concorso esterno in associazione mafiosa?", "Il contributo concreto, specifico e causalmente rilevante fornito da chi, non stabilmente inserito, rafforza o conserva l'associazione (110-416-bis)."],
    ],
    comparativa: {
      titolo: "Associazione per delinquere vs Concorso di persone",
      a: "Associazione (416)", b: "Concorso di persone (110)",
      righe: [
        { profilo: "Vincolo", a: "Stabile e permanente", b: "Occasionale, per il singolo reato" },
        { profilo: "Programma", a: "Serie indeterminata di delitti", b: "Uno o più reati determinati" },
        { profilo: "Autonomia", a: "Reato autonomo, punibile a prescindere dai reati-fine", b: "Accede al reato commesso" },
      ],
    },
    quiz: [
      { q: "L'associazione per delinquere (art. 416) richiede, tra l'altro:", opts: ["Almeno due persone associate in modo stabile", "Almeno tre persone e più delitti programmati", "Un solo reato determinato da commettere insieme", "L'uso di armi da parte del sodalizio criminale"], correct: 1, why: "L'art. 416 esige tre o più persone, un vincolo stabile e un programma criminoso indeterminato di più delitti. Con due persone o per un solo reato determinato si ha, di regola, mero concorso (110).", fonte: "Parte speciale, Cap. 6 (art. 416)", difficulty: 2, commonError: "Ritenere sufficienti due persone o un unico reato programmato per l'associazione." },
      { q: "L'elemento che qualifica l'associazione mafiosa (416-bis) è:", opts: ["Il numero minimo di associati richiesto dalla norma", "Il metodo mafioso di intimidazione e omertà", "Il ricorso sistematico all'uso di armi da fuoco", "Il perseguimento di un fine di lucro patrimoniale"], correct: 1, why: "Il 416-bis si connota per l'avvalersi della forza di intimidazione del vincolo associativo e della condizione di assoggettamento e omertà che ne deriva; è questo il quid pluris rispetto all'associazione per delinquere comune.", fonte: "Parte speciale, Cap. 6 (art. 416-bis)", difficulty: 3, commonError: "Individuare la specialità del 416-bis nel numero degli associati o nell'uso di armi anziché nel metodo mafioso." },
      { q: "L'associazione per delinquere si distingue dal concorso di persone perché:", opts: ["Punisce un unico reato-fine già determinato", "Esige un vincolo stabile e delitti indeterminati", "Non è di per sé una condotta penalmente punibile", "Richiede sempre la premeditazione dei singoli reati"], correct: 1, why: "L'associazione (416) richiede un vincolo permanente e un programma indeterminato di più delitti ed è reato autonomo; il concorso (110) presuppone l'accordo occasionale su reati determinati e accede al reato commesso.", fonte: "Parte speciale, Cap. 6 (artt. 110, 416)", difficulty: 3, commonError: "Non cogliere la stabilità del vincolo e l'indeterminatezza del programma quali tratti distintivi dell'associazione." },
    ],
    veroFalso: [
      { aff: "L'associazione per delinquere è punibile solo se vengono commessi i reati-fine.", vero: false, traccia: "Falso. L'associazione per delinquere (416) è reato autonomo e di pericolo: si consuma con la costituzione del sodalizio stabile finalizzato a commettere più delitti, indipendentemente dall'effettiva realizzazione dei reati-fine, che concorrono materialmente." },
    ],
    aperta: { q: "Il candidato distingua l'associazione per delinquere dal concorso di persone nel reato.", traccia: "Il concorso di persone (110) presuppone un accordo occasionale, funzionale alla realizzazione di uno o più reati determinati, e accede al reato commesso. L'associazione per delinquere (416) è invece reato autonomo e di pericolo, che si fonda su un vincolo stabile e permanente tra tre o più persone, su un programma criminoso indeterminato di più delitti e su una minima struttura organizzativa; si consuma con la costituzione del sodalizio, a prescindere dai reati-fine (che concorrono). L'associazione mafiosa (416-bis) aggiunge il metodo mafioso quale elemento tipizzante. La giurisprudenza distingue inoltre partecipazione e concorso esterno.", fonte: "Parte speciale, Cap. 6" },
    consigliate: ["comparativa", "flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 7 · INCOLUMITÀ PUBBLICA ================== */
  {
    id: "ps-incolumita", part: "speciale", chapter: 7, chapterTitle: "I delitti contro l'incolumità pubblica",
    title: "I delitti contro l'incolumità pubblica", subtitle: "Strage, incendio, disastro e reati di pericolo comune",
    articoli: ["artt. 422-452 c.p."], pages: [124, 127], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo VI tutela l'<strong>incolumità pubblica</strong>, ossia la vita e l'integrità fisica di un numero <em>indeterminato</em> di persone, e non del singolo. Proprio per questo si tratta in prevalenza di <strong>reati di pericolo comune</strong>, in cui l'offesa consiste nella messa in pericolo della collettività. La figura più grave è la <strong>strage</strong> (422): punisce chi, con dolo specifico di uccidere, compie atti tali da porre in pericolo la pubblica incolumità; la morte di taluno non è elemento costitutivo, ma se ne deriva si applica l'ergastolo. Alla stessa logica rispondono l'<strong>incendio</strong> (423), l'inondazione e i vari <strong>disastri</strong> (ferroviario 430, crollo o altro disastro doloso 434). Il c.d. disastro innominato del 434, fondato su una clausola aperta, è stato salvato dalla Corte cost. n. 327/2008 attraverso un'interpretazione tassativizzante.",
      approfondimenti: [
        { label: "La strage (422)", body: "Punisce chi, al fine di uccidere, compie atti tali da porre in pericolo la pubblica incolumità. È reato di pericolo con <strong>dolo specifico</strong> (fine di uccidere): la morte di persone non è elemento costitutivo, ma se ne deriva la morte di taluno si applica l'ergastolo. Il bene protetto è collettivo (l'incolumità di un numero indeterminato di persone), non la vita del singolo." },
        { label: "Disastro innominato (434)", body: "L'art. 434 punisce il crollo di costruzioni o <strong>altro disastro</strong> doloso: la clausola aperta ('altro disastro') ha posto problemi di determinatezza. La Corte cost. (n. 327/2008) ha salvato la norma leggendola come riferita a eventi di straordinaria gravità e complessità, con pericolo per la pubblica incolumità, così tipizzando il c.d. disastro innominato (usato anche per disastri ambientali prima degli ecoreati del 2015)." },
      ],
      giurisprudenza: [
        { label: "Disastro innominato e ambiente", body: "Prima dell'introduzione dei delitti ambientali (L. 68/2015), la giurisprudenza (caso Eternit) ha utilizzato l'art. 434 per reprimere gravi contaminazioni; la Corte cost. 327/2008 ne ha precisato i confini in chiave di determinatezza e offensività." },
      ],
      eccezioni: [],
    },
    sintesi: [
      "Titolo VI: tutela l'incolumità pubblica (vita/integrità di più persone indeterminate).",
      "Prevalgono i reati di pericolo comune.",
      "Strage (422): atti che pongono in pericolo la pubblica incolumità, con fine di uccidere.",
      "Incendio (423), disastro ferroviario (430), crollo e altro disastro doloso (434).",
      "Disastro innominato (434): clausola aperta salvata da Corte cost. 327/2008.",
    ],
    esempi: [
      { titolo: "Strage o omicidio plurimo?", testo: "Se Marco spara mirando a due rivali determinati e li uccide, risponde di omicidio plurimo, reato di danno contro la vita di soggetti individuati. Se invece Marco fa esplodere un ordigno in una piazza affollata, con il fine di uccidere ma esponendo a rischio un numero indeterminato di passanti, commette <strong>strage</strong> (422): qui il bene offeso è l'<em>incolumità pubblica</em>, non la vita dei singoli, e il reato si consuma con la sola messa in pericolo della collettività. L'eventuale morte di taluno non è elemento costitutivo, ma comporta l'applicazione dell'ergastolo." },
    ],
    flashcards: [
      ["Qual è il bene tutelato dal Titolo VI?", "L'incolumità pubblica: la vita e l'integrità di un numero indeterminato di persone."],
      ["Che tipo di reato è la strage (422)?", "Un reato di pericolo comune a dolo specifico (fine di uccidere): punisce gli atti che pongono in pericolo la pubblica incolumità."],
      ["Cos'è il disastro innominato (art. 434)?", "L'altro disastro doloso: clausola aperta riferita a eventi di eccezionale gravità con pericolo per l'incolumità pubblica (Corte cost. 327/2008)."],
    ],
    comparativa: null,
    quiz: [
      { q: "La strage (art. 422 c.p.) è configurata come:", opts: ["Reato di danno contro la singola vittima", "Reato di pericolo con dolo di uccidere", "Reato colposo contro l'incolumità pubblica", "Contravvenzione punita con l'arresto"], correct: 1, why: "La strage punisce gli atti diretti a porre in pericolo la pubblica incolumità compiuti al fine di uccidere: è reato di pericolo comune a dolo specifico. La morte di taluno non è elemento costitutivo ma aggrava la pena (ergastolo).", fonte: "Parte speciale, Cap. 7 (art. 422)", difficulty: 3, commonError: "Trattare la strage come omicidio plurimo (reato di danno) anziché come reato di pericolo per l'incolumità pubblica." },
      { q: "Il bene giuridico tutelato dai delitti del Titolo VI è:", opts: ["Il patrimonio economico della collettività", "L'incolumità di persone indeterminate", "L'onore e la reputazione della vittima", "La fede pubblica nei documenti ufficiali"], correct: 1, why: "I delitti contro l'incolumità pubblica proteggono la vita e l'integrità di una collettività indeterminata di persone, non del singolo; per questo sono per lo più reati di pericolo comune.", fonte: "Parte speciale, Cap. 7", difficulty: 2, commonError: "Ricondurre questi reati alla tutela del singolo anziché della collettività indeterminata." },
      { q: "L'art. 434 c.p. (crollo o altro disastro) è stato ritenuto conforme alla Costituzione a condizione che:", opts: ["Si applichi ai soli crolli di edifici e costruzioni", "Riguardi eventi di eccezionale gravità e pericolo", "Richieda in ogni caso un dolo specifico di danno", "Sia trasformato in un mero illecito amministrativo"], correct: 1, why: "Corte cost. 327/2008 ha salvato la clausola aperta 'altro disastro' interpretandola come riferita a eventi di straordinaria gravità e complessità, connotati da pericolo per la pubblica incolumità, così soddisfacendo determinatezza e offensività.", fonte: "Parte speciale, Cap. 7 (art. 434)", difficulty: 4, commonError: "Ignorare l'interpretazione tassativizzante della Corte costituzionale sul disastro innominato." },
    ],
    veroFalso: [
      { aff: "Nella strage la morte di una o più persone è elemento costitutivo del reato.", vero: false, traccia: "Falso. La strage (422) è reato di pericolo: si consuma con il compimento di atti che pongono in pericolo la pubblica incolumità, al fine di uccidere. La morte effettiva di taluno non è elemento costitutivo, ma comporta l'applicazione dell'ergastolo." },
    ],
    aperta: { q: "Il candidato illustri la categoria dei reati di pericolo comune e la fattispecie di strage.", traccia: "I delitti contro l'incolumità pubblica (Titolo VI) tutelano la vita e l'integrità di un numero indeterminato di persone e sono per lo più reati di pericolo comune, in cui l'offesa consiste nella messa in pericolo della collettività. La strage (422) ne è espressione: punisce chi, al fine di uccidere, compie atti tali da porre in pericolo la pubblica incolumità; è reato di pericolo a dolo specifico, in cui la morte di taluno non è elemento costitutivo ma aggravante (ergastolo). Alla stessa logica rispondono incendio (423) e i disastri (430, 434), con il problema di determinatezza del disastro innominato risolto da Corte cost. 327/2008.", fonte: "Parte speciale, Cap. 7" },
    consigliate: ["flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 8 · AMBIENTE ============================= */
  {
    id: "ps-ambiente", part: "speciale", chapter: 8, chapterTitle: "I delitti contro l'ambiente",
    title: "I delitti contro l'ambiente", subtitle: "Ecoreati: inquinamento e disastro ambientale",
    articoli: ["artt. 452-bis - 452-terdecies c.p."], pages: [128, 132], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "La L. 22 maggio 2015, n. 68 ha introdotto nel codice il Titolo VI-bis, dedicato ai <strong>delitti contro l'ambiente</strong> (c.d. ecoreati), superando la precedente tutela frammentaria e per lo più contravvenzionale del d.lgs. 152/2006. Le due fattispecie cardine sono reati di danno costruiti su una progressione di gravità. L'<strong>inquinamento ambientale</strong> (452-bis) punisce chi <em>abusivamente</em>, cioè in violazione di norme o provvedimenti, cagiona una compromissione o un deterioramento <strong>significativi e misurabili</strong> di acque, aria, suolo, ecosistemi, biodiversità, flora o fauna. Il <strong>disastro ambientale</strong> (452-quater), più grave, ricorre in ipotesi alternative: alterazione irreversibile dell'equilibrio di un ecosistema; alterazione la cui eliminazione sia possibile solo con provvedimenti eccezionali; oppure offesa alla pubblica incolumità per rilevanza del fatto o numero di persone esposte. Completano il quadro le aggravanti per morte o lesioni, il ravvedimento operoso (452-decies) e la confisca obbligatoria.",
      approfondimenti: [
        { label: "Inquinamento ambientale (452-bis)", body: "Punisce chi <strong>abusivamente</strong> cagiona una compromissione o un deterioramento <strong>significativi e misurabili</strong> delle acque, dell'aria, di porzioni estese di suolo/sottosuolo, di ecosistemi, biodiversità, flora o fauna. È reato di danno; l'avverbio 'abusivamente' richiede la violazione di norme o provvedimenti. Il 452-ter aggrava se ne derivano lesioni o morte." },
        { label: "Disastro ambientale (452-quater)", body: "Ricorre in tre ipotesi alternative: alterazione irreversibile dell'equilibrio di un ecosistema; alterazione la cui eliminazione risulti particolarmente onerosa e conseguibile solo con provvedimenti eccezionali; offesa alla pubblica incolumità per rilevanza del fatto o numero di persone offese/esposte a pericolo. Ha raccolto l'eredità del disastro innominato (434) in materia ambientale." },
      ],
      giurisprudenza: [
        { label: "Ecoreati e ravvedimento", body: "La disciplina prevede il ravvedimento operoso (452-decies, riduzione di pena per chi si adopera per la messa in sicurezza/bonifica) e la confisca obbligatoria. La giurisprudenza ha chiarito la natura di reato di danno del 452-bis, richiedendo un pregiudizio significativo, misurabile e non meramente potenziale." },
      ],
      eccezioni: [],
    },
    sintesi: [
      "L. 68/2015: Titolo VI-bis, delitti contro l'ambiente (ecoreati).",
      "Inquinamento ambientale (452-bis): compromissione/deterioramento significativi e misurabili.",
      "Richiesta la condotta 'abusiva' (violazione di norme o provvedimenti).",
      "Disastro ambientale (452-quater): alterazione irreversibile o offesa all'incolumità pubblica.",
      "Ravvedimento operoso (452-decies) e confisca obbligatoria.",
    ],
    esempi: [
      { titolo: "Inquinamento o disastro?", testo: "L'imprenditore Marco, titolare di uno stabilimento, effettua scarichi abusivi che deteriorano in modo significativo e misurabile un corso d'acqua: risponde di <strong>inquinamento ambientale</strong> (452-bis), reato di danno che presuppone un pregiudizio concreto e non solo potenziale. Se però la contaminazione rende l'ecosistema irreversibilmente alterato, oppure la bonifica è possibile solo con provvedimenti eccezionali, o ancora ne deriva un'offesa alla pubblica incolumità, si passa alla figura più grave del <strong>disastro ambientale</strong> (452-quater)." },
    ],
    flashcards: [
      ["Quale legge ha introdotto gli ecoreati nel codice?", "La L. 22 maggio 2015, n. 68, che ha inserito il Titolo VI-bis (artt. 452-bis ss.)."],
      ["Cosa punisce l'inquinamento ambientale (452-bis)?", "Chi abusivamente cagiona una compromissione o un deterioramento significativi e misurabili di acque, aria, suolo, ecosistemi, biodiversità, flora o fauna."],
      ["Quando ricorre il disastro ambientale (452-quater)?", "Alterazione irreversibile dell'ecosistema, o eliminabile solo con provvedimenti eccezionali, oppure offesa alla pubblica incolumità per rilevanza o numero di persone offese."],
    ],
    comparativa: {
      titolo: "Inquinamento ambientale vs Disastro ambientale",
      a: "Inquinamento (452-bis)", b: "Disastro (452-quater)",
      righe: [
        { profilo: "Gravità dell'offesa", a: "Compromissione/deterioramento significativi e misurabili", b: "Alterazione irreversibile o offesa all'incolumità pubblica" },
        { profilo: "Reversibilità", a: "In sé anche reversibile, purché significativa", b: "Irreversibile o eliminabile solo con mezzi eccezionali" },
        { profilo: "Cornice edittale", a: "Meno grave", b: "Più grave (evento catastrofico)" },
      ],
    },
    quiz: [
      { q: "I delitti contro l'ambiente sono stati introdotti nel codice penale con:", opts: ["Il d.lgs. 152/2006", "La L. 68/2015", "La riforma Cartabia", "La L. 114/2024"], correct: 1, why: "La L. 22 maggio 2015, n. 68 ha inserito il Titolo VI-bis (artt. 452-bis ss.), superando la tutela solo contravvenzionale del d.lgs. 152/2006 (Testo unico ambientale), che resta per gli illeciti minori.", fonte: "Parte speciale, Cap. 8", difficulty: 2, commonError: "Attribuire l'introduzione degli ecoreati al TU ambientale del 2006 anziché alla L. 68/2015." },
      { q: "L'inquinamento ambientale (art. 452-bis) richiede una compromissione o un deterioramento:", opts: ["Anche solo potenziali e non misurabili", "Significativi, misurabili e abusivi", "Reversibili e privi di rilievo penale", "Circoscritti alle sole acque superficiali"], correct: 1, why: "L'art. 452-bis è reato di danno: esige una compromissione o un deterioramento significativi e misurabili delle matrici ambientali, cagionati abusivamente (in violazione di norme o provvedimenti). Non basta un pericolo potenziale.", fonte: "Parte speciale, Cap. 8 (art. 452-bis)", difficulty: 3, commonError: "Ritenere sufficiente un danno meramente potenziale o non misurabile." },
      { q: "Il disastro ambientale (452-quater) si distingue dall'inquinamento perché:", opts: ["Prescinde del tutto dalla condotta abusiva normativamente richiesta", "Implica alterazione irreversibile o pericolo pubblico", "Costituisce una semplice contravvenzione in materia ambientale", "Riguarda unicamente la tutela della fauna e della flora selvatica"], correct: 1, why: "Il disastro ambientale integra un evento catastrofico: alterazione irreversibile dell'ecosistema, o eliminabile solo con provvedimenti eccezionali, oppure offesa alla pubblica incolumità per rilevanza o numero di persone. È più grave del semplice inquinamento.", fonte: "Parte speciale, Cap. 8 (art. 452-quater)", difficulty: 3, commonError: "Non cogliere il maggior disvalore (irreversibilità/incolumità pubblica) del disastro rispetto all'inquinamento." },
    ],
    veroFalso: [
      { aff: "L'inquinamento ambientale (art. 452-bis) è un reato di pericolo che prescinde da un danno misurabile.", vero: false, traccia: "Falso. Il 452-bis è reato di danno: richiede una compromissione o un deterioramento significativi e misurabili delle matrici ambientali, cagionati abusivamente. Un danno solo potenziale o non misurabile non integra la fattispecie." },
    ],
    aperta: { q: "Il candidato illustri le principali fattispecie introdotte dalla L. 68/2015 in tema di ambiente.", traccia: "La L. 68/2015 ha inserito nel codice il Titolo VI-bis, superando la tutela contravvenzionale del d.lgs. 152/2006. Le figure centrali sono: l'inquinamento ambientale (452-bis), reato di danno che punisce chi abusivamente cagiona una compromissione o un deterioramento significativi e misurabili delle matrici ambientali; il disastro ambientale (452-quater), evento catastrofico consistente nell'alterazione irreversibile dell'ecosistema, o eliminabile solo con provvedimenti eccezionali, o nell'offesa alla pubblica incolumità. Completano il quadro le aggravanti per morte/lesioni (452-ter), il traffico e abbandono di materiale radioattivo, l'impedimento del controllo, l'omessa bonifica, il ravvedimento operoso (452-decies) e la confisca.", fonte: "Parte speciale, Cap. 8" },
    consigliate: ["comparativa", "flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 9 · FEDE PUBBLICA ======================== */
  {
    id: "ps-fede", part: "speciale", chapter: 9, chapterTitle: "I delitti contro la fede pubblica",
    title: "I delitti contro la fede pubblica", subtitle: "Falsità in atti, falso documentale e falso nummario",
    articoli: ["artt. 453-498 c.p."], pages: [133, 137], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo VII tutela la <strong>fede pubblica</strong>, ossia la fiducia che la collettività ripone nella genuinità e veridicità di monete, atti e segni. La materia si articola in tre grandi settori: il <strong>falso nummario</strong> (453 ss.), relativo alla falsità in monete e valori; le <strong>falsità in atti</strong> (476 ss.); le <strong>falsità personali</strong> (494 ss.). Nell'ambito delle falsità in atti è centrale la distinzione tra falso <strong>materiale</strong>, che offende la <em>genuinità</em> del documento mediante contraffazione (formazione da chi non ne è l'autore) o alterazione, e falso <strong>ideologico</strong>, che offende la <em>veridicità</em> del contenuto, perché un documento genuino, formato dal suo reale autore, reca attestazioni non conformi al vero. Il dolo è generico. In ossequio al principio di offensività, restano non punibili il falso <strong>grossolano</strong> (riconoscibile <em>ictu oculi</em>) e il falso <strong>innocuo</strong> (privo di attitudine offensiva).",
      approfondimenti: [
        { label: "Falso materiale e falso ideologico", body: "Il falso <strong>materiale</strong> incide sulla <em>genuinità</em> del documento (formazione da parte di chi non ne è autore, o alterazione di un atto vero). Il falso <strong>ideologico</strong> incide sulla <em>veridicità</em>: il documento è genuino ma il suo autore vi attesta il falso. Rilevano poi la qualità (pubblico ufficiale o privato) dell'autore e la natura (pubblica o privata) dell'atto (476, 479, 483, 485 - quest'ultimo, il falso in scrittura privata, ora in gran parte depenalizzato dal d.lgs. 7/2016)." },
        { label: "Falso innocuo e falso grossolano", body: "Non è punibile il falso <strong>grossolano</strong> (riconoscibile ictu oculi, inidoneo a trarre in inganno) né il falso <strong>innocuo</strong> (privo di attitudine offensiva perché non incide sulla funzione probatoria del documento): entrambi difettano dell'offesa alla fede pubblica, in ossequio al principio di offensività." },
      ],
      giurisprudenza: [
        { label: "Falso innocuo", body: "La giurisprudenza esclude la punibilità del falso quando l'immutazione del vero non incide sulla funzione documentale né lede l'interesse protetto (falso innocuo), coerentemente con la concezione dell'offensività in concreto." },
      ],
      eccezioni: [],
    },
    sintesi: [
      "Titolo VII: tutela la fede pubblica (fiducia nella genuinità/veridicità di atti e monete).",
      "Falso nummario (453 ss.): falsità in monete e valori.",
      "Falso materiale: incide sulla genuinità (contraffazione/alterazione).",
      "Falso ideologico: incide sulla veridicità (atto genuino con attestazioni false).",
      "Non punibili il falso grossolano e il falso innocuo (offensività).",
    ],
    esempi: [
      { titolo: "Materiale o ideologico?", testo: "Se Anna imita la firma altrui su un atto per farlo apparire formato da un soggetto diverso dal reale autore, commette falso <strong>materiale</strong>, perché aggredisce la <em>genuinità</em> del documento. Se invece il pubblico ufficiale Rossi redige un verbale autentico, di cui è realmente autore, ma vi attesta fatti mai avvenuti (per esempio una dichiarazione mai resa), commette falso <strong>ideologico</strong> (479): l'atto è genuino, eppure non veridico, perché ne è falsato il contenuto. Il discrimine è dunque tra genuinità (materiale) e veridicità (ideologico)." },
    ],
    flashcards: [
      ["Qual è il bene tutelato dal Titolo VII?", "La fede pubblica: la fiducia della collettività nella genuinità e veridicità di monete, atti e segni."],
      ["Differenza tra falso materiale e ideologico?", "Il materiale incide sulla genuinità del documento (contraffazione/alterazione); l'ideologico sulla veridicità (atto genuino con attestazioni non vere)."],
      ["Cos'è il falso innocuo?", "Un falso privo di attitudine offensiva, che non incide sulla funzione probatoria del documento: non è punibile per difetto di offesa alla fede pubblica."],
    ],
    comparativa: {
      titolo: "Falso materiale vs Falso ideologico",
      a: "Falso materiale", b: "Falso ideologico",
      righe: [
        { profilo: "Oggetto dell'offesa", a: "Genuinità del documento", b: "Veridicità del contenuto" },
        { profilo: "Condotta", a: "Contraffazione o alterazione", b: "Attestazione del falso in atto genuino" },
        { profilo: "Autore del documento", a: "Diverso da chi appare o alterato", b: "L'autore reale, che mente" },
      ],
    },
    quiz: [
      { q: "Il falso ideologico si distingue dal falso materiale perché:", opts: ["Contraffà materialmente l'intero documento", "Attesta il falso in un atto genuino", "Riguarda soltanto le monete e i valori", "È commesso sempre e solo da privati"], correct: 1, why: "Nel falso ideologico il documento è genuino (formato dal suo vero autore) ma non veridico, perché vi si attestano fatti non veri. Il falso materiale incide invece sulla genuinità (contraffazione o alterazione).", fonte: "Parte speciale, Cap. 9", difficulty: 3, commonError: "Scambiare falso materiale (genuinità) e falso ideologico (veridicità)." },
      { q: "Il falso grossolano:", opts: ["È punito alla stregua del falso pienamente consumato", "Non è punibile perché inidoneo a ingannare", "Costituisce una semplice contravvenzione documentale", "Rileva soltanto in materia di scritture private"], correct: 1, why: "Il falso grossolano è riconoscibile ictu oculi e inidoneo a ingannare: manca l'offesa alla fede pubblica, per cui non è punibile (principio di offensività). Analogamente il falso innocuo.", fonte: "Parte speciale, Cap. 9", difficulty: 3, commonError: "Ritenere punibile ogni immutazione del vero, anche se inoffensiva." },
      { q: "Il bene giuridico tutelato dai delitti contro la fede pubblica è:", opts: ["Il patrimonio economico del singolo soggetto", "La fiducia nella genuinità di atti e monete", "L'onore e la reputazione della persona offesa", "Il regolare funzionamento della giustizia penale"], correct: 1, why: "La fede pubblica è la fiducia che la collettività ripone nella genuinità e veridicità di determinati oggetti (monete, atti, segni). Il patrimonio del singolo può essere leso in via ulteriore (falso in atti con truffa), ma non è il bene tipico.", fonte: "Parte speciale, Cap. 9", difficulty: 2, commonError: "Ridurre i delitti contro la fede pubblica a offese patrimoniali del singolo." },
    ],
    veroFalso: [
      { aff: "Nel falso materiale il documento è genuino ma il suo contenuto è mendace.", vero: false, traccia: "Falso. Quella descritta è l'ipotesi del falso ideologico. Nel falso materiale è compromessa la genuinità del documento: esso è contraffatto (formato da chi non ne è l'autore apparente) o alterato dopo la formazione." },
    ],
    aperta: { q: "Il candidato distingua il falso materiale dal falso ideologico.", traccia: "I delitti contro la fede pubblica tutelano la fiducia collettiva nella genuinità e veridicità di atti e monete. Nell'ambito delle falsità in atti si distingue: il falso materiale, che offende la genuinità del documento (contraffazione, ossia formazione da parte di chi non ne è l'autore, o alterazione di un atto vero); il falso ideologico, che offende la veridicità del contenuto, poiché un documento genuino, formato dal suo reale autore, contiene attestazioni non conformi al vero. Rilevano poi la natura pubblica o privata dell'atto e la qualità dell'autore. Restano non punibili il falso grossolano e il falso innocuo, per difetto di offesa (offensività).", fonte: "Parte speciale, Cap. 9" },
    consigliate: ["comparativa", "flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 10 · PATRIMONIO CULTURALE ================ */
  {
    id: "ps-culturale", part: "speciale", chapter: 10, chapterTitle: "I delitti contro il patrimonio culturale",
    title: "I delitti contro il patrimonio culturale", subtitle: "Il nuovo Titolo VIII-bis e la L. 22/2022",
    articoli: ["artt. 518-bis - 518-undevicies c.p."], pages: [138, 139], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "La L. 9 marzo 2022, n. 22 ha introdotto nel codice il Titolo VIII-bis, dedicato ai <strong>delitti contro il patrimonio culturale</strong>, trasferendo nel codice penale e rafforzando la tutela prima frammentata nel Codice dei beni culturali (d.lgs. 42/2004). La riforma risponde all'esigenza di una protezione autonoma e più severa di un bene di rilievo costituzionale (art. 9 Cost.). Le fattispecie ricalcano la struttura dei corrispondenti reati comuni contro il patrimonio, tra cui il <strong>furto</strong> (518-bis), l'<strong>appropriazione</strong>, la <strong>ricettazione</strong> e il <strong>danneggiamento di beni culturali</strong>, oltre a distruzione, deturpamento, imbrattamento e traffico illecito. Rispetto ai reati comuni, però, l'oggetto è specializzato (il bene culturale) e le cornici edittali sono aggravate; sono inoltre previste circostanze proprie e ipotesi di confisca.",
      approfondimenti: [
        { label: "La ratio della riforma", body: "La riforma risponde all'esigenza di una tutela autonoma e più severa del patrimonio culturale, bene di rilievo costituzionale (art. 9 Cost.). Le fattispecie ricalcano i reati comuni contro il patrimonio (furto, ricettazione, danneggiamento) ma con oggetto specializzato (il bene culturale) e cornici edittali aggravate; sono previste circostanze aggravanti e attenuanti proprie e ipotesi di confisca." },
        { label: "Principali fattispecie", body: "Tra le figure: furto di beni culturali (518-bis), appropriazione indebita (518-ter), ricettazione (518-quater), riciclaggio (518-sexies), falsificazione in scrittura privata relativa a beni culturali, violazioni in materia di alienazione, importazione ed esportazione illecita, distruzione, dispersione, deterioramento, deturpamento e imbrattamento (518-duodecies). È prevista anche una circostanza attenuante per la ricomposizione del patrimonio." },
      ],
      giurisprudenza: [],
      eccezioni: [],
    },
    sintesi: [
      "L. 22/2022: nuovo Titolo VIII-bis sui delitti contro il patrimonio culturale.",
      "Tutela trasferita e rafforzata rispetto al Codice dei beni culturali (d.lgs. 42/2004).",
      "Fattispecie speciali: furto, appropriazione, ricettazione, danneggiamento di beni culturali.",
      "Oggetto specializzato (il bene culturale) e pene aggravate rispetto ai reati comuni.",
      "Fondamento costituzionale nell'art. 9 Cost. (tutela del patrimonio).",
    ],
    esempi: [
      { titolo: "Furto comune o di bene culturale?", testo: "Se Marco sottrae l'autovettura parcheggiata di un vicino, commette furto comune (624), aggredendo il patrimonio individuale della vittima. Se invece Marco sottrae un dipinto vincolato custodito in un museo, risponde di <strong>furto di beni culturali</strong> (518-bis): la struttura del furto è la medesima, ma l'oggetto è specializzato e la pena è più severa, in ragione del valore storico-artistico del bene, che l'art. 9 Cost. affida alla tutela della Repubblica." },
    ],
    flashcards: [
      ["Quale legge ha introdotto i delitti contro il patrimonio culturale?", "La L. 9 marzo 2022, n. 22, che ha inserito il Titolo VIII-bis del codice penale."],
      ["Qual è la ratio della riforma del 2022?", "Assicurare una tutela penale autonoma e più severa del patrimonio culturale, bene di rilievo costituzionale (art. 9 Cost.)."],
      ["Come si rapportano queste fattispecie ai reati comuni?", "Ne ricalcano la struttura (furto, ricettazione, danneggiamento) ma con oggetto specializzato (il bene culturale) e cornici edittali aggravate."],
    ],
    comparativa: null,
    quiz: [
      { q: "I delitti contro il patrimonio culturale sono stati inseriti nel codice penale con:", opts: ["Il d.lgs. 42/2004 sui beni culturali", "La L. 22/2022, Titolo VIII-bis", "La L. 68/2015 sugli ecoreati", "La riforma Cartabia del processo"], correct: 1, why: "La L. 9 marzo 2022, n. 22 ha introdotto il Titolo VIII-bis, trasferendo nel codice e rafforzando la tutela prima contenuta nel Codice dei beni culturali (d.lgs. 42/2004).", fonte: "Parte speciale, Cap. 10", difficulty: 2, commonError: "Attribuire la disciplina penale al solo Codice dei beni culturali del 2004 anziché alla L. 22/2022." },
      { q: "Rispetto ai corrispondenti reati comuni contro il patrimonio, le fattispecie del Titolo VIII-bis:", opts: ["Prevedono un trattamento sanzionatorio più mite", "Hanno oggetto speciale e pene aggravate", "Sono qualificate come semplici contravvenzioni", "Escludono ogni possibile ipotesi di confisca"], correct: 1, why: "Le nuove figure ricalcano furto, appropriazione, ricettazione e danneggiamento, ma con oggetto specializzato (il bene culturale) e cornici edittali più severe, in ragione del valore costituzionale del bene (art. 9 Cost.).", fonte: "Parte speciale, Cap. 10", difficulty: 2, commonError: "Ritenere più miti i reati sui beni culturali rispetto ai reati comuni." },
      { q: "Il fondamento costituzionale della tutela penale del patrimonio culturale si rinviene:", opts: ["Nell'art. 41, sulla libertà di iniziativa economica", "Nell'art. 9 (paesaggio e patrimonio)", "Nell'art. 32, sul diritto alla tutela della salute", "Nell'art. 21, sulla libertà di manifestazione"], correct: 1, why: "L'art. 9 Cost. affida alla Repubblica la tutela del paesaggio e del patrimonio storico e artistico della Nazione; la L. 22/2022 ne rafforza la protezione sul piano penale.", fonte: "Parte speciale, Cap. 10", difficulty: 3, commonError: "Individuare erroneamente il fondamento nell'iniziativa economica (41) o nella salute (32)." },
    ],
    veroFalso: [
      { aff: "Prima della L. 22/2022 la tutela penale dei beni culturali era prevalentemente contenuta nel Codice dei beni culturali (d.lgs. 42/2004).", vero: true, traccia: "Vero. La tutela era frammentata soprattutto nel d.lgs. 42/2004. La L. 22/2022 l'ha trasferita e rafforzata nel codice penale con il nuovo Titolo VIII-bis, prevedendo fattispecie speciali e pene aggravate." },
    ],
    aperta: { q: "Il candidato illustri la riforma introdotta dalla L. 22/2022 in materia di patrimonio culturale.", traccia: "La L. 9 marzo 2022, n. 22 ha inserito nel codice penale il Titolo VIII-bis, dedicato ai delitti contro il patrimonio culturale, con l'obiettivo di trasferire nel codice e rafforzare la tutela prima frammentata nel Codice dei beni culturali (d.lgs. 42/2004). Le fattispecie ricalcano i reati comuni contro il patrimonio (furto, appropriazione, ricettazione, riciclaggio, danneggiamento) ma con oggetto specializzato, il bene culturale, e cornici edittali aggravate, in attuazione dell'art. 9 Cost. Sono previste distruzione, deturpamento e imbrattamento di beni culturali, violazioni in materia di circolazione e traffico illecito, circostanze proprie e ipotesi di confisca.", fonte: "Parte speciale, Cap. 10" },
    consigliate: ["flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 11 · MORALITÀ PUBBLICA E BUON COSTUME ===== */
  {
    id: "ps-moralita", part: "speciale", chapter: 11, chapterTitle: "I delitti contro la moralità pubblica e il buon costume",
    title: "I delitti contro la moralità pubblica e il buon costume", subtitle: "Atti osceni e tutela del comune senso del pudore",
    articoli: ["artt. 527-538 c.p."], pages: [140, 140], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo IX tutela la <strong>moralità pubblica</strong> e il <strong>buon costume</strong>, intesi come comune senso del pudore in materia sessuale: si tratta dunque di un bene collettivo, distinto dalla libertà sessuale del singolo, protetta invece dai reati sessuali (609-bis ss.). La materia è stata progressivamente <strong>ridimensionata</strong>: la L. 75/1958 (legge Merlin) ha sottratto a questo Titolo la disciplina della prostituzione, mentre il d.lgs. 8/2016 ha <strong>depenalizzato</strong> la fattispecie base degli atti osceni, oggi mero illecito amministrativo. Conserva rilievo penale l'ipotesi aggravata degli atti osceni commessi in luoghi abitualmente frequentati da minori, con pericolo che vi assistano (art. 527 co. 2), oltre alle pubblicazioni e spettacoli osceni (528). La nozione di osceno è storicamente relativa e va bilanciata con la libertà di manifestazione del pensiero (art. 21 Cost.).",
      approfondimenti: [
        { label: "La depenalizzazione degli atti osceni", body: "L'art. 527 puniva chi compie atti osceni in luogo pubblico o aperto al pubblico. Il d.lgs. 15 gennaio 2016, n. 8 ha depenalizzato la fattispecie base, ora sanzione <strong>amministrativa</strong> pecuniaria. Resta delitto l'ipotesi del co. 2, quando il fatto è commesso all'interno o nelle immediate vicinanze di luoghi abitualmente frequentati da minori, con pericolo che questi vi assistano." },
        { label: "Nozione di osceno e pubblicazioni oscene", body: "L'osceno (528-529) è ciò che, secondo il comune sentimento, offende il pudore. Le pubblicazioni e gli spettacoli osceni (528) restano puniti. La nozione è storicamente relativa e va calibrata sull'evoluzione del costume, con attenzione al bilanciamento con la libertà di manifestazione del pensiero (art. 21 Cost.)." },
      ],
      giurisprudenza: [],
      eccezioni: [],
    },
    sintesi: [
      "Titolo IX: tutela la moralità pubblica e il buon costume (comune senso del pudore).",
      "Materia ridimensionata: legge Merlin (1958) e depenalizzazioni.",
      "Atti osceni (527): fattispecie base depenalizzata (illecito amministrativo) dal d.lgs. 8/2016.",
      "Resta delitto l'ipotesi aggravata in luoghi frequentati da minori (527 co. 2).",
      "Nozione di osceno relativa, da bilanciare con l'art. 21 Cost.",
    ],
    esempi: [
      { titolo: "Illecito amministrativo o delitto?", testo: "Se Marco compie atti osceni in una via pubblica poco frequentata, il fatto è oggi, di regola, un <strong>illecito amministrativo</strong>: l'art. 527 co. 1 è stato infatti depenalizzato dal d.lgs. 8/2016 e comporta una sola sanzione pecuniaria. Il medesimo comportamento torna a essere <strong>delitto</strong>, invece, se Marco lo tiene all'interno o nelle immediate vicinanze di luoghi abitualmente frequentati da minori, con il concreto pericolo che questi vi assistano (art. 527 co. 2): è la tutela rafforzata dei minori a giustificare il permanere del rilievo penale." },
    ],
    flashcards: [
      ["Cosa tutela il Titolo IX del codice penale?", "La moralità pubblica e il buon costume, intesi come comune senso del pudore in materia sessuale."],
      ["Gli atti osceni (527) sono ancora reato?", "La fattispecie base è stata depenalizzata (illecito amministrativo, d.lgs. 8/2016); resta delitto l'ipotesi commessa in luoghi frequentati da minori (co. 2)."],
      ["Come va intesa la nozione di osceno?", "Come ciò che, secondo il comune sentimento, offende il pudore: nozione storicamente relativa, da bilanciare con la libertà di espressione (art. 21 Cost.)."],
    ],
    comparativa: null,
    quiz: [
      { q: "Dopo il d.lgs. 8/2016, gli atti osceni in luogo pubblico (art. 527 co. 1) costituiscono:", opts: ["Un delitto punito con la reclusione", "Un illecito amministrativo pecuniario", "Una contravvenzione punita con arresto", "Un fatto sempre e comunque lecito"], correct: 1, why: "Il d.lgs. 15 gennaio 2016, n. 8 ha depenalizzato la fattispecie base dell'art. 527, trasformandola in illecito amministrativo pecuniario. Resta delitto l'ipotesi aggravata del co. 2 (luoghi frequentati da minori).", fonte: "Parte speciale, Cap. 11 (art. 527)", difficulty: 2, commonError: "Ritenere ancora penalmente rilevante ogni ipotesi di atti osceni, ignorando la depenalizzazione del 2016." },
      { q: "Resta delitto l'ipotesi di atti osceni commessi:", opts: ["In qualunque luogo, pubblico o privato che sia", "In luoghi frequentati da minori esposti", "Soltanto all'interno di abitazioni private", "Unicamente se ripetuti più volte nel tempo"], correct: 1, why: "L'art. 527 co. 2 conserva rilievo penale quando il fatto è commesso all'interno o nelle immediate vicinanze di luoghi abitualmente frequentati da minori e vi è il pericolo che essi vi assistano.", fonte: "Parte speciale, Cap. 11 (art. 527)", difficulty: 3, commonError: "Non individuare la presenza/il pericolo per i minori quale elemento che mantiene il rilievo penale." },
      { q: "Il bene giuridico tutelato dal Titolo IX è:", opts: ["La libertà sessuale del singolo individuo", "Il comune senso del pudore collettivo", "L'onore e la reputazione della persona", "La salute e l'igiene pubblica"], correct: 1, why: "Il Titolo IX protegge la moralità pubblica e il buon costume, cioè il comune senso del pudore in materia sessuale; la libertà sessuale individuale è invece tutelata dai reati sessuali (609-bis ss.).", fonte: "Parte speciale, Cap. 11", difficulty: 2, commonError: "Confondere la tutela del pudore collettivo con la tutela della libertà sessuale del singolo." },
    ],
    veroFalso: [
      { aff: "Ogni forma di atto osceno in luogo pubblico è tuttora punita come delitto.", vero: false, traccia: "Falso. Il d.lgs. 8/2016 ha depenalizzato la fattispecie base dell'art. 527, ora illecito amministrativo. Conserva rilievo penale solo l'ipotesi aggravata degli atti osceni in luoghi abitualmente frequentati da minori (527 co. 2)." },
    ],
    aperta: { q: "Il candidato illustri lo stato attuale della tutela penale della moralità pubblica e del buon costume.", traccia: "Il Titolo IX tutela la moralità pubblica e il buon costume, cioè il comune senso del pudore in materia sessuale. La materia è stata progressivamente ridimensionata: la legge Merlin (L. 75/1958) ha sottratto la prostituzione a questo Titolo e il d.lgs. 8/2016 ha depenalizzato la fattispecie base degli atti osceni (art. 527 co. 1), oggi illecito amministrativo. Conserva rilievo penale l'ipotesi aggravata degli atti osceni in luoghi frequentati da minori (co. 2), oltre alle pubblicazioni e spettacoli osceni (528). La nozione di osceno è storicamente relativa e va bilanciata con la libertà di manifestazione del pensiero (art. 21 Cost.).", fonte: "Parte speciale, Cap. 11" },
    consigliate: ["flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 12 · ANIMALI ============================= */
  {
    id: "ps-animali", part: "speciale", chapter: 12, chapterTitle: "I delitti contro gli animali",
    title: "I delitti contro gli animali", subtitle: "Uccisione, maltrattamento e la riforma della L. 82/2025",
    articoli: ["artt. 544-bis - 544-sexies c.p."], pages: [141, 142], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo IX-bis, introdotto dalla L. 189/2004, raccoglie i <strong>delitti contro il sentimento per gli animali</strong>: uccisione (544-bis), maltrattamento (544-ter), spettacoli e manifestazioni vietati (544-quater), combattimenti tra animali (544-quinquies). Elemento comune alle figure principali è la clausola <em>'per crudeltà o senza necessità'</em>: in presenza di una necessità riconosciuta dall'ordinamento (ragioni sanitarie, attività venatoria consentita) la condotta non è punibile. La <strong>L. 6 giugno 2025, n. 82</strong> ha riformato la materia, inasprendo le cornici edittali, introducendo nuove aggravanti (morte dell'animale, modalità particolarmente crudeli, presenza di minori) e ampliando le condotte punibili, in un'ottica che valorizza l'animale come essere senziente. Resta dibattuto se il bene protetto sia il sentimento umano di pietà verso gli animali oppure l'animale stesso.",
      approfondimenti: [
        { label: "Uccisione e maltrattamento", body: "L'uccisione di animali (544-bis) punisce chi, per crudeltà o senza necessità, cagiona la morte di un animale. Il maltrattamento (544-ter) punisce chi, per crudeltà o senza necessità, cagiona lesioni o sottopone l'animale a sevizie, comportamenti o fatiche insopportabili per le sue caratteristiche, o gli somministra sostanze nocive/stupefacenti. Elemento comune è la clausola 'per crudeltà o senza necessità'." },
        { label: "La riforma della L. 82/2025", body: "La L. 82/2025 ha rafforzato la tutela: aumento delle cornici edittali, previsione di aggravanti (morte dell'animale come conseguenza del maltrattamento, uso di modalità particolarmente crudeli, presenza di minori), inasprimento per i combattimenti e ampliamento delle condotte punibili. Resta dibattuto se il bene protetto sia il sentimento umano di pietà verso gli animali o l'animale stesso come essere senziente." },
      ],
      giurisprudenza: [],
      eccezioni: [],
    },
    sintesi: [
      "Titolo IX-bis (L. 189/2004): delitti contro il sentimento per gli animali.",
      "Uccisione (544-bis) e maltrattamento (544-ter): 'per crudeltà o senza necessità'.",
      "Spettacoli vietati (544-quater) e combattimenti tra animali (544-quinquies).",
      "L. 6 giugno 2025, n. 82: pene inasprite e fattispecie ampliate.",
      "Dibattuto il bene protetto: sentimento umano o animale come essere senziente.",
    ],
    esempi: [
      { titolo: "Necessità o crudeltà?", testo: "Se il veterinario o l'allevatore abbatte un capo di bestiame per gravi ragioni sanitarie, o il cacciatore preleva selvaggina nell'esercizio di un'attività venatoria consentita, agisce 'con necessità' e la condotta è lecita. Se invece Marco cagiona la morte di un animale per pura crudeltà o senza alcuna necessità riconosciuta, integra l'<strong>uccisione di animali</strong> (544-bis). La clausola <em>'per crudeltà o senza necessità'</em> è dunque il vero perno delle fattispecie: senza di essa la condotta non assume rilievo penale." },
    ],
    flashcards: [
      ["Quale legge ha introdotto i delitti contro gli animali nel codice?", "La L. 20 luglio 2004, n. 189, che ha inserito il Titolo IX-bis (artt. 544-bis ss.)."],
      ["Qual è la clausola comune a uccisione e maltrattamento di animali?", "'Per crudeltà o senza necessità': senza di essa la condotta non è penalmente rilevante."],
      ["Cosa ha previsto la L. 82/2025?", "Un inasprimento delle pene e un ampliamento delle fattispecie a tutela degli animali, con nuove aggravanti."],
    ],
    comparativa: null,
    quiz: [
      { q: "L'uccisione di animali (art. 544-bis) è punita quando avviene:", opts: ["Sempre, in qualunque circostanza", "Per crudeltà o senza necessità", "Solo se l'animale è altrui", "Solo con dolo di lucro"], correct: 1, why: "L'art. 544-bis richiede che la morte sia cagionata 'per crudeltà o senza necessità'. In presenza di una necessità giuridicamente riconosciuta (es. ragioni sanitarie) la condotta non è punibile.", fonte: "Parte speciale, Cap. 12 (art. 544-bis)", difficulty: 2, commonError: "Ritenere punibile ogni uccisione di animale, ignorando la clausola 'per crudeltà o senza necessità'." },
      { q: "I delitti contro gli animali sono collocati:", opts: ["Nel Titolo XII, delitti contro la persona", "Nel Titolo IX-bis, aggiunto nel 2004", "Tra le contravvenzioni del Libro III", "Nel Codice civile, tra le cose"], correct: 1, why: "La L. 189/2004 ha inserito il Titolo IX-bis del Libro II (artt. 544-bis ss.), dedicato ai delitti contro il sentimento per gli animali, poi riformato dalla L. 82/2025.", fonte: "Parte speciale, Cap. 12", difficulty: 2, commonError: "Collocare i reati contro gli animali tra i delitti contro la persona o tra le contravvenzioni." },
      { q: "La L. 6 giugno 2025, n. 82 ha inciso sulla materia:", opts: ["Depenalizzando il maltrattamento di animali", "Inasprendo le pene e ampliando le condotte", "Abrogando l'intero Titolo IX-bis del codice", "Trasformando i delitti in illeciti civili"], correct: 1, why: "La riforma del 2025 ha rafforzato la tutela penale degli animali con aumento delle pene, nuove aggravanti e ampliamento delle condotte punibili, non certo con una depenalizzazione.", fonte: "Parte speciale, Cap. 12", difficulty: 2, commonError: "Confondere la riforma di inasprimento del 2025 con un intervento di depenalizzazione." },
    ],
    veroFalso: [
      { aff: "Qualsiasi uccisione di un animale integra il delitto di cui all'art. 544-bis c.p.", vero: false, traccia: "Falso. L'art. 544-bis punisce l'uccisione cagionata 'per crudeltà o senza necessità'. Se sussiste una necessità riconosciuta dall'ordinamento (ragioni sanitarie, attività venatoria consentita, ecc.) la condotta non è punibile." },
    ],
    aperta: { q: "Il candidato illustri i delitti contro gli animali e la riforma del 2025.", traccia: "I delitti contro gli animali sono collocati nel Titolo IX-bis (L. 189/2004), a tutela del sentimento per gli animali. Le figure principali sono l'uccisione (544-bis) e il maltrattamento (544-ter), accomunate dalla clausola 'per crudeltà o senza necessità', oltre agli spettacoli vietati (544-quater) e ai combattimenti tra animali (544-quinquies). La L. 6 giugno 2025, n. 82 ha riformato la materia inasprendo le cornici edittali, introducendo nuove aggravanti (morte dell'animale, modalità crudeli, presenza di minori) e ampliando le condotte punibili, in un'ottica che valorizza l'animale come essere senziente, pur restando dibattuta l'esatta individuazione del bene protetto.", fonte: "Parte speciale, Cap. 12" },
    consigliate: ["flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 13 · FAMIGLIA ============================ */
  {
    id: "ps-famiglia", part: "speciale", chapter: 13, chapterTitle: "I delitti contro la famiglia",
    title: "I delitti contro la famiglia", subtitle: "Maltrattamenti e violazione degli obblighi di assistenza",
    articoli: ["artt. 556-574-ter c.p.", "art. 572 c.p."], pages: [143, 144], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo XI tutela la <strong>famiglia</strong> nelle sue diverse dimensioni: il matrimonio (bigamia), la morale familiare, l'assistenza familiare e lo stato di filiazione. La figura di massimo rilievo pratico è il delitto di <strong>maltrattamenti contro familiari o conviventi</strong> (572), reato <strong>abituale proprio</strong> che richiede una pluralità di condotte vessatorie (violenze, minacce, umiliazioni) reiterate nel tempo, tali da cagionare uno stato di abituale sofferenza e sopraffazione; presuppone un rapporto qualificato (familiare, di convivenza o di autorità/affidamento) e delimita esternamente lo <em>ius corrigendi</em> (art. 51). Rileva inoltre la <strong>violazione degli obblighi di assistenza familiare</strong> (570), con l'estensione agli obblighi economici in caso di separazione e divorzio (570-bis). La giurisprudenza ha esteso il 572 alla famiglia di fatto, ma le SS.UU. hanno precisato che, cessata la convivenza, le vessazioni integrano piuttosto gli atti persecutori (612-bis).",
      approfondimenti: [
        { label: "Maltrattamenti in famiglia (572)", body: "Reato <strong>abituale proprio</strong>: richiede una pluralità di condotte (violenze fisiche, minacce, umiliazioni) che, reiterate nel tempo, cagionano uno stato di sofferenza e sopraffazione. Presuppone un rapporto familiare, di convivenza o di autorità/affidamento. Il dolo è unitario, colorato dalla coscienza di persistere in un'attività vessatoria. Delimita esternamente lo ius corrigendi (art. 51)." },
        { label: "Violazione degli obblighi di assistenza (570)", body: "L'art. 570 punisce chi si sottrae agli obblighi di assistenza inerenti alla potestà genitoriale o alla qualità di coniuge, facendo mancare i mezzi di sussistenza ai discendenti minori o inabili, agli ascendenti o al coniuge. L'art. 570-bis estende la tutela in caso di violazione degli obblighi economici in materia di separazione e divorzio." },
      ],
      giurisprudenza: [
        { label: "Maltrattamenti e convivenza", body: "La giurisprudenza ha esteso il 572 alle relazioni affettive stabili e alla famiglia di fatto; le SS.UU. hanno però precisato che, cessata la convivenza, condotte vessatorie possono integrare piuttosto gli atti persecutori (612-bis) anziché i maltrattamenti, che presuppongono un contesto di comunanza di vita." },
      ],
      eccezioni: [],
    },
    sintesi: [
      "Titolo XI: tutela la famiglia (matrimonio, morale e assistenza familiare, filiazione).",
      "Maltrattamenti (572): reato abituale, pluralità di condotte vessatorie reiterate.",
      "Presuppone rapporto familiare, di convivenza o di autorità/affidamento.",
      "Violazione degli obblighi di assistenza familiare (570) e obblighi economici (570-bis).",
      "Il 572 delimita esternamente lo ius corrigendi (art. 51).",
    ],
    esempi: [
      { titolo: "Maltrattamenti o singolo reato?", testo: "Se in un litigio Marco colpisce una sola volta la convivente Anna, il fatto integra al più percosse (581) o lesioni (582), reati istantanei legati al singolo episodio. Se invece Marco sottopone Anna a una sistematica reiterazione di violenze, minacce e umiliazioni, che nel tempo le determina uno stato di abituale sofferenza e sopraffazione, si configura il <strong>reato abituale</strong> di maltrattamenti (572): è la <em>serie</em> di condotte, e non il singolo atto, a fondare l'illecito, tenuto insieme da un dolo unitario che accompagna la persistenza dell'attività vessatoria." },
    ],
    flashcards: [
      ["Che tipo di reato sono i maltrattamenti in famiglia (572)?", "Un reato abituale proprio: richiede la reiterazione di condotte vessatorie che cagionano uno stato di sofferenza e sopraffazione."],
      ["Cosa punisce l'art. 570 c.p.?", "La violazione degli obblighi di assistenza familiare: sottrarsi agli obblighi verso coniuge, figli o ascendenti, facendo mancare i mezzi di sussistenza."],
      ["Il maltrattamento presuppone la convivenza?", "Richiede un contesto di comunanza di vita o un rapporto di autorità/affidamento; cessata la convivenza, le vessazioni possono integrare gli atti persecutori (612-bis)."],
    ],
    comparativa: {
      titolo: "Maltrattamenti (572) vs Atti persecutori (612-bis)",
      a: "Maltrattamenti (572)", b: "Atti persecutori (612-bis)",
      righe: [
        { profilo: "Contesto", a: "Famiglia, convivenza, autorità/affidamento", b: "Anche fuori dalla convivenza, ex partner o estranei" },
        { profilo: "Struttura", a: "Reato abituale (serie di vessazioni)", b: "Reato abituale con evento (stato d'ansia, timore, cambio abitudini)" },
        { profilo: "Bene protetto", a: "Personalità nel contesto familiare", b: "Libertà morale e tranquillità individuale" },
      ],
    },
    quiz: [
      { q: "I maltrattamenti contro familiari o conviventi (art. 572) sono un reato:", opts: ["Istantaneo, legato al singolo episodio violento", "Abituale, con reiterazione di vessazioni", "Di pericolo presunto contro il nucleo familiare", "Colposo, fondato sulla semplice negligenza"], correct: 1, why: "Il 572 è reato abituale proprio: è la reiterazione delle condotte vessatorie a integrarlo, cagionando uno stato di sofferenza. Il singolo episodio integra al più percosse o lesioni.", fonte: "Parte speciale, Cap. 13 (art. 572)", difficulty: 2, commonError: "Trattare i maltrattamenti come reato istantaneo fondato sul singolo episodio." },
      { q: "L'art. 570 c.p. punisce chi:", opts: ["Maltratta abitualmente i propri familiari conviventi", "Si sottrae agli obblighi di assistenza dovuta", "Abbandona un minore o una persona incapace", "Contrae un secondo matrimonio civilmente valido"], correct: 1, why: "L'art. 570 sanziona la violazione degli obblighi di assistenza familiare, in particolare la sottrazione agli obblighi verso coniuge, figli minori/inabili o ascendenti, facendo loro mancare i mezzi di sussistenza. La bigamia è nel 556.", fonte: "Parte speciale, Cap. 13 (art. 570)", difficulty: 3, commonError: "Confondere la violazione degli obblighi di assistenza con l'abbandono di minori o la bigamia." },
      { q: "Cessata la convivenza, le condotte vessatorie verso l'ex partner integrano di regola:", opts: ["I maltrattamenti contro familiari (572)", "Gli atti persecutori o stalking (612-bis)", "Nessun reato, ma solo un illecito civile", "La violenza privata reiterata nel tempo (610)"], correct: 1, why: "Le SS.UU. hanno chiarito che i maltrattamenti presuppongono un contesto di comunanza di vita; venuta meno la convivenza, le vessazioni reiterate integrano piuttosto gli atti persecutori (612-bis).", fonte: "Parte speciale, Cap. 13 (artt. 572, 612-bis)", difficulty: 4, commonError: "Applicare il 572 anche dopo la cessazione della convivenza, dove opera il 612-bis." },
    ],
    veroFalso: [
      { aff: "Un singolo episodio di violenza tra conviventi integra il delitto di maltrattamenti (art. 572).", vero: false, traccia: "Falso. I maltrattamenti sono un reato abituale: occorre una pluralità di condotte vessatorie reiterate nel tempo. Il singolo episodio integra al più percosse (581) o lesioni (582), non il 572." },
    ],
    aperta: { q: "Il candidato illustri il delitto di maltrattamenti contro familiari o conviventi (art. 572).", traccia: "L'art. 572 è un reato abituale proprio, collocato tra i delitti contro la famiglia (Titolo XI): richiede una pluralità di condotte vessatorie (violenze fisiche, minacce, umiliazioni) reiterate nel tempo, tali da cagionare uno stato di abituale sofferenza e sopraffazione. Presuppone un rapporto qualificato (familiare, di convivenza, di autorità o affidamento) e un dolo unitario che accompagna la persistenza dell'attività vessatoria. Delimita esternamente lo ius corrigendi (art. 51). La giurisprudenza lo ha esteso alla famiglia di fatto, ma le SS.UU. hanno precisato che, cessata la convivenza, le vessazioni integrano piuttosto gli atti persecutori (612-bis).", fonte: "Parte speciale, Cap. 13" },
    consigliate: ["comparativa", "flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 16 · CONTRAVVENZIONI ===================== */
  {
    id: "ps-contravvenzioni", part: "speciale", chapter: 16, chapterTitle: "Le contravvenzioni",
    title: "Le contravvenzioni", subtitle: "Nozione, elemento soggettivo e oblazione",
    articoli: ["artt. 17, 39 c.p.", "artt. 162, 162-bis c.p.", "artt. 650 ss. c.p."], pages: [184, 188], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Le <strong>contravvenzioni</strong> sono la seconda specie di reato (art. 39), distinte dai delitti non per la gravità o per il bene offeso ma per la <strong>specie della pena</strong>: arresto e ammenda, in luogo di reclusione e multa (art. 17). Tutelano di regola interessi di prevenzione, ordine e sicurezza pubblica. Sul piano soggettivo, l'art. 42 co. 4 dispone che si risponde <strong>indifferentemente per dolo o per colpa</strong>, salvo che la legge richieda espressamente una specifica forma di colpevolezza. Istituto tipico è l'<strong>oblazione</strong>, causa di estinzione del reato mediante pagamento di una somma, che si presenta in due forme: quella <em>ordinaria</em> (162), per le contravvenzioni punite con la sola ammenda, è un vero e proprio diritto del contravventore ed estingue il reato con il pagamento di un terzo del massimo; quella <em>discrezionale</em> (162-bis), per le pene alternative (arresto o ammenda), è ammessa dal giudice, presuppone l'eliminazione delle conseguenze dannose e comporta il pagamento di metà del massimo.",
      approfondimenti: [
        { label: "Nozione ed elemento soggettivo", body: "Le contravvenzioni tutelano di regola interessi amministrativi o di prevenzione (ordine pubblico, sicurezza, polizia). L'elemento soggettivo è indifferente (dolo o colpa, art. 42 co. 4): salvo diversa previsione, basta la colpa. Non si applicano istituti pensati per i delitti come il tentativo (incompatibile) e, di regola, l'elemento soggettivo non richiede accertamento specifico della forma." },
        { label: "L'oblazione (162 e 162-bis)", body: "L'<strong>oblazione ordinaria</strong> (162) opera per le contravvenzioni punite con la <em>sola ammenda</em>: è un diritto del contravventore, che estingue il reato pagando un terzo del massimo. L'<strong>oblazione speciale/discrezionale</strong> (162-bis) opera per le contravvenzioni punite con arresto <em>o</em> ammenda (pena alternativa): è ammessa dal giudice, che può respingerla in ragione della gravità del fatto, previa eliminazione delle conseguenze dannose; comporta il pagamento di metà del massimo." },
      ],
      giurisprudenza: [],
      eccezioni: [],
    },
    sintesi: [
      "Contravvenzioni: seconda specie di reato (art. 39), pene di arresto e ammenda (art. 17).",
      "Elemento soggettivo indifferente: dolo o colpa (art. 42 co. 4).",
      "Tutelano di regola interessi amministrativi, di prevenzione e sicurezza.",
      "Oblazione ordinaria (162): sola ammenda, diritto del contravventore, 1/3 del massimo.",
      "Oblazione discrezionale (162-bis): pena alternativa, ammessa dal giudice, 1/2 del massimo.",
    ],
    esempi: [
      { titolo: "Quale oblazione?", testo: "Se Marco è imputato di una contravvenzione punita con la <strong>sola ammenda</strong>, ha un vero e proprio <em>diritto</em> all'oblazione ordinaria (162): estingue il reato versando un terzo del massimo, senz'altra valutazione del giudice. Se invece la contravvenzione è punita con arresto <strong>o</strong> ammenda (pena alternativa), si applica l'oblazione discrezionale (162-bis): il giudice <em>può</em> ammetterla, valutando la gravità del fatto e previa eliminazione delle conseguenze dannose o pericolose, con pagamento della metà del massimo dell'ammenda." },
    ],
    flashcards: [
      ["Come si distinguono contravvenzioni e delitti?", "Per la specie della pena (art. 39 e 17): arresto e ammenda per le contravvenzioni, reclusione e multa per i delitti."],
      ["Qual è l'elemento soggettivo delle contravvenzioni?", "È indifferente: si risponde sia per dolo sia per colpa (art. 42 co. 4), salvo che la legge richieda una forma specifica."],
      ["Differenza tra oblazione ordinaria (162) e discrezionale (162-bis)?", "La 162 vale per le contravvenzioni a sola ammenda ed è un diritto (1/3 del massimo); la 162-bis vale per pene alternative (arresto o ammenda), è discrezionale ed esige l'eliminazione delle conseguenze (1/2 del massimo)."],
    ],
    comparativa: {
      titolo: "Oblazione ordinaria (162) vs discrezionale (162-bis)",
      a: "Oblazione ordinaria (162)", b: "Oblazione discrezionale (162-bis)",
      righe: [
        { profilo: "Contravvenzioni interessate", a: "Punite con la sola ammenda", b: "Punite con arresto o ammenda (pena alternativa)" },
        { profilo: "Natura", a: "Diritto del contravventore", b: "Ammissione discrezionale del giudice" },
        { profilo: "Somma da pagare", a: "Un terzo del massimo dell'ammenda", b: "Metà del massimo dell'ammenda" },
      ],
    },
    quiz: [
      { q: "Le contravvenzioni si distinguono dai delitti per:", opts: ["Il bene giuridico concretamente offeso", "La specie della pena comminata", "Il regime di procedibilità dell'azione", "L'assenza di ogni elemento soggettivo"], correct: 1, why: "L'art. 39, richiamando l'art. 17, distingue le due specie di reato in base alla pena: arresto e ammenda per le contravvenzioni, reclusione e multa per i delitti. L'elemento soggettivo esiste anche nelle contravvenzioni.", fonte: "Parte speciale, Cap. 16 (art. 39)", difficulty: 2, commonError: "Ritenere che le contravvenzioni siano prive di elemento soggettivo o si distinguano per il bene tutelato." },
      { q: "Sul piano soggettivo, nelle contravvenzioni si risponde:", opts: ["Soltanto a titolo di dolo", "Soltanto a titolo di colpa", "Sia per dolo sia per colpa", "Per responsabilità oggettiva"], correct: 2, why: "L'art. 42 co. 4 stabilisce che nelle contravvenzioni si risponde indifferentemente per dolo o per colpa, salvo che la legge richieda espressamente una specifica forma di colpevolezza.", fonte: "Parte speciale, Cap. 16 (art. 42)", difficulty: 3, commonError: "Ritenere le contravvenzioni sempre colpose o punite a titolo di responsabilità oggettiva." },
      { q: "L'oblazione ordinaria (art. 162) è ammessa per le contravvenzioni:", opts: ["Punite con arresto oppure ammenda", "Punite con la sola pena dell'ammenda", "Punite con il solo arresto detentivo", "Di qualsiasi tipo, a scelta del giudice"], correct: 1, why: "L'art. 162 riguarda le contravvenzioni punite con la sola pena dell'ammenda: è un diritto del contravventore, che estingue il reato pagando un terzo del massimo. Per le pene alternative (arresto o ammenda) opera la 162-bis, discrezionale.", fonte: "Parte speciale, Cap. 16 (art. 162)", difficulty: 3, commonError: "Confondere l'oblazione ordinaria (sola ammenda, diritto) con quella speciale (pena alternativa, discrezionale)." },
    ],
    veroFalso: [
      { aff: "L'oblazione discrezionale (art. 162-bis) è un diritto incondizionato del contravventore.", vero: false, traccia: "Falso. La 162-bis, prevista per le contravvenzioni punite con arresto o ammenda, è ammessa in via discrezionale dal giudice, che può respingerla in ragione della gravità del fatto, e presuppone l'eliminazione delle conseguenze dannose o pericolose. È l'oblazione ordinaria (162) a configurarsi come diritto." },
    ],
    aperta: { q: "Il candidato illustri la nozione di contravvenzione e l'istituto dell'oblazione.", traccia: "La contravvenzione è la seconda specie di reato (art. 39), distinta dal delitto per la specie della pena: arresto e ammenda (art. 17). Sul piano soggettivo, l'art. 42 co. 4 prevede che si risponda indifferentemente per dolo o per colpa, salvo diversa previsione. Le contravvenzioni tutelano di regola interessi di prevenzione, ordine e sicurezza pubblica. Istituto tipico è l'oblazione: quella ordinaria (162), per le contravvenzioni a sola ammenda, è un diritto del contravventore che estingue il reato con il pagamento di un terzo del massimo; quella speciale/discrezionale (162-bis), per le contravvenzioni punite con arresto o ammenda, è ammessa dal giudice, presuppone l'eliminazione delle conseguenze dannose e comporta il pagamento di metà del massimo.", fonte: "Parte speciale, Cap. 16" },
    consigliate: ["comparativa", "flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },
];
