import cartReducer, { INITIAL_STATE } from './cart.reducer';
import {
  ADD_ITEM,
  DECREASE_QUANTITY,
  REMOVE_ITEM,
  TOGGLE_CART_VIEW,
} from './cart.types';
import { item } from '../../data/fixtures';

describe('cart reducer', () => {
  it('adds item to cart state', () => {
    expect(
      cartReducer(INITIAL_STATE, { type: ADD_ITEM, payload: item })
    ).toEqual({
      ...INITIAL_STATE,
      items: [{ ...item, quantity: 1 }],
    });
  });

  it('decrease item quantity by 1', () => {
    const state = {
      ...INITIAL_STATE,
      items: [{ ...item, quantity: 2 }],
    };
    expect(
      cartReducer(state, { type: DECREASE_QUANTITY, payload: item })
    ).toEqual({
      ...INITIAL_STATE,
      items: [{ ...item, quantity: 1 }],
    });
  });

  it('removes item', () => {
    const state = {
      ...INITIAL_STATE,
      items: [{ ...item, quantity: 2 }],
    };
    expect(cartReducer(state, { type: REMOVE_ITEM, payload: item })).toEqual({
      ...INITIAL_STATE,
    });
  });

  it('toggle cart view state', () => {
    expect(cartReducer(INITIAL_STATE, { type: TOGGLE_CART_VIEW })).toEqual({
      ...INITIAL_STATE,
      isOpen: true,
    });
  });
});
