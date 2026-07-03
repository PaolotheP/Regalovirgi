/* =========================================================================
   SIRIO — DIRITTO PENALE · Capitolo 6: Causalità e offensività.
   Fonte: Marinucci·Dolcini·Gatta, Manuale di Diritto penale, Parte generale
   (Sezione IV "Il rapporto di causalità", pagg. 95-107; Sezione V "Il
   principio di offensività", pagg. 108-123). Nessuna integrazione esterna.
   ========================================================================= */

export const PEN_CAP6 = [
  {
    id: "causalita",
    part: "generale",
    chapter: 6,
    chapterTitle: "Causalità e offensività",
    title: "Il rapporto di causalità",
    subtitle: "Artt. 40-41 c.p., condicio sine qua non, leggi scientifiche, Franzese, cause sopravvenute, causalità omissiva",
    articoli: ["art. 40 c.p.", "art. 41 c.p.", "art. 25, co. 2, Cost.", "art. 27 Cost.", "art. 533 c.p.p."],
    pages: [95, 107],
    depth: "deep",
    layers: {
      essenziale:
        "Ogni fattispecie che punisce la causazione di un <strong>evento naturalistico</strong> richiede, tra gli elementi costitutivi, il <strong>nesso di causalità</strong> tra condotta ed evento: senza la certezza che l'evento derivi dal comportamento del reo, si rischia di punire qualcuno per fatti riferibili ad altre cause, in frizione con i principi di <em>materialità</em> (art. 25, co. 2, Cost.) e di <em>personalità della responsabilità penale</em> (art. 27 Cost.). La disciplina è negli artt. 40 e 41 c.p.: l'art. 40, co. 1 esige che l'evento sia <em>conseguenza</em> dell'azione od omissione; l'art. 41 regola il concorso di cause. L'orientamento nettamente prevalente ritiene che il codice avalli la <strong>teoria della condicio sine qua non</strong>: la condotta è causa se costituisce una delle condizioni necessarie dell'evento (equivalenza delle condizioni). L'accertamento avviene con il <strong>giudizio controfattuale</strong>: si elimina mentalmente la condotta e si verifica se, senza di essa, l'evento si sarebbe ugualmente prodotto. Poiché il giudizio presuppone la conoscenza della relazione causale, la giurisprudenza impone la <strong>sussunzione sotto leggi scientifiche di copertura</strong>, universali o statistiche. Le Sezioni Unite <strong>Franzese</strong> (10 luglio 2002, n. 30328) hanno chiarito che anche leggi statistiche con coefficiente medio-basso fondano la condanna, purché la <strong>probabilità logica</strong> — cioè la pertinenza della legge al caso concreto, con esclusione dei decorsi causali alternativi — raggiunga un'elevata <em>credibilità razionale</em> (certezza processuale, oltre ogni ragionevole dubbio ex art. 533 c.p.p.). Il concorso di cause non esclude il nesso (art. 41, co. 1 e 3); lo escludono solo le <strong>cause sopravvenute da sole sufficienti</strong> a determinare l'evento (art. 41, co. 2). Nella <strong>causalità omissiva</strong> il giudizio controfattuale è ipotetico: si aggiunge mentalmente l'azione doverosa omessa.",
      approfondimenti: [
        {
          label: "I limiti della teoria condizionalistica",
          body:
            "La condicio sine qua non, equiparando tutte le condizioni, rischia il <em>regressum ad infinitum</em> (fino ai genitori dell'omicida, che con la procreazione hanno posto una condizione dell'evento). Fallisce inoltre in due casi: la <strong>causalità addizionale</strong> (A e B versano indipendentemente una dose mortale di veleno ciascuno: eliminando mentalmente ciascuna condotta l'evento resta, sicché nessuno l'avrebbe causato) e la <strong>causalità alternativa ipotetica</strong> (il malato destinato a morte imminente ucciso da un'iniezione mortale). La sentenza Franzese sdrammatizza queste ipotesi: l'accertamento va riferito all'evento <em>hic et nunc</em>, così come concretamente verificatosi, e il nesso sussiste se la condotta ha contribuito a quell'evento concreto, a nulla rilevando che un evento analogo si sarebbe comunque prodotto."
        },
        {
          label: "Le teorie correttive: causalità adeguata, umana, imputazione obiettiva",
          body:
            "Per la <strong>causalità adeguata</strong> (minoritaria) l'evento deve essere sviluppo probabile e prevedibile della condotta, secondo prognosi postuma ex ante; è criticata perché anticipa nella causalità valutazioni di colpevolezza. Per la <strong>causalità umana</strong> (Antolisei) il nesso è escluso solo dal concorso di fattori eccezionali, fuori dal potere di dominio dell'agente: ha avuto seguito in giurisprudenza, ma Marinucci-Dolcini-Gatta la ritengono inutile e produttiva di conseguenze \"paradossali e insostenibili\". Per l'<strong>imputazione obiettiva dell'evento</strong>, accolta dalla dottrina dominante, l'evento è imputabile se realizza il rischio creato dalla condotta (l'infezione della ferita sì; il rischio nuovo generato da un'operazione negligente no); alcune pronunce recenti sembrano avallarla parlando di rischio nuovo e incommensurabile."
        },
        {
          label: "Leggi universali e leggi statistiche; il metodo bifasico",
          body:
            "Le <strong>leggi universali</strong> attestano con certezza assoluta che un fattore produce invariabilmente un evento; le <strong>leggi statistiche</strong> lo attestano solo in una percentuale di casi. Franzese ha delineato un accertamento <strong>bifasico</strong>: la <em>probabilità statistica</em> misura la frequenza della successione di eventi secondo la legge scientifica in sé; la <em>probabilità logica</em> misura la ricorrenza di quella legge nel caso concreto. Solo la seconda dimostra, oltre ogni ragionevole dubbio, la riferibilità causale dell'evento alla condotta. Nei settori privi di leggi scientifiche riconosciute (c.d. causalità psichica) il giudizio resta esperibile su affidabili massime di esperienza, sempre con esclusione dei decorsi alternativi."
        },
        {
          label: "Causalità penale e causalità civile",
          body:
            "Secondo l'orientamento largamente dominante le due causalità non coincidono: la responsabilità civile alloca il costo del danno, quella penale sanziona condotte riprovevoli; solo il diritto penale è presidiato dagli artt. 25 e 27 Cost.; la responsabilità oggettiva, bandita nel penale, è ammessa nel civile. Ne discendono coefficienti probatori diversi: condanna penale solo <em>oltre ogni ragionevole dubbio</em> (art. 533 c.p.p.), condanna risarcitoria anche secondo la regola del <em>più probabile che non</em> (Cass. civ., Sez. Un., 11 gennaio 2008, n. 581). Inoltre in sede civile l'art. 41, co. 2 viene riempito con la causalità adeguata, in sede penale con la causalità umana."
        }
      ],
      giurisprudenza: [
        {
          label: "SU Franzese, 10 luglio 2002, n. 30328",
          body:
            "Le Sezioni Unite hanno respinto sia il criterio delle \"serie chances di successo\" (aumento del rischio), sia quello delle sentenze Battisti del 2000 che pretendevano leggi con probabilità vicina alla certezza. È intollerabile un diverso grado di certezza tra causalità attiva e omissiva: in entrambe serve la <strong>certezza processuale</strong>, raggiungibile anche con leggi statistiche a coefficiente medio-basso, purché pertinenti al caso concreto secondo <strong>probabilità logica</strong> ed esclusi i decorsi causali alternativi. L'oltre ogni ragionevole dubbio è canone logico di giudizio, non criterio di validità della legge di copertura."
        },
        {
          label: "SU ThyssenKrupp, 18 settembre 2014, n. 38343",
          body:
            "Ribadita Franzese sull'identità del grado di probabilità, le Sezioni Unite hanno evidenziato che nella causalità omissiva il giudizio controfattuale ha carattere <strong>predittivo</strong> anziché esplicativo: le cause naturalistiche dell'evento sono note e si indaga l'efficacia salvifica dell'intervento mancato, formulando un'ipotesi sugli effetti dell'azione omessa quanto più corroborata dalle circostanze concrete (principi ribaditi da Cass., Sez. IV, 23 ottobre 2024, n. 41173). La sentenza Cozzini (Cass., Sez. IV, 17 settembre 2010, n. 43786) ha fissato i criteri di selezione delle leggi scientifiche controverse: solidità degli studi, consenso della comunità scientifica, indipendenza del ricercatore."
        },
        {
          label: "Il caso Cucchi: Cass., Sez. V, 9 maggio 2022, n. 18396",
          body:
            "Nel confermare la condanna dei due carabinieri ex art. 584 c.p., la Corte ha escluso che il nesso tra le lesioni originarie e la morte fosse interrotto dal successivo comportamento negligente dei sanitari e da quello oppositivo della vittima: l'omissione intermedia, pur idonea in ipotesi a evitare l'evento, non interrompe il nesso se non costituisce un fatto imprevedibile o uno sviluppo assolutamente atipico della serie causale. Analogamente, la condotta imprudente dell'offeso esclude il nesso solo se eccezionale, abnorme, radicalmente esorbitante dai rischi prevedibili (Cass., Sez. IV, 29 maggio 2014, n. 22249; Sez. IV, 5 gennaio 2023, n. 72)."
        }
      ],
      eccezioni: [
        {
          label: "Art. 41, co. 2: solo cause sopravvenute eccezionali",
          body:
            "L'attitudine interruttiva riguarda i soli <strong>fattori eccezionali sopravvenuti</strong>: le concause preesistenti o concomitanti non possono fisiologicamente interrompere una catena causale (art. 41, co. 1). Errore ricorrente è leggere la norma come riferita alle sole serie causali del tutto autonome (l'avvelenato ucciso dal fulmine): tesi criticata, perché la nozione stessa di causa sopravvenuta evoca l'innesto nella serie avviata dalla condotta. La lettura preferibile vi vede un correttivo alla teoria condizionalistica per i fattori che deviano il decorso causale in modo anomalo (morte nell'incidente dell'ambulanza)."
        },
        {
          label: "Non confondere validità della legge e prova del caso concreto",
          body:
            "Errore da evitare: invocare l'oltre ogni ragionevole dubbio per misurare la validità della legge di copertura. Si confonderebbe il piano processuale con quello sostanziale, attribuendo valenza probatoria fattuale a una regola di giudizio che è canone logico di ragionamento. La percentuale statistica della legge è una cosa; la sua pertinenza al caso concreto (probabilità logica) è un'altra, ed è quest'ultima che deve raggiungere l'elevata credibilità razionale."
        }
      ]
    },
    sintesi: [
      "Artt. 40-41 c.p.: l'evento deve essere conseguenza dell'azione od omissione.",
      "Teoria condizionalistica: causa è ogni condizione necessaria, accertata col giudizio controfattuale.",
      "Accertamento tramite sussunzione sotto leggi scientifiche, universali o statistiche.",
      "Franzese (SU 30328/2002): probabilità logica e certezza processuale, esclusi i decorsi alternativi.",
      "Il concorso di cause non esclude il nesso; lo interrompono solo le sopravvenute da sole sufficienti.",
      "Causalità omissiva: giudizio ipotetico-predittivo, si aggiunge mentalmente l'azione omessa."
    ],
    esempi: [
      {
        titolo: "Il pedone investito e l'incendio in ospedale",
        testo:
          "Marco, alla guida, investe il pedone Luigi, che riporta gravi ferite. Primo scenario: Luigi muore per dissanguamento. Eliminando mentalmente la condotta di Marco, l'evento morte viene meno: la condotta è condicio sine qua non e la morte è sviluppo del rischio creato, sicché il nesso sussiste. Secondo scenario: Luigi, ricoverato, muore in un incendio scoppiato nell'ospedale. La condotta di Marco resta condizione necessaria (senza l'investimento Luigi non sarebbe stato in ospedale), ma l'incendio è un fattore eccezionale sopravvenuto che devia il decorso causale: opera l'art. 41, co. 2, c.p. e il nesso è interrotto. Diverso ancora il caso dell'incidente occorso all'ambulanza: per la teoria della causalità umana si tratta di fattore raro ma non eccezionale, mentre la lettura dell'art. 41, co. 2 come correttivo vi ravvisa uno sviluppo anomalo interruttivo."
      },
      {
        titolo: "Il medico e l'omissione salvifica",
        testo:
          "La dott.ssa Bianchi, di turno al pronto soccorso, dimette il paziente Aldo senza eseguire gli accertamenti dovuti; Aldo muore poche ore dopo per una patologia che quegli accertamenti avrebbero rivelato. Qui la causalità è omissiva: il giudizio controfattuale non elimina una condotta, ma aggiunge mentalmente l'azione doverosa omessa, chiedendosi se l'intervento tempestivo avrebbe impedito l'evento. Secondo Franzese non basta che la terapia avesse serie chances di successo, né occorre una legge con probabilità prossima alla certezza: il giudice, sulla base delle leggi scientifiche disponibili e delle peculiarità del caso concreto, deve accertare con probabilità logica — esclusi i decorsi alternativi — che l'azione omessa avrebbe salvato Aldo. Solo così la condanna supera la soglia della certezza processuale ex art. 533 c.p.p."
      }
    ],
    flashcards: [
      ["Come si accerta il nesso causale secondo la teoria condizionalistica?", "Con il giudizio controfattuale: si elimina mentalmente la condotta e si verifica se, senza di essa, l'evento si sarebbe ugualmente prodotto; se non si sarebbe verificato, la condotta è condicio sine qua non."],
      ["Che differenza c'è tra probabilità statistica e probabilità logica?", "La statistica misura la frequenza della successione di eventi secondo la legge scientifica in sé; la logica misura la pertinenza di quella legge al caso concreto, previa esclusione dei decorsi causali alternativi (SU Franzese 30328/2002)."],
      ["Quando le cause sopravvenute escludono il nesso causale?", "Ex art. 41, co. 2, c.p., quando sono da sole sufficienti a determinare l'evento: fattori eccezionali che deviano il decorso causale; le concause preesistenti o simultanee non interrompono mai il nesso."],
      ["In cosa differisce il giudizio controfattuale nella causalità omissiva?", "Non si elimina la condotta ma si aggiunge mentalmente l'azione doverosa omessa, verificando se avrebbe impedito l'evento: giudizio ipotetico-predittivo anziché esplicativo (SU ThyssenKrupp 38343/2014)."],
      ["Cosa sostiene la teoria della causalità umana e chi la critica?", "Il nesso è escluso solo dal concorso di fattori eccezionali fuori dal dominio dell'agente (Antolisei); ha seguito in giurisprudenza, ma Marinucci-Dolcini-Gatta la giudicano inutile e fonte di conseguenze paradossali."],
      ["Causalità penale e civile coincidono?", "No, per l'orientamento dominante: funzioni e garanzie diverse; in penale serve la prova oltre ogni ragionevole dubbio, in civile basta il più probabile che non (Cass. civ. SU 581/2008)."]
    ],
    comparativa: {
      titolo: "Causalità attiva vs Causalità omissiva",
      a: "Causalità attiva",
      b: "Causalità omissiva",
      righe: [
        { profilo: "Oggetto dell'accertamento", a: "Se l'azione compiuta è causa dell'evento verificatosi", b: "Se l'azione doverosa omessa avrebbe impedito l'evento" },
        { profilo: "Giudizio controfattuale", a: "Eliminazione mentale della condotta; carattere esplicativo", b: "Aggiunta mentale dell'azione omessa; carattere ipotetico-predittivo" },
        { profilo: "Grado di certezza richiesto", a: "Certezza processuale, oltre ogni ragionevole dubbio (Franzese)", b: "Identico: certezza processuale, con ipotesi salvifica corroborata dal caso concreto (ThyssenKrupp)" },
        { profilo: "Metodo", a: "Bifasico: probabilità statistica più probabilità logica, esclusi i decorsi alternativi", b: "Bifasico, ma l'esclusione dei decorsi alternativi è inutile: le cause naturali sono note, si indaga l'efficacia salvifica" }
      ]
    },
    quiz: [
      {
        q: "Secondo la teoria della condicio sine qua non, la condotta è causa dell'evento quando:",
        opts: [
          "costituisce lo sviluppo prevedibile e normale della catena causale innescata",
          "eliminata mentalmente, l'evento concreto non si sarebbe verificato",
          "ha creato un rischio giuridicamente rilevante poi realizzatosi nell'evento",
          "non concorrono fattori eccezionali fuori dal dominio dell'agente"
        ],
        correct: 1,
        difficulty: 1,
        commonError: "Confondere la teoria condizionalistica con i suoi correttivi: prevedibilità (causalità adeguata), rischio (imputazione obiettiva) e fattori eccezionali (causalità umana) non ne fanno parte.",
        why: "La condicio sine qua non si fonda sull'equivalenza delle condizioni: è causa ogni condizione necessaria dell'evento, accertata ex post con il giudizio controfattuale di eliminazione mentale della condotta.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il rapporto di causalità"
      },
      {
        q: "Le Sezioni Unite Franzese (n. 30328/2002) hanno affermato che una legge statistica con coefficiente probabilistico medio-basso:",
        opts: [
          "non può mai fondare una sentenza di condanna, occorrendo leggi universali",
          "fonda la condanna solo nei reati colposi commissivi, non in quelli omissivi",
          "può fondare la condanna se pertinente al caso concreto secondo probabilità logica, esclusi i decorsi alternativi",
          "fonda la condanna solo se integrata da una massima di esperienza convergente"
        ],
        correct: 2,
        difficulty: 3,
        commonError: "Ritenere che Franzese abbia richiesto coefficienti probabilistici prossimi alla certezza: è esattamente l'indirizzo (sentenze Battisti) che le Sezioni Unite hanno respinto.",
        why: "Franzese distingue probabilità statistica e probabilità logica: anche una legge a coefficiente medio-basso sorregge la condanna quando risulta attagliarsi al caso concreto con elevata credibilità razionale, per l'esclusione dell'interferenza di decorsi causali alternativi.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il rapporto di causalità"
      },
      {
        q: "Ai sensi dell'art. 41, co. 2, c.p., escludono il rapporto di causalità:",
        opts: [
          "le cause sopravvenute da sole sufficienti a determinare l'evento",
          "tutte le concause indipendenti dall'azione od omissione del colpevole",
          "le cause preesistenti o simultanee di carattere eccezionale",
          "le concause costituite dal fatto illecito di un terzo"
        ],
        correct: 0,
        difficulty: 2,
        commonError: "Attribuire efficacia interruttiva anche alle concause preesistenti o simultanee: non essendo sopravvenute, non possono fisiologicamente interrompere la catena causale (art. 41, co. 1 e 3).",
        why: "Il concorso di cause preesistenti, simultanee o sopravvenute, anche indipendenti dalla condotta o costituite dal fatto illecito altrui, non esclude il nesso; solo le sopravvenute da sole sufficienti lo interrompono.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il rapporto di causalità"
      },
      {
        q: "Nella causalità omissiva il giudizio controfattuale si svolge:",
        opts: [
          "eliminando mentalmente la condotta attiva tenuta dall'agente",
          "verificando ex ante la prevedibilità dell'evento da parte del garante",
          "accertando se l'omissione ha aumentato il rischio di verificazione dell'evento",
          "aggiungendo mentalmente l'azione omessa e verificando se avrebbe impedito l'evento"
        ],
        correct: 3,
        difficulty: 2,
        commonError: "Ripiegare sul criterio dell'aumento del rischio o delle serie chances di successo: orientamento tradizionale criticato e superato da Franzese, perché rischia di punire per eventi comunque inevitabili.",
        why: "L'omissione è un quid normativo: non si desume se un'azione ha causato l'evento, ma se il compimento dell'azione doverosa omessa lo avrebbe impedito. Il giudizio è quindi ipotetico, con struttura predittiva (SU ThyssenKrupp 38343/2014).",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il rapporto di causalità"
      },
      {
        q: "A e B, indipendentemente l'uno dall'altro, versano ciascuno una dose mortale di veleno nel pasto di C, che muore. La difficoltà che il caso pone alla teoria condizionalistica si definisce:",
        opts: [
          "causalità alternativa ipotetica",
          "causalità addizionale",
          "regressum ad infinitum",
          "concorso di cause sopravvenute"
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Confondere causalità addizionale (più condizioni congiunte, ciascuna di per sé sufficiente) e causalità alternativa ipotetica (un decorso causale diverso avrebbe comunque prodotto l'evento, come il malato morente ucciso dall'iniezione).",
        why: "Nella causalità addizionale l'eliminazione mentale di ciascun fattore non fa venir meno l'evento, con l'esito paradossale che nessuna condotta ne sarebbe causa. L'accertamento riferito all'evento hic et nunc, valorizzato da Franzese, sdrammatizza l'obiezione.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il rapporto di causalità"
      },
      {
        q: "Secondo la giurisprudenza, la condotta imprudente della stessa persona offesa esclude il nesso causale:",
        opts: [
          "sempre, perché il fatto colposo della vittima è causa esclusiva dell'evento",
          "mai, essendo il comportamento della vittima giuridicamente irrilevante",
          "solo quando presenta caratteri di eccezionalità e abnormità, innescando un rischio eccentrico",
          "solo nei reati dolosi, mentre nei reati colposi il nesso permane in ogni caso"
        ],
        correct: 2,
        difficulty: 3,
        commonError: "Ritenere che l'imprudenza della vittima interrompa di per sé il nesso: chi genera situazioni di pericolo risponde anche delle conseguenze di un imprevisto comportamento imprudente dell'offeso.",
        why: "Il fatto umano dell'offeso è un fattore causale come gli altri; il nesso è escluso solo se la sua condotta è eccezionale, abnorme, radicalmente esorbitante dai rischi prevedibili o eccentrica rispetto al rischio governato dall'agente (Cass. 22249/2014; 72/2023).",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il rapporto di causalità"
      },
      {
        q: "Quale affermazione sui rapporti tra causalità penale e causalità civile è corretta secondo l'orientamento dominante?",
        opts: [
          "In sede civile la condanna risarcitoria può fondarsi sulla regola del più probabile che non",
          "Anche in sede civile il nesso va provato oltre ogni ragionevole dubbio",
          "In sede penale l'art. 41, co. 2 c.p. è riempito con la teoria della causalità adeguata",
          "Le due nozioni coincidono per esigenze di unitarietà del sistema"
        ],
        correct: 0,
        difficulty: 5,
        commonError: "Estendere al processo civile lo standard penalistico dell'oltre ogni ragionevole dubbio: fu la conseguenza iniziale della tesi della corrispondenza, poi abbandonata dall'orientamento dominante.",
        why: "Le due responsabilità hanno funzioni e garanzie diverse, con distinti coefficienti probatori: oltre ogni ragionevole dubbio nel penale, più probabile che non nel civile (Cass. civ. SU 581/2008). In penale l'art. 41, co. 2 è letto con la causalità umana, in civile con l'adeguata.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il rapporto di causalità"
      }
    ],
    veroFalso: [
      {
        aff: "Le concause preesistenti, se di carattere eccezionale, interrompono il rapporto di causalità ai sensi dell'art. 41, co. 2, c.p.",
        vero: false,
        traccia: "Falso. L'attitudine interruttiva è riferita dall'art. 41, co. 2, c.p. ai soli fattori eccezionali sopravvenuti: le concause preesistenti o concomitanti, non essendo sopravvenute, non possono fisiologicamente interrompere una catena causale, in conformità all'art. 41, co. 1, c.p."
      },
      {
        aff: "Secondo le Sezioni Unite Franzese, il grado di certezza richiesto per l'accertamento causale è identico nella causalità attiva e in quella omissiva.",
        vero: true,
        traccia: "Vero. Le SU hanno affermato l'intollerabilità di un diverso grado di certezza tra le due forme di causalità: in entrambe la condanna esige l'accertamento del nesso in termini di certezza processuale, raggiungibile anche con leggi non universali pertinenti al caso concreto secondo probabilità logica."
      },
      {
        aff: "Nei settori non governati da leggi scientifiche riconosciute, come la causalità psichica, il giudizio causale è sempre precluso.",
        vero: false,
        traccia: "Falso. Il giudizio resta esperibile ove siano reperibili affidabili massime di esperienza, utilizzabili al pari delle leggi statistiche per corroborare l'ipotesi causale, purché sia possibile escludere ogni decorso alternativo oltre ogni ragionevole dubbio (Cass., Sez. IV, 25 marzo 2016, n. 12478, sul terremoto di L'Aquila)."
      }
    ],
    aperta: {
      q: "Il candidato illustri l'accertamento del rapporto di causalità, con particolare riguardo al modello della sussunzione sotto leggi scientifiche e agli approdi delle Sezioni Unite Franzese.",
      traccia:
        "La risposta deve muovere dagli artt. 40 e 41 c.p. e dal fondamento costituzionale del nesso causale (artt. 25, co. 2, e 27 Cost.). Va esposta la teoria condizionalistica con il giudizio controfattuale, evidenziandone i limiti (regressum ad infinitum, causalità addizionale e alternativa ipotetica) e i correttivi dottrinali (causalità adeguata, causalità umana, imputazione obiettiva dell'evento). Il cuore è il modello di sussunzione sotto leggi scientifiche di copertura, universali o statistiche, e la svolta delle SU Franzese (10 luglio 2002, n. 30328): superamento dell'indirizzo che pretendeva coefficienti prossimi alla certezza, metodo bifasico fondato su probabilità statistica e probabilità logica, certezza processuale raggiunta con l'esclusione dei decorsi causali alternativi. Va infine ricordata l'identità di standard tra causalità attiva e omissiva, con la precisazione strutturale della sentenza ThyssenKrupp sul carattere predittivo del controfattuale omissivo.",
      fonte: "Marinucci·Dolcini·Gatta, PG — Il rapporto di causalità"
    },
    consigliate: ["mappa", "comparativa", "mcq", "flashcards", "aperta"],
    media: {
      podcast: {
        title: "Il rapporto di causalità: dalla condicio sine qua non a Franzese",
        chapters: [
          ["Artt. 40-41 c.p. e teoria condizionalistica", 0],
          ["Leggi scientifiche e sentenza Franzese", 320],
          ["Concorso di cause e art. 41, co. 2", 640],
          ["La causalità omissiva", 900]
        ]
      },
      mappa: true
    }
  },
  {
    id: "offensivita",
    part: "generale",
    chapter: 6,
    chapterTitle: "Causalità e offensività",
    title: "Il principio di offensività",
    subtitle: "Nullum crimen sine iniuria: offensività in astratto e in concreto, reato impossibile e reato putativo",
    articoli: ["art. 49 c.p.", "art. 25, co. 2, Cost.", "art. 27 Cost.", "art. 13 Cost.", "art. 131-bis c.p."],
    pages: [108, 123],
    depth: "deep",
    layers: {
      essenziale:
        "In forza del <strong>principio di offensività</strong> (<em>nullum crimen sine iniuria</em>), elemento fondamentale del fatto penalmente rilevante è l'<strong>offesa di un bene giuridico</strong>, nella forma della <em>lesione</em> (nocumento effettivo) o dell'<em>esposizione a pericolo</em> (nocumento potenziale). Il fondamento costituzionale è desunto dagli artt. 13, 25, co. 2, e 27 Cost.: la sanzione penale, limitativa della libertà personale, è ammessa solo come reazione a un \"fatto\" materiale offensivo, non alla mera disobbedienza; punire condotte inoffensive frustrerebbe inoltre la funzione rieducativa della pena (art. 27, co. 3). Per la Corte costituzionale il principio è desumibile in specie dall'art. 25, co. 2, Cost., sullo sfondo dei valori connessi alla dignità umana (C. Cost. n. 236/2000, n. 211/2022). Il principio opera su due piani: l'<strong>offensività in astratto</strong> vincola il legislatore a incriminare solo condotte che, nella descrizione tipica, esprimano un contenuto offensivo di beni meritevoli di protezione; l'<strong>offensività in concreto</strong> impone al giudice di escludere dal tipo i comportamenti privi di qualsiasi attitudine lesiva. A livello di legge ordinaria il fondamento è ravvisato nell'<strong>art. 49, co. 2, c.p.</strong> (reato impossibile): secondo la concezione realistica del reato, la norma sancisce la non punibilità della condotta che, pur integrando il fatto tipico, non è idonea a offendere il bene protetto. Il reato impossibile — per inidoneità dell'azione o inesistenza dell'oggetto — è un \"non reato\"; il <strong>reato putativo</strong> (art. 49, co. 1) esiste solo nella mente dell'agente. Dall'inoffensività va distinta la <strong>particolare tenuità del fatto</strong> (art. 131-bis c.p.), che presuppone un'offesa, seppur minima.",
      approfondimenti: [
        {
          label: "L'art. 49, co. 2, c.p.: tre letture",
          body:
            "La dottrina tradizionale (Antolisei) vi vede un <em>doppione in negativo</em> dell'art. 56 c.p. (non punibilità del tentativo inidoneo); obiezione: l'art. 56 riguarda i soli delitti e parla di \"atti\", l'art. 49 tutti i reati e parla di \"azione\". La <strong>concezione realistica</strong> (Gallo, Neppi Modona) legge \"azione\" come intero fatto tipico ed \"evento\" come evento giuridico, cioè offesa all'interesse tutelato: la norma fonda l'offensività in concreto. Altra dottrina (Fiandaca-Musco) obietta che l'assenza di offesa equivale ad assenza del fatto tipico (\"tipicità apparente\"): l'offesa è elemento costitutivo, espresso o implicito, della tipicità, da desumere dalle singole norme incriminatrici e non da generici valori morali o sociali, così coniugando offensività e legalità."
        },
        {
          label: "Reati di pericolo e offensività",
          body:
            "I reati di pericolo anticipano la tutela incriminando il pregiudizio potenziale, con giudizio prognostico ex ante. Si distinguono: pericolo <strong>concreto</strong> (il pericolo è elemento del fatto tipico da accertare, es. strage ex art. 422 c.p.); pericolo <strong>presunto</strong> (presunzione iuris et de iure insita nella condotta, es. art. 437 c.p.); pericolo <strong>astratto</strong> (per Mantovani, categoria distinta: il pericolo non è necessariamente insito nella condotta ma è presunto in via assoluta, es. art. 423, co. 1, c.p.); pericolo <strong>indiretto</strong>, ove la soglia arretra al pericolo di un evento pericoloso o ad atti prodromici (reati ostativi o di possesso, es. art. 707 c.p.). Le ultime categorie suscitano perplessità: punire la condotta in concreto inoffensiva significa punire la mera disobbedienza."
        },
        {
          label: "Offesa, persona offesa e classificazioni dei beni",
          body:
            "I reati sono <strong>monoffensivi</strong> o <strong>plurioffensivi</strong>; tra questi, alcuni esigono la lesione di tutti i beni protetti (la rapina lede patrimonio e autodeterminazione: per l'attenuante del danno di speciale tenuità occorre valutare entrambi i pregiudizi, Cass. SU 15 novembre 2024, n. 42124), altri si consumano con la lesione di uno solo (peculato). La <strong>persona offesa</strong> è il titolare del bene tutelato e non coincide necessariamente con il danneggiato, che ha diritto al risarcimento ex art. 185 c.p. I beni si classificano in individuali e collettivi (istituzionali o a titolarità diffusa) e in strumentali e finali: nei primi basta la lesione del bene-strumento, restando irrilevante quella del bene finale."
        },
        {
          label: "Offensività e proporzionalità della pena",
          body:
            "Sul piano sanzionatorio l'offensività si declina come <strong>proporzionalità</strong> ex artt. 3 e 27 Cost. Il sindacato della Consulta, dapprima ancorato allo schema triadico del <em>tertium comparationis</em>, si è esteso alla sproporzione rispetto alla gravità delle condotte della fattispecie astratta, fino a un controllo pieno, relazionale e intrinseco (es. C. Cost. n. 236/2016 sull'alterazione di stato; n. 63/2022 in materia di immigrazione; n. 86/2024, che ha imposto per la rapina un'attenuazione fino a un terzo per i fatti di lieve entità). Fondamento sovranazionale: artt. 49, co. 3, e 52, co. 1, della Carta di Nizza."
        }
      ],
      giurisprudenza: [
        {
          label: "Le declaratorie di incostituzionalità per inoffensività",
          body:
            "Solo in ipotesi sporadiche l'offensività in astratto ha condotto a declaratorie di illegittimità: mendacità non invasiva ex art. 670, co. 1, c.p. per assenza di un interesse da tutelare (C. Cost. n. 519/1995); ubriachezza ex art. 688, co. 2, c.p. (n. 354/2002); aggravante di clandestinità ex art. 61, n. 11-bis, c.p. (n. 249/2010); possesso ingiustificato di valori ex art. 708 c.p., norma discriminatoria e priva di tassatività (n. 370/1996). L'esclusiva pertinenza delle scelte incriminatrici alla discrezionalità legislativa spiega l'impiego cauto del principio, riservato alle violazioni \"aperte\"."
        },
        {
          label: "Il doppio binario: legittimità in astratto, vaglio in concreto",
          body:
            "La Consulta ritiene i reati di pericolo presunto compatibili con l'offensività purché la presunzione risponda all'<em>id quod plerumque accidit</em>, restando fermo il potere-dovere del giudice di escludere il reato per le condotte concretamente prive di potenzialità lesiva. Così C. Cost. n. 225/2008 sull'art. 707 c.p. (vaglio su attitudine funzionale degli strumenti e circostanze della detenzione), n. 141/2019 su reclutamento e favoreggiamento della prostituzione, n. 211/2022 sulla guida senza patente del sottoposto a misura di prevenzione (art. 73 cod. antimafia) e n. 139/2023 sul porto di armi improprie, dove l'anticipazione di tutela è giustificata dal rango degli interessi protetti."
        },
        {
          label: "Offensività e tenuità: C. Cost. n. 173 del 2022",
          body:
            "La Corte ha chiarito che l'art. 131-bis c.p. non si fonda sulla mancanza di offensività, ma sulla logica dell'extrema ratio: a fronte di un fatto tipico, antigiuridico, colpevole e offensivo, ma di \"lieve\" offensività, l'esigenza punitiva diviene recessiva e la pena sarebbe reazione non necessaria. Emergono due piani distinti: l'offensività, che permane, e la punibilità, che viene meno. La stessa pronuncia ha dichiarato illegittimo l'art. 538 c.p.p. nella parte in cui non consente al giudice che proscioglie ex art. 131-bis di decidere sulla domanda della parte civile."
        }
      ],
      eccezioni: [
        {
          label: "Reato impossibile: non punibile, ma possibile misura di sicurezza",
          body:
            "Il reato impossibile è un \"non reato\", ma l'autore, se socialmente pericoloso, può essere sottoposto a <strong>misura di sicurezza</strong> (art. 49, co. 4, c.p.): si parla di <em>quasi reato</em>. Se il fatto integra un reato diverso, si applica la pena per quest'ultimo (art. 49, co. 3). Attenzione: l'inesistenza dell'oggetto rileva solo se assoluta e originaria; quella temporanea o accidentale dà luogo a tentativo punibile ex art. 56 c.p. Applicazione frequente nei reati di falso: falso grossolano (riconoscibile da chiunque), falso innocuo (incide su elementi irrilevanti), falso inutile (atti privi di valenza probatoria)."
        },
        {
          label: "Non confondere inoffensività e particolare tenuità",
          body:
            "Errore ricorrente: assimilare reato impossibile e particolare tenuità del fatto. Nel primo (art. 49, co. 2) l'offesa <em>manca del tutto</em> e il reato non sussiste; nell'art. 131-bis c.p. il fatto è tipico, antigiuridico, colpevole e <em>offensivo</em>, ma l'offesa è così tenue da rendere la punizione non necessaria. Analogamente, la circostanza attenuante della particolare tenuità del danno non comporta automaticamente la non punibilità: i due istituti operano su piani distinti (C. Cost. n. 173/2022)."
        }
      ]
    },
    sintesi: [
      "Nullum crimen sine iniuria: l'offesa (lesione o pericolo) è elemento fondamentale del reato.",
      "Fondamento: artt. 13, 25, co. 2, 27 Cost.; a livello primario, art. 49, co. 2, c.p.",
      "Offensività in astratto vincola il legislatore; in concreto guida il giudice.",
      "Reati di pericolo presunto legittimi se la presunzione risponde all'id quod plerumque accidit.",
      "Reato impossibile (art. 49, co. 2): inidoneità dell'azione o inesistenza dell'oggetto; quasi reato.",
      "Reato putativo (art. 49, co. 1): esiste solo nella mente dell'agente, per errore di fatto o di diritto."
    ],
    esempi: [
      {
        titolo: "Il falso grossolano di Gennaro",
        testo:
          "Gennaro confeziona una banconota da 50 euro fotocopiata in bianco e nero su carta comune, con margini tagliati storti, e tenta di spenderla al mercato. La contraffazione è così immediatamente riconoscibile da non poter trarre in inganno nessuno: è un falso grossolano, ipotesi classica di reato impossibile per inidoneità dell'azione ex art. 49, co. 2, c.p. Il giudizio si svolge ex ante e in concreto (prognosi postuma): l'azione era incapace di offendere la fede pubblica, sicché manca in radice l'offesa e il fatto non è punibile. Se però Gennaro risulta socialmente pericoloso, il giudice può applicargli una misura di sicurezza ex art. 49, co. 4, c.p. (quasi reato). Diverso sarebbe il caso di una banconota ben contraffatta ma momentaneamente priva di destinatari: l'inesistenza dell'oggetto rileva solo se assoluta e originaria, non se temporanea o accidentale."
      },
      {
        titolo: "Il furto putativo di Chiara",
        testo:
          "Chiara, uscendo da una festa, prende dall'attaccapanni un ombrello convinta che appartenga alla padrona di casa e decisa a tenerselo; in realtà l'ombrello è il suo, dimenticato lì mesi prima. Chiara crede di commettere un furto, ma sottrae una cosa propria credendola altrui: è un reato putativo per errore di fatto (art. 49, co. 1, c.p.), non punibile perché il reato esiste solo nella sua mente e difetta ogni condotta illecita. Sarebbe reato putativo per errore di diritto se Chiara ritenesse vigente una norma incriminatrice mai emanata o abrogata, o interpretasse male una norma esistente facendovi rientrare il proprio comportamento. Se però con la condotta avesse integrato gli estremi di un reato diverso da quello supposto, si applicherebbe la pena stabilita per quest'ultimo (art. 49, co. 3, c.p.)."
      }
    ],
    flashcards: [
      ["Cosa impone il principio di offensività in astratto e a chi?", "Al legislatore: reprimere penalmente solo condotte che, nella descrizione tipica, esprimano un contenuto offensivo di beni meritevoli di protezione, anche come mera esposizione a pericolo (C. Cost. 236/2000, 211/2022)."],
      ["In cosa consiste l'offensività in concreto?", "È il criterio interpretativo-applicativo rivolto al giudice: verificare che il fatto concreto sia realmente offensivo, escludendo dal tipo i comportamenti privi di qualsiasi attitudine lesiva."],
      ["Quali sono le due forme del reato impossibile?", "Inidoneità dell'azione, accertata con prognosi postuma ex ante e in concreto, e inesistenza dell'oggetto, purché assoluta e originaria (quella temporanea o accidentale dà luogo a tentativo)."],
      ["Cos'è il reato putativo?", "Il reato erroneamente supposto (art. 49, co. 1, c.p.), esistente solo nella mente dell'agente per errore di diritto o di fatto: non punibile; se il fatto integra un reato diverso, si applica la relativa pena (co. 3)."],
      ["Cos'è la concezione realistica del reato?", "La lettura dell'art. 49, co. 2, c.p. (Gallo, Neppi Modona) per cui \"azione\" è l'intero fatto tipico ed \"evento\" è l'offesa al bene tutelato: la norma fonda l'offensività in concreto come requisito del reato."],
      ["Chi è la persona offesa dal reato?", "Il titolare del bene giuridico tutelato dalla norma incriminatrice; non coincide necessariamente con il danneggiato, che ha subito un danno risarcibile ex art. 185 c.p."]
    ],
    comparativa: {
      titolo: "Reato impossibile vs Reato putativo",
      a: "Reato impossibile (art. 49, co. 2, c.p.)",
      b: "Reato putativo (art. 49, co. 1, c.p.)",
      righe: [
        { profilo: "Situazione", a: "Il fatto tipico è realizzato ma l'offesa è impossibile per inidoneità dell'azione o inesistenza dell'oggetto", b: "Il reato non esiste: è erroneamente supposto dall'agente, per errore di fatto o di diritto" },
        { profilo: "Rapporto con l'offensività", a: "Manca del tutto l'offesa al bene protetto: base normativa dell'offensività in concreto", b: "Difetta ogni condotta illecita: il reato vive solo nella mente dell'agente" },
        { profilo: "Conseguenze", a: "Non punibile; misura di sicurezza se l'autore è socialmente pericoloso (co. 4, quasi reato)", b: "Non punibile; nessuna misura di sicurezza prevista dalla disposizione" },
        { profilo: "Reato diverso", a: "Se il fatto integra un reato diverso, si applica la relativa pena (co. 3)", b: "Se il fatto integra un reato diverso da quello supposto, si applica la relativa pena (co. 3)" }
      ]
    },
    quiz: [
      {
        q: "Il principio di offensività in astratto impone che:",
        opts: [
          "il giudice verifichi la concreta attitudine lesiva della singola condotta",
          "il legislatore incrimini solo condotte tipicamente offensive di beni meritevoli di protezione",
          "ogni reato sia costruito come reato di danno, con lesione effettiva del bene",
          "la pena sia sempre proporzionata mediante un tertium comparationis"
        ],
        correct: 1,
        difficulty: 1,
        commonError: "Confondere i due piani: il vaglio sulla singola condotta concreta spetta al giudice (offensività in concreto), non attiene al momento della scelta incriminatrice.",
        why: "L'offensività in astratto è precetto rivolto al legislatore: limitare la repressione penale a fatti che, nella configurazione astratta, esprimano un contenuto offensivo, anche come mera esposizione a pericolo (C. Cost. 236/2000, 211/2022).",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il principio di offensività"
      },
      {
        q: "Secondo la giurisprudenza costituzionale, i reati di pericolo presunto:",
        opts: [
          "sono sempre incostituzionali perché puniscono la mera disobbedienza",
          "sono legittimi solo se convertiti in via interpretativa in reati di danno",
          "sono legittimi solo per i beni individuali, non per quelli collettivi",
          "sono compatibili con l'offensività se la presunzione risponde all'id quod plerumque accidit, salvo il vaglio del giudice in concreto"
        ],
        correct: 3,
        difficulty: 3,
        commonError: "Ritenere che l'offensività imponga il solo modello del reato di danno: C. Cost. n. 141/2019 afferma espressamente il contrario, ammettendo forme di tutela anticipata.",
        why: "La valutazione legislativa di pericolosità non deve essere irrazionale o arbitraria; resta comunque fermo il potere-dovere del giudice comune di escludere il reato per le condotte concretamente prive di ogni potenzialità lesiva.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il principio di offensività"
      },
      {
        q: "Nel reato impossibile, l'inesistenza dell'oggetto esclude la punibilità quando è:",
        opts: [
          "assoluta e originaria",
          "temporanea ma imprevedibile per l'agente",
          "accidentale e successiva alla condotta",
          "anche solo momentanea, purché non voluta"
        ],
        correct: 0,
        difficulty: 2,
        commonError: "Ritenere sufficiente qualunque assenza dell'oggetto: la mancanza temporanea o accidentale non integra reato impossibile, ma tentativo punibile ex art. 56 c.p.",
        why: "Solo l'inesistenza assoluta e originaria dell'oggetto rende impossibile l'evento dannoso o pericoloso ex art. 49, co. 2, c.p.; negli altri casi l'azione conserva idoneità offensiva e si ricade nel tentativo.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il principio di offensività"
      },
      {
        q: "L'autore di un reato impossibile:",
        opts: [
          "è punito con la pena del tentativo, ridotta di un terzo",
          "non è mai assoggettabile ad alcuna conseguenza giuridica",
          "non è punibile, ma può essere sottoposto a misura di sicurezza se socialmente pericoloso",
          "è punibile solo se il fatto era diretto a commettere un delitto"
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Dimenticare l'art. 49, co. 4, c.p.: la non punibilità non esclude la misura di sicurezza, sicché parlare di totale irrilevanza giuridica del fatto è inesatto (c.d. quasi reato).",
        why: "Il reato impossibile è un non reato e come tale non punibile; tuttavia l'art. 49, co. 4, c.p. consente la misura di sicurezza per l'autore socialmente pericoloso, e il co. 3 fa salva la pena per l'eventuale reato diverso integrato.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il principio di offensività"
      },
      {
        q: "Quale coppia descrive correttamente le forme di falso penalmente irrilevante per difetto di offesa?",
        opts: [
          "Falso consentito e falso autorizzato dall'avente diritto",
          "Falso grossolano, riconoscibile da chiunque, e falso inutile, su atti privi di valenza probatoria",
          "Falso putativo e falso commesso per errore sulla legge extrapenale",
          "Falso tentato e falso commesso su copia non autenticata"
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Confondere le falsità tollerabili (grossolano, innocuo, inutile), riconducibili al reato impossibile, con figure attinenti all'elemento soggettivo o al tentativo.",
        why: "Nei reati contro la fede pubblica il reato impossibile trova frequente applicazione: falso grossolano (immediatamente riconoscibile, offesa impossibile e non solo improbabile), falso innocuo (su elementi irrilevanti dell'atto) e falso inutile (atti privi di valenza probatoria).",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il principio di offensività"
      },
      {
        q: "Secondo C. Cost. n. 173 del 2022, la causa di non punibilità per particolare tenuità del fatto (art. 131-bis c.p.):",
        opts: [
          "presuppone la mancanza di offensività del fatto, come il reato impossibile",
          "esclude la tipicità del fatto per difetto dell'evento giuridico",
          "opera solo quando ricorre l'attenuante della particolare tenuità del danno",
          "presuppone un fatto offensivo, ma di offensività così lieve da rendere recessiva l'esigenza punitiva"
        ],
        correct: 3,
        difficulty: 4,
        commonError: "Sovrapporre inoffensività e tenuità: nell'art. 131-bis l'offesa esiste ed è riscontrata, mentre nel reato impossibile manca del tutto; vengono meno piani diversi (punibilità vs reato).",
        why: "L'istituto si iscrive nella logica dell'extrema ratio: il fatto è tipico, antigiuridico, colpevole e offensivo, ma la particolare tenuità rende la pena reazione non necessaria. Permane l'offensività, viene meno la punibilità.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il principio di offensività"
      },
      {
        q: "Chi sottrae una cosa propria credendola altrui realizza:",
        opts: [
          "un reato impossibile per inidoneità dell'azione",
          "un reato putativo per errore di fatto",
          "un furto tentato punibile ex art. 56 c.p.",
          "un reato putativo per errore di diritto"
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Qualificare il caso come reato impossibile: qui il reato non è irrealizzabile per inidoneità o inesistenza, ma semplicemente inesistente, supposto per errore sugli elementi costitutivi.",
        why: "È l'esempio testuale di reato putativo da errore di fatto: l'agente ritiene erroneamente sussistenti tutti gli elementi costitutivi del reato (l'altruità della cosa), che esiste solo nella sua mente; la punibilità è esclusa dall'art. 49, co. 1, c.p.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il principio di offensività"
      }
    ],
    veroFalso: [
      {
        aff: "La persona offesa dal reato coincide sempre con il danneggiato dal reato.",
        vero: false,
        traccia: "Falso. La persona offesa è il titolare del bene giuridico tutelato dalla norma incriminatrice; il danneggiato è chi ha subito un danno patrimoniale o non patrimoniale, con diritto al risarcimento ex art. 185 c.p. Le due figure possono non coincidere, e nei reati plurioffensivi le vittime possono essere più d'una."
      },
      {
        aff: "La Corte costituzionale ha dichiarato illegittimo l'art. 708 c.p. (possesso ingiustificato di valori) per violazione degli artt. 3 e 25 Cost.",
        vero: true,
        traccia: "Vero. C. Cost. n. 370 del 1996 ha censurato la norma per l'irragionevole discriminazione verso i pregiudicati per reati contro il patrimonio e per il difetto di tassatività circa le cose possedute: la fattispecie tipizzava l'illecito sulla riferibilità di un fatto di per sé neutro a una categoria di autori."
      },
      {
        aff: "Nei reati plurioffensivi la consumazione richiede sempre la lesione di tutti i beni giuridici protetti.",
        vero: false,
        traccia: "Falso. Occorre distinguere: in alcune fattispecie, come la rapina (art. 628 c.p.), serve la lesione di tutti i beni protetti (patrimonio e autodeterminazione); in altre, come il peculato (art. 314 c.p.), basta la lesione di uno solo dei beni, poiché la condotta lede comunque il buon andamento della pubblica amministrazione."
      }
    ],
    aperta: {
      q: "Il candidato illustri il principio di offensività, soffermandosi sul fondamento costituzionale, sulla duplice accezione in astratto e in concreto e sulla disciplina del reato impossibile.",
      traccia:
        "La risposta deve muovere dalla nozione di offesa come lesione o esposizione a pericolo del bene giuridico e dal fondamento costituzionale (artt. 13, 25, co. 2, 27 Cost.; per la Consulta, in specie l'art. 25, co. 2, sullo sfondo della dignità umana). Va illustrata la duplice accezione: precetto al legislatore (offensività in astratto) e criterio ermeneutico per il giudice (offensività in concreto), richiamando l'atteggiamento della giurisprudenza costituzionale, cauta nelle declaratorie di incostituzionalità (artt. 670, 688, 708 c.p., aggravante di clandestinità) e incline alle interpretative di rigetto che devolvono al giudice il vaglio di lesività, anche per i reati di pericolo presunto. Sul piano primario va esposto l'art. 49, co. 2, c.p. con il dibattito tra tesi del doppione dell'art. 56, concezione realistica e tesi della tipicità apparente; quindi le due forme del reato impossibile, il quasi reato ex co. 4 e la distinzione dal reato putativo e dalla particolare tenuità del fatto ex art. 131-bis c.p.",
      fonte: "Marinucci·Dolcini·Gatta, PG — Il principio di offensività"
    },
    consigliate: ["mappa", "flashcards", "comparativa", "mcq", "verofalso"],
    media: {
      podcast: {
        title: "Il principio di offensività: dal fondamento al reato impossibile",
        chapters: [
          ["Ratio e fondamento costituzionale", 0],
          ["Offensività in astratto e in concreto", 300],
          ["Reati di pericolo e giurisprudenza costituzionale", 600],
          ["Reato impossibile e reato putativo", 900]
        ]
      },
      mappa: true
    }
  }
];
