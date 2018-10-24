import { dispatch } from '@rematch/core';
// import request from '@Services/ApiService';

import mockData from './tests/__mocks__/blocks';

export const initialState = {
  loading: false,
  _errors: {},
  lastUpdated: 0,
  items: [...mockData],
  selected: null,
};

export default {
  state: initialState,
  reducers: {
    fetchBlocks: state => ({
      ...state,
      loading: true,
    }),
    fetchBlocksSuccess: (state, payload) => ({
      ...state,
      loading: false,
      items: payload,
    }),
    fetchBlocksFailed: state => ({
      ...state,
      loading: false,
    }),
    addNew: (state, payload) => ({
      ...state,
      items: [...state.items, payload],
    }),
    fetchBlock: (state, payload) => {
      const selected = state.items.find(
        i => i.hash.toString() === payload.id.toString(),
      );
      return {
        ...state,
        selected,
      };
    },
  },
  effects: {
    async fetchBlocks(payload, state) {
      try {
        /* const { response } = await request({
          method: 'GET',
          url: `/accounts`,
        }); */
        setTimeout(() => {
          let items = [];
          if (payload.networkId) {
            const selectedNetwork = state.networks.items.find(
              i => i.networkId.toString() === payload.networkId.toString(),
            );
            items = selectedNetwork ? selectedNetwork.preFundedBlocks : [];
          } else {
            items = mockData;
          }
          dispatch.accounts.fetchBlocksSuccess(items);
          if (payload.getNotified) {
            dispatch.notification.show({
              content: 'Account details fetched successfully',
              type: 'success',
            });
          }
        }, 1000);
      } catch (error) {
        dispatch.accounts.fetchBlocksFailed();
        /* dispatch.notification.show({
          header: 'Account details fetch Failed',
          content: 'Please try again later.',
          type: 'error',
        }); */
      }
    },
  },
};
