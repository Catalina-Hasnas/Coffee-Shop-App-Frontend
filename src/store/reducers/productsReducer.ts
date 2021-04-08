import IProduct from '../../types/IProduct';
//import { fetchProducts } from '../actions';
import { ActionTypes }  from '../actions/actionTypes';

import { Action } from '../actions/index';

export interface IProductsState {
    products: IProduct[]
}

const initialState = {
    products: [ 
        {
            image: "",
            id: 3,
            title: "sds",
            priceFormatted: "sds",
            price: 3,
            amount: 3
        }
    ],
}

export const productsReducer = (state: IProductsState = initialState, action: Action) : IProductsState => {
    switch(action.type) {
        case ActionTypes.fetchProducts: {
            console.log("from the reducer:");
            console.log(action.payload);
            return {...state, products: action.payload}
        }
        default: 
            return state
    }
};