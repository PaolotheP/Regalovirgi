/* =========================================================================
   SIRIO — DIRITTO TRIBUTARIO · Capitolo 5: Le imposte sui redditi.
   Fonte: Loconte, Manuale di diritto tributario — capp. 16 (reddito d'impresa
   e redditi diversi) e 17 (principi generali della fiscalità delle imprese).
   ========================================================================= */

export const TRIB_CAP5B = [
  {
    id: "redditoImpresa",
    part: "generale",
    chapter: 5,
    chapterTitle: "Le imposte sui redditi",
    title: "Il reddito d'impresa e i redditi diversi",
    subtitle: "Chi è imprenditore per il Fisco, come si calcola il suo reddito, e la categoria \"residuale\" che raccoglie tutto il resto",
    articoli: ["art. 55 T.u.i.r.", "art. 83 T.u.i.r.", "art. 67 T.u.i.r.", "art. 2195 c.c."],
    pages: [58, 61],
    depth: "deep",
    layers: {
      essenziale:
        "Il <strong>reddito d'impresa</strong> è il guadagno di chi svolge in modo <strong>abituale</strong> (cioè in modo continuativo, non una tantum) un'attività commerciale: negozi, industrie, trasporti, banche, assicurazioni e attività simili (art. 55 T.u.i.r., che rinvia all'elenco dell'art. 2195 c.c.). Esempio: Luca ha un negozio di scarpe; tutto ciò che guadagna con il negozio è reddito d'impresa. Per il Fisco conta la <em>natura dell'attività</em>, non l'organizzazione: chi svolge un'attività commerciale produce reddito d'impresa anche senza negozio, dipendenti o macchinari (es. l'agente di commercio). Le società di persone, le società di capitali e gli enti commerciali producono <em>sempre</em> reddito d'impresa, qualunque cosa facciano. Come si calcola? Non si parte da zero: si prende l'<strong>utile del bilancio</strong> (ricavi meno costi, come risulta dal conto economico) e vi si applicano le <strong>variazioni fiscali</strong> in aumento o in diminuzione previste dalle norme tributarie (art. 83 T.u.i.r.), perché non tutti i costi contabili sono accettati dal Fisco. I <strong>redditi diversi</strong> (art. 67 T.u.i.r.) sono invece la categoria <strong>residuale</strong>: raccolgono i guadagni che non entrano nelle altre categorie, come le <em>plusvalenze immobiliari</em> (rivendo casa entro 5 anni guadagnandoci), le <em>vincite</em> di lotterie e concorsi, i guadagni da vendita di azioni (<em>capital gain</em>) e le attività commerciali <em>occasionali</em>. Sono tassati per cassa, cioè quando si incassano.",
      approfondimenti: [
        {
          label: "Abitualità vs occasionalità: il confine tra impresa e redditi diversi",
          body: "L'attività è d'impresa se è <strong>abituale</strong>: stabile, regolare, destinata a proseguire nel tempo (anche se stagionale, come uno stabilimento balneare). Se invece è un episodio isolato — Marco vende una volta sola dei mobili restaurati — il guadagno è un <em>reddito diverso</em> (attività commerciale occasionale, art. 67). Attenzione: anche un <em>unico affare</em> può essere abituale, se richiede operazioni complesse e prolungate nel tempo. Le due norme (artt. 55 e 67) sono complementari: qualunque attività commerciale finisce nell'una o nell'altra, così nessun guadagno sfugge."
        },
        {
          label: "L'imprenditore \"senza impresa\": perché l'organizzazione non conta",
          body: "Nel diritto civile non c'è impresa senza organizzazione (art. 2082 c.c.). Per il Fisco invece l'organizzazione è irrilevante: le attività dell'art. 2195 c.c. producono <em>sempre</em> reddito d'impresa, anche se svolte da una persona sola senza struttura (es. agenti e rappresentanti di commercio). Eccezione in senso inverso: le <strong>prestazioni di servizi</strong> non elencate nell'art. 2195 c.c. diventano impresa <em>solo se</em> organizzate in forma d'impresa; altrimenti restano lavoro autonomo. Qui, e solo qui, l'organizzazione torna decisiva."
        },
        {
          label: "Le plusvalenze immobiliari tra i redditi diversi",
          body: "La <strong>plusvalenza</strong> è il guadagno da rivendita: prezzo di vendita meno costo di acquisto. È tassata come reddito diverso in tre casi principali (art. 67): terreni <em>lottizzati</em> o resi edificabili e poi venduti; immobili comprati o costruiti e rivenduti <strong>entro 5 anni</strong> (salvo quelli ricevuti per successione e salvo che l'immobile sia stato abitazione principale del venditore o di un familiare per la maggior parte del periodo); terreni <em>edificabili</em> ceduti a titolo oneroso. Passati i 5 anni, la rivendita della casa non genera reddito tassabile."
        },
        {
          label: "Vincite, capital gain e gli altri redditi diversi",
          body: "Nella categoria residuale entrano anche: le <strong>vincite</strong> di lotterie, concorsi a premio, giochi e scommesse e i premi per meriti artistici o scientifici; le plusvalenze da cessione di <strong>partecipazioni e strumenti finanziari</strong> (capital gain), dal 1° gennaio 2019 tassate con imposta sostitutiva del 26% sia per partecipazioni qualificate che non qualificate; i redditi fondiari non determinabili col catasto e gli <strong>immobili all'estero</strong>; l'affitto e l'usufrutto d'azienda; i redditi da sfruttamento di opere dell'ingegno da parte di eredi o acquirenti dei diritti."
        }
      ],
      giurisprudenza: [
        {
          label: "Prassi: la qualificazione dell'attività secondo criteri fattuali e formali",
          body: "Il T.u.i.r. individua chi produce reddito d'impresa con due tipi di criteri. Criteri <strong>formali</strong> (natura giuridica del soggetto, artt. 6 e 81): società di persone, di capitali ed enti commerciali producono sempre e solo reddito d'impresa, per il principio di onnicomprensività. Criteri <strong>fattuali</strong> (caratteristiche dell'attività, art. 55): per persone fisiche, società semplici ed enti non commerciali occorre invece verificare in concreto la natura commerciale e l'abitualità dell'attività — ed è qui che nascono le controversie con il Fisco."
        }
      ],
      eccezioni: [
        {
          label: "Errore da evitare: confondere reddito d'impresa e lavoro autonomo",
          body: "Il professionista (avvocato, medico) produce reddito di <em>lavoro autonomo</em>, non d'impresa: la sua attività è personale e intellettuale, non commerciale. Ma se i beni e la struttura organizzata prevalgono sull'apporto personale (es. un poliambulatorio con decine di dipendenti), il reddito diventa d'impresa. Due criteri distintivi: l'<strong>oggetto</strong> dell'attività (se rientra nell'art. 2195 c.c. è sempre impresa) e l'<strong>organizzazione</strong> (se stabile e prevalente, è impresa)."
        },
        {
          label: "Caso limite: l'attività agricola oltre i limiti",
          body: "L'attività agricola di regola produce reddito agrario, tassato col catasto. Ma se supera i limiti dell'art. 32 T.u.i.r. (es. allevamento con mangimi ottenibili dal terreno per meno di un quarto), l'eccedenza diventa <strong>reddito d'impresa</strong>, calcolato con costi e ricavi effettivi. Inoltre i redditi dei terreni delle società in nome collettivo e in accomandita semplice sono sempre redditi d'impresa, anche entro i limiti agrari."
        }
      ]
    },
    sintesi: [
      "Reddito d'impresa: da esercizio abituale di attività commerciali (art. 55 T.u.i.r.).",
      "Conta la natura dell'attività: l'organizzazione è irrilevante (imprenditore \"senza impresa\").",
      "Società commerciali: producono sempre reddito d'impresa, qualunque attività svolgano.",
      "Calcolo: utile di bilancio + variazioni fiscali in aumento/diminuzione (art. 83).",
      "Redditi diversi (art. 67): categoria residuale, elenco tassativo, tassati per cassa.",
      "Vi rientrano plusvalenze immobiliari (vendita entro 5 anni), vincite, capital gain."
    ],
    esempi: [
      {
        titolo: "Il negozio di Luca: dai ricavi al reddito tassabile",
        testo: "Luca ha un negozio di scarpe. In un anno incassa <strong>200.000 €</strong> di ricavi e sostiene <strong>150.000 €</strong> di costi (merce, affitto, commesso, bollette): l'utile del bilancio è <strong>50.000 €</strong>. Questo è il punto di partenza, non il punto di arrivo. Il Fisco applica le variazioni: tra i costi Luca ha inserito 2.000 € per la vacanza di famiglia, spesa personale che non c'entra con il negozio e che il Fisco non ammette in deduzione. Si fa quindi una <em>variazione in aumento</em> di 2.000 € e il reddito d'impresa tassabile diventa <strong>52.000 €</strong>. Poiché l'attività è abituale (il negozio è aperto tutto l'anno, tutti gli anni) e rientra tra le attività commerciali, il guadagno di Luca è reddito d'impresa a tutti gli effetti."
      },
      {
        titolo: "Maria rivende l'appartamento: plusvalenza tra i redditi diversi",
        testo: "Maria compra un appartamento a <strong>150.000 €</strong> e lo rivende dopo tre anni a <strong>190.000 €</strong>, senza averci mai abitato: l'ha tenuto come investimento. Il guadagno di <strong>40.000 €</strong> è una <em>plusvalenza immobiliare</em>: poiché tra acquisto e vendita sono passati meno di 5 anni e l'immobile non è stato la sua abitazione principale, la plusvalenza è tassata come <strong>reddito diverso</strong> (art. 67 T.u.i.r.). Se Maria avesse aspettato più di 5 anni, o se ci avesse abitato per la maggior parte del periodo, non avrebbe pagato nulla. Se invece Maria vincesse 10.000 € a un concorso a premi, anche quella vincita sarebbe un reddito diverso: la categoria raccoglie i guadagni che non trovano posto altrove."
      }
    ],
    flashcards: [
      ["Cos'è il reddito d'impresa?", "Il reddito che deriva dall'esercizio per professione abituale di imprese commerciali (art. 55 T.u.i.r., con rinvio all'art. 2195 c.c.)."],
      ["Serve un'organizzazione per produrre reddito d'impresa?", "No: per il Fisco conta la natura commerciale dell'attività, non l'organizzazione. Le attività dell'art. 2195 c.c. producono sempre reddito d'impresa (es. agente di commercio)."],
      ["Come si determina il reddito d'impresa?", "Si parte dall'utile o perdita del conto economico e si applicano le variazioni fiscali in aumento o in diminuzione previste dal T.u.i.r. (art. 83)."],
      ["Cosa sono i redditi diversi?", "Categoria residuale ed eterogenea (art. 67 T.u.i.r., elenco tassativo): raccoglie i redditi che non rientrano nelle altre categorie. Tassati per cassa."],
      ["Quando la vendita di una casa genera plusvalenza tassabile?", "Se l'immobile è rivenduto entro 5 anni dall'acquisto o costruzione, salvo acquisto per successione o uso come abitazione principale per la maggior parte del periodo."],
      ["Un'attività commerciale svolta una tantum che reddito produce?", "Reddito diverso (attività commerciale occasionale): manca l'abitualità richiesta dall'art. 55 per il reddito d'impresa."]
    ],
    comparativa: {
      titolo: "Reddito d'impresa vs Redditi diversi",
      a: "Reddito d'impresa",
      b: "Redditi diversi",
      righe: [
        { profilo: "Fonte", a: "Attività commerciale esercitata in modo abituale (art. 55)", b: "Fattispecie residuali: plusvalenze isolate, vincite, attività occasionali (art. 67)" },
        { profilo: "Requisito chiave", a: "Abitualità: attività stabile, continuativa nel tempo", b: "Occasionalità o estraneità a un'attività economica continuativa" },
        { profilo: "Determinazione", a: "Utile di bilancio + variazioni fiscali (principio di competenza)", b: "Regole specifiche per singola fattispecie, tassazione per cassa" },
        { profilo: "Esempio", a: "Il negozio di scarpe aperto tutto l'anno", b: "La rivendita di una casa entro 5 anni, la vincita a un concorso" }
      ]
    },
    quiz: [
      {
        q: "Secondo l'art. 55 T.u.i.r., sono redditi d'impresa quelli che derivano da:",
        opts: [
          "qualsiasi attività economica che produca un guadagno in denaro",
          "l'esercizio per professione abituale di imprese commerciali",
          "l'esercizio di arti e professioni in forma individuale",
          "il possesso di beni immobili destinati alla vendita"
        ],
        correct: 1,
        difficulty: 1,
        commonError: "Pensare che ogni guadagno sia reddito d'impresa: serve un'attività commerciale svolta in modo abituale.",
        why: "L'art. 55 T.u.i.r. definisce redditi d'impresa quelli derivanti dall'esercizio per professione abituale, ancorché non esclusiva, di imprese commerciali, con rinvio alle attività dell'art. 2195 c.c.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Un agente di commercio lavora da solo, senza ufficio né dipendenti. Che reddito produce?",
        opts: [
          "Reddito di lavoro autonomo, perché manca l'organizzazione",
          "Reddito di lavoro dipendente, perché opera per conto di aziende",
          "Reddito d'impresa, perché l'attività è commerciale a prescindere dall'organizzazione",
          "Reddito diverso, perché l'attività non è organizzata in forma d'impresa"
        ],
        correct: 2,
        difficulty: 3,
        commonError: "Ritenere necessaria l'organizzazione: ai fini fiscali le attività commerciali producono reddito d'impresa anche senza struttura (imprenditore \"senza impresa\").",
        why: "Per il Fisco le attività dell'art. 2195 c.c. rilevano oggettivamente: producono sempre reddito d'impresa, indipendentemente dalle modalità organizzative. È il caso tipico degli agenti e rappresentanti di commercio.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Come si determina il reddito d'impresa ai sensi dell'art. 83 T.u.i.r.?",
        opts: [
          "Sommando tutti i ricavi incassati nell'anno, al lordo dei costi",
          "Applicando le tariffe d'estimo catastali ai beni dell'impresa",
          "Sottraendo forfettariamente il 15% dai ricavi dichiarati",
          "Partendo dall'utile o perdita del conto economico e applicando le variazioni fiscali"
        ],
        correct: 3,
        difficulty: 2,
        commonError: "Confondere l'utile civilistico con il reddito fiscale: il primo è solo la base di partenza, cui si applicano le variazioni.",
        why: "L'art. 83 T.u.i.r. stabilisce che il reddito si determina apportando all'utile o alla perdita del conto economico le variazioni in aumento o in diminuzione previste dalle norme tributarie.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Paolo vende dopo 3 anni un appartamento comprato come investimento, guadagnando 30.000 €. La plusvalenza:",
        opts: [
          "è tassata come reddito diverso, perché sono passati meno di 5 anni",
          "non è mai tassata, perché la vendita di immobili è sempre esente",
          "è tassata come reddito fondiario, perché riguarda un immobile",
          "è tassata come reddito d'impresa, perché deriva da un'operazione speculativa"
        ],
        correct: 0,
        difficulty: 2,
        commonError: "Pensare che la vendita di casa non sia mai tassata: lo è se avviene entro 5 anni e l'immobile non era abitazione principale.",
        why: "L'art. 67 T.u.i.r. include tra i redditi diversi le plusvalenze da cessione di immobili acquistati da non più di 5 anni, salvo acquisto per successione o destinazione ad abitazione principale per la maggior parte del periodo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Quale caratteristica accomuna i redditi diversi dell'art. 67 T.u.i.r.?",
        opts: [
          "Derivano tutti da attività finanziarie e dal possesso di titoli",
          "Sono un elenco tassativo di fattispecie residuali, tassate per cassa",
          "Sono determinati tutti su base catastale, come i redditi fondiari",
          "Sono esenti da imposta fino alla soglia di 5.000 € annui"
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Credere che la categoria sia aperta: l'elenco dell'art. 67 è tassativo, anche se la categoria ha funzione residuale e di chiusura.",
        why: "I redditi diversi sono fattispecie non riconducibili alle altre categorie, elencate tassativamente dall'art. 67, che chiude il sistema impositivo Irpef. Rilevano secondo il principio di cassa, cioè al momento della percezione.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Dal 1° gennaio 2019, le plusvalenze da cessione di partecipazioni realizzate da persone fisiche fuori dall'impresa sono tassate:",
        opts: [
          "con aliquote Irpef progressive solo se la partecipazione è qualificata",
          "con esenzione totale se detenute da oltre dodici mesi",
          "con imposta sostitutiva del 26%, siano esse qualificate o non qualificate",
          "con imposta sostitutiva del 21%, come i canoni in cedolare secca"
        ],
        correct: 2,
        difficulty: 4,
        commonError: "Applicare il vecchio regime differenziato tra partecipazioni qualificate e non qualificate, superato dalla Legge di Bilancio 2018 per le cessioni dal 2019.",
        why: "La Legge di Bilancio 2018 ha uniformato il regime: dal 1° gennaio 2019 tutte le plusvalenze da cessione di partecipazioni scontano l'imposta sostitutiva del 26%, a prescindere dalla natura qualificata o meno della partecipazione.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      },
      {
        q: "Una società in nome collettivo gestisce esclusivamente terreni agricoli entro i limiti dell'art. 32 T.u.i.r. I relativi redditi sono:",
        opts: [
          "redditi agrari, determinati su base catastale",
          "redditi fondiari, in quanto derivanti da terreni",
          "redditi diversi, per mancanza di attività commerciale",
          "redditi d'impresa, per la forma societaria commerciale"
        ],
        correct: 3,
        difficulty: 5,
        commonError: "Guardare solo alla natura agricola dell'attività: per le società commerciali vale il criterio formale, che attrae tutto nel reddito d'impresa.",
        why: "Per società di persone commerciali (snc, sas) opera il criterio formale: qualunque reddito prodotto, compreso quello dei terreni agricoli, è reddito d'impresa, come previsto dall'art. 55, comma 2, lett. c) T.u.i.r.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 16"
      }
    ],
    veroFalso: [
      {
        aff: "Chi svolge un'attività commerciale in modo occasionale produce comunque reddito d'impresa.",
        vero: false,
        traccia: "Falso. Il reddito d'impresa richiede l'abitualità, cioè un'attività stabile e continuativa nel tempo. L'attività commerciale occasionale produce invece un reddito diverso ai sensi dell'art. 67 T.u.i.r., norma complementare all'art. 55."
      },
      {
        aff: "La plusvalenza dalla vendita della casa in cui il venditore ha abitato come abitazione principale per la maggior parte del periodo di possesso non è tassata, anche se la vendita avviene entro 5 anni.",
        vero: true,
        traccia: "Vero. L'art. 67 T.u.i.r. esclude la tassazione della plusvalenza infraquinquennale quando l'immobile è stato adibito ad abitazione principale del cedente o di un suo familiare per la maggior parte del tempo tra acquisto e cessione. Esclusi anche gli immobili acquisiti per successione."
      },
      {
        aff: "Il reddito d'impresa coincide sempre esattamente con l'utile del bilancio civilistico.",
        vero: false,
        traccia: "Falso. L'utile di bilancio è solo la base di partenza: il reddito fiscale si ottiene applicando le variazioni in aumento e in diminuzione previste dalle norme tributarie (art. 83 T.u.i.r.), perché non tutti i costi civilistici sono deducibili fiscalmente."
      }
    ],
    aperta: {
      q: "Il candidato illustri la nozione di reddito d'impresa ai fini fiscali, soffermandosi sui requisiti dell'attività e sulla funzione residuale dei redditi diversi.",
      traccia: "Il reddito d'impresa deriva dall'esercizio per professione abituale, anche non esclusiva, di imprese commerciali (art. 55 T.u.i.r.), individuate con rinvio all'art. 2195 c.c.: attività industriali, intermediarie, di trasporto, bancarie, assicurative e ausiliarie. La definizione fiscale è fondata sulla natura dell'attività: a differenza del diritto civile, l'organizzazione è irrilevante, sicché è configurabile l'imprenditore \"senza impresa\" (es. agente di commercio). Per le società commerciali vale invece il criterio formale: producono sempre reddito d'impresa. Requisito centrale è l'abitualità, cioè la stabilità e continuità dell'attività; se manca, l'attività commerciale occasionale genera redditi diversi. Il reddito si determina partendo dall'utile o perdita del conto economico, cui si applicano le variazioni fiscali (art. 83). I redditi diversi (art. 67) costituiscono la categoria residuale e di chiusura del sistema Irpef: elenco tassativo che comprende plusvalenze immobiliari infraquinquennali, plusvalenze da partecipazioni, vincite e premi, redditi occasionali, tassati secondo il principio di cassa.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 16"
    },
    consigliate: ["mappa", "comparativa", "esempi", "flashcards", "mcq"],
    media: {
      podcast: {
        title: "Reddito d'impresa e redditi diversi: chi, come, quanto",
        chapters: [
          ["Chi produce reddito d'impresa: abitualità e commercialità", 0],
          ["Il calcolo: dall'utile di bilancio alle variazioni fiscali", 320],
          ["I redditi diversi: plusvalenze immobiliari e capital gain", 640],
          ["Vincite, redditi occasionali e casi limite", 950]
        ]
      },
      mappa: true
    }
  },
  {
    id: "fiscalitaImprese",
    part: "generale",
    chapter: 5,
    chapterTitle: "Le imposte sui redditi",
    title: "La fiscalità delle imprese",
    subtitle: "Derivazione, competenza, inerenza e imputazione: le quattro regole del reddito d'impresa, il bilancio e le componenti reddituali",
    articoli: ["art. 83 T.u.i.r.", "art. 109 T.u.i.r.", "art. 85-88 T.u.i.r.", "art. 87 T.u.i.r.", "art. 2423 c.c."],
    pages: [62, 68],
    depth: "deep",
    layers: {
      essenziale:
        "Il reddito d'impresa segue quattro regole fondamentali. <strong>Derivazione</strong> (art. 83 T.u.i.r.): si parte dall'utile o dalla perdita del bilancio e si applicano le variazioni fiscali in aumento o in diminuzione; il dato contabile è la base, la legge tributaria lo corregge. <strong>Competenza</strong> (art. 109): ricavi e costi contano nell'anno in cui <em>maturano</em>, non quando entrano o escono i soldi. Esempio: se l'impresa consegna la merce a dicembre ma il cliente paga a febbraio, il ricavo è tassato nell'anno della consegna. È l'opposto del <em>principio di cassa</em> (che guarda solo agli incassi effettivi e vale per lavoro dipendente e autonomo). <strong>Inerenza</strong>: si deducono solo i costi legati all'attività d'impresa; le spese personali dell'imprenditore no. Esempio: il furgone per le consegne sì, la vacanza della famiglia no. <strong>Imputazione</strong> (art. 109, comma 4): un costo è deducibile solo se prima è stato scritto nel conto economico; i ricavi invece si tassano anche se non contabilizzati. Il <strong>bilancio d'esercizio</strong> è la \"fotografia\" annuale dell'impresa: lo <em>stato patrimoniale</em> mostra cosa possiede e cosa deve, il <em>conto economico</em> mostra ricavi e costi dell'anno. Tra le componenti positive: <strong>ricavi</strong> (vendita dei beni-merce) e <strong>plusvalenze</strong> (vendita degli altri beni, es. un capannone); tra le negative gli <strong>ammortamenti</strong> (il costo di un bene durevole spalmato su più anni). Le società di capitali pagano l'<strong>Ires</strong> con aliquota del <strong>24%</strong>, più l'<strong>Irap</strong> sul valore della produzione.",
      approfondimenti: [
        {
          label: "Derivazione semplice e derivazione rafforzata",
          body: "La derivazione è <em>parziale</em>: se le rettifiche fiscali sono poche, reddito fiscale e utile civilistico quasi coincidono (\"binario unico\"); se sono numerose, il reddito va calcolato in modo autonomo (\"doppio binario\"). Le variazioni possono essere <strong>permanenti</strong> (esauriscono l'effetto nell'esercizio) o <strong>temporanee</strong> (si riassorbono con variazione di segno opposto negli esercizi successivi). Per i soggetti che adottano i principi contabili internazionali vale la <strong>derivazione rafforzata</strong>: qualificazione, classificazione e imputazione temporale seguono i principi contabili (prevalenza della sostanza sulla forma), anche in deroga alle regole fiscali. Non si applica alle micro imprese."
        },
        {
          label: "Competenza: certezza e obiettiva determinabilità",
          body: "La competenza è integrata da un correttivo prudenziale: ricavi e costi di cui non sia ancora <strong>certa l'esistenza</strong> o <strong>obiettivamente determinabile l'ammontare</strong> rilevano nell'esercizio in cui tali condizioni si verificano. Un costo solo \"probabile\" (imputato in bilancio per prudenza) non è deducibile: si opera una variazione in aumento, poi una in diminuzione quando diventa certo. L'art. 109, comma 2, fissa i momenti di competenza: <em>consegna o spedizione</em> per i beni mobili, <em>stipula dell'atto</em> per gli immobili, <em>ultimazione</em> per i servizi. Il criterio è inderogabile e vincola tutte le imprese, comprese le microimprese."
        },
        {
          label: "Inerenza: il nesso tra costo e impresa (e il problema dell'antieconomicità)",
          body: "L'inerenza esprime il legame funzionale tra il costo e la vita dell'impresa: la spesa è deducibile se correlata a un'attività potenzialmente idonea a produrre utili, non necessariamente a un singolo ricavo. Specularmente, i proventi personali dell'imprenditore restano fuori dal reddito d'impresa. Questione dibattuta è la <strong>congruità</strong> (o antieconomicità): il Fisco può contestare costi sproporzionati, muovendo dall'idea che l'impresa tende alla convenienza economica. In caso di contestazione, spetta al <strong>contribuente</strong> provare esistenza e inerenza del costo, in termini qualitativi e quantitativi."
        },
        {
          label: "Componenti positivi e negativi: ricavi, plusvalenze, sopravvenienze, ammortamenti",
          body: "I <strong>ricavi</strong> (art. 85) sono i corrispettivi dei beni-merce e dei servizi tipici dell'attività. Le <strong>plusvalenze</strong> (art. 86) nascono dalla vendita degli <em>altri</em> beni (strumentali e patrimoniali): corrispettivo meno costo fiscalmente riconosciuto (già ridotto degli ammortamenti); per i beni posseduti da almeno 3 anni si può rateizzare la tassazione fino a 5 esercizi. Le <strong>sopravvenienze attive</strong> (art. 88) correggono componenti di esercizi precedenti (es. un debito che viene meno). Gli <strong>ammortamenti</strong> ripartiscono il costo dei beni durevoli su più esercizi, secondo coefficienti ministeriali, in proporzione alla perdita di valore del bene."
        }
      ],
      giurisprudenza: [
        {
          label: "Cassazione: la nozione ampia di inerenza",
          body: "Secondo l'interpretazione consolidata della giurisprudenza di legittimità, l'inerenza è una relazione tra due concetti — la spesa e l'impresa — per cui il costo rileva non per la connessione diretta a una precisa componente di reddito, ma per la sua <strong>correlazione con un'attività potenzialmente idonea a produrre utili</strong>. Il giudizio è qualitativo e dipende da variabili concrete come la dimensione dell'impresa e la sua collocazione geografica."
        },
        {
          label: "Cassazione: competenza e componenti negativi incerti",
          body: "Per la giurisprudenza di legittimità, i componenti negativi possono essere imputati all'esercizio in cui ne diviene certa l'esistenza o obiettivamente determinabile l'ammontare, se tali qualità mancavano nell'esercizio di competenza. Certezza e determinabilità devono sussistere <strong>entro la chiusura dell'esercizio</strong> (il 31 dicembre, per gli esercizi solari), anche se conosciute dopo, e non entro la redazione del bilancio o della dichiarazione."
        },
        {
          label: "Prassi: la participation exemption e la Circolare 36/E del 2004",
          body: "L'Agenzia delle Entrate ha chiarito che, ai fini della participation exemption, l'iscrizione della partecipazione tra le <strong>immobilizzazioni finanziarie nel primo bilancio</strong> chiuso nel periodo di possesso identifica in via definitiva il regime tributario: la successiva riclassificazione nell'attivo circolante non fa perdere l'esenzione, così come l'iniziale iscrizione nel circolante preclude per sempre l'accesso al regime."
        }
      ],
      eccezioni: [
        {
          label: "Errore da evitare: applicare il principio di cassa all'impresa",
          body: "Chi ragiona \"pago le tasse solo su quello che ho incassato\" sbaglia: nel reddito d'impresa vale la <strong>competenza</strong>. L'impresa paga Ires e Irap anche sui ricavi maturati e non ancora incassati, perché costi e ricavi generano crediti e debiti a prescindere dal movimento di denaro. Il principio di cassa vale invece per redditi di lavoro dipendente, autonomo, di capitale e diversi."
        },
        {
          label: "Participation exemption: quattro condizioni congiunte",
          body: "L'esenzione del <strong>95%</strong> delle plusvalenze su partecipazioni (art. 87 T.u.i.r.) richiede il rispetto <em>congiunto</em> di quattro condizioni: possesso ininterrotto dal primo giorno del dodicesimo mese precedente la cessione; iscrizione tra le immobilizzazioni finanziarie nel primo bilancio del periodo di possesso; sede della partecipata fuori dai paradisi fiscali; effettivo esercizio di impresa commerciale da parte della partecipata. Manca anche solo un requisito? Niente esenzione: la plusvalenza è tassata per intero."
        }
      ]
    },
    sintesi: [
      "Derivazione: reddito fiscale = utile di bilancio + variazioni fiscali (art. 83).",
      "Competenza: ricavi e costi rilevano quando maturano, non quando si incassano/pagano.",
      "Inerenza: deducibili solo i costi funzionali all'attività d'impresa.",
      "Imputazione: costi deducibili solo se transitati dal conto economico; ricavi tassati comunque.",
      "Ricavi da beni-merce; plusvalenze dagli altri beni; ammortamenti spalmano i costi pluriennali.",
      "Participation exemption: plusvalenze su partecipazioni esenti al 95%, con 4 condizioni. Ires 24%."
    ],
    esempi: [
      {
        titolo: "La fattura di dicembre: competenza in azione",
        testo: "La srl del sig. Rossi produce mobili. Il 10 dicembre 2023 consegna una cucina a un cliente per <strong>10.000 €</strong>, con pagamento pattuito a 90 giorni: i soldi arriveranno a marzo 2024. Per il principio di <strong>competenza</strong> il ricavo appartiene al 2023, anno della consegna del bene, e va tassato con il reddito di quell'anno, anche se in cassa non è ancora entrato un euro. Se per Rossi valesse il principio di <strong>cassa</strong> (come per un lavoratore autonomo), il ricavo sarebbe tassato nel 2024, anno dell'incasso. Stessa logica per i costi: se Rossi riceve a dicembre il legname per la produzione ma lo paga a gennaio, il costo è deducibile nel 2023. Conta quando l'operazione economica matura, non il movimento di denaro."
      },
      {
        titolo: "I costi della dott.ssa Bianchi: inerenza e ammortamento",
        testo: "La dott.ssa Bianchi amministra una società che gestisce una pasticceria. Tra i costi dell'anno figurano: farina e zucchero (10.000 €), affitto del laboratorio (12.000 €), un nuovo forno professionale da <strong>15.000 €</strong> e 3.000 € per l'abbonamento in palestra della figlia. Farina e affitto sono costi <strong>inerenti</strong>: servono all'attività e si deducono per intero nell'anno. La palestra della figlia non c'entra nulla con la pasticceria: costo <em>non inerente</em>, indeducibile, che genera una variazione in aumento. Il forno è un bene durevole che perde valore in più anni: il suo costo non si deduce tutto subito ma si <strong>ammortizza</strong>, ad esempio in 5 quote annuali da 3.000 €, secondo i coefficienti ministeriali. Così ogni esercizio sopporta la quota di costo che gli compete."
      }
    ],
    flashcards: [
      ["Cosa dice il principio di derivazione?", "Il reddito d'impresa deriva dall'utile o perdita del conto economico, cui si applicano le variazioni fiscali in aumento o diminuzione (art. 83 T.u.i.r.)."],
      ["Cosa dice il principio di competenza?", "Ricavi e costi concorrono al reddito nell'esercizio in cui maturano (consegna del bene, ultimazione del servizio), a prescindere da incasso o pagamento (art. 109 T.u.i.r.)."],
      ["Cos'è l'inerenza?", "Il nesso funzionale tra costo e attività d'impresa: sono deducibili solo le spese correlate a un'attività potenzialmente idonea a produrre utili, non quelle personali."],
      ["Cosa prevede il principio di imputazione?", "I costi sono deducibili solo se imputati al conto economico dell'esercizio di competenza; i ricavi concorrono al reddito anche se non contabilizzati (art. 109, commi 3 e 4)."],
      ["Qual è la differenza tra ricavi e plusvalenze?", "I ricavi derivano dalla cessione dei beni-merce (attività tipica); le plusvalenze dalla cessione di tutti gli altri beni dell'impresa (corrispettivo meno costo fiscalmente riconosciuto)."],
      ["Cos'è la participation exemption?", "Regime di esenzione al 95% delle plusvalenze su partecipazioni iscritte tra le immobilizzazioni finanziarie, subordinato a quattro condizioni congiunte (art. 87 T.u.i.r.)."]
    ],
    comparativa: {
      titolo: "Principio di cassa vs Principio di competenza",
      a: "Principio di cassa",
      b: "Principio di competenza",
      righe: [
        { profilo: "Quando rileva il reddito", a: "Quando il denaro entra o esce effettivamente (incasso/pagamento)", b: "Quando l'operazione matura (consegna del bene, ultimazione del servizio)" },
        { profilo: "A chi si applica", a: "Lavoro dipendente, lavoro autonomo, redditi di capitale e diversi", b: "Reddito d'impresa (tutte le imprese, anche le microimprese)" },
        { profilo: "Esempio pratico", a: "Il professionista tassa la parcella nell'anno in cui viene pagata", b: "L'impresa tassa la vendita nell'anno della consegna, anche se il cliente paga dopo" },
        { profilo: "Conseguenza", a: "Nessuna imposta su crediti non ancora incassati", b: "Imposte dovute anche su ricavi maturati ma non incassati" }
      ]
    },
    quiz: [
      {
        q: "Il principio di derivazione (art. 83 T.u.i.r.) stabilisce che il reddito d'impresa:",
        opts: [
          "si determina partendo dall'utile o perdita del conto economico, con le variazioni fiscali",
          "coincide sempre e integralmente con l'utile del bilancio civilistico",
          "si calcola in modo del tutto autonomo, ignorando le scritture contabili",
          "è determinato forfettariamente in percentuale sui ricavi dichiarati"
        ],
        correct: 0,
        difficulty: 1,
        commonError: "Pensare a una derivazione integrale: è invece una dipendenza parziale, perché le norme fiscali correggono il dato contabile.",
        why: "L'art. 83 T.u.i.r. prevede che al risultato del conto economico si apportino le variazioni in aumento o diminuzione previste dalle norme tributarie: il dato contabile è la base di partenza, non il risultato finale.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 17"
      },
      {
        q: "Un'impresa consegna merce a dicembre 2023; il cliente paga a febbraio 2024. In quale esercizio rileva il ricavo?",
        opts: [
          "Nel 2024, perché conta il momento dell'incasso effettivo",
          "A scelta dell'impresa, tra l'anno di consegna e quello di incasso",
          "Nel 2023, perché per i beni mobili conta la consegna o spedizione",
          "Per metà nel 2023 e per metà nel 2024, in proporzione"
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Applicare il principio di cassa: nel reddito d'impresa vale la competenza, che per i beni mobili guarda alla consegna o spedizione.",
        why: "Per il principio di competenza (art. 109 T.u.i.r.) i corrispettivi delle cessioni di beni mobili si considerano conseguiti alla data di consegna o spedizione, a prescindere dal pagamento.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 17"
      },
      {
        q: "In base al principio di inerenza, un costo è deducibile dal reddito d'impresa quando:",
        opts: [
          "è stato effettivamente pagato entro la chiusura dell'esercizio",
          "è correlato all'attività d'impresa potenzialmente idonea a produrre utili",
          "è documentato da fattura, qualunque sia la sua natura",
          "non supera una soglia percentuale fissa dei ricavi annui"
        ],
        correct: 1,
        difficulty: 2,
        commonError: "Credere che basti la documentazione o il pagamento: serve il nesso funzionale tra la spesa e la vita dell'impresa.",
        why: "L'inerenza esprime il legame funzionale tra costo e impresa: la giurisprudenza richiede la correlazione con un'attività potenzialmente idonea a produrre utili. Le spese personali dell'imprenditore restano indeducibili.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 17"
      },
      {
        q: "Il principio di imputazione (art. 109, comma 4, T.u.i.r.) prevede che:",
        opts: [
          "anche i ricavi concorrono al reddito solo se imputati al conto economico",
          "i costi sono deducibili anche se mai transitati per la contabilità",
          "componenti positivi e negativi seguono le stesse regole di contabilizzazione",
          "i costi sono deducibili solo se imputati al conto economico; i ricavi si tassano comunque"
        ],
        correct: 3,
        difficulty: 3,
        commonError: "Ritenere la regola simmetrica: vale solo per i componenti negativi, mentre i positivi concorrono al reddito anche se non contabilizzati.",
        why: "L'art. 109, comma 4, nega la deduzione dei costi non imputati al conto economico dell'esercizio di competenza; il comma 3 stabilisce invece che i componenti positivi concorrono al reddito anche se non contabilizzati.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 17"
      },
      {
        q: "Quale documento del bilancio rappresenta ricavi e costi dell'esercizio, con struttura scalare?",
        opts: [
          "Lo stato patrimoniale",
          "La nota integrativa",
          "Il conto economico",
          "Il rendiconto finanziario"
        ],
        correct: 2,
        difficulty: 1,
        commonError: "Confondere conto economico e stato patrimoniale: il secondo fotografa attività e passività, non il risultato dell'anno.",
        why: "Il conto economico raggruppa in forma scalare ricavi e proventi (aggregato A) e costi (aggregato B): la loro differenza dà il reddito operativo e, dopo le aree finanziarie e le imposte, l'utile o la perdita d'esercizio.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 17"
      },
      {
        q: "La participation exemption (art. 87 T.u.i.r.) prevede che le plusvalenze su partecipazioni, a certe condizioni:",
        opts: [
          "siano tassate con imposta sostitutiva del 26% in luogo dell'Ires",
          "siano esenti nella misura del 95%, concorrendo al reddito solo per il 5%",
          "siano integralmente esenti se il possesso supera i tre anni",
          "siano rateizzabili in dieci quote annuali costanti"
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Confondere la pex con la rateizzazione delle plusvalenze ordinarie o con l'imposta sostitutiva prevista per le persone fisiche.",
        why: "In presenza delle quattro condizioni congiunte (possesso minimo di dodici mesi, iscrizione tra le immobilizzazioni finanziarie, sede fuori dai paradisi fiscali, esercizio di impresa commerciale), la plusvalenza è esente al 95% e concorre al reddito solo per il 5%.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 17"
      },
      {
        q: "Un costo di competenza dell'esercizio, ma non ancora certo nell'esistenza al 31 dicembre:",
        opts: [
          "non è deducibile in quell'esercizio; lo sarà quando diverrà certo e determinabile",
          "è deducibile subito, purché imputato prudenzialmente al conto economico",
          "è deducibile al 50% nell'esercizio e al 50% in quello successivo",
          "diventa deducibile se la certezza matura prima della dichiarazione dei redditi"
        ],
        correct: 0,
        difficulty: 5,
        commonError: "Ritenere sufficiente l'imputazione prudenziale in bilancio o la certezza sopravvenuta prima della dichiarazione: la certezza deve sussistere entro la chiusura dell'esercizio.",
        why: "L'art. 109 richiede certezza dell'esistenza e obiettiva determinabilità dell'ammontare: il costo incerto genera una variazione in aumento nell'anno e una variazione in diminuzione nell'esercizio in cui le condizioni si verificano. Esse devono sussistere al 31 dicembre, anche se conosciute dopo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 17"
      }
    ],
    veroFalso: [
      {
        aff: "Nel reddito d'impresa un ricavo maturato ma non ancora incassato è comunque tassato.",
        vero: true,
        traccia: "Vero. Per il principio di competenza (art. 109 T.u.i.r.) contano il momento della consegna del bene o dell'ultimazione del servizio, non l'incasso: l'impresa paga Ires e Irap anche su ricavi che hanno generato solo un credito verso il cliente."
      },
      {
        aff: "Le spese personali dell'imprenditore sono deducibili dal reddito d'impresa se documentate da fattura.",
        vero: false,
        traccia: "Falso. Per il principio di inerenza si deducono solo i costi funzionali alla vita dell'impresa; le spese che rispondono a esigenze personali dell'imprenditore sono indeducibili, anche se documentate, e generano una variazione in aumento."
      },
      {
        aff: "La vendita del capannone dell'impresa genera un ricavo, come la vendita delle merci.",
        vero: false,
        traccia: "Falso. I ricavi derivano dalla cessione dei beni-merce, cioè dei beni alla cui produzione o scambio è diretta l'attività. La vendita di beni diversi, come il capannone strumentale, genera una plusvalenza (art. 86 T.u.i.r.): corrispettivo meno costo fiscalmente riconosciuto al netto degli ammortamenti."
      }
    ],
    aperta: {
      q: "Il candidato illustri i principi generali che regolano la determinazione del reddito d'impresa, con particolare riguardo a derivazione, competenza e inerenza.",
      traccia: "La determinazione del reddito d'impresa muove dal principio di derivazione (art. 83 T.u.i.r.): base di calcolo è l'utile o la perdita del conto economico, cui si apportano le variazioni in aumento o diminuzione previste dalle norme tributarie; si tratta di dipendenza parziale, che può sfociare nel binario unico o nel doppio binario a seconda dell'entità delle rettifiche. Il principio di competenza (art. 109) imputa ricavi e costi all'esercizio di maturazione — consegna per i beni mobili, stipula per gli immobili, ultimazione per i servizi — a prescindere dai movimenti finanziari, con il correttivo della certezza dell'esistenza e dell'obiettiva determinabilità dell'ammontare. È criterio inderogabile, opposto al principio di cassa proprio delle altre categorie reddituali. L'inerenza subordina la deducibilità dei costi al nesso funzionale con l'attività d'impresa, intesa dalla giurisprudenza come correlazione con un'attività potenzialmente produttiva di utili; l'onere della prova grava sul contribuente. Completa il quadro il principio di imputazione: i costi si deducono solo se transitati dal conto economico, mentre i componenti positivi concorrono al reddito anche se non contabilizzati.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 17"
    },
    consigliate: ["comparativa", "esempi", "mappa", "verofalso", "aperta"],
    media: {
      podcast: {
        title: "Le regole del reddito d'impresa: dal bilancio all'imposta",
        chapters: [
          ["Derivazione: si parte dal bilancio", 0],
          ["Competenza vs cassa: quando conta il ricavo", 330],
          ["Inerenza e imputazione: quali costi si deducono", 660],
          ["Ricavi, plusvalenze, ammortamenti e pex; Ires 24% e Irap", 990]
        ]
      },
      mappa: true
    }
  }
];
