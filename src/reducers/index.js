/**
* Combine All Reducers
*/
import { combineReducers } from 'redux'

const appReducer = combineReducers({
})

// Setup root reducer
const rootReducer = (state, action) => {
 const newState = (action.type === 'RESET') ? undefined : state;
 return appReducer(newState, action);
}

export default rootReducer;