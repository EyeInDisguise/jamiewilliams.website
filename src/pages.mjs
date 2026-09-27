import { detailPages } from './detail-pages.mjs';
import { github, portfolio } from './layout.mjs';

export const pages = [{
  path: '/',
  title: 'Home',
  description: 'Jamie Williams is a computer science student who makes games and small experiments. His personal home on the web.',
  body: `<section class="threshold" data-threshold aria-labelledby="home-title">
    <div class="threshold-art" aria-hidden="true"><img src="/assets/threshold.svg" alt=""><div class="threshold-door threshold-door-left"></div><div class="threshold-door threshold-door-right"></div></div>
    <div class="threshold-vignette" aria-hidden="true"></div>
    <div class="threshold-copy"><span class="eyebrow">A PERSONAL WEBSITE · EST. 2026</span><h1 id="home-title"><span>Jamie</span><span>Williams<span class="full-stop">.</span></span></h1><p>I study computer science and make games. My game portfolio has the projects. This site is for experiments and notes.</p><a class="threshold-enter" href="#index">Take a look <span aria-hidden="true">↓</span></a></div>
    <div class="threshold-foot" aria-hidden="true"><span>BRISBANE, AUSTRALIA</span><span>SCROLL TO OPEN THE INDEX ↓</span></div>
  </section>
  <section class="site-index" id="index" aria-labelledby="index-title"><div class="section-kicker"><span>01 / THE INDEX</span><span>JAMIEWILLIAMS.WEBSITE</span></div><div class="index-heading"><h2 id="index-title">Pick a door.</h2><p>Start anywhere. Nothing here needs to be read in order.</p></div>
    <div class="index-list">
      <a class="index-entry" href="/lab/"><span class="index-number">I.</span><span class="index-name">Lab</span><span class="index-description">Things I’ve made and things I’m still figuring out.</span><span class="index-arrow" aria-hidden="true">↗</span></a>
      <a class="index-entry" href="/notes/"><span class="index-number">II.</span><span class="index-name">Notes</span><span class="index-description">A place for write-ups. Empty for now.</span><span class="index-arrow" aria-hidden="true">↗</span></a>
      <a class="index-entry" href="/now/"><span class="index-number">III.</span><span class="index-name">Now</span><span class="index-description">What I’m studying and working on lately.</span><span class="index-arrow" aria-hidden="true">↗</span></a>
      <a class="index-entry" href="/about/"><span class="index-number">IV.</span><span class="index-name">About</span><span class="index-description">More about me, and where to find me.</span><span class="index-arrow" aria-hidden="true">↗</span></a>
    </div>
  </section>
  <section class="shelf" aria-labelledby="shelf-title"><div class="shelf-inner"><div class="section-kicker"><span>02 / PERSONAL INVENTORY</span><span>NO PARTICULAR ORDER</span></div><div class="shelf-heading"><h2 id="shelf-title">A few games<br>I love<span class="full-stop">.</span></h2><p>No ranking. These are just some of my favourites.</p></div><ol class="shelf-list"><li><span>01</span><strong>The House in Fata Morgana</strong></li><li><span>02</span><strong>NieR</strong></li><li><span>03</span><strong>Elden Ring</strong></li><li><span>04</span><strong>Monster Hunter</strong></li></ol></div></section>
  <section class="current" aria-labelledby="current-title"><div class="section-kicker"><span>03 / CURRENTLY</span><span>SEPTEMBER 2026</span></div><div class="current-grid"><h2 id="current-title">For now<span class="full-stop">.</span></h2><div><p>I’m studying computer science and making games in Unity and C#. I’m interested in gameplay systems, VR, and getting better at Unreal and C++.</p><div class="current-links"><a href="/now/">More on what I’m doing <span aria-hidden="true">↗</span></a><a href="${portfolio}">My game dev portfolio <span aria-hidden="true">↗</span></a><a href="${github}">GitHub <span aria-hidden="true">↗</span></a></div></div></div></section>`
}, ...detailPages];
