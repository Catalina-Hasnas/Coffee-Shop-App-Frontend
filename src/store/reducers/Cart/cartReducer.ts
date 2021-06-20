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
    var orderItems = [...state.orderItems];
    switch(action.type) {
        case ActionTypes.addToCart: {
            var existingItem = state.orderItems.find((item) => item.id === action.payload.id)
            
            if (existingItem) {
                var existingItemIndex: number = orderItems.findIndex(item => item.id === action.payload.id);
                var updatedAmount: number = orderItems[existingItemIndex].amount + action.payload.amount;
                if (updatedAmount <= orderItems[existingItemIndex].stock) {
                    orderItems[existingItemIndex].amount = updatedAmount;
                }
                var updatedPrice: number = orderItems[existingItemIndex].unitPrice * orderItems[existingItemIndex].amount;
                orderItems[existingItemIndex].totalPrice = updatedPrice;
            } else {
                orderItems = [...state.orderItems, action.payload];
            }
            localStorage.setItem('orderItems', JSON.stringify(orderItems));
            console.log({...state, orderItems: orderItems});
            return {...state, orderItems: orderItems}
        }
        case ActionTypes.updateCart: {
            var orderItemIndex: number = orderItems.findIndex(item => item.id === action.payload.id);
            if (action.payload.amount <= orderItems[orderItemIndex].stock) {
                orderItems[orderItemIndex].amount = action.payload.amount;
            }
            orderItems[orderItemIndex].totalPrice = orderItems[orderItemIndex].unitPrice * action.payload.amount;

            if (orderItems[orderItemIndex].amount <= 0) {
                orderItems.splice(orderItemIndex,1);
            }

            if (orderItems.length === 0) {
                localStorage.clear();
            } else {
                localStorage.setItem('orderItems', JSON.stringify(orderItems));
            }
            console.log({...state, orderItems: orderItems});
            return {...state, orderItems: orderItems}
        }
        default: 
            return state
    }
};