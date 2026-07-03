/* =========================================================================
   SIRIO — DIRITTO TRIBUTARIO · Capitolo 4: Dichiarazione, controlli e accertamento.
   Fonte: Loconte, Manuale di diritto tributario (CEDAM) — capp. 10-14
   (dispensa corso LUM, pagg. 25-41). Nessuna integrazione esterna.
   ========================================================================= */

export const TRIB_CAP4 = [
  {
    id: "dichiarazione",
    part: "generale",
    chapter: 4,
    chapterTitle: "Dichiarazione, controlli e accertamento",
    title: "La dichiarazione dei redditi e l'autotassazione",
    subtitle: "Dichiarazione di scienza, modelli 730 e Redditi, termini, versamenti, correzioni e ravvedimento",
    articoli: ["art. 1 d.P.R. 322/1998", "art. 2 d.P.R. 322/1998", "art. 36-bis d.P.R. 600/1973", "art. 36-ter d.P.R. 600/1973"],
    pages: [25, 27],
    depth: "deep",
    layers: {
      essenziale:
        "La dichiarazione dei redditi è il documento con cui, ogni anno, il contribuente dice al Fisco quanto ha guadagnato, calcola da solo le imposte e le paga: questo <strong>fare tutto da soli</strong> si chiama <strong>autotassazione</strong>. Esempio: Maria, impiegata con uno stipendio di 30.000 €, indica i suoi redditi nel modello, somma detrazioni e ritenute e versa l'eventuale saldo; lo Stato interviene solo dopo, per controllare. Tecnicamente la dichiarazione è una <strong>dichiarazione di scienza</strong>: il contribuente racconta dei fatti (i redditi posseduti), e gli effetti giuridici non dipendono dalla sua volontà ma sono già fissati dalla legge. È <em>obbligatoria</em>, <em>generale</em>, <em>unica</em> (raccoglie tutti i redditi che formano il reddito complessivo), <em>perentoria</em> (va presentata entro termini precisi), <em>analitica</em> e <em>vincolata</em>: deve essere redatta, <strong>a pena di nullità</strong>, sui modelli ministeriali approvati ogni anno. I modelli sono due: il modello ordinario (storicamente \"Unico\", che unisce redditi e Irap) e il <strong>730</strong>, semplificato, per lavoratori dipendenti e pensionati. La presentazione avviene in via telematica, direttamente o tramite intermediari abilitati (ad esempio i CAAF); i versamenti si fanno di regola con il modello <strong>F24</strong> (per l'imposta di registro l'F23), a titolo di <strong>acconto</strong> durante l'anno e di <strong>saldo</strong> in dichiarazione. Termini (art. 2 d.P.R. 322/1998): 30 giugno se si presenta tramite banca o posta, <strong>30 settembre</strong> se in via telematica, dell'anno successivo al periodo d'imposta; resta valida la dichiarazione presentata entro 90 giorni dalla scadenza, con sanzioni per il ritardo.",
      approfondimenti: [
        {
          label: "Chi deve dichiarare e chi no",
          body:
            "Ogni soggetto passivo deve dichiarare annualmente i redditi posseduti, anche se non ne deriva alcun debito d'imposta; i soggetti IVA presentano la dichiarazione annuale anche senza operazioni imponibili. Sono però <strong>esonerati</strong>, ad esempio: chi ha solo redditi di lavoro dipendente più l'abitazione principale e sue pertinenze; chi ha solo redditi esenti (come le rendite Inail per invalidità); chi ha solo redditi con ritenuta alla fonte a titolo d'imposta (salvo obbligo di scritture contabili); chi resta sotto il minimo imponibile. La dichiarazione della società di persone viene incrociata con quella del socio ai fini della sua imposta.",
        },
        {
          label: "Le patologie: omessa, nulla, infedele, incompleta",
          body:
            "La dichiarazione è <strong>omessa</strong> se presentata oltre 90 giorni dalla scadenza o mai presentata: sanzione dal 120% al 240% delle imposte dovute, che scende al 60-120% se il contribuente rimedia presentandola entro il termine della dichiarazione dell'anno successivo. È <strong>nulla</strong> se redatta su modelli difformi, non sottoscritta o sottoscritta da persona non legittimata: gli effetti sono gli stessi dell'omessa. È <strong>infedele</strong> se il reddito indicato è inesatto nell'ammontare, <strong>incompleta</strong> se manca un'intera categoria reddituale: in entrambi i casi la sanzione è pari al doppio dell'imposta non dichiarata.",
        },
        {
          label: "Correttiva, integrativa e ravvedimento operoso",
          body:
            "Chi si accorge di un errore può rimediare: con la dichiarazione <strong>correttiva</strong>, ripresentata nei 90 giorni successivi alla scadenza, che sostituisce integralmente la precedente; con la dichiarazione <strong>integrativa</strong>, oltre i 90 giorni, a favore dell'ufficio o del contribuente. Con il <strong>ravvedimento operoso</strong> il contribuente sistema spontaneamente versamenti insufficienti od omessi e dichiarazioni incomplete o errate, versando anche gli interessi di mora, e ottiene sanzioni ridotte: prima ci si ravvede, meno si paga rispetto alla sanzione piena applicata se è il Fisco a contestare.",
        },
      ],
      giurisprudenza: [
        {
          label: "Cassazione, Sezioni Unite: la dichiarazione è emendabile",
          body:
            "La questione se il contribuente potesse modificare la dichiarazione già presentata, a proprio vantaggio o svantaggio, è stata risolta dalla Corte di Cassazione a Sezioni Unite, che ha definitivamente sancito la <strong>emendabilità</strong> della dichiarazione. È una conseguenza coerente della sua natura di dichiarazione di scienza: chi racconta dei fatti e sbaglia può correggere il racconto, non essendo la dichiarazione un atto negoziale di volontà.",
        },
      ],
      eccezioni: [
        {
          label: "Omessa sottoscrizione: nullità sanabile",
          body:
            "La dichiarazione non firmata è nulla, ma la nullità non è immediata e irrimediabile: l'ufficio territorialmente competente invita il contribuente a sanare il vizio e solo se l'invito resta senza esito per <strong>30 giorni</strong> l'atto è travolto. Errore da evitare: pensare che la firma mancante renda la dichiarazione irrecuperabile fin dall'inizio.",
        },
        {
          label: "Ritardo entro 90 giorni: valida ma sanzionata",
          body:
            "La dichiarazione presentata dopo la scadenza ma <strong>entro 90 giorni</strong> resta valida: non è omessa, si applicano solo le sanzioni amministrative per il ritardo. Diventa omessa, con la sanzione pesante dal 120% al 240%, solo oltre i 90 giorni.",
        },
      ],
    },
    sintesi: [
      "La dichiarazione è una dichiarazione di scienza: effetti fissati dalla legge",
      "Autotassazione: il contribuente calcola e versa da solo, il Fisco controlla dopo",
      "Forma vincolata: modelli ministeriali a pena di nullità (730 o modello ordinario)",
      "Termine telematico: 30 settembre; valida entro 90 giorni con sanzioni",
      "Omessa oltre 90 giorni: sanzione 120-240% delle imposte dovute",
      "Errori rimediabili: correttiva (90 giorni), integrativa, ravvedimento operoso",
    ],
    esempi: [
      {
        titolo: "Maria e il 730",
        testo:
          "Maria è impiegata con uno stipendio di 30.000 € e possiede solo l'appartamento in cui vive. Essendo lavoratrice dipendente, usa il <strong>modello 730</strong> tramite un CAAF: indica il reddito di lavoro, le spese mediche di 600 € da detrarre e le ritenute già operate dal datore di lavoro. Il calcolo chiude con un piccolo credito, che le viene restituito. Se Maria avesse avuto <em>solo</em> lo stipendio e l'abitazione principale, sarebbe stata addirittura esonerata dall'obbligo di presentare la dichiarazione. Il suo collega Andrea, che oltre allo stipendio affitta un box per 1.200 € l'anno, invece deve dichiarare: la dichiarazione è unica e raccoglie tutti i redditi che formano il reddito complessivo.",
      },
      {
        titolo: "Luca dimentica 5.000 € di compensi",
        testo:
          "Luca, idraulico, presenta la dichiarazione in via telematica il 20 settembre ma dimentica una fattura da 5.000 €. Se se ne accorge entro 90 giorni dalla scadenza, ripresenta una dichiarazione <strong>correttiva</strong> che sostituisce integralmente la prima. Se se ne accorge dopo, presenta una dichiarazione <strong>integrativa</strong>. In entrambi i casi gli conviene muoversi con il <strong>ravvedimento operoso</strong>: versa l'imposta mancante e gli interessi di mora e paga una sanzione ridotta, molto più leggera di quella piena che subirebbe se fosse l'Agenzia delle Entrate a scoprire l'errore. La regola è semplice: prima ci si ravvede, meno si paga.",
      },
    ],
    flashcards: [
      ["Che natura giuridica ha la dichiarazione dei redditi?", "È una dichiarazione di scienza: espone fatti (i redditi posseduti) e gli effetti giuridici sono predeterminati dalla legge, non voluti dal contribuente."],
      ["Cosa significa autotassazione?", "Il contribuente evidenzia da solo i presupposti imponibili, quantifica il reddito e liquida (calcola e versa) l'imposta; il Fisco controlla in un momento successivo."],
      ["Quando la dichiarazione è omessa?", "Quando non è presentata affatto o è presentata oltre 90 giorni dalla scadenza. Sanzione: dal 120% al 240% delle imposte dovute."],
      ["Quando la dichiarazione è nulla?", "Se redatta su modelli difformi da quelli ministeriali, non sottoscritta o sottoscritta da persona non legittimata; gli effetti sono quelli della dichiarazione omessa."],
      ["Differenza tra dichiarazione infedele e incompleta?", "Infedele: il reddito dichiarato è inesatto nell'ammontare. Incompleta: manca un'intera categoria di reddito. Stessa sanzione: il doppio dell'imposta non dichiarata."],
      ["Entro quando si presenta la dichiarazione telematica?", "Entro il 30 settembre dell'anno successivo al periodo d'imposta (30 giugno se tramite banca o posta); valida entro 90 giorni dalla scadenza con sanzioni per il ritardo."],
    ],
    comparativa: {
      titolo: "Dichiarazione correttiva vs integrativa",
      a: "Correttiva",
      b: "Integrativa",
      righe: [
        { profilo: "Quando si presenta", a: "Nei 90 giorni successivi alla scadenza del termine", b: "Oltre i 90 giorni dal termine di presentazione" },
        { profilo: "Effetto", a: "Sostituisce integralmente la dichiarazione precedente", b: "Integra o modifica quanto già dichiarato" },
        { profilo: "Direzione", a: "Rimedia a errori della dichiarazione appena presentata", b: "Può essere a favore dell'ufficio o del contribuente" },
        { profilo: "Convenienza", a: "Con il ravvedimento: sanzioni molto ridotte", b: "Con il ravvedimento: riduzione minore man mano che passa il tempo" },
      ],
    },
    quiz: [
      {
        q: "Qual è la natura giuridica della dichiarazione dei redditi?",
        opts: [
          "Atto negoziale con cui il contribuente dispone del proprio debito d'imposta",
          "Provvedimento amministrativo che accerta il reddito del contribuente",
          "Dichiarazione di scienza con effetti giuridici predeterminati dalla legge",
          "Confessione stragiudiziale irretrattabile resa all'Amministrazione finanziaria",
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Pensare che la dichiarazione sia un atto di volontà: gli effetti non dipendono dalla volontà del contribuente ma dalla legge.",
        why: "La dichiarazione espone fatti (i presupposti imponibili) e la loro qualificazione: è dichiarazione di scienza. Proprio per questo le Sezioni Unite ne hanno riconosciuto l'emendabilità.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 10",
      },
      {
        q: "Entro quale termine si presenta la dichiarazione in via telematica?",
        opts: [
          "Entro il 30 settembre dell'anno successivo al periodo d'imposta",
          "Entro il 30 giugno dell'anno successivo al periodo d'imposta",
          "Entro il 31 dicembre dell'anno successivo al periodo d'imposta",
          "Entro il 1° maggio dell'anno successivo al periodo d'imposta",
        ],
        correct: 0,
        difficulty: 1,
        commonError: "Confondere il termine telematico (30 settembre) con quello per la presentazione tramite banca o ufficio postale (1° maggio - 30 giugno).",
        why: "L'art. 2 d.P.R. 322/1998 fissa il termine tra il 1° maggio e il 30 giugno per banca o posta e al 30 settembre per la via telematica, nell'anno successivo alla chiusura del periodo d'imposta.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 10",
      },
      {
        q: "Quale sanzione è prevista per la dichiarazione omessa?",
        opts: [
          "Una sanzione fissa di 28 € oltre agli interessi di mora",
          "Dal 120% al 240% delle imposte dovute, riducibile al 60-120% se si rimedia entro l'anno",
          "Il doppio dell'imposta non dichiarata, senza possibilità di riduzione",
          "Un terzo delle imposte dovute, oltre alla chiusura dell'attività",
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Confondere la sanzione dell'omessa (120-240%) con quella dell'infedele/incompleta (doppio dell'imposta non dichiarata).",
        why: "L'omissione è la patologia più grave: sanzione dal 120% al 240% delle imposte dovute. Presentando la dichiarazione entro il termine di quella dell'anno successivo, la sanzione scende al 60-120%.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 10",
      },
      {
        q: "La dichiarazione redatta su un modello diverso da quello ministeriale è:",
        opts: [
          "Valida, purché contenga tutti i dati richiesti dai quadri",
          "Irregolare, con applicazione di una sanzione fissa per vizio di forma",
          "Annullabile solo su eccezione dell'Amministrazione finanziaria",
          "Nulla, con gli stessi effetti della dichiarazione omessa",
        ],
        correct: 3,
        difficulty: 3,
        commonError: "Ritenere il modello ministeriale una semplice formalità: la forma della dichiarazione è invece vincolata a pena di nullità.",
        why: "La dichiarazione ha forma vincolata: va redatta su stampati conformi ai modelli approvati con decreto ministeriale, a pena di nullità. La dichiarazione nulla produce gli stessi effetti di quella omessa.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 10",
      },
      {
        q: "Chi percepisce solo redditi di lavoro dipendente e il reddito dell'abitazione principale:",
        opts: [
          "Deve comunque presentare la dichiarazione, anche con imposta pari a zero",
          "Deve presentare solo il modello 730 semplificato entro il 30 giugno",
          "È esonerato dall'obbligo di presentare la dichiarazione dei redditi",
          "È esonerato solo se il reddito complessivo è sotto il minimo imponibile",
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Estendere a tutti la regola generale dell'obbligo dichiarativo, dimenticando le ipotesi di esonero espressamente previste.",
        why: "Tra gli esonerati c'è proprio chi possiede solo redditi di lavoro dipendente più l'abitazione principale e sue pertinenze, oltre a chi ha solo redditi esenti o soggetti a ritenuta a titolo d'imposta.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 10",
      },
      {
        q: "La dichiarazione priva di sottoscrizione:",
        opts: [
          "È inesistente e non può mai essere sanata dal contribuente",
          "È nulla, ma il vizio si sana se il contribuente firma entro 30 giorni dall'invito dell'ufficio",
          "È valida, perché la trasmissione telematica sostituisce la firma",
          "È semplicemente irregolare e comporta solo una sanzione pecuniaria",
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Credere che la nullità per difetto di firma sia automatica e insanabile: la legge prevede prima un invito a sanare.",
        why: "L'omessa sottoscrizione comporta la nullità ex lege, ma l'atto è travolto solo decorsi inutilmente 30 giorni dall'invito dell'ufficio competente a sanare il vizio.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 10",
      },
    ],
    veroFalso: [
      {
        aff: "La dichiarazione presentata con 60 giorni di ritardo si considera omessa.",
        vero: false,
        traccia: "Falso. La legge fa salva la validità delle dichiarazioni presentate entro 90 giorni dalla scadenza, con applicazione delle sole sanzioni amministrative per il ritardo. La dichiarazione è omessa solo oltre i 90 giorni o se mai presentata.",
      },
      {
        aff: "I soggetti passivi IVA devono presentare la dichiarazione annuale anche se non hanno effettuato operazioni imponibili.",
        vero: true,
        traccia: "Vero. L'obbligo dichiarativo IVA prescinde dall'aver compiuto operazioni imponibili nell'anno; analogamente, ai fini reddituali, la dichiarazione è dovuta anche quando non ne consegue alcun debito d'imposta.",
      },
      {
        aff: "La dichiarazione integrativa può essere presentata solo a favore dell'Amministrazione finanziaria.",
        vero: false,
        traccia: "Falso. La dichiarazione integrativa, presentata oltre i 90 giorni dal termine, può essere sia a favore dell'ufficio sia a favore del contribuente: le Sezioni Unite hanno sancito l'emendabilità della dichiarazione in entrambe le direzioni.",
      },
    ],
    aperta: {
      q: "Il candidato illustri la natura giuridica della dichiarazione dei redditi e le conseguenze in tema di emendabilità.",
      traccia:
        "La dichiarazione dei redditi è l'atto con cui il contribuente evidenzia i presupposti imponibili, li quantifica e liquida l'imposta (autotassazione), mentre l'intervento del Fisco è solo eventuale e successivo. Ha natura di dichiarazione di scienza: gli effetti giuridici di quanto dichiarato non derivano dalla volontà del contribuente ma sono predeterminati dalla legge. È obbligatoria, generale, unica, perentoria, analitica e vincolata nella forma, dovendo essere redatta a pena di nullità sui modelli ministeriali. Dalla natura di dichiarazione di scienza discende l'emendabilità, definitivamente sancita dalla Cassazione a Sezioni Unite: il contribuente può correggere errori a proprio vantaggio o svantaggio con la dichiarazione correttiva (entro 90 giorni, sostitutiva) o integrativa (oltre i 90 giorni). Ricorrendo al ravvedimento operoso, la regolarizzazione spontanea di versamenti e dichiarazioni consente sanzioni ridotte, tanto più miti quanto più tempestivo è il ravvedimento.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 10",
    },
    consigliate: ["mappa", "flashcards", "esempi", "mcq", "verofalso"],
    media: {
      podcast: {
        title: "La dichiarazione dei redditi: come funziona l'autotassazione",
        chapters: [
          ["Autotassazione e natura di dichiarazione di scienza", 0],
          ["Soggetti obbligati, modelli e termini", 260],
          ["Patologie: omessa, nulla, infedele, incompleta", 540],
          ["Correzioni: correttiva, integrativa, ravvedimento", 800],
        ],
      },
      mappa: true,
    },
  },

  {
    id: "controlli",
    part: "generale",
    chapter: 4,
    chapterTitle: "Dichiarazione, controlli e accertamento",
    title: "Le fasi dell'accertamento e i controlli fiscali",
    subtitle: "Controllo automatizzato 36-bis, controllo formale 36-ter, accessi ispezioni e verifiche, PVC, indagini finanziarie",
    articoli: ["art. 36-bis d.P.R. 600/1973", "art. 36-ter d.P.R. 600/1973", "art. 32 d.P.R. 600/1973", "art. 33 d.P.R. 600/1973", "art. 12 l. 212/2000"],
    pages: [28, 32],
    depth: "deep",
    layers: {
      essenziale:
        "Dopo che il contribuente ha dichiarato e pagato da solo, il Fisco controlla (in linguaggio tecnico: l'Amministrazione finanziaria svolge l'attività istruttoria). I controlli sono di due famiglie. I <strong>controlli formali</strong> lavorano \"a tavolino\" sulla dichiarazione: la <strong>liquidazione automatica</strong> (art. 36-bis d.P.R. 600/1973) è un ricalcolo fatto con procedure automatizzate entro l'inizio del periodo di presentazione delle dichiarazioni dell'anno successivo (termine ordinatorio): corregge errori materiali e di calcolo, riduce detrazioni, deduzioni e crediti non spettanti e verifica i versamenti di acconti e saldo. Il <strong>controllo formale</strong> vero e proprio (art. 36-ter) è fatto dagli uffici, su criteri selettivi, entro il 31 dicembre del secondo anno successivo alla presentazione: chiede i documenti (spese mediche, contributi, interessi sul mutuo) e disconosce ciò che non è giustificato. Se emerge una differenza, arriva la <strong>comunicazione di irregolarità</strong> (\"avviso bonario\"): pagando entro 30 giorni le sanzioni sono ridotte a 1/3 (ai 2/3 nel controllo formale), con possibile rateizzazione. I <strong>controlli sostanziali</strong> vanno invece a caccia dell'evasione con veri poteri di indagine: <strong>accessi, ispezioni e verifiche</strong> presso il contribuente, inviti e questionari in ufficio, richieste a terzi e <strong>indagini finanziarie</strong> sui conti. Esempio: la Guardia di Finanza entra nel ristorante di Salvatore, esamina i registri contabili e confronta merci e personale con quanto dichiarato. Tutto viene messo per iscritto nel <strong>processo verbale di constatazione (PVC)</strong>, che chiude la verifica: da lì l'ufficio può poi emettere l'avviso di accertamento.",
      approfondimenti: [
        {
          label: "L'avviso bonario e le sue conseguenze",
          body:
            "L'esito negativo della liquidazione è comunicato con l'avviso bonario, che serve a evitare il ripetersi degli errori, regolarizzare gli aspetti formali e permettere al contribuente di comunicare dati omessi. Se il contribuente si è avvalso di un intermediario, l'avviso è notificato a quest'ultimo, che deve informarlo entro 30 giorni; altrimenti arriva per raccomandata. Entro 30 giorni il contribuente può fornire chiarimenti (l'ufficio rettifica o annulla l'avviso) oppure pagare con sanzioni ridotte a 1/3. È ammessa la rateizzazione: massimo 8 rate trimestrali, che salgono a 20 per importi superiori a 5.000 €. Chi non paga entro 30 giorni decade dalla dilazione e subisce l'iscrizione a ruolo di imposta, interessi e sanzioni in misura piena.",
        },
        {
          label: "Accessi: le autorizzazioni necessarie",
          body:
            "L'accesso è il potere dei funzionari (o della Guardia di Finanza) di entrare in un luogo anche senza o contro la volontà del contribuente. Le garanzie crescono con la riservatezza del luogo: per i locali dove si esercita l'attività d'impresa basta l'autorizzazione del <strong>capo dell'Ufficio</strong>; per i locali a uso promiscuo (casa e ufficio insieme) serve l'autorizzazione del <strong>Pubblico Ministero</strong>; per l'abitazione serve l'autorizzazione del PM, concedibile solo in presenza di <strong>gravi indizi di evasione</strong>. Dopo l'accesso seguono le ricerche (reperire registri e documenti, con possibile apertura coattiva di casseforti in caso di mancata collaborazione), l'ispezione documentale e la verifica.",
        },
        {
          label: "Le garanzie dello Statuto durante la verifica",
          body:
            "La verifica deve rispettare lo Statuto dei diritti del contribuente: l'accesso va giustificato da specifiche esigenze di indagine, il contribuente ha diritto di conoscerne le ragioni e l'oggetto e può farsi assistere da un professionista abilitato. Accessi e ispezioni presso la sede si svolgono durante l'orario ordinario di attività, per non disturbare l'impresa, e la verifica deve concludersi in un massimo di <strong>30 giorni lavorativi</strong>. Se i verificatori procedono con modalità non conformi alla legge, il contribuente può rivolgersi al Garante del contribuente. Chiuso il PVC, ha <strong>60 giorni</strong> per presentare osservazioni e richieste che l'ufficio deve valutare.",
        },
        {
          label: "Indagini finanziarie e scambio di informazioni",
          body:
            "I controlli bancari servono a ottenere, con richiesta o accesso presso banche e Poste, dati sui rapporti finanziari del contribuente. L'indagine può essere attivata dall'Agenzia delle Entrate, dalla Guardia di Finanza o dal giudice tributario ed è subordinata a una <strong>autorizzazione amministrativa</strong>; ai dati acquisiti il legislatore riconosce uno specifico valore probatorio per la ricostruzione del presupposto d'imposta ai fini delle imposte sui redditi e dell'IVA. Sul piano internazionale, le Amministrazioni degli Stati membri si scambiano informazioni (redditi, residenza fiscale, immobili) su richiesta, in modo automatico o spontaneo.",
        },
      ],
      giurisprudenza: [
        {
          label: "Nullità per violazione del contraddittorio nel 36-bis",
          body:
            "Quando dal controllo automatizzato emergono <strong>incertezze su aspetti rilevanti</strong> della dichiarazione, l'ufficio deve invitare il contribuente a fornire chiarimenti o a produrre i documenti mancanti entro 30 giorni: i provvedimenti adottati in violazione di questo obbligo sono <strong>nulli</strong>. Nello stesso caso, l'invio della preventiva comunicazione di irregolarità è obbligatorio a pena di nullità della successiva cartella di pagamento.",
        },
        {
          label: "Il PVC come atto pubblico",
          body:
            "Il processo verbale di constatazione ha natura di <strong>atto pubblico</strong>: vi si riportano cronologicamente ispezioni e rilevazioni eseguite, richieste fatte al contribuente e risposte ricevute, oltre alle violazioni contestate. È però un atto meramente istruttorio, di conoscenza: segnala le violazioni agli Uffici finanziari, che ne verificano il contenuto ed eventualmente emettono l'avviso di accertamento.",
        },
      ],
      eccezioni: [
        {
          label: "Il termine del 36-bis non è a pena di decadenza",
          body:
            "Il controllo automatizzato va eseguito entro l'inizio del periodo di presentazione delle dichiarazioni dell'anno successivo, ma questo termine ha carattere <strong>ordinatorio</strong>, con efficacia solo esortativa: non è previsto a pena di decadenza. Errore da evitare: eccepire la decadenza dell'ufficio per il solo superamento di questo termine. Diverso il 36-ter, ancorato al 31 dicembre del secondo anno successivo alla presentazione.",
        },
        {
          label: "Documenti già in possesso del Fisco",
          body:
            "Per lo Statuto dei diritti del contribuente non possono essere richiesti documenti o informazioni già in possesso dell'Amministrazione finanziaria. In deroga, i dati dell'anagrafe tributaria o trasmessi da terzi possono essere richiesti quando servono requisiti soggettivi che non emergono da quei dati o quando le informazioni del Fisco non coincidono con quelle dichiarate.",
        },
      ],
    },
    sintesi: [
      "Due famiglie di controlli: formali (36-bis, 36-ter) e sostanziali (indagini)",
      "36-bis: liquidazione automatica, ricalcolo su errori, detrazioni e versamenti",
      "36-ter: controllo documentale entro il 31/12 del secondo anno successivo",
      "Avviso bonario: 30 giorni per chiarire o pagare con sanzioni ridotte",
      "Accessi: autorizzazione del capo ufficio; per l'abitazione PM e gravi indizi",
      "PVC chiude la verifica: atto pubblico, 60 giorni per le osservazioni",
    ],
    esempi: [
      {
        titolo: "L'avviso bonario di Anna",
        testo:
          "Anna, grafica freelance, dimentica di versare un acconto IRPEF di 800 €. L'anno dopo il controllo automatizzato ex art. 36-bis incrocia dichiarazione e versamenti e rileva l'omissione: le arriva una <strong>comunicazione di irregolarità</strong> (avviso bonario) con imposta e sanzioni per omesso versamento. Anna ha 30 giorni per scegliere: se il rilievo è sbagliato (ad esempio il versamento c'è, ma con un codice errato), fornisce chiarimenti e l'ufficio rettifica o annulla l'avviso; se invece è fondato, paga entro 30 giorni beneficiando della <strong>riduzione delle sanzioni a 1/3</strong>, eventualmente a rate (fino a 8 rate trimestrali, 20 sopra i 5.000 €). Se non paga, decade dalla dilazione e il residuo viene iscritto a ruolo con sanzioni piene.",
      },
      {
        titolo: "La verifica nel ristorante di Salvatore",
        testo:
          "Tre funzionari accedono al ristorante di Salvatore con l'<strong>autorizzazione del capo dell'Ufficio</strong>, durante l'orario di apertura, spiegandogli le ragioni e l'oggetto del controllo; Salvatore chiama la sua commercialista, la dott.ssa Bianchi, per farsi assistere. I verificatori cercano i registri contabili, ispezionano fatture e scontrini e verificano la corrispondenza tra contabilità, merci in magazzino e personale in sala. La verifica dura al massimo <strong>30 giorni lavorativi</strong>; ogni giornata è verbalizzata e alla fine viene redatto il <strong>processo verbale di constatazione</strong> con le violazioni riscontrate e le osservazioni di Salvatore. Da quel momento Salvatore ha <strong>60 giorni</strong> per inviare memorie che l'ufficio dovrà valutare prima di emettere l'eventuale avviso di accertamento.",
      },
    ],
    flashcards: [
      ["Cosa fa la liquidazione automatica ex art. 36-bis?", "Con procedure automatizzate corregge errori materiali e di calcolo, riduce detrazioni, deduzioni e crediti non spettanti e controlla rispondenza e tempestività dei versamenti di acconti e saldo."],
      ["Entro quando va eseguito il controllo formale ex art. 36-ter?", "Entro il 31 dicembre del secondo anno successivo a quello di presentazione della dichiarazione, sulla base di criteri selettivi ministeriali."],
      ["Cosa succede se si paga l'avviso bonario entro 30 giorni?", "Le sanzioni sono ridotte a 1/3 (nel controllo formale la riduzione è ai 2/3); è ammessa la rateizzazione fino a 8 rate trimestrali, 20 per importi oltre 5.000 €."],
      ["Quale autorizzazione serve per accedere all'abitazione del contribuente?", "L'autorizzazione del Pubblico Ministero, che può essere emessa solo in presenza di gravi indizi di evasione."],
      ["Cos'è il PVC?", "Il processo verbale di constatazione: atto pubblico, meramente istruttorio, che chiude la verifica riportando ispezioni, richieste, risposte e violazioni contestate; il contribuente ha 60 giorni per le osservazioni."],
      ["Chi può attivare le indagini finanziarie?", "Agenzia delle Entrate, Guardia di Finanza e giudice tributario, previa autorizzazione amministrativa; i dati acquisiti hanno uno specifico valore probatorio."],
    ],
    comparativa: {
      titolo: "Controllo automatizzato (36-bis) vs controllo formale (36-ter)",
      a: "Controllo automatizzato (art. 36-bis)",
      b: "Controllo formale (art. 36-ter)",
      righe: [
        { profilo: "Chi lo esegue", a: "Procedure automatizzate su tutte le dichiarazioni", b: "Uffici periferici, su criteri selettivi ministeriali" },
        { profilo: "Termine", a: "Inizio del periodo di presentazione delle dichiarazioni successive (ordinatorio)", b: "31 dicembre del secondo anno successivo alla presentazione" },
        { profilo: "Oggetto", a: "Errori materiali e di calcolo, detrazioni/deduzioni/crediti, versamenti", b: "Riscontro documentale: ritenute, detrazioni e deduzioni non giustificate dai documenti" },
        { profilo: "Sanzioni se si paga in 30 giorni", a: "Ridotte a 1/3", b: "Ridotte ai 2/3" },
      ],
    },
    quiz: [
      {
        q: "Il termine per la liquidazione automatica ex art. 36-bis d.P.R. 600/1973:",
        opts: [
          "È perentorio: superato, l'ufficio decade dal potere di controllo",
          "È ordinatorio: ha efficacia esortativa e non è previsto a pena di decadenza",
          "Coincide con il 31 dicembre del secondo anno successivo alla presentazione",
          "È fissato ogni anno con decreto del Ministero dell'Economia e delle Finanze",
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Attribuire natura decadenziale al termine del 36-bis, confondendolo con i termini di decadenza dell'accertamento.",
        why: "Il controllo va eseguito entro l'inizio del periodo di presentazione delle dichiarazioni dell'anno successivo, ma il termine ha carattere ordinatorio ed efficacia esortativa: non è a pena di decadenza.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 11",
      },
      {
        q: "Se il contribuente paga le somme dell'avviso bonario entro 30 giorni:",
        opts: [
          "Le sanzioni sono ridotte a 1/3",
          "Le sanzioni sono azzerate e restano dovuti solo gli interessi",
          "Le sanzioni sono ridotte alla metà del minimo edittale",
          "Le sanzioni restano piene ma il debito è rateizzabile",
        ],
        correct: 0,
        difficulty: 2,
        commonError: "Credere che il pagamento tempestivo elimini del tutto le sanzioni: le riduce a 1/3, non le azzera.",
        why: "Il pagamento entro 30 giorni dalla ricezione dell'avviso bonario comporta la riduzione delle sanzioni a 1/3; in mancanza scattano decadenza dalla dilazione e iscrizione a ruolo con sanzioni piene.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 11",
      },
      {
        q: "Il controllo formale ex art. 36-ter riguarda tipicamente:",
        opts: [
          "La congruità dei ricavi rispetto agli studi di settore",
          "La ricostruzione extracontabile del reddito d'impresa",
          "Spese mediche, contributi previdenziali e interessi sul mutuo indicati in dichiarazione",
          "I movimenti bancari non giustificati dal contribuente",
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Confondere il controllo formale, che è un riscontro documentale della dichiarazione, con i controlli sostanziali di merito.",
        why: "Il 36-ter verifica con i documenti le voci esposte in dichiarazione: le ipotesi più frequenti riguardano spese mediche, contributi previdenziali e interessi sul mutuo, con esclusione di ritenute, detrazioni e deduzioni non giustificate.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 11",
      },
      {
        q: "Per accedere all'abitazione del contribuente occorre:",
        opts: [
          "L'autorizzazione del capo dell'Ufficio territorialmente competente",
          "Il consenso scritto del contribuente o di un suo familiare convivente",
          "Un'ordinanza del giudice tributario su istanza dell'Agenzia delle Entrate",
          "L'autorizzazione del Pubblico Ministero, in presenza di gravi indizi di evasione",
        ],
        correct: 3,
        difficulty: 3,
        commonError: "Applicare all'abitazione la regola dei locali d'impresa, per i quali basta l'autorizzazione del capo dell'Ufficio.",
        why: "Le garanzie crescono con la riservatezza del luogo: capo dell'Ufficio per i locali d'impresa, PM per i locali promiscui, PM più gravi indizi di evasione per l'abitazione.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 12",
      },
      {
        q: "Dopo la consegna del processo verbale di constatazione, il contribuente può presentare osservazioni entro:",
        opts: [
          "15 giorni dalla notifica del verbale",
          "30 giorni lavorativi dalla chiusura della verifica",
          "60 giorni, e l'ufficio deve valutarle",
          "90 giorni, con sospensione dei termini di accertamento",
        ],
        correct: 2,
        difficulty: 1,
        commonError: "Confondere il termine di 60 giorni per le osservazioni al PVC con i 30 giorni dell'avviso bonario o con la durata massima della verifica.",
        why: "Con il PVC si chiudono le operazioni di verifica ed entro 60 giorni il contribuente può porre osservazioni e richieste, che verranno valutate dall'Ufficio prima dell'eventuale accertamento.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 12",
      },
      {
        q: "La verifica presso la sede del contribuente deve concludersi:",
        opts: [
          "In un massimo di 30 giorni lavorativi",
          "In un massimo di 60 giorni, prorogabili una sola volta",
          "Entro il periodo d'imposta in cui è iniziata",
          "Senza limiti di durata, purché in orario di attività",
        ],
        correct: 0,
        difficulty: 3,
        commonError: "Confondere la durata massima della verifica (30 giorni lavorativi) con il termine di 60 giorni per le osservazioni al PVC.",
        why: "Nel rispetto dello Statuto dei diritti del contribuente, accessi e ispezioni avvengono in orario ordinario di attività e la verifica deve concludersi in un massimo di 30 giorni lavorativi; in caso di irregolarità ci si può rivolgere al Garante del contribuente.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 12",
      },
      {
        q: "Le indagini finanziarie sui conti del contribuente:",
        opts: [
          "Possono essere avviate liberamente da qualunque funzionario verificatore",
          "Sono subordinate a un'autorizzazione amministrativa e i dati acquisiti hanno specifico valore probatorio",
          "Richiedono sempre l'autorizzazione del Pubblico Ministero e gravi indizi di evasione",
          "Sono consentite solo dopo la notifica dell'avviso di accertamento",
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Trasferire alle indagini finanziarie il regime autorizzatorio degli accessi domiciliari, che richiede il PM.",
        why: "La richiesta di indagini finanziarie è subordinata a un'autorizzazione amministrativa; possono attivarle Agenzia delle Entrate, Guardia di Finanza e giudice tributario, e il legislatore riconosce ai dati acquisiti uno specifico valore probatorio.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 12",
      },
    ],
    veroFalso: [
      {
        aff: "Quando emergono incertezze su aspetti rilevanti della dichiarazione, l'omesso invito al contribuente a fornire chiarimenti rende nulli i provvedimenti adottati.",
        vero: true,
        traccia: "Vero. In presenza di incertezze su aspetti rilevanti l'ufficio deve invitare il contribuente a fornire chiarimenti o documenti entro 30 giorni: i provvedimenti adottati in violazione di tale obbligo sono nulli, e l'avviso bonario è obbligatorio a pena di nullità della successiva cartella di pagamento.",
      },
      {
        aff: "Il PVC è un provvedimento impositivo autonomamente idoneo a legittimare la riscossione.",
        vero: false,
        traccia: "Falso. Il PVC è un atto meramente istruttorio, di conoscenza, con natura di atto pubblico: segnala le violazioni riscontrate agli Uffici, i quali eventualmente emettono l'avviso di accertamento, che è il vero atto impositivo.",
      },
      {
        aff: "Chi non paga l'avviso bonario entro 30 giorni decade dal beneficio della rateizzazione.",
        vero: true,
        traccia: "Vero. Il mancato pagamento entro 30 giorni dalla ricezione dell'avviso bonario comporta la decadenza dal beneficio della dilazione e l'iscrizione a ruolo del residuo a titolo di imposta, interessi e sanzioni in misura piena.",
      },
    ],
    aperta: {
      q: "Il candidato illustri i poteri istruttori dell'Amministrazione finanziaria, distinguendo i controlli formali da quelli sostanziali.",
      traccia:
        "L'attività di controllo verifica il corretto adempimento degli obblighi dichiarativi e contabili e si articola in controlli formali e sostanziali. I primi comprendono la liquidazione automatica ex art. 36-bis d.P.R. 600/1973 (correzione di errori materiali e di calcolo, riduzione di detrazioni, deduzioni e crediti, controllo dei versamenti, entro un termine ordinatorio) e il controllo formale ex art. 36-ter (riscontro documentale entro il 31 dicembre del secondo anno successivo); l'esito negativo è comunicato con l'avviso bonario, che consente chiarimenti o pagamento in 30 giorni con sanzioni ridotte. I controlli sostanziali mirano a prevenire e reprimere l'evasione attraverso accessi, ispezioni e verifiche — con autorizzazioni graduate: capo dell'Ufficio per i locali d'impresa, PM per i locali promiscui e, con gravi indizi di evasione, per l'abitazione — oltre a inviti, questionari, richieste a terzi e indagini finanziarie autorizzate. La verifica, da concludersi in 30 giorni lavorativi nel rispetto dello Statuto, sfocia nel PVC, atto pubblico istruttorio su cui il contribuente può controdedurre entro 60 giorni.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 12",
    },
    consigliate: ["mappa", "comparativa", "flashcards", "mcq", "esempi"],
    media: {
      podcast: {
        title: "I controlli del Fisco: dal computer alla verifica in azienda",
        chapters: [
          ["Controllo automatizzato 36-bis e avviso bonario", 0],
          ["Controllo formale 36-ter", 300],
          ["Accessi, ispezioni, verifiche e PVC", 560],
          ["Indagini finanziarie e scambio di informazioni", 860],
        ],
      },
      mappa: true,
    },
  },

  {
    id: "avvisoAccertamento",
    part: "generale",
    chapter: 4,
    chapterTitle: "Dichiarazione, controlli e accertamento",
    title: "L'avviso di accertamento",
    subtitle: "Atto impositivo, motivazione e sottoscrizione, notifica, termini di decadenza, esecutività e definitività",
    articoli: ["art. 41 d.P.R. 600/1973", "art. 42 d.P.R. 600/1973", "art. 43 d.P.R. 600/1973", "art. 7 l. 212/2000"],
    pages: [33, 35],
    depth: "deep",
    layers: {
      essenziale:
        "L'avviso di accertamento è la \"bolletta di rettifica\" del Fisco: il provvedimento amministrativo con cui, dopo i controlli, l'ufficio corregge d'ufficio la dichiarazione del contribuente e gli chiede le maggiori imposte. Esempio: Paolo ha dichiarato 25.000 €, ma dalla verifica emergono ricavi non dichiarati per 15.000 €; l'Agenzia delle Entrate gli notifica un avviso che rettifica il reddito a 40.000 €. È un <strong>atto impositivo</strong>: se non viene contestato nei modi e nei termini di legge <strong>diventa definitivo</strong> e, decorsi 60 giorni dalla notifica, la riscossione coattiva è legittimata (l'avviso funziona così anche da titolo per riscuotere: accertamento \"esecutivo\"). L'atto deve avere requisiti <strong>formali</strong>: la competenza dell'ufficio (per le imposte sui redditi, quello del domicilio fiscale del contribuente; per le imposte indirette, quello del luogo di registrazione dell'atto) e la <strong>sottoscrizione</strong> del capo dell'ufficio, la cui omissione comporta nullità. E requisiti <strong>sostanziali</strong>, imposti dallo Statuto dei diritti del contribuente: soprattutto la <strong>motivazione</strong>, cioè l'indicazione precisa delle ragioni di fatto e di diritto della pretesa; se la motivazione rinvia a un altro atto non conosciuto né ricevuto dal contribuente (ad esempio un verbale della Guardia di Finanza), quell'atto va <strong>allegato</strong>. Infine i <strong>termini di decadenza</strong>: per imposte sui redditi e IVA l'avviso va notificato, a pena di decadenza, entro il 31 dicembre del <strong>quinto anno</strong> successivo alla presentazione della dichiarazione, o del <strong>settimo anno</strong> successivo a quello in cui la dichiarazione omessa avrebbe dovuto essere presentata.",
      approfondimenti: [
        {
          label: "Accertamento in rettifica e accertamento d'ufficio",
          body:
            "Gli atti impositivi si distinguono anzitutto in due tipologie. L'<strong>accertamento in rettifica</strong> presuppone una dichiarazione presentata: l'ufficio la corregge. L'<strong>accertamento d'ufficio</strong> (art. 41 d.P.R. 600/1973) scatta invece nei casi di omessa presentazione della dichiarazione o di dichiarazione nulla: mancando una dichiarazione regolare, è l'Amministrazione a determinare direttamente imponibile e imposta. Le verifiche che precedono l'avviso possono essere avviate a campione o su iniziativa specifica dell'ufficio territoriale competente.",
        },
        {
          label: "Il principio di unicità dell'accertamento",
          body:
            "Per ogni anno d'imposta il contribuente può ricevere <strong>un solo avviso di accertamento</strong>: le verifiche possono essere molte, ma la contestazione deve confluire in un unico documento, e non è possibile un solo avviso per più anni d'imposta. La ratio è doppia: economia dell'azione amministrativa e diritto del contribuente di conoscere in un solo atto tutte le contestazioni. Il principio conosce due deroghe tipizzate: l'accertamento <strong>parziale</strong>, basato su elementi certi già a disposizione dell'Amministrazione senza attività investigativa specifica, e l'accertamento <strong>integrativo o modificativo</strong>, ammesso solo per la sopravvenuta conoscenza di nuovi e rilevanti elementi, quando l'ignoranza precedente dell'ufficio è incolpevole.",
        },
        {
          label: "La motivazione per relationem",
          body:
            "La motivazione è la spina dorsale dell'avviso: deve indicare con precisione le ragioni di fatto e di diritto della pretesa erariale. Spesso l'ufficio motiva rinviando a un altro atto (tipicamente il PVC della Guardia di Finanza): questa motivazione \"per relationem\" è ammessa, ma se l'atto richiamato non è stato riconosciuto né ricevuto dal contribuente deve essere <strong>allegato</strong> all'avviso che lo richiama, come impone lo Statuto dei diritti del contribuente. Altrimenti il contribuente non sarebbe in grado di difendersi da una pretesa di cui non conosce le basi.",
        },
      ],
      giurisprudenza: [
        {
          label: "Definitività e legittimazione della riscossione coattiva",
          body:
            "L'avviso non contestato nei modi e nei termini stabiliti dalla legge diventa <strong>definitivo</strong>: allo scadere dei 60 giorni dalla notifica la riscossione coattiva è legittimata. La definitività preclude la contestazione nel merito della pretesa: per questo la scelta tra impugnare, aderire o prestare acquiescenza va compiuta entro il termine per il ricorso.",
        },
      ],
      eccezioni: [
        {
          label: "Termini raddoppiati per gli attivi nei paradisi fiscali",
          body:
            "Per gli attivi detenuti in Paesi a fiscalità privilegiata una norma speciale <strong>raddoppia i termini</strong> di accertamento: lo Stato può accertare non in 7 ma in 14 anni. È invece stata <strong>soppressa</strong> la vecchia regola che raddoppiava i termini quando il fatto aveva rilevanza penale. Errore da evitare: applicare ancora il raddoppio da reato, non più vigente.",
        },
        {
          label: "Nullità per vizi di forma essenziali",
          body:
            "L'omessa sottoscrizione dell'avviso da parte del capo dell'ufficio comporta la <strong>nullità</strong> dell'atto; allo stesso modo l'atto motivato per relationem senza allegazione dell'atto richiamato non conosciuto dal contribuente è viziato. I requisiti formali non sono formalismi: presidiano il diritto di difesa.",
        },
      ],
    },
    sintesi: [
      "Provvedimento amministrativo che rettifica d'ufficio la posizione fiscale del contribuente",
      "Requisiti: competenza dell'ufficio, sottoscrizione del capo ufficio, motivazione",
      "Motivazione per relationem: l'atto richiamato non conosciuto va allegato",
      "Decadenza: 31/12 del quinto anno (settimo se dichiarazione omessa)",
      "Attivi in paradisi fiscali: termini raddoppiati fino a 14 anni",
      "Non impugnato in 60 giorni: definitivo, riscossione coattiva legittimata",
    ],
    esempi: [
      {
        titolo: "Paolo e il calendario della decadenza",
        testo:
          "Paolo presenta nel 2022 la dichiarazione dei redditi 2021. L'Agenzia delle Entrate può notificargli un avviso di accertamento, a pena di decadenza, entro il 31 dicembre del <strong>quinto anno successivo</strong> a quello di presentazione: dunque entro il 31 dicembre 2027. Il suo vicino Ugo, invece, per lo stesso anno non ha presentato alcuna dichiarazione: per lui il termine sale al 31 dicembre del <strong>settimo anno successivo</strong> a quello in cui la dichiarazione avrebbe dovuto essere presentata. Se poi Ugo detenesse capitali non dichiarati in un Paese a fiscalità privilegiata, la norma speciale raddoppierebbe i termini: l'accertamento potrebbe arrivare fino a 14 anni. Un avviso notificato oltre questi termini è emesso da un potere ormai decaduto.",
      },
      {
        titolo: "L'avviso \"muto\" notificato a Franca",
        testo:
          "Franca, titolare di una merceria, riceve un avviso di accertamento che le contesta 20.000 € di ricavi non dichiarati \"come da processo verbale di constatazione della Guardia di Finanza\". Il problema: il PVC richiamato era stato redatto a carico del suo fornitore e Franca non lo ha mai ricevuto né conosciuto. La motivazione per relationem è ammessa, ma lo Statuto dei diritti del contribuente impone di <strong>allegare</strong> l'atto richiamato quando non è stato riconosciuto né ricevuto dal destinatario: senza allegazione Franca non può capire da dove nasce la pretesa né difendersi. Nel ricorso, da proporre entro 60 giorni dalla notifica per evitare la definitività dell'atto, il suo difensore farà valere proprio il vizio di motivazione.",
      },
    ],
    flashcards: [
      ["Cos'è l'avviso di accertamento?", "Il provvedimento amministrativo adottato all'esito dell'attività istruttoria con cui l'ufficio rettifica la posizione fiscale del contribuente; se non contestato nei termini diventa definitivo."],
      ["Cosa comporta l'omessa sottoscrizione dell'avviso?", "La nullità dell'atto: gli accertamenti sono portati a conoscenza mediante avvisi sottoscritti dal capo dell'ufficio."],
      ["Cosa richiede la motivazione per relationem?", "Se l'avviso rinvia a un atto non riconosciuto né ricevuto dal contribuente (es. verbale GdF), quell'atto deve essere allegato all'avviso che lo richiama."],
      ["Quali sono i termini di decadenza per la notifica?", "Per imposte sui redditi e IVA: 31 dicembre del quinto anno successivo alla presentazione della dichiarazione; settimo anno successivo se la dichiarazione è stata omessa."],
      ["Quale ufficio è competente a emettere l'avviso?", "Per le imposte sui redditi l'ufficio nella cui circoscrizione è il domicilio fiscale del contribuente; per le imposte indirette quello del luogo di registrazione dell'atto."],
      ["Cosa accade decorsi 60 giorni dalla notifica senza contestazione?", "L'avviso diventa definitivo e la riscossione coattiva è legittimata: l'atto opera anche come titolo per riscuotere (accertamento esecutivo)."],
    ],
    comparativa: {
      titolo: "Accertamento in rettifica vs accertamento d'ufficio",
      a: "In rettifica",
      b: "D'ufficio (art. 41)",
      righe: [
        { profilo: "Presupposto", a: "Dichiarazione presentata ma incompleta o infedele", b: "Dichiarazione omessa o nulla" },
        { profilo: "Cosa fa l'ufficio", a: "Corregge la dichiarazione del contribuente", b: "Determina direttamente imponibile e imposta dovuta" },
        { profilo: "Termine di decadenza", a: "31/12 del quinto anno successivo alla presentazione", b: "31/12 del settimo anno successivo a quello di presentazione dovuta" },
        { profilo: "Base di partenza", a: "I dati dichiarati, rettificati voce per voce o con presunzioni", b: "Ogni elemento raccolto dall'Amministrazione, mancando la dichiarazione" },
      ],
    },
    quiz: [
      {
        q: "L'avviso di accertamento è:",
        opts: [
          "Un atto istruttorio che segnala violazioni agli uffici finanziari",
          "Un provvedimento amministrativo che rettifica la posizione fiscale del contribuente",
          "Una comunicazione bonaria che invita a regolarizzare i versamenti",
          "Un atto processuale che introduce il giudizio tributario",
        ],
        correct: 1,
        difficulty: 1,
        commonError: "Confondere l'avviso di accertamento con il PVC, che è invece un atto istruttorio privo di efficacia impositiva.",
        why: "L'avviso è il provvedimento amministrativo adottato all'esito dell'istruttoria quando emergono irregolarità: rettifica d'ufficio la dichiarazione e, se non contestato nei termini, diventa definitivo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
      {
        q: "Se la motivazione dell'avviso fa riferimento a un atto non riconosciuto né ricevuto dal contribuente:",
        opts: [
          "L'avviso è comunque valido, potendo il contribuente richiederne copia all'ufficio",
          "L'ufficio deve riassumere l'atto in una successiva comunicazione integrativa",
          "L'atto richiamato deve essere allegato all'avviso che lo richiama",
          "La motivazione si considera assolta con l'indicazione degli estremi dell'atto",
        ],
        correct: 2,
        difficulty: 3,
        commonError: "Ritenere sufficiente la mera indicazione degli estremi dell'atto richiamato: il contribuente deve poterne conoscere il contenuto.",
        why: "Lo Statuto dei diritti del contribuente esige che l'atto richiamato dalla motivazione per relationem, se non conosciuto né ricevuto dal contribuente, sia allegato all'avviso: altrimenti il diritto di difesa sarebbe compromesso.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
      {
        q: "In caso di dichiarazione omessa, l'avviso di accertamento va notificato a pena di decadenza entro:",
        opts: [
          "Il 31 dicembre del quinto anno successivo a quello di presentazione",
          "Il 31 dicembre del settimo anno successivo a quello in cui la dichiarazione doveva essere presentata",
          "Il 31 dicembre del secondo anno successivo a quello di presentazione",
          "Dieci anni dalla scadenza del termine di presentazione, come per la prescrizione ordinaria",
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Applicare all'omessa dichiarazione il termine del quinto anno, che vale invece per la dichiarazione presentata.",
        why: "I termini decadenziali sono differenziati: quinto anno successivo alla presentazione per la dichiarazione presentata, settimo anno successivo a quello in cui avrebbe dovuto essere presentata per l'omessa.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
      {
        q: "Per gli attivi detenuti in Paesi a fiscalità privilegiata:",
        opts: [
          "I termini di accertamento sono raddoppiati: fino a 14 anni",
          "I termini restano ordinari ma la sanzione è raddoppiata",
          "Il raddoppio dei termini opera solo se il fatto ha rilevanza penale",
          "L'accertamento è imprescrittibile per espressa previsione di legge",
        ],
        correct: 0,
        difficulty: 5,
        commonError: "Richiamare il raddoppio dei termini per rilevanza penale del fatto: quella norma è stata soppressa.",
        why: "Una norma speciale raddoppia i termini di accertamento per gli attivi detenuti in Paesi a fiscalità privilegiata (fino a 14 anni), mentre il raddoppio legato alla rilevanza penale del fatto è stato soppresso.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
      {
        q: "Il principio di unicità dell'accertamento comporta che:",
        opts: [
          "L'ufficio può emettere un solo avviso complessivo per più anni d'imposta",
          "Ogni contribuente può subire una sola verifica fiscale per anno",
          "Le deroghe sono vietate, essendo il principio di rango costituzionale",
          "Per ciascun anno d'imposta il contribuente può ricevere un solo avviso, salvo parziale e integrativo",
        ],
        correct: 3,
        difficulty: 4,
        commonError: "Leggere l'unicità come limite alle verifiche (che possono essere illimitate) o come possibilità di un unico avviso per più anni.",
        why: "Il principio impone un solo avviso per ciascun anno d'imposta, per economia dell'azione amministrativa e per il diritto del contribuente di conoscere in un unico documento le contestazioni; deroghe tipizzate sono l'accertamento parziale e quello integrativo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
      {
        q: "Decorsi 60 giorni dalla notifica dell'avviso non contestato:",
        opts: [
          "L'ufficio deve notificare una cartella di pagamento entro l'anno",
          "Il contribuente può ancora presentare istanza di accertamento con adesione",
          "L'atto diventa definitivo e la riscossione coattiva è legittimata",
          "L'atto si converte automaticamente in iscrizione a ruolo straordinaria",
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Pensare che dopo l'avviso serva sempre un ulteriore atto per riscuotere: decorso il termine, la riscossione coattiva è già legittimata.",
        why: "L'avviso non contestato nei modi e nei termini di legge diventa definitivo: allo scadere dei 60 giorni dalla notifica la riscossione coattiva è legittimata, secondo il modello dell'accertamento esecutivo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
    ],
    veroFalso: [
      {
        aff: "L'avviso di accertamento non sottoscritto dal capo dell'ufficio è nullo.",
        vero: true,
        traccia: "Vero. La sottoscrizione è un requisito formale essenziale: gli accertamenti sono portati a conoscenza dei contribuenti mediante avvisi sottoscritti dal capo dell'ufficio e l'omessa sottoscrizione comporta la nullità dell'atto.",
      },
      {
        aff: "Ai fini delle imposte sui redditi è competente l'ufficio del luogo in cui è stato prodotto il reddito.",
        vero: false,
        traccia: "Falso. La competenza spetta all'ufficio nella cui circoscrizione si trova il domicilio fiscale del contribuente; il criterio del luogo di registrazione dell'atto vale invece per le imposte indirette sui trasferimenti.",
      },
      {
        aff: "Il contribuente può subire un numero illimitato di verifiche, ma per ogni anno d'imposta deve ricevere un solo avviso di accertamento.",
        vero: true,
        traccia: "Vero. Il principio di unicità riguarda l'atto impositivo, non l'attività di verifica: le verifiche possono essere molteplici, ma le contestazioni relative a un anno confluiscono in un unico avviso, salve le deroghe dell'accertamento parziale e integrativo.",
      },
    ],
    aperta: {
      q: "Il candidato illustri i requisiti dell'avviso di accertamento e i termini di decadenza per la sua notifica.",
      traccia:
        "L'avviso di accertamento è il provvedimento amministrativo con cui, all'esito dell'istruttoria, l'ufficio rettifica la posizione fiscale del contribuente; non contestato nei termini, diventa definitivo e, decorsi 60 giorni dalla notifica, legittima la riscossione coattiva. I requisiti formali comprendono la competenza dell'ufficio — per le imposte sui redditi quello del domicilio fiscale, per le indirette quello del luogo di registrazione dell'atto — e la sottoscrizione del capo dell'ufficio, la cui omissione determina nullità. Sul piano sostanziale, lo Statuto dei diritti del contribuente impone la motivazione, cioè l'indicazione delle ragioni di fatto e di diritto della pretesa; in caso di motivazione per relationem, l'atto richiamato non conosciuto né ricevuto dal contribuente va allegato. Quanto ai termini, per imposte sui redditi e IVA la notifica deve avvenire, a pena di decadenza, entro il 31 dicembre del quinto anno successivo alla presentazione della dichiarazione, ovvero del settimo anno successivo in caso di omissione; per gli attivi detenuti in Paesi a fiscalità privilegiata i termini sono raddoppiati.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 13",
    },
    consigliate: ["mappa", "flashcards", "mcq", "verofalso", "aperta"],
    media: {
      podcast: {
        title: "L'avviso di accertamento: la rettifica del Fisco",
        chapters: [
          ["Natura di atto impositivo e definitività", 0],
          ["Requisiti formali e sostanziali: la motivazione", 280],
          ["Termini di decadenza e casi speciali", 560],
          ["Unicità dell'accertamento e tipologie di atti", 800],
        ],
      },
      mappa: true,
    },
  },

  {
    id: "metodiAccertamento",
    part: "generale",
    chapter: 4,
    chapterTitle: "Dichiarazione, controlli e accertamento",
    title: "I metodi di accertamento",
    subtitle: "Analitico, analitico-induttivo, induttivo puro, sintetico e redditometro, studi di settore e ISA, parziale e integrativo",
    articoli: ["art. 38 d.P.R. 600/1973", "art. 39 d.P.R. 600/1973", "art. 41 d.P.R. 600/1973", "art. 41-bis d.P.R. 600/1973"],
    pages: [36, 38],
    depth: "deep",
    layers: {
      essenziale:
        "I metodi di accertamento sono i diversi \"modi di ricostruire\" il reddito vero del contribuente, e si distinguono a seconda che il soggetto sia o no obbligato alle scritture contabili. Per chi <strong>non</strong> è obbligato (persone fisiche, società semplici, enti non commerciali) ci sono: l'<strong>accertamento analitico</strong>, il metodo ordinario, che ricostruisce il maggior reddito \"voce per voce\"; e l'<strong>accertamento sintetico</strong> (art. 38 d.P.R. 600/1973), che parte dalle <strong>spese</strong>: se Marco dichiara 20.000 € ma spende 60.000 € tra SUV e vacanze, il Fisco presume un reddito coerente con quelle spese, salvo prova che le ha finanziate con redditi diversi da quelli dello stesso periodo d'imposta. Il comma 5 disciplina il <strong>redditometro</strong>, basato su elementi indicativi di capacità contributiva elaborati su campioni significativi di contribuenti; il sintetico è ammesso solo se il reddito accertabile <strong>supera di almeno un quinto</strong> quello dichiarato, previo <strong>contraddittorio obbligatorio</strong>. Per chi è obbligato alle scritture (imprese, professionisti, artisti) ci sono tre gradini, proporzionati alla gravità del comportamento: l'<strong>analitico-contabile</strong> (art. 39, comma 1), che prende per buona la contabilità e sindaca le singole voci; l'<strong>analitico-induttivo</strong>, che rettifica con <strong>presunzioni gravi, precise e concordanti</strong> pur senza abbandonare la contabilità; e l'<strong>induttivo puro o extracontabile</strong> (art. 39, comma 2), utilizzabile solo in presenza di presupposti tassativi (scritture non tenute, sottratte o inattendibili nel complesso, reddito non dichiarato, inottemperanza agli inviti), che ricostruisce il reddito da qualsiasi dato, anche con <strong>presunzioni prive</strong> di quei requisiti. Completano il quadro studi di settore e ISA, l'accertamento parziale e quello integrativo.",
      approfondimenti: [
        {
          label: "Le presunzioni: gravi, precise e concordanti",
          body:
            "La presunzione è la conseguenza che la legge (presunzione legale) o il giudice (presunzione semplice) trae da un fatto noto per risalire a un fatto ignoto. <strong>Gravità</strong>: il fatto ignoto deve desumersi con ragionevole certezza; <strong>precisione</strong>: i fatti noti devono essere determinati, non vaghi; <strong>concordanza</strong>: più fatti noti devono convergere verso la stessa conclusione. Nell'analitico-induttivo l'ufficio deve dimostrare il carattere qualificato del ragionamento presuntivo (ad esempio rettifiche basate sulla percentuale di ricarico o sui fattori produttivi); nell'induttivo puro può invece avvalersi di presunzioni prive di gravità, precisione e concordanza: al comportamento più grave del contribuente corrisponde un potere più forte del Fisco.",
        },
        {
          label: "Induttivo puro: presupposti tassativi e doppia motivazione",
          body:
            "L'induttivo extracontabile scatta solo nei casi previsti dall'art. 39, comma 2: reddito d'impresa non indicato in dichiarazione; scritture contabili non tenute, sottratte all'ispezione o indisponibili per forza maggiore; irregolarità così gravi, numerose e ripetute da rendere la contabilità inattendibile nel complesso; inottemperanza agli inviti degli uffici (lett. d-bis). Essendo molto invasivo, il contribuente gode di una doppia tutela: l'ufficio deve fornire una <strong>doppia motivazione</strong> — spiegare perché le scritture sono inattendibili e motivare la ricostruzione induttiva. Se cade la prima, cade tutto. E si tassa sempre il <strong>reddito netto</strong>, mai il lordo: anche i costi vanno ricostruiti induttivamente.",
        },
        {
          label: "Dagli studi di settore agli ISA",
          body:
            "Gli studi di settore erano uno strumento matematico-statistico che confrontava i dati del contribuente con la capacità reddituale potenziale del contribuente medio della categoria; si applicavano solo alle categorie con studio approvato e a chi dichiarava ricavi o compensi fino a 7,5 milioni di euro (esclusi inizio o cessazione dell'attività nell'anno). Dal 2019 sono definitivamente sostituiti dagli <strong>ISA</strong> (indici sintetici di affidabilità fiscale): un punteggio da 1 a 10 assegnato in base a indicatori elementari di affidabilità e di anomalia, calcolato su un arco di 8 anni anziché uno; l'obiettivo primario è il dialogo tra Fisco e contribuente e i punteggi alti danno accesso a benefici premiali.",
        },
        {
          label: "Accertamento parziale e integrativo",
          body:
            "Il principio di unicità dell'accertamento è derogato in due casi. L'accertamento <strong>parziale</strong> consente rettifiche specifiche e limitate su <strong>elementi certi</strong> già a disposizione dell'Amministrazione (reddito non dichiarato, maggior ammontare di un reddito parzialmente dichiarato, deduzioni o agevolazioni non spettanti, imposte non versate), senza attività investigativa specifica. L'accertamento <strong>integrativo o modificativo</strong> consente, nei termini di decadenza, di integrare in aumento un avviso già notificato, solo per la sopravvenuta conoscenza di <strong>nuovi e rilevanti elementi</strong>: serve un comportamento incolpevole dell'ufficio, che non è ammesso a \"ripescare\" dati che aveva già (ad esempio un bonifico già agli atti al momento del primo avviso).",
        },
      ],
      giurisprudenza: [
        {
          label: "Cassazione: gli studi di settore sono presunzioni semplici",
          body:
            "La Corte di Cassazione ha riconosciuto agli studi di settore la natura di <strong>presunzione semplice</strong>: il solo scostamento statistico non basta. L'ufficio deve adeguare in contraddittorio il disallineamento alla concreta realtà economica del singolo contribuente e ha l'<strong>obbligo di invitarlo al contraddittorio</strong>: la mancata instaurazione del contraddittorio comporta la <strong>nullità</strong> dell'avviso di accertamento basato sugli studi.",
        },
      ],
      eccezioni: [
        {
          label: "Il sintetico richiede uno scostamento di almeno un quinto",
          body:
            "La determinazione sintetica del reddito è ammessa solo se il reddito complessivo accertabile <strong>eccede di almeno un quinto</strong> quello dichiarato (art. 38, comma 6), e le modifiche all'art. 38 impongono all'ufficio il contraddittorio preventivo. Il contribuente può sempre provare che le spese sono state finanziate con redditi diversi da quelli posseduti nello stesso periodo d'imposta (ad esempio risparmi accumulati o disinvestimenti).",
        },
        {
          label: "Mai tassare il reddito lordo",
          body:
            "Anche nella ricostruzione induttiva più spinta \"vale tutto\" per la prova, ma il risultato deve essere il <strong>reddito netto</strong>: i costi vanno ricostruiti induttivamente insieme ai ricavi, perché non si può tassare il lordo. Errore da evitare in sede d'esame: affermare che nell'induttivo puro l'ufficio possa limitarsi a sommare i ricavi presunti.",
        },
      ],
    },
    sintesi: [
      "Metodi distinti per soggetti con o senza obbligo di scritture contabili",
      "Analitico: metodo ordinario, rettifica voce per voce",
      "Sintetico/redditometro: dal tenore di spesa, scostamento minimo di un quinto",
      "Analitico-induttivo: presunzioni gravi, precise e concordanti",
      "Induttivo puro: presupposti tassativi, presunzioni semplici, doppia motivazione",
      "Studi di settore/ISA: presunzione semplice, contraddittorio a pena di nullità",
    ],
    esempi: [
      {
        titolo: "Marco e il redditometro",
        testo:
          "Marco dichiara redditi per 20.000 €, ma nell'anno ha comprato un SUV da 45.000 €, mantiene una barca ormeggiata a Rimini e ha pagato 8.000 € di vacanze. L'ufficio, ex art. 38 d.P.R. 600/1973, può determinare <strong>sinteticamente</strong> il suo reddito partendo dalle spese sostenute nel periodo d'imposta, dato che il reddito accertabile supera di ben più di <strong>un quinto</strong> quello dichiarato. Prima però deve convocarlo in <strong>contraddittorio</strong>: Marco potrà dimostrare, documenti alla mano, che il SUV è stato pagato con i risparmi di dieci anni depositati sul conto e con la vendita di un box ereditato dalla zia, cioè con redditi diversi da quelli dello stesso periodo d'imposta. Se la prova convince, l'accertamento sintetico si sgonfia.",
      },
      {
        titolo: "La fabbrica di piastrelle senza contabilità",
        testo:
          "La Guardia di Finanza accede alla fabbrica di piastrelle di Rocco e non trova le scritture contabili: solo cartoni di imballaggio con il nome del produttore. È uno dei presupposti tassativi dell'<strong>induttivo puro</strong>. I verificatori ricostruiscono l'attività da elementi di ogni tipo: il bonifico al fornitore di imballaggi trovato sul conto corrente, il questionario inviato a quel fornitore per sapere quanti cartoni ha venduto a Rocco, i consumi di energia elettrica e acqua che rivelano quanto la fabbrica ha lavorato. Da questo \"magazzino virtuale\" stimano i ricavi. Rocco può difendersi attaccando il ragionamento presuntivo (le piastrelle vendute erano di seconda scelta, a prezzo più basso; parte della merce è andata distrutta) e comunque l'ufficio dovrà tassare il <strong>reddito netto</strong>, ricostruendo anche i costi, con la doppia motivazione sull'inattendibilità delle scritture.",
      },
    ],
    flashcards: [
      ["Qual è il metodo ordinario di accertamento?", "L'accertamento analitico: l'ufficio ricostruisce voce per voce il maggior reddito o le improprie detrazioni/deduzioni, rettificando le singole componenti reddituali."],
      ["Quando è ammesso l'accertamento sintetico?", "Quando il reddito complessivo accertabile eccede di almeno un quinto quello dichiarato (art. 38, comma 6), previo contraddittorio obbligatorio; il contribuente può provare che le spese derivano da redditi di altri periodi."],
      ["Cosa distingue l'analitico-induttivo dall'induttivo puro?", "Nell'analitico-induttivo la contabilità non è abbandonata e servono presunzioni gravi, precise e concordanti; nell'induttivo puro la contabilità è inattendibile nel complesso e bastano presunzioni prive di quei requisiti."],
      ["Quali sono i presupposti dell'induttivo extracontabile?", "Reddito d'impresa non dichiarato; scritture non tenute, sottratte all'ispezione o indisponibili per forza maggiore; irregolarità gravi, numerose e ripetute che rendono la contabilità inattendibile; inottemperanza agli inviti (lett. d-bis)."],
      ["Che natura hanno gli studi di settore secondo la Cassazione?", "Presunzione semplice: l'ufficio deve instaurare il contraddittorio e adeguare il risultato alla realtà del singolo contribuente; senza contraddittorio l'avviso è nullo."],
      ["Quando è ammesso l'accertamento integrativo?", "Solo per la sopravvenuta conoscenza di nuovi e rilevanti elementi, con comportamento incolpevole dell'ufficio: non per dati già a disposizione al momento del primo avviso."],
    ],
    comparativa: {
      titolo: "Accertamento analitico-contabile vs induttivo puro",
      a: "Analitico-contabile (art. 39, co. 1)",
      b: "Induttivo puro (art. 39, co. 2)",
      righe: [
        { profilo: "Rapporto con la contabilità", a: "Contabilità attendibile: si sindacano le singole voci", b: "Contabilità inattendibile nel complesso: si può prescinderne del tutto" },
        { profilo: "Presunzioni utilizzabili", a: "Solo qualificate: gravi, precise e concordanti", b: "Anche semplici, prive dei requisiti di gravità, precisione e concordanza" },
        { profilo: "Presupposti", a: "Discrepanze tra bilancio, dichiarazione e norme fiscali", b: "Casi tassativi: scritture omesse, sottratte o gravemente irregolari, inviti disattesi" },
        { profilo: "Garanzie per il contribuente", a: "Rettifica ancorata alle risultanze contabili", b: "Doppia motivazione dell'ufficio e tassazione del solo reddito netto" },
      ],
    },
    quiz: [
      {
        q: "L'accertamento analitico è:",
        opts: [
          "Il metodo ordinario, che ricostruisce il maggior reddito voce per voce",
          "Un metodo eccezionale basato su presunzioni semplici",
          "Il metodo che parte dalle spese sostenute dal contribuente",
          "Un metodo statistico basato sul contribuente medio di categoria",
        ],
        correct: 0,
        difficulty: 1,
        commonError: "Confondere l'analitico con il sintetico, che invece parte dalle spese, o con gli strumenti statistici come gli studi di settore.",
        why: "L'analitico è il metodo ordinario: l'ufficio, pur in presenza di dichiarazione incompleta o infedele, ricostruisce analiticamente il maggior reddito e rettifica le singole componenti reddituali.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
      {
        q: "La determinazione sintetica del reddito è ammessa a condizione che:",
        opts: [
          "Il contribuente sia obbligato alla tenuta delle scritture contabili",
          "Le spese superino di almeno la metà il reddito dichiarato",
          "Il reddito accertabile ecceda di almeno un quinto quello dichiarato",
          "Il contribuente non abbia risposto ai questionari dell'ufficio",
        ],
        correct: 2,
        difficulty: 3,
        commonError: "Ricordare male la soglia: non la metà, ma almeno un quinto di scostamento tra reddito accertabile e dichiarato.",
        why: "L'art. 38, comma 6, ammette la determinazione sintetica solo se il reddito complessivo accertabile eccede di almeno un quinto quello dichiarato; è inoltre previsto l'obbligo di contraddittorio preventivo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
      {
        q: "Nell'accertamento analitico-induttivo l'ufficio può ricorrere a:",
        opts: [
          "Qualsiasi presunzione, anche priva di gravità, precisione e concordanza",
          "Presunzioni qualificate, cioè gravi, precise e concordanti",
          "Sole prove documentali dirette, con esclusione di ogni presunzione",
          "Presunzioni legali assolute che non ammettono prova contraria",
        ],
        correct: 1,
        difficulty: 2,
        commonError: "Attribuire all'analitico-induttivo le presunzioni \"libere\", che caratterizzano invece l'induttivo puro.",
        why: "Nell'analitico-induttivo i rilievi si basano su ragionamenti presuntivi qualificati: presunzioni dotate di gravità, precisione e concordanza, ad esempio fondate sulla percentuale di ricarico o sui fattori produttivi.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
      {
        q: "Quale tra questi è un presupposto dell'accertamento induttivo puro?",
        opts: [
          "Un semplice scostamento dai risultati degli studi di settore",
          "La presenza di errori di calcolo nella dichiarazione",
          "La mancata risposta a un avviso bonario ex art. 36-bis",
          "Irregolarità delle scritture così gravi, numerose e ripetute da renderle inattendibili nel complesso",
        ],
        correct: 3,
        difficulty: 4,
        commonError: "Ritenere sufficiente qualunque irregolarità contabile: servono i presupposti tassativi dell'art. 39, comma 2.",
        why: "L'induttivo puro è attivabile solo nei casi tassativi previsti: reddito non dichiarato, scritture non tenute o sottratte all'ispezione, irregolarità gravi numerose e ripetute che rendono la contabilità inattendibile, inottemperanza agli inviti (d-bis).",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
      {
        q: "Secondo la Cassazione, l'avviso di accertamento basato sugli studi di settore senza previo contraddittorio è:",
        opts: [
          "Valido, perché lo scostamento statistico è presunzione legale",
          "Annullabile solo se lo scostamento è inferiore a un quinto",
          "Nullo, perché gli studi sono presunzioni semplici da adeguare al caso concreto",
          "Convertibile d'ufficio in accertamento parziale",
        ],
        correct: 2,
        difficulty: 5,
        commonError: "Trattare gli studi di settore come presunzioni legali autosufficienti, dimenticando l'obbligo di contraddittorio.",
        why: "La Cassazione riconosce agli studi natura di presunzione semplice: l'ufficio deve invitare il contribuente al contraddittorio e adeguare il risultato alla sua concreta realtà economica; la mancata instaurazione del contraddittorio comporta la nullità dell'avviso.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
      {
        q: "Gli ISA, rispetto agli studi di settore:",
        opts: [
          "Stimano il ricavo più probabile su un solo anno d'imposta",
          "Assegnano un punteggio da 1 a 10 su un arco temporale di 8 anni, con benefici premiali",
          "Si applicano solo ai contribuenti con ricavi superiori a 7,5 milioni di euro",
          "Sono stati abbandonati nel 2019 in favore del redditometro",
        ],
        correct: 1,
        difficulty: 3,
        commonError: "Invertire i termini del confronto: è lo studio di settore a lavorare su un solo anno, mentre gli ISA considerano 8 anni.",
        why: "Gli ISA, subentrati definitivamente dal 2019, attribuiscono un punteggio da 1 a 10 in base a indicatori di affidabilità e di anomalia su un arco di 8 anni; puntano al dialogo tra Fisco e contribuente e i valori alti danno accesso a benefici premiali.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
      {
        q: "L'accertamento integrativo è ammesso quando:",
        opts: [
          "L'ufficio intende correggere un proprio errore di calcolo nel primo avviso",
          "Il contribuente ha presentato dichiarazione integrativa a proprio favore",
          "Sopravviene la conoscenza di nuovi e rilevanti elementi, incolpevolmente ignorati prima",
          "L'ufficio dispone di dati già agli atti ma non valutati nel primo avviso",
        ],
        correct: 2,
        difficulty: 4,
        commonError: "Ammettere l'integrativo per dati già in possesso dell'ufficio: serve invece un'ignoranza incolpevole di elementi nuovi.",
        why: "L'integrativo deroga all'unicità dell'accertamento solo per la sopravvenuta conoscenza di nuovi e rilevanti elementi; se il dato (ad esempio un bonifico) era già disponibile al momento del primo avviso, l'integrazione non è consentita.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 13",
      },
    ],
    veroFalso: [
      {
        aff: "Nell'accertamento induttivo puro l'ufficio può tassare il reddito lordo ricostruito, senza considerare i costi.",
        vero: false,
        traccia: "Falso. Anche nella ricostruzione induttiva va determinato il reddito netto: i costi devono essere ricostruiti induttivamente insieme ai ricavi, perché non è possibile tassare il reddito lordo.",
      },
      {
        aff: "L'accertamento parziale deroga al principio di unicità e globalità dell'accertamento.",
        vero: true,
        traccia: "Vero. L'accertamento parziale consente rettifiche specifiche e limitate basate su elementi certi già a disposizione dell'Amministrazione, senza attività investigativa specifica, e costituisce una delle due deroghe tipizzate all'unicità dell'accertamento, insieme all'integrativo.",
      },
      {
        aff: "L'accertamento sintetico si applica ai soggetti obbligati alla tenuta delle scritture contabili.",
        vero: false,
        traccia: "Falso. Il sintetico e il redditometro riguardano i soggetti non obbligati alle scritture contabili (persone fisiche, società semplici, enti non commerciali); per gli obbligati operano l'analitico-contabile, l'analitico-induttivo e l'induttivo extracontabile.",
      },
    ],
    aperta: {
      q: "Il candidato illustri i metodi di accertamento, soffermandosi sulla distinzione tra accertamento analitico-induttivo e induttivo puro.",
      traccia:
        "I metodi di accertamento si distinguono a seconda che il contribuente sia o meno obbligato alle scritture contabili. Per i non obbligati operano l'accertamento analitico, metodo ordinario di ricostruzione voce per voce, e il sintetico ex art. 38 d.P.R. 600/1973, fondato sulle spese sostenute (nella variante redditometrica su elementi indicativi di capacità contributiva), ammesso solo se il reddito accertabile eccede di almeno un quinto il dichiarato e previo contraddittorio. Per gli obbligati alle scritture, l'art. 39 delinea una progressione: l'analitico-contabile sindaca le singole voci di una contabilità attendibile; l'analitico-induttivo rettifica mediante presunzioni qualificate, gravi, precise e concordanti, senza abbandonare la contabilità; l'induttivo puro, attivabile solo nei casi tassativi del comma 2 (scritture omesse, sottratte o inattendibili nel complesso, reddito non dichiarato, inviti disattesi), consente la ricostruzione extracontabile con presunzioni anche prive dei requisiti qualificanti. La maggiore invasività è bilanciata dalla doppia motivazione — sull'inattendibilità delle scritture e sulla ricostruzione — e dall'obbligo di tassare il solo reddito netto.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 13",
    },
    consigliate: ["mappa", "comparativa", "flashcards", "mcq", "esempi"],
    media: {
      podcast: {
        title: "I metodi di accertamento: dal voce per voce al redditometro",
        chapters: [
          ["Analitico e sintetico: chi non tiene le scritture", 0],
          ["Analitico-contabile e analitico-induttivo", 300],
          ["Induttivo puro: presupposti e doppia motivazione", 580],
          ["Studi di settore, ISA, parziale e integrativo", 880],
        ],
      },
      mappa: true,
    },
  },

  {
    id: "deflattivi",
    part: "generale",
    chapter: 4,
    chapterTitle: "Dichiarazione, controlli e accertamento",
    title: "Gli istituti deflattivi del contenzioso",
    subtitle: "Autotutela, accertamento con adesione, acquiescenza, reclamo-mediazione, ravvedimento operoso",
    articoli: ["d.lgs. 218/1997", "art. 15 d.lgs. 218/1997", "art. 13 d.lgs. 472/1997", "art. 17-bis d.lgs. 546/1992"],
    pages: [39, 41],
    depth: "deep",
    layers: {
      essenziale:
        "Gli istituti deflattivi sono gli strumenti che permettono a Fisco e contribuente di <strong>chiudere una lite prima o senza il processo</strong>, con sanzioni ridotte per chi collabora. L'<strong>autotutela</strong> è il potere/dovere del Fisco di annullare da sé i propri atti illegittimi o infondati (errore di persona, di calcolo, doppia imposizione, pagamenti non considerati...): può attivarsi su iniziativa dell'ufficio, del contribuente (con istanza solo sollecitatoria) o del Garante, ma <strong>non sospende i termini per il ricorso</strong>. Con il <strong>ravvedimento operoso</strong> il contribuente rimedia spontaneamente a versamenti o dichiarazioni errati con sanzioni ridotte in misura crescente col tempo: da 1/10 (ravvedimento breve) fino a 1/5 (dopo la contestazione). L'<strong>accertamento con adesione</strong> (d.lgs. 218/1997) è una trattativa: contribuente e ufficio si siedono al tavolo (contraddittorio), possono ridurre la pretesa e le <strong>sanzioni scendono a 1/3 del minimo</strong> edittale; l'istanza sospende per <strong>90 giorni</strong> i termini di impugnazione e la procedura si perfeziona solo con il <strong>pagamento</strong> (in unica soluzione entro 20 giorni o fino a 8 rate trimestrali). Esempio: Sara riceve un avviso da 10.000 €, presenta istanza di adesione e chiude a 7.000 € con sanzioni ridotte. Con l'<strong>acquiescenza</strong> (art. 15 d.lgs. 218/1997) il contribuente rinuncia a impugnare e a chiedere l'adesione, paga entro il termine per il ricorso e ottiene sanzioni <strong>ridotte a 1/3</strong>, senza alcuna istanza preventiva. Il <strong>reclamo-mediazione</strong>, infine, è un ricorso \"anticipato\": per 90 giorni dalla notifica il ricorso non è procedibile e la lite può chiudersi in via amministrativa, anche con una proposta di mediazione del contribuente.",
      approfondimenti: [
        {
          label: "Autotutela: vizi, limiti e autotutela sostitutiva",
          body:
            "I vizi che giustificano l'annullamento d'ufficio (elenco non tassativo) comprendono: errore di persona, evidente errore logico o di calcolo, errore sul presupposto dell'imposta, doppia imposizione, mancata considerazione di pagamenti, mancanza di documentazione, requisiti per deduzioni o regimi agevolati prima negati, errore materiale del contribuente. La pendenza di un giudizio sull'atto viziato non impedisce il riesame; non è invece annullabile l'atto coperto da <strong>giudicato favorevole all'Amministrazione</strong>. L'<strong>autotutela sostitutiva</strong> — ritiro dell'atto e sua sostituzione con uno nuovo — è ammessa solo per sanare vizi formali (es. sottoscrizione e notifica), entro i termini di accertamento e con comunicazione al contribuente.",
        },
        {
          label: "Il procedimento di adesione, passo per passo",
          body:
            "Il contraddittorio si instaura su invito dell'ufficio o su istanza del contribuente, dopo accessi, ispezioni o verifiche oppure dopo la notifica di un avviso non preceduto da invito; in quest'ultimo caso l'istanza in carta libera, presentata prima dell'impugnazione, sospende per 90 giorni i termini per ricorrere (la rinuncia formale all'istanza interrompe la sospensione). Seguono la comparizione delle parti, i verbali degli incontri e, in caso di accordo, l'<strong>atto di adesione</strong> sottoscritto da entrambe le parti, con motivazione adeguata e liquidazione di maggiori imposte e interessi. La sottoscrizione è condizione necessaria ma non sufficiente: il perfezionamento si ha con il pagamento (unica soluzione entro 20 giorni o massimo 8 rate trimestrali), con quietanza all'ufficio entro i 10 giorni successivi.",
        },
        {
          label: "Acquiescenza e definizione agevolata delle sanzioni",
          body:
            "L'acquiescenza (art. 15 d.lgs. 218/1997) premia chi rinuncia sia a impugnare l'avviso di accertamento o di liquidazione sia a formulare istanza di adesione, pagando entro il termine per il ricorso: sanzioni ridotte a 1/3. Vale anche per gli avvisi di liquidazione e per gli avvisi di rettifica e liquidazione dell'imposta di successione; la quietanza va consegnata entro 10 giorni dal versamento. La <strong>definizione agevolata delle sanzioni</strong> è diversa: si pagano le sole sanzioni in misura di 1/3 dei minimi previsti per le violazioni più gravi relative a ciascun tributo (senza sanzioni accessorie), ma resta possibile <strong>proporre ricorso</strong> limitatamente alle imposte accertate.",
        },
        {
          label: "Adesione ai PVC, pace fiscale e conciliazione",
          body:
            "L'adesione ai PVC consentiva di accettare integralmente la maggiore pretesa risultante dal verbale (imposte sui redditi, IVA, IRAP) entro 30 giorni dalla consegna, con sanzioni pari alla metà di quelle dell'adesione e versamento con F24 entro 20 giorni dall'atto di definizione. La <strong>pace fiscale</strong> raggruppa misure di regolarizzazione con pagamento delle sole imposte, senza sanzioni né interessi; la definizione degli atti di accertamento era una forma agevolata simile all'acquiescenza ma più favorevole (sola quota capitale). Alla stessa logica deflattiva risponde, una volta instaurato il processo, la <strong>conciliazione giudiziale</strong>, che consente di definire la controversia davanti al giudice tributario.",
        },
      ],
      giurisprudenza: [
        {
          label: "Cassazione sul diniego di autotutela",
          body:
            "Sul diniego di autotutela la Cassazione ha affermato che il contribuente deve prospettare l'esistenza di un <strong>interesse di rilevanza generale</strong> dell'Amministrazione alla rimozione dell'atto: non basta far valere la propria posizione individuale, perché l'autotutela non è un secondo grado di giudizio sull'atto ormai definitivo.",
        },
      ],
      eccezioni: [
        {
          label: "L'autotutela non salva i termini di ricorso",
          body:
            "Errore classico: presentare istanza di autotutela e lasciar scadere i 60 giorni per impugnare. L'esercizio dell'autotutela <strong>non sospende i termini</strong> per la proposizione del ricorso, e l'istanza del contribuente è meramente sollecitatoria: chi vuole difendersi deve comunque impugnare l'atto nei termini, altrimenti l'avviso diventa definitivo.",
        },
        {
          label: "Adesione: la firma non basta",
          body:
            "L'atto di adesione sottoscritto da entrambe le parti <strong>non perfeziona</strong> la procedura: la sottoscrizione è condizione necessaria ma non sufficiente. Il perfezionamento si ha solo con il pagamento dell'intero importo o della prima rata; solo da quel momento l'atto impositivo originario perde efficacia.",
        },
      ],
    },
    sintesi: [
      "Deflattivi: chiudere la lite prima o senza il processo, con sanzioni ridotte",
      "Autotutela: annullamento d'ufficio di atti illegittimi; non sospende il ricorso",
      "Ravvedimento: sanzioni da 1/10 a 1/5 secondo la tempestività",
      "Adesione: contraddittorio, sanzioni a 1/3 del minimo, sospensione di 90 giorni",
      "Perfezionamento dell'adesione solo con il pagamento, non con la firma",
      "Acquiescenza: rinuncia al ricorso e pagamento, sanzioni ridotte a 1/3",
    ],
    esempi: [
      {
        titolo: "Sara tratta con l'ufficio",
        testo:
          "Sara, titolare di un negozio di arredamento, riceve un avviso di accertamento non preceduto da invito: 10.000 € di maggiori imposte più sanzioni. Prima di impugnare, presenta in carta libera un'<strong>istanza di accertamento con adesione</strong>: i termini per il ricorso restano sospesi per <strong>90 giorni</strong>. Al tavolo con l'ufficio, la sua commercialista dimostra che parte dei ricavi contestati erano vendite poi stornate: la pretesa scende a 7.000 € e le sanzioni sono ridotte a <strong>1/3 del minimo edittale</strong>. Viene redatto l'atto di adesione, firmato da entrambe le parti, ma attenzione: la procedura si perfeziona solo con il <strong>pagamento</strong>. Sara sceglie 8 rate trimestrali, versa la prima e consegna la quietanza all'ufficio entro 10 giorni: da quel momento l'avviso originario perde efficacia.",
      },
      {
        titolo: "Il ravvedimento di Gianni",
        testo:
          "Gianni, artigiano, si accorge a fine mese di non aver versato 2.000 € di IVA alla scadenza. Nessuno lo ha ancora contestato: può usare il <strong>ravvedimento operoso</strong>. Versa l'imposta, gli interessi di mora e una sanzione ridotta secondo la tempestività: <strong>1/10</strong> con il ravvedimento breve, 1/9 con quello lungo, 1/8 con quello annuale, 1/7 oltre l'anno, 1/6 con il \"lunghissimo\" e 1/5 dopo la contestazione. La logica è lineare: prima ci si ravvede, meno si paga. Se invece Gianni avesse aspettato l'avviso di accertamento, avrebbe potuto ancora scegliere l'<strong>acquiescenza</strong>: rinunciare a impugnare e pagare entro il termine per il ricorso, con sanzioni ridotte a 1/3, senza alcuna istanza preventiva all'ufficio.",
      },
    ],
    flashcards: [
      ["Cos'è l'autotutela tributaria?", "Il potere/dovere dell'Amministrazione di annullare, totalmente o parzialmente, i propri atti illegittimi o infondati; attivabile d'ufficio, su istanza sollecitatoria del contribuente o su iniziativa del Garante."],
      ["L'istanza di autotutela sospende i termini per il ricorso?", "No: il contribuente deve comunque impugnare l'atto entro i termini, altrimenti diventa definitivo. Limite all'autotutela: l'atto coperto da giudicato favorevole all'Amministrazione."],
      ["Quali benefici dà l'accertamento con adesione?", "Riduzione della pretesa fiscale in contraddittorio e sanzioni ridotte a 1/3 del minimo edittale; l'istanza sospende per 90 giorni i termini di impugnazione."],
      ["Quando si perfeziona l'adesione?", "Con il pagamento: in unica soluzione entro 20 giorni o con la prima di massimo 8 rate trimestrali; la quietanza va consegnata entro i 10 giorni successivi. La firma dell'atto non basta."],
      ["Cos'è l'acquiescenza?", "La rinuncia a impugnare l'avviso e a chiedere l'adesione, con pagamento entro il termine per il ricorso: sanzioni ridotte a 1/3, senza istanza preventiva (art. 15 d.lgs. 218/1997)."],
      ["Come funziona il reclamo-mediazione?", "È un ricorso anticipato: per 90 giorni dalla notifica il ricorso non è procedibile e la lite può chiudersi in via amministrativa; il contribuente può inserire una proposta di mediazione."],
    ],
    comparativa: {
      titolo: "Accertamento con adesione vs acquiescenza",
      a: "Accertamento con adesione",
      b: "Acquiescenza",
      righe: [
        { profilo: "Meccanismo", a: "Contraddittorio con l'ufficio: la pretesa può essere ridotta", b: "Rinuncia a impugnare e a chiedere adesione: la pretesa resta quella dell'atto" },
        { profilo: "Iniziativa", a: "Invito dell'ufficio o istanza del contribuente", b: "Nessuna richiesta preventiva all'ufficio: basta pagare nei termini" },
        { profilo: "Sanzioni", a: "Ridotte a 1/3 del minimo edittale", b: "Ridotte a 1/3, pagando entro il termine per il ricorso" },
        { profilo: "Effetti sui termini", a: "L'istanza sospende per 90 giorni i termini di impugnazione", b: "Pagamento entro il termine per il ricorso; quietanza entro 10 giorni" },
      ],
    },
    quiz: [
      {
        q: "L'esercizio dell'autotutela da parte dell'Amministrazione finanziaria:",
        opts: [
          "Sospende automaticamente i termini per la proposizione del ricorso",
          "Non sospende i termini per il ricorso, che il contribuente deve rispettare",
          "Interrompe i termini, che ricominciano a decorrere dal diniego",
          "Rende inammissibile il ricorso già proposto contro l'atto",
        ],
        correct: 1,
        difficulty: 4,
        commonError: "Confidare nell'istanza di autotutela lasciando scadere i termini di impugnazione: l'istanza è meramente sollecitatoria.",
        why: "L'autotutela non sospende i termini per il ricorso: il contribuente deve comunque impugnare l'atto nei termini previsti, altrimenti l'avviso diventa definitivo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 14",
      },
      {
        q: "Con l'accertamento con adesione le sanzioni sono ridotte:",
        opts: [
          "Alla metà del massimo edittale previsto per la violazione",
          "A 1/10 del minimo, come nel ravvedimento breve",
          "A 1/3 del minimo edittale",
          "A 2/3 di quelle irrogate nell'atto impositivo",
        ],
        correct: 2,
        difficulty: 2,
        commonError: "Confondere la misura dell'adesione (1/3 del minimo) con le riduzioni del ravvedimento o dei controlli formali.",
        why: "L'adesione determina la riduzione della pretesa fiscale in contraddittorio e la riduzione delle sanzioni a 1/3 del minimo edittale.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 14",
      },
      {
        q: "L'istanza di accertamento con adesione presentata prima dell'impugnazione:",
        opts: [
          "Sospende per 90 giorni i termini per impugnare l'atto impositivo",
          "Fa perdere immediatamente efficacia all'avviso di accertamento",
          "Obbliga l'ufficio ad accettare la proposta del contribuente",
          "Preclude definitivamente la successiva proposizione del ricorso",
        ],
        correct: 0,
        difficulty: 3,
        commonError: "Credere che l'istanza chiuda la partita: se in 90 giorni non si trova l'accordo, il contribuente può ancora impugnare.",
        why: "L'invio della domanda di adesione prima del decorso dei termini per impugnare sospende per 90 giorni i termini di impugnazione; decorsi i 90 giorni senza accordo, il contribuente può impugnare l'atto. La rinuncia formale all'istanza interrompe la sospensione.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 14",
      },
      {
        q: "La procedura di accertamento con adesione si perfeziona:",
        opts: [
          "Con la sottoscrizione dell'atto di adesione da entrambe le parti",
          "Con la comparizione del contribuente al contraddittorio",
          "Con la notifica dell'atto di adesione al contribuente",
          "Con il pagamento in unica soluzione entro 20 giorni o della prima rata",
        ],
        correct: 3,
        difficulty: 4,
        commonError: "Ritenere sufficiente la firma dell'atto di adesione: la sottoscrizione è condizione necessaria ma non sufficiente.",
        why: "Il perfezionamento si ha con il pagamento: unica soluzione entro 20 giorni oppure forma rateale in massimo 8 rate trimestrali, con quietanza all'ufficio entro i 10 giorni successivi.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 14",
      },
      {
        q: "Nel ravvedimento operoso \"breve\" la sanzione è ridotta a:",
        opts: [
          "Un quinto",
          "Un decimo",
          "Un terzo",
          "Un sesto",
        ],
        correct: 1,
        difficulty: 1,
        commonError: "Scambiare la scala delle riduzioni: 1/10 breve, 1/9 lungo, 1/8 annuale, 1/7 oltre l'anno, 1/6 lunghissimo, 1/5 post contestazione.",
        why: "La riduzione dipende dalla tempestività: nel ravvedimento breve la sanzione è ridotta a 1/10, e cresce progressivamente fino a 1/5 nel ravvedimento successivo alla contestazione.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 14",
      },
      {
        q: "Il reclamo, nell'ambito del reclamo-mediazione:",
        opts: [
          "È un'istanza amministrativa del tutto distinta e alternativa al ricorso",
          "Sospende per 60 giorni la riscossione delle somme accertate",
          "È un ricorso anticipato: non è procedibile per 90 giorni dalla notifica",
          "Richiede l'accettazione preventiva della proposta da parte dell'ufficio",
        ],
        correct: 2,
        difficulty: 3,
        commonError: "Considerare il reclamo un atto diverso dal ricorso: reclamo e ricorso coincidono, cambia solo la fase amministrativa iniziale.",
        why: "Il reclamo non è distinto dal ricorso: è un ricorso anticipato, improcedibile fino alla scadenza dei 90 giorni dalla notifica entro cui la procedura amministrativa deve concludersi; il contribuente può inserirvi una proposta di mediazione. La ratio è l'economicità dell'azione amministrativa.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 14",
      },
    ],
    veroFalso: [
      {
        aff: "Non è suscettibile di annullamento in autotutela l'atto passato in giudicato a favore dell'Amministrazione finanziaria.",
        vero: true,
        traccia: "Vero. Il giudicato favorevole all'Amministrazione è il limite dell'autotutela; per contro, la semplice pendenza di un giudizio sull'atto viziato non impedisce il riesame in autotutela.",
      },
      {
        aff: "L'acquiescenza richiede una preventiva istanza all'ufficio competente, come l'accertamento con adesione.",
        vero: false,
        traccia: "Falso. L'acquiescenza (art. 15 d.lgs. 218/1997) non necessita di alcuna richiesta preventiva: basta rinunciare a impugnare e a chiedere l'adesione, pagando le somme dovute entro il termine per la proposizione del ricorso, con sanzioni ridotte a 1/3.",
      },
      {
        aff: "La definizione agevolata delle sanzioni consente comunque di proporre ricorso limitatamente alle imposte accertate.",
        vero: true,
        traccia: "Vero. A differenza dell'acquiescenza, la definizione agevolata riguarda le sole sanzioni (pagate in misura di 1/3 dei minimi, senza sanzioni accessorie) e lascia aperta la via del ricorso sulle imposte accertate.",
      },
    ],
    aperta: {
      q: "Il candidato illustri gli istituti deflattivi del contenzioso tributario, con particolare riguardo all'accertamento con adesione.",
      traccia:
        "Gli istituti deflattivi valorizzano la collaborazione tra Amministrazione e contribuente per prevenire o chiudere le liti. L'autotutela è il potere/dovere del Fisco di annullare i propri atti illegittimi o infondati (elenco di vizi non tassativo), senza che l'istanza del contribuente, meramente sollecitatoria, sospenda i termini di ricorso; limite è il giudicato favorevole all'Amministrazione. Il ravvedimento operoso consente la regolarizzazione spontanea con sanzioni ridotte da 1/10 a 1/5 secondo la tempestività. L'accertamento con adesione (d.lgs. 218/1997), applicabile a tutti i contribuenti e a tutte le imposte, definisce la controversia in contraddittorio nella fase pre-giudiziale: l'istanza sospende per 90 giorni i termini di impugnazione, l'accordo si traduce nell'atto di adesione motivato e sottoscritto da entrambe le parti, ma il perfezionamento si ha solo con il pagamento (unica soluzione entro 20 giorni o massimo 8 rate trimestrali), con riduzione delle sanzioni a 1/3 del minimo. Completano il sistema l'acquiescenza (sanzioni a 1/3 senza istanza preventiva), la definizione agevolata delle sanzioni e il reclamo-mediazione, ricorso anticipato improcedibile per 90 giorni.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 14",
    },
    consigliate: ["mappa", "comparativa", "flashcards", "mcq", "verofalso"],
    media: {
      podcast: {
        title: "Chiudere la lite col Fisco: gli istituti deflattivi",
        chapters: [
          ["Autotutela e ravvedimento operoso", 0],
          ["L'accertamento con adesione", 300],
          ["Acquiescenza e definizione agevolata", 600],
          ["Reclamo-mediazione, adesione ai PVC e pace fiscale", 840],
        ],
      },
      mappa: true,
    },
  },
];
