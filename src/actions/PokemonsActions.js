import axios from 'axios';

// TYPES
import { POKEMONS_REQUESTED, POKEMONS_RECIEVED } from '../reducers/PokemonsReducer.js';

/**
 * Get Pokemons
 */
export const fetchPokemons = (url = 'https://pokeapi.co/api/v2/pokemon') => {
  return dispatch => {
    dispatch({
      type: POKEMONS_REQUESTED,
    });

    axios.get(url)
      .then( response => {
        console.log(response);
        return dispatch({
          type: POKEMONS_RECIEVED,
          data: response.data,
        });

      })
      .catch( error => {
        console.log(error);
      });
  }
}
