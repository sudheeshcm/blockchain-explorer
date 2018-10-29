import request from '@Services/ApiService';
import { dispatch } from '@rematch/core';

export const initialState = {
  loading: false,
  _errors: {},
  searchText: '',
  searchResults: {
    blocks: [],
    transactions: [],
  },
  lastUpdated: 0,
};

export default {
  state: initialState,
  reducers: {
    onSearch: (state, payload) => ({
      ...state,
      loading: true,
      searchText: payload.searchText,
    }),
    onSearchSuccess: (state, payload) => ({
      ...state,
      searchResults: {
        blocks: [...payload.blocks],
        transactions: [...payload.transactions],
      },
    }),
    onSearchFailed: state => ({
      ...state,
      loading: false,
    }),
  },
  effects: {
    async onSearch(payload) {
      try {
        let results;
        if (payload.searchText) {
          results = await request({
            method: 'GET',
            url: `/api/search`,
            params: {
              ...payload,
            },
          });
        } else {
          results = {
            blocks: [],
            transactions: [],
          };
        }
        dispatch.dataStore.onSearchSuccess(results);
      } catch (error) {
        dispatch.dataStore.onSearchFailed();
        dispatch.notification.show({
          header: 'Something went wrong during search',
          content: 'Please try again later.',
          type: 'error',
        });
      }
    },
  },
};
