/* ============================================================
   pomodoro.js — Timer Pomodoro integrado
   ============================================================ */

const Pomodoro = (() => {
  let timer = null;
  let secondsLeft = 25 * 60;
  let isRunning = false;
  let isBreak = false;
  let sessions = 0;
  let currentCert = null;

  const WORK_TIME = 25 * 60;
  const SHORT_BREAK = 5 * 60;
  const LONG_BREAK = 15 * 60;

  function getEl(id) { return document.getElementById(id); }

  function formatTime(s) {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }

  function render() {
    const display = getEl('pom-display');
    const btn = getEl('pom-btn');
    const phase = getEl('pom-phase');
    const sessEl = getEl('pom-sessions');
    if (!display) return;

    display.textContent = formatTime(secondsLeft);
    if (phase) phase.textContent = isBreak ? (sessions % 4 === 0 ? '☕ Pausa Longa' : '🌿 Pausa Curta') : '🍅 Foco';
    if (btn) btn.textContent = isRunning ? '⏸ Pausar' : '▶ Iniciar';
    if (sessEl) sessEl.textContent = `Sessões: ${sessions}`;

    // Ring progress
    const ring = getEl('pom-ring');
    if (ring) {
      const total = isBreak ? (sessions % 4 === 0 ? LONG_BREAK : SHORT_BREAK) : WORK_TIME;
      const pct = 1 - (secondsLeft / total);
      const circumference = 2 * Math.PI * 54;
      ring.style.strokeDashoffset = circumference * (1 - pct);
    }
  }

  function tick() {
    if (!isRunning) return;
    secondsLeft--;
    if (secondsLeft < 0) {
      clearInterval(timer);
      isRunning = false;
      if (!isBreak) {
        sessions++;
        isBreak = true;
        secondsLeft = sessions % 4 === 0 ? LONG_BREAK : SHORT_BREAK;
        playSound('break');
        showNotification('Pausa!', 'Tempo de descanso 🌿');
      } else {
        isBreak = false;
        secondsLeft = WORK_TIME;
        playSound('work');
        showNotification('Hora de focar!', 'Inicie o próximo Pomodoro 🍅');
      }
      render();
      return;
    }
    render();
  }

  function toggle() {
    if (isRunning) {
      clearInterval(timer);
      isRunning = false;
    } else {
      isRunning = true;
      timer = setInterval(tick, 1000);
    }
    render();
  }

  function reset() {
    clearInterval(timer);
    isRunning = false;
    isBreak = false;
    secondsLeft = WORK_TIME;
    render();
  }

  function skip() {
    clearInterval(timer);
    isRunning = false;
    if (!isBreak) {
      sessions++;
      isBreak = true;
      secondsLeft = sessions % 4 === 0 ? LONG_BREAK : SHORT_BREAK;
    } else {
      isBreak = false;
      secondsLeft = WORK_TIME;
    }
    render();
  }

  function playSound(type) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = type === 'break' ? 440 : 880;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.8);
    } catch(e) {}
  }

  function showNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, { body, icon: '/favicon.ico' });
    }
  }

  function requestPermission() {
    if ('Notification' in window) Notification.requestPermission();
  }

  function init(certId) {
    currentCert = certId;
    requestPermission();
    render();

    document.addEventListener('click', e => {
      if (e.target.id === 'pom-btn') toggle();
      if (e.target.id === 'pom-reset') reset();
      if (e.target.id === 'pom-skip') skip();
    });
  }

  function renderUI() {
    const circumference = 2 * Math.PI * 54;
    return `
      <div class="pomodoro-container">
        <div class="pom-header">
          <span class="pom-icon">🍅</span>
          <h3>Pomodoro Timer</h3>
        </div>
        <div class="pom-ring-wrap">
          <svg viewBox="0 0 120 120" class="pom-ring-svg">
            <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="8"/>
            <circle id="pom-ring" cx="60" cy="60" r="54" fill="none"
              stroke="var(--accent)" stroke-width="8"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="0"
              stroke-linecap="round"
              transform="rotate(-90 60 60)"/>
          </svg>
          <div class="pom-center">
            <div id="pom-display" class="pom-time">25:00</div>
            <div id="pom-phase" class="pom-phase">🍅 Foco</div>
          </div>
        </div>
        <div class="pom-controls">
          <button id="pom-reset" class="pom-ctrl-btn">↺</button>
          <button id="pom-btn" class="pom-main-btn">▶ Iniciar</button>
          <button id="pom-skip" class="pom-ctrl-btn">⏭</button>
        </div>
        <div id="pom-sessions" class="pom-sessions">Sessões: 0</div>
      </div>
    `;
  }

  return { init, toggle, reset, skip, render, renderUI };
})();

window.Pomodoro = Pomodoro;
