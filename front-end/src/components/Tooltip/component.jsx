import React from 'react';
import { string, node, shape } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  lightTooltip: {
    background: theme.palette.grey[800],
    color: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 12,
    maxWidth: 'none',
  },
  arrowPopper: {
    '&[x-placement*="bottom"] $arrowArrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${
          theme.palette.grey[800]
        } transparent`,
      },
    },
    '&[x-placement*="top"] $arrowArrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${
          theme.palette.grey[800]
        } transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrowArrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${
          theme.palette.grey[800]
        } transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrowArrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${
          theme.palette.common.white
        }`,
      },
    },
  },
  arrowArrow: {
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class CustomizedTooltip extends React.Component {
  state = {
    arrowRef: null,
  };

  handleArrowRef = nodeElem => {
    this.setState({
      arrowRef: nodeElem,
    });
  };

  render() {
    const { classes, title } = this.props;

    return (
      <Tooltip
        title={
          <React.Fragment>
            {title}
            <span className={classes.arrowArrow} ref={this.handleArrowRef} />
          </React.Fragment>
        }
        classes={{
          popper: classes.arrowPopper,
          tooltip: classes.lightTooltip,
        }}
        PopperProps={{
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(this.state.arrowRef),
                element: this.state.arrowRef,
              },
            },
          },
        }}
      >
        {this.props.children}
      </Tooltip>
    );
  }
}

CustomizedTooltip.propTypes = {
  classes: shape({}).isRequired,
  children: node.isRequired,
  title: string.isRequired,
};

export default withStyles(styles)(CustomizedTooltip);
