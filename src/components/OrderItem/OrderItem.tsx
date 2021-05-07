import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../store/actions/actionTypes';


interface IProductCardProps {
    id: number,
    amount: number,
    image: string,
    totalPrice: number,
    unitPrice: number,
    title: string
}

const OrderItem = (props: IProductCardProps): JSX.Element => {

    const [amount, setAmount] = useState(props.amount);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ 
            type: ActionTypes.updateCart, 
            payload: {
                id: props.id, 
                amount: amount, 
                totalPrice: props.totalPrice,
                unitPrice: props.unitPrice,
                image: props.image,
                title: props.title} 
        })}, [amount]);

    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 text-primary">
            <div className="flex w-2/5"> 
                <div className="w-25">
                    <img className="h-24" src={props.image} alt={props.title} />
                </div>
                <div className="flex flex-col items-center justify-between ml-4 flex-grow">

                    <span className="font-bold text-lg">{props.title}</span>
                    
                    <button className="rounded-sm font-semibold p-2 bg-secondary text-primaryLight text-xs">Remove</button>
                </div>
            </div>
            <div className="flex justify-center w-1/5">

                <button onClick={() => setAmount(amount + 1)}>
                    +
                </button>

                <input className="mx-2 border text-center w-8" type="text" value={amount} onChange={e => setAmount(parseInt(e.target.value))} />

                <button onClick={() => setAmount(amount - 1)}>
                        -
                </button>
                
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">{props.unitPrice}$</span>
            <span className="text-center w-1/5 font-semibold text-sm">{props.totalPrice}$</span>
        </div>
    );
}

export default OrderItem;