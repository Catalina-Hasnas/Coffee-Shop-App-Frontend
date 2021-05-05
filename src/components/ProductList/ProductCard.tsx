import React, {Fragment} from 'react';
import IProduct from '../../types/IProduct';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { ActionTypes } from '../../store/actions/actionTypes';


interface IProductCardProps {
    id: number,
    title: string,
    image: string,
    price: number
}

const ProductCard = (props:IProductCardProps): JSX.Element => {
    
const dispatch = useDispatch()

    return (
        <Fragment>
            <Link to={`/${props.id}`}>
                <div className="bg-bg rounded-sm shadow-md text-center w-60">
                    <div className="w-60 h-full">
                        <img src={props.image} />
                    </div>

                    <div className="mt-10">
                        <p>{props.title}</p>
                        <p>{props.price}</p>
                    </div>
                    <button onClick={() => dispatch({ type: ActionTypes.addToCart, payload: {id: props.id, amount: 1, price: props.price} })}
                            className="p-3 bg-secondary text-primaryLight tracking-wider">
                        Add to cart            
                    </button>
                </div>
            </Link>
        </Fragment>
    )
}

export default ProductCard;

