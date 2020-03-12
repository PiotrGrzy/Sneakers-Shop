import { SET_QUERY } from './search.types';

const INITIAL_STATE = {
  brand: [],
  gender: [],
  category: [],
  price: {
    min: 0,
    max: 1000
  }
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        [action.payload.queryType]: action.payload.value
      };

    default:
      return state;
  }
};

export default searchReducer;
