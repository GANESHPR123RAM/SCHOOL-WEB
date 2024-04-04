import React, { useEffect } from 'react';
import './footer.css';
import logo from '../Image/logo.jpg';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

function Footer() {


    return (
        <div className="footer-Box">
            <hr />
            <footer className="bg-gray-800 dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between" >
                        <div className="mb-6 md:mb-0">
                            <img src={logo} className=" h-10 me-3 w-16" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SK-school</span>

                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">social media handles</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-3">
                                        <a href="https://flowbite.com/" className="hover:underline">Instagram</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="https://tailwindcss.com/" className="hover:underline">YouTube</a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindcss.com/" className="hover:underline">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-3">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <Link to="/TermsConditions" className="hover:underline">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="text-center" >
                        <span className="text-sm text-gray-500  text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">SK-school</a>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer