import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
const list = (state = [], action) => {
  let newState = [];
  if (action.type === 'GET_RECORDS') {
    newState = action.payload;
  }
  return newState;
}
const name = (state = '', action) => {
  let newState = state;
  if (action.type === 'SET_PLAYER') {
    newState = action.payload;
  }
  return newState
}
const words = (state = [], action) => {

  let newState = [...state];
  if (action.type === 'GET_WORDS') {
    newState = action.payload;
  }
  if (action.type === 'CLEAR_WORDS') {
    newState = [];
  }
  return newState;
}
const time = (state = 0, action) => {
  let newState = state;
  if (action.type === 'SET_TIME') {
    newState = new Date();
  }
  return newState;
}
const storeInstance = createStore(
  combineReducers({
    time: time,
    records: list,
    words: words,
    name: name,
  }))
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
