import { SEARCH_IMAGE, FETCH_IMAGES, LOAD_MORE} from '../constants'
import axios from 'axios'
export const searchImage = (token) => {
    // console.log('searchImage Called', text)
    return {
        type: SEARCH_IMAGE,
        payload: token,
    }
}
export const fetchImages=(images)=>{
    // console.log('images Fetched', images)
    return {
        type: FETCH_IMAGES,
        payload:images,
    }
}
export const loadMore=(images)=>{

    return {
        type: LOAD_MORE,
        payload:images,
    }
}
export const fetchedImages = (token) => {
    return function (dispatch) {
        axios
        .get(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${token}&orientation=landscape&per_page=12&page=1`)
        .then(response => {
            const images = response.data.results
            dispatch(fetchImages(images))
        })    
        .catch(error=>{
            console.log(error)
        })
        // console.log(text, ' Images fetching..')
    }
    // console.log('imgArray: ',images)
}
export const loadMoreImages = (text, pageno) => {
    return function (dispatch) {
        axios
        .get(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${text}&orientation=landscape&per_page=16&page=${pageno}`)
        .then(response => {
            const images = response.data.results
            dispatch(loadMore(images))
        })    
        .catch(error=>{
            console.log(error)
        })
    }
}

