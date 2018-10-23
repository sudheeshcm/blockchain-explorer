import React from 'react';
import { func, bool, string } from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
/* import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'; */
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ScrollDialog extends React.Component {
  static propTypes = {
    open: bool,
    type: string,
    scrollType: string.isRequired,
    // size: oneOf(['fullscreen', 'large', 'mini', 'small', 'tiny']),
    disableBackdropClick: bool,
    // showCloseButton: bool,
    closeDialog: func.isRequired,
  };

  static defaultProps = {
    open: false,
    type: 'default',
    size: 'large',
    disableBackdropClick: true,
    showCloseButton: true,
  };

  state = {};

  render() {
    const {
      open,
      scrollType,
      type,
      closeDialog,
      disableBackdropClick,
    } = this.props;

    let dialogComponent;
    let title;
    switch (type) {
      case 'NEW_NODE':
        title = 'CREATE NEW NODE';
        // *** TODO *** Update the below code with actual component
        dialogComponent = (
          <div style={{ width: '500px', height: '300px' }}>
            This is a test Dialog
          </div>
        );
        break;
      default:
        title = '';
        dialogComponent = null;
        break;
    }
    return (
      <Dialog
        TransitionComponent={Transition}
        open={open}
        onClose={closeDialog}
        scroll={scrollType}
        disableBackdropClick={disableBackdropClick}
        aria-labelledby="scroll-dialog-title"
        className="dialog__wrapper"
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        {/* <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={closeDialog}
        >
          <CloseIcon />
        </IconButton> */}
        <DialogContent>{dialogComponent}</DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={closeDialog} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ScrollDialog;
