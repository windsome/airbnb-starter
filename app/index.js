/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Router, browserHistory as history } from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router';

import configureStore from './configureStore'

//import routes from './routes';
import routes from './stub/routes';

const store = configureStore()

// Installs hooks that always keep react-router and redux store in sync
syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,

  document.getElementById('example')
)


