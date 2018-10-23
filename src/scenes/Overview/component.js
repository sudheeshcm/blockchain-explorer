import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class Overview extends Component {
  render() {
    return (
      <div className="overview__contents__wrapper">
        <Typography variant="h3">Overview</Typography>
        <p>
          BPaaS is acloud native blockchain as a Service, that can create
          Blockchain network on top of any cloud (private, public, or hyprid)
          that can provision a <a href="https://kubernetes.io/">kubernetes</a>{' '}
          cluster.
        </p>
      </div>
    );
  }
}
