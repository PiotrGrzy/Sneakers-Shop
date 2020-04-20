import filterCategories from './filterCategories';

const data = [
  { id: 0, category: ['test1'] },
  { id: 1, category: ['test3'] },
];
describe('filtering function', () => {
  it('filters by given category', () => {
    expect(filterCategories(data, ['test1'])).toEqual([data[0]]);
  });

  it('returns empty array if no match found', () => {
    expect(filterCategories(data, ['test4'])).toEqual([]);
  });
});
