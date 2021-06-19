import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import { fetchProductsFail, getProductById } from '../store/actions/Products/index';
import { IRootState } from '../index';
import { useThunkDispatch } from '../store/hooks';
import { useSelector, useDispatch } from "react-redux";
import IProduct from '../types/IProduct';
import Loading from '../components/UI/Loading';
import NavBar from '../components/Header/NavBar';
import ICategory from '../types/ICategory';
import { ActionTypes } from '../store/actions/actionTypes';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import IOrderItem from '../types/IOrderItem';

const ProductPage = (): JSX.Element => {

    const dispatchThunk = useThunkDispatch();
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector<IRootState, IProduct>(state => state.products.product);  
    const loading = useSelector<IRootState, boolean>(state => state.products.loading);  
    const orderItems = useSelector<IRootState, IOrderItem[]>(state => state.cart.orderItems);
    const fetchingError = useSelector<IRootState, any>(state => state.products.error);  
    const [amount, setAmount] = useState(1);
    interface ParamTypes {
        id: string
    }

    let {id} = useParams<ParamTypes>();
    useEffect(() => {
        dispatchThunk(getProductById(id));
    }, []);

    if (fetchingError) {
        const location = {
            pathname: '/error/404'
        }
        history.push(location);
    }
    let navBar = orderItems ? <NavBar orderItemsLength = {orderItems.length} /> : <NavBar />

    return (

        <Fragment>
            {navBar}
            {!loading? (
                <div className="max-w-7xl mx-auto mt-5">
                    <div className="container mx-auto px-6">
                        <div className="md:flex md:items-center">
                            <div className="w-full h-64 md:w-1/2 lg:h-96">
                                <img className="h-full w-full rounded-sm object-cover max-w-lg mx-auto" src={product.image} alt={product.title}/>
                            </div>

                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 flex flex-col items-center">
                                <h3 className="uppercase text-lg">{product.title}</h3>
                                <span className="mt-3">{product.price}$</span>
                                <hr className="my-3"/>
                                <div className="mt-2 flex flex-col items-center">
                                    <p className="my-2"> Quantity: {amount} </p>
                                    <div className="flex mt-1">
                                        <button className="px-2 mr-3 border-secondary rounded-sm border" onClick={() => setAmount(amount + 1)}>
                                            +
                                        </button>
                                        
                                        <button className="px-2 border-secondary rounded-sm border" onClick={() => setAmount(amount - 1)}>
                                            -
                                        </button>
                                    </div>

                                    <div className="flex items-end mt-3">
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
                                                    className="mr-2 p-3 rounded-sm bg-secondary text-primaryLight tracking-wider">
                                                Add to cart            
                                            </button>

                                            <Link to="/cart">
                                            <button className="rounded-sm focus:outline-none focus:ring-1 focus:ring-secondary focus:ring-opacity-25">
                                                <ShoppingCartIcon className="h-9 w-9 text-secondary" aria-hidden="true" />
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            ) : <Loading/>}
            
            
        </Fragment>
    )
    
}

export default ProductPage;