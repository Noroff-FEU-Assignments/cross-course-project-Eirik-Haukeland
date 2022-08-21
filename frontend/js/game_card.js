const currentUrl = window.location.href.split('/');
currentUrl.pop();
currentUrl.push('a_game.html');

const makeGameCard = (obj) => {
  const card = document.createElement('a');
  card.href = currentUrl.join('/');
  card.id = obj.id;
  card.classList = 'game_card';
  card.relList = 'noopener noreferrer';

  const cover = document.createElement('img');
  cover.src = obj.image;
  cover.alt = obj.image_desc;
  card.appendChild(cover);

  const div = document.createElement('div');

  const title = document.createElement('p');
  title.classList = 'game_card-title';
  const titleText = document.createElement('strong');
  titleText.textContent = obj.title;
  title.appendChild(titleText);
  div.appendChild(title);

  const desc = document.createElement('p');
  desc.classList = 'game_card-desc';
  desc.textContent = obj.desc;
  div.appendChild(desc);

  const rating = document.createElement('img');
  rating.classList = 'game_card-stars';
  rating.src = obj.stars_img;
  rating.alt = `${obj.stars_desc} out of 5 stars`;
  div.appendChild(rating);

  card.appendChild(div);

  return card;
};

export default makeGameCard;
