import { SET_SEARCH_TERM } from './actions';

export function setSeachTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}
