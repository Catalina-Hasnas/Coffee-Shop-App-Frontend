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
import IOrderItem from '../types/IOrderItem';

const Home = (): JSX.Element => {

    const dispatch = useThunkDispatch();
    const products = useSelector<IRootState, IProduct[]>(state => state.products.products);  
    const loading = useSelector<IRootState, boolean>(state => state.products.loading);  
    const orderItems = useSelector<IRootState, IOrderItem[]>(state => state.cart.orderItems);
    

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllCategories());
        console.log(orderItems.length)
    }, []);

    let productList = loading ? null : <ProductsList products = {products}/>
    let header = loading ? <Loading/> : <Header />
    let navBar = orderItems ? <NavBar orderItemsLength = {orderItems.length} /> : <NavBar />

    return (

        <div className="bg-bg">
            {navBar}
            {header}
            {productList}
        </div>
    )
    
}

export default Home;