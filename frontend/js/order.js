const sumPrices = () => {
  const details = document.querySelectorAll('tbody > tr > td');
  const total = document.querySelector('tfoot > tr > td');

  let sum = 0;
  details.forEach((item) => {
    const price = Number(item.innerText.split(' ')[0]);
    sum += price;
  });
  total.innerHTML = `${sum} Kr`;
};

const cart = JSON.parse(localStorage.getItem('cart'));
cart.forEach((id, index) => {
  fetch(`https://gamehub.ebh.fyi/api/product/${id}`)
    .then((Response) => Response.json())
    .then((product) => {
      const table = document.querySelector('tbody');
      table.innerHTML += `
      <tr>
        <th id=${id} class="product"><button class="remove-product"><span>remove</span></button>${product.title}</th>
        <td>${product.prise} Kr</td>
      </tr>`;
    })
    .then(() => {
      setTimeout(() => {
        const removeBtns = document.querySelectorAll('.remove-product');
        removeBtns.forEach((btn) => {
          btn.addEventListener('click', (evt) => {
            const productRows = document.querySelectorAll('.product');
            const productsArray = [];
            productRows.forEach((obj) => {
              productsArray.push(obj.id);
            });
            evt.target.parentElement.parentElement.remove();
            localStorage.setItem('cart', JSON.stringify(productsArray.filter((val) => val != btn.parentNode.id)));
            sumPrices();
          });
        });
      }, 50);
    })
    .then(() => {
      if (index === cart.length - 1) {
        sumPrices();
      }
    });
});
