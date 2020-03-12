import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';
import searchReducer from './search/search.reducer';

export default combineReducers({
  user: userReducer,
  shop: shopReducer,
  cart: cartReducer,
  search: searchReducer
});
