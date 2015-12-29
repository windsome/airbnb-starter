import auth from '../common/auth.js'

export default {
  path:'house',
  component: require('./app'),
  indexRoute: require('./default'),
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
          cb(null, require('./default'))
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
