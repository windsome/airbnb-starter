import auth from '../common/auth.js'

export default {
  path: 'admin',
  component: require('./app'),
  getIndexRoute(location, cb){
    require.ensure([], (require) => {
      cb(null, {
        component: require('./default')
      })
    })
  },
  /*getIndexRoute: (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./default'))
    })
  },*/
  childRoutes: [
    { path: '*',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../common/NoMatch'))
        })
      }
    }

  ]
}
