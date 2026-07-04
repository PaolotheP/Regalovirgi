/* =========================================================================
   Contatti per la messaggistica (Mentore, Coorte, Co-studio, Classifica).
   Contatti REALI (persone fidate) con link tel:/wa.me/mailto: precompilati.
   I "nomi di fantasia" popolano classifiche/coorti con messaggio simulato.
   ========================================================================= */

// numeri normalizzati per wa.me (prefisso 39, senza + né spazi)
export const REAL_CONTACTS = [
  { id: "roberto", nome: "Roberto G.", tel: "+393207982862", wa: "393207982862", email: null, ruolo: "Mentore · ha superato l'esame di Diritto penale" },
  { id: "marlen", nome: "Marlen M.", tel: "+393929135974", wa: "393929135974", email: "info@neldiritto.it", ruolo: "Redazione Neldiritto · supporto allo studio" },
  { id: "paolo", nome: "Paolo G.", tel: "+393923413157", wa: "393923413157", email: "p.garofoli05@gmail.com", ruolo: "Coordinatore · community Sirio" },
];

export const getContact = (id) => REAL_CONTACTS.find((c) => c.id === id);

export function waLink(wa, text) {
  return `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;
}
export function telLink(tel) {
  return `tel:${tel}`;
}
export function mailtoLink(email, subject, body) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Nomi di fantasia (con avatar generato) per classifiche, coorti, liste.
export const FANTASY_PEOPLE = [
  { nome: "Aurora B.", hue: 210 }, { nome: "Lorenzo P.", hue: 250 }, { nome: "Marco T.", hue: 190 },
  { nome: "Sofia R.", hue: 320 }, { nome: "Giulia M.", hue: 160 }, { nome: "Davide C.", hue: 30 },
  { nome: "Chiara V.", hue: 280 }, { nome: "Matteo S.", hue: 200 }, { nome: "Elena F.", hue: 340 },
  { nome: "Francesco D.", hue: 220 }, { nome: "Martina G.", hue: 140 }, { nome: "Alessandro N.", hue: 260 },
  { nome: "Beatrice L.", hue: 300 }, { nome: "Riccardo A.", hue: 180 }, { nome: "Sara P.", hue: 350 },
];
