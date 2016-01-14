import { combineReducers } from 'redux'
import { routeReducer as routing } from 'redux-simple-router';
import { postsByReddit, selectedReddit } from './baidu'

const rootReducer = combineReducers({
  routing,
  postsByReddit,
  selectedReddit
})

export default rootReducer
