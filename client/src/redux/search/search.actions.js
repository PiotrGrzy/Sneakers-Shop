import { SET_QUERY } from './search.types';

export const setQuery = (queryType, value) => {
  return {
    type: SET_QUERY,
    payload: { queryType, value }
  };
};
