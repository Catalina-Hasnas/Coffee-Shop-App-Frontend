import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import IProduct from '../../types/IProduct';
import { IProductsState } from '../../store/reducers/productsReducer';
import axios from 'axios';
import { fetchProducts } from '../../store/actions/index';
import { IRootState } from '../../index';

const url = "https://amdaris-ecommerce-default-rtdb.firebaseio.com/";



const Home = (): JSX.Element => {

    const dispatch = useDispatch();

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
            } );
    }

    const products = useSelector<IRootState, IProduct[]>(state => state.products.products);

    const numbersArr = [1,2,3,4];
      

    useEffect(() => {
        onFetchProducts();
        console.log(products);
        }, []);

    return (
        <div>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                </li>
            ))}

            
            {numbersArr.map(product => (
                <span>{product}</span>
            ))
            }
        </div>
    )
    
}

export default Home;