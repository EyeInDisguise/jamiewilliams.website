const pointer = window.matchMedia('(pointer: fine) and (hover: hover)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const cursor = document.createElement('div');
cursor.className = 'cursor-reticle';
cursor.setAttribute('aria-hidden', 'true');
document.body.append(cursor);

let frame = 0;
let x = 0;
let y = 0;

function sync() {
  const enabled = pointer.matches && !reducedMotion.matches;
  cursor.toggleAttribute('data-enabled', enabled);
  if (!enabled) {
    cursor.removeAttribute('data-visible');
    document.documentElement.removeAttribute('data-custom-cursor');
  }
}

document.addEventListener('pointermove', event => {
  if (!cursor.hasAttribute('data-enabled') || event.pointerType !== 'mouse') {
    cursor.removeAttribute('data-visible');
    document.documentElement.removeAttribute('data-custom-cursor');
    return;
  }
  x = event.clientX;
  y = event.clientY;
  cursor.toggleAttribute('data-action', !!event.target.closest('a, button, summary'));
  if (!cursor.hasAttribute('data-visible')) {
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    cursor.setAttribute('data-visible', '');
  }
  document.documentElement.setAttribute('data-custom-cursor', '');
  if (!frame) frame = requestAnimationFrame(() => {
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    frame = 0;
  });
}, { passive: true });

document.addEventListener('pointerout', event => {
  if (!event.relatedTarget) {
    cursor.removeAttribute('data-visible');
    document.documentElement.removeAttribute('data-custom-cursor');
  }
});
addEventListener('blur', () => {
  cursor.removeAttribute('data-visible');
  document.documentElement.removeAttribute('data-custom-cursor');
});
pointer.addEventListener('change', sync);
reducedMotion.addEventListener('change', sync);
sync();
