(function () {
  var KEY = 'fdp-confort';
  var DEFAULTS = { size: 'm', leading: 'normal', width: 'narrow', font: 'lexend', dyslexia: 'off' };
  var root = document.documentElement;

  function load() {
    try { return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(KEY) || '{}')); }
    catch (e) { return Object.assign({}, DEFAULTS); }
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  var state = load();

  function apply(s) {
    root.dataset.size = s.size;
    root.dataset.leading = s.leading;
    root.dataset.width = s.width;
    root.dataset.font = s.font;
    root.dataset.dyslexia = s.dyslexia;

    document.querySelectorAll('.seg[data-setting]').forEach(function (grp) {
      var setting = grp.dataset.setting;
      grp.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.value === s[setting]));
      });
    });
    var dys = document.getElementById('cf-dyslexia');
    if (dys) dys.setAttribute('aria-pressed', String(s.dyslexia === 'on'));
  }

  document.querySelectorAll('.seg[data-setting] button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var setting = btn.closest('.seg').dataset.setting;
      state[setting] = btn.dataset.value;
      save(state); apply(state);
    });
  });

  var dysBtn = document.getElementById('cf-dyslexia');
  if (dysBtn) dysBtn.addEventListener('click', function () {
    state.dyslexia = state.dyslexia === 'on' ? 'off' : 'on';
    save(state); apply(state);
  });

  var resetBtn = document.getElementById('cf-reset');
  if (resetBtn) resetBtn.addEventListener('click', function () {
    state = Object.assign({}, DEFAULTS);
    save(state); apply(state);
  });

  var panel = document.getElementById('comfort-panel');
  var overlay = document.getElementById('comfort-overlay');
  var openBtn = document.getElementById('comfort-open');
  var closeBtn = document.getElementById('comfort-close');
  var lastFocus = null;

  function openPanel() {
    lastFocus = document.activeElement;
    panel.hidden = false;
    void panel.offsetWidth;
    panel.classList.add('open');
    overlay.classList.add('open');
    openBtn.setAttribute('aria-expanded', 'true');
    var first = panel.querySelector('button, [href], input');
    if (first) first.focus();
    document.addEventListener('keydown', onKey);
  }
  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    openBtn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', onKey);
    var done = function () { panel.hidden = true; panel.removeEventListener('transitionend', done); };
    panel.addEventListener('transitionend', done);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function onKey(e) { if (e.key === 'Escape') { e.preventDefault(); closePanel(); } }

  if (openBtn) openBtn.addEventListener('click', openPanel);
  if (closeBtn) closeBtn.addEventListener('click', closePanel);
  if (overlay) overlay.addEventListener('click', closePanel);

  apply(state);
})();
