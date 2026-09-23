import { detailPages } from './detail-pages.mjs';
import { github, portfolio } from './layout.mjs';
export const pages = [{
  path: '/', title: 'Home', description: 'Jamie Williams’s personal website. Computer science, game development, and projects.',
  body: `<section class="intro"><div class="eyebrow">PERSONAL WEBSITE</div>
  <div class="intro-grid"><h1>Jamie<br><em>Williams.</em></h1><div class="intro-copy"><p>Hey, I’m Jamie. I study computer science and make games, mostly with Unity and C#.</p><p class="muted">This is my personal site. My game dev portfolio is <a href="${portfolio}">over here ↗</a>.</p><a class="text-link" href="/about/">More about me</a></div></div></section>
  <section class="personal-project" aria-labelledby="project-heading"><div class="section-heading"><h2 id="project-heading">A project of mine</h2><span class="eyebrow muted">UNITY / C# / ESP32</span></div>
  <div class="project-feature"><div><span class="eyebrow accent">HACKATHON PROJECT</span><h2>RFID platformer</h2><p>I made a 2D platformer where you scan physical tokens to switch abilities: dash, wall jump, gravity flip, and time stop.</p><p class="muted">The first version took 2–3 days. You can play it with a keyboard too.</p><a class="button-link" href="/lab/rfid/">About the game <span aria-hidden="true">↗</span></a></div><div class="project-links"><a href="https://play.unity.com/en/games/51c4cc8b-b2fc-4f07-a06d-968e66fd5fc3/polished">Play in your browser <span aria-hidden="true">↗</span></a><a href="${github}/Jamie-Hackathon-2026">Code & dev notes <span aria-hidden="true">↗</span></a><p>Unity · MFRC522 RFID reader · ESP32</p></div></div></section>
  <section class="personal-links"><h2>Elsewhere</h2><a href="${github}">GitHub <span>EyeInDisguise ↗</span></a><a href="${portfolio}">Game dev portfolio <span>jamiegamedev.me ↗</span></a></section>`
}, ...detailPages];
