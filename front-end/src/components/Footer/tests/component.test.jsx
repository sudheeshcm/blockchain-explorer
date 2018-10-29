/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Footer from '@Components/Footer/component';

const props = {};

let footerWrapper;

describe('Footer component', () => {
  beforeEach(() => {
    footerWrapper = shallow(<Footer {...props} />);
  });

  it('should test if the footer component renders properly or not', () => {
    expect(footerWrapper.find('Link').length).toBe(3);
    expect(footerWrapper.find('span').length).toBe(4);
  });
});
