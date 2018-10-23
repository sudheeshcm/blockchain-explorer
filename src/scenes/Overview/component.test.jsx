/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Overview from '@Scenes/Overview/component';

const props = {};

let overviewWrapper;

describe('Overview Scene', () => {
  beforeEach(() => {
    overviewWrapper = shallow(<Overview {...props} />);
  });

  it('should test if the <Overview /> component renders properly', () => {
    expect(overviewWrapper.find('.overview__contents__wrapper').length).toBe(1);
  });
});
