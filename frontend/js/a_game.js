import accordion from './accordion.js';
import makeCommentCard from './comment_card.js';
import isThereLocalstorage from './isThereLocalstorage.js';
/*import shoppingCartOnLoad from './shoppingCartOnLoad.js';

shoppingCartOnLoad()*/
// import makeGameCard from './game_card.js'; //todo: enable related games

const imbedLocation = document.getElementById('game_location');
const lastCrumb = document.getElementById('last-crumb');
const pageTitle = document.querySelector("title");
const pageDescription = document.querySelector('meta[name="description"]');

// having problems whit how to get id whil just use a hard coded one

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

// fetch(`https://gamehub.ebh.fyi/api/product/${id}`)
fetch(`https://gamehub.ebh.fyi/wp-json/wc/store/products/?include=${id}`)
.then((Response) => Response.json())
.then((item) => {
    const product = item[0];
    lastCrumb.innerText = product.name;
    pageTitle.innerText = `Game Hub - ${product.name}`;
    pageDescription.innerText = `product page for ${product.name}`;

    const title = document.createElement('h1');
    title.textContent = product.name;
    imbedLocation.appendChild(title);

    const cover = document.createElement('img');
    cover.src = product.images[0].src;
    cover.alt = product.images[0].alt;
    imbedLocation.appendChild(cover);

    // const userLib = JSON.parse(localStorage.getItem("userLib"));
    // const cart = JSON.parse(localStorage.getItem("cart"));
    //
    // if (cart.includes(id)) {
    //   imbedLocation.innerHTML += `
    //   <div class="p-and-btns">
    //     <p class="price">${product.prices.price} ${product.prices.currency_symbol}</p>
    //     <button class="btn" id="to-cart" disabled>added to Cart</button>
    //     <button class="btn" id="to-wish">add to wishlist</button>
    //   </div>
    // `;
    // } else if (userLib.includes(id)) {
    //   imbedLocation.innerHTML += `
    //   <div class="p-and-btns">
    //     <p class="price">${product.prices.price} ${product.prices.currency_symbol}</p>
    //     <button class="btn" id="owned">play ${product.name}</button>
    //     <button class="btn" id="sell-item">sell game</button>
    //   </div>
    // `;
    // } else {
    imbedLocation.innerHTML += `
      <div class="p-and-btns">
        <p class="price">${product.prices.price} ${product.prices.currency_symbol}</p>
        <button class="btn" id="to-cart">add to Cart</button>
        <button class="btn" id="to-wish">add to wishlist</button>
      </div>
    `;
    // }

    const owned = document.getElementById("owned");
    if (owned !== null) {
      owned.addEventListener("click", () => {
        window.open("https://tetris.com/play-tetris", "_blank");
      });
    }

    const toCart = document.getElementById("to-cart");
    if (toCart !== null) {
      toCart.addEventListener("click", (evt) => {
        let shoppingList    
          if (localStorage.getItem("cart") !== null) {
            shoppingList = [...JSON.parse(localStorage.getItem("cart"))];
            if (!shoppingList.includes(product.id)) {
              shoppingList.push(product.id);
            }
          } else {
            shoppingList = [product.id];
          }
          localStorage.setItem("cart", JSON.stringify(shoppingList))
          toCart.disabled = true;
          toCart.innerText = "added to Cart";
          const shoppingCartAmount = document.querySelector("#main-nav").querySelector("#items-in-cart");
          shoppingCartAmount.innerText = Number(shoppingCartAmount.innerText) + 1;
          shoppingCartAmount.hidden = false;
      });
    }

    const localAccordion = document.createElement('section');
    localAccordion.classList = 'accordion';

    const storyABlurbBtn = document.createElement('button');
    storyABlurbBtn.id = 'storyABlurb_btn';
    storyABlurbBtn.classList = 'active';
    storyABlurbBtn.textContent = 'Story and blurb';
    localAccordion.appendChild(storyABlurbBtn);

    const storyABlurbDiv = document.createElement('div');
    storyABlurbDiv.id = 'storyABlurb_div';

    const stABl_info = document.createElement('div');
    stABl_info.id = "stABl_info";
    stABl_info.classList.add("arc_content");

    const rating = document.createElement('img');
    rating.classList = 'game_card-stars';
    rating.src = product.stars_img;
    rating.alt = `${product.stars_desc} out of 5 stars`;
    stABl_info.appendChild(rating);

    const desc = document.createElement('p');
    desc.classList = 'game_card-desc';
    desc.innerHTML = product.description;
    stABl_info.appendChild(desc);

    storyABlurbDiv.appendChild(stABl_info);
    localAccordion.appendChild(storyABlurbDiv);

    const systemReqBtn = document.createElement('button');
    systemReqBtn.id = 'systemReq_btn';
    systemReqBtn.textContent = 'system requierments';
    localAccordion.appendChild(systemReqBtn);

    const systemReqDiv = document.createElement('div');
    systemReqDiv.id = 'systemReq_div';
    systemReqDiv.hidden = true;

    systemReqDiv.innerHTML += `<div class="arc_content">
      <table id="sysReq_info">
        <tbody>
          <tr>
            <th>OS: </th>
            <td>linux, widows, ios</td>
          </tr>
          <tr>
            <th>Memory: </th>
            <td>8 MB RAM</td>
          </tr>
          <tr>
            <th>Processor: </th>
            <td>Intel Core i5-6600k, AMD Ryzen 5 1400, or better</td>
          </tr>
          <tr>
            <th>Graphics: </th>
            <td>Nvidia GeForce GTK 970, AMD RX 480 8GB, or better</td>
          </tr>
          <tr>
            <th>web brower: </th>
            <td>firefox: v103, safari: v16.6, chrome: v104</td>
          </tr>
        </tbody>
      </table>
    </div>`;

    localAccordion.appendChild(systemReqDiv);
    imbedLocation.appendChild(localAccordion);

  // const comments = document.createElement('section');
  // comments.classList.add("comments");
  // product.comments.forEach((comment) => {
  //   comments.appendChild(makeCommentCard(comment));
  // });
  // imbedLocation.appendChild(comments);

    imbedLocation.innerHTML += `
    <section class="comments">
      <div class="revue_card">
        <img src="images/profile_pictures/clarise-starling_croped-300*300.jpg" alt="image of Calrise Starling">
        <span>Clarise Startling</span>
        <p><strong><q>If he think's of you as his enemy, maybe we'd have better luck if I went in by my self</q></strong>
        </p>
      </div>
      <div class="revue_card">
        <img src="images/profile_pictures/james-bond-nr.4_croped-300*300.jpg" alt="image go james bond the fourth">
        <span>james bond the fourth</span>
        <p><strong><q>007 here. I'll report in an hour. ... Better make that two</q></strong></p>
      </div>
    </section>
    `;

  // todo: make a propper one
  // const relatedGames = [];

  // product.tags.forEach((tag) => {
  //   fetch('https://gamehub.ebh.fyi/api/products')
  //     .then((Response) => Response.json())
  //     .then((Objects) => {
  //       Objects.forEach((item) => {
  //         if (item.tags.includes(tag)) {
  //           relatedGames.add(item);
  //         }
  //       });
  //     });
  // });

  // console.log(relatedGames);

  // imbedLocation.appendChild(makeGameCard());
})
.then(() => accordion());
