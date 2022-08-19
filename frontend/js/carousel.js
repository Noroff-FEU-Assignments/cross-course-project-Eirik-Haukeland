const preivus = document.querySelector('.carousel #preivus');
const next = document.querySelector('.carousel #next');
const img = document.querySelectorAll('.carousel > div > img');

const moveDown = (arrOfImg) => {
  arrOfImg.forEach((image) => {
    if (image.classList.contains('top')) {
      image.classList.remove('top');
      image.classList.add('middle');
    } else if (image.classList.contains('middle')) {
      image.classList.remove('middle');
      image.classList.add('bottom');
    } else if (image.classList.contains('bottom')) {
      image.classList.remove('bottom');
      image.classList.add('top');
    }
  });
};

const moveUp = (arrOfImg) => {
  arrOfImg.forEach((image) => {
    if (image.classList.contains('top')) {
      image.classList.remove('top');
      image.classList.add('bottom');
    } else if (image.classList.contains('middle')) {
      image.classList.remove('middle');
      image.classList.add('top');
    } else if (image.classList.contains('bottom')) {
      image.classList.remove('bottom');
      image.classList.add('middle');
    }
  });
};

next.addEventListener('click', () => { moveUp(img); });
preivus.addEventListener('click', () => { moveDown(img); });
