// Standalone port of the "Sam Portfolio — Sticker" Claude Design component.
// The original ran inside the dc-runtime (React-hosted DCLogic). Every method
// here is the same plain-DOM logic, called once on load instead of via a React
// lifecycle. Default props are baked in from the design's data-props block.
(() => {
  'use strict';

  // Design defaults (from the .dc.html data-props): accentSet "Berry", and
  // tilt / motion / ambientGlow on, bgPattern "Dots".
  const PROPS = {
    accentSet: 'Berry',
    tilt: true,
    motion: true,
    ambientGlow: true,
    bgPattern: 'Dots',
  };

  const THEMES = {
    Candy:  ['#ff6f61', '#b8f24a', '#46d3ff', '#b98bff', '#ffd23f'],
    Citrus: ['#ff8a3d', '#ffd23f', '#b8f24a', '#4ad6c0', '#ff6f9c'],
    Berry:  ['#ff5d8f', '#b98bff', '#7c8bff', '#46d3ff', '#ff9f43'],
    Sunset: ['#ff5e62', '#ff9966', '#ffd23f', '#c56cff', '#ff7eb3'],
    Ocean:  ['#2ec5ce', '#46d3ff', '#7c8bff', '#5ee7a0', '#ffd23f'],
  };

  function applyTheme(root) {
    const t = THEMES[PROPS.accentSet] || THEMES.Candy;
    ['--c1', '--c2', '--c3', '--c4', '--c5'].forEach((v, i) => root.style.setProperty(v, t[i]));
    root.style.setProperty('--p', t[0]);
  }

  function applyTilt(root) {
    const on = PROPS.tilt !== false;
    root.querySelectorAll('[data-tilt]').forEach((el) => {
      el.style.setProperty('--rot', on ? (el.dataset.rot + 'deg') : '0deg');
    });
  }

  function applyMotion(root) {
    const on = PROPS.motion !== false;
    root.dataset.stickerMotion = on ? 'on' : 'off';
    if (!document.getElementById('sticker-motion-style')) {
      const s = document.createElement('style');
      s.id = 'sticker-motion-style';
      s.textContent = '[data-sticker-motion="off"] *{animation:none !important;}';
      document.head.appendChild(s);
    }
  }

  function applyGlow(root) {
    const on = PROPS.ambientGlow !== false;
    root.querySelectorAll('[data-ambient]').forEach((el) => {
      el.style.display = on ? 'block' : 'none';
    });
  }

  function applyPattern(root) {
    const el = root.querySelector('[data-bg-pattern]');
    if (!el) return;
    const mode = PROPS.bgPattern || 'Dots';
    if (mode === 'None') {
      el.style.backgroundImage = 'none';
    } else if (mode === 'Grid') {
      el.style.backgroundImage = 'linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)';
      el.style.backgroundSize = '40px 40px';
    } else {
      el.style.backgroundImage = 'radial-gradient(rgba(255,255,255,.04) 1.4px,transparent 1.4px)';
      el.style.backgroundSize = '26px 26px';
    }
  }

  function initReveals(root) {
    const els = root.querySelectorAll('[data-reveal]');
    const show = (el) => {
      el.style.opacity = '1';
      el.style.transform = el.hasAttribute('data-tilt') ? 'rotate(var(--rot,0deg))' : 'none';
      if (el.hasAttribute('data-pop-children')) {
        el.querySelectorAll('[data-pop]').forEach((k, i) => {
          k.style.animation = 'popChip .5s cubic-bezier(.2,.8,.3,1) both';
          k.style.animationDelay = (0.028 * i) + 's';
        });
      }
    };
    if (!('IntersectionObserver' in window)) { els.forEach(show); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { show(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
  }

  // Detail "peek inside" toggles — bound to every [data-target] button.
  function initToggles(root) {
    root.querySelectorAll('[data-target]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.target;
        const panel = root.querySelector('[data-detail="' + id + '"]');
        const arrow = btn.querySelector('[data-arrow]');
        if (!panel) return;
        const open = panel.getAttribute('data-open') === '1';
        if (open) {
          panel.style.maxHeight = '0px'; panel.style.opacity = '0'; panel.setAttribute('data-open', '0');
          if (arrow) arrow.style.transform = 'rotate(0deg)';
          btn.setAttribute('aria-expanded', 'false');
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'; panel.style.opacity = '1'; panel.setAttribute('data-open', '1');
          if (arrow) arrow.style.transform = 'rotate(180deg)';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // style-hover shim — reproduces the runtime's `style-hover` attribute: apply
  // its declarations on hover/focus, restore the prior inline values on leave.
  // Setting individual properties (not cssText) preserves base-style transitions.
  function parseDecls(text) {
    const out = [];
    (text || '').split(';').forEach((decl) => {
      const i = decl.indexOf(':');
      if (i < 0) return;
      const prop = decl.slice(0, i).trim();
      const val = decl.slice(i + 1).trim();
      if (prop) out.push([prop, val]);
    });
    return out;
  }

  function initHover(root) {
    root.querySelectorAll('[style-hover]').forEach((el) => {
      const decls = parseDecls(el.getAttribute('style-hover'));
      if (!decls.length) return;
      const enter = () => {
        el._hoverSaved = decls.map(([p]) => [p, el.style.getPropertyValue(p), el.style.getPropertyPriority(p)]);
        decls.forEach(([p, v]) => el.style.setProperty(p, v));
      };
      const leave = () => {
        const saved = el._hoverSaved;
        if (!saved) return;
        saved.forEach(([p, v, prio]) => {
          if (v) el.style.setProperty(p, v, prio); else el.style.removeProperty(p);
        });
        el._hoverSaved = null;
      };
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
      el.addEventListener('focus', enter);
      el.addEventListener('blur', leave);
    });
  }

  function init() {
    const root = document.getElementById('top');
    if (!root) return;
    applyTheme(root);
    applyTilt(root);
    applyMotion(root);
    applyGlow(root);
    applyPattern(root);
    initToggles(root);
    initHover(root);
    initReveals(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
