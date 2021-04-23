import IProduct from '../../types/IProduct';
import { ActionTypes }  from '../actions/actionTypes';
import { Action } from '../actions/index';
export interface IProductsState {
    products: IProduct[],
    error: any,
    loading: boolean,
    product: IProduct
}

const initialState = {
    products: [],
    error: null,
    loading: true,
    product: {
        id: 1,
        amount: 1,
        image: "",
        price: 1,
        priceFormatted: "",
        title: "",
        description: "",
        createdAt: new Date(),
        createdAtFormatted: ""
    }
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
        case ActionTypes.fetchProduct: {
            return {... state, product: action.payload, loading: false}
        }
        default: 
            return state
    }
};