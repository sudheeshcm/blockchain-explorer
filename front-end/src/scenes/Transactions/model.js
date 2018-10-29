import { dispatch } from '@rematch/core';
import request from '@Services/ApiService';

// import mockData from './tests/__mocks__/transactions';

export const initialState = {
  loading: false,
  _errors: {},
  lastUpdated: 0,
  items: [],
  selected: null,
};

export default {
  state: initialState,
  reducers: {
    fetchTransactions: state => ({
      ...state,
      loading: true,
    }),
    fetchTransactionsSuccess: (state, payload) => ({
      ...state,
      loading: false,
      items: payload,
    }),
    fetchTransactionsFailed: state => ({
      ...state,
      loading: false,
    }),
    addNew: (state, payload) => ({
      ...state,
      items: [...state.items, payload],
    }),
    fetchTransaction: state => ({
      ...state,
      loading: true,
    }),
    fetchTransactionSuccess: (state, payload) => ({
      ...state,
      loading: false,
      selected: { ...payload },
    }),
    fetchTransactionFailed: state => ({
      ...state,
      loading: false,
    }),
  },
  effects: {
    async fetchTransactions(payload) {
      try {
        const response = await request({
          method: 'GET',
          url: `/api/transactions`,
        });
        dispatch.transactions.fetchTransactionsSuccess(response.transactions);
        if (payload.getNotified) {
          dispatch.notification.show({
            content: 'Transactions fetched successfully',
            type: 'success',
          });
        }
      } catch (error) {
        dispatch.transactions.fetchTransactionsFailed();
        dispatch.notification.show({
          header: 'Transactions details fetch Failed',
          content: 'Please try again later.',
          type: 'error',
        });
      }
    },
    async fetchTransaction(payload) {
      try {
        const response = await request({
          method: 'GET',
          url: `/api/transactions/${payload.id}`,
        });
        dispatch.transactions.fetchTransactionSuccess(response.transaction);
        if (payload.getNotified) {
          dispatch.notification.show({
            content: 'Transaction fetched successfully',
            type: 'success',
          });
        }
      } catch (error) {
        dispatch.transactions.fetchTransactionFailed();
        dispatch.notification.show({
          header: 'Transaction details fetch Failed',
          content: 'Please try again later.',
          type: 'error',
        });
      }
    },
  },
};
