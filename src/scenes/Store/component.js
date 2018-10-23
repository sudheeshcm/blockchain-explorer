import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class Store extends Component {
  render() {
    return (
      <div className="store__contents__wrapper">
        <Typography variant="h4">Smart Contracts Store</Typography>
        <p>
          Contracts store contains high quality smart contracts that can be
          deployed to any Ethereum blockchain networks with few clicks. Using
          funds available in accounts.
        </p>
        <div>
          <Paper style={{ marginTop: '1.5em' }}>
            <Table className="table table--store">
              <TableHead>
                <TableRow>
                  <TableCell>Contract Name</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>ERC20</TableCell>
                  <TableCell>
                    Standard smart contract for creating tokens with well
                    defined programming interface for transfer tokens, get
                    balance of tokens, spending delegation allowance and events
                    for notifying listening off-chain apps.
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>ENS</TableCell>
                  <TableCell>
                    Smart contract for mapping names to Ethereum accounts
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Signature Registry</TableCell>
                  <TableCell>
                    Smart contract with sign, verify interface
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Hash Registry</TableCell>
                  <TableCell>
                    Smart contract for caluclating and validating merkle trees
                    of hashes
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Ballot</TableCell>
                  <TableCell>Smart contract for decentralized voting</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}
