const accordionUnselectAll = (buttons, divs) => {
  if (buttons.length !== divs.length) {
    console.log("must be the same amount of buttons and divs")
  } else {
    for ( let i = 0; i < buttons.length ; i++) {
      if (buttons[i].className === "active") {
        buttons[i].className = false
      }
      if (divs[i].hidden === false) {
        divs[i].hidden = true
      }
    }
  }
}

const accordionShowClicked = (buttonId, divId) => {
  if (buttonId === undefined || divId === undefined){
    console.log('bouth a button id and div id must be supplied')
  // } else if (buttonId !== String || divId !== String) {
  //   console.log('you must supply id ass a string')
  } else {
    document.getElementById(buttonId).className = "active"
    document.getElementById(divId).hidden = false
  }
}

const accordion = () => {
  const arr = document.querySelector('.accordion').childNodes
  let buttons = []
  let divs =[]

  arr.forEach ( Element => {
    if (Element.tagName === "BUTTON") {
      buttons.push(Element)
    } else if (Element.tagName === "DIV") {
      divs.push(Element)
    }
  })

  console.log(buttons)
  console.log(divs)
  
  for (let i = 0; i < buttons.length; i++) {
    document.getElementById(buttons[i].id).addEventListener("click", () => {
      accordionUnselectAll(buttons, divs)
      accordionShowClicked(buttons[i].id, divs[i].id)
    })
  }
}

export {
  accordion
}