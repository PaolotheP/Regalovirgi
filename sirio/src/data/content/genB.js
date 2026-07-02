/* =========================================================================
   SIRIO — CONTENUTI · PARTE GENERALE del Diritto penale — Blocco B.
   L'elemento soggettivo del reato (Capitolo 5): imputabilità, dolo, colpa,
   preterintenzione, responsabilità oggettiva, errore e reato aberrante,
   cause di esclusione della colpevolezza.
   Rielaborati dal SuperCompendio di Diritto penale (Neldiritto Editore).
   ========================================================================= */

export const GEN_B = [
  /* ===================== 1 · L'IMPUTABILITÀ ==================== */
  {
    id: "imputabilita", part: "generale", chapter: 5, chapterTitle: "L'elemento soggettivo",
    title: "L'imputabilità", subtitle: "Capacità di intendere e volere, minore età, vizio di mente, ubriachezza, actio libera in causa",
    articoli: ["art. 85 c.p.", "art. 88 c.p.", "art. 89 c.p.", "artt. 91-95 c.p.", "artt. 97-98 c.p.", "art. 87 c.p.", "art. 90 c.p."], pages: [31, 34], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "L'imputabilità è la <strong>capacità di intendere e di volere</strong> al momento del fatto (art. 85 c.p.): è imputabile chi comprende il valore sociale e il significato del proprio comportamento (capacità di intendere) e sa dominare i propri impulsi, orientando le scelte in modo consapevole (capacità di volere). Non è un elemento dell'azione, ma uno <em>status</em>, un modo di essere del soggetto, che la dottrina tiene distinto dalla <em>suitas</em>, ossia dall'appartenenza materiale e psicologica dell'azione all'agente. Essa costituisce un presupposto della colpevolezza: senza imputabilità non può muoversi all'agente alcun rimprovero per il fatto commesso. La capacità è oggetto di presunzione <em>iuris tantum</em> a partire dai 18 anni, sicché può essere vinta provando una causa che la esclude o la diminuisce, e va sempre valutata in concreto, in relazione al singolo fatto.",
      approfondimenti: [
        { label: "La minore età (artt. 97-98)", body: "Tre fasce: il <strong>minore di 14 anni</strong> (art. 97) gode di una presunzione <em>assoluta</em> di non imputabilità; il <strong>minore tra 14 e 18 anni</strong> (art. 98) è imputabile solo se in concreto capace di intendere e volere (accertamento della maturità); dai <strong>18 anni</strong> opera una presunzione <em>relativa</em> di imputabilità, superabile provando il vizio di mente o altre cause tassative (artt. 88, 89, 91, 93, 95, 96)." },
        { label: "Vizio totale e parziale di mente (artt. 88-89)", body: "Il <strong>vizio totale</strong> (art. 88) esclude del tutto la capacità: proscioglimento e, se vi è pericolosità sociale, misura di sicurezza detentiva (oggi REMS, non più OPG). Il <strong>vizio parziale</strong> (art. 89) scema grandemente la capacità senza escluderla: il soggetto resta imputabile ma la pena è diminuita (non oltre un terzo). Trattandosi di circostanza attenuante inerente alla persona, è soggetta al bilanciamento ex art. 69. Gli stati emotivi e passionali non escludono né diminuiscono l'imputabilità (art. 90)." },
        { label: "Ubriachezza e stupefacenti (artt. 91-95)", body: "Disciplina differenziata: l'<strong>ubriachezza accidentale</strong> (da caso fortuito o forza maggiore) esclude o diminuisce l'imputabilità (art. 91); quella <strong>volontaria o colposa</strong> non la esclude né diminuisce (art. 92 co. 1); quella <strong>preordinata</strong> a commettere il reato o a prepararsi una scusa aggrava la pena (art. 92 co. 2), quale <em>actio libera in causa</em> (art. 87); l'ubriachezza <strong>abituale</strong> aggrava la pena (art. 94); la <strong>cronica intossicazione</strong> (art. 95), stato patologico permanente, applica gli artt. 88-89. L'art. 93 estende la disciplina agli stupefacenti." },
      ],
      giurisprudenza: [
        { label: "SU Raso (2005, n. 9163)", body: "Nel concetto di «infermità» (artt. 88-89) rientrano anche i <strong>disturbi della personalità</strong>, purché di consistenza, intensità e gravità tali da incidere concretamente sulla capacità di intendere o di volere, escludendola o scemandola grandemente. Restano estranei i disturbi psichici transitori e le mere anomalie caratteriali legate all'indole del soggetto, nonché gli stati emotivi e passionali (art. 90)." },
      ],
      eccezioni: [
        { label: "Determinazione in altri (art. 86)", body: "Chi mette altri in stato d'incapacità al fine di fargli commettere un reato risponde del reato commesso dalla persona resa incapace (art. 86). L'art. 92 co. 1, secondo parte della dottrina, integra una «finzione di imputabilità» affine alla responsabilità oggettiva." },
      ],
    },
    sintesi: [
      "Art. 85: imputabile è chi ha capacità di intendere (valore sociale dell'atto) e di volere (dominio degli impulsi) al momento del fatto.",
      "Minore età (artt. 97-98): <14 anni non imputabile (presunzione assoluta); 14-18 imputabile se in concreto maturo; >18 presunzione relativa.",
      "Vizio totale (art. 88): esclude l'imputabilità → proscioglimento + eventuale misura di sicurezza (REMS). Vizio parziale (art. 89): pena diminuita.",
      "Ubriachezza: accidentale esclude/diminuisce (91); volontaria/colposa irrilevante (92 co.1); preordinata aggrava (92 co.2, actio libera in causa ex art. 87).",
      "SU Raso 2005: i disturbi della personalità rientrano nell'infermità se incidono concretamente sulla capacità.",
    ],
    esempi: [
      { titolo: "Vizio totale e vizio parziale", testo: "Marco, affetto da una grave psicosi delirante, al momento dell'aggressione era del tutto privo della capacità di volere, incapace di frenare l'impulso violento: si applica l'art. 88, con proscioglimento e, se socialmente pericoloso, misura di sicurezza detentiva in REMS. Se invece la stessa infermità gli avesse <em>scemato grandemente</em> tale capacità, senza però escluderla del tutto, opererebbe l'art. 89: Marco resterebbe imputabile e verrebbe condannato, ma con la pena diminuita fino a un terzo, quale attenuante soggetta a bilanciamento." },
      { titolo: "Actio libera in causa", testo: "Luca, incapace di aggredire il rivale da sobrio, beve fino a ubriacarsi <em>proprio allo scopo</em> di trovare il coraggio di colpirlo, e poi in stato di alterazione lo ferisce. Pur avendo agito da ubriaco, non può invocare l'incapacità di intendere e volere: l'ubriachezza era preordinata al reato (art. 92 co. 2) e la pena è addirittura aggravata. Si applica lo schema dell'<em>actio libera in causa</em> (art. 87), perché la causa dell'incapacità è stata volontariamente predisposta e finalizzata alla commissione del delitto." },
    ],
    flashcards: [
      ["Cosa stabilisce l'art. 85 c.p.?", "Che nessuno è punibile se al momento del fatto non era imputabile, cioè privo della capacità di intendere e di volere."],
      ["Qual è la disciplina della minore età?", "<14 anni: non imputabile (presunzione assoluta, art. 97); 14-18: imputabile se in concreto capace/maturo (art. 98); >18: presunzione relativa di imputabilità."],
      ["Differenza tra vizio totale e vizio parziale di mente?", "Il vizio totale (art. 88) esclude la capacità → proscioglimento; il parziale (art. 89) la scema grandemente senza escluderla → imputabile, con pena diminuita."],
      ["Cosa ha stabilito la SU Raso (2005)?", "Che i disturbi della personalità rientrano nell'infermità (artt. 88-89) se di consistenza e gravità tali da incidere concretamente sulla capacità di intendere o di volere."],
      ["Che rilievo ha l'ubriachezza volontaria?", "Nessuno: non esclude né diminuisce l'imputabilità (art. 92 co. 1). Se preordinata, aggrava la pena (art. 92 co. 2), quale actio libera in causa."],
    ],
    comparativa: {
      titolo: "Vizio totale (art. 88) vs vizio parziale (art. 89)",
      a: "Vizio totale di mente (art. 88)", b: "Vizio parziale di mente (art. 89)",
      righe: [
        { profilo: "Incidenza sulla capacità", a: "La esclude totalmente", b: "La scema grandemente, senza escluderla" },
        { profilo: "Imputabilità", a: "Esclusa: non imputabile", b: "Permane: il soggetto è imputabile" },
        { profilo: "Conseguenza", a: "Proscioglimento + eventuale misura di sicurezza (REMS)", b: "Condanna con pena diminuita (fino a un terzo)" },
        { profilo: "Natura", a: "Causa di esclusione dell'imputabilità", b: "Circostanza attenuante soggetta a bilanciamento (art. 69)" },
      ],
    },
    quiz: [
      { q: "Ai sensi dell'art. 85 c.p., è imputabile chi ha:", opts: ["La sola capacità di intendere il fatto commesso", "La capacità di intendere e di volere al momento del fatto", "Compiuto ventuno anni ed esente da vizi di mente", "La capacità giuridica e la capacità di agire civili"], correct: 1, difficulty: 1, commonError: "Ritenere sufficiente la sola capacità di intendere o confondere con la capacità civilistica.", why: "L'art. 85 richiede la coesistenza della capacità di intendere (comprendere il valore sociale dell'atto) e di volere (dominare gli impulsi), valutata al momento del fatto e in relazione al singolo fatto concreto.", fonte: "Cap. 5 — §3" },
      { q: "Per il minore infraquattordicenne (art. 97 c.p.) opera:", opts: ["Una presunzione relativa di piena imputabilità", "Un accertamento in concreto, caso per caso, della maturità", "Una presunzione assoluta di non imputabilità", "La piena imputabilità con diminuzione di pena"], correct: 2, difficulty: 2, commonError: "Confondere il regime dell'infraquattordicenne (art. 97) con quello del minore 14-18 anni (art. 98), dove serve l'accertamento in concreto.", why: "Il minore di 14 anni gode di una presunzione assoluta di non imputabilità (art. 97). L'accertamento in concreto della maturità riguarda solo la fascia 14-18 anni (art. 98).", fonte: "Cap. 5 — §3.1" },
      { q: "Il vizio parziale di mente (art. 89 c.p.) comporta:", opts: ["Il proscioglimento dell'imputato per non imputabilità", "L'imputabilità permane, con diminuzione di pena", "L'esclusione totale della capacità di volere", "L'aumento di pena per la maggiore pericolosità"], correct: 1, difficulty: 2, commonError: "Assimilare il vizio parziale al vizio totale (art. 88), che invece esclude l'imputabilità.", why: "Nel vizio parziale (art. 89) l'infermità scema grandemente la capacità senza escluderla: il soggetto resta imputabile, ma beneficia di una diminuzione di pena (fino a un terzo). È un'attenuante soggetta a bilanciamento ex art. 69.", fonte: "Cap. 5 — §3.1" },
      { q: "Secondo la SU Raso (2005, n. 9163), i disturbi della personalità:", opts: ["Non rilevano mai, essendo semplici anomalie del carattere", "Rientrano sempre e comunque nella nozione di infermità", "Rientrano nell'infermità se incidono in concreto sulla capacità", "Escludono l'imputabilità solo se di natura transitoria"], correct: 2, difficulty: 3, commonError: "Ritenere che qualsiasi disturbo di personalità incida sull'imputabilità, o al contrario che sia sempre irrilevante.", why: "Le SU Raso hanno incluso nell'infermità i disturbi della personalità purché di consistenza, intensità e gravità tali da incidere concretamente sulla capacità. Restano esclusi disturbi transitori e anomalie caratteriali.", fonte: "Cap. 5 — §3.1 (SU 9163/2005)" },
      { q: "L'ubriachezza preordinata a commettere il reato (art. 92 co. 2 c.p.):", opts: ["Esclude del tutto l'imputabilità dell'agente", "Diminuisce la pena come lo stato di infermità", "Aggrava la pena, quale actio libera in causa", "È irrilevante come l'ubriachezza volontaria"], correct: 2, difficulty: 3, commonError: "Ritenere che lo stato di alterazione, comunque determinato, diminuisca la responsabilità.", why: "L'ubriachezza preordinata (art. 92 co. 2) aggrava la pena: è un'esemplificazione dell'actio libera in causa (art. 87), poiché la causa dell'incapacità era libera e diretta al reato o a prepararsi una scusa.", fonte: "Cap. 5 — §3.1 (art. 92)" },
    ],
    veroFalso: [
      { aff: "Gli stati emotivi e passionali escludono o diminuiscono l'imputabilità.", vero: false, traccia: "Falso. L'art. 90 c.p. esclude espressamente la rilevanza degli stati emotivi e passionali ai fini dell'imputabilità. Solo l'infermità (artt. 88-89), anche sotto forma di disturbo della personalità grave (SU Raso), può incidere sulla capacità." },
      { aff: "L'ubriachezza accidentale, se piena, esclude l'imputabilità.", vero: true, traccia: "Vero. L'ubriachezza derivante da caso fortuito o forza maggiore (art. 91) esclude l'imputabilità se il soggetto era del tutto incapace; se scemava grandemente la capacità, la pena è solo diminuita. Diverso è il regime dell'ubriachezza volontaria o colposa (art. 92 co. 1), irrilevante." },
    ],
    aperta: { q: "Il candidato illustri la nozione di imputabilità e le sue cause di esclusione o diminuzione.", traccia: "L'imputabilità (art. 85) è la capacità di intendere e di volere al momento del fatto, presupposto della colpevolezza e distinta dalla suitas. Le cause di esclusione/diminuzione sono di natura fisiologica (minore età: presunzione assoluta di non imputabilità sotto i 14 anni ex art. 97, accertamento in concreto per i 14-18enni ex art. 98), patologica (vizio totale ex art. 88, che esclude la capacità e conduce a proscioglimento con eventuale misura di sicurezza in REMS; vizio parziale ex art. 89, che la scema grandemente lasciando l'imputabilità con pena diminuita; sordomutismo ex art. 96) e tossica (artt. 91-95: accidentale esclude/diminuisce, volontaria e colposa irrilevanti, preordinata aggrava quale actio libera in causa ex art. 87, cronica intossicazione ex art. 95). La SU Raso (9163/2005) ha incluso nell'infermità i disturbi della personalità gravi. Gli stati emotivi e passionali sono irrilevanti (art. 90).", fonte: "Cap. 5 — §§3-3.1" },
    consigliate: ["mappa", "comparativa", "flashcards", "mcq", "aperta"],
    media: { mappa: true },
  },

  /* ===================== 2 · IL DOLO ==================== */
  {
    id: "dolo", part: "generale", chapter: 5, chapterTitle: "L'elemento soggettivo",
    title: "Il dolo", subtitle: "Rappresentazione e volontà, forme e gradazioni, accertamento indiziario",
    articoli: ["art. 43 c.p.", "art. 42 co. 2 c.p.", "art. 576 n. 2 c.p."], pages: [34, 36], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Il dolo è la forma più grave di colpevolezza e il criterio <strong>normale</strong> di imputazione soggettiva nei delitti (art. 42 co. 2): di regola si risponde a titolo di dolo, mentre la colpa opera solo nei casi espressamente previsti. Ai sensi dell'art. 43, il delitto è doloso quando l'evento dannoso o pericoloso è dall'agente <strong>preveduto e voluto</strong> come conseguenza della propria azione od omissione. Due sono gli elementi strutturali: la <em>rappresentazione</em> (momento conoscitivo, cioè la previsione del fatto tipico) e la <em>volontà</em> (momento volitivo, cioè la risoluzione a realizzarlo). Il dolo deve avere ad oggetto il fatto tipico in tutti i suoi elementi costitutivi e deve sussistere nel momento stesso in cui si agisce: un dolo meramente successivo alla condotta è penalmente irrilevante.",
      approfondimenti: [
        { label: "Le forme del dolo", body: "Secondo la natura dell'offesa: dolo di <strong>danno</strong> (volontà di ledere il bene) e di <strong>pericolo</strong> (volontà di metterlo in pericolo). Secondo lo scopo: dolo <strong>generico</strong> (rappresentazione dei soli elementi oggettivi del fatto) e <strong>specifico</strong> (la norma esige un fine ulteriore, non necessario alla consumazione, es. il fine di profitto nel furto). Secondo il momento: iniziale, concomitante, successivo (irrilevante)." },
        { label: "Le gradazioni volitive", body: "In base all'intensità della volontà si distinguono, in ordine decrescente: dolo <strong>intenzionale</strong> (di primo grado: l'agente agisce proprio allo scopo di realizzare l'evento); dolo <strong>diretto</strong> (di secondo grado: l'evento non è lo scopo, ma è previsto come conseguenza certa o altamente probabile e accettato); dolo <strong>eventuale</strong> (l'agente si rappresenta la concreta possibilità dell'evento e ne accetta il rischio, agendo «a costo di» cagionarlo)." },
        { label: "La premeditazione", body: "Sul versante rappresentativo si distinguono dolo d'impeto (risoluzione repentina), di proposito (apprezzabile margine temporale tra ideazione e attuazione) e di <strong>premeditazione</strong>: aggravante ex art. 576 n. 2, con un elemento ideologico (perdurare di una risoluzione ferma e irrevocabile) e uno cronologico (intervallo di tempo sufficiente a far riflettere l'agente e a far prevalere i motivi inibitori)." },
      ],
      giurisprudenza: [
        { label: "Accertamento indiziario del dolo", body: "Il dolo, fenomeno interiore, va ricostruito in via <strong>indiziaria</strong> attraverso circostanze esteriori sintomatiche dello stato psichico. Non sono ammesse presunzioni fondate su comportamenti ritenuti <em>ex se</em> dimostrativi dell'animus doloso: è bandito il c.d. <strong>dolus in re ipsa</strong>." },
      ],
      eccezioni: [
        { label: "Dolo generale e dolo colpito a mezza via", body: "Quando la morte è cagionata da una seconda condotta (es. si brucia la vittima creduta già morta), la tesi tradizionale del dolus generalis punisce per omicidio doloso consumato; quella oggi prevalente (dolo colpito a mezza via dall'errore) scompone la condotta: tentato omicidio per la prima azione e omicidio colposo per la seconda." },
      ],
    },
    sintesi: [
      "Art. 43: delitto doloso quando l'evento è preveduto e voluto. Elementi: rappresentazione (conoscitivo) + volontà (volitivo).",
      "Dolo criterio normale di imputazione (art. 42 co. 2); deve investire il fatto tipico in tutti gli elementi costitutivi.",
      "Forme: danno/pericolo; generico/specifico (fine ulteriore, es. profitto nel furto).",
      "Gradazioni volitive: intenzionale > diretto (evento certo/altamente probabile) > eventuale (accettazione del rischio).",
      "Accertamento indiziario: no dolus in re ipsa. Premeditazione (art. 576 n. 2): elemento ideologico + cronologico.",
    ],
    esempi: [
      { titolo: "Dolo generico e dolo specifico", testo: "Nell'omicidio (art. 575) è sufficiente il dolo <strong>generico</strong>: basta la volontà di uccidere, senza alcuno scopo ulteriore. Nel furto (art. 624), invece, occorre il dolo <strong>specifico</strong>: chi si impossessa della cosa altrui deve agire «al fine di trarne profitto». Così, se Anna sottrae il telefono di una collega solo per farle uno scherzo, restituendolo subito dopo, difetta quel fine di profitto: manca l'elemento soggettivo del furto, pur essendovi stata la materiale apprensione della cosa." },
      { titolo: "Le tre gradazioni", testo: "Marco spara alla vittima <em>proprio per ucciderla</em>: ha dolo intenzionale, perché la morte è lo scopo perseguito. Se invece fa esplodere una bomba per colpire un solo bersaglio, ma sa per certo che l'ordigno ucciderà anche la persona che gli sta accanto, rispetto a quest'ultima agisce con dolo diretto (evento collaterale previsto come certo). Se infine l'automobilista percorre la città a folle velocità, rappresentandosi il rischio concreto di travolgere un pedone e accettandolo pur di non fermarsi, versa in dolo eventuale." },
    ],
    flashcards: [
      ["Quali sono i due elementi strutturali del dolo?", "La rappresentazione (previsione del fatto tipico) e la volontà (risoluzione di realizzarlo), che devono sussistere nel momento della condotta."],
      ["Differenza tra dolo generico e specifico?", "Il generico si esaurisce nella rappresentazione degli elementi oggettivi del fatto; lo specifico esige un fine ulteriore (es. profitto nel furto), che non deve realizzarsi."],
      ["Quali sono le gradazioni volitive del dolo?", "Intenzionale (evento come scopo), diretto (evento certo/altamente probabile accettato), eventuale (accettazione del rischio dell'evento possibile)."],
      ["Cosa significa che è vietato il dolus in re ipsa?", "Che il dolo va provato in via indiziaria dalle circostanze del caso; non può presumersi da comportamenti ritenuti ex se sintomatici dell'animus doloso."],
      ["Quali elementi richiede la premeditazione (art. 576 n. 2)?", "Uno ideologico (risoluzione criminosa ferma e irrevocabile che perdura) e uno cronologico (intervallo di tempo sufficiente a far riflettere e prevalere i motivi inibitori)."],
    ],
    comparativa: {
      titolo: "Dolo intenzionale vs dolo diretto vs dolo eventuale",
      a: "Dolo intenzionale / diretto", b: "Dolo eventuale",
      righe: [
        { profilo: "Rapporto con l'evento", a: "Intenzionale: evento come scopo; diretto: evento certo/altamente probabile accettato", b: "Evento previsto come concretamente possibile" },
        { profilo: "Atteggiamento", a: "Vuole l'evento (fine o conseguenza necessaria)", b: "Accetta il rischio, agisce 'a costo di' cagionarlo" },
        { profilo: "Criterio distintivo", a: "Certezza o alta probabilità della verificazione", b: "Mera serie possibilità/concreta probabilità" },
      ],
    },
    quiz: [
      { q: "Secondo l'art. 43 c.p., il delitto è doloso quando l'evento è:", opts: ["Soltanto preveduto, ma non anche voluto", "Preveduto e voluto come conseguenza della condotta", "Non voluto, benché in concreto prevedibile", "Cagionato per negligenza, imprudenza o imperizia"], correct: 1, difficulty: 1, commonError: "Ritenere sufficiente la sola previsione (che caratterizza anche la colpa cosciente) senza la volontà.", why: "L'art. 43 richiede sia la rappresentazione (previsione) sia la volontà dell'evento. La sola previsione, senza volontà, integra semmai la colpa (anche cosciente).", fonte: "Cap. 5 — §4" },
      { q: "Il dolo specifico ricorre quando:", opts: ["L'agente vuole i soli elementi oggettivi del fatto tipico", "La norma esige un fine ulteriore rispetto al fatto tipico", "L'evento è previsto dall'agente ma non è da lui voluto", "L'agente agisce con premeditazione e freddo calcolo"], correct: 1, difficulty: 2, commonError: "Confondere il dolo specifico (fine ulteriore) con la premeditazione o con il dolo generico.", why: "Nel dolo specifico la norma incriminatrice richiede che la condotta sia tenuta per un fine particolare (es. il profitto nel furto), che non deve necessariamente realizzarsi, essendo estraneo alla struttura oggettiva del reato.", fonte: "Cap. 5 — §4.1" },
      { q: "Il dolo diretto (di secondo grado) ricorre quando l'evento è:", opts: ["Lo scopo direttamente perseguito dall'agente", "Previsto come conseguenza certa o altamente probabile", "Soltanto possibile e di cui si accetta il rischio", "Non previsto né voluto in alcun modo dall'agente"], correct: 1, difficulty: 3, commonError: "Confonderlo con il dolo intenzionale (evento come scopo) o con il dolo eventuale (evento solo possibile).", why: "Nel dolo diretto l'evento non è lo scopo, ma è previsto come conseguenza certa o altamente probabile della condotta e per ciò accettato come avvenimento collaterale. Diverge dall'eventuale, dove manca la certezza e si accetta un mero rischio.", fonte: "Cap. 5 — §4.2" },
      { q: "Il divieto di dolus in re ipsa comporta che il dolo:", opts: ["Si presume dalla sola materialità del fatto commesso", "Va provato in via indiziaria dalle circostanze del caso", "Non deve essere accertato nei delitti contro la persona", "Coincide con la mera prevedibilità in astratto dell'evento"], correct: 1, difficulty: 3, commonError: "Ritenere il dolo desumibile automaticamente da comportamenti 'sintomatici' senza prova indiziaria.", why: "Essendo un fenomeno interiore, il dolo va ricostruito in via indiziaria da circostanze esteriori. Sono vietate le presunzioni fondate su comportamenti ritenuti ex se dimostrativi dell'animus (dolus in re ipsa).", fonte: "Cap. 5 — §4.3" },
      { q: "La premeditazione (art. 576 n. 2 c.p.) richiede:", opts: ["La sola risoluzione repentina e istantanea di uccidere", "Un elemento ideologico e uno cronologico", "L'accettazione del rischio della morte altrui", "Un fine ulteriore di profitto o di vantaggio"], correct: 1, difficulty: 3, commonError: "Ridurre la premeditazione al solo trascorrere del tempo, senza la persistenza della risoluzione criminosa.", why: "La premeditazione richiede un elemento ideologico (perdurare di una risoluzione ferma e irrevocabile) e uno cronologico (intervallo di tempo apprezzabile, sufficiente a far riflettere l'agente e a far prevalere i motivi inibitori).", fonte: "Cap. 5 — §4.2" },
    ],
    veroFalso: [
      { aff: "Nel dolo generico l'agente deve rappresentarsi uno scopo ulteriore rispetto alla struttura del reato.", vero: false, traccia: "Falso. Nel dolo generico l'agente si rappresenta e vuole i soli elementi oggettivi del fatto, senza uno scopo ultroneo. È il dolo specifico a richiedere un fine particolare (es. il profitto nel furto), che tuttavia non deve realizzarsi." },
      { aff: "Il dolo, essendo interiore, può essere provato solo in via indiziaria, senza ricorso al dolus in re ipsa.", vero: true, traccia: "Vero. Il dolo va ricostruito attraverso circostanze esteriori sintomatiche dello stato psichico. È inammissibile la presunzione fondata su comportamenti ritenuti ex se dimostrativi dell'animus doloso (dolus in re ipsa)." },
    ],
    aperta: { q: "Il candidato illustri la nozione, le forme e le gradazioni del dolo, con cenni al suo accertamento.", traccia: "Il dolo (art. 43) è criterio normale di imputazione soggettiva (art. 42 co. 2) e forma più grave di colpevolezza: l'evento è preveduto e voluto come conseguenza della condotta. Consta di rappresentazione (momento conoscitivo) e volontà (momento volitivo), e deve investire il fatto tipico in tutti i suoi elementi. Forme: dolo di danno/pericolo (natura dell'offesa) e generico/specifico (lo specifico esige un fine ulteriore, es. il profitto nel furto). Gradazioni volitive decrescenti: intenzionale (evento come scopo), diretto (evento certo o altamente probabile, accettato), eventuale (accettazione del rischio dell'evento possibile). Sul piano rappresentativo rileva la premeditazione (art. 576 n. 2), con elemento ideologico e cronologico. L'accertamento è indiziario, dovendosi escludere il dolus in re ipsa.", fonte: "Cap. 5 — §§4-4.3" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "flashcards"],
    media: { mappa: true },
  },

  /* ===================== 3 · LA COLPA ==================== */
  {
    id: "colpa", part: "generale", chapter: 5, chapterTitle: "L'elemento soggettivo",
    title: "La colpa", subtitle: "Regole cautelari, prevedibilità ed evitabilità, specie di colpa e colpa medica",
    articoli: ["art. 43 co. 3 c.p.", "art. 42 co. 2 c.p.", "art. 61 n. 3 c.p.", "art. 590-sexies c.p."], pages: [36, 39], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Ai sensi dell'art. 43 co. 3, il delitto è colposo quando l'evento, anche se preveduto, <strong>non è voluto</strong> dall'agente e si verifica a causa di <em>negligenza, imprudenza o imperizia</em> (colpa generica), ovvero per inosservanza di <em>leggi, regolamenti, ordini o discipline</em> (colpa specifica). Nei delitti la colpa non è la regola, ma opera solo nei casi di espressa previsione di legge: è la c.d. <strong>doppia tassatività</strong> (art. 42 co. 2), diversamente da quanto accade per le contravvenzioni. Superata la concezione puramente psicologica, la teoria mista individua tre tratti essenziali: l'involontarietà del fatto; l'inosservanza di una regola cautelare, intesa in senso oggettivo e identificata secondo i criteri della prevedibilità ed evitabilità dell'evento; e l'attribuibilità soggettiva, ossia l'esigibilità in concreto del comportamento corretto da parte di quell'agente.",
      approfondimenti: [
        { label: "La misura oggettiva e soggettiva", body: "La regola cautelare va identificata secondo i criteri della <strong>prevedibilità</strong> e dell'<strong>evitabilità</strong> dell'evento, secondo la miglior scienza ed esperienza del settore. L'attribuibilità va misurata sul parametro dell'<em>homo eiusdem professionis et condicionis</em> (uomo giudizioso di pari qualità e condizione). Occorre inoltre il nesso tra colpa ed evento: verifica ex ante che l'evento sia la concretizzazione del rischio che la regola mirava a prevenire, ed ex post che il comportamento alternativo lecito lo avrebbe evitato." },
        { label: "Specie di colpa", body: "<strong>Generica</strong> (violazione di regole non scritte: negligenza, imprudenza, imperizia) e <strong>specifica</strong> (violazione di regole scritte in leggi, regolamenti, ordini, discipline). <strong>Cosciente</strong> o con previsione (aggravante ex art. 61 n. 3: l'evento è previsto ma l'agente confida di evitarlo) e <strong>incosciente</strong>. <strong>Propria</strong> (manca la volontà dell'evento) e <strong>impropria</strong> (l'evento è voluto ma si risponde a titolo di colpa: eccesso colposo, supposizione erronea di scriminante, errore di fatto colposo)." },
        { label: "La colpa medica e l'art. 590-sexies", body: "La legge Gelli-Bianco (l. 24/2017) ha abrogato il decreto Balduzzi e introdotto l'art. 590-sexies: causa di non punibilità per morte o lesioni <strong>da imperizia</strong>, se l'evento si verifica nel rispetto delle raccomandazioni delle linee guida (o buone pratiche) adeguate al caso concreto. Il tema oscilla tra criteri civilistici (art. 2236 c.c., colpa grave) e criteri penalistici propri, ormai prevalenti." },
      ],
      giurisprudenza: [
        { label: "SU Mariotti (2018, n. 8770)", body: "Il sanitario risponde a titolo di colpa per morte o lesioni: a) per colpa anche lieve da <strong>negligenza o imprudenza</strong>; b) per colpa anche lieve da <strong>imperizia</strong> quando il caso non è regolato da linee guida/buone pratiche o quando le linee guida scelte non erano adeguate al caso; c) per colpa <strong>solo grave</strong> da imperizia nell'<em>esecuzione</em>, quando abbia rispettato linee guida adeguate al caso concreto. La causa di non punibilità dell'art. 590-sexies co. 2, meno favorevole del Balduzzi, si applica solo ai fatti successivi." },
      ],
      eccezioni: [
        { label: "Colpa in attività illecita", body: "Ci si è chiesti se la colpa possa conciliarsi con chi versa in re illicita. Cass. SU 22676/2009 (in tema di art. 586) ha ammesso la configurabilità di una colpa anche nell'ambito di un'attività di per sé illecita." },
      ],
    },
    sintesi: [
      "Art. 43 co. 3: evento non voluto, cagionato per negligenza/imprudenza/imperizia o inosservanza di leggi, regolamenti, ordini, discipline.",
      "Doppia tassatività (art. 42 co. 2): nei delitti la colpa opera solo se espressamente prevista dalla legge.",
      "Teoria mista: involontarietà + violazione di regola cautelare (prevedibilità/evitabilità) + attribuibilità ed esigibilità (homo eiusdem condicionis).",
      "Specie: generica/specifica; cosciente (art. 61 n. 3, previsione + fiducia di evitare) / incosciente; propria/impropria.",
      "Colpa medica: art. 590-sexies (Gelli-Bianco) + SU Mariotti 2018: non punibilità per imperizia lieve nel rispetto di linee guida adeguate.",
    ],
    esempi: [
      { titolo: "Colpa generica e colpa specifica", testo: "L'automobilista che, pur restando nei limiti di velocità, non rallenta davanti a una scuola proprio all'uscita degli alunni viola una regola cautelare <strong>non scritta</strong> di comune prudenza: è colpa generica. Chi invece attraversa l'incrocio col semaforo rosso e investe un pedone viola una regola cautelare <strong>scritta</strong> del codice della strada: è colpa specifica. In entrambi i casi, però, si risponde soltanto se si realizza proprio l'evento che quella regola cautelare mirava a prevenire." },
      { titolo: "Il comportamento alternativo lecito", testo: "Il chirurgo omette un doveroso accertamento pre-operatorio e la paziente muore durante l'intervento. Per affermare la colpa non basta la violazione della regola: occorre chiedersi, con giudizio controfattuale, se l'accertamento omesso — il comportamento alternativo lecito — avrebbe <em>evitato</em> l'evento o ne avrebbe ridotto in misura significativa il rischio. Se si accerta che la dott.ssa Bianchi sarebbe morta comunque, anche eseguendo l'esame, il nesso tra la colpa e l'evento viene meno e il chirurgo non risponde della morte." },
    ],
    flashcards: [
      ["Come definisce la colpa l'art. 43 co. 3 c.p.?", "Evento non voluto (anche se preveduto), cagionato per negligenza, imprudenza o imperizia, ovvero per inosservanza di leggi, regolamenti, ordini o discipline."],
      ["Cos'è la doppia tassatività della colpa?", "Il principio (art. 42 co. 2) per cui nei delitti si risponde a titolo di colpa solo nei casi espressamente previsti dalla legge."],
      ["Differenza tra colpa generica e specifica?", "La generica viola regole cautelari non scritte (negligenza, imprudenza, imperizia); la specifica viola regole scritte in leggi, regolamenti, ordini o discipline."],
      ["Cos'è la colpa impropria?", "L'ipotesi in cui l'evento è voluto ma si risponde a titolo di colpa: eccesso colposo, supposizione erronea di scriminante, errore di fatto determinato da colpa."],
      ["Cosa ha stabilito la SU Mariotti (2018) sull'art. 590-sexies?", "Non punibilità per imperizia (anche lieve) solo se l'evento avviene nel rispetto di linee guida adeguate al caso concreto; colpa grave se erra nell'esecuzione pur rispettandole; sempre punibile per negligenza/imprudenza."],
    ],
    comparativa: {
      titolo: "Colpa generica vs colpa specifica",
      a: "Colpa generica", b: "Colpa specifica",
      righe: [
        { profilo: "Fonte della regola cautelare", a: "Regola non scritta (sociale, di esperienza)", b: "Regola scritta: legge, regolamento, ordine, disciplina" },
        { profilo: "Parametri di individuazione", a: "Negligenza, imprudenza, imperizia", b: "Precetto cautelare positivizzato" },
        { profilo: "Ambito di responsabilità", a: "Va accertata la violazione del modello di diligenza", b: "Rileva solo se realizzato l'evento che la norma mirava a evitare" },
      ],
    },
    quiz: [
      { q: "Ai sensi dell'art. 43 co. 3 c.p., nel delitto colposo l'evento:", opts: ["È preveduto e voluto come conseguenza dell'azione", "Non è voluto e deriva da negligenza o inosservanza di norme", "È del tutto imprevedibile e inevitabile per l'agente", "È previsto come possibile e accettato quale rischio"], correct: 1, difficulty: 1, commonError: "Confondere la colpa cosciente (evento previsto ma non voluto) con il dolo eventuale (evento accettato).", why: "Nella colpa l'evento non è voluto (anche se eventualmente preveduto) e si verifica per colpa generica (negligenza, imprudenza, imperizia) o specifica (inosservanza di leggi, regolamenti, ordini, discipline).", fonte: "Cap. 5 — §5" },
      { q: "La c.d. doppia tassatività della colpa (art. 42 co. 2 c.p.) significa che:", opts: ["La colpa richiede sempre la prevedibilità dell'evento", "Nei delitti la colpa opera solo se prevista dalla legge", "La colpa nei delitti è punita esattamente come il dolo", "La colpa esige la violazione di due regole cautelari"], correct: 1, difficulty: 3, commonError: "Confondere la tassatività della colpa con i criteri di individuazione della regola cautelare.", why: "L'art. 42 co. 2 stabilisce che nei delitti si risponde a titolo di colpa solo nei casi espressamente previsti dalla legge (a differenza delle contravvenzioni, punibili indifferentemente a titolo di dolo o colpa).", fonte: "Cap. 5 — §5" },
      { q: "La colpa impropria ricorre quando:", opts: ["Manca del tutto la volontà dell'evento lesivo", "L'evento è voluto, ma si risponde a titolo di colpa", "Si viola una regola cautelare scritta e positivizzata", "L'agente prevede l'evento ma confida di evitarlo"], correct: 1, difficulty: 3, commonError: "Assimilare la colpa impropria alla colpa cosciente (dove pure vi è previsione ma non volontà dell'evento).", why: "Nella colpa impropria l'evento è voluto, ma il rimprovero è di averlo negligentemente causato: casi di eccesso colposo, supposizione erronea di una scriminante, errore di fatto determinato da colpa.", fonte: "Cap. 5 — §5.1" },
      { q: "La colpa cosciente (con previsione, art. 61 n. 3 c.p.):", opts: ["Esclude la colpa e ogni rimprovero all'agente", "È una circostanza aggravante del delitto colposo", "Trasforma il fatto colposo in delitto doloso", "Coincide sempre con la nozione di colpa specifica"], correct: 1, difficulty: 2, commonError: "Ritenere che la previsione dell'evento trasformi la colpa in dolo eventuale.", why: "Nella colpa cosciente l'agente prevede come possibile l'evento ma confida di evitarlo: la previsione integra la circostanza aggravante dell'art. 61 n. 3, senza mutare il titolo colposo.", fonte: "Cap. 5 — §5.1" },
      { q: "Secondo la SU Mariotti (2018), la non punibilità dell'art. 590-sexies co. 2 opera:", opts: ["Per qualsiasi colpa lieve commessa dal sanitario", "Per imperizia, nel rispetto di linee guida adeguate", "Anche per la negligenza e l'imprudenza del medico", "Soltanto per la colpa grave da imperizia esecutiva"], correct: 1, difficulty: 4, commonError: "Estendere la non punibilità alla negligenza/imprudenza, o ritenere sempre scusata la colpa lieve.", why: "Le SU Mariotti hanno chiarito che la non punibilità riguarda solo l'imperizia (anche lieve) quando l'evento si verifica nel rispetto di linee guida/buone pratiche adeguate al caso concreto; per negligenza o imprudenza si risponde sempre, anche per colpa lieve.", fonte: "Cap. 5 — §5.2 (SU 8770/2018)" },
    ],
    veroFalso: [
      { aff: "Nelle contravvenzioni, a differenza dei delitti, non vale la doppia tassatività: si risponde indifferentemente a titolo di dolo o colpa.", vero: true, traccia: "Vero. La riserva di tassatività (art. 42 co. 2) riguarda i delitti, punibili a titolo di colpa solo se espressamente previsto. Le contravvenzioni (art. 42 co. 4) sono punibili indifferentemente per dolo o colpa." },
      { aff: "La colpa medica da imperizia lieve è sempre non punibile, quali che siano le linee guida seguite.", vero: false, traccia: "Falso. Secondo la SU Mariotti, la non punibilità (art. 590-sexies) opera solo se l'imperizia si colloca nel rispetto di linee guida adeguate al caso concreto. Se le linee guida non erano pertinenti, o l'errore attiene alla loro individuazione, si risponde anche per colpa lieve." },
    ],
    aperta: { q: "Il candidato illustri la struttura della colpa e le sue specie, con cenni alla colpa medica.", traccia: "La colpa (art. 43 co. 3) è criterio di imputazione che nei delitti opera solo se espressamente previsto (doppia tassatività, art. 42 co. 2): l'evento non voluto è cagionato per negligenza, imprudenza, imperizia o inosservanza di regole scritte. La teoria mista individua involontarietà del fatto, inosservanza di una regola cautelare (identificata secondo prevedibilità ed evitabilità, misura oggettiva) e attribuibilità ed esigibilità del comportamento corretto (parametro dell'homo eiusdem condicionis, misura soggettiva). Occorre il nesso tra colpa ed evento, con verifica della concretizzazione del rischio e del comportamento alternativo lecito. Specie: generica/specifica, cosciente (art. 61 n. 3)/incosciente, propria/impropria. Per la colpa medica, l'art. 590-sexies (Gelli-Bianco), come letto dalle SU Mariotti (8770/2018), esclude la punibilità per imperizia nel rispetto di linee guida adeguate, ferma la responsabilità per negligenza o imprudenza.", fonte: "Cap. 5 — §§5-5.2" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: { mappa: true },
  },

  /* ===================== 4 · LA PRETERINTENZIONE ==================== */
  {
    id: "preterintenzione", part: "generale", chapter: 5, chapterTitle: "L'elemento soggettivo",
    title: "La preterintenzione", subtitle: "Evento più grave del voluto: omicidio e aborto preterintenzionali",
    articoli: ["art. 43 c.p.", "art. 584 c.p.", "art. 593-ter c.p.", "art. 586 c.p."], pages: [40, 41], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "L'art. 43 dispone che il delitto è <strong>preterintenzionale</strong>, o «oltre l'intenzione», quando dall'azione od omissione deriva un evento dannoso o pericoloso <strong>più grave</strong> di quello voluto dall'agente. Si tratta di un criterio di imputazione soggettiva collocato in posizione intermedia tra il dolo e la colpa: l'agente vuole un certo risultato lesivo, ma ne cagiona uno più grave che non era nelle sue intenzioni. Proprio per questa struttura peculiare, la legge non ammette una preterintenzione generalizzata, ma tipizza esplicitamente due sole ipotesi: l'<strong>omicidio preterintenzionale</strong> (art. 584) e l'<strong>aborto preterintenzionale</strong> (art. 593-ter). Al di fuori di questi casi non è configurabile alcun delitto preterintenzionale.",
      approfondimenti: [
        { label: "La struttura", body: "Tre elementi: la <strong>volontà di un evento meno grave</strong> (si ritiene indispensabile almeno un tentativo del reato-base, es. percosse o lesioni); la <strong>realizzazione di un evento più grave</strong> (la morte); il <strong>nesso causale</strong> tra la condotta e l'evento più grave realizzatosi." },
        { label: "La natura giuridica", body: "Tesi ricostruttive: <em>dolo misto a responsabilità oggettiva</em> (per la giurisprudenza tradizionale sull'art. 584, basta il nesso causale tra percosse/lesioni e morte, senza prevedibilità); <em>dolo misto a colpa presunta</em>; e la tesi oggi preferibile del <strong>dolo misto a colpa</strong>, che imputa l'evento ulteriore solo in presenza degli estremi della colpa, in ossequio al principio di colpevolezza (art. 27 Cost.)." },
      ],
      giurisprudenza: [
        { label: "SU 22676/2009 (art. 586)", body: "In tema di morte o lesioni quale conseguenza di altro delitto (art. 586), le Sezioni Unite hanno ammesso la configurabilità di una <strong>colpa in attività illecita</strong>: l'evento ulteriore non voluto va addebitato solo se in concreto prevedibile ed evitabile, superando le impostazioni fondate sulla pura responsabilità oggettiva." },
      ],
      eccezioni: [
        { label: "Preterintenzione e reati aggravati dall'evento", body: "La preterintenzione va distinta dai reati aggravati dall'evento: in questi ultimi la legge prevede un aggravamento di pena al verificarsi di un evento ulteriore rispetto a un reato-base già perfetto, mentre nella preterintenzione l'evento più grave dà luogo a un titolo autonomo di reato." },
      ],
    },
    sintesi: [
      "Art. 43: preterintenzione quando deriva un evento più grave di quello voluto. Terzo criterio, tra dolo e colpa.",
      "Sole ipotesi tipizzate: omicidio preterintenzionale (art. 584) e aborto preterintenzionale (art. 593-ter).",
      "Struttura: volontà dell'evento meno grave (almeno un tentativo del reato-base) + evento più grave + nesso causale.",
      "Natura: dolo misto a responsabilità oggettiva (giur. tradizionale) vs dolo misto a colpa (tesi preferibile, ex art. 27 Cost.).",
      "SU 22676/2009 (art. 586): ammessa la colpa in attività illecita, con prevedibilità dell'evento ulteriore.",
    ],
    esempi: [
      { titolo: "L'omicidio preterintenzionale (art. 584)", testo: "Nel corso di una lite, Luca sferra un pugno alla vittima con il solo intento di percuoterla o di ferirla; questa, per il colpo, cade rovinosamente, batte la testa sul marciapiede e muore. Luca <em>voleva</em> le percosse o le lesioni, non certo la morte, che tuttavia è derivata dalla sua condotta violenta: risponde di omicidio preterintenzionale (art. 584). Se invece si accertasse che aveva accettato, anche solo a titolo di dolo eventuale, il rischio di ucciderlo, risponderebbe di omicidio doloso." },
    ],
    flashcards: [
      ["Come definisce la preterintenzione l'art. 43 c.p.?", "Delitto in cui dall'azione od omissione deriva un evento dannoso o pericoloso più grave di quello voluto dall'agente."],
      ["Quali sono le ipotesi tipizzate di preterintenzione?", "Solo due: l'omicidio preterintenzionale (art. 584) e l'aborto preterintenzionale (art. 593-ter)."],
      ["Quali elementi compongono la struttura della preterintenzione?", "Volontà dell'evento meno grave (almeno un tentativo del reato-base), realizzazione di un evento più grave, nesso causale tra condotta ed evento maggiore."],
      ["Qual è la natura giuridica preferibile della preterintenzione?", "Dolo misto a colpa: l'evento più grave va addebitato solo se ricorrono gli estremi della colpa, in ossequio al principio di colpevolezza (art. 27 Cost.)."],
    ],
    comparativa: null,
    quiz: [
      { q: "La preterintenzione (art. 43 c.p.) ricorre quando:", opts: ["L'evento voluto dall'agente non si realizza affatto", "Deriva un evento più grave di quello voluto", "L'evento voluto era in concreto imprevedibile", "L'agente accetta e vuole il rischio dell'evento"], correct: 1, difficulty: 2, commonError: "Confondere la preterintenzione con l'aberratio o con il dolo eventuale.", why: "L'art. 43 definisce preterintenzionale il delitto quando dall'azione od omissione deriva un evento dannoso o pericoloso più grave di quello voluto: è un criterio intermedio tra dolo e colpa.", fonte: "Cap. 5 — §7" },
      { q: "Le ipotesi di delitto preterintenzionale tipizzate dalla legge sono:", opts: ["L'omicidio e le lesioni personali preterintenzionali", "L'omicidio (art. 584) e l'aborto (art. 593-ter)", "Il solo omicidio preterintenzionale (art. 584)", "Tutti i reati dolosi contro la vita e l'incolumità"], correct: 1, difficulty: 3, commonError: "Ritenere che esistano numerose ipotesi preterintenzionali, o confonderle con l'art. 586 (morte come conseguenza di altro delitto).", why: "La legge definisce esplicitamente come preterintenzionali solo l'omicidio (art. 584) e l'aborto (art. 593-ter). L'art. 586 (morte/lesioni conseguenza di altro delitto) è figura distinta.", fonte: "Cap. 5 — §7" },
      { q: "Secondo la tesi preferibile, la natura della preterintenzione è:", opts: ["Dolo puro sull'intero evento realizzato", "Colpa pura sull'evento più grave", "Dolo misto a colpa", "Responsabilità oggettiva pura"], correct: 2, difficulty: 3, commonError: "Aderire acriticamente alla tesi giurisprudenziale del dolo misto a responsabilità oggettiva.", why: "La tesi preferibile è quella del dolo misto a colpa: l'evento più grave va imputato solo ove ricorrano gli estremi della colpa (prevedibilità/evitabilità), per rispettare il principio di colpevolezza ex art. 27 Cost.", fonte: "Cap. 5 — §7" },
      { q: "Per la sussistenza dell'omicidio preterintenzionale (art. 584) si ritiene necessaria:", opts: ["La volontà, almeno a titolo eventuale, della morte", "La volontà di percosse o lesioni (almeno tentate)", "La sola prevedibilità della morte come conseguenza", "L'assenza di un nesso causale con l'evento morte"], correct: 1, difficulty: 3, commonError: "Richiedere la volontà, anche solo eventuale, della morte: in tal caso si avrebbe omicidio doloso.", why: "La struttura richiede la volontà di un evento meno grave (percosse o lesioni, con almeno un tentativo del reato-base), la realizzazione dell'evento più grave (morte) e il nesso causale. Se la morte fosse voluta anche eventualmente, si avrebbe omicidio doloso.", fonte: "Cap. 5 — §7" },
    ],
    veroFalso: [
      { aff: "Nell'omicidio preterintenzionale l'agente deve aver voluto, almeno a titolo di dolo eventuale, la morte della vittima.", vero: false, traccia: "Falso. La preterintenzione presuppone la volontà del solo evento meno grave (percosse o lesioni). Se la morte fosse voluta, anche solo eventualmente, si configurerebbe l'omicidio doloso, non quello preterintenzionale." },
      { aff: "La legge tipizza come preterintenzionali solo l'omicidio e l'aborto.", vero: true, traccia: "Vero. Le uniche ipotesi definite esplicitamente come preterintenzionali sono l'omicidio preterintenzionale (art. 584) e l'aborto preterintenzionale (art. 593-ter)." },
    ],
    aperta: { q: "Il candidato illustri la nozione, la struttura e la natura giuridica della preterintenzione.", traccia: "La preterintenzione (art. 43) ricorre quando dalla condotta deriva un evento più grave di quello voluto: criterio di imputazione intermedio tra dolo e colpa, tipizzato solo nell'omicidio (art. 584) e nell'aborto (art. 593-ter) preterintenzionali. Struttura: volontà dell'evento meno grave (almeno un tentativo del reato-base, es. percosse o lesioni), realizzazione dell'evento più grave, nesso causale. Sulla natura si contendono il campo la tesi del dolo misto a responsabilità oggettiva (giurisprudenza tradizionale, sufficiente il nesso causale), quella del dolo misto a colpa presunta e quella preferibile del dolo misto a colpa, che imputa l'evento ulteriore solo se prevedibile ed evitabile, coerentemente col principio di colpevolezza (art. 27 Cost.). In tema di art. 586 le SU (22676/2009) hanno ammesso la colpa in attività illecita.", fonte: "Cap. 5 — §7" },
    consigliate: ["mappa", "esempi", "flashcards", "mcq"],
    media: { mappa: true },
  },

  /* ===================== 5 · RESPONSABILITÀ OGGETTIVA ==================== */
  {
    id: "responsabilitaOggettiva", part: "generale", chapter: 5, chapterTitle: "L'elemento soggettivo",
    title: "La responsabilità oggettiva e i reati aggravati dall'evento", subtitle: "Art. 42 co. 3, tensione con l'art. 27 Cost., reati aggravati dall'evento",
    articoli: ["art. 42 co. 3 c.p.", "art. 27 Cost.", "art. 593 co. 3 c.p."], pages: [39, 41], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "L'art. 42 co. 3 dispone che «la legge determina i casi nei quali l'evento è posto <em>altrimenti</em> a carico dell'agente come conseguenza della sua azione ed omissione»: è la <strong>responsabilità oggettiva</strong>, tradizionale terzo criterio di imputazione soggettiva, espressione del brocardo <em>qui in re illicita versatur tenetur etiam pro casu</em> (chi versa in una situazione illecita risponde anche del caso fortuito). In questi casi l'evento è imputato in base al solo <strong>rapporto di causalità</strong>, senza alcun rimprovero per dolo o per colpa. Proprio perché prescinde dalla colpevolezza, la figura è oggi in forte tensione con il principio <em>nulla poena sine culpa</em> (art. 27 Cost.) e va ricondotta, in via interpretativa, entro i limiti segnati dalla Corte costituzionale.",
      approfondimenti: [
        { label: "Le distinzioni", body: "Si distingue tra responsabilità oggettiva <strong>pura</strong> (l'evento non voluto si verifica <em>in luogo</em> di quello voluto) e <strong>mista</strong> (l'offesa non voluta si <em>aggiunge</em> all'illecito doloso realizzato). Marinucci-Dolcini-Gatta distinguono a seconda che la responsabilità oggettiva riguardi l'evento (delitti aggravati dall'evento e preterintenzionali), elementi del fatto diversi dall'evento (artt. 117 e aberratio ictus) o l'intero fatto (art. 116)." },
        { label: "I reati aggravati dall'evento", body: "Sono reati di <strong>mera condotta</strong> per i quali la legge prevede un aggravamento di pena al verificarsi di un evento come conseguenza della condotta (es. omissione di soccorso aggravata, art. 593 co. 3). Tre tipologie: eventi che devono essere non voluti (pena diversa fattispecie), eventi indifferenti (calunnia aggravata dalla condanna) ed eventi necessariamente voluti (scopo del dolo specifico del reato base)." },
      ],
      giurisprudenza: [
        { label: "Corte cost. 364/1988 e 1085/1988", body: "La responsabilità oggettiva contrasta con il principio <em>nulla poena sine culpa</em> (art. 27 Cost.) quando riferita agli elementi più significativi della fattispecie. Dopo la sentenza n. 364/1988 (e la n. 1085/1988 sul furto d'uso) si è imposta una <strong>reinterpretazione adeguatrice</strong> delle fattispecie di responsabilità oggettiva, per ricondurle al principio di colpevolezza, richiedendo almeno la colpa sugli elementi significativi." },
      ],
      eccezioni: [
        { label: "Natura dell'evento aggravatore", body: "Quanto ai reati aggravati dall'evento, l'orientamento dominante qualifica l'evento aggravatore come <strong>circostanza</strong>, con applicazione della relativa disciplina (compreso il bilanciamento ex art. 69); un'opinione minoritaria vi ravvisa invece ipotesi di delitto preterintenzionale." },
      ],
    },
    sintesi: [
      "Art. 42 co. 3: responsabilità oggettiva, evento imputato in base al solo nesso causale (qui in re illicita versatur...).",
      "Distinzioni: pura (evento non voluto in luogo del voluto) / mista (offesa non voluta aggiunta all'illecito doloso).",
      "Tensione con l'art. 27 Cost. (nulla poena sine culpa): Corte cost. 364/1988 impone la reinterpretazione adeguatrice.",
      "Reati aggravati dall'evento: reati di mera condotta con aggravamento di pena al verificarsi di un evento (es. art. 593 co. 3).",
      "Natura dell'evento aggravatore: per la tesi dominante è circostanza (bilanciamento ex art. 69).",
    ],
    esempi: [
      { titolo: "Reato aggravato dall'evento", testo: "L'omissione di soccorso (art. 593) è un reato di mera condotta: si consuma con il solo mancato aiuto a chi versa in pericolo. Se però l'automobilista, dopo aver investito un pedone, si allontana senza prestare soccorso e da quella omissione <em>deriva</em> una lesione o la morte del ferito, la pena è aumentata (art. 593 co. 3). L'evento ulteriore non muta il titolo del reato base, che resta l'omissione di soccorso, ma ne aggrava il trattamento sanzionatorio, operando come circostanza secondo la tesi dominante." },
    ],
    flashcards: [
      ["Cosa prevede l'art. 42 co. 3 c.p.?", "I casi in cui l'evento è posto a carico dell'agente altrimenti che per dolo o colpa, in base al solo rapporto di causalità: la responsabilità oggettiva."],
      ["Qual è il brocardo che esprime la responsabilità oggettiva?", "Qui in re illicita versatur tenetur etiam pro casu: chi versa in una situazione illecita risponde anche del caso fortuito."],
      ["Perché la responsabilità oggettiva è in tensione con l'art. 27 Cost.?", "Perché imputa l'evento senza rimprovero soggettivo, in contrasto con il principio nulla poena sine culpa. Corte cost. 364/1988 impone la reinterpretazione adeguatrice."],
      ["Cosa sono i reati aggravati dall'evento?", "Reati di mera condotta per i quali la legge prevede un aggravamento di pena al verificarsi di un evento come conseguenza della condotta (es. art. 593 co. 3)."],
    ],
    comparativa: null,
    quiz: [
      { q: "La responsabilità oggettiva (art. 42 co. 3 c.p.) imputa l'evento all'agente:", opts: ["In base al dolo, quale evento voluto", "In base alla colpa e alla violazione cautelare", "In base al solo rapporto di causalità", "In base alla mera prevedibilità dell'evento"], correct: 2, difficulty: 2, commonError: "Ritenere che occorra almeno la colpa: nella responsabilità oggettiva pura manca ogni rimprovero soggettivo.", why: "La responsabilità oggettiva addossa l'evento in base al solo nesso causale, senza rimprovero per dolo o colpa, secondo il brocardo qui in re illicita versatur tenetur etiam pro casu.", fonte: "Cap. 5 — §6" },
      { q: "La responsabilità oggettiva entra in tensione con l'art. 27 Cost. perché contrasta con:", opts: ["Il principio di legalità e tassatività", "Il principio nulla poena sine culpa", "Il divieto di analogia in malam partem", "Il principio di irretroattività della norma"], correct: 1, difficulty: 3, commonError: "Ricondurre la questione al principio di legalità (art. 25) anziché a quello di colpevolezza (art. 27).", why: "L'art. 27 Cost., nella lettura di Corte cost. 364/1988, esprime il principio nulla poena sine culpa: la responsabilità oggettiva, imputando l'evento senza colpevolezza, vi contrasta quando riferita agli elementi significativi della fattispecie.", fonte: "Cap. 5 — §6" },
      { q: "Dopo Corte cost. 364/1988, le fattispecie di responsabilità oggettiva vanno:", opts: ["Sempre disapplicate dal giudice perché illegittime", "Reinterpretate esigendo almeno la colpa sugli elementi significativi", "Applicate senza limiti in base al solo nesso causale", "Trasformate in ogni caso in fattispecie dolose"], correct: 1, difficulty: 4, commonError: "Ritenere che la sentenza abbia abrogato tout court la responsabilità oggettiva.", why: "La Corte non ha eliminato la responsabilità oggettiva, ma ha imposto una reinterpretazione adeguatrice che richiede almeno la colpa sugli elementi più significativi del fatto, per ricondurre le fattispecie al principio di colpevolezza.", fonte: "Cap. 5 — §6" },
      { q: "I reati aggravati dall'evento sono strutturalmente reati:", opts: ["Di evento in senso naturalistico", "Di mera condotta con pena aggravata da un evento", "A dolo specifico di danno o di pericolo", "Preterintenzionali per definizione di legge"], correct: 1, difficulty: 3, commonError: "Assimilare sempre e comunque i reati aggravati dall'evento ai delitti preterintenzionali.", why: "I reati aggravati dall'evento sono reati di mera condotta per i quali la legge prevede un aumento di pena se dalla condotta deriva un evento (es. art. 593 co. 3). Per la tesi dominante l'evento aggravatore è una circostanza.", fonte: "Cap. 5 — §8" },
    ],
    veroFalso: [
      { aff: "Corte cost. 364/1988 ha abrogato ogni forma di responsabilità oggettiva.", vero: false, traccia: "Falso. La Corte ha imposto una reinterpretazione adeguatrice delle fattispecie di responsabilità oggettiva, per ricondurle al principio di colpevolezza (art. 27 Cost.) richiedendo almeno la colpa sugli elementi significativi, ma non le ha abrogate." },
      { aff: "Nei reati aggravati dall'evento, secondo la tesi dominante, l'evento ulteriore è un elemento circostanziale.", vero: true, traccia: "Vero. L'orientamento dominante qualifica l'evento aggravatore come circostanza, con applicazione della relativa disciplina, compreso il giudizio di bilanciamento ex art. 69; una tesi minoritaria vi ravvisa invece un delitto preterintenzionale." },
    ],
    aperta: { q: "Il candidato illustri la responsabilità oggettiva e i suoi rapporti con il principio di colpevolezza.", traccia: "La responsabilità oggettiva (art. 42 co. 3) imputa l'evento in base al solo nesso causale, senza rimprovero per dolo o colpa (qui in re illicita versatur tenetur etiam pro casu). Si distingue in pura (evento non voluto in luogo del voluto) e mista (offesa non voluta aggiunta all'illecito doloso). Ipotesi tradizionali: preterintenzione, reati aggravati dall'evento, art. 117, aberratio delicti e ictus, art. 116. La figura è in tensione con il principio nulla poena sine culpa (art. 27 Cost.): Corte cost. 364/1988 (e 1085/1988) ha imposto una reinterpretazione adeguatrice, richiedendo almeno la colpa sugli elementi significativi. I reati aggravati dall'evento sono reati di mera condotta con aggravamento di pena al verificarsi di un evento (es. art. 593 co. 3); per la tesi dominante l'evento aggravatore è una circostanza soggetta a bilanciamento.", fonte: "Cap. 5 — §§6, 8" },
    consigliate: ["mappa", "flashcards", "mcq", "aperta"],
    media: { mappa: true },
  },

  /* ===================== 6 · L'ERRORE E IL REATO ABERRANTE ==================== */
  {
    id: "errore", part: "generale", chapter: 5, chapterTitle: "L'elemento soggettivo",
    title: "L'errore e il reato aberrante", subtitle: "Errore sul fatto e sul precetto, ignoranza inevitabile, aberratio ictus e delicti",
    articoli: ["art. 47 c.p.", "art. 5 c.p.", "art. 82 c.p.", "art. 83 c.p.", "art. 48 c.p."], pages: [42, 44], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "L'errore è la <strong>falsa rappresentazione</strong> della realtà, naturalistica o normativa. Occorre distinguere due grandi categorie. L'<em>errore-motivo</em> incide sul processo di formazione della volontà e si articola a sua volta in <strong>errore sul fatto</strong> (art. 47), che concerne una situazione di fatto ed esclude il dolo, e <strong>errore sul precetto</strong> (art. 5), che concerne l'esistenza o la portata della norma giuridica e di regola non scusa. Ben diverso è l'<em>errore-inabilità</em>, che non tocca il momento rappresentativo ma investe la sola fase esecutiva della condotta, dando luogo alle figure del reato aberrante (aberratio ictus e aberratio delicti, artt. 82-83).",
      approfondimenti: [
        { label: "Errore sul fatto (art. 47)", body: "Divergenza tra il fatto rappresentato e voluto e quello descritto dalla fattispecie: esclude il dolo, ma solo se cade sugli <strong>elementi essenziali</strong> (non su quelli secondari, come l'oggetto o il soggetto passivo). Può residuare la responsabilità per <strong>colpa</strong> se l'errore è dovuto a colpa e il fatto è punito anche come delitto colposo (art. 47 co. 1). L'errore su legge <em>extrapenale</em> (art. 47 co. 3) esclude la punibilità se cade su norma non integratrice della fattispecie; se integratrice, vale come errore sulla legge penale (art. 5)." },
        { label: "Errore sul precetto (art. 5) e ignoranza inevitabile", body: "Ricorre quando l'agente vuole un fatto identico a quello previsto dalla norma che, per errore su questa, reputa lecito. Vige la regola dell'inescusabilità dell'ignoranza della legge penale (art. 5), temperata da Corte cost. 364/1988: l'ignoranza scusa se <strong>inevitabile</strong> (incolpevole), cioè non rimproverabile all'agente concreto nonostante l'assolvimento dei doveri di informazione." },
        { label: "L'aberratio (artt. 82-83)", body: "L'<strong>aberratio ictus</strong> (art. 82) ricorre quando, per errore nei mezzi di esecuzione o altra causa, si offende un soggetto <em>diverso</em> da quello voluto (beni omogenei): monolesiva (co. 1: risponde come se avesse offeso la persona voluta) o plurilesiva (co. 2: pena del reato più grave aumentata fino a metà). L'<strong>aberratio delicti</strong> (art. 83) ricorre quando si cagiona un evento <em>diverso</em> (beni eterogenei): risponde a titolo di colpa dell'evento non voluto, se previsto come delitto colposo." },
      ],
      giurisprudenza: [
        { label: "Corte cost. 364/1988", body: "Ha dichiarato l'illegittimità dell'art. 5 c.p. «nella parte in cui non esclude dall'inescusabilità dell'ignoranza della legge penale l'ignoranza inevitabile». L'ignoranza è inevitabile quando permane nonostante l'agente abbia assolto i doveri di informazione e conoscenza per sapere se la condotta fosse penalmente rilevante." },
      ],
      eccezioni: [
        { label: "Errore determinato da altrui inganno (art. 48)", body: "Se l'errore sul fatto è determinato dall'altrui inganno, del reato risponde il <strong>determinatore</strong> (il deceptor), non l'ingannato, salvo che l'errore del deceptus sia dovuto a colpa e il fatto sia previsto come delitto colposo, nel qual caso rispondono entrambi." },
      ],
    },
    sintesi: [
      "Errore = falsa rappresentazione della realtà. Errore-motivo (sul fatto/sul precetto) vs errore-inabilità (reato aberrante).",
      "Errore sul fatto (art. 47): esclude il dolo se cade su elementi essenziali; residua colpa se colposo e il fatto è punito come delitto colposo.",
      "Errore sul precetto (art. 5): ignoranza inescusabile, ma Corte cost. 364/1988 la scusa se inevitabile (incolpevole).",
      "Errore su legge extrapenale (art. 47 co. 3): scusa se su norma non integratrice; se integratrice, vale come errore ex art. 5.",
      "Aberratio ictus (art. 82, beni omogenei) vs aberratio delicti (art. 83, beni eterogenei, risposta a titolo di colpa).",
    ],
    esempi: [
      { titolo: "Errore sul fatto vs errore sul precetto", testo: "Il cacciatore che spara a una sagoma credendola un bersaglio da tiro, e invece uccide una persona nascosta dietro di essa, versa in <strong>errore sul fatto</strong> (art. 47): non si è rappresentato di uccidere un uomo, sicché il dolo è escluso e residua, se del caso, l'omicidio colposo. Anna, invece, che sa perfettamente di detenere una certa sostanza ma ignora che una legge la vieta penalmente, versa in <strong>errore sul precetto</strong> (art. 5): risponde comunque del reato, salvo che l'ignoranza della norma sia in concreto inevitabile." },
      { titolo: "Aberratio ictus", testo: "Marco spara a un rivale per ucciderlo, ma per un errore nella mira colpisce e uccide il passante che gli stava accanto. I beni offesi sono omogenei (in entrambi i casi la vita umana): si applica l'aberratio ictus (art. 82 co. 1) e Marco risponde come se avesse ucciso proprio la persona che voleva colpire. Se invece, mirando a rompere una vetrina, avesse ferito un passante, i beni sarebbero eterogenei (il patrimonio e la persona) e si applicherebbe l'aberratio delicti (art. 83), con risposta a titolo di colpa." },
    ],
    flashcards: [
      ["Che effetto ha l'errore sul fatto (art. 47 c.p.)?", "Esclude il dolo se cade sugli elementi essenziali del fatto; può residuare la colpa se l'errore è colposo e il fatto è punito anche come delitto colposo."],
      ["Cosa ha stabilito Corte cost. 364/1988 sull'art. 5 c.p.?", "Che l'ignoranza della legge penale scusa se inevitabile (incolpevole): l'art. 5 è illegittimo nella parte in cui non escludeva dall'inescusabilità l'ignoranza inevitabile."],
      ["Differenza tra aberratio ictus e aberratio delicti?", "Nell'ictus (art. 82) si offende un soggetto diverso, con beni omogenei; nel delicti (art. 83) si cagiona un evento diverso, con beni eterogenei, e si risponde a titolo di colpa."],
      ["Quando l'errore su legge extrapenale esclude la punibilità?", "Quando cade su una norma non integratrice della fattispecie (art. 47 co. 3); se la norma è integratrice, l'errore vale come errore sulla legge penale (art. 5)."],
      ["Chi risponde nell'errore determinato da altrui inganno (art. 48)?", "Il determinatore (deceptor), non l'ingannato, salvo che l'errore del deceptus sia colposo e il fatto sia punito come delitto colposo: allora rispondono entrambi."],
    ],
    comparativa: {
      titolo: "Errore sul fatto (art. 47) vs errore sul precetto (art. 5)",
      a: "Errore sul fatto (art. 47)", b: "Errore sul precetto (art. 5)",
      righe: [
        { profilo: "Oggetto", a: "Una situazione di fatto (elemento del fatto tipico)", b: "La norma penale (esistenza o portata del divieto)" },
        { profilo: "Effetto sul dolo", a: "Esclude il dolo (se su elementi essenziali)", b: "Non esclude il dolo: fatto voluto identico a quello vietato" },
        { profilo: "Rilevanza scusante", a: "Residua la colpa se colposo e il reato è colposo", b: "Inescusabile, salvo ignoranza inevitabile (Corte cost. 364/1988)" },
      ],
    },
    quiz: [
      { q: "L'errore sul fatto (art. 47 c.p.) che cade sugli elementi essenziali:", opts: ["Non ha alcun effetto sull'elemento soggettivo", "Esclude il dolo, ferma la responsabilità per colpa", "Esclude sempre e comunque ogni responsabilità", "Aggrava la pena per la maggiore pericolosità"], correct: 1, difficulty: 2, commonError: "Ritenere che l'errore sul fatto escluda sempre ogni responsabilità, ignorando la colpa residua.", why: "L'errore sul fatto esclude il dolo se cade su elementi essenziali; può però residuare la responsabilità per colpa se l'errore è dovuto a colpa e il fatto è punito anche come delitto colposo (art. 47 co. 1).", fonte: "Cap. 5 — §9.3" },
      { q: "Dopo Corte cost. 364/1988, l'ignoranza della legge penale (art. 5 c.p.):", opts: ["Scusa sempre l'agente in buona fede", "Non scusa mai, in nessun caso", "Scusa se inevitabile e incolpevole", "Scusa solo se il reato è punito come colposo"], correct: 2, difficulty: 3, commonError: "Ritenere l'art. 5 immutato ('ignorantia legis non excusat' senza eccezioni).", why: "La Corte ha dichiarato l'art. 5 illegittimo nella parte in cui non escludeva l'ignoranza inevitabile: oggi l'ignoranza della legge penale scusa se incolpevole, non rimproverabile all'agente concreto che ha assolto i doveri di informazione.", fonte: "Cap. 5 — §9.3 (Corte cost. 364/1988)" },
      { q: "L'aberratio ictus (art. 82 c.p.) si distingue dall'aberratio delicti perché:", opts: ["Riguarda beni giuridici tra loro eterogenei", "Offende un soggetto diverso, con beni omogenei", "Comporta la risposta sempre a titolo di colpa", "Non richiede il nesso causale con l'evento"], correct: 1, difficulty: 3, commonError: "Invertire i criteri: attribuire all'aberratio ictus l'eterogeneità dei beni.", why: "Nell'aberratio ictus si offende un soggetto diverso da quello voluto, ma i beni giuridici sono omogenei; nell'aberratio delicti (art. 83) si cagiona un evento diverso con beni eterogenei, rispondendo a titolo di colpa.", fonte: "Cap. 5 — §§10.1-10.2" },
      { q: "Nell'aberratio ictus monolesiva (art. 82 co. 1 c.p.) il colpevole:", opts: ["Non risponde di alcun reato, per errore scusabile", "Risponde come se avesse offeso la persona voluta", "Risponde soltanto a titolo di colpa dell'evento", "Risponde di due distinti reati posti in concorso"], correct: 1, difficulty: 3, commonError: "Applicare la disciplina della plurilesiva (co. 2) o quella dell'aberratio delicti.", why: "Nell'aberratio ictus monolesiva il colpevole risponde come se avesse commesso il reato in danno della persona che voleva offendere (art. 82 co. 1), salve le regole dell'art. 60 sulle circostanze.", fonte: "Cap. 5 — §10.1" },
      { q: "L'errore su una legge extrapenale integratrice della fattispecie:", opts: ["Esclude sempre la punibilità ex art. 47 co. 3", "Vale come errore sulla legge penale (art. 5)", "Esclude il dolo del fatto in ogni caso", "È del tutto irrilevante ai fini del reato"], correct: 1, difficulty: 4, commonError: "Applicare l'art. 47 co. 3 anche alle norme extrapenali integratrici, che invece seguono l'art. 5.", why: "Per l'orientamento prevalente, solo l'errore su norme extrapenali non integratrici esclude la punibilità (art. 47 co. 3); l'errore su norme integratrici, essendo errore sulla legge penale (art. 5), non scusa.", fonte: "Cap. 5 — §9.3" },
    ],
    veroFalso: [
      { aff: "L'errore sul precetto (art. 5) esclude il dolo del fatto.", vero: false, traccia: "Falso. Nell'errore sul precetto l'agente vuole un fatto perfettamente identico a quello vietato: il dolo del fatto sussiste. L'errore riguarda solo la conoscenza della norma e, di regola, non scusa (salvo ignoranza inevitabile ex Corte cost. 364/1988)." },
      { aff: "Nell'aberratio delicti monolesiva si risponde a titolo di colpa dell'evento diverso non voluto, se previsto come delitto colposo.", vero: true, traccia: "Vero. L'art. 83 co. 1 stabilisce che, quando si cagiona un evento diverso da quello voluto (beni eterogenei), il colpevole risponde a titolo di colpa dell'evento non voluto, purché il fatto sia preveduto dalla legge come delitto colposo." },
    ],
    aperta: { q: "Il candidato distingua l'errore sul fatto dall'errore sul precetto e illustri le figure di reato aberrante.", traccia: "L'errore è falsa rappresentazione della realtà. L'errore sul fatto (art. 47) cade su una situazione di fatto ed esclude il dolo se investe elementi essenziali, salva la colpa residua (se colposo e il reato è punito come colposo); l'errore su legge extrapenale non integratrice segue l'art. 47 co. 3. L'errore sul precetto (art. 5) cade sulla norma: il fatto è voluto e identico a quello vietato, sicché non esclude il dolo ed è di regola inescusabile; Corte cost. 364/1988 lo ha reso scusante quando l'ignoranza sia inevitabile (incolpevole). Il reato aberrante (errore-inabilità nella fase esecutiva) comprende l'aberratio ictus (art. 82: offesa a soggetto diverso, beni omogenei; monolesiva o plurilesiva) e l'aberratio delicti (art. 83: evento diverso, beni eterogenei; risposta a titolo di colpa), cui la dottrina aggiunge l'aberratio causae. L'art. 48 disciplina l'errore determinato da altrui inganno.", fonte: "Cap. 5 — §§9.3-10.2" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: { mappa: true },
  },

  /* ===================== 7 · CAUSE DI ESCLUSIONE DELLA COLPEVOLEZZA ==================== */
  {
    id: "scusanti", part: "generale", chapter: 5, chapterTitle: "L'elemento soggettivo",
    title: "Le cause di esclusione della colpevolezza", subtitle: "Caso fortuito e forza maggiore, costringimento fisico, inesigibilità",
    articoli: ["art. 45 c.p.", "art. 46 c.p.", "art. 54 c.p."], pages: [41, 42], depth: "deep", inPlan: true,
    layers: {
      essenziale:
        "Le cause di esclusione della colpevolezza (<strong>scusanti</strong>) rendono non colpevole un fatto che resta tipico e antigiuridico: in presenza di situazioni anomale, la persona subisce una particolare <strong>pressione psichica</strong> che le impedisce di conformare la propria condotta alla regola di diligenza. Il loro fondamento comune è l'<strong>inesigibilità</strong> di un comportamento diverso da quello tenuto: l'ordinamento rinuncia al rimprovero perché, in quel contesto, non era ragionevolmente pretendibile una condotta conforme al diritto. Proprio per il loro carattere eccezionale, rilevano soltanto le scusanti espressamente previste dalla legge — il caso fortuito, la forza maggiore, il costringimento fisico e l'errore — senza possibilità di applicazione analogica.",
      approfondimenti: [
        { label: "Caso fortuito e forza maggiore (art. 45)", body: "Il <strong>caso fortuito</strong> è un accadimento imponderabile e imprevedibile che si inserisce d'improvviso nell'azione, soverchiando ogni possibilità di resistenza (es. l'automobilista colpito da un infarto improvviso). La <strong>forza maggiore</strong> è la forza della natura assoluta e invincibile, riconducibile a cause indipendenti dalla volontà e inevitabile secondo diligenza, perizia e prudenza. È esclusa in presenza di una mera difficoltà di tenere la condotta." },
        { label: "Il costringimento fisico (art. 46)", body: "Non è punibile chi ha commesso il fatto perché <strong>costretto da altri</strong> mediante violenza fisica alla quale non poteva resistere. Il coartato è solo apparentemente autore: in realtà è mero strumento dell'agire altrui (<em>non agit sed agitur</em>). Il potere di agire è cancellato dalla violenza fisica: risponde del reato chi la esercita (l'autore mediato)." },
      ],
      giurisprudenza: [
        { label: "Scriminanti vs scusanti", body: "Le <strong>scriminanti</strong> (cause di giustificazione, artt. 50-54) rendono il fatto <em>lecito</em>: operano sul piano oggettivo dell'antigiuridicità, hanno efficacia <em>erga omnes</em> e si estendono ai concorrenti. Le <strong>scusanti</strong> lasciano il fatto antigiuridico ma escludono la colpevolezza per inesigibilità: hanno efficacia <em>soggettiva</em> e non si comunicano ai concorrenti. Secondo Marinucci-Dolcini-Gatta, lo stato di necessità (art. 54) avrebbe in realtà natura di scusante, pur essendo collocato tra le cause di giustificazione." },
      ],
      eccezioni: [
        { label: "L'inesigibilità come scusante non codificata", body: "Ci si chiede se l'inesigibilità operi come causa di esclusione della colpevolezza <em>generale</em> e non scritta. La giurisprudenza prevalente è restia, ammettendo solo le scusanti tipizzate; parte della dottrina invoca invece l'inesigibilità quale principio generale desumibile dall'art. 27 Cost." },
      ],
    },
    sintesi: [
      "Scusanti = cause di esclusione della colpevolezza; fondamento: inesigibilità di un comportamento diverso per pressione psichica.",
      "Catalogo tassativo: caso fortuito, forza maggiore (art. 45), costringimento fisico (art. 46), errore.",
      "Caso fortuito: accadimento imprevedibile e imponderabile. Forza maggiore: forza naturale assoluta e invincibile.",
      "Costringimento fisico (art. 46): il coartato non agit sed agitur, risponde chi esercita la violenza.",
      "Scriminanti (fatto lecito, efficacia erga omnes) ≠ scusanti (fatto antigiuridico non colpevole, efficacia soggettiva).",
    ],
    esempi: [
      { titolo: "Caso fortuito e forza maggiore", testo: "L'automobilista colto da un <strong>infarto improvviso</strong>, che perde i sensi al volante e investe un passante, versa in caso fortuito (art. 45): un accadimento imprevedibile e imponderabile ha soverchiato la sua condotta, di per sé diligente. Se invece uno <strong>sciame d'api</strong> penetra all'improvviso nell'abitacolo aggredendolo e facendogli perdere il controllo del veicolo, si versa in forza maggiore: una forza esterna, invincibile e indipendente dalla sua volontà, cui non poteva in alcun modo resistere." },
      { titolo: "Costringimento fisico", testo: "Un uomo molto più robusto afferra la mano di Marco e, con una violenza fisica cui questi non riesce in alcun modo a opporsi, gliela guida a premere il grilletto, uccidendo la vittima. Marco non è punibile (art. 46): è ridotto a mero strumento nelle mani altrui (<em>non agit sed agitur</em>), privo di qualsiasi possibilità di autodeterminarsi. Del reato risponde chi ha esercitato la coazione fisica, quale autore mediato dell'omicidio." },
    ],
    flashcards: [
      ["Su cosa si fondano le cause di esclusione della colpevolezza?", "Sull'inesigibilità di un comportamento diverso: una particolare pressione psichica impedisce di conformare la condotta alla regola di diligenza."],
      ["Differenza tra caso fortuito e forza maggiore (art. 45)?", "Il caso fortuito è un accadimento imprevedibile e imponderabile che si inserisce nell'azione; la forza maggiore è una forza naturale assoluta e invincibile, indipendente dalla volontà."],
      ["Cosa prevede il costringimento fisico (art. 46)?", "La non punibilità di chi è costretto da altrui violenza fisica irresistibile: il coartato non agit sed agitur; risponde chi esercita la violenza."],
      ["Qual è la differenza tra scriminanti e scusanti?", "Le scriminanti rendono il fatto lecito (piano oggettivo, efficacia erga omnes); le scusanti lasciano il fatto antigiuridico ma escludono la colpevolezza (efficacia soggettiva)."],
    ],
    comparativa: {
      titolo: "Caso fortuito vs forza maggiore (art. 45)",
      a: "Caso fortuito", b: "Forza maggiore",
      righe: [
        { profilo: "Natura", a: "Accadimento imponderabile e imprevedibile", b: "Forza della natura assoluta e invincibile" },
        { profilo: "Rapporto con la condotta", a: "Si inserisce d'improvviso nell'azione dell'agente", b: "Riconducibile a cause indipendenti dalla volontà" },
        { profilo: "Esempio tipico", a: "Infarto improvviso alla guida", b: "Sciame d'api nell'abitacolo; vis maior inevitabile" },
      ],
    },
    quiz: [
      { q: "Le cause di esclusione della colpevolezza (scusanti) si fondano su:", opts: ["La liceità oggettiva del fatto commesso", "L'inesigibilità di un comportamento diverso", "L'assenza del nesso causale con l'evento", "La mancanza di tipicità del fatto tenuto"], correct: 1, difficulty: 2, commonError: "Confondere le scusanti con le cause di giustificazione, che rendono il fatto lecito.", why: "Le scusanti lasciano il fatto tipico e antigiuridico, ma escludono la colpevolezza perché, per la pressione psichica della situazione anomala, non era esigibile un comportamento diverso.", fonte: "Cap. 5 — §9" },
      { q: "Il caso fortuito (art. 45 c.p.) è:", opts: ["Una forza della natura assoluta e invincibile", "Un accadimento imponderabile e imprevedibile", "Una violenza fisica esercitata da un terzo", "Un errore inevitabile sul precetto penale"], correct: 1, difficulty: 2, commonError: "Confondere il caso fortuito con la forza maggiore (vis maior).", why: "Il caso fortuito è un accadimento imprevedibile e imponderabile che si inserisce d'improvviso nell'azione, soverchiando ogni possibilità di resistenza (es. infarto improvviso alla guida).", fonte: "Cap. 5 — §9.1" },
      { q: "Nel costringimento fisico (art. 46 c.p.) del reato risponde:", opts: ["Il soggetto coartato, autore materiale", "Chi ha esercitato la violenza fisica", "Entrambi, in concorso di persone", "Nessuno dei due, per caso fortuito"], correct: 1, difficulty: 2, commonError: "Ritenere responsabile il coartato, che invece è mero strumento (non agit sed agitur).", why: "Il coartato è solo apparentemente autore: essendo strumento dell'agire altrui, non è punibile. Del reato risponde chi ha esercitato la violenza fisica, quale autore mediato.", fonte: "Cap. 5 — §9.2" },
      { q: "La differenza principale tra scriminanti e scusanti è che:", opts: ["Le scriminanti operano solo per i delitti dolosi", "Le scriminanti rendono lecito il fatto, le scusanti no", "Le scusanti hanno efficacia oggettiva ed erga omnes", "Non vi è in realtà alcuna differenza di regime"], correct: 1, difficulty: 3, commonError: "Attribuire alle scusanti l'efficacia erga omnes propria delle scriminanti.", why: "Le scriminanti (cause di giustificazione) operano sull'antigiuridicità rendendo il fatto lecito, con efficacia oggettiva ed erga omnes; le scusanti lasciano il fatto antigiuridico ma escludono la colpevolezza, con efficacia meramente soggettiva.", fonte: "Cap. 5 — §9" },
    ],
    veroFalso: [
      { aff: "Le cause di esclusione della colpevolezza sono atipiche e desumibili in via analogica.", vero: false, traccia: "Falso. Per il loro carattere eccezionale, rilevano solo le scusanti espressamente previste dalla legge (caso fortuito, forza maggiore, costringimento fisico, errore): il catalogo è tassativo, sebbene parte della dottrina invochi l'inesigibilità come principio generale." },
      { aff: "A differenza delle scusanti, le scriminanti rendono il fatto oggettivamente lecito e si estendono ai concorrenti.", vero: true, traccia: "Vero. Le scriminanti operano sul piano dell'antigiuridicità, rendendo il fatto lecito con efficacia erga omnes e comunicandosi ai concorrenti; le scusanti escludono la sola colpevolezza per inesigibilità, con efficacia soggettiva e non estensibile ai concorrenti." },
    ],
    aperta: { q: "Il candidato illustri le cause di esclusione della colpevolezza e le distingua dalle cause di giustificazione.", traccia: "Le scusanti rendono non colpevole un fatto tipico e antigiuridico: in situazioni anomale la pressione psichica rende inesigibile un comportamento conforme alla diligenza. Per il carattere eccezionale, il catalogo è tassativo: caso fortuito e forza maggiore (art. 45: rispettivamente accadimento imprevedibile e vis maior invincibile), costringimento fisico (art. 46: il coartato non agit sed agitur, risponde chi esercita la violenza) ed errore. Vanno distinte dalle cause di giustificazione (scriminanti, artt. 50-54): queste incidono sull'antigiuridicità rendendo il fatto lecito, con efficacia oggettiva ed erga omnes e comunicazione ai concorrenti; le scusanti operano sulla sola colpevolezza, con efficacia soggettiva. Secondo Marinucci-Dolcini-Gatta lo stato di necessità (art. 54) avrebbe natura di scusante. È discussa l'ammissibilità dell'inesigibilità come scusante generale non codificata.", fonte: "Cap. 5 — §§9-9.2" },
    consigliate: ["mappa", "comparativa", "esempi", "mcq", "aperta"],
    media: { mappa: true },
  },
];
