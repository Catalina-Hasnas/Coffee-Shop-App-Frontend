import IProduct from '../../types/IProduct';
import { IProductsState } from '../reducers/productsReducer';
import { ActionTypes } from './actionTypes';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../services/api';

export type Action = { type: ActionTypes; payload?: any };

const fetchProducts = (products: IProduct []): Action => ({
    type: ActionTypes.fetchProducts,
    payload: products
})

const fetchProductsFail = (error: any): Action => ({
    type: ActionTypes.fetchProductsFail,
    payload: error
})

export const getAllProducts: ActionCreator<
  ThunkAction<Promise<any>, IProductsState, null, Action>
> = () => {
  return async (dispatch: Dispatch) => {
    axios.get('/products.json')
        .then(res => {
            var products: IProduct [] = [];
            for (let key in res.data) {
                products.push({
                    ...res.data[key],
                    id: key
                });
            }
            console.log(products);
            dispatch(fetchProducts(products));
        } )
        .catch( error => {
            console.log(error)
            dispatch(fetchProductsFail(error))
        } );
    }
}