import shoppingCartOnLoad from "./shoppingCartOnLoad.js";
import makeGameCard from "./game_card.js";

shoppingCartOnLoad();

fetch("gamehub.ebh.fyi/wp-json/wc/store/products?featured=true")
  .then((Response) => Response.json())
  .then((item) => {
    const imbedLocation = document.getElementById("featured-games");
    item.forEach((product) => {
      imbedLocation.appendChild(makeGameCard(product));
    });
  });
