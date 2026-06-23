/* =========================================================================
   N+ — MOTORE DELL'APPLICAZIONE (core: stato, router, shell, onboarding)
   Tutto lato browser. La correzione dei quiz è nota; le funzioni AI mostrano
   il messaggio uniforme + risposta-segnaposto già scritta.
   ========================================================================= */
(function () {
  const D = NPLUS, SVG = D.svg;

  /* ----------------------------- Helpers ----------------------------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (x) => String(x).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  D.$ = $; D.$$ = $$; D.el = el; D.esc = esc; D.icon = (n, e) => SVG.icon(n, e);

  /* ------------------------------ Stato ------------------------------ */
  const SKEY = 'nplus_state_v1';
  const defState = {
    onboarded: false, studio: null, livebook: false, codice: false,
    examDate: D.meta.esameDefault, obiettivo: 'solido', attuale: 'base',
    progress: { answered: 0, correct: 0, points: 0, tools: {} },
    todo: [], oral: [], votes: {}, anon: false
  };
  let state = load();
  function load() { try { return Object.assign({}, defState, JSON.parse(localStorage.getItem(SKEY) || '{}')); } catch (e) { return Object.assign({}, defState); } }
  function save() { try { localStorage.setItem(SKEY, JSON.stringify(state)); } catch (e) {} }
  D.state = () => state;
  D.save = save;

  /* ------------------------- Date / piano utils ---------------------- */
  function daysUntil(dateStr) {
    const today = new Date(D.meta.oggi + 'T00:00:00');
    const ex = new Date(dateStr + 'T00:00:00');
    return Math.max(0, Math.round((ex - today) / 86400000));
  }
  function fmtDate(d) { return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }); }
  function addDays(base, n) { const d = new Date(base + 'T00:00:00'); d.setDate(d.getDate() + n); return d; }
  D.daysUntil = daysUntil; D.fmtDate = fmtDate; D.addDays = addDays;

  const LIVELLI_OBIETTIVO = { sufficiente: 60, solido: 80, eccellente: 95 };
  const LIVELLI_ATTUALE = { nulla: 8, base: 28, discreta: 52, ripasso: 70 };
  D.startPrep = () => LIVELLI_ATTUALE[state.attuale] ?? 28;
  D.goalPrep = () => LIVELLI_OBIETTIVO[state.obiettivo] ?? 80;

  /* ------------------------------ Toast ------------------------------ */
  function toast(msg, icon = 'check') {
    const host = $('#toast-host');
    const t = el(`<div class="toast"><span class="t-ic">${SVG.icon(icon)}</span><span>${esc(msg)}</span></div>`);
    host.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(20px)'; t.style.transition = '.4s'; setTimeout(() => t.remove(), 400); }, 2600);
  }
  D.toast = toast;

  /* ------------------------------ Modal ------------------------------ */
  function modal(html) {
    const host = $('#modal-host');
    host.innerHTML = `<div class="modal-scrim"><div class="modal card card-gold card-pad">${html}</div></div>`;
    const scrim = $('.modal-scrim', host);
    requestAnimationFrame(() => scrim.classList.add('open'));
    scrim.addEventListener('click', e => { if (e.target === scrim) closeModal(); });
    $$('[data-close]', host).forEach(b => b.onclick = closeModal);
  }
  function closeModal() { const sc = $('.modal-scrim'); if (sc) { sc.classList.remove('open'); setTimeout(() => { const h = $('#modal-host'); if (h) h.innerHTML = ''; }, 280); } }
  D.modal = modal; D.closeModal = closeModal;

  /* AI message uniforme + risposta segnaposto opzionale */
  D.aiNotice = (placeholder) => `
    <div class="ai-note">
      <div class="ain-ic">${SVG.icon('sparkle')}</div>
      <div><p><b>Le funzioni basate su intelligenza artificiale non sono attive in questa demo.</b></p>
      <p class="txt-sm muted mt-8">In N+ questa risposta sarebbe elaborata dall'AI certificata, ancorata alle fonti del manuale.</p></div>
    </div>
    ${placeholder ? `<div class="explain mt-16"><div class="ex-label">Risposta-segnaposto (esempio già scritto)</div>${placeholder}</div>` : ''}`;

  /* ------------------------- Shell (struttura) ----------------------- */
  function shell() {
    document.body.innerHTML = `
      <div class="app-bg"></div>
      <header class="topbar" id="topbar">
        <div class="brand" id="brand-home"><span class="np-chip">N+</span><span style="line-height:1.05;font-size:1rem">Neldiritto<small>EDITORE · DEMO</small></span></div>
        <div class="hamburger" id="ham" aria-label="Menu"><span></span><span></span><span></span></div>
      </header>
      <div class="drawer-scrim" id="drawer-scrim"></div>
      <aside class="drawer" id="drawer" aria-label="Funzioni"></aside>
      <main id="screens"></main>
      <div class="toast-host" id="toast-host"></div>
      <div id="modal-host"></div>`;
    $('#ham').onclick = openDrawer;
    $('#drawer-scrim').onclick = closeDrawer;
    $('#brand-home').onclick = () => goto(state.onboarded ? '#/dashboard' : '#/welcome');
    buildDrawer();
  }

  /* ------------------------------ Drawer ----------------------------- */
  const MENU = [
    { g: 'Studio' },
    { r: '#/dashboard', t: 'Home / Dashboard', d: 'Il tuo quadro di studio', i: 'home' },
    { r: '#/piano', t: 'Piano di Studio', d: 'Timeline e tappe su misura', i: 'calendar' },
    { r: '#/argomenti', t: 'Argomenti', d: '10 argomenti di Diritto penale', i: 'book' },
    { r: '#/ripasso', t: 'Ripasso Last Minute', d: 'Sintesi + glossario', i: 'flame' },
    { g: 'Esercitazione' },
    { r: '#/multipla', t: 'Risposta Multipla', d: 'Quiz con correzione e fonte', i: 'check' },
    { r: '#/verofalso', t: 'Vero o Falso Argomentato', d: 'Scelta + motivazione', i: 'split' },
    { r: '#/aperta', t: 'Domande Aperte', d: 'Traccia certificata', i: 'pen' },
    { r: '#/esaminatore', t: 'Esaminatore AI', d: 'Simulazione orale', i: 'mic' },
    { r: '#/esempio', t: 'Funzione Esempio', d: 'Esempi pratici e chiari', i: 'bulb' },
    { r: '#/richiamo', t: 'Richiamo Libero', d: 'A libro chiuso', i: 'eye' },
    { r: '#/feynman', t: 'Effetto Feynman', d: 'Spiega con parole tue', i: 'sparkle' },
    { r: '#/palestra', t: 'Palestra di Scrittura', d: 'Temi e pareri', i: 'pen' },
    { g: 'Contenuti' },
    { r: '#/podcast', t: 'Podcast di Studio', d: 'Il manuale da ascoltare', i: 'mic' },
    { r: '#/video', t: 'Video Lezioni', d: 'Lezioni brevi e mirate', i: 'video' },
    { r: '#/punti', t: 'Punti Chiave in Evidenza', d: 'L\'essenziale certificato', i: 'star' },
    { r: '#/mappe', t: 'Mappe e Flashcard', d: 'Quadro d\'insieme + richiamo', i: 'cards' },
    { r: '#/tutor', t: 'Tutor AI', d: 'Chiedi al manuale', i: 'chat' },
    { r: '#/livebook', t: 'Livebook', d: 'Il manuale interattivo', i: 'book' },
    { r: '#/libreria', t: 'Libreria Offline', d: 'Studia senza rete', i: 'download' },
    { g: 'Progressi e community' },
    { r: '#/classifica', t: 'La Classifica', d: 'Dove sei tra i candidati', i: 'trophy' },
    { r: '#/diario', t: 'Diario del Ripasso', d: 'La costanza, visibile', i: 'chart' },
    { r: '#/mentori', t: 'Mentore Ex Studente', d: 'Chi l\'ha già superato', i: 'grad' },
    { r: '#/qa', t: 'Domande & Risposte', d: 'Sull\'esame di Bari', i: 'chat' },
    { r: '#/bandi', t: 'Bandi & Concorsi', d: 'Scadenze che contano', i: 'calendar' }
  ];
  function buildDrawer() {
    const dr = $('#drawer');
    dr.innerHTML = `<div class="drawer-head">${SVG.logo}<span style="font-family:var(--display);font-weight:700">Funzioni N+</span><button class="drawer-close" id="dr-close">${SVG.icon('close')}</button></div><div class="drawer-body" id="dr-body"></div>`;
    const body = $('#dr-body', dr);
    MENU.forEach(m => {
      if (m.g) { body.appendChild(el(`<div class="drawer-group-title">${esc(m.g)}</div>`)); return; }
      const locked = (m.r === '#/livebook' && !state.livebook);
      const it = el(`<div class="drawer-item ${locked ? 'locked' : ''}"><div class="di-ic">${SVG.icon(m.i)}</div><div><div>${esc(m.t)}</div><small>${esc(m.d)}</small></div></div>`);
      it.onclick = () => {
        closeDrawer();
        if (m.r === '#/livebook' && !state.livebook) { setTimeout(livebookLockedPopup, 250); return; }
        goto(m.r);
      };
      body.appendChild(it);
    });
    $('#dr-close', dr).onclick = closeDrawer;
  }
  function openDrawer() { buildDrawer(); $('#drawer').classList.add('open'); $('#drawer-scrim').classList.add('open'); }
  function closeDrawer() { $('#drawer').classList.remove('open'); $('#drawer-scrim').classList.remove('open'); }
  D.buildDrawer = buildDrawer;

  function livebookLockedPopup() {
    modal(`<div class="modal-ic">${SVG.icon('lock', 'ic-ink')}</div>
      <h3>Aggiungi il libro da cui studi</h3>
      <p>La funzione <b>Livebook</b> trasforma il tuo manuale in uno spazio di lavoro interattivo. Per usarla, indica il libro da cui studi.</p>
      <div class="row mt-24"><button class="btn btn-gold" id="lb-add">Indica il libro</button><button class="btn btn-ghost" data-close>Più tardi</button></div>`);
    $('#lb-add').onclick = () => { closeModal(); goto('#/welcome'); };
  }
  D.livebookLockedPopup = livebookLockedPopup;

  /* ------------------------------ Router ----------------------------- */
  function goto(hash) { if (location.hash === hash) render(); else location.hash = hash; }
  D.goto = goto;
  window.addEventListener('hashchange', render);

  function topbarVisible(show) { $('#topbar').classList.toggle('show', show); }

  function render() {
    const hash = location.hash || (state.onboarded ? '#/dashboard' : '#/welcome');
    const [_, sec, arg] = hash.split('/');
    const screens = $('#screens');
    closeModal();
    try { window.scrollTo(0, 0); } catch (e) {}

    if (!state.onboarded && sec !== 'welcome') { location.hash = '#/welcome'; return; }
    topbarVisible(sec !== 'welcome' || welcomeStep > 0);

    let html = '';
    const S = D.screens || {};
    switch (sec) {
      case 'welcome': renderWelcome(screens); return;
      case 'dashboard': html = S.dashboard(); break;
      case 'piano': html = S.piano(); break;
      case 'argomenti': html = S.argomenti(); break;
      case 'topic': html = S.topic(arg); break;
      case 'multipla': html = S.exerciseHub('multipla', arg); break;
      case 'verofalso': html = S.exerciseHub('verofalso', arg); break;
      case 'aperta': html = S.exerciseHub('aperta', arg); break;
      case 'esaminatore': html = S.exerciseHub('esaminatore', arg); break;
      case 'richiamo': html = S.exerciseHub('richiamo', arg); break;
      case 'feynman': html = S.exerciseHub('feynman', arg); break;
      case 'esempio': html = S.esempi(arg); break;
      case 'palestra': html = S.palestra(); break;
      case 'podcast': html = S.podcast(arg); break;
      case 'video': html = S.video(arg); break;
      case 'punti': html = S.punti(); break;
      case 'mappe': html = S.mappe(arg); break;
      case 'tutor': html = S.tutor(); break;
      case 'livebook': html = S.livebook(); break;
      case 'libreria': html = S.libreria(); break;
      case 'classifica': html = S.classifica(); break;
      case 'diario': html = S.diario(); break;
      case 'mentori': html = S.mentori(); break;
      case 'qa': html = S.qa(); break;
      case 'bandi': html = S.bandi(); break;
      case 'ripasso': html = S.ripasso(); break;
      default: html = S.dashboard();
    }
    screens.innerHTML = `<div class="screen active">${html}</div>`;
    if (D.afterRender) D.afterRender(sec, arg);
    initReveal();
  }
  D.render = render;

  /* --------------------- Reveal on scroll (anim) --------------------- */
  let io;
  function initReveal() {
    if (typeof IntersectionObserver === 'undefined') { $$('.reveal').forEach(x => x.classList.add('in')); return; }
    if (io) io.disconnect();
    io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(x => io.observe(x));
  }
  D.initReveal = initReveal;

  /* =================================================================== *
   *  ONBOARDING  (Hero → Come studi → Codice → Imposta prova → Piano)
   * =================================================================== */
  let welcomeStep = 0; // 0 hero, 1 come studi, 2 codice, 3 imposta prova, 4 piano(intro→dashboard)

  function renderWelcome(root) {
    topbarVisible(welcomeStep > 0);
    if (welcomeStep === 0) return welcomeHero(root);
    if (welcomeStep === 1) return welcomeComeStudi(root);
    if (welcomeStep === 2) return welcomeCodice(root);
    if (welcomeStep === 3) return welcomeImposta(root);
    // step 4: vai al piano (dashboard avviene dopo)
    state.onboarded = true; save(); buildDrawer();
    location.hash = '#/piano';
  }

  function welcomeHero(root) {
    root.innerHTML = `<div class="screen active">
      <section class="hero">
        <div class="hero-pub reveal in">NLD · Neldiritto Editore</div>
        <div class="hero-logo reveal in">N<span style="font-size:.6em;vertical-align:.15em">+</span></div>
        <div class="hero-claim serif reveal in">Studiare meglio, con metodo.</div>
        <p class="hero-sub reveal in">Il materiale dei manuali NLD, reso più efficace e sempre ancorato alle fonti certificate dell'editore. Una demo della piattaforma di studio del Diritto.</p>
        <div class="row mt-32 reveal in" style="justify-content:center">
          <button class="btn btn-gold btn-lg" id="hero-start">Inizia il percorso ${SVG.icon('arrow','ic-ink')}</button>
        </div>
        <div class="scroll-cue" id="hero-cue"><div class="mouse"></div><span>scorri</span></div>
      </section>
      <section class="intro-sec"><div class="wrap">
        <div class="eyebrow reveal">Lo spirito di N+</div>
        <h2 class="reveal" style="font-size:clamp(1.8rem,4.5vw,2.8rem);max-width:18ch;margin-top:10px">L'intelligenza artificiale al servizio di una preparazione rigorosa.</h2>
        <p class="muted reveal mt-16" style="max-width:60ch">Studi sui manuali e sui codici, dove una parola fuori posto cambia il senso di un istituto. N+ non chiede di cambiare metodo: lo rafforza, con strumenti che fanno lavorare la memoria nel modo giusto.</p>
        <div class="spirit-grid">
          ${[['book','Contenuti certificati','Ogni materiale è prodotto e verificato dalla redazione NLD: la stessa affidabilità del libro che già usi.'],
             ['link','Ancorata alle fonti','Le funzioni AI rispondono citando il passaggio del manuale, non il sapere generico della rete.'],
             ['target','Il tuo metodo, potenziato','Strumenti che rafforzano manuale e codice e allenano il recupero della memoria — non li sostituiscono.']]
            .map(c => `<div class="spirit-card card reveal"><div class="sc-ic">${SVG.icon(c[0])}</div><h3>${c[1]}</h3><p>${c[2]}</p></div>`).join('')}
        </div>
        <div class="center mt-32 reveal"><button class="btn btn-gold btn-lg" id="hero-start2">Procedi ${SVG.icon('arrow','ic-ink')}</button></div>
      </div></section>
    </div>`;
    const next = () => { welcomeStep = 1; window.scrollTo(0, 0); renderWelcome(root); };
    $('#hero-start').onclick = next;
    $('#hero-start2').onclick = next;
    $('#hero-cue').onclick = () => $('.intro-sec').scrollIntoView({ behavior: 'smooth' });
    initReveal();
    // mostra topbar appena si scrolla
    const onScroll = () => topbarVisible(window.scrollY > window.innerHeight * 0.5);
    window.onscroll = onScroll;
  }

  function welcomeComeStudi(root) {
    window.onscroll = null;
    const opts = [
      ['manuale', 'Studio dal manuale + compendio', 'Uso i Manuali NLD insieme a un compendio di sintesi.'],
      ['compendio', 'Studio da una dispensa o compendio', 'Mi preparo principalmente su un SuperCompendio.'],
      ['nolibri', 'Non studio dai libri', 'Mi preparo con appunti, lezioni e materiali miei.']
    ];
    root.innerHTML = `<div class="screen active"><div class="onb"><div class="onb-card card card-gold card-pad">
      <div class="eyebrow">Passo 1 di 3</div>
      <h2 style="font-size:2rem;margin:8px 0 6px">Come studi?</h2>
      <p class="muted">Aiutaci a personalizzare gli strumenti. La tua scelta attiva o disattiva alcune funzioni (come il Livebook).</p>
      ${opts.map(o => `<button class="choice" data-k="${o[0]}"><div class="ch-t">${SVG.icon('book')} ${o[1]}</div><div class="ch-d">${o[2]}</div></button>`).join('')}
    </div></div></div>`;
    $$('.choice', root).forEach(b => b.onclick = () => {
      const k = b.dataset.k;
      state.studio = k; state.livebook = (k !== 'nolibri'); save(); buildDrawer();
      if (k === 'manuale') purchasePopup('Manuali', 'Acquista i Manuali di Neldiritto Editore', 'Manuali istituzionali e compendi per la tua materia, sempre ancorati alle fonti certificate.');
      else if (k === 'compendio') purchasePopup('SuperCompendi', 'Acquista i SuperCompendi di Neldiritto Editore', 'Sintesi rigorose e aggiornate, pensate per fissare gli schemi e ripassare prima della prova.');
      else { welcomeStep = 2; renderWelcome(root); }
    });
  }
  function purchasePopup(tag, title, body) {
    modal(`<div class="pill mb-16">${tag}</div><h3 class="serif">${esc(title)}</h3><p>${esc(body)}</p>
      <p class="txt-sm muted mt-8">In questa demo l'acquisto non è attivo.</p>
      <div class="row mt-24"><button class="btn btn-gold" id="pp-next">Continua ${SVG.icon('arrow','ic-ink')}</button><button class="btn btn-ghost" data-close>Chiudi</button></div>`);
    $('#pp-next').onclick = () => { closeModal(); welcomeStep = 2; renderWelcome($('#screens')); };
  }

  function welcomeCodice(root) {
    root.innerHTML = `<div class="screen active"><div class="onb"><div class="onb-card card card-gold card-pad">
      <div class="eyebrow">Passo 2 di 3</div>
      <h2 style="font-size:2rem;margin:8px 0 6px">Inserisci il codice del libro</h2>
      <p class="muted">Trovi il codice all'interno del tuo manuale o compendio NLD. Sblocca i contenuti collegati al testo.</p>
      <div class="field"><label>Codice di attivazione</label>
        <input class="input code-input" id="code-in" maxlength="6" placeholder="N" autocomplete="off"></div>
      <p class="txt-xs muted mt-8" id="code-hint">Demo: inserisci il codice <b>N</b> per continuare.</p>
      <div class="row mt-24"><button class="btn btn-gold btn-lg w-100" id="code-go">Attiva ${SVG.icon('check','ic-ink')}</button></div>
    </div></div></div>`;
    const inp = $('#code-in');
    inp.focus();
    const tryGo = () => {
      const v = (inp.value || '').trim().toUpperCase();
      if (v === 'N' || v === 'NPLUS' || v === 'NLD') { state.codice = true; save(); toast('Codice attivato'); welcomeStep = 3; renderWelcome(root); }
      else { $('#code-hint').innerHTML = '<b class="err">Codice non valido.</b> Per la demo usa il codice <b>N</b>.'; inp.focus(); }
    };
    $('#code-go').onclick = tryGo;
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') tryGo(); });
  }

  function welcomeImposta(root) {
    const obj = [['sufficiente', 'Sufficiente', 'Superare con sicurezza'], ['solido', 'Solido', 'Una preparazione robusta'], ['eccellente', 'Eccellente', 'Puntare al massimo']];
    const att = [['nulla', 'Non conosco nulla', 'Parto da zero'], ['base', 'Qualche base', 'Ho dato un\'occhiata'], ['discreta', 'Discreta', 'Conosco gli istituti'], ['ripasso', 'Solo ripasso', 'Devo rifinire']];
    root.innerHTML = `<div class="screen active"><div class="onb"><div class="onb-card card card-gold card-pad">
      <div class="eyebrow">Passo 3 di 3</div>
      <h2 style="font-size:2rem;margin:8px 0 6px">Imposta la prova</h2>
      <p class="muted">Da queste informazioni N+ costruisce, in modo automatico, il tuo piano di studio.</p>
      <div class="field"><label>Data dell'esame</label>
        <div class="row" style="gap:18px;align-items:center;flex-wrap:wrap">
          <input type="date" class="input" id="exam-date" value="${state.examDate}" min="${D.meta.oggi}" style="max-width:220px">
          <div><div class="daycount" id="daynum">—</div><div class="txt-xs muted">giorni all'esame · oggi è ${fmtDate(new Date(D.meta.oggi + 'T00:00:00'))}</div></div>
        </div>
      </div>
      <div class="field"><label>Grado di preparazione obiettivo</label>
        <div class="seg" id="seg-obj">${obj.map(o => `<button data-k="${o[0]}" class="${state.obiettivo === o[0] ? 'on' : ''}">${o[1]}<small>${o[2]}</small></button>`).join('')}</div></div>
      <div class="field"><label>Grado di preparazione attuale</label>
        <div class="seg" id="seg-att">${att.map(o => `<button data-k="${o[0]}" class="${state.attuale === o[0] ? 'on' : ''}">${o[1]}<small>${o[2]}</small></button>`).join('')}</div></div>
      <div class="row mt-24"><button class="btn btn-gold btn-lg w-100" id="gen-piano">${SVG.icon('sparkle','ic-ink')} Genera il piano di studio</button></div>
    </div></div></div>`;
    const dnum = $('#daynum');
    const upd = () => { dnum.textContent = daysUntil($('#exam-date').value); };
    $('#exam-date').addEventListener('input', () => { state.examDate = $('#exam-date').value; save(); upd(); });
    upd();
    $$('#seg-obj button').forEach(b => b.onclick = () => { $$('#seg-obj button').forEach(x => x.classList.remove('on')); b.classList.add('on'); state.obiettivo = b.dataset.k; save(); });
    $$('#seg-att button').forEach(b => b.onclick = () => { $$('#seg-att button').forEach(x => x.classList.remove('on')); b.classList.add('on'); state.attuale = b.dataset.k; save(); });
    $('#gen-piano').onclick = () => {
      state.onboarded = true; save(); buildDrawer();
      toast('Piano generato sui tuoi dati', 'sparkle');
      location.hash = '#/piano';
    };
  }

  /* ----------------------------- Avvio ------------------------------- */
  function boot() {
    shell();
    if (!location.hash) location.hash = state.onboarded ? '#/dashboard' : '#/welcome';
    else render();
    if (location.hash === '#/welcome' || (!state.onboarded)) { welcomeStep = 0; renderWelcome($('#screens')); }
  }
  // Avvio differito: garantisce che screens.js / screens2.js siano già stati
  // valutati (compaiono dopo app.js nell'HTML) prima di costruire la UI.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else setTimeout(boot, 0);
})();
