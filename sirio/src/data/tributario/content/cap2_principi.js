/* =========================================================================
   SIRIO — DIRITTO TRIBUTARIO · Capitolo 2: Principi costituzionali e fonti.
   Fonte: Loconte, Manuale di diritto tributario — cap. 3 (principi e norme
   costituzionali), cap. 4 (le fonti), cap. 5 (l'interpretazione della norma
   tributaria).
   ========================================================================= */

export const TRIB_CAP2 = [
  {
    id: "riservaLegge",
    part: "generale",
    chapter: 2,
    chapterTitle: "Principi costituzionali e fonti",
    title: "La riserva di legge (art. 23 Cost.)",
    subtitle: "Nessun tributo senza legge: riserva relativa, art. 75 e art. 81",
    articoli: ["art. 23 Cost.", "art. 25 Cost.", "art. 75, co. 2 Cost.", "art. 81 Cost."],
    pages: [7, 7],
    depth: "deep",
    layers: {
      essenziale:
        "L'art. 23 della Costituzione dice: <strong>«nessuna prestazione personale o patrimoniale può essere imposta se non in base alla legge»</strong>. In parole semplici: lo Stato può chiederti soldi (o comportamenti obbligatori) solo se lo prevede una legge approvata dal Parlamento. Esempio: il Governo non può inventarsi da solo, con un semplice atto amministrativo, una nuova imposta sulle case; serve una legge. Questa regola si chiama <strong>riserva di legge</strong>. Attenzione al dettaglio che fa la differenza: la riserva è <strong>relativa</strong>, non assoluta. La formula «in base alla legge» significa che la legge deve fissare solo gli <em>elementi essenziali</em> del tributo: chi paga (soggetto passivo), su quale fatto si paga (presupposto), su quale valore si calcola (base imponibile), i criteri per le aliquote e le sanzioni. Gli elementi di dettaglio — come le procedure per accertare e riscuotere il tributo — possono essere regolati da fonti inferiori, cioè dai <strong>regolamenti</strong>. Lo conferma il confronto con l'art. 25 Cost. (per le pene serve «in forza di una legge»: riserva assoluta) e il coordinamento con le norme sulle autonomie locali. La ratio è duplice: proteggere il patrimonio del singolo e garantire che a decidere sui tributi sia il Parlamento, dove sono rappresentate anche le minoranze. Completano il quadro l'<strong>art. 75, co. 2</strong> (niente referendum abrogativo sulle leggi tributarie e di bilancio) e l'<strong>art. 81</strong> (con la legge di bilancio non si possono stabilire nuovi tributi; equilibrio tra entrate e spese).",
      approfondimenti: [
        {
          label: "Cosa deve fissare la legge e cosa possono fare i regolamenti",
          body: "La legge deve individuare: il <strong>soggetto passivo</strong> (chi paga), il <strong>presupposto d'imposta</strong> (il fatto che fa nascere il tributo), la <strong>base imponibile</strong> (il valore su cui si calcola), il <strong>criterio di determinazione delle aliquote</strong> (la percentuale) e le <strong>sanzioni</strong>. Ai regolamenti restano gli elementi secondari: le procedure di attuazione del tributo, cioè accertamento (i controlli del Fisco) e riscossione (l'incasso). Esempio: la legge dice che chi possiede un immobile paga e su quale valore; il regolamento può disciplinare come si versano le somme."
        },
        {
          label: "La ratio: da difesa contro il sovrano a garanzia democratica",
          body: "Nello Stato assoluto la riserva di legge serviva a proteggere il patrimonio dei sudditi dal sovrano (diritto all'auto-imposizione, diritto al bilancio). Oggi la ratio è più ampia: tutela sia gli interessi del singolo sia quelli della collettività, perché in Parlamento partecipano anche le minoranze. La riserva funziona come limite all'Esecutivo (il Governo non decide da solo i tributi) e allo stesso Legislatore, che può disciplinare la materia tributaria solo con strumenti che rientrano nel perimetro della legge."
        },
        {
          label: "Cosa sono le «prestazioni patrimoniali imposte»",
          body: "Sono tutte le prestazioni in denaro chieste in modo <strong>coattivo</strong> (cioè obbligatorio, senza che tu possa scegliere), anche se non riducono il patrimonio in via definitiva. La coattività riguarda l'<em>an</em> (se si paga: il presupposto), il <em>quantum</em> (quanto si paga) e la disciplina del rapporto. Restano fuori dall'art. 23: le sanzioni penali (coperte dall'art. 25), le prestazioni a contenuto negativo dell'art. 41 Cost. e le espropriazioni per pubblica utilità (artt. 42, co. 3 e 43 Cost.)."
        },
        {
          label: "Art. 75 e art. 81: i due «paletti» che completano la riserva",
          body: "L'art. 75, co. 2 vieta il referendum abrogativo per le leggi tributarie e di bilancio: se i cittadini potessero cancellare le tasse col voto diretto, si autorizzerebbe la soppressione dell'intero sistema dei tributi; devono decidere gli organi rappresentativi con il procedimento legislativo. L'art. 81, dopo la riforma, prevede: equilibrio tra entrate e spese del bilancio (co. 1); indebitamento solo per il ciclo economico o, con autorizzazione delle Camere a maggioranza assoluta, per eventi eccezionali (co. 2); e il divieto di stabilire nuovi tributi con la legge di approvazione del bilancio."
        }
      ],
      giurisprudenza: [
        {
          label: "L'ambito dell'art. 23: leggi regionali sì, norme UE no",
          body: "Per l'interpretazione consolidata, la «legge» dell'art. 23 non è solo quella statale ma anche quella <strong>regionale</strong>: anche le Regioni, quando la Costituzione lo consente, soddisfano la riserva. Restano invece fuori le norme dell'Unione europea: in virtù del principio di competenza, esse promanano da una fonte di produzione autonoma, propria di un ordinamento distinto da quello interno, e quindi non devono rispettare l'art. 23."
        }
      ],
      eccezioni: [
        {
          label: "Errore da evitare: pensare che la riserva sia assoluta",
          body: "È l'errore classico. Se la riserva fosse assoluta, ogni dettaglio del tributo dovrebbe stare nella legge e i regolamenti sarebbero esclusi. Invece la formula «in base alla legge» (diversa da «in forza di una legge» dell'art. 25 sulle pene) ammette i regolamenti per gli aspetti di dettaglio. Conseguenza pratica: un decreto ministeriale che disciplina le modalità di versamento è legittimo; un decreto ministeriale che crea un tributo nuovo no."
        },
        {
          label: "Non tutto ciò che costa è «prestazione imposta»",
          body: "Non rientrano nell'art. 23 le sanzioni penali, le prestazioni a contenuto negativo ex art. 41 Cost. e le espropriazioni per pubblica utilità (artt. 42, co. 3 e 43 Cost.): hanno le loro garanzie costituzionali specifiche. Occhio anche al referendum: il divieto dell'art. 75 riguarda il referendum <em>abrogativo</em> sulle leggi tributarie e di bilancio (oltre che su amnistia, indulto e autorizzazione a ratificare trattati)."
        }
      ]
    },
    sintesi: [
      "Art. 23: nessuna prestazione imposta se non in base alla legge.",
      "Riserva RELATIVA: la legge fissa solo gli elementi essenziali del tributo.",
      "Essenziali: soggetto passivo, presupposto, base imponibile, criteri per aliquote, sanzioni.",
      "Ai regolamenti restano accertamento e riscossione (elementi di dettaglio).",
      "Art. 75, co. 2: vietato il referendum abrogativo sulle leggi tributarie.",
      "Art. 81: no nuovi tributi con la legge di bilancio; equilibrio entrate-spese."
    ],
    esempi: [
      {
        titolo: "Il decreto che non può creare un'imposta",
        testo: "Immaginiamo che il Ministero dell'Economia, con un semplice decreto ministeriale, istituisca una nuova imposta di 200 € l'anno su chi possiede una seconda auto. Marco, che ha due auto, riceve la richiesta di pagamento e si rivolge alla dott.ssa Bianchi, la sua commercialista. La risposta è netta: quel decreto viola l'art. 23 Cost., perché un tributo nuovo — con il suo presupposto (possedere una seconda auto), il soggetto passivo e l'importo — può essere introdotto solo <strong>in base alla legge</strong>, cioè da Parlamento o da atti con forza di legge. Diverso sarebbe se una legge avesse già creato l'imposta e il decreto si limitasse a stabilire come e quando versarla: quelle sono procedure di attuazione, elementi di dettaglio che le fonti secondarie possono regolare."
      },
      {
        titolo: "Il referendum impossibile sull'IRPEF",
        testo: "Un comitato di cittadini raccoglie 700.000 firme per un referendum che abroghi le norme sull'IRPEF, l'imposta sui redditi. Giulia, studentessa di giurisprudenza, spiega al comitato perché il referendum non si farà mai: l'art. 75, co. 2 Cost. vieta espressamente il referendum abrogativo per le leggi tributarie e di bilancio (oltre che per amnistia, indulto e autorizzazione a ratificare trattati internazionali). Il motivo è di buon senso: se la tassazione dipendesse direttamente dalla volontà popolare espressa col voto, chiunque voterebbe per cancellare le proprie tasse e si autorizzerebbe la soppressione dell'intero sistema dei tributi. Su queste materie devono decidere gli organi rappresentativi, dentro un procedimento legislativo."
      }
    ],
    flashcards: [
      ["Cosa dice l'art. 23 Cost.?", "«Nessuna prestazione personale o patrimoniale può essere imposta se non in base alla legge»: i tributi richiedono una base legislativa."],
      ["La riserva di legge in materia tributaria è assoluta o relativa?", "Relativa: la legge fissa solo gli elementi essenziali del tributo; i dettagli (accertamento, riscossione) possono andare ai regolamenti."],
      ["Quali sono gli elementi essenziali che deve fissare la legge?", "Soggetto passivo, presupposto d'imposta, base imponibile, criteri di determinazione delle aliquote, sanzioni."],
      ["Si può fare un referendum abrogativo su una legge tributaria?", "No: l'art. 75, co. 2 Cost. lo vieta per le leggi tributarie e di bilancio, di amnistia e indulto, di autorizzazione a ratificare trattati."],
      ["Cosa vieta l'art. 81 Cost. in materia tributaria?", "Con la legge di approvazione del bilancio non si possono stabilire nuovi tributi; il bilancio deve rispettare l'equilibrio tra entrate e spese."],
      ["L'art. 23 vale anche per le norme UE?", "No: le norme comunitarie provengono da un ordinamento distinto (principio di competenza) e non sono soggette all'art. 23; la riserva è invece soddisfatta anche dalla legge regionale."]
    ],
    comparativa: {
      titolo: "Riserva assoluta vs riserva relativa",
      a: "Riserva assoluta (es. art. 25 Cost., pene)",
      b: "Riserva relativa (art. 23 Cost., tributi)",
      righe: [
        { profilo: "Formula costituzionale", a: "«In forza di una legge»", b: "«In base alla legge»" },
        { profilo: "Cosa deve stare nella legge", a: "L'intera disciplina della materia", b: "Solo gli elementi essenziali (soggetto, presupposto, base imponibile, criteri per aliquote, sanzioni)" },
        { profilo: "Spazio per i regolamenti", a: "Nessuno: le fonti secondarie sono escluse", b: "Sì, per gli elementi di dettaglio (accertamento e riscossione)" },
        { profilo: "Esempio pratico", a: "Un reato e la sua pena solo per legge", b: "La legge crea l'imposta; il decreto ministeriale disciplina le modalità di versamento" }
      ]
    },
    quiz: [
      {
        q: "Secondo l'art. 23 Cost., una nuova imposta può essere introdotta:",
        opts: ["Solo in base alla legge", "Con decreto ministeriale motivato", "Con circolare dell'Agenzia delle Entrate", "Con regolamento comunale"],
        correct: 0,
        difficulty: 1,
        commonError: "Pensare che basti un atto del Governo o dell'amministrazione: senza base legislativa il tributo è illegittimo.",
        why: "L'art. 23 Cost. stabilisce che nessuna prestazione personale o patrimoniale può essere imposta se non in base alla legge. Serve quindi una legge o un atto con forza di legge, non un atto amministrativo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "La riserva di legge dell'art. 23 Cost. è definita «relativa» perché:",
        opts: ["Riguarda solo i tributi statali e non quelli regionali", "Può essere derogata dal Governo in casi di urgenza", "La legge fissa gli elementi essenziali e lascia i dettagli ai regolamenti", "Vale solo per le imposte dirette e non per quelle indirette"],
        correct: 2,
        difficulty: 2,
        commonError: "Confondere «relativa» con «derogabile»: la riserva non si può mai derogare, semplicemente non copre gli elementi di dettaglio.",
        why: "«In base alla legge» significa che la legge deve disciplinare solo gli elementi essenziali del tributo (soggetto passivo, presupposto, base imponibile, criteri per le aliquote, sanzioni), mentre gli elementi secondari, come accertamento e riscossione, possono essere rimessi alle fonti subordinate.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "Quale di questi elementi può essere disciplinato da un regolamento e non necessariamente dalla legge?",
        opts: ["Il presupposto d'imposta", "La base imponibile", "Il soggetto passivo", "Le procedure di riscossione del tributo"],
        correct: 3,
        difficulty: 2,
        commonError: "Ritenere che anche le procedure attuative debbano stare nella legge: sono invece elementi secondari.",
        why: "Le procedure di attuazione del tributo (accertamento e riscossione) sono elementi di dettaglio che la legge può rimettere alle fonti secondarie. Soggetto passivo, presupposto e base imponibile sono invece elementi essenziali riservati alla legge.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "L'art. 75, co. 2 Cost. stabilisce che per le leggi tributarie:",
        opts: ["Il referendum è ammesso solo se confermativo", "Non è ammesso il referendum abrogativo", "Il referendum richiede un quorum rafforzato", "Il referendum è ammesso previa autorizzazione delle Camere"],
        correct: 1,
        difficulty: 1,
        commonError: "Credere che esista una via referendaria «rafforzata» per le tasse: il divieto è invece totale per l'abrogativo.",
        why: "L'art. 75, co. 2 esclude il referendum abrogativo per le leggi tributarie e di bilancio, di amnistia e indulto e di autorizzazione a ratificare trattati: su queste materie devono decidere gli organi rappresentativi nel procedimento legislativo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "Con la legge di approvazione del bilancio, ai sensi dell'art. 81 Cost.:",
        opts: ["Si possono istituire solo tributi temporanei", "Si possono aumentare le aliquote ma non creare tributi", "Non si possono stabilire nuovi tributi", "Si possono stabilire nuovi tributi con maggioranza assoluta"],
        correct: 2,
        difficulty: 3,
        commonError: "Pensare che la legge di bilancio, essendo la legge «delle entrate», possa anche crearle: può solo approvare il bilancio, non istituire tributi.",
        why: "L'art. 81 vieta di stabilire nuovi tributi (e nuove spese) con la legge di approvazione del bilancio. La giustificazione tradizionale è che la legge di bilancio è legge solo in senso formale; quella sostanziale è evitare che nuovi tributi servano a coprire le spese.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "Il nuovo art. 81 Cost. consente il ricorso all'indebitamento:",
        opts: ["Mai, per il principio di equilibrio del bilancio", "Solo per gli effetti del ciclo economico o, con autorizzazione delle Camere a maggioranza assoluta, per eventi eccezionali", "Liberamente, purché indicato nella legge di bilancio", "Solo previa autorizzazione dell'Unione europea"],
        correct: 1,
        difficulty: 4,
        commonError: "Ricordare solo il principio di equilibrio e dimenticare la deroga espressa prevista dal comma 2.",
        why: "L'art. 81 impone l'equilibrio tra entrate e spese tenendo conto del ciclo economico, ma ammette l'indebitamento per considerare gli effetti del ciclo e, previa autorizzazione delle Camere adottata a maggioranza assoluta dei componenti, al verificarsi di eventi eccezionali.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "Quale prestazione NON rientra tra le «prestazioni patrimoniali imposte» soggette all'art. 23 Cost.?",
        opts: ["Un'imposta sul possesso di immobili", "Una tassa richiesta coattivamente per un servizio", "L'espropriazione per pubblica utilità", "Un contributo obbligatorio che non decurta definitivamente il patrimonio"],
        correct: 2,
        difficulty: 4,
        commonError: "Includere l'espropriazione perché «toglie» un bene: ha però una garanzia costituzionale propria (artt. 42, co. 3 e 43).",
        why: "Sono escluse dall'art. 23 le sanzioni penali, le prestazioni a contenuto negativo ex art. 41 Cost. e le espropriazioni per pubblica utilità ex artt. 42, co. 3 e 43 Cost. Rientrano invece tutte le prestazioni coattive, anche senza decurtazione definitiva del patrimonio.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      }
    ],
    veroFalso: [
      { aff: "La riserva di legge dell'art. 23 Cost. è soddisfatta anche dalla legge regionale.", vero: true, traccia: "Vero. L'art. 23 non si riferisce solo alla legge statale: anche la legge regionale è idonea a soddisfare la riserva. Restano invece fuori le norme comunitarie, che promanano da un ordinamento distinto in virtù del principio di competenza." },
      { aff: "Poiché la riserva è relativa, un regolamento può individuare il soggetto passivo di un nuovo tributo.", vero: false, traccia: "Falso. Il soggetto passivo è un elemento essenziale del tributo e deve essere individuato dalla legge, insieme a presupposto, base imponibile, criteri per le aliquote e sanzioni. Ai regolamenti spettano solo gli elementi di dettaglio, come accertamento e riscossione." },
      { aff: "Il divieto di referendum abrogativo sulle leggi tributarie serve a evitare che il voto diretto dei cittadini sopprima il sistema dei tributi.", vero: true, traccia: "Vero. Far dipendere la tassazione direttamente dalla volontà popolare significherebbe autorizzare la soppressione dell'intero sistema dei tributi: per questo l'art. 75, co. 2 riserva la decisione agli organi rappresentativi nel procedimento legislativo." }
    ],
    aperta: {
      q: "Il candidato illustri il principio della riserva di legge in materia tributaria, soffermandosi sulla natura relativa della riserva e sui divieti posti dagli artt. 75 e 81 Cost.",
      traccia: "L'art. 23 Cost. dispone che nessuna prestazione personale o patrimoniale può essere imposta se non in base alla legge. La riserva ha natura relativa: la formula «in base alla legge» — diversa da «in forza di una legge» dell'art. 25, argomento letterale confermato da quello sistematico sulle autonomie locali — impone alla legge di fissare solo gli elementi essenziali del tributo (soggetto passivo, presupposto, base imponibile, criteri di determinazione delle aliquote, sanzioni), rimettendo alle fonti secondarie gli elementi di dettaglio, cioè le procedure di accertamento e riscossione. La ratio, un tempo garanzia patrimoniale del singolo verso il sovrano, oggi tutela anche la collettività assicurando la decisione parlamentare con la partecipazione delle minoranze. La riserva è soddisfatta anche dalla legge regionale, non riguarda le norme UE. Completano il sistema l'art. 75, co. 2, che vieta il referendum abrogativo sulle leggi tributarie e di bilancio, e l'art. 81, che vieta di stabilire nuovi tributi con la legge di approvazione del bilancio e impone l'equilibrio tra entrate e spese, con indebitamento ammesso solo per il ciclo economico o eventi eccezionali autorizzati dalle Camere a maggioranza assoluta.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 3"
    },
    consigliate: ["mappa", "comparativa", "flashcards", "mcq", "aperta"],
    media: {
      podcast: {
        title: "La riserva di legge tributaria",
        chapters: [["L'art. 23 e il suo significato", 0], ["Riserva relativa: legge e regolamenti", 210], ["Ratio e prestazioni imposte", 440], ["Art. 75 e art. 81", 640]]
      },
      mappa: true
    }
  },
  {
    id: "capacitaContributiva",
    part: "generale",
    chapter: 2,
    chapterTitle: "Principi costituzionali e fonti",
    title: "Capacità contributiva e progressività (art. 53)",
    subtitle: "Si paga in base a quello che si ha: effettività, attualità, progressività, minimo vitale",
    articoli: ["art. 53 Cost.", "art. 2 Cost.", "art. 3 Cost."],
    pages: [8, 10],
    depth: "deep",
    layers: {
      essenziale:
        "L'art. 53 Cost. contiene la regola d'oro del Fisco: <strong>«tutti sono tenuti a concorrere alle spese pubbliche in ragione della loro capacità contributiva»</strong> (co. 1) e <strong>«il sistema tributario è informato a criteri di progressività»</strong> (co. 2). Tradotto in parole comuni: <strong>si paga in base a quello che si ha</strong>. Chi guadagna 100.000 € l'anno può contribuire più di chi ne guadagna 15.000. La <em>capacità contributiva</em> è l'idoneità economica del contribuente a pagare il tributo, e si misura con indici di ricchezza: <strong>diretti</strong> (reddito, patrimonio) e <strong>indiretti</strong> (consumi, affari, trasferimenti di beni). Quel «tutti» significa universalità: non solo i cittadini italiani, ma anche stranieri e apolidi che operano nel territorio dello Stato, in attuazione dei doveri di solidarietà (art. 2 Cost.). La capacità contributiva è al tempo stesso il <em>presupposto</em> del potere impositivo e il <em>parametro</em> per misurarlo, e deve avere due requisiti: <strong>effettività</strong> (la ricchezza deve essere reale, non apparente o fittizia) e <strong>attualità</strong> (si tassa la ricchezza di oggi, non quella troppo passata o futura). Ne discende il <strong>minimo vitale</strong> (la cosiddetta no tax area): i mezzi minimi per vivere dignitosamente non si tassano. Il secondo comma aggiunge la <strong>progressività</strong>: l'imposta cresce più che proporzionalmente al crescere della base imponibile — chi ha di più paga percentuali più alte — così il sistema, oltre a finanziare le spese pubbliche (interesse fiscale della collettività), redistribuisce la ricchezza. La progressività riguarda il sistema nel suo complesso, non ogni singolo tributo.",
      approfondimenti: [
        {
          label: "Da norma «programmatica» a norma precettiva",
          body: "Per anni l'art. 53 fu considerato solo programmatico, una «scatola vuota» senza valore vincolante. La dottrina, nel 1964, definì la capacità contributiva come «l'idoneità economica del contribuente a corrispondere la prestazione coattiva imposta», riconoscendo il carattere precettivo della norma e indicando gli indici valutabili: patrimonio, reddito, risparmio, rendite finanziarie, consumi, investimenti. Inoltre, fino agli anni '80 prevaleva il profilo soggettivo (l'idoneità della persona a sopportare l'obbligazione); da allora prevale il profilo oggettivo: conta qualsiasi fatto che esprima forza economica in sé."
        },
        {
          label: "Effettività e attualità: i due requisiti",
          body: "<strong>Effettività</strong>: la capacità colpita non deve essere apparente o fittizia. Le presunzioni legali (meccanismi con cui il Fisco deduce la ricchezza da altri fatti) sono legittime solo se non creano una base fittizia di imposizione e ammettono la prova contraria. <strong>Attualità</strong>: il tributo deve collegarsi a una capacità contributiva in atto, non troppo passata né futura: un tributo eccessivamente retroattivo (o proiettato troppo avanti) lede la certezza del diritto, e non sono possibili pagamenti anticipati per una tassazione futura. Esiste anche una misura massima: il tributo non può superare la capacità contributiva dimostrata dal fatto economico."
        },
        {
          label: "Eguaglianza formale e sostanziale (art. 3) e interesse fiscale",
          body: "L'eguaglianza formale impone di trattare in modo uguale situazioni uguali e in modo diverso situazioni diverse: perciò il legislatore può legittimamente prelevare di più da chi manifesta maggiore capacità contributiva e di meno da chi ne manifesta meno, restando coerente con la legge tributaria. L'eguaglianza sostanziale affida allo Stato la rimozione degli ostacoli economico-sociali: la leva fiscale può correggere situazioni di partenza non eque. Le norme di favore non violano l'eguaglianza se le agevolazioni perseguono scopi costituzionalmente riconosciuti: cultura (art. 9), famiglia (art. 31), salute (art. 32), scuola (artt. 33-34), lavoro (art. 35)."
        },
        {
          label: "Come si realizza la progressività: aliquote, deduzioni, detrazioni",
          body: "Un sistema è progressivo quando l'imposta aumenta in modo più che proporzionale rispetto alla base imponibile: non solo si paga di più in valore assoluto, ma in percentuale. L'intento del costituente era limitare le imposte proporzionali (come quelle sui consumi, che rischiano di rendere il sistema regressivo, pesando di più sui poveri) e potenziare quelle progressive. Contribuiscono alla progressività anche gli <strong>oneri deducibili</strong> (spese che riducono la base imponibile, come i contributi INPS pagati personalmente) e gli <strong>oneri detraibili</strong> (spese che riducono l'imposta lorda: familiari a carico, lavoro dipendente, riqualificazione energetica), oltre alla no tax area che attua il minimo vitale."
        }
      ],
      giurisprudenza: [
        {
          label: "Corte costituzionale: il sistema catastale non è incostituzionale",
          body: "In tema di effettività, la Corte costituzionale non ha giudicato incostituzionale il sistema catastale (che tassa gli immobili su un reddito medio ordinario e non su quello effettivamente percepito): ha ritenuto che la capacità contributiva non sia rivelata soltanto dal reddito effettivo ma anche dal reddito medio ordinario. Sulla stessa linea, le presunzioni legali sono legittime se non costituiscono una base fittizia di imposizione e se ammettono la prova contraria del contribuente."
        }
      ],
      eccezioni: [
        {
          label: "La progressività riguarda il sistema, non ogni singolo tributo",
          body: "L'art. 53, co. 2 dice che il <em>sistema</em> tributario è informato a criteri di progressività: non ogni imposta deve essere progressiva. Esistono legittimamente imposte proporzionali (l'IVA applica la stessa percentuale a tutti i consumi); l'importante è che il sistema nel suo complesso sia progressivo, grazie soprattutto alle imposte sul reddito. Errore da evitare all'esame: sostenere che un'imposta proporzionale sia di per sé incostituzionale."
        },
        {
          label: "Il minimo vitale: la ricchezza che non si tocca",
          body: "Non tutto ciò che si possiede è tassabile: il minimo di mezzi economici che garantisce al singolo e alla sua famiglia il sostentamento e un'esistenza dignitosa non può essere oggetto di tributo (in pratica, la no tax area). Attenzione anche al limite opposto: il tributo non può mai superare la capacità contributiva dimostrata dal fatto economico. Tassare chi non ha nulla, o tassare oltre la ricchezza manifestata, viola l'art. 53."
        }
      ]
    },
    sintesi: [
      "Art. 53, co. 1: tutti concorrono alle spese pubbliche secondo capacità contributiva.",
      "«Tutti» = universalità: anche stranieri e apolidi che operano in Italia.",
      "Capacità contributiva = idoneità economica; indici diretti (reddito, patrimonio) e indiretti (consumi).",
      "Requisiti: effettività (ricchezza reale) e attualità (non troppo passata o futura).",
      "Minimo vitale: i mezzi per un'esistenza dignitosa non si tassano (no tax area).",
      "Co. 2: progressività del sistema, l'imposta cresce più che proporzionalmente."
    ],
    esempi: [
      {
        titolo: "Perché Maria paga una percentuale più alta di Luca",
        testo: "Luca guadagna 15.000 € l'anno come commesso; Maria, dirigente, ne guadagna 90.000. Con un'imposta <em>proporzionale</em> al 20%, Luca pagherebbe 3.000 € e Maria 18.000 €: di più in valore assoluto, ma la stessa percentuale. La <strong>progressività</strong> chiede di più: che al crescere del reddito cresca anche la percentuale. Così Luca, con aliquote più basse sui primi scaglioni, paga una quota modesta del suo reddito, mentre Maria, sui redditi più alti, subisce aliquote maggiori. In questo modo il sistema non solo raccoglie i soldi per le spese pubbliche (scuole, ospedali, strade), ma redistribuisce la ricchezza, in attuazione degli artt. 2 e 3 Cost. È anche il motivo per cui il costituente voleva limitare le tasse sui consumi: essendo proporzionali, pesano in percentuale allo stesso modo su Luca e su Maria, rischiando di rendere il sistema regressivo."
      },
      {
        titolo: "Il minimo vitale del signor Rossi",
        testo: "Il signor Rossi è un pensionato che vive con 7.000 € l'anno, appena sufficienti per affitto, bollette e spesa. Può il Fisco chiedergli l'imposta sul reddito come a chiunque altro? No: nel concetto di capacità contributiva è incluso il <strong>principio del minimo vitale</strong>, secondo cui non può essere oggetto di tributo quel minimo di mezzi economici che deve essere garantito al singolo e alla sua famiglia per il sostentamento e per un'esistenza dignitosa. In pratica è la no tax area: sotto una certa soglia di reddito non si paga l'imposta. La logica è semplice: chi ha appena ciò che serve per vivere non manifesta alcuna capacità contributiva, cioè nessuna idoneità economica a concorrere alle spese pubbliche; tassarlo significherebbe violare l'art. 53 Cost."
      }
    ],
    flashcards: [
      ["Cosa stabilisce l'art. 53, co. 1 Cost.?", "Tutti sono tenuti a concorrere alle spese pubbliche in ragione della loro capacità contributiva: si paga in base a quello che si ha."],
      ["Cos'è la capacità contributiva?", "L'idoneità economica del contribuente a corrispondere la prestazione coattiva imposta; è presupposto e parametro dell'imposizione."],
      ["Quali sono gli indici di capacità contributiva?", "Diretti: reddito e patrimonio. Indiretti: consumo, affari, trasferimento di un bene."],
      ["Cosa richiedono i requisiti di effettività e attualità?", "Effettività: ricchezza reale, non apparente o fittizia (presunzioni legittime solo con prova contraria). Attualità: capacità in atto, non troppo passata o futura."],
      ["Cos'è il minimo vitale?", "Il minimo di mezzi economici per il sostentamento e un'esistenza dignitosa del singolo e della famiglia: non è tassabile (no tax area)."],
      ["Cosa significa progressività del sistema tributario?", "L'imposta aumenta in modo più che proporzionale al crescere della base imponibile; riguarda il sistema nel complesso, non ogni singolo tributo."]
    ],
    comparativa: {
      titolo: "Imposta proporzionale vs imposta progressiva",
      a: "Proporzionale",
      b: "Progressiva",
      righe: [
        { profilo: "Aliquota", a: "Fissa: la stessa percentuale per tutti (es. imposte sui consumi)", b: "Crescente: la percentuale aumenta al crescere della base imponibile" },
        { profilo: "Effetto su chi ha di più", a: "Paga di più solo in valore assoluto", b: "Paga di più sia in valore assoluto sia in percentuale" },
        { profilo: "Funzione", a: "Solo contributiva (raccolta di gettito)", b: "Contributiva e redistributiva della ricchezza (artt. 2-3 Cost.)" },
        { profilo: "Ruolo nel sistema", a: "Ammessa, ma da limitare: rischia di rendere il sistema regressivo", b: "Da potenziare: attua l'art. 53, co. 2 Cost." }
      ]
    },
    quiz: [
      {
        q: "L'art. 53, co. 1 Cost. stabilisce che tutti concorrono alle spese pubbliche:",
        opts: ["In parti uguali tra i consociati", "In ragione della loro capacità contributiva", "In proporzione ai servizi pubblici utilizzati", "Solo se cittadini italiani residenti"],
        correct: 1,
        difficulty: 1,
        commonError: "Pensare al criterio del beneficio (pago per quello che uso): il criterio costituzionale è invece la ricchezza posseduta.",
        why: "Il concorso alle spese pubbliche è commisurato alla capacità contributiva, cioè all'idoneità economica del contribuente: si paga in base a quello che si ha, non in base ai servizi ricevuti né in parti uguali.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "Il «tutti» dell'art. 53 Cost. comprende:",
        opts: ["Solo i cittadini italiani, come nello Statuto Albertino", "Cittadini italiani e cittadini UE", "Anche stranieri e apolidi che operano nel territorio dello Stato", "Solo i soggetti residenti iscritti all'anagrafe"],
        correct: 2,
        difficulty: 2,
        commonError: "Ricordare la formula dello Statuto Albertino («tutti i regnicoli») e applicarla alla Costituzione: l'art. 53 ha invece portata universale.",
        why: "A differenza dell'art. 25 dello Statuto Albertino, riferito ai soli cittadini, l'art. 53 esprime il principio di universalità dell'imposta: sono tenuti al concorso anche stranieri e apolidi che operano nel territorio italiano, in attuazione dei doveri di solidarietà.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "Il requisito di effettività della capacità contributiva comporta che:",
        opts: ["Le presunzioni legali sono sempre vietate in materia tributaria", "Si può tassare anche una ricchezza futura purché probabile", "Ogni tributo deve colpire esclusivamente il reddito effettivo", "La ricchezza colpita non deve essere apparente o fittizia"],
        correct: 3,
        difficulty: 3,
        commonError: "Dedurre che le presunzioni siano vietate: sono legittime se non creano una base fittizia e ammettono prova contraria.",
        why: "L'effettività esige che la capacità colpita sia reale. Le presunzioni legali restano legittime se non costituiscono una base fittizia di imposizione e ammettono prova contraria; la Corte costituzionale ha ammesso anche la tassazione sul reddito medio ordinario (sistema catastale).",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "Un sistema tributario è progressivo quando:",
        opts: ["L'imposta cresce in modo più che proporzionale rispetto alla base imponibile", "Tutti pagano la stessa percentuale sul proprio reddito", "L'imposta cresce nello stesso rapporto della base imponibile", "L'imposta diminuisce al crescere della base imponibile"],
        correct: 0,
        difficulty: 2,
        commonError: "Confondere progressività e proporzionalità: nella proporzionale la percentuale è fissa, nella progressiva cresce.",
        why: "La progressività implica che al crescere della base imponibile l'imposta aumenti più che proporzionalmente: chi ha di più paga percentuali più alte. Così il sistema svolge anche una funzione redistributiva della ricchezza (artt. 2-3 Cost.).",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "Il principio del minimo vitale comporta che:",
        opts: ["Ogni contribuente ha diritto a un rimborso minimo annuale", "I mezzi economici minimi per un'esistenza dignitosa non sono tassabili", "Le imposte non possono superare la metà del reddito", "I redditi minimi sono tassati con aliquota agevolata"],
        correct: 1,
        difficulty: 2,
        commonError: "Pensare a un'aliquota ridotta: sotto la soglia del minimo vitale il tributo non si applica affatto (no tax area).",
        why: "Nel concetto di capacità contributiva è incluso il minimo vitale: il minimo di mezzi economici che garantisce al singolo e alla famiglia il sostentamento e un'esistenza dignitosa non può essere oggetto di tributo. È la logica della no tax area.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "Il requisito di attualità della capacità contributiva esclude:",
        opts: ["Le imposte sui redditi dell'anno in corso", "Il conguaglio di fine anno sui redditi di lavoro", "Tributi collegati a una capacità troppo retroattiva o pagamenti anticipati per tassazioni future", "Le imposte periodiche con versamenti rateali"],
        correct: 2,
        difficulty: 4,
        commonError: "Confondere gli acconti fisiologici e il conguaglio con la tassazione anticipata di ricchezza futura, che è invece vietata.",
        why: "L'attualità richiede la correlazione del tributo con una capacità contributiva in atto, non passata né futura: un tributo troppo retroattivo lede la certezza del diritto e non sono possibili anticipazioni per una tassazione futura. Il conguaglio, invece, aggiusta a fine anno una tassazione media già riferita all'anno in corso.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      },
      {
        q: "Le agevolazioni fiscali (norme di favore) non violano il principio di eguaglianza quando:",
        opts: ["Sono approvate a maggioranza qualificata", "Hanno durata non superiore a un anno", "Sono concesse a tutti i contribuenti indistintamente", "Perseguono scopi costituzionalmente riconosciuti, come famiglia, salute o cultura"],
        correct: 3,
        difficulty: 4,
        commonError: "Ritenere che ogni trattamento differenziato violi l'art. 3: l'eguaglianza impone di trattare diversamente situazioni diverse.",
        why: "Il legislatore non viola l'eguaglianza se concede agevolazioni per scopi costituzionalmente riconosciuti: cultura (art. 9), famiglia (art. 31), salute (art. 32), scuola (artt. 33-34), lavoro (art. 35). L'eguaglianza formale ammette trattamenti diversi per situazioni diverse.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 3"
      }
    ],
    veroFalso: [
      { aff: "Ogni singola imposta deve essere progressiva, altrimenti è incostituzionale.", vero: false, traccia: "Falso. L'art. 53, co. 2 riferisce la progressività al sistema tributario nel suo complesso, non a ogni tributo: imposte proporzionali (come quelle sui consumi) sono legittime, anche se il costituente intendeva limitarle per evitare effetti regressivi." },
      { aff: "Gli oneri deducibili riducono la base imponibile, mentre gli oneri detraibili riducono l'imposta lorda.", vero: true, traccia: "Vero. Le deduzioni (es. contributi INPS pagati personalmente) si sottraggono dal reddito complessivo prima del calcolo; le detrazioni (es. familiari a carico, lavoro dipendente, riqualificazione energetica) si sottraggono dall'imposta lorda già calcolata." },
      { aff: "Dagli anni '80 la capacità contributiva è intesa in senso oggettivo: rileva qualsiasi fatto che esprima forza economica in sé.", vero: true, traccia: "Vero. Fino agli anni '80 prevaleva il profilo soggettivo (idoneità della persona a sopportare l'obbligazione, basata su indici come il patrimonio); da allora si valorizza il profilo oggettivo: qualsiasi fatto espressivo di forza economica può fondare il prelievo." }
    ],
    aperta: {
      q: "Il candidato illustri il principio di capacità contributiva di cui all'art. 53 Cost., con riferimento ai requisiti di effettività e attualità, al minimo vitale e al principio di progressività.",
      traccia: "L'art. 53, co. 1 Cost. impone a tutti — cittadini, stranieri e apolidi operanti nel territorio — di concorrere alle spese pubbliche in ragione della capacità contributiva, espressione dei doveri di solidarietà ex art. 2. La capacità contributiva è l'idoneità economica del contribuente a corrispondere la prestazione coattiva imposta, rivelata da indici diretti (reddito, patrimonio) e indiretti (consumi, affari, trasferimenti); è insieme presupposto e parametro del prelievo. Deve essere effettiva — non apparente o fittizia: le presunzioni sono legittime solo con prova contraria, e la Corte costituzionale ha salvato il sistema catastale valorizzando il reddito medio ordinario — e attuale, cioè in atto, non troppo passata né futura, a tutela della certezza del diritto. Ne discende il minimo vitale: i mezzi minimi per un'esistenza dignitosa non sono tassabili, e il tributo non può eccedere la ricchezza manifestata. Il co. 2 informa il sistema a criteri di progressività: l'imposta cresce più che proporzionalmente alla base imponibile, realizzando, accanto alla funzione contributiva, la redistribuzione della ricchezza in coerenza con l'eguaglianza sostanziale dell'art. 3.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 3"
    },
    consigliate: ["mappa", "esempi", "flashcards", "mcq", "aperta"],
    media: {
      podcast: {
        title: "Capacità contributiva e progressività",
        chapters: [["L'art. 53 e l'universalità", 0], ["Indici, effettività, attualità", 230], ["Minimo vitale e interesse fiscale", 470], ["La progressività del sistema", 660]]
      },
      mappa: true
    }
  },
  {
    id: "fonti",
    part: "generale",
    chapter: 2,
    chapterTitle: "Principi costituzionali e fonti",
    title: "Le fonti del diritto tributario",
    subtitle: "Costituzione, leggi e atti con forza di legge, regolamenti, art. 117, fonti UE; le circolari non sono fonti",
    articoli: ["art. 23 Cost.", "art. 76-77 Cost.", "art. 117 Cost.", "art. 11 Cost.", "L. 212/2000 (Statuto del contribuente)"],
    pages: [11, 12],
    depth: "std",
    layers: {
      essenziale:
        "Le <strong>fonti</strong> sono i «rubinetti» da cui escono le norme tributarie. Si distinguono le <strong>fonti di produzione</strong> (gli atti che creano le norme, ordinati in gerarchia) dalle <strong>fonti di cognizione</strong> (gli strumenti che le fanno conoscere, come la Gazzetta Ufficiale). In cima c'è la <strong>Costituzione</strong>, che contiene i principi che regolano e limitano il potere di tassare: riserva di legge (art. 23), divieto di referendum abrogativo, federalismo fiscale. Subito sotto stanno la <strong>legge formale</strong> del Parlamento — che dà piena attuazione alla riserva di legge — e gli <strong>atti aventi forza di legge</strong>: il decreto legislativo (art. 76: il Parlamento delega il Governo con principi, criteri direttivi, tempo limitato e oggetti definiti) e il decreto legge (art. 77: casi straordinari di necessità e urgenza, conversione entro 60 giorni pena la perdita di efficacia fin dall'inizio). Sono in pratica le fonti più usate in materia tributaria. Una legge speciale, lo <strong>Statuto dei diritti del contribuente</strong> (L. 212/2000), è legge ordinaria ma le sue norme si possono derogare solo espressamente e mai con leggi speciali: sono criteri-guida per l'interprete. Più in basso ci sono i <strong>regolamenti</strong> (fonti secondarie), che non possono contraddire la legge e servono solo ad attuarla. L'<strong>art. 117 Cost.</strong> ripartisce la potestà tra Stato e Regioni; le <strong>fonti UE</strong> (regolamenti e direttive) entrano grazie all'art. 11 Cost. Attenzione: le <strong>circolari e risoluzioni dell'Agenzia delle Entrate NON sono fonti del diritto</strong> — sono solo interpretazioni interne dell'amministrazione, che non vincolano né i giudici né i contribuenti.",
      approfondimenti: [
        {
          label: "Decreto legislativo e decreto legge: le fonti più usate (e abusate)",
          body: "Il decreto legislativo (art. 76 Cost.) nasce da una legge delega del Parlamento che fissa principi e criteri direttivi, tempo limitato e oggetti definiti: è lo strumento più utilizzato, anche per i testi unici (raccolta in un unico testo della normativa su un tributo). Il decreto legge (art. 77 Cost.) è adottato dal Governo in casi straordinari di necessità e urgenza, presentato alle Camere il giorno stesso e decade fin dall'inizio se non convertito entro 60 giorni. In campo tributario se ne è abusato per la rapida acquisizione di entrate; per questo l'art. 4 dello Statuto del contribuente vieta di usare il decreto legge per istituire nuovi tributi o estenderli a nuovi soggetti."
        },
        {
          label: "I regolamenti: tipi e limiti",
          body: "I regolamenti sono fonti secondarie, subordinate alla legge, giustificate dall'esigenza di attuare il comando legislativo con regole generali e astratte; non possono contenere norme contrarie alla legge. Tipologie: <strong>esecutivi</strong> (prescrizioni di dettaglio), <strong>attuativi o integrativi</strong> (completano la disciplina), <strong>delegati</strong> (disciplinano direttamente una materia su delega di norma primaria: delegificazione), <strong>ministeriali</strong> e <strong>interministeriali</strong>. Non sono ammessi i regolamenti autonomi e indipendenti, perché contrari alla riserva di legge. Gli enti locali esercitano potestà regolamentare sugli aspetti attuativi (accertamento, riscossione, agevolazioni): è il federalismo fiscale."
        },
        {
          label: "Art. 117: chi fa le leggi tributarie tra Stato e Regioni",
          body: "Dopo la riforma del Titolo V, l'art. 117 limita la potestà legislativa statale alle materie elencate al co. 2, prevede al co. 3 le materie di competenza concorrente (lo Stato fissa i principi generali, le Regioni legiferano rispettandoli) e al co. 4 la potestà residuale regionale sulle materie innominate. In materia tributaria: allo Stato spetta in via esclusiva il sistema tributario statale e i principi fondamentali del sistema complessivo; alle Regioni la potestà concorrente sul coordinamento della finanza pubblica e quella esclusiva/residuale sui tributi regionali e locali, nei limiti dei principi statali di coordinamento (art. 119). Gli enti territoriali stabiliscono tributi ed entrate propri e ricevono compartecipazioni al gettito erariale; è previsto un fondo perequativo per i territori con minore capacità fiscale."
        },
        {
          label: "Le fonti europee e internazionali",
          body: "Le norme UE si applicano in Italia grazie all'art. 11 Cost., che consente le limitazioni di sovranità necessarie a un ordinamento che assicuri pace e giustizia fra le Nazioni. Si distinguono <strong>fonti primarie</strong> (i Trattati: TUE e TFUE) e <strong>fonti secondarie</strong> (regolamenti, direttive, decisioni, raccomandazioni e pareri). Completano il quadro le <strong>convenzioni internazionali</strong>, con cui gli Stati coordinano le rispettive normative fiscali per evitare che lo stesso presupposto sia tassato simultaneamente in più territori (doppia imposizione), e — in posizione marginale — gli usi e consuetudini."
        }
      ],
      giurisprudenza: [
        {
          label: "Prassi: la tutela di chi si fida delle circolari (art. 10 Statuto)",
          body: "Anche se le circolari non sono fonti, il contribuente che si fida non resta scoperto: l'art. 10, co. 2 della L. 212/2000 stabilisce che non sono irrogate sanzioni né richiesti interessi moratori al contribuente che si sia conformato a indicazioni contenute in atti dell'amministrazione finanziaria, ancorché successivamente modificate, o il cui comportamento derivi da ritardi, omissioni od errori dell'amministrazione stessa. Il tributo però resta dovuto: la circolare non può cambiare la legge."
        }
      ],
      eccezioni: [
        {
          label: "Errore da evitare: trattare la circolare come una legge",
          body: "Le circolari dell'amministrazione finanziaria non sono annoverabili tra le fonti del diritto, nemmeno di rango secondario: forniscono chiarimenti interpretativi (circolari interpretative), non vincolano giudici né contribuenti e non sono nemmeno atti autonomamente impugnabili. Se una circolare dice una cosa e la legge un'altra, vince sempre la legge. L'unico effetto protettivo è quello dell'art. 10 Statuto: niente sanzioni né interessi per chi vi si è conformato."
        },
        {
          label: "Lo Statuto del contribuente: legge ordinaria «rafforzata» solo in parte",
          body: "Lo Statuto (L. 212/2000) si autoqualifica attuativo degli artt. 3, 23, 53 e 97 Cost. e portatore di principi generali dell'ordinamento tributario, ma resta una legge ordinaria: una legge successiva può modificarlo o abrogarlo. Il vincolo è di metodo: le deroghe devono essere espresse e mai contenute in leggi speciali. Le sue norme valgono come criteri-guida vincolanti per l'interprete, non come norme di rango costituzionale."
        }
      ]
    },
    sintesi: [
      "Fonti di produzione (creano norme, in gerarchia) vs fonti di cognizione (Gazzetta Ufficiale).",
      "Costituzione al vertice: art. 23, divieto di referendum, federalismo fiscale.",
      "Decreto legislativo (art. 76) e decreto legge (art. 77): le fonti più usate.",
      "Statuto del contribuente: legge ordinaria, derogabile solo espressamente, mai da leggi speciali.",
      "Regolamenti: fonti secondarie, mai contrari alla legge; vietati quelli indipendenti.",
      "Circolari e risoluzioni dell'Agenzia delle Entrate NON sono fonti del diritto."
    ],
    esempi: [
      {
        titolo: "La circolare che non salva dall'imposta (ma dalle sanzioni sì)",
        testo: "Paolo, piccolo imprenditore, legge una circolare dell'Agenzia delle Entrate secondo cui una certa spesa è interamente deducibile, e compila così la dichiarazione. Due anni dopo l'Agenzia cambia idea con una nuova circolare e gli contesta la deduzione. Che succede? La circolare non è una fonte del diritto: conta solo ciò che dice la legge, quindi se la legge non consentiva quella deduzione Paolo dovrà versare la maggiore imposta. Però l'art. 10, co. 2 dello Statuto del contribuente lo protegge sul resto: siccome si è conformato alle indicazioni dell'amministrazione, poi modificate, <strong>non gli si possono irrogare sanzioni né chiedere interessi di mora</strong>. La sua buona fede è tutelata, ma la circolare non può trasformarsi in legge."
      },
      {
        titolo: "Il decreto legge che non può inventare tributi",
        testo: "Il Governo, per far cassa rapidamente dopo un'emergenza, vorrebbe istituire con decreto legge una nuova imposta a carico dei titolari di partita IVA come l'avv. Ferri. In astratto il decreto legge (art. 77 Cost.) ha la stessa forza della legge e quindi potrebbe soddisfare la riserva dell'art. 23; in campo tributario, però, si è storicamente abusato di questo strumento per la rapida acquisizione di entrate. Per questo l'<strong>art. 4 dello Statuto dei diritti del contribuente</strong> vieta espressamente l'uso del decreto legge per istituire nuovi tributi o per estendere tributi esistenti a nuove categorie di soggetti. Il Governo dovrà quindi passare dal Parlamento con una legge ordinaria, oppure farsi delegare con legge delega e adottare un decreto legislativo."
      }
    ],
    flashcards: [
      ["Differenza tra fonti di produzione e fonti di cognizione?", "Le prime creano le norme e sono ordinate gerarchicamente; le seconde le rendono conoscibili (es. Gazzetta Ufficiale)."],
      ["Quali sono gli atti aventi forza di legge?", "Decreto legislativo (art. 76 Cost., su legge delega con principi e criteri direttivi) e decreto legge (art. 77 Cost., necessità e urgenza, conversione entro 60 giorni)."],
      ["Le circolari dell'Agenzia delle Entrate sono fonti del diritto?", "No, nemmeno di rango secondario: sono chiarimenti interpretativi interni, non vincolano giudici né contribuenti e non sono autonomamente impugnabili."],
      ["Cosa prevede l'art. 117 Cost. in materia tributaria?", "Stato: potestà esclusiva sul sistema tributario statale e sui principi fondamentali; Regioni: potestà concorrente sul coordinamento e residuale sui tributi regionali/locali nei principi statali."],
      ["Che natura ha lo Statuto dei diritti del contribuente?", "Legge ordinaria (L. 212/2000), derogabile solo espressamente e mai da leggi speciali; le sue norme sono criteri-guida vincolanti per l'interprete."],
      ["Quali sono le fonti UE rilevanti?", "Primarie: i Trattati (TUE e TFUE). Secondarie: regolamenti, direttive, decisioni, raccomandazioni e pareri; si applicano in forza dell'art. 11 Cost."]
    ],
    comparativa: {
      titolo: "Circolare vs legge",
      a: "Circolare dell'Agenzia delle Entrate",
      b: "Legge (e atti con forza di legge)",
      righe: [
        { profilo: "Natura", a: "Atto interno dell'amministrazione: NON è fonte del diritto", b: "Fonte primaria del diritto, attua la riserva dell'art. 23 Cost." },
        { profilo: "Chi vincola", a: "Solo gli uffici sottordinati (efficacia interna); non giudici né contribuenti", b: "Tutti: contribuenti, amministrazione e giudici" },
        { profilo: "Può creare un tributo?", a: "Mai: può solo interpretare norme esistenti", b: "Sì: individua soggetti, presupposto, base imponibile, aliquote, sanzioni" },
        { profilo: "Tutela di chi la segue", a: "Niente sanzioni né interessi se poi cambia (art. 10, co. 2 Statuto), ma l'imposta resta dovuta", b: "Piena: la condotta conforme alla legge è legittima" }
      ]
    },
    quiz: [
      {
        q: "Le circolari dell'amministrazione finanziaria:",
        opts: ["Sono fonti secondarie del diritto tributario", "Vincolano i giudici tributari ma non i contribuenti", "Non sono fonti del diritto e non vincolano giudici né contribuenti", "Sono fonti primarie se emanate dal direttore dell'Agenzia"],
        correct: 2,
        difficulty: 1,
        commonError: "Assimilarle ai regolamenti perché provengono dalla pubblica amministrazione: hanno invece efficacia solo interna.",
        why: "Le circolari non sono annoverabili tra le fonti, nemmeno di rango secondario: forniscono chiarimenti interpretativi con efficacia interna verso gli uffici sottordinati e non vincolano giudici, contribuenti né la stessa autorità che le ha adottate.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 4"
      },
      {
        q: "Il contribuente che si è conformato a una circolare poi modificata dall'amministrazione:",
        opts: ["Non deve nulla, nemmeno l'imposta", "Non subisce sanzioni né interessi moratori, ma l'imposta resta dovuta", "Deve pagare imposta, sanzioni e interessi", "Può impugnare la circolare davanti al giudice tributario"],
        correct: 1,
        difficulty: 3,
        commonError: "Estendere la tutela anche al tributo: l'art. 10 Statuto copre solo sanzioni e interessi, perché la circolare non può derogare alla legge.",
        why: "L'art. 10, co. 2 della L. 212/2000 esclude sanzioni e interessi moratori per chi si sia conformato a indicazioni dell'amministrazione poi modificate. Il tributo dovuto per legge resta però esigibile, e la circolare non è autonomamente impugnabile.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 4"
      },
      {
        q: "Ai sensi dell'art. 77 Cost., il decreto legge perde efficacia fin dall'inizio se non è convertito in legge entro:",
        opts: ["30 giorni dalla pubblicazione", "90 giorni dalla pubblicazione", "5 giorni dalla presentazione alle Camere", "60 giorni dalla pubblicazione"],
        correct: 3,
        difficulty: 2,
        commonError: "Confondere il termine di conversione (60 giorni) con quello di presentazione alle Camere (il giorno stesso, riunione entro 5 giorni).",
        why: "Il Governo adotta il decreto legge in casi straordinari di necessità e urgenza e deve presentarlo il giorno stesso alle Camere per la conversione; se la conversione non avviene entro 60 giorni dalla pubblicazione, il decreto perde efficacia sin dall'inizio.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 4"
      },
      {
        q: "Secondo l'art. 4 dello Statuto dei diritti del contribuente, il decreto legge non può essere utilizzato per:",
        opts: ["Istituire nuovi tributi o estendere tributi esistenti a nuovi soggetti", "Modificare le aliquote dei tributi esistenti", "Disciplinare l'accertamento e la riscossione", "Recepire le direttive europee in materia fiscale"],
        correct: 0,
        difficulty: 3,
        commonError: "Pensare che il divieto copra ogni intervento tributario d'urgenza: riguarda solo l'istituzione di nuovi tributi e l'estensione a nuovi soggetti.",
        why: "Per reagire agli abusi del decreto legge in campo tributario, l'art. 4 dello Statuto vieta di usarlo per l'istituzione di nuovi tributi o per l'estensione di tributi esistenti a nuove categorie di soggetti.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 4"
      },
      {
        q: "In base all'art. 117 Cost., in materia tributaria alle Regioni spetta:",
        opts: ["La potestà esclusiva sull'intero sistema tributario", "Potestà concorrente sul coordinamento e potestà residuale sui tributi regionali e locali, nei principi statali", "Solo la potestà regolamentare di attuazione dei tributi statali", "La fissazione dei principi fondamentali del sistema tributario complessivo"],
        correct: 1,
        difficulty: 4,
        commonError: "Attribuire alle Regioni i principi fondamentali del sistema complessivo, che spettano invece in via esclusiva allo Stato.",
        why: "Dopo la riforma del Titolo V, allo Stato spettano in via esclusiva il sistema tributario statale e i principi fondamentali del sistema complessivo; alle Regioni la potestà concorrente sul coordinamento della finanza pubblica e quella esclusiva o residuale sui tributi regionali e locali, nell'ambito dei principi statali di coordinamento (art. 119).",
        fonte: "Loconte, Manuale di diritto tributario — cap. 4"
      },
      {
        q: "Quali regolamenti NON sono ammessi in materia tributaria?",
        opts: ["I regolamenti esecutivi", "I regolamenti delegati", "I regolamenti autonomi e indipendenti", "I regolamenti interministeriali"],
        correct: 2,
        difficulty: 4,
        commonError: "Escludere i regolamenti delegati pensando alla riserva di legge: la delegificazione è ammessa perché fondata su una delega di norma primaria.",
        why: "I regolamenti autonomi e indipendenti disciplinerebbero una materia senza base legislativa, in contrasto con la riserva di legge dell'art. 23 Cost. Sono invece ammessi regolamenti esecutivi, attuativi o integrativi, delegati, ministeriali e interministeriali.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 4"
      }
    ],
    veroFalso: [
      { aff: "Lo Statuto dei diritti del contribuente ha rango costituzionale e non può essere modificato da leggi ordinarie.", vero: false, traccia: "Falso. Lo Statuto (L. 212/2000) resta una legge ordinaria, modificabile e abrogabile da leggi successive; il vincolo è che le deroghe siano espresse e mai contenute in leggi speciali. Le sue norme operano come criteri-guida vincolanti per l'interprete." },
      { aff: "Le fonti secondarie dell'ordinamento europeo comprendono regolamenti, direttive, decisioni, raccomandazioni e pareri.", vero: true, traccia: "Vero. Le fonti primarie UE sono i Trattati (TUE e TFUE); quelle secondarie sono regolamenti, direttive, decisioni, raccomandazioni e pareri. La loro applicabilità in Italia si fonda sulle limitazioni di sovranità consentite dall'art. 11 Cost." },
      { aff: "Gli enti locali possono esercitare potestà regolamentare sugli aspetti attuativi dei tributi, come accertamento, riscossione e agevolazioni.", vero: true, traccia: "Vero. È un profilo del federalismo fiscale: gli enti locali intervengono con la potestà regolamentare sugli aspetti attuativi (accertamento, riscossione, agevolazioni), così da rendere più immediato il riscontro del contribuente sull'impiego delle entrate per i bisogni locali." }
    ],
    aperta: {
      q: "Il candidato illustri il sistema delle fonti del diritto tributario, chiarendo in particolare il ruolo degli atti aventi forza di legge e il valore delle circolari dell'amministrazione finanziaria.",
      traccia: "Le fonti di produzione, ordinate gerarchicamente, si distinguono da quelle di cognizione (es. Gazzetta Ufficiale). Al vertice sta la Costituzione, con i principi che limitano la potestà impositiva: riserva di legge ex art. 23, divieto di referendum abrogativo, federalismo fiscale. Seguono la legge formale, che attua pienamente la riserva, e gli atti aventi forza di legge: il decreto legislativo ex art. 76 (su legge delega con principi e criteri direttivi, tempo limitato e oggetti definiti) e il decreto legge ex art. 77 (necessità e urgenza, conversione entro 60 giorni), le fonti più utilizzate in materia; l'art. 4 dello Statuto del contribuente vieta però il decreto legge per istituire nuovi tributi o estenderli a nuovi soggetti. Lo Statuto resta legge ordinaria derogabile solo espressamente, mai da leggi speciali. Le fonti secondarie sono i regolamenti (esecutivi, attuativi, delegati, ministeriali, interministeriali; vietati quelli indipendenti), subordinati alla legge. L'art. 117 ripartisce la potestà tra Stato e Regioni; le fonti UE operano tramite l'art. 11 Cost. Le circolari, infine, non sono fonti: hanno efficacia meramente interna, non vincolano giudici né contribuenti, salva la tutela dell'art. 10 Statuto (niente sanzioni né interessi per chi vi si conforma).",
      fonte: "Loconte, Manuale di diritto tributario — cap. 4"
    },
    consigliate: ["mappa", "comparativa", "flashcards", "mcq"],
    media: {
      podcast: {
        title: "Le fonti del diritto tributario",
        chapters: [["Costituzione e Statuto del contribuente", 0], ["Legge, decreto legislativo, decreto legge", 220], ["Regolamenti e art. 117", 450], ["Fonti UE e circolari", 640]]
      },
      mappa: true
    }
  },
  {
    id: "interpretazione",
    part: "generale",
    chapter: 2,
    chapterTitle: "Principi costituzionali e fonti",
    title: "L'interpretazione della norma tributaria",
    subtitle: "Tipi di interpretazione, valore delle circolari, limiti dell'analogia, interpretazione antielusiva",
    articoli: ["art. 12 preleggi", "art. 10-bis L. 212/2000", "art. 11 L. 212/2000"],
    pages: [13, 15],
    depth: "std",
    layers: {
      essenziale:
        "<strong>Interpretare</strong> una legge tributaria significa capire cosa vuole dire davvero, per applicarla al caso concreto. Sembra banale, ma nel diritto tributario è difficile: la legislazione non è sistematica, è <em>polisistematica</em> (le regole di una materia stanno sparse in molte leggi) e soffre di <em>iperlegificazione</em> (norme cambiate di continuo, si pensi alle tante accise sulla benzina introdotte per coprire spese eccezionali). Come si interpreta? Si parte dall'<strong>interpretazione letterale</strong>: il senso «fatto palese dal significato proprio delle parole secondo la connessione di esse» (art. 12 preleggi). Se non basta, si passa all'<strong>interpretazione logico-sistematica</strong>, che cerca l'intenzione del legislatore: la <em>mens legis</em> (volontà concreta, dai lavori parlamentari) e la <em>ratio legis</em> (volontà astratta: quale fatto economico il tributo vuole colpire). Qui rientra l'<strong>interpretazione antielusiva</strong>: leggere la norma fiscale secondo la sua ratio per smascherare le operazioni «prive di sostanza economica che, pur nel rispetto formale delle norme fiscali, realizzano essenzialmente vantaggi fiscali indebiti» (art. 10-bis dello Statuto). Esistono poi l'interpretazione <strong>autentica</strong> (il legislatore stesso chiarisce con una nuova legge quale significato vale), <strong>adeguatrice</strong> (conforme a Costituzione e Statuto: per la Corte costituzionale è un dovere del giudice), <strong>dichiarativa</strong>, <strong>restrittiva</strong> ed <strong>estensiva</strong>. Le <strong>circolari</strong> interpretano ma non vincolano nessuno fuori dall'amministrazione. Infine l'<strong>analogia</strong> (applicare a un caso non regolato la norma di un caso simile): è esclusa per le norme impositrici, per quelle sul presupposto e per le sanzionatorie; è ammessa solo per le norme procedurali su accertamento e riscossione.",
      approfondimenti: [
        {
          label: "L'interpretazione autentica: quando il legislatore spiega sé stesso",
          body: "Quando una norma genera incertezza, il legislatore può emanare una legge interpretativa che, tra i possibili significati, ne sceglie uno e gli attribuisce efficacia vincolante. Queste leggi rappresentano un'eccezione al divieto di retroattività della legge tributaria: valgono anche per il passato, ma a una condizione precisa: non devono attribuire alla norma un significato innovativo, diverso da quello originario; devono limitarsi a chiarificarla. Se sotto l'etichetta «interpretativa» si nasconde una norma nuova retroattiva, si esce dal perimetro dell'interpretazione autentica."
        },
        {
          label: "Circolari, risoluzioni e interpello: chi vincolano davvero",
          body: "Le <strong>circolari</strong> sono direttive interne: vincolano solo gli uffici sottordinati per il rapporto gerarchico, non i giudici, non i contribuenti, nemmeno l'autorità che le ha adottate; il mutamento di indirizzo vale solo per il futuro e chi si era conformato non subisce sanzioni né interessi. Le <strong>note e risoluzioni</strong> rispondono a casi specifici e vincolano solo l'ufficio periferico destinatario. L'<strong>interpello</strong> (art. 11 Statuto) permette al contribuente, in caso di obiettiva incertezza, di chiedere preventivamente al Fisco come interpretare la norma: la risposta vincola solo l'amministrazione e limitatamente al richiedente, mentre il contribuente resta libero di non uniformarsi."
        },
        {
          label: "I termini presi da altri rami del diritto",
          body: "Se la norma tributaria usa un concetto di un altro ramo (es. «azienda» dal diritto commerciale), che significato ha? Né la tesi dell'identità di significato (unitarietà dell'ordinamento) né quella della peculiarità tributaria valgono in assoluto: talvolta il legislatore precisa direttamente un significato diverso (ai fini IVA, l'art. 2, co. 5 del D.P.R. 633/1972 considera «cessione» anche la destinazione del bene al consumo personale dell'imprenditore), talvolta il significato coincide, talvolta l'analisi sistematica lo esclude. Approccio corretto: partire dal significato del ramo di provenienza e verificarne la compatibilità sistematica con le norme del tributo; se incompatibile, prevale il significato sistematico."
        },
        {
          label: "L'interpretazione antielusiva e l'abuso del diritto",
          body: "Nell'interpretazione logico-sistematica rientra la lettura antielusiva: cercare la ratio della norma fiscale per impedirne l'aggiramento. Secondo l'art. 10-bis dello Statuto, l'elusione (abuso del diritto) è costituita da «operazioni prive di sostanza economica che, pur nel rispetto formale delle norme fiscali, realizzano essenzialmente vantaggi fiscali indebiti». In pratica: rispetto la lettera della legge ma ne tradisco lo scopo solo per pagare meno tasse. Il contribuente che ha dubbi su una propria operazione può attivare l'interpello antiabuso, chiedendo preventivamente al Fisco se l'operazione configuri abuso del diritto."
        }
      ],
      giurisprudenza: [
        {
          label: "Corte costituzionale: l'interpretazione adeguatrice è un dovere",
          body: "L'interpretazione adeguatrice (o conforme) verifica se la norma sul caso specifico sia conforme ai precetti costituzionali e ai principi della materia, esplicitati per il diritto tributario dallo Statuto dei diritti del contribuente. La Corte costituzionale ha statuito che per il giudice questa interpretazione non è una facoltà bensì un <strong>dovere</strong>: prima di sollevare questione di legittimità, il giudice deve tentare la lettura della norma compatibile con la Costituzione."
        },
        {
          label: "Il giudice non è vincolato al precedente",
          body: "Tra i soggetti interpreti (legislatore, contribuenti e consulenti, agenzie fiscali, Guardia di finanza) c'è anzitutto la magistratura: quando il rapporto tributario arriva davanti al giudice, spetta a lui applicare il diritto alla controversia. Il giudice nazionale, nell'interpretare la legge, non è vincolato alle soluzioni espresse in precedenza dalla giurisprudenza per fattispecie analoghe: resta libero di decidere in maniera autonoma e indipendente."
        }
      ],
      eccezioni: [
        {
          label: "Analogia: dove è vietata (e perché)",
          body: "L'analogia colma le lacune applicando norme dettate per casi simili (analogia legis) o principi generali (analogia iuris, compresi quelli dello Statuto). In materia tributaria è esclusa per: <strong>norme sanzionatorie</strong> (come nel penale), <strong>disposizioni sul presupposto dell'imposizione</strong> e <strong>norme impositrici</strong>, che non possono configurare lacune in senso tecnico: se la legge non prevede il tributo su un fatto, quel fatto non è tassabile, punto. È invece ammessa per le norme tecniche, cioè procedurali, in tema di accertamento e riscossione."
        },
        {
          label: "Errore da evitare: confondere interpretazione estensiva e analogia",
          body: "L'interpretazione estensiva resta dentro la norma: si riconosce che le parole usate dal legislatore dicono meno del suo effettivo pensiero e si estende il significato fino a coprirlo. L'analogia va oltre la norma: applica a un caso non regolato la disciplina di un caso simile. La distinzione è decisiva perché per le norme impositrici l'estensiva è possibile, l'analogia no: confonderle porta a tassare (o sanzionare) fatti che la legge non prevede."
        }
      ]
    },
    sintesi: [
      "Interpretare = individuare il significato della disposizione per applicarla al caso concreto.",
      "Si parte dalla lettera (art. 12 preleggi), poi logico-sistematica (mens e ratio legis).",
      "Interpretazione autentica: legge chiarificatrice, retroattiva ma mai innovativa.",
      "Adeguatrice: conformità a Costituzione e Statuto; per il giudice è un dovere.",
      "Antielusiva: ratio della norma contro operazioni senza sostanza economica (art. 10-bis).",
      "Analogia vietata per norme impositrici, sul presupposto e sanzionatorie; ok per quelle procedurali."
    ],
    esempi: [
      {
        titolo: "L'operazione «formalmente perfetta» del dott. Verdi",
        testo: "Il dott. Verdi vuole vendere un capannone alla società Alfa, ma la vendita diretta sconterebbe una tassazione piena. Su consiglio di un conoscente, costruisce un giro di tre operazioni societarie — conferimenti e cessioni di quote — che, una per una, rispettano alla lettera le norme fiscali, ma non hanno alcuna logica economica: servono solo ad arrivare allo stesso risultato pagando molte meno imposte. È il caso tipico dell'<strong>elusione</strong> (abuso del diritto): secondo l'art. 10-bis dello Statuto, sono operazioni «prive di sostanza economica che, pur nel rispetto formale delle norme fiscali, realizzano essenzialmente vantaggi fiscali indebiti». Il Fisco, con l'interpretazione antielusiva, guarda alla ratio delle norme e può disconoscere il vantaggio. Se il dott. Verdi avesse avuto dubbi, avrebbe potuto presentare prima un interpello antiabuso e chiedere al Fisco se l'operazione fosse abusiva."
      },
      {
        titolo: "Anna e il caso non previsto dalla legge",
        testo: "Anna, funzionaria del Fisco, si accorge che una legge d'imposta tassa il trasferimento di certi beni ma non menziona un bene nuovo, molto simile, comparso sul mercato. Può applicare il tributo «per analogia», visto che i casi si somigliano? No: per le <strong>norme impositrici</strong> e per le disposizioni che disciplinano il presupposto dell'imposizione l'analogia è esclusa — quelle norme non possono configurare lacune in senso tecnico: se la legge non prevede il tributo su quel fatto, quel fatto non è tassabile. Diverso sarebbe se la lacuna riguardasse una regola procedurale, ad esempio una modalità di notifica nell'accertamento o nella riscossione: per le norme tecniche di carattere procedurale l'analogia è ammessa. La collega di Anna, la dott.ssa Neri, le ricorda anche il confine: se il testo della norma, ben letto, già copre il bene nuovo, non è analogia ma interpretazione estensiva, che invece è consentita."
      }
    ],
    flashcards: [
      ["Da dove parte l'interpretazione della norma tributaria?", "Dal criterio letterale ex art. 12 preleggi: il senso fatto palese dal significato proprio delle parole secondo la loro connessione; se insufficiente, si passa alla logico-sistematica."],
      ["Cos'è l'interpretazione autentica?", "Una legge con cui il legislatore sceglie, tra i significati possibili, quello vincolante: è retroattiva ma non può essere innovativa, deve solo chiarificare."],
      ["Che differenza c'è tra mens legis e ratio legis?", "Mens legis: volontà del legislatore concreto (lavori parlamentari). Ratio legis: volontà astratta, cioè il fatto economico che il tributo mira a colpire."],
      ["Le risposte a interpello vincolano il contribuente?", "No: vincolano solo l'amministrazione e limitatamente al richiedente; il contribuente può disattendere la risposta e non uniformarsi."],
      ["Quando è ammessa l'analogia in materia tributaria?", "Solo per le norme tecniche/procedurali (accertamento e riscossione); è esclusa per norme impositrici, sul presupposto e sanzionatorie."],
      ["Cos'è l'elusione secondo l'art. 10-bis dello Statuto?", "Operazioni prive di sostanza economica che, pur nel rispetto formale delle norme fiscali, realizzano essenzialmente vantaggi fiscali indebiti."]
    ],
    comparativa: {
      titolo: "Interpretazione estensiva vs analogia",
      a: "Interpretazione estensiva",
      b: "Analogia",
      righe: [
        { profilo: "Cosa fa", a: "Allarga il significato delle parole fino al reale pensiero del legislatore", b: "Applica a un caso non regolato la norma di un caso simile o i principi generali" },
        { profilo: "Resta dentro la norma?", a: "Sì: il caso è comunque coperto dalla disposizione, ben intesa", b: "No: il caso è fuori dalla disposizione, c'è una lacuna da colmare" },
        { profilo: "Norme impositrici", a: "Ammessa", b: "Esclusa: le norme impositrici non configurano lacune in senso tecnico" },
        { profilo: "Norme procedurali (accertamento, riscossione)", a: "Ammessa", b: "Ammessa (norme tecniche)" }
      ]
    },
    quiz: [
      {
        q: "Secondo l'art. 12 delle preleggi, l'interpretazione della norma parte dal senso:",
        opts: ["Voluto dalla giurisprudenza prevalente", "Indicato dalle circolari dell'amministrazione", "Fatto palese dal significato proprio delle parole secondo la loro connessione", "Più favorevole al contribuente"],
        correct: 2,
        difficulty: 1,
        commonError: "Partire dalla prassi amministrativa o dal favor per una parte: il primo criterio legale è quello letterale.",
        why: "Il criterio letterale ex art. 12 preleggi impone di attribuire alla legge il senso fatto palese dal significato proprio delle parole secondo la connessione di esse; solo se insufficiente si ricorre all'interpretazione logico-sistematica.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 5"
      },
      {
        q: "Le leggi di interpretazione autentica in materia tributaria:",
        opts: ["Sono vietate perché retroattive", "Possono chiarire la norma con effetto retroattivo, ma senza attribuirle un significato innovativo", "Possono introdurre retroattivamente anche una disciplina nuova", "Vincolano solo l'amministrazione finanziaria"],
        correct: 1,
        difficulty: 3,
        commonError: "Pensare che, essendo «leggi», possano fare qualsiasi cosa retroattivamente: se innovano non sono più interpretative.",
        why: "L'interpretazione autentica è un'eccezione al divieto di retroattività: il legislatore sceglie tra i significati possibili quello vincolante. Il limite è che la legge non attribuisca alla norma un significato innovativo, ma si limiti a chiarificarla.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 5"
      },
      {
        q: "Le circolari interpretative dell'amministrazione finanziaria producono effetti vincolanti:",
        opts: ["Verso i contribuenti che ne hanno avuto conoscenza", "Verso i giudici tributari di merito", "Verso la stessa autorità che le ha adottate", "Solo verso gli uffici sottordinati, in virtù del rapporto gerarchico"],
        correct: 3,
        difficulty: 2,
        commonError: "Attribuire alle circolari efficacia esterna: hanno invece mera efficacia interna all'amministrazione.",
        why: "Le circolari sono direttive interne che vincolano i soli uffici sottordinati per il rapporto gerarchico; non vincolano giudici, contribuenti e neppure l'autorità che le ha emanate. Chi vi si conforma è però protetto da sanzioni e interessi in caso di mutamento di indirizzo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 5"
      },
      {
        q: "L'analogia in materia tributaria è ammessa per:",
        opts: ["Le norme tecniche di carattere procedurale su accertamento e riscossione", "Le norme che individuano il presupposto dell'imposta", "Le norme sanzionatorie tributarie", "Le norme impositrici, se il caso è molto simile"],
        correct: 0,
        difficulty: 3,
        commonError: "Ammettere l'analogia per il presupposto quando i casi «si somigliano»: le norme impositrici non configurano lacune in senso tecnico.",
        why: "L'analogia (legis e iuris) è esclusa per norme sanzionatorie, per le disposizioni sul presupposto e per le norme impositrici; resta applicabile alle norme tecniche, cioè procedurali, in tema di accertamento e riscossione.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 5"
      },
      {
        q: "Secondo l'art. 10-bis dello Statuto, l'elusione fiscale è costituita da:",
        opts: ["Qualsiasi risparmio d'imposta ottenuto dal contribuente", "Operazioni prive di sostanza economica che, nel rispetto formale delle norme, realizzano vantaggi fiscali indebiti", "L'occultamento di ricavi nella dichiarazione dei redditi", "La violazione diretta di una norma impositiva"],
        correct: 1,
        difficulty: 2,
        commonError: "Confondere elusione ed evasione: l'evasore viola la norma, l'elusore la rispetta formalmente ma ne tradisce la ratio.",
        why: "L'art. 10-bis definisce l'abuso del diritto come operazioni prive di sostanza economica che, pur nel rispetto formale delle norme fiscali, realizzano essenzialmente vantaggi fiscali indebiti; l'interpretazione antielusiva legge la norma secondo la sua ratio per contrastarle.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 5"
      },
      {
        q: "Per la Corte costituzionale, l'interpretazione adeguatrice (conforme a Costituzione) da parte del giudice è:",
        opts: ["Una facoltà rimessa alla sua discrezionalità", "Ammessa solo nei giudizi di legittimità", "Un dovere", "Riservata alla Corte di cassazione"],
        correct: 2,
        difficulty: 4,
        commonError: "Considerarla una semplice possibilità: il giudice deve invece tentare la lettura conforme prima di dubitare della legittimità della norma.",
        why: "L'interpretazione adeguatrice valuta la conformità della norma ai precetti costituzionali e ai principi della materia (per il tributario, esplicitati dallo Statuto). La Corte costituzionale ha statuito che per il giudice non è una facoltà bensì un dovere.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 5"
      },
      {
        q: "Se una norma tributaria usa un termine di un altro ramo del diritto (es. «azienda»), l'approccio interpretativo corretto è:",
        opts: ["Attribuire sempre il significato proprio del diritto tributario", "Attribuire sempre il significato del ramo di provenienza, senza verifiche", "Rimettere la questione all'amministrazione finanziaria tramite circolare", "Partire dal significato del ramo di provenienza e verificarne la compatibilità sistematica con la disciplina del tributo"],
        correct: 3,
        difficulty: 5,
        commonError: "Sposare in assoluto una delle due tesi (unitarietà dell'ordinamento o peculiarità tributaria): entrambe, da sole, sono inesatte.",
        why: "Talvolta il legislatore precisa un significato diverso (es. la «cessione» ai fini IVA ex art. 2, co. 5, D.P.R. 633/1972), talvolta il significato coincide, talvolta è incompatibile con la disciplina del tributo. Perciò si privilegia il significato del ramo d'origine, salvo che l'interpretazione sistematica imponga un significato diverso.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 5"
      }
    ],
    veroFalso: [
      { aff: "Il giudice tributario è vincolato alle soluzioni interpretative già espresse dalla giurisprudenza per fattispecie analoghe.", vero: false, traccia: "Falso. Il giudice nazionale, nell'attività di interpretazione della legge, non è vincolato ai precedenti per fattispecie analoghe: resta libero di decidere in maniera autonoma e indipendente nella controversia sottoposta al suo esame." },
      { aff: "La risposta dell'amministrazione a un interpello vincola l'amministrazione stessa, limitatamente al richiedente, ma non il contribuente.", vero: true, traccia: "Vero. L'interpello (art. 11 Statuto) ha funzione preventiva: va proposto prima del comportamento. La risposta vincola solo l'amministrazione e solo verso il richiedente; il contribuente può disattenderla e non uniformarsi." },
      { aff: "L'interpretazione dichiarativa ricorre quando interpretazione letterale e logica coincidono perfettamente.", vero: true, traccia: "Vero. Nell'interpretazione dichiarativa il testo si allinea alla ratio legis: le parole usate dal legislatore esprimono esattamente il suo pensiero, senza necessità di restringere o estendere il significato letterale." }
    ],
    aperta: {
      q: "Il candidato illustri i criteri di interpretazione della norma tributaria, soffermandosi sul valore delle circolari e sui limiti dell'analogia.",
      traccia: "L'interpretazione mira a individuare il significato della disposizione fiscale per ricavare il precetto applicabile al caso concreto, in un contesto reso difficile dal carattere polisistematico della legislazione e dall'iperlegificazione. Si applicano i criteri legali dell'art. 12 preleggi: interpretazione letterale (significato proprio delle parole secondo la loro connessione) e ratio legis, con i canoni ausiliari sistematico, evolutivo e di conservazione. L'interpretazione logico-sistematica distingue mens legis e ratio legis, e in essa rientra la lettura antielusiva, che contrasta le operazioni prive di sostanza economica produttive di vantaggi fiscali indebiti (art. 10-bis Statuto). Si ricordano poi l'interpretazione autentica (retroattiva ma mai innovativa), l'adeguatrice (dovere del giudice secondo la Corte costituzionale), la dichiarativa, la restrittiva e l'estensiva. Le circolari hanno mera efficacia interna: non vincolano giudici né contribuenti, salva la tutela da sanzioni e interessi per chi vi si conformi. L'analogia, infine, è esclusa per norme impositrici, sul presupposto e sanzionatorie — che non configurano lacune in senso tecnico — ed è ammessa solo per le norme procedurali su accertamento e riscossione.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 5"
    },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "verofalso"],
    media: {
      podcast: {
        title: "Interpretare la norma tributaria",
        chapters: [["Perché interpretare è difficile", 0], ["I tipi di interpretazione", 200], ["Circolari, risoluzioni, interpello", 430], ["Analogia e interpretazione antielusiva", 620]]
      },
      mappa: true
    }
  }
];
