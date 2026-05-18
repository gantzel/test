(function () {
  var ROOT = document.documentElement;
  var KEY  = 'ecare-theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      ROOT.setAttribute('data-color-theme', 'dark');
    } else {
      ROOT.removeAttribute('data-color-theme');
    }
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    document.querySelectorAll('[data-theme-set]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.dataset.themeSet === theme ? 'true' : 'false');
    });
  }

  // Wire up buttons once DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    var current = ROOT.getAttribute('data-color-theme') || 'light';
    document.querySelectorAll('[data-theme-set]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.dataset.themeSet === current ? 'true' : 'false');
      btn.addEventListener('click', function () { applyTheme(btn.dataset.themeSet); });
    });
  });
})();
