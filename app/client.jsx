/*eslint-disable no-unused-vars */
import 'babel-core/polyfill'

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();
// react-router 1.0.3 not support browserHistory, latest master brunch support. use createBrowserHistory instead temply.
//import { Router, browserHistory as history } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router'

import configureStore from './configureStore'
import routes from './routes';
//import configureStore from './stub/configureStore'
//import routes from './stub/routes';

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);

// Installs hooks that always keep react-router and redux store in sync
syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,

  document.getElementById("app")
)


