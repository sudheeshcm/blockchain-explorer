import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Account from './component';

const mapStateToProps = state => ({
  loading: state.accounts.loading,
  account: state.accounts.selected,
});

const mapDispatchToProps = dispatch => ({
  fetchAccount: dispatch.accounts.fetchAccount,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Account),
);
