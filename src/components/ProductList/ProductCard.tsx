import React, {Fragment} from 'react';
import IProduct from '../../types/IProduct';
import { Link } from 'react-router-dom';

interface IProductCardProps {
    id: number,
    title: string,
    image: string,
    price: string
}

const ProductCard = (props:IProductCardProps): JSX.Element => {

    return (
        <Fragment>
            <Link to={`/${props.id}`}>
                <div className="bg-bg rounded-sm shadow-md text-center w-60">
                    <div className="w-60 h-full">
                        <img src={props.image} />
                    </div>

                    <div className="mt-10">
                        <p>{props.title}</p>
                        <p>{props.price}</p>
                    </div>
                </div>
            </Link>
        </Fragment>
    )
}

export default ProductCard;

