// Keep publication dates explicit. A rebuild should not make old writing look new.
export const experiments = [
  { id: 'EXP–001', title: 'A little spring in it', path: '/lab/spring/', medium: 'JavaScript / SVG', status: 'Interactive study', description: 'An adjustable spring response. Change the damping, watch the overshoot, and compare the result.' },
  { id: 'EXP–002', title: 'Physical tokens, virtual abilities', path: '/lab/rfid/', medium: 'Unity / C# / ESP32', status: 'In progress', description: 'A speedrun platformer with an RFID controller. Scan a token to change what the player can do.' },
  { id: 'SITE–001', title: 'This website', path: '/lab/this-website/', medium: 'HTML / CSS / JavaScript', status: 'First edition', description: 'A small home for experiments and notes, with room to grow without a framework.' },
];
export const notes = [
  { title: 'What the damping ratio changes', path: '/notes/spring-response/', date: '2026-09-22', displayDate: '22 SEP 2026', tag: 'MOTION / REFERENCE', description: 'Underdamped, critical, overdamped. Three behaviours, one equation.' },
];
