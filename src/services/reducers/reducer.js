import {SEARCH_IMAGE, FETCH_IMAGES, LOAD_MORE} from '../constants'

const initialState={
    imgArray:[],
    text:"",
    token:"",
    pageno:1,
    isLoaded:false
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
                isLoaded:true,
                imgArray:action.payload,
                pageno:state.pageno+1,
                text:state.token,
                token:'',
                imageSize:state.imageSize+1
            }
        case LOAD_MORE:
                // console.log('images: ', action.payload )
                return {
                    ...state,
                    pageno:state.pageno+1,
                    imageSize:action.payload.length,
                    imgArray : state.imgArray.concat(action.payload)
                }
        default:
            return state    
    }
}