import {
  FETCH_TRENDING_NOW,
  SET_LOADING,
  GET_SINGLE_PRODUCT
} from './shop.types';

const INITIAL_STATE = {
  isLoading: false,
  trending: [],
  searchResults: [],
  currentProduct: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_TRENDING_NOW:
      return {
        ...state,
        trending: action.payload,
        isLoading: false
      };
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default shopReducer;
