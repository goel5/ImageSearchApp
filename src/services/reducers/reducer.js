import {SEARCH_IMAGE, FETCHED_IMAGES} from '../constants'

const initialState={
    imgArray:[],
    text:"",
}

export default function imgItems(state=initialState, action){
    
    switch(action.type){
        case SEARCH_IMAGE:
            // console.log('reducer :',action.payload )
            return {
                text:action.payload,
            }
        case FETCHED_IMAGES:
            // console.log('images: ', action.payload )
            return {
                ...state,
                imgArray:action.payload,
            }    
        default:
            return state    
    }
}