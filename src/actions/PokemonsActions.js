import axios from 'axios';

/**
 * Get Pokemons
 */
export const fetchPokemons = (url = 'https://pokeapi.co/api/v2/pokemon') => {
  return dispatch => {
    dispatch({
      type: 'POKEMONS_REQUESTED',
    });

    axios.get(url)
      .then( response => {
        console.log(response);
        return dispatch({
          type: 'POKEMONS_RECIEVED',
          data: response.data,
        });

      })
      .catch( error => {
        console.log(error);
      });
  }
}
