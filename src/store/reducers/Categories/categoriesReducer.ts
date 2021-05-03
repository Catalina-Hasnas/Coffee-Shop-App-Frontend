import IProduct from '../../../types/IProduct';
import ICategory from '../../../types/ICategory';


import { ActionTypes }  from '../../actions/actionTypes';
import { Action } from '../../actions/Categories/index';

export interface ICategoriesState {
    categories: ICategory [],
    error: any,
    loading: boolean,
    category: ICategory
}

const initialState = {
    categories: [],
    error: null,
    loading: true,
    category: {
        id: 0,
        name: "",
        products: []
    }
}

export const categoriesReducer = (state: ICategoriesState = initialState, action: Action) : ICategoriesState => {
    switch(action.type) {
        case ActionTypes.fetchCategories: {
            console.log("from the reducer:");
            console.log(action.payload);
            return {...state, categories: action.payload, loading: false}
        }
        case ActionTypes.fetchCategoriesFail: {
            return {...state, error: action.payload}
        }
        case ActionTypes.fetchCategory: {
            console.log("from the reducer by id");
            console.log(action.payload);
            return {... state, category: action.payload, loading: false}
        }
        default: 
            return state
    }
};