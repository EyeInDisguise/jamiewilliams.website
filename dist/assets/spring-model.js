/** Unit step response of x'' + 2ζωx' + ω²x = ω², at rest at t = 0. */
export function response(t, damping, frequency = 9) {
  if (t <= 0) return 0;
  if (Math.abs(damping - 1) < 1e-6) return 1 - (1 + frequency * t) * Math.exp(-frequency * t);
  if (damping < 1) {
    const q = Math.sqrt(1 - damping * damping);
    const phase = frequency * q * t;
    return 1 - Math.exp(-damping * frequency * t) * (Math.cos(phase) + damping / q * Math.sin(phase));
  }
  const q = Math.sqrt(damping * damping - 1);
  const a = -frequency * (damping - q), b = -frequency * (damping + q);
  return 1 + (b * Math.exp(a * t) - a * Math.exp(b * t)) / (a - b);
}
export function curve(damping, duration = 3) {
  return Array.from({ length: 301 }, (_, i) => {
    const t = i / 300 * duration;
    return `${i ? 'L' : 'M'}${(40 + i / 300 * 680).toFixed(2)},${(250 - response(t, damping) * 100).toFixed(2)}`;
  }).join(' ');
}
