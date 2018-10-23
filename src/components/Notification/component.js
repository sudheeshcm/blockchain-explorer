import React, { Component } from 'react';
import classNames from 'classnames';
import { func, bool, string, shape } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function CustomSnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

const CustomSnackbarContentWrapper = withStyles(styles1)(CustomSnackbarContent);

const snackbarStyles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
    bottom: '30px',
  },
});

class Notification extends Component {
  static propTypes = {
    hide: func.isRequired,
    open: bool,
    content: string,
    type: string,
    classes: shape({}).isRequired,
  };

  static defaultProps = {
    open: false,
    content: '',
    type: 'info',
  };

  render() {
    const { open, content, type, classes, hide } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        className={classNames(classes.snackbar, 'notification__wrapper')}
        open={open}
        autoHideDuration={8000}
        onClose={hide}
      >
        <CustomSnackbarContentWrapper
          onClose={hide}
          variant={type}
          message={content}
          className="notification__content"
        />
      </Snackbar>
    );
  }
}

export default withStyles(snackbarStyles)(Notification);
