/* =========================================================================
   N+ — DATI E CONTENUTI (tutti pre-caricati, nessuna API)
   FONTE CONTENUTI DI STUDIO: "SuperCompendio di Diritto penale — Parte generale"
   (NLD / Neldiritto Editore), trascritto e riadattato per la demo.
   FONTE TAGLIO DOMANDE D'ESAME (ricerca): raccolte di domande d'esame di
   Diritto penale parte generale su Studocu / Docsity / LexIuris
   (UniBo, UniTrento, esame orale avvocato): ricorrono dolo eventuale vs
   colpa cosciente (caso ThyssenKrupp), nesso di causalità (sent. Franzese),
   tentativo, cause di giustificazione, imputabilità.
   CONTESTO ESAME DI BARI: insegnamento di Diritto penale, Dipartimento di
   Giurisprudenza, Università degli Studi di Bari "Aldo Moro" (storica cattedra
   già tenuta da Aldo Moro; ordinario di Diritto penale prof. Vito Mormando).
   Nessuna frase è attribuita a persone reali.
   ========================================================================= */
window.NPLUS = window.NPLUS || {};

NPLUS.meta = {
  oggi: "2026-06-23",
  esameDefault: "2026-09-14",
  materia: "Diritto penale",
  ateneo: 'Università degli Studi di Bari "Aldo Moro"'
};

/* --------------------------------------------------------------------- *
 *  ARGOMENTI PRINCIPALI (flusso completo: spiegazione → extra → esercizi)
 * --------------------------------------------------------------------- */
NPLUS.topics = [
  /* ============================ 1. IL REATO ========================== */
  {
    id: "reato", n: 1, icon: "scale",
    title: "Il reato e le sue partizioni",
    subtitle: "Nozione, delitti e contravvenzioni, bipartizione e tripartizione",
    cap: "Cap. 3 — Il reato",
    assunti: [
      "Il reato è un fatto umano antigiuridico cui l'ordinamento ricollega una pena.",
      "I reati si distinguono in delitti e contravvenzioni secondo il criterio formale della pena (art. 39 c.p.).",
      "La struttura del reato è ricostruita dalle teorie della bipartizione e della tripartizione."
    ],
    spiegazione: `
      <p>Il <strong>reato</strong> è il fatto umano, antigiuridico, al quale l'ordinamento ricollega come conseguenza una <strong>pena</strong>. È la categoria centrale del diritto penale, retta dal principio di legalità (art. 25, co. 2, Cost.): può essere punito solo il fatto espressamente previsto come reato dalla legge entrata in vigore prima della sua commissione.</p>
      <h4>Delitti e contravvenzioni</h4>
      <p>In mancanza di una definizione sostanziale, il criterio distintivo è <em>formale</em> (art. 39 c.p.) e guarda alla pena principale comminata (art. 17 c.p.):</p>
      <ul>
        <li>i <strong>delitti</strong> sono puniti con ergastolo, reclusione o multa;</li>
        <li>le <strong>contravvenzioni</strong> sono punite con arresto o ammenda.</li>
      </ul>
      <p>La distinzione ha ricadute pratiche rilevanti: l'elemento soggettivo (le contravvenzioni sono punibili sia a titolo di dolo sia di colpa; i delitti, di regola, solo a titolo di dolo, salvo i casi di colpa espressamente previsti — art. 42, co. 2); il <em>tentativo</em>, configurabile solo per i delitti (art. 56); la <em>recidiva</em> (art. 99); l'<em>oblazione</em> (artt. 162 e 162-bis), riservata alle contravvenzioni; i termini di prescrizione.</p>
      <h4>La struttura del reato</h4>
      <p>La <strong>teoria della bipartizione</strong> scompone il reato in un elemento oggettivo (il fatto, la tipicità, comprensivo delle cause di giustificazione concepite come elementi negativi del fatto) e in un elemento soggettivo (la colpevolezza).</p>
      <p>La <strong>teoria della tripartizione</strong> distingue invece tre elementi: il <em>fatto tipico</em>, l'<em>antigiuridicità</em> (assenza di cause di giustificazione) e la <em>colpevolezza</em>. La differenza decisiva attiene alla collocazione delle scriminanti: per la tripartizione esse operano in un elemento intermedio — l'antigiuridicità obiettiva — fra fatto e colpevolezza.</p>
      <p>Vi sono poi <strong>concezioni quadripartite</strong> che aggiungono un elemento ulteriore, individuato nella <em>punibilità</em> (Marinucci), intesa come insieme delle condizioni che fondano o escludono l'opportunità di irrogare la pena.</p>`,
    puntiChiave: [
      "Reato = fatto umano antigiuridico + pena. Categoria retta dal principio di legalità (art. 25 co. 2 Cost.).",
      "Criterio distintivo delitti/contravvenzioni: FORMALE, basato sulla pena (artt. 17 e 39 c.p.).",
      "Delitti: ergastolo, reclusione, multa. Contravvenzioni: arresto, ammenda.",
      "Il tentativo (art. 56) è configurabile solo per i delitti. ← punto su cui cade spesso l'errore d'esame",
      "Bipartizione: scriminanti come elementi negativi del fatto. Tripartizione: antigiuridicità come elemento autonomo."
    ],
    esempio: {
      titolo: "Delitto o contravvenzione?",
      testo: "Tizio guida in stato di ebbrezza (art. 186 C.d.S.): è una <strong>contravvenzione</strong>, punita con arresto e ammenda, ed è perciò punibile anche se commessa per semplice colpa. Se invece, alla guida ubriaco, investe e uccide un pedone, risponde del <strong>delitto</strong> di omicidio stradale (art. 589-bis), punito con la reclusione: qui occorre verificare la colpa e, trattandosi di delitto, sarebbero configurabili recidiva e — per i delitti dolosi — il tentativo. Lo stesso episodio illumina la differenza pratica fra le due categorie."
    },
    podcast: { title: "Reato, delitto, contravvenzione", sub: "SuperCompendio · Cap. 3 — Il reato",
      chapters: [ ["Nozione di reato e principio di legalità","0:00"], ["Il criterio formale: artt. 17 e 39 c.p.","4:10"], ["Ricadute pratiche della distinzione","8:30"], ["Bipartizione e tripartizione","12:05"] ] },
    video: { title: "La struttura del reato", sub: "Video lezione · collegata al Cap. 3",
      chapters: [ ["Le partizioni del reato","0:00"], ["Reati comuni e reati propri","3:20"], ["Bipartizione vs tripartizione","6:40"] ] },
    mappa: "reato",
    flashcards: [
      ["Qual è il criterio che distingue delitti e contravvenzioni?", "Criterio formale (art. 39 c.p.): si guarda alla pena principale comminata (art. 17). Delitti → ergastolo/reclusione/multa; contravvenzioni → arresto/ammenda."],
      ["Il tentativo è configurabile per le contravvenzioni?", "No. L'art. 56 c.p. configura il tentativo solo per i delitti."],
      ["Differenza chiave fra bipartizione e tripartizione?", "La collocazione delle cause di giustificazione: elementi negativi del fatto (bipartizione) oppure elemento autonomo dell'antigiuridicità (tripartizione)."]
    ],
    quiz: [
      { q: "Secondo il codice penale italiano, il criterio per distinguere i delitti dalle contravvenzioni è:",
        opts: ["Sostanziale, fondato sulla gravità dell'offesa","Formale, fondato sulla specie di pena comminata","Soggettivo, fondato sul dolo o sulla colpa","Processuale, fondato sul rito applicabile"],
        correct: 1,
        why: "L'art. 39 c.p. accoglie un criterio formale: la distinzione dipende dalla pena principale prevista (art. 17). Delitti puniti con ergastolo, reclusione o multa; contravvenzioni con arresto o ammenda. Non rileva in sé la gravità dell'offesa né l'elemento soggettivo.",
        fonte: "SuperCompendio, Cap. 3 — §1 (artt. 17 e 39 c.p.)" },
      { q: "Quale tra questi istituti è configurabile SOLO per i delitti e non per le contravvenzioni?",
        opts: ["L'oblazione","La sospensione condizionale della pena","Il tentativo","La prescrizione"],
        correct: 2,
        why: "Il tentativo, ex art. 56 c.p., è strutturalmente riferito ai soli delitti. L'oblazione (artt. 162 e 162-bis) è invece propria delle contravvenzioni; sospensione condizionale e prescrizione operano per entrambe le categorie, con criteri differenziati.",
        fonte: "SuperCompendio, Cap. 3 — §1 (art. 56 c.p.)" },
      { q: "In tema di elemento soggettivo, le contravvenzioni:",
        opts: ["Sono punibili solo se dolose","Sono punibili indifferentemente a titolo di dolo o di colpa","Non richiedono alcun elemento soggettivo","Sono punibili solo a titolo di colpa"],
        correct: 1,
        why: "Ai sensi dell'art. 42, co. 4, c.p., nelle contravvenzioni ciascuno risponde della propria condotta sia dolosa sia colposa. I delitti, invece, sono di regola punibili solo a titolo di dolo, salvi i casi di colpa o preterintenzione espressamente previsti (art. 42, co. 2).",
        fonte: "SuperCompendio, Cap. 5 — §5 (art. 42 c.p.)" },
      { q: "La teoria della tripartizione del reato si distingue da quella bipartita soprattutto perché:",
        opts: ["Nega rilevanza alla colpevolezza","Colloca le cause di giustificazione in un autonomo elemento, l'antigiuridicità","Considera la punibilità elemento essenziale","Esclude la tipicità dal fatto"],
        correct: 1,
        why: "Nella tripartizione l'antigiuridicità è elemento intermedio fra fatto e colpevolezza e consiste nell'assenza di scriminanti. Nella bipartizione, invece, le cause di giustificazione sono elementi negativi del fatto. L'inserimento autonomo della punibilità appartiene alle concezioni quadripartite.",
        fonte: "SuperCompendio, Cap. 3 — §6.1" },
      { q: "Il reato proprio si caratterizza per il fatto che:",
        opts: ["Richiede la condotta di più persone","Il soggetto attivo deve possedere una particolare qualifica","È sempre punito a titolo di colpa","Si consuma solo nel territorio dello Stato"],
        correct: 1,
        why: "Il reato proprio è quello in cui il soggetto attivo è individuato mediante una particolare qualifica naturalistica o giuridica (es. il pubblico ufficiale nel peculato). Il reato che richiede la condotta di più persone è invece il reato plurisoggettivo (a concorso necessario).",
        fonte: "SuperCompendio, Cap. 3 — §2" },
      { q: "I delitti sono puniti, quanto alla pena principale, con:",
        opts: ["Arresto o ammenda","Ergastolo, reclusione o multa","Solo la multa","Sanzioni amministrative"],
        correct: 1,
        why: "L'art. 17 c.p. riserva ai delitti l'ergastolo, la reclusione e la multa; alle contravvenzioni l'arresto e l'ammenda. È il criterio formale che fonda la distinzione ex art. 39.",
        fonte: "SuperCompendio, Cap. 3 — §1 (art. 17 c.p.)" }
    ],
    veroFalso: [
      { aff: "Il tentativo è configurabile sia per i delitti sia per le contravvenzioni.", vero: false,
        traccia: "Falso. L'art. 56 c.p. riferisce il tentativo ai soli delitti. Per le contravvenzioni non è prevista la fattispecie tentata, in coerenza con la loro minore gravità e con la struttura, di regola, di mera condotta." },
      { aff: "La distinzione tra delitti e contravvenzioni si fonda su un criterio formale.", vero: true,
        traccia: "Vero. L'art. 39 c.p. distingue le due categorie in base alla specie di pena principale comminata (art. 17): non rileva, di per sé, il diverso disvalore sostanziale, ma il dato formale della pena." }
    ],
    domandaAperta: {
      q: "Il candidato illustri la nozione di reato e i criteri di distinzione tra delitti e contravvenzioni, soffermandosi sulle principali ricadute pratiche della distinzione.",
      traccia: "Il reato è il fatto umano antigiuridico cui l'ordinamento ricollega una pena, nel rispetto del principio di legalità (art. 25 co. 2 Cost.). La distinzione tra delitti e contravvenzioni riposa sul criterio formale (art. 39 c.p.), ancorato alla specie di pena principale (art. 17): ergastolo, reclusione e multa per i delitti; arresto e ammenda per le contravvenzioni. Le ricadute pratiche investono: l'elemento soggettivo (contravvenzioni punibili indifferentemente a dolo o colpa ex art. 42 co. 4; delitti di regola solo dolosi, salvo i casi di colpa espressamente previsti); il tentativo (solo delitti, art. 56); la recidiva (art. 99); l'oblazione (artt. 162-162 bis, solo contravvenzioni); i termini di prescrizione. Va infine richiamata la struttura del reato secondo le teorie bipartita e tripartita, che divergono sulla collocazione sistematica delle cause di giustificazione.",
      fonte: "SuperCompendio, Cap. 3 — §§1-6"
    },
    esaminatore: {
      q: "Mi spieghi la differenza tra reato proprio e reato comune, facendo un esempio per ciascuno.",
      valutazione: { voci: [["Padronanza dei contenuti","8.0"],["Uso delle fonti","7.5"],["Chiarezza espositiva","8.0"],["Proprietà di linguaggio","7.5"]],
        commento: "Risposta corretta nell'impianto. La distinzione tra qualifica naturalistica e giuridica è colta. Si poteva approfondire la sotto-classificazione dei reati propri (esclusivi, semiesclusivi, non esclusivi), con l'esempio del peculato che degrada ad appropriazione indebita se commesso dal non qualificato." }
    },
    richiamoLibero: {
      prompt: "A libro chiuso: scrivi tutto ciò che ricordi sulla distinzione tra delitti e contravvenzioni e sulle sue conseguenze.",
      attesi: ["Criterio formale (artt. 17 e 39)","Pene: ergastolo/reclusione/multa vs arresto/ammenda","Elemento soggettivo (art. 42)","Tentativo solo per i delitti (art. 56)","Oblazione solo per le contravvenzioni"],
      fonte: "SuperCompendio, Cap. 3 — §1"
    },
    feynman: { prompt: "Spiega a un amico che non studia legge la differenza tra un 'delitto' e una 'contravvenzione', come se gliela raccontassi al bar.",
      riscontro: "Una spiegazione efficace dovrebbe rendere l'idea che la legge mette i reati in due 'cassetti' a seconda di quanto sono gravi e di che punizione prevedono: nel cassetto pesante (delitti) ci sono cose come furto o omicidio, punite con il carcere (reclusione); nel cassetto leggero (contravvenzioni) ci sono violazioni minori, punite con l'arresto o con una multa (ammenda). Attenzione a non confondere 'multa' (delitti) e 'ammenda' (contravvenzioni)." },
    tools: ["multipla","verofalso","aperta","esaminatore","esempio","richiamo","feynman"]
  },

  /* ========================= 2. CAUSALITÀ ============================ */
  {
    id: "causalita", n: 2, icon: "link",
    title: "Il rapporto di causalità",
    subtitle: "Condicio sine qua non, art. 41 c.p., la sentenza Franzese",
    cap: "Cap. 4 — L'elemento oggettivo",
    assunti: [
      "Il nesso causale lega la condotta all'evento e presidia la responsabilità per fatto proprio (art. 27 Cost.).",
      "Vige la teoria condizionalistica (condicio sine qua non), corretta dal giudizio controfattuale.",
      "La sentenza Franzese (S.U. 2002) richiede la certezza processuale fondata su probabilità logica."
    ],
    spiegazione: `
      <p>Il <strong>rapporto di causalità</strong> è il legame eziologico tra la condotta e l'evento lesivo. La sua sussistenza garantisce il rispetto del principio di personalità della responsabilità penale (art. 27, co. 1, Cost.). L'art. 40, co. 1, c.p. stabilisce che nessuno può essere punito se l'evento dannoso o pericoloso non è <em>conseguenza</em> della sua azione od omissione.</p>
      <h4>La teoria condizionalistica</h4>
      <p>Prevale la <strong>teoria della <em>condicio sine qua non</em></strong> (o dell'equivalenza delle condizioni): è causa ogni antecedente senza il quale l'evento non si sarebbe verificato. L'accertamento avviene mediante il <strong>giudizio controfattuale</strong>: si elimina mentalmente la condotta e si verifica se l'evento sarebbe ugualmente accaduto. Tutte le condizioni necessarie sono fra loro equivalenti.</p>
      <h4>Le leggi scientifiche di copertura</h4>
      <p>Il giudizio controfattuale presuppone una <strong>legge scientifica di copertura</strong>, universale o statistica, che colleghi quel tipo di condotta a quel tipo di evento. Le leggi universali offrono certezza prossima al 100%; quelle statistiche indicano una probabilità (80%, 50%, 30%…).</p>
      <h4>La sentenza Franzese (S.U. 10 luglio 2002, n. 30328)</h4>
      <p>Le Sezioni Unite hanno chiarito che non basta un'alta probabilità statistica: occorre un ulteriore <em>accertamento logico</em>, volto a escludere i decorsi causali alternativi. Il nesso si ritiene provato solo in presenza di <strong>elevata probabilità logica</strong> (o credibilità razionale) che la condotta sia stata causa dell'evento. Così, una probabilità statistica bassa può bastare se nel caso concreto si escludono altre cause; e una alta può non bastare se emerge una causa diversa.</p>
      <h4>Il concorso di cause (art. 41)</h4>
      <p>Il concorso di cause preesistenti, simultanee o sopravvenute, anche indipendenti dalla condotta, non esclude il nesso (co. 1 e 3). Fanno eccezione le <strong>cause sopravvenute da sole sufficienti a determinare l'evento</strong> (co. 2), che interrompono il nesso causale.</p>`,
    puntiChiave: [
      "Art. 40 c.p.: l'evento dev'essere conseguenza della condotta. Fondamento dell'art. 27 Cost.",
      "Teoria prevalente: condicio sine qua non + giudizio controfattuale (eliminazione mentale).",
      "Franzese (S.U. 2002): serve la CERTEZZA PROCESSUALE = probabilità logica, non solo statistica.",
      "Art. 41 co. 2: le cause sopravvenute DA SOLE sufficienti interrompono il nesso. ← punto critico d'esame",
      "Causalità omissiva (art. 40 cpv.): giudizio prognostico — si aggiunge mentalmente l'azione doverosa omessa."
    ],
    esempio: {
      titolo: "Il giudizio controfattuale in concreto",
      testo: "Tizio accoltella Caio, che muore. Per accertare il nesso, il giudice elimina mentalmente la coltellata: se senza di essa Caio sarebbe vissuto, la condotta è causa della morte. Se però Caio, ferito in modo lieve, muore perché l'ambulanza che lo trasporta è travolta da un treno, quel sinistro è una <strong>causa sopravvenuta da sola sufficiente</strong> (art. 41, co. 2): interrompe il nesso e Tizio risponderà solo di lesioni, non di omicidio."
    },
    podcast: { title: "Il nesso di causalità", sub: "SuperCompendio · Cap. 4 — §1.3",
      chapters: [ ["Art. 40 e teoria condizionalistica","0:00"], ["Il giudizio controfattuale","5:20"], ["Leggi universali e statistiche","9:40"], ["La sentenza Franzese","14:10"], ["Concorso di cause (art. 41)","19:00"] ] },
    video: { title: "Causalità e probabilità logica", sub: "Video lezione · collegata al Cap. 4",
      chapters: [ ["Condicio sine qua non","0:00"], ["Il caso Franzese","4:30"], ["Causalità omissiva","9:10"] ] },
    mappa: "causalita",
    flashcards: [
      ["In cosa consiste il giudizio controfattuale?", "Nell'eliminazione mentale della condotta: se, eliminandola, l'evento non si sarebbe verificato, la condotta ne è causa (condicio sine qua non)."],
      ["Cosa ha stabilito la sentenza Franzese (S.U. 2002)?", "Che il nesso causale richiede la certezza processuale, raggiungibile anche con leggi statistiche purché vi sia elevata probabilità logica e siano esclusi i decorsi causali alternativi."],
      ["Quando le cause sopravvenute escludono il nesso (art. 41 co. 2)?", "Quando sono da sole sufficienti a determinare l'evento: in tal caso interrompono il rapporto di causalità."]
    ],
    quiz: [
      { q: "Secondo la teoria condizionalistica, è causa dell'evento:",
        opts: ["Solo l'antecedente più prossimo all'evento","Ogni antecedente senza il quale l'evento non si sarebbe verificato","Solo la condotta dolosa","La causa statisticamente più probabile"],
        correct: 1,
        why: "La teoria della condicio sine qua non considera causa ogni condizione necessaria: eliminandola mentalmente, l'evento non si sarebbe prodotto. Tutte le condizioni necessarie sono equivalenti. Non vi è gerarchia tra causa prossima e remota.",
        fonte: "SuperCompendio, Cap. 4 — §1.3" },
      { q: "La sentenza Franzese (S.U. 2002) ha affermato che il nesso causale è provato quando:",
        opts: ["La probabilità statistica supera il 50%","Vi è certezza processuale fondata su elevata probabilità logica","La legge di copertura è universale","L'evento era astrattamente prevedibile"],
        correct: 1,
        why: "Le Sezioni Unite hanno superato il criterio meramente statistico: occorre la certezza processuale, raggiungibile anche con leggi statistiche purché vi sia alta probabilità logica (credibilità razionale) e siano esclusi i decorsi causali alternativi nel caso concreto.",
        fonte: "SuperCompendio, Cap. 4 — §1.3 (Cass. S.U. n. 30328/2002)" },
      { q: "Ai sensi dell'art. 41, co. 2, c.p., escludono il rapporto di causalità:",
        opts: ["Tutte le cause sopravvenute","Le cause preesistenti indipendenti dalla condotta","Le cause sopravvenute da sole sufficienti a determinare l'evento","Le concause umane colpose"],
        correct: 2,
        why: "Solo le cause sopravvenute da sole sufficienti a determinare l'evento interrompono il nesso (co. 2). Il concorso di cause preesistenti, simultanee o sopravvenute, anche indipendenti dalla condotta, non esclude di per sé la causalità (co. 1 e 3).",
        fonte: "SuperCompendio, Cap. 4 — §1.3 (art. 41 c.p.)" },
      { q: "Nella causalità omissiva (reati omissivi impropri, art. 40 cpv.) l'accertamento:",
        opts: ["È identico a quello della causalità attiva","Si fonda su un giudizio prognostico: si aggiunge mentalmente l'azione doverosa omessa","Non richiede leggi scientifiche di copertura","Prescinde dalla certezza processuale"],
        correct: 1,
        why: "Nell'omissione il giudice opera una sostituzione mentale: aggiunge l'azione doverosa omessa e verifica se l'evento si sarebbe ugualmente prodotto (giudizio prognostico/ipotetico). Franzese ha affermato che il grado di certezza richiesto è il medesimo della causalità attiva.",
        fonte: "SuperCompendio, Cap. 4 — §1.3.1" },
      { q: "Il fondamento costituzionale dell'esigenza di accertare il nesso causale si rinviene:",
        opts: ["Nell'art. 25 co. 2 Cost.","Nell'art. 27 co. 1 Cost. (personalità della responsabilità)","Nell'art. 3 Cost.","Nell'art. 13 Cost."],
        correct: 1,
        why: "La necessità del nesso causale presidia il principio di personalità della responsabilità penale (art. 27, co. 1, Cost.): senza legame eziologico tra condotta ed evento si risponderebbe per fatto non proprio.",
        fonte: "SuperCompendio, Cap. 4 — §1.3" },
      { q: "Una probabilità statistica BASSA, secondo Franzese, può essere sufficiente a fondare il nesso causale quando:",
        opts: ["Mai: serve sempre una percentuale elevata","Risulti nel caso concreto l'insussistenza di altre possibili cause dell'evento","Lo richieda la difesa","Si tratti di reato colposo"],
        correct: 1,
        why: "Franzese ha chiarito che il coefficiente statistico va integrato dalla probabilità logica: una percentuale bassa può bastare se nel caso concreto si escludono i decorsi causali alternativi; viceversa, una alta può non bastare se emerge una causa diversa.",
        fonte: "SuperCompendio, Cap. 4 — §1.3" }
    ],
    veroFalso: [
      { aff: "Le cause preesistenti indipendenti dalla condotta dell'agente escludono sempre il rapporto di causalità.", vero: false,
        traccia: "Falso. Ai sensi dell'art. 41, co. 1 e 3, il concorso di cause preesistenti, simultanee o sopravvenute, anche indipendenti dalla condotta o costituite dal fatto illecito altrui, NON esclude il nesso. Solo le cause sopravvenute da sole sufficienti (co. 2) lo interrompono." },
      { aff: "Secondo Franzese, una elevata probabilità statistica è sempre sufficiente a provare il nesso causale.", vero: false,
        traccia: "Falso. La probabilità statistica va sempre integrata dalla probabilità logica: occorre escludere i decorsi causali alternativi nel caso concreto. Una alta percentuale può non bastare se risulta che l'evento è stato cagionato da una diversa condizione." }
    ],
    domandaAperta: {
      q: "Il candidato esponga la teoria della causalità accolta dal codice penale e illustri il contributo della giurisprudenza delle Sezioni Unite (sentenza Franzese).",
      traccia: "Il codice (artt. 40-41) accoglie la teoria condizionalistica della condicio sine qua non: è causa ogni antecedente necessario, accertato mediante giudizio controfattuale di eliminazione mentale. Tale giudizio presuppone una legge scientifica di copertura, universale o statistica. La sentenza Franzese (S.U. 30328/2002) ha precisato che non basta un coefficiente statistico elevato: occorre la certezza processuale, da raggiungere integrando la probabilità statistica con la probabilità logica (credibilità razionale), previa esclusione dei decorsi causali alternativi. Il principio vale anche per la causalità omissiva (art. 40 cpv.), accertata con giudizio prognostico sull'efficacia impeditiva dell'azione doverosa omessa. L'art. 41, co. 2, riconosce efficacia interruttiva alle sole cause sopravvenute da sole sufficienti a determinare l'evento.",
      fonte: "SuperCompendio, Cap. 4 — §1.3"
    },
    esaminatore: {
      q: "Mi illustri come si accerta il nesso di causalità nei reati omissivi impropri e quale grado di certezza è richiesto.",
      valutazione: { voci: [["Padronanza dei contenuti","8.5"],["Uso delle fonti","8.0"],["Chiarezza espositiva","7.5"],["Proprietà di linguaggio","8.0"]],
        commento: "Buona ricostruzione del giudizio prognostico e della sostituzione mentale dell'azione doverosa. Manca solo il richiamo espresso al fatto che Franzese equipara il grado di certezza (processuale) richiesto per causalità attiva e omissiva, escludendo standard probatori differenziati." }
    },
    richiamoLibero: {
      prompt: "A libro chiuso: scrivi quanto ricordi sull'accertamento del nesso causale e sul ruolo della sentenza Franzese.",
      attesi: ["Condicio sine qua non","Giudizio controfattuale","Leggi di copertura universali/statistiche","Franzese: probabilità logica","Art. 41 co. 2: cause sopravvenute"],
      fonte: "SuperCompendio, Cap. 4 — §1.3"
    },
    feynman: { prompt: "Spiega con parole semplici come si fa a dire che 'quella condotta ha causato quell'evento', a chi non ha mai studiato diritto.",
      riscontro: "Una buona spiegazione usa l'idea del 'togliere il tassello': immagina la catena di fatti come una fila di tessere del domino; togli mentalmente la mossa della persona e guardi se le tessere sarebbero cadute lo stesso. Se senza quella mossa il danno non ci sarebbe stato, allora quella mossa è la causa. Va aggiunto che ai giudici non basta una statistica: devono essere ragionevolmente sicuri, escludendo altre spiegazioni del caso concreto." },
    tools: ["multipla","verofalso","aperta","esaminatore","richiamo","feynman"]
  },

  /* ====================== 3. CAUSE DI GIUSTIFICAZIONE =============== */
  {
    id: "scriminanti", n: 3, icon: "shield",
    title: "Le cause di giustificazione",
    subtitle: "Scriminanti: artt. 50-54 c.p., eccesso colposo e putatività",
    cap: "Cap. 4 — L'elemento oggettivo",
    assunti: [
      "Le scriminanti rendono lecito in tutto l'ordinamento un fatto altrimenti tipico.",
      "Operano oggettivamente: rilevano anche se non conosciute dall'agente (art. 59 co. 1).",
      "L'eccesso colposo (art. 55) e la putatività (art. 59 co. 4) ne completano la disciplina."
    ],
    spiegazione: `
      <p>Le <strong>cause di giustificazione</strong> (o scriminanti) sono situazioni in presenza delle quali un fatto, che altrimenti costituirebbe reato, diviene <em>lecito</em> in tutto l'ordinamento: l'autore va esente da ogni responsabilità (penale, civile, amministrativa, disciplinare). Riposano sul principio di non contraddizione: l'ordinamento non può, al tempo stesso, vietare e consentire il medesimo fatto.</p>
      <p>Il giudizio di liceità ha <strong>carattere oggettivo</strong>: l'art. 59, co. 1, c.p. dispone che le circostanze di esclusione della pena sono valutate a favore dell'agente <em>anche se da lui non conosciute o per errore ritenute inesistenti</em>.</p>
      <h4>Il catalogo (artt. 50-54)</h4>
      <ul>
        <li><strong>Consenso dell'avente diritto</strong> (art. 50): chi lede o pone in pericolo un diritto col consenso di chi può validamente disporne. Necessita di un diritto disponibile; il consenso dev'essere personale, attuale, libero, consapevole, specifico.</li>
        <li><strong>Esercizio del diritto</strong> (art. 51): rende lecito il fatto compiuto nell'esercizio di un diritto (es. diritto di cronaca, nei limiti di verità, pertinenza e continenza).</li>
        <li><strong>Adempimento di un dovere</strong> (art. 51): imposto da una norma giuridica o da un ordine legittimo dell'Autorità.</li>
        <li><strong>Legittima difesa</strong> (art. 52): reazione necessaria e proporzionata contro il pericolo attuale di un'offesa ingiusta a un diritto proprio o altrui. La l. 36/2019 ha introdotto presunzioni per la difesa domiciliare.</li>
        <li><strong>Uso legittimo delle armi</strong> (art. 53): scriminante propria del pubblico ufficiale, sussidiaria rispetto alle altre.</li>
        <li><strong>Stato di necessità</strong> (art. 54): costrizione a salvare sé o altri dal pericolo attuale di un danno grave alla persona, non volontariamente causato né altrimenti evitabile, con fatto proporzionato.</li>
      </ul>
      <h4>Eccesso colposo e scriminante putativa</h4>
      <p>Si ha <strong>eccesso colposo</strong> (art. 55) quando l'agente, pur in presenza di una scriminante, ne supera colposamente i limiti: risponde a titolo di colpa, se il fatto è previsto come delitto colposo. Si ha <strong>scriminante putativa</strong> (art. 59, co. 4) quando l'agente ritiene erroneamente esistente una causa di giustificazione: l'errore esclude il dolo, ma residua la responsabilità colposa se l'errore è determinato da colpa.</p>`,
    puntiChiave: [
      "Le scriminanti rendono il fatto LECITO in tutto l'ordinamento (non solo non punibile).",
      "Rilevanza OGGETTIVA: operano anche se non conosciute (art. 59 co. 1).",
      "Legittima difesa (art. 52): pericolo attuale, offesa ingiusta, reazione necessaria e proporzionata.",
      "Stato di necessità (art. 54): danno alla persona, azione verso un terzo innocente; la fuga è doverosa.",
      "Differenza LD/SdN: la legittima difesa colpisce l'aggressore; lo stato di necessità un terzo estraneo. ← molto chiesto",
      "Eccesso colposo (art. 55) → colpa; scriminante putativa (art. 59 co. 4) → esclude il dolo, residua la colpa."
    ],
    esempio: {
      titolo: "Legittima difesa o stato di necessità?",
      testo: "Se Tizio, aggredito da Caio con un coltello, lo colpisce per fermarlo, agisce in <strong>legittima difesa</strong> (art. 52): la reazione è rivolta contro l'aggressore. Se invece Tizio, per sfuggire all'aggressione, sfonda la porta di un vicino estraneo e si rifugia in casa sua, danneggiando la proprietà, opera lo <strong>stato di necessità</strong> (art. 54): il fatto colpisce un terzo incolpevole, e per questo la legge è più rigorosa — la fuga è doverosa e residua l'indennizzo ex art. 2045 c.c."
    },
    podcast: { title: "Le scriminanti", sub: "SuperCompendio · Cap. 4 — §2",
      chapters: [ ["Natura e rilevanza oggettiva","0:00"], ["Consenso ed esercizio del diritto","4:40"], ["Legittima difesa","9:30"], ["Stato di necessità","15:10"], ["Eccesso colposo e putatività","19:40"] ] },
    video: { title: "Legittima difesa e stato di necessità", sub: "Video lezione · collegata al Cap. 4",
      chapters: [ ["I presupposti della legittima difesa","0:00"], ["La difesa domiciliare (l. 36/2019)","5:00"], ["Lo stato di necessità a confronto","9:20"] ] },
    mappa: "scriminanti",
    flashcards: [
      ["Quali sono le cinque cause di giustificazione codificate?", "Consenso dell'avente diritto (art. 50), esercizio del diritto e adempimento del dovere (art. 51), legittima difesa (art. 52), uso legittimo delle armi (art. 53), stato di necessità (art. 54)."],
      ["Perché le scriminanti operano oggettivamente?", "Perché l'art. 59 co. 1 c.p. le valuta a favore dell'agente anche se non conosciute o ritenute per errore inesistenti: il giudizio di liceità prescinde dall'atteggiamento psichico."],
      ["Differenza tra eccesso colposo e scriminante putativa?", "L'eccesso colposo (art. 55) ricorre quando si superano colposamente i limiti di una scriminante esistente; la putativa (art. 59 co. 4) quando si crede erroneamente esistente una scriminante in realtà assente."]
    ],
    quiz: [
      { q: "Le cause di giustificazione, una volta integrate, rendono il fatto:",
        opts: ["Solo non punibile penalmente","Lecito in tutto l'ordinamento giuridico","Scusabile ma illecito","Punibile a titolo di colpa"],
        correct: 1,
        why: "La scriminante elimina l'antigiuridicità: il fatto è lecito per l'intero ordinamento, con esenzione da ogni responsabilità (penale, civile, amministrativa, disciplinare). Si distingue così dalle scusanti, che lasciano illecito il fatto escludendo la sola colpevolezza.",
        fonte: "SuperCompendio, Cap. 4 — §2" },
      { q: "Ai sensi dell'art. 59, co. 1, c.p., le cause di giustificazione:",
        opts: ["Operano solo se conosciute dall'agente","Sono valutate a favore dell'agente anche se da lui non conosciute","Richiedono sempre il dolo","Vanno provate dall'imputato oltre ogni dubbio"],
        correct: 1,
        why: "La rilevanza è oggettiva: l'art. 59, co. 1, valuta le scriminanti a favore dell'agente anche se non conosciute o ritenute per errore inesistenti. Il giudizio di liceità prescinde dall'elemento psicologico.",
        fonte: "SuperCompendio, Cap. 4 — §2 (art. 59 c.p.)" },
      { q: "Nella legittima difesa (art. 52), la reazione deve essere:",
        opts: ["Necessaria e proporzionata all'offesa","Sempre cruenta","Preventiva rispetto al pericolo","Proporzionata al solo valore patrimoniale"],
        correct: 0,
        why: "L'art. 52 richiede che la difesa sia necessaria (il pericolo non eliminabile altrimenti) e proporzionata all'offesa. Il pericolo dev'essere attuale: è esclusa la difesa preventiva. La possibilità di fuga, di regola, esclude la necessità.",
        fonte: "SuperCompendio, Cap. 4 — §2.4 (art. 52 c.p.)" },
      { q: "Differenza essenziale tra legittima difesa e stato di necessità:",
        opts: ["Nella legittima difesa l'azione colpisce un terzo estraneo","Nello stato di necessità la reazione è diretta contro un terzo incolpevole","Lo stato di necessità tutela solo i beni patrimoniali","La legittima difesa richiede sempre la fuga"],
        correct: 1,
        why: "Nella legittima difesa la reazione si dirige contro l'aggressore; nello stato di necessità (art. 54) l'azione colpisce un terzo estraneo alla situazione di pericolo. Per questo la fuga è sempre doverosa nello stato di necessità e residua l'indennizzo ex art. 2045 c.c.",
        fonte: "SuperCompendio, Cap. 4 — §2.6" },
      { q: "Lo stato di necessità (art. 54) può essere invocato per salvare:",
        opts: ["Qualsiasi diritto, anche patrimoniale","Solo dal pericolo attuale di un danno grave alla persona","Solo il diritto di proprietà","Solo interessi dello Stato"],
        correct: 1,
        why: "Lo stato di necessità presuppone il pericolo attuale di un danno grave alla persona (vita, integrità fisica, ma anche altri diritti personali), non volontariamente causato né altrimenti evitabile. La legittima difesa, invece, può tutelare anche diritti patrimoniali.",
        fonte: "SuperCompendio, Cap. 4 — §2.6 (art. 54 c.p.)" },
      { q: "Si ha scriminante putativa (art. 59, co. 4) quando l'agente:",
        opts: ["Supera colposamente i limiti di una scriminante reale","Ritiene erroneamente esistente una causa di giustificazione in realtà assente","Agisce con dolo eventuale","Ignora la legge penale"],
        correct: 1,
        why: "La scriminante putativa ricorre quando il soggetto crede per errore esistente una causa di giustificazione che non c'è: l'errore esclude il dolo, ma residua la responsabilità colposa se l'errore è determinato da colpa e il fatto è previsto come delitto colposo. Il superamento colposo dei limiti di una scriminante reale è invece l'eccesso colposo (art. 55).",
        fonte: "SuperCompendio, Cap. 4 — §2.8" },
      { q: "L'uso legittimo delle armi (art. 53) è scriminante:",
        opts: ["Invocabile da chiunque","Propria del pubblico ufficiale e sussidiaria","Applicabile solo ai militari in guerra","Coincidente con la legittima difesa"],
        correct: 1,
        why: "L'art. 53 riguarda il pubblico ufficiale (o chi legalmente richiesto gli presti assistenza) che usi le armi per adempiere un dovere d'ufficio. Opera in via sussidiaria, quando non ricorrano i presupposti della legittima difesa o dell'adempimento del dovere.",
        fonte: "SuperCompendio, Cap. 4 — §2.5 (art. 53 c.p.)" }
    ],
    veroFalso: [
      { aff: "Nello stato di necessità la possibilità di fuga, anche se pericolosa, è sempre doverosa.", vero: true,
        traccia: "Vero. A differenza della legittima difesa — in cui la reazione si rivolge contro l'aggressore — nello stato di necessità l'azione colpisce un terzo incolpevole: per questo l'azione è necessaria solo se è l'unica alternativa, e la fuga, anche se dannosa o pericolosa, resta doverosa." },
      { aff: "Le cause di giustificazione operano solo se l'agente era consapevole della loro esistenza.", vero: false,
        traccia: "Falso. L'art. 59, co. 1, c.p. sancisce la rilevanza oggettiva delle scriminanti: esse sono valutate a favore dell'agente anche se non conosciute o ritenute per errore inesistenti. Il giudizio di liceità è oggettivo." }
    ],
    domandaAperta: {
      q: "Il candidato tratti la legittima difesa, distinguendola dallo stato di necessità e indicando i presupposti di ciascuna scriminante.",
      traccia: "La legittima difesa (art. 52) scrimina la reazione necessaria e proporzionata contro il pericolo attuale di un'offesa ingiusta a un diritto proprio o altrui; la reazione si dirige contro l'aggressore. Presupposti: situazione aggressiva (pericolo attuale, offesa ingiusta non volontariamente causata) e reazione legittima (necessità e proporzione). La l. 36/2019 ha introdotto presunzioni per la difesa domiciliare. Lo stato di necessità (art. 54) presuppone il pericolo attuale di un danno grave alla persona, non volontariamente causato né altrimenti evitabile, con fatto proporzionato: qui l'azione colpisce un terzo estraneo, sicché la fuga è doverosa e residua l'indennizzo ex art. 2045 c.c. Entrambe operano oggettivamente (art. 59 co. 1) e tollerano l'eccesso colposo (art. 55) e la valutazione putativa (art. 59 co. 4).",
      fonte: "SuperCompendio, Cap. 4 — §§2.4-2.6"
    },
    esaminatore: {
      q: "Mi spieghi cosa accade quando l'agente supera colposamente i limiti della legittima difesa.",
      valutazione: { voci: [["Padronanza dei contenuti","8.0"],["Uso delle fonti","8.5"],["Chiarezza espositiva","8.0"],["Proprietà di linguaggio","7.5"]],
        commento: "Risposta solida sull'eccesso colposo (art. 55): correttamente richiamata la responsabilità a titolo di colpa quando il fatto è previsto come delitto colposo. Si poteva aggiungere la disciplina speciale dell'eccesso nella difesa domiciliare introdotta dalla l. 36/2019 (non punibilità in stato di grave turbamento)." }
    },
    richiamoLibero: {
      prompt: "A libro chiuso: scrivi tutte le cause di giustificazione che ricordi, con i relativi articoli.",
      attesi: ["Consenso avente diritto (art. 50)","Esercizio del diritto / adempimento del dovere (art. 51)","Legittima difesa (art. 52)","Uso legittimo delle armi (art. 53)","Stato di necessità (art. 54)"],
      fonte: "SuperCompendio, Cap. 4 — §2"
    },
    feynman: { prompt: "Spiega a un amico perché chi reagisce a un'aggressione per difendersi non viene punito, come se glielo raccontassi semplicemente.",
      riscontro: "Bene se rendi l'idea che la legge non può, allo stesso tempo, vietare di ferire e dire a una persona di lasciarsi aggredire: se qualcuno ti attacca e non hai altro modo per fermarlo, la legge 'giustifica' la tua reazione, a patto che sia davvero necessaria e non spropositata. Attento a precisare che vale contro chi ti aggredisce (legittima difesa); se invece per salvarti danneggi un estraneo, è un'altra figura (stato di necessità), più rigorosa." },
    tools: ["multipla","verofalso","aperta","esaminatore","esempio","richiamo","feynman"]
  }
];
