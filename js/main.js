// loop: mobile menu + quiet reveal on scroll. Nothing else.
(function () {
  var nav = document.getElementById('nav'), b = nav && nav.querySelector('.burger');
  if (b) {
    b.addEventListener('click', function () { var o = nav.classList.toggle('open'); b.setAttribute('aria-expanded', o); b.textContent = o ? 'schließen' : 'menü'; });
    nav.querySelectorAll('ul a').forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); b.setAttribute('aria-expanded', false); b.textContent = 'menü'; }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) { b.click(); b.focus(); } });
  }
  var els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (e) { io.observe(e); });
})();
