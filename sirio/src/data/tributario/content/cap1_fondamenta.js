/* =========================================================================
   SIRIO — DIRITTO TRIBUTARIO · Capitolo 1: Le fondamenta: fiscalità e tributi.
   Fonte: Loconte, Manuale di diritto tributario — capp. 1 e 2 (dispensa corso
   LUM, pagg. 3-6, con glossario pagg. 1-2). Nessuna integrazione esterna.
   ========================================================================= */

export const TRIB_CAP1 = [
  {
    id: "fiscalita",
    part: "generale",
    chapter: 1,
    chapterTitle: "Le fondamenta: fiscalità e tributi",
    title: "Il ruolo della fiscalità e il diritto tributario",
    subtitle: "Perché esistono le tasse, cos'è il diritto tributario, l'obbligazione tributaria, soggetto attivo e passivo",
    articoli: ["art. 53 Cost.", "art. 23 Cost."],
    pages: [3, 3],
    depth: "std",
    layers: {
      essenziale:
        "Perché esistono le tasse? Risposta semplice: <strong>lo Stato spende soldi per tutti noi</strong> — strade, ospedali, scuole, giudici, polizia — e quei soldi deve prenderli da qualche parte. La fonte principale sono i <strong>tributi</strong>. Esempio concreto: per tenere aperto un ospedale servono milioni di euro l'anno; nessun privato pagherebbe da solo, quindi lo Stato raccoglie un po' da ciascuno. La funzione principale della fiscalità è proprio questa: <em>procurare le entrate</em> che servono a coprire la spesa pubblica; funzione secondaria è ripartire il carico fiscale in modo equo tra i cittadini. Il <strong>diritto tributario</strong> è l'insieme delle regole su questo prelievo: disciplina le entrate tributarie, il rapporto tra il Fisco (l'amministrazione finanziaria, cioè gli uffici dello Stato che gestiscono i tributi) e il contribuente, l'attuazione del tributo (accertamento e riscossione) e la tutela del cittadino. Al centro c'è l'<strong>obbligazione tributaria</strong>: un rapporto giuridico tra un creditore e un debitore che ha per oggetto il pagamento di una somma di denaro. Nasce <em>ex lege</em> (cioè direttamente dalla legge, non da un accordo) quando si verifica un presupposto di fatto — che non è mai un illecito — e il suo gettito finanzia la spesa pubblica. Il <strong>soggetto attivo</strong> è l'ente impositore creditore (Stato, regioni, province, comuni); il <strong>soggetto passivo</strong> è il debitore, cioè il <em>contribuente</em>. Tre caratteristiche del tributo: <strong>coattività</strong> (lo si paga per obbligo di legge, non per scelta), <strong>prestazione patrimoniale pecuniaria</strong> (esce denaro dal patrimonio del privato), <strong>funzione fiscale</strong> (serve a finanziare la spesa pubblica).",
      approfondimenti: [
        {
          label: "Perché lo Stato può obbligarci a pagare",
          body:
            "In base a che titolo lo Stato pretende i tributi? Perché è <strong>sovrano</strong>: ci obbliga a pagare prima con una legge che istituisce il tributo e, se non paghiamo, con l'azione coercitiva (può arrivare a pignorare i nostri beni). È la coattività: il tributo nasce direttamente o indirettamente dalla legge, in maniera autoritaria, anche contro la volontà del privato. Non è un contratto: nessuno ci chiede il consenso. La motivazione di fondo è pratica: lo Stato ha bisogno di far funzionare il suo apparato (strade, infrastrutture, servizi)."
        },
        {
          label: "Bisogni individuali, collettivi e servizi pubblici",
          body:
            "I bisogni si dividono in <strong>individuali</strong> (li soddisfo da solo: la spesa al supermercato) e <strong>collettivi</strong>. Lo Stato si fa carico dei bisogni collettivi quando sono funzioni essenziali (ordine pubblico, difesa esterna), quando i costi di produzione e gestione sono elevati, o quando sono <em>bisogni di merito</em> legati al benessere della comunità (sanità, istruzione). Li soddisfa con i <strong>servizi pubblici</strong>: generali o indivisibili (a vantaggio indiscriminato della collettività, come l'amministrazione della giustizia o la tutela dell'ambiente), speciali o divisibili (per il soddisfacimento dei singoli utenti, come treni e poste) e misti."
        },
        {
          label: "Cosa studia esattamente il diritto tributario",
          body:
            "Il diritto tributario è il complesso di norme che disciplinano il rapporto tra soggetto attivo e passivo, dalla nascita all'attuazione, più i rapporti e le situazioni connessi o derivati. Contiene norme <strong>sostanziali</strong> (impositrici e agevolatrici: chi paga, quanto, chi ha sconti), <strong>sanzionatorie</strong> (cosa succede a chi viola le regole) e <strong>procedurali</strong>, amministrative e giurisdizionali (come il Fisco controlla e come il contribuente si difende)."
        },
        {
          label: "Le relazioni con gli altri rami del diritto",
          body:
            "Il diritto tributario non vive isolato: dal <strong>diritto amministrativo</strong> ha recepito principi soprattutto nella fase di attuazione del prelievo; dal <strong>diritto costituzionale</strong> prende i principi cardine (su tutti l'art. 53 Cost.); dal <strong>diritto privato</strong> attinge per individuare il presupposto (cittadinanza, compravendita); con il <strong>diritto penale</strong> dialoga in tema di reati tributari e illeciti; con il <strong>processuale civile</strong> per il processo tributario e la riscossione coattiva; e ha legami crescenti con il diritto dell'UE e internazionale."
        }
      ],
      giurisprudenza: [
        {
          label: "Il presupposto non è mai un illecito",
          body:
            "Un punto fermo della materia: l'obbligazione tributaria sorge al verificarsi di un <strong>presupposto di fatto che non è mai un illecito</strong>. Il tributo non è una punizione: la multa è una prestazione patrimoniale di carattere sanzionatorio, non un tributo. Il presupposto è sempre un fatto <em>economicamente apprezzabile</em>, perché la legge tributaria deve agganciarsi a una manifestazione di capacità contributiva, cioè di ricchezza."
        },
        {
          label: "Capacità contributiva come aggancio economico",
          body:
            "Il criterio che regge il sistema è la <strong>capacità contributiva</strong> (art. 53 Cost.): la legge può chiedere un tributo solo agganciandolo a una manifestazione economica. Esempi dalla dispensa: il possesso di un immobile fa scattare l'IMU, il possesso di un reddito fa scattare l'IRPEF. Senza un fatto che esprima ricchezza, il prelievo non si giustifica."
        }
      ],
      eccezioni: [
        {
          label: "Si paga in denaro… con un'eccezione curiosa",
          body:
            "La prestazione tributaria è pecuniaria: si paga in denaro. La dispensa segnala però l'<strong>unica eccezione</strong>: il pagamento delle imposte <strong>in opere d'arte</strong>. È un caso limite da ricordare: fuori da questa ipotesi, i tributi non si saldano con beni o servizi."
        },
        {
          label: "Federalismo fiscale: non solo lo Stato incassa",
          body:
            "Errore comune: pensare che solo lo Stato possa riscuotere tributi. Con il <strong>federalismo fiscale</strong> la capacità di riscuotere tributi può essere attribuita a soggetti diversi dallo Stato: regioni, province e comuni sono anch'essi possibili soggetti attivi (pensa all'IMU, incassata dal comune)."
        }
      ]
    },
    sintesi: [
      "Le tasse esistono per finanziare la spesa pubblica dello Stato.",
      "Il diritto tributario regola imposizione, attuazione dei tributi e rapporto Fisco-contribuente.",
      "L'obbligazione tributaria nasce ex lege da un presupposto che non è mai un illecito.",
      "Tre caratteri del tributo: coattività, prestazione pecuniaria, funzione fiscale.",
      "Soggetto attivo: ente impositore creditore; soggetto passivo: il contribuente debitore.",
      "Federalismo fiscale: anche regioni, province e comuni possono riscuotere tributi."
    ],
    esempi: [
      {
        titolo: "Lo stipendio di Marco e l'ospedale sotto casa",
        testo:
          "Marco guadagna <strong>30.000 € l'anno</strong> come impiegato. Ogni mese una parte dello stipendio gli viene trattenuta come IRPEF. Marco non ha firmato alcun contratto con lo Stato: l'obbligo nasce <em>direttamente dalla legge</em> (coattività), perché Marco possiede un reddito, cioè manifesta capacità contributiva. Con quei soldi — insieme a quelli di milioni di altri contribuenti — lo Stato paga l'ospedale del suo quartiere, le strade che percorre, i giudici del tribunale. Ecco l'obbligazione tributaria in azione: Marco è il soggetto passivo (contribuente-debitore), lo Stato è il soggetto attivo (creditore), l'oggetto è una somma di denaro e il gettito finanzia la spesa pubblica. Se Marco non pagasse, lo Stato potrebbe agire in via coercitiva, fino a pignorargli i beni."
      },
      {
        titolo: "L'appartamento di Maria e il comune",
        testo:
          "Maria possiede un <strong>appartamento dato in affitto</strong>. Il possesso dell'immobile è il presupposto che fa scattare l'IMU: un fatto economico (avere una casa), mai un illecito. Ma attenzione: il creditore qui non è lo Stato centrale, bensì il <em>comune</em> dove si trova l'appartamento. È un esempio di <strong>federalismo fiscale</strong>: la facoltà di attribuire a un soggetto diverso dallo Stato — regioni, province, comuni — la capacità di riscuotere tributi. Maria è comunque soggetto passivo di un'obbligazione tributaria con tutte le caratteristiche viste: nasce dalla legge (non dalla sua volontà), consiste nel pagare denaro, e il gettito finanzia i servizi del suo comune, dall'illuminazione delle strade alla manutenzione dei parchi."
      }
    ],
    flashcards: [
      ["Cos'è l'obbligazione tributaria?", "Rapporto giuridico tra soggetto attivo e passivo avente ad oggetto una prestazione pecuniaria; nasce ex lege da un presupposto di fatto (mai un illecito) e il gettito finanzia la spesa pubblica."],
      ["Quali sono le tre caratteristiche del tributo?", "Coattività (nasce dalla legge, in via autoritaria), prestazione patrimoniale pecuniaria (depauperamento del privato) e funzione fiscale (finanziare la spesa pubblica)."],
      ["Chi è il soggetto attivo del rapporto tributario?", "L'ente impositore creditore dell'obbligazione: lo Stato o un ente pubblico come regioni, province e comuni."],
      ["Chi è il soggetto passivo?", "Il debitore dell'obbligazione tributaria, cioè il contribuente."],
      ["Cos'è il federalismo fiscale?", "La facoltà di attribuire a un soggetto diverso dallo Stato (regioni, province, comuni) la capacità di riscuotere tributi."],
      ["Qual è la funzione principale della fiscalità?", "Reperire un flusso di entrate per soddisfare i bisogni della collettività; funzione secondaria è l'equa ripartizione del carico fiscale."]
    ],
    comparativa: {
      titolo: "Soggetto attivo vs Soggetto passivo",
      a: "Soggetto attivo",
      b: "Soggetto passivo",
      righe: [
        { profilo: "Chi è", a: "L'ente impositore: Stato o ente pubblico (regioni, province, comuni)", b: "Il contribuente: la persona o l'ente che deve pagare" },
        { profilo: "Posizione nel rapporto", a: "Creditore dell'obbligazione tributaria", b: "Debitore dell'obbligazione tributaria" },
        { profilo: "Cosa fa", a: "Impone e riscuote il tributo, anche in via coercitiva", b: "Paga la somma dovuta al verificarsi del presupposto" },
        { profilo: "Esempio", a: "Il comune che incassa l'IMU sull'appartamento di Maria", b: "Maria, proprietaria dell'appartamento" }
      ]
    },
    quiz: [
      {
        q: "Qual è la funzione principale della fiscalità?",
        opts: [
          "Reperire le entrate necessarie a soddisfare i bisogni della collettività",
          "Punire i comportamenti illeciti dei cittadini con prelievi mirati",
          "Redistribuire il patrimonio dello Stato ai privati più bisognosi",
          "Regolare i contratti tra privati e pubblica amministrazione"
        ],
        correct: 0,
        difficulty: 1,
        commonError: "Confondere il tributo con la sanzione: il tributo serve a finanziare la spesa pubblica, non a punire.",
        why: "La funzione principale della fiscalità è procurare un flusso di entrate atte a soddisfare i bisogni della collettività; funzione secondaria è l'equa ripartizione del carico fiscale. Può inoltre essere impiegata per obiettivi macroeconomici.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 1"
      },
      {
        q: "L'obbligazione tributaria sorge:",
        opts: [
          "Da un contratto stipulato tra il Fisco e il contribuente",
          "Da un provvedimento discrezionale dell'amministrazione",
          "Ex lege, al verificarsi di un presupposto di fatto",
          "Dalla commissione di un illecito da parte del privato"
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Pensare che serva un accordo o un atto discrezionale: l'obbligazione nasce direttamente dalla legge.",
        why: "L'obbligazione tributaria nasce ex lege al verificarsi di un presupposto di fatto, che non è mai un illecito. Non c'è alcun accordo: è un'obbligazione coattiva, imposta in via autoritaria.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 1"
      },
      {
        q: "Quale tra questi NON è un carattere distintivo del tributo?",
        opts: [
          "La coattività della prestazione",
          "La natura pecuniaria della prestazione",
          "La funzione di finanziamento della spesa pubblica",
          "La volontarietà dell'adesione del contribuente"
        ],
        correct: 3,
        difficulty: 1,
        commonError: "Dimenticare che il tributo prescinde dalla volontà del privato: si paga anche contro la propria volontà.",
        why: "I tre caratteri del tributo sono coattività, prestazione patrimoniale pecuniaria e funzione fiscale. La volontarietà è esattamente il contrario della coattività: il tributo è imposto dalla legge.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 1"
      },
      {
        q: "Il federalismo fiscale consiste:",
        opts: [
          "Nel divieto per gli enti locali di istituire tributi propri",
          "Nella facoltà di attribuire a un soggetto diverso dallo Stato la capacità di riscuotere tributi",
          "Nell'obbligo dello Stato di trasferire tutto il gettito alle regioni",
          "Nella possibilità per il contribuente di scegliere a quale ente pagare"
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Confondere il federalismo fiscale con un semplice trasferimento di fondi dallo Stato agli enti locali.",
        why: "Il federalismo fiscale è la facoltà di attribuire a un soggetto che non sia lo Stato (regioni, comuni, province) la capacità di riscuotere tributi: questi enti diventano soggetti attivi del rapporto tributario.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 1"
      },
      {
        q: "Il presupposto dell'imposta è:",
        opts: [
          "Un illecito amministrativo commesso dal contribuente",
          "Qualsiasi comportamento del privato, anche privo di rilievo economico",
          "Un fatto espressivo di capacità contributiva al cui verificarsi la legge collega l'obbligo di pagare",
          "Un atto discrezionale con cui il Fisco individua i debitori"
        ],
        correct: 2,
        difficulty: 3,
        commonError: "Ritenere che il presupposto possa essere un illecito: non lo è mai, altrimenti si tratterebbe di una sanzione.",
        why: "Il presupposto è un fatto espressivo di capacità contributiva (es. possesso di un immobile per l'IMU, possesso di un reddito per l'IRPEF) al verificarsi del quale la legge collega l'obbligo di pagare l'imposta.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 1"
      },
      {
        q: "Nella fase di attuazione del prelievo, il diritto tributario ha recepito alcuni principi soprattutto dal:",
        opts: [
          "Diritto amministrativo",
          "Diritto penale",
          "Diritto internazionale privato",
          "Diritto del lavoro"
        ],
        correct: 0,
        difficulty: 4,
        commonError: "Indicare il diritto penale, che rileva invece per i reati tributari e gli illeciti.",
        why: "Il diritto tributario vanta relazioni con più rami: dal diritto amministrativo ha recepito principi soprattutto nella fase di attuazione del prelievo; dal costituzionale i principi cardine; dal penale la disciplina dei reati tributari.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 1"
      },
      {
        q: "I servizi pubblici generali o indivisibili sono quelli:",
        opts: [
          "Erogati solo su richiesta del singolo utente, come i servizi postali",
          "Resi a vantaggio indiscriminato della collettività, come l'amministrazione della giustizia",
          "Prestati dallo Stato dietro pagamento di un corrispettivo di mercato",
          "Riservati per legge ai soli cittadini che pagano più imposte"
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Scambiare i servizi generali con quelli speciali, che soddisfano invece i singoli utenti (es. treni e poste).",
        why: "I servizi generali o indivisibili avvantaggiano indiscriminatamente la collettività (amministrazione della giustizia, tutela dell'ambiente); quelli speciali soddisfano i singoli utenti (servizi ferroviari o postali); esistono poi i servizi misti.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 1"
      }
    ],
    veroFalso: [
      {
        aff: "Il presupposto dell'obbligazione tributaria può essere anche un illecito.",
        vero: false,
        traccia: "Falso. Il presupposto è un fatto di rilievo economico, espressivo di capacità contributiva, e non è mai un illecito: se il pagamento fosse collegato a un illecito saremmo di fronte a una sanzione (es. una multa), non a un tributo."
      },
      {
        aff: "Il soggetto attivo dell'obbligazione tributaria può essere anche un comune.",
        vero: true,
        traccia: "Vero. Il soggetto attivo è l'ente impositore creditore: oltre allo Stato possono esserlo regioni, province e comuni. È il federalismo fiscale: la capacità di riscuotere tributi può essere attribuita a soggetti diversi dallo Stato."
      },
      {
        aff: "Il tributo nasce da un accordo tra Stato e contribuente.",
        vero: false,
        traccia: "Falso. Il tributo è coattivo: nasce direttamente o indirettamente dalla legge, in via autoritaria, e prescinde dalla volontà del privato. Lo Stato lo impone in quanto sovrano e può ottenerne il pagamento anche in via coercitiva."
      }
    ],
    aperta: {
      q: "Il candidato illustri la nozione di obbligazione tributaria e i caratteri distintivi del tributo.",
      traccia:
        "L'obbligazione tributaria è il rapporto giuridico tra soggetto attivo e soggetto passivo avente ad oggetto una prestazione pecuniaria: sorge ex lege al verificarsi di un presupposto di fatto, che non è mai un illecito, e il suo gettito è destinato a finanziare la spesa pubblica. Il soggetto attivo è l'ente impositore creditore (Stato o enti pubblici territoriali, secondo la logica del federalismo fiscale); il soggetto passivo è il contribuente, debitore. Il tributo presenta tre caratteri distintivi. Quanto alla fonte, la coattività: nasce direttamente o indirettamente dalla legge, in via autoritaria, senza che la volontà del privato vi concorra. Quanto al contenuto, è una prestazione patrimoniale di natura pecuniaria, cui consegue un depauperamento del patrimonio del privato a favore della collettività. Quanto alla finalità, ha una primaria funzione fiscale, atteggiandosi a preminente fonte di finanziamento della spesa pubblica. Il diritto tributario disciplina questo rapporto dalla nascita all'attuazione, con norme sostanziali, sanzionatorie e procedurali.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 1"
    },
    consigliate: ["mappa", "flashcards", "mcq", "esempi"],
    media: {
      podcast: {
        title: "Perché paghiamo le tasse: fiscalità e diritto tributario",
        chapters: [
          ["Spesa pubblica e bisogni collettivi", 0],
          ["L'obbligazione tributaria e i caratteri del tributo", 220],
          ["Soggetto attivo, soggetto passivo e federalismo fiscale", 460],
          ["Cosa studia il diritto tributario", 650]
        ]
      },
      mappa: true
    }
  },
  {
    id: "tributi",
    part: "generale",
    chapter: 1,
    chapterTitle: "Le fondamenta: fiscalità e tributi",
    title: "I tributi: imposta, tassa, contributo e le aliquote",
    subtitle: "Le entrate dello Stato, le specie di tributo, imposte dirette e indirette, aliquote proporzionali, progressive e regressive",
    articoli: ["art. 53 Cost.", "art. 53, co. 2, Cost.", "art. 43 Cost.", "d.l. 201/2011 (IVIE)"],
    pages: [4, 6],
    depth: "deep",
    layers: {
      essenziale:
        "Lo Stato incassa soldi da molte fonti. Le <strong>entrate di diritto privato</strong> nascono da rapporti contrattuali o comunque privatistici; le <strong>entrate di diritto pubblico</strong> da rapporti autoritativi: multe, prestiti forzosi, prestazioni parafiscali (Inps, Inail), espropriazioni di pubblica utilità e — soprattutto — i <strong>tributi</strong>. Il tributo è una prestazione patrimoniale coattiva che lo Stato impone in via autoritativa: si paga per legge, in denaro, per finanziare la spesa pubblica. Attenzione: <em>tributo</em> è il genere; al suo interno stanno imposta, tassa e contributo. L'<strong>imposta</strong> è una prestazione a fondo perduto dovuta in base alla propria <em>capacità contributiva</em> (in parole semplici: la propria ricchezza), per ripartire le spese pubbliche: pago l'IRPEF perché ho un reddito, non perché ricevo un servizio in cambio. Finanzia i servizi <em>indivisibili</em> (difesa, ordine pubblico), quelli di cui godiamo tutti insieme in quanto cittadini. La <strong>tassa</strong> invece si paga in occasione di un servizio pubblico o di una funzione pubblica che riguarda proprio me: la tassa per il rilascio o rinnovo del passaporto, quella per il porto d'armi. Finanzia i servizi <em>divisibili</em>, fruibili individualmente (come treni e poste). Il <strong>contributo</strong> sta a metà: si paga per un'opera destinata alla comunità da cui però un gruppo di soggetti trae un vantaggio particolare. Le imposte si dividono in <strong>dirette</strong> (colpiscono manifestazioni dirette di ricchezza: reddito, patrimonio — IRPEF, IRES) e <strong>indirette</strong> (colpiscono manifestazioni indirette: consumi e atti — IVA, imposta di registro, successioni, dazi). Infine l'<strong>aliquota</strong>: la percentuale che, applicata alla <em>base imponibile</em>, dà l'imposta dovuta. Esempio con i numeri della dispensa: reddito 100, IRPEF al 20% = <strong>20 di imposta</strong>. L'aliquota può essere <strong>proporzionale</strong> (fissa: IRES al 24%, IVA), <strong>progressiva</strong> (cresce al crescere della ricchezza: IRPEF) o <strong>regressiva</strong> (pesa meno al crescere della base: l'imposta fissa, come il bollo bancario).",
      approfondimenti: [
        {
          label: "L'imposta da vicino: gli elementi",
          body:
            "L'imposta è un'obbligazione ex lege, coattiva, <em>sganciata da qualsiasi corrispettività</em> (rapporto non sinallagmatico: non ricevo nulla di specifico in cambio). I suoi elementi: <strong>fonte di legittimazione</strong> = la sovranità statale; <strong>causa legis</strong> = procurare un'entrata allo Stato; <strong>funzione specifica</strong> = procacciare risorse ripartendo la spesa pubblica; <strong>titolo giustificativo</strong> = la capacità contributiva ex art. 53 Cost. È un'obbligazione di riparto: ogni contribuente è debitore di una quota insieme a tutti gli altri. Da qui l'<strong>indisponibilità</strong>: il creditore tributario non può rinunciare al credito erariale. Soggetto attivo è l'amministrazione finanziaria (Agenzia delle entrate, Catasto), diversa dalla pubblica amministrazione in generale."
        },
        {
          label: "La classificazione delle imposte",
          body:
            "Oltre a dirette/indirette: <strong>personali</strong> (legate alla situazione del soggetto, tipicamente dirette) e <strong>reali</strong> (colpiscono il fatto in sé: l'IVA non varia in base a chi compra); <strong>istantanee</strong> (presupposto in un atto o fatto definito nel tempo) e <strong>periodiche</strong> (arco temporale prolungato); <strong>erariali</strong> (dello Stato) e <strong>locali</strong> (di regioni, province, comuni); <strong>surrogatorie</strong> (sostituiscono più tributi collegati a uno specifico atto, come l'ex imposta sui contratti di borsa) e <strong>sostitutive</strong> (regime fiscale speciale che deroga all'ordinario, es. il regime forfettario); <strong>addizionali</strong> (imposta aggiuntiva a una esistente) e <strong>sovrimposte</strong> (si sovrappongono a un tributo esistente); infine progressive, proporzionali e fisse in base all'iter di calcolo del quantum."
        },
        {
          label: "Le aliquote progressive: quattro tecniche",
          body:
            "La progressività (l'aliquota cresce al crescere della base imponibile) realizza l'uguaglianza sostanziale e il criterio dell'art. 53, co. 2, Cost.: all'aumentare della ricchezza aumenta la percentuale contributiva. Si attua: <strong>per detrazione</strong> (aliquota fissa, ma prima di applicarla ogni reddito è diminuito di un importo fisso Y); <strong>per classi</strong> (a ogni classe di reddito un'aliquota proporzionale: da 10 a 20 il 20%, da 20 a 40 il 30%…); <strong>per scaglioni</strong> (sistema adottato ai fini IRPEF, che evita gli inconvenienti delle classi: a ogni scaglione un'aliquota crescente); <strong>continua</strong> (definita da una formula matematica, con aumento graduale dell'aliquota marginale a ogni variazione dell'imponibile)."
        },
        {
          label: "Il monopolio fiscale",
          body:
            "Lo Stato può riservarsi in via esclusiva un'attività economica (legittimamente, in forza dell'art. 43 Cost.), con divieto per gli altri di esercitarla. C'è <strong>monopolio fiscale</strong> quando al consumatore del bene o servizio in privativa viene imposta una prestazione pecuniaria coattiva <em>inclusa nel prezzo di vendita</em>: la prestazione diventa un vero tributo che alimenta il bilancio pubblico. In Italia i monopoli fiscali riguardano: la lavorazione dei prodotti a base di tabacco, il gioco del lotto e le lotterie nazionali, i giochi di abilità e i concorsi pronostici."
        }
      ],
      giurisprudenza: [
        {
          label: "Tassa senza corrispettivo: il punto delicato",
          body:
            "Principio consolidato ribadito dalla dispensa: la tassa deriva dall'erogazione di un pubblico servizio ma <strong>non ne rappresenta il corrispettivo</strong>. Non c'è interdipendenza tra tassa e costo del servizio, né un vero scambio di utilità o prestazioni: si può essere tenuti al pagamento <em>anche se il servizio non è stato richiesto o non ci si è avvantaggiati</em> della sua fruizione. È questo che distingue la tassa dal prezzo pagato a un privato."
        },
        {
          label: "L'IVIE: un'imposta proporzionale di fonte recente",
          body:
            "Il d.l. 201/2011 ha introdotto l'<strong>IVIE</strong>, imposta sul valore degli immobili detenuti all'estero: colpisce in misura <em>proporzionale</em> il costo d'acquisto oppure il valore di mercato dell'immobile estero. È l'esempio, citato dalla dispensa, di come il legislatore continui a servirsi di aliquote proporzionali accanto a IRES (24%), IVA e imposta di registro."
        }
      ],
      eccezioni: [
        {
          label: "Non chiamare \"tasse\" le imposte",
          body:
            "Errore da evitare all'esame: nel linguaggio comune \"tasse\" indica tutto, ma tecnicamente <strong>tributo</strong> è il genere e al suo interno stanno imposte e tasse. L'IRPEF è un'<em>imposta</em>, non una tassa: si paga per la propria ricchezza, non per un servizio ricevuto. La tassa presuppone una pubblica funzione o un servizio che riguarda il singolo (passaporto, porto d'armi)."
        },
        {
          label: "L'imposta fissa è regressiva",
          body:
            "Caso limite: l'aliquota <strong>regressiva</strong> diminuisce all'aumentare della base imponibile — l'ammontare cresce in misura meno che proporzionale. L'esempio della dispensa è l'<em>imposta fissa</em>, come le spese di bollo bancario, identiche per tutti: in proporzione pesano molto di più su chi ha poco. Lo stesso bollo incide di più su un conto da 6.000 € che su uno da 600.000 €."
        }
      ]
    },
    sintesi: [
      "Entrate dello Stato: di diritto privato (contrattuali) e di diritto pubblico (autoritative).",
      "Tributo = genere; le specie sono imposta, tassa e contributo.",
      "Imposta: prestazione a fondo perduto in base alla capacità contributiva; finanzia servizi indivisibili.",
      "Tassa: dovuta per un servizio o funzione pubblica che riguarda il singolo; non è un corrispettivo.",
      "Imposte dirette colpiscono reddito e patrimonio; indirette consumi e atti (IVA, registro).",
      "Aliquote: proporzionali (IRES 24%, IVA), progressive (IRPEF a scaglioni), regressive (imposte fisse)."
    ],
    esempi: [
      {
        titolo: "Giulia, il passaporto e l'IRPEF: tassa vs imposta",
        testo:
          "Giulia guadagna <strong>28.000 € l'anno</strong>. A giugno paga l'IRPEF: è un'<strong>imposta</strong>, dovuta in base alla sua ricchezza (capacità contributiva), a fondo perduto, senza ricevere in cambio un servizio specifico; con quei soldi lo Stato finanzia difesa, ordine pubblico e gli altri servizi indivisibili di cui tutti godiamo. A luglio Giulia chiede il rilascio del passaporto per un viaggio: qui paga una <strong>tassa</strong>, perché lo Stato esercita una pubblica funzione che riguarda proprio lei. Attenzione però: quella tassa non è il \"prezzo\" del passaporto — non c'è interdipendenza con il costo del servizio, non è uno scambio di utilità come al negozio. Stessa logica per la tassa sul porto d'armi: si paga in occasione di un'attività pubblica rivolta al singolo, non come corrispettivo di mercato."
      },
      {
        titolo: "Il sig. Rossi e le tre aliquote",
        testo:
          "Il sig. Rossi ha una piccola società e un reddito personale. La società paga l'<strong>IRES al 24%</strong>: aliquota <em>proporzionale</em>, percentuale fissa qualunque sia l'utile — su 100.000 € paga 24.000 €, su 200.000 € paga 48.000 € (esattamente il doppio). Sul reddito personale Rossi paga invece l'<strong>IRPEF</strong>, <em>progressiva per scaglioni</em>: l'aliquota cresce al crescere del reddito. Per capire, guarda l'esempio della dispensa sulla progressività per classi: da 10 a 20 il 20%, da 20 a 40 il 30%; il sistema per scaglioni, adottato ai fini IRPEF, evita però l'inconveniente del salto brusco tipico delle classi, perché a ogni scaglione corrisponde un'aliquota che cresce con lo scaglione stesso. Infine, sul conto corrente Rossi paga il <strong>bollo bancario</strong>, uguale per tutti: un'imposta fissa, quindi di fatto <em>regressiva</em>, perché pesa in proporzione più sui patrimoni piccoli."
      }
    ],
    flashcards: [
      ["Cos'è l'imposta?", "Prestazione a fondo perduto imposta al soggetto in base alla sua capacità contributiva, al fine di ripartire le spese pubbliche. Finanzia i servizi indivisibili."],
      ["Cos'è la tassa?", "Prestazione pecuniaria dovuta dal singolo a fronte di uno specifico servizio erogato dall'ente nei suoi confronti o di una funzione pubblica che lo riguarda. Non è il corrispettivo del servizio."],
      ["Cos'è il contributo?", "Prestazione pecuniaria obbligatoria legata a un beneficio individuale che il singolo trae da un'attività amministrativa destinata alla comunità: presupposto complesso, a metà tra imposta e tassa."],
      ["Che differenza c'è tra imposte dirette e indirette?", "Le dirette colpiscono presupposti direttamente espressivi di capacità contributiva (IRPEF, IRES); le indirette una manifestazione indiretta (imposte sui consumi, registro, successioni, dazi doganali)."],
      ["Cos'è l'aliquota e come si calcola l'imposta?", "È il tasso d'imposta (%): applicata alla base imponibile dà il quantum dovuto. Esempio: reddito 100, aliquota 20% = imposta 20."],
      ["Come può attuarsi la progressività?", "Per detrazione (importo fisso sottratto prima dell'aliquota fissa), per classi, per scaglioni (sistema IRPEF) o in forma continua (formula matematica)."]
    ],
    comparativa: {
      titolo: "Imposta vs Tassa",
      a: "Imposta",
      b: "Tassa",
      righe: [
        { profilo: "Fonte dell'obbligazione", a: "Legge", b: "Legge" },
        { profilo: "Funzione", a: "Riparto della spesa pubblica", b: "Scambio di utilità (ma senza vero corrispettivo)" },
        { profilo: "Tipologia di entrata", a: "Contributiva", b: "Commutativa" },
        { profilo: "Presupposto", a: "Manifestazione di capacità contributiva", b: "Fruizione di un servizio o di una pubblica funzione" },
        { profilo: "Parametro di commisurazione", a: "Capacità contributiva", b: "Costo sostenuto per l'erogazione" }
      ]
    },
    quiz: [
      {
        q: "Che rapporto c'è tra tributo, imposta e tassa?",
        opts: [
          "Sono tre termini perfettamente sinonimi tra loro",
          "Il tributo è il genere, imposta e tassa ne sono specie",
          "L'imposta è il genere che comprende tributi e tasse",
          "La tassa è il genere che comprende imposte e tributi"
        ],
        correct: 1,
        difficulty: 1,
        commonError: "Usare \"tassa\" come sinonimo generico: nel linguaggio tecnico la tassa è solo una specie di tributo.",
        why: "Si parla sempre di tributo come categoria generale: al suo interno stanno le imposte, le tasse e il contributo. L'IRPEF, ad esempio, è un'imposta e non una tassa.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 2"
      },
      {
        q: "L'imposta si distingue dalla tassa perché:",
        opts: [
          "È dovuta in relazione a un servizio pubblico erogato su richiesta",
          "Nasce da un contratto anziché direttamente dalla legge",
          "È dovuta in ragione della capacità contributiva, sganciata da ogni corrispettività",
          "Ha sempre importo fisso e identico per tutti i contribuenti"
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Invertire i presupposti: è la tassa, non l'imposta, a collegarsi alla fruizione di un servizio.",
        why: "L'imposta è un'entrata contributiva: prestazione a fondo perduto commisurata alla capacità contributiva (art. 53 Cost.), sganciata da rapporti di corrispettività. La tassa è invece un'entrata commutativa, dovuta in occasione di un servizio o di una pubblica funzione.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 2"
      },
      {
        q: "I servizi pubblici indivisibili (es. difesa, ordine pubblico) sono finanziati:",
        opts: [
          "Con le tasse pagate dai singoli utenti del servizio",
          "Con i contributi versati da gruppi determinati di soggetti",
          "Con le entrate di diritto privato dello Stato",
          "Con le imposte, prestazioni sganciate da rapporti di scambio"
        ],
        correct: 3,
        difficulty: 2,
        commonError: "Associare i servizi indivisibili alle tasse: le tasse finanziano invece i servizi divisibili, fruibili uti singuli.",
        why: "I servizi indivisibili sono fruibili uti cives, in quanto componenti della collettività, e sono finanziati con le imposte; i servizi divisibili (es. ferroviari o postali) sono finanziati con le tasse, dove il singolo utente corrisponde il costo del servizio.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 2"
      },
      {
        q: "Con una base imponibile di 100 e un'aliquota del 20%, l'imposta dovuta è:",
        opts: [
          "20",
          "80",
          "120",
          "5"
        ],
        correct: 0,
        difficulty: 1,
        commonError: "Sottrarre l'aliquota dalla base (100 − 20 = 80) invece di applicare la percentuale alla base imponibile.",
        why: "La base imponibile è il parametro di commisurazione del tributo: il valore su cui, applicando l'aliquota, si calcola l'imposta. Quindi 100 × 20% = 20, come nell'esempio del glossario della dispensa.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 2"
      },
      {
        q: "Quale di queste imposte ha un'aliquota proporzionale?",
        opts: [
          "L'IRPEF, calcolata per scaglioni di reddito",
          "L'IRES, con aliquota fissa del 24%",
          "Un'imposta con aliquota crescente al crescere dell'imponibile",
          "Un'imposta definita da una formula matematica ad aliquota marginale crescente"
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Indicare l'IRPEF, che è invece l'esempio tipico di imposta progressiva per scaglioni.",
        why: "L'aliquota proporzionale è una percentuale fissa, costante e indipendente dall'entità della base imponibile: sono proporzionali l'IRES (24%), l'IVA e l'imposta di registro. L'IRPEF è progressiva per scaglioni.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 2"
      },
      {
        q: "La progressività \"per detrazione\" si realizza:",
        opts: [
          "Applicando aliquote diverse a ciascuna classe di reddito",
          "Suddividendo il reddito in scaglioni con aliquote crescenti",
          "Colpendo l'imponibile con aliquota fissa, previa diminuzione di ogni reddito di un importo fisso",
          "Riducendo l'aliquota man mano che aumenta la base imponibile"
        ],
        correct: 2,
        difficulty: 4,
        commonError: "Confondere la detrazione con gli scaglioni: nella progressività per detrazione l'aliquota resta fissa.",
        why: "Nella progressività per detrazione si colpisce l'imponibile con un'aliquota fissa, ma prima di applicarla ogni reddito viene diminuito di un importo fisso: l'effetto complessivo è progressivo pur con aliquota costante.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 2"
      },
      {
        q: "Il contributo si caratterizza per un presupposto complesso perché:",
        opts: [
          "Richiede sia una legge sia un contratto con l'ente pubblico",
          "Riguarda un'opera destinata alla comunità da cui trae vantaggio un determinato gruppo di soggetti",
          "Si applica soltanto ai redditi superiori a una certa soglia",
          "Combina un'aliquota proporzionale con una progressiva"
        ],
        correct: 1,
        difficulty: 5,
        commonError: "Ridurre il contributo a una semplice tassa: si perde così il profilo del vantaggio della collettività.",
        why: "Il contributo somiglia all'imposta perché soddisfa esigenze della collettività e alla tassa perché comporta un vantaggio specifico: il presupposto complesso consiste in un'opera destinata in maniera indifferenziata alla comunità, ma di cui beneficia un gruppo determinato di soggetti.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 2"
      }
    ],
    veroFalso: [
      {
        aff: "La tassa rappresenta il corrispettivo del servizio pubblico ricevuto.",
        vero: false,
        traccia: "Falso. La tassa deriva dall'erogazione di un pubblico servizio ma non ne rappresenta il corrispettivo: non c'è interdipendenza tra tassa e costo del servizio, e si può essere tenuti al pagamento anche senza aver richiesto il servizio o essersene avvantaggiati."
      },
      {
        aff: "L'IVA e l'imposta di registro sono esempi di imposte con aliquota proporzionale.",
        vero: true,
        traccia: "Vero. L'aliquota proporzionale è una percentuale fissa, indipendente dall'entità della base imponibile: la dispensa indica come esempi l'IRES (24%), l'IVA e l'imposta di registro, oltre all'IVIE introdotta dal d.l. 201/2011."
      },
      {
        aff: "Il creditore tributario può liberamente rinunciare al credito erariale.",
        vero: false,
        traccia: "Falso. L'obbligazione d'imposta è indisponibile e irrinunciabile: essendo un'obbligazione di riparto delle spese pubbliche tra tutti i contribuenti, al creditore tributario è preclusa la possibilità di rinunciare al credito erariale."
      }
    ],
    aperta: {
      q: "Il candidato illustri le specie di tributo, soffermandosi sulla distinzione tra imposta e tassa.",
      traccia:
        "Il tributo è una prestazione patrimoniale coattiva, imposta in via autoritativa per finanziare la spesa pubblica; ne sono specie l'imposta, la tassa e il contributo. L'imposta è un'obbligazione ex lege sganciata da qualsiasi corrispettività: prestazione a fondo perduto dovuta in ragione della capacità contributiva (art. 53 Cost.), con funzione di riparto delle spese pubbliche; è un'entrata contributiva, che finanzia i servizi indivisibili, ed è indisponibile per il creditore. La tassa è invece un'entrata commutativa: prestazione dovuta all'ente pubblico in occasione dell'esercizio di una pubblica funzione (rilascio del passaporto o del porto d'armi) o dell'erogazione di un servizio pubblico, generalmente su richiesta; pur ispirata alla corrispettività, non rappresenta il corrispettivo del servizio, mancando interdipendenza con il suo costo. La differenza è radicata sul diverso presupposto impositivo: manifestazione di capacità contributiva per l'imposta, fruizione di un servizio o funzione pubblica per la tassa. Il contributo, infine, ha presupposto complesso: un'opera destinata alla comunità da cui un gruppo determinato trae vantaggio.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 2"
    },
    consigliate: ["comparativa", "flashcards", "mcq", "esempi", "mappa"],
    media: {
      podcast: {
        title: "Imposte, tasse e contributi: la cassetta degli attrezzi",
        chapters: [
          ["Le entrate dello Stato e il tributo", 0],
          ["L'imposta e le sue classificazioni", 240],
          ["La tassa e il contributo", 500],
          ["Le aliquote: proporzionali, progressive, regressive", 720]
        ]
      },
      mappa: true
    }
  }
];
