const buttonPayment = document.getElementById('create-payment-submit');
const buttonAccount = document.getElementById('create-account-submit');
const buttonCansel = document.getElementById('cansel-account-create');
const buttonSkip = document.getElementById('skip-add-payment');
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

  buttonCansel.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace(currentUrl.join('/'));
    return false;
  });
} else {
  buttonPayment.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace(currentUrl.join('/'));
    return false;
  });

  buttonSkip.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace(currentUrl.join('/'));
    return false;
  });
}
