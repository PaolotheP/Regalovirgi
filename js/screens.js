/* =========================================================================
   N+ — SCHERMATE (parte 1): dashboard, piano, argomenti, argomento singolo,
   ed il motore delle esercitazioni (risposta multipla, vero/falso, domande
   aperte, esaminatore AI, richiamo libero, effetto Feynman).
   ========================================================================= */
(function () {
  const D = NPLUS, SVG = D.svg, esc = D.esc;
  D.screens = D.screens || {};
  const S = D.screens;
  const hooks = [];
  D.addAfter = (fn) => hooks.push(fn);
  D.afterRender = (sec, arg) => { bindCommon(); hooks.forEach(h => { try { h(sec, arg); } catch (e) { console.warn(e); } }); };

  const topicById = (id) => D.topics.find(t => t.id === id);
  D.topicById = topicById;

  /* shared bits */
  function head(eyebrow, title, sub) {
    return `<div class="page-head reveal"><div class="eyebrow">${esc(eyebrow)}</div><h1 class="serif">${esc(title)}</h1>${sub ? `<p>${esc(sub)}</p>` : ''}</div>`;
  }
  function back(route, label) { return `<div class="backlink" data-go="${route}">${SVG.icon('arrow', 'ic-ink')}<span style="transform:scaleX(-1);display:inline-block">${SVG.icon('arrow')}</span>${esc(label)}</div>`; }
  function backSimple(route, label) { return `<div class="backlink" data-go="${route}"><span style="display:inline-flex;transform:rotate(180deg)">${SVG.icon('arrow')}</span>${esc(label)}</div>`; }
  D.head = head; D.backSimple = backSimple;
  function fhead(tag, title, right) {
    return `<div class="fhead"><div class="fh-left">${SVG.logo}<span>${esc(title)}</span></div><span class="fh-tag">${esc(right || tag)}</span></div>`;
  }
  D.fhead = fhead;
  function certLine(fonte) { return `<div class="cert mt-16">${SVG.icon('check')}<span>Fonte certificata · ${esc(fonte)}</span></div>`; }
  D.certLine = certLine;

  /* common navigation + popups (delegation per render) */
  function bindCommon() {
    D.$$('[data-go]').forEach(b => b.onclick = (e) => { e.preventDefault(); D.goto(b.dataset.go); });
    D.$$('[data-tool]').forEach(b => b.onclick = () => {
      const [tool, topic] = b.dataset.tool.split(':');
      D.goto(`#/${tool}/${topic}`);
    });
  }

  /* ============================ DASHBOARD =========================== */
  S.dashboard = function () {
    const st = D.state(), g = D.daysUntil(st.examDate);
    const start = D.startPrep(), goal = D.goalPrep();
    const done = st.progress.answered;
    const cur = Math.min(goal, start + Math.round(done * 1.2));
    const studioLabel = { manuale: 'Manuale + compendio', compendio: 'Compendio / dispensa', nolibri: 'Senza libri' }[st.studio] || '—';
    return `
      <div class="wrap page">
        ${head('Bentornato su N+', 'Il tuo quadro di studio', 'Diritto penale · parte generale. Tutto ciò che ti serve per arrivare pronto alla prova, in un colpo d\'occhio.')}
        <div class="grid grid-3 reveal">
          <div class="card card-pad">
            <div class="eyebrow">All'esame</div>
            <div class="daycount mt-8">${g}</div>
            <div class="muted txt-sm">giorni · prova del ${D.fmtDate(new Date(st.examDate + 'T00:00:00'))}</div>
            <div class="divider"></div>
            <div class="spread"><span class="muted txt-sm">Metodo di studio</span><span class="pill pill-soft">${esc(studioLabel)}</span></div>
          </div>
          <div class="card card-pad center">
            <div class="eyebrow" style="text-align:left">Grado di preparazione (stima)</div>
            <div class="ring mt-16" style="--p:${cur};margin-inline:auto"><span>${cur}%</span></div>
            <div class="muted txt-sm mt-16">obiettivo: <b class="gold">${goal}%</b> · ${done} esercizi svolti</div>
          </div>
          <div class="card card-pad">
            <div class="eyebrow">Riprendi da dove eri</div>
            <div class="stack mt-16">
              <button class="btn btn-gold w-100" data-go="#/piano">${SVG.icon('calendar','ic-ink')} Vai al piano di studio</button>
              <button class="btn btn-ghost w-100" data-go="#/multipla">${SVG.icon('check')} Allenati con i quiz</button>
              <button class="btn btn-ghost w-100" data-go="#/ripasso">${SVG.icon('flame')} Ripasso last minute</button>
            </div>
          </div>
        </div>

        <div class="sec-title reveal"><div class="st-ic">${SVG.icon('book')}</div><div><h2 class="serif">Argomenti in evidenza</h2><div class="st-sub">10 argomenti con flusso completo: spiegazione, contenuti extra, esercitazione.</div></div></div>
        <div class="grid grid-3">
          ${D.topics.slice(0, 6).map(topicCard).join('')}
        </div>
        <div class="center mt-24 reveal"><button class="btn btn-outline" data-go="#/argomenti">Vedi tutti gli argomenti ${SVG.icon('arrow')}</button></div>

        <div class="sec-title reveal"><div class="st-ic">${SVG.icon('sparkle')}</div><div><h2 class="serif">Esercitati subito</h2><div class="st-sub">Tutti gli strumenti, sempre a portata di mano.</div></div></div>
        <div class="grid grid-auto">
          ${[['check','Risposta Multipla','#/multipla'],['split','Vero o Falso','#/verofalso'],['pen','Domande Aperte','#/aperta'],['mic','Esaminatore AI','#/esaminatore'],['bulb','Funzione Esempio','#/esempio'],['cards','Mappe e Flashcard','#/mappe'],['trophy','La Classifica','#/classifica'],['flame','Ripasso Last Minute','#/ripasso']]
            .map(t => `<div class="tool-card card reveal" data-go="${t[2]}"><div class="tk-ic">${SVG.icon(t[0])}</div><div><div class="tk-t">${t[1]}</div></div><span class="tk-arrow">${SVG.icon('arrow')}</span></div>`).join('')}
        </div>
      </div>`;
  };

  function topicCard(t) {
    return `<div class="topic-card card reveal" data-go="#/topic/${t.id}">
      <div class="tc-ic">${SVG.icon(t.icon)}</div>
      <div class="tc-num">Argomento ${String(t.n).padStart(2, '0')}</div>
      <h3 class="serif">${esc(t.title)}</h3>
      <p>${esc(t.subtitle)}</p>
      <div class="tc-meta"><span class="pill pill-soft">${t.quiz.length} quiz</span><span class="pill pill-soft">${t.flashcards.length} flashcard</span></div>
    </div>`;
  }

  /* ============================ ARGOMENTI =========================== */
  S.argomenti = function () {
    return `<div class="wrap page">
      ${head('Diritto penale · Parte generale', 'Gli argomenti', 'Dieci argomenti con flusso completo. In coda, gli argomenti in vetrina e le altre materie.')}
      <div class="grid grid-3">${D.topics.map(topicCard).join('')}</div>

      <div class="sec-title reveal"><div class="st-ic">${SVG.icon('layers')}</div><div><h2 class="serif">In vetrina</h2><div class="st-sub">Argomenti presenti nel piano, con scheda in arrivo.</div></div></div>
      <div class="grid grid-3">
        ${D.showcase.map(t => `<div class="topic-card card show-case reveal"><div class="tc-ic">${SVG.icon(t.icon)}</div><h3 class="serif">${esc(t.title)}</h3><p>${esc(t.desc)}</p><div class="tc-meta"><span class="pill pill-soft">${SVG.icon('lock')} vetrina</span></div></div>`).join('')}
      </div>

      <div class="sec-title reveal"><div class="st-ic">${SVG.icon('grad')}</div><div><h2 class="serif">Altre materie</h2><div class="st-sub">Disponibili nella versione completa della piattaforma.</div></div></div>
      <div class="grid grid-3">
        ${D.subjects.map(s => `<div class="card subject-card reveal"><h3 class="serif">${esc(s.name)}</h3><p class="muted txt-sm">${esc(s.desc)}</p></div>`).join('')}
      </div>
    </div>`;
  };

  /* ============================ ARGOMENTO =========================== */
  S.topic = function (id) {
    const t = topicById(id);
    if (!t) return S.argomenti();
    const toolMeta = {
      multipla: ['check', 'Risposta Multipla', `${t.quiz.length} domande con correzione e fonte`],
      verofalso: ['split', 'Vero o Falso Argomentato', 'Scegli e confronta la motivazione'],
      aperta: ['pen', 'Domande Aperte', 'Traccia di risposta certificata'],
      esaminatore: ['mic', 'Esaminatore AI', 'Simulazione d\'orale'],
      esempio: ['bulb', 'Funzione Esempio', 'Un esempio pratico e chiaro'],
      richiamo: ['eye', 'Richiamo Libero', 'A libro chiuso'],
      feynman: ['sparkle', 'Effetto Feynman', 'Spiega con parole tue']
    };
    return `<div class="wrap page">
      ${backSimple('#/argomenti', 'Tutti gli argomenti')}
      <div class="page-head reveal">
        <div class="row"><span class="pill">${SVG.logo} Diritto penale</span><span class="pill pill-soft">${esc(t.cap)}</span></div>
        <h1 class="serif" style="margin-top:14px">${esc(t.title)}</h1>
        <p>${esc(t.subtitle)}</p>
      </div>

      <div class="assunti reveal"><div class="as-label">Assunti</div><ul>${t.assunti.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>

      <div class="sec-title reveal"><div class="st-ic">${SVG.icon('book')}</div><div><h2 class="serif">Spiegazione</h2><div class="st-sub">Dal SuperCompendio di Diritto penale</div></div></div>
      <div class="card card-pad prose reveal">${t.spiegazione}${certLine(t.cap)}</div>

      <div class="sec-title reveal"><div class="st-ic">${SVG.icon('star')}</div><div><h2 class="serif">Punti chiave</h2><div class="st-sub">L'essenziale certificato dalla redazione</div></div></div>
      <div class="card card-pad reveal">${puntiList(t.puntiChiave)}</div>

      <div class="sec-title reveal"><div class="st-ic">${SVG.icon('cards')}</div><div><h2 class="serif">Contenuti extra per l'apprendimento</h2><div class="st-sub">Podcast, video e mappa di questo argomento</div></div></div>
      <div class="grid grid-3 reveal">
        <div class="tool-card card" data-go="#/podcast/${t.id}"><div class="tk-ic">${SVG.icon('mic')}</div><div><div class="tk-t">Podcast</div><div class="tk-d">${esc(t.podcast.title)}</div></div><span class="tk-arrow">${SVG.icon('arrow')}</span></div>
        <div class="tool-card card" data-go="#/video/${t.id}"><div class="tk-ic">${SVG.icon('video')}</div><div><div class="tk-t">Video lezione</div><div class="tk-d">${esc(t.video.title)}</div></div><span class="tk-arrow">${SVG.icon('arrow')}</span></div>
        <div class="tool-card card" data-go="#/mappe/${t.id}"><div class="tk-ic">${SVG.icon('map')}</div><div><div class="tk-t">Mappa concettuale</div><div class="tk-d">Il quadro d'insieme</div></div><span class="tk-arrow">${SVG.icon('arrow')}</span></div>
      </div>

      <div class="sec-title reveal"><div class="st-ic">${SVG.icon('target')}</div><div><h2 class="serif">Esercitazione</h2><div class="st-sub">Gli strumenti attivi per questo argomento</div></div></div>
      <div class="grid grid-2 reveal">
        ${t.tools.map(tk => { const m = toolMeta[tk]; return `<div class="tool-card card" data-tool="${tk}:${t.id}"><div class="tk-ic">${SVG.icon(m[0])}</div><div><div class="tk-t">${m[1]}</div><div class="tk-d">${m[2]}</div></div><span class="tk-arrow">${SVG.icon('arrow')}</span></div>`; }).join('')}
      </div>
    </div>`;
  };
  function puntiList(arr) {
    return `<ul class="stack" style="list-style:none">${arr.map((p, i) => `<li class="row" style="align-items:flex-start;gap:12px"><span class="np-chip" style="flex:none">${i + 1}</span><span style="padding-top:3px">${esc(p)}</span></li>`).join('')}</ul>`;
  }
  D.puntiList = puntiList;

  /* ===================================================================
   *  MOTORE ESERCITAZIONI
   * =================================================================== */
  const toolTitles = {
    multipla: ['Risposta Multipla', 'Quiz a scelta multipla, con spiegazione e fonte'],
    verofalso: ['Vero o Falso, ma Argomentato', 'Non basta scegliere: bisogna sostenere il perché'],
    aperta: ['Domande Aperte', 'Risposte distese, con una traccia di riferimento'],
    esaminatore: ['Esaminatore AI', 'Una simulazione d\'orale che incalza e valuta'],
    richiamo: ['Richiamo Libero', 'A libro chiuso, per scoprire cosa manca davvero'],
    feynman: ['Effetto Feynman', 'Se sai spiegarlo con semplicità, lo sai']
  };

  S.exerciseHub = function (tool, arg) {
    const tt = toolTitles[tool];
    if (!arg) {
      // selezione argomento
      const avail = D.topics.filter(t => t.tools.includes(tool));
      return `<div class="wrap page">
        ${head('Esercitazione', tt[0], tt[1])}
        <p class="muted reveal" style="margin-top:-12px">Scegli l'argomento su cui esercitarti.</p>
        <div class="grid grid-3 mt-24">
          ${avail.map(t => `<div class="topic-card card reveal" data-tool="${tool}:${t.id}"><div class="tc-ic">${SVG.icon(t.icon)}</div><h3 class="serif">${esc(t.title)}</h3><p>${esc(t.subtitle)}</p>${tool === 'multipla' ? `<div class="tc-meta"><span class="pill pill-soft">${t.quiz.length} domande</span></div>` : ''}</div>`).join('')}
        </div>
      </div>`;
    }
    const t = topicById(arg);
    if (!t) return S.exerciseHub(tool, null);
    return `<div class="wrap page">
      ${backSimple(`#/${tool}`, 'Scegli un altro argomento')}
      ${fhead('', `Diritto penale · ${tt[0]}`, t.title)}
      <div class="fbody" id="ex-host" data-tool="${tool}" data-topic="${arg}"></div>
    </div>`;
  };

  /* ---- runner state ---- */
  let QZ = null;

  D.addAfter(function (sec, arg) {
    const toolSecs = ['multipla', 'verofalso', 'aperta', 'esaminatore', 'richiamo', 'feynman'];
    if (!toolSecs.includes(sec) || !arg) return;
    const host = D.$('#ex-host');
    if (!host) return;
    const tool = host.dataset.tool, t = topicById(host.dataset.topic);
    if (tool === 'multipla') runMultipla(host, t);
    else if (tool === 'verofalso') runVeroFalso(host, t);
    else if (tool === 'aperta') runAperta(host, t);
    else if (tool === 'esaminatore') runEsaminatore(host, t);
    else if (tool === 'richiamo') runRichiamo(host, t);
    else if (tool === 'feynman') runFeynman(host, t);
  });

  /* ---------------- Risposta Multipla (pienamente funzionante) ------- */
  function runMultipla(host, t) {
    QZ = { topic: t, idx: 0, score: 0, answered: false };
    renderQ();
    function renderQ() {
      const q = t.quiz[QZ.idx];
      const pct = Math.round((QZ.idx) / t.quiz.length * 100);
      host.innerHTML = `
        <div class="spread"><span class="pill pill-soft">Domanda ${QZ.idx + 1} / ${t.quiz.length}</span><span class="muted txt-sm">Punteggio: <b class="gold">${QZ.score}</b></span></div>
        <div class="qprogress mt-16"><span style="width:${pct}%"></span></div>
        <h3 class="serif mt-24" style="font-size:1.4rem">${esc(q.q)}</h3>
        <div id="opts" class="mt-16">${q.opts.map((o, i) => `<button class="quiz-opt" data-i="${i}"><span class="qo-letter">${'ABCD'[i]}</span><span>${esc(o)}</span><span class="qo-mark"></span></button>`).join('')}</div>
        <div id="ex-explain"></div>
        <div id="ex-next" class="mt-24"></div>`;
      QZ.answered = false;
      D.$$('#opts .quiz-opt', host).forEach(b => b.onclick = () => pick(parseInt(b.dataset.i), q));
    }
    function pick(i, q) {
      if (QZ.answered) return;
      QZ.answered = true;
      const opts = D.$$('#opts .quiz-opt', host);
      opts.forEach(b => b.classList.add('disabled'));
      opts[q.correct].classList.add('correct');
      opts[q.correct].querySelector('.qo-mark').innerHTML = SVG.icon('check');
      const ok = i === q.correct;
      if (!ok) { opts[i].classList.add('wrong'); opts[i].querySelector('.qo-mark').innerHTML = SVG.icon('x'); }
      else QZ.score++;
      D.$('#ex-explain', host).innerHTML = `<div class="explain"><div class="ex-label">${ok ? 'Corretta' : 'Perché la risposta esatta è ' + 'ABCD'[q.correct]}</div><p>${esc(q.why)}</p><div class="cert mt-16">${SVG.icon('check')}<span>${esc(q.fonte)}</span></div></div>`;
      D.recordAnswer(ok);
      const last = QZ.idx === t.quiz.length - 1;
      D.$('#ex-next', host).innerHTML = last
        ? `<button class="btn btn-gold btn-lg" id="q-fin">Vedi il risultato ${SVG.icon('arrow', 'ic-ink')}</button>`
        : `<button class="btn btn-gold btn-lg" id="q-next">Domanda successiva ${SVG.icon('arrow', 'ic-ink')}</button>`;
      const nb = D.$('#q-next', host); if (nb) nb.onclick = () => { QZ.idx++; renderQ(); };
      const fb = D.$('#q-fin', host); if (fb) fb.onclick = finish;
    }
    function finish() {
      const pct = Math.round(QZ.score / t.quiz.length * 100);
      const msg = pct >= 80 ? 'Ottimo controllo dell\'istituto.' : pct >= 50 ? 'Buona base: rivedi i punti chiave.' : 'Riprendi la spiegazione e riprova.';
      host.innerHTML = `<div class="center" style="padding:20px 0">
        <div class="eyebrow">Esercitazione completata</div>
        <div class="scorebig mt-16">${QZ.score}/${t.quiz.length}</div>
        <p class="muted mt-8">${pct}% di risposte corrette · ${esc(msg)}</p>
        <div class="row mt-32" style="justify-content:center">
          <button class="btn btn-gold" id="q-retry">Riprova ${SVG.icon('arrow', 'ic-ink')}</button>
          <button class="btn btn-ghost" data-go="#/topic/${t.id}">Torna all'argomento</button>
          <button class="btn btn-ghost" data-go="#/classifica">Vedi la classifica ${SVG.icon('trophy')}</button>
        </div>
      </div>`;
      D.$('#q-retry', host).onclick = () => runMultipla(host, t);
      bindCommon();
    }
  }

  /* ---------------- Vero/Falso Argomentato --------------------------- */
  function runVeroFalso(host, t) {
    let idx = 0;
    render();
    function render() {
      const vf = t.veroFalso[idx];
      host.innerHTML = `
        <div class="spread"><span class="pill pill-soft">Affermazione ${idx + 1} / ${t.veroFalso.length}</span></div>
        <h3 class="serif mt-16" style="font-size:1.35rem">${esc(vf.aff)}</h3>
        <div class="row mt-24">
          <button class="btn btn-ghost btn-lg" data-v="true">Vero</button>
          <button class="btn btn-ghost btn-lg" data-v="false">Falso</button>
        </div>
        <div id="vf-after"></div>`;
      D.$$('[data-v]', host).forEach(b => b.onclick = () => choose(b.dataset.v === 'true', vf));
    }
    function choose(val, vf) {
      const ok = val === vf.vero;
      D.recordAnswer(ok);
      const after = D.$('#vf-after', host);
      after.innerHTML = `
        <div class="${ok ? 'pill pill-ok' : 'pill'} mt-24" style="${ok ? '' : 'background:var(--err-bg);color:var(--err);border-color:rgba(232,105,79,.3)'}">${ok ? SVG.icon('check') : SVG.icon('x')} La risposta corretta è «${vf.vero ? 'Vero' : 'Falso'}» — tu hai scelto «${val ? 'Vero' : 'Falso'}»</div>
        <div class="field mt-24"><label>La tua motivazione (facoltativa)</label><textarea class="input" id="vf-mot" placeholder="Spiega perché, come faresti a voce all'esame…"></textarea></div>
        <button class="btn btn-gold mt-16" id="vf-send">Confronta con la traccia attesa</button>
        <div id="vf-trace"></div>`;
      D.$('#vf-send', host).onclick = () => {
        D.$('#vf-trace', host).innerHTML = D.aiNotice(`<p><b class="gold">Traccia attesa:</b> ${esc(vf.traccia)}</p>`) + certLine(t.cap) + nextBtn();
        D.markTool('verofalso');
        wireNext();
      };
    }
    function nextBtn() {
      const last = idx === t.veroFalso.length - 1;
      return `<div class="mt-24">${last ? `<button class="btn btn-ghost" data-go="#/topic/${t.id}">Torna all'argomento</button>` : `<button class="btn btn-gold" id="vf-next">Affermazione successiva ${SVG.icon('arrow', 'ic-ink')}</button>`}</div>`;
    }
    function wireNext() { const b = D.$('#vf-next', host); if (b) b.onclick = () => { idx++; render(); }; bindCommon(); }
  }

  /* ---------------- Domande Aperte ----------------------------------- */
  function runAperta(host, t) {
    const da = t.domandaAperta;
    host.innerHTML = `
      <span class="pill pill-soft">Domanda aperta · risposta guidata</span>
      <h3 class="serif mt-16" style="font-size:1.35rem">${esc(da.q)}</h3>
      <div class="field"><label>La tua risposta</label><textarea class="input" id="ap-txt" placeholder="Esponi l'istituto in modo disteso e ordinato, come all'orale…"></textarea></div>
      <button class="btn btn-gold mt-8" id="ap-send">Invia e confronta con la traccia</button>
      <div id="ap-after"></div>
      <div class="divider mt-32"></div>
      <div class="card card-pad" style="background:rgba(232,178,76,.05)">
        <h4 class="serif" style="font-size:1.1rem">Hai già sostenuto questo esame?</h4>
        <p class="muted txt-sm mt-8">Aggiungi una domanda che ti è stata posta davvero all'orale: aiuterà chi preparerà la prova dopo di te.</p>
        <div class="tag-input-row"><input class="input" id="oral-in" placeholder="Scrivi la domanda uscita al tuo orale…"><button class="btn btn-gold" id="oral-add">Aggiungi</button></div>
        <div class="chip-list" id="oral-list"></div>
      </div>`;
    D.$('#ap-send', host).onclick = () => {
      D.markTool('aperta');
      D.$('#ap-after', host).innerHTML = D.aiNotice(`<p><b class="gold">Traccia di risposta certificata:</b></p><p>${esc(da.traccia)}</p>`) + certLine(da.fonte);
    };
    renderOral();
    D.$('#oral-add', host).onclick = addOral;
    D.$('#oral-in', host).addEventListener('keydown', e => { if (e.key === 'Enter') addOral(); });
    function addOral() {
      const v = D.$('#oral-in', host).value.trim();
      if (!v) return;
      D.state().oral.push(v); D.save();
      D.$('#oral-in', host).value = '';
      renderOral(); D.toast('Domanda aggiunta');
    }
    function renderOral() {
      const list = D.$('#oral-list', host);
      const arr = D.state().oral;
      list.innerHTML = arr.length ? arr.map((q, i) => `<span class="chip">${SVG.icon('chat')} ${esc(q)} <button data-i="${i}">${SVG.icon('x')}</button></span>`).join('') : '<span class="muted txt-sm">Nessuna domanda aggiunta finora.</span>';
      D.$$('[data-i]', list).forEach(b => b.onclick = () => { arr.splice(parseInt(b.dataset.i), 1); D.save(); renderOral(); });
    }
  }

  /* ---------------- Esaminatore AI ----------------------------------- */
  function runEsaminatore(host, t) {
    const ex = t.esaminatore;
    host.innerHTML = `
      <span class="pill pill-soft">Simulazione orale</span>
      <div class="card card-pad mt-16" style="background:rgba(255,255,255,.03)">
        <div class="row" style="align-items:flex-start"><div class="di-ic" style="background:rgba(232,178,76,.14)">${SVG.icon('mic')}</div>
        <div><div class="txt-xs muted">Esaminatore N+</div><p style="margin-top:4px">${esc(ex.q)}</p></div></div>
      </div>
      <div class="field mt-16"><label>La tua risposta</label><textarea class="input" id="es-txt" placeholder="Risponda come davanti alla commissione…"></textarea></div>
      <button class="btn btn-gold" id="es-send">Invia risposta</button>
      <div id="es-after"></div>`;
    D.$('#es-send', host).onclick = () => {
      D.markTool('esaminatore');
      const v = ex.valutazione;
      const grid = v.voci.map(r => `<div class="spread"><span class="muted txt-sm">${esc(r[0])}</span><span class="gold" style="font-family:var(--display);font-weight:800">${r[1]}</span></div>`).join('<div class="divider" style="margin:10px 0"></div>');
      D.$('#es-after', host).innerHTML = D.aiNotice(`<div class="mb-16"><b class="gold">Valutazione-segnaposto della risposta</b></div>${grid}<div class="divider"></div><p>${esc(v.commento)}</p>`) +
        `<div class="mt-24"><button class="btn btn-ghost" data-go="#/topic/${t.id}">Torna all'argomento</button></div>`;
      bindCommon();
    };
  }

  /* ---------------- Richiamo Libero ---------------------------------- */
  function runRichiamo(host, t) {
    const rl = t.richiamoLibero;
    host.innerHTML = `
      <span class="pill pill-soft">A libro chiuso</span>
      <h3 class="serif mt-16" style="font-size:1.3rem">${esc(rl.prompt)}</h3>
      <div class="field"><label>Quello che ricordi</label><textarea class="input" id="rl-txt" style="min-height:160px" placeholder="Scrivi tutto ciò che ti viene in mente, senza guardare il manuale…"></textarea></div>
      <button class="btn btn-gold" id="rl-send">Confronta con la copertura attesa</button>
      <div id="rl-after"></div>`;
    D.$('#rl-send', host).onclick = () => {
      D.markTool('richiamo');
      const items = rl.attesi.map(a => `<div class="lb-row" style="margin-top:8px"><span class="dl-done">${SVG.icon('check')}</span><span>${esc(a)}</span></div>`).join('');
      D.$('#rl-after', host).innerHTML = D.aiNotice(
        `<p><b class="gold">Copertura attesa (${rl.attesi.length} nuclei):</b></p>${items}<p class="txt-sm muted mt-16">In N+ il sistema confronterebbe il tuo testo con il manuale, evidenziando ciò che è saldo e ciò che manca.</p>`) + certLine(rl.fonte);
    };
  }

  /* ---------------- Effetto Feynman ---------------------------------- */
  function runFeynman(host, t) {
    const f = t.feynman;
    host.innerHTML = `
      <span class="pill pill-soft">Spiega con parole tue</span>
      <h3 class="serif mt-16" style="font-size:1.3rem">${esc(f.prompt)}</h3>
      <div class="field"><label>La tua spiegazione</label><textarea class="input" id="fy-txt" style="min-height:150px" placeholder="Spiegalo come a chi non ha mai aperto un codice…"></textarea></div>
      <button class="btn btn-gold" id="fy-send">Invia la spiegazione</button>
      <div id="fy-after"></div>`;
    D.$('#fy-send', host).onclick = () => {
      D.markTool('feynman');
      D.$('#fy-after', host).innerHTML = D.aiNotice(`<p><b class="gold">Riscontro-segnaposto sulla spiegazione:</b></p><p>${esc(f.riscontro)}</p>`) + certLine(t.cap);
    };
  }

  /* -------------------- progress / scoring --------------------------- */
  D.recordAnswer = function (ok) {
    const p = D.state().progress;
    p.answered++; if (ok) { p.correct++; p.points += 10; } else { p.points += 3; }
    D.save();
  };
  D.markTool = function (tool) {
    const p = D.state().progress;
    if (!p.tools[tool]) { p.tools[tool] = 0; p.points += 5; }
    p.tools[tool]++; p.answered++; D.save();
  };
  D.hasExercised = () => D.state().progress.answered > 0;

  /* ============================ ESEMPI ============================== */
  S.esempi = function (arg) {
    const list = D.topics.filter(t => t.esempio);
    return `<div class="wrap page">
      ${head('Funzione Esempio', 'Esempi pratici', 'Per ogni istituto, un esempio concreto, chiaro e semplice — già scritto dalla redazione. Niente AI: solo casi che fissano l\'idea.')}
      <div class="grid grid-2">
        ${list.map(t => `<div class="card card-pad reveal">
          <div class="row" style="align-items:flex-start;gap:12px"><div class="tk-ic" style="flex:none">${SVG.icon('bulb')}</div>
          <div><div class="eyebrow" style="text-align:left">${esc(t.title)}</div><h3 class="serif" style="font-size:1.2rem;margin-top:4px">${esc(t.esempio.titolo)}</h3></div></div>
          <p class="prose mt-16" style="color:var(--ink-soft)">${t.esempio.testo}</p>
          <div class="mt-16"><button class="btn btn-ghost btn-sm" data-go="#/topic/${t.id}">Vai all'argomento ${SVG.icon('arrow')}</button></div>
        </div>`).join('')}
      </div>
    </div>`;
  };

  /* ============================ PALESTRA ============================= */
  S.palestra = function () {
    return `<div class="wrap page">
      ${head('Esercitazione', 'Palestra di Scrittura', 'La prova scritta si supera scrivendo. Qui ti alleni su tracce realistiche, con un riscontro su struttura, fondamento normativo, completezza e chiarezza.')}
      <div class="card reveal">${fhead('', 'Diritto penale · Palestra di Scrittura', 'Parere motivato')}
        <div class="fbody">
          <div class="eyebrow">Traccia</div>
          <p class="mt-8">Tizio, nel corso di una colluttazione, sferra un violento pugno a Caio con l'intento di percuoterlo; Caio cade, batte la testa e muore. Rediga il candidato un breve parere sul titolo di responsabilità di Tizio, distinguendolo dalle figure contigue.</p>
          <div class="field"><label>Il tuo elaborato</label><textarea class="input" id="pal-txt" style="min-height:200px" placeholder="Imposta il parere: qualificazione, fondamento normativo, distinzioni…"></textarea></div>
          <button class="btn btn-gold" id="pal-send">Invia per il riscontro</button>
          <div id="pal-after"></div>
        </div>
      </div>
    </div>`;
  };
  D.addAfter(function (sec) {
    if (sec !== 'palestra') return;
    const b = D.$('#pal-send'); if (!b) return;
    b.onclick = () => {
      D.markTool('palestra');
      D.$('#pal-after').innerHTML = D.aiNotice(
        `<p><b class="gold">Riscontro-segnaposto sull'elaborato:</b></p>
         <div class="spread mt-8"><span class="muted txt-sm">Struttura del parere</span><span class="gold" style="font-family:var(--display);font-weight:800">8.0</span></div><div class="divider" style="margin:10px 0"></div>
         <div class="spread"><span class="muted txt-sm">Fondamento normativo</span><span class="gold" style="font-family:var(--display);font-weight:800">8.5</span></div><div class="divider" style="margin:10px 0"></div>
         <div class="spread"><span class="muted txt-sm">Completezza</span><span class="gold" style="font-family:var(--display);font-weight:800">7.0</span></div><div class="divider" style="margin:10px 0"></div>
         <div class="spread"><span class="muted txt-sm">Chiarezza</span><span class="gold" style="font-family:var(--display);font-weight:800">8.0</span></div>
         <div class="divider"></div>
         <p>Impostazione corretta: il caso integra l'omicidio preterintenzionale (art. 584), volendo Tizio percuotere/ledere ma derivandone la morte. Per la completezza, andava sviluppata la distinzione con l'omicidio doloso (anche con dolo eventuale) e con l'omicidio colposo, richiamando il dibattito sulla natura (dolo misto a colpa).</p>`) + certLine('SuperCompendio, Cap. 5 — §7');
    };
  });

})();
