/* Manuali di Diritto tributario selezionabili nell'onboarding.
   Il manuale del corso LUM (prof. Loconte) è il riferimento della materia:
   "S. Loconte, Manuale di diritto tributario, CEDAM 2020" è il testo
   adottato nel syllabus ufficiale LUM (verificato luglio 2026). */
export const BOOKS = [
  { id: "loconte", nome: "Loconte", sub: "Manuale di diritto tributario (testo del corso LUM)", ed: "CEDAM · Wolters Kluwer", livello: "manuale" },
  { id: "tesauro", nome: "Tesauro", sub: "Istituzioni di diritto tributario", ed: "UTET Giuridica", livello: "manuale" },
  { id: "falsitta", nome: "Falsitta", sub: "Corso istituzionale di diritto tributario", ed: "CEDAM", livello: "manuale" },
  { id: "compendioTrib", nome: "Compendio di Diritto tributario", sub: "Neldiritto Editore", ed: "Neldiritto", livello: "compendio" },
  { id: "dispensa", nome: "Studio da una dispensa o materiale personale", sub: "Carica il tuo file (PDF, slide, appunti)", ed: "", livello: "personale", upload: true },
  { id: "nolibro", nome: "Non ho un manuale / non sono vincolato", sub: "Ti consigliamo noi il testo giusto", ed: "", livello: "nessuno" },
];
export const getBook = (id) => BOOKS.find((b) => b.id === id);

/* Manuale consigliato per il corso di ciascun professore.
   Loconte → il suo manuale (riprende il corso LUM): dato verificato. */
export const PROF_BOOK = {
  loconte: "loconte",
  tortorelli: "loconte",
};

// suggerimento libro quando lo studente non è vincolato
export function suggestBook(profile) {
  if (profile?.university === "lum" || profile?.professorId === "loconte") return getBook("loconte");
  return getBook("loconte");
}
