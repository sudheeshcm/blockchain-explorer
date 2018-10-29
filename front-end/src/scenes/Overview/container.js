import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Overview from './component';

const mapStateToProps = state => ({
  loading: state.dataStore.loading,
  searchText: state.dataStore.searchText,
  searchResults: state.dataStore.searchResults,
});

const mapDispatchToProps = dispatch => ({
  onSearch: dispatch.dataStore.onSearch,
  fetchTransactions: dispatch.transactions.fetchTransactions,
  fetchBlocks: dispatch.blocks.fetchBlocks,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Overview),
);
