import axios from 'axios';

// TYPES
import { POKEMON_ALREADY_LOADED, POKEMON_REQUESTED, POKEMON_RECIEVED } from '../reducers/PokemonReducer.js';

/**
* Get Pokemon
*/
export const fetchPokemon = pokemonName => {
  return (dispatch, getState) => {
    const { currentPokemon } = getState();

    // Check is loaded pokemon is the same as the one requested
    if (pokemonName === currentPokemon.info.name) {
      dispatch({
        type: POKEMON_ALREADY_LOADED,
      });
    } else {
      dispatch({
        type: POKEMON_REQUESTED,
      });

      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then( response => {
          return dispatch({
            type: POKEMON_RECIEVED,
            data: response.data,
          });

        })
        .catch( error => {
          console.log(error);
        });
    }
  }
}
