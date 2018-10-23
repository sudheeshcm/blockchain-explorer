import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Accounts from './component';

const mapStateToProps = state => ({
  loading: state.accounts.loading,
  accounts: state.accounts.items,
});

const mapDispatchToProps = dispatch => ({
  fetchAccounts: dispatch.accounts.fetchAccounts,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Accounts),
);
