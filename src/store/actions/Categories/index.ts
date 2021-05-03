import ICategory from '../../../types/ICategory';
import { ICategoriesState } from '../../reducers/Categories/categoriesReducer';
import { ActionTypes } from '../actionTypes';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from '../../../services/api';

export type Action = { type: ActionTypes; payload?: any };

const fetchCategories = (categories: ICategory []): Action => ({
    type: ActionTypes.fetchCategories,
    payload: categories
})

const fetchCategoriesFail = (error: any): Action => ({
    type: ActionTypes.fetchCategoriesFail,
    payload: error
})

const fetchCategory = (category: ICategory): Action => ({
    type: ActionTypes.fetchCategory,
    payload: category
})

export const getAllCategories: ActionCreator<
  ThunkAction<Promise<any>, ICategoriesState, null, Action>
> = () => {
  return async (dispatch: Dispatch) => {
    axios.get('/categories')
        .then(res => {
            var categories: ICategory [] = [];
            for (let key in res.data) {
                categories.push({
                    ...res.data[key],
                    id: res.data[key].id
                });
            }
            console.log(categories);
            dispatch(fetchCategories(categories));
        } )
        .catch( error => {
            console.log(error)
            dispatch(fetchCategoriesFail(error))
        } );
    }
}

export const getCategoryById: ActionCreator<
  ThunkAction<Promise<any>, ICategoriesState, null, Action>
> = (id: number) => {
  return async (dispatch: Dispatch) => {
    axios.get(`/categories/${id}`)
        .then(res => {
            console.log("from action")
            console.log(res.data);
            dispatch(fetchCategory(res.data));
        } )
        .catch( error => {
            console.log(error)
        } );
    }
}