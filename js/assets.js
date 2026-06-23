/* =========================================================================
   N+ — ASSET GRAFICI INLINE (icone, mappe concettuali, avatar).
   Tutto in SVG generato nel browser: nessun file binario, costo zero.
   ========================================================================= */
NPLUS.svg = (function () {
  const s = (b, extra = '') => `<svg viewBox="0 0 24 24" class="ic ${extra}" xmlns="http://www.w3.org/2000/svg">${b}</svg>`;

  /* ---- Icone (stroke oro) ---- */
  const ICONS = {
    scale: '<path d="M12 3v18M7 21h10M12 6 5 8m7-2 7 2M5 8l-2.5 5a3 3 0 0 0 5 0L5 8Zm14 0-2.5 5a3 3 0 0 0 5 0L19 8Z"/>',
    scale2: '<path d="M12 3v18M7 21h10M5 7h14M9 7 7 12a2.5 2.5 0 0 0 4 0L9 7Zm6 0-2 5a2.5 2.5 0 0 0 4 0l-2-5Z"/>',
    link: '<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',
    shield: '<path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    alert: '<path d="M12 3 2 20h20L12 3Z"/><path d="M12 9v5M12 17h.01"/>',
    split: '<path d="M6 3v6a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v4M18 3v3M6 18v3"/><path d="m15 6 3-3 3 3"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 4 3 3 0 0 0 6 0V5a3 3 0 0 0-3-1ZM15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 4 3 3 0 0 1-3 1"/>',
    steps: '<path d="M4 20h4v-4h4v-4h4V8h4"/>',
    people: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-5-5.9"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5M3 18l9 5 9-5" opacity=".5"/>',
    stack: '<rect x="4" y="4" width="16" height="5" rx="1"/><rect x="4" y="11" width="16" height="5" rx="1"/><path d="M6 18h12" opacity=".5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-4 1 2-5 4-1Z"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z"/><path d="M6 19h12" opacity=".5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/>',
    minus: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    play: '<path d="M7 4v16l13-8L7 4Z" fill="currentColor" stroke="none"/>',
    pause: '<path d="M8 4v16M16 4v16"/>',
    check: '<path d="m5 12 4 4 10-10"/>',
    x: '<path d="m6 6 12 12M18 6 6 18"/>',
    download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3Z"/>',
    map: '<path d="m9 4 6 2 6-2v14l-6 2-6-2-6 2V6l6-2Z"/><path d="M9 4v14M15 6v14" opacity=".5"/>',
    cards: '<rect x="3" y="6" width="13" height="14" rx="2" transform="rotate(-6 9 13)"/><rect x="8" y="4" width="13" height="14" rx="2"/>',
    trophy: '<path d="M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M9 17h6M12 13v4M9 21h6"/>',
    chat: '<path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 10h8M8 13h5" opacity=".6"/>',
    pen: '<path d="m4 20 4-1L19 8a2 2 0 0 0-3-3L5 16l-1 4Z"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10Z"/>',
    calendar: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 9h16M9 3v4M15 3v4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    flame: '<path d="M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-2-1-3-1-3 2 4-1 11-5 11a6 6 0 0 1-3-11c2-2 3-3 3-4Z"/>',
    sparkle: '<path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" opacity=".9"/>',
    chart: '<path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    grad: '<path d="m12 4 10 5-10 5L2 9l10-5Z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    home: '<path d="m4 11 8-7 8 7M6 10v9h12v-9"/>',
    quote: '<path d="M7 7H4v6h3l-1 4M17 7h3v6h-3l-1 4" transform="translate(2 0)"/>'
  };

  /* ---- Logo N+ ---- */
  const LOGO = '<span class="np-badge">N<span style="font-size:.7em">+</span></span>';

  /* ---- Mappe concettuali (SVG semplici, coerenti con la palette) ---- */
  function mapNode(x, y, w, label, gold) {
    const fill = gold ? 'rgba(232,178,76,.16)' : 'rgba(255,255,255,.04)';
    const stroke = gold ? '#e8b24c' : 'rgba(255,255,255,.18)';
    const tc = gold ? '#f0c879' : '#d7dce8';
    const lines = String(label).split('|');
    const ty = y + 34 - (lines.length - 1) * 9;
    const text = lines.map((l, i) => `<text x="${x + w / 2}" y="${ty + i * 18}" text-anchor="middle" fill="${tc}" font-size="13" font-family="Inter,sans-serif" font-weight="${gold ? 700 : 500}">${l}</text>`).join('');
    return `<rect x="${x}" y="${y}" width="${w}" height="68" rx="12" fill="${fill}" stroke="${stroke}" stroke-width="1.4"/>${text}`;
  }
  function mapLine(x1, y1, x2, y2) { return `<path d="M${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}" stroke="rgba(232,178,76,.4)" stroke-width="1.5" fill="none"/>`; }

  function buildMap(title, root, children) {
    const W = 760, cx = W / 2;
    const n = children.length;
    const colW = 168, gap = (W - n * colW) / (n + 1);
    let lines = '', nodes = '';
    children.forEach((c, i) => {
      const x = gap + i * (colW + gap);
      lines += mapLine(cx, 96, x + colW / 2, 150);
      nodes += mapNode(x, 150, colW, c, false);
    });
    const h = 250;
    return `<svg viewBox="0 0 ${W} ${h}" xmlns="http://www.w3.org/2000/svg" role="img">
      <text x="${cx}" y="26" text-anchor="middle" fill="#95a0bb" font-size="12" letter-spacing="3" font-family="Inter,sans-serif">MAPPA CONCETTUALE</text>
      ${lines}
      ${mapNode(cx - 130, 30, 260, root, true)}
      ${nodes}
    </svg>`;
  }

  const MAPS = {
    reato: buildMap('', 'IL REATO', ['Delitti|(reclusione, multa)', 'Contravvenzioni|(arresto, ammenda)', 'Bipartizione|/ Tripartizione']),
    causalita: buildMap('', 'NESSO DI|CAUSALITÀ', ['Condicio|sine qua non', 'Giudizio|controfattuale', 'Franzese|prob. logica']),
    scriminanti: buildMap('', 'CAUSE DI|GIUSTIFICAZIONE', ['Consenso (50)|Diritto (51)', 'Legittima|difesa (52)', 'Stato di|necessità (54)']),
    dolo: buildMap('', 'IL DOLO|(art. 43)', ['Intenzionale|(1° grado)', 'Diretto|(2° grado)', 'Eventuale']),
    colpa: buildMap('', 'LA COLPA|(art. 43)', ['Generica|(non scritta)', 'Specifica|(scritta)', 'Cosciente|(art. 61 n.3)']),
    doloEventuale: buildMap('', 'EVENTO|PREVISTO', ['Dolo eventuale|accetta il rischio', 'Colpa cosciente|confida di evitarlo', 'ThyssenKrupp|bilanciamento']),
    preterintenzione: buildMap('', 'PRETER-|INTENZIONE', ['Vuole evento|minore', 'Realizza evento|più grave', 'Omicidio (584)|Aborto (593-ter)']),
    imputabilita: buildMap('', "L'IMPUTABILITÀ|(art. 85)", ['Intendere|e volere', 'Minore età|Vizio di mente', 'Ubriachezza|Stupefacenti']),
    tentativo: buildMap('', 'IL TENTATIVO|(art. 56)', ['Atti idonei|e univoci', 'Desistenza|(non punibile)', 'Recesso attivo|(pena ridotta)']),
    concorsoPersone: buildMap('', 'CONCORSO DI|PERSONE (110)', ['Concorso|materiale', 'Concorso|morale', 'Artt. 116|117 · 118'])
  };

  /* ---- Avatar illustrati (SVG) ---- */
  function avatar(bg, hair, skin) {
    return `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="${bg}"/>
      <circle cx="40" cy="30" r="16" fill="${skin}"/>
      <path d="M24 30a16 16 0 0 1 32 0c0-10-6-16-16-16s-16 6-16 16Z" fill="${hair}"/>
      <path d="M28 28c0-6 5-10 12-10s12 4 12 10" fill="none" stroke="${hair}" stroke-width="3"/>
      <path d="M16 74c0-14 11-22 24-22s24 8 24 22Z" fill="${skin}" opacity=".9"/>
      <path d="M16 74c0-14 11-22 24-22s24 8 24 22Z" fill="#0e1733" opacity=".25"/>
      <circle cx="34" cy="30" r="2" fill="#1a1205"/><circle cx="46" cy="30" r="2" fill="#1a1205"/>
      <path d="M35 37c2 2 8 2 10 0" fill="none" stroke="#1a1205" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`;
  }
  const AVATARS = {
    illu1: avatar('#1c2a52', '#3a2a1a', '#e8c4a0'),
    illu2: avatar('#23314f', '#1a1a1a', '#d9ad88'),
    illu3: avatar('#2a2150', '#5a3a20', '#ecc9a6'),
    illu4: avatar('#1f3a44', '#2a1a10', '#d3a079'),
    anon: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="#16234a"/>
      <circle cx="40" cy="32" r="14" fill="rgba(232,178,76,.25)"/>
      <path d="M18 72c0-13 10-20 22-20s22 7 22 20Z" fill="rgba(232,178,76,.25)"/>
      <text x="40" y="40" text-anchor="middle" fill="#e8b24c" font-size="22" font-family="Playfair Display,serif" font-weight="800">?</text>
    </svg>`
  };

  /* ---- Cover podcast/video generata ---- */
  function cover(title, kind) {
    const ic = kind === 'video' ? ICONS.video : ICONS.mic;
    return `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#16234a"/><stop offset="1" stop-color="#0a1228"/></linearGradient>
        <radialGradient id="cg2" cx="0.8" cy="0.1" r="0.9">
        <stop offset="0" stop-color="rgba(232,178,76,.35)"/><stop offset="1" stop-color="rgba(232,178,76,0)"/></radialGradient></defs>
      <rect width="320" height="180" fill="url(#cg)"/><rect width="320" height="180" fill="url(#cg2)"/>
      <g transform="translate(26 60)"><svg width="44" height="44" viewBox="0 0 24 24" class="ic">${ic}</svg></g>
      <text x="26" y="135" fill="#f4f1e9" font-size="17" font-family="Playfair Display,serif" font-weight="700">${title}</text>
      <text x="280" y="30" text-anchor="end" font-family="Playfair Display,serif" font-weight="800" font-size="22" fill="#e8b24c">N+</text>
    </svg>`;
  }

  return {
    icon: (name, extra) => s(ICONS[name] || ICONS.book, extra),
    raw: (name) => ICONS[name] || ICONS.book,
    logo: LOGO,
    map: (id) => MAPS[id] || buildMap('', 'MAPPA', ['—', '—', '—']),
    avatar: (k) => AVATARS[k] || AVATARS.anon,
    cover
  };
})();
