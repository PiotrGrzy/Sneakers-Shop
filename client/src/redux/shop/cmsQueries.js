import { brands, genders } from '../../components/searchbar/query-data';

export const singleItemQueryString = id => `query product {
    sneaker(where: {id: "${id}"}) {
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
}`;

export const trendingQueryString = () => `query trending {
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

export const searchQueryString = ({ brand, gender, price: { min, max } }) => {
  const allBrands = brands.map(brand => brand.name);
  const allGenders = genders.map(gender => gender.name);

  return `query sneakers {
  sneakers(where: {AND: [
    { price_gte: ${min}},
    { price_lte: ${max} },
    { brand_in: [${brand.length === 0 ? allBrands : brand}]}
    { gender_in: [${gender.length === 0 ? allGenders : gender}]}
  ]
}) {
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
      url
      id
    }
    brand
    sizes
    trending
  }
}`;
};
