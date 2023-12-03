import React from 'react';
import { configure, shallow, mount, render  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import App from './App';

test('renders learn react link', () => {
  const {log} = console;
  const wrapper = shallow(<App />);
  log(wrapper.debug());
});
