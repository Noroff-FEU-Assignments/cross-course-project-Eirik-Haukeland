const accordionUnselectAll = (buttons, divs) => {
  if (buttons.length !== divs.length) {
    // eslint-disable-next-line no-console
    console.log('must be the same amount of buttons and divs');
  } else {
    for (let i = 0; i < buttons.length; i += 1) {
      if (buttons[i].className === 'active') {
        buttons[i].classList.remove('active');
      }
      if (divs[i].hidden === false) {
        // eslint-disable-next-line no-param-reassign
        divs[i].hidden = true;
      }
    }
  }
};

const accordionShowClicked = (buttonId, divId) => {
  if (buttonId === undefined || divId === undefined) {
    // eslint-disable-next-line no-console
    console.log('bouth a button id and div id must be supplied');
  } else {
    document.getElementById(buttonId).className = 'active';
    document.getElementById(divId).hidden = false;
  }
};

const accordion = () => {
  const arr = document.querySelector('.accordion').childNodes;
  const buttons = [];
  const divs = [];

  console.log('entered the accordion.js');

  arr.forEach((Element) => {
    if (Element.tagName === 'BUTTON') {
      buttons.push(Element);
    } else if (Element.tagName === 'DIV') {
      divs.push(Element);
    }
  });

  for (let i = 0; i < buttons.length; i += 1) {
    document.getElementById(buttons[i].id).addEventListener('click', () => {
      accordionUnselectAll(buttons, divs);
      accordionShowClicked(buttons[i].id, divs[i].id);
    });
  }
};

export default accordion;
