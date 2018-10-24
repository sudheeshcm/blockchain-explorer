import React, { Component, Fragment } from 'react';
import { shape, bool, string, func } from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import TransactionTable from '@Scenes/Overview/components/TransactionTable';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  paper: { marginTop: '1.5em', minHeight: '200px', position: 'relative' },
  blockContents: {
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

class Block extends Component {
  static propTypes = {
    block: shape({}),
    match: shape({
      isExact: bool.isRequired,
      params: shape({
        blockId: string.isRequired,
      }).isRequired,
    }).isRequired,
    fetchBlock: func.isRequired,
    loading: bool,
    classes: shape({}).isRequired,
  };

  static defaultProps = {
    block: null,
    loading: false,
  };

  componentDidMount() {
    this.props.fetchBlock({ id: this.props.match.params.blockId });
  }

  render() {
    const { block, match, classes, loading } = this.props;
    return (
      <Fragment>
        {match.isExact && (
          <div className="block__contents__wrapper">
            <Typography variant="h6">Block</Typography>
            <div>
              <Paper className={classes.paper}>
                {loading &&
                  !block && (
                    <div className="loading__wrapper">
                      <CircularProgress />
                    </div>
                  )}
                {block && (
                  <div className={classes.blockContents}>
                    <Typography component="h3" className={classes.field}>
                      Block Hash: <strong>{block.hash}</strong>
                    </Typography>
                    <div className={classes.field}>
                      <Chip
                        label={`Gas: ${block.gas} Ether`}
                        className={classes.chip}
                        color="primary"
                        variant="outlined"
                      />
                    </div>
                    <Typography component="h3" className={classes.field}>
                      Time:
                      <strong>
                        {moment.unix(block.timestamp).format('LLLL')}
                      </strong>
                    </Typography>
                    <Typography component="h3" className={classes.field}>
                      Height:
                      {block.height}
                    </Typography>
                    <Typography component="h3" className={classes.field}>
                      Mined By:
                      {block.minedBy}
                    </Typography>
                    <Typography component="h3" className={classes.field}>
                      Gas Limit:
                      <strong>{block.gasLimit}</strong>
                    </Typography>
                    <Typography component="h3" className={classes.field}>
                      Difficulty:
                      <strong>{block.difficulty}</strong>
                    </Typography>
                    <Typography variant="h6" className="transactions__title">
                      Transactions
                    </Typography>
                    <div className="transactions__table">
                      <TransactionTable />
                    </div>
                  </div>
                )}

                {!loading &&
                  !block && (
                    <div className={classes.blockContents}>
                      <Typography
                        variant="body2"
                        component="h6"
                        className={classes.field}
                      >
                        <strong>No Block details found</strong>
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

export default withStyles(styles)(Block);
