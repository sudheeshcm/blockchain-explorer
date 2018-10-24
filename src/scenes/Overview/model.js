import mockBlocks from '@Scenes/Blocks/tests/__mocks__/blocks';
import mockTransactions from '@Scenes/Transactions/tests/__mocks__/transactions';

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
    onSearch: (state, payload) => {
      let filteredBlocks = [...mockBlocks];
      let filteredTransactions = [...mockTransactions];

      if (payload.searchText) {
        filteredBlocks = filteredBlocks.filter(b =>
          b.hash.startsWith(payload.searchText),
        );
        filteredTransactions = filteredTransactions.filter(t =>
          t.hash.startsWith(payload.searchText),
        );
      }

      return {
        ...state,
        searchText: payload.searchText,
        searchResults: {
          blocks: filteredBlocks,
          transactions: filteredTransactions,
        },
      };
    },
  },
  effects: {},
};
