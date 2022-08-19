const imbedLocation = document.getElementById('game_list');

fetch('http://gamehub.ebh.fyi/api/products')
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((product) => {
      const card = document.createElement('a');
      card.id = product.id;
      card.classList = 'game_card';
      card.relList = 'noopener noreferrer';

      const cover = document.createElement('img');
      cover.src = product.image;
      cover.alt = product.image_desc;
      card.appendChild(cover);

      const div = document.createElement('div');

      const title = document.createElement('p');
      title.classList = 'game_card-title';

      const titleText = document.createElement('strong');
      titleText.textContent = product.title;

      title.appendChild(titleText);
      div.appendChild(title);

      const desc = document.createElement('p');
      desc.classList = 'game_card-desc';
      desc.textContent = product.desc;
      div.appendChild(desc);

      const rating = document.createElement('img');
      rating.classList = 'game_card-stars';
      rating.src = product.stars_img;
      rating.alt = `${product.stars_desc} out of 5 stars`;
      div.appendChild(rating);

      card.appendChild(div);

      imbedLocation.appendChild(card);
    });
  });
