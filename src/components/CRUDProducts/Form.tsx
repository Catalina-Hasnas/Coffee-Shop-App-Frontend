import axios from '../../services/api';
import React, { Fragment, useEffect, useState } from 'react';
import { FormTypes } from './formTypes';
import { useFormik } from 'formik';


interface FormProps {
    type: FormTypes
    productId?: number,
    title?: string,
    amount?: number,
    price?: number,
    categoryId?: number,
    image?: string,
}

interface product {
    id: number,
    title: string,
    amount: number,
    price: number,
    categoryId: number,
    image: string
}

const Form = (props: FormProps): JSX.Element => {

    useEffect(() => {
        console.log(props)
    }, []);

    const [title, setTitle] = useState(props.title);
    const [image, setImage] = useState(props.image);
    const [amount, setAmount] = useState(props.amount);
    const [price, setPrice] = useState(props.price);
    const [categoryId, setCategoryId] = useState(props.categoryId);

    // const handleSubmit = async (
    //     e: React.FormEvent<HTMLFormElement>
    // ): Promise<void> => {
    //     e.preventDefault();

    //     let updatedProduct: product = {

    //         id: props.id,
    //         title: title || props.title,
    //         amount: amount || props.amount,
    //         price: price || props.price,
    //         categoryId: categoryId || props.categoryId,
    //         image: image || props.image
    //     }

    //     axios.put("/products/" + props.id, updatedProduct)
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         });
    // }

    const formik = useFormik({

        initialValues: {
            title: (props.type == FormTypes.update? props.title : ""),
            amount: (props.type == FormTypes.update? props.amount : ""),
            price: (props.type == FormTypes.update? props.price : ""),
            categoryId: (props.type == FormTypes.update? props.categoryId : ""),
            image: (props.type == FormTypes.update? props.image : "")
        },
   
        onSubmit: values => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
   
      });

      const formType = props.type == FormTypes.create? <h2 className="text-2xl font-bold leading-none mt-2"> Create Product </h2> : <h2 className="text-2xl font-bold leading-none mt-2"> Update Product </h2>
   
      return (
   
        <form className="max-w-sm w-full rounded-lg shadow-md p-5 bg-white" onSubmit={formik.handleSubmit}>
            {formType}
            <div className="my-4"> 
                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    className="border rounded outline-none p-1 bg-gray-100 focus:bg-primary"
                />
                <label className="font-semibold" htmlFor="amount">Quantity</label>
                <input
                    id="amount"
                    name="amount"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.amount}
                    className="border rounded outline-none p-1 bg-gray-100 focus:bg-indigo-100"
                />
                <label className="font-semibold" htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    className="border rounded outline-none p-1 bg-gray-100 focus:bg-indigo-100"
                />
                <label className="font-semibold" htmlFor="categoryId">Category Id</label>
                <input
                    id="categoryId"
                    name="categoryId"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.categoryId}
                    className="border rounded outline-none p-1 bg-gray-100 focus:bg-indigo-100"
                />
                <label className="font-semibold" htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                    className="border rounded outline-none p-1 bg-gray-100 focus:bg-indigo-100"
                />
                <button className="text-lg tracking-wide px-6 py-1 outline-none rounded bg-secondary text-white hover:bg-blue-800" type="submit">Submit</button>
            </div>
            </div>
   
        </form>
   
      );
   
    };

    // return (
    //     <Fragment>
            {/* <form>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3"> */}

                                {/* <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Country / Region
                                                </label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country"
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div> */}

                                {/* <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="title" className="block text-sm font-medium text-primary-700">
                                        Title:
                                                <input
                                            name="title"
                                            type="text"
                                            defaultValue={props.title}
                                            className="mt-1 block w-full shadow-sm sm:text-sm border rounded-md"
                                            onChange={(
                                                ev: React.ChangeEvent<HTMLInputElement>,
                                            ): void => setTitle(ev.target.value)} />
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="amount" className="block text-sm font-medium text-primary-700">
                                        Amount
                                                <input
                                            type="number"
                                            name="amount"
                                            defaultValue={props.amount}
                                            className="mt-1 block w-full shadow-sm sm:text-sm border rounded-md"
                                            onChange={(
                                                ev: React.ChangeEvent<HTMLInputElement>,
                                            ): void => setAmount(parseInt(ev.target.value))} />
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="price" className="block text-sm font-medium text-primary-700">
                                        Price
                                                <input
                                            type="number"
                                            defaultValue={props.price}
                                            className="mt-1 block w-full shadow-sm sm:text-sm border rounded-md"
                                            onChange={(
                                                ev: React.ChangeEvent<HTMLInputElement>,
                                            ): void => setPrice(parseInt(ev.target.value))} />
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="image" className="block text-sm font-medium text-primary-700">
                                        Image:
                                                <input
                                            name="image"
                                            type="text"
                                            defaultValue={props.image}
                                            className="mt-1 block w-full shadow-sm sm:text-sm border rounded-md"
                                            onChange={(
                                                ev: React.ChangeEvent<HTMLInputElement>,
                                            ): void => setImage(ev.target.value)} />
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="categoryId" className="block text-sm font-medium text-primary-700">
                                        Category Id
                                                <input
                                            type="number"
                                            name="categoryId"
                                            defaultValue={props.categoryId}
                                            className="mt-1 block w-full shadow-sm sm:text-sm border rounded-md"
                                            onChange={(
                                                ev: React.ChangeEvent<HTMLInputElement>,
                                            ): void => setCategoryId(parseInt(ev.target.value))} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update Product
                                </button>
                    </div>
                </div>
            </form> */}
        // </Fragment>

    //)

export default Form;