/* =========================================================================
   Piani di abbonamento. Prezzi DEFINITI su base reale (ricerca luglio 2026):
   - Costo API AI per studente "pesante": ~€1-2/mese (Claude Haiku 4.5 $1/$5,
     Sonnet 5 $3/$15, GPT-5 mini $0.25/$2 per 1M token; stima 20 interazioni/g,
     ~1500 in / 500 out). Fonte: platform.claude.com, developers.openai.com.
   - Competitor concorsi: Piattaforma Concorsi €4,90/mese (AI inclusa),
     Concorsando €4,99/mese; edtech con AI: Duolingo Max €14,99/mese.
   Logica: il costo AI è una frazione minima del prezzo → il pricing è
   posizionamento di mercato. FREE per acquisizione; Standard competitivo
   con i concorsi (€7,99, annuale ~€5); Premium ancorato a Duolingo Max (€14,99).
   ========================================================================= */

export const PLANS = [
  {
    id: "free",
    nome: "Free",
    prezzo: "€0",
    periodo: "per sempre",
    tagline: "Tutto il corso, senza le funzioni AI.",
    highlight: false,
    features: [
      { t: "Piano di studi personalizzato e adattivo", ok: true },
      { t: "Tutti i contenuti: spiegazioni, mappe, flashcard, esempi", ok: true },
      { t: "Quiz a risposta multipla, Vero/Falso, domande aperte (base)", ok: true },
      { t: "Costellazione della memoria, Schedario Leitner, Scommessa sulla risposta", ok: true },
      { t: "Podcast, video, classifica, diario, coorte", ok: true },
      { t: "Tutor AI ed Esaminatore AI", ok: false },
      { t: "Correzione AI di temi, pareri e domande aperte", ok: false },
    ],
  },
  {
    id: "standard",
    nome: "Standard",
    prezzo: "€7,99",
    periodo: "/ mese",
    annuale: "oppure €59,99/anno (≈ €5/mese)",
    tagline: "Sblocca il Tutor e l'Esaminatore AI.",
    highlight: true,
    features: [
      { t: "Tutto ciò che è incluso nel piano Free", ok: true },
      { t: "Tutor AI: chiarimenti immediati, con citazione della fonte", ok: true },
      { t: "Esaminatore AI: simulazione d'orale che incalza e valuta", ok: true },
      { t: "Quiz e simulazioni illimitate", ok: true },
      { t: "Correzione AI avanzata di temi e pareri", ok: false },
    ],
  },
  {
    id: "premium",
    nome: "Premium",
    prezzo: "€14,99",
    periodo: "/ mese",
    annuale: "oppure €119,99/anno (≈ €10/mese)",
    tagline: "La preparazione completa, anche per lo scritto.",
    highlight: false,
    features: [
      { t: "Tutto ciò che è incluso nello Standard", ok: true },
      { t: "Correzione AI di temi, pareri e domande aperte (con punteggio)", ok: true },
      { t: "Palestra di scrittura ed Effetto Feynman con riscontro AI", ok: true },
      { t: "Valutazione avanzata: struttura, fondamento, completezza, chiarezza", ok: true },
      { t: "Instradamento a modelli più potenti per la correzione", ok: true },
    ],
  },
];

/* funzioni "AI-only" bloccate in tutta la beta (vetro smerigliato) */
export const AI_FEATURES = {
  tutor: { nome: "Tutor AI", desc: "Risponde sui contenuti certificati e cita la fonte" },
  esaminatore: { nome: "Esaminatore AI", desc: "Simulazione d'orale che incalza e valuta" },
  correzioneAperta: { nome: "Correzione AI · Domande aperte", desc: "Valutazione avanzata della tua risposta" },
  correzioneVF: { nome: "Correzione AI · Vero/Falso argomentato", desc: "Valuta la tua motivazione" },
  palestra: { nome: "Palestra di Scrittura", desc: "Temi e pareri con riscontro puntuale" },
  feynman: { nome: "Effetto Feynman", desc: "Valuta chiarezza ed esattezza della spiegazione" },
};
