/* =========================================================================
   N+ — ARGOMENTI 8-10 (imputabilità, tentativo, concorso di persone)
   Fonte: SuperCompendio di Diritto penale, Capp. 5-6.
   Tentativo (art. 56) e concorso di persone (artt. 110 ss.): contenuti
   ricostruiti dalla luce del codice penale e dei manuali NLD.
   ========================================================================= */
NPLUS.topics.push(
  /* ========================== 8. IMPUTABILITÀ ====================== */
  {
    id: "imputabilita", n: 8, icon: "brain",
    title: "L'imputabilità",
    subtitle: "Artt. 85-98 c.p.: capacità di intendere e di volere, vizio di mente",
    cap: "Cap. 5 — L'elemento soggettivo",
    assunti: [
      "È imputabile chi ha la capacità di intendere e di volere (art. 85).",
      "La capacità si presume dal compimento del diciottesimo anno (presunzione iuris tantum).",
      "Cause di esclusione/diminuzione: minore età, infermità, ubriachezza/stupefacenti, sordomutismo."
    ],
    spiegazione: `
      <p>L'<strong>imputabilità</strong> è la capacità del soggetto di intendere il valore sociale dell'atto e di determinarsi liberamente. Ai sensi dell'art. 85 c.p., «nessuno può essere punito per un fatto preveduto dalla legge come reato se, al momento in cui lo ha commesso, non era imputabile. È imputabile chi ha la capacità di intendere e di volere».</p>
      <ul>
        <li>la <strong>capacità di intendere</strong> è l'attitudine a comprendere il significato del proprio comportamento e il suo valore sociale;</li>
        <li>la <strong>capacità di volere</strong> è il potere di controllo dei propri impulsi, di autodeterminazione secondo il motivo più ragionevole.</li>
      </ul>
      <p>La capacità è oggetto di <strong>presunzione iuris tantum</strong> dal compimento dei 18 anni, e va valutata in relazione al singolo fatto e al momento della commissione.</p>
      <h4>Le cause di esclusione o diminuzione</h4>
      <ul>
        <li><strong>Minore età</strong>: il minore di 14 anni è sempre non imputabile (presunzione assoluta, art. 97); tra i 14 e i 18 anni occorre accertare in concreto la capacità (art. 98).</li>
        <li><strong>Infermità di mente</strong>: il vizio totale (art. 88) esclude l'imputabilità; il vizio parziale (art. 89) la scema grandemente e comporta una diminuzione di pena. Le S.U. Raso (2005) vi ricomprendono anche i disturbi della personalità di adeguata consistenza.</li>
        <li><strong>Ubriachezza e stupefacenti</strong>: quella accidentale esclude/diminuisce l'imputabilità (artt. 91, 93); quella volontaria o colposa non la esclude né diminuisce (art. 92); quella preordinata l'aggrava (actio libera in causa, art. 87); l'abituale comporta aumento di pena (art. 94); la cronica intossicazione può escluderla (art. 95).</li>
        <li><strong>Sordomutismo</strong> (art. 96): accertamento caso per caso.</li>
      </ul>
      <p>Gli <strong>stati emotivi e passionali</strong> non escludono né diminuiscono l'imputabilità (art. 90).</p>`,
    puntiChiave: [
      "Imputabile = chi ha capacità di intendere e di volere (art. 85).",
      "Presunzione iuris tantum di capacità dal compimento dei 18 anni.",
      "Minore di 14 anni: sempre non imputabile (presunzione assoluta, art. 97).",
      "Vizio totale di mente (art. 88) esclude; vizio parziale (art. 89) diminuisce la pena.",
      "Ubriachezza volontaria/colposa NON esclude né diminuisce l'imputabilità (art. 92). ← spesso chiesto",
      "Stati emotivi e passionali irrilevanti (art. 90); actio libera in causa (art. 87)."
    ],
    esempio: {
      titolo: "Ubriachezza: accidentale o volontaria?",
      testo: "Se Tizio beve volontariamente fino a ubriacarsi e, in stato di ebbrezza, aggredisce un passante, resta <strong>pienamente imputabile</strong> (art. 92): l'ubriachezza volontaria non esclude né diminuisce la responsabilità. Se invece qualcuno gli versa di nascosto un superalcolico spacciandolo per analcolico, e in quello stato Tizio commette il fatto, l'<strong>ubriachezza accidentale</strong> (art. 91) può escludere o diminuire l'imputabilità, perché lo stato non dipende da sua colpa."
    },
    podcast: { title: "L'imputabilità", sub: "SuperCompendio · Cap. 5 — §3",
      chapters: [ ["Capacità di intendere e di volere","0:00"], ["La minore età","4:30"], ["Il vizio di mente","8:40"], ["Ubriachezza e stupefacenti","13:50"] ] },
    video: { title: "Capacità di intendere e di volere", sub: "Video lezione · collegata al Cap. 5",
      chapters: [ ["Art. 85 e presunzioni","0:00"], ["Vizio totale e parziale","4:20"], ["Actio libera in causa","8:30"] ] },
    mappa: "imputabilita",
    flashcards: [
      ["Chi è imputabile secondo l'art. 85 c.p.?", "Chi ha la capacità di intendere (comprendere il valore sociale dell'atto) e di volere (autodeterminarsi e controllare gli impulsi), al momento del fatto."],
      ["Qual è la disciplina dell'ubriachezza volontaria o colposa?", "Non esclude né diminuisce l'imputabilità (art. 92, co. 1): il soggetto risponde a titolo di dolo o colpa anche se ha agito in stato di incapacità."],
      ["Differenza tra vizio totale e parziale di mente?", "Il vizio totale (art. 88) esclude la capacità e l'imputabilità; il parziale (art. 89) la scema grandemente senza escluderla, con diminuzione di pena (circostanza attenuante)."]
    ],
    quiz: [
      { q: "Ai sensi dell'art. 85 c.p., è imputabile chi:",
        opts: ["Ha compiuto 21 anni","Ha la capacità di intendere e di volere","Non ha precedenti penali","È cittadino italiano"],
        correct: 1,
        why: "L'art. 85 definisce imputabile chi ha la capacità di intendere e di volere al momento del fatto. La capacità di intendere riguarda la comprensione del valore sociale dell'atto; quella di volere, il controllo degli impulsi e l'autodeterminazione.",
        fonte: "SuperCompendio, Cap. 5 — §3 (art. 85 c.p.)" },
      { q: "Il minore degli anni quattordici, ai fini dell'imputabilità:",
        opts: ["È imputabile se mostra maturità","È sempre non imputabile (presunzione assoluta)","È imputabile per i soli delitti","È imputabile previa perizia"],
        correct: 1,
        why: "L'art. 97 c.p. pone una presunzione legale assoluta di non imputabilità per il minore di 14 anni. Per i minori tra 14 e 18 anni (art. 98) occorre invece accertare in concreto la capacità di intendere e di volere.",
        fonte: "SuperCompendio, Cap. 5 — §3.1 (art. 97 c.p.)" },
      { q: "L'ubriachezza volontaria o colposa:",
        opts: ["Esclude l'imputabilità","Non esclude né diminuisce l'imputabilità","La diminuisce sempre","Comporta sempre un aumento di pena"],
        correct: 1,
        why: "Ai sensi dell'art. 92, co. 1, c.p., l'ubriachezza volontaria o colposa non esclude né diminuisce l'imputabilità. Diversa è l'ubriachezza accidentale (art. 91), che può escluderla, e quella preordinata (art. 92, co. 2), che aggrava la pena.",
        fonte: "SuperCompendio, Cap. 5 — §3.1 (art. 92 c.p.)" },
      { q: "Il vizio parziale di mente (art. 89):",
        opts: ["Esclude del tutto l'imputabilità","Scema grandemente la capacità, con diminuzione di pena","È irrilevante","Esclude solo la capacità di volere"],
        correct: 1,
        why: "Il vizio parziale di mente scema grandemente, senza escluderla, la capacità di intendere o di volere: il soggetto resta imputabile ma beneficia di una diminuzione di pena (circostanza attenuante soggetta al bilanciamento ex art. 69).",
        fonte: "SuperCompendio, Cap. 5 — §3.1 (art. 89 c.p.)" },
      { q: "Gli stati emotivi e passionali, ai sensi dell'art. 90 c.p.:",
        opts: ["Escludono l'imputabilità","Non escludono né diminuiscono l'imputabilità","La diminuiscono","Rilevano solo per i delitti d'impeto"],
        correct: 1,
        why: "L'art. 90 c.p. esclude espressamente la rilevanza degli stati emotivi e passionali ai fini dell'imputabilità: di per sé non incidono sulla capacità di intendere e di volere, salvo che si traducano in una vera infermità.",
        fonte: "SuperCompendio, Cap. 5 — §3.1 (art. 90 c.p.)" },
      { q: "Secondo le Sezioni Unite Raso (2005), nel concetto di 'infermità' rilevante ex art. 88-89:",
        opts: ["Rientrano solo le malattie psichiatriche tipiche","Rientrano anche i disturbi della personalità di adeguata consistenza e gravità","Rientra qualsiasi anomalia caratteriale","Non rientrano i disturbi mentali"],
        correct: 1,
        why: "Le S.U. Raso hanno ammesso che anche i disturbi della personalità possano integrare 'infermità', purché di consistenza, intensità e gravità tali da incidere concretamente sulla capacità. Restano esclusi i disturbi transitori e le mere anomalie caratteriali.",
        fonte: "SuperCompendio, Cap. 5 — §3.1 (Cass. S.U. n. 9163/2005)" }
    ],
    veroFalso: [
      { aff: "L'ubriachezza volontaria esclude l'imputabilità dell'agente.", vero: false,
        traccia: "Falso. L'art. 92, co. 1, c.p. stabilisce che l'ubriachezza volontaria o colposa non esclude né diminuisce l'imputabilità: il soggetto risponde a titolo di dolo o colpa. Solo l'ubriachezza accidentale (art. 91) può escluderla." },
      { aff: "Il minore di quattordici anni è sempre non imputabile.", vero: true,
        traccia: "Vero. L'art. 97 c.p. pone una presunzione assoluta di non imputabilità per il minore di 14 anni. Diversa è la disciplina per i minori tra 14 e 18 anni (art. 98), per i quali la capacità di intendere e di volere va accertata in concreto." }
    ],
    domandaAperta: {
      q: "Il candidato illustri la nozione di imputabilità e le principali cause che la escludono o la diminuiscono.",
      traccia: "L'imputabilità (art. 85) è la capacità di intendere e di volere al momento del fatto, presunta iuris tantum dai 18 anni. Le cause di esclusione/diminuzione sono: la minore età (sotto i 14 anni non imputabilità assoluta ex art. 97; tra 14 e 18 accertamento in concreto ex art. 98); l'infermità di mente, con vizio totale che esclude (art. 88) e vizio parziale che diminuisce (art. 89), comprensiva — secondo le S.U. Raso — anche dei disturbi di personalità gravi; l'ubriachezza e l'uso di stupefacenti, con disciplina differenziata (accidentale, volontaria/colposa, preordinata, abituale, cronica: artt. 91-95); il sordomutismo (art. 96). Gli stati emotivi e passionali sono irrilevanti (art. 90). Va richiamata l'actio libera in causa (art. 87).",
      fonte: "SuperCompendio, Cap. 5 — §3"
    },
    esaminatore: {
      q: "Mi spieghi la disciplina dell'imputabilità in caso di ubriachezza, distinguendone le varie ipotesi.",
      valutazione: { voci: [["Padronanza dei contenuti","8.0"],["Uso delle fonti","8.0"],["Chiarezza espositiva","7.5"],["Proprietà di linguaggio","8.0"]],
        commento: "Corretta la distinzione tra accidentale, volontaria/colposa, preordinata, abituale e cronica. Si poteva collegare l'ubriachezza preordinata all'actio libera in causa (art. 87) e precisare il regime aggravato (art. 92, co. 2)." }
    },
    richiamoLibero: {
      prompt: "A libro chiuso: scrivi le cause di esclusione o diminuzione dell'imputabilità che ricordi.",
      attesi: ["Minore età (artt. 97-98)","Vizio totale (88) e parziale (89) di mente","Ubriachezza/stupefacenti (artt. 91-95)","Sordomutismo (96)","Irrilevanza stati emotivi (90)"],
      fonte: "SuperCompendio, Cap. 5 — §3"
    },
    feynman: { prompt: "Spiega a un amico cosa vuol dire che una persona 'non è imputabile', come se glielo raccontassi semplicemente.",
      riscontro: "Buona spiegazione se rendi l'idea che per essere puniti non basta aver commesso il fatto: bisogna essere stati capaci di capire cosa si stava facendo e di controllarsi. Un bambino piccolo o una persona con una grave malattia mentale possono non avere questa capacità, e allora la legge non li punisce (o li punisce meno). Attento a precisare che ubriacarsi di proposito non ti rende 'non imputabile': hai scelto tu di metterti in quello stato." },
    tools: ["multipla","verofalso","aperta","esaminatore","esempio","richiamo","feynman"]
  },

  /* ============================ 9. TENTATIVO ====================== */
  {
    id: "tentativo", n: 9, icon: "steps",
    title: "Il tentativo",
    subtitle: "Art. 56 c.p.: atti idonei e univoci, desistenza e recesso",
    cap: "Cap. 6 — Le forme di manifestazione",
    assunti: [
      "Il tentativo punisce chi compie atti idonei diretti in modo non equivoco a commettere un delitto (art. 56).",
      "Requisiti: idoneità degli atti e univocità della direzione.",
      "Desistenza volontaria e recesso attivo attenuano o escludono la pena (art. 56 co. 3-4)."
    ],
    spiegazione: `
      <p>Il <strong>delitto tentato</strong> (art. 56 c.p.) ricorre quando «chi compie atti idonei, diretti in modo non equivoco a commettere un delitto, risponde di delitto tentato, se l'azione non si compie o l'evento non si verifica». Il tentativo è configurabile solo per i <strong>delitti</strong> (non per le contravvenzioni) e solo per i delitti <strong>dolosi</strong>.</p>
      <h4>I requisiti</h4>
      <ul>
        <li><strong>Idoneità degli atti</strong>: gli atti devono avere l'attitudine a produrre l'evento. L'idoneità si accerta con giudizio <em>ex ante</em> e in concreto (prognosi postuma), ponendosi nella posizione dell'agente al momento dell'azione.</li>
        <li><strong>Univocità</strong>: gli atti devono essere diretti in modo non equivoco alla commissione del delitto, rivelando il fine perseguito. Secondo la concezione oggettiva, l'univocità è una caratteristica oggettiva degli atti, non un mero dato probatorio del dolo.</li>
      </ul>
      <p>Il superamento della soglia degli <strong>atti preparatori</strong> (di regola non punibili) verso gli <strong>atti esecutivi</strong> segna l'inizio del tentativo punibile, secondo l'orientamento prevalente che valorizza l'inizio dell'esecuzione tipica.</p>
      <h4>Desistenza e recesso attivo</h4>
      <ul>
        <li><strong>Desistenza volontaria</strong> (art. 56, co. 3): se l'agente volontariamente desiste dall'azione, soggiace solo alla pena per gli atti compiuti, se costituiscono per sé un reato. Presuppone che l'azione non sia ancora compiuta.</li>
        <li><strong>Recesso attivo (pentimento operoso)</strong> (art. 56, co. 4): se l'agente, dopo aver completato l'azione, impedisce volontariamente l'evento, beneficia di una diminuzione di pena (da un terzo alla metà).</li>
      </ul>
      <p>Il tentativo va distinto dal <strong>reato impossibile</strong> (art. 49, co. 2): se l'azione è assolutamente inidonea o l'oggetto inesistente, manca l'offensività e non vi è tentativo punibile.</p>`,
    puntiChiave: [
      "Tentativo (art. 56): atti IDONEI + diretti in modo NON EQUIVOCO (univoci).",
      "Configurabile solo per i delitti dolosi (non contravvenzioni, non colpa).",
      "Idoneità: giudizio ex ante e in concreto (prognosi postuma).",
      "Desistenza volontaria (co. 3): azione non ancora compiuta → pena solo per atti già reato.",
      "Recesso attivo (co. 4): azione compiuta ma evento impedito → diminuzione di pena (1/3-1/2). ← spesso confusi",
      "Distinzione dal reato impossibile (art. 49 co. 2): inidoneità assoluta o inesistenza dell'oggetto."
    ],
    esempio: {
      titolo: "Desistenza o recesso attivo?",
      testo: "Tizio punta la pistola contro Caio per ucciderlo ma, prima di sparare, si ferma e rinuncia: è <strong>desistenza volontaria</strong> (art. 56 co. 3) — l'azione non è compiuta — e risponderà solo di eventuali reati già integrati (es. minaccia). Se invece Tizio spara e ferisce Caio, ma poi si ravvede e lo porta in ospedale impedendone la morte, si ha <strong>recesso attivo</strong> (art. 56 co. 4): l'azione era compiuta, ma ha volontariamente impedito l'evento, e otterrà una diminuzione di pena per il tentato omicidio."
    },
    podcast: { title: "Il tentativo", sub: "SuperCompendio · Cap. 6 — Il delitto tentato",
      chapters: [ ["Nozione e fondamento (art. 56)","0:00"], ["Idoneità degli atti","4:50"], ["Univocità","9:10"], ["Desistenza e recesso attivo","13:20"] ] },
    video: { title: "Atti idonei e univoci", sub: "Video lezione · collegata al Cap. 6",
      chapters: [ ["Atti preparatori ed esecutivi","0:00"], ["La prognosi postuma","4:30"], ["Desistenza vs recesso","8:40"] ] },
    mappa: "tentativo",
    flashcards: [
      ["Quali sono i requisiti del tentativo (art. 56)?", "L'idoneità degli atti (attitudine a produrre l'evento, valutata ex ante e in concreto) e l'univocità (atti diretti in modo non equivoco alla commissione del delitto)."],
      ["Differenza tra desistenza volontaria e recesso attivo?", "La desistenza (co. 3) presuppone che l'azione non sia ancora compiuta e fa rispondere solo degli atti già reato; il recesso attivo (co. 4) presuppone l'azione compiuta con evento impedito volontariamente, e dà luogo a diminuzione di pena."],
      ["Il tentativo è configurabile per le contravvenzioni?", "No. È configurabile solo per i delitti, e solo per quelli dolosi."]
    ],
    quiz: [
      { q: "Secondo l'art. 56 c.p., risponde di delitto tentato chi compie atti:",
        opts: ["Preparatori e generici","Idonei, diretti in modo non equivoco a commettere un delitto","Solo materiali, anche equivoci","Colposi"],
        correct: 1,
        why: "Il tentativo richiede atti idonei e diretti in modo non equivoco (univoci) alla commissione di un delitto, quando l'azione non si compie o l'evento non si verifica. Idoneità e univocità sono i due requisiti essenziali.",
        fonte: "SuperCompendio, Cap. 6 — Il tentativo (art. 56 c.p.)" },
      { q: "Il tentativo è configurabile:",
        opts: ["Per delitti e contravvenzioni","Solo per i delitti dolosi","Anche per i delitti colposi","Solo per le contravvenzioni"],
        correct: 1,
        why: "Il tentativo è strutturalmente riferibile ai soli delitti (non alle contravvenzioni) e, tra questi, ai soli delitti dolosi: la direzione non equivoca degli atti presuppone la volontà di realizzare il delitto, incompatibile con la colpa.",
        fonte: "SuperCompendio, Cap. 6 — Il tentativo" },
      { q: "L'idoneità degli atti, nel tentativo, si valuta con giudizio:",
        opts: ["Ex post e in astratto","Ex ante e in concreto (prognosi postuma)","Solo statistico","Discrezionale del giudice"],
        correct: 1,
        why: "L'idoneità si accerta con giudizio ex ante e in concreto (cd. prognosi postuma): ci si pone idealmente nella posizione dell'agente al momento dell'azione, valutando l'attitudine degli atti a produrre l'evento secondo le circostanze conosciute o conoscibili.",
        fonte: "SuperCompendio, Cap. 6 — Il tentativo" },
      { q: "La desistenza volontaria (art. 56, co. 3) presuppone che:",
        opts: ["L'evento si sia verificato","L'azione non sia ancora compiuta","L'agente abbia impedito l'evento dopo l'azione","Il delitto sia consumato"],
        correct: 1,
        why: "La desistenza volontaria opera quando l'azione non è ancora compiuta: l'agente vi rinuncia volontariamente e risponde solo degli atti già compiuti se costituiscono per sé reato. Quando l'azione è compiuta ma l'evento è impedito si ha invece recesso attivo (co. 4).",
        fonte: "SuperCompendio, Cap. 6 — Il tentativo (art. 56 c.p.)" },
      { q: "Il recesso attivo (art. 56, co. 4) comporta:",
        opts: ["La non punibilità totale","Una diminuzione di pena (da un terzo alla metà)","L'aumento della pena","L'applicazione della pena del delitto consumato"],
        correct: 1,
        why: "Nel recesso attivo l'agente, dopo aver completato l'azione, impedisce volontariamente l'evento: ottiene una diminuzione di pena (da un terzo alla metà) per il delitto tentato, non la non punibilità (riservata, entro certi limiti, alla desistenza).",
        fonte: "SuperCompendio, Cap. 6 — Il tentativo (art. 56 c.p.)" },
      { q: "Il delitto tentato si distingue dal reato impossibile (art. 49, co. 2) perché in quest'ultimo:",
        opts: ["Gli atti sono idonei ma equivoci","L'azione è assolutamente inidonea o l'oggetto è inesistente","L'agente desiste","L'evento si verifica"],
        correct: 1,
        why: "Nel reato impossibile l'azione è assolutamente inidonea o l'oggetto inesistente, sicché manca l'offensività: non vi è tentativo punibile. Nel tentativo, invece, gli atti sono idonei e univoci, ma l'azione non si compie o l'evento non si verifica.",
        fonte: "SuperCompendio, Cap. 4 — §4 (art. 49 c.p.)" }
    ],
    veroFalso: [
      { aff: "Il recesso attivo determina la totale non punibilità dell'agente.", vero: false,
        traccia: "Falso. Il recesso attivo (art. 56, co. 4) comporta solo una diminuzione di pena (da un terzo alla metà) per il delitto tentato. La (tendenziale) non punibilità per il tentativo è propria della desistenza volontaria (co. 3), che presuppone però l'azione non ancora compiuta." },
      { aff: "Il tentativo richiede atti idonei e diretti in modo non equivoco alla commissione del delitto.", vero: true,
        traccia: "Vero. L'art. 56 c.p. esige entrambi i requisiti: l'idoneità degli atti (attitudine causale, valutata ex ante e in concreto) e l'univocità (direzione non equivoca verso il delitto). In difetto di uno dei due, non vi è tentativo punibile." }
    ],
    domandaAperta: {
      q: "Il candidato illustri i requisiti del delitto tentato e distingua la desistenza volontaria dal recesso attivo.",
      traccia: "Il tentativo (art. 56) punisce chi compie atti idonei, diretti in modo non equivoco a commettere un delitto, quando l'azione non si compie o l'evento non si verifica. Requisiti: idoneità degli atti (giudizio ex ante e in concreto, prognosi postuma) e univocità (direzione non equivoca, intesa, per la concezione oggettiva, come caratteristica degli atti). È configurabile solo per i delitti dolosi. La desistenza volontaria (co. 3) presuppone l'azione non ancora compiuta: l'agente vi rinuncia e risponde solo degli atti già costituenti reato. Il recesso attivo (co. 4) presuppone l'azione compiuta ma l'evento volontariamente impedito, con diminuzione di pena. Va distinto il reato impossibile (art. 49 co. 2), in cui l'inidoneità assoluta o l'inesistenza dell'oggetto escludono l'offesa.",
      fonte: "SuperCompendio, Cap. 6 — Il tentativo (art. 56 c.p.)"
    },
    esaminatore: {
      q: "Mi spieghi la differenza tra desistenza volontaria e recesso attivo nel delitto tentato.",
      valutazione: { voci: [["Padronanza dei contenuti","8.0"],["Uso delle fonti","7.5"],["Chiarezza espositiva","8.5"],["Proprietà di linguaggio","8.0"]],
        commento: "Distinzione esposta con chiarezza, ancorata al momento dell'azione (non compiuta vs compiuta) e all'effetto (non punibilità vs diminuzione di pena). Per completezza si poteva richiamare la natura della volontarietà della desistenza, che non dev'essere imposta da fattori esterni." }
    },
    richiamoLibero: {
      prompt: "A libro chiuso: scrivi i requisiti del tentativo e la differenza tra desistenza e recesso attivo.",
      attesi: ["Idoneità degli atti","Univocità","Solo delitti dolosi","Desistenza (azione non compiuta)","Recesso attivo (evento impedito)"],
      fonte: "SuperCompendio, Cap. 6 — Il tentativo"
    },
    feynman: { prompt: "Spiega a un amico perché può essere punito anche chi 'ci ha provato' senza riuscirci, e cosa cambia se si ferma da solo.",
      riscontro: "Buona spiegazione se rendi l'idea che la legge punisce anche chi ha fatto passi concreti e inequivocabili verso il reato, anche se non è riuscito (tentativo). Chiarisci poi la differenza: se si ferma prima di completare l'azione, di sua volontà, la legge è molto clemente (desistenza); se invece ha già fatto tutto ma poi corre a rimediare e impedisce il danno, viene punito ma con uno sconto (recesso attivo)." },
    tools: ["multipla","verofalso","aperta","esaminatore","esempio","richiamo","feynman"]
  },

  /* ===================== 10. CONCORSO DI PERSONE =================== */
  {
    id: "concorsoPersone", n: 10, icon: "people",
    title: "Il concorso di persone nel reato",
    subtitle: "Artt. 110 ss. c.p.: la fattispecie plurisoggettiva eventuale",
    cap: "Cap. 6 — Le forme di manifestazione",
    assunti: [
      "L'art. 110 estende la pena a tutti coloro che concorrono nel medesimo reato.",
      "Elementi: pluralità di agenti, fatto tipico, contributo causale, dolo di concorso.",
      "Disciplina speciale per mutamento del titolo (117), reato diverso (116), circostanze (118)."
    ],
    spiegazione: `
      <p>Il <strong>concorso di persone nel reato</strong> (artt. 110 ss. c.p.) è la fattispecie <em>plurisoggettiva eventuale</em>: un reato normalmente realizzabile da una sola persona viene commesso da più soggetti. L'art. 110 stabilisce che «quando più persone concorrono nel medesimo reato, ciascuna di esse soggiace alla pena per questo stabilita»: opera come norma di estensione della punibilità a condotte atipiche (es. l'istigazione, l'agevolazione).</p>
      <h4>Gli elementi costitutivi</h4>
      <ul>
        <li><strong>Pluralità di agenti</strong>: almeno due persone.</li>
        <li><strong>Realizzazione di un fatto di reato</strong> (quantomeno nella forma del tentativo).</li>
        <li><strong>Contributo causale</strong> di ciascun concorrente: materiale (concorso materiale) o morale (concorso morale: determinazione, istigazione, rafforzamento del proposito). Il contributo dev'essere condizione, anche solo agevolatrice, della realizzazione del fatto.</li>
        <li><strong>Elemento soggettivo (dolo di concorso)</strong>: coscienza e volontà di contribuire, insieme ad altri, alla realizzazione del reato.</li>
      </ul>
      <h4>Le forme di concorso</h4>
      <p>Si distinguono l'<strong>autore</strong> e il <strong>coautore</strong>, l'<strong>istigatore</strong> (chi fa nascere o rafforza il proposito), il <strong>determinatore</strong> e l'<strong>agevolatore</strong> (chi facilita l'esecuzione). La cooperazione nel delitto <em>colposo</em> è disciplinata dall'art. 113.</p>
      <h4>La disciplina speciale</h4>
      <ul>
        <li><strong>Art. 116</strong> — reato diverso da quello voluto: il concorrente ne risponde se l'evento è conseguenza della sua condotta, secondo la lettura costituzionalmente orientata, purché prevedibile.</li>
        <li><strong>Art. 117</strong> — mutamento del titolo del reato per taluno dei concorrenti (reato proprio): se muta per la qualità personale di un concorrente, ne rispondono anche gli altri.</li>
        <li><strong>Art. 118</strong> — valutazione delle circostanze: quelle soggettive si applicano solo al concorrente cui si riferiscono.</li>
        <li><strong>Art. 114</strong> — attenuante per il contributo di minima importanza.</li>
      </ul>`,
    puntiChiave: [
      "Art. 110: norma di estensione — punisce anche condotte atipiche di partecipazione.",
      "Elementi: pluralità di agenti + fatto tipico + contributo causale + dolo di concorso.",
      "Concorso materiale (esecuzione) e morale (istigazione, determinazione, rafforzamento).",
      "Art. 116: reato diverso da quello voluto → responsabilità se prevedibile (lettura ex art. 27 Cost.).",
      "Art. 117: mutamento del titolo del reato per la qualifica di un concorrente.",
      "Art. 114: attenuante per contributo di minima importanza; art. 118: circostanze soggettive."
    ],
    esempio: {
      titolo: "Concorso morale: il 'palo' e il mandante",
      testo: "In una rapina, chi entra in banca e minaccia i cassieri è <strong>autore materiale</strong>. Ma risponde di concorso anche chi fa da 'palo' all'esterno (<strong>concorso materiale agevolatore</strong>) e chi ha ideato e ordinato il colpo restando a casa (<strong>concorso morale</strong>, come determinatore). Tutti soggiacciono alla pena del reato (art. 110), perché ciascuno ha fornito un contributo causale, materiale o morale, alla realizzazione del fatto comune, con la coscienza e volontà di cooperare."
    },
    podcast: { title: "Il concorso di persone", sub: "SuperCompendio · Cap. 6 — Concorso di persone",
      chapters: [ ["La fattispecie plurisoggettiva eventuale","0:00"], ["Gli elementi costitutivi","5:00"], ["Concorso materiale e morale","9:40"], ["Artt. 116, 117, 118","14:10"] ] },
    video: { title: "Concorso materiale e morale", sub: "Video lezione · collegata al Cap. 6",
      chapters: [ ["L'art. 110 come norma di estensione","0:00"], ["Il contributo causale","4:40"], ["Il reato diverso (art. 116)","8:50"] ] },
    mappa: "concorsoPersone",
    flashcards: [
      ["Quali sono gli elementi del concorso di persone?", "Pluralità di agenti, realizzazione di un fatto di reato, contributo causale di ciascuno (materiale o morale), dolo di concorso (volontà di cooperare alla realizzazione comune)."],
      ["Che funzione svolge l'art. 110 c.p.?", "È una norma di estensione della punibilità: rende tipiche e punibili condotte atipiche di partecipazione (istigazione, agevolazione) che da sole non integrerebbero il reato."],
      ["Cosa dispone l'art. 116 c.p.?", "Regola il reato diverso da quello voluto da taluno dei concorrenti: questi ne risponde se è conseguenza della sua condotta, purché — in lettura costituzionalmente orientata — prevedibile."]
    ],
    quiz: [
      { q: "L'art. 110 c.p., quando più persone concorrono nel medesimo reato:",
        opts: ["Punisce solo l'autore materiale","Assoggetta ciascun concorrente alla pena stabilita per il reato","Riduce sempre la pena della metà","Esclude la responsabilità dei complici"],
        correct: 1,
        why: "L'art. 110 sancisce che ciascun concorrente soggiace alla pena prevista per il reato. Opera come norma di estensione della punibilità, rendendo rilevanti anche condotte atipiche di partecipazione (istigazione, agevolazione).",
        fonte: "SuperCompendio, Cap. 6 — Concorso di persone (art. 110 c.p.)" },
      { q: "Il concorso morale nel reato si realizza mediante:",
        opts: ["L'esecuzione materiale del fatto","Istigazione, determinazione o rafforzamento del proposito criminoso altrui","La sola presenza sul luogo","Un contributo colposo"],
        correct: 1,
        why: "Il concorso morale consiste nel determinare o istigare altri al reato, ovvero nel rafforzarne il proposito. Si distingue dal concorso materiale, che attiene all'esecuzione o all'agevolazione materiale del fatto.",
        fonte: "SuperCompendio, Cap. 6 — Concorso di persone" },
      { q: "Il contributo del concorrente, per essere penalmente rilevante, deve:",
        opts: ["Essere sempre causa esclusiva dell'evento","Aver costituito condizione, anche solo agevolatrice, della realizzazione del fatto","Essere materiale e mai morale","Coincidere con l'azione tipica"],
        correct: 1,
        why: "È sufficiente che il contributo abbia costituito una condizione, anche solo agevolatrice, della realizzazione del fatto comune: non occorre che sia stato causa esclusiva o indispensabile, purché abbia inciso sul processo causale.",
        fonte: "SuperCompendio, Cap. 6 — Concorso di persone" },
      { q: "Ai sensi dell'art. 116 c.p., del reato diverso da quello voluto il concorrente risponde:",
        opts: ["Mai","Se l'evento è conseguenza della sua condotta e, secondo lettura costituzionale, prevedibile","Solo se lo ha materialmente eseguito","Solo a titolo di dolo intenzionale"],
        correct: 1,
        why: "L'art. 116 imputa al concorrente il reato diverso se conseguenza della sua condotta. La giurisprudenza costituzionale ne ha dato lettura conforme all'art. 27 Cost., esigendo che il diverso reato fosse prevedibile (nesso psichico minimo), per evitare forme di pura responsabilità oggettiva.",
        fonte: "SuperCompendio, Cap. 6 — Concorso di persone (art. 116 c.p.)" },
      { q: "L'art. 114 c.p. prevede una circostanza attenuante per il concorrente che:",
        opts: ["Ha agito con dolo","Ha prestato un contributo di minima importanza nella preparazione o esecuzione","Si è limitato a istigare","Ha agito per motivi futili"],
        correct: 1,
        why: "L'art. 114 consente al giudice di diminuire la pena per il concorrente la cui opera abbia avuto minima importanza nella preparazione o esecuzione del reato. È una valutazione facoltativa e di stretta applicazione.",
        fonte: "SuperCompendio, Cap. 6 — Concorso di persone (art. 114 c.p.)" },
      { q: "La cooperazione nel delitto colposo è disciplinata da:",
        opts: ["L'art. 110 c.p.","L'art. 113 c.p.","L'art. 116 c.p.","L'art. 56 c.p."],
        correct: 1,
        why: "L'art. 113 c.p. disciplina specificamente la cooperazione nel delitto colposo, configurabile per i soli delitti. Per le contravvenzioni i comportamenti corrispondenti rilevano ex artt. 110 e 42, co. 4.",
        fonte: "SuperCompendio, Cap. 6 — Concorso di persone (art. 113 c.p.)" }
    ],
    veroFalso: [
      { aff: "Nel concorso di persone è punibile solo chi pone in essere la condotta tipica descritta dalla norma.", vero: false,
        traccia: "Falso. L'art. 110 c.p. è norma di estensione: rende punibili anche condotte atipiche di partecipazione (istigazione, determinazione, agevolazione materiale o morale), purché abbiano fornito un contributo causale, anche solo agevolatore, alla realizzazione del fatto comune." },
      { aff: "Il concorso può essere sia materiale sia morale.", vero: true,
        traccia: "Vero. Il concorso materiale attiene all'esecuzione o all'agevolazione materiale del fatto; il concorso morale consiste nel determinare o istigare altri, o nel rafforzarne il proposito criminoso. Entrambe le forme integrano il contributo rilevante ex art. 110." }
    ],
    domandaAperta: {
      q: "Il candidato illustri gli elementi costitutivi del concorso di persone nel reato e la funzione dell'art. 110 c.p.",
      traccia: "Il concorso di persone (artt. 110 ss.) è la fattispecie plurisoggettiva eventuale: l'art. 110 estende la pena a tutti i concorrenti, operando come norma di estensione della punibilità a condotte atipiche di partecipazione. Elementi: pluralità di agenti; realizzazione di un fatto di reato (almeno tentato); contributo causale di ciascuno, materiale o morale (determinazione, istigazione, rafforzamento del proposito), purché condizione anche solo agevolatrice del fatto; dolo di concorso (coscienza e volontà di cooperare). Va richiamata la disciplina speciale: art. 116 (reato diverso, con lettura costituzionalmente orientata sulla prevedibilità), art. 117 (mutamento del titolo per la qualifica di un concorrente), art. 118 (circostanze soggettive), art. 114 (contributo di minima importanza), art. 113 (cooperazione colposa).",
      fonte: "SuperCompendio, Cap. 6 — Concorso di persone"
    },
    esaminatore: {
      q: "Mi spieghi la differenza tra concorso materiale e concorso morale, con un esempio.",
      valutazione: { voci: [["Padronanza dei contenuti","8.0"],["Uso delle fonti","8.0"],["Chiarezza espositiva","8.0"],["Proprietà di linguaggio","7.5"]],
        commento: "Distinzione corretta ed esemplificata (palo / mandante). Per completezza si poteva precisare che anche il concorso morale richiede un contributo causale effettivo (rafforzamento concreto del proposito), non bastando una mera adesione psicologica o presenza passiva." }
    },
    richiamoLibero: {
      prompt: "A libro chiuso: scrivi gli elementi del concorso di persone e le forme di concorso che ricordi.",
      attesi: ["Pluralità di agenti","Contributo causale","Concorso materiale","Concorso morale (istigazione)","Dolo di concorso"],
      fonte: "SuperCompendio, Cap. 6 — Concorso di persone"
    },
    feynman: { prompt: "Spiega a un amico perché, in una rapina, viene punito anche chi fa solo 'il palo' o chi ha solo ordinato il colpo.",
      riscontro: "Buona spiegazione se rendi l'idea che la legge non guarda solo a chi 'materialmente' compie il reato, ma a tutti quelli che hanno dato una mano perché succedesse: chi fa da palo serve a far riuscire il colpo, chi lo ordina ne è la mente. Ognuno ha messo un pezzo, quindi ognuno risponde. Ottimo se precisi che serve un contributo vero (non basta essere lì per caso) e la volontà di partecipare." },
    tools: ["multipla","verofalso","aperta","esaminatore","esempio","richiamo","feynman"]
  }
);
