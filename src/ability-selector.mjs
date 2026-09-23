const abilities = ['Dash', 'Wall jump', 'Gravity flip', 'Time stop'];

export function abilitySelector() {
  return `<section class="ability-panel" data-ability-panel aria-label="Abilities in the RFID platformer">
    <div class="ability-top"><span>ABILITY SELECT</span><span data-ability-count>01 / 04</span></div>
    <div class="ability-current" aria-live="polite" aria-atomic="true"><span data-ability-name>Dash</span><span class="ability-current-mark" aria-hidden="true">↗</span></div>
    <div class="signal-map" aria-hidden="true"><span>TOKEN</span><i></i><span>ESP32</span><i></i><span>KEY</span><i></i><span>UNITY</span></div>
    <div class="ability-options" role="group" aria-label="Select an ability">${abilities.map((name, index) => `<button type="button" data-ability="${name}" aria-pressed="${index === 0}"><span>${String(index + 1).padStart(2, '0')}</span>${name}</button>`).join('')}</div>
    <p class="ability-explainer">Scan a token or use the keyboard to change abilities in the game.</p>
  </section>`;
}
