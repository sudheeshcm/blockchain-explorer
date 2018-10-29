import { connect } from 'react-redux';

import ScrollDialog from './component';

const mapStateToProps = state => ({
  open: state.dialog.open,
  type: state.dialog.type,
  scrollType: state.dialog.scrollType,
});

const mapDispatchToProps = dispatch => ({
  closeDialog: dispatch.dialog.close,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScrollDialog);
