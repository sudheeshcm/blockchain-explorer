import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
  static propTypes = {
    classes: string.isRequired,
    // location: shape({
    //   pathname: string.isRequired,
    // }).isRequired,
    // push: func.isRequired,
  };

  static defaultProps = {};

  state = {};

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="absolute" className={classes}>
        <Toolbar>
          <Link
            className="link header__wrapper"
            to="/"
            data-test-id="header__home"
          >
            <img
              className="header__logo"
              src="/static/img/consensys.png"
              alt="logo"
            />
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className="header__title"
            >
              Blockchain Explorer
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
