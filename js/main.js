// Nav: transparent over the dark hero, solid (light) once scrolled past it
const nav = document.getElementById('nav');
const hero = document.getElementById('hero');

// Cache the hero height (recomputed on resize/load) so we never force a layout
// recalc inside the scroll handler; the work is rAF-throttled.
let heroH = hero ? hero.offsetHeight : 0;
let ticking = false;
const applyNav = () => {
  const threshold = Math.max(heroH, window.innerHeight) - 90;
  const solid = window.scrollY > threshold;
  nav.classList.toggle('is-solid', solid);
  nav.classList.toggle('is-scrim', !solid && window.scrollY > 10);
  ticking = false;
};
const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(applyNav); } };
const remeasure = () => { heroH = hero ? hero.offsetHeight : 0; applyNav(); };
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', remeasure, { passive: true });
window.addEventListener('load', remeasure);
applyNav();

// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Gentle stagger for grouped reveals (siblings sharing a parent)
document.querySelectorAll('.hero__inner, .pillars, .values, .journey, .acards, .duo__copy').forEach((group) => {
  [...group.querySelectorAll('.reveal')].forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i, 5) * 80}ms`;
  });
});

// Process — semicircular lifecycle diagram, generated from step data.
// Each segment shows only its name; the full detail appears in the centre hub
// on hover/focus. A stacked list is rendered as the small-screen fallback.
const lifecycle = document.getElementById('lifecycle');
if (lifecycle) {
  const STEPS = [
    { n: '01', name: 'Listen', tint: '#ddc9a6', desc: 'We start with the problem behind the role — the team, the gaps, what "right" actually looks like.' },
    { n: '02', name: 'Search', tint: '#bcd3b3', desc: 'We go deep, not wide — targeting people who fit the brief, not just the keywords.' },
    { n: '03', name: 'Shortlist', tint: '#aec7e0', desc: "A handful of people we'd vouch for, each with a clear reason they're on the list." },
    { n: '04', name: 'Place', tint: '#e6b9a8', desc: 'We manage the process honestly on both sides — no surprises, no pressure games.' },
    { n: '05', name: 'Follow through', tint: '#c6bce0', desc: "We check in after the offer. We're done when the person is thriving and the team is glad they trusted us." },
  ];
  const NS = 'http://www.w3.org/2000/svg';
  const W = 720, H = 392, cx = 360, cy = 360, R = 348, r = 196;
  const n = STEPS.length, gap = 1.4;
  const xy = (rad, deg) => { const a = deg * Math.PI / 180; return [cx + rad * Math.cos(a), cy - rad * Math.sin(a)]; };
  const f = (v) => v.toFixed(2);

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('class', 'lifecycle__svg');

  const hub = document.createElement('div');
  hub.className = 'lifecycle__hub';
  hub.setAttribute('aria-live', 'polite');
  hub.innerHTML = '<span class="lifecycle__hubStep"></span><p class="lifecycle__hubDesc"></p>';

  const list = document.createElement('ol');
  list.className = 'lifecycle__list';

  const segs = [];
  STEPS.forEach((s, i) => {
    const a0 = 180 - i * (180 / n) - gap / 2;
    const a1 = 180 - (i + 1) * (180 / n) + gap / 2;
    const [ox0, oy0] = xy(R, a0), [ox1, oy1] = xy(R, a1);
    const [ix1, iy1] = xy(r, a1), [ix0, iy0] = xy(r, a0);
    const d = `M ${f(ox0)} ${f(oy0)} A ${R} ${R} 0 0 1 ${f(ox1)} ${f(oy1)} L ${f(ix1)} ${f(iy1)} A ${r} ${r} 0 0 0 ${f(ix0)} ${f(iy0)} Z`;

    const g = document.createElementNS(NS, 'g');
    g.setAttribute('class', 'lifecycle__seg');
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.setAttribute('aria-label', `Step ${i + 1}: ${s.name}`);

    const path = document.createElementNS(NS, 'path');
    path.setAttribute('class', 'seg__fill');
    path.setAttribute('d', d);
    path.setAttribute('fill', s.tint);
    g.appendChild(path);

    const am = (a0 + a1) / 2, rm = (R + r) / 2;
    // outward (radial) push vector for the hover animation
    const push = 22;
    g.style.setProperty('--tx', f(push * Math.cos(am * Math.PI / 180)) + 'px');
    g.style.setProperty('--ty', f(-push * Math.sin(am * Math.PI / 180)) + 'px');
    const [lx, ly] = xy(rm, am);
    const num = document.createElementNS(NS, 'text');
    num.setAttribute('class', 'lifecycle__num');
    num.setAttribute('x', f(lx)); num.setAttribute('y', f(ly - 12));
    num.setAttribute('text-anchor', 'middle');
    num.textContent = s.n;
    g.appendChild(num);

    const name = document.createElementNS(NS, 'text');
    name.setAttribute('class', 'lifecycle__name');
    name.setAttribute('x', f(lx));
    name.setAttribute('text-anchor', 'middle');
    const words = s.name.split(' ');
    if (s.name.length > 9 && words.length > 1) {
      name.setAttribute('y', f(ly + 6));
      const t1 = document.createElementNS(NS, 'tspan'); t1.setAttribute('x', f(lx)); t1.textContent = words[0];
      const t2 = document.createElementNS(NS, 'tspan'); t2.setAttribute('x', f(lx)); t2.setAttribute('dy', '20'); t2.textContent = words.slice(1).join(' ');
      name.appendChild(t1); name.appendChild(t2);
    } else {
      name.setAttribute('y', f(ly + 11));
      name.textContent = s.name;
    }
    g.appendChild(name);

    svg.appendChild(g);
    segs.push(g);

    const activate = () => setActive(i);
    g.addEventListener('mouseenter', activate);
    g.addEventListener('focus', activate);
    g.addEventListener('click', activate);

    const li = document.createElement('li');
    li.innerHTML = `<span class="ll__num">${s.n}</span><div><h3 class="ll__name">${s.name}</h3><p class="ll__desc">${s.desc}</p></div>`;
    list.appendChild(li);
  });

  function setActive(i) {
    segs.forEach((g, idx) => g.classList.toggle('is-active', idx === i));
    hub.querySelector('.lifecycle__hubStep').textContent = STEPS[i].name;
    hub.querySelector('.lifecycle__hubDesc').textContent = STEPS[i].desc;
  }

  lifecycle.appendChild(svg);
  lifecycle.appendChild(hub);
  lifecycle.appendChild(list);
  setActive(0);
}

// FAQ accordion: single-open, smooth height via grid-template-rows
const faqList = document.getElementById('faqList');
if (faqList) {
  const items = [...faqList.querySelectorAll('.faq__item')];
  items.forEach((item) => {
    const btn = item.querySelector('.faq__q');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      items.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// Contact form: audience toggle, CTA preselect, AJAX submit (Formspree)
const cform = document.getElementById('contactForm');
if (cform) {
  const lookingRadio = cform.querySelector('#aud-looking');
  const fieldHiring = cform.querySelector('[data-when="hiring"]');
  const fieldLooking = cform.querySelector('[data-when="looking"]');
  const msgLabel = cform.querySelector('.cform__msglabel');
  const status = document.getElementById('cformStatus');
  const submitBtn = cform.querySelector('.cform__submit');

  const applyMode = () => {
    const looking = lookingRadio.checked;
    fieldHiring.hidden = looking;
    fieldLooking.hidden = !looking;
    msgLabel.textContent = looking ? msgLabel.dataset.looking : msgLabel.dataset.hiring;
  };
  cform.querySelectorAll('input[name="audience"]').forEach((r) => r.addEventListener('change', applyMode));
  applyMode();

  // The split CTAs preselect the matching side before scrolling to the form
  document.querySelectorAll('[data-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.mode === 'looking' ? '#aud-looking' : '#aud-hiring';
      const radio = cform.querySelector(target);
      if (radio) { radio.checked = true; applyMode(); }
    });
  });

  cform.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    status.textContent = 'Sending…';
    status.className = 'cform__status is-sending';
    try {
      const res = await fetch(cform.action, {
        method: 'POST',
        body: new FormData(cform),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        cform.reset();
        applyMode();
        status.textContent = "Thanks — we'll be in touch shortly.";
        status.className = 'cform__status is-ok';
      } else {
        status.textContent = 'Something went wrong. Please email hello@synergyscout.in.';
        status.className = 'cform__status is-err';
      }
    } catch {
      status.textContent = 'Something went wrong. Please email hello@synergyscout.in.';
      status.className = 'cform__status is-err';
    } finally {
      submitBtn.disabled = false;
    }
  });
}
