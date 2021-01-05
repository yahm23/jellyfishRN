import {EDIT_ACTIVE_SLIDE,EDIT_BAR_INDEX} from '../actions/types'

const  initialState = {
    touchedBar:{
        activeSlide:0,
        index:0
    }
}

const barReducer = ( state = initialState, action)=>{
    switch(action.type){
        case EDIT_ACTIVE_SLIDE:
            let newSlide = action;
            return { ...state,
                    touchedBar: {activeSlide: action.data.activeSlide}
            
                }
        case EDIT_BAR_INDEX:
            return { ...state,
                    touchedBar: state.touchedBar.index 
            
                }
        default:
            return state;
    }
}

export default barReducer;