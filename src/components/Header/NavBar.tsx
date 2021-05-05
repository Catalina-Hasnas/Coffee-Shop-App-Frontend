import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ShoppingCartIcon, MenuIcon, XIcon, UserCircleIcon } from '@heroicons/react/solid';
import Logo from './Logo';
import ProfileDropdown from './ProfileDropdown';
import ICategory from '../../types/ICategory';

const profile = ['Your Profile', 'Your orders', 'Sign out'];

interface INavBarProps {
    categories: ICategory [];
}

const NavBar = (props: INavBarProps): JSX.Element => (

    <div>
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-8 py-4 text-primary font-sans">
                        <div className="flex items-center justify-between h-16 ">

                            <Logo />

                            {/* NAVBAR BIG SCREEN */}

                            <div className="hidden md:block">
                                <div className="ml-10 flex items-center space-x-10">
                                    {props.categories.map((item, itemIdx) =>
                                        <Fragment key={itemIdx}>
                                            <Link to={`/categories/${item.id}`} className="font-bold tracking-wider text-xl hover:text-secondary">
                                                {item.name}
                                            </Link>
                                        </Fragment>
                                    )}
                                </div>
                            </div>
                            
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <button className="rounded-sm focus:outline-none focus:ring-1 focus:ring-secondary focus:ring-opacity-25">
                                        <ShoppingCartIcon className="h-9 w-9 text-secondary" aria-hidden="true" />
                                    </button>

                                    {/* PROFILE DROPDOWN */}
                                    
                                    <ProfileDropdown/>

                                </div>
                            </div>
                            
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-primary focus:ring-primary">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {props.categories.map((item, itemIdx) =>
                                        <Fragment key={itemIdx}>
                                            <Link to={`/categories/${item.id}`} className="hover:text-secondary block px-3 py-2 text-base font-medium">
                                                {item.name}
                                            </Link>
                                        </Fragment>
                            )}
                        </div>

                        <div className="pt-4 pb-3 border-t border-gray-700 bg-primaryLight">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <UserCircleIcon className="block h-9 w-9 text-primary"/>
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium leading-none">Catalina Hasnas</div>
                                    <div className="text-sm font-medium leading-none">catalina@example.com</div>
                                </div>
                                <button className="ml-auto flex-shrink-0 p-1 focus:outline-none focus:ring-1 focus:ring-secondary focus:ring-opacity-25">
                                    <ShoppingCartIcon className="h-6 w-6 text-secondary" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-3 px-2 space-y-1">
                                {profile.map((item) => (
                                    <Link to={`/${item}`}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    </div>
)

export default NavBar;