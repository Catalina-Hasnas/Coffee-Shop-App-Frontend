import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider }  from 'react-redux';
import thunk from 'redux-thunk';
import { IProductsState } from './store/reducers/productsReducer';
import {Reducers } from './store/reducers';

export interface IRootState {
  products: IProductsState
}

export default function configureStore(): Store<IRootState, any> {
  const store = createStore(Reducers, undefined, applyMiddleware(thunk));
  return store;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
