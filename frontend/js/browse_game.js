import makeGameCard from './game_card.js';

const imbedLocation = document.getElementById('game_list');

fetch('https://gamehub.ebh.fyi/api/products')
.then((Response) => Response.json())
.then((data) => {
  data.forEach((product) => {
    imbedLocation.appendChild(
      makeGameCard(product),
      );
    })
  })
  .then(() => {
    setTimeout(() => {
      const category = document.getElementById("category")
      category.addEventListener("change", (evt) => {
        imbedLocation.childNodes.forEach(game => {
          if (evt.target.value === "all") {
            game.hidden = false
          } else {
            let dataTags = game.getAttribute("data-tag").split(", ")
            console.log(dataTags)
            if (dataTags.includes(evt.target.value)) {
              game.hidden = false
            } else {
              game.hidden = true
            }
          }
        })
      })
    }, 50)
  })



