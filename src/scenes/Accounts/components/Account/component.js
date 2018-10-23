import React, { Component, Fragment } from 'react';
import { shape, bool, string, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  paper: { marginTop: '1.5em', minHeight: '200px', position: 'relative' },
  accountContents: {
    padding: '36px',
  },
  field: {
    marginTop: '8px',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

class Account extends Component {
  static propTypes = {
    account: shape({}),
    match: shape({
      isExact: bool.isRequired,
      params: shape({
        accountId: string.isRequired,
      }).isRequired,
    }).isRequired,
    fetchAccount: func.isRequired,
    loading: bool,
    classes: shape({}).isRequired,
  };

  static defaultProps = {
    account: null,
    loading: false,
  };

  componentDidMount() {
    this.props.fetchAccount({ id: this.props.match.params.accountId });
  }

  render() {
    const { account, match, classes, loading } = this.props;
    return (
      <Fragment>
        {match.isExact && (
          <div className="account__contents__wrapper">
            <Typography variant="h4">Account</Typography>
            <div>
              <Paper className={classes.paper}>
                {loading &&
                  !account && (
                    <div className="loading__wrapper">
                      <CircularProgress />
                    </div>
                  )}
                {account && (
                  <div className={classes.accountContents}>
                    <Typography
                      variant="h6"
                      component="h3"
                      className={classes.field}
                    >
                      Account Address: <strong>{account.id}</strong>
                    </Typography>
                    <div className={classes.field}>
                      <Chip
                        label={`Balance: ${account.balance} Ether`}
                        className={classes.chip}
                        color="primary"
                        variant="outlined"
                      />
                    </div>
                  </div>
                )}
                {!loading &&
                  !account && (
                    <div className={classes.accountContents}>
                      <Typography
                        variant="body2"
                        component="h6"
                        className={classes.field}
                      >
                        <strong>No Account details found</strong>
                      </Typography>
                    </div>
                  )}
              </Paper>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Account);
