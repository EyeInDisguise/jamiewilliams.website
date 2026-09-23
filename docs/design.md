# Design

A simple personal website. Dark olive, pale text, and a yellow-green accent relate to the existing game-development portfolio. Public Sans is used for reading text, IBM Plex Mono for metadata, and Georgia for the italic surname.

The homepage introduces Jamie, then links directly to his RFID game, its source, and dev notes. The navigation is Home, Projects, About. Keep the content short and factual, with ordinary titles rather than slogans or an invented lab identity.

The layout stacks on mobile. Shared templates render static HTML. The ability selector is the only client-side script. Fonts are self-hosted with their licenses.

## Interaction

The RFID game's four documented abilities form a selectable input-path display on Home and the project page. Selecting one updates the label and briefly traces token → ESP32 → key → Unity. This is a diagram of the controller, not a gameplay simulation. The controls are real buttons, support arrow keys, and remain readable without motion. With JavaScript disabled, the page shows the static path and the written project description.

Hover movement stays on links and controls. There is no scroll animation or background effect. [Rauno's interface guidelines](https://interfaces.rauno.me/) informed the short interaction timing and touch/hover separation; [Josh Comeau's motion breakdown](https://www.joshwcomeau.com/blog/whimsical-animations/) informed the brief response on input; [MDN's reduced-motion guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) informed the motion fallback.
