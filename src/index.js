import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducers from './services/reducers/index'
const thunkMiddleware=require('redux-thunk').default
const store=createStore(rootReducers,applyMiddleware(thunkMiddleware))

//
console.log("storeData", store)
//
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
