/* ============================================================
   progress.js — Lógica de progresso com localStorage
   ============================================================ */

const Progress = (() => {
  const PREFIX = 'certify_prog_';

  function key(certId, moduleId) {
    return `${PREFIX}${certId}_${moduleId}`;
  }

  function setModule(certId, moduleId, done) {
    localStorage.setItem(key(certId, moduleId), done ? '1' : '0');
    dispatchEvent(new CustomEvent('progress:updated', { detail: { certId, moduleId, done } }));
  }

  function getModule(certId, moduleId) {
    return localStorage.getItem(key(certId, moduleId)) === '1';
  }

  function getCertProgress(certId) {
    const cert = window.CERTIFICATIONS[certId];
    if (!cert) return { done: 0, total: 0, pct: 0 };
    const total = cert.modules.length;
    const done = cert.modules.filter(m => getModule(certId, m.id)).length;
    return { done, total, pct: total === 0 ? 0 : Math.round((done / total) * 100) };
  }

  function getOverallProgress() {
    const ids = Object.keys(window.CERTIFICATIONS);
    let totalDone = 0, totalModules = 0;
    ids.forEach(id => {
      const p = getCertProgress(id);
      totalDone += p.done;
      totalModules += p.total;
    });
    return {
      done: totalDone,
      total: totalModules,
      pct: totalModules === 0 ? 0 : Math.round((totalDone / totalModules) * 100)
    };
  }

  function getLastStudied() {
    // Retorna o certId com maior progresso recente
    const ids = Object.keys(window.CERTIFICATIONS);
    let best = null, bestPct = -1;
    ids.forEach(id => {
      const p = getCertProgress(id);
      if (p.pct > bestPct && p.pct < 100) {
        bestPct = p.pct;
        best = id;
      }
    });
    return best;
  }

  return { setModule, getModule, getCertProgress, getOverallProgress, getLastStudied };
})();

window.Progress = Progress;
