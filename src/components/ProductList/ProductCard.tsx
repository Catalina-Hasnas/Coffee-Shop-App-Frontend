import React, {Fragment} from 'react';
import IProduct from '../../types/IProduct';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { ActionTypes } from '../../store/actions/actionTypes';


interface IProductCardProps {
    id: number,
    title: string,
    image: string,
    price: number,
    environment?: string
}

const ProductCard = (props:IProductCardProps): JSX.Element => {
    
const dispatch = useDispatch()

const linkTo = props.environment?.includes("/backoffice") ? (
    <Link to={`/backoffice/update/${props.id}`}>
        <div className="my-3 p-3 border-t-2 border-b-2 border-secondary bg-transparent text-primary tracking-widest hover:bg-secondary hover:text-primaryLight transition ease-out duration-200">
            Update Product           
        </div>
    </Link>

) : (

    <Link to="/">
        <div onClick={() => dispatch({ 
                                    type: ActionTypes.addToCart, 
                                    payload: {
                                            id: props.id, 
                                            amount: 1, 
                                            unitPrice: props.price,
                                            image: props.image,
                                            title: props.title,
                                            totalPrice: props.price
                                            } })}
                className="my-3 p-3 border-t-2 border-b-2 border-secondary bg-transparent text-primary tracking-widest hover:bg-secondary hover:text-primaryLight transition ease-out duration-200">
            Add to cart            
        </div>
    </Link>
)

    return (
        <Fragment>
            <Link to={`/${props.id}`}>
                <div className="bg-bg rounded-sm border-secondary text-center w-60 overflow-hidden">
                
                    <div className="w-60 h-full">
                        <img src={props.image} />
                    </div>
                

                    <div className="mt-3">
                        <p className="mb-3 tracking-wider">{props.title}</p>
                        <span className="rounded-sm text-primary tracking-wide text-lg">{props.price} $</span>
                    </div>

                    {linkTo}

                </div>
            </Link>
        </Fragment>
    )
}

export default ProductCard;

