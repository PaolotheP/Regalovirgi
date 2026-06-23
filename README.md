# N+ · Neldiritto Editore — Piattaforma di studio (DEMO)

Demo **statica** (solo HTML/CSS/JavaScript) della piattaforma di studio del Diritto **N+** di NLD / Neldiritto Editore.
Materia di esempio: **Diritto penale — parte generale**. Tutto gira nel browser: nessun backend, nessun database, nessuna API a pagamento, **costo zero**.

> Questa è una demo dimostrativa: le funzioni che richiederebbero un'intelligenza artificiale **non sono attive** e mostrano un messaggio uniforme insieme a una risposta-segnaposto già scritta. La correzione dei quiz a scelta multipla e vero/falso è invece **pienamente funzionante** (la risposta esatta è nota lato browser).

---

## Cosa contiene

- **Onboarding completo**: Home → «Come studi?» (con pop-up Manuali / SuperCompendi) → Codice del libro (demo: digita **`N`**) → «Imposta la prova» (data, obiettivo, livello attuale) → **Piano di studio** generato in modo meccanico.
- **10 argomenti** di Diritto penale con flusso completo (spiegazione → contenuti extra → esercitazione): *il reato, la causalità, le cause di giustificazione, il dolo, la colpa, dolo eventuale vs colpa cosciente, la preterintenzione, l'imputabilità, il tentativo, il concorso di persone*.
- **60 quiz a risposta multipla** con correzione, spiegazione del perché e rimando alla fonte.
- **Tutte le funzioni** del PDF di riferimento: Vero/Falso argomentato, Domande aperte (con traccia certificata e box «domanda uscita all'orale»), Esaminatore AI, Funzione Esempio, Podcast e Video (player con capitoli e velocità), Tutor AI, Punti chiave, Mappe e Flashcard (38 carte), La Classifica (sfocata finché non ti eserciti, poi con percentile e distribuzione), Livebook, Palestra di scrittura, Richiamo libero, Effetto Feynman, Libreria offline, Bandi & Concorsi (dati reali), Ripasso last minute + glossario, Mentore ex studente, Domande & Risposte con voti, Diario del ripasso.
- Ottimizzata per **desktop e telefono**.

I contenuti di studio sono tratti dal **SuperCompendio di Diritto penale** (NLD). I dati su bandi e concorsi sono **reali** (giugno 2026) e citati nei commenti del codice. Le domande sono costruite sul taglio delle domande d'esame reali di Diritto penale (parte generale).

## Struttura dei file

```
index.html          → la piattaforma N+ (punto d'ingresso)
css/styles.css      → identità visiva unica (blu notte + oro, font serif)
js/data*.js         → tutti i contenuti (argomenti, quiz, flashcard, bandi…)
js/assets.js        → icone, mappe e avatar in SVG (generati nel browser)
js/app.js           → motore: stato, navigazione, onboarding
js/screens*.js      → tutte le schermate e le funzioni
yourbear.html       → il sito personale preesistente (conservato, non rimosso)
```

---

## Come pubblicarla GRATIS e ottenere il link pubblico

La demo è un sito statico: si pubblica ovunque, in pochi minuti, senza costi. Scegli **una** di queste strade.

### Opzione A — GitHub Pages (più semplice, il codice è già su GitHub)
1. Vai nel repository su GitHub.
2. **Settings** (in alto) → **Pages** (menu a sinistra).
3. Alla voce *Build and deployment* → *Source*, scegli **Deploy from a branch**.
4. *Branch*: seleziona `claude/nplus-legal-platform-demo-wjfi9j` (o `main` dopo aver unito), cartella `/ (root)`, poi **Save**.
5. Attendi ~1 minuto: in cima alla pagina comparirà il link pubblico, del tipo
   `https://<tuo-utente>.github.io/<nome-repo>/`.

> Nota: se il repository ha più rami, conviene prima fare il *merge* del ramo della demo in `main` e pubblicare da `main`.

### Opzione B — Netlify (trascina e rilascia, nessun comando)
1. Vai su **netlify.com** e crea un account gratuito (puoi entrare con GitHub).
2. Dalla dashboard: **Add new site → Deploy manually**.
3. Trascina nella finestra l'**intera cartella del progetto** (quella che contiene `index.html`).
4. In pochi secondi ottieni un link tipo `https://nome-casuale.netlify.app`. Puoi rinominarlo da *Site settings → Change site name*.

*In alternativa*: **Add new site → Import from Git**, colleghi il repository e Netlify ripubblica a ogni modifica (build command vuoto, publish directory `/`).

### Opzione C — Vercel
1. Vai su **vercel.com**, registrati (anche con GitHub).
2. **Add New → Project**, importa il repository.
3. Framework Preset: **Other**; lascia vuoti build command e output directory; **Deploy**.
4. Ottieni un link tipo `https://nome-progetto.vercel.app`.

### Opzione D — Cloudflare Pages
1. Vai su **dash.cloudflare.com → Workers & Pages → Create → Pages**.
2. *Connect to Git* e seleziona il repository (oppure *Upload assets* per caricare la cartella).
3. Build command: **vuoto**; output directory: **/**; **Save and Deploy**.
4. Ottieni un link tipo `https://nome-progetto.pages.dev`.

### Provare in locale (facoltativo)
Puoi anche solo fare doppio clic su `index.html`. Per un'esperienza identica al web, da terminale nella cartella del progetto:
```
python3 -m http.server 8000
```
poi apri `http://localhost:8000`.

---

## Note

- Per ripartire dall'inizio (rivedere l'onboarding), apri la console del browser ed esegui `localStorage.clear()`, poi ricarica.
- Il codice del libro per la demo è **`N`**.
- Tutte le fonti (domande d'esame, dati dei concorsi, contesto dell'insegnamento di Diritto penale a Bari) sono citate nei commenti dei file `js/data*.js`.
