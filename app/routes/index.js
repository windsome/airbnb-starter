import auth from './common/auth.js'
import NoMatch from './common/NoMatch'

export default [
    require('./house'),
    require('./admin'),
    require('./root'),
    {
      path: '/',
      onEnter: (nextState, replaceState) => {
        let next='/admin';
        console.log("need redirect to "+next);
        replaceState (null, next)
      }
    },
    { path: '*',
      component: require('./common/NoMatch')
    }
  ]
