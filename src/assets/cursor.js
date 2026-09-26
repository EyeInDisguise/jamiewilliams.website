const pointer = window.matchMedia('(pointer: fine) and (hover: hover)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const cursor = document.createElement('div');
cursor.className = 'cursor-reticle';
cursor.setAttribute('aria-hidden', 'true');
const glow = document.createElement('div');
glow.className = 'cursor-glow';
glow.setAttribute('aria-hidden', 'true');
document.body.append(glow, cursor);

let frame = 0;
let x = 0;
let y = 0;

function hide() {
  cursor.removeAttribute('data-visible');
  cursor.removeAttribute('data-pressed');
  glow.removeAttribute('data-visible');
  document.documentElement.removeAttribute('data-custom-cursor');
}

function sync() {
  const enabled = pointer.matches && !reducedMotion.matches;
  cursor.toggleAttribute('data-enabled', enabled);
  glow.toggleAttribute('data-enabled', enabled);
  if (!enabled) hide();
}

document.addEventListener('pointermove', event => {
  if (!cursor.hasAttribute('data-enabled') || event.pointerType !== 'mouse' || document.documentElement.hasAttribute('data-bonus-open')) {
    hide();
    return;
  }
  x = event.clientX;
  y = event.clientY;
  const action = event.target instanceof Element && event.target.closest('a, button, summary, input[type="range"], [role="button"]');
  cursor.toggleAttribute('data-action', !!action);
  glow.toggleAttribute('data-action', !!action);
  if (!cursor.hasAttribute('data-visible')) {
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    cursor.setAttribute('data-visible', '');
    glow.setAttribute('data-visible', '');
  }
  document.documentElement.setAttribute('data-custom-cursor', '');
  if (!frame) frame = requestAnimationFrame(() => {
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    frame = 0;
  });
}, { passive: true });

document.addEventListener('pointerdown', event => {
  if (event.pointerType === 'mouse' && cursor.hasAttribute('data-visible')) cursor.setAttribute('data-pressed', '');
});
document.addEventListener('pointerup', () => cursor.removeAttribute('data-pressed'));
document.addEventListener('pointercancel', () => cursor.removeAttribute('data-pressed'));
document.addEventListener('pointerout', event => {
  if (!event.relatedTarget) hide();
});
addEventListener('blur', hide);
pointer.addEventListener('change', sync);
reducedMotion.addEventListener('change', sync);
sync();
