import auth from './common/auth.js'
import NoMatch from './common/NoMatch'

export default {
  //component:'div',
  //path: '/',
  //indexRoute: { component: NoMatch },
  childRoutes: [
    require('./house'),
    require('./admin'),
    require('./root'),
    {
      path: '/',
      onEnter: (nextState, replaceState) => {
        console.log("redirect to /house");
        replaceState (null, '/admin')
      }
    },
    { path: '*',
      component: require('./common/NoMatch')
    }
  ],
  /*onEnter: (nextState, replaceState) => {
    replaceState (null, '/house')
  },*/
}
