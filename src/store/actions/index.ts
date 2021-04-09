import IProduct from '../../types/IProduct';
import { ActionTypes } from './actionTypes';
import axios from 'axios';
import { applyMiddleware, Dispatch } from 'redux';

export type Action = { type: ActionTypes; payload?: any };


const url = "https://amdaris-ecommerce-default-rtdb.firebaseio.com/products.json";

export const fetchProducts = (products: IProduct []): Action => ({
    type: ActionTypes.fetchProducts,
    payload: products
})

export const fetchProductsFail = (error: any): Action => ({
    type: ActionTypes.fetchProductsFail,
    payload: error
})

// export const fetchProducts = () => {
//     return (dispatch: Dispatch) => {
        
//         axios.get(url)
//         .then(res => {
//             var products: IProduct [] = [];
//             for (let key in res.data) {
//                 products.push({
//                     ...res.data[key],
//                     id: key
//                 });
//             }
//             dispatch({
//                 type: ActionTypes.fetchProducts,
//                 payload: products
//             })
//         } )
//         .catch( error => {
//             dispatch({
//                 type: ActionTypes.fetchProducts,
//                 payload: error 
//             })
//         } );
        
//     }
// }