import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import IProduct from '../../types/IProduct';
import { IRootState } from '../../index';

import ProductList from '../ProductList/ProductList';
import { Link } from "react-router-dom";
import { useThunkDispatch } from "../../store/hooks";
import { getAllProducts } from "../../store/actions/Products";

const ReadProducts = (props: any): JSX.Element => {

    
    const dispatch = useThunkDispatch();

    const products = useSelector<IRootState, IProduct[]>(state => state.products.products); 
    
    useEffect(() => {
        dispatch(getAllProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col justify-items-center items-center relative">
            <Link className="absolute left-6 top-6" to="/">
                        <button className="p-3 bg-secondary hidden md:block">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path className="text-gray-50" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </button>
                    </Link>
            <Link to="/backoffice/add" className="bg-secondary text-primaryLight font-bold py-2 px-4 rounded-sm m-5"> Add New Product </Link>
            <ProductList products = {products}
                        environment = {props.location.pathname} />
        </div>
    )
}
export default ReadProducts;