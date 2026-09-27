# Design

This is my personal site, separate from my [game development portfolio](https://jamiegamedev.me). I keep notes, experiments, and things I like here. The game portfolio has the game projects; this site doesn't need to repeat its layout or lead with the RFID project.

The first screen is a doorway into a quiet landscape. Scrolling opens two panels, then lands on a paper index of the site's real pages. The darker games shelf names four favourites without pretending to be a review or ranking. The last section says what I'm doing now. Interior pages use a folio layout, with clear writing and ordinary links.

The visual vocabulary takes broad cues from the atmosphere of *The House in Fata Morgana*, the restraint of *NieR*, and the sense of discovery in *Elden Ring* and *Monster Hunter*. It uses no artwork, logos, type, or interface assets from those games. The arch landscape is an original SVG in `src/assets/threshold.svg`. Cormorant Garamond and IBM Plex Mono are self-hosted, with licences beside the font files.

## Interaction

The doors follow native scrolling; the page does not capture the wheel or lock the user into a sequence. The index links shift subtly on hover and focus. Fine pointers get a small brass reticle and a light bloom that follows the cursor. Touch and reduced-motion settings retain the system cursor. All navigation and content remain available when scripts are disabled.

The RFID page keeps its four factual controller abilities as a keyboard-accessible selector. A small hidden room and the backtick hitbox view are the site's Easter eggs. They do not interrupt normal browsing.

## References

- [Shirley Xu's portfolio](https://www.shirleyxu.dev/projects/portfolio): editorial narrative and a project list with distinct character.
- [Stefan Vitasovic portfolio case study](https://tympanus.net/codrops/2025/03/05/case-study-stefan-vitasovic-portfolio-2025/): bold typography and spatial rhythm.
- [Turning a portfolio into a game](https://tympanus.net/codrops/2025/10/06/self-doubt-and-the-quest-for-fun-how-i-ended-up-turning-my-portfolio-into-a-game/): interactions that come from the author's interests.
- [Letting the creative process shape a portfolio](https://tympanus.net/codrops/2025/11/27/letting-the-creative-process-shape-a-webgl-portfolio/): editing back an idea when it stops helping the page.
- [Rauno's interface guidelines](https://interfaces.rauno.me/), [Josh Comeau's motion breakdown](https://www.joshwcomeau.com/blog/whimsical-animations/), and [MDN reduced-motion guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion): timing, input response, and motion fallbacks.
