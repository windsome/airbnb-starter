import { combineReducers } from 'redux'
import { routeReducer as routing } from 'redux-simple-router';
import { postsByReddit, selectedReddit } from './baidu'
import { heroSlideIndex, entities, mainpage } from './houseMainReducer'

const rootReducer = combineReducers({
  routing,
  postsByReddit,
  selectedReddit,
  heroSlideIndex,
  entities,
  mainpage
})

export default rootReducer
