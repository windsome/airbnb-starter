import { SET_HERO_SLIDE_INDEX } from '../actions/houseMain'

export function heroSlideIndex(state = 0, action) {
  switch (action.type) {
    case SET_HERO_SLIDE_INDEX:
      return action.index
    default:
      return state
  }
}


