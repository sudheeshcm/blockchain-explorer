import React from 'react';
import { string, shape } from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountIcon from '@material-ui/icons/AccountCircle';
// import ClusterIcon from '@material-ui/icons/CloudQueue';
// import NetworkIcon from '@material-ui/icons/FilterTiltShift';
// import NodeIcon from '@material-ui/icons/Category';
import OverviewIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';

const getActiveLink = paths => {
  let activeLink = 'home';
  if (paths.includes('accounts')) {
    activeLink = 'accounts';
  }
  if (paths.includes('store')) {
    activeLink = 'store';
  }
  return activeLink;
};

function NavItems(props) {
  const { location } = props;

  const linkPrefix = '';
  const paths = location.pathname.split('/');
  const activeLink = getActiveLink(paths);

  return (
    <div className="header__list__wrapper">
      <Link to="/">
        <ListItem button className={activeLink === 'home' ? 'active' : ''}>
          <ListItemIcon>
            <OverviewIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
      </Link>

      <Link to={`${linkPrefix}/accounts`}>
        <ListItem button className={activeLink === 'accounts' ? 'active' : ''}>
          <ListItemIcon>
            <AccountIcon />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
        </ListItem>
      </Link>
      <Link to={`${linkPrefix}/store`}>
        <ListItem button className={activeLink === 'store' ? 'active' : ''}>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Contracts" />
        </ListItem>
      </Link>
    </div>
  );
}

NavItems.propTypes = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
};

export default NavItems;
