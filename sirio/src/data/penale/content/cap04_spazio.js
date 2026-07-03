/* =========================================================================
   SIRIO — DIRITTO PENALE · Capitolo 4: La legge penale nello spazio e le immunità.
   Fonte: Marinucci·Dolcini·Gatta, Manuale di Diritto penale, Parte generale —
   L'efficacia della legge penale nello spazio; i limiti personali all'efficacia
   della legge penale (le immunità).
   ========================================================================= */

export const PEN_CAP4 = [
  {
    id: "spazio",
    part: "generale",
    chapter: 4,
    chapterTitle: "La legge penale nello spazio e le immunità",
    title: "L'efficacia della legge penale nello spazio",
    subtitle: "Territorialità (art. 6), reati commessi all'estero (artt. 7-10), ubiquità, estradizione, MAE, sentenze straniere",
    articoli: ["artt. 3, 4 e 6 c.p.", "artt. 7-10 c.p.", "art. 12 c.p.", "artt. 10 e 26 Cost.", "l. 69/2005 (MAE)"],
    pages: [50, 58],
    depth: "std",
    layers: {
      essenziale:
        "L'efficacia della legge penale nello spazio è retta dal <strong>principio di territorialità</strong>: la legge penale italiana obbliga tutti coloro che si trovano nel territorio dello Stato (art. 3 c.p.) e \"chiunque commette un reato nel territorio dello Stato è punito secondo la legge penale italiana\" (art. 6 c.p.). Il <strong>territorio</strong> (art. 4, co. 2, c.p.) comprende terraferma e mare territoriale (dodici miglia), sottosuolo, spazio atmosferico e il territorio \"fittizio\" di navi e aeromobili italiani (criterio della bandiera). Il principio ha valenza relativa: lo integrano i principi subvalenti di <strong>universalità</strong>, <strong>personalità attiva</strong> e <strong>difesa (personalità passiva)</strong>. Le deroghe: l'<strong>art. 7 c.p.</strong> punisce incondizionatamente taluni reati commessi all'estero (delitti contro la personalità dello Stato, falsità in monete, delitti dei pubblici ufficiali con abuso dei poteri, ecc.); l'<strong>art. 8</strong> punisce i delitti politici su richiesta del Ministro della giustizia; gli <strong>artt. 9 e 10</strong> puniscono i delitti comuni del cittadino e dello straniero all'estero a determinate <strong>condizioni</strong> (soglie di pena, presenza del reo nello Stato, richiesta del Ministro o istanza/querela). Per il <em>locus commissi delicti</em> vale il <strong>principio di ubiquità</strong> (art. 6, co. 2): basta che in Italia avvenga anche solo parte dell'azione od omissione, ovvero l'evento. Completano il quadro il riconoscimento delle sentenze straniere ai soli fini dell'art. 12 c.p., l'<strong>estradizione</strong> (con i suoi principi e divieti) e, tra Stati UE, il <strong>mandato d'arresto europeo</strong>, procedura giudiziaria semplificata.",
      approfondimenti: [
        {
          label: "Le deroghe: artt. 7, 8, 9 e 10 c.p.",
          body:
            "Art. 7: punibilità incondizionata di cittadino o straniero per delitti contro la personalità dello Stato, contraffazione del sigillo, falsità in monete o valori di bollo italiani, delitti di pubblici ufficiali al servizio dello Stato con abuso dei poteri, e ogni altro reato previsto da speciali disposizioni o convenzioni (dalla l. 169/2024 anche la surrogazione di maternità commessa dal cittadino all'estero). Art. 8: delitti politici, su richiesta del Ministro della giustizia (più la querela ove prevista); politico è il delitto oggettivamente politico (offende un interesse politico dello Stato o un diritto politico del cittadino) e quello soggettivamente politico (delitto comune determinato in tutto o in parte da motivi politici). Artt. 9-10: delitti comuni del cittadino (ergastolo o reclusione minima tre anni, presenza del reo nello Stato) e dello straniero (reclusione minima un anno, presenza nello Stato e richiesta del Ministro o istanza/querela)."
        },
        {
          label: "Il principio di ubiquità e i reati di transito",
          body:
            "Ex art. 6, co. 2, c.p. il reato si considera commesso in Italia quando vi è avvenuta in tutto o in parte l'azione o l'omissione, ovvero vi si è verificato l'evento. Rientrano quindi i reati iniziati in Italia e perfezionati all'estero (e viceversa) e i c.d. reati di transito, in cui nello Stato si realizza una mera frazione della condotta (il pacco esplosivo spedito dall'estero che transita in Italia). Limite: il mero presupposto della condotta (o, per alcuni, la condizione obiettiva di punibilità). In dottrina si discute della porzione minima rilevante: atto esecutivo (Antolisei), condotta idonea e univoca ex art. 56 c.p. (Pannain), meri atti preparatori (Mantovani); la giurisprudenza segue l'interpretazione estensiva."
        },
        {
          label: "L'estradizione: procedimento, condizioni e divieti",
          body:
            "L'estradizione è la consegna di un individuo da uno Stato a un altro per il processo (processuale) o per l'esecuzione della pena (esecutiva); attiva per lo Stato richiedente, passiva per quello richiesto. L'estradizione passiva è bifasica: autorizzazione governativa politico-discrezionale, previa verifica giudiziaria dei presupposti da parte della Corte d'appello, il cui esito negativo è insuperabile dal Ministro. Condizioni: doppia incriminazione, specialità (artt. 699 e 721 c.p.p.), ne bis in idem. Divieti: estradizione del cittadino se non prevista da convenzioni (art. 26 Cost.; art. 13, co. 4, c.p.), reati politici (artt. 10 e 26 Cost., nozione più ampia dell'art. 8 c.p., salvo il genocidio ex l. cost. 1/1967), rischio di trattamenti inumani (art. 698 c.p.p.), pena di morte nello Stato richiedente, reati militari e fiscali secondo la prassi dei trattati."
        },
        {
          label: "Il mandato d'arresto europeo",
          body:
            "Il MAE (l. 69/2005, attuativa della decisione quadro 2002/584/GAI) sostituisce l'estradizione tra Stati membri UE con una procedura interamente giudiziaria: nessun intervento di organi politici, termini rigorosi (decisione entro 60 giorni dall'arresto, 10 se c'è consenso; consegna entro 10 giorni dalla decisione), abolizione della doppia incriminazione per 32 categorie di reati puniti nello Stato emittente con reclusione superiore nel massimo ad almeno tre anni, possibilità di garanzie (revisione dell'ergastolo, espiazione nello Stato di esecuzione per cittadini e residenti) e motivi tassativi di rifiuto, obbligatori (ne bis in idem, minore di diciotto anni, amnistia nello Stato di esecuzione) o facoltativi (procedimento pendente, prescrizione, difetto di doppia incriminazione fuori dalle 32 categorie)."
        }
      ],
      giurisprudenza: [
        {
          label: "Ubiquità estensiva: stupefacenti e reati omissivi",
          body:
            "Per il traffico internazionale di stupefacenti è sufficiente che sia avvenuta in Italia \"anche una minima parte dell'azione o dell'omissione, anche se priva dei requisiti di idoneità e di inequivocità richiesti per il tentativo\" (Cass., sez. VI, 4 giugno 2015, n. 38339). Per i reati omissivi, Cass., Sez. IV, 25 giugno 2024, n. 31655 ha affermato la giurisdizione italiana per l'omessa valutazione dei rischi da parte del c.d.a. di una s.p.a. rispetto a un infortunio in un cantiere in Libia: i comportamenti doverosi omessi andavano tenuti in Italia, presso la sede legale della società."
        },
        {
          label: "Delitti informatici e diffamazione via internet",
          body:
            "Cass., Sez. Un., 24 aprile 2015, n. 17325: il luogo di consumazione dell'accesso abusivo a sistema informatico (art. 615-ter c.p.) è quello in cui si trova il soggetto che effettua l'introduzione abusiva o vi si mantiene, non quello del server violato. Per la diffamazione a mezzo internet, la consumazione si colloca nel territorio dello Stato se ivi è percepita l'offesa, anche quando l'illecito sia stato compiuto all'estero (Cass., sez. I, 15 marzo 2011, n. 16307)."
        },
        {
          label: "Navi in acque straniere ed estradizione in Ucraina",
          body:
            "Per la nave mercantile italiana in acque territoriali altrui, la giurisdizione spetta allo Stato costiero quando le conseguenze del reato commesso a bordo si ripercuotano su interessi primari della comunità territoriale (Cass., Sez. Un., 26 gennaio 1990, n. 1002); le navi militari restano sempre territorio italiano. In tema di estradizione, Cass., 1 luglio 2024, n. 36440 ha confermato l'estradabilità di un cittadino ucraino per omicidio stradale, valorizzando le assicurazioni individuali dell'autorità ucraina sulla detenzione in una regione non interessata dai combattimenti e in condizioni compatibili con i diritti fondamentali."
        }
      ],
      eccezioni: [
        {
          label: "Delitto politico: due nozioni diverse",
          body:
            "La nozione di delitto politico dell'art. 8 c.p. (che fonda la punibilità su richiesta del Ministro) non coincide con quella degli artt. 10 e 26 Cost. in tema di divieto di estradizione: qui \"politico\" è inteso in accezione diversa e più ampia, da leggere alla luce del diritto internazionale generale, con l'eccezione del genocidio (l. cost. 1/1967). Attenzione anche a non confondere motivo politico e motivo sociale: quest'ultimo attiene a una visione dei rapporti umani che non si riflette sul rapporto Stato-cittadino."
        },
        {
          label: "La spazzacorrotti e le condizioni di procedibilità",
          body:
            "Dopo la l. 3/2019, per i delitti di corruzione internazionale non occorre alcuna richiesta, istanza o querela: artt. 320, 321 e 346-bis c.p. commessi dal cittadino all'estero (art. 9, co. 4) e artt. 317, 318, 319, 319-bis, 319-ter, 319-quater, 320, 321, 322 e 322-bis c.p. commessi dallo straniero all'estero (art. 10, co. 3). Il d.lgs. 195/2021 ha esteso l'art. 9, co. 4, a ricettazione e autoriciclaggio (artt. 648 e 648-ter.1 c.p.). Errore da evitare: applicare a questi delitti le ordinarie condizioni degli artt. 9 e 10."
        }
      ]
    },
    sintesi: [
      "Territorialità: artt. 3 e 6 c.p.; territorio anche fittizio (navi e aeromobili).",
      "Art. 7: punibilità incondizionata; art. 8: delitti politici su richiesta del Ministro.",
      "Artt. 9-10: delitti comuni all'estero, con soglie di pena e condizioni di procedibilità.",
      "Ubiquità (art. 6, co. 2): basta in Italia parte della condotta o l'evento.",
      "Sentenze straniere riconosciute solo ai fini dell'art. 12 c.p.",
      "Estradizione: doppia incriminazione, specialità, ne bis in idem; tra Stati UE opera il MAE."
    ],
    esempi: [
      {
        titolo: "Il pacco esplosivo in transito e il sito estero di Andrea",
        testo:
          "Un pacco esplosivo viene spedito dalla Francia, transita per l'Italia e giunge in Austria, dove esplode. Per il <strong>principio di ubiquità</strong> (art. 6, co. 2, c.p.) il reato si considera commesso anche in Italia: nel territorio dello Stato si è realizzata una frazione della condotta criminosa (c.d. reato di transito), e ciò basta a radicare la giurisdizione italiana. Analogamente, Andrea pubblica dall'estero, su un sito, frasi diffamatorie contro la dott.ssa Ferri, che le legge in Italia: secondo la Cassazione la diffamazione via internet si consuma nel territorio dello Stato se ivi è <strong>percepita l'offesa</strong>, anche se l'illecito è stato compiuto all'estero. In entrambi i casi la legge penale italiana si applica benché la condotta si sia svolta, in tutto o in parte, fuori dai confini."
      },
      {
        titolo: "Paolo, delitto comune all'estero",
        testo:
          "Paolo, cittadino italiano, commette in Sudamerica una rapina ai danni di un turista tedesco, poi rientra in Italia. Il fatto è interamente commesso all'estero, quindi l'art. 6 non basta: opera l'<strong>art. 9 c.p.</strong> Trattandosi di delitto comune del cittadino punito con reclusione non inferiore nel minimo a tre anni, Paolo è punibile secondo la legge italiana <strong>purché si trovi nel territorio dello Stato</strong>. Se il delitto fosse punito con pena detentiva inferiore, occorrerebbe la richiesta del Ministro della giustizia ovvero l'istanza o la querela della persona offesa; e poiché il danneggiato è uno straniero, la punibilità è comunque condizionata alla richiesta del Ministro, sempre che l'estradizione non sia stata concessa o accettata dallo Stato del luogo del delitto (art. 9, co. 3)."
      }
    ],
    flashcards: [
      ["Cosa stabilisce l'art. 6 c.p.?", "Chiunque commette un reato nel territorio dello Stato è punito secondo la legge penale italiana; il reato si considera commesso in Italia se vi avviene anche solo parte della condotta o l'evento (ubiquità)."],
      ["Quali reati commessi all'estero sono puniti incondizionatamente?", "Quelli dell'art. 7 c.p.: delitti contro la personalità dello Stato, contraffazione del sigillo, falsità in monete e valori italiani, delitti di pubblici ufficiali con abuso di poteri, altri reati previsti da leggi speciali o convenzioni."],
      ["Cos'è il delitto soggettivamente politico?", "Il delitto comune determinato, in tutto o in parte, da motivi politici (art. 8, co. 3, c.p.); si affianca al delitto oggettivamente politico, che offende un interesse politico dello Stato o un diritto politico del cittadino."],
      ["Quali sono le condizioni di ammissibilità dell'estradizione?", "Doppia incriminazione, principio di specialità (artt. 699 e 721 c.p.p.), ne bis in idem; divieti per il cittadino (salvo convenzioni), per i reati politici e in caso di trattamenti inumani o pena di morte."],
      ["In cosa il MAE si differenzia dall'estradizione?", "È una procedura interamente giudiziaria tra Stati UE, senza intervento politico, con termini rigorosi, doppia incriminazione abolita per 32 categorie di reati e motivi tassativi di rifiuto."],
      ["A quali fini è riconosciuta la sentenza penale straniera?", "Solo ai fini dell'art. 12 c.p.: recidiva e altri effetti penali, abitualità/professionalità/tendenza a delinquere, pene accessorie, misure di sicurezza, restituzioni e risarcimento del danno."]
    ],
    comparativa: {
      titolo: "Estradizione vs mandato d'arresto europeo",
      a: "Estradizione",
      b: "Mandato d'arresto europeo",
      righe: [
        { profilo: "Ambito", a: "Rapporti con Stati non appartenenti all'Unione europea", b: "Rapporti tra Stati membri dell'Unione europea (l. 69/2005)" },
        { profilo: "Organi coinvolti", a: "Procedura bifasica: autorizzazione politica del Governo previo controllo della Corte d'appello", b: "Collaborazione diretta tra autorità giudiziarie, senza intervento del Ministro" },
        { profilo: "Doppia incriminazione", a: "Sempre richiesta", b: "Esclusa per 32 categorie di reati puniti nello Stato emittente con reclusione superiore nel massimo ad almeno tre anni" },
        { profilo: "Tempi", a: "Nessun termine rigoroso predeterminato", b: "Decisione entro 60 giorni dall'arresto (10 se consenso), consegna entro 10 giorni dalla decisione" }
      ]
    },
    quiz: [
      {
        q: "In base al principio di ubiquità (art. 6, co. 2, c.p.), il reato si considera commesso in Italia quando:",
        opts: [
          "L'azione o l'omissione vi è avvenuta in tutto o in parte, ovvero vi si è verificato l'evento",
          "L'intera condotta si è svolta nel territorio dello Stato italiano",
          "Il colpevole è cittadino italiano, ovunque abbia agito",
          "Vi si è verificato almeno un presupposto della condotta criminosa"
        ],
        correct: 0,
        difficulty: 2,
        commonError: "Ritenere sufficiente il mero presupposto della condotta: è proprio il limite che la dottrina pone al criterio dell'ubiquità.",
        why: "L'art. 6, co. 2, c.p. adotta il principio di ubiquità: basta che in Italia si realizzi una frazione della condotta oppure l'evento. Restano fuori il mero presupposto della condotta e, per alcuni, la condizione obiettiva di punibilità.",
        fonte: "Marinucci·Dolcini·Gatta, PG — La legge penale nello spazio"
      },
      {
        q: "Il delitto comune commesso all'estero dallo straniero (art. 10 c.p.) è punito in Italia se, tra l'altro:",
        opts: [
          "È punito con qualunque pena detentiva e il reo è stato estradato in Italia",
          "È punito con l'ergastolo o la reclusione non inferiore nel minimo a un anno, il reo si trova nello Stato e vi è richiesta del Ministro o istanza/querela",
          "È punito con l'ergastolo o la reclusione non inferiore nel minimo a tre anni, senza ulteriori condizioni di procedibilità",
          "Offende un interesse politico dello Stato italiano, previa deliberazione delle Camere"
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Scambiare le soglie: tre anni è il minimo edittale richiesto per il delitto comune del cittadino (art. 9), un anno per quello dello straniero (art. 10), che però esige sempre richiesta del Ministro o istanza/querela.",
        why: "L'art. 10, co. 1, c.p. richiede delitto punito con ergastolo o reclusione non inferiore nel minimo a un anno, presenza del reo nel territorio dello Stato e richiesta del Ministro della giustizia ovvero istanza o querela della persona offesa.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Reati commessi all'estero"
      },
      {
        q: "Per i delitti politici commessi all'estero, l'art. 8 c.p. richiede:",
        opts: [
          "Nessuna condizione: sono puniti incondizionatamente come quelli dell'art. 7",
          "La sola presenza del reo nel territorio dello Stato italiano",
          "La richiesta del Ministro della giustizia, oltre alla querela ove prevista",
          "Una previa deliberazione autorizzativa della Corte costituzionale"
        ],
        correct: 2,
        difficulty: 3,
        commonError: "Assimilare i delitti politici dell'art. 8 a quelli contro la personalità dello Stato dell'art. 7, n. 1, che sono invece puniti incondizionatamente.",
        why: "A differenza dei reati dell'art. 7, per i delitti politici dell'art. 8 è necessaria l'esplicita richiesta del Ministro della giustizia, cui si aggiunge la querela ove prevista: al Ministro spetta la valutazione di opportunità della persecuzione.",
        fonte: "Marinucci·Dolcini·Gatta, PG — I delitti politici"
      },
      {
        q: "Secondo Cass., Sez. Un., n. 17325/2015, il luogo di consumazione dell'accesso abusivo a sistema informatico è:",
        opts: [
          "Quello in cui si trova fisicamente il server violato",
          "Quello della sede legale del titolare del sistema informatico",
          "Quello in cui i dati carpiti vengono successivamente utilizzati",
          "Quello in cui si trova chi effettua l'introduzione abusiva o vi si mantiene"
        ],
        correct: 3,
        difficulty: 4,
        commonError: "Individuare il locus nel luogo del server violato, soluzione espressamente scartata dalle Sezioni unite.",
        why: "Le Sezioni unite hanno chiarito che il delitto ex art. 615-ter c.p. si consuma nel luogo in cui si trova il soggetto agente che si introduce o si mantiene abusivamente nel sistema, non dove è collocato fisicamente il server.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il locus commissi delicti"
      },
      {
        q: "Quale tra i seguenti è un motivo obbligatorio di rifiuto della consegna nel mandato d'arresto europeo?",
        opts: [
          "La pendenza di un procedimento penale nel Paese di esecuzione",
          "La minore età (persona minore degli anni diciotto)",
          "L'intervenuta prescrizione del reato nel Paese di esecuzione",
          "La mancanza di doppia incriminazione per reati fuori dalle 32 categorie"
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Confondere motivi obbligatori e facoltativi: pendenza del procedimento, prescrizione e difetto di doppia incriminazione sono facoltativi.",
        why: "Sono motivi obbligatori di rifiuto: precedente giudicato per lo stesso reato, minore età della persona richiesta e amnistia del reato nel Paese di esecuzione. Gli altri elencati sono motivi facoltativi.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il mandato d'arresto europeo"
      },
      {
        q: "Il riconoscimento delle sentenze penali straniere da parte dello Stato italiano:",
        opts: [
          "È sempre escluso, in ossequio alla sovranità nazionale",
          "È ammesso ai soli fini indicati dall'art. 12 c.p., tra cui recidiva, pene accessorie, misure di sicurezza ed effetti civili",
          "Consente l'esecuzione in Italia di qualunque pena detentiva inflitta all'estero",
          "È subordinato in ogni caso alla ratifica del Parlamento italiano"
        ],
        correct: 1,
        difficulty: 2,
        commonError: "Ritenere il riconoscimento generalizzato: esso opera solo per gli effetti tassativi dell'art. 12 c.p., ferma la disciplina UE del mutuo riconoscimento.",
        why: "L'art. 12 c.p. elenca tassativamente i fini del riconoscimento: recidiva e altri effetti penali, dichiarazione di abitualità/professionalità/tendenza a delinquere, pene accessorie, misure di sicurezza personali, restituzioni e risarcimento. Serve un trattato di estradizione o la richiesta del Ministro, salvo il n. 4.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Il riconoscimento delle sentenze straniere"
      },
      {
        q: "L'estradizione del cittadino italiano è consentita:",
        opts: [
          "Mai, in nessun caso, per il divieto assoluto dell'art. 26 Cost.",
          "Sempre, purché vi sia la richiesta di uno Stato con cui vigono rapporti diplomatici",
          "Solo ove sia espressamente prevista dalle convenzioni internazionali",
          "Solo previa autorizzazione delle Camere riunite in seduta comune"
        ],
        correct: 2,
        difficulty: 1,
        commonError: "Leggere l'art. 26 Cost. come divieto assoluto: il divieto è relativo, superabile dalla previsione convenzionale espressa.",
        why: "Ai sensi dell'art. 26 Cost. (e dell'art. 13, co. 4, c.p.) l'estradizione del cittadino può essere consentita soltanto ove sia espressamente prevista dalle convenzioni internazionali; resta comunque vietata per i reati politici, salvo il genocidio.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'estradizione"
      }
    ],
    veroFalso: [
      {
        aff: "Le navi militari italiane sono considerate territorio dello Stato solo quando si trovano in acque internazionali.",
        vero: false,
        traccia: "Falso. Le navi militari o dello Stato sono sempre considerate territorio italiano per i fatti commessi a bordo. La distinzione fondata sulle acque territoriali altrui riguarda le navi mercantili: per esse la giurisdizione spetta allo Stato costiero quando le conseguenze del reato incidano su interessi primari della comunità territoriale (Cass., Sez. Un., n. 1002/1990)."
      },
      {
        aff: "Dopo la l. 3/2019 (spazzacorrotti), per taluni delitti di corruzione commessi all'estero non è necessaria alcuna richiesta, istanza o querela.",
        vero: true,
        traccia: "Vero. Il nuovo quarto comma dell'art. 9 c.p. esclude ogni condizione di procedibilità per gli artt. 320, 321 e 346-bis c.p. commessi dal cittadino all'estero; il terzo comma dell'art. 10 fa altrettanto per i delitti degli artt. 317-322-bis c.p. commessi dallo straniero all'estero. Il d.lgs. 195/2021 ha esteso l'art. 9, co. 4, a ricettazione e autoriciclaggio."
      },
      {
        aff: "La nozione di delitto politico rilevante ai fini del divieto di estradizione coincide con quella dell'art. 8 c.p.",
        vero: false,
        traccia: "Falso. Ai fini degli artt. 10 e 26 Cost. l'aggettivo \"politico\" è inteso in un'accezione diversa e più ampia rispetto all'art. 8 c.p., da interpretare alla luce del diritto internazionale generale; fanno eccezione i delitti di genocidio (l. cost. 1/1967), per i quali l'estradizione è ammessa."
      }
    ],
    aperta: {
      q: "Il candidato illustri il principio di territorialità della legge penale e le relative deroghe, soffermandosi sulle condizioni di punibilità dei reati commessi all'estero.",
      traccia:
        "Gli artt. 3 e 6 c.p. accolgono il principio di territorialità: la legge penale italiana si applica a chiunque, cittadino o straniero, commetta un reato nel territorio dello Stato, definito dall'art. 4, co. 2, c.p. e comprensivo del territorio fittizio di navi e aeromobili. Il locus commissi delicti è individuato con il principio di ubiquità: basta che in Italia si realizzi parte della condotta o l'evento, con inclusione dei reati di transito. Il principio è temperato dai criteri subvalenti di universalità, personalità attiva e difesa, che fondano le deroghe: l'art. 7 punisce incondizionatamente taluni reati commessi all'estero espressivi delle istanze di difesa dello Stato; l'art. 8 subordina la punizione dei delitti politici, oggettivamente o soggettivamente tali, alla richiesta del Ministro della giustizia; gli artt. 9 e 10 condizionano la punibilità dei delitti comuni del cittadino e dello straniero a soglie edittali (tre anni e un anno di reclusione nel minimo), alla presenza del reo nello Stato e, nei casi previsti, alla richiesta del Ministro o all'istanza o querela dell'offeso, con le eccezioni introdotte dalla l. 3/2019 per i delitti di corruzione. Completano il sistema l'art. 12 c.p., l'estradizione e, in ambito UE, il mandato d'arresto europeo.",
      fonte: "Marinucci·Dolcini·Gatta, PG — La legge penale nello spazio"
    },
    consigliate: ["mappa", "comparativa", "mcq", "flashcards", "verofalso"],
    media: {
      podcast: {
        title: "La legge penale nello spazio: territorialità, deroghe, estradizione e MAE",
        chapters: [
          ["Territorialità e nozione di territorio", 0],
          ["Le deroghe: artt. 7, 8, 9 e 10 c.p.", 330],
          ["Ubiquità e locus commissi delicti", 680],
          ["Sentenze straniere, estradizione e MAE", 980]
        ]
      },
      mappa: true
    }
  },
  {
    id: "immunita",
    part: "generale",
    chapter: 4,
    chapterTitle: "La legge penale nello spazio e le immunità",
    title: "I limiti personali all'efficacia della legge penale: le immunità",
    subtitle: "Obbligatorietà (art. 3 c.p.), immunità di diritto pubblico interno e di diritto internazionale, natura giuridica",
    articoli: ["art. 3 c.p.", "art. 90 Cost.", "art. 68 Cost.", "art. 96 Cost.", "art. 10, co. 1, Cost."],
    pages: [59, 63],
    depth: "std",
    layers: {
      essenziale:
        "L'<strong>obbligatorietà della legge penale</strong>, corollario del principio di uguaglianza, è sancita dall'art. 3 c.p.: la legge penale si applica a tutti coloro che si trovano nel territorio dello Stato, cittadini o stranieri, \"salve le eccezioni stabilite dal diritto pubblico interno o dal diritto internazionale\". Tali eccezioni sono le <strong>immunità</strong>, ipotesi disomogenee per ratio, contenuto e fonte, accomunate dall'effetto di esenzione dal potere coercitivo dello Stato. Si classificano in: <strong>assolute o relative</strong> (per oggetto dell'esenzione), <strong>funzionali o extrafunzionali</strong> (per inerenza alle funzioni), <strong>sostanziali o processuali</strong> (per natura: le prime perdurano dopo la cessazione della carica, le seconde operano solo finché dura la qualità), di <strong>diritto pubblico interno o di diritto internazionale</strong> (per fonte). Nel diritto interno: il <strong>Presidente della Repubblica</strong> non risponde dei reati commessi nell'esercizio delle funzioni, salvo alto tradimento e attentato alla Costituzione (art. 90 Cost.); i <strong>parlamentari</strong> godono dell'insindacabilità per opinioni e voti espressi nell'esercizio delle funzioni (art. 68, co. 1, Cost.) e dell'inviolabilità di persona, domicilio e corrispondenza (art. 68, co. 2 e 3); prerogative analoghe spettano a consiglieri regionali, giudici costituzionali e componenti del CSM. Nel diritto internazionale (rilevante ex artt. 10 e 117 Cost.): immunità assoluta del <strong>Capo di Stato estero</strong> e del Sommo Pontefice; immunità funzionali di Capi di Governo, ministri, <strong>agenti diplomatici</strong>, consoli, giudici internazionali ed europarlamentari. Sulla <strong>natura giuridica</strong> si contrappongono tesi monistiche e la tesi pluralistica, oggi maggioritaria.",
      approfondimenti: [
        {
          label: "Presidente della Repubblica (art. 90 Cost.)",
          body:
            "Il Capo dello Stato (e il Presidente del Senato che ne esercita le funzioni ex art. 86, co. 1, Cost.) è immune per i soli reati commessi nell'esercizio delle funzioni, salvo che integrino alto tradimento o attentato alla Costituzione; ogni attività extrafunzionale è pienamente sindacabile. L'esercizio delle funzioni coincide con l'esercizio ordinario dei poteri dell'art. 87 Cost.: atti ufficiali controfirmati, atti dovuti (indizione delle elezioni), atti discrezionali (nomina del Presidente del Consiglio), atti compiuti come Presidente di organi a rilevanza costituzionale (CSM) ed esternazioni quali i messaggi alle Camere o le dichiarazioni in manifestazioni e visite ufficiali."
        },
        {
          label: "L'immunità parlamentare (art. 68 Cost.)",
          body:
            "Fondata sull'indipendenza delle Camere e sulla libertà di espressione del rappresentante (riconducibile all'art. 21 Cost.), comprende: a) l'insindacabilità per le opinioni espresse e i voti dati nell'esercizio delle funzioni (co. 1); b) l'inviolabilità della persona, del domicilio e della corrispondenza (co. 2 e 3). Sull'insindacabilità delibera la Camera di appartenenza: la deliberazione preclude l'intervento dell'autorità giudiziaria ed è controllabile dalla Corte costituzionale, in sede di conflitto di attribuzione, solo per vizi in procedendo e non nel merito. I consiglieri regionali godono di immunità analoga (art. 122, co. 4, Cost.), ma senza le garanzie dei commi 2 e 3 dell'art. 68."
        },
        {
          label: "Le altre immunità interne e i ministri",
          body:
            "I giudici costituzionali non sono sindacabili né perseguibili per opinioni e voti espressi nell'esercizio delle funzioni (art. 5 l. cost. 1/1953) e sono processabili solo previa autorizzazione della Corte (art. 3 l. cost. 1/1948); i componenti del CSM non sono punibili per le opinioni espresse nell'esercizio delle funzioni, purché concernenti l'oggetto della discussione (art. 32-bis l. 195/1958). Il Presidente del Consiglio e i ministri, invece, non godono di alcuna immunità: per i reati funzionali sono sottoposti alla giurisdizione ordinaria, anche dopo la cessazione dalla carica, previa autorizzazione del Senato o della Camera (art. 96 Cost.; l. cost. 1/1989, che ha istituito il Tribunale dei ministri presso ogni Corte d'appello)."
        },
        {
          label: "Le immunità di diritto internazionale",
          body:
            "Derivano da consuetudini internazionali, cogenti nell'ordinamento interno ex art. 10, co. 1, Cost., o da convenzioni rilevanti ex art. 117, co. 1, Cost. Il Capo di Stato estero gode di immunità assoluta, sostanziale e processuale, estesa a familiari e seguito; il Sommo Pontefice, quale Capo dello Stato Città del Vaticano, di immunità assoluta (art. 8 Trattato lateranense). Capi di Governo esteri, ministri, rappresentanti in conferenze e organizzazioni internazionali, membri stranieri di Tribunali arbitrali e funzionari di organizzazioni internazionali hanno immunità generale funzionale e sostanziale. Gli agenti diplomatici (l. 804/1967) godono di inviolabilità personale, immunità dalla giurisdizione e immunità sostanziale per i fatti funzionali, perdurante dopo la carica; per i consoli l'immunità funzionale non copre i reati puniti con reclusione superiore a cinque anni. Gli europarlamentari hanno le prerogative dei parlamentari nazionali (Protocollo 8 aprile 1965)."
        }
      ],
      giurisprudenza: [
        {
          label: "Il nesso funzionale: Corte cost. nn. 10 e 11 del 2000",
          body:
            "A partire dalle sentenze nn. 10 e 11 del 2000, la Corte costituzionale ha chiarito che per \"opinioni espresse nell'esercizio delle funzioni\" ex art. 68, co. 1, Cost. si intendono non solo gli atti tipici, ma anche quelli connessi alla funzione: il c.d. nesso funzionale sussiste solo ove la dichiarazione incriminata risulti, per sostanziale corrispondenza di contenuti, espressione dell'attività parlamentare. La mera qualità di parlamentare non basta a coprire qualunque esternazione."
        },
        {
          label: "Social media e insindacabilità: Corte cost. n. 104/2024",
          body:
            "Corte cost., 11 aprile 2024, n. 104 si è occupata delle dichiarazioni rese sui social media da deputati e senatori, ritenendo applicabile l'art. 68, co. 1, Cost. a condizione che esse siano connesse all'esercizio della funzione parlamentare e improntate al rispetto della dignità dei terzi. L'insindacabilità si estende dunque alla comunicazione politica digitale, ma entro i limiti del nesso funzionale e del rispetto della persona."
        }
      ],
      eccezioni: [
        {
          label: "Ministri: nessuna immunità, solo garanzia procedimentale",
          body:
            "Errore ricorrente: annoverare Presidente del Consiglio e ministri tra i soggetti immuni. In quanto tali non beneficiano di alcuna forma di immunità: l'art. 96 Cost. prevede soltanto che, per i reati funzionali, anche se cessati dalla carica, siano sottoposti alla giurisdizione ordinaria previa autorizzazione del Senato o della Camera. È una condizione di procedibilità, non un'esenzione dalla responsabilità."
        },
        {
          label: "Immunità presidenziale: né assoluta né perpetua per gli extrafunzionali",
          body:
            "L'immunità del Presidente della Repubblica copre i soli reati funzionali e cede di fronte ad alto tradimento e attentato alla Costituzione (art. 90 Cost.). Gli atti estranei all'esercizio delle funzioni restano pienamente sindacabili. Analogamente, per i consoli l'immunità funzionale non opera per i reati puniti con reclusione superiore a cinque anni: le immunità internazionali non sono tutte assolute come quella del Capo di Stato estero."
        }
      ]
    },
    sintesi: [
      "Art. 3 c.p.: legge penale obbligatoria per tutti, salve le eccezioni (immunità).",
      "Classificazioni: assolute/relative, funzionali/extrafunzionali, sostanziali/processuali, interne/internazionali.",
      "PdR: immunità funzionale, salvo alto tradimento e attentato alla Costituzione (art. 90).",
      "Parlamentari: insindacabilità (art. 68, co. 1) e inviolabilità (co. 2 e 3); delibera la Camera.",
      "Diritto internazionale: Capo di Stato estero immune in assoluto; diplomatici immuni per i fatti funzionali.",
      "Natura giuridica: tesi monistiche vs tesi pluralistica, oggi maggioritaria."
    ],
    esempi: [
      {
        titolo: "Il senatore Rossi e il post sui social",
        testo:
          "Il senatore Rossi pubblica su un social network un post duramente critico verso un imprenditore, che lo querela per diffamazione. Il Senato delibera l'insindacabilità ex art. 68, co. 1, Cost. La copertura, però, non è automatica: secondo la Corte costituzionale (a partire dalle sentt. nn. 10 e 11 del 2000) occorre il <strong>nesso funzionale</strong>, cioè la sostanziale corrispondenza di contenuti tra la dichiarazione e un'attività parlamentare tipica; e per i social media la sent. n. 104/2024 richiede che le dichiarazioni siano connesse all'esercizio della funzione e <strong>rispettose della dignità dei terzi</strong>. Se il post di Rossi non riproduce contenuti della sua attività parlamentare, il giudice può sollevare conflitto di attribuzione e la Corte può annullare la delibera di insindacabilità per vizi del procedimento valutativo."
      },
      {
        titolo: "L'ambasciatore Dupont e l'incidente a Roma",
        testo:
          "L'ambasciatore Dupont, agente diplomatico accreditato in Italia, è coinvolto in un episodio penalmente rilevante a Roma. Quale diplomatico, gode dell'<strong>inviolabilità della persona</strong> e dell'<strong>immunità dalla giurisdizione</strong> italiana (l. 804/1967): non può essere arrestato né processato finché dura la carica. Per i fatti compiuti <strong>nell'esercizio delle funzioni</strong> l'immunità è ritenuta sostanziale e perdura anche dopo la cessazione della carica; per i fatti extrafunzionali, invece, cessata la qualità diplomatica, il processo torna possibile. Diverso il caso del console Muller: la sua immunità copre le sole condotte funzionali e comunque non i reati puniti con reclusione superiore a cinque anni. L'esempio mostra la gradazione delle immunità internazionali, che solo per il Capo di Stato estero sono assolute."
      }
    ],
    flashcards: [
      ["Dove è sancita l'obbligatorietà della legge penale?", "Nell'art. 3 c.p.: la legge penale obbliga tutti coloro che si trovano nel territorio dello Stato, cittadini o stranieri, salve le eccezioni del diritto pubblico interno o del diritto internazionale."],
      ["Quando risponde penalmente il Presidente della Repubblica?", "Per alto tradimento e attentato alla Costituzione e per tutti i reati extrafunzionali; è immune solo per i reati commessi nell'esercizio delle funzioni (art. 90 Cost.)."],
      ["Quali prerogative comprende l'immunità parlamentare?", "Insindacabilità per opinioni e voti espressi nell'esercizio delle funzioni (art. 68, co. 1, Cost.) e inviolabilità di persona, domicilio e corrispondenza (co. 2 e 3)."],
      ["Cosa distingue immunità sostanziali e processuali?", "Le sostanziali riguardano i fatti compiuti e perdurano dopo la cessazione della carica; le processuali sono esenzioni dalla giurisdizione operanti solo finché dura la qualità del soggetto."],
      ["Qual è la fonte interna delle immunità di diritto internazionale?", "Le consuetudini internazionali, cogenti ex art. 10, co. 1, Cost., e le convenzioni internazionali, rilevanti ex art. 117, co. 1, Cost."],
      ["Come qualifica le immunità la tesi pluralistica?", "Come una pluralità di species autonome: le immunità funzionali interne come cause di giustificazione ex art. 51 c.p.; quelle internazionali come cause di non punibilità o limiti alla giurisdizione."]
    ],
    comparativa: {
      titolo: "Immunità di diritto pubblico interno vs immunità di diritto internazionale",
      a: "Diritto pubblico interno",
      b: "Diritto internazionale",
      righe: [
        { profilo: "Fonte", a: "Costituzione o leggi ordinarie (artt. 68, 90, 122 Cost.; l. cost. 1/1953)", b: "Consuetudini internazionali (art. 10, co. 1, Cost.) o convenzioni (art. 117, co. 1, Cost.)" },
        { profilo: "Beneficiari tipici", a: "Presidente della Repubblica, parlamentari, consiglieri regionali, giudici costituzionali, componenti del CSM", b: "Capi di Stato e di Governo esteri, Sommo Pontefice, diplomatici, consoli, giudici internazionali, europarlamentari" },
        { profilo: "Ratio", a: "Libero esercizio delle funzioni costituzionali e indipendenza degli organi", b: "Rispetto della capacità giuridica internazionale dei rappresentanti degli Stati esteri" },
        { profilo: "Qualificazione prevalente", a: "Le funzionali come cause di giustificazione ex art. 51 c.p.", b: "Cause di non punibilità o limiti alla giurisdizione" }
      ]
    },
    quiz: [
      {
        q: "L'immunità del Presidente della Repubblica ex art. 90 Cost. copre:",
        opts: [
          "Tutti i reati commessi durante il mandato, funzionali ed extrafunzionali",
          "I reati funzionali, salvo alto tradimento e attentato alla Costituzione",
          "I soli reati extrafunzionali commessi prima dell'assunzione della carica",
          "Ogni reato, ma solo fino alla cessazione del mandato presidenziale"
        ],
        correct: 1,
        difficulty: 2,
        commonError: "Estendere l'immunità agli atti extrafunzionali, che sono invece pienamente sindacabili.",
        why: "L'art. 90, co. 1, Cost. esclude la responsabilità del Presidente per i soli atti compiuti nell'esercizio delle funzioni, con le due eccezioni dell'alto tradimento e dell'attentato alla Costituzione; l'attività extrafunzionale resta sindacabile.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le immunità"
      },
      {
        q: "Secondo la Corte costituzionale (sentt. nn. 10 e 11 del 2000), il nesso funzionale ex art. 68, co. 1, Cost. sussiste quando:",
        opts: [
          "La dichiarazione è resa da chi riveste la qualità di parlamentare, in qualunque sede",
          "La dichiarazione è resa all'interno delle aule parlamentari, quale ne sia il contenuto",
          "La dichiarazione corrisponde sostanzialmente, nei contenuti, all'attività parlamentare",
          "La dichiarazione riguarda temi politici di rilievo nazionale o internazionale"
        ],
        correct: 2,
        difficulty: 3,
        commonError: "Ritenere sufficiente lo status di parlamentare o il contesto politico della dichiarazione: serve la sostanziale corrispondenza di contenuti con l'attività parlamentare.",
        why: "Per la Corte l'insindacabilità copre gli atti tipici e quelli connessi alla funzione: il nesso funzionale esiste solo se la dichiarazione incriminata è, per sostanziale corrispondenza di contenuti, espressione dell'attività parlamentare.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'immunità parlamentare"
      },
      {
        q: "Il Presidente del Consiglio e i singoli ministri, per i reati commessi nell'esercizio delle funzioni:",
        opts: [
          "Godono di immunità funzionale assoluta finché dura la carica di governo",
          "Sono giudicati esclusivamente dalla Corte costituzionale in composizione integrata",
          "Sono insindacabili, come i parlamentari, previa delibera del Consiglio dei ministri",
          "Sono sottoposti alla giurisdizione ordinaria previa autorizzazione di Senato o Camera"
        ],
        correct: 3,
        difficulty: 3,
        commonError: "Attribuire ai ministri un'immunità che non hanno: l'art. 96 Cost. prevede solo un'autorizzazione a procedere, non un'esenzione dalla responsabilità.",
        why: "I membri del Governo non beneficiano di alcuna immunità: ex art. 96 Cost., anche se cessati dalla carica, per i reati funzionali sono sottoposti alla giurisdizione ordinaria previa autorizzazione del Senato o della Camera; la l. cost. 1/1989 ha istituito il Tribunale dei ministri.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le immunità di diritto interno"
      },
      {
        q: "Il Capo di Stato estero gode, secondo il diritto internazionale consuetudinario:",
        opts: [
          "Di immunità assoluta, sostanziale e processuale, estesa a familiari e seguito",
          "Di immunità limitata ai soli atti compiuti nell'esercizio delle funzioni",
          "Di immunità processuale operante solo previa condizione di reciprocità",
          "Di nessuna immunità, salvo quanto previsto da trattati bilaterali specifici"
        ],
        correct: 0,
        difficulty: 2,
        commonError: "Confondere la posizione del Capo di Stato estero (immunità assoluta) con quella funzionale di Capi di Governo, ministri e diplomatici.",
        why: "Il Capo di Stato estero gode di immunità assoluta, sostanziale e processuale, fondata sulla consuetudine internazionale (cogente ex art. 10, co. 1, Cost.) ed estesa ai familiari e al seguito; la stessa ampiezza spetta al Sommo Pontefice.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le immunità di diritto internazionale"
      },
      {
        q: "Nell'ambito della tesi pluralistica, le immunità funzionali di diritto interno sono per lo più qualificate come:",
        opts: [
          "Ipotesi di incapacità penale dettate da ragioni politiche",
          "Cause di estinzione del reato a carattere personale",
          "Cause di giustificazione riconducibili all'art. 51 c.p.",
          "Mere condizioni di procedibilità dell'azione penale"
        ],
        correct: 2,
        difficulty: 4,
        commonError: "Riferire alla tesi pluralistica la qualificazione come incapacità penale, che appartiene invece a un'impostazione monistica (Manzini).",
        why: "La tesi pluralistica, oggi maggioritaria, qualifica autonomamente ciascuna specie: le immunità funzionali interne come cause di giustificazione ex art. 51 c.p., a tutela del libero esercizio del munus; quelle internazionali come cause di non punibilità o limiti alla giurisdizione.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Natura giuridica delle immunità"
      },
      {
        q: "La deliberazione parlamentare di insindacabilità ex art. 68, co. 1, Cost.:",
        opts: [
          "È sindacabile nel merito dal giudice penale procedente",
          "Preclude l'intervento del giudice ed è controllabile dalla Corte costituzionale solo per vizi in procedendo",
          "È un parere non vincolante che il giudice può motivatamente disattendere",
          "Deve essere confermata dal Presidente della Repubblica per divenire efficace"
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Ritenere che la Corte costituzionale possa riesaminare nel merito la valutazione della Camera: il controllo, in sede di conflitto di attribuzione, è limitato ai vizi in procedendo.",
        why: "Competente a pronunciarsi sull'insindacabilità è la Camera di appartenenza; la sua deliberazione preclude l'intervento dell'autorità giudiziaria ed è sottoposta al controllo della Corte costituzionale, in sede di conflitto di attribuzione, solo in relazione ai vizi in procedendo.",
        fonte: "Marinucci·Dolcini·Gatta, PG — L'immunità parlamentare"
      },
      {
        q: "L'immunità funzionale dei consoli non opera per i reati puniti con:",
        opts: [
          "La reclusione superiore a cinque anni",
          "Qualunque pena detentiva, anche minima",
          "La reclusione superiore a dieci anni o l'ergastolo",
          "Pene pecuniarie superiori a una determinata soglia"
        ],
        correct: 0,
        difficulty: 5,
        commonError: "Equiparare la posizione dei consoli a quella degli agenti diplomatici, la cui immunità funzionale non incontra tale limite edittale.",
        why: "Per i consoli, i loro familiari e il personale dei consolati l'immunità copre le sole condotte realizzate nell'esercizio delle funzioni che non integrino reati puniti con la reclusione superiore a cinque anni: è una copertura più ristretta di quella diplomatica.",
        fonte: "Marinucci·Dolcini·Gatta, PG — Le immunità di diritto internazionale"
      }
    ],
    veroFalso: [
      {
        aff: "I consiglieri regionali godono di un'immunità identica a quella dei parlamentari, compresa l'inviolabilità della persona.",
        vero: false,
        traccia: "Falso. Ex art. 122, co. 4, Cost. i consiglieri regionali godono di un'immunità analoga alla sola insindacabilità dei parlamentari (art. 68, co. 1), ma con esclusione delle garanzie dei commi 2 e 3 dell'art. 68 Cost., cioè dell'inviolabilità della persona, del domicilio e della corrispondenza."
      },
      {
        aff: "L'immunità sostanziale opera in relazione ai fatti compiuti e perdura anche dopo la cessazione della carica.",
        vero: true,
        traccia: "Vero. Le immunità sostanziali operano in relazione ai fatti compiuti e perdurano dopo la cessazione della condizione personale che le ha legittimate; quelle processuali, invece, sono esenzioni dalla giurisdizione operanti solo finché il soggetto conserva la qualità, e possono essere relative (singoli atti) o assolute (intero procedimento)."
      },
      {
        aff: "Secondo Corte cost. n. 104/2024, le dichiarazioni dei parlamentari sui social media sono coperte dall'art. 68, co. 1, Cost. solo se connesse alla funzione e rispettose della dignità dei terzi.",
        vero: true,
        traccia: "Vero. Corte cost., 11 aprile 2024, n. 104 ha ritenuto applicabile l'insindacabilità alle dichiarazioni rese sui social media da deputati e senatori a condizione che siano connesse all'esercizio della funzione parlamentare e improntate al rispetto della dignità dei terzi."
      }
    ],
    aperta: {
      q: "Il candidato illustri i limiti personali all'efficacia della legge penale, soffermandosi sulle immunità di diritto pubblico interno e di diritto internazionale e sulla loro natura giuridica.",
      traccia:
        "L'art. 3 c.p. sancisce l'obbligatorietà della legge penale per tutti coloro che si trovano nel territorio dello Stato, salve le eccezioni del diritto pubblico interno e del diritto internazionale: le immunità, ipotesi eterogenee accomunate dall'esenzione dal potere coercitivo statale, classificabili in assolute o relative, funzionali o extrafunzionali, sostanziali o processuali, interne o internazionali. Nel diritto interno: il Presidente della Repubblica è immune per i reati funzionali, salvo alto tradimento e attentato alla Costituzione (art. 90 Cost.); i parlamentari godono di insindacabilità per opinioni e voti nell'esercizio delle funzioni, delimitata dal nesso funzionale elaborato dalla Corte costituzionale (sentt. nn. 10 e 11/2000; n. 104/2024 per i social), e di inviolabilità (art. 68 Cost.); prerogative circoscritte spettano a consiglieri regionali, giudici costituzionali e componenti del CSM, mentre i ministri soggiacciono all'art. 96 Cost. Nel diritto internazionale: immunità assoluta del Capo di Stato estero e del Pontefice, funzionale per Capi di Governo, ministri e diplomatici. Sulla natura giuridica, alla tesi monistica si contrappone quella pluralistica, oggi maggioritaria: le immunità funzionali interne come scriminanti ex art. 51 c.p., quelle internazionali come cause di non punibilità o limiti alla giurisdizione.",
      fonte: "Marinucci·Dolcini·Gatta, PG — Le immunità"
    },
    consigliate: ["mappa", "flashcards", "comparativa", "aperta", "mcq"],
    media: {
      podcast: {
        title: "Le immunità penali: chi sfugge alla legge penale e perché",
        chapters: [
          ["Obbligatorietà della legge penale e classificazioni", 0],
          ["Le immunità di diritto pubblico interno", 300],
          ["Le immunità di diritto internazionale", 640],
          ["La natura giuridica delle immunità", 920]
        ]
      },
      mappa: true
    }
  }
];
