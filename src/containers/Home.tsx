import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import IProduct from '../types/IProduct';
import { getAllProducts } from '../store/actions/index';
import { IRootState } from '../index';
import Header from '../components/Header/Header';
import NavBar from '../components/Header/NavBar';
import ProductsList from '../components/ProductList/ProductList';
import Loading from '../components/UI/Loading';
import { useThunkDispatch } from '../store/hooks';

const Home = (): JSX.Element => {

    const dispatch = useThunkDispatch();
    const products = useSelector<IRootState, IProduct[]>(state => state.products.products);  
    const loading = useSelector<IRootState, boolean>(state => state.products.loading);  

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    let productList = loading ? <Loading/> : <ProductsList products = {products}/>

    return (

        <div className="bg-bg">
            <NavBar/>
            <Header/>
            {productList}
        </div>
    )
    
}

export default Home;