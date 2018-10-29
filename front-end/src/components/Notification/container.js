import { connect } from 'react-redux';

import Notification from './component';

const mapStateToProps = state => ({
  open: state.notification.open,
  content: state.notification.content,
  type: state.notification.type,
});

const mapDispatchToProps = dispatch => ({
  hide: dispatch.notification.hide,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification);
