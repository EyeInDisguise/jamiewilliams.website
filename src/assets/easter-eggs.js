const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
const inputHistory = [];
const columns = 7;
const rows = 5;
const walls = new Set(['2,0', '2,1', '4,1', '1,3', '5,3']);
const tokens = [
  { x: 6, y: 0, key: 'D', name: 'Dash' },
  { x: 0, y: 4, key: 'W', name: 'Wall jump' },
  { x: 4, y: 2, key: 'G', name: 'Gravity flip' },
  { x: 6, y: 4, key: 'T', name: 'Time stop' },
];
const directions = {
  ArrowUp: [0, -1], w: [0, -1],
  ArrowDown: [0, 1], s: [0, 1],
  ArrowLeft: [-1, 0], a: [-1, 0],
  ArrowRight: [1, 0], d: [1, 0],
};

const room = document.createElement('dialog');
room.className = 'bonus-room';
room.setAttribute('aria-labelledby', 'bonus-room-title');
room.innerHTML = `<div class="bonus-room-top"><span class="eyebrow">HIDDEN ROOM / 01</span><button type="button" data-room-close aria-label="Close bonus room">×</button></div>
  <h2 id="bonus-room-title">Bonus room.</h2>
  <p>Find the four ability tokens. Move with the arrow keys or WASD.</p>
  <div class="bonus-room-status" role="status" aria-live="polite" data-room-status>0 / 4 TOKENS</div>
  <div class="bonus-grid" aria-hidden="true" data-room-grid></div>
  <div class="bonus-controls" aria-label="Move around the bonus room">
    <button type="button" data-room-move="ArrowLeft" aria-label="Move left">←</button>
    <button type="button" data-room-move="ArrowUp" aria-label="Move up">↑</button>
    <button type="button" data-room-move="ArrowDown" aria-label="Move down">↓</button>
    <button type="button" data-room-move="ArrowRight" aria-label="Move right">→</button>
  </div>
  <p class="bonus-room-message" data-room-message>Four tokens, one tiny room.</p>
  <a href="/lab/rfid/">See the actual game ↗</a>`;
document.body.append(room);

const grid = room.querySelector('[data-room-grid]');
const status = room.querySelector('[data-room-status]');
const message = room.querySelector('[data-room-message]');
const cells = Array.from({ length: columns * rows }, () => {
  const cell = document.createElement('span');
  cell.className = 'bonus-cell';
  grid.append(cell);
  return cell;
});
let player = { x: 0, y: 0 };
let collected = new Set();

function renderRoom() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const cell = cells[y * columns + x];
      const token = tokens.find((item, index) => item.x === x && item.y === y && !collected.has(index));
      cell.toggleAttribute('data-wall', walls.has(`${x},${y}`));
      cell.toggleAttribute('data-player', player.x === x && player.y === y);
      cell.toggleAttribute('data-token', !!token);
      cell.textContent = player.x === x && player.y === y ? '■' : token?.key ?? '';
    }
  }
}

function openRoom() {
  if (room.open) return;
  player = { x: 0, y: 0 };
  collected = new Set();
  room.removeAttribute('data-complete');
  status.textContent = '0 / 4 TOKENS';
  message.textContent = 'Four tokens, one tiny room.';
  renderRoom();
  document.documentElement.setAttribute('data-bonus-open', '');
  document.documentElement.removeAttribute('data-custom-cursor');
  room.showModal();
  room.querySelector('[data-room-close]').focus();
}

function move(key) {
  const [dx, dy] = directions[key] ?? [];
  if (dx === undefined || collected.size === tokens.length) return;
  const next = { x: player.x + dx, y: player.y + dy };
  if (next.x < 0 || next.x >= columns || next.y < 0 || next.y >= rows || walls.has(`${next.x},${next.y}`)) return;
  player = next;
  const index = tokens.findIndex((item) => item.x === next.x && item.y === next.y);
  if (index >= 0 && !collected.has(index)) {
    collected.add(index);
    status.textContent = `${collected.size} / 4 TOKENS — ${tokens[index].name}`;
    if (collected.size === tokens.length) {
      room.setAttribute('data-complete', '');
      message.textContent = 'Room cleared. You found every ability.';
    }
  }
  renderRoom();
}

function toggleHitboxes() {
  const enabled = document.documentElement.toggleAttribute('data-hitboxes');
  document.querySelector('.hitbox-hud')?.remove();
  if (!enabled) return;
  const hud = document.createElement('div');
  hud.className = 'hitbox-hud';
  hud.innerHTML = `<span>HITBOXES ON</span><button type="button" aria-label="Turn off hitbox view">×</button>`;
  hud.querySelector('button').addEventListener('click', toggleHitboxes);
  document.body.append(hud);
}

document.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('[data-open-bonus]')) openRoom();
});
room.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  if (event.target.closest('[data-room-close]')) room.close();
  const control = event.target.closest('[data-room-move]');
  if (control) move(control.dataset.roomMove);
});
room.addEventListener('close', () => document.documentElement.removeAttribute('data-bonus-open'));

document.addEventListener('keydown', (event) => {
  if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) return;
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  if (room.open) {
    if (directions[key]) {
      event.preventDefault();
      move(key);
    }
    return;
  }
  if (event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
  if (event.code === 'Backquote') {
    event.preventDefault();
    toggleHitboxes();
    return;
  }
  inputHistory.push(key);
  if (inputHistory.length > code.length) inputHistory.shift();
  if (inputHistory.every((item, index) => item === code[index]) && inputHistory.length === code.length) {
    inputHistory.length = 0;
    openRoom();
  }
});
