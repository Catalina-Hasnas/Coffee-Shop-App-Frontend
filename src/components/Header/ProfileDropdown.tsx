import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ShoppingCartIcon, MenuIcon, XIcon, UserCircleIcon } from '@heroicons/react/solid';

const profile = ['Backoffice','Your Profile', 'Your orders', 'Sign out'];

const ProfileDropdown = (): JSX.Element => (
    <Fragment>
        <Menu as="div" className="ml-3 relative">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="max-w-xs rounded-full focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-25">
                            <UserCircleIcon className="block h-9 w-9 text-primary" />
                        </Menu.Button>
                    </div>
                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-sm shadow-lg py-1"
                        >
                            {profile.map((item) => (
                                <Menu.Item>
                                    <Link to={`/${item}`}
                                        className="bg-primaryLight block px-4 py-2 text-sm text-primary hover:text-secondary"
                                    >
                                        {item}
                                    </Link>
                                </Menu.Item>
                                ))
                            }
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    </Fragment>
);

export default ProfileDropdown;


