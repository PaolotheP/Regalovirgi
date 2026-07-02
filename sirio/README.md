# SIRIO — la piattaforma che guida all'apprendimento di Neldiritto

Piattaforma di studio **React** (Vite + Tailwind + Framer Motion) per il Diritto penale, basata sul SuperCompendio di Neldiritto Editore. Il percorso è un **cielo**: ogni argomento è una **stella** che si accende quando lo padroneggi e perde luce senza ripasso (curva dell'oblio). Piano di studi adattivo con calendario trascinabile, costellazione della memoria, quiz con scommessa e calibrazione, schedario Leitner, Direxi (la stella-guida), 4 temi (chiaro, scuro, notturno, auto), accessibilità (lettura vocale, comandi vocali, DSA, offline) e feedback beta via email.

- **40 argomenti** che coprono l'intero indice (Parte Generale, capp. 1-7; Parte Speciale, capp. 1-16).
- **163 quiz** a risposta multipla con spiegazione, fonte e "muro della coorte"; **154 flashcard**.
- I progressi restano **salvati nel browser** (localStorage + IndexedDB per i file caricati): chiudi e riapri, ritrovi tutto.
- Le funzioni **AI** (Tutor, Esaminatore, correzioni avanzate) sono presenti ma "dietro vetro smerigliato" e rimandano ai piani a pagamento — tutto il resto funziona senza AI e senza costi.

## Provare in locale
```bash
npm install
npm run dev      # apre su http://localhost:5173
```
Per ricominciare da capo (rivedere l'onboarding): nella console del browser esegui `localStorage.clear()` e ricarica.

## Compilare per la pubblicazione
```bash
npm install
npm run build    # genera la cartella dist/  (sito statico pronto)
```
La app usa `HashRouter` e `base: "./"`, quindi la cartella `dist/` funziona su **qualsiasi host statico** senza configurazioni di reindirizzamento.

---

## Come pubblicarla GRATIS

### Opzione A — Vercel (consigliata per React, con GitHub)
1. Metti il progetto su un repository GitHub **nuovo** (senza le cartelle `node_modules` e `dist`).
2. Vai su **vercel.com** → accedi con GitHub → **Add New… → Project**.
3. Importa il repository. Vercel riconosce Vite in automatico (Framework: *Vite*; Build: `npm run build`; Output: `dist`). Lascia i valori proposti.
4. **Deploy**. In ~1 minuto ottieni il link pubblico tipo `https://n-plus.vercel.app`.

### Opzione B — Netlify (la più veloce, senza build lato tuo)
1. Sul tuo computer esegui `npm run build` (oppure usa la cartella `dist/` già inclusa nel pacchetto).
2. Vai su **app.netlify.com** → accedi → scheda **Deploys**.
3. **Trascina la cartella `dist`** nel riquadro "drag and drop". In pochi secondi ottieni un link `https://nome.netlify.app`.
4. (Facoltativo) *Site configuration → Change site name* per personalizzare il link.

### Opzione C — Cloudflare Pages
Crea un progetto Pages, collega il repo (build `npm run build`, output `dist`) **oppure** carica la cartella `dist`. Ottieni `https://nome.pages.dev`.

---

## Struttura del progetto
```
src/
  main.jsx, App.jsx           punto d'ingresso e router (HashRouter)
  index.css, tailwind.config  sistema grafico "liquid glass" blu/navy
  lib/       store.jsx (stato + persistenza), plan.js (piano adattivo), scheduling.js (Leitner + mappa termica), utils.js
  data/      curriculum.js (indice) · content/ (contenuti dei 40 argomenti) · professors, plans, contacts, books, misc
  components/ ui.jsx (primitivi), Shell, Logo, Background, GlassLock
  features/  Welcome, Onboarding, Pricing, Dashboard, Plan, Topic, Quiz, Written,
             Leitner, Flashcards, Heatmap, Content, Community, AiLocked, Topics
```

Prezzi dei piani e contenuti sono basati su ricerca reale (fonti citate nei commenti dei file `data/`).
Questa beta contiene, per ora, solo il Diritto penale.
