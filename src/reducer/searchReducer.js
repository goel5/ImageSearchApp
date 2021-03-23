import {
    SEARCH_IMAGE,
    FETCH_IMAGES,
    FETCH_IMAGE,
    LOADING
  } from '../actions/types';
  
  const initialState = {
    text: '',
    images: [],
    loading: false,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SEARCH_IMAGE:
        return {
          ...state,
          text: action.payload,
          loading: false
        };
      case FETCH_IMAGES:
        return {
          ...state,
          images: action.payload,
          loading: false
        };
    //   case FETCH_MOVIE:
    //     return {
    //       ...state,
    //       movie: action.payload,
    //       loading: false
    //     };
      case LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }