export const SET_HERO_SLIDE_INDEX = 'SET_HERO_SLIDESHOW_INDEX'
export function setHeroSlideIndex(index) {
  console.log ("action setHeroSlideIndex");
  return {
    type: SET_HERO_SLIDE_INDEX,
    index
  }
}

