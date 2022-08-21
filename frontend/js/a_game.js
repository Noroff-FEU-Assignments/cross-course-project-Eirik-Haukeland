import
accordion from './accordion.js';
// import
// makeCommentCard from './comment_card.js';
// import makeGameCard from './game_card.js';

// const imbedLocation = document.getElementById('game_location');

// having problems whit how to get id whil just use a hard coded one

// const currentUrl = window.location.href.split('/');
// const id = currentUrl.pop();

// fetch('http://gamehub.ebh.fyi/api/product/7')
// .then((Response) => Response.json())
// .then((product) => {
//     const title = document.createElement('h1');
//     title.textContent = product.title;
//     imbedLocation.appendChild(title);

//     const cover = document.createElement('img');
//     cover.src = product.image;
//     cover.alt = product.image_desc;
//     imbedLocation.appendChild(cover);

//     const localAccordion = document.createElement('section');
//     localAccordion.classList = 'accordion';

//     const storyABlurbBtn = document.createElement('button');
//     storyABlurbBtn.id = 'storyABlurb_btn';
//     storyABlurbBtn.classList = 'active';
//     storyABlurbBtn.textContent = 'Story and blurb';
//     localAccordion.appendChild(storyABlurbBtn);

//     const storyABlurbDiv = document.createElement('div');
//     storyABlurbDiv.id = 'storyABlurb_div';

//     const rating = document.createElement('img');
//     rating.classList = 'game_card-stars';
//     rating.src = product.stars_img;
//     rating.alt = `${product.stars_desc} out of 5 stars`;
//     storyABlurbDiv.appendChild(rating);

//     const desc = document.createElement('p');
//     desc.classList = 'game_card-desc';
//     desc.textContent = product.desc;
//     storyABlurbDiv.appendChild(desc);

//     localAccordion.appendChild(storyABlurbDiv);

//     const systemReqBtn = document.createElement('button');
//     systemReqBtn.id = 'systemReq_btn';
//     systemReqBtn.textContent = 'system requierments';
//     localAccordion.appendChild(systemReqBtn);

//     const systemReqDiv = document.createElement('div');
//     systemReqDiv.id = 'systemReq_div';
//     systemReqDiv.hidden = true;
//     localAccordion.appendChild(systemReqDiv);

//     imbedLocation.appendChild(localAccordion);

//   const comments = document.createElement('div');
//   product.comments.forEach((comment) => {
//     comments.appendChild(makeCommentCard(comment));
//   });
//   imbedLocation.appendChild(comments);

//   const relatedGames = [];

//   product.tags.forEach((tag) => {
//     fetch('https://gamehub.ebh.fyi/api/products')
//       .then((Response) => Response.json())
//       .then((Objects) => {
//         Objects.forEach((item) => {
//           if (item.tags.includes(tag)) {
//             relatedGames.add(item);
//           }
//         });
//       });
//   });

//   console.log(relatedGames);
//   imbedLocation.appendChild(makeGameCard());
// });

accordion();
