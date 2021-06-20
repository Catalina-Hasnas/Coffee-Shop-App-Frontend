import React, { Fragment } from 'react';
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

const ProductCard = (props: IProductCardProps): JSX.Element => {

    const dispatch = useDispatch()

    const linkTo = props.environment?.includes("/backoffice") ? (
        <Link to={`/backoffice/update/${props.id}`}>
            <div className="text-center my-3 p-3 border-t border-b border-secondary bg-transparent text-primary tracking-widest hover:bg-secondary hover:text-primaryLight transition ease-out duration-200">
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
                    unitPrice: props.promotion != null ? props.price - props.promotion.discount : props.price,
                    image: props.image,
                    title: props.title,
                    totalPrice: props.promotion != null ? props.price - props.promotion.discount : props.price,
                    stock: props.stock
                }
            })}
                className="font-bold text-center p-3 border-t border-b border-secondary bg-transparent text-primary tracking-widest hover:bg-secondary hover:text-primaryLight transition ease-out duration-200">
                Add to cart
            </div>
        </Link>
    )

    return (
        <div className="relative w-64 rounded overflow-hidden shadow-lg border-l border-r border-t border-secondary">
            <Link to={`/products/${props.id}`}>
                <img className="w-full h-72" src={props.image} alt={props.title} />

                {props.promotion? <div className="bg-secondary p-2 top-px left-32 rounded-md text-primaryLight text-xs my-2 absolute"> {props.promotion.promotionalText} </div> : <div></div> }

                <div className="px-6 py-4 text-center border-t border-secondary">
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                    
                    {props.promotion ? (
                        <Fragment>
                            <span className="text-sm mr-1 text-gray-500"> {props.price} </span>
                            <span className="rounded-md bg-secondary p-1 text-primaryLight tracking-wide text-lg ">{(props.price - props.promotion.discount).toFixed(2)} $</span>
                        </Fragment>
                    ) : <span className="rounded-sm text-primary tracking-wide text-lg">{props.price} $</span>}
                </div>
                
            </Link>
        
            {linkTo}
            
        </div>
        
    )
}

export default ProductCard;

