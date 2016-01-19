import { combineReducers } from 'redux'
import { routeReducer as routing } from 'redux-simple-router';
import { postsByReddit, selectedReddit } from './baidu'
import { heroSlideIndex } from './houseMainReducer'

const rootReducer = combineReducers({
  routing,
  postsByReddit,
  selectedReddit,
  heroSlideIndex
})

export default rootReducer
