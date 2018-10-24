import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '@Styles/theme';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
import { Route } from 'react-router-dom';
import Overview from '@Scenes/Overview';
import Transactions from '@Scenes/Transactions';
import Blocks from '@Scenes/Blocks';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import Notification from '@Components/Notification';
import Dialog from '@Components/Dialog';
// import ListItems from './components/ListItems';
import classnames from 'classnames';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  background: {
    backgroundColor: '#efefef !important',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    background: '#e4e4e469',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
    boxSizing: 'border-box',
  },
  toolbar: theme.mixins.toolbar,
  input: {
    backgroundColor: 'blue',
    color: 'yellow',
    width: '350px',
  },
});

function App(props) {
  const { classes, location } = props;
  let isNotHome = false;
  if (location.pathname !== '/') {
    isNotHome = true;
  }
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className={classes.root}>
        <Header classNames={classes.appBar} />
        {/* <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItems />
          </List>
        </Drawer> */}
        <main
          className={classnames(
            classes.content,
            isNotHome ? classes.background : '',
          )}
        >
          <div className={classes.toolbar} />
          <Route exact path="/" component={Overview} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/blocks" component={Blocks} />
        </main>
        <Dialog />
        <Notification />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(App);
