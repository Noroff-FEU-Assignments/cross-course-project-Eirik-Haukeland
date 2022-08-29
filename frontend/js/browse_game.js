import
makeGameCard from './game_card.js';

const imbedLocation = document.getElementById('game_list');

fetch('https://gamehub.ebh.fyi/api/products')
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((product) => {
      imbedLocation.appendChild(
        makeGameCard(product),
      );
    });
  });
