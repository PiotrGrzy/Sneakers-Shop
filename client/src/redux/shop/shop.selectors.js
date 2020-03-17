import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectSearchResults = createSelector(
  selectShop,
  shop => shop.searchResults
);

export const selectTrendingNowItems = createSelector(
  [selectShop],
  shop => shop.trending
);
