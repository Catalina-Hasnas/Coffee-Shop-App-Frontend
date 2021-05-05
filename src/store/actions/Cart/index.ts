import IOrderItem from '../../../types/IOrderItem';
import { IProductsState } from '../../reducers/Products/productsReducer';
import { ActionTypes } from '../actionTypes';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../../services/api';
import { Action }  from '../Action';

export const addToCart = (orderItem: IOrderItem): Action => ({
    type: ActionTypes.addToCart,
    payload: orderItem
})