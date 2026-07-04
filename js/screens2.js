/* =========================================================================
   N+ — SCHERMATE (parte 2): piano, podcast/video, punti chiave, mappe e
   flashcard, tutor, livebook, libreria, classifica, diario, mentori, Q&A,
   bandi & concorsi, ripasso last minute.
   ========================================================================= */
(function () {
  const D = NPLUS, SVG = D.svg, esc = D.esc, S = D.screens;
  const head = D.head, backSimple = D.backSimple, fhead = D.fhead, cert = D.certLine, topicById = D.topicById;
  const $ = D.$, $$ = D.$$;

  /* ============================== PIANO ============================= */
  S.piano = function () {
    const st = D.state(), g = D.daysUntil(st.examDate);
    const start = D.startPrep(), goal = D.goalPrep();
    const ex = new Date(st.examDate + 'T00:00:00');
    const today = new Date(D.meta.oggi + 'T00:00:00');
    // costruzione meccanica delle tappe sui ~10 argomenti
    const tps = D.topics;
    const tappe = tps.map((t, i) => {
      const frac = (i + 1) / (tps.length + 1);
      const day = Math.round(D.daysUntil(st.examDate) * frac);
      const date = D.addDays(D.meta.oggi, day);
      return { t, date, verify: false };
    });
    // inserisci verifiche periodiche
    const half = Math.floor(tappe.length / 2);
    const verifiche = [
      { label: 'Verifica intermedia + ripasso', date: tappe[half] ? tappe[half].date : ex, verify: true, after: half },
      { label: 'Simulazione finale + ripasso last minute', date: D.addDays(D.meta.oggi, Math.max(1, D.daysUntil(st.examDate) - 2)), verify: true, after: tappe.length }
    ];
    const pies = [
      ['Parte generale', Math.min(goal, start + 18)],
      ['Elemento soggettivo', Math.min(goal, start + 6)],
      ['Cause di giustificazione', Math.min(goal, start - 4)]
    ];
    let steps = '';
    tappe.forEach((tp, i) => {
      steps += `<div class="tl-step" data-go="#/topic/${tp.t.id}"><div class="tl-dot">${tp.t.n}</div>
        <div class="tl-card"><div class="spread"><div><div class="tl-when">${D.fmtDate(tp.date)}</div><h4>${esc(tp.t.title)}</h4><div class="tl-date muted txt-sm">${esc(tp.t.subtitle)}</div></div><span class="tl-tag">STUDIO</span></div></div></div>`;
      const v = verifiche.find(x => x.after === i + 1);
      if (v) steps += `<div class="tl-step verify"><div class="tl-dot">${SVG.icon('check')}</div><div class="tl-card"><div class="spread"><div><div class="tl-when">${D.fmtDate(v.date)}</div><h4>${esc(v.label)}</h4></div><span class="tl-tag v">VERIFICA</span></div></div></div>`;
    });

    return `<div class="wrap page">
      ${head('Personalizzazione', 'Il tuo piano di studio', `Generato in automatico dai tuoi dati: ${g} giorni alla prova, obiettivo «${st.obiettivo}», partenza «${st.attuale}». Rivedere a intervalli crescenti e alternare gli argomenti.`)}
      <div class="grid grid-3 reveal">
        ${pies.map(p => `<div class="card card-pad center"><div class="ring" style="--p:${p[1]};margin-inline:auto"><span>${p[1]}%</span></div><div class="muted txt-sm mt-16">${esc(p[0])}</div></div>`).join('')}
      </div>

      <div class="grid reveal" style="grid-template-columns:1.6fr .9fr;gap:18px;margin-top:26px">
        <div class="card card-pad">
          <div class="spread mb-16"><h2 class="serif" style="font-size:1.4rem">Timeline a tappe</h2><span class="pill">${tps.length} tappe · ${g} giorni</span></div>
          <div class="timeline">${steps}</div>
        </div>
        <div class="stack">
          <div class="card card-pad">
            <div class="tk-ic mb-16">${SVG.icon('chat')}</div>
            <h3 class="serif" style="font-size:1.15rem">Q&A sul corso</h3>
            <p class="muted txt-sm mt-8">Le domande di chi ha già sostenuto l'esame di Diritto penale.</p>
            <button class="btn btn-ghost btn-sm mt-16 w-100" data-go="#/qa">Apri le Q&A ${SVG.icon('arrow')}</button>
          </div>
          <div class="card card-pad">
            <div class="tk-ic mb-16">${SVG.icon('grad')}</div>
            <h3 class="serif" style="font-size:1.15rem">Mentore ex studente</h3>
            <p class="muted txt-sm mt-8">Confrontati con chi quell'esame l'ha già superato.</p>
            <button class="btn btn-ghost btn-sm mt-16 w-100" data-go="#/mentori">Trova un mentore ${SVG.icon('arrow')}</button>
          </div>
        </div>
      </div>
      <div class="center mt-32 reveal"><button class="btn btn-gold btn-lg" data-go="#/dashboard">Vai alla dashboard ${SVG.icon('arrow', 'ic-ink')}</button></div>
    </div>`;
  };
  // timeline grid responsive fix on small screens handled by CSS fallback below
  D.addAfter(function (sec) {
    if (sec === 'piano') {
      const g = $('.grid[style*="1.6fr"]'); if (g && window.innerWidth < 820) g.style.gridTemplateColumns = '1fr';
    }
  });

  /* ===================== PLAYER (podcast / video) =================== */
  function playerBlock(kind, item, topic) {
    const cover = SVG.cover(item.title, kind);
    const chapters = item.chapters.map((c, i) => `<div class="chapter ${i === 0 ? 'on' : ''}" data-i="${i}"><span class="ch-n">${i + 1}</span><span>${esc(c[0])}</span><span class="ch-time">${c[1]}</span></div>`).join('');
    return `<div class="card player reveal" data-player>
      <div class="pl-cover">${cover}</div>
      <div class="spread mt-16"><div><div class="txt-xs muted">${kind === 'video' ? 'Video lezione' : 'Audio dal manuale'} · ${esc(topic.title)}</div><h3 class="serif" style="font-size:1.2rem">${esc(item.title)}</h3><div class="muted txt-sm">${esc(item.sub)}</div></div></div>
      <audio preload="metadata" data-audio><source src="Canzone.m4a" type="audio/mp4"></audio>
      <div class="pl-controls">
        <button class="pl-play" data-play>${SVG.icon('play', 'ic-ink')}</button>
        <div class="pl-bar" data-bar><span></span></div>
        <div class="pl-time" data-time>0:00 / 0:00</div>
        <button class="pl-speed" data-speed>1×</button>
      </div>
      <div class="chapters">${chapters}</div>
      <p class="txt-xs muted mt-16">Player dimostrativo: i capitoli, la barra di avanzamento e la velocità sono pienamente funzionanti su una traccia audio di esempio.</p>
    </div>`;
  }
  function wirePlayers() {
    $$('[data-player]').forEach(p => {
      const audio = $('[data-audio]', p), playBtn = $('[data-play]', p), bar = $('[data-bar]', p), fill = $('span', bar), time = $('[data-time]', p), speed = $('[data-speed]', p);
      const fmt = t => { t = t || 0; const m = Math.floor(t / 60), s = Math.floor(t % 60); return `${m}:${String(s).padStart(2, '0')}`; };
      const upd = () => { const d = audio.duration || 0; fill.style.width = (d ? (audio.currentTime / d * 100) : 0) + '%'; time.textContent = `${fmt(audio.currentTime)} / ${fmt(d)}`; };
      playBtn.onclick = () => { if (audio.paused) { audio.play().catch(() => {}); playBtn.innerHTML = SVG.icon('pause', 'ic-ink'); } else { audio.pause(); playBtn.innerHTML = SVG.icon('play', 'ic-ink'); } };
      audio.addEventListener('timeupdate', upd);
      audio.addEventListener('loadedmetadata', upd);
      audio.addEventListener('ended', () => { playBtn.innerHTML = SVG.icon('play', 'ic-ink'); });
      bar.onclick = e => { const r = bar.getBoundingClientRect(); const d = audio.duration || 0; audio.currentTime = ((e.clientX - r.left) / r.width) * d; upd(); };
      const speeds = [1, 1.25, 1.5, 2, 0.75]; let si = 0;
      speed.onclick = () => { si = (si + 1) % speeds.length; audio.playbackRate = speeds[si]; speed.textContent = speeds[si] + '×'; };
      $$('.chapter', p).forEach(c => c.onclick = () => {
        $$('.chapter', p).forEach(x => x.classList.remove('on')); c.classList.add('on');
        const i = parseInt(c.dataset.i), n = $$('.chapter', p).length, d = audio.duration || 0;
        audio.currentTime = d * (i / n); if (audio.paused) { audio.play().catch(() => {}); playBtn.innerHTML = SVG.icon('pause', 'ic-ink'); } upd();
      });
    });
  }
  D.addAfter(function (sec) { if (['podcast', 'video'].includes(sec)) wirePlayers(); });

  function mediaHub(kind) {
    const lbl = kind === 'video' ? ['Contenuti', 'Video Lezioni', 'Lezioni brevi, agganciate alle pagine del libro. Scegli l\'argomento.'] : ['Contenuti', 'Podcast di Studio', 'Il manuale da ascoltare, mentre fai altro. Scegli l\'argomento.'];
    return `<div class="wrap page">${head(lbl[0], lbl[1], lbl[2])}
      <div class="grid grid-3">${D.topics.map(t => { const it = kind === 'video' ? t.video : t.podcast; return `<div class="topic-card card reveal" data-go="#/${kind}/${t.id}"><div class="tc-ic">${SVG.icon(kind === 'video' ? 'video' : 'mic')}</div><h3 class="serif" style="font-size:1.12rem">${esc(it.title)}</h3><p>${esc(t.title)}</p><div class="tc-meta"><span class="pill pill-soft">${it.chapters.length} capitoli</span></div></div>`; }).join('')}</div>
    </div>`;
  }
  S.podcast = function (arg) {
    if (!arg) return mediaHub('podcast');
    const t = topicById(arg); if (!t) return mediaHub('podcast');
    return `<div class="wrap page">${backSimple('#/podcast', 'Tutti i podcast')}${head('Podcast di Studio', t.podcast.title, t.podcast.sub)}${playerBlock('podcast', t.podcast, t)}</div>`;
  };
  S.video = function (arg) {
    if (!arg) return mediaHub('video');
    const t = topicById(arg); if (!t) return mediaHub('video');
    return `<div class="wrap page">${backSimple('#/video', 'Tutte le video lezioni')}${head('Video Lezioni', t.video.title, t.video.sub)}${playerBlock('video', t.video, t)}</div>`;
  };

  /* ========================= PUNTI CHIAVE ========================== */
  S.punti = function () {
    return `<div class="wrap page">${head('Sintesi e memoria', 'Punti Chiave in Evidenza', 'L\'essenziale di ogni argomento, isolato e messo in chiaro. Assunti certificati dalla redazione NLD.')}
      <div class="stack">
        ${D.topics.map(t => `<div class="card reveal">${fhead('', 'Diritto penale · Punti chiave', t.title)}
          <div class="fbody"><div class="cert mb-16">${SVG.icon('check')}<span>Assunti certificati · ${esc(t.cap)}</span></div>${D.puntiList(t.puntiChiave)}</div></div>`).join('')}
        <div class="card reveal">${fhead('', 'Diritto penale · Punti chiave', 'Approfondimenti')}
          <div class="fbody">${D.puntiList(D.puntiExtra.map(p => p.testo))}</div></div>
      </div>
    </div>`;
  };

  /* ====================== MAPPE E FLASHCARD ======================== */
  S.mappe = function (arg) {
    const topic = arg ? topicById(arg) : null;
    const cards = [];
    D.topics.forEach(t => t.flashcards.forEach(f => cards.push({ topic: t.title, front: f[0], back: f[1] })));
    D.flashcardsGen.forEach(f => cards.push({ topic: f.topic, front: f.front, back: f.back }));
    const mapId = topic ? topic.id : 'scriminanti';
    const mapTitle = topic ? topic.title : 'Le cause di giustificazione';
    return `<div class="wrap page">${head('Sintesi e memoria', 'Mappe e Flashcard', 'Prima il quadro d\'insieme, poi l\'allenamento del richiamo. Tocca una flashcard per girarla.')}
      <div class="sec-title reveal"><div class="st-ic">${SVG.icon('map')}</div><div><h2 class="serif">Mappa concettuale</h2><div class="st-sub">${esc(mapTitle)}</div></div></div>
      <div class="card mappa-wrap reveal">${SVG.map(mapId)}</div>
      ${!topic ? `<div class="row mt-16 reveal" style="gap:8px;flex-wrap:wrap">${D.topics.map(t => `<button class="btn btn-ghost btn-sm" data-go="#/mappe/${t.id}">${esc(t.title)}</button>`).join('')}</div>` : `<div class="mt-16 reveal"><button class="btn btn-ghost btn-sm" data-go="#/mappe">Vedi tutte le mappe</button></div>`}

      <div class="sec-title reveal"><div class="st-ic">${SVG.icon('cards')}</div><div><h2 class="serif">Flashcard</h2><div class="st-sub">${cards.length} carte · fronte/retro su tutti gli argomenti</div></div></div>
      <div class="grid grid-3" id="fc-grid">
        ${cards.map((c, i) => `<div class="flashcard reveal" data-fc="${i}"><div class="flashcard-inner">
          <div class="flashcard-face flashcard-front"><div class="fc-label">${esc(c.topic)}</div><div class="fc-text">${esc(c.front)}</div><span class="fc-hint">tocca per girare</span></div>
          <div class="flashcard-face flashcard-back"><div class="fc-label">Retro</div><div class="fc-text">${esc(c.back)}</div></div>
        </div></div>`).join('')}
      </div>
    </div>`;
  };
  D.addAfter(function (sec) { if (sec === 'mappe') $$('[data-fc]').forEach(f => f.onclick = () => f.classList.toggle('flip')); });

  /* ============================= TUTOR ============================= */
  S.tutor = function () {
    return `<div class="wrap page">${head('Assistenza AI', 'Tutor AI', 'Un assistente a cui chiedere chiarimenti mentre studi: in N+ risponde solo sui contenuti certificati del manuale e cita la pagina.')}
      <div class="card reveal">${fhead('', 'Diritto penale · Tutor AI', 'Solo fonti certificate')}
        <div class="fbody">
          <div class="card card-pad" style="background:rgba(255,255,255,.03)"><div class="row" style="align-items:flex-start"><div class="di-ic" style="background:rgba(232,178,76,.14)">${SVG.icon('chat')}</div><div><div class="txt-xs muted">Tutor N+</div><p style="margin-top:4px">Ciao! Fammi una domanda su un capitolo della parte generale: dolo, causalità, cause di giustificazione, imputabilità…</p></div></div></div>
          <div class="field mt-16"><label>La tua domanda</label><input class="input" id="tutor-in" placeholder="Es. Qual è la differenza tra dolo eventuale e colpa cosciente?"></div>
          <button class="btn btn-gold" id="tutor-send">Invia ${SVG.icon('arrow', 'ic-ink')}</button>
          <div id="tutor-after"></div>
        </div>
      </div>
    </div>`;
  };
  D.addAfter(function (sec) {
    if (sec !== 'tutor') return;
    const send = $('#tutor-send'); if (!send) return;
    const go = () => {
      $('#tutor-after').innerHTML = D.aiNotice(`<p>In N+, ad una domanda sul confine tra dolo eventuale e colpa cosciente, il Tutor risponderebbe così:</p><p class="mt-8">«La differenza sta nell'atteggiamento volitivo verso l'evento previsto: nel <b>dolo eventuale</b> l'agente <b>accetta il rischio</b> di cagionarlo; nella <b>colpa cosciente</b> (art. 61 n. 3) lo prevede ma <b>confida di evitarlo</b>. Cfr. Cass. S.U. 38343/2014, ThyssenKrupp.»</p>`) + cert('SuperCompendio, Cap. 5 — §4.2');
    };
    send.onclick = go;
    $('#tutor-in').addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  });

  /* ============================ LIVEBOOK =========================== */
  S.livebook = function () {
    if (!D.state().livebook) {
      return `<div class="wrap page">${head('Contenuti', 'Livebook', 'Il manuale che si studia, non solo si legge.')}
        <div class="card card-pad center reveal" style="max-width:560px;margin-inline:auto">
          <div class="modal-ic" style="margin-inline:auto">${SVG.icon('lock', 'ic-ink')}</div>
          <h3 class="serif">Aggiungi il libro da cui studi</h3>
          <p class="muted mt-8">Hai indicato che non studi dai libri. Aggiungi il tuo manuale per attivare il Livebook.</p>
          <button class="btn btn-gold mt-24" data-go="#/welcome">Indica il libro</button>
        </div></div>`;
    }
    return `<div class="wrap page">${head('Contenuti', 'Livebook', 'Evidenzia, annota, chiedi al Tutor o apri un quiz — senza mai uscire dal testo certificato.')}
      <div class="card reveal">${fhead('', 'Manuale di Diritto penale (ed. 2020) · Livebook', 'Il manuale, interattivo')}
        <div class="fbody">
          <div class="row" style="gap:10px;flex-wrap:wrap;margin-bottom:6px"><span class="pill pill-info">${SVG.icon('sparkle')} Aggiornato via Livebook</span><span class="muted txt-sm">È intervenuta la l. 26 aprile 2019, n. 36 sulla legittima difesa domiciliare</span></div>
          <div class="book-page">
            <div class="bp-head"><span>Cap. 4 — Le cause di giustificazione</span><span>p. 25</span></div>
            <div class="bp-tools">
              <span class="bp-tool" data-lb="hl">${SVG.icon('pen', 'ic-ink')} Evidenzia</span>
              <span class="bp-tool" data-lb="tutor">${SVG.icon('chat', 'ic-ink')} Chiedi al Tutor</span>
              <span class="bp-tool" data-lb="quiz">${SVG.icon('check', 'ic-ink')} Quiz sul brano</span>
            </div>
            <p>L'art. 52, co. 1, c.p. dispone che non è punibile chi ha commesso il fatto per esservi stato costretto dalla necessità di difendere un diritto proprio od altrui contro il <span class="bp-hl" data-note>pericolo attuale di una offesa ingiusta</span>, sempre che la difesa sia proporzionata all'offesa.</p>
            <p>Ipotesi particolare è la legittima difesa <strong>domiciliare</strong> (commi 2 e 3). <span class="bp-update" data-update>La l. 26 aprile 2019, n. 36 ha introdotto il comma 4, che presume la legittima difesa di chi reagisce per respingere l'intrusione posta in essere con violenza o minaccia di uso di armi.</span> La giurisprudenza ha tuttavia chiarito che il requisito della necessità appartiene all'essenza stessa della legittima difesa.</p>
            <div class="bp-note" id="lb-note" style="display:none">Tua nota: collegare la presunzione del comma 4 al persistere del requisito di «necessità» (Cass. Sez. I, 21794/2020).</div>
          </div>
          <div id="lb-after"></div>
        </div>
      </div>
    </div>`;
  };
  D.addAfter(function (sec) {
    if (sec !== 'livebook' || !D.state().livebook) return;
    const note = $('#lb-note');
    $$('.bp-hl').forEach(h => h.onclick = () => { D.toast('Passaggio evidenziato'); if (note) note.style.display = 'block'; });
    const upd = $('.bp-update'); if (upd) upd.onclick = () => D.modal(`<div class="pill pill-info mb-16">${SVG.icon('sparkle')} Aggiornamento normativo</div><h3 class="serif">Il libro aggiornato via Livebook</h3><p>Il tuo manuale è in edizione 2020. Livebook segnala e integra l'aggiornamento introdotto dalla <b>l. 26 aprile 2019, n. 36</b> sulla legittima difesa domiciliare, evidenziando il passaggio rivisto direttamente sulla pagina.</p><div class="row mt-24"><button class="btn btn-gold" data-close>Ho capito</button></div>`);
    const note2 = $('[data-note]'); if (note2) note2.onclick = () => D.toast('Nota a margine aggiunta');
    $$('.bp-tool').forEach(b => b.onclick = () => {
      const k = b.dataset.lb;
      if (k === 'hl') { D.toast('Modalità evidenziatore attiva'); if (note) note.style.display = 'block'; }
      else if (k === 'tutor') $('#lb-after').innerHTML = D.aiNotice(`<p>«La <b>legittima difesa domiciliare</b> (art. 52, commi 2-4) presume la proporzione e, dopo la l. 36/2019, la stessa necessità della difesa contro chi si introduce con violenza o minaccia armata. Resta però fermo, per la giurisprudenza, il nucleo della necessità.»</p>`) + cert('Manuale di Diritto penale, Cap. 4 — §2.4.1');
      else $('#lb-after').innerHTML = `<div class="explain mt-16"><div class="ex-label">Quiz sul brano</div><p>Vuoi allenarti sulle cause di giustificazione?</p><button class="btn btn-gold btn-sm mt-16" data-go="#/multipla/scriminanti">Apri il quiz ${SVG.icon('arrow', 'ic-ink')}</button></div>`, D.$$('[data-go]').forEach(x => x.onclick = () => D.goto(x.dataset.go));
    });
  });

  /* ============================ LIBRERIA =========================== */
  S.libreria = function () {
    const items = D.state()._lib || (D.state()._lib = D.libreria.map(x => Object.assign({}, x)));
    const used = items.filter(i => i.scaricato).length;
    return `<div class="wrap page">${head('La tua libreria', 'Libreria Offline', 'I tuoi materiali, anche senza connessione. Manuali, compendi, podcast, video e mappe da scaricare sul dispositivo.')}
      <div class="card card-pad reveal mb-24">
        <div class="spread mb-8"><span class="muted txt-sm">Spazio usato</span><span class="gold txt-sm">${used * 11} MB di 4 GB</span></div>
        <div class="usebar"><span style="width:${Math.min(100, used * 8)}%"></span></div>
      </div>
      <div class="stack" id="lib-list">${items.map((it, i) => libRow(it, i)).join('')}</div>
    </div>`;
  };
  function libRow(it, i) {
    const ic = { pdf: 'book', audio: 'mic', video: 'video', map: 'map' }[it.tipo] || 'book';
    return `<div class="card lib-item reveal" data-libi="${i}"><div class="li-ic">${SVG.icon(ic)}</div>
      <div><div style="font-weight:600">${esc(it.nome)}</div><div class="li-meta">${esc(it.meta)}</div></div>
      <div class="li-act">${it.scaricato ? `<span class="dl-done">${SVG.icon('check')} Scaricato</span>` : `<button class="btn btn-ghost btn-sm" data-dl="${i}">${SVG.icon('download')} Scarica</button>`}</div></div>`;
  }
  D.addAfter(function (sec) {
    if (sec !== 'libreria') return;
    $$('[data-dl]').forEach(b => b.onclick = () => {
      const i = parseInt(b.dataset.dl); const items = D.state()._lib;
      items[i].scaricato = true; D.toast('Download completato (demo)');
      const row = b.closest('[data-libi]'); row.outerHTML = libRow(items[i], i);
    });
  });

  /* ============================ CLASSIFICA ========================= */
  S.classifica = function () {
    const exercised = D.hasExercised();
    if (!exercised) {
      return `<div class="wrap page">${head('Progressi e motivazione', 'La Classifica', 'Dove sei rispetto agli altri candidati. Non un voto astratto, ma un percentile su una coorte reale.')}
        <div class="card reveal" style="position:relative;overflow:hidden;min-height:420px">
          <div class="card-pad blurred">${classificaBody(78)}</div>
          <div class="lb-overlay glass">
            <div class="tk-ic" style="width:60px;height:60px">${SVG.icon('lock', 'ic-lg')}</div>
            <h3 class="serif" style="font-size:1.5rem">Svolgi un'esercitazione per vedere la tua posizione</h3>
            <p class="muted" style="max-width:46ch">La classifica aggrega tutti i tuoi segnali — quiz, vero/falso, domande aperte — e li traduce in un posizionamento reale.</p>
            <button class="btn btn-gold btn-lg" data-go="#/multipla">Svolgi esercitazione ${SVG.icon('arrow', 'ic-ink')}</button>
          </div>
        </div></div>`;
    }
    const pts = D.state().progress.points;
    const userScore = Math.min(960, 765 + Math.min(pts, 200));
    return `<div class="wrap page">${head('Progressi e motivazione', 'La Classifica', 'Aggiornata sui tuoi progressi. Puoi attivare la modalità anonima.')}
      <div class="spread reveal mb-16"><span class="pill">${SVG.logo} Coorte: candidati a Diritto penale</span>
        <label class="row" style="gap:8px;cursor:pointer"><input type="checkbox" id="anon-tg" ${D.state().anon ? 'checked' : ''}> <span class="muted txt-sm">Modalità anonima</span></label></div>
      <div class="card card-pad reveal" id="lb-body">${classificaBody(percentileOf(userScore), userScore)}</div>
    </div>`;
  };
  function percentileOf(score) {
    const all = D.classificaNomi.map(n => n[1]).concat([score]).sort((a, b) => b - a);
    const pos = all.indexOf(score);
    return Math.max(1, Math.round((1 - pos / (all.length - 1)) * 99));
  }
  function classificaBody(perc, userScore) {
    const anon = D.state().anon;
    const list = D.classificaNomi.map(n => ({ name: n[0], score: n[1], you: false }));
    if (userScore) list.push({ name: 'Tu', score: userScore, you: true });
    list.sort((a, b) => b.score - a.score);
    const rows = list.slice(0, 12).map((r, i) => `<div class="lb-row ${r.you ? 'you' : ''}"><div class="lb-rank">${i + 1}</div><div class="lb-name">${r.you ? 'Tu' : (anon && !r.you ? 'Candidato ' + (i + 1) : esc(r.name))}</div><div class="lb-score">${r.score}</div></div>`).join('');
    // distribuzione
    const bars = [3, 6, 11, 18, 27, 34, 30, 24, 16, 9, 5, 2];
    const youBar = Math.min(bars.length - 1, Math.round((perc / 100) * (bars.length - 1)));
    const dist = bars.map((h, i) => `<div class="bar ${i === youBar ? 'you' : ''}" style="height:${h * 2.6}px"></div>`).join('');
    return `<div class="center mb-24"><div class="scorebig">${perc}°</div><div class="muted">percentile${userScore ? ' · punteggio ' + userScore : ''}</div>
      <p class="mt-16" style="max-width:52ch;margin-inline:auto">${perc >= 60 ? 'Sei <b class="gold">sopra la soglia stimata</b> tra i candidati. Tieni il ritmo e rinforza gli argomenti dove sei più scoperto.' : 'Sei in crescita: concentra lo studio sugli argomenti con meno esercizi svolti per salire di percentile.'}</p></div>
      <div class="dist">${dist}</div>
      <div class="center txt-xs muted mt-8">distribuzione dei punteggi · la barra dorata sei tu</div>
      <div class="divider"></div>${rows}`;
  }
  D.addAfter(function (sec) {
    if (sec !== 'classifica') return;
    const tg = $('#anon-tg'); if (tg) tg.onchange = () => { D.state().anon = tg.checked; D.save(); const pts = D.state().progress.points; const us = Math.min(960, 765 + Math.min(pts, 200)); $('#lb-body').innerHTML = classificaBody(percentileOf(us), us); };
  });

  /* ============================== DIARIO =========================== */
  S.diario = function () {
    const d = D.diario;
    const pattern = [0,1,2,1,0,3,4,2,1,0,2,3,1,4,3,2,1,0,1,2,3,4,4,3,2,1,0,0,1,2,3,2,1,0,2,3,4,3,2,1];
    const heat = pattern.map(l => `<div class="heatcell ${l ? 'l' + l : ''}"></div>`).join('');
    const sessions = d.sessioni.map(s => `<div class="session-row"><span class="sr-day">${esc(s[0])}</span><span>${esc(s[1])}</span><span class="sr-min">${esc(s[2])}</span></div>`).join('');
    return `<div class="wrap page">${head('Progressi e motivazione', 'Diario del Ripasso', 'La costanza resa visibile: cosa hai studiato e quando, in un colpo d\'occhio.')}
      <div class="grid reveal" style="grid-template-columns:1.4fr .9fr;gap:18px">
        <div class="card card-pad">
          <div class="spread mb-16"><h3 class="serif" style="font-size:1.2rem">Intensità di studio</h3><span class="muted txt-sm">ultime 13 settimane</span></div>
          <div class="heatmap">${heat}</div>
          <div class="row mt-16" style="justify-content:flex-end;gap:6px;align-items:center"><span class="txt-xs muted">meno</span>${[0,1,2,3,4].map(l=>`<span class="heatcell ${l?'l'+l:''}" style="width:14px;height:14px;display:inline-block"></span>`).join('')}<span class="txt-xs muted">più</span></div>
        </div>
        <div class="card card-pad center">
          <div class="tk-ic" style="margin-inline:auto">${SVG.icon('flame')}</div>
          <div class="streak-num mt-16">${d.streak}</div>
          <div class="muted">giorni di fila</div>
        </div>
      </div>
      <div class="card card-pad reveal mt-24">
        <h3 class="serif" style="font-size:1.2rem">Ultime sessioni</h3>
        <div class="mt-8">${sessions}</div>
      </div>
      <div class="card card-pad reveal mt-24">
        <h3 class="serif" style="font-size:1.2rem">Argomenti da rivedere</h3>
        <p class="muted txt-sm mt-8">Aggiungi alla tua lista gli argomenti su cui vuoi tornare.</p>
        <div class="tag-input-row"><input class="input" id="todo-in" placeholder="Es. Dolo eventuale, causalità omissiva…"><button class="btn btn-gold" id="todo-add">Aggiungi</button></div>
        <div class="chip-list" id="todo-list"></div>
      </div>
    </div>`;
  };
  D.addAfter(function (sec) {
    if (sec !== 'diario') return;
    const g = $('.grid[style*="1.4fr"]'); if (g && window.innerWidth < 820) g.style.gridTemplateColumns = '1fr';
    const render = () => {
      const list = $('#todo-list'), arr = D.state().todo;
      list.innerHTML = arr.length ? arr.map((q, i) => `<span class="chip">${SVG.icon('list')} ${esc(q)} <button data-i="${i}">${SVG.icon('x')}</button></span>`).join('') : '<span class="muted txt-sm">Nessun argomento in lista.</span>';
      $$('[data-i]', list).forEach(b => b.onclick = () => { arr.splice(parseInt(b.dataset.i), 1); D.save(); render(); });
    };
    const add = () => { const v = $('#todo-in').value.trim(); if (!v) return; D.state().todo.push(v); D.save(); $('#todo-in').value = ''; render(); D.toast('Aggiunto alla lista'); };
    $('#todo-add').onclick = add;
    $('#todo-in').addEventListener('keydown', e => { if (e.key === 'Enter') add(); });
    render();
  });

  /* ============================= MENTORI =========================== */
  S.mentori = function () {
    return `<div class="wrap page">${head('Community', 'Mentore Ex Studente', 'Un confronto con chi quell\'esame l\'ha già superato: metodo, gestione del tempo, esperienza diretta.')}
      <div class="grid grid-3">
        ${D.mentori.map((m, i) => `<div class="card mentor reveal">
          <div class="m-avatar">${SVG.avatar(m.avatar)}</div>
          <div class="m-name serif">${esc(m.nome)}</div>
          <div class="m-role">${esc(m.role)}</div>
          <div class="stars">${'★'.repeat(Math.round(parseFloat(m.rating.replace(',', '.'))))}<span class="muted"> ${esc(m.rating)} · ${m.seguiti} studenti seguiti</span></div>
          <button class="btn btn-ghost btn-sm mt-16 w-100" data-msg="${i}">${SVG.icon('chat')} Invia messaggio</button>
        </div>`).join('')}
      </div>
    </div>`;
  };
  D.addAfter(function (sec) {
    if (sec !== 'mentori') return;
    $$('[data-msg]').forEach(b => b.onclick = () => {
      const m = D.mentori[parseInt(b.dataset.msg)];
      D.modal(`<div class="pill mb-16">${SVG.icon('chat')} Richiesta di contatto</div>
        <h3 class="serif">A ${esc(m.nome)}</h3>
        <div class="card card-pad mt-16" style="background:rgba(255,255,255,.03)"><p style="font-style:italic">«${esc(m.msg)}»</p></div>
        <p class="txt-sm muted mt-16">Inviato come <b>studente.bari2026</b>. Il mentore può accettare o rifiutare.</p>
        <div class="row mt-24"><button class="btn btn-gold" id="msg-send">Invia richiesta</button><button class="btn btn-ghost" data-close>Annulla</button></div>`);
      $('#msg-send').onclick = () => { D.closeModal(); D.toast('Messaggio inviato a ' + m.nome.split(' ')[0]); };
    });
  });

  /* ============================== Q&A ============================== */
  S.qa = function () {
    return `<div class="wrap page">${head('Community', 'Domande & Risposte', `Sull'esame di Diritto penale — ${esc(D.meta.ateneo)}. Vota le risposte più utili.`)}
      <div class="stack">
        ${D.qa.map((q, i) => qaCard(q, i)).join('')}
      </div>
      <p class="txt-xs muted mt-24 center">Contesto: insegnamento di Diritto penale, Dipartimento di Giurisprudenza dell'Università di Bari "Aldo Moro" (storica cattedra già tenuta da Aldo Moro). Le risposte raccolgono l'esperienza di studenti; nessuna frase è attribuita a docenti reali.</p>
    </div>`;
  };
  function qaCard(q, i) {
    const v = D.state().votes[i] || 0;
    const up = q.up + (v === 1 ? 1 : 0), down = q.down + (v === -1 ? 1 : 0);
    return `<div class="card qa-item reveal" data-qa="${i}">
      <div class="qa-q"><div class="qa-ic">Q</div><div><div class="pill pill-soft mb-8">${esc(q.tag)}</div><div style="font-weight:600">${esc(q.q)}</div></div></div>
      <div class="qa-a">${esc(q.a)}</div>
      <div class="vote">
        <button data-vote="1" class="${v === 1 ? 'voted-up' : ''}">${SVG.icon('check')} Utile <b>${up}</b></button>
        <button data-vote="-1" class="${v === -1 ? 'voted-down' : ''}">${SVG.icon('x')} <b>${down}</b></button>
        <span class="muted txt-xs" style="margin-left:auto">${esc(q.who)}</span>
      </div>
    </div>`;
  }
  D.addAfter(function (sec) {
    if (sec !== 'qa') return;
    $$('[data-qa]').forEach(card => {
      const i = parseInt(card.dataset.qa);
      $$('[data-vote]', card).forEach(b => b.onclick = () => {
        const val = parseInt(b.dataset.vote);
        const cur = D.state().votes[i] || 0;
        D.state().votes[i] = (cur === val) ? 0 : val; D.save();
        card.outerHTML = qaCard(D.qa[i], i);
        D.afterRender('qa');
      });
    });
  });

  /* ============================= BANDI ============================= */
  S.bandi = function () {
    return `<div class="wrap page">${head('Carriera', 'Bandi & Concorsi', 'Le scadenze che contano nell\'area giuridica: posti, requisiti, struttura delle prove e date chiave. Dati statici da fonti ufficiali (giu. 2026).')}
      <div class="stack">
        ${D.bandi.map(b => `<div class="card bando reveal">
          <div class="spread"><div><div class="row" style="gap:10px"><span class="bando-status ${b.stato}">${esc(b.statoLabel)}</span></div><h3 class="serif mt-8" style="font-size:1.4rem">${esc(b.nome)}</h3><div class="muted txt-sm">${esc(b.ente)}</div></div></div>
          <div class="bando-grid">
            <div class="bando-stat"><div class="bs-v">${esc(b.posti)}</div><div class="bs-l">Posti</div></div>
            <div class="bando-stat"><div class="bs-v" style="font-size:1.1rem">${esc(b.prove)}</div><div class="bs-l">Prove</div></div>
            <div class="bando-stat"><div class="bs-v" style="font-size:1.1rem">${esc(b.scadenza)}</div><div class="bs-l">Scadenza</div></div>
          </div>
          <p class="muted txt-sm"><b class="gold">Requisiti:</b> ${esc(b.titolo)}. ${esc(b.note)}</p>
          <div class="bando-timeline">${b.timeline.map(p => `<div class="bt-phase"><div class="btp-d">${esc(p[0])}</div><div class="btp-l">${esc(p[1])}</div></div>`).join('')}</div>
        </div>`).join('')}
      </div>
    </div>`;
  };

  /* =========================== RIPASSO ============================= */
  S.ripasso = function () {
    const r = D.ripasso;
    return `<div class="wrap page">${head('Ripasso', 'Ripasso Last Minute', 'Le ore prima della prova non sono il momento per argomenti nuovi. Qui solo l\'indispensabile della parte generale.')}
      <div class="card card-pad reveal" style="border-color:var(--line)"><div class="row" style="align-items:flex-start;gap:14px"><div class="streak-num" style="font-size:2.4rem">!</div><div><div class="eyebrow">Sintesi completa</div><p class="muted mt-8">${esc(r.intro)}</p></div></div></div>
      <div class="stack mt-24">
        ${r.voci.map((v, i) => `<div class="card card-pad reveal"><div class="spread"><h3 class="serif" style="font-size:1.15rem"><span class="np-chip" style="margin-right:8px">${i + 1}</span>${esc(v.t)}</h3><span class="pill pill-soft">${SVG.icon('clock')} ${esc(v.min)}</span></div><p class="mt-16" style="color:var(--ink-soft)">${esc(v.testo)}</p></div>`).join('')}
      </div>
      <div class="sec-title reveal"><div class="st-ic">${SVG.icon('list')}</div><div><h2 class="serif">Glossario</h2><div class="st-sub">I termini essenziali, sempre a portata</div></div></div>
      <div class="card card-pad reveal"><dl>${D.glossario.map(g => `<div class="gloss-item"><dt>${esc(g[0])}</dt><dd>${esc(g[1])}</dd></div>`).join('')}</dl></div>
    </div>`;
  };

})();
