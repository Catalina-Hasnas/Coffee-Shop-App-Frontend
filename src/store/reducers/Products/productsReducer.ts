import IProduct from '../../../types/IProduct';
import { ActionTypes }  from '../../actions/actionTypes';
import { Action } from '../../actions/Action';
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
        id: 0,
        amount: 0,
        image: "",
        price: 0.0,
        title: "",
        description: "",
        createdAt: new Date(),
        createdAtFormatted: "",
        category: {
            id: 0,
            name: ""
        }
    }
}

export const productsReducer = (state: IProductsState = initialState, action: Action) : IProductsState => {
    switch(action.type) {
        case ActionTypes.fetchProducts: {
            return {...state, products: action.payload, loading: false}
        }
        case ActionTypes.fetchProductsFail: {
            return {...state, error: action.payload}
        }
        case ActionTypes.fetchProduct: {
            return {...state, product: action.payload, loading: false}
        }
        default: 
            return state
    }
};