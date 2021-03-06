import {
  FETCH_TRENDING_NOW,
  SET_LOADING,
  GET_SINGLE_PRODUCT,
  FETCH_SEARCH_RESULTS
} from './shop.types';
import axios from 'axios';

import {
  singleItemQueryString,
  trendingQueryString,
  searchQueryString
} from './cmsQueries.js';

const CMS_URI =
  'https://api-euwest.graphcms.com/v1/ck73ktvqn0h2f01dvaqfe38u7/master';

export const setLoading = () => {
  return { type: SET_LOADING };
};

export const fetchSearchResults = searchOptions => async dispatch => {
  const query = searchQueryString(searchOptions);
  try {
    const response = await axios({
      url: CMS_URI,
      method: 'post',
      data: {
        query: query
      }
    });
    dispatch({
      type: FETCH_SEARCH_RESULTS,
      payload: response.data.data.sneakers
    });
    // console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const fetchTrendingNow = () => async dispatch => {
  const query = trendingQueryString();
  try {
    const response = await axios({
      url: CMS_URI,
      method: 'post',
      data: {
        query: query
      }
    });
    dispatch({
      type: FETCH_TRENDING_NOW,
      payload: response.data.data.sneakers
    });
    //    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const getSingleProduct = id => async dispatch => {
  const query = singleItemQueryString(id);

  try {
    const response = await axios({
      url: CMS_URI,
      method: 'post',
      data: {
        query: query
      }
    });
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: response.data.data.sneaker
    });
    console.log(response.data.data.sneaker);
  } catch (err) {
    console.log(err);
  }
};
