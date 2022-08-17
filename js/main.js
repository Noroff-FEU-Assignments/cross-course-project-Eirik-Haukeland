import { render_game_card } from "./game_card.js";

import forge_legend from '../../backend/info_for_games/forge_legend.js'
import black from '../../backend/info_for_games/black.js.js'
import furious from '../../backend/info_for_games/furious_game.js'
import assassin from '../../backend/info_for_games/assassin.js.js'

let games = []

games + forge_legend
games + black
games + furious
games + assassin

console.log(games)

games.forEach(game => {
  console.log(game)
  document.getElementById('game_list').append(render_game_card(game))
});
