import React from 'react';
import { string, shape, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import classnames from 'classnames';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  searchGroup: {
    position: 'absolute',
    right: '24px',
    width: '380px',
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});
class Header extends React.Component {
  static propTypes = {
    classNames: string.isRequired,
    classes: shape({}).isRequired,
    onSearch: func.isRequired,
    location: shape({
      pathname: string.isRequired,
    }).isRequired,
    push: func.isRequired,
  };

  static defaultProps = {};

  state = {};

  onSearch = ({ target }) => {
    this.props.push('/');
    this.props.onSearch({ searchText: target.value });
  };

  getActiveLink = paths => {
    let activeLink = 'home';
    if (paths.includes('accounts')) {
      activeLink = 'accounts';
    }
    if (paths.includes('store')) {
      activeLink = 'store';
    }
    return activeLink;
  };

  render() {
    const { classNames, classes, location } = this.props;

    const paths = location.pathname.split('/');
    const activeLink = this.getActiveLink(paths);

    return (
      <AppBar position="absolute" className={classNames}>
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
          <div className="sub__links">
            <Link to="/transactions" className="link header__wrapper sub__link">
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classnames(
                  'header__link',
                  activeLink === 'transactions' ? 'active' : '',
                )}
              >
                Transactions
              </Typography>
            </Link>
            <Link to="/blocks" className="link header__wrapper sub__link">
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classnames(
                  'header__link',
                  activeLink === 'blocks' ? 'active' : '',
                )}
              >
                Blocks
              </Typography>
            </Link>
          </div>

          <div className={classnames(classes.search, classes.searchGroup)}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={this.onSearch}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
