const story = document.querySelector('[data-controller-story]');

if (story) {
  const stages = [...story.querySelectorAll('[data-story-step]')];
  const count = story.querySelector('[data-story-count]');
  const number = story.querySelector('[data-story-number]');
  const name = story.querySelector('[data-story-name]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let current = -1;

  function update() {
    frame = 0;
    if (reducedMotion.matches) return;
    const marker = window.innerHeight * 0.55;
    const bounds = story.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (marker - bounds.top) / bounds.height));
    story.style.setProperty('--story-progress', progress.toFixed(4));

    let active = 0;
    for (let i = 1; i < stages.length; i++) {
      if (stages[i].getBoundingClientRect().top <= marker) active = i;
    }
    if (active === current) return;
    current = active;
    const stage = stages[active];
    const title = stage.querySelector('h3').textContent;
    const index = String(active + 1).padStart(2, '0');
    count.textContent = `${index} / 04`;
    number.textContent = index;
    name.textContent = title;
    stages.forEach((item, i) => item.toggleAttribute('data-active', i === active));
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(update);
  }

  function syncMotion() {
    story.toggleAttribute('data-ready', !reducedMotion.matches);
    if (reducedMotion.matches) {
      story.style.removeProperty('--story-progress');
      stages.forEach(item => item.removeAttribute('data-active'));
      current = -1;
    } else {
      schedule();
    }
  }

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  reducedMotion.addEventListener('change', syncMotion);
  syncMotion();
}
