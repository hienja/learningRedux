/*
The rootReducer will take in the current state and an action and return a state.
When initializing the rootReducer, it must have a default state,
state = DEFAULT_STATE means if a state isn't defined, it is set to DEFAULT_STATE.
action is an object:
{
	type: ,
	payload:
}
*/
import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
	searchTerm: ''
};

const searchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload });

const rootReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_SEARCH_TERM:
			return searchTerm(state, action);
		default:
			return state;
	}
};

export default rootReducer;
