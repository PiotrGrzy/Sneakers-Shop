// cant filter by  multiple choice parameter in graphCMS query

const filterCategories = (data, categories) => {
  return data.filter(item =>
    item.category.some(cat => categories.includes(cat))
  );
};

export default filterCategories;
