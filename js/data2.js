/* =========================================================================
   N+ — ARGOMENTI 4-7  (dolo, colpa, dolo eventuale vs colpa cosciente,
   preterintenzione). Fonte: SuperCompendio di Diritto penale, Cap. 5.
   ========================================================================= */
NPLUS.topics.push(
  /* ============================== 4. DOLO =========================== */
  {
    id: "dolo", n: 4, icon: "target",
    title: "Il dolo",
    subtitle: "Art. 43 c.p.: rappresentazione e volontà, forme e gradazioni",
    cap: "Cap. 5 — L'elemento soggettivo",
    assunti: [
      "Il dolo è la forma più grave di colpevolezza e il criterio normale di imputazione (art. 42 co. 2).",
      "Si compone di rappresentazione (momento conoscitivo) e volontà (momento volitivo).",
      "Si distingue in dolo intenzionale, diretto ed eventuale secondo l'intensità volitiva."
    ],
    spiegazione: `
      <p>Il <strong>dolo</strong> è la forma più grave di colpevolezza e il criterio normale di imputazione soggettiva dei delitti (art. 42, co. 2, c.p.). Ai sensi dell'art. 43 c.p., il delitto è doloso «quando l'evento è dall'agente <em>preveduto e voluto</em> come conseguenza della propria azione od omissione». Emergono i due elementi strutturali:</p>
      <ul>
        <li>la <strong>rappresentazione</strong> (momento conoscitivo): la previsione del fatto di reato in tutti i suoi elementi costitutivi;</li>
        <li>la <strong>volontà</strong> (momento volitivo): la risoluzione di realizzare il fatto.</li>
      </ul>
      <p>Il dolo deve sussistere al momento della condotta e avere ad oggetto il fatto tipico. Ne esulano gli elementi indicati dagli artt. 5 (errore sul precetto), 44 (condizioni obiettive di punibilità) e 59, co. 1 (scriminanti e attenuanti non conosciute).</p>
      <h4>Le forme del dolo</h4>
      <ul>
        <li><strong>Dolo di danno / di pericolo</strong>: secondo che si voglia ledere o solo mettere in pericolo il bene.</li>
        <li><strong>Dolo generico / specifico</strong>: il dolo specifico esige un fine ulteriore rispetto alla struttura del fatto (es. il fine di profitto nel furto).</li>
        <li><strong>Dolo iniziale, concomitante, successivo</strong>: secondo il momento in cui matura.</li>
      </ul>
      <h4>Le gradazioni</h4>
      <p>Sul piano <em>volitivo</em> si distinguono tre livelli decrescenti:</p>
      <ul>
        <li><strong>Dolo intenzionale</strong> (primo grado): l'agente agisce proprio allo scopo di realizzare l'evento.</li>
        <li><strong>Dolo diretto</strong> (secondo grado): l'evento non è lo scopo, ma è previsto come conseguenza certa o altamente probabile e perciò accettato.</li>
        <li><strong>Dolo eventuale</strong>: l'agente si rappresenta l'evento come possibile e ne accetta il rischio (v. argomento dedicato).</li>
      </ul>
      <p>Sul piano <em>rappresentativo</em> rilevano il dolo d'impeto, di proposito e di premeditazione (aggravante ex art. 577). L'accertamento del dolo è <strong>indiziario</strong>: non sono ammesse presunzioni di <em>dolus in re ipsa</em>.</p>`,
    puntiChiave: [
      "Art. 43: dolo = evento PREVEDUTO e VOLUTO. Rappresentazione + volontà.",
      "È il criterio normale di imputazione dei delitti (art. 42 co. 2).",
      "Dolo specifico: richiede un fine ulteriore (es. fine di profitto nel furto).",
      "Gradazioni volitive: intenzionale (1° grado) → diretto (2° grado) → eventuale.",
      "Il dolo si accerta in via INDIZIARIA: vietato il dolus in re ipsa.",
      "La premeditazione richiede elemento cronologico (intervallo) + ideologico (risoluzione ferma)."
    ],
    esempio: {
      titolo: "Dolo intenzionale, diretto, eventuale",
      testo: "Tizio vuole uccidere Caio e gli spara mirando al cuore: <strong>dolo intenzionale</strong> (l'evento è lo scopo). Tizio vuole far esplodere una bomba per distruggere un edificio sapendo con certezza che vi è dentro il custode: rispetto alla morte del custode agisce con <strong>dolo diretto</strong> (conseguenza certa, accettata, anche se non è il fine). Tizio lancia la stessa bomba ignorando se qualcuno sia presente, ma accettando il rischio che vi sia: rispetto alla morte eventuale agisce con <strong>dolo eventuale</strong>."
    },
    podcast: { title: "Il dolo", sub: "SuperCompendio · Cap. 5 — §4",
      chapters: [ ["Struttura: rappresentazione e volontà","0:00"], ["Oggetto del dolo","5:00"], ["Forme: generico, specifico, di danno","9:20"], ["Gradazioni e premeditazione","14:30"] ] },
    video: { title: "Le gradazioni del dolo", sub: "Video lezione · collegata al Cap. 5",
      chapters: [ ["Dolo intenzionale e diretto","0:00"], ["Dolo eventuale","4:10"], ["L'accertamento indiziario","8:00"] ] },
    mappa: "dolo",
    flashcards: [
      ["Quali sono i due elementi strutturali del dolo (art. 43)?", "La rappresentazione (previsione del fatto) e la volontà (risoluzione di realizzarlo). Il dolo è volontà consapevole di realizzare il fatto tipico."],
      ["Cos'è il dolo specifico?", "Quello che richiede, oltre alla volontà del fatto, un fine ulteriore non necessariamente realizzato (es. il fine di profitto nel furto)."],
      ["Cosa significa che il dolo si accerta in via indiziaria?", "Che, essendo fenomeno interiore, va ricostruito attraverso circostanze esteriori del caso concreto: è vietato presumerlo come dolus in re ipsa."]
    ],
    quiz: [
      { q: "Secondo l'art. 43 c.p., il delitto è doloso quando l'evento è:",
        opts: ["Preveduto ma non voluto","Preveduto e voluto come conseguenza della condotta","Non preveduto ma voluto","Causato per negligenza"],
        correct: 1,
        why: "L'art. 43 definisce doloso il delitto in cui l'evento è preveduto e voluto come conseguenza della propria azione od omissione. Occorrono entrambi i momenti: rappresentazione (conoscitivo) e volontà (volitivo).",
        fonte: "SuperCompendio, Cap. 5 — §4 (art. 43 c.p.)" },
      { q: "Il dolo specifico ricorre quando:",
        opts: ["L'agente vuole solo gli elementi oggettivi del fatto","La norma esige un fine ulteriore rispetto alla struttura materiale del reato","L'evento è certo","Il fatto è colposo"],
        correct: 1,
        why: "Nel dolo specifico la norma incriminatrice richiede che la condotta sia realizzata per un fine particolare (es. il fine di trarne profitto nel furto), che non deve necessariamente realizzarsi. Nel dolo generico basta la rappresentazione e volontà degli elementi oggettivi.",
        fonte: "SuperCompendio, Cap. 5 — §4.1" },
      { q: "Il dolo diretto (di secondo grado) si caratterizza perché l'evento:",
        opts: ["È lo scopo perseguito dall'agente","È previsto come conseguenza certa o altamente probabile e accettato","È solo possibile","Non è previsto"],
        correct: 1,
        why: "Nel dolo diretto l'evento non è il fine, ma è previsto come conseguenza certa o altamente probabile della condotta e perciò 'voluto' come avvenimento collaterale. Quando l'evento è lo scopo si ha dolo intenzionale; quando è solo possibile e accettato come rischio, dolo eventuale.",
        fonte: "SuperCompendio, Cap. 5 — §4.2" },
      { q: "L'accertamento del dolo, secondo l'orientamento consolidato:",
        opts: ["Si fonda su presunzioni di dolus in re ipsa","Avviene in via indiziaria, valorizzando circostanze esteriori","Prescinde dal caso concreto","Richiede la confessione dell'imputato"],
        correct: 1,
        why: "Il dolo, fenomeno interiore, va ricostruito in via indiziaria attraverso le circostanze esteriori del fatto. Non sono ammesse presunzioni di dolo desunte automaticamente dalla condotta (divieto del cd. dolus in re ipsa).",
        fonte: "SuperCompendio, Cap. 5 — §4.3" },
      { q: "Quale tra i seguenti NON è oggetto del dolo?",
        opts: ["Gli elementi costitutivi del fatto tipico","Le condizioni obiettive di punibilità (art. 44)","L'evento del reato","La condotta"],
        correct: 1,
        why: "Le condizioni obiettive di punibilità (art. 44) esulano dall'oggetto del dolo: il colpevole risponde anche se l'evento da cui dipende la condizione non è da lui voluto. Esulano altresì gli elementi di cui agli artt. 5 e 59, co. 1.",
        fonte: "SuperCompendio, Cap. 5 — §4" },
      { q: "La premeditazione, sul piano strutturale, richiede:",
        opts: ["Il solo elemento cronologico","Il solo elemento ideologico","Un elemento cronologico (intervallo di tempo) e uno ideologico (risoluzione ferma e irrevocabile)","L'accettazione del rischio"],
        correct: 2,
        why: "La premeditazione esige due elementi: uno cronologico (apprezzabile intervallo tra insorgenza e attuazione del proposito) e uno ideologico-psicologico (persistenza di una risoluzione criminosa ferma e irrevocabile). È aggravante ex art. 577 c.p.",
        fonte: "SuperCompendio, Cap. 5 — §4.2 (Cass. n. 12266/2017)" }
    ],
    veroFalso: [
      { aff: "Nel dolo intenzionale l'evento costituisce lo scopo perseguito dall'agente.", vero: true,
        traccia: "Vero. Il dolo intenzionale (o di primo grado) si colloca al massimo livello di intensità volitiva: l'agente agisce proprio allo scopo di realizzare l'evento tipico (es. spara per uccidere). Si distingue dal dolo diretto, in cui l'evento è conseguenza certa accettata, e dall'eventuale, in cui è solo possibile." },
      { aff: "Il dolo può essere presunto sulla base della mera condotta materiale (dolus in re ipsa).", vero: false,
        traccia: "Falso. Il dolo va accertato in via indiziaria, valorizzando le circostanze esteriori del caso concreto. È espressamente escluso il ricorso a presunzioni di dolus in re ipsa, che violerebbero il principio di colpevolezza." }
    ],
    domandaAperta: {
      q: "Il candidato illustri la struttura e le gradazioni del dolo, distinguendo dolo intenzionale, diretto ed eventuale.",
      traccia: "Il dolo (art. 43) si compone di rappresentazione (previsione del fatto) e volontà (risoluzione di realizzarlo), ed è il criterio normale di imputazione dei delitti (art. 42 co. 2). Sul piano volitivo si gradua in: dolo intenzionale (l'evento è lo scopo); dolo diretto (l'evento, pur non perseguito, è previsto come certo o altamente probabile e accettato); dolo eventuale (l'evento è previsto come possibile e se ne accetta il rischio). La linea tra dolo diretto ed eventuale corre sul grado di probabilità rappresentata. Vanno richiamate le forme (generico/specifico, di danno/pericolo) e l'accertamento indiziario, con divieto di dolus in re ipsa.",
      fonte: "SuperCompendio, Cap. 5 — §§4-4.2"
    },
    esaminatore: {
      q: "Mi distingua il dolo generico dal dolo specifico, con un esempio.",
      valutazione: { voci: [["Padronanza dei contenuti","8.0"],["Uso delle fonti","7.5"],["Chiarezza espositiva","8.5"],["Proprietà di linguaggio","8.0"]],
        commento: "Esposizione chiara e ben esemplificata (fine di profitto nel furto). Per completezza si poteva precisare che il fine del dolo specifico non deve necessariamente realizzarsi, restando estraneo alla struttura oggettiva del reato." }
    },
    richiamoLibero: {
      prompt: "A libro chiuso: scrivi quanto ricordi sulla struttura e sulle gradazioni del dolo.",
      attesi: ["Rappresentazione + volontà (art. 43)","Dolo intenzionale","Dolo diretto","Dolo eventuale","Dolo generico/specifico"],
      fonte: "SuperCompendio, Cap. 5 — §4"
    },
    feynman: { prompt: "Spiega con parole tue cosa vuol dire 'agire con dolo' a chi non ha mai studiato diritto.",
      riscontro: "Buona spiegazione se rendi l'idea che 'dolo' significa fare una cosa volendola davvero, sapendo cosa accadrà: non un incidente, ma una scelta. Puoi aggiungere che ci sono intensità diverse — chi agisce proprio per ottenere quel risultato, chi sa che accadrà di sicuro anche se non è il suo scopo, e chi mette in conto che potrebbe accadere e va avanti lo stesso." },
    tools: ["multipla","verofalso","aperta","esaminatore","esempio","richiamo","feynman"]
  },

  /* ============================== 5. COLPA ========================== */
  {
    id: "colpa", n: 5, icon: "alert",
    title: "La colpa",
    subtitle: "Art. 43 c.p.: colpa generica e specifica, cosciente, colpa medica",
    cap: "Cap. 5 — L'elemento soggettivo",
    assunti: [
      "La colpa, nei delitti, opera solo nei casi espressamente previsti dalla legge (art. 42 co. 2).",
      "Si fonda sull'inosservanza di regole cautelari e sulla prevedibilità/evitabilità dell'evento.",
      "Si distingue in colpa generica e specifica, cosciente e incosciente."
    ],
    spiegazione: `
      <p>La <strong>colpa</strong> è il criterio di imputazione soggettiva che, nei delitti, opera solo per espressa previsione di legge (clausola di doppia tassatività, art. 42, co. 2). Ai sensi dell'art. 43, co. 3, il delitto è colposo «quando l'evento, anche se preveduto, non è voluto dall'agente e si verifica a causa di <em>negligenza, imprudenza o imperizia</em>, ovvero per inosservanza di leggi, regolamenti, ordini o discipline».</p>
      <h4>Gli elementi della colpa (teoria mista)</h4>
      <ul>
        <li><strong>Involontarietà</strong> del fatto tipico: principale criterio di distinzione dal dolo.</li>
        <li><strong>Inosservanza di regole cautelari</strong>, identificate secondo prevedibilità ed evitabilità dell'evento, alla luce della miglior scienza ed esperienza del settore.</li>
        <li><strong>Attribuibilità soggettiva</strong> ed esigibilità del comportamento corretto, secondo il parametro dell'«uomo giudizioso» <em>eiusdem professionis et condicionis</em>.</li>
      </ul>
      <p>Occorre inoltre il <strong>nesso tra colpa ed evento</strong>: l'evento deve essere la concretizzazione del rischio che la regola cautelare mirava a prevenire (causalità della colpa), e il comportamento alternativo lecito avrebbe evitato o ridotto sensibilmente l'evento.</p>
      <h4>Le specie di colpa</h4>
      <ul>
        <li><strong>Colpa generica</strong>: violazione di regole non scritte (negligenza, imprudenza, imperizia).</li>
        <li><strong>Colpa specifica</strong>: violazione di regole cautelari scritte (leggi, regolamenti, ordini, discipline).</li>
        <li><strong>Colpa cosciente</strong>: l'agente prevede l'evento come possibile ma confida di evitarlo (aggravante ex art. 61 n. 3) — da distinguere dal dolo eventuale.</li>
        <li><strong>Colpa propria / impropria</strong>: nella seconda l'evento è voluto, ma si risponde per colpa (eccesso colposo, scriminante putativa colposa, errore di fatto colposo).</li>
      </ul>
      <h4>La colpa medica</h4>
      <p>Dopo il decreto Balduzzi (2012), la legge Gelli-Bianco (l. 24/2017) ha introdotto l'art. 590-sexies: non punibilità per imperizia se l'evento deriva dal rispetto delle linee guida adeguate al caso concreto. Le S.U. Mariotti (2018) hanno chiarito che l'esercente risponde per colpa lieve da imperizia solo nell'esecuzione, quando abbia rispettato linee guida adeguate.</p>`,
    puntiChiave: [
      "Nei delitti la colpa opera SOLO nei casi espressamente previsti (doppia tassatività, art. 42 co. 2).",
      "Colpa = involontarietà + violazione regole cautelari + prevedibilità/evitabilità.",
      "Colpa generica (regole non scritte: negligenza, imprudenza, imperizia) / specifica (regole scritte).",
      "Colpa cosciente (art. 61 n. 3): prevede l'evento ma confida di evitarlo. ← confine col dolo eventuale",
      "Nesso causale della colpa: l'evento dev'essere concretizzazione del rischio che la regola voleva prevenire.",
      "Colpa medica: art. 590-sexies (Gelli-Bianco) + S.U. Mariotti 2018 sulla colpa lieve da imperizia."
    ],
    esempio: {
      titolo: "Colpa generica e colpa specifica",
      testo: "Un automobilista che attraversa col rosso e investe un pedone risponde di lesioni colpose per <strong>colpa specifica</strong> (violazione di una regola scritta del Codice della strada). Se invece, con semaforo verde ma in una strada affollata, procede troppo veloce per le circostanze e travolge un passante, risponde per <strong>colpa generica</strong> (imprudenza): ha violato una regola cautelare non scritta di prudenza, pur in assenza di una norma specifica trasgredita."
    },
    podcast: { title: "La colpa", sub: "SuperCompendio · Cap. 5 — §5",
      chapters: [ ["Nozione e doppia tassatività","0:00"], ["Gli elementi della colpa","4:50"], ["Colpa generica e specifica","9:30"], ["La causalità della colpa","13:40"], ["La colpa medica","17:20"] ] },
    video: { title: "Colpa e regole cautelari", sub: "Video lezione · collegata al Cap. 5",
      chapters: [ ["La regola cautelare","0:00"], ["Prevedibilità ed evitabilità","4:00"], ["Colpa cosciente","8:10"] ] },
    mappa: "colpa",
    flashcards: [
      ["Quali sono i tre elementi della colpa secondo la teoria mista?", "Involontarietà del fatto, inosservanza di regole cautelari (prevedibilità/evitabilità) e attribuibilità soggettiva con esigibilità del comportamento corretto."],
      ["Differenza tra colpa generica e specifica?", "La generica viola regole cautelari non scritte (negligenza, imprudenza, imperizia); la specifica viola regole cautelari scritte (leggi, regolamenti, ordini, discipline)."],
      ["Cos'è la colpa impropria?", "L'ipotesi in cui l'evento è voluto ma si risponde a titolo di colpa: eccesso colposo, supposizione colposa di una scriminante inesistente, errore di fatto determinato da colpa."]
    ],
    quiz: [
      { q: "Nei delitti, la colpa come criterio di imputazione:",
        opts: ["È la regola generale","Opera solo nei casi espressamente previsti dalla legge","Non è mai ammessa","Coincide con il dolo eventuale"],
        correct: 1,
        why: "Vige la clausola di doppia tassatività (art. 42, co. 2): i delitti sono di regola dolosi e rispondono a titolo di colpa solo se ciò è espressamente previsto. Le contravvenzioni, invece, sono punibili indifferentemente a dolo o colpa.",
        fonte: "SuperCompendio, Cap. 5 — §5 (art. 42 c.p.)" },
      { q: "La colpa specifica consiste nella violazione di:",
        opts: ["Regole cautelari non scritte","Regole cautelari scritte (leggi, regolamenti, ordini, discipline)","Norme penali in bianco","Principi costituzionali"],
        correct: 1,
        why: "La colpa specifica deriva dalla violazione di una regola cautelare scritta, posta per prevenire determinate situazioni di pericolo. La colpa generica riguarda invece le regole non scritte ricavate dai parametri di negligenza, imprudenza e imperizia.",
        fonte: "SuperCompendio, Cap. 5 — §5.1" },
      { q: "La colpa cosciente (art. 61 n. 3) ricorre quando l'agente:",
        opts: ["Non prevede affatto l'evento","Prevede l'evento come possibile ma confida di evitarlo","Vuole e accetta l'evento","Agisce in stato di necessità"],
        correct: 1,
        why: "Nella colpa cosciente l'agente prevede come possibile l'evento ma, per leggerezza, confida che non si verifichi. La previsione integra un'aggravante (art. 61 n. 3). Quando invece accetta il rischio dell'evento si ha dolo eventuale.",
        fonte: "SuperCompendio, Cap. 5 — §5.1" },
      { q: "Ai fini del nesso causale della colpa occorre verificare che l'evento:",
        opts: ["Fosse statisticamente raro","Sia la concretizzazione del rischio che la regola cautelare mirava a prevenire","Fosse voluto dall'agente","Derivasse da forza maggiore"],
        correct: 1,
        why: "La causalità della colpa richiede, ex ante, che l'evento concretizzi proprio il rischio che la regola cautelare voleva evitare e, ex post, che il comportamento alternativo lecito lo avrebbe evitato o ridotto sensibilmente. È un giudizio distinto e meno rigoroso del nesso causale materiale.",
        fonte: "SuperCompendio, Cap. 5 — §5" },
      { q: "In tema di colpa medica, la legge Gelli-Bianco (l. 24/2017):",
        opts: ["Ha abolito la responsabilità penale del medico","Ha introdotto l'art. 590-sexies, con causa di non punibilità per imperizia nel rispetto di linee guida adeguate","Ha reso il medico responsabile solo per dolo","Ha reintrodotto il decreto Balduzzi"],
        correct: 1,
        why: "La l. 24/2017 ha abrogato il decreto Balduzzi e introdotto l'art. 590-sexies c.p.: non punibilità per morte o lesioni da imperizia, se rispettate linee guida adeguate al caso concreto. Le S.U. Mariotti (2018) hanno precisato la portata applicativa, limitandola alla colpa lieve da imperizia in fase esecutiva.",
        fonte: "SuperCompendio, Cap. 5 — §5.2 (art. 590-sexies; Cass. S.U. n. 8770/2018)" },
      { q: "Il parametro per valutare l'esigibilità del comportamento diligente è:",
        opts: ["L'uomo medio in astratto","L'agente modello (homo eiusdem professionis et condicionis)","Il soggetto più esperto del settore","L'imputato concreto, senza parametri"],
        correct: 1,
        why: "Si fa riferimento all'agente modello, l'uomo giudizioso della medesima professione e condizione dell'agente concreto: un parametro non unitario, variabile in relazione alle diverse attività, che misura prevedibilità ed evitabilità secondo la miglior scienza ed esperienza del settore.",
        fonte: "SuperCompendio, Cap. 5 — §5" }
    ],
    veroFalso: [
      { aff: "I delitti sono punibili a titolo di colpa solo nei casi espressamente previsti dalla legge.", vero: true,
        traccia: "Vero. L'art. 42, co. 2, c.p. sancisce la clausola di doppia tassatività: i delitti sono di regola punibili solo a titolo di dolo e rispondono per colpa unicamente quando ciò sia espressamente stabilito. Le contravvenzioni, invece, sono punibili sia a dolo sia a colpa." },
      { aff: "Nella colpa cosciente l'agente accetta il verificarsi dell'evento.", vero: false,
        traccia: "Falso. Nella colpa cosciente l'agente prevede l'evento come possibile ma confida (per leggerezza) di poterlo evitare: non lo accetta. L'accettazione del rischio caratterizza invece il dolo eventuale. È proprio questo il discrimine tra le due figure." }
    ],
    domandaAperta: {
      q: "Il candidato esponga la nozione e gli elementi costitutivi della colpa, distinguendo colpa generica e specifica.",
      traccia: "La colpa (art. 43 co. 3) è criterio di imputazione che nei delitti opera solo nei casi previsti (art. 42 co. 2). Secondo la teoria mista si compone di: involontarietà del fatto; inosservanza di regole cautelari individuate secondo prevedibilità ed evitabilità; attribuibilità soggettiva ed esigibilità del comportamento corretto (agente modello). Occorre il nesso causale della colpa: l'evento dev'essere concretizzazione del rischio che la regola voleva prevenire, evitabile col comportamento alternativo lecito. La colpa generica viola regole non scritte (negligenza, imprudenza, imperizia); la specifica viola regole scritte. Vanno menzionate la colpa cosciente (art. 61 n. 3) e la colpa impropria, oltre alla disciplina della colpa medica (art. 590-sexies, S.U. Mariotti).",
      fonte: "SuperCompendio, Cap. 5 — §5"
    },
    esaminatore: {
      q: "Mi spieghi la differenza tra colpa generica e colpa specifica, con un esempio per ciascuna.",
      valutazione: { voci: [["Padronanza dei contenuti","8.0"],["Uso delle fonti","8.0"],["Chiarezza espositiva","8.0"],["Proprietà di linguaggio","7.5"]],
        commento: "Distinzione corretta ed esempi pertinenti. Si poteva aggiungere che, anche nella colpa specifica, la responsabilità presuppone che l'evento sia proprio quello che la regola scritta mirava a prevenire (concretizzazione del rischio)." }
    },
    richiamoLibero: {
      prompt: "A libro chiuso: scrivi gli elementi della colpa e le sue specie.",
      attesi: ["Involontarietà","Inosservanza regole cautelari","Prevedibilità ed evitabilità","Colpa generica/specifica","Colpa cosciente"],
      fonte: "SuperCompendio, Cap. 5 — §5"
    },
    feynman: { prompt: "Spiega a un amico cosa vuol dire 'aver fatto un danno per colpa', come se glielo raccontassi semplicemente.",
      riscontro: "Buona spiegazione se rendi l'idea che 'colpa' non vuol dire 'voler fare del male', ma 'non aver fatto attenzione': la persona non voleva il danno, ma è successo perché non ha rispettato una regola di prudenza — scritta (come un limite di velocità) o di buon senso. Aggiungi che si risponde solo se quel danno era prevedibile ed evitabile facendo la cosa giusta." },
    tools: ["multipla","verofalso","aperta","esaminatore","esempio","richiamo","feynman"]
  },

  /* ================ 6. DOLO EVENTUALE vs COLPA COSCIENTE =========== */
  {
    id: "doloEventuale", n: 6, icon: "split",
    title: "Dolo eventuale e colpa cosciente",
    subtitle: "Il confine della colpevolezza: la sentenza ThyssenKrupp",
    cap: "Cap. 5 — L'elemento soggettivo",
    assunti: [
      "Entrambe le figure presuppongono la previsione dell'evento, non perseguito come scopo.",
      "Il discrimine è l'atteggiamento volitivo: accettazione del rischio (dolo) vs fiducia di evitarlo (colpa).",
      "Le Sezioni Unite ThyssenKrupp (2014) hanno adottato la teoria del bilanciamento."
    ],
    spiegazione: `
      <p>La distinzione tra <strong>dolo eventuale</strong> e <strong>colpa cosciente</strong> è il punto più delicato della teoria della colpevolezza, e una delle domande più ricorrenti all'orale. Entrambe le figure condividono un dato: l'evento è <em>previsto</em> dall'agente ma non costituisce lo scopo della condotta.</p>
      <h4>Il discrimine volitivo</h4>
      <ul>
        <li>Si ha <strong>dolo eventuale</strong> quando l'agente, rappresentandosi la concreta possibilità dell'evento, ne <em>accetta il rischio</em>, aderendo ad esso: agisce «a costo di» cagionarlo.</li>
        <li>Si ha <strong>colpa cosciente</strong> (o colpa con previsione, art. 61 n. 3) quando l'agente, pur prevedendo l'evento, <em>confida in buona fede di poterlo evitare</em>: non lo accetta.</li>
      </ul>
      <p>Il criterio tradizionale è quello dell'<strong>accettazione del rischio</strong>: il diverso atteggiamento volitivo verso l'evento (accettazione contro fiducia nella sua mancata verificazione).</p>
      <h4>La sentenza ThyssenKrupp (S.U. 18 settembre 2014, n. 38343)</h4>
      <p>Le Sezioni Unite hanno affinato il criterio, adottando la <strong>teoria del bilanciamento (o della prima formula di Frank)</strong>: sussiste dolo eventuale quando l'agente, «dopo aver tutto soppesato, dopo aver considerato il fine perseguito e l'eventuale prezzo da pagare, si sia consapevolmente determinato ad agire comunque, ad accettare l'eventualità della causazione dell'offesa», esprimendo così una scelta razionale assimilabile alla volontà. Se invece, posto di fronte alla concreta prospettiva dell'evento, l'agente avrebbe desistito, si versa in colpa cosciente.</p>
      <p>La Corte ha inoltre indicato una serie di <em>indicatori</em> del dolo eventuale (la lontananza della condotta dalla regola cautelare, la personalità dell'agente, la durata e ripetizione dell'azione, il fine perseguito, ecc.) da valutare globalmente.</p>`,
    puntiChiave: [
      "Comune denominatore: l'evento è PREVISTO ma non è lo scopo dell'agente.",
      "Dolo eventuale = accettazione del rischio ('a costo di' cagionarlo).",
      "Colpa cosciente (art. 61 n. 3) = previsione + fiducia di evitarlo. NON accetta l'evento.",
      "ThyssenKrupp (S.U. 38343/2014): teoria del bilanciamento / prima formula di Frank.",
      "Test di Frank: l'agente avrebbe agito ugualmente anche con la certezza dell'evento? Sì → dolo eventuale.",
      "Distinzione decisiva per il titolo di responsabilità (es. omicidio doloso vs colposo)."
    ],
    esempio: {
      titolo: "Lo stesso evento, due colpevolezze diverse",
      testo: "Un guidatore lancia l'auto a folle velocità in centro. Se si rappresenta che potrebbe travolgere un pedone e prosegue <em>accettando</em> quell'esito — «se succede, succede» — risponde di omicidio a titolo di <strong>dolo eventuale</strong>. Se invece, pur prevedendo il rischio, confida nelle proprie capacità di guida e nei riflessi, certo di farcela a schivare — e solo per un errore l'evento si verifica — risponde a titolo di <strong>colpa cosciente</strong>. La differenza non sta nel fatto, ma nell'atteggiamento interiore verso l'evento previsto."
    },
    podcast: { title: "Dolo eventuale e colpa cosciente", sub: "SuperCompendio · Cap. 5 — §4.2",
      chapters: [ ["Il problema del confine","0:00"], ["L'accettazione del rischio","4:20"], ["La colpa con previsione","8:00"], ["ThyssenKrupp e la teoria del bilanciamento","11:30"], ["Gli indicatori del dolo","17:00"] ] },
    video: { title: "Il caso ThyssenKrupp", sub: "Video lezione · collegata al Cap. 5",
      chapters: [ ["I fatti e il processo","0:00"], ["La prima formula di Frank","4:40"], ["Gli indicatori del dolo eventuale","8:50"] ] },
    mappa: "doloEventuale",
    flashcards: [
      ["Qual è il discrimine tra dolo eventuale e colpa cosciente?", "L'atteggiamento volitivo verso l'evento previsto: accettazione del rischio (dolo eventuale) contro fiducia di evitarlo (colpa cosciente)."],
      ["Cosa ha stabilito la sentenza ThyssenKrupp (S.U. 2014)?", "Ha adottato la teoria del bilanciamento (prima formula di Frank): vi è dolo eventuale se l'agente, soppesato il prezzo da pagare, si è determinato ad agire comunque, accettando l'offesa."],
      ["In cosa consiste il test di Frank?", "Nel chiedersi se l'agente avrebbe agito ugualmente pur avendo la certezza del verificarsi dell'evento: in caso affermativo si ha dolo eventuale."]
    ],
    quiz: [
      { q: "L'elemento che accomuna dolo eventuale e colpa cosciente è:",
        opts: ["L'intenzione di cagionare l'evento","La previsione dell'evento, che non è lo scopo della condotta","L'assenza di qualsiasi previsione","La violazione di una regola scritta"],
        correct: 1,
        why: "In entrambe le figure l'agente prevede l'evento, che però non è il fine perseguito. Ciò che le distingue è l'atteggiamento volitivo: accettazione del rischio nel dolo eventuale, fiducia di evitarlo nella colpa cosciente.",
        fonte: "SuperCompendio, Cap. 5 — §4.2" },
      { q: "Si ha dolo eventuale quando l'agente:",
        opts: ["Confida di evitare l'evento","Si rappresenta l'evento come possibile e ne accetta il rischio","Non prevede l'evento","Vuole l'evento come scopo primario"],
        correct: 1,
        why: "Il dolo eventuale ricorre quando l'agente, rappresentandosi la concreta possibilità dell'evento, ne accetta il rischio, decidendo di agire 'a costo di' cagionarlo. Se invece confida di evitarlo si versa in colpa cosciente; se l'evento è lo scopo, in dolo intenzionale.",
        fonte: "SuperCompendio, Cap. 5 — §4.2" },
      { q: "La colpa cosciente (art. 61 n. 3) si distingue dal dolo eventuale perché l'agente:",
        opts: ["Accetta l'evento","Prevede l'evento ma confida di evitarlo","Non viola alcuna regola cautelare","Agisce con dolo specifico"],
        correct: 1,
        why: "Nella colpa cosciente l'agente prevede l'evento come possibile, ma confida in buona fede di poterlo evitare: manca l'accettazione del rischio. La previsione costituisce circostanza aggravante (art. 61 n. 3).",
        fonte: "SuperCompendio, Cap. 5 — §4.2" },
      { q: "La sentenza ThyssenKrupp (S.U. 38343/2014) ha accolto, per individuare il dolo eventuale:",
        opts: ["La teoria della probabilità pura","La teoria del bilanciamento (prima formula di Frank)","La teoria della causalità adeguata","La teoria del dolus in re ipsa"],
        correct: 1,
        why: "Le Sezioni Unite hanno adottato la teoria del bilanciamento: sussiste dolo eventuale quando l'agente, soppesati fine e prezzo da pagare, si determina ad agire comunque accettando l'offesa, in una scelta assimilabile alla volontà. È la cd. prima formula di Frank.",
        fonte: "SuperCompendio, Cap. 5 — §4.2 (Cass. S.U. n. 38343/2014)" },
      { q: "Secondo il test (prima formula) di Frank, vi è dolo eventuale se:",
        opts: ["L'agente avrebbe desistito di fronte alla certezza dell'evento","L'agente avrebbe agito ugualmente anche con la certezza dell'evento","L'evento era imprevedibile","L'agente ignorava la regola cautelare"],
        correct: 1,
        why: "La prima formula di Frank chiede di immaginare che l'agente avesse avuto la certezza dell'evento: se avrebbe agito ugualmente, vi è dolo eventuale (accettazione); se avrebbe desistito, colpa cosciente.",
        fonte: "SuperCompendio, Cap. 5 — §4.2" },
      { q: "La corretta qualificazione come dolo eventuale o colpa cosciente rileva soprattutto per:",
        opts: ["La competenza territoriale","Il titolo di responsabilità e il relativo trattamento sanzionatorio","La procedibilità a querela","La prescrizione del reato"],
        correct: 1,
        why: "Dalla distinzione dipende il titolo di imputazione (es. omicidio doloso vs omicidio colposo) e, di conseguenza, la cornice edittale: una differenza di enorme impatto pratico, che spiega la centralità del tema in giurisprudenza.",
        fonte: "SuperCompendio, Cap. 5 — §4.2" }
    ],
    veroFalso: [
      { aff: "Nel dolo eventuale l'agente persegue l'evento come scopo della propria condotta.", vero: false,
        traccia: "Falso. Nel dolo eventuale l'evento non è lo scopo: l'agente persegue altri fini ma, rappresentandosi la concreta possibilità dell'evento, ne accetta il rischio. Quando l'evento è perseguito come scopo si ha dolo intenzionale." },
      { aff: "La sentenza ThyssenKrupp ha valorizzato la teoria del bilanciamento per accertare il dolo eventuale.", vero: true,
        traccia: "Vero. Le Sezioni Unite (2014) hanno affermato che sussiste dolo eventuale quando l'agente, dopo aver soppesato il fine e l'eventuale prezzo da pagare, si determina ad agire comunque, accettando l'eventualità dell'offesa: una scelta razionale assimilabile alla volontà (teoria del bilanciamento / prima formula di Frank)." }
    ],
    domandaAperta: {
      q: "Il candidato tratteggi la nozione di dolo eventuale e la distingua dalla colpa cosciente, dando conto dell'apporto delle Sezioni Unite ThyssenKrupp.",
      traccia: "Il dolo eventuale ricorre quando l'agente si rappresenta l'evento come possibile e ne accetta il rischio, aderendovi. Nella colpa cosciente (art. 61 n. 3) l'evento è pure previsto, ma l'agente confida in buona fede di poterlo evitare. Il discrimine è l'atteggiamento volitivo: accettazione contro fiducia nella mancata verificazione. Le Sezioni Unite ThyssenKrupp (38343/2014) hanno precisato la tradizionale formula dell'accettazione del rischio adottando la teoria del bilanciamento (prima formula di Frank): vi è dolo eventuale se l'agente, soppesati il fine e il prezzo da pagare, si è consapevolmente determinato ad agire comunque, in una scelta assimilabile alla volontà; la Corte ha altresì elencato una serie di indicatori del dolo da valutare globalmente. La qualificazione incide sul titolo di responsabilità (doloso o colposo).",
      fonte: "SuperCompendio, Cap. 5 — §4.2 (Cass. S.U. n. 38343/2014)"
    },
    esaminatore: {
      q: "Mi illustri il criterio adottato dalle Sezioni Unite ThyssenKrupp per distinguere dolo eventuale e colpa cosciente.",
      valutazione: { voci: [["Padronanza dei contenuti","8.5"],["Uso delle fonti","8.5"],["Chiarezza espositiva","8.0"],["Proprietà di linguaggio","8.0"]],
        commento: "Ottima padronanza della teoria del bilanciamento e della prima formula di Frank. Per completezza si poteva richiamare il catalogo di indicatori del dolo (lontananza dalla regola cautelare, durata e reiterazione della condotta, fine perseguito) che la sentenza invita a valutare in modo globale e non atomistico." }
    },
    richiamoLibero: {
      prompt: "A libro chiuso: scrivi cosa distingue il dolo eventuale dalla colpa cosciente e cosa ha detto ThyssenKrupp.",
      attesi: ["Previsione comune dell'evento","Accettazione del rischio (dolo)","Fiducia di evitarlo (colpa)","Teoria del bilanciamento","Prima formula di Frank"],
      fonte: "SuperCompendio, Cap. 5 — §4.2"
    },
    feynman: { prompt: "Spiega a un amico la differenza tra 'mettere in conto' un danno e 'sperare di evitarlo', usando un esempio di guida.",
      riscontro: "Una buona spiegazione usa due piloti che corrono in città: il primo pensa 'se investo qualcuno pazienza, vado avanti lo stesso' — sta accettando il rischio (dolo eventuale); il secondo pensa 'è pericoloso, ma sono bravo, ce la faccio a evitarlo' — spera di evitarlo (colpa cosciente). Stessa corsa, ma testa diversa: ed è la testa che decide se è omicidio volontario o colposo. Ottimo se citi anche il 'test': se avesse saputo con certezza di investire qualcuno, l'avrebbe fatto comunque?" },
    tools: ["multipla","verofalso","aperta","esaminatore","esempio","richiamo","feynman"]
  },

  /* ========================= 7. PRETERINTENZIONE ==================== */
  {
    id: "preterintenzione", n: 7, icon: "scale2",
    title: "La preterintenzione",
    subtitle: "Art. 43 c.p.: l'evento «oltre l'intenzione», l'omicidio preterintenzionale",
    cap: "Cap. 5 — L'elemento soggettivo",
    assunti: [
      "Vi è preterintenzione quando dall'azione deriva un evento più grave di quello voluto (art. 43).",
      "La legge tipizza solo l'omicidio (art. 584) e l'aborto preterintenzionale (art. 593-ter).",
      "Discussa la natura: dolo misto a responsabilità oggettiva o dolo misto a colpa."
    ],
    spiegazione: `
      <p>Ai sensi dell'art. 43 c.p., il delitto è <strong>preterintenzionale</strong> «o oltre l'intenzione, quando dall'azione od omissione deriva un evento dannoso o pericoloso <em>più grave</em> di quello voluto dall'agente». L'agente vuole un evento meno grave, ma se ne realizza uno più grave.</p>
      <h4>La struttura</h4>
      <ul>
        <li>la <strong>volontà di un evento meno grave</strong> (si ritiene necessaria almeno la commissione di un tentativo del reato-base);</li>
        <li>la <strong>realizzazione di un evento più grave</strong>;</li>
        <li>il <strong>nesso causale</strong> tra la condotta e l'evento più grave.</li>
      </ul>
      <h4>La natura (il dibattito)</h4>
      <p>La questione attiene al titolo di imputazione dell'evento più grave:</p>
      <ul>
        <li><strong>Dolo misto a responsabilità oggettiva</strong>: tesi a lungo sostenuta in giurisprudenza per l'omicidio preterintenzionale — basta il nesso causale tra le percosse/lesioni volute e la morte, senza prevedibilità dell'evento maggiore.</li>
        <li><strong>Dolo misto a colpa presunta</strong>: la legge presumerebbe la colpa per condotte particolarmente offensive.</li>
        <li><strong>Dolo misto a colpa</strong>: l'evento più grave è addebitato se ricorrono gli estremi della colpa. È la lettura più rispettosa del principio di colpevolezza (art. 27 Cost.), pur configurando una colpa peculiare, innestata su un'attività già illecita.</li>
      </ul>
      <p>La legge qualifica espressamente come preterintenzionali solo due ipotesi: l'<strong>omicidio preterintenzionale</strong> (art. 584) e l'<strong>aborto preterintenzionale</strong> (art. 593-ter).</p>`,
    puntiChiave: [
      "Preterintenzione (art. 43): evento più grave di quello voluto, «oltre l'intenzione».",
      "Solo due ipotesi tipizzate: omicidio preterintenzionale (art. 584) e aborto preterintenzionale (art. 593-ter).",
      "Struttura: volontà evento minore + realizzazione evento maggiore + nesso causale.",
      "Natura discussa: dolo misto a resp. oggettiva / a colpa presunta / a colpa.",
      "La tesi 'dolo misto a colpa' è la più conforme all'art. 27 Cost. (principio di colpevolezza)."
    ],
    esempio: {
      titolo: "L'omicidio preterintenzionale",
      testo: "Tizio, nel corso di una lite, sferra un pugno a Caio per percuoterlo o ferirlo (vuole le lesioni). Caio, cadendo, batte la testa e muore. Tizio non voleva la morte, ma la morte è derivata dalla sua condotta volontaria: risponde di <strong>omicidio preterintenzionale</strong> (art. 584). La sua volontà era diretta a un evento meno grave (le lesioni), ma se ne è realizzato uno più grave (la morte), legato causalmente alla condotta."
    },
    podcast: { title: "La preterintenzione", sub: "SuperCompendio · Cap. 5 — §7",
      chapters: [ ["Nozione (art. 43)","0:00"], ["La struttura","3:40"], ["Le tesi sulla natura","7:10"], ["Omicidio e aborto preterintenzionale","12:20"] ] },
    video: { title: "L'omicidio preterintenzionale", sub: "Video lezione · collegata al Cap. 5",
      chapters: [ ["L'evento oltre l'intenzione","0:00"], ["Dolo misto a colpa","3:50"], ["Confine con omicidio doloso e colposo","7:30"] ] },
    mappa: "preterintenzione",
    flashcards: [
      ["Quando si ha preterintenzione (art. 43)?", "Quando dall'azione od omissione deriva un evento più grave di quello voluto dall'agente: l'agente voleva un evento minore, se ne realizza uno maggiore."],
      ["Quali sono le sole ipotesi tipizzate di preterintenzione?", "L'omicidio preterintenzionale (art. 584) e l'aborto preterintenzionale (art. 593-ter)."],
      ["Qual è la tesi più conforme al principio di colpevolezza?", "Quella del dolo misto a colpa: l'evento più grave è addebitato solo se prevedibile ed evitabile, in linea con l'art. 27 Cost."]
    ],
    quiz: [
      { q: "Ai sensi dell'art. 43 c.p., il delitto è preterintenzionale quando:",
        opts: ["L'evento è voluto ma non si verifica","Dall'azione deriva un evento più grave di quello voluto","L'evento è preveduto e voluto","L'evento deriva da caso fortuito"],
        correct: 1,
        why: "La preterintenzione (art. 43) ricorre quando dall'azione od omissione deriva un evento dannoso o pericoloso più grave di quello voluto dall'agente: la volontà è diretta a un evento minore, ma se ne realizza uno maggiore.",
        fonte: "SuperCompendio, Cap. 5 — §7 (art. 43 c.p.)" },
      { q: "Quali ipotesi sono espressamente qualificate come preterintenzionali dalla legge?",
        opts: ["Omicidio e lesioni gravissime","Omicidio preterintenzionale (584) e aborto preterintenzionale (593-ter)","Rapina e sequestro","Solo l'omicidio del consenziente"],
        correct: 1,
        why: "Il legislatore tipizza come preterintenzionali soltanto l'omicidio preterintenzionale (art. 584) e l'aborto preterintenzionale (art. 593-ter). Al di fuori di esse non esistono altre fattispecie espressamente preterintenzionali.",
        fonte: "SuperCompendio, Cap. 5 — §7" },
      { q: "La struttura della preterintenzione richiede, quanto all'evento-base, almeno:",
        opts: ["Un mero pensiero criminoso","La commissione di un tentativo del reato-base","La consumazione di un delitto colposo","Una contravvenzione"],
        correct: 1,
        why: "Si ritiene indispensabile almeno la commissione di un tentativo del reato-base (es. le percosse o lesioni volute nell'omicidio preterintenzionale), cui si aggiunge la realizzazione dell'evento più grave legato causalmente alla condotta.",
        fonte: "SuperCompendio, Cap. 5 — §7" },
      { q: "La tesi più rispettosa del principio di colpevolezza qualifica la preterintenzione come:",
        opts: ["Dolo misto a responsabilità oggettiva","Dolo misto a colpa","Responsabilità oggettiva pura","Caso fortuito"],
        correct: 1,
        why: "La lettura del dolo misto a colpa addebita l'evento più grave solo se prevedibile ed evitabile, risultando la più conforme all'art. 27 Cost. La tesi del dolo misto a responsabilità oggettiva, a lungo sostenuta in giurisprudenza, prescinde dalla prevedibilità dell'evento maggiore.",
        fonte: "SuperCompendio, Cap. 5 — §7" },
      { q: "Nell'omicidio preterintenzionale (art. 584) l'agente, rispetto alla morte:",
        opts: ["La vuole come scopo","Non la vuole: voleva percuotere o ledere","La prevede e accetta","Agisce per colpa specifica"],
        correct: 1,
        why: "Nell'omicidio preterintenzionale la volontà dell'agente è diretta a percuotere o a cagionare lesioni (evento meno grave); la morte (evento più grave) non è voluta ma deriva causalmente dalla condotta. Se la morte fosse voluta o accettata, si avrebbe omicidio doloso.",
        fonte: "SuperCompendio, Cap. 5 — §7 (art. 584 c.p.)" }
    ],
    veroFalso: [
      { aff: "Esistono numerose fattispecie preterintenzionali tipizzate nel codice penale.", vero: false,
        traccia: "Falso. La legge qualifica espressamente come preterintenzionali solo due ipotesi: l'omicidio preterintenzionale (art. 584) e l'aborto preterintenzionale (art. 593-ter). La preterintenzione è dunque categoria a tipizzazione tassativa e limitata." },
      { aff: "Nell'omicidio preterintenzionale la morte della vittima è voluta dall'agente.", vero: false,
        traccia: "Falso. Nell'omicidio preterintenzionale l'agente vuole percuotere o ledere (evento meno grave): la morte non è voluta, ma deriva causalmente dalla condotta. Se fosse voluta o accettata come rischio, si configurerebbe omicidio doloso (eventualmente con dolo eventuale)." }
    ],
    domandaAperta: {
      q: "Il candidato illustri la natura giuridica e la struttura del delitto preterintenzionale.",
      traccia: "La preterintenzione (art. 43) ricorre quando dall'azione deriva un evento più grave di quello voluto. Struttura: volontà di un evento meno grave (almeno un tentativo del reato-base), realizzazione di un evento più grave, nesso causale tra condotta ed evento maggiore. Quanto alla natura, si contendono il campo tre tesi: dolo misto a responsabilità oggettiva (giurisprudenza tradizionale, basta il nesso causale); dolo misto a colpa presunta; dolo misto a colpa (l'evento maggiore è addebitato se prevedibile ed evitabile), preferibile perché conforme all'art. 27 Cost. La legge tipizza solo l'omicidio (art. 584) e l'aborto preterintenzionale (art. 593-ter). Va segnalato il confine con l'omicidio doloso (se la morte è accettata) e con l'omicidio colposo.",
      fonte: "SuperCompendio, Cap. 5 — §7"
    },
    esaminatore: {
      q: "Mi spieghi la differenza tra omicidio preterintenzionale, omicidio doloso e omicidio colposo.",
      valutazione: { voci: [["Padronanza dei contenuti","8.0"],["Uso delle fonti","7.5"],["Chiarezza espositiva","8.0"],["Proprietà di linguaggio","8.0"]],
        commento: "Buona la tripartizione: dolo (morte voluta o accettata), preterintenzione (volontà di percosse/lesioni con morte non voluta), colpa (morte da violazione di regole cautelari senza alcuna aggressione voluta). Si poteva richiamare il dibattito sulla natura (dolo misto a colpa) per maggiore profondità." }
    },
    richiamoLibero: {
      prompt: "A libro chiuso: scrivi cosa ricordi sulla preterintenzione e sull'omicidio preterintenzionale.",
      attesi: ["Evento più grave del voluto (art. 43)","Omicidio preterintenzionale (584)","Aborto preterintenzionale (593-ter)","Tesi sulla natura","Nesso causale"],
      fonte: "SuperCompendio, Cap. 5 — §7"
    },
    feynman: { prompt: "Spiega con parole semplici cos'è l'omicidio preterintenzionale, a chi non ha mai studiato diritto.",
      riscontro: "Una buona spiegazione rende l'idea del 'volevo fargli male, non ucciderlo': la persona voleva picchiare o ferire l'altro, ma il colpo ha portato a una conseguenza molto più grave — la morte — che non voleva. Sta nel mezzo tra chi uccide volontariamente e chi causa una morte per pura disattenzione. Ottimo se aggiungi che serve comunque un legame diretto tra il colpo dato e la morte." },
    tools: ["multipla","verofalso","aperta","esaminatore","esempio","richiamo","feynman"]
  }
);
