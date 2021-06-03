import axios from '../../services/api';
import React, { Fragment, useState } from "react";
import Form from './Form';
import { FormTypes } from './formTypes';

const AddProduct = (): JSX.Element => {

    interface product {
        title: string,
        amount: number,
        price: number,
        categoryId: number,
        image: string
    }

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [amount, setAmount] = useState("");
    const [price, setPrice] = useState("");
    const [categoryId, setCategoryId] = useState("");

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
      ): Promise<void> => {
        e.preventDefault();
        
        let product: product = {
            title: title,
            amount: parseInt(amount),
            price: parseInt(price),
            categoryId: parseInt(categoryId),
            image: image
        }
        axios.post( '/products', product )
            .then( response => {
               console.log(response)
            } )
            .catch( error => {
                console.log(error)
            } );

    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-200 text-gray-800">
            <Form type = {FormTypes.create} />
        </div>
    );
}

export default AddProduct;