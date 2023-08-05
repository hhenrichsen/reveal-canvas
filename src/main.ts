import 'reveal.js/dist/reveal.css';
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import 'reveal.js/dist/theme/sky.css';
import '@motion-canvas/player';
import Reveal from 'reveal.js';

const deck = new Reveal();
deck.initialize({hash: true, slideNumber: true});

(function prependBase() {
  document.querySelectorAll('motion-canvas-player').forEach(player => {
    let url = player.getAttribute('src');
    if (url?.startsWith('/')) {
      url = import.meta.env.BASE_URL + url.slice(1);
      player.setAttribute('src', url);
    }
  });
})();
