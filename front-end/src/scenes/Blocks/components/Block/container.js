import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Block from './component';

const mapStateToProps = state => ({
  loading: state.blocks.loading,
  block: state.blocks.selected,
});

const mapDispatchToProps = dispatch => ({
  fetchBlock: dispatch.blocks.fetchBlock,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Block),
);
