import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Blocks from './component';

const mapStateToProps = state => ({
  loading: state.blocks.loading,
  blocks: state.blocks.items,
});

const mapDispatchToProps = dispatch => ({
  fetchBlocks: dispatch.blocks.fetchBlocks,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Blocks),
);
