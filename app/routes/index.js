import auth from './common/auth.js'
import NoMatch from './common/NoMatch'

export default [
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
  ]
