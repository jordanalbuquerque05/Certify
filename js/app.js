/* ============================================================
   app.js — SPA Router, State, Render
   ============================================================ */

const App = (() => {

  // ─── State ─────────────────────────────────────────────────
  let state = {
    provider: localStorage.getItem('certify_provider') || 'aws',
    page: 'home',        // 'home' | 'cert' | 'module' | 'flashcards' | 'pomodoro'
    certId: null,
    moduleId: null,
    weekFilter: 'all',
    moduleTab: 'topics', // 'topics' | 'flashcards' | 'pomodoro'
  };

  // ─── Helpers ───────────────────────────────────────────────
  function el(id) { return document.getElementById(id); }
  function qs(s)  { return document.querySelector(s); }

  // ─── Provider switch ───────────────────────────────────────
  function setProvider(p) {
    state.provider = p;
    localStorage.setItem('certify_provider', p);
    document.documentElement.setAttribute('data-provider', p);
    // Update navbar buttons
    document.querySelectorAll('.provider-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.prov === p);
    });
    // Redirect home if current cert is wrong provider
    if (state.page === 'cert' && state.certId) {
      const cert = window.CERTIFICATIONS[state.certId];
      if (cert && cert.provider !== p) navigate('home');
    } else {
      renderPage();
    }
  }

  // ─── Navigation ────────────────────────────────────────────
  function navigate(page, certId = null, moduleId = null) {
    state.page = page;
    state.certId = certId;
    state.moduleId = moduleId;
    state.weekFilter = 'all';
    state.moduleTab = 'topics';
    renderPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ─── Main render dispatcher ────────────────────────────────
  function renderPage() {
    const app = el('app');
    if (!app) return;
    switch (state.page) {
      case 'home':       app.innerHTML = renderHome();       break;
      case 'cert':       app.innerHTML = renderCert();       break;
      case 'module':     app.innerHTML = renderModule();     break;
      case 'flashcards': app.innerHTML = renderFlashcardsPage(); break;
      case 'pomodoro':   app.innerHTML = renderPomodoroPage(); break;
      default:           app.innerHTML = renderHome();
    }
    updateBreadcrumb();
    bindPageEvents();
    
    // Add mousemove effect for glow cards
    const cards = document.querySelectorAll('.cert-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // ─── Breadcrumb ────────────────────────────────────────────
  function updateBreadcrumb() {
    const bc = el('breadcrumb');
    if (!bc) return;
    const parts = ['<span class="clickable" onclick="App.navigate(\'home\')">Home</span>'];
    if (state.certId) {
      const cert = window.CERTIFICATIONS[state.certId];
      parts.push('<span class="sep">/</span>');
      if (state.page !== 'cert') {
        parts.push(`<span class="clickable" onclick="App.navigate('cert','${state.certId}')">${cert.code}</span>`);
        parts.push('<span class="sep">/</span>');
        const label = state.page === 'flashcards' ? 'Flashcards'
                    : state.page === 'pomodoro'   ? 'Pomodoro'
                    : state.moduleId ? qs('.module-item.active')?.querySelector('.mod-title')?.textContent || 'Módulo'
                    : '';
        parts.push(`<span class="current">${label}</span>`);
      } else {
        parts.push(`<span class="current">${cert.code}</span>`);
      }
    }
    bc.innerHTML = parts.join('');
  }

  // ─── HOME PAGE ─────────────────────────────────────────────
  function renderHome() {
    const overall = Progress.getOverallProgress();
    const lastId  = Progress.getLastStudied();
    const lastCert = lastId ? window.CERTIFICATIONS[lastId] : null;

    const allCerts = Object.values(window.CERTIFICATIONS);
    const awsCerts    = allCerts.filter(c => c.provider === 'aws');
    const oracleCerts = allCerts.filter(c => c.provider === 'oracle');

    const certCards = (certs) => certs.map(cert => {
      const prog = Progress.getCertProgress(cert.id);
      return `
        <div class="cert-card animate-fade-up" onclick="App.navigate('cert','${cert.id}')" data-cert="${cert.id}">
          <div class="cert-card-top">
            <div class="cert-icon-wrapper">${cert.emoji || '☁️'}</div>
            <div class="cert-level">${cert.level}</div>
          </div>
          <div class="cert-code">${cert.code}</div>
          <div class="cert-name">${cert.name}</div>
          <p class="cert-desc">${cert.description.substring(0, 100)}...</p>
          
          <div class="cert-meta-grid">
            <div class="cert-meta-item"><span class="icon">📅</span> ${cert.duration || 'N/A'}</div>
            <div class="cert-meta-item"><span class="icon">⏱</span> ${cert.hoursPerDay || 'N/A'}</div>
            <div class="cert-meta-item"><span class="icon">📦</span> ${cert.modules ? cert.modules.length : 0} Módulos</div>
          </div>
          
          <div class="progress-wrap">
            <div class="progress-info">
              <span class="progress-text">${prog.done} / ${prog.total} Concluídos</span>
              <span class="progress-pct">${prog.pct}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width:${prog.pct}%"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    const nextSessionHTML = lastCert ? `
      <div class="next-session-wrapper animate-fade-up">
        <div class="next-session-card" onclick="App.navigate('cert','${lastCert.id}')">
          <div class="next-session-icon">${lastCert.emoji || '☁️'}</div>
          <div class="next-session-info">
            <div class="next-session-label">Continuar de onde parou</div>
            <div class="next-session-title">${lastCert.code} — ${lastCert.name}</div>
          </div>
          <div class="next-session-arrow">→</div>
        </div>
      </div>
    ` : '';

    return `
      <div class="page">
        <div class="ambient-glow"></div>
        <div class="dashboard-hero animate-fade-up">
          <h1 class="hero-title">Domine o Cloud com a <br/><span class="highlight">Certify Platform</span></h1>
          <p class="hero-subtitle">A maneira mais moderna de estudar para certificações AWS e Oracle OCI. Progresso local persistente, flashcards 3D e Pomodoro em um só lugar.</p>
          
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">${overall.pct}%</div>
              <div class="stat-label">Progresso Geral</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${overall.done}</div>
              <div class="stat-label">Módulos Feitos</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${overall.total - overall.done}</div>
              <div class="stat-label">Restantes</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">5</div>
              <div class="stat-label">Trilhas</div>
            </div>
          </div>
        </div>

        <div class="container" style="padding-bottom:100px;">
          ${nextSessionHTML}

          <div class="section-title">Amazon Web Services</div>
          <div class="certs-grid">${certCards(awsCerts)}</div>

          <div class="section-title mt-8">Oracle Cloud Infrastructure</div>
          <div class="certs-grid">${certCards(oracleCerts)}</div>
        </div>
      </div>
    `;
  }

  // ─── CERT PAGE ─────────────────────────────────────────────
  function renderCert() {
    const cert = window.CERTIFICATIONS[state.certId];
    if (!cert) return '<div class="container mt-8">Certificação não encontrada.</div>';

    const prog = Progress.getCertProgress(cert.id);
    const weeks = [...new Set((cert.modules || []).map(m => m.week))].sort((a, b) => a - b);
    
    const weekTabs = `
      <div class="tabs-container">
        <button class="tab-btn ${state.weekFilter === 'all' ? 'active' : ''}" data-week="all">Todos os módulos</button>
        ${weeks.map(w => `<button class="tab-btn ${state.weekFilter == w ? 'active' : ''}" data-week="${w}">Semana ${w}</button>`).join('')}
      </div>
    `;

    const filteredModules = state.weekFilter === 'all'
      ? (cert.modules || [])
      : (cert.modules || []).filter(m => m.week == state.weekFilter);

    const moduleList = filteredModules.map((m, idx) => {
      const done = Progress.getModule(cert.id, m.id);
      return `
        <div class="module-item ${done ? 'done' : ''} animate-fade-up" style="animation-delay: ${idx * 0.05}s" data-cert="${cert.id}" data-mod="${m.id}">
          <div class="mod-check">${done ? '✓' : ''}</div>
          <div class="mod-content">
            <div class="mod-week">Semana ${m.week || '?'}</div>
            <div class="mod-title">${m.title}</div>
            <div class="mod-meta mt-4">
              <span>⏱ ${m.estimatedTime || 'N/A'}</span>
              <span>📝 ${m.flashcards ? m.flashcards.length : 0} Flashcards</span>
            </div>
          </div>
          <div class="mod-arrow">→</div>
        </div>
      `;
    }).join('');

    return `
      <div class="page">
        <div class="ambient-glow"></div>
        <div class="cert-hero animate-fade-up">
          <div class="container">
            <button class="btn-secondary mb-8" onclick="App.navigate('home')">← Voltar para Dashboard</button>
            <div class="flex items-center gap-4 mb-8">
              <div class="cert-icon-wrapper" style="width:64px;height:64px;font-size:32px;">${cert.emoji || '☁️'}</div>
              <div>
                <div class="cert-code">${cert.code}</div>
                <h1 class="cert-hero-title">${cert.name}</h1>
              </div>
            </div>
            
            <p class="cert-hero-desc">${cert.description}</p>
            
            <div class="flex gap-4">
              <button class="btn-primary" onclick="App.navigate('flashcards','${cert.id}')">🃏 Revisar Flashcards</button>
              <button class="btn-secondary" onclick="App.navigate('pomodoro','${cert.id}')">🍅 Iniciar Pomodoro</button>
            </div>
          </div>
        </div>

        <div class="container" style="padding-bottom:100px;">
          <div class="flex items-center justify-between mb-8">
            <div class="progress-wrap" style="width:300px;">
              <div class="progress-info">
                <span class="progress-text">Progresso da Trilha</span>
                <span class="progress-pct">${prog.pct}%</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width:${prog.pct}%"></div>
              </div>
            </div>
          </div>
          
          ${weekTabs}
          <div class="module-list" id="module-list">
            ${moduleList}
          </div>
        </div>
      </div>
    `;
  }

  // ─── MODULE PAGE ───────────────────────────────────────────
  function renderModule() {
    const cert = window.CERTIFICATIONS[state.certId];
    if (!cert) return '';
    const mod = cert.modules.find(m => String(m.id) === String(state.moduleId));
    if (!mod) return '';
    const done = Progress.getModule(cert.id, mod.id);

    return `
      <div class="page">
        <div class="cert-hero animate-fade-up" style="padding: 40px 0;">
          <div class="container">
            <button class="btn-secondary mb-8" onclick="App.navigate('cert','${cert.id}')">← Voltar para a Trilha</button>
            <div class="cert-code">SEMANA ${mod.week || '?'}</div>
            <h1 class="cert-hero-title">${mod.title}</h1>
            <div class="flex items-center gap-6 mt-4 text-muted">
              <span>⏱ ${mod.estimatedTime || 'N/A'} estimadas</span>
              <span>${done ? '✅ Concluído' : '⏳ Pendente'}</span>
            </div>
          </div>
        </div>

        <div class="container" style="padding-bottom: 100px; max-width: 900px;">
          <div class="animate-fade-up">
            <div class="section-title">📚 O que você vai aprender</div>
            <ul style="color:var(--text-secondary); line-height: 2; margin-left: 20px; font-size: 1.05rem; margin-bottom: 32px;">
              ${(mod.topics||[]).map(t => `<li style="margin-bottom:12px;">${t}</li>`).join('')}
            </ul>

            <div id="module-markdown-content" style="margin-bottom: 64px; min-height: 200px;">
               <!-- Conteúdo Markdown injetado aqui instantaneamente -->
            </div>

            <!-- Flashcards Section -->
            <div style="margin-top: 48px; margin-bottom: 48px;">
              <h2 class="section-title" style="margin-bottom: 24px;">🧠 Revisão com Flashcards</h2>
              <div id="flashcard-area"></div>
            </div>

            <!-- Footer do Módulo -->
            <div class="flex items-center justify-between gap-4 mt-8" style="border-top: 1px solid var(--border); padding-top: 32px;">
              <a href="${mod.resources?.readme || mod.link || '#'}" target="_blank" class="btn-primary" style="background: var(--bg-2); color: var(--text-primary); border: 1px solid var(--border);">Ler Documentação Oficial ↗</a>
              
              <button class="btn-primary" id="mod-done-btn" data-cert="${cert.id}" data-mod="${mod.id}" style="${done ? 'background: var(--success); color: #fff; border-color: var(--success);' : ''}">
                ${done ? '✅ Módulo Concluído (Desmarcar)' : 'Concluir Módulo'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ─── FLASHCARDS PAGE ───────────────────────────────────────
  function renderFlashcardsPage() {
    const cert = window.CERTIFICATIONS[state.certId];
    if (!cert) return '';
    return `
      <div class="page animate-fade-up">
        <div class="container" style="padding-top:40px; padding-bottom: 100px; max-width: 800px;">
          <button class="btn-secondary mb-8" onclick="App.navigate('cert','${cert.id}')">← Voltar</button>
          <div class="section-title">Flashcards — ${cert.code}</div>
          <div id="flashcard-area"></div>
        </div>
      </div>
    `;
  }

  // ─── POMODORO PAGE ─────────────────────────────────────────
  function renderPomodoroPage() {
    const cert = window.CERTIFICATIONS[state.certId];
    if (!cert) return '';
    return `
      <div class="page animate-fade-up">
        <div class="container" style="padding-top:40px; padding-bottom: 100px; max-width: 500px;">
          <button class="btn-secondary mb-8" onclick="App.navigate('cert','${cert.id}')">← Voltar</button>
          <div class="section-title">Pomodoro</div>
          <div style="background:var(--bg-1); border:1px solid var(--border); padding:32px; border-radius:var(--radius-lg);">
            ${Pomodoro.renderUI()}
          </div>
        </div>
      </div>
    `;
  }

  // ─── Bind page events ──────────────────────────────────────
  function bindPageEvents() {
    document.querySelectorAll('.module-item').forEach(item => {
      item.addEventListener('click', e => {
        if (e.target.closest('.mod-check')) return; // handled below
        const certId = item.dataset.cert;
        const modId  = item.dataset.mod;
        if (!certId || !modId) return;
        navigate('module', certId, modId);
      });
    });

    document.querySelectorAll('.mod-check').forEach(chk => {
      chk.addEventListener('click', e => {
        e.stopPropagation();
        const item   = chk.closest('.module-item');
        const certId = item?.dataset.cert;
        const modId  = item?.dataset.mod;
        if (!certId || !modId) return;
        const current = Progress.getModule(certId, modId);
        Progress.setModule(certId, modId, !current);
        item.classList.toggle('done', !current);
        chk.textContent = !current ? '✓' : '';
        refreshCertProgress(certId);
      });
    });

    document.querySelectorAll('.week-tab, .tab-btn[data-week]').forEach(tab => {
      tab.addEventListener('click', () => {
        state.weekFilter = tab.dataset.week;
        renderPage();
      });
    });

    const doneBtn = el('mod-done-btn');
    if (doneBtn) {
      doneBtn.addEventListener('click', () => {
        const certId = doneBtn.dataset.cert;
        const modId  = doneBtn.dataset.mod;
        const current = Progress.getModule(certId, modId);
        Progress.setModule(certId, modId, !current);
        navigate('module', certId, modId);
      });
    }

    // Removemos os handlers de tabs de módulo, pois agora o layout é sequencial

    if (state.page === 'flashcards') initFlashcardsWidget();
    if (state.page === 'pomodoro') Pomodoro.init(state.certId);
    if (state.page === 'module') {
      initFlashcardsWidget();
      loadMarkdownContent();
    }
  }

  function loadMarkdownContent() {
    const mdContainer = el('module-markdown-content');
    if (!mdContainer) return;
    
    const cert = window.CERTIFICATIONS[state.certId];
    if (!cert) return;
    const mod = cert.modules.find(m => String(m.id) === String(state.moduleId));
    if (!mod || !window.MODULE_TEXTS) return;

    const textKey = cert.id + '_' + mod.id;
    const markdownText = window.MODULE_TEXTS[textKey];

    if (!markdownText) {
      mdContainer.innerHTML = '<p style="color:var(--text-muted); font-style: italic;">Nenhum conteúdo estendido disponível para este módulo.</p>';
      return;
    }

    if (window.marked) {
      mdContainer.innerHTML = '<div class="markdown-body">' + marked.parse(markdownText) + '</div>';
    } else {
      mdContainer.innerHTML = '<p style="color:var(--danger)">Erro: biblioteca marked.js não carregada.</p>';
    }
  }

  function initFlashcardsWidget() {
    if(window.Flashcards) {
      Flashcards.init(state.certId, state.moduleId);
      Flashcards.render();
    }
  }

  function refreshCertProgress(certId) {
    const prog = Progress.getCertProgress(certId);
    const fill = qs('.progress-fill');
    if (fill) fill.style.width = `${prog.pct}%`;
    const pctEl = qs('.progress-pct');
    if (pctEl) pctEl.textContent = `${prog.pct}%`;
    const infoEl = qs('.progress-text');
    if (infoEl) infoEl.textContent = `${prog.done} / ${prog.total} Concluídos`;
  }

  // ─── Init ──────────────────────────────────────────────────
  function init() {
    document.documentElement.setAttribute('data-provider', state.provider);
    document.querySelectorAll('.provider-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.prov === state.provider);
      btn.addEventListener('click', () => setProvider(btn.dataset.prov));
    });
    renderPage();

    window.addEventListener('progress:updated', () => {
      if (state.page === 'home') renderPage();
    });
  }

  return { init, navigate, setProvider };
})();

// ─── Boot ───────────────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
window.App = App;
