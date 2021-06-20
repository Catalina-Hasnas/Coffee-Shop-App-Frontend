import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface headerProps {
    notFound?: boolean
}

const Header = (props: headerProps): JSX.Element => {

    const headerMessage = props.notFound? (
        <Fragment>
            <p className="mr-8 text-4xl font-bold text-primary"> Oops, it looks like this page doesn't exist anymore. </p>
            <Link to="/" className="bg-secondary rounded-sm p-4 mb-28 mt-5 text-bg tracking-wide"> GO HOME </Link>
        </Fragment>
    ) : (
        <Fragment>
            <span className="bg-bg pr-8 sm:bg-transparent text-6xl font-bold text-primary bg-opacity-50">All of your coffee needs</span>
            <p className="text-4xl mr-8 text-primary my-3">in one place </p>
            <Link to="categories/1" className="bg-secondary rounded-sm p-4 mb-28 mt-3 text-bg tracking-wide"> SHOP HERE </Link>
        </Fragment>
    )

    return (
        <Fragment>
            <header className="h-large relative">
                <div className="h-full bg-header bg-cover bg-center flex flex-col justify-end content-center items-center">
                    {headerMessage}
                </div>
            </header>
        </Fragment>
    )


};

export default Header;