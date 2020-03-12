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
