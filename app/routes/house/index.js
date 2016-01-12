import auth from '../common/auth.js'
//import Default1 from './default'

export default {
  path:'house',
  component: require('./App'),
//  indexRoute: Default1,
  indexRoute: require('./Main'),
  /*indexRoute: {
    getComponent: (location, cb) => {
      // Only load if we're logged in
        require.ensure([], (require) => {
          cb(null, require('./Login'))
      })
    }
  },*/

/*  getIndexRoute: (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./login'))
    })
  },*/
  childRoutes: [
    { path: 'search',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./Login'))
        })
      }
    },
    { path: 'info',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./Main'))
        })
      }
    },
    { path: '*',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../common/NoMatch'))
        })
      }
    }

  ]
}
