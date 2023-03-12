const preivus = document.querySelector('.carousel #preivus');
const next = document.querySelector('.carousel #next');

const moveDown = () => {
  const imgLocation = document.querySelector("#img_location");
  const arrOfImg = [...imgLocation.childNodes];

  const firstImg = arrOfImg.pop()
  arrOfImg.splice(0, 0, firstImg)

  imgLocation.childNodes.forEach(img => {
    img.remove();
  })
  arrOfImg.forEach(img => {
    imgLocation.appendChild(img);
  })
};

const moveUp = () => {
  const imgLocation = document.querySelector("#img_location");
  const arrOfImg = [...imgLocation.childNodes];

  const firstImg = arrOfImg.shift()
  arrOfImg.push(firstImg)

  imgLocation.childNodes.forEach(img => {
    img.remove();
  })
  arrOfImg.forEach(img => {
    imgLocation.appendChild(img);
  })
};

export default () => {
  next.addEventListener('click', () => { moveUp(); });
  preivus.addEventListener('click', () => { moveDown(); });
}
