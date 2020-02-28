import { FETCH_TRENDING_NOW, SET_LOADING } from './shop.types';
import axios from 'axios';

const CMS_URI =
  'https://api-euwest.graphcms.com/v1/ck73ktvqn0h2f01dvaqfe38u7/master';

const query = `query trending {
    sneakers(where: {trending: true}) {
      id
      price
      gender
      category
      imageMain {
        id
        url
      }
      model
      imageSecondary {
        id
        url
      }
      sizes
      brand
      trending
    }
  }
  `;

export const setLoading = () => {
  return { type: SET_LOADING };
};

export const fetchTrendingNow = () => async dispatch => {
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
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
