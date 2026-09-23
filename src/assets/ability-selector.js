for (const panel of document.querySelectorAll('[data-ability-panel]')) {
  const buttons = [...panel.querySelectorAll('[data-ability]')];
  const name = panel.querySelector('[data-ability-name]');
  const count = panel.querySelector('[data-ability-count]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function select(button) {
    const index = buttons.indexOf(button);
    if (index < 0) return;
    for (const item of buttons) item.setAttribute('aria-pressed', String(item === button));
    name.textContent = button.dataset.ability;
    count.textContent = `${String(index + 1).padStart(2, '0')} / 04`;
    panel.classList.remove('ability-switched');
    if (!reducedMotion.matches) {
      // Reflow lets a second selection restart the short signal trace.
      void panel.offsetWidth;
      panel.classList.add('ability-switched');
    }
  }

  panel.addEventListener('click', event => {
    const button = event.target.closest('[data-ability]');
    if (button && panel.contains(button)) select(button);
  });

  panel.addEventListener('keydown', event => {
    if (!buttons.includes(document.activeElement)) return;
    const index = buttons.indexOf(document.activeElement);
    const next = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? index + 1
      : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? index - 1
      : event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    const button = buttons[(next + buttons.length) % buttons.length];
    button.focus();
    select(button);
  });

  panel.dataset.ready = '';
}
