import axios from 'axios';

// TYPES
import { POKEMONS_REQUESTED, POKEMONS_RECIEVED } from '../reducers/PokemonsReducer.js';

/**
 * Get Pokemons
 */
export const fetchPokemons = (search = '') => {
  return dispatch => {
    dispatch({
      type: POKEMONS_REQUESTED,
    });

    axios.get('https://pokeapi.co/api/v2/pokemon' + search)
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
