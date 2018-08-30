export const POKEMON_RECIEVED = 'POKEMON_RECIEVED';
export const POKEMON_REQUESTED = 'POKEMON_REQUESTED';
export const POKEMON_ALREADY_LOADED = 'POKEMON_ALREADY_LOADED';

const initialState = {
  isFetching: true,
  info: {},
}

export function pokemonReducer(state = initialState , action) {
  switch(action.type) {
    case POKEMON_REQUESTED: {
      return initialState;
    }

    case POKEMON_RECIEVED: {
      return Object.assign({}, state,  {
        info: action.data,
        isFetching: false,
      });
    }

    case POKEMON_ALREADY_LOADED: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }

    default: {
      return state;
    }
  }
}
