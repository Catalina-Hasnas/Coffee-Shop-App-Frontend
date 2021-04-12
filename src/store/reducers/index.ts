import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { IRootState } from '../../index';

export const Reducers = combineReducers<IRootState>({
    products: productsReducer
});