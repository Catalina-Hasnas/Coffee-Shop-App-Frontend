import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => (
    <Fragment>
        <header className="h-large">
            <div className="h-full bg-header bg-cover bg-center flex flex-col justify-end content-center items-center">
                <p className=" mr-8 text-6xl font-bold text-primary">All of your coffee needs</p>
                <p className="text-4xl mr-8 text-primary my-3">in one place </p>
                <Link to="categories/1" className="bg-secondary rounded-sm p-4 mb-28 mt-3 text-bg tracking-wide"> SHOP HERE </Link>
            </div>
        </header>
    </Fragment>
);

export default Header;