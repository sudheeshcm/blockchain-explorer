/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Accounts from '@Scenes/Accounts/component';
import accountsMock from './__mocks__/accounts';

const props = {
  accounts: accountsMock,
  loading: false,
  fetchAccounts: jest.fn(),
  fetchNetwork: jest.fn(),
  match: {
    params: {},
    isExact: true,
  },
};

let accountsWrapper;

describe('Accounts Scene', () => {
  beforeEach(() => {
    accountsWrapper = shallow(<Accounts {...props} />);
  });

  it('should test if the <Accounts /> component renders properly', () => {
    expect(accountsWrapper.find('.accounts__contents__wrapper').length).toBe(1);
    expect(accountsWrapper.find('.table--accounts').length).toBe(1);
    expect(accountsWrapper.find('WithStyles(Button)').length).toBe(1);
  });

  it('should show loader when loading account details', () => {
    accountsWrapper.setProps({
      loading: true,
    });
    expect(accountsWrapper.find('.loading__wrapper').length).toBe(1);
    expect(accountsWrapper.find('WithStyles(CircularProgress)').length).toBe(1);
  });

  it('should hide loader when loading is done', () => {
    accountsWrapper.setProps({
      loading: false,
    });
    expect(accountsWrapper.find('.loading__wrapper').length).toBe(0);
    expect(accountsWrapper.find('WithStyles(CircularProgress)').length).toBe(0);
  });

  it('should show empty accounts info if no accounts exist', () => {
    accountsWrapper.setProps({
      accounts: [],
    });
    expect(accountsWrapper.find('.loading__wrapper').length).toBe(0);
    expect(accountsWrapper.find('WithStyles(CircularProgress)').length).toBe(0);
    expect(accountsWrapper.find('.accounts__contents__wrapper').length).toBe(1);
    expect(accountsWrapper.find('.table--accounts').length).toBe(1);
    expect(accountsWrapper.find('WithStyles(TableRow)').length).toBe(2);
    const emptyCellInfo = accountsWrapper
      .find('WithStyles(TableRow)')
      .at(1)
      .find('WithStyles(TableCell)')
      .dive()
      .dive();
    expect(emptyCellInfo.text()).toBe('No account details found');
  });

  it('should list accounts once accounts are loaded', () => {
    accountsWrapper.setProps({
      accounts: accountsMock,
    });
    expect(accountsWrapper.find('.loading__wrapper').length).toBe(0);
    expect(accountsWrapper.find('WithStyles(CircularProgress)').length).toBe(0);
    expect(accountsWrapper.find('.accounts__contents__wrapper').length).toBe(1);
    expect(accountsWrapper.find('.table--accounts').length).toBe(1);
    expect(accountsWrapper.find('WithStyles(TableRow)').length).toBe(3);
    const firstRowcellInfo = accountsWrapper
      .find('WithStyles(TableRow)')
      .at(1)
      .find('WithStyles(TableCell)')
      .at(0)
      .dive()
      .dive();
    expect(firstRowcellInfo.text()).toBe('<Link />');
  });
});
