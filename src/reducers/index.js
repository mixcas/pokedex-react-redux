import { combineReducers } from 'redux'


// Reducers
import { pokemonsReducer } from './PokemonsReducer';
import { pokemonReducer } from './PokemonReducer';

const appReducer = combineReducers({
  pokemonList: pokemonsReducer,
  currentPokemon: pokemonReducer,
})

// Setup root reducer
const rootReducer = (state, action) => {
 const newState = (action.type === 'RESET') ? undefined : state;
 return appReducer(newState, action);
}

export default rootReducer;
