export default () => {
  const shoppingCartAmount = document.querySelector("#main-nav").querySelector("#items-in-cart")
  shoppingCartAmount.innerText = JSON.parse(localStorage.getItem("cart"))?.length;
  if (Number(shoppingCartAmount.innerText) > 0) {
    shoppingCartAmount.hidden = false;
  }
}