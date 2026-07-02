# SIRIO — Studio grafico v3 (rebranding e costellazione)

## L'evoluzione: da N+ a Sirio
La piattaforma diventa **Sirio** — la stella più luminosa: "la piattaforma che
guida all'apprendimento di Neldiritto". La metafora portante è la
**COSTELLAZIONE**: il percorso non è una lista ma un cielo; ogni argomento è una
stella che si **accende** quando padroneggiata e **perde luce** senza ripasso
(curva dell'oblio). Un solo sistema visivo sostituisce la mappa termica.

**Tipografia con gravitas**: serif editoriale **Fraunces** per i titoli (autorità,
"libro"), **Source Serif 4** per la lettura giuridica lunga, **Inter** per la UI.
Distingue Sirio dai competitor tutti-sans.

**Quattro temi**: Chiaro (default, cielo diurno #edf2fa), Scuro (spazio profondo
indaco #090b1a con campo stellato), **Notturno** (bassissima luce blu, viraggio
ambra #120d06 — benessere per lo studio serale), Auto (segue orario/sistema).
Il cambio avviene con **onda radiale** dal punto del click (View Transitions API).

**Direxi** diventa una stella-compagna che vive nell'angolo: coachmark "?",
celebrazioni, recap settimanale, tour spotlight. Nessuna AI: testi pre-scritti.

---

# Studio grafico v2 (storico — beta N+)

Obiettivo: rendere l'interfaccia molto più bella, professionale e "definitiva",
con **Dark mode + Light mode** perfettamente compatibili, un **tocco di arancione**,
sfondi **più chiari**, niente pattern a puntini, e micro-interazioni curate.

## 1. Identità cromatica

L'identità N+ resta il **blu editoriale/giuridico** (fiducia, autorevolezza).
Si affianca un **secondo accento caldo — ambra/arancione** — usato con parsimonia
per: streak/fuoco, livello, evidenziazioni dei CTA, stati "caldi" della memoria,
serie secondarie nei grafici. Il contrasto blu freddo ↔ arancio caldo dà energia
senza tradire il tono professionale (è la combinazione complementare più leggibile).

### Palette
- **Brand (primario, blu)**: da `#4f97ff` a `#1a49b8`, con accento ciano `glow`.
  - Dark `--glow` = `#4fc5ff` · Light `--glow` = `#1482d2` (più profondo per contrasto).
- **Accent (arancio, ambra)**: `#ffb066 → #ff8a3d → #f26a12`. "Un tocco", non dominante.
- **Neutri** governati da variabili CSS che si ribaltano tra i due temi.

### Tema chiaro (più chiaro, arioso)
- Sfondo pagina `#eef3fb` (bianco freddo, **non** bianco puro: meno abbagliante).
- Superfici vetro = bianco translucido + bordo ardesia tenue + ombra morbida.
- Testo = inchiostro blu-navy `#0d1932` (alto contrasto AA).

### Tema scuro (rifinito, un filo più chiaro di prima)
- Sfondo `#0a1020` (prima `#060b18`): meno "buco nero", più profondità blu.
- Vetro = bianco translucido su navy, riflessi speculari più morbidi.

## 2. Sistema a variabili (una sola fonte di verità)
Ogni token neutro è una variabile RGB (`--c-bg`, `--c-line`, `--c-fill`, `--c-text-*`…)
consumata da Tailwind come `rgb(var(--token) / <alpha>)`. Cambiare `.light` sull'`<html>`
ribalta l'intero tema **mantenendo gli stessi valori di opacità** nel codice: così ogni
schermata è compatibile con entrambi i temi senza duplicare stili.

## 3. Posizionamento & gerarchia
- Sfondo **aurora** a blob morbidi (blu + un blob arancio tenue), **senza puntini**.
- Vetro "liquid" a più livelli: `.glass` (superficie), `.glass-strong` (pannelli),
  `.glass-brand` (evidenza). Riflesso speculare in alto + bordo luminoso.
- Card che si **sollevano** in hover; bottoni con **ripple + scale**; modali **fade+scale**;
  sidebar ad apertura **fluida**; toast, contatori, barre e grafici **animati**;
  **skeleton** in caricamento; **scroll-reveal** delle sezioni.

## 4. Direxi (guida)
Tour guidato al **primo accesso** (o dal pulsante **?**): oscura lo schermo tranne la
funzione spiegata, con la mascotte **Direxi** che si presenta e si sposta accanto a
ogni funzione, in ordine logico **a partire dal Piano**. Niente più voce di menu "Guida al sito".

## 5. Piano di studi
Timeline **verticale** con **pallini grandi**, riempimento a torta della padronanza,
algoritmo bilanciato e distribuito sull'intero orizzonte (pesato sulle pagine dell'indice).
