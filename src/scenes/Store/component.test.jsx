/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Store from '@Scenes/Store/component';

const props = {};

let storeWrapper;

describe('Store Scene', () => {
  beforeEach(() => {
    storeWrapper = shallow(<Store {...props} />);
  });

  it('should test if the <Store /> component renders properly', () => {
    expect(storeWrapper.find('.store__contents__wrapper').length).toBe(1);
    expect(storeWrapper.find('.table--store').length).toBe(1);
  });

  it('should list store once store are loaded', () => {
    expect(storeWrapper.find('.loading__wrapper').length).toBe(0);
    expect(storeWrapper.find('WithStyles(CircularProgress)').length).toBe(0);
    expect(storeWrapper.find('.store__contents__wrapper').length).toBe(1);
    expect(storeWrapper.find('.table--store').length).toBe(1);
    expect(storeWrapper.find('WithStyles(TableRow)').length).toBe(6);
    const firstRowcellInfo = storeWrapper
      .find('WithStyles(TableRow)')
      .at(1)
      .find('WithStyles(TableCell)')
      .at(0)
      .dive()
      .dive();
    expect(firstRowcellInfo.text()).toBe('ERC20');
  });
});
