import { combineReducers } from 'redux';
import { productsReducer } from './Products/productsReducer';
import { categoriesReducer } from './Categories/categoriesReducer';
import { IRootState } from '../../index';

export const Reducers = combineReducers<IRootState>({
    products: productsReducer,
    categories: categoriesReducer
});