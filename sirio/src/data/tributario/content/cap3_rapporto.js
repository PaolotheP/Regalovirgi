/* =========================================================================
   SIRIO — DIRITTO TRIBUTARIO · Capitolo 3: Il rapporto d'imposta.
   Fonte: Loconte, Manuale di diritto tributario — capp. 6, 7, 8 e 9
   (dispensa corso LUM, pagg. 16-24). Nessuna integrazione esterna salvo
   definizioni generali di sovraimposte, addizionali ed agevolazioni.
   ========================================================================= */

export const TRIB_CAP3 = [
  {
    id: "statuto",
    part: "generale",
    chapter: 3,
    chapterTitle: "Il rapporto d'imposta",
    title: "Lo Statuto del contribuente",
    subtitle: "L. 212/2000: fissità, irretroattività, motivazione, buona fede, interpello, verifiche, Garante",
    articoli: ["L. 212/2000", "artt. 3, 23, 53, 97 Cost.", "art. 11 L. 212/2000", "art. 12 L. 212/2000"],
    pages: [16, 18],
    depth: "deep",
    layers: {
      essenziale:
        "Lo <strong>Statuto dei diritti del contribuente</strong> (legge n. 212 del 2000) è la legge che mette per iscritto le regole del gioco tra il Fisco e chi paga le tasse, per riequilibrare un rapporto storicamente sbilanciato a favore dell'amministrazione. Esempio: se l'Agenzia delle Entrate manda a Luca un avviso di accertamento, deve spiegargli <em>perché</em> (fatti e ragioni giuridiche), altrimenti l'atto è viziato. Lo Statuto attua gli <strong>articoli 3, 23, 53 e 97 della Costituzione</strong> e contiene tre gruppi di norme: limiti al futuro legislatore (artt. 1-4), obblighi dell'amministrazione finanziaria (artt. 5-9), diritti e garanzie del contribuente (artt. 10 ss.). I capisaldi: <strong>fissità</strong> (art. 1: le norme dello Statuto si derogano solo espressamente e mai con leggi speciali), divieto di <strong>norme intruse</strong> (art. 2: le leggi non tributarie non possono contenere norme fiscali), <strong>irretroattività</strong> delle norme tributarie (art. 3), divieto di istituire nuovi tributi con decreto-legge (art. 4), <strong>motivazione degli atti</strong> (art. 7), <strong>collaborazione e buona fede</strong> (art. 10), <strong>interpello</strong> (art. 11: si chiede al Fisco come applicare una norma dubbia), garanzie nelle <strong>verifiche fiscali</strong> (art. 12, con il contraddittorio) e <strong>Garante del contribuente</strong> (art. 13).",
      approfondimenti: [
        {
          label: "Fissità e chiarezza (artt. 1-2)",
          body: "L'art. 1 dice che le disposizioni dello Statuto sono <strong>principi generali dell'ordinamento tributario</strong> e possono essere derogate o modificate <em>solo espressamente e mai da leggi speciali</em>: niente abrogazioni tacite o nascoste. Le norme di interpretazione autentica sono ammesse solo in casi eccezionali, con legge ordinaria e rubricate come tali. L'art. 2 impone chiarezza: le leggi tributarie devono indicare l'oggetto nel titolo e nelle rubriche, e le leggi non tributarie non possono contenere disposizioni fiscali (divieto di norme intruse), salvo quelle strettamente inerenti al loro oggetto."
        },
        {
          label: "Irretroattività e decreto-legge (artt. 3-4)",
          body: "Le disposizioni tributarie <strong>non hanno effetto retroattivo</strong>: valgono solo per il futuro, a tutela della certezza del diritto e dell'affidamento. Per i tributi periodici (come l'IRPEF) le modifiche partono dal <em>periodo d'imposta successivo</em>. Nuovi adempimenti non possono scadere prima di 60 giorni dall'entrata in vigore, e i termini di prescrizione e decadenza per gli accertamenti non possono essere prorogati. L'art. 4 vieta di istituire nuovi tributi con decreto-legge o di estendere tributi esistenti ad altre categorie di soggetti."
        },
        {
          label: "Interpello (art. 11)",
          body: "Il contribuente può chiedere per iscritto al Fisco come applicare una norma tributaria a un <strong>caso concreto e personale</strong>, se ci sono <em>obiettive condizioni di incertezza</em> interpretativa. Nell'istanza deve già proporre la propria interpretazione. L'amministrazione risponde entro <strong>120 giorni</strong>; se non risponde, il <strong>silenzio vale assenso</strong>. La risposta vincola solo per la questione posta e <em>solo per chi ha presentato l'istanza</em> (domanda classica d'esame); ogni atto emanato in difformità è nullo, e senza risposta nei termini non si applicano sanzioni sulla questione."
        },
        {
          label: "Verifiche (art. 12) e Garante (art. 13)",
          body: "Dopo la consegna del processo verbale di chiusura delle operazioni (PVC), il contribuente ha <strong>60 giorni</strong> per presentare osservazioni e richieste, che gli uffici devono valutare: è il <strong>contraddittorio</strong>. L'avviso di accertamento non può essere emesso prima della scadenza dei 60 giorni, salvo particolare e motivata urgenza, a pena di nullità. Il <strong>Garante del contribuente</strong> è un organo monocratico (magistrati, avvocati, professori universitari, notai) che tutela il contribuente contro i disservizi del Fisco: chiede documenti, sollecita l'autotutela, rivolge raccomandazioni, riferisce ogni sei mesi al Ministro."
        }
      ],
      giurisprudenza: [
        {
          label: "Cass. 17576/2002 e 7080/2004: il rango dello Statuto",
          body: "La Cassazione ha chiarito che valore hanno le norme dello Statuto, che sono pur sempre legge ordinaria. Con le sentenze n. 17576 del 2002 e n. 7080 del 14 aprile 2004 ha riconosciuto ai principi statutari una <strong>rilevanza del tutto particolare</strong> e una <em>sostanziale superiorità</em> rispetto alle altre disposizioni tributarie, con funzione di <strong>orientamento ermeneutico vincolante</strong>: nel dubbio, l'interprete deve preferire il significato conforme allo Statuto, perché conforme alle norme costituzionali che esso attua."
        },
        {
          label: "Principi \"immanenti\" nell'ordinamento",
          body: "Sempre secondo la Cassazione (n. 17576/2002, ripresa dalla n. 7080/2004), alcuni principi dello Statuto — proprio perché esplicitazioni, in materia tributaria, delle norme costituzionali richiamate — devono ritenersi <strong>immanenti nell'ordinamento già prima</strong> dell'entrata in vigore della legge 212/2000, e quindi vincolanti l'interprete in forza del canone dell'<em>interpretazione adeguatrice</em> a Costituzione."
        }
      ],
      eccezioni: [
        {
          label: "Le norme di interpretazione autentica",
          body: "Il divieto di retroattività dell'art. 3 ha un limite fisiologico: le norme di <strong>interpretazione autentica</strong> hanno efficacia retroattiva per loro natura, perché si limitano a precisare il significato di disposizioni precedenti. Lo Statuto le tollera solo in casi eccezionali, con legge ordinaria (mai decreto-legge) e con rubrica che le qualifichi espressamente come tali."
        },
        {
          label: "Errore da evitare: Statuto = legge costituzionale",
          body: "Lo Statuto <strong>non è una legge costituzionale</strong>: è una legge ordinaria che attua principi costituzionali. Formalmente può quindi essere derogato da una legge successiva, purché in modo <em>espresso</em> e mai con leggi speciali; la sua forza sta nel valore interpretativo riconosciuto dalla Cassazione, non in una supremazia gerarchica."
        }
      ]
    },
    sintesi: [
      "L. 212/2000: riequilibra il rapporto Fisco-contribuente, attua artt. 3, 23, 53, 97 Cost.",
      "Fissità (art. 1): deroghe solo espresse, mai con leggi speciali.",
      "Art. 3: norme tributarie irretroattive; adempimenti mai prima di 60 giorni.",
      "Art. 7: gli atti del Fisco vanno motivati (presupposti di fatto e ragioni giuridiche).",
      "Interpello (art. 11): risposta in 120 giorni, silenzio-assenso, vale solo per il richiedente.",
      "Art. 12, co. 7: 60 giorni di contraddittorio dopo il PVC, prima dell'accertamento."
    ],
    esempi: [
      {
        titolo: "L'interpello della dott.ssa Bianchi",
        testo: "La dott.ssa Bianchi, commercialista, deve applicare per un cliente una norma fiscale nuova e davvero ambigua: nessuna circolare l'ha ancora chiarita. Presenta allora un'<strong>istanza di interpello</strong> all'Agenzia delle Entrate, descrivendo il caso concreto del cliente e proponendo la propria interpretazione (non può limitarsi a fare una domanda generica). Passano 120 giorni senza risposta: il <strong>silenzio vale assenso</strong>, cioè l'amministrazione si considera d'accordo con la soluzione prospettata. Se in futuro l'Agenzia emettesse un atto impositivo in contrasto con quella soluzione, l'atto sarebbe <strong>nullo</strong>. Attenzione però: la risposta (anche tacita) vale solo per il cliente della dott.ssa Bianchi e solo per quella questione, non per tutti i contribuenti."
      },
      {
        titolo: "La verifica nel negozio di Marco",
        testo: "La Guardia di Finanza conclude una verifica fiscale nel negozio di abbigliamento di Marco e gli consegna il <strong>processo verbale di constatazione</strong>. Marco non è d'accordo su alcuni rilievi: grazie all'art. 12, comma 7, dello Statuto ha <strong>60 giorni</strong> per inviare osservazioni e richieste, che l'ufficio deve valutare. L'Agenzia delle Entrate, presa dalla fretta, gli notifica l'avviso di accertamento dopo soli 30 giorni, senza indicare alcuna urgenza particolare: l'avviso è <strong>nullo</strong>, perché emesso prima della scadenza del termine senza casi di particolare e motivata urgenza. Il contraddittorio non è una cortesia: è una garanzia riconosciuta come principio generale anche dalla Corte di Giustizia UE."
      }
    ],
    flashcards: [
      ["Cosa prevede il principio di fissità (art. 1 Statuto)?", "Le norme dello Statuto, principi generali dell'ordinamento tributario, possono essere derogate o modificate solo espressamente e mai da leggi speciali."],
      ["Le norme tributarie possono essere retroattive?", "No (art. 3 Statuto): valgono solo per il futuro; per i tributi periodici le modifiche si applicano dal periodo d'imposta successivo. Fanno eccezione le norme di interpretazione autentica."],
      ["Entro quanto risponde il Fisco a un interpello e cosa accade se tace?", "Entro 120 giorni; il silenzio vale assenso all'interpretazione prospettata dal contribuente. Gli atti difformi sono nulli."],
      ["Per chi ha valore la risposta all'interpello?", "Solo per il contribuente che ha presentato l'istanza e limitatamente alla questione oggetto dell'interpello."],
      ["Cosa garantisce l'art. 12, co. 7, dello Statuto?", "Dopo il rilascio del PVC il contribuente ha 60 giorni per osservazioni; l'avviso di accertamento emesso prima è nullo, salvo particolare e motivata urgenza."],
      ["Chi è il Garante del contribuente?", "Organo monocratico (art. 13) a tutela del contribuente contro i disservizi del Fisco: chiede documenti, sollecita l'autotutela, richiama gli uffici al rispetto dello Statuto."]
    ],
    comparativa: null,
    quiz: [
      {
        q: "Lo Statuto del contribuente (L. 212/2000) dichiara di attuare gli articoli:",
        opts: ["3, 23, 53 e 97 della Costituzione", "13, 24, 101 e 111 della Costituzione", "2, 41, 42 e 47 della Costituzione", "1, 4, 35 e 36 della Costituzione"],
        correct: 0,
        difficulty: 2,
        commonError: "Confondere i principi tributari con quelli sul giusto processo (artt. 24 e 111 Cost.).",
        why: "L'art. 1 dello Statuto richiama espressamente gli artt. 3, 23, 53 e 97 Cost.: uguaglianza, riserva di legge, capacità contributiva e buon andamento, cioè i principi generali dell'ordinamento tributario.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 6"
      },
      {
        q: "Il principio di fissità (art. 1 Statuto) comporta che le disposizioni dello Statuto:",
        opts: ["non possono mai essere modificate da alcuna legge successiva", "possono essere derogate anche tacitamente da qualsiasi legge", "possono essere derogate o modificate solo espressamente e mai da leggi speciali", "possono essere modificate solo con legge costituzionale"],
        correct: 2,
        difficulty: 3,
        commonError: "Credere che lo Statuto sia immodificabile o abbia rango costituzionale: è legge ordinaria.",
        why: "L'art. 1 vieta le modifiche tacite e quelle a opera di leggi speciali: la deroga è possibile, ma solo espressa. Abrogazioni implicite contrasterebbero con ragionevolezza e affidamento (artt. 3 e 97 Cost.).",
        fonte: "Loconte, Manuale di diritto tributario — cap. 6"
      },
      {
        q: "Secondo l'art. 4 dello Statuto, con decreto-legge:",
        opts: ["si possono istituire nuovi tributi solo in caso d'urgenza", "non si possono istituire nuovi tributi né estendere tributi esistenti ad altre categorie di soggetti", "si possono solo aumentare le aliquote dei tributi esistenti", "si può fare tutto, purché il Parlamento converta entro 60 giorni"],
        correct: 1,
        difficulty: 2,
        commonError: "Pensare che l'urgenza tipica del decreto-legge basti a giustificare nuovi tributi: la norma vuole proprio arginare l'abuso del decreto-legge in materia tributaria.",
        why: "L'art. 4 vieta di disporre con decreto-legge l'istituzione di nuovi tributi e l'applicazione di tributi esistenti ad altre categorie di soggetti, per arginare l'abuso dello strumento in materia fiscale.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 6"
      },
      {
        q: "Se l'amministrazione non risponde all'interpello entro 120 giorni:",
        opts: ["l'istanza si considera respinta e il contribuente deve adeguarsi", "il contribuente deve ripresentare l'istanza entro 60 giorni", "il termine si proroga automaticamente di altri 120 giorni", "si forma il silenzio-assenso sull'interpretazione prospettata dal contribuente"],
        correct: 3,
        difficulty: 3,
        commonError: "Applicare la regola generale del silenzio-rigetto: nell'interpello vale l'opposto, il silenzio è assenso.",
        why: "L'art. 11 prevede che, in mancanza di risposta nei 120 giorni, si intende che l'amministrazione concordi con l'interpretazione del richiedente; gli atti emanati in difformità, anche dalla risposta tacita, sono nulli.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 6"
      },
      {
        q: "L'avviso di accertamento emesso 20 giorni dopo il rilascio del PVC, senza motivata urgenza, è:",
        opts: ["nullo, perché viola il termine di 60 giorni per il contraddittorio", "valido, perché il termine di 60 giorni è meramente ordinatorio", "annullabile solo se il contribuente prova un danno concreto", "valido, ma le sanzioni non possono essere irrogate"],
        correct: 0,
        difficulty: 4,
        commonError: "Ritenere il termine ordinatorio o richiedere la prova di un pregiudizio: la fonte indica la nullità per emissione antecedente.",
        why: "L'art. 12, co. 7, vieta di emanare l'avviso prima della scadenza dei 60 giorni concessi al contribuente per osservazioni, salvo casi di particolare e motivata urgenza: l'emissione anticipata comporta nullità.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 6"
      },
      {
        q: "Secondo Cass. 7080/2004 e 17576/2002, i principi dello Statuto:",
        opts: ["prevalgono gerarchicamente sulle leggi tributarie successive, che sono nulle", "hanno valore solo programmatico e non vincolano l'interprete", "vincolano solo l'amministrazione finanziaria, non i giudici", "hanno funzione di orientamento ermeneutico vincolante e alcuni sono immanenti nell'ordinamento"],
        correct: 3,
        difficulty: 5,
        commonError: "Trasformare la \"sostanziale superiorità\" riconosciuta dalla Cassazione in una vera superiorità gerarchica con nullità delle leggi contrastanti.",
        why: "La Cassazione riconosce ai principi statutari una rilevanza particolare e un valore ermeneutico vincolante: l'interpretazione conforme allo Statuto è interpretazione conforme a Costituzione, e alcuni principi erano immanenti già prima del 2000. Non si tratta però di prevalenza gerarchica.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 6"
      }
    ],
    veroFalso: [
      { aff: "La risposta all'interpello vincola l'amministrazione nei confronti di tutti i contribuenti che si trovino nella stessa situazione.", vero: false, traccia: "Falso. La risposta vincola con esclusivo riferimento alla questione oggetto dell'istanza e limitatamente al richiedente: vale solo per chi ha presentato l'interpello." },
      { aff: "Per i tributi periodici, le modifiche normative si applicano solo dal periodo d'imposta successivo a quello in corso.", vero: true, traccia: "Vero. Lo prevede l'art. 3 dello Statuto, corollario dell'irretroattività: la nuova regola non tocca il periodo d'imposta già in corso, a tutela della certezza del diritto e dell'affidamento." },
      { aff: "Non sono irrogate sanzioni al contribuente che si sia conformato a indicazioni del Fisco poi modificate dall'amministrazione stessa.", vero: true, traccia: "Vero. L'art. 10, co. 2, tutela l'affidamento: niente sanzioni né interessi moratori se il contribuente ha seguito atti dell'amministrazione, anche se successivamente modificati, o ha agito per effetto di ritardi, omissioni o errori del Fisco." }
    ],
    aperta: {
      q: "Il candidato illustri la funzione dello Statuto dei diritti del contribuente e il rango riconosciuto alle sue disposizioni dalla giurisprudenza di legittimità.",
      traccia: "Lo Statuto (L. 212/2000) disciplina i rapporti tra contribuente e amministrazione finanziaria per contemperare interesse fiscale e diritti fondamentali del contribuente, attuando gli artt. 3, 23, 53 e 97 Cost. Contiene limiti al futuro legislatore (fissità, chiarezza, irretroattività, limiti al decreto-legge), obblighi dell'amministrazione (informazione, motivazione degli atti, tutela dell'integrità patrimoniale) e garanzie del contribuente (buona fede, interpello, contraddittorio nelle verifiche, Garante). Quanto al rango, lo Statuto è legge ordinaria; tuttavia la Cassazione (sentt. 17576/2002 e 7080/2004) ha riconosciuto ai suoi principi una rilevanza del tutto particolare e una sostanziale superiorità rispetto alle altre norme tributarie, con funzione di orientamento ermeneutico vincolante: l'interpretazione conforme allo Statuto equivale a interpretazione conforme a Costituzione, e alcuni principi, in quanto esplicitazioni di norme costituzionali, sono immanenti nell'ordinamento già prima del 2000.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 6"
    },
    consigliate: ["mappa", "flashcards", "mcq", "aperta", "podcast"],
    media: {
      podcast: {
        title: "Lo Statuto del contribuente in 4 mosse",
        chapters: [["Perché nasce lo Statuto", 0], ["Limiti al legislatore: fissità e irretroattività", 240], ["Interpello e buona fede", 520], ["Verifiche, contraddittorio e Garante", 800]]
      },
      mappa: true
    }
  },

  {
    id: "elusione",
    part: "generale",
    chapter: 3,
    chapterTitle: "Il rapporto d'imposta",
    title: "Elusione, evasione e abuso del diritto",
    subtitle: "Art. 10-bis St. contr.: aggirare la norma senza violarla — elementi, garanzie, niente penale",
    articoli: ["art. 10-bis L. 212/2000", "art. 53 Cost.", "art. 68 d.lgs. 546/1992"],
    pages: [19, 20],
    depth: "deep",
    layers: {
      essenziale:
        "L'<strong>elusione</strong> è il comportamento di chi non viola la legge fiscale ma la <em>aggira</em>: sfrutta le lacune delle norme per ottenere un vantaggio tributario indebito. Esempio: due società si fondono non per fare impresa insieme, ma solo perché una è in perdita (una \"bara fiscale\") e la perdita abbatte le tasse dell'altra. È diversa dall'<strong>evasione</strong>, dove la norma viene violata direttamente (non pago l'imposta o nascondo il presupposto), e dalla <strong>frode fiscale</strong>, dove si usano raggiri come documenti falsi (sanzioni molto più pesanti, con dolo). Diversa anche l'<strong>erosione</strong>: minore imposizione per certe categorie di reddito, ma prevista dalla legge. Oggi elusione e <strong>abuso del diritto</strong> coincidono nell'<strong>art. 10-bis dello Statuto</strong> (in vigore dall'1.9.2015): configurano abuso una o più operazioni <strong>prive di sostanza economica</strong> che, pur rispettando formalmente le norme fiscali, realizzano <strong>essenzialmente vantaggi fiscali indebiti</strong>. Queste operazioni non sono opponibili al Fisco, che ne disconosce i vantaggi e ricalcola i tributi secondo le norme eluse, tenendo conto di quanto già versato. Il contribuente resta però libero di scegliere tra regimi opzionali diversi offerti dalla legge, e l'abuso <strong>non è reato</strong>: si applicano solo le sanzioni amministrative tributarie.",
      approfondimenti: [
        {
          label: "Gli elementi costitutivi dell'abuso",
          body: "Tre elementi devono coesistere: (1) <strong>assenza di sostanza economica</strong>: fatti, atti e contratti, anche collegati, inidonei a produrre effetti significativi diversi dai vantaggi fiscali (indici: qualificazione delle operazioni incoerente con il fondamento giuridico del loro insieme; strumenti giuridici non conformi a normali logiche di mercato); (2) <strong>vantaggio fiscale indebito</strong>: benefici, anche non immediati, in contrasto con le finalità delle norme fiscali o con i principi dell'ordinamento tributario; (3) il vantaggio deve essere l'<strong>effetto essenziale</strong> dell'operazione."
        },
        {
          label: "La difesa del contribuente: le valide ragioni extrafiscali",
          body: "Il comma 3 dell'art. 10-bis tutela il contribuente: non c'è abuso se le operazioni sono giustificate da <strong>valide ragioni extrafiscali</strong>, non necessariamente economiche in senso stretto — bastano ragioni organizzative o gestionali che rispondano a finalità di miglioramento strutturale o funzionale dell'impresa o dell'attività professionale. La <strong>prova dell'elusione</strong> (assenza di sostanza economica e indebiti vantaggi) grava sull'ufficio; la prova delle valide ragioni grava sul contribuente."
        },
        {
          label: "Garanzie procedurali a pena di nullità",
          body: "Il Fisco non può accertare l'abuso <strong>senza aver prima chiesto chiarimenti</strong> al contribuente, né emanare l'atto prima che siano decorsi <strong>60 giorni</strong> dal ricevimento dei chiarimenti; l'atto va inoltre <strong>specificamente motivato</strong> su condotta abusiva, norme o principi elusi, vantaggi indebiti e chiarimenti forniti. Tutto a pena di nullità. Il contribuente può anche presentare <strong>interpello preventivo</strong> per sapere se l'operazione che intende compiere costituisce abuso. In caso di ricorso, i tributi accertati sono riscossi secondo l'art. 68 d.lgs. 546/1992."
        },
        {
          label: "Gli strumenti di contrasto prima dell'art. 10-bis",
          body: "Prima della clausola generale, la giurisprudenza aveva tentato tre strade: l'<strong>interpretazione antielusiva</strong> (analogica), inidonea perché in contrasto con certezza del diritto e riserva di legge; la <strong>riqualificazione del negozio giuridico</strong>, per ricondurre l'operazione al negozio previsto dalla norma elusa; la <strong>frode alla legge</strong>, che sanziona con la nullità il contratto usato per eludere una norma imperativa. Esempi classici di operazioni contestate: donazione di buoni del tesoro per l'acquisto di un immobile, fusione di \"bare fiscali\" con società in utile, scissione e cessione di quote, cessione di crediti."
        }
      ],
      giurisprudenza: [
        {
          label: "CGUE, Halifax (C-255/02, 2006): l'abuso nel diritto UE",
          body: "In materia di IVA la Corte di Giustizia ha dato la formulazione matura del divieto di abuso: c'è comportamento abusivo quando le operazioni, nonostante l'applicazione formale delle norme, procurano un <strong>vantaggio fiscale contrario all'obiettivo</strong> di quelle stesse disposizioni, e quando risulta che le operazioni hanno <strong>essenzialmente lo scopo</strong> di ottenere il vantaggio fiscale. Due requisiti: lo scopo essenziale di eludere (profilo soggettivo) e l'indebito vantaggio fiscale (profilo oggettivo)."
        },
        {
          label: "Cass., Sez. Un., 2 dicembre 2008, n. 30057",
          body: "Per i <strong>tributi non armonizzati</strong> (come le imposte dirette) le Sezioni Unite hanno rinvenuto la fonte del principio generale antielusivo non nella giurisprudenza comunitaria ma nei <strong>principi costituzionali</strong> dell'ordinamento tributario italiano: il contribuente non può trarre indebiti vantaggi fiscali dall'utilizzo distorto, pur se non contrastante con alcuna specifica disposizione, di strumenti giuridici idonei a ottenere un risparmio fiscale, <em>in difetto di ragioni economicamente apprezzabili</em> diverse dalla mera aspettativa di quel risparmio."
        },
        {
          label: "Un caso pratico dalla fonte: il calciatore straniero",
          body: "Un calciatore residente in un Paese a fiscalità vantaggiosa firma un contratto biennale con una squadra italiana, pattuendo che il compenso sia pagato <strong>6 mesi dopo la scadenza</strong> del contratto, quando sarà tornato all'estero: finché è residente in Italia non percepisce nulla, e quando incassa non è più residente. È il tipo di operazione da vagliare con i criteri dell'abuso: rispetto formale delle regole, ma vantaggio fiscale come scopo essenziale."
        }
      ],
      eccezioni: [
        {
          label: "Legittimo risparmio d'imposta",
          body: "Non ogni risparmio è abuso: resta ferma la <strong>libertà di scelta</strong> del contribuente tra regimi opzionali diversi offerti dalla legge e tra operazioni comportanti un diverso carico fiscale. Scegliere la strada fiscalmente meno onerosa tra quelle che l'ordinamento mette a disposizione è lecito; l'abuso scatta solo se l'operazione è priva di sostanza economica e il vantaggio indebito ne è l'effetto essenziale."
        },
        {
          label: "Errore da evitare: abuso = reato",
          body: "L'ultimo comma dell'art. 10-bis esclude che le contestazioni di abuso del diritto diano luogo a <strong>fatti punibili penalmente</strong>: restano solo le sanzioni amministrative tributarie. Diverso il caso della frode fiscale, caratterizzata da raggiri e dolo, per cui la legge prevede sanzioni assai più pesanti. Da ricordare anche l'evasione \"di sopravvivenza\", indotta da uno stato di crisi non riconducibile al contribuente e perciò non sanzionabile."
        }
      ]
    },
    sintesi: [
      "Elusione: condotta formalmente lecita che sfrutta le lacune per un vantaggio indebito.",
      "Evasione: violazione diretta della norma; frode: raggiri e documenti falsi, dolo.",
      "Art. 10-bis: operazioni senza sostanza economica con vantaggi fiscali indebiti essenziali.",
      "Origini: CGUE Halifax C-255/02 (IVA); Cass. SU 30057/2008 (principi costituzionali).",
      "Garanzie: chiarimenti preventivi, 60 giorni, motivazione rafforzata, tutto a pena di nullità.",
      "Niente rilevanza penale: solo sanzioni amministrative; salvo il legittimo risparmio d'imposta."
    ],
    esempi: [
      {
        titolo: "La \"bara fiscale\" dell'ing. Ferrari",
        testo: "L'ing. Ferrari controlla la Alfa S.r.l., che chiude l'anno con un utile di 800.000 €. Per abbattere le imposte compra la Beta S.r.l., una società ormai inattiva ma carica di perdite pregresse (una <strong>\"bara fiscale\"</strong>), e la fonde con Alfa: le perdite di Beta compensano l'utile di Alfa e le tasse crollano. La fusione rispetta formalmente le norme, ma non produce alcun effetto significativo diverso dal vantaggio fiscale: nessuna integrazione produttiva, nessuna logica di mercato. Ricorrono i tre elementi dell'art. 10-bis: assenza di sostanza economica, vantaggio indebito, vantaggio come effetto essenziale. Il Fisco può disconoscere i vantaggi e ricalcolare i tributi come se la fusione non fosse opponibile, tenendo conto di quanto già versato. Se però Ferrari prova valide ragioni extrafiscali (per esempio una reale riorganizzazione con miglioramento strutturale), l'abuso è escluso."
      },
      {
        titolo: "Giulia e le tre condotte a confronto",
        testo: "Giulia gestisce un bar e vuole pagare meno imposte. <strong>Prima strada</strong>: non batte gli scontrini e incassa in nero 20.000 €, nascondendo il presupposto — è <strong>evasione</strong>, violazione diretta della norma. <strong>Seconda strada</strong>: si fa rilasciare fatture false da un fornitore compiacente per gonfiare i costi — è <strong>frode fiscale</strong>, con raggiri e dolo, punita molto più severamente. <strong>Terza strada</strong>: costruisce una catena di atti formalmente regolari ma senza alcuna sostanza economica, il cui unico effetto è un risparmio d'imposta contrario alle finalità delle norme — è <strong>abuso del diritto</strong> ex art. 10-bis: niente reato, ma il Fisco disconosce il vantaggio e applica le sanzioni amministrative. Se invece Giulia sceglie semplicemente il regime opzionale più conveniente tra quelli previsti dalla legge, il risparmio è del tutto lecito."
      }
    ],
    flashcards: [
      ["Che cos'è l'elusione fiscale?", "Comportamento formalmente lecito che, sfruttando le lacune della legge, mira a ottenere un indebito vantaggio tributario, usando uno strumento diverso da quello che di norma si sarebbe dovuto utilizzare."],
      ["Quali sono i tre elementi costitutivi dell'abuso del diritto (art. 10-bis)?", "Assenza di sostanza economica delle operazioni; vantaggio fiscale indebito; circostanza che il vantaggio sia l'effetto essenziale dell'operazione."],
      ["Come si distingue l'evasione dall'elusione?", "Nell'evasione c'è violazione diretta della norma (non si paga o si occulta il presupposto); nell'elusione la norma è formalmente rispettata ma aggirata, e il contribuente non è sconosciuto al Fisco."],
      ["Cosa ha stabilito la CGUE nel caso Halifax (C-255/02)?", "In materia di IVA è abusiva l'operazione che, pur applicando formalmente le norme, procura un vantaggio contrario al loro obiettivo e ha essenzialmente lo scopo di ottenere quel vantaggio."],
      ["Su chi grava la prova nell'accertamento dell'abuso?", "Sull'ufficio la prova dell'elusione (assenza di sostanza economica e vantaggi indebiti); sul contribuente la prova delle valide ragioni extrafiscali."],
      ["L'abuso del diritto è penalmente rilevante?", "No: le contestazioni ex art. 10-bis non danno luogo a fatti punibili ai sensi delle leggi penali tributarie; resta ferma l'applicazione delle sanzioni amministrative tributarie."]
    ],
    comparativa: {
      titolo: "Elusione vs Evasione",
      a: "Elusione (abuso del diritto)",
      b: "Evasione",
      righe: [
        { profilo: "Rapporto con la norma", a: "Rispetto formale: la norma è aggirata sfruttandone le lacune", b: "Violazione diretta: non si adempie o si occulta il presupposto" },
        { profilo: "Visibilità al Fisco", a: "Il contribuente non è sconosciuto al Fisco: applica la norma a proprio favore", b: "Il presupposto viene nascosto o ridotto al Fisco" },
        { profilo: "Reazione dell'ordinamento", a: "Inopponibilità: il Fisco disconosce i vantaggi e ricalcola secondo le norme eluse", b: "Recupero dell'imposta e sanzioni; con raggiri (frode) sanzioni assai più pesanti" },
        { profilo: "Rilevanza penale", a: "Esclusa (art. 10-bis, ultimo comma): solo sanzioni amministrative", b: "Possibile: la frode fiscale, con dolo, è punita più severamente" }
      ]
    },
    quiz: [
      {
        q: "L'elusione fiscale si caratterizza per:",
        opts: ["la violazione diretta della norma tributaria", "l'uso di documenti falsi per ridurre la base imponibile", "una condotta formalmente lecita che sfrutta le lacune per un vantaggio indebito", "una minore imposizione per categorie di reddito prevista dalla legge"],
        correct: 2,
        difficulty: 1,
        commonError: "Confondere l'elusione con l'evasione (violazione diretta) o con la frode (raggiri e documenti falsi).",
        why: "L'elusione è il comportamento formalmente in linea con la legge che però ne sfrutta le lacune per ottenere un indebito vantaggio tributario; la violazione diretta è evasione, i raggiri sono frode, la minore imposizione legale è erosione.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 7"
      },
      {
        q: "Ai sensi dell'art. 10-bis, le operazioni abusive:",
        opts: ["non sono opponibili all'amministrazione, che ne disconosce i vantaggi fiscali", "sono nulle di diritto e travolgono il contratto tra le parti", "sono valide ma comportano il raddoppio delle imposte dovute", "sono segnalate alla procura per l'esercizio dell'azione penale"],
        correct: 0,
        difficulty: 2,
        commonError: "Pensare alla nullità civilistica del contratto: la reazione è l'inopponibilità al Fisco, non l'invalidità dell'atto.",
        why: "Il comma 1 prevede che le operazioni abusive non siano opponibili all'amministrazione finanziaria, che ne disconosce i vantaggi determinando i tributi in base alle norme e ai principi elusi, tenuto conto di quanto già versato dal contribuente.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 7"
      },
      {
        q: "Nel caso Halifax (C-255/02) la CGUE ha richiesto, per l'abuso, che le operazioni:",
        opts: ["violino almeno una disposizione specifica della direttiva IVA", "procurino un vantaggio contrario all'obiettivo delle norme e abbiano essenzialmente lo scopo di ottenerlo", "siano compiute da soggetti non residenti nell'Unione europea", "siano state precedute da un interpello con risposta negativa"],
        correct: 1,
        difficulty: 4,
        commonError: "Richiedere la violazione di una norma specifica: l'abuso presuppone proprio l'applicazione formale delle disposizioni.",
        why: "Halifax individua due requisiti: il vantaggio fiscale contrario all'obiettivo delle disposizioni nonostante la loro applicazione formale (profilo oggettivo) e lo scopo essenziale di ottenere quel vantaggio (profilo soggettivo).",
        fonte: "Loconte, Manuale di diritto tributario — cap. 7"
      },
      {
        q: "Per le Sezioni Unite (n. 30057/2008), la fonte del principio antielusivo per i tributi non armonizzati è:",
        opts: ["la giurisprudenza comunitaria in materia di IVA", "l'art. 37-bis del d.P.R. 600/1973, applicabile in via analogica", "il principio civilistico di frode alla legge", "i principi costituzionali che informano l'ordinamento tributario italiano"],
        correct: 3,
        difficulty: 5,
        commonError: "Estendere Halifax alle imposte dirette: per i tributi non armonizzati le SU ancorano il principio alla Costituzione, non al diritto UE.",
        why: "Le SU hanno precisato che per i tributi non armonizzati, come le imposte dirette, il principio generale antielusivo deriva dai principi costituzionali: il contribuente non può trarre indebiti vantaggi dall'uso distorto di strumenti giuridici in difetto di ragioni economicamente apprezzabili diverse dal risparmio fiscale.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 7"
      },
      {
        q: "Quale di queste condotte NON costituisce abuso del diritto?",
        opts: ["la fusione con una \"bara fiscale\" al solo scopo di compensare l'utile con le perdite", "la scelta del regime opzionale meno oneroso tra quelli offerti dalla legge", "una catena di atti collegati priva di effetti significativi diversi dal risparmio fiscale", "un'operazione il cui vantaggio fiscale indebito è l'effetto essenziale"],
        correct: 1,
        difficulty: 2,
        commonError: "Considerare abusivo qualsiasi risparmio d'imposta: la legge fa salva la libertà di scelta tra regimi e operazioni con diverso carico fiscale.",
        why: "L'art. 10-bis lascia ferma la libertà di scelta del contribuente tra regimi opzionali diversi e tra operazioni comportanti un diverso carico fiscale: il legittimo risparmio d'imposta non è abuso.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 7"
      },
      {
        q: "Prima di accertare l'abuso del diritto, l'amministrazione deve, a pena di nullità:",
        opts: ["ottenere l'autorizzazione del giudice tributario", "chiedere chiarimenti al contribuente e attendere 60 giorni dal loro ricevimento", "notificare un processo verbale di constatazione alla Guardia di Finanza", "acquisire il parere vincolante del Garante del contribuente"],
        correct: 1,
        difficulty: 3,
        commonError: "Dimenticare il contraddittorio preventivo rafforzato: non basta la motivazione, serve prima la richiesta di chiarimenti.",
        why: "L'art. 10-bis impone, a pena di nullità, la previa richiesta di chiarimenti, il decorso di 60 giorni dal loro ricevimento e una motivazione specifica su condotta abusiva, norme eluse, vantaggi indebiti e chiarimenti forniti.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 7"
      }
    ],
    veroFalso: [
      { aff: "Le contestazioni relative all'abuso del diritto danno luogo a responsabilità penale del contribuente.", vero: false, traccia: "Falso. L'ultimo comma dell'art. 10-bis esclude che le contestazioni di abuso diano luogo a fatti punibili ai sensi delle leggi penali tributarie; resta ferma solo l'applicazione delle sanzioni amministrative tributarie." },
      { aff: "Le valide ragioni extrafiscali che escludono l'abuso devono essere necessariamente di carattere economico in senso stretto.", vero: false, traccia: "Falso. Possono essere anche di ordine organizzativo o gestionale, purché rispondano a finalità di miglioramento strutturale o funzionale dell'impresa o dell'attività professionale del contribuente." },
      { aff: "Il contribuente può presentare interpello per sapere se le operazioni che intende realizzare costituiscono abuso del diritto.", vero: true, traccia: "Vero. L'art. 10-bis riconosce espressamente al contribuente la possibilità di presentare istanza di interpello preventivo sulla natura abusiva delle operazioni che intende porre in essere." }
    ],
    aperta: {
      q: "Il candidato illustri la nozione di abuso del diritto ex art. 10-bis dello Statuto, distinguendola dall'evasione e ricostruendone le origini giurisprudenziali.",
      traccia: "L'abuso del diritto, codificato nell'art. 10-bis L. 212/2000 (dal 1° settembre 2015), ricorre quando una o più operazioni prive di sostanza economica, pur nel rispetto formale delle norme fiscali, realizzano essenzialmente vantaggi fiscali indebiti: tali operazioni sono inopponibili al Fisco, che ne disconosce i vantaggi. Elementi costitutivi: assenza di sostanza economica, indebito vantaggio fiscale, essenzialità del vantaggio. Si distingue dall'evasione, che è violazione diretta della norma (mancato pagamento od occultamento del presupposto), e dalla frode, connotata da raggiri e dolo. Le origini: nel diritto UE la CGUE, con la sentenza Halifax (C-255/02), ha richiesto il vantaggio contrario all'obiettivo delle norme e lo scopo essenzialmente elusivo; per i tributi non armonizzati le Sezioni Unite (n. 30057/2008) hanno ancorato il principio antielusivo ai principi costituzionali. Completano il quadro le garanzie procedurali a pena di nullità (chiarimenti preventivi, 60 giorni, motivazione rafforzata), l'esclusione della rilevanza penale e la salvezza del legittimo risparmio d'imposta.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 7"
    },
    consigliate: ["comparativa", "mappa", "esempi", "mcq", "flashcards"],
    media: {
      podcast: {
        title: "Aggirare non è violare: l'abuso del diritto",
        chapters: [["Elusione, evasione, frode: le differenze", 0], ["Da Halifax alle Sezioni Unite", 300], ["L'art. 10-bis: elementi e garanzie", 560], ["Cosa resta lecito: il risparmio d'imposta", 840]]
      },
      mappa: true
    }
  },

  {
    id: "soggettiImposta",
    part: "generale",
    chapter: 3,
    chapterTitle: "Il rapporto d'imposta",
    title: "I soggetti del rapporto d'imposta",
    subtitle: "Soggetto attivo e passivo, sostituto e responsabile d'imposta, solidarietà, successione, domicilio fiscale",
    articoli: ["art. 64 d.P.R. 600/1973", "art. 65 d.P.R. 600/1973", "art. 53 Cost."],
    pages: [21, 22],
    depth: "deep",
    layers: {
      essenziale:
        "Il rapporto d'imposta ha due protagonisti. Il <strong>soggetto attivo</strong> è chi ha il diritto di riscuotere il tributo: lo Stato, che agisce tramite l'<strong>Amministrazione finanziaria</strong> (l'insieme degli uffici che acquisiscono e gestiscono le entrate tributarie: al vertice il Ministero dell'Economia e delle Finanze, con il Dipartimento delle Finanze che coordina le agenzie fiscali — Agenzia delle Entrate, Dogane e Monopoli, Demanio). Il <strong>soggetto passivo</strong>, o contribuente, è chi manifesta il presupposto del tributo e, per la sua capacità contributiva, deve pagare: si identifica con il codice fiscale (persone fisiche) o la partita IVA. Esempio: se Anna possiede un reddito, è lei il soggetto passivo dell'IRPEF verso lo Stato. Accanto al contribuente la legge coinvolge talvolta dei <em>terzi</em>. Il <strong>sostituto d'imposta</strong> (art. 64, co. 1, d.P.R. 600/1973) paga l'imposta <em>al posto</em> di altri, per fatti riferibili a questi, con obbligo di rivalsa tramite <strong>ritenuta</strong>: il datore di lavoro trattiene e versa per il dipendente. Il <strong>responsabile d'imposta</strong> (art. 64, co. 3) paga <em>insieme</em> ad altri per fatti esclusivamente riferibili a questi, con diritto (non obbligo) di rivalsa: il caso tipico è il notaio per l'imposta di registro. Completano il quadro la <strong>solidarietà tributaria</strong>, la <strong>successione</strong> nel debito d'imposta e il <strong>domicilio fiscale</strong>.",
      approfondimenti: [
        {
          label: "Potestà impositiva e indisponibilità del credito",
          body: "La potestà impositiva è <strong>astratta</strong> (compete agli organi legislativi: istituire le fattispecie impositive) o <strong>concreta</strong> (compete agli organi tributari: controllo, accertamento e riscossione). Il soggetto attivo può affidare accertamento e riscossione a <em>soggetti ausiliari</em> (es. Guardia di Finanza; ex Equitalia, oggi Agenzia delle Entrate-Riscossione). Due corollari: il <strong>gettito è irrilevante</strong> per individuare il soggetto attivo (cosa lo Stato faccia con i soldi non riguarda il contribuente) e il <strong>credito tributario è indisponibile</strong>: il Fisco non può rinunciarvi o cederlo, perché ne uscirebbe violato l'art. 53 Cost."
        },
        {
          label: "Ritenuta d'acconto vs ritenuta d'imposta",
          body: "La <strong>ritenuta a titolo d'imposta</strong> (sostituzione propria) estingue l'obbligazione del sostituito, che resta estraneo al prelievo: così per i redditi di capitale e per premi e vincite; obbligato verso il Fisco è di norma solo il sostituto (coobbligazione solidale solo se non effettua la ritenuta né versa). La <strong>ritenuta a titolo d'acconto</strong> (sostituzione impropria, per redditi di lavoro dipendente e autonomo) è un'anticipazione provvisoria: restano obbligazioni autonome sia del sostituto (effettuare e versare la ritenuta) sia del sostituito (dichiarare e versare l'imposta residua). Se il sostituto non trattiene né versa, il Fisco può agire verso entrambi; se ha trattenuto ma non versato, solo verso il sostituto."
        },
        {
          label: "Solidarietà paritetica e dipendente",
          body: "Nella <strong>solidarietà paritetica</strong> il presupposto si verifica unitariamente verso più soggetti (es. imposta di registro, imposte ipotecarie): all'esterno ciascuno risponde per l'intero e il Fisco sceglie a chi rivolgersi; all'interno chi paga si rivale sugli altri <em>pro quota</em>. Nella <strong>solidarietà dipendente</strong> l'obbligato dipendente realizza una fattispecie collegata a quella dell'obbligato principale (es. il notaio): serve a garantire la riscossione, e chi paga si rivale <em>per intero</em> sull'obbligato principale."
        },
        {
          label: "Successione, domicilio fiscale, rappresentanza e trust",
          body: "Ai fini delle imposte gli <strong>eredi rispondono in solido</strong> (non pro quota) dei debiti tributari con presupposto anteriore alla morte (art. 65 d.P.R. 600/1973); le <strong>sanzioni non si trasmettono</strong>. Il <strong>domicilio fiscale</strong> è in un comune dello Stato: per i residenti coincide con la residenza anagrafica; per i non residenti è il comune di produzione del reddito (se più comuni, quello del reddito più elevato); per società ed enti, la sede legale o, in mancanza, amministrativa (poi stabile organizzazione o luogo di attività prevalente). Il <strong>rappresentante</strong> (legale o negoziale) agisce per il rappresentato, nella cui sfera si producono gli effetti; il <strong>trust</strong> è riconosciuto come autonomo soggetto passivo IRES."
        }
      ],
      giurisprudenza: [
        {
          label: "Il giudice e il credito tributario",
          body: "L'indisponibilità dell'obbligazione tributaria ha un solo contrappeso: il <strong>giudice</strong>. L'ente impositore non può rinunciare al credito né \"girarlo\" ad altri (se il Comune rinunciasse a 10.000 € di tributi dovuti, a fronte di una capacità contributiva di 100 se ne preleverebbero 50, in contrasto con l'art. 53 Cost.); solo il giudice può stabilire che quel tributo <em>non è corretto</em>. Non è un intervento sulla disponibilità del credito, ma sulla sua correttezza: la contabilità dello Stato si fonda su un'entrata certa e indisponibile."
        },
        {
          label: "Il superamento della \"supersolidarietà\"",
          body: "In tema di solidarietà tributaria la riflessione ha riguardato la cosiddetta teoria della <strong>supersolidarietà</strong>, ricordata come approdo ormai superato: oggi la solidarietà tributaria segue lo schema civilistico, con la distinzione tra solidarietà <em>paritetica</em> (rapporti esterni per l'intero, regresso interno pro quota) e <em>dipendente</em> (obbligato dipendente escutibile insieme al principale, con regresso per l'intero)."
        }
      ],
      eccezioni: [
        {
          label: "Il contribuente di fatto non è soggetto passivo",
          body: "Chi sopporta economicamente l'imposta non sempre è il soggetto passivo. Nell'IVA il soggetto passivo è l'imprenditore che vende, ma il peso economico ricade sul <strong>consumatore finale</strong>: questi è il <em>contribuente di fatto</em>, che non entra in rapporto con il soggetto attivo — il Fisco può chiedere l'imposta solo al soggetto passivo (fenomeno della traslazione d'imposta)."
        },
        {
          label: "Errore da evitare: eredi pro quota e sanzioni ereditate",
          body: "Due errori frequenti: (1) pensare che gli eredi rispondano dei debiti tributari <em>pro quota</em> come nel diritto civile — in ambito tributario rispondono <strong>in solido</strong>, e l'Agenzia delle Entrate-Riscossione punta sull'erede più solvibile, che poi si rivale sugli altri; (2) pensare che le sanzioni passino agli eredi — la legge ne prevede espressamente la <strong>non trasmissibilità</strong>."
        }
      ]
    },
    sintesi: [
      "Soggetto attivo: lo Stato tramite l'Amministrazione finanziaria (MEF, agenzie fiscali).",
      "Soggetto passivo: chi manifesta il presupposto e paga per capacità contributiva.",
      "Sostituto: paga al posto di altri, con rivalsa obbligatoria tramite ritenuta (art. 64, co. 1).",
      "Responsabile: paga con altri per fatti altrui, rivalsa come diritto (art. 64, co. 3).",
      "Eredi: rispondono in solido dei debiti; le sanzioni non si trasmettono (art. 65).",
      "Domicilio fiscale: comune di residenza anagrafica; per i non residenti, dove nasce il reddito."
    ],
    esempi: [
      {
        titolo: "Lo stipendio di Sara e il datore-sostituto",
        testo: "Sara lavora come impiegata per la Rossi S.p.A. con uno stipendio lordo di 30.000 € l'anno. Ogni mese la società le versa lo stipendio <em>al netto</em> di una trattenuta IRPEF: la Rossi S.p.A. è il <strong>sostituto d'imposta</strong>, obbligato per legge a pagare l'imposta al posto di Sara per redditi riferibili a lei, esercitando la rivalsa con la <strong>ritenuta a titolo d'acconto</strong> (siamo nei redditi di lavoro dipendente). Il sostituto deve: effettuare la ritenuta, versarla all'erario e certificarla a Sara; se non adempie scattano sanzioni amministrative. Poiché la ritenuta è solo un'anticipazione, Sara resta soggetto passivo: dichiarerà i redditi e verserà l'eventuale imposta residua. Se la Rossi S.p.A. non trattiene né versa, il Fisco può chiedere l'imposta a entrambi (interessi e sanzioni solo al sostituto); se trattiene ma non versa, può agire solo contro la società."
      },
      {
        titolo: "Il rogito dal notaio Verdi",
        testo: "Paolo compra casa da Elena e l'atto viene stipulato dal <strong>notaio Verdi</strong>. Per l'imposta di registro dovuta sull'atto il notaio è il <strong>responsabile d'imposta</strong>: è obbligato al pagamento <em>insieme</em> alle parti contraenti per un fatto (la compravendita) riferibile esclusivamente a loro — lui non manifesta alcuna capacità contributiva, ma con il suo comportamento può assicurare il prelievo. È la figura tipica della solidarietà dipendente: il Fisco può chiedere l'imposta indifferentemente al notaio o alle parti; se paga Verdi, ha diritto di <strong>regresso per l'intero</strong> verso gli obbligati principali. Tra Paolo ed Elena, invece, la solidarietà è <strong>paritetica</strong>: il presupposto (la registrazione dell'atto) li riguarda unitariamente, ciascuno risponde per l'intero verso il Fisco e chi paga si rivale sull'altro pro quota."
      }
    ],
    flashcards: [
      ["Chi è il soggetto attivo d'imposta?", "Chi ha il diritto di riscuotere il tributo, titolare del credito verso il soggetto passivo: lo Stato, che esercita la potestà impositiva concreta tramite l'Amministrazione finanziaria."],
      ["Come definisce la legge il sostituto d'imposta?", "Chi, in forza di legge, è obbligato al pagamento di imposte in luogo di altri, per fatti o situazioni a questi riferibili, con obbligo di rivalsa salvo diversa previsione espressa (art. 64, co. 1, d.P.R. 600/1973)."],
      ["Qual è la differenza tra ritenuta a titolo d'imposta e a titolo d'acconto?", "Quella d'imposta estingue l'obbligazione del sostituito (es. redditi di capitale, premi e vincite); quella d'acconto è un'anticipazione provvisoria e il sostituito resta obbligato a dichiarare e versare il residuo (lavoro dipendente e autonomo)."],
      ["Chi è il responsabile d'imposta?", "Chi è obbligato al pagamento dell'imposta insieme con altri, per fatti o situazioni esclusivamente riferibili a questi, con diritto di rivalsa (art. 64, co. 3, d.P.R. 600/1973); figura tipica: il notaio per l'imposta di registro."],
      ["Come rispondono gli eredi dei debiti tributari del defunto?", "In solido (non pro quota) per i debiti con presupposto anteriore alla morte (art. 65 d.P.R. 600/1973); le sanzioni non si trasmettono agli eredi."],
      ["Dov'è il domicilio fiscale delle persone fisiche residenti?", "Nel Comune di residenza anagrafica; per i non residenti, nel Comune in cui si è prodotto il reddito (se più Comuni, quello del reddito più elevato)."]
    ],
    comparativa: {
      titolo: "Sostituto vs Responsabile d'imposta",
      a: "Sostituto d'imposta (art. 64, co. 1)",
      b: "Responsabile d'imposta (art. 64, co. 3)",
      righe: [
        { profilo: "Posizione rispetto al debito", a: "Paga in luogo di altri, per fatti riferibili a questi", b: "Paga con altri, per fatti esclusivamente riferibili a questi" },
        { profilo: "Rivalsa", a: "Obbligatoria (salvo espressa previsione contraria), tramite ritenuta sui proventi corrisposti", b: "È un diritto, non un obbligo; regresso per l'intero verso l'obbligato principale" },
        { profilo: "Schema di solidarietà", a: "Sostituzione: coobbligazione con il sostituito solo in casi particolari (ritenuta non effettuata né versata)", b: "Espressione tipica della coobbligazione solidale dipendente" },
        { profilo: "Esempio tipico", a: "Datore di lavoro che trattiene e versa l'IRPEF del dipendente", b: "Notaio obbligato all'imposta di registro insieme alle parti contraenti" }
      ]
    },
    quiz: [
      {
        q: "Il soggetto passivo d'imposta è:",
        opts: ["chiunque sopporti economicamente il peso del tributo", "chi manifesta il presupposto del tributo ed è chiamato a pagare per capacità contributiva", "solo chi è iscritto all'anagrafe tributaria come imprenditore", "l'ente che riscuote il tributo per conto dello Stato"],
        correct: 1,
        difficulty: 1,
        commonError: "Confondere il soggetto passivo con il contribuente di fatto, che sopporta l'onere economico ma non entra in rapporto con il Fisco.",
        why: "Il contribuente è il soggetto nei cui confronti si manifesta il presupposto del tributo e che, per la sua capacità contributiva, concorre alle spese pubbliche. Il consumatore finale nell'IVA è solo contribuente di fatto.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 8"
      },
      {
        q: "Il sostituto d'imposta, ai sensi dell'art. 64, co. 1, d.P.R. 600/1973:",
        opts: ["è obbligato al pagamento con altri, per fatti esclusivamente riferibili a questi", "è obbligato al pagamento in luogo di altri, per fatti a questi riferibili, con obbligo di rivalsa", "sopporta definitivamente l'onere economico dell'imposta altrui", "è un soggetto ausiliario cui il Fisco delega la riscossione coattiva"],
        correct: 1,
        difficulty: 2,
        commonError: "Scambiare la definizione del sostituto (\"in luogo di altri\") con quella del responsabile (\"con altri\").",
        why: "Il sostituto paga in luogo di altri per fatti o situazioni a questi riferibili e deve esercitare la rivalsa se non è diversamente stabilito: così non subisce l'onere economico, nel rispetto della capacità contributiva.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 8"
      },
      {
        q: "Se il sostituto ha effettuato le ritenute ma non le ha versate, l'amministrazione può agire:",
        opts: ["contro sostituto e sostituito in solido", "solo contro il sostituito, che resta il soggetto passivo", "contro chiunque dei due, a sua scelta, ma solo per la metà ciascuno", "solo contro il sostituto, senza coobbligazione del sostituito"],
        correct: 3,
        difficulty: 4,
        commonError: "Applicare sempre la solidarietà: essa scatta solo se il sostituto non ha né trattenuto né versato; se ha trattenuto, il sostituito ha già subito il prelievo.",
        why: "Quando il sostituto omette di versare ritenute regolarmente effettuate, è esclusa qualsiasi coobbligazione solidale: il Fisco può agire solo contro il sostituto. La solidarietà con il sostituito opera invece se la ritenuta non è stata né effettuata né versata.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 8"
      },
      {
        q: "Nella solidarietà paritetica, chi ha pagato l'intera imposta:",
        opts: ["si rivale sugli altri coobbligati pro quota", "si rivale per l'intero sull'obbligato principale", "non ha alcuna azione di regresso", "può chiedere il rimborso direttamente all'erario"],
        correct: 0,
        difficulty: 3,
        commonError: "Confondere il regresso della solidarietà paritetica (pro quota) con quello della solidarietà dipendente (per l'intero verso l'obbligato principale).",
        why: "Nella solidarietà paritetica il presupposto riguarda unitariamente tutti i coobbligati: all'esterno ciascuno risponde per l'intero, ma nei rapporti interni chi paga ha titolo per rivalersi sugli altri pro quota. Esempi: imposta di registro e imposte ipotecarie.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 8"
      },
      {
        q: "Ai sensi dell'art. 65 d.P.R. 600/1973, gli eredi rispondono dei debiti tributari del de cuius:",
        opts: ["pro quota, secondo le regole civilistiche della divisione ereditaria", "solo se hanno accettato l'eredità con beneficio d'inventario", "in solido, per i debiti con presupposto anteriore alla morte, senza trasmissione delle sanzioni", "in solido, comprese le sanzioni irrogate al defunto"],
        correct: 2,
        difficulty: 3,
        commonError: "Applicare la regola civilistica della responsabilità pro quota o ritenere trasmissibili le sanzioni.",
        why: "In deroga al diritto civile, gli eredi rispondono in solido dei debiti tributari il cui presupposto si è verificato prima della morte del dante causa; le sanzioni sono espressamente intrasmissibili. Il Fisco escute l'erede più solvibile, che ha regresso verso gli altri.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 8"
      },
      {
        q: "Il domicilio fiscale di una società, in mancanza di sede legale e amministrativa individuabili, si determina con riferimento:",
        opts: ["al comune di residenza del legale rappresentante", "alla sede della stabile organizzazione o al comune di esercizio prevalente dell'attività", "al comune in cui è stato prodotto il reddito più elevato", "alla sede dell'ufficio dell'Agenzia delle Entrate territorialmente più vicino"],
        correct: 1,
        difficulty: 5,
        commonError: "Usare il criterio del reddito più elevato, che vale per le persone fisiche non residenti, non per le società.",
        why: "Per società ed enti il domicilio fiscale è nel comune della sede legale o, in mancanza, amministrativa; se neanche questa è individuabile, si guarda alla sede della stabile organizzazione (caso tipico dei non residenti) o al comune dove l'attività è esercitata prevalentemente.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 8"
      }
    ],
    veroFalso: [
      { aff: "Il credito tributario è disponibile: l'ente impositore può rinunciarvi o accordarsi liberamente con il contribuente sul quantum.", vero: false, traccia: "Falso. L'obbligazione tributaria è indisponibile: rinunce o accordi liberi violerebbero l'art. 53 Cost. (a fronte di una capacità contributiva di 100 si preleverebbe 50). Solo il giudice può incidere, dichiarando il tributo non corretto." },
      { aff: "Il responsabile d'imposta non manifesta capacità contributiva propria rispetto al presupposto del tributo.", vero: true, traccia: "Vero. Elementi costitutivi della figura sono l'estraneità al fatto-presupposto, riferibile esclusivamente ad altro soggetto, il vincolo di solidarietà con l'obbligazione principale e il diritto (non l'obbligo) di rivalsa." },
      { aff: "Il trust è riconosciuto dal legislatore fiscale come autonomo soggetto passivo ai fini IRES.", vero: true, traccia: "Vero. Il trust, istituto di common law fondato sul rapporto fiduciario tra disponente, trustee e beneficiari, è inserito tra i soggetti passivi IRES: deve dotarsi di codice fiscale e, se esercita attività commerciale, aprire la partita IVA, tenere le scritture contabili e presentare la dichiarazione."}
    ],
    aperta: {
      q: "Il candidato illustri le figure del sostituto e del responsabile d'imposta, evidenziandone differenze e ratio.",
      traccia: "Entrambe le figure sono terzi rispetto al rapporto giuridico d'imposta, coinvolti dalla legge per meglio assicurare l'attuazione del prelievo. Il sostituto (art. 64, co. 1, d.P.R. 600/1973) è obbligato al pagamento di imposte in luogo di altri, per fatti o situazioni a questi riferibili, e deve esercitare la rivalsa mediante ritenuta, così da non subire l'onere economico, in coerenza con l'art. 53 Cost.: esempio tipico è il datore di lavoro. La sostituzione può essere a titolo d'imposta, che estingue l'obbligazione del sostituito (redditi di capitale, premi e vincite), o a titolo d'acconto, mera anticipazione con obbligazioni autonome di sostituto e sostituito (lavoro dipendente e autonomo). Il responsabile (art. 64, co. 3) è invece obbligato con altri, per fatti esclusivamente riferibili a questi, con diritto — non obbligo — di rivalsa: è espressione tipica della solidarietà dipendente, funzionale a garantire la riscossione (notai, cessionario d'azienda, liquidatori). Il Fisco può escutere indifferentemente responsabile e obbligato principale, salvo il regresso per l'intero del responsabile.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 8"
    },
    consigliate: ["comparativa", "flashcards", "mcq", "esempi", "mappa"],
    media: {
      podcast: {
        title: "Chi paga e chi riscuote: i soggetti del tributo",
        chapters: [["Soggetto attivo e potestà impositiva", 0], ["Contribuente, domicilio fiscale, contribuente di fatto", 260], ["Sostituto e responsabile d'imposta", 540], ["Solidarietà e successione nel debito", 860]]
      },
      mappa: true
    }
  },

  {
    id: "presupposto",
    part: "generale",
    chapter: 3,
    chapterTitle: "Il rapporto d'imposta",
    title: "Presupposto, base imponibile e aliquote",
    subtitle: "Il fatto che genera l'imposta, il valore su cui si calcola, la percentuale da applicare",
    articoli: ["art. 53 Cost.", "art. 53, co. 2, Cost.", "D.L. 201/2011"],
    pages: [23, 24],
    depth: "deep",
    layers: {
      essenziale:
        "Tre parole spiegano come nasce e si calcola un'imposta. Il <strong>presupposto</strong> è il fatto, espressivo di capacità contributiva, al verificarsi del quale la legge collega l'obbligo di pagare: possiedi un immobile → IMU; possiedi un reddito → IRPEF. La <strong>base imponibile</strong> è il valore su cui si calcola il tributo, il parametro di commisurazione: se il reddito è 100 e l'aliquota è al 20%, l'imposta dovuta è 20. L'<strong>aliquota</strong> è la percentuale (il tasso d'imposta) che, applicata alla base imponibile, dà il <em>quantum</em> dovuto; può essere <strong>nominale</strong> (quanto è dovuto per legge) o <strong>effettiva</strong> (la reale incidenza sul reddito). Le aliquote possono essere <strong>proporzionali</strong> (percentuale fissa qualunque sia la base: IRES al 24%, IVA, imposta di registro), <strong>progressive</strong> (la percentuale cresce al crescere della base: è il sistema IRPEF, che attua l'art. 53, co. 2, Cost.) o <strong>regressive</strong> (l'incidenza diminuisce all'aumentare della base, come le imposte fisse tipo le spese di bollo, identiche per tutti). La progressività può realizzarsi per detrazione, per classi, <strong>per scaglioni</strong> (il sistema IRPEF) o continua. Da ricordare anche il <strong>periodo d'imposta</strong>: per le persone fisiche l'anno solare, con un'autonoma obbligazione per ciascun anno; per l'IRES il periodo di esercizio della società.",
      approfondimenti: [
        {
          label: "Le quattro tecniche di progressività",
          body: "<strong>Per detrazione</strong>: aliquota fissa sull'imponibile, ma da ogni reddito si sottrae prima un importo fisso, così l'incidenza effettiva cresce col reddito. <strong>Per classi</strong>: a ogni classe di reddito si applica un'aliquota proporzionale sull'intero (es. da 10 a 20 il 20%, da 20 a 40 il 30%): chi supera di poco la soglia paga l'aliquota superiore su tutto. <strong>Per scaglioni</strong>: il sistema IRPEF, che evita quell'inconveniente — l'aliquota più alta colpisce solo la parte di reddito che ricade nello scaglione superiore. <strong>Continua</strong>: l'aliquota è definita da una formula matematica e cresce gradualmente con ogni variazione dell'imponibile."
        },
        {
          label: "Imposta vs tassa; aliquota nominale vs effettiva",
          body: "L'<strong>imposta</strong> è una prestazione a fondo perduto imposta in base alla capacità contributiva per ripartire le spese pubbliche; la <strong>tassa</strong> è dovuta a fronte di uno specifico servizio erogato dall'ente al singolo o di una funzione pubblica che lo riguarda. Quanto alle aliquote, quella <strong>nominale</strong> (o legale) esprime quanto è dovuto dal contribuente secondo la legge; quella <strong>effettiva</strong> esprime la reale incidenza dell'imposta sul reddito, che può divergere per effetto dei meccanismi di calcolo."
        },
        {
          label: "Sovraimposte e addizionali",
          body: "Al tributo principale possono agganciarsi prelievi ulteriori. La <strong>sovraimposta</strong> assume come propria base imponibile la base imponibile di un'altra imposta (il tributo \"madre\"); l'<strong>addizionale</strong> applica un'aliquota ulteriore alla base di un tributo già esistente — l'esempio quotidiano sono le addizionali regionali e comunali all'IRPEF, che il dipendente trova in busta paga accanto all'IRPEF erariale. In entrambi i casi il prelievo aggiuntivo \"vive\" appoggiandosi agli elementi (presupposto e base) del tributo principale. Tra i tributi collegati al possesso di beni la fonte ricorda l'IVIE (D.L. 201/2011), che colpisce in misura proporzionale il valore degli immobili detenuti all'estero."
        },
        {
          label: "Agevolazioni: esenzioni ed esclusioni",
          body: "Le agevolazioni riducono o azzerano il prelievo. L'<strong>esenzione</strong> sottrae al tributo situazioni che rientrerebbero nel presupposto: la regola generale li colpirebbe, ma una norma di favore li tira fuori. L'<strong>esclusione</strong>, invece, delimita dall'origine il presupposto: la situazione esclusa non vi è mai rientrata, la norma si limita a chiarire i confini del tributo. La differenza conta: l'esenzione è una deroga di favore, l'esclusione è definizione della fattispecie. Fenomeno affine, già visto, è l'erosione: minore imposizione per determinate categorie di reddito prevista dalla legge."
        }
      ],
      giurisprudenza: [
        {
          label: "Art. 53, co. 2, Cost.: il criterio di progressività",
          body: "La Costituzione stabilisce che il sistema tributario è informato a <strong>criteri di progressività</strong>: si contribuisce in base alla propria ricchezza e, all'aumentare di questa, aumenta anche la percentuale contributiva. La progressività realizza il principio di <strong>uguaglianza sostanziale</strong>: chi ha di più contribuisce più che proporzionalmente. Il criterio riguarda il sistema nel suo complesso, tanto che convivono con esso imposte proporzionali come IRES, IVA e imposta di registro."
        }
      ],
      eccezioni: [
        {
          label: "Errore da evitare: scaglioni letti come classi",
          body: "L'errore classico: credere che superando uno scaglione IRPEF l'aliquota più alta si applichi a <em>tutto</em> il reddito. È la logica della progressività <strong>per classi</strong>, non per scaglioni: negli scaglioni ogni aliquota colpisce solo la fetta di reddito compresa nel proprio scaglione. Il sistema per scaglioni è stato adottato ai fini IRPEF proprio per evitare gli inconvenienti della progressività per classi, dove un euro in più di reddito può far scattare un'imposta maggiore dell'incremento."
        },
        {
          label: "Il periodo d'imposta non è uguale per tutti",
          body: "Per le imposte sui redditi delle persone fisiche l'imposta è dovuta per <strong>anni solari</strong> (365 giorni), a ciascuno dei quali corrisponde un'<em>autonoma obbligazione tributaria</em>. Per l'IRES, invece, il periodo d'imposta non coincide necessariamente con l'anno solare: si fa riferimento al <strong>periodo di esercizio o di gestione</strong> della società. Confondere i due criteri porta a errori nel collocare temporalmente il presupposto."
        }
      ]
    },
    sintesi: [
      "Presupposto: fatto di capacità contributiva cui la legge collega l'imposta (immobile→IMU).",
      "Base imponibile: valore su cui, applicando l'aliquota, si calcola l'imposta.",
      "Aliquota proporzionale: fissa (IRES 24%, IVA); progressiva: cresce con la base (IRPEF).",
      "Progressività per scaglioni: l'aliquota maggiore colpisce solo la fetta eccedente.",
      "Art. 53, co. 2, Cost.: il sistema tributario è informato a criteri di progressività.",
      "Esenzione: sottrae al tributo ciò che vi rientrerebbe; esclusione: delimita il presupposto."
    ],
    esempi: [
      {
        titolo: "L'appartamento e la busta paga di Maria",
        testo: "Maria possiede un appartamento dato in locazione e un lavoro dipendente. Il possesso dell'immobile è il <strong>presupposto</strong> dell'IMU; il possesso del reddito è il presupposto dell'IRPEF: sono i fatti, espressivi di capacità contributiva, cui la legge collega l'obbligo di pagare. Supponiamo che il suo reddito imponibile sia 100: se l'aliquota fosse al 20%, l'imposta dovuta sarebbe 20 — ecco la <strong>base imponibile</strong> (100) e l'<strong>aliquota</strong> (20%) al lavoro. In busta paga Maria vede anche le <strong>addizionali</strong> regionale e comunale, che si applicano alla stessa base imponibile dell'IRPEF. Se poi Maria comprasse una casa vacanze in Spagna, sul valore dell'immobile estero pagherebbe l'<strong>IVIE</strong> (introdotta dal D.L. 201/2011), imposta proporzionale sul costo d'acquisto o sul valore di mercato dell'immobile detenuto all'estero."
      },
      {
        titolo: "Scaglioni vs classi: il confronto tra Andrea e Chiara",
        testo: "Immaginiamo un sistema a <strong>classi</strong>: da 10.000 a 20.000 € aliquota al 20%, da 20.000 a 40.000 € al 30%, applicata sull'intero reddito. Andrea guadagna 20.000 € e paga 4.000 € (20%); Chiara guadagna 20.100 € e pagherebbe 6.030 € (30% su tutto): con soli 100 € in più di reddito, oltre 2.000 € in più di imposta. È l'inconveniente della progressività per classi. Con la progressività <strong>per scaglioni</strong> — il sistema adottato ai fini IRPEF — Chiara pagherebbe il 20% sulla parte di reddito fino a 20.000 € e il 30% <em>solo sui 100 € eccedenti</em>: l'aliquota superiore colpisce soltanto la fetta di reddito che ricade nello scaglione più alto, e nessuno ha convenienza a guadagnare meno per pagare meno."
      }
    ],
    flashcards: [
      ["Che cos'è il presupposto d'imposta?", "Il fatto, espressivo di capacità contributiva, al verificarsi del quale la legge collega l'obbligo di pagare un'imposta (es. possesso di un immobile per l'IMU, possesso di un reddito per l'IRPEF)."],
      ["Che cos'è la base imponibile?", "Il parametro di commisurazione del tributo: il valore sul quale, applicando l'aliquota, si calcola l'imposta (reddito 100, aliquota 20% → imposta 20)."],
      ["Quando un'aliquota è proporzionale e quando progressiva?", "Proporzionale se la percentuale resta fissa qualunque sia la base (IRES 24%, IVA, registro); progressiva se cresce al crescere della base imponibile (IRPEF), attuando l'uguaglianza sostanziale."],
      ["Quali sono le tecniche di attuazione della progressività?", "Per detrazione, per classi, per scaglioni (sistema IRPEF: l'aliquota superiore colpisce solo la parte eccedente) e continua (formula matematica)."],
      ["Qual è la differenza tra esenzione ed esclusione?", "L'esenzione sottrae al tributo fattispecie che rientrerebbero nel presupposto (norma di favore); l'esclusione delimita il presupposto stesso: la fattispecie esclusa non vi è mai rientrata."],
      ["Cos'è il periodo d'imposta?", "Il periodo di riferimento in cui si verifica il presupposto: per le persone fisiche l'anno solare, con autonoma obbligazione per ciascun anno; per l'IRES il periodo di esercizio o gestione della società."]
    ],
    comparativa: {
      titolo: "Aliquota proporzionale vs progressiva",
      a: "Proporzionale",
      b: "Progressiva",
      righe: [
        { profilo: "Andamento", a: "Percentuale fissa, costante e indipendente dall'entità della base imponibile", b: "Percentuale che aumenta man mano che cresce la base imponibile" },
        { profilo: "Esempi", a: "IRES (24%), IVA, imposta di registro, IVIE", b: "IRPEF, con progressività per scaglioni" },
        { profilo: "Principio realizzato", a: "Proporzionalità del prelievo alla base", b: "Uguaglianza sostanziale e criterio di progressività (art. 53, co. 2, Cost.)" },
        { profilo: "Tecniche di attuazione", a: "Applicazione diretta dell'aliquota unica alla base", b: "Per detrazione, per classi, per scaglioni o continua" }
      ]
    },
    quiz: [
      {
        q: "Il presupposto d'imposta è:",
        opts: ["la percentuale applicata alla base imponibile", "il valore sul quale si calcola il tributo", "il fatto espressivo di capacità contributiva cui la legge collega l'obbligo di pagare", "il termine entro cui l'imposta deve essere versata"],
        correct: 2,
        difficulty: 1,
        commonError: "Confondere presupposto, base imponibile e aliquota: sono i tre elementi distinti della struttura del tributo.",
        why: "Il presupposto è il fatto indice di capacità contributiva (possesso dell'immobile per l'IMU, del reddito per l'IRPEF) al cui verificarsi la legge collega l'obbligo tributario; la base è il valore di calcolo e l'aliquota la percentuale.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 9"
      },
      {
        q: "Con reddito imponibile di 100 e aliquota al 20%, l'imposta dovuta è 20. In questo esempio, 100 rappresenta:",
        opts: ["la base imponibile", "l'aliquota effettiva", "il presupposto d'imposta", "il periodo d'imposta"],
        correct: 0,
        difficulty: 1,
        commonError: "Indicare il presupposto: il presupposto è il possesso del reddito, mentre 100 è il valore su cui si commisura il tributo.",
        why: "La base imponibile è il parametro di commisurazione del tributo, cioè il valore sul quale, applicando l'aliquota, si calcola l'imposta: qui 100, da cui con il 20% deriva un'imposta di 20.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 9"
      },
      {
        q: "Quale tra queste imposte ha aliquota proporzionale?",
        opts: ["l'IRPEF, articolata per scaglioni di reddito", "l'imposta fissa di bollo bancario, identica per tutti", "un'imposta con aliquota definita da formula matematica crescente", "l'IRES, con aliquota al 24%"],
        correct: 3,
        difficulty: 2,
        commonError: "Classificare come proporzionale l'imposta fissa: le imposte fisse, identiche per tutti, hanno effetto regressivo perché incidono meno al crescere della base.",
        why: "L'aliquota proporzionale è una percentuale fissa e costante, indipendente dall'entità della base imponibile: è il caso dell'IRES al 24%, dell'IVA e dell'imposta di registro. L'IRPEF è progressiva, l'imposta fissa è regressiva.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 9"
      },
      {
        q: "Nella progressività per scaglioni, superata la soglia di uno scaglione, l'aliquota più elevata si applica:",
        opts: ["all'intero reddito del contribuente", "solo alla parte di reddito che ricade nello scaglione superiore", "al reddito dell'anno successivo", "alla sola base imponibile delle addizionali"],
        correct: 1,
        difficulty: 3,
        commonError: "Applicare la logica della progressività per classi, dove l'aliquota della classe colpisce tutto il reddito.",
        why: "Il sistema per scaglioni, adottato ai fini IRPEF, evita gli inconvenienti della progressività per classi: a ogni scaglione corrisponde un'aliquota crescente che colpisce solo la porzione di reddito compresa in quello scaglione.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 9"
      },
      {
        q: "L'aliquota effettiva, a differenza di quella nominale, esprime:",
        opts: ["la reale incidenza dell'imposta sul reddito", "la percentuale massima prevista dalla legge", "l'aliquota applicabile ai soli redditi esteri", "la somma delle addizionali locali"],
        correct: 0,
        difficulty: 4,
        commonError: "Ritenere le due aliquote sempre coincidenti: quella nominale dice quanto è dovuto per legge, quella effettiva quanto l'imposta pesa realmente.",
        why: "L'aliquota nominale (legale) esprime quanto è dovuto dal contribuente secondo la legge; quella effettiva esprime la reale incidenza dell'imposta sul reddito, che può differire per effetto dei meccanismi di determinazione del tributo.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 9"
      },
      {
        q: "Ai fini IRES il periodo d'imposta corrisponde:",
        opts: ["sempre all'anno solare di 365 giorni", "al semestre di riferimento del bilancio", "al periodo di esercizio o di gestione della società", "all'anno solare in cui è avvenuta la costituzione"],
        correct: 2,
        difficulty: 5,
        commonError: "Estendere all'IRES la regola dell'anno solare, che vale per le imposte sui redditi delle persone fisiche.",
        why: "Per le persone fisiche l'imposta è dovuta per anni solari, ciascuno con autonoma obbligazione tributaria; per l'IRES, invece, il periodo d'imposta non si riferisce all'anno solare bensì al periodo di esercizio o di gestione della società.",
        fonte: "Loconte, Manuale di diritto tributario — cap. 9"
      }
    ],
    veroFalso: [
      { aff: "L'aliquota regressiva diminuisce con l'aumentare della base imponibile.", vero: true, traccia: "Vero. Nell'imposta regressiva l'ammontare cresce in misura meno che proporzionale all'aumentare della base: è l'effetto tipico delle imposte fisse, come le spese di bollo bancario, identiche per tutti." },
      { aff: "L'esenzione e l'esclusione sono la stessa cosa: entrambe delimitano il presupposto del tributo.", vero: false, traccia: "Falso. L'esclusione delimita il presupposto (la fattispecie non vi è mai rientrata); l'esenzione è una norma di favore che sottrae al tributo fattispecie che nel presupposto rientrerebbero." },
      { aff: "Il criterio di progressività dell'art. 53, co. 2, Cost. impone che ogni singola imposta sia progressiva.", vero: false, traccia: "Falso. Il criterio informa il sistema tributario nel suo complesso: per questo convivono con l'IRPEF progressiva imposte proporzionali come IRES (24%), IVA e imposta di registro." }
    ],
    aperta: {
      q: "Il candidato illustri gli elementi strutturali dell'imposta (presupposto, base imponibile, aliquota) e le tecniche di attuazione della progressività.",
      traccia: "Il presupposto è il fatto, espressivo di capacità contributiva, al verificarsi del quale la legge collega l'obbligo di pagare l'imposta: il possesso dell'immobile per l'IMU, del reddito per l'IRPEF. La base imponibile è il parametro di commisurazione del tributo, cioè il valore sul quale, applicando l'aliquota, si calcola l'imposta. L'aliquota è il tasso d'imposta, nominale (quanto dovuto per legge) o effettivo (reale incidenza sul reddito). Le aliquote possono essere proporzionali (fisse: IRES al 24%, IVA, registro), progressive (crescenti con la base, in attuazione dell'art. 53, co. 2, Cost. e dell'uguaglianza sostanziale) o regressive (incidenza decrescente, come le imposte fisse). La progressività si attua per detrazione (importo fisso sottratto prima dell'aliquota), per classi (aliquota della classe sull'intero reddito, con effetti distorsivi al superamento delle soglie), per scaglioni (sistema IRPEF: l'aliquota superiore colpisce solo la parte eccedente) o in forma continua (formula matematica). Completa il quadro il periodo d'imposta: anno solare per le persone fisiche, periodo di esercizio per l'IRES.",
      fonte: "Loconte, Manuale di diritto tributario — cap. 9"
    },
    consigliate: ["mappa", "esempi", "flashcards", "verofalso", "mcq"],
    media: {
      podcast: {
        title: "Presupposto, base, aliquota: l'imposta smontata",
        chapters: [["Il fatto che fa nascere l'imposta", 0], ["Base imponibile e tipi di aliquota", 250], ["La progressività: quattro tecniche", 520], ["Addizionali, agevolazioni, periodo d'imposta", 810]]
      },
      mappa: true
    }
  }
];
