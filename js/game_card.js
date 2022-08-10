export const render_game_card = (game) => {
  console.log('starting up')
  
  const game_card = document.createElement('a')
  game_card.className += `game_card`

  // image
  const img = document.createElement('img')
  img.src = game.image
  img.alt += game.image_desc
  game_card.append(img)

  // info div
  const info_div = document.createElement('div')

    // title
    const title = document.createElement('p')
    title.textContent = game.title
    title.className += 'game_card-title'
    info_div.append(title)


    // description
    const desc = document.createElement('p')
    desc.textContent = game.desc
    desc.className += 'game_card-desc'
    info_div.append(desc)

    // stars
    const stars = document.createElement('img')
    stars.src = game.stars_img
    stars.alt = `${game.title}is ranked ${game.stars_desc} out of 5 stars`
    stars.className += 'game_card-stars'
    info_div.append(stars)

  game_card.append(info_div)

  return game_card
}
