import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../store/actions/Products/index';
import { IRootState } from '../../index';
import { useThunkDispatch } from '../../store/hooks';
import { useSelector, useDispatch } from "react-redux";
import IProduct from '../../types/IProduct';
import Loading from '../../components/UI/Loading';
import axios from '../../services/api';
import { productsReducer } from '../../store/reducers/Products/productsReducer';
import Form from './Form';
import { ActionTypes } from '../../store/actions/actionTypes';
import { FormTypes } from './formTypes';
import { useFormik } from 'formik';

const UpdateProduct = (): JSX.Element => {

    const product = useSelector<IRootState, IProduct>(state => state.products.product);
    const loading = useSelector<IRootState, boolean>(state => state.products.loading); 

    const dispatchThunk = useThunkDispatch();

    interface ParamTypes {
        id: string
    }

    let { id } = useParams<ParamTypes>();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchThunk(getProductById(id));
        return function cleanup() {
            dispatch({ 
                type: ActionTypes.fetchProduct, 
                payload: []
            })
        }
    },[]);

    
    return (

        <Fragment>

            { !loading? (
                

                <div className="bg-gray-200">
                    <Link to="/backoffice">
                        <button className="p-3 bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path className="text-gray-50" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </button>
                    </Link>
            
                <div className="min-h-screen flex justify-center items-center bg-gray-200 text-gray-800">
                    {product.id != 0? (
                        <Form 
                        productId = {product.id}
                        title = {product.title}
                        amount = {product.amount}
                        price = {product.price}
                        categoryId = {product.category?.id}
                        image = {product.image}
                        type = {FormTypes.update}
                        promotion = {product.promotion}
                        />
                    ): null}
                </div>
            </div>

        ) : <Loading/> }

        </Fragment>
    )
}

export default UpdateProduct;