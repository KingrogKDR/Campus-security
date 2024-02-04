import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-100 max-h-fit border-y text-xs bottom-0">
            <div className="mx-auto w-full max-w-screen-xl p-4">
                <div className="md:flex md:justify-between">
                    <div className="mb-3 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <span className='py-2 px-1 ml-1 text-lg lg:text-3xl font-semibold font-akaya text-blue-500'>Uni<span className='font-bold text-purple-500 font-poppins'>Safe</span></span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-3 sm:justify-end">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Materials</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.aicte-india.org/CyberSecurity"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Cybersecurity
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/playlist?list=PLHfTPxnG4fWq1Wa1vAt8NXnsr9pGmGvQ3"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Self Defence
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        <span>Copyright ©2024 <a href="#" className="hover:underline">4spaces</a>. All Rights Reserved.
                        </span> 
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#">
                            <svg className="w-4 h-4 bg-gray-500 rounded-md hover:bg-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50">
                            <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500
                        hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}