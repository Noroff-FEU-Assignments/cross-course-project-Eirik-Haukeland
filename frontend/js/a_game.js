import accordion from './accordion.js';
import makeCommentCard from './comment_card.js';
import isThereLocalstorage from './isThereLocalstorage.js';

// import makeGameCard from './game_card.js'; //todo: enable related games

const imbedLocation = document.getElementById('game_location');
const lastCrumb = document.getElementById('last-crumb')
const pageTitle = document.querySelector("title")
const pageDescription = document.querySelector('meta[name="description"]')

console.log(imbedLocation.childNodes);

// having problems whit how to get id whil just use a hard coded one

const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")

fetch(`https://gamehub.ebh.fyi/api/product/${id}`)
.then((Response) => Response.json())
.then((product) => {
    lastCrumb.innerText = product.title;
    pageTitle.innerText = `Game Hub - ${product.title}`;
    pageDescription.innerText = `product page for ${product.title}`
  
    const title = document.createElement('h1');
    title.textContent = product.title;
    imbedLocation.appendChild(title);

    const cover = document.createElement('img');
    cover.src = product.image;
    cover.alt = product.image_desc;
    imbedLocation.appendChild(cover);

    imbedLocation.innerHTML += `
      <div class="p-and-btns">
        <p class="price">${product.prise} kr</p>
        <button class="btn" id="to-cart">add to Cart</button>
        <button class="btn" id="to-wish>add to wishlist</button>
      </div>
    `
    const toCart = document.getElementById("to-cart");
    toCart.addEventListener("click", (evt) => {
      let shoppingList
      if (isThereLocalstorage()){      
        if (localStorage.getItem("cart") !== null) {
          shoppingList = [...JSON.parse(localStorage.getItem("cart"))];
          if (!shoppingList.includes(product.id)) {
            shoppingList.push(product.id)
          }
        } else {
          shoppingList = [product.id]
        }
        localStorage.setItem("cart", JSON.stringify(shoppingList))
      } else {
        let shoppingList
        if (isThereLocalstorage()){      
          if (sessionStorage.getItem("cart") !== null) {
            shoppingList = [...JSON.parse(sessionStorage.getItem("cart"))];
            if (!shoppingList.includes(product.id)) {
              shoppingList.push(product.id)
            }
          } else {
            shoppingList = [product.id]
          }
          sessionStorage.setItem("cart", JSON.stringify(shoppingList))
      }
    }})

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
    desc.textContent = product.desc;
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
    </div>`

    localAccordion.appendChild(systemReqDiv);
    imbedLocation.appendChild(localAccordion);

  const comments = document.createElement('section');
  comments.classList.add("comments")
  product.comments.forEach((comment) => {
    comments.appendChild(makeCommentCard(comment));
  });
  imbedLocation.appendChild(comments);

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
