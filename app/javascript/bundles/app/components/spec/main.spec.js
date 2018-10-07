// @flow

// Libraries
import React from 'react';
import { shallow } from 'enzyme';

// Components
import Main from '../main';

describe('Main Component Spec', () => {
  let main;

  beforeEach(() => {
    main = shallow(<Main />);
  });

  it('renders', () => {
    expect(main.text()).toEqual('Main app!')
  });
});