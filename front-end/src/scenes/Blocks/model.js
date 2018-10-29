import { dispatch } from '@rematch/core';
import request from '@Services/ApiService';

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
    fetchBlocks: state => ({
      ...state,
      loading: true,
    }),
    fetchBlocksSuccess: (state, payload) => ({
      ...state,
      loading: false,
      items: [...payload],
    }),
    fetchBlocksFailed: state => ({
      ...state,
      loading: false,
    }),
    addNew: (state, payload) => ({
      ...state,
      items: [...state.items, payload],
    }),
    fetchBlock: state => ({
      ...state,
      loading: true,
    }),
    fetchBlockSuccess: (state, payload) => ({
      ...state,
      loading: false,
      selected: { ...payload },
    }),
    fetchBlockFailed: state => ({
      ...state,
      loading: false,
    }),
  },
  effects: {
    async fetchBlocks(payload) {
      try {
        const response = await request({
          method: 'GET',
          url: `/api/blocks`,
        });
        dispatch.blocks.fetchBlocksSuccess(response.blocks);
        if (payload.getNotified) {
          dispatch.notification.show({
            content: 'Blocks fetched successfully',
            type: 'success',
          });
        }
      } catch (error) {
        dispatch.blocks.fetchBlocksFailed();
        dispatch.notification.show({
          header: 'Blocks details fetch Failed',
          content: 'Please try again later.',
          type: 'error',
        });
      }
    },
    async fetchBlock(payload) {
      try {
        const response = await request({
          method: 'GET',
          url: `/api/blocks/${payload.id}`,
        });
        dispatch.blocks.fetchBlockSuccess(response.block);
        if (payload.getNotified) {
          dispatch.notification.show({
            content: 'Block fetched successfully',
            type: 'success',
          });
        }
      } catch (error) {
        dispatch.blocks.fetchBlockFailed();
        dispatch.notification.show({
          header: 'Block details fetch Failed',
          content: 'Please try again later.',
          type: 'error',
        });
      }
    },
  },
};
