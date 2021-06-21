import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../store/actions/actionTypes';


interface IProductCardProps {
    id: number,
    amount: number,
    image: string,
    totalPrice: number,
    unitPrice: number,
    title: string,
    stock: number,
}

const OrderItem = (props: IProductCardProps): JSX.Element => {

    const [amount, setAmount] = useState(props.amount);
    const dispatch = useDispatch();

    const verifyStock = (quantity: number) => {
        if (quantity <= props.stock || quantity === 0) {
            setAmount(quantity)
        }   
    }

    const disableButton = () => {
        if (amount >= props.stock) {
            return true
        } else {
            return false
        }
    }

    const toFixed = (price: number) => price.toFixed(2);

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
            // eslint-disable-next-line react-hooks/exhaustive-deps
        })}, [amount]);

    return (
        <div className="flex items-center justify-around hover:bg-gray-100 -mx-8 px-6 py-5 text-primary">
            <div className="flex items-center w-2/6"> 
                <div className="">
                    <img  src={props.image} alt={props.title} />
                </div>
                <div className="flex flex-col ml-4 md:scale-100">

                    <span className="font-bold md:text-md w-32">{props.title}</span>
                    
                    
                </div>
            </div>

            { amount === props.stock? <p className="text-xs hidden md:block w-1/6">There are only {props.stock} products left in stock.</p> : null }
            
            <div className="flex flex-col items-center md:flex-row md:justify-center w-1/6">

                <input type="button" value="+" className="px-2 bg-transparent border-secondary rounded-sm border" disabled={disableButton()} onClick={() => setAmount(amount + 1)}/>
                    
                <input className="mx-2 my-2 md:my-0 border text-center w-8" type="text" value={amount > props.stock ? props.stock : amount} onChange={e => verifyStock(parseInt(e.target.value))} />

                <input type="button" value="-" className="px-2 bg-transparent border-secondary rounded-sm border" onClick={() => setAmount(amount - 1)}/>
                
            </div>

            <span className="text-center w-1/6 font-semibold text-sm">{toFixed(props.unitPrice)}$</span>
            <span className="text-center w-1/6 font-semibold text-sm">{toFixed(props.totalPrice)}$</span>

            <div className="w-1/6 flex justify-center items-center">

                <button onClick={() => dispatch({ 
                                type: ActionTypes.updateCart, 
                                payload: {
                                    id: props.id, 
                                    amount: 0, 
                                    totalPrice: props.totalPrice,
                                    unitPrice: props.unitPrice,
                                    image: props.image,
                                    title: props.title} 
                                })} 
                            className="w-1/2 rounded-sm font-semibold p-2 bg-secondary text-primaryLight text-xs transform scale-90 md:scale-100">
                            Remove
                </button>

            </div>

        </div>
    );
}

export default OrderItem;