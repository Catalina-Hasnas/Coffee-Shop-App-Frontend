import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../store/actions/Products/index';
import { IRootState } from '../index';
import { useThunkDispatch } from '../store/hooks';
import { useSelector, useDispatch } from "react-redux";
import IProduct from '../types/IProduct';
import Loading from '../components/UI/Loading';
import NavBar from '../components/Header/NavBar';
import ICategory from '../types/ICategory';
import { ActionTypes } from '../store/actions/actionTypes';

const ProductPage = (): JSX.Element => {

    const dispatchThunk = useThunkDispatch();
    const dispatch = useDispatch();
    const product = useSelector<IRootState, IProduct>(state => state.products.product);  
    const loading = useSelector<IRootState, boolean>(state => state.products.loading);  
    const categories = useSelector<IRootState, ICategory[]>(state => state.categories.categories);

    const [amount, setAmount] = useState(1);

    interface ParamTypes {
        id: string
    }

    let {id} = useParams<ParamTypes>();

    useEffect(() => {
        dispatchThunk(getProductById(id));
    }, []);

    return (

        <div>
            <NavBar categories = {categories}/>
            {!loading? (
                <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-5 font-sans ">
                    <img className="w-2/4 h-auto" src={product.image} alt={product.title} />
                    <p className="my-3 text-lg font-semibold tracking-wide"> {product.title} </p>
                    <p className="w-2/4"> {product.price} </p>
                    <button onClick={() => dispatch({ 
                                                type: ActionTypes.addToCart, 
                                                payload: {
                                                    id: product.id, 
                                                    amount: amount > 0 ? amount : 1, 
                                                    unitPrice: product.price,
                                                    totalPrice: product.price * amount,
                                                    image: product.image,
                                                    title: product.title} 
                                                })}
                            className="p-3 bg-secondary text-primaryLight tracking-wider">
                        Add to cart            
                    </button>

                    <p> Quantity: {amount} </p>

                    <button onClick={() => setAmount(amount + 1)}>
                        +
                    </button>

                    <button onClick={() => setAmount(amount - 1)}>
                        -
                    </button>

                    <Link to="/cart"> View the cart </Link>

                </div>
            ) : <Loading/>}
            
            
        </div>
    )
    
}

export default ProductPage;