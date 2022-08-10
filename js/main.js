import { render_game_card } from "./game_card.js";
import game from '../furious_game.js'

const btn = document.getElementById('test')
btn.addEventListener("click", document.getElementById('game_list').append(render_game_card(game)))