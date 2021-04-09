import React, {Fragment} from 'react';
import IProduct from '../../types/IProduct';
import { useSelector, useDispatch } from "react-redux";

interface IProductListProps {
    products: IProduct [];
}

const ProductList = (props:IProductListProps): JSX.Element => {

    return (
        <Fragment>
            {props.products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                </li>
            ))}
        </Fragment>
    )
}

export default ProductList;