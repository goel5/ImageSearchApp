import {createStore, applyMiddleware} from 'redux'
import { fetchImageSuccess,fetchImageFailure} from './index';
import reducer from './image/imageReducer'
const thunkMiddleware=require('redux-thunk').default;

const axios = require('axios')


//action creator returning function
const fetchImages=()=>{
    return function(dispatch){
        
        axios.get(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${this.state.name}&orientation=landscape&per_page=16&page=${this.state.pageno}`)
        .then(res=>res.json())
        .then(res=>{
            const images = res.results
            dispatch(fetchImageSuccess(images))
        })
        .catch(error => {
            const errorMsg=error.message
            dispatch(fetchImageFailure(errorMsg))
        })
    }
}

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchImages());




