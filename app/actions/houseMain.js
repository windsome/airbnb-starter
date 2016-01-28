import { CALL_API, Schemas } from '../middleware/api'

export const SET_HERO_SLIDE_INDEX = 'SET_HERO_SLIDESHOW_INDEX'
export function setHeroSlideIndex(index) {
  console.log ("action setHeroSlideIndex");
  return {
    type: SET_HERO_SLIDE_INDEX,
    index
  }
}

export const FAVERATE_HOUSES_REQUEST = 'FAVERATE_HOUSES_REQUEST'
export const FAVERATE_HOUSES_SUCCESS = 'FAVERATE_HOUSES_SUCCESS'
export const FAVERATE_HOUSES_FAILURE = 'FAVERATE_HOUSES_FAILURE'
function fetchFaverateHouses() {
  return {
    [CALL_API]: {
      types: [ FAVERATE_HOUSES_REQUEST, FAVERATE_HOUSES_SUCCESS, FAVERATE_HOUSES_FAILURE ],
      endpoint: 'apis/house/faverate',
      schema: Schemas.HOUSE_ARRAY
    }
  }
}
export function loadFaverateHouses() {
  return (dispatch, getState) => {
    const {
      houseCount = 0
    } = getState().mainpage.faverate
    if (houseCount > 0) {
      return null
    }
    return dispatch(fetchFaverateHouses())
  }
}

export const FAVERATE_HOUSE_IMAGE_PREV_NEXT = 'FAVERATE_HOUSE_IMAGE_PREV_NEXT'
function faverateHouseImagePrevNext (houseId, isNext) {
  return (dispatch, getState) => {
    const {
      houses
    } = getState().entities
    const house = houses[houseId];
    const imgCount = (house && house.imgs && house.imgs.length) || 0;
    if (imgCount <= 0) return null;
    const {
      houseImageIndex
    } = getState().mainpage

    let imageIndex = (houseImageIndex && houseImageIndex[houseId] && houseImageIndex[houseId].index) || 0;
    if (isNext) {
      imageIndex = imageIndex + 1
    } else {
      imageIndex = imageIndex - 1
    }
    if (imageIndex <= 0) imageIndex = 0;
    else if (imageIndex >= imgCount) imageIndex = imgCount - 1;
    return dispatch({
      type: FAVERATE_HOUSE_IMAGE_PREV_NEXT,
      houseId,
      imageIndex
    })
  }
}
export function faverateHouseImagePrev (houseId) {
  return faverateHouseImagePrevNext (houseId, false);
}
export function faverateHouseImageNext (houseId) {
  return faverateHouseImagePrevNext (houseId, true);
}


