import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { ActionTypes } from '../../store/actions/actionTypes';


interface IProductCardProps {
    id: number,
    title: string,
    image: string,
    price: number,
    environment?: string,
    stock: number,
    promotion?: { 
        id: number, 
        discount: number, 
        promotionalText: string
    }
}

const ProductCard = (props:IProductCardProps): JSX.Element => {
    
const dispatch = useDispatch()

const linkTo = props.environment?.includes("/backoffice") ? (
    <Link to={`/backoffice/update/${props.id}`}>
        <div className="text-center my-3 p-3 border-t-2 border-b-2 border-secondary bg-transparent text-primary tracking-widest hover:bg-secondary hover:text-primaryLight transition ease-out duration-200">
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
                                            unitPrice: props.promotion != null? props.price - props.promotion.discount : props.price,
                                            image: props.image,
                                            title: props.title,
                                            totalPrice: props.promotion != null? props.price - props.promotion.discount : props.price,
                                            stock: props.stock
                                            } })}
                className="my-3 p-3 border-t-2 border-b-2 border-secondary bg-transparent text-primary tracking-widest hover:bg-secondary hover:text-primaryLight transition ease-out duration-200">
            Add to cart            
        </div>
    </Link>
)

    return (
        <div>
            <Link to={`/products/${props.id}`}>
                <div className="bg-bg rounded-sm border-secondary text-center w-60 overflow-hidden relative">
                
                    <div className="w-60 h-full">
                        <img src={props.image} alt={props.title} />
                    </div>
                    {props.promotion? <div className="bg-secondary p-2 top-px left-32 rounded-md text-primaryLight text-xs my-2 absolute"> {props.promotion.promotionalText} </div> : <div></div>}

                    <div className="mt-3">
                        <p className="mb-3 tracking-wider">{props.title}</p>
                        {props.promotion? (
                            <Fragment>
                                <span className="text-sm mr-1 text-gray-500"> {props.price} </span>
                                <span className="rounded-md bg-secondary p-1 text-primaryLight tracking-wide text-lg">{(props.price-props.promotion.discount).toFixed(2)} $</span>
                            </Fragment>
                        ) :
                            <span className="rounded-sm text-primary tracking-wide text-lg">{props.price} $</span>}
                    </div>
                </div>
            </Link>
            
            {linkTo}
            
        </div>
    )
}

export default ProductCard;

