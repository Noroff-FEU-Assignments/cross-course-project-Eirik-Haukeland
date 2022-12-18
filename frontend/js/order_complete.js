import carousel from'./carousel.js';

const cart = JSON.parse(localStorage.getItem("cart"));
const imgTarget = document.querySelector("#img_location");
const titleTarget = document.querySelector("#title_location");

console.log(cart)
cart.forEach((id, index) => {
  fetch(`https://gamehub.ebh.fyi/api/product/${id}`)
  .then((Response) => Response.json())
  .then((product) => {
    imgTarget.innerHTML += `<img src="${product.image}" alt="${product.image_desc}">`
    titleTarget.innerHTML += `<li>${product.title}</li>`
  })
  .then(() => {
    const item = cart.shift()
    let userLib
    if (localStorage.getItem("userLib") !== null) {
      userLib = [...JSON.parse(localStorage.getItem("userLib"))]
      if (!userLib.includes(item)) {
        userLib.push(item)
      }
    } else {
      userLib = [item]
    }
    localStorage.setItem("userLib", JSON.stringify(userLib))
    localStorage.setItem("cart", JSON.stringify(cart))
  });
});


carousel();
