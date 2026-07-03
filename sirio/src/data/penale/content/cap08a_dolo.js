/* =========================================================================
   SIRIO — DIRITTO PENALE · Capitolo 8: L'elemento soggettivo (Sezioni I-II).
   Fonte: Marinucci·Dolcini·Gatta, PG — colpevolezza e imputabilità; il dolo;
   per il confine dolo eventuale/colpa cosciente anche la Sezione sulla colpa
   con previsione. Giurisprudenza citata solo se presente nel testo di riferimento.
   ========================================================================= */

export const PEN_CAP8A = [
  {
    id: "imputabilita",
    part: "generale",
    chapter: 8,
    chapterTitle: "L'elemento soggettivo",
    title: "Colpevolezza e imputabilità",
    subtitle: "Art. 27 Cost., suitas, capacità di intendere e di volere, cause di esclusione, actio libera in causa",
    articoli: ["art. 27 Cost.", "art. 85 c.p.", "artt. 88-89 c.p.", "artt. 97-98 c.p.", "art. 87 c.p."],
    pages: [153, 167],
    depth: "deep",
    layers: {
      essenziale:
        "La <strong>colpevolezza</strong> è l'insieme degli elementi soggettivi su cui si fonda la responsabilità penale: accertati fatto tipico e antigiuridicità, occorre verificare che il fatto sia <em>personalmente rimproverabile</em> all'autore. Secondo la <strong>concezione normativa</strong>, oggi dominante, la colpevolezza è un giudizio di rimproverabilità per aver tenuto un comportamento antidoveroso, e abbraccia in un concetto unitario sia il dolo sia la colpa (la concezione psicologica, che la identificava nel nesso psichico dolo/colpa, non spiegava la colpa incosciente). Il fondamento costituzionale sta nell'<strong>art. 27 Cost.</strong>: con la storica sentenza n. 364/1988 (che ha dichiarato illegittimo l'art. 5 c.p. nella parte in cui non scusava l'ignoranza inevitabile della legge penale) la Corte ha letto la responsabilità personale come responsabilità per <em>fatto proprio colpevole</em>: nullum crimen sine culpa. Presupposto minimo è la <strong>suitas</strong> della condotta (art. 42, co. 1: coscienza e volontà dell'azione od omissione), esclusa da forza maggiore, costringimento fisico e incoscienza indipendente dalla volontà. Primo presupposto della colpevolezza è poi l'<strong>imputabilità</strong> (art. 85 c.p.): la capacità di <em>intendere</em> (comprendere il significato e il valore sociale dei propri atti) e di <em>volere</em> (controllare stimoli e impulsi), da valutare al momento del fatto e in relazione al fatto concreto. Le cause che la escludono o la diminuiscono sono di natura fisiologica (minore età), patologica (infermità di mente, sordomutismo) e tossica (ubriachezza, stupefacenti). Il non imputabile non è punibile, ma se socialmente pericoloso può subire misure di sicurezza.",
      approfondimenti: [
        {
          label: "Minore età: le tre fasce",
          body:
            "Il minore di quattordici anni non è mai imputabile: l'art. 97 c.p. pone una <strong>presunzione legale assoluta</strong>, senza prova contraria. Tra i quattordici e i diciotto anni l'art. 98 c.p. impone un <strong>accertamento in concreto</strong> della maturità fisio-psichica, valutando ruolo, capacità organizzativa, contegno e tipo di reato; se il minore è capace, la pena è diminuita. Dal compimento dei diciotto anni opera una presunzione <em>relativa</em> di imputabilità, superabile provando il vizio di mente o le altre cause tassative (artt. 88, 89, 91, 93, 95, 96 c.p.). Al minore pericoloso possono applicarsi misure di sicurezza anche se non imputabile.",
        },
        {
          label: "Ubriachezza: le cinque discipline",
          body:
            "Solo l'ubriachezza <strong>accidentale</strong> (caso fortuito o forza maggiore: l'operaio che inala vapori alcolici per un guasto) esclude l'imputabilità; se non piena, diminuisce la pena (art. 91). Quella <strong>volontaria o colposa</strong> non esclude né diminuisce l'imputabilità (art. 92, co. 1); quella <strong>preordinata</strong> a commettere il reato o a prepararsi una scusa aggrava la pena (art. 92, co. 2) ed è esemplificazione dell'actio libera in causa. Quella <strong>abituale</strong> aggrava la pena fino a un terzo (art. 94). La <strong>cronica intossicazione</strong> (art. 95), vera malattia psichica permanente, riconduce agli artt. 88-89. Regole analoghe per gli stupefacenti (art. 93).",
        },
        {
          label: "Actio libera in causa (art. 87 c.p.)",
          body:
            "Chi si pone in stato di incapacità <em>al fine di commettere il reato o di prepararsi una scusa</em> non beneficia dell'art. 85: il giudizio di rimproverabilità <strong>retrocede</strong> al momento in cui il soggetto, ancora capace, ha liberamente scelto di rendersi incapace. Sul fondamento: per alcuni l'esecuzione inizia con l'atto di incapacitazione (ma si dilata troppo il concetto di esecuzione); per altri basta il nesso causale (ma è responsabilità oggettiva); la tesi preferibile lo rinviene nella <strong>colpevolezza</strong> per essersi posti in incapacità a fine criminoso. Distinto è l'art. 86 c.p.: chi rende altri incapaci per fargli commettere un reato risponde del reato commesso dall'incapace.",
        },
        {
          label: "Imputabilità e intelligenza artificiale",
          body:
            "L'irrompere dei sistemi di IA mette sotto tensione le categorie classiche: se l'algoritmo è mero strumento, risponde programmatore, produttore o utilizzatore; se il sistema ha avuto autonoma rilevanza causale, ci si chiede se sia configurabile una \"colpevolezza robotica\" o una \"colpa da programmazione\" sul modello della responsabilità degli enti. Il dibattito è embrionale e la l. 132/2025 (che accompagna l'AI Act e introduce, tra l'altro, l'art. 612-quater c.p. e nuove aggravanti) non ha risolto il nodo dei criteri di imputazione, rinviando a future scelte dell'Esecutivo.",
        },
      ],
      giurisprudenza: [
        {
          label: "Corte cost. n. 364/1988: il fatto proprio colpevole",
          body:
            "Dichiarando l'illegittimità costituzionale dell'art. 5 c.p., la Corte ha interpretato l'art. 27 Cost. non solo come divieto di responsabilità per fatto altrui, ma come responsabilità per <strong>fatto proprio colpevole</strong>: serve un legame soggettivo almeno nella forma della colpa (prevedibilità ed evitabilità del risultato vietato) rispetto agli elementi più significativi della fattispecie. Collegando i commi 1 e 3 dell'art. 27, la rieducazione postula almeno la colpa: non avrebbe senso rieducare chi non è nemmeno in colpa.",
        },
        {
          label: "Sez. Un. Raso (n. 9163/2005): disturbi della personalità",
          body:
            "Le Sezioni Unite hanno ricondotto al concetto di <strong>infermità</strong> (artt. 88-89 c.p.) anche i <strong>disturbi della personalità</strong>, purché di consistenza, intensità e gravità tali da incidere concretamente sulla capacità di intendere o di volere, escludendola o scemandola grandemente. Restano invece estranei all'infermità i disturbi psichici transitori (ebbrezza da sonno, sfinimento, stati ipnotici) e le anomalie caratteriali legate all'indole. Serve inoltre un <em>nesso causale</em> tra malattia e reato.",
        },
        {
          label: "Sez. Un. n. 40516/2016: vizio parziale e aggravanti",
          body:
            "Il vizio parziale di mente è compatibile con la premeditazione (che attiene al dolo, mentre il vizio incide sull'imputabilità), con la provocazione, con le attenuanti generiche. Quanto all'aggravante della <strong>crudeltà</strong> (art. 61, n. 4 c.p.), le Sezioni Unite hanno chiarito che è compatibile con il vizio parziale, ma va esclusa quando la condotta sia <em>espressione della patologia</em>: occorre un'indagine caso per caso.",
        },
      ],
      eccezioni: [
        {
          label: "Stati emotivi e passionali non scusano",
          body:
            "Per l'art. 90 c.p. gli stati emotivi (turbamento improvviso e passeggero) e passionali (emozione profonda e duratura: amore, odio) <strong>non escludono né diminuiscono</strong> l'imputabilità. Errore tipico: invocare la gelosia o l'ira come vizio di mente. Correttivo interpretativo: rilevano solo quegli stati emotivi o passionali in cui sia ravvisabile l'indice di un vero <em>stato patologico</em>, riconducibile agli artt. 88-89.",
        },
        {
          label: "Non imputabile non significa libero da conseguenze",
          body:
            "L'assenza di imputabilità esclude la pena, non ogni conseguenza: al non imputabile <strong>socialmente pericoloso</strong> che abbia commesso un fatto previsto come reato si applicano le misure di sicurezza (artt. 202-203 c.p.), secondo il sistema del doppio binario. Altro errore da evitare: ritenere tassativo l'elenco delle cause di esclusione; per i casi non contemplati soccorre la regola generale dell'art. 85 c.p. (ferma la non estensibilità analogica delle cause tipizzate, di natura eccezionale).",
        },
      ],
    },
    sintesi: [
      "Colpevolezza normativa: giudizio di rimproverabilità che unifica dolo e colpa.",
      "Art. 27 Cost. (sent. 364/1988): responsabilità per fatto proprio colpevole.",
      "Imputabilità (art. 85): capacità di intendere e di volere al momento del fatto.",
      "Minore di 14 anni: presunzione assoluta; 14-18: accertamento in concreto.",
      "Solo ubriachezza accidentale e intossicazione cronica escludono l'imputabilità.",
      "Actio libera in causa (art. 87): il rimprovero retrocede all'atto di incapacitazione.",
    ],
    esempi: [
      {
        titolo: "Il malore improvviso di Sandro",
        testo:
          "Sandro, autotrasportatore senza alcuna patologia nota, è colto alla guida da un <strong>malore imprevedibile</strong> e perde il controllo del mezzo, investendo un ciclista. Qui manca la <em>suitas</em> della condotta (art. 42, co. 1, c.p.): l'azione compiuta in stato di incoscienza indipendente dalla volontà non è riferibile a Sandro, perché non voluta né derivante da sua imprudenza o negligenza. Diverso sarebbe il caso in cui Sandro, diabetico, si fosse messo alla guida sapendo di non aver assunto la terapia e di rischiare una crisi: la condotta sarebbe allora <em>dominabile</em>, e l'incoscienza gli sarebbe rimproverabile a titolo di colpa, perché prevedibile ed evitabile.",
      },
      {
        titolo: "Il coraggio liquido di Ruggero",
        testo:
          "Ruggero vuole aggredire il rivale Ettore, ma in condizioni di sobrietà non ne ha il coraggio: beve deliberatamente fino a ubriacarsi <strong>allo scopo</strong> di allentare i freni inibitori, poi lo ferisce gravemente. Ruggero era incapace di intendere e di volere al momento del fatto, ma risponde ugualmente, con pena <em>aggravata</em>: è l'ubriachezza preordinata (art. 92, co. 2, c.p.), esemplificazione dell'<em>actio libera in causa</em> ex art. 87 c.p. Il giudizio di rimproverabilità retrocede al momento in cui, pienamente capace, ha scelto di rendersi incapace per commettere il reato. Se invece si fosse ubriacato a una festa senza alcun proposito criminoso e poi avesse aggredito Ettore, l'ubriachezza volontaria non avrebbe escluso né diminuito l'imputabilità (art. 92, co. 1).",
      },
    ],
    flashcards: [
      ["Cos'è la concezione normativa della colpevolezza?", "Giudizio di rimproverabilità per il comportamento antidoveroso: concetto unitario che ricomprende dolo e colpa; presuppone la possibilità di agire conformemente al precetto."],
      ["Cosa ha stabilito Corte cost. n. 364/1988?", "Illegittimo l'art. 5 c.p. (ignoranza inevitabile scusa); l'art. 27 Cost. impone la responsabilità per fatto proprio colpevole: nullum crimen sine culpa."],
      ["Quando è imputabile il minore?", "Mai sotto i 14 anni (presunzione assoluta); tra 14 e 18 solo previo accertamento in concreto della maturità, con pena diminuita; dai 18 presunzione relativa di capacità."],
      ["Quali forme di ubriachezza escludono l'imputabilità?", "Solo l'accidentale (caso fortuito o forza maggiore) e la cronica intossicazione ex art. 95 c.p., che è vera patologia permanente riconducibile agli artt. 88-89."],
      ["Cos'è l'actio libera in causa?", "Chi si pone in stato di incapacità per commettere un reato o prepararsi una scusa risponde ugualmente (art. 87): il rimprovero retrocede al momento della scelta libera."],
      ["Il vizio parziale di mente è compatibile con la premeditazione?", "Sì: la premeditazione attiene al dolo, il vizio parziale incide sull'imputabilità; la crudeltà invece va esclusa se espressione della patologia (Sez. Un. 40516/2016)."],
    ],
    comparativa: {
      titolo: "Vizio totale vs vizio parziale di mente",
      a: "Vizio totale (art. 88 c.p.)",
      b: "Vizio parziale (art. 89 c.p.)",
      righe: [
        { profilo: "Effetto sulla capacità", a: "L'infermità esclude del tutto la capacità di intendere o di volere", b: "La scema grandemente, senza escluderla" },
        { profilo: "Conseguenza sulla responsabilità", a: "Non imputabile: proscioglimento", b: "Imputabile: risponde del reato con pena diminuita fino a un terzo" },
        { profilo: "Natura giuridica", a: "Causa di esclusione dell'imputabilità", b: "Circostanza attenuante inerente alla persona, soggetta al bilanciamento ex art. 69 c.p." },
        { profilo: "Misure applicabili", a: "Se socialmente pericoloso, misura di sicurezza (ospedale psichiatrico giudiziario, art. 222 c.p.)", b: "Pena ridotta; se pericoloso, misura di sicurezza (casa di cura e di custodia)" },
      ],
    },
    quiz: [
      {
        q: "Secondo la concezione normativa, la colpevolezza è:",
        opts: [
          "Il nesso psichico tra fatto e autore, nella sola forma del dolo",
          "Un giudizio di rimproverabilità per il comportamento antidoveroso, comprensivo di dolo e colpa",
          "La semplice attribuibilità materiale del fatto al suo autore",
          "La pericolosità sociale accertata dal giudice al momento del fatto",
        ],
        correct: 1,
        difficulty: 2,
        commonError: "Confondere la concezione normativa con quella psicologica, che identifica la colpevolezza nel nesso psichico e non spiega la colpa incosciente.",
        why: "La dottrina moderna intende la colpevolezza come giudizio di rimproverabilità per aver serbato un comportamento antidoveroso in violazione della legge penale. Così si costruisce un concetto unitario che ricomprende sia il dolo sia la colpa.",
        fonte: "Marinucci·Dolcini·Gatta, PG — La colpevolezza",
      },
      {
        q: "La sentenza Corte cost. n. 364/1988 ha affermato che l'art. 27 Cost.:",
        opts: [
          "Vieta soltanto la responsabilità penale per fatto altrui",
          "Impone la responsabilità oggettiva per gli elementi accessori del reato",
          "Esige la responsabilità per fatto proprio colpevole, almeno nella forma della colpa",
          "Consente di punire l'ignoranza della legge penale anche se inevitabile",
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Fermarsi alla lettura minima del principio di personalità come mero divieto di responsabilità per fatto altrui.",
        why: "La sentenza, dichiarando illegittimo l'art. 5 c.p., ha letto la personalità della responsabilità come responsabilità per fatto proprio colpevole: serve un legame soggettivo almeno nella forma della colpa rispetto agli elementi più significativi della fattispecie.",
        fonte: "Marinucci·Dolcini·Gatta, PG — La colpevolezza",
      },
      {
        q: "Per il minore che ha compiuto quattordici anni ma non diciotto, l'imputabilità:",
        opts: [
          "È esclusa da una presunzione legale assoluta",
          "È presunta in via relativa, salvo prova del vizio di mente",
          "È esclusa salvo che il reato sia di particolare gravità",
          "Va accertata in concreto verificando la maturità fisica e psichica",
        ],
        correct: 3,
        difficulty: 1,
        commonError: "Estendere agli infradiciottenni la presunzione assoluta di non imputabilità che vale solo sotto i quattordici anni.",
        why: "L'art. 98 c.p. richiede un accertamento in concreto: il giudice verifica se al momento del fatto il minore avesse la maturità necessaria a cogliere il disvalore sociale del fatto, considerando ruolo, capacità organizzativa, contegno e tipo di reato. Se capace, la pena è diminuita.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'imputabilità",
      },
      {
        q: "Secondo le Sezioni Unite Raso (n. 9163/2005), i disturbi della personalità:",
        opts: [
          "Possono integrare l'infermità se gravi e incidenti in concreto sulla capacità di intendere o di volere",
          "Sono sempre irrilevanti perché non costituiscono malattia in senso clinico",
          "Escludono sempre l'imputabilità, trattandosi di patologie psichiche",
          "Rilevano solo come attenuanti generiche ex art. 62-bis c.p.",
        ],
        correct: 0,
        difficulty: 3,
        commonError: "Ritenere che solo le malattie mentali nosograficamente classificate possano integrare il vizio di mente.",
        why: "Le Sezioni Unite hanno incluso nell'infermità anche i disturbi della personalità, purché di consistenza, intensità e gravità tali da incidere concretamente sulla capacità di intendere o di volere; occorre inoltre il nesso causale tra disturbo e reato.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'imputabilità",
      },
      {
        q: "Chi commette un reato in stato di ubriachezza volontaria (non preordinata):",
        opts: [
          "Non è punibile perché incapace al momento del fatto",
          "Risponde del reato: l'imputabilità non è né esclusa né diminuita",
          "Beneficia sempre di una diminuzione di pena ex art. 91 c.p.",
          "Risponde solo se l'ubriachezza era anche abituale",
        ],
        correct: 1,
        difficulty: 2,
        commonError: "Applicare all'ubriachezza volontaria la disciplina dell'ubriachezza accidentale, unica idonea a escludere l'imputabilità.",
        why: "L'art. 92, co. 1, c.p. stabilisce che l'ubriachezza volontaria o colposa non esclude né diminuisce l'imputabilità. Per evitare una responsabilità oggettiva, la dottrina ancora l'accertamento di dolo o colpa al momento in cui il soggetto si è ubriacato.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'imputabilità",
      },
      {
        q: "La differenza tra ubriachezza abituale e cronica intossicazione da alcool sta nel fatto che:",
        opts: [
          "La prima esclude l'imputabilità, la seconda la aggrava",
          "Entrambe escludono l'imputabilità, ma solo la seconda consente misure di sicurezza",
          "La prima denota fenomeni tossici transeunti e aggrava la pena; la seconda è patologia permanente riconducibile agli artt. 88-89",
          "La prima riguarda solo l'alcool, la seconda solo gli stupefacenti",
        ],
        correct: 2,
        difficulty: 4,
        commonError: "Confondere l'abitualità (consuetudine di vita con effetti transeunti, che aggrava la pena) con la cronicità (alterazione patologica permanente).",
        why: "L'ubriachezza abituale non esclude l'imputabilità e comporta un aumento di pena (art. 94); la cronica intossicazione (art. 95) è uno stato patologico con degenerazione permanente, vera malattia psichica, cui si applica la disciplina del vizio totale o parziale di mente.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'imputabilità",
      },
      {
        q: "Nell'actio libera in causa (art. 87 c.p.), la tesi preferibile fonda la punibilità:",
        opts: [
          "Sul solo nesso causale tra incapacitazione ed evento",
          "Su una presunzione assoluta di imputabilità al momento del fatto",
          "Sull'inizio dell'esecuzione coincidente con la condotta tipica",
          "Sulla colpevolezza per essersi posti in incapacità al fine di commettere il reato",
        ],
        correct: 3,
        difficulty: 4,
        commonError: "Aderire alla tesi del mero nesso causale, che però introduce una forma di responsabilità oggettiva in contrasto con il principio di colpevolezza.",
        why: "La tesi preferibile rinviene il fondamento nella colpevolezza dell'agente: il rimprovero è mosso per essersi posto volontariamente in condizione di incapacità al fine di commettere il reato o di prepararsi una scusa, anticipando il giudizio di rimproverabilità a quel momento.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'imputabilità",
      },
    ],
    veroFalso: [
      {
        aff: "Gli stati emotivi e passionali escludono o diminuiscono l'imputabilità se particolarmente intensi.",
        vero: false,
        traccia: "Falso. L'art. 90 c.p. esclude ogni rilievo di stati emotivi e passionali sull'imputabilità. Solo quando essi siano indice di un vero stato patologico possono rilevare, per via sistematica, attraverso gli artt. 88-89 c.p.",
      },
      {
        aff: "Al soggetto non imputabile socialmente pericoloso possono essere applicate misure di sicurezza.",
        vero: true,
        traccia: "Vero. Il non imputabile non è assoggettabile a pena, ma se è persona socialmente pericolosa (art. 203 c.p.) e ha commesso un fatto previsto dalla legge come reato può subire misure di sicurezza, secondo il sistema del doppio binario.",
      },
      {
        aff: "Chi rende un altro incapace di intendere e di volere per fargli commettere un reato risponde del reato commesso dall'incapace.",
        vero: true,
        traccia: "Vero. Lo prevede l'art. 86 c.p.: del reato commesso dalla persona resa incapace risponde chi ha cagionato lo stato di incapacità, a titolo di dolo o di colpa; l'incapace risponde solo se ha consentito all'induzione per un fine illecito o se vi è sua colpa.",
      },
    ],
    aperta: {
      q: "Il candidato illustri la nozione di imputabilità, i suoi rapporti con la colpevolezza e le cause che la escludono o la diminuiscono.",
      traccia:
        "L'imputabilità è la capacità di intendere (comprendere il significato e il valore sociale dei propri atti) e di volere (controllare i propri impulsi), che l'art. 85 c.p. richiede al momento del fatto e in relazione al fatto concreto. Secondo la tesi oggi maggioritaria essa è il primo presupposto della colpevolezza: senza imputabilità il fatto non è rimproverabile e il reato non è configurabile per difetto dell'elemento soggettivo (contra, la tesi dell'imputabilità come mera capacità di pena). Le cause di esclusione o diminuzione sono fisiologiche (minore età: presunzione assoluta sotto i quattordici anni, accertamento in concreto tra i quattordici e i diciotto), patologiche (vizio totale ex art. 88 e parziale ex art. 89, comprensivi, dopo le Sezioni Unite Raso, dei gravi disturbi della personalità; sordomutismo ex art. 96) e tossiche (solo ubriachezza accidentale e cronica intossicazione escludono la capacità; quella volontaria non incide, quella preordinata e quella abituale aggravano). Chiude il sistema l'art. 87 c.p. sull'actio libera in causa, che anticipa il rimprovero al momento della libera scelta di incapacitarsi. Al non imputabile pericoloso si applicano le misure di sicurezza.",
      fonte: "Marinucci·Dolcini·Gatta, PG — Colpevolezza e imputabilità",
    },
    consigliate: ["mappa", "flashcards", "comparativa", "mcq", "aperta"],
    media: {
      podcast: {
        title: "Colpevolezza e imputabilità: chi può essere rimproverato",
        chapters: [
          ["Il principio di colpevolezza e l'art. 27 Cost.", 0],
          ["Suitas e imputabilità: art. 42 e art. 85", 260],
          ["Le cause di esclusione: età, mente, alcool", 560],
          ["Actio libera in causa e casi limite", 920],
        ],
      },
      mappa: true,
    },
  },

  {
    id: "dolo",
    part: "generale",
    chapter: 8,
    chapterTitle: "L'elemento soggettivo",
    title: "Il dolo",
    subtitle: "Rappresentazione e volontà, oggetto del dolo, forme e gradazioni, accertamento",
    articoli: ["art. 43 c.p.", "art. 42, co. 2, c.p.", "art. 47 c.p.", "art. 133 c.p."],
    pages: [168, 175],
    depth: "deep",
    layers: {
      essenziale:
        "Il dolo è la <strong>forma più grave di colpevolezza</strong> e il criterio normale di imputazione soggettiva dei delitti (art. 42, co. 2, c.p.). L'art. 43 c.p. lo definisce \"secondo l'intenzione\": l'evento è dall'agente <em>preveduto e voluto</em> come conseguenza della propria azione od omissione. Due gli elementi strutturali: la <strong>rappresentazione</strong> (momento conoscitivo: previsione del fatto di reato) e la <strong>volontà</strong> (momento volitivo: risoluzione di realizzarlo). Il dolo è dunque volontà consapevole di realizzare il fatto tipico, che deve sussistere nel momento in cui il soggetto agisce. Quanto all'<strong>oggetto</strong>, la lettera dell'art. 43 parla di \"evento\", ma la lettura sistematica (art. 47 c.p., che esclude la punibilità per errore sul <em>fatto</em>) impone di estenderlo all'intero fatto tipico: condotta, oggetto materiale, presupposti della condotta, qualifiche soggettive nei reati propri, evento e nesso causale. Ne restano fuori il precetto (art. 5), le condizioni obiettive di punibilità (art. 44) e le circostanze attenuanti e cause di giustificazione (art. 59, co. 1). Distinto dal dolo è il <strong>movente</strong>, che rileva solo per circostanze e commisurazione della pena. Le forme: dolo di danno e di pericolo; iniziale, concomitante e successivo; <strong>generico e specifico</strong> (quest'ultimo quando la norma esige un fine particolare che non deve realizzarsi, come il profitto nel furto); sotto il profilo rappresentativo, dolo di proposito, d'impeto e di <strong>premeditazione</strong>; sotto il profilo volitivo, le tre gradazioni decrescenti: <strong>intenzionale, diretto, eventuale</strong>, rilevanti per la commisurazione ex art. 133 c.p. L'accertamento è indiziario, mai presuntivo: il c.d. dolus in re ipsa è incompatibile con l'art. 27 Cost.",
      approfondimenti: [
        {
          label: "Dolo specifico e principio di offensività",
          body:
            "Le fattispecie a dolo specifico rischiano di punire un mero atteggiamento interiore. Parte della dottrina (MARINUCCI-DOLCINI) supera il problema \"<strong>oggettivizzando</strong>\" il dolo specifico: la finalità va intesa non solo come scopo soggettivo dell'agente, ma anche come <em>idoneità oggettiva della condotta</em> a conseguire quel risultato. La teoria dell'oggettivazione ha trovato applicazione giurisprudenziale per l'associazione con finalità di terrorismo ex art. 270-bis c.p. e per l'aggravante agevolatrice dell'attività mafiosa ex art. 416-bis.1 c.p. (Cass., Sez. Un., n. 8545/2020).",
        },
        {
          label: "Dolus generalis e dolo colpito a mezza via dall'errore",
          body:
            "Caso di scuola: Tizio spara per uccidere, crede la vittima morta e ne brucia il corpo, cagionando così il decesso. La tesi del <strong>dolus generalis</strong> (\"voleva la morte, ha causato la morte\") imputerebbe l'omicidio doloso consumato estendendo per presunzione il dolo della prima condotta alla seconda. La tesi oggi prevalente del <strong>dolo colpito a mezza via dall'errore</strong>, più rispettosa del principio di colpevolezza, scompone la vicenda: tentato omicidio per la prima condotta, omicidio colposo per la seconda che ha cagionato l'evento (Cass., Sez. I, n. 48260/2014).",
        },
        {
          label: "La premeditazione",
          body:
            "Il dolo di premeditazione, aggravante nell'omicidio ex art. 576, n. 2 c.p. e species del dolo di proposito, richiede per la tesi prevalente due elementi: uno <strong>ideologico</strong> (il perdurare nell'animo di una risoluzione criminosa ferma e irrevocabile) e uno <strong>cronologico</strong> (un intervallo apprezzabile tra insorgenza e attuazione del proposito, sufficiente in concreto a far riflettere e a consentire il prevalere dei motivi inibitori: Cass., Sez. V, n. 12266/2017). All'estremo opposto sta il dolo d'impeto, a risoluzione repentina; per Sez. Un. n. 40516/2016 la distinzione esprime un dato cronologico, afferente più alla prova che alla categoria.",
        },
        {
          label: "Dolo eventuale e tentativo; il dolo alternativo",
          body:
            "La compatibilità del dolo eventuale con il delitto tentato è discussa: la tesi <strong>soggettiva</strong> la nega (gli \"atti diretti a\" esigono univoca direzione finalistica); la tesi <strong>oggettiva</strong>, leggendo l'univocità come carattere della condotta, la ammette. La Cassazione (es. Sez. I, n. 15380/2024) ha talora eluso il problema con il <strong>dolo diretto alternativo</strong>, compatibile con il tentativo: l'agente si rappresenta e vuole indifferentemente l'uno o l'altro evento (morte o lesioni), con obiettivi ontologicamente incompatibili ma paritetici nella sua prospettiva volontaristica.",
        },
      ],
      giurisprudenza: [
        {
          label: "Sez. Un. n. 38343/2014 (ThyssenKrupp): gli indicatori del dolo",
          body:
            "Poiché il dolo attiene alla sfera psichica, l'accertamento è difficile: le Sezioni Unite hanno offerto un elenco di <strong>indicatori</strong>, oggettivi e soggettivi, del dolo eventuale: condotta illecita e lontananza dalla condotta standard; personalità e precedenti del reo; durata e ripetizione della condotta; condotta successiva; movente; probabilità dell'evento; conseguenze negative anche per l'agente; contesto lecito o illecito; fiducia che l'evento non si verificherà; prima formula di Frank. Vanno impiegati <em>congiuntamente</em>, in un accertamento indiziario che rifugga da presunzioni assolute.",
        },
        {
          label: "L'oggettivazione del dolo specifico in giurisprudenza",
          body:
            "Per l'associazione con finalità di terrorismo o eversione (art. 270-bis c.p.) la giurisprudenza ha richiesto che la finalità non sia solo animo soggettivo ma trovi riscontro nell'idoneità oggettiva della condotta (Cass., Sez. I, n. 34989/2007; Sez. VI, n. 46308/2012). La stessa logica è stata applicata da Cass., Sez. Un., n. 8545/2020 all'aggravante del fine di agevolare le associazioni mafiose ex art. 416-bis.1 c.p., e ribadita da Cass., Sez. III, n. 37131/2024.",
        },
      ],
      eccezioni: [
        {
          label: "Il dolus in re ipsa non esiste",
          body:
            "Errore da evitare: ritenere che alcuni comportamenti \"sintomatici\" dimostrino <em>da soli</em> il dolo. La semplificazione probatoria del c.d. <strong>dolus in re ipsa</strong> contrasta con l'art. 27 Cost., perché svilisce l'esame psicologico a tacita presunzione di dolo e inverte inammissibilmente l'onere probatorio. Anche a fronte di condotte a forte evidenza sintomatica, serve sempre un accertamento compiuto, fondato sulle circostanze esteriori lette alla luce dell'id quod plerumque accidit.",
        },
        {
          label: "Fattispecie incompatibili con il dolo eventuale",
          body:
            "Talvolta è la legge a esigere una partecipazione psichica intenzionale o almeno diretta: nell'abrogato abuso d'ufficio (art. 323 c.p.) l'avverbio \"intenzionalmente\" restringeva il dolo alla forma più intensa; nella <strong>calunnia</strong> (art. 368 c.p.) la richiesta consapevolezza dell'innocenza dell'incolpato rende la struttura del reato incompatibile con il dolo eventuale. Attenzione anche al dolo successivo: ciò che si vuole dopo aver agito non fonda responsabilità dolosa, perché il dolo deve sussistere al momento della condotta.",
        },
      ],
    },
    sintesi: [
      "Dolo: rappresentazione più volontà del fatto tipico, al momento della condotta.",
      "Oggetto: l'intero fatto tipico, non solo l'evento (arg. ex art. 47 c.p.).",
      "Escluse dall'oggetto: precetto, condizioni obiettive di punibilità, attenuanti e scriminanti.",
      "Dolo specifico: fine ulteriore richiesto dalla norma, che non deve realizzarsi.",
      "Gradazioni volitive decrescenti: intenzionale, diretto, eventuale (art. 133 c.p.).",
      "Accertamento indiziario con indicatori ThyssenKrupp; vietato il dolus in re ipsa.",
    ],
    esempi: [
      {
        titolo: "L'attentato al furgone blindato",
        testo:
          "Furio piazza un ordigno per far saltare il furgone portavalori e impossessarsi del denaro: vuole la distruzione del mezzo (<strong>dolo intenzionale</strong> rispetto al danneggiamento). Sa però con certezza pratica che l'esplosione ucciderà l'autista Gino, che non è il suo scopo: rispetto alla morte di Gino c'è <strong>dolo diretto</strong>, perché l'evento è previsto come conseguenza certa o altamente probabile e accettato. Se poi Furio si rappresenta la concreta possibilità che l'esplosione investa anche un passante e agisce accettando quel rischio, aderendovi per il caso che si verifichi, rispetto al passante il dolo è <strong>eventuale</strong>. Tre gradazioni decrescenti della stessa volontà dolosa, rilevanti per la commisurazione della pena ex art. 133 c.p.",
      },
      {
        titolo: "Il furto \"altruista\" di Nives",
        testo:
          "Nives sottrae dal magazzino del datore di lavoro un costoso macchinario per rivenderlo e pagare i debiti del fratello. Il furto è reato a <strong>dolo specifico</strong>: oltre alla rappresentazione e volontà della sottrazione della cosa mobile altrui, la norma esige il <em>fine di trarne profitto</em>. Quel fine non deve realizzarsi: Nives risponde di furto consumato anche se viene arrestata prima di vendere il macchinario, perché lo scopo di profitto è estraneo alla struttura oggettiva del reato. Irrilevante, ai fini del dolo, il movente nobile (aiutare il fratello): il motivo che spinge a delinquere rileva solo in sede di circostanze (artt. 61, n. 1 e 62, n. 1 c.p.) e di commisurazione della pena ex art. 133 c.p.",
      },
    ],
    flashcards: [
      ["Quali sono i due elementi strutturali del dolo?", "La rappresentazione (momento conoscitivo: previsione del fatto di reato) e la volontà (momento volitivo: risoluzione di realizzarlo), da valutare al momento della condotta."],
      ["Qual è l'oggetto del dolo?", "L'intero fatto tipico: condotta, oggetto materiale, presupposti, qualifiche soggettive nei reati propri, evento e nesso causale. Esclusi: precetto, condizioni obiettive di punibilità, attenuanti e scriminanti."],
      ["Che differenza c'è tra dolo generico e dolo specifico?", "Nel generico basta rappresentarsi e volere gli elementi della fattispecie; nello specifico la norma esige un fine ulteriore (es. profitto nel furto) che non deve materialmente realizzarsi."],
      ["Cosa distingue dolo intenzionale, diretto ed eventuale?", "Intenzionale: l'evento è lo scopo dell'agire. Diretto: previsto e accettato come conseguenza certa o altamente probabile. Eventuale: rappresentato come concretamente possibile e accettato come rischio."],
      ["Cos'è il dolo colpito a mezza via dall'errore?", "La tesi prevalente per il caso di doppia condotta con erronea convinzione dell'evento già prodotto: tentato omicidio per la prima condotta, omicidio colposo per la seconda causativa della morte."],
      ["Perché il dolus in re ipsa è inammissibile?", "Perché trasforma l'esame psicologico in una presunzione tacita di dolo, in contrasto con la personalità della responsabilità penale ex art. 27 Cost.: il dolo va sempre accertato in concreto."],
    ],
    comparativa: {
      titolo: "Dolo generico vs dolo specifico",
      a: "Dolo generico",
      b: "Dolo specifico",
      righe: [
        { profilo: "Contenuto richiesto", a: "Rappresentazione e volontà degli elementi costitutivi della fattispecie", b: "In più, un fine particolare espressamente richiesto dalla norma incriminatrice" },
        { profilo: "Realizzazione dello scopo", a: "Non si pone: non c'è uno scopo ulteriore tipizzato", b: "Il fine non deve realizzarsi: è estraneo alla struttura oggettiva del reato" },
        { profilo: "Esempio", a: "Omicidio (art. 575 c.p.): basta volere la morte", b: "Furto: sottrazione al fine di trarne profitto" },
        { profilo: "Nodo problematico", a: "Accertamento probatorio della volontà", b: "Tensione con l'offensività, risolta con l'oggettivazione del fine (idoneità oggettiva della condotta)" },
      ],
    },
    quiz: [
      {
        q: "Secondo la lettura sistematica dell'art. 43 c.p., l'oggetto del dolo comprende:",
        opts: [
          "Il solo evento dannoso o pericoloso, come recita la lettera della norma",
          "L'intero fatto tipico, incluse condotta, presupposti, evento e nesso causale",
          "Anche la conoscenza del precetto penale violato",
          "Anche le condizioni obiettive di punibilità ex art. 44 c.p.",
        ],
        correct: 1,
        difficulty: 2,
        commonError: "Fermarsi alla lettera dell'art. 43, che menziona solo l'evento: l'art. 47 c.p., escludendo la punibilità per errore sul fatto, dimostra che il dolo copre tutto il fatto tipico.",
        why: "L'interpretazione sistematica impone di ricomprendere nell'oggetto del dolo tutti gli elementi costitutivi del fatto tipico, mentre ne restano esclusi il precetto (art. 5), le condizioni obiettive di punibilità (art. 44) e gli elementi di cui all'art. 59, co. 1, c.p.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il dolo",
      },
      {
        q: "Nel dolo diretto (o di secondo grado), l'agente:",
        opts: [
          "Agisce proprio allo scopo di realizzare l'evento tipico",
          "Si rappresenta l'evento come concretamente possibile e ne accetta il rischio",
          "Prevede l'evento come conseguenza certa o altamente probabile e agisce comunque",
          "Non prevede l'evento ma avrebbe potuto prevederlo con la dovuta diligenza",
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Confondere dolo diretto e intenzionale: nel diretto l'evento non è lo scopo, ma una conseguenza certa o altamente probabile accettata.",
        why: "Il dolo diretto si colloca al livello intermedio: l'agente non persegue l'evento come scopo, ma lo prevede come conseguenza certa o altamente probabile della condotta e decide di agire nonostante tale rappresentazione.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il dolo",
      },
      {
        q: "Nel delitto di furto, il fine di trarre profitto:",
        opts: [
          "Deve realizzarsi perché il reato sia consumato",
          "È un elemento oggettivo della fattispecie",
          "Rileva solo come movente ai fini dell'art. 133 c.p.",
          "È oggetto di dolo specifico e non deve necessariamente realizzarsi",
        ],
        correct: 3,
        difficulty: 1,
        commonError: "Ritenere necessaria l'effettiva realizzazione del profitto: il fine è estraneo alla struttura oggettiva del reato.",
        why: "Il furto è reato a dolo specifico: la norma esige che la condotta sia realizzata per un fine particolare, il profitto, che però non deve materialmente conseguirsi, essendo estraneo alla struttura oggettiva della fattispecie.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il dolo",
      },
      {
        q: "Nel caso di chi spara per uccidere e poi, credendo la vittima morta, ne brucia il corpo cagionandone il decesso, la tesi oggi prevalente ritiene che l'agente risponda di:",
        opts: [
          "Tentato omicidio più omicidio colposo, scomponendo le due condotte",
          "Omicidio doloso consumato, in forza del dolus generalis",
          "Solo omicidio preterintenzionale ex art. 584 c.p.",
          "Omicidio doloso consumato aggravato dall'occultamento di cadavere",
        ],
        correct: 0,
        difficulty: 4,
        commonError: "Applicare il dolus generalis (\"voleva la morte, ha causato la morte\"), che però estende il dolo per presunzione, in contrasto con il principio di colpevolezza.",
        why: "La tesi del dolo colpito a mezza via dall'errore, prevalente perché più rispettosa del principio di colpevolezza, guarda all'elemento soggettivo presente al momento di ciascun segmento: tentato omicidio per la prima condotta, omicidio colposo per la seconda (Cass., Sez. I, n. 48260/2014).",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il dolo",
      },
      {
        q: "Per la tesi prevalente, il dolo di premeditazione richiede:",
        opts: [
          "La sola particolare intensità del proposito criminoso",
          "Un elemento ideologico (risoluzione ferma e irrevocabile) e uno cronologico (intervallo apprezzabile)",
          "Un intervallo di tempo minimo fissato rigidamente dalla legge",
          "La preparazione di mezzi particolarmente insidiosi per l'esecuzione",
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Ridurre la premeditazione al solo dato temporale, trascurando il perdurare della risoluzione criminosa ferma e irrevocabile.",
        why: "Secondo la giurisprudenza (Cass., Sez. V, n. 12266/2017) servono un elemento ideologico o psicologico e uno cronologico: l'intervallo, non determinabile in astratto, deve risultare in concreto sufficiente a far riflettere l'agente e a consentire il prevalere dei motivi inibitori.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il dolo",
      },
      {
        q: "Il ricorso al c.d. dolus in re ipsa nell'accertamento del dolo è:",
        opts: [
          "Ammesso per i soli reati a dolo generico",
          "Ammesso quando la condotta ha evidenza sintomatica particolarmente marcata",
          "Imposto dal principio di economia processuale",
          "Inammissibile perché contrasta con l'art. 27 Cost.",
        ],
        correct: 3,
        difficulty: 3,
        commonError: "Ritenere che condotte macroscopicamente sintomatiche dispensino dalla prova del dolo: la semplificazione non può mai diventare presunzione.",
        why: "La valorizzazione di comportamenti sintomatici ritenuti ex se dimostrativi dell'animus doloso svilisce l'esame psicologico a tacita presunzione di dolo e inverte l'onere probatorio, in contrasto con il canone di personalità della responsabilità penale.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il dolo",
      },
      {
        q: "Il dolo alternativo, cui la giurisprudenza ricorre in tema di tentativo, si caratterizza per:",
        opts: [
          "La successione temporale di due propositi criminosi distinti",
          "L'accettazione del mero rischio di uno tra più eventi possibili",
          "La rappresentazione e volizione indifferente dell'uno o dell'altro evento, tra loro incompatibili ma paritetici",
          "La volontà di un evento con previsione certa di un secondo evento collaterale",
        ],
        correct: 2,
        difficulty: 5,
        commonError: "Confondere il dolo alternativo con il dolo eventuale: nell'alternativo entrambi gli eventi sono pienamente voluti, sia pure in via indifferente, non solo accettati come rischio.",
        why: "Il dolo diretto alternativo ricorre quando l'agente si rappresenta e vuole indifferentemente l'uno o l'altro evento causalmente ricollegabile alla condotta (es. morte o lesioni della vittima): i tratti qualificanti sono l'ontologica incompatibilità degli obiettivi e la loro assoluta pariteticità nella prospettiva volontaristica del reo (Cass., Sez. I, n. 15380/2024).",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il dolo",
      },
    ],
    veroFalso: [
      {
        aff: "Il movente del reato è un elemento costitutivo del dolo.",
        vero: false,
        traccia: "Falso. Il movente è il motivo che ha spinto a delinquere ed è distinto dal dolo: di regola rileva solo in sede di circostanze (artt. 61, n. 1 e 62, n. 1 c.p.) e di commisurazione della pena ex art. 133 c.p.",
      },
      {
        aff: "Il delitto di calunnia è incompatibile con il dolo eventuale.",
        vero: true,
        traccia: "Vero. L'art. 368 c.p. richiede la consapevolezza dell'innocenza della persona incolpata: tale struttura esige una piena certezza rappresentativa che rende il reato incompatibile con la forma eventuale del dolo.",
      },
      {
        aff: "Nei reati omissivi impropri il dolo deve investire anche l'obbligo di garanzia e l'evento non impedito.",
        vero: true,
        traccia: "Vero. Nei reati omissivi impropri l'oggetto del dolo comprende i presupposti del dovere di attivarsi, il mancato compimento dell'azione doverosa, l'obbligo giuridico extrapenale di garanzia e l'evento non impedito.",
      },
    ],
    aperta: {
      q: "Il candidato illustri la struttura e l'oggetto del dolo, le sue forme e i criteri di accertamento.",
      traccia:
        "Il dolo, criterio normale di imputazione dei delitti (art. 42, co. 2), è definito dall'art. 43 c.p. come previsione e volontà dell'evento: ne sono elementi strutturali la rappresentazione e la volontà, che devono sussistere al momento della condotta. L'oggetto, per lettura sistematica ancorata all'art. 47 c.p., è l'intero fatto tipico (condotta, presupposti, oggetto materiale, qualifiche nei reati propri, evento, nesso causale), con esclusione di precetto, condizioni obiettive di punibilità, attenuanti e scriminanti. Le forme si classificano secondo la natura dell'offesa (dolo di danno e di pericolo), il momento (iniziale, concomitante, successivo), la descrizione normativa (generico e specifico, quest'ultimo da \"oggettivizzare\" per salvaguardare l'offensività), il profilo rappresentativo (proposito, impeto, premeditazione) e quello volitivo (intenzionale, diretto, eventuale, in intensità decrescente rilevante ex art. 133 c.p.). L'accertamento, data l'afferenza psichica del dolo, è necessariamente indiziario: le Sezioni Unite ThyssenKrupp hanno indicato una serie di indicatori da usare congiuntamente, mentre è inammissibile il dolus in re ipsa, contrastante con l'art. 27 Cost.",
      fonte: "Marinucci·Dolcini·Gatta, PG — Il dolo",
    },
    consigliate: ["mappa", "flashcards", "mcq", "esempi", "aperta"],
    media: {
      podcast: {
        title: "Il dolo: volere il fatto tipico",
        chapters: [
          ["Struttura: rappresentazione e volontà", 0],
          ["L'oggetto del dolo e il movente", 280],
          ["Le forme: generico, specifico, gradazioni", 580],
          ["Accertare il dolo senza presunzioni", 940],
        ],
      },
      mappa: true,
    },
  },

  {
    id: "doloEventuale",
    part: "generale",
    chapter: 8,
    chapterTitle: "L'elemento soggettivo",
    title: "Dolo eventuale e colpa cosciente",
    subtitle: "Accettazione del rischio, teoria del bilanciamento, formula di Frank, indicatori ThyssenKrupp",
    articoli: ["art. 43 c.p.", "art. 61, n. 3, c.p.", "art. 133 c.p.", "art. 27 Cost."],
    pages: [171, 180],
    depth: "deep",
    layers: {
      essenziale:
        "Il <strong>dolo eventuale</strong> occupa il gradino più basso della scala di intensità dolosa: l'agente, ponendo in essere una condotta diretta ad altri scopi, si rappresenta la <em>concreta possibilità</em> del verificarsi dell'evento tipico e ne <strong>accetta il rischio</strong>. La <strong>colpa cosciente</strong> (o con previsione) ricorre invece quando l'agente non intende realizzare il reato e, pur prevedendo come possibile l'evento, si convince che <em>non si verificherà</em>: la previsione integra la circostanza aggravante del delitto colposo ex art. 61, n. 3, c.p. Il confine tra le due figure è tra i più delicati del diritto penale, perché segna la linea tra responsabilità dolosa e colposa, con enormi differenze sanzionatorie e sistematiche. I criteri più accreditati sono quelli <strong>volontaristici</strong>: la prima <strong>formula di Frank</strong> (c'è dolo se l'agente avrebbe agito anche con la certezza dell'evento) e il criterio del <strong>bilanciamento</strong>, accolto dalle Sezioni Unite nella sentenza <strong>ThyssenKrupp</strong> (n. 38343/2014): sussiste dolo eventuale quando l'agente, dopo aver tutto soppesato — il fine perseguito e l'eventuale prezzo da pagare — si è consapevolmente determinato ad agire comunque, accettando l'eventualità della causazione dell'offesa, con una scelta razionale assimilabile alla volontà. Nella colpa, invece, il rimprovero è di <em>malgoverno di un rischio</em> e inadeguatezza al dovere precauzionale, senza direzione della volontà verso l'evento, pur previsto come possibile. L'accertamento passa per gli <strong>indicatori</strong> elencati dalle stesse Sezioni Unite, da usare congiuntamente e senza presunzioni.",
      approfondimenti: [
        {
          label: "La prima formula di Frank e i suoi limiti",
          body:
            "La formula riconosce il dolo eventuale quando si appuri che l'agente <strong>avrebbe agito anche con la certezza</strong> del verificarsi del fatto: è un giudizio controfattuale sull'atteggiamento interiore. Due i limiti segnalati: l'ardua praticabilità probatoria (dimostrare come si sarebbe comportato l'agente in caso di certezza) e il rischio, evidenziato in dottrina (ROMANO), che un'applicazione rigorosa escluda il dolo ogni volta che la verificazione del fatto comporti il <em>fallimento del piano</em> dell'agente. La ThyssenKrupp la recupera come uno degli indicatori, non come criterio esclusivo.",
        },
        {
          label: "Il criterio del bilanciamento",
          body:
            "Elaborato in dottrina (PROSDOCIMI) e valorizzato dalle Sezioni Unite, individua il dolo eventuale nella <strong>valutazione comparata degli interessi in gioco</strong>: l'agente, ponderato il proprio interesse e quello altrui, assegna prevalenza al primo e accetta il rischio del danno come <em>prezzo eventuale da pagare</em> per il risultato perseguito. Il dolo eventuale diventa così una decisione razionale contro il bene giuridico, non una semplice leggerezza: per questo le Sezioni Unite parlano di scelta \"il più possibile assimilabile alla volontà\".",
        },
        {
          label: "Perché la qualificazione conta",
          body:
            "Dal confine dipendono conseguenze pratiche enormi: la scelta tra <strong>omicidio doloso</strong> (con dolo eventuale) e <strong>omicidio colposo aggravato</strong> dalla previsione ex art. 61, n. 3, c.p., con cornici edittali radicalmente diverse; la punibilità stessa quando il fatto è previsto solo come delitto doloso; la compatibilità con il tentativo (discussa per il dolo eventuale); l'intensità del dolo come criterio di commisurazione ex art. 133 c.p. È il terreno dei casi di confine: circolazione stradale spericolata, sicurezza sul lavoro (come nella vicenda ThyssenKrupp), contagio consapevole.",
        },
      ],
      giurisprudenza: [
        {
          label: "Sez. Un. n. 38343/2014, ThyssenKrupp: il criterio discretivo",
          body:
            "Le Sezioni Unite hanno precisato la tradizionale \"accettazione del rischio\": il criterio discretivo è la <strong>mancanza di volontà verso l'evento</strong> nella colpa cosciente, dove il rimprovero è di inadeguatezza al dovere precauzionale, contro l'<strong>organizzazione della condotta</strong> che nel dolo coinvolge anche sul piano volitivo la verificazione del fatto. Nel dolo eventuale l'atteggiamento rimproverabile si configura solo se l'agente prevede chiaramente la concreta, significativa possibilità dell'evento e ciò nonostante si determina ad agire, <em>aderendo ad esso</em> per il caso in cui si verifichi, dopo aver soppesato fine e prezzo eventuale.",
        },
        {
          label: "Gli undici indicatori del dolo eventuale",
          body:
            "La stessa sentenza elenca gli indicatori, oggettivi e soggettivi: 1) condotta che caratterizza l'illecito; 2) lontananza dalla condotta standard; 3) personalità, storia e precedenti del reo; 4) durata e ripetizione della condotta; 5) condotta successiva all'evento; 6) movente; 7) probabilità di verificazione dell'evento; 8) conseguenze negative anche per l'agente; 9) contesto lecito o illecito; 10) fiducia che l'evento non si verifichi; 11) prima formula di Frank. Impiego <strong>congiunto</strong>, in un accertamento indiziario che rifugga da presunzioni assolute e non inverta mai l'onere della prova.",
        },
      ],
      eccezioni: [
        {
          label: "Prevedere non basta: serve aderire all'evento",
          body:
            "Errore classico: dedurre il dolo eventuale dalla sola <em>previsione</em> dell'evento. Anche nella colpa cosciente l'evento è previsto come possibile: ciò che distingue è il <strong>momento volitivo</strong>. Se l'agente, pur avendo previsto, ha agito nella <em>fiducia</em> (sia pure irragionevole) che l'evento non si sarebbe verificato, il rimprovero resta colposo, aggravato ex art. 61, n. 3, c.p.; il dolo eventuale esige l'adesione all'evento per il caso che si verifichi.",
        },
        {
          label: "La probabilità dell'evento non è una presunzione di dolo",
          body:
            "L'elevata probabilità di verificazione dell'evento è solo <em>uno</em> degli indicatori: da sola non fonda il dolo eventuale, pena la reintroduzione di un dolus in re ipsa incompatibile con l'art. 27 Cost. Anche di fronte a condotte a marcata evidenza sintomatica (es. gravissime violazioni di regole cautelari), l'accertamento deve rimanere compiuto e indiziario, valorizzando tutte le circostanze esteriori alla stregua dell'id quod plerumque accidit.",
        },
      ],
    },
    sintesi: [
      "Dolo eventuale: rappresentazione della concreta possibilità dell'evento e accettazione del rischio.",
      "Colpa cosciente: previsione dell'evento ma convinzione che non si verificherà (art. 61, n. 3).",
      "Criterio discretivo ThyssenKrupp: bilanciamento e adesione all'evento, non mera previsione.",
      "Prima formula di Frank: dolo se l'agente avrebbe agito anche con la certezza dell'evento.",
      "Undici indicatori da usare congiuntamente, senza presunzioni assolute.",
      "In gioco: confine tra delitto doloso e colposo, con cornici edittali radicalmente diverse.",
    ],
    esempi: [
      {
        titolo: "Il sorpasso di Iginio",
        testo:
          "Iginio, in ritardo a un appuntamento, lancia l'auto a forte velocità e sorpassa in curva con scarsa visibilità, dicendosi che \"tanto a quest'ora non passa nessuno\" e confidando nella propria abilità di guida: investe la vettura della signora Olga, che muore. Iginio ha <em>previsto</em> l'evento come possibile ma ha agito nella genuina, per quanto irragionevole, <strong>fiducia che non si sarebbe verificato</strong>: colpa cosciente, omicidio colposo aggravato ex art. 61, n. 3, c.p. Lo scenario cambia se Iginio, inseguito dopo una rapina, prosegue la fuga contromano per chilometri pur di non farsi prendere, rappresentandosi chiaramente la concreta possibilità di uno scontro mortale e determinandosi ad agire comunque, accettando quell'eventualità come prezzo della fuga: qui la scelta razionale di aderire all'evento integra il <strong>dolo eventuale</strong>.",
      },
      {
        titolo: "Il capannone della ditta di Ottavio",
        testo:
          "Ottavio, amministratore di un'azienda metalmeccanica, per contenere i costi rinvia da mesi l'adeguamento dell'impianto antincendio, pur avendo ricevuto relazioni tecniche che segnalano il rischio per gli operai. Una notte un incendio uccide l'operaio Bruno. Per stabilire se Ottavio risponda di omicidio doloso (dolo eventuale) o colposo con previsione, il giudice — sulla scia della sentenza ThyssenKrupp, nata proprio da un rogo in fabbrica — applicherà congiuntamente gli <strong>indicatori</strong>: lontananza dalla condotta standard, durata della condotta omissiva, movente economico, probabilità dell'evento, conseguenze negative anche per l'agente (la distruzione del proprio stabilimento), eventuale fiducia nel non verificarsi, formula di Frank. Solo se emerge che Ottavio, tutto soppesato, ha <em>aderito</em> all'eventualità dell'offesa come prezzo del risparmio, il rimprovero sarà doloso.",
      },
    ],
    flashcards: [
      ["Quando ricorre il dolo eventuale?", "Quando l'agente, con condotta diretta ad altri scopi, si rappresenta la concreta possibilità dell'evento tipico e ne accetta il rischio, aderendovi per il caso che si verifichi."],
      ["Cos'è la colpa cosciente?", "L'agente non vuole il reato, prevede come possibile l'evento ma si convince che non si verificherà; la previsione aggrava il delitto colposo ex art. 61, n. 3, c.p."],
      ["Cosa afferma la prima formula di Frank?", "C'è dolo eventuale se si accerta che l'agente avrebbe tenuto la medesima condotta anche avendo la certezza di realizzare il fatto di reato."],
      ["Qual è il criterio discretivo secondo la sentenza ThyssenKrupp?", "Il bilanciamento: dolo eventuale se l'agente, soppesati fine e prezzo eventuale, si determina consapevolmente ad agire accettando l'offesa; nella colpa manca la direzione della volontà verso l'evento."],
      ["Gli indicatori ThyssenKrupp possono essere usati singolarmente?", "No: l'accertamento richiede l'impiego congiunto degli indicatori, secondo metodo indiziario che rifugge da presunzioni assolute e non inverte l'onere della prova."],
      ["Perché la distinzione ha grande rilevanza pratica?", "Segna il confine tra delitto doloso e colposo: cambiano titolo di reato, cornice edittale, e la punibilità stessa quando manca la fattispecie colposa."],
    ],
    comparativa: {
      titolo: "Dolo eventuale vs colpa cosciente",
      a: "Dolo eventuale",
      b: "Colpa cosciente (art. 61, n. 3, c.p.)",
      righe: [
        { profilo: "Rappresentazione", a: "Chiara previsione della concreta, significativa possibilità dell'evento", b: "Previsione dell'evento come possibile" },
        { profilo: "Momento volitivo", a: "Accettazione del rischio e adesione all'evento per il caso che si verifichi, dopo aver soppesato fine e prezzo", b: "Nessuna volontà verso l'evento: l'agente confida, pur irragionevolmente, che non si verificherà" },
        { profilo: "Natura del rimprovero", a: "Doloso: scelta razionale assimilabile alla volontà, contro il bene giuridico", b: "Colposo: malgoverno di un rischio, inadeguatezza al dovere precauzionale" },
        { profilo: "Conseguenze", a: "Titolo doloso (es. omicidio ex art. 575 c.p.), gradino più basso dell'intensità dolosa ex art. 133", b: "Delitto colposo aggravato dalla previsione ex art. 61, n. 3, c.p." },
      ],
    },
    quiz: [
      {
        q: "Ciò che distingue il dolo eventuale dalla colpa cosciente è:",
        opts: [
          "La previsione dell'evento, assente nella colpa cosciente",
          "L'adesione volitiva all'evento, presente solo nel dolo eventuale",
          "La violazione di regole cautelari, presente solo nella colpa",
          "La gravità oggettiva dell'evento cagionato dalla condotta",
        ],
        correct: 1,
        difficulty: 2,
        commonError: "Puntare sulla previsione: l'evento è previsto in entrambe le figure; ciò che cambia è il momento volitivo.",
        why: "Anche nella colpa cosciente l'agente prevede l'evento come possibile, ma confida che non si verificherà. Nel dolo eventuale, invece, la volizione comprende l'evento: l'agente accetta il rischio e aderisce alla prospettiva della sua concretizzazione.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Dolo eventuale e colpa cosciente",
      },
      {
        q: "Secondo la prima formula di Frank, sussiste dolo eventuale quando:",
        opts: [
          "L'agente ha violato in modo grossolano le regole cautelari di condotta",
          "L'evento era altamente probabile secondo l'id quod plerumque accidit",
          "Si accerta che l'agente avrebbe agito anche con la certezza del verificarsi del fatto",
          "L'agente ha tratto un vantaggio economico dalla realizzazione dell'evento",
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Confondere la formula di Frank, giudizio ipotetico sull'atteggiamento interiore, con criteri oggettivi di probabilità dell'evento.",
        why: "La prima formula di Frank riconosce il dolo laddove si appuri che il soggetto avrebbe tenuto la medesima condotta anche se avesse avuto la certezza di realizzare il fatto di reato: un giudizio controfattuale sulla tenuta del proposito dell'agente.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Dolo eventuale e colpa cosciente",
      },
      {
        q: "Quale limite viene rimproverato in dottrina a un'applicazione rigorosa della formula di Frank?",
        opts: [
          "Escluderebbe il dolo ogni volta che l'evento comporti il fallimento del piano dell'agente",
          "Amplierebbe eccessivamente l'area del dolo a scapito della colpa",
          "Sarebbe applicabile soltanto ai reati a dolo specifico",
          "Presumerebbe il dolo dalla sola gravità della condotta tenuta",
        ],
        correct: 0,
        difficulty: 5,
        commonError: "Pensare che la formula dilati il dolo: il rischio è opposto, cioè di restringerlo troppo, oltre alle difficoltà probatorie del giudizio ipotetico.",
        why: "Si è osservato (ROMANO) che, applicata alla lettera, la formula porterebbe a negare il dolo tutte le volte in cui la verificazione del fatto di reato comporti il fallimento del piano dell'agente; si aggiungono le difficoltà probatorie della dimostrazione controfattuale.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Dolo eventuale e colpa cosciente",
      },
      {
        q: "Per le Sezioni Unite ThyssenKrupp (n. 38343/2014), sussiste dolo eventuale quando l'agente:",
        opts: [
          "Prevede l'evento come possibile e viola consapevolmente una regola cautelare",
          "Cagiona l'evento in un contesto di base già illecito",
          "Persegue direttamente l'evento tipico quale scopo della condotta",
          "Dopo aver soppesato fine e prezzo eventuale, si determina ad agire accettando la causazione dell'offesa",
        ],
        correct: 3,
        difficulty: 3,
        commonError: "Accontentarsi della previsione più violazione cautelare, che descrive la colpa cosciente, non il dolo eventuale.",
        why: "Le Sezioni Unite applicano la teoria del bilanciamento: il dolo eventuale esige che l'agente, dopo avere tutto soppesato, considerato il fine perseguito e l'eventuale prezzo da pagare, si sia consapevolmente determinato ad agire comunque, con una scelta razionale assimilabile alla volontà.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Dolo eventuale e colpa cosciente",
      },
      {
        q: "Tra gli indicatori del dolo eventuale elencati dalla sentenza ThyssenKrupp NON figura:",
        opts: [
          "La condotta successiva all'evento",
          "La sussistenza di precedenti condanne per reati della stessa indole quale presunzione di dolo",
          "La fiducia nel fatto che l'evento non si verificherà",
          "Le conseguenze negative o lesive per l'agente in caso di verificazione",
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Ritenere che la storia del reo operi come presunzione: personalità e precedenti esperienze sono un indicatore da valutare, mai una presunzione di dolo.",
        why: "L'elenco comprende, tra gli altri, condotta caratterizzante l'illecito, lontananza dalla condotta standard, personalità e precedenti esperienze, durata e ripetizione della condotta, condotta successiva, movente, probabilità dell'evento, conseguenze per l'agente, contesto, fiducia nel non verificarsi e formula di Frank: tutti da impiegare congiuntamente, senza presunzioni assolute.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Dolo eventuale e colpa cosciente",
      },
      {
        q: "La previsione dell'evento nella colpa cosciente rileva, sul piano della disciplina, come:",
        opts: [
          "Elemento costitutivo di un autonomo titolo di reato",
          "Causa di esclusione della responsabilità colposa",
          "Circostanza aggravante del delitto colposo ex art. 61, n. 3, c.p.",
          "Criterio di conversione del reato colposo in doloso",
        ],
        correct: 2,
        difficulty: 1,
        commonError: "Ritenere che la previsione trasformi il titolo di responsabilità: resta colpa, ma aggravata.",
        why: "La colpa con previsione non muta il titolo colposo della responsabilità: la previsione dell'evento integra la circostanza aggravante comune prevista dall'art. 61, n. 3, c.p. per il delitto colposo.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Dolo eventuale e colpa cosciente",
      },
    ],
    veroFalso: [
      {
        aff: "Nella colpa cosciente l'agente non si rappresenta in alcun modo l'evento tipico.",
        vero: false,
        traccia: "Falso. Nella colpa cosciente l'agente prevede come possibile il verificarsi dell'evento, ma si convince che non si realizzerà: è proprio la previsione a distinguerla dalla colpa incosciente e a fondare l'aggravante ex art. 61, n. 3, c.p. Ciò che manca è la volontà verso l'evento.",
      },
      {
        aff: "Secondo la sentenza ThyssenKrupp, l'elevata probabilità dell'evento è di per sé sufficiente a dimostrare il dolo eventuale.",
        vero: false,
        traccia: "Falso. La probabilità di verificazione dell'evento è solo uno degli indicatori, da impiegare congiuntamente agli altri in un accertamento indiziario che rifugga da presunzioni assolute: altrimenti si reintrodurrebbe un dolus in re ipsa contrario all'art. 27 Cost.",
      },
      {
        aff: "La sentenza ThyssenKrupp ha valorizzato la teoria del bilanciamento per distinguere dolo eventuale e colpa cosciente.",
        vero: true,
        traccia: "Vero. Le Sezioni Unite n. 38343/2014 hanno individuato il dolo eventuale nella scelta di chi, dopo avere tutto soppesato (fine perseguito e prezzo eventuale), si determina consapevolmente ad agire accettando l'eventualità dell'offesa: scelta razionale assimilabile alla volontà.",
      },
    ],
    aperta: {
      q: "Il candidato illustri il criterio distintivo tra dolo eventuale e colpa cosciente, con particolare riguardo all'apporto delle Sezioni Unite ThyssenKrupp.",
      traccia:
        "Il dolo eventuale ricorre quando l'agente, con condotta diretta ad altri scopi, si rappresenta la concreta possibilità dell'evento e ne accetta il rischio; la colpa cosciente quando, pur prevedendo l'evento, confida che non si verificherà (aggravante ex art. 61, n. 3, c.p.). Poiché la previsione è comune a entrambe le figure, il discrimine va cercato sul piano volitivo, con criteri volontaristici: la prima formula di Frank (dolo se l'agente avrebbe agito anche con la certezza dell'evento, criterio di ardua prova e di dubbia tenuta quando l'evento frustri il piano dell'agente) e il criterio del bilanciamento, accolto da Cass., Sez. Un., n. 38343/2014, ThyssenKrupp: c'è dolo eventuale se l'agente, soppesati il fine perseguito e l'eventuale prezzo da pagare, si è consapevolmente determinato ad agire accettando l'offesa, con scelta razionale assimilabile alla volontà; nella colpa il rimprovero è di malgoverno del rischio, senza direzione della volontà verso l'evento. L'accertamento esige l'impiego congiunto degli undici indicatori elencati dalle Sezioni Unite, secondo metodo indiziario alieno da presunzioni. La qualificazione decide il titolo, doloso o colposo, della responsabilità.",
      fonte: "Marinucci·Dolcini·Gatta, PG — Dolo eventuale e colpa cosciente",
    },
    consigliate: ["comparativa", "mappa", "mcq", "esempi", "aperta"],
    media: {
      podcast: {
        title: "Il confine più sottile: dolo eventuale e colpa cosciente",
        chapters: [
          ["Due figure, una previsione comune", 0],
          ["Formula di Frank e bilanciamento", 300],
          ["La sentenza ThyssenKrupp e gli indicatori", 620],
          ["Perché la qualificazione decide tutto", 960],
        ],
      },
      mappa: true,
    },
  },
];
