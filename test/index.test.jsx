import React from 'react';
import { shallow } from 'enzyme';
import NodeNotes from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<NodeNotes />);
  expect(wrapper.find('.NodeNotes').length).toBe(1);
});
