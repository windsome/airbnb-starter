import * as houseActions from '../actions/houseMain'
import { combineReducers } from 'redux'
import merge from 'lodash/object/merge'
import union from 'lodash/array/union'

export function heroSlideIndex(state = 0, action) {
  switch (action.type) {
    case houseActions.SET_HERO_SLIDE_INDEX:
      return action.index
    default:
      return state
  }
}

export function entities(state = { users: {}, houses: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

var faverate = function(state = { isFetching:false, pageCount:0, ids:[] } , action) {
  switch (action.type) {
    case houseActions.FAVERATE_HOUSES_REQUEST:
      return merge ({}, state, { isFetching:true })
    case houseActions.FAVERATE_HOUSES_SUCCESS:
      return merge ({}, state, { isFetching:false, ids: union(state.ids, action.response.result), pageCount: state.pageCount + 1 });
    case houseActions.FAVERATE_HOUSES_FAILURE:
      return merge ({}, state, { isFetching:false})
    default:
      return state;
  }
}

var setFaverateHouseImageIndex = function(state = {}, action) {
  switch (action.type) {
    case houseActions.FAVERATE_HOUSE_IMAGE_PREV_NEXT:
      return merge({}, state, {[action.houseId]:{index:action.imageIndex}})
    default:
      return state
  }
}

export const mainpage = combineReducers({
  faverate,
  houseImageIndex: setFaverateHouseImageIndex  
})


