import { combineReducers } from 'redux'
import { routeReducer as routing } from 'redux-simple-router';
import { postsByReddit, selectReddit } from './baidu'

const rootReducer = combineReducers({
  routing,
  postsByReddit,
  selectReddit
})

export default rootReducer
