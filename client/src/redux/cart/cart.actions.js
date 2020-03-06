import Swal from 'sweetalert2';

import {
  ADD_ITEM,
  DECREASE_QUANTITY,
  REMOVE_ITEM,
  TOGGLE_CART_VIEW
} from './cart.types';

export const addItemToCart = item => {
  return { type: ADD_ITEM, payload: item };
};

export const decrementItem = item => {
  return { type: DECREASE_QUANTITY, payload: item };
};

export const removeItemFromCart = item => {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
};

export const toggleCartView = () => {
  return { type: TOGGLE_CART_VIEW };
};
