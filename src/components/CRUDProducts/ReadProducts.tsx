import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import IProduct from '../../types/IProduct';
import { IRootState } from '../../index';

import ProductList from '../ProductList/ProductList';
import { Link } from "react-router-dom";
import { isPropertySignature } from "typescript";
import { useThunkDispatch } from "../../store/hooks";
import { getAllProducts } from "../../store/actions/Products";

const ReadProducts = (props: any): JSX.Element => {

    
    const dispatch = useThunkDispatch();

    const products = useSelector<IRootState, IProduct[]>(state => state.products.products); 
    const product = useSelector<IRootState, IProduct>(state => state.products.product);
    
    useEffect(() => {
        dispatch(getAllProducts());
        console.log(props.location.pathname);
        console.log(product);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col justify-items-center items-center">
            <Link to="/backoffice/add" className="bg-secondary text-primaryLight font-bold py-2 px-4 rounded-sm m-5"> Add New Product </Link>
            <ProductList products = {products}
                        environment = {props.location.pathname} />
        </div>
    )
}
export default ReadProducts;