(function () {
  var header = document.querySelector('.site-header');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 10); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var toggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.nav ul');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', false); });
    });
  }

  var chips = document.querySelectorAll('.chip');
  var topics = document.querySelectorAll('.topic');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.dataset.filter;
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip); });
      topics.forEach(function (t) { t.hidden = !(f === 'all' || t.dataset.group === f); });
    });
  });

  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  var y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();
})();
