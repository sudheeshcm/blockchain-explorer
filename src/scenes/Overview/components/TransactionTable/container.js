import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import TransactionTable from './component';

const mapStateToProps = state => ({
  transactions: state.transactions.items,
  searchText: state.dataStore.searchText,
  searchResults: state.dataStore.searchResults,
});

const mapDispatchToProps = dispatch => ({
  push: args => dispatch(push(args)),
  onSearch: dispatch.dataStore.onSearch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionTable);
