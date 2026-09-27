const threshold = document.querySelector('[data-threshold]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (threshold) {
  let frame = 0;
  const update = () => {
    frame = 0;
    if (reducedMotion.matches) {
      threshold.style.removeProperty('--door-shift');
      return;
    }
    const distance = Math.max(1, threshold.offsetHeight * .72);
    const progress = Math.min(1, Math.max(0, window.scrollY / distance));
    threshold.style.setProperty('--door-shift', `${Math.round(35 + progress * 65)}%`);
  };
  const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
  addEventListener('scroll', requestUpdate, { passive: true });
  addEventListener('resize', requestUpdate, { passive: true });
  reducedMotion.addEventListener('change', requestUpdate);
  update();
}
