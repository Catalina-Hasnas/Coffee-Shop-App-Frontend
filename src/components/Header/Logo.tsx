import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/coffee.svg';

const Logo = (): JSX.Element => (
    <Fragment>
        <Link to="/">
            <img
                className="w-24 h-full"
                src={logo}
                alt="Logo"
            />
        </Link>
    </Fragment>
);

export default Logo;