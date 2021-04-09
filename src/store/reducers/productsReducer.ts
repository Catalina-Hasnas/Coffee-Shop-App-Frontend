import IProduct from '../../types/IProduct';
//import { fetchProducts } from '../actions';
import { ActionTypes }  from '../actions/actionTypes';

import { Action } from '../actions/index';

export interface IProductsState {
    products: IProduct[],
    error: any,
    loading: boolean
}

const initialState = {
    products: [],
    error: null,
    loading: true
}

export const productsReducer = (state: IProductsState = initialState, action: Action) : IProductsState => {
    switch(action.type) {
        case ActionTypes.fetchProducts: {
            console.log("from the reducer:");
            console.log(action.payload);
            return {...state, products: action.payload, loading: false}
        }
        case ActionTypes.fetchProductsFail: {
            return {...state, error: action.payload}
        }
        default: 
            return state
    }
};