import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Transactions from './component';

const mapStateToProps = state => ({
  loading: state.transactions.loading,
  transactions: state.transactions.items,
});

const mapDispatchToProps = dispatch => ({
  fetchTransactions: dispatch.transactions.fetchTransactions,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Transactions),
);
