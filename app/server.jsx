import React from 'react';
//import qs from 'qs';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation';
import fetch from 'isomorphic-fetch';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from 'configureStore';
import headconfig from './head/Head';

/*
const clientConfig = {
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.PORT || '3000'
};


// Fetch and call the callback function after the response
// is converted to returned and converted to json
function fetchTopics(callback, api='topic') {
  fetch(`http://${clientConfig.host}:${clientConfig.port}/${api}`)
    .then(res => res.json())
    .then(json => callback(json));
};
*/

/*
 * Our html template file
 * @param {String} renderedContent
 * @param initial state of the store, so that the client can be hydrated with the same state as the server
 * @param head - optional arguments to be placed into the head
 */
function renderFullPage(renderedContent, initialState, head={
  title: 'React Webpack Node',
  meta: '<meta name="viewport" content="width=device-width, initial-scale=1" />',
  link: '<link rel="stylesheet" href="/assets/styles/main.css"/>'
}) {
  return `<!doctype html>
    <html lang="">

    <head>
        ${head.title}

        ${head.meta}

        ${head.link}
    </head>
    <body>
    <div id="app">${renderedContent}</div>

    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
    </script>
    <script type="text/javascript" charset="utf-8" src="/assets/bundle.js"></script>

    </body>
    </html>`;  
}

/* 
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
export default function render(req, res) {
  console.log('URL='+req.url+', QUERY='+req.query.toString());
  var url = req.baseUrl+req.url;

  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: url }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log ('error='+error.message);
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      console.log ('redirectLocation='+redirectLocation);
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      console.log('renderProps='+renderProps+',redirectLocation='+redirectLocation);

      //const params = qs.parse(req.query)
      //const counter = parseInt(params.counter) || 0
      //let initialState = {counter}
      let initialState = {}
      const store = configureStore({});
      const renderedContent = renderToString(
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>
      );
      const renderedPage = renderFullPage(renderedContent, initialState, {
        title: headconfig.title,
        meta: headconfig.meta,
        link: headconfig.link
      });
      res.status(200).send(renderedPage);

      /*fetchTopics(apiResult => {
        const authenticated = req.isAuthenticated();
        const store = configureStore({
          // reducer: {initialState}
          topic: {
            topics: apiResult
          },
          user: {
            authenticated: authenticated, 
            isWaiting: false
          }
        });
        const initialState = store.getState();
        const renderedContent = renderToString(
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>);
        const renderedPage = renderFullPage(renderedContent, initialState, {
          title: headconfig.title,
          meta: headconfig.meta,
          link: headconfig.link
        });
        res.status(200).send(renderedPage);
      });*/
    } else {
      console.log ('Not Found');
      res.status(404).send('Not Found');
    }
    
  });
};
