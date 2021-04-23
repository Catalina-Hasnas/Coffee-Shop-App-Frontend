import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../store/actions/index';
import { IRootState } from '../index';
import { useThunkDispatch } from '../store/hooks';
import { useSelector, useDispatch } from "react-redux";
import IProduct from '../types/IProduct';
import Loading from '../components/UI/Loading';
import NavBar from '../components/Header/NavBar';
import { productsReducer } from '../store/reducers/productsReducer';

const ProductPage = (): JSX.Element => {

    const dispatch = useThunkDispatch();
    const product = useSelector<IRootState, IProduct>(state => state.products.product);  
    const loading = useSelector<IRootState, boolean>(state => state.products.loading);  

    interface ParamTypes {
        id: string
    }

    let {id} = useParams<ParamTypes>();

    useEffect(() => {
        dispatch(getProductById(id));
    }, []);

    return (

        <div className="bg-bg">
            <NavBar/>
            {!loading? (
                <div>
                    {product.title}
                </div>
            ) : <Loading/>}
            
            
        </div>
    )
    
}

export default ProductPage;