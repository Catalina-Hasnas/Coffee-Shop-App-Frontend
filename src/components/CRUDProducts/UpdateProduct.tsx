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

            <div className="max-w-7xl mx-auto mt-5">

            {product.id != 0? (
                <Form 
                id = {product.id}
                title = {product.title}
                amount = {product.amount}
                price = {product.price}
                categoryId = {product.category?.id}
                image = {product.image}
                />
            ): null}

                
            
            </div>

        ) : <Loading/> }

        </Fragment>
    )
}

export default UpdateProduct;