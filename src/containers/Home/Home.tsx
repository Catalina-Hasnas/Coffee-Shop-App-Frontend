import React, { useState, useEffect } from 'react';
import IProduct from '../../types/IProduct';
//import api from '../../services/api';
import axios from 'axios';

const Home = (): JSX.Element => {

    const [products, setProducts] = useState<IProduct []>([]);

    function fetchProducts() {
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
                setProducts(products);
            } )
            .catch( error => {
                console.log(error);
            } );
    }

    useEffect( () => {
        fetchProducts()
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
        </div>
    )
    
}

export default Home;