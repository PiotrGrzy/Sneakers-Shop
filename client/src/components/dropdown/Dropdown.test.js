import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { Dropdown } from './Dropdown';

const props = {
  type: 'test',
  title: 'Test',
  itemsList: [
    { id: 0, name: 'item 1', selected: false },
    { id: 1, name: 'item 2', selected: true },
    { id: 2, name: 'item 3', selected: false },
  ],
  setQuery: jest.fn(),
};

describe('Dropdown', () => {
  const wrapper = shallow(<Dropdown {...props} />);
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('hides and reveal options on click', () => {
    const wrapper = mount(<Dropdown {...props} />);
    it('renders all options on click', () => {
      wrapper.find('.dd-header').simulate('click');
      expect(wrapper.find('.dd-list-item').length).toEqual(3);
    });

    it('mark selected option with the "star" icon', () => {
      wrapper.find('.dd-list-item').at(0).simulate('click');
      expect(wrapper.find('.dd-list-item').at(0).childAt(1).exists()).toBe(
        true
      );
    });

    it('hides all options on second click', () => {
      wrapper.find('.dd-header').simulate('click');
      expect(wrapper.find('.dd-list-item').length).toEqual(0);
    });
  });
});
