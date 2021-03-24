import {SEARCH_IMAGE, FETCH_IMAGES, LOAD_MORE} from '../constants'

const initialState={
    imgArray:[],
    text:"",
    token:"",
    pageno:1,
}

export default function imgItems(state=initialState, action){
    
    switch(action.type){
        case SEARCH_IMAGE:
            // console.log('reducer :',action.payload )
            return {
                ...state,
                token:action.payload,
            }
        case FETCH_IMAGES:
            // console.log('images: ', action.payload )
            return {
                imgArray:action.payload,
                pageno:state.pageno+1,
                text:state.token,
                token:''
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