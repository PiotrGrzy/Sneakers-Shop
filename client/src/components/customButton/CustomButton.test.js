import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import CustomButton from './CustomButton';

const props = {
  onClick: jest.fn(),
};

describe('CustomButton', () => {
  const wrapper = mount(<CustomButton {...props}>Test</CustomButton>);
  it('renders a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it('renders a proper text', () => {
    console.log(wrapper.debug());
    expect(wrapper.find('button').childAt(0).text()).toEqual('Test');
  });

  it('passes props to button', () => {
    expect(wrapper.find('button').props().onClick).toEqual(props.onClick);
  });
});
