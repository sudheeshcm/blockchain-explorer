import { dispatch } from '@rematch/core';
// import request from '@Services/ApiService';

const tempData = [
  {
    id: '0xa40518a0dc3bd8d9defa98176d8b04cdb5ce2ef3',
    balance: 9999.99,
  },
  {
    id: '0x1d250518a0dc3bd8d9defa98176d8b04cdb5ce2ee4',
    balance: 4563.33,
  },
];

export const initialState = {
  loading: false,
  _errors: {},
  lastUpdated: 0,
  items: [...tempData],
  selected: null,
};

export default {
  state: initialState,
  reducers: {
    fetchAccounts: state => ({
      ...state,
      loading: true,
    }),
    fetchAccountsSuccess: (state, payload) => ({
      ...state,
      loading: false,
      items: payload,
    }),
    fetchAccountsFailed: state => ({
      ...state,
      loading: false,
    }),
    addNew: (state, payload) => ({
      ...state,
      items: [...state.items, payload],
    }),
    fetchAccount: (state, payload) => {
      const selected = state.items.find(
        i => i.id.toString() === payload.id.toString(),
      );
      return {
        ...state,
        selected,
      };
    },
  },
  effects: {
    async fetchAccounts(payload, state) {
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
            items = selectedNetwork ? selectedNetwork.preFundedAccounts : [];
          } else {
            items = tempData;
          }
          dispatch.accounts.fetchAccountsSuccess(items);
          if (payload.getNotified) {
            dispatch.notification.show({
              content: 'Account details fetched successfully',
              type: 'success',
            });
          }
        }, 1000);
      } catch (error) {
        dispatch.accounts.fetchAccountsFailed();
        /* dispatch.notification.show({
          header: 'Account details fetch Failed',
          content: 'Please try again later.',
          type: 'error',
        }); */
      }
    },
  },
};
