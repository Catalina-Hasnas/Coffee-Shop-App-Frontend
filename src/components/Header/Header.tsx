import React, { Fragment } from 'react';

const navigation = ['Coffee', 'Tea', 'Milk', 'Sweeteners', 'Coffee Machines'];
const profile = ['Your Profile', 'Your orders', 'Sign out'];

const Header = (): JSX.Element => (
    <Fragment>
        <header className="h-large">
            <div className="h-full bg-header bg-cover bg-center backdrop-blur-xl"/>
        </header>
    </Fragment>
);

export default Header;