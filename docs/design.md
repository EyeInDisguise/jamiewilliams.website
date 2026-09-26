# Design

A simple personal website. Dark olive, pale text, and a yellow-green accent relate to the existing game-development portfolio. Public Sans is used for reading text, IBM Plex Mono for metadata, and Georgia for the italic surname.

The homepage introduces Jamie, then links directly to his RFID game, its source, and dev notes. The navigation is Home, Projects, About. Keep the content short and factual, with ordinary titles rather than slogans or an invented lab identity.

The layout stacks on mobile. Shared templates render static HTML. Small scripts handle the ability selector, scroll sequence, and cursor reticle; the writing and navigation remain available without them. Fonts are self-hosted with their licenses.

## Interaction

The RFID game's four documented abilities form a selectable input-path display on Home and the project page. Selecting one updates the label and briefly traces token → ESP32 → key → Unity. This is a diagram of the controller, not a gameplay simulation. The controls are real buttons, support arrow keys, and remain readable without motion. With JavaScript disabled, the page shows the static path and the written project description.

The homepage follows the real controller signal path as the reader scrolls. A sticky readout changes at each factual step, and a thin progress line advances with the page. The steps stay readable without scripting; reduced-motion users get a normal static list. A crisp pointer reticle replaces the native cursor on fine pointers. It disappears on touch devices and for reduced-motion users.

Hover movement stays on links and controls. [Rauno's interface guidelines](https://interfaces.rauno.me/) informed the short interaction timing and touch/hover separation; [Josh Comeau's motion breakdown](https://www.joshwcomeau.com/blog/whimsical-animations/) informed the brief response on input; [MDN's reduced-motion guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) informed the motion fallback. The scroll story uses measured page position because [CSS scroll timelines still have limited availability](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll).
