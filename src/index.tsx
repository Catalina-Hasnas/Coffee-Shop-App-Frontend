import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider }  from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { IProductsState, productsReducer } from './store/reducers/productsReducer';

export interface IRootState {
  products: IProductsState
}

// const store = createStore(Reducers, applyMiddleware(thunk));

const store = createStore<IRootState, any, any, any>(
  combineReducers({
      products: productsReducer
}));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
