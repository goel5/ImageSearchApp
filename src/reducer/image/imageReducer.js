// import {FETCH_IMAGE_REQUEST, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAILURE} from '../../actions/types';

// const initialState = {
//     loading: true,
//     name:"",
//     imageArray:[],
//     pageno:1,
//     text:"",
//     error:'',
// }

// const reducer=(state=initialState, action)=>{
//     switch (action.type){
//         case FETCH_IMAGE_REQUEST: 
//         return{
//             ...state,
//             loading: true,
//             name:action.payload
//         }
//         case FETCH_IMAGE_SUCCESS: 
//         return{
//             ...state,
//             loading: false,
//             imageArray: action.payload,
//             text:state.name,
//             name:"",
//             pageno: state.pageno+1,
//         }
//         case FETCH_IMAGE_FAILURE: 
//         return{
//             loading: false,
//             imageArray: [],
//             error:action.payload,
//             name:""
//         }
//         default:return state;
//     }
// }
// export default reducer;