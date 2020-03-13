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

export const trendingQueryString = `query trending {
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

export const searchQueryString = () => `query sneakers {
    sneakers {
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

`query sneakers($where: SneakerWhereInput) {
  sneakers(where: $where) {
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

const queryVars = {
  where: {
    AND: [
      { price_gte: 100 },
      { price_lte: 150 },
      { brand_in: ['Adidas', 'Nike'] },
      { gender_in: ['Men'] }
    ]
  }
};
