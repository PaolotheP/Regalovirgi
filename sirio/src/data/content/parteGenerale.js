/* =========================================================================
   SIRIO — CONTENUTI · PARTE GENERALE del Diritto penale.
   Rielaborati dal SuperCompendio di Diritto penale (Neldiritto Editore).
   Le domande riprendono il taglio reale degli esami di parte generale
   (Bari, Sapienza, LUISS): dolo eventuale/colpa cosciente (SU ThyssenKrupp),
   causalità (SU Franzese), tentativo, scriminanti, imputabilità, legalità.
   ========================================================================= */
import { GEN_A } from "./genA.js";
import { GEN_B } from "./genB.js";
import { GEN_C } from "./genC.js";

const GEN_CORE = [
  /* ===================== 1 · PRINCIPIO DI LEGALITÀ ==================== */
  {
    id: "legalita", part: "generale", chapter: 1, chapterTitle: "Caratteri e principi",
    title: "Il principio di legalità", subtitle: "Riserva di legge, tassatività, divieto di analogia, irretroattività",
    articoli: ["art. 25 co. 2 Cost.", "art. 1 c.p.", "art. 14 preleggi"], pages: [4, 6], depth: "deep",
    layers: {
      essenziale:
        "Il principio di legalità (<em>nullum crimen, nulla poena sine lege</em>) è enunciato dall'art. 25, co. 2, Cost.: «nessuno può essere punito se non in forza di una legge entrata in vigore prima del fatto commesso». Esso attribuisce <strong>solo alla legge</strong> il potere di prevedere reati e pene, sottraendolo all'arbitrio del giudice e dell'esecutivo. Costituisce un presidio essenziale della libertà personale: i consociati devono poter conoscere in anticipo, con chiarezza, ciò che è penalmente vietato, così da orientare le proprie condotte. Il principio ha portata garantista e valore sovranazionale, essendo affermato anche dall'art. 7 CEDU e dall'art. 49 della Carta di Nizza. Da esso discende un articolato sistema di corollari (riserva di legge, tassatività, divieto di analogia, irretroattività) che ne assicurano l'effettività.",
      approfondimenti: [
        { label: "I corollari", body: "Dal principio discendono: la <strong>riserva di legge</strong> (solo la legge statale, tendenzialmente assoluta, prevede i reati), la <strong>precisione/tassatività/determinatezza</strong> (il precetto dev'essere formulato in modo chiaro e verificabile), il <strong>divieto di analogia</strong> in malam partem (art. 14 preleggi), l'<strong>irretroattività</strong> della norma sfavorevole e la <strong>prevedibilità</strong>." },
        { label: "Riserva di legge assoluta o relativa?", body: "L'indirizzo prevalente (Marinucci-Dolcini-Gatta) accoglie una riserva <em>tendenzialmente assoluta</em>: ammette il rinvio a fonti secondarie solo per specificazioni tecniche di elementi già puntualmente enucleati dalla legge. Sono escluse dalle fonti penali le leggi regionali, le norme UE e la consuetudine (salvo quella integratrice in bonam partem)." },
      ],
      giurisprudenza: [
        { label: "Norme penali in bianco", body: "Le norme a precetto genericamente formulato, da completare con altre fonti, non violano la legalità purché sia la legge a individuare interesse tutelato, caratteri, presupposti e limiti dell'atto integrativo (Corte cost. n. 168/1971)." },
      ],
      eccezioni: [
        { label: "Analogia in bonam partem", body: "Il divieto di analogia riguarda le sole norme incriminatrici. È ammessa l'analogia a favore del reo (es. per le cause di giustificazione, espressione di principi generali), salvo le norme eccezionali e le cause di non punibilità in senso stretto." },
      ],
    },
    sintesi: [
      "Art. 25 co. 2 Cost. + art. 1 c.p.: nullum crimen, nulla poena sine lege.",
      "Corollari: riserva di legge, precisione/tassatività, divieto di analogia, irretroattività, prevedibilità.",
      "Riserva di legge tendenzialmente assoluta: rinvio a fonti secondarie solo per specificazioni tecniche.",
      "Divieto di analogia solo in malam partem; ammessa l'analogia in bonam partem (con limiti).",
      "Escluse dalle fonti penali: leggi regionali, norme UE, consuetudine.",
    ],
    esempi: [
      { titolo: "Perché non basta una circolare", testo: "Il Ministero dell'Ambiente emana una circolare che vieta un certo scarico industriale e ne minaccia la punizione. La <strong>dott.ssa Bianchi</strong>, titolare di un'azienda, viola quella circolare: non potrà essere condannata solo per questo, perché una circolare o un regolamento non possono, da soli, creare un nuovo reato. Serve una <strong>legge</strong> (o un atto avente forza di legge, come il decreto legislativo): le fonti secondarie possono al più specificare aspetti tecnici di una figura di reato già delineata dalla legge, non introdurne di nuove." },
      { titolo: "Il divieto di analogia in malam partem", testo: "Una norma punisce chi introduce «armi» in un luogo pubblico. Il giudice non può applicarla a <strong>Marco</strong>, sorpreso con una bottiglia rotta, estendendo la norma per <em>analogia</em> a un oggetto non previsto: sarebbe analogia in malam partem, vietata (art. 14 preleggi). Potrà invece, all'opposto, estendere per analogia una <strong>causa di giustificazione</strong> a favore del reo, trattandosi di norma di favore." },
    ],
    flashcards: [
      ["Dove è sancito il principio di legalità?", "Art. 25 co. 2 Cost. e art. 1 c.p. (a livello sovranazionale: art. 7 CEDU, art. 49 CDFUE)."],
      ["Quali sono i corollari del principio di legalità?", "Riserva di legge, precisione/tassatività/determinatezza, divieto di analogia, irretroattività sfavorevole, prevedibilità."],
      ["L'analogia è sempre vietata in materia penale?", "No: è vietata in malam partem; è ammessa in bonam partem (es. cause di giustificazione), salvo norme eccezionali."],
      ["La consuetudine è fonte del diritto penale?", "No, salvo la consuetudine integratrice in senso favorevole al reo, secondo parte della dottrina."],
    ],
    comparativa: {
      titolo: "Analogia vs interpretazione estensiva",
      a: "Analogia (vietata in malam partem)", b: "Interpretazione estensiva (ammessa)",
      righe: [
        { profilo: "Oggetto", a: "Colma una lacuna applicando la norma a casi non previsti", b: "Attribuisce alla norma un significato più ampio, ma tra quelli possibili" },
        { profilo: "Limite letterale", a: "Va oltre i significati letterali possibili", b: "Resta dentro i significati letterali della disposizione" },
        { profilo: "Ammissibilità penale", a: "Vietata se sfavorevole al reo", b: "Ammessa" },
      ],
    },
    quiz: [
      { q: "Il principio di legalità in materia penale trova fondamento costituzionale:", opts: ["Nell'art. 3 Cost., in tema di eguaglianza", "Nell'art. 25 co. 2 Cost.", "Nell'art. 13 Cost., sulla libertà personale", "Nell'art. 27 Cost., sulla colpevolezza"], correct: 1, difficulty: 1, commonError: "Confondere con l'art. 27 (colpevolezza) o l'art. 13 (libertà personale).", why: "L'art. 25 co. 2 Cost. stabilisce che nessuno può essere punito se non in forza di una legge entrata in vigore prima del fatto commesso. È la base costituzionale del principio di legalità.", fonte: "Cap. 1 — §4" },
      { q: "Il divieto di analogia in materia penale:", opts: ["Vale per ogni norma penale, di favore o di sfavore", "Riguarda le sole norme incriminatrici (malam partem)", "Non è in nessun caso e per nessun profilo derogabile", "Vale soltanto per i delitti e non per le contravvenzioni"], correct: 1, difficulty: 3, commonError: "Ritenere vietata anche l'analogia in bonam partem (es. sulle scriminanti).", why: "Dal tenore dell'art. 25 Cost. («nessuno può essere punito») si desume che il divieto riguarda le norme incriminatrici e sanzionatorie. È ammessa l'analogia in bonam partem, con l'eccezione delle norme eccezionali.", fonte: "Cap. 1 — §5.3" },
      { q: "Secondo l'indirizzo prevalente, la riserva di legge in materia penale è:", opts: ["Assoluta in senso rigido, senza alcun rinvio", "Tendenzialmente assoluta, con rinvii tecnici", "Relativa, con ampi rinvii a fonti secondarie", "Inesistente, potendo il reato nascere da regolamento"], correct: 1, difficulty: 3, commonError: "Affermare che sia assoluta in senso rigido, senza alcun rinvio a fonti secondarie.", why: "La tesi prevalente (Marinucci-Dolcini-Gatta) accoglie una riserva tendenzialmente assoluta: il rinvio a norme regolamentari è ammesso solo per specificazioni tecniche di elementi già puntualmente enucleati dalla norma primaria.", fonte: "Cap. 1 — §5.1" },
      { q: "Quale tra queste NON è fonte del diritto penale?", opts: ["La legge ordinaria dello Stato", "Il decreto legislativo delegato", "La legge regionale ordinaria", "La legge di rango costituzionale"], correct: 2, difficulty: 2, commonError: "Ritenere le leggi regionali idonee a creare reati.", why: "Le leggi regionali sono escluse dalle fonti penali (così come le norme UE e la consuetudine). Le fonti sono la legge costituzionale, la legge ordinaria e gli atti aventi forza di legge (decreti-legge e decreti legislativi).", fonte: "Cap. 1 — §5.1" },
      { q: "Il principio di precisione (tassatività/determinatezza) impone:", opts: ["Di punire ogni condotta concretamente offensiva", "Di descrivere il precetto in modo verificabile", "L'analogia a favore del reo nei casi dubbi", "La retroattività della legge penale favorevole"], correct: 1, difficulty: 2, commonError: "Confondere la precisione (tecnica di formulazione) con il divieto di analogia (interpretazione).", why: "La precisione incide sulla tecnica di redazione della norma: impone di descrivere il precetto con concetti chiari, suscettibili di prova nel processo, per garantire intelligibilità e diritto di difesa.", fonte: "Cap. 1 — §5.2" },
    ],
    veroFalso: [
      { aff: "Anche un regolamento amministrativo può introdurre autonomamente un nuovo reato.", vero: false, traccia: "Falso. Per la riserva di legge (tendenzialmente assoluta) solo la legge o un atto avente forza di legge può prevedere reati e pene; le fonti secondarie possono al più specificare elementi tecnici già delineati dalla legge." },
      { aff: "È ammessa l'analogia in bonam partem, salvo che per le norme eccezionali.", vero: true, traccia: "Vero. Il divieto di analogia riguarda le norme incriminatrici (malam partem). L'analogia a favore del reo è ammessa (es. cause di giustificazione, espressione di principi generali), con l'eccezione delle norme eccezionali e delle cause di non punibilità in senso stretto." },
    ],
    aperta: { q: "Il candidato illustri il principio di legalità e i suoi corollari.", traccia: "Il principio di legalità (art. 25 co. 2 Cost., art. 1 c.p.) esprime il brocardo nullum crimen, nulla poena sine lege: solo la legge, entrata in vigore prima del fatto, può prevedere reati e pene. Ne sono corollari: la riserva di legge (tendenzialmente assoluta, con rinvio a fonti secondarie solo per specificazioni tecniche; escluse leggi regionali, norme UE, consuetudine), la precisione/tassatività/determinatezza (chiarezza e verificabilità del precetto), il divieto di analogia in malam partem (art. 14 preleggi; ammessa in bonam partem con limiti), l'irretroattività della norma sfavorevole e la prevedibilità. Il principio presidia la libertà dei consociati e argina l'arbitrio del giudice e del legislatore.", fonte: "Cap. 1 — §§4-5" },
    consigliate: ["mappa", "flashcards", "comparativa", "mcq"],
    media: { podcast: { title: "Il principio di legalità", chapters: [["Nullum crimen sine lege", 0], ["I corollari", 250], ["Riserva di legge", 520], ["Divieto di analogia", 800]] }, mappa: true },
  },

  /* ===================== 2 · IL RAPPORTO DI CAUSALITÀ ================= */
  {
    id: "causalita", part: "generale", chapter: 4, chapterTitle: "L'elemento oggettivo",
    title: "Il rapporto di causalità", subtitle: "Condicio sine qua non, art. 41 c.p., la sentenza Franzese",
    articoli: ["art. 40 c.p.", "art. 41 c.p.", "art. 27 co. 1 Cost."], pages: [20, 21], depth: "deep",
    layers: {
      essenziale:
        "Il rapporto di causalità è il legame eziologico che unisce la condotta all'evento lesivo e ne è il presupposto imprescindibile: presidia il <strong>principio di personalità</strong> della responsabilità penale (art. 27 co. 1 Cost.), impedendo che si risponda di un fatto non proprio. L'art. 40 c.p. richiede infatti che l'evento sia <strong>conseguenza</strong> dell'azione o dell'omissione. Prevale la teoria della <em>condicio sine qua non</em>: è causa ogni antecedente senza il quale l'evento non si sarebbe verificato, tutte le condizioni essendo tra loro equivalenti. L'accertamento avviene con il <strong>giudizio controfattuale</strong>, ossia l'eliminazione mentale della condotta, che presuppone però una legge scientifica di copertura. La teoria condizionalistica va poi temperata dall'art. 41 c.p., che disciplina il concorso di cause e riconosce efficacia interruttiva alle sole cause sopravvenute da sole sufficienti.",
      approfondimenti: [
        { label: "Le leggi di copertura", body: "Il giudizio controfattuale presuppone una <strong>legge scientifica di copertura</strong>, universale (certezza prossima al 100%) o statistica (una percentuale). La sola statistica non basta: occorre integrarla con l'accertamento logico." },
        { label: "Concorso di cause (art. 41)", body: "Il concorso di cause preesistenti, simultanee o sopravvenute — anche indipendenti dalla condotta — non esclude il nesso (co. 1 e 3). Fanno eccezione le <strong>cause sopravvenute da sole sufficienti</strong> a determinare l'evento (co. 2), che lo interrompono." },
        { label: "Causalità omissiva", body: "Nei reati omissivi impropri (art. 40 cpv.) si opera per sostituzione mentale: si aggiunge l'azione doverosa omessa e si verifica, con giudizio prognostico, se l'evento si sarebbe ugualmente prodotto." },
      ],
      giurisprudenza: [
        { label: "SU Franzese (2002, n. 30328)", body: "Non basta un'alta probabilità statistica: serve la <strong>certezza processuale</strong>, raggiungibile anche con leggi statistiche purché vi sia <strong>elevata probabilità logica</strong> (credibilità razionale) previa esclusione dei decorsi causali alternativi. Una statistica bassa può bastare se si escludono altre cause; una alta può non bastare se emerge una causa diversa." },
      ],
      eccezioni: [
        { label: "Interruzione del nesso", body: "La causa sopravvenuta da sola sufficiente (art. 41 co. 2) spezza il nesso: es. il ferito lievemente che muore nel rogo dell'ambulanza travolta da un treno." },
      ],
    },
    sintesi: [
      "Art. 40: l'evento dev'essere conseguenza della condotta (fondamento: art. 27 Cost.).",
      "Teoria prevalente: condicio sine qua non + giudizio controfattuale.",
      "Franzese (SU 2002): certezza processuale = probabilità logica, non solo statistica.",
      "Art. 41 co. 2: le cause sopravvenute da sole sufficienti interrompono il nesso.",
      "Causalità omissiva: giudizio prognostico, si aggiunge mentalmente l'azione doverosa.",
    ],
    esempi: [
      { titolo: "Il giudizio controfattuale", testo: "<strong>Luca</strong> accoltella <strong>Marco</strong> al torace e questi muore per l'emorragia. Si elimina mentalmente la coltellata: se, senza di essa, Marco sarebbe rimasto in vita, allora la condotta di Luca è <em>causa</em> della morte (<em>condicio sine qua non</em>). Se invece Marco, ferito solo di striscio, muore perché l'ambulanza che lo trasporta viene travolta da un treno a un passaggio a livello, quel sinistro è una <strong>causa sopravvenuta da sola sufficiente</strong> a determinare l'evento (art. 41 co. 2): il nesso con la coltellata si interrompe e Luca risponde delle sole lesioni, non dell'omicidio." },
      { titolo: "La certezza processuale dopo Franzese", testo: "La <strong>dott.ssa Bianchi</strong>, medico, ritarda una diagnosi e il paziente muore. Anche se le statistiche indicano che una diagnosi tempestiva avrebbe salvato solo il 30% dei casi analoghi, il giudice può affermare il nesso se, <em>escluse</em> le altre possibili cause della morte, resta processualmente certo che proprio quel ritardo fu decisivo. Al contrario, una percentuale alta non basta se emerge una diversa condizione che ha cagionato l'evento: conta la <strong>probabilità logica</strong> del caso concreto, non il solo dato statistico." },
    ],
    flashcards: [
      ["In cosa consiste il giudizio controfattuale?", "Nell'eliminazione mentale della condotta: se, eliminandola, l'evento non si sarebbe verificato, la condotta ne è causa (condicio sine qua non)."],
      ["Cosa ha stabilito la sentenza Franzese?", "Che il nesso richiede la certezza processuale, raggiungibile con leggi statistiche solo se vi è elevata probabilità logica e sono esclusi i decorsi causali alternativi."],
      ["Quando le cause sopravvenute escludono il nesso?", "Quando sono da sole sufficienti a determinare l'evento (art. 41 co. 2)."],
      ["Come si accerta la causalità omissiva?", "Con giudizio prognostico: si aggiunge mentalmente l'azione doverosa omessa e si verifica se l'evento si sarebbe ugualmente prodotto."],
    ],
    comparativa: {
      titolo: "Causalità attiva vs causalità omissiva",
      a: "Attiva (art. 40 co. 1)", b: "Omissiva (art. 40 cpv.)",
      righe: [
        { profilo: "Struttura del giudizio", a: "Esplicativa: si elimina la condotta", b: "Predittiva: si aggiunge l'azione doverosa" },
        { profilo: "Standard probatorio", a: "Certezza processuale", b: "Certezza processuale (stessa, per Franzese)" },
        { profilo: "Presupposto", a: "Condotta commissiva", b: "Posizione di garanzia + potere impeditivo" },
      ],
    },
    quiz: [
      { q: "Secondo la teoria condizionalistica, è causa dell'evento:", opts: ["Solo l'antecedente temporalmente più prossimo", "Ogni antecedente necessario dell'evento", "Solo la condotta assistita da dolo o colpa", "La causa statisticamente più probabile in astratto"], correct: 1, difficulty: 2, commonError: "Cercare la causa 'principale' o più prossima: nella condicio tutte le condizioni necessarie sono equivalenti.", why: "La condicio sine qua non considera causa ogni condizione necessaria: eliminandola, l'evento non si sarebbe prodotto. Non vi è gerarchia tra causa prossima e remota.", fonte: "Cap. 4 — §1.3" },
      { q: "La sentenza Franzese (SU 2002) afferma che il nesso è provato quando:", opts: ["La probabilità statistica supera con certezza il 50%", "Vi è certezza processuale ed elevata probabilità logica", "La legge di copertura invocata è di tipo universale", "L'evento appariva astrattamente prevedibile ex ante"], correct: 1, difficulty: 4, commonError: "Fermarsi al solo coefficiente statistico, senza la probabilità logica e l'esclusione dei decorsi alternativi.", why: "Le SU hanno superato il criterio meramente statistico: serve la certezza processuale, con alta probabilità logica ed esclusione delle spiegazioni alternative nel caso concreto.", fonte: "Cap. 4 — §1.3 (SU 30328/2002)" },
      { q: "Ai sensi dell'art. 41 co. 2 c.p., escludono il rapporto di causalità:", opts: ["Tutte le cause sopravvenute, quali che siano", "Le cause preesistenti del tutto indipendenti", "Le cause sopravvenute da sole sufficienti", "Le concause colpose imputabili a terzi"], correct: 2, difficulty: 3, commonError: "Ritenere che qualunque concausa o causa sopravvenuta interrompa il nesso.", why: "Solo le cause sopravvenute da sole sufficienti interrompono il nesso (co. 2). Il concorso di cause, anche indipendenti, non lo esclude di per sé (co. 1 e 3).", fonte: "Cap. 4 — §1.3 (art. 41)" },
      { q: "Il fondamento costituzionale dell'accertamento del nesso causale è:", opts: ["Art. 25 co. 2 Cost. (legalità)", "Art. 27 co. 1 Cost.", "Art. 3 Cost. (eguaglianza)", "Art. 111 Cost. (giusto processo)"], correct: 1, difficulty: 2, commonError: "Confondere con la legalità (art. 25).", why: "Il nesso causale presidia il principio di personalità della responsabilità penale (art. 27 co. 1): senza legame eziologico si risponderebbe per fatto non proprio.", fonte: "Cap. 4 — §1.3" },
      { q: "Una probabilità statistica BASSA, secondo Franzese, può bastare quando:", opts: ["In nessun caso, occorrendo sempre una percentuale alta", "Si escludano le altre possibili cause dell'evento", "Lo richieda espressamente la difesa dell'imputato", "Il reato contestato sia di natura colposa"], correct: 1, difficulty: 4, commonError: "Credere che serva sempre una percentuale elevata: conta la probabilità logica del caso concreto.", why: "Il coefficiente statistico va integrato dalla probabilità logica: una percentuale bassa basta se nel caso concreto si escludono i decorsi causali alternativi.", fonte: "Cap. 4 — §1.3" },
    ],
    veroFalso: [
      { aff: "Le cause preesistenti indipendenti dalla condotta escludono sempre il nesso causale.", vero: false, traccia: "Falso. L'art. 41 co. 1 e 3 stabilisce che il concorso di cause preesistenti, simultanee o sopravvenute — anche indipendenti o costituite dal fatto altrui — non esclude il nesso. Solo le cause sopravvenute da sole sufficienti (co. 2) lo interrompono." },
      { aff: "Per Franzese un'alta probabilità statistica è sempre sufficiente a provare il nesso.", vero: false, traccia: "Falso. La statistica va integrata dalla probabilità logica: occorre escludere i decorsi causali alternativi. Una percentuale alta può non bastare se risulta che l'evento fu cagionato da una diversa condizione." },
    ],
    aperta: { q: "Il candidato esponga la teoria della causalità accolta dal codice e l'apporto della sentenza Franzese.", traccia: "Il codice (artt. 40-41) accoglie la teoria condizionalistica della condicio sine qua non: causa è ogni antecedente necessario, accertato con giudizio controfattuale, previa individuazione di una legge di copertura (universale o statistica). La sentenza Franzese (SU 30328/2002) ha precisato che non basta il coefficiente statistico: serve la certezza processuale, integrando la probabilità statistica con la probabilità logica ed escludendo i decorsi alternativi. Il principio vale anche per la causalità omissiva (art. 40 cpv.), accertata con giudizio prognostico sull'efficacia impeditiva dell'azione doverosa. L'art. 41 co. 2 riconosce efficacia interruttiva alle sole cause sopravvenute da sole sufficienti.", fonte: "Cap. 4 — §1.3" },
    consigliate: ["mappa", "esempi", "comparativa", "mcq", "aperta"],
    media: { podcast: { title: "Il nesso di causalità", chapters: [["Condicio sine qua non", 0], ["Giudizio controfattuale", 320], ["La sentenza Franzese", 640], ["Concorso di cause", 900]] }, video: { title: "Causalità e probabilità logica", chapters: [["La teoria condizionalistica", 0], ["Il caso Franzese", 270], ["Causalità omissiva", 540]] }, mappa: true },
  },

  /* ============= 3 · DOLO EVENTUALE vs COLPA COSCIENTE ============== */
  {
    id: "doloEventuale", part: "generale", chapter: 5, chapterTitle: "L'elemento soggettivo",
    title: "Dolo eventuale e colpa cosciente", subtitle: "Il confine della colpevolezza: la sentenza ThyssenKrupp",
    articoli: ["art. 43 c.p.", "art. 61 n. 3 c.p."], pages: [35, 36], depth: "deep",
    layers: {
      essenziale:
        "La distinzione tra dolo eventuale e colpa cosciente è il punto più delicato della colpevolezza e tra le domande d'esame più ricorrenti, perché segna il confine tra responsabilità dolosa e colposa. Il tratto <em>comune</em> alle due figure è che l'evento è <strong>previsto</strong> dall'agente come possibile, pur non essendo lo scopo perseguito. Il vero discrimine sta nell'<strong>atteggiamento volitivo</strong> verso quell'evento previsto: nel <strong>dolo eventuale</strong> l'agente si rappresenta la concreta possibilità dell'offesa e ne <em>accetta il rischio</em>, agendo «a costo di» cagionarla; nella <strong>colpa cosciente</strong> (aggravante ex art. 61 n. 3) l'agente pure prevede l'evento, ma <em>confida di poterlo evitare</em>, non aderendovi. La corretta qualificazione è decisiva, perché determina il titolo di reato (doloso o colposo) e l'intera cornice sanzionatoria.",
      approfondimenti: [
        { label: "Il criterio tradizionale", body: "L'<strong>accettazione del rischio</strong>: il diverso atteggiamento volitivo verso l'evento (accettazione contro fiducia nella sua mancata verificazione)." },
        { label: "La prima formula di Frank", body: "Test controfattuale: se l'agente avesse agito <em>ugualmente</em> pur avendo la certezza dell'evento, vi è dolo eventuale; se avrebbe desistito, colpa cosciente." },
      ],
      giurisprudenza: [
        { label: "SU ThyssenKrupp (2014, n. 38343)", body: "Adotta la <strong>teoria del bilanciamento</strong>: vi è dolo eventuale quando l'agente, «dopo aver tutto soppesato, dopo aver considerato il fine perseguito e l'eventuale prezzo da pagare, si sia consapevolmente determinato ad agire comunque, ad accettare l'eventualità della causazione dell'offesa», in una scelta assimilabile alla volontà. La Corte elenca indicatori del dolo da valutare globalmente." },
      ],
      eccezioni: [
        { label: "Perché conta tantissimo", body: "Dalla qualificazione dipende il titolo di responsabilità (es. omicidio doloso vs colposo) e quindi l'intera cornice di pena." },
      ],
    },
    sintesi: [
      "Comune: l'evento è previsto ma non è lo scopo.",
      "Dolo eventuale = accettazione del rischio ('a costo di' cagionarlo).",
      "Colpa cosciente (art. 61 n. 3) = previsione + fiducia di evitarlo. Non accetta l'evento.",
      "ThyssenKrupp (SU 38343/2014): teoria del bilanciamento / prima formula di Frank.",
      "Distinzione decisiva per il titolo di responsabilità (doloso vs colposo).",
    ],
    esempi: [
      { titolo: "Stesso evento, due colpevolezze", testo: "<strong>L'automobilista Anna</strong> lancia l'auto a folle velocità lungo una via affollata del centro. Se si rappresenta la concreta possibilità di travolgere un pedone e prosegue <em>accettando</em> quell'esito («se capita, pazienza»), e poi investe <strong>Luca</strong>, risponde a titolo di <strong>dolo eventuale</strong>. Se invece, pur prevedendo il rischio, confida davvero nelle proprie doti di guida e nella prontezza dei freni per schivare, e solo per un imprevisto travolge il pedone, risponde a titolo di <strong>colpa cosciente</strong>. Il fatto materiale è identico: cambia soltanto l'atteggiamento interiore verso l'evento previsto." },
      { titolo: "Il contagio consapevole", testo: "<strong>Marco</strong>, sapendo di essere portatore di una grave infezione, ha rapporti non protetti nascondendo la propria condizione. Se, rappresentandosi la possibilità del contagio, la <em>accetta</em> come prezzo della propria condotta, si configura il <strong>dolo eventuale</strong> delle lesioni. Se invece confidava ragionevolmente, in base a specifiche terapie, di non essere più contagioso, potrà residuare la sola <strong>colpa cosciente</strong>: la prova dell'uno o dell'altra passa per gli indicatori valorizzati dalle Sezioni Unite." },
    ],
    flashcards: [
      ["Qual è il discrimine tra dolo eventuale e colpa cosciente?", "L'atteggiamento volitivo verso l'evento previsto: accettazione del rischio (dolo) vs fiducia di evitarlo (colpa)."],
      ["Cosa ha stabilito ThyssenKrupp (SU 2014)?", "La teoria del bilanciamento (prima formula di Frank): dolo eventuale se l'agente, soppesato il prezzo, si è determinato ad agire comunque, accettando l'offesa."],
      ["In cosa consiste il test di Frank?", "Nel chiedersi se l'agente avrebbe agito ugualmente pur avendo la certezza dell'evento: in caso affermativo, dolo eventuale."],
    ],
    comparativa: {
      titolo: "Dolo eventuale vs colpa cosciente",
      a: "Dolo eventuale", b: "Colpa cosciente (art. 61 n. 3)",
      righe: [
        { profilo: "Previsione dell'evento", a: "Sì (possibile)", b: "Sì (possibile)" },
        { profilo: "Atteggiamento volitivo", a: "Accetta il rischio", b: "Confida di evitarlo" },
        { profilo: "Test di Frank", a: "Avrebbe agito comunque", b: "Avrebbe desistito" },
        { profilo: "Titolo di responsabilità", a: "Doloso", b: "Colposo (aggravato)" },
      ],
    },
    quiz: [
      { q: "L'elemento che accomuna dolo eventuale e colpa cosciente è:", opts: ["L'intenzione diretta di cagionare l'evento", "La previsione dell'evento non voluto", "La totale assenza di previsione dell'evento", "La violazione di una regola cautelare scritta"], correct: 1, difficulty: 3, commonError: "Attribuire al dolo eventuale l'intenzione di cagionare l'evento.", why: "In entrambe le figure l'agente prevede l'evento, che però non è il fine. Le distingue l'atteggiamento volitivo: accettazione (dolo) vs fiducia di evitarlo (colpa).", fonte: "Cap. 5 — §4.2" },
      { q: "Si ha dolo eventuale quando l'agente:", opts: ["Confida ragionevolmente di evitare l'evento", "Prevede l'evento e ne accetta il rischio", "Non prevede in alcun modo l'evento lesivo", "Vuole l'evento come scopo primario dell'azione"], correct: 1, difficulty: 2, commonError: "Confonderlo con il dolo intenzionale (evento come scopo).", why: "Il dolo eventuale ricorre quando l'agente, rappresentandosi la concreta possibilità dell'evento, ne accetta il rischio, agendo 'a costo di' cagionarlo.", fonte: "Cap. 5 — §4.2" },
      { q: "ThyssenKrupp (SU 38343/2014) ha accolto, per il dolo eventuale:", opts: ["La teoria della sola probabilità dell'evento", "La teoria del bilanciamento e di Frank", "La teoria della causalità adeguata", "La figura del dolus in re ipsa presunto"], correct: 1, difficulty: 4, commonError: "Ridurre il dolo eventuale alla sola probabilità dell'evento.", why: "Le SU hanno adottato la teoria del bilanciamento: dolo eventuale se, soppesati fine e prezzo, l'agente si determina ad agire comunque accettando l'offesa.", fonte: "Cap. 5 — §4.2 (SU 38343/2014)" },
      { q: "Secondo il test di Frank, vi è dolo eventuale se l'agente:", opts: ["Avrebbe desistito di fronte alla certezza dell'evento", "Avrebbe agito ugualmente pur con quella certezza", "Ignorava del tutto la regola cautelare violata", "Non perseguiva alcun fine ulteriore con l'azione"], correct: 1, difficulty: 4, commonError: "Invertire l'esito del test.", why: "La prima formula di Frank: se, immaginando la certezza dell'evento, l'agente avrebbe agito ugualmente, vi è dolo eventuale (accettazione); se avrebbe desistito, colpa cosciente.", fonte: "Cap. 5 — §4.2" },
    ],
    veroFalso: [
      { aff: "Nel dolo eventuale l'agente persegue l'evento come scopo.", vero: false, traccia: "Falso. Nel dolo eventuale l'evento non è lo scopo: l'agente persegue altri fini ma, rappresentandosi la concreta possibilità dell'evento, ne accetta il rischio. Quando l'evento è perseguito come scopo si ha dolo intenzionale." },
      { aff: "ThyssenKrupp ha valorizzato la teoria del bilanciamento per il dolo eventuale.", vero: true, traccia: "Vero. Le SU (2014) hanno affermato che vi è dolo eventuale quando l'agente, soppesati fine e prezzo da pagare, si determina ad agire comunque accettando l'offesa: scelta razionale assimilabile alla volontà (teoria del bilanciamento / prima formula di Frank)." },
    ],
    aperta: { q: "Il candidato distingua il dolo eventuale dalla colpa cosciente, dando conto della sentenza ThyssenKrupp.", traccia: "Il dolo eventuale ricorre quando l'agente si rappresenta l'evento come possibile e ne accetta il rischio, aderendovi. Nella colpa cosciente (art. 61 n. 3) l'evento è pure previsto, ma l'agente confida di poterlo evitare. Discrimine: l'atteggiamento volitivo (accettazione vs fiducia). Le SU ThyssenKrupp (38343/2014) hanno affinato la formula dell'accettazione del rischio con la teoria del bilanciamento (prima formula di Frank): dolo eventuale se, soppesati fine e prezzo, l'agente si è determinato ad agire comunque; la Corte elenca inoltre indicatori del dolo da valutare globalmente. La qualificazione incide sul titolo di responsabilità (doloso o colposo).", fonte: "Cap. 5 — §4.2 (SU 38343/2014)" },
    consigliate: ["comparativa", "esempi", "mcq", "aperta", "flashcards"],
    media: { podcast: { title: "Dolo eventuale e colpa cosciente", chapters: [["Il problema del confine", 0], ["Accettazione del rischio", 260], ["ThyssenKrupp e il bilanciamento", 520], ["Gli indicatori del dolo", 900]] }, video: { title: "Il caso ThyssenKrupp", chapters: [["I fatti", 0], ["La prima formula di Frank", 280], ["Gli indicatori", 560]] }, mappa: true },
  },
];

// Ordine pedagogico: per capitolo (le core + i set A/B/C dei subagenti).
export const PARTE_GENERALE = [...GEN_CORE, ...GEN_A, ...GEN_B, ...GEN_C].sort((a, b) => a.chapter - b.chapter);
