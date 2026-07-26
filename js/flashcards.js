/* ============================================================
   flashcards.js — Engine de Flashcards com flip 3D
   ============================================================ */

const Flashcards = (() => {
  let deck = [];
  let index = 0;
  let known = 0;
  let unknown = 0;
  let flipped = false;
  let certId = null;
  let moduleId = null;

  function getModuleCards(cId, mId) {
    let cards = [];
    if (window.CERTIFICATIONS && window.CERTIFICATIONS[cId]) {
      const mod = window.CERTIFICATIONS[cId].modules.find(m => String(m.id) === String(mId));
      if (mod) {
        if (mod.flashcards) cards = [...mod.flashcards];
        
        // Auto-generate extra cards from content to ensure volume
        if (mod.content) {
          if (mod.content.focus) cards.push({ q: 'Foco do Módulo:', a: mod.content.focus });
          if (mod.content.keyPoints) {
            mod.content.keyPoints.forEach(kp => cards.push({ q: 'Ponto Chave:\nComplete ou explique: ' + kp.substring(0, 40) + '...', a: kp }));
          }
          if (mod.content.examSignals) {
            mod.content.examSignals.forEach(es => {
              const parts = es.split('→');
              if (parts.length > 1) cards.push({ q: 'Sinal de Prova:\n' + parts[0].trim(), a: parts[1].trim() });
              else cards.push({ q: 'Sinal de Prova:', a: es });
            });
          }
          if (mod.content.traps) {
            mod.content.traps.forEach(trap => cards.push({ q: 'Pegadinha Comum:\nFique atento com...', a: trap }));
          }
        }
      }
    }
    return cards;
  }

  function init(cId, mId) {
    certId = cId;
    moduleId = mId;
    deck = shuffle(getModuleCards(cId, mId));
    index = 0;
    known = 0;
    unknown = 0;
    flipped = false;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function current() {
    return deck[index] || null;
  }

  function flip() {
    flipped = !flipped;
    const card = document.querySelector('.flashcard');
    if (card) card.classList.toggle('flipped', flipped);
  }

  function next(verdict) {
    if (verdict === 'known') known++;
    else if (verdict === 'unknown') unknown++;
    flipped = false;
    index++;
    render();
  }

  function restart() {
    deck = shuffle(getModuleCards(certId, moduleId));
    index = 0;
    known = 0;
    unknown = 0;
    flipped = false;
    render();
  }

  function render() {
    const container = document.getElementById('flashcard-area');
    if (!container) return;

    if (deck.length === 0) {
      container.innerHTML = '<div class="fc-empty">Nenhum flashcard disponível para essa trilha ainda.</div>';
      return;
    }

    if (index >= deck.length) {
      // Tela de resultado
      container.innerHTML = `
        <div class="fc-result">
          <div class="fc-result-icon">${known >= unknown ? '🎉' : '📚'}</div>
          <h3>${known >= unknown ? 'Bom trabalho!' : 'Continue praticando!'}</h3>
          <div class="fc-stats">
            <div class="fc-stat known">✅ Sabia: <strong>${known}</strong></div>
            <div class="fc-stat unknown">❌ Não sabia: <strong>${unknown}</strong></div>
            <div class="fc-stat total">📋 Total: <strong>${deck.length}</strong></div>
          </div>
          <div class="fc-accuracy">Acurácia: ${Math.round((known / deck.length) * 100)}%</div>
          <button class="btn-primary" onclick="Flashcards.restart()">🔄 Reiniciar deck</button>
        </div>
      `;
      return;
    }

    const card = current();
    const progress = `${index + 1} / ${deck.length}`;

    container.innerHTML = `
      <div class="fc-header">
        <span class="fc-progress">${progress}</span>
        <div class="fc-progress-bar">
          <div class="fc-progress-fill" style="width:${((index / deck.length) * 100)}%"></div>
        </div>
        <div class="fc-score">✅ ${known} &nbsp; ❌ ${unknown}</div>
      </div>

      <div class="flashcard-wrap">
        <div class="flashcard" id="fc-card" onclick="Flashcards.flip()">
          <div class="fc-face fc-front">
            <div class="fc-label">❓ Pergunta</div>
            <div class="fc-text">${card.q}</div>
            <div class="fc-hint">Clique para revelar a resposta</div>
          </div>
          <div class="fc-face fc-back">
            <div class="fc-label">💡 Resposta</div>
            <div class="fc-text">${card.a}</div>
          </div>
        </div>
      </div>

      <div class="fc-actions">
        <button class="fc-btn fc-unknown" onclick="Flashcards.next('unknown')">
          ✗ Não sabia
        </button>
        <button class="fc-btn fc-flip" onclick="Flashcards.flip()">
          🔄 Virar
        </button>
        <button class="fc-btn fc-known" onclick="Flashcards.next('known')">
          ✓ Sabia!
        </button>
      </div>
    `;
  }

  return { init, flip, next, restart, render };
})();

window.Flashcards = Flashcards;
