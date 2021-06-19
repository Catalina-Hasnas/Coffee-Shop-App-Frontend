import IProduct from '../../../types/IProduct';
import { IProductsState } from '../../reducers/Products/productsReducer';
import { ActionTypes } from '../actionTypes';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../../services/api';
import { Action }  from '../Action';

const fetchProducts = (products: IProduct []): Action => ({
    type: ActionTypes.fetchProducts,
    payload: products
})

export const fetchProductsFail = (error: any): Action => ({
    type: ActionTypes.fetchProductsFail,
    payload: error
})

const fetchProduct = (product: IProduct): Action => ({
    type: ActionTypes.fetchProduct,
    payload: product
})

export const getAllProducts: ActionCreator<
  ThunkAction<Promise<any>, IProductsState, null, Action>
> = () => {
  return async (dispatch: Dispatch) => {
    axios.get('/products')
        .then(res => {
            var products: IProduct [] = [];
            for (let key in res.data) {
                products.push({
                    ...res.data[key],
                    id: res.data[key].id
                });
            }
            dispatch(fetchProducts(products));
        } )
        .catch( error => {
            dispatch(fetchProductsFail(error.response.data))
        } );
    }
}

export const getProductById: ActionCreator<
  ThunkAction<Promise<any>, IProductsState, null, Action>
> = (id: number) => {
  return async (dispatch: Dispatch) => {
    axios.get(`/products/${id}`)
        .then(res => {
            dispatch(fetchProduct(res.data));
            console.log("from actions")
            console.log(res.data)
        } )
        .catch( error => {
            console.log(error.response.data)
            dispatch(fetchProductsFail(error.response.data))
        } );
    }
}