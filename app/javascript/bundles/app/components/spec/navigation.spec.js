// @flow

// Libraries
import React from 'react';
import { shallow } from 'enzyme';

// Components
import Navigation from '../navigation';

describe('Navigation Component Spec', () => {
  let navigation;

  beforeEach(() => {
    navigation = shallow(<Navigation />);
  });

  it('renders', () => {
    expect(navigation.text()).toEqual('Navigation!')
  });
});