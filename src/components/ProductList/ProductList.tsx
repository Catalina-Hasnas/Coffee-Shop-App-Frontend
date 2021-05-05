import React, {Fragment} from 'react';
import IProduct from '../../types/IProduct';
import ProductCard from './ProductCard';

interface IProductListProps {
    products: IProduct [];
}

const ProductList = (props:IProductListProps): JSX.Element => {

    return (
        <Fragment>
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid justify-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    
                    {props.products.map((product) => {
                        
                        return (
                            <ProductCard key={product.id}
                                id = {product.id}
                                title = {product.title}
                                image = {product.image}
                                price = {product.price}
                            />
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default ProductList;

