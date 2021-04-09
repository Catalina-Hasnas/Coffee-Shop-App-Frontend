import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import IProduct from '../../types/IProduct';
import axios from 'axios';
import { fetchProducts } from '../../store/actions/index';
import { fetchProductsFail } from '../../store/actions/index';
import { IRootState } from '../../index';
import Header from '../../components/Header/Header';
import ProductsList from '../../components/ProductList/ProductList';
import Loading from '../../components/UI/Loading';

const Home = (): JSX.Element => {

    const dispatch = useDispatch();
    const products = useSelector<IRootState, IProduct[]>(state => state.products.products);  
    const loading = useSelector<IRootState, boolean>(state => state.products.loading);  

    const onFetchProducts = () => {

        axios({
            method: 'get',
            url: 'https://amdaris-ecommerce-default-rtdb.firebaseio.com/products.json',
            responseType: 'stream'
          })
            .then(res => {
                var products: IProduct [] = [];
                for (let key in res.data) {
                    products.push({
                        ...res.data[key],
                        id: key
                    });
                }
                console.log(products);
                dispatch(fetchProducts(products));
            } )
            .catch( error => {
                console.log(error)
                dispatch(fetchProductsFail(error))
            } );
    }

    useEffect(() => {
        onFetchProducts();
        console.log(products);
    }, []);

    let productList = loading ? <Loading/> : <ProductsList products = {products}/>

    return (

        <div>
            <Header/>
            {productList}
        </div>
    )
    
}

export default Home;