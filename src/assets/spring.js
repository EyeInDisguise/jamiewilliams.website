import { response, curve } from './spring-model.js';
const root = document.querySelector('[data-spring]');
if (root) {
  const slider = root.querySelector('input');
  const output = root.querySelector('output');
  const trace = root.querySelector('[data-trace]');
  const dot = root.querySelector('[data-dot]');
  const play = root.querySelector('[data-play]');
  const stop = root.querySelector('[data-stop]');
  const label = root.querySelector('[data-regime]');
  const status = root.querySelector('[data-status]');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  function cancel() {
    cancelAnimationFrame(frame); frame = 0;
    play.disabled = false; stop.disabled = true;
  }
  function update() {
    cancel();
    const d = Number(slider.value);
    output.value = d.toFixed(2);
    const regime = d < 1 ? 'Underdamped' : d === 1 ? 'Critically damped' : 'Overdamped';
    label.textContent = regime;
    slider.setAttribute('aria-valuetext', `${d.toFixed(2)}, ${regime.toLowerCase()}`);
    trace.setAttribute('d', curve(d));
    dot.setAttribute('cx', '40'); dot.setAttribute('cy', '250');
    root.querySelectorAll('[data-preset]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.preset) === d)));
    status.textContent = motion.matches ? 'Reduced motion: the complete response is shown without animation.' : 'Ready. Run the response to follow the spring over three seconds.';
    play.textContent = motion.matches ? 'Show final position' : 'Run response';
  }
  slider.addEventListener('input', update);
  root.querySelectorAll('[data-preset]').forEach(b => b.addEventListener('click', () => { slider.value = b.dataset.preset; update(); }));
  play.addEventListener('click', () => {
    cancel();
    const d = Number(slider.value);
    if (motion.matches) {
      dot.setAttribute('cx', '720'); dot.setAttribute('cy', String(250 - response(3, d) * 100));
      status.textContent = `At three seconds, position is ${response(3, d).toFixed(3)}. Target is 1.`;
      return;
    }
    play.disabled = true; stop.disabled = false;
    status.textContent = 'Running the response for three seconds.';
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / 1000, 3);
      dot.setAttribute('cx', String(40 + t / 3 * 680));
      dot.setAttribute('cy', String(250 - response(t, d) * 100));
      if (t < 3) frame = requestAnimationFrame(tick);
      else { cancel(); status.textContent = `Response complete. Position at three seconds: ${response(3, d).toFixed(3)}.`; }
    }
    frame = requestAnimationFrame(tick);
  });
  stop.addEventListener('click', () => { cancel(); status.textContent = 'Stopped. Run response to start again.'; });
  motion.addEventListener('change', update);
  document.addEventListener('visibilitychange', () => { if (document.hidden && frame) { cancel(); status.textContent = 'Stopped while this tab was hidden.'; } });
  root.querySelectorAll('[data-controls]').forEach(el => el.hidden = false);
  update();
}
