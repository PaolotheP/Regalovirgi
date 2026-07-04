/* ============================ DIREXI ====================================
 * La stella-compagna di Sirio. Nessuna AI: solo guide PRE-SCRITTE, curate
 * a mano per ogni funzione della piattaforma. Direxi le consegna dal suo
 * angolo dello schermo o dai pulsanti "?" accanto a ogni funzione.
 * ======================================================================== */

import { currentSubject, currentSubjectId } from "./subject.js";
const SUBJ = currentSubject();

export const DIREXI_GUIDES = {
  materia: {
    titolo: "La materia",
    testo: `Stai studiando ${SUBJ.nome}. Ogni materia è una costellazione a sé: il piano, le stelle e i progressi restano separati. Da «Cambia» puoi passare all'altra materia in qualsiasi momento — quando torni, ritrovi tutto come l'avevi lasciato.`,
    consiglio: "Cambiare materia non cancella nulla: i due cieli vivono in parallelo.",
  },
  cruscotto: {
    titolo: "Il Cruscotto",
    testo: "È il tuo centro di comando: qui vedi in un colpo solo quanto manca all'esame, la tua prontezza rispetto alla soglia di chi è stato promosso, le stelle che si stanno spegnendo e il prossimo passo da fare oggi. Aprilo ogni giorno: ti dice sempre da dove ricominciare, senza doverci pensare.",
    consiglio: "Se hai poco tempo, fai solo ciò che il cruscotto ti propone in «Cosa studio oggi»: è già la scelta giusta.",
  },
  piano: {
    titolo: "Il Piano di studi",
    testo: "Il piano distribuisce tutti gli argomenti dell'indice sui giorni che ti separano dall'esame, in proporzione alle pagine di ciascuno. Gli ultimi giorni sono riservati a solo ripasso ed esercizi, senza argomenti nuovi. Se salti dei giorni, al rientro si rimodella da solo sul tempo rimasto. Puoi anche trascinare un argomento su un'altra data dal calendario: il piano è tuo.",
    consiglio: "Non inseguire la perfezione giorno per giorno: se resti indietro, usa «Rimodella» e riparti sereno.",
  },
  cielo: {
    titolo: "La tua costellazione",
    testo: "Ogni argomento è una stella. Quando lo padroneggi la stella si accende; se non lo ripassi, giorno dopo giorno perde luce, come la memoria (curva dell'oblio). Il cielo ti mostra a colpo d'occhio dove sei forte e dove ti stai spegnendo. Tieni premuto su una stella per un'anteprima, toccala per aprire l'argomento.",
    consiglio: "Apri il cielo ogni giorno e usa «Sveglia le stelle spente»: 15 minuti sui punti in decadenza valgono più di un'ora sul già saputo.",
  },
  argomenti: {
    titolo: "Gli Argomenti",
    testo: `Tutto l'indice di ${SUBJ.nome}, capitolo per capitolo, dal compendio dell'editore. Ogni argomento ha la Lettura a strati: parti dall'essenziale e apri solo la densità che ti serve — approfondimenti, giurisprudenza, eccezioni, esempi. In cima trovi le funzioni consigliate per quell'argomento specifico.`,
    consiglio: "Prima leggi l'essenziale di tutto il capitolo, poi torna sugli strati profondi: il quadro prima del dettaglio.",
  },
  ripasso: {
    titolo: "Ripasso last minute",
    testo: "Le ore prima della prova non sono per imparare cose nuove: qui trovi solo l'indispensabile di ogni argomento e un glossario essenziale. Una rilettura lucida, senza dispersione, pensata per l'ultimo miglio.",
    consiglio: "La sera prima: solo questa schermata, il glossario e una passeggiata. Niente strati profondi.",
  },
  quiz: {
    titolo: "Quiz e Scommessa",
    testo: "Prima di rispondere dichiari quanto sei sicuro (33%, 66% o 100%). Il punteggio premia chi è preparato E ben calibrato: scoprire che eri sicuro di una risposta sbagliata vale più del punto perso, perché è esattamente l'errore che avresti fatto all'esame. Ogni domanda mostra anche il muro della coorte: dove sbagliano gli altri.",
    consiglio: "Scommetti onestamente: barare con te stesso rovina la calibrazione, che è la tua vera bussola.",
  },
  verofalso: {
    titolo: "Vero / Falso",
    testo: "Affermazioni secche da giudicare al volo: alleni il riconoscimento rapido delle trappole concettuali, quelle che all'orale ti fanno esitare. Ogni risposta ha la traccia di correzione che spiega il perché.",
    consiglio: "Falli a fine giornata come «chiusura»: sono veloci e consolidano ciò che hai letto.",
  },
  aperta: {
    titolo: "Domande aperte",
    testo: "Le domande come te le farà il professore. Scrivi la tua risposta, poi confrontala con la traccia dell'editore: impari a costruire l'esposizione, non solo a riconoscere l'opzione giusta.",
    consiglio: "Rispondi ad alta voce prima di scrivere: l'orale si prepara parlando.",
  },
  leitner: {
    titolo: "Lo Schedario degli errori",
    testo: "Ogni risposta sbagliata diventa una carta che torna a intervalli crescenti (1, 2, 4, 8, 16 giorni): il metodo Leitner. Se la sbagli ancora, ricomincia da capo; se la padroneggi, esce dal mazzo. È la ripetizione spaziata applicata solo dove serve: sui TUOI errori.",
    consiglio: "Svuota le carte in scadenza ogni giorno: sono poche, ma sono esattamente i tuoi punti deboli.",
  },
  flashcards: {
    titolo: "Le Flashcard",
    testo: "Fronte e retro su definizioni, articoli e concetti chiave: il recupero attivo è il modo più efficace per fissare la memoria. Gira la carta solo dopo aver provato davvero a rispondere.",
    consiglio: "Cinque minuti di flashcard in fila alla posta valgono: la costanza batte la durata.",
  },
  tutor: {
    titolo: "Le funzioni AI",
    testo: "Tutor, Esaminatore e Palestra di scrittura arriveranno con i piani superiori: le vedi «dietro vetro» perché fanno parte del percorso completo, ma questa beta funziona interamente senza AI e senza costi. Tutto ciò che è acceso, è tuo.",
    consiglio: "Nel frattempo, le Domande aperte con traccia dell'editore coprono gran parte del lavoro dell'esaminatore.",
  },
  podcast: {
    titolo: "Podcast e Video",
    testo: "Il contenuto di studio da ascoltare o guardare, diviso in capitoli navigabili e con velocità regolabile. Perfetto in movimento: la modalità audio ti permette di studiare mentre cammini, cucini o viaggi.",
    consiglio: "Riascolta a 1.5× un argomento già letto: è ripasso, non prima lettura.",
  },
  mappe: {
    titolo: "Le Mappe",
    testo: "Il quadro d'insieme prima del dettaglio: ogni mappa mostra come i concetti di un argomento si tengono insieme. Usale prima di leggere (per orientarti) e dopo (per verificare di saper ricostruire la struttura).",
    consiglio: "Prova a ridisegnare la mappa a memoria su un foglio: se non riesci, sai già cosa rileggere.",
  },
  punti: {
    titolo: "I Punti chiave",
    testo: "L'essenza di ogni argomento in poche righe certificate dall'editore: definizioni, articoli, principi. È la sintesi da cui partire e a cui tornare.",
    consiglio: "Copia a mano i punti chiave degli argomenti più ostici: la scrittura lenta fissa ciò che la lettura veloce perde.",
  },
  upload: {
    titolo: "I miei file",
    testo: "Carica le slide del professore, dispense e letture: restano nel tuo browser, accanto al corso. Così tutto il materiale del tuo esame vive in un posto solo.",
    consiglio: "Carica le slide subito dopo lezione, quando ricordi ancora cosa ha sottolineato il professore.",
  },
  classifica: {
    titolo: "La Classifica",
    testo: "Dove sei rispetto agli altri candidati, con punti esperienza e serie di giorni. Puoi attivare la modalità Anonimo quando preferisci sparire dai radar. La competizione è un motore: usala quando ti carica, spegnila quando ti pesa.",
    consiglio: "Guarda la classifica il lunedì, non la domenica sera: ti serve per partire, non per giudicarti.",
  },
  diario: {
    titolo: "Il Diario del ripasso",
    testo: "La tua costanza resa visibile: l'intensità di studio delle ultime settimane, le sessioni recenti e gli argomenti che tu stesso hai segnato da rivedere — che il piano ti riproporrà al momento giusto.",
    consiglio: "Segna subito ciò che non ti torna, anche con due parole: il te-stesso di domani ringrazierà.",
  },
  coorte: {
    titolo: "Il Gruppo di coorte",
    testo: "Chi prepara il tuo stesso esame per la tua stessa sessione, con avanzamento condiviso. Vedere che gli altri procedono (e inciampano come te) è il miglior antidoto all'illusione di essere l'unico indietro.",
    consiglio: "Confrontati sugli argomenti, non sulle ore di studio: contano i concetti chiusi, non il tempo seduto.",
  },
  costudy: {
    titolo: "Le Stanze di co-studio",
    testo: "Crea una stanza con videochiamata reale e condividi il link: studiate insieme, ciascuno sul suo, con la presenza dell'altro a tenervi in carreggiata. Funziona come la biblioteca: il silenzio condiviso è produttivo.",
    consiglio: "Sessioni da 50 minuti + 10 di pausa parlata: il ritmo giusto per non sfinirvi.",
  },
  gemello: {
    titolo: "Il Gemello del promosso",
    testo: "La traiettoria reale, settimana per settimana, di chi ha superato il tuo stesso esame partendo dal tuo livello e con il tuo tempo. Non un modello ideale: un precedente concreto, con i suoi errori tipici da evitare.",
    consiglio: "Confronta la tua settimana con la sua: se sei in linea, dormi tranquillo.",
  },
  mentori: {
    titolo: "I Mentori",
    testo: "Ex studenti che quell'esame l'hanno già superato: metodo, domande ricorrenti, esperienza diretta con il professore. Ciò che i libri non scrivono.",
    consiglio: "Chiedi sempre: «cosa rifaresti diverso?» — è la domanda che vale di più.",
  },
  qa: {
    titolo: "Domande & Risposte",
    testo: "Le domande più utili di chi è passato prima di te, votate dalla community: cosa chiede davvero il professore, come imposta l'orale, quali argomenti ama.",
    consiglio: "Leggi le Q&A del tuo professore PRIMA di iniziare a studiare: orientano tutto il percorso.",
  },
  bandi: {
    titolo: "Bandi & Concorsi",
    testo: currentSubjectId() === "tributario" ? "Le date e i bandi dei concorsi pubblici in cui il diritto tributario conta davvero: magistratura tributaria, Agenzia delle Entrate. Per chi studia con un obiettivo oltre l'esame." : "Le date e i bandi dei concorsi pubblici che richiedono il diritto penale: magistratura, notariato, avvocatura dello Stato. Per chi studia con un obiettivo oltre l'esame.",
    consiglio: "Controlla i termini di iscrizione una volta a settimana: i bandi non aspettano.",
  },
  feedback: {
    titolo: "Il Feedback beta",
    testo: "Sei tra i primi a usare Sirio: la tua opinione costruisce la piattaforma. Segnala bug, idee, funzioni che vorresti, cose inutili o preziose — ogni categoria ha la sua carta. Quando hai finito, un solo pulsante invia tutto via email all'editore.",
    consiglio: "Segnala anche le piccolezze: un bottone storto per te è un regalo per noi.",
  },
  temi: {
    titolo: "I quattro temi",
    testo: "Chiaro per il giorno, Scuro per la sera, Notturno per lo studio a tarda ora (pochissima luce blu, viraggio ambra: affatica meno gli occhi e disturba meno il sonno) e Auto, che segue l'orario. Cambiali dal sole/luna in alto: l'onda che vedi è il giorno che si espande sulla notte.",
    consiglio: "Dopo cena passa al Notturno: i tuoi occhi (e il tuo sonno) sentiranno la differenza.",
  },
  accessibilita: {
    titolo: "Accessibilità",
    testo: "Sirio si adatta a te: lettura ad alta voce dei contenuti (studi ascoltando), comandi vocali per navigare a mani libere, modalità DSA con spaziatura generosa, riduzione delle animazioni. Dopo il primo caricamento funziona anche offline.",
    consiglio: "Prova la lettura ad alta voce sugli argomenti già studiati: è ripasso passivo mentre fai altro.",
  },
};

/* Guida contestuale per rotta corrente */
export function guideForPath(pathname) {
  const map = [
    ["/app/piano", "piano"], ["/app/heatmap", "cielo"], ["/app/argomenti", "argomenti"],
    ["/app/topic", "argomenti"], ["/app/ripasso", "ripasso"], ["/app/quiz", "quiz"],
    ["/app/verofalso", "verofalso"], ["/app/aperta", "aperta"], ["/app/leitner", "leitner"],
    ["/app/flashcards", "flashcards"], ["/app/tutor", "tutor"], ["/app/esaminatore", "tutor"],
    ["/app/palestra", "tutor"], ["/app/podcast", "podcast"], ["/app/video", "podcast"],
    ["/app/mappe", "mappe"], ["/app/punti", "punti"], ["/app/upload", "upload"],
    ["/app/classifica", "classifica"], ["/app/diario", "diario"], ["/app/coorte", "coorte"],
    ["/app/costudy", "costudy"], ["/app/gemello", "gemello"], ["/app/mentori", "mentori"],
    ["/app/qa", "qa"], ["/app/bandi", "bandi"], ["/app/feedback", "feedback"],
  ];
  const hit = map.find(([p]) => pathname.startsWith(p));
  return DIREXI_GUIDES[hit ? hit[1] : "cruscotto"];
}

/* --------- eventi di Direxi (celebrazioni, apertura guida) ------------- */
export function direxiCelebrate(message) {
  if (typeof window !== "undefined")
    window.dispatchEvent(new CustomEvent("sirio-direxi", { detail: { type: "celebrate", message } }));
}
export function direxiOpenGuide(key) {
  if (typeof window !== "undefined")
    window.dispatchEvent(new CustomEvent("sirio-direxi", { detail: { type: "guide", key } }));
}

/* ------------------------- Saluto dinamico ------------------------------ */
export function greeting(name, { firstTime = false } = {}) {
  const h = new Date().getHours();
  const base = firstTime ? "Benvenuto" : h < 6 ? "Buonanotte" : h < 13 ? "Buongiorno" : h < 18 ? "Buon pomeriggio" : "Buonasera";
  return name ? `${base}, ${name}` : base;
}
