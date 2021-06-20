import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IRootState } from '../index';
import { useThunkDispatch } from '../store/hooks';
import { useSelector } from "react-redux";
import Loading from '../components/UI/Loading';
import NavBar from '../components/Header/NavBar';
import ICategory from '../types/ICategory';
import { getCategoryById } from '../store/actions/Categories';
import ProductsList from '../components/ProductList/ProductList';
import IOrderItem from '../types/IOrderItem';

const CategoriesPage = (): JSX.Element => {

    const dispatch = useThunkDispatch();
    const loading = useSelector<IRootState, boolean>(state => state.categories.loading);  
    const category =  useSelector<IRootState, ICategory>(state => state.categories.category);
    const orderItems = useSelector<IRootState, IOrderItem[]>(state => state.cart.orderItems);

    interface ParamTypes {
        categoryId: string
    }

    let {categoryId} = useParams<ParamTypes>();

    useEffect(() => {
        dispatch(getCategoryById(categoryId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId]);

    let productList = loading ? <Loading/> : <ProductsList products = {category.products}/>

    return (

        <div>
            <NavBar orderItemsLength = {orderItems.length}/>
            <div className="mt-6">
                {productList}
            </div>
        </div>
    )
    
}

export default CategoriesPage;