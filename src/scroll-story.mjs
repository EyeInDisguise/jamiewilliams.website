const stages = [
  { number: '01', title: 'Token', label: 'INPUT', text: 'Each physical token stands for one of the game’s four abilities.' },
  { number: '02', title: 'Reader', label: 'SCAN', text: 'An MFRC522 RFID reader scans the token and passes it to the ESP32.' },
  { number: '03', title: 'Bluetooth key', label: 'TRANSMIT', text: 'The ESP32 acts as a Bluetooth keyboard and sends a number key.' },
  { number: '04', title: 'Unity', label: 'IN GAME', text: 'Unity receives that key and selects the ability.' },
];

export function scrollStory() {
  return `<section class="controller-story" data-controller-story aria-labelledby="story-title">
    <div class="story-heading"><span class="eyebrow">THE CONTROLLER / 01—04</span><h2 id="story-title">From token to game.</h2><p>Here’s what happens when I scan a token.</p></div>
    <div class="story-grid"><div class="story-display" aria-hidden="true"><div class="story-display-head"><span>INPUT PATH</span><span data-story-count>01 / 04</span></div><div class="story-readout"><strong data-story-number>01</strong><span data-story-name>Token</span></div><div class="story-track"><span></span></div><div class="story-track-labels"><span>RFID</span><span>BLUETOOTH</span><span>UNITY</span></div></div>
    <div class="story-steps">${stages.map(stage => `<div class="story-step" data-story-step><span class="eyebrow">${stage.number} / ${stage.label}</span><h3>${stage.title}</h3><p>${stage.text}</p></div>`).join('')}</div></div>
  </section>`;
}
