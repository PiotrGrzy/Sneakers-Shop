import {
  ADD_ITEM,
  DECREASE_QUANTITY,
  REMOVE_ITEM,
  TOGGLE_CART_VIEW
} from './cart.types';

import { addItem, decreaseQuantity } from './cart.utils';

const INITIAL_STATE = {
  items: [],
  total: 0,
  isOpen: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: addItem(state.items, action.payload)
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        items: decreaseQuantity(state.items, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(cartItem => cartItem.id !== action.payload.id)
      };
    case TOGGLE_CART_VIEW:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};

export default cartReducer;
