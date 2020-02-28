import { FETCH_TRENDING_NOW } from './shop.types';
import axios from 'axios';

const CMS_URI =
  'https://api-euwest.graphcms.com/v1/ck73ktvqn0h2f01dvaqfe38u7/master';
const QUERY_VARS = { where: { AND: [{ trending: true }] } };

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

export const fetchTrendingNow = async () => {
  try {
    const response = await axios({
      url: CMS_URI,
      method: 'post',
      data: {
        query: query
      }
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
