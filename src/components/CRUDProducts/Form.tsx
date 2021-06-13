import axios from '../../services/api';
import React, { Fragment, useEffect, useState } from 'react';
import { FormTypes } from './formTypes';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../store/actions/actionTypes';
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

interface FormProps {
    type: FormTypes
    productId?: number,
    title?: string,
    amount?: number,
    price?: number,
    categoryId?: number,
    image?: string,
    promotion?: {
        id: number,
        discount: number,
        promotionalText: string
    }
}

interface product {
    id?: any,
    title: any,
    amount: any,
    price: any,
    categoryId: any,
    image: any,
    promotionId: any
}

interface promotion {
    id: number,
    discount: number,
    promotionalText: string
}

const Form = (props: FormProps): JSX.Element => {

    console.log(props);

    const fetchPromotions = () => {
        axios.get('/promotions')
        .then(res => {
            console.log(res);
            
            var promotions: promotion [] = [];

            for (let key in res.data) {
                promotions.push({
                    ...res.data[key],
                    id: res.data[key].id
                });
            }
            setPromotions(promotions);
        } )
        .catch( error => {
            console.log(error)
        } );
    }

    useEffect(() => {
        fetchPromotions();
        if (props.promotion) {
            setHasPromotion(true)
        }
        // return function cleanup() {
            
        // }
    },[props]);
    
    const [hasPromotion, setHasPromotion] = useState(false);
    const [promotions, setPromotions] = useState<promotion []>([]);

    // const togglePromotion = (event: MouseEvent) => {
    //     event.preventDefault();
    //     setHasPromotion(hasPromotion => !hasPromotion);
    // }

    const formType = props.type == FormTypes.create? <h2 className="text-2xl font-bold leading-none mt-2"> Create Product </h2> : <h2 className="text-2xl font-bold leading-none mt-2"> Update Product </h2>
    
    const promotionInfo = 
        <Fragment>
            <label className="font-semibold" htmlFor="promotionId"></label>
            <Field className="border rounded outline-none p-1 bg-gray-100" as="select" id="promotionId" name="promotionId">
                {promotions.map((promo)=>(<option key={promo.id} value={promo.id}>{promo.promotionalText}</option>))}
            </Field>
        </Fragment>
    
    let promotionId = 1;
    if (FormTypes.update && props.promotion?.id) {
        promotionId = props.promotion.id;
    }

    let categoryId = 1;
    if (FormTypes.update && props.categoryId) {
        categoryId = props.categoryId;
    }

    return (
        <Fragment>
            <Formik
                enableReinitialize

                initialValues ={{
                    title: props.type == FormTypes.update? props.title : "",
                    amount: props.type == FormTypes.update? props.amount : "",
                    price: props.type == FormTypes.update? props.price : "",
                    categoryId: categoryId,
                    image: props.type == FormTypes.update? props.image : "",
                    hasPromotion: (props.promotion == null)? false : true,
                    promotionId: promotionId
                }}

                validationSchema={Yup.object({
                    title: Yup.string()
                        .strict()
                        .required("Please enter a title")
                        .min(8, "The title must be at least 8 characters long")
                        .max(50, "The title can't cant be longer than 50 characters")
                        .trim("Please remove the white spaces around the title"),
                    
                    amount: Yup.number()
                      .required("Please enter the number of products on stock")
                      .positive("Please enter a positive number")
                      .integer("Please enter an integer"),
                    
                    price: Yup.number()
                        .required("Please enter the number of products in stock")
                        .positive("Please enter a positive number"),
                    
                    image: Yup.string()
                        .required("Please enter a url for an image")
                        .url("Please enter a url"),
                })}
                
                onSubmit={async (values) => {
                    console.log(values);
                    if (props.type == FormTypes.update) {
                        let updatedProduct: product = {

                            id: props.productId,
                            title: values.title,
                            amount: values.amount,
                            price: values.price,
                            categoryId: values.categoryId,
                            image: values.image,
                            promotionId: values.hasPromotion? values.promotionId : null
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
                            promotionId: values.hasPromotion? values.promotionId : null
                        }
                        axios.post( '/products', newProduct )
                            .then( response => {
                               console.log(response)
                            } )
                            .catch( error => {
                                console.log(error)
                            } );
                    }
                }}>

                {({ errors, touched, values }) => (

                <FormikForm className="max-w-sm w-full rounded-sm shadow-md p-5 bg-white">

                    {formType}

                    <div className="my-4"> 
                        <div className="flex flex-col">

                            <label className="font-semibold" htmlFor="title">Title</label>
                            <Field className="border rounded outline-none p-1 bg-gray-100" id="title" name="title"/>
                            {errors.title && touched.title ? (
                                <p className="text-xs text-red-500">{errors.title}</p>
                            ) : null}

                            <label className="font-semibold" htmlFor="amount">Quantity</label>
                            <Field className="border rounded outline-none p-1 bg-gray-100" id="amount" name="amount"/>
                            {errors.amount && touched.amount ? (
                                <p className="text-xs text-red-500">{errors.amount}</p>
                            ) : null}

                            <label className="font-semibold" htmlFor="price">Price</label>
                            <Field className="border rounded outline-none p-1 bg-gray-100" id="price" name="price"/>
                            {errors.price && touched.price ? (
                                <p className="text-xs text-red-500">{errors.price}</p>
                            ) : null}

                            <label className="font-semibold" htmlFor="image">Image</label>
                            <Field className="border rounded outline-none p-1 bg-gray-100" id="image" name="image"/>
                            {errors.image && touched.image ? (
                                <p className="text-xs text-red-500">{errors.image}</p>
                            ) : null}

                            <label className="font-semibold" htmlFor="categoryId">Category Id</label>
                            <Field className="border rounded outline-none p-1 bg-gray-100" as="select" id="categoryId" name="categoryId">
                                {["Coffee", "Tea", "Milk", "Sweeteners", "Coffee Machines"].map((i:string, index: number)=>(<option key={i} value={index + 1}>{i}</option>))}
                            </Field>

                            <label className="font-semibold" htmlFor="hasPromotion">
                                <Field  className="font-semibold" htmlFor="hasPromotion" type="checkbox" name="hasPromotion" />
                                    Has promotion
                            </label>

                            {values.hasPromotion? promotionInfo : null}

                            <button className="mt-5 self-center w-1/2 text-lg tracking-wide px-6 py-1 outline-none rounded-sm bg-secondary text-white" type="submit">Submit</button>

                        </div>

                    </div>
                    
                </FormikForm>
                )}
            </Formik>
        </Fragment>
    )
};

export default Form;
