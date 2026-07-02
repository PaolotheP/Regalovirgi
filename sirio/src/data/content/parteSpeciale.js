/* =========================================================================
   SIRIO — CONTENUTI · PARTE SPECIALE del Diritto penale.
   Rielaborati dal SuperCompendio di Diritto penale (Neldiritto Editore).
   Ogni capitolo della parte speciale è un argomento navigabile.
   ========================================================================= */
import { SPEC_EXTRA } from "./specExtra.js";

const SPEC_CORE = [
  /* ===================== 14 · DELITTI CONTRO LA PERSONA ============= */
  {
    id: "ps-persona", part: "speciale", chapter: 14, chapterTitle: "I delitti contro la persona",
    title: "I delitti contro la persona", subtitle: "Omicidio, lesioni, delitti contro l'onore e la libertà",
    articoli: ["artt. 575-623-bis c.p."], pages: [140, 170], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo XII tutela la persona in tutte le sue dimensioni: la <strong>vita</strong> e l'<strong>incolumità individuale</strong> (omicidio doloso art. 575, preterintenzionale 584, colposo 589; lesioni 582-590), l'<strong>onore</strong> (ingiuria depenalizzata, diffamazione 595), la <strong>libertà</strong> personale, morale e sessuale (sequestro 605, violenza privata 610, violenza sessuale 609-bis).",
      approfondimenti: [
        { label: "Omicidio: le figure", body: "Omicidio doloso (575), aggravato (576-577), preterintenzionale (584, morte non voluta da percosse/lesioni), colposo (589, incluso l'omicidio stradale 589-bis). Il consenso non scrimina l'omicidio del consenziente (579)." },
        { label: "Le lesioni", body: "Lesioni personali dolose (582), con circostanze per la durata della malattia (gravi/gravissime, 583); lesioni colpose (590). Rileva la nozione di 'malattia' come processo patologico." },
      ],
      giurisprudenza: [
        { label: "Violenza sessuale", body: "L'art. 609-bis unifica violenza carnale e atti di libidine nella nozione di 'atti sessuali'; il consenso dev'essere attuale e persistere per tutta la condotta." },
      ],
      eccezioni: [],
    },
    sintesi: [
      "Titolo XII: vita e incolumità, onore, libertà personale/morale/sessuale.",
      "Omicidio: doloso (575), preterintenzionale (584), colposo (589) e stradale (589-bis).",
      "Lesioni: dolose (582-583) e colpose (590); nozione di 'malattia'.",
      "Diffamazione (595) tutela l'onore; l'ingiuria è stata depenalizzata.",
      "Violenza sessuale (609-bis): nozione unitaria di 'atti sessuali'.",
    ],
    esempi: [
      { titolo: "Omicidio o preterintenzionale?", testo: "Chi spara per uccidere risponde di omicidio doloso (575). Chi dà un pugno per ferire e, per la caduta, causa la morte non voluta risponde di omicidio preterintenzionale (584). Chi causa la morte violando regole di prudenza, senza volere alcuna aggressione, risponde di omicidio colposo (589)." },
    ],
    flashcards: [
      ["Quale bene tutela il Titolo XII del codice penale?", "La persona: vita e incolumità individuale, onore, libertà personale, morale e sessuale."],
      ["Differenza tra omicidio doloso e preterintenzionale?", "Nel doloso (575) la morte è voluta o accettata; nel preterintenzionale (584) l'agente voleva percuotere/ledere e la morte non voluta ne deriva."],
      ["Cosa tutela l'art. 595 c.p.?", "L'onore e la reputazione: è il delitto di diffamazione (comunicazione con più persone in assenza dell'offeso)."],
    ],
    comparativa: null,
    quiz: [
      { q: "L'omicidio preterintenzionale (art. 584) presuppone che l'agente:", opts: ["Volesse la morte", "Volesse percuotere o ledere, con morte non voluta", "Agisse per colpa", "Fosse non imputabile"], correct: 1, difficulty: 2, commonError: "Confonderlo con l'omicidio doloso (morte voluta) o colposo (nessuna aggressione voluta).", why: "Nell'omicidio preterintenzionale la volontà è diretta a percuotere o ledere; la morte, evento più grave, non è voluta ma deriva causalmente dalla condotta.", fonte: "Parte speciale, Cap. 14 (art. 584)" },
      { q: "La diffamazione (art. 595 c.p.) si distingue perché:", opts: ["Richiede la presenza dell'offeso", "L'offesa è comunicata a più persone in assenza dell'offeso", "Tutela il patrimonio", "È una contravvenzione"], correct: 1, difficulty: 2, commonError: "Confondere diffamazione (assenza dell'offeso, più persone) e la vecchia ingiuria.", why: "La diffamazione tutela l'onore e presuppone la comunicazione con più persone in assenza dell'offeso; l'ingiuria (offesa alla presenza) è stata depenalizzata.", fonte: "Parte speciale, Cap. 14 (art. 595)" },
      { q: "L'art. 609-bis (violenza sessuale) adotta la nozione di:", opts: ["Congiunzione carnale soltanto", "Atti sessuali (nozione unitaria)", "Atti osceni", "Molestie"], correct: 1, difficulty: 3, commonError: "Distinguere ancora violenza carnale e atti di libidine, superati dalla riforma del 1996.", why: "L'art. 609-bis unifica le vecchie figure nella nozione di 'atti sessuali', tutelando la libertà sessuale; il consenso dev'essere attuale e persistente.", fonte: "Parte speciale, Cap. 14 (art. 609-bis)" },
    ],
    veroFalso: [
      { aff: "Il consenso dell'avente diritto scrimina l'omicidio del consenziente.", vero: false, traccia: "Falso. La vita è bene indisponibile: il consenso non opera come scriminante (art. 50) e l'omicidio del consenziente è autonomamente punito (art. 579)." },
    ],
    aperta: { q: "Il candidato illustri le principali figure di omicidio previste dal codice penale.", traccia: "Il codice distingue: l'omicidio doloso (575), con circostanze aggravanti (576-577, tra cui premeditazione); l'omicidio del consenziente (579), poiché la vita è indisponibile; l'omicidio preterintenzionale (584), in cui la morte non voluta deriva da percosse o lesioni volute; l'omicidio colposo (589), con la figura speciale dell'omicidio stradale (589-bis). Il discrimine tra le figure è l'elemento soggettivo rispetto all'evento morte (volontà/accettazione, preterintenzione, colpa).", fonte: "Parte speciale, Cap. 14" },
    consigliate: ["flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },

  /* ===================== 15 · DELITTI CONTRO IL PATRIMONIO ========== */
  {
    id: "ps-patrimonio", part: "speciale", chapter: 15, chapterTitle: "I delitti contro il patrimonio",
    title: "I delitti contro il patrimonio", subtitle: "Furto, rapina, estorsione, truffa, appropriazione indebita",
    articoli: ["artt. 624-649 c.p."], pages: [170, 200], depth: "std", inPlan: false,
    layers: {
      essenziale:
        "Il Titolo XIII distingue i delitti <strong>contro il patrimonio mediante violenza</strong> alle cose o alle persone (furto 624, rapina 628, estorsione 629, danneggiamento 635) e quelli <strong>mediante frode</strong> (truffa 640, appropriazione indebita 646, ricettazione 648). Elemento ricorrente è il <em>dolo specifico</em> del fine di profitto.",
      approfondimenti: [
        { label: "Furto e rapina", body: "Il furto (624) è la sottrazione di cosa mobile altrui per trarne profitto; diventa <strong>rapina</strong> (628) quando la sottrazione avviene con violenza o minaccia alla persona (rapina propria) o quando la violenza serve ad assicurarsi il possesso o l'impunità (rapina impropria)." },
        { label: "Truffa ed estorsione", body: "La truffa (640) richiede artifici o raggiri che inducono in errore e producono un atto di disposizione con altrui danno e ingiusto profitto. L'estorsione (629) piega la volontà con violenza o minaccia costringendo a un atto di disposizione patrimoniale." },
      ],
      giurisprudenza: [
        { label: "Appropriazione indebita e peculato", body: "Chi si appropria di denaro altrui di cui ha il possesso commette appropriazione indebita (646); se è pubblico ufficiale/incaricato di pubblico servizio, il fatto degrada in peculato (314)." },
      ],
      eccezioni: [],
    },
    sintesi: [
      "Titolo XIII: delitti con violenza (furto, rapina, estorsione, danneggiamento) e con frode (truffa, appropriazione, ricettazione).",
      "Furto (624): sottrazione di cosa mobile altrui + dolo specifico di profitto.",
      "Rapina (628): furto con violenza/minaccia (propria o impropria).",
      "Truffa (640): artifici e raggiri → errore → atto di disposizione → danno e profitto.",
      "Estorsione (629): coartazione della volontà con violenza/minaccia.",
    ],
    esempi: [
      { titolo: "Furto, rapina, estorsione", testo: "Prendere di nascosto il portafogli è <strong>furto</strong> (624). Strapparlo con uno spintone o sotto minaccia è <strong>rapina</strong> (628). Costringere la vittima a consegnarlo minacciandola di un male futuro è <strong>estorsione</strong> (629). La differenza sta nel <em>modo</em> in cui si incide sul patrimonio." },
    ],
    flashcards: [
      ["Qual è l'elemento soggettivo tipico dei delitti contro il patrimonio?", "Spesso il dolo specifico: il fine di trarre profitto (es. nel furto, art. 624)."],
      ["Differenza tra furto e rapina?", "La rapina (628) è furto realizzato con violenza o minaccia alla persona (propria) o usata per assicurarsi possesso/impunità (impropria)."],
      ["Cosa distingue la truffa (640)?", "L'uso di artifici o raggiri che inducono la vittima in errore e la portano a un atto di disposizione con altrui danno e ingiusto profitto."],
    ],
    comparativa: {
      titolo: "Rapina vs Estorsione",
      a: "Rapina (628)", b: "Estorsione (629)",
      righe: [
        { profilo: "Ruolo della vittima", a: "Subisce la sottrazione", a2: "", b: "Compie un atto di disposizione coartato" },
        { profilo: "Violenza/minaccia", a: "Per sottrarre o assicurarsi il possesso", b: "Per costringere alla disposizione patrimoniale" },
        { profilo: "Tipo di male", a: "Immediato", b: "Anche prospettato/futuro" },
      ],
    },
    quiz: [
      { q: "Il furto (art. 624) si consuma con:", opts: ["La sola intenzione di rubare", "La sottrazione della cosa mobile altrui con dolo di profitto", "La minaccia alla persona", "Gli artifici e raggiri"], correct: 1, difficulty: 2, commonError: "Confondere furto (sottrazione) e rapina (violenza) o truffa (raggiri).", why: "Il furto è la sottrazione di cosa mobile altrui, con impossessamento, sorretta dal dolo specifico del fine di profitto. La violenza qualifica la rapina; i raggiri la truffa.", fonte: "Parte speciale, Cap. 15 (art. 624)" },
      { q: "La rapina impropria (art. 628 co. 2) ricorre quando la violenza è usata:", opts: ["Per sottrarre la cosa", "Subito dopo la sottrazione, per assicurarsi il possesso o l'impunità", "Per truffare", "Per danneggiare"], correct: 1, difficulty: 3, commonError: "Non distinguere rapina propria (violenza per sottrarre) e impropria (violenza dopo, per l'impunità).", why: "Nella rapina impropria la violenza o minaccia è impiegata immediatamente dopo la sottrazione per assicurarsi il possesso della refurtiva o l'impunità.", fonte: "Parte speciale, Cap. 15 (art. 628)" },
      { q: "Chi, essendo pubblico ufficiale, si appropria del denaro di cui ha il possesso per ragione dell'ufficio commette:", opts: ["Appropriazione indebita (646)", "Peculato (314)", "Truffa (640)", "Furto (624)"], correct: 1, difficulty: 3, commonError: "Applicare l'appropriazione indebita anche al pubblico ufficiale.", why: "La qualifica pubblicistica fa degradare l'appropriazione indebita in peculato (314), reato contro la Pubblica Amministrazione.", fonte: "Parte speciale, Cap. 15 (artt. 314, 646)" },
    ],
    veroFalso: [
      { aff: "Nella truffa è sufficiente il danno patrimoniale, senza necessità di artifici o raggiri.", vero: false, traccia: "Falso. La truffa (640) richiede artifici o raggiri che inducano la vittima in errore, determinando un atto di disposizione patrimoniale con altrui danno e ingiusto profitto. Senza artifici/raggiri manca la tipicità." },
    ],
    aperta: { q: "Il candidato distingua furto, rapina ed estorsione.", traccia: "Furto (624): sottrazione e impossessamento di cosa mobile altrui, con dolo specifico di profitto, senza aggressione alla persona. Rapina (628): il fatto si realizza con violenza o minaccia alla persona, sia per sottrarre (propria) sia, dopo la sottrazione, per assicurarsi possesso o impunità (impropria). Estorsione (629): mediante violenza o minaccia si costringe taluno a un atto di disposizione patrimoniale, coartandone la volontà, procurando ingiusto profitto con altrui danno. Il criterio distintivo è il modo di incidere sul patrimonio: sottrazione occulta, sottrazione violenta, coartazione della volontà.", fonte: "Parte speciale, Cap. 15" },
    consigliate: ["comparativa", "flashcards", "mcq", "esempi"],
    media: { mappa: true },
  },
];

export const PARTE_SPECIALE = [...SPEC_CORE, ...SPEC_EXTRA].sort((a, b) => a.chapter - b.chapter);
