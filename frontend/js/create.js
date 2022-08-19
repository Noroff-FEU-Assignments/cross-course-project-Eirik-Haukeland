const buttonPayment = document.getElementById('create-payment-submit');
const buttonAccount = document.getElementById('create-account-submit');
const currentUrl = window.location.href.split('/');
currentUrl.pop();

if (buttonAccount != null) {
  const paymentUrl = currentUrl;
  paymentUrl.push('create_user-payment.html');

  buttonAccount.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace(paymentUrl.join('/'));
    return false;
  });
} else {
  const homeUrl = currentUrl;

  buttonPayment.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace(homeUrl.join('/'));
    return false;
  });
}
