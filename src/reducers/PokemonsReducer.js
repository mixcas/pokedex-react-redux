export const POKEMONS_REQUESTED = 'POKEMONS_REQUESTED';
export const POKEMONS_RECIEVED = 'POKEMONS_RECIEVED';
export const POKEMONS_FAILED = 'POKEMONS_FAILED';

const initialState = {
	isFetching: true,
	results: {},
}

export const pokemonsReducer = (state = initialState , action) => {
	switch(action.type) {
		case POKEMONS_REQUESTED: {
      return Object.assign(
        {},
        state,
        {
          isFetching: true,
        }
      );
		}

		case POKEMONS_RECIEVED: {
      return Object.assign(
        {},
        state, action.data,
        {
          isFetching: false,
        }
      );
		}

		default: {
			return state;
		}
	}
}
