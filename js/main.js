// Nav: transparent over the dark hero, solid (light) once scrolled past it
const nav = document.getElementById('nav');
const hero = document.getElementById('hero');

const onScroll = () => {
  // Hero is min-height:100vh, so flip the nav once we've scrolled near a full viewport.
  const heroH = hero ? hero.offsetHeight : 0;
  const threshold = Math.max(heroH, window.innerHeight) - 90;
  const solid = window.scrollY > threshold;
  // Scrim kicks in as soon as we leave the very top, until the solid bar takes over.
  nav.classList.toggle('is-solid', solid);
  nav.classList.toggle('is-scrim', !solid && window.scrollY > 10);
};
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
window.addEventListener('load', onScroll);
onScroll();

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
document.querySelectorAll('.hero__inner, .vlist, .hlist, .steps, .split__grid, .block__main, .block__aside').forEach((group) => {
  [...group.querySelectorAll('.reveal')].forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i, 5) * 80}ms`;
  });
});

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
