import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider';

export default function Header() {
    return (

        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-100 border-gray-200 px-4 lg:px-1 py-2">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <button onClick={toggleMenu} className='lg:hidden'>
                    {isMenuOpen ? (
                    <span className="text-3xl">&#8964;</span> // Drop-down arrow
                    ) : (
                    <span className="text-3xl">&#9776;</span> // Hamburger icon
                    )}
                </button>
                    <Link to="/" className="flex items-center">
                        <span className='py-2 px-1 ml-10 text-lg font-semibold text-blue-500'>Uni<span className='font-bold text-purple-500'>Safe</span></span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-white bg-gradient-to-t from-violet-600 to-purple-400 hover:bg-sky-50 hover:ring-2 hover:ring-sky-200 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition duration-200"
                        >
                            Log in
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}