/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Header from '@Components/Header/component';

const props = {
  classes: '',
  location: {
    pathname: '',
  },
  match: {
    isExact: true,
    params: {},
  },
  fetchNetworks: jest.fn(),
  fetchNetwork: jest.fn(),
  push: jest.fn(),
};

let headerWrapper;

describe('Header component', () => {
  beforeEach(() => {
    headerWrapper = shallow(<Header {...props} />);
  });

  it('should test if the header component renders properly', () => {
    expect(headerWrapper.find('Link').length).toBe(1);
  });
});
