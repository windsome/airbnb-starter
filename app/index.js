/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();
//const history = browserHistory;

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

//import configureStore from './configureStore'
//import routes from './routes';
import configureStore from './stub/configureStore'
import routes from './stub/routes';

const store = configureStore(initialState);

// Installs hooks that always keep react-router and redux store in sync
syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,

  document.getElementById('root')
)


