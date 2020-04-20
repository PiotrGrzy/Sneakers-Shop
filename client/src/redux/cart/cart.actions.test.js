import {
  ADD_ITEM,
  DECREASE_QUANTITY,
  REMOVE_ITEM,
  TOGGLE_CART_VIEW,
} from './cart.types';

import {
  addItemToCart,
  decrementItem,
  removeItemFromCart,
  toggleCartView,
} from './cart.actions';

describe('addItemToCart', () => {
  it('creates an actions with ADD_ITEM type', () => {
    expect(addItemToCart('item')).toEqual({ type: ADD_ITEM, payload: 'item' });
  });
});

describe('decrementItem', () => {
  it('creates an actions with DECREASE_QUANTITY type', () => {
    expect(decrementItem('item')).toEqual({
      type: DECREASE_QUANTITY,
      payload: 'item',
    });
  });
});

describe('removeItemFromCart', () => {
  it('creates an actions with REMOVE_ITEM type', () => {
    expect(removeItemFromCart('item')).toEqual({
      type: REMOVE_ITEM,
      payload: 'item',
    });
  });
});

describe('toggleCartView', () => {
  it('creates an actions with TOGGLE_CART_VIEW type', () => {
    expect(toggleCartView('item')).toEqual({ type: TOGGLE_CART_VIEW });
  });
});
