import React, { Component, Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { bool, shape, arrayOf, string, number, func } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Account from './components/Account';
import NewAccount from './components/NewAccount';

export default class Accounts extends Component {
  static propTypes = {
    accounts: arrayOf(
      shape({
        id: string.isRequired,
        balance: number.isRequired,
      }),
    ),
    loading: bool,
    fetchAccounts: func.isRequired,
    match: shape({
      isExact: bool.isRequired,
      params: shape({
        networkId: string,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {
    accounts: [],
    loading: false,
  };

  componentDidMount() {
    const params = {
      getNotified: false,
    };

    this.props.fetchAccounts(params);
  }

  render() {
    const { accounts, loading, match } = this.props;
    const isNetworksActive = match.params && match.params.networkId;

    return (
      <Fragment>
        <Switch>
          <Route exact path={`${match.path}/new`} component={NewAccount} />
          <Route path={`${match.path}/:accountId`} component={Account} />
        </Switch>

        {match.isExact && (
          <div className="nodes__contents__wrapper">
            <Typography variant="h4">Accounts</Typography>
            <p>
              Ethereum accounts can be created and imported into any Ethereum
              node, and can be used to sign transactions, i.e: transactions that
              deploy smart contracts.
            </p>
            <div>
              {!isNetworksActive && (
                <Link to="/accounts/new">
                  <Button color="primary" variant="contained">
                    Create New Account
                  </Button>
                </Link>
              )}
              <Paper
                style={{ marginTop: '1.5em' }}
                className="accounts__contents__wrapper"
              >
                {loading && (
                  <div className="loading__wrapper">
                    <CircularProgress />
                  </div>
                )}
                <Table
                  className={`table table--accounts ${
                    loading ? 'loading' : ''
                  }`}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Accounts</TableCell>
                      <TableCell>Balance</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {loading &&
                      !accounts.length && (
                        <TableRow className="table__row--loading">
                          <TableCell className="cell" />
                          <TableCell />
                        </TableRow>
                      )}
                    {accounts.map(account => (
                      <TableRow key={account.id}>
                        <TableCell>
                          <Link to={`/accounts/${account.id}`}>
                            {account.id}
                          </Link>
                        </TableCell>
                        <TableCell>{account.balance} Ether</TableCell>
                      </TableRow>
                    ))}
                    {!accounts.length &&
                      !loading && (
                        <TableRow>
                          <TableCell>No account details found</TableCell>
                        </TableRow>
                      )}
                  </TableBody>
                </Table>
              </Paper>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
