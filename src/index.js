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
const time = (state = 0, action) => {
  let newState = state;
  console.log(action.payload)
  if (action.type === 'SET_TIME') {
    newState = action.payload;
  }
  return newState;
}
const storeInstance = createStore(
  combineReducers({
    time: time,
    records: list,
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
