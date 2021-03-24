import {SEARCH_IMAGE, FETCH_IMAGES, LOAD_MORE} from '../constants'

const initialState={
    imgArray:[],
    text:"",
    pageno:1,
}

export default function imgItems(state=initialState, action){
    
    switch(action.type){
        case SEARCH_IMAGE:
            // console.log('reducer :',action.payload )
            return {
                ...state,
                text:action.payload,
            }
        case FETCH_IMAGES:
            // console.log('images: ', action.payload )
            return {
                ...state,
                imgArray:action.payload,
                pageno:state.pageno+1
            }
        case LOAD_MORE:
                // console.log('images: ', action.payload )
                return {
                    ...state,
                    pageno:state.pageno+1,
                    imgArray : state.imgArray.concat(action.payload)
                }    
        default:
            return state    
    }
}