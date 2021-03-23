import { SEARCH_IMAGE, FETCH_IMAGES, FETCH_IMAGE, LOADING } from './types';
import axios from 'axios';

export const searchImage = text => dispatch => {
  dispatch({
    type: SEARCH_IMAGE,
    payload: text
  });
};

export const fetchImages = text => dispatch => {
  
    fetch(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${text}&orientation=landscape&per_page=16&page=1`)
    .then(res=>res.json())
    .then(res =>
      dispatch({
        type: FETCH_IMAGES,
        payload: res.results
      })
    )
    .catch(err => console.log(err));
};

// export const fetchImage = id => dispatch => {
//   axios
//     .get(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${text}&orientation=landscape&per_page=16&page=1`)
//     .then(response =>
//       dispatch({
//         type: FETCH_IMAGE,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
// };

export const setLoading = () => {
  return {
    type: LOADING
  };
};