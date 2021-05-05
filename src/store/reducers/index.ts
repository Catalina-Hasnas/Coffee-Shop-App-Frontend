import { combineReducers } from 'redux';
import { productsReducer } from './Products/productsReducer';
import { categoriesReducer } from './Categories/categoriesReducer';
import { IRootState } from '../../index';
import { cartReducer } from './Cart/cartReducer';

export const Reducers = combineReducers<IRootState>({
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer
});