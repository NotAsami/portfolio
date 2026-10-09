(() => {
  'use strict';

  // Tab rail: mark the tab whose sheet is in view.
  const tabs = [...document.querySelectorAll('.rail a')];
  const byId = new Map(tabs.map((a) => [a.hash.slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      tabs.forEach((a) => a.removeAttribute('aria-current'));
      byId.get(en.target.id)?.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });

  // Settle the sheet a tab lands on, once the scroll has arrived.
  tabs.forEach((a) => a.addEventListener('click', () => {
    const sheet = document.getElementById(a.hash.slice(1));
    if (!sheet) return;
    const play = () => { sheet.classList.remove('settle'); void sheet.offsetWidth; sheet.classList.add('settle'); };
    if ('onscrollend' in window) {
      const done = () => { clearTimeout(t); removeEventListener('scrollend', done); play(); };
      // No scroll happens when the sheet is already in place, so fall back after a beat.
      const t = setTimeout(done, 120);
      addEventListener('scroll', () => clearTimeout(t), { once: true });
      addEventListener('scrollend', done);
    } else setTimeout(play, 600);
  }));

  // Image viewer: sleeves open in a dialog; links stay as the no-JS fallback.
  const viewer = document.querySelector('.viewer');
  if (viewer && viewer.showModal) {
    const img = viewer.querySelector('img');
    const cap = viewer.querySelector('.cap');
    const count = viewer.querySelector('.count');
    let set = [], at = 0;
    const show = (i) => {
      at = (i + set.length) % set.length;
      const a = set[at];
      img.src = a.href;
      img.alt = a.querySelector('img').alt;
      cap.textContent = a.querySelector('figcaption').textContent;
      count.textContent = (at + 1) + ' / ' + set.length;
    };
    document.querySelectorAll('.strip, .brettany-media').forEach((group) => {
      const links = [...group.querySelectorAll('a')];
      links.forEach((a, i) => a.addEventListener('click', (e) => {
        e.preventDefault();
        set = links;
        viewer.toggleAttribute('data-single', links.length < 2);
        show(i);
        viewer.showModal();
      }));
    });
    viewer.querySelectorAll('[data-step]').forEach((b) => b.addEventListener('click', () => show(at + Number(b.dataset.step))));
    viewer.querySelector('.v-close').addEventListener('click', () => viewer.close());
    viewer.addEventListener('click', (e) => { if (e.target === viewer) viewer.close(); }); // backdrop
    viewer.addEventListener('keydown', (e) => {
      if (set.length < 2) return;
      if (e.key === 'ArrowRight') show(at + 1);
      if (e.key === 'ArrowLeft') show(at - 1);
    });
  }

  // Reduced motion: don't autoplay the demo; the controls stay.
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video[autoplay]').forEach((v) => { v.removeAttribute('autoplay'); v.pause(); });
  }
})();
