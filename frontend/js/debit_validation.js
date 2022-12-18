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

const setUpEvents = (id, RegExp, message) => {
  const elementName = document.querySelector(`#${id}`);
  
  elementName.addEventListener("focusout", (evt) => {
    if (!RegExp.test(evt.target.value) && hasSiblingWithId(evt.target, `${id}-error`).YorN === false) {
      let errorMessage = makeMessage(["error"])
      errorMessage.innerText = message
      errorMessage.id = `${id}-error`
      elementName.insertAdjacentElement("afterend", errorMessage);
    }
  })
  
  elementName.addEventListener("keyup", (evt) => {
    const elementNameError = hasSiblingWithId(evt.target, `${id}-error`);
    if (RegExp.test(evt.target.value) && elementNameError.YorN === true) {
      elementNameError.element.remove();
    }
  })
}

setUpEvents("card-numb", /^\d{16}$/, "card number must be 16 charaters and contain only numbers")
setUpEvents("card-name", /^[a-zA-Z]+(\s[a-zA-z]+)+$/, "please write your full name")
setUpEvents("card-expiers-day", /^([1-9]|[12]\d|3[01])$/, "day numbers must not be higer than 31")
setUpEvents("card-expiers-month", /^([1-9]|1[0-2])$/, "month numbers must not be higer than 12")
setUpEvents("card-expiers-year", /^[1-9]\d\d\d$/, "year must have four digits")
setUpEvents("sec-code", /^\d\d\d$/, "securety code must be tre digits")
