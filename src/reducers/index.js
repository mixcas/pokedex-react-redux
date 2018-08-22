import { combineReducers } from 'redux'


// Reducers
import { pokemonsReducer } from './PokemonsReducer';

const appReducer = combineReducers({
  pokemonList: pokemonsReducer,
})

// Setup root reducer
const rootReducer = (state, action) => {
 const newState = (action.type === 'RESET') ? undefined : state;
 return appReducer(newState, action);
}

export default rootReducer;
