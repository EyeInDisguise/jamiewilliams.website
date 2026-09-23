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
  if (!enabled) cursor.removeAttribute('data-visible');
}

document.addEventListener('pointermove', event => {
  if (!cursor.hasAttribute('data-enabled') || event.pointerType !== 'mouse') return;
  x = event.clientX + 17;
  y = event.clientY + 17;
  cursor.toggleAttribute('data-action', !!event.target.closest('a, button, summary'));
  cursor.setAttribute('data-visible', '');
  if (!frame) frame = requestAnimationFrame(() => {
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    frame = 0;
  });
}, { passive: true });

document.addEventListener('pointerout', event => {
  if (!event.relatedTarget) cursor.removeAttribute('data-visible');
});
addEventListener('blur', () => cursor.removeAttribute('data-visible'));
pointer.addEventListener('change', sync);
reducedMotion.addEventListener('change', sync);
sync();
