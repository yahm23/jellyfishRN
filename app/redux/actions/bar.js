import {EDIT_ACTIVE_SLIDE, EDIT_BAR_INDEX} from './types';

export const editActiveSlide = (newActiveSlide) => (
    {
        type: EDIT_ACTIVE_SLIDE,
        data:newActiveSlide
    }
)
export const editBarIndex = (newBarIndex) => (
    {
        type: EDIT_BAR_INDEX,
        data:newBarIndex
    }
)