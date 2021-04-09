import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';

export const Reducers = combineReducers({
    products: productsReducer
});