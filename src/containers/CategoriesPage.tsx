import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../store/actions/Products/index';
import { IRootState } from '../index';
import { useThunkDispatch } from '../store/hooks';
import { useSelector, useDispatch } from "react-redux";
import IProduct from '../types/IProduct';
import Loading from '../components/UI/Loading';
import NavBar from '../components/Header/NavBar';
import { productsReducer } from '../store/reducers/Products/productsReducer';
import ICategory from '../types/ICategory';
import { getCategoryById } from '../store/actions/Categories';
import ProductsList from '../components/ProductList/ProductList';

const CategoriesPage = (): JSX.Element => {

    const dispatch = useThunkDispatch();
    const loading = useSelector<IRootState, boolean>(state => state.categories.loading);  
    const categories = useSelector<IRootState, ICategory[]>(state => state.categories.categories);
    const category =  useSelector<IRootState, ICategory>(state => state.categories.category);

    interface ParamTypes {
        categoryId: string
    }

    let {categoryId} = useParams<ParamTypes>();

    useEffect(() => {
        dispatch(getCategoryById(categoryId));
    }, [categoryId]);



    let productList = loading ? <Loading/> : <ProductsList products = {category.products}/>

    return (

        <div>
            <NavBar/>
            {productList}
        </div>
    )
    
}

export default CategoriesPage;