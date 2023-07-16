import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../style.js'
const Navbar = ({ navItems }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div className={`${styles.paddingX}`}>
            <nav className={`mx-auto block w-full max-w-screen-xl bg-opacity-80 py-2  text-blue-800  lg:py-4 `}>
                <div>
                    <div className="container mx-auto flex items-center justify-between text-gray-900">
                        <Link
                            to="/"
                            className="mr-4 block cursor-pointer py-1.5 font-sans text-3xl font-bold leading-normal text-inherit antialiased"
                        >
                            <span>Top <span className="text-green-600">Cargo</span></span>
                        </Link>
                        <ul className="hidden items-end gap-6 lg:flex">
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="block p-1 cursor-pointer font-sans text-md font-normal leading-normal text-inherit antialiased hover:border-b-2 hover:border-green-500"
                                >
                                    <Link to={item.link} className="flex items-center">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className=''>
                            <Link to="asktruck">
                                <button
                                    className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-4  font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    <span>Ask trucks</span>
                                </button>
                            </Link>
                            <Link to="login">
                                <button
                                    className="middle mx-2 none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-4  font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    <span>Log In</span>
                                </button>
                            </Link>

                        </div>

                        <button
                            className="lg:hidden "
                            onClick={toggleMobileMenu}
                            aria-label="Toggle Mobile Menu"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {showMobileMenu ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {showMobileMenu && (
                        <div
                            className="block w-full text-blue-gray-900 transition-all text-black duration-300 ease-in lg:hidden"
                            data-collapse="navbar"
                        >
                            <div className="container  mx-auto pb-2">
                                <ul className="mt-2 mb-4 flex flex-col gap-2">
                                    {navItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="block p-1 font-sans text-md font-normal leading-normal text-inherit antialiased hover:border-b-2 hover:border-green-500"
                                        >
                                            <Link to={item.link} className="flex items-center">
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>

    );
};

export default Navbar;
