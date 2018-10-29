import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '@Root/store';

import App from '@Components/App';

const mountRoot = document.getElementById('app');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  mountRoot,
);
