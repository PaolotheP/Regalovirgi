/* Manuali di Diritto penale selezionabili nell'onboarding (1.1.3). */
export const BOOKS = [
  { id: "fiandaca", nome: "Fiandaca · Musco", sub: "Diritto penale, Parte generale", ed: "Zanichelli", livello: "manuale" },
  { id: "marinucci", nome: "Marinucci · Dolcini · Gatta", sub: "Manuale di Diritto penale, PG", ed: "Giuffrè", livello: "manuale" },
  { id: "garofoli", nome: "Garofoli", sub: "Manuale di Diritto penale, PG", ed: "Neldiritto", livello: "manuale" },
  { id: "mantovani", nome: "Mantovani", sub: "Diritto penale, Parte generale", ed: "Cedam", livello: "manuale" },
  { id: "pulitano", nome: "Pulitanò", sub: "Diritto penale, Parte generale", ed: "Giappichelli", livello: "manuale" },
  { id: "compendio", nome: "Compendio di Diritto penale", sub: "Neldiritto Editore", ed: "Neldiritto", livello: "compendio" },
  { id: "supercompendio", nome: "SuperCompendio di Diritto penale", sub: "Neldiritto Editore", ed: "Neldiritto", livello: "compendio" },
  { id: "dispensa", nome: "Studio da una dispensa o materiale personale", sub: "Carica il tuo file (PDF, slide, appunti)", ed: "", livello: "personale", upload: true },
  { id: "nolibro", nome: "Non ho un manuale / non sono vincolato", sub: "Ti consigliamo noi il testo giusto", ed: "", livello: "nessuno" },
];
export const getBook = (id) => BOOKS.find((b) => b.id === id);

/* Manuale consigliato per il corso di ciascun professore.
   NB: associazioni editoriali indicative (i manuali istituzionali più diffusi
   per quel corso/ateneo), non dichiarazioni ufficiali del docente — usate per
   l'etichetta "Consigliato per il corso del prof …". Da verificare col syllabus. */
export const PROF_BOOK = {
  muscatiello: "fiandaca",
  bottalico: "marinucci",
  losappio: "fiandaca",
  donini: "fiandaca",
  gambardella: "marinucci",
  trapasso: "pulitano",
  // LUISS: dato verificato dal catalogo ufficiale (Cineca) — tutti Marinucci-Dolcini-Gatta.
  bellacosa: "marinucci",
  gullo: "marinucci",
  sabia: "marinucci",
};

// suggerimento libro quando lo studente non è vincolato
export function suggestBook(profile) {
  const days = 60; // default; l'onboarding passerà il reale
  if (profile.goal >= 95) return getBook("garofoli");
  if (profile.mode === "concorso") return getBook("supercompendio");
  return getBook("supercompendio");
}
