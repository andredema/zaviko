/* Zenviko — fonctions communes du prototype */
(function () {
  const D = window.ZENVIKO_DATA;
  const base = document.body.dataset.base || '';
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const ICONS = {
    phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z',
    msg: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
    file: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5',
    check: 'M20 6 9 17l-5-5',
    pin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
    chevL: 'm15 18-6-6 6-6', chevR: 'm9 18 6-6-6-6', arrowR: 'M5 12h14M12 5l7 7-7 7',
    clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
    shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4',
    globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20',
    upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
    x: 'M18 6 6 18M6 6l12 12', edit: 'M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z',
    share: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13',
    eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    wrench: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    zap: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z',
    home: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
    book: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
    truck: 'M1 3h15v13H1zM16 8h4l3 3v5h-7zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
    scissors: 'M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12',
    monitor: 'M2 3h20v14H2zM8 21h8M12 17v4',
    leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6'
  };

  const icon = (name, size = 18, extra = '') =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}><path d="${ICONS[name] || ''}"/></svg>`;

  const starIcon = (size = 14) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>`;

  const logo = (size = 26, dark = false) =>
    `<svg width="${size}" height="${size}" viewBox="6 6 52 52" aria-hidden="true"><path d="M14 14 H50 L44 20" fill="none" stroke="${dark ? '#FFFFFF' : '#0F2A3D'}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 44 L14 50 H50" fill="none" stroke="#0E9F8E" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="32" r="8.5" fill="#F2A541"/></svg>`;

  const param = (k) => new URLSearchParams(location.search).get(k);
  const pro = (id) => D.pros.find((p) => p.id === id);
  const cat = (id) => D.categories.find((c) => c.id === id);
  const note = (p) => p.avis.length ? p.avis.reduce((s, a) => s + a.note, 0) / p.avis.length : 0;
  const noteTxt = (p) => note(p).toFixed(1).replace('.', ',');
  const initials = (p) => (p.prenom[0] + p.nom[0]).toUpperCase();
  const displayName = (p) => `${p.prenom} ${p.nom[0]}.`;

  const avatar = (p, size = 48) =>
    `<span class="avatar" style="width:${size}px;height:${size}px;font-size:${Math.round(size * 0.36)}px">${esc(initials(p))}</span>`;

  const dispoBadge = (p) => {
    const d = D.dispo[p.dispo];
    return `<span class="row xsmall" style="--gap:6px;font-weight:600;color:${p.dispo === 'maintenant' ? 'var(--ink)' : 'var(--teal-dd)'}"><span class="dot ${d.dot}"></span>${esc(d.label)}</span>`;
  };

  const stars = (p) => `<span class="stars">${starIcon()}${noteTxt(p)} <span class="muted" style="font-weight:400">(${p.avis.length} avis)</span></span>`;

  const proCard = (p) => `
    <article class="card pro-card">
      <a class="pro-head" href="${base}pro.html?id=${p.id}">
        ${avatar(p)}
        <span class="stack" style="--gap:2px;min-width:0">
          <span class="pro-name">${esc(displayName(p))} · ${esc(p.metier)}</span>
          <span class="xsmall muted">${esc(p.secteur)}, ${esc(p.ville)} · ${stars(p)}</span>
          ${dispoBadge(p)}
        </span>
      </a>
      <div class="actions3">
        <a class="btn btn-primary btn-sm" href="${base}contact.html?id=${p.id}&mode=appel">${icon('phone', 16)}Appeler</a>
        <a class="btn btn-outline btn-sm" href="${base}contact.html?id=${p.id}&mode=texte">${icon('msg', 16)}Écrire</a>
        <a class="btn btn-outline btn-sm" href="${base}devis.html?pro=${p.id}">Devis</a>
      </div>
    </article>`;

  function header(opts = {}) {
    const el = document.getElementById('site-header');
    if (!el) return;
    const here = location.pathname.split('/').pop() || 'index.html';
    const cur = (f) => (here === f ? ' aria-current="page"' : '');
    const ribbon = `<div class="proto-ribbon">Prototype · toutes les données sont fictives · <a href="${base}guide.html">Plan du prototype</a></div>`;
    if (opts.pro) {
      el.outerHTML = `${ribbon}<header class="site-header dark"><div class="wrap bar">
        <a class="brand" href="${base}pro/espace.html">${logo(26, true)}zenviko <span class="pro-tag">Pro</span></a>
        <nav class="nav" aria-label="Espace pro">
          <a href="${base}pro/espace.html"${cur('espace.html')}>Tableau de bord</a>
          <a href="${base}pro/modifier.html"${cur('modifier.html')}>Ma page publique</a>
        </nav>
        <a class="btn btn-light btn-sm push" href="${base}index.html">Voir le site</a>
      </div></header>`;
      return;
    }
    el.outerHTML = `${ribbon}<header class="site-header"><div class="wrap bar">
      <a class="brand" href="${base}index.html">${logo(26)}zenviko</a>
      <nav class="nav" aria-label="Navigation principale">
        <a href="${base}recherche.html"${cur('recherche.html')}>Trouver un pro</a>
        <a href="${base}urgence.html"${cur('urgence.html')}>Urgence</a>
        <a href="${base}suivi.html"${cur('suivi.html')}>Suivre ma demande</a>
      </nav>
      <a class="btn btn-outline btn-sm push" href="${base}pro/inscription.html">Je suis pro</a>
    </div></header>`;
  }

  function footer() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    el.outerHTML = `<footer class="site-footer"><div class="wrap">
      <div class="row" style="--gap:8px;color:#fff">${logo(22, true)}<span class="brand" style="font-size:20px">zenviko</span></div>
      <p style="margin-top:8px">Trouve qui sait faire. Ottawa–Gatineau.</p>
      <div class="cols">
        <a href="${base}recherche.html">Trouver un pro</a>
        <a href="${base}urgence.html">Urgence</a>
        <a href="${base}suivi.html">Suivre ma demande</a>
        <a href="${base}pro/inscription.html">Devenir pro</a>
        <a href="${base}pro/espace.html">Espace pro (démo)</a>
        <a href="${base}guide.html">Plan du prototype</a>
      </div>
      <p class="xsmall" style="margin-top:16px">Prototype de démonstration. Personnes, numéros (555), avis et prix fictifs.</p>
    </div></footer>`;
  }

  let toastTimer;
  function toast(msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
  }

  // Boutons « simulés » : <button data-proto="message">
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-proto]');
    if (b) { e.preventDefault(); toast(b.dataset.proto); }
  });

  // Champs requis simples
  function validate(form) {
    let ok = true;
    form.querySelectorAll('[data-required]').forEach((input) => {
      const f = input.closest('.field');
      const val = input.type === 'checkbox' ? input.checked : input.value.trim();
      const bad = !val;
      if (f) f.classList.toggle('invalid', bad);
      if (bad && ok) { input.focus(); ok = false; }
    });
    return ok;
  }

  // Boutons de choix exclusifs : <div data-choices> <button class="choice">
  document.addEventListener('click', (e) => {
    const c = e.target.closest('[data-choices] .choice');
    if (!c) return;
    c.parentElement.querySelectorAll('.choice').forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
  });

  window.Z = { D, base, esc, icon, starIcon, logo, param, pro, cat, note, noteTxt, initials, displayName, avatar, dispoBadge, stars, proCard, header, footer, toast, validate };
})();
