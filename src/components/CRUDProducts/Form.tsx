import axios from '../../services/api';
import React, { Fragment, useEffect, useState } from 'react';
import { FormTypes } from './formTypes';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../store/actions/actionTypes';
import { Formik, Field, Form as FormikForm } from 'formik';
import { Link } from 'react-router-dom';

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
    id?: any,
    title: any,
    amount: any,
    price: any,
    categoryId: any,
    image: any
}

const Form = (props: FormProps): JSX.Element => {

    const formType = props.type == FormTypes.create? <h2 className="text-2xl font-bold leading-none mt-2"> Create Product </h2> : <h2 className="text-2xl font-bold leading-none mt-2"> Update Product </h2>

    return (
        <Fragment>
            <Formik
                enableReinitialize

                initialValues ={{
                    title: props.type == FormTypes.update? props.title : "",
                    amount: props.type == FormTypes.update? props.amount : "",
                    price: props.type == FormTypes.update? props.price : "",
                    categoryId: props.type == FormTypes.update? props.categoryId : "",
                    image: props.type == FormTypes.update? props.image : ""
                }}
                
                onSubmit={async (values) => {
                    if (props.type == FormTypes.update) {
                        let updatedProduct: product = {

                            id: props.productId,
                            title: values.title,
                            amount: values.amount,
                            price: values.price,
                            categoryId: values.categoryId,
                            image: values.image
                        }
                        console.log(updatedProduct);

                        axios.put("/products/" + props.productId, updatedProduct)
                        .then(response => {
                            console.log(response)
                        })
                        .catch(error => {
                            console.log(error)
                        });
                    } else if (props.type == FormTypes.create) {
                        let newProduct: product = {
                            title: values.title,
                            amount: values.amount,
                            price: values.price,
                            categoryId: values.categoryId,
                            image: values.image,
                        }
                        axios.post( '/products', newProduct )
                            .then( response => {
                               console.log(response)
                            } )
                            .catch( error => {
                                console.log(error)
                            } );
                    }
                }}
                >
                <FormikForm className="max-w-sm w-full rounded-sm shadow-md p-5 bg-white">

                    {formType}

                    <div className="my-4"> 
                        <div className="flex flex-col">

                        <label className="font-semibold" htmlFor="title">Title</label>
                        <Field className="border rounded outline-none p-1 bg-gray-100" id="title" name="title"/>

                        <label className="font-semibold" htmlFor="amount">Quantity</label>
                        <Field className="border rounded outline-none p-1 bg-gray-100" id="amount" name="amount"/>

                        <label className="font-semibold" htmlFor="price">Price</label>
                        <Field className="border rounded outline-none p-1 bg-gray-100" id="price" name="price"/>

                        <label className="font-semibold" htmlFor="price">Image</label>
                        <Field className="border rounded outline-none p-1 bg-gray-100" id="image" name="image"/>

                        <label className="font-semibold" htmlFor="price">Category Id</label>
                        <Field className="border rounded outline-none p-1 bg-gray-100" id="categoryId" name="categoryId"/>


                        <button className="mt-5 self-center w-1/2 text-lg tracking-wide px-6 py-1 outline-none rounded-sm bg-secondary text-white" type="submit">Submit</button>

                        </div>

                    </div>
                    
                </FormikForm>
            </Formik>
        </Fragment>
    )
};

export default Form;
