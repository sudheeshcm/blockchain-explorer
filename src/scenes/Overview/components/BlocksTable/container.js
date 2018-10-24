import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import BlocksTable from './component';

const mapStateToProps = state => ({
  blocks: state.blocks.items,
  searchText: state.dataStore.searchText,
  searchResults: state.dataStore.searchResults,
});

const mapDispatchToProps = dispatch => ({
  push: args => dispatch(push(args)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlocksTable);
