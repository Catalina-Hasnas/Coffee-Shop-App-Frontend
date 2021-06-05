import axios from '../../services/api';
import React, { Fragment, useState } from "react";
import Form from './Form';
import { FormTypes } from './formTypes';
import { Link } from 'react-router-dom';

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

    return (
        <div className="bg-gray-200">
            <Link to="/backoffice">
                <button className="p-3 bg-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path className="text-gray-50" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                </button>
            </Link>
            <div className="min-h-screen flex justify-center items-center bg-gray-200 text-gray-800">
            <Form type = {FormTypes.create} />
        </div>
        </div>
        
    );
}

export default AddProduct;