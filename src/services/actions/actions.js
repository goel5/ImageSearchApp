import {SEARCH_IMAGE, FETCHED_IMAGES} from '../constants'

export const searchImage=(text)=>{
    // console.log('searchImage Called', text)
    return {
        type: SEARCH_IMAGE,
        payload:text,
    }
}
// export const fetchedImages=(imgArray)=>{
//     console.log('images Fetched', imgArray)
//     return {
//         type: FETCHED_IMAGES,
//         payload:imgArray,
//     }
// }
export const fetchedImages=(text)=>{
    
    console.log(text,' Images fetching..')
    fetch(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${text}&orientation=landscape&per_page=16&page=1`)
    .then(res=>res.json())
    .then(res =>res.results)
    .catch(err => console.log(err));
    // console.log('imgArray: ',images)
}

