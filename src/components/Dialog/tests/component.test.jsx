/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Dialog from '@Components/Dialog/component';

const props = {
  open: true,
  type: 'NEW_NODE',
  scrollType: 'paper',
  disableBackdropClick: true,
  closeDialog: jest.fn(),
};

let dialogWrapper;

describe('Header component', () => {
  beforeEach(() => {
    dialogWrapper = shallow(<Dialog {...props} />);
  });

  it('should test if the Dialog component renders properly', () => {
    expect(dialogWrapper.find('.dialog__wrapper').length).toBe(1);
  });
});
