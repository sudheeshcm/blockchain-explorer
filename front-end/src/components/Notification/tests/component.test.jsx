/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Notification from '@Components/Notification/component';

const props = {
  hide: jest.fn(),
  open: true,
  content: 'This is a test notification',
  type: 'success',
};

let notificationWrapper;

describe('Notification component', () => {
  beforeEach(() => {
    notificationWrapper = shallow(<Notification {...props} />);
  });

  it('should test if the <Notification /> component renders properly', () => {
    expect(notificationWrapper.find('Notification').length).toBe(1);
    expect(notificationWrapper.find('Notification').prop('open')).toBe(true);
    expect(notificationWrapper.find('Notification').prop('type')).toBe(
      'success',
    );
  });

  it('should hide the notification component if it is not open', () => {
    notificationWrapper.setProps({
      open: false,
    });
    expect(notificationWrapper.find('Notification').length).toBe(1);
    expect(notificationWrapper.find('Notification').prop('open')).toBe(false);
  });

  it('should show ERROR notification with error classes', () => {
    notificationWrapper.setProps({
      open: true,
      type: 'error',
    });
    expect(notificationWrapper.find('Notification').length).toBe(1);
    expect(notificationWrapper.find('Notification').prop('open')).toBe(true);
    expect(notificationWrapper.find('Notification').prop('type')).toBe('error');
  });
});
