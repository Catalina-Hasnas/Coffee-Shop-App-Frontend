import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import IProduct from '../types/IProduct';
import { getAllProducts } from '../store/actions/Products/index';
import { IRootState } from '../index';
import Header from '../components/Header/Header';
import NavBar from '../components/Header/NavBar';
import ProductsList from '../components/ProductList/ProductList';
import Loading from '../components/UI/Loading';
import { useThunkDispatch } from '../store/hooks';
import ICategory from '../types/ICategory';
import { getAllCategories } from '../store/actions/Categories';

const Home = (): JSX.Element => {

    const dispatch = useThunkDispatch();
    const products = useSelector<IRootState, IProduct[]>(state => state.products.products);  
    const loading = useSelector<IRootState, boolean>(state => state.products.loading);  
    const categories = useSelector<IRootState, ICategory[]>(state => state.categories.categories);
    //const loadingCategories = useSelector<IRootState, boolean>(state => state.categories.loading);  

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllCategories());
    }, []);

    let productList = loading ? null : <ProductsList products = {products}/>
    let header = loading ? <Loading/> : <Header />

    return (

        <div className="bg-bg">
            <NavBar categories = {categories}/>
            {header}
            {productList}
        </div>
    )
    
}

export default Home;