import shoppingCartOnLoad from "./shoppingCartOnLoad";

const buttonPayment = document.getElementById('create-payment-submit');
const buttonAccount = document.getElementById('create-account-submit');
const buttonCansel = document.getElementById('cansel-account-create');
const buttonSkip = document.getElementById('skip-add-payment');
const currentUrl = window.location.href.split('/');
currentUrl.pop();

shoppingCartOnLoad();

const makeMessage = (classList) => {
  classList.push("message")
  const message = document.createElement("span");
  classList.forEach(c => message.classList.add(c));
  return message
}

const hasSiblingWithId = (element, testId) => {
  const parent = element.parentElement;
  let correctSibling;
  parent.childNodes.forEach(sibling => {
    if (sibling.id === testId) {
      correctSibling = sibling;
    }
  });
  if (correctSibling) {
    return {'YorN': true, 'element': correctSibling}
  } else {
    return {'YorN': false, 'element': 'N/A'}
  }
}

const setUpEvents = (id, RegExp, message, parentOfParent) => {
  const elementName = document.querySelector(`#${id}`);
  const buttonPayment = document.getElementById('create-payment-submit');
  // const buttonAccount = document.getElementById('create-account-submit');
  
  elementName.addEventListener("focusout", (evt) => {
    if ((evt.target.value !== "" || !RegExp.test(evt.target.value)) && hasSiblingWithId(evt.target, `${id}-error`).YorN === false) {
      let errorMessage = makeMessage(["error"])
      errorMessage.innerText = message
      errorMessage.id = `${id}-error`
      elementName.insertAdjacentElement("afterend", errorMessage);
      if (buttonAccount != null) {
        buttonAccount.disabled = true;
      } else {
        buttonPayment.disabled = true;
      }
    }
  })
  
  elementName.addEventListener("keyup", (evt) => {
    const elementNameError = hasSiblingWithId(evt.target, `${id}-error`);
    if (RegExp.test(evt.target.value) && elementNameError.YorN === true) {
      elementNameError.element.remove();
    }
      const form = evt.target.parentElement;
      const isErrorMsg = false;
      for(let i = 1; i < form.childNodes.length; i += 1) {
        if (form.childNodes[i].nodeName !== "#text" && form.childNodes[i].classList.contains("error")) {
          isErrorMsg = true;
        }
      }
      if (buttonAccount != null && isErrorMsg === false) {
        buttonAccount.disabled = false;
      } else if (isErrorMsg === false) {
        buttonPayment.disabled = false;
      }
  })
  
  let parent = elementName.parentElement;
  if (parentOfParent === true) {
    parent = parent.parentElement
  }

  parent.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (!RegExp.test(evt.target.value || evt.target.value.length === "") && hasSiblingWithId(evt.target, `${id}-error`).YorN === false) {
      let errorMessage = makeMessage(["error"])
      errorMessage.innerText = message
      errorMessage.id = `${id}-error`
      elementName.insertAdjacentElement("afterend", errorMessage);
    }
  })
}

setUpEvents("username", /^[a-z0-9_-]{3,16}$/, "user name must have between 3 and 16 chareters which can be letters, numbers, dash(-) for underline(_)")
setUpEvents("email", /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/, "email format: [userHandle]@[domaneName].[com, no, osv.]")
setUpEvents("password", /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/, "password must be longer than 8 charactes and contain one lowercase letter, one capital letter and one number")

const rePass = document.querySelector("#rep-pass");

rePass.addEventListener("focusout", (evt) => {
  const passOne = document.getElementById("password");

  if (passOne.value !== evt.target.value && hasSiblingWithId(evt.target, "rep-pass-error").YorN === false) {
    let errorMessage = makeMessage(["error"]);
    errorMessage.innerText = "password are not the same";
    errorMessage.id = "rep-pass-error";
    rePass.insertAdjacentElement("afterend", errorMessage);
  }
})

rePass.addEventListener("keyup", (evt) => {
  const passOne = document.getElementById("password");

  const rePassError = hasSiblingWithId(evt.target, "rep-pass-error");
  if (passOne.value === evt.target.value && rePassError.YorN === true) {
    rePassError.element.remove();
  }
})

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
