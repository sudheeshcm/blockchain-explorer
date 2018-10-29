import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Transaction from './component';

const mapStateToProps = state => ({
  loading: state.transactions.loading,
  transaction: state.transactions.selected,
});

const mapDispatchToProps = dispatch => ({
  fetchTransaction: dispatch.transactions.fetchTransaction,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Transaction),
);
