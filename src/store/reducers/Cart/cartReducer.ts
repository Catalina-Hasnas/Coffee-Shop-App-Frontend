import IOrderItem from '../../../types/IOrderItem';
import { ActionTypes }  from '../../actions/actionTypes';
import { Action } from '../../actions/Action';

export interface ICartState {
    orderItems: IOrderItem [],
}

var existingInfo =  localStorage.getItem('orderItems');

const initialState = {
    orderItems: existingInfo? JSON.parse(existingInfo) : []
}

export const cartReducer = (state: ICartState = initialState, action: Action) : ICartState => {
    switch(action.type) {
        case ActionTypes.addToCart: {
            var item = state.orderItems.find((item) => item.id === action.payload.id)
            var orderItems: IOrderItem [] = [];
            if (item) {
                var existingItemIndex = state.orderItems.findIndex(item => item.id === action.payload.id);
                orderItems = [...state.orderItems];
                orderItems[existingItemIndex].amount++;
            } else {
                orderItems = [...state.orderItems, action.payload];
            }
            
            localStorage.setItem('orderItems', JSON.stringify(orderItems));
            console.log(localStorage);
            console.log({...state, orderItems: orderItems});
            return {...state, orderItems: orderItems}
        }
        default: 
            return state
    }
};