import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchProductsFail } from '../../store/actions/Products';
import Header from '../Header/Header';


const Loading = (props: any): JSX.Element => {

    const dispatch = useDispatch();
    const history = useHistory();
    const location = {
        pathname: '/error/404'
    }

    useEffect(() => {
        console.log(props.location.pathname)
        dispatch(fetchProductsFail({}));

        if (props.location.pathname != '/error/404') {
            history.replace(location); 
        }
    }, []);

    

    return (
        <div>
            <Header notFound={true} />
        </div>
        );
}

export default Loading;

