import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Header from './component';

const mapStateToProps = state => ({
  searchText: state.dataStore.searchText,
});

const mapDispatchToProps = dispatch => ({
  push: args => dispatch(push(args)),
  onSearch: dispatch.dataStore.onSearch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
