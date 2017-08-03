import axios from 'axios';
import { SET_SEARCH_TERM } from './actions';

export function setSearchTerm(searchTerm) {
	return {
		type: SET_SEARCH_TERM,
		payload: searchTerm
	};
}

export function getAPIDetails(imdbID: show) {
	return (dispatch: Function) => {
		axios
			.get(`http://localhost:3000/${imdbID}`)
			.then(response => {
				dispatch(addAPIData(response.data));
			})
			.catch(error => {
				console.error('axios error', error); // eslint-disable-line no-console
			});
	};
}
