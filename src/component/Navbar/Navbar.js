import React, { useState } from 'react';
import logo from '../Image/logo.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
    const [HamburgerMenu, setHamburgerMenu] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const toggleHamburger = () => {
        setHamburgerMenu(!HamburgerMenu);
    };

    const closeHamburger = () => {
        setHamburgerMenu(false);
    };

    const toggleDropdown1 = () => {
        setDropdownOpen1(!dropdownOpen1);
    };

    const closeDropdown1 = () => {
        setDropdownOpen1(false);
    };

    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
    };

    const closeDropdown2 = () => {
        setDropdownOpen2(false);
    };

    const MobileMenu = () => {
        return (
            <div className={`bg-gray-800 sticky z-3 top-0 pt-20 sm:hidden ${HamburgerMenu ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link to="/Home" onClick={closeHamburger} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">SK-school</Link>
                    <Link to="/Event" onClick={closeHamburger} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Event</Link>
                    <div className="relative">
                        <button onClick={toggleDropdown2} className="text-gray-300 flex items-center hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium focus:outline-none">About-us
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                        {dropdownOpen2 && (
                            <div className="absolute right-0 mt-2 w-56 origin-top-right bg-gray-800 rounded-md shadow-lg">
                                <div className="py-2">
                                     <h1>About-us</h1>
                                    <Link to="/MeetTheTeam" onClick={closeDropdown2} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm">Our Team</Link>
                                    <Link to="/About" onClick={closeDropdown2} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm">About-us</Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <button onClick={toggleDropdown1} className="text-gray-300 flex items-center hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium focus:outline-none">Academic
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                        {dropdownOpen1 && (
                            <div className="absolute right-0 mt-2 w-56 origin-top-right bg-gray-800 rounded-md shadow-lg">
                                <div className="py-1">
                                    <Link to="/PastYear" onClick={closeDropdown1} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm">Our Result</Link>
                                    <Link to="/Admissions" onClick={closeDropdown1} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm">Admissions</Link>
                                    <Link to="/Alumni" onClick={closeDropdown1} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm">Our Alumni</Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to="/Contact" onClick={closeHamburger} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</Link>
                </div>
            </div>
        );
    };

    return (
        <>
            <nav className="bg-gray-800 z-50 fixed w-full">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" onClick={toggleHamburger} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={HamburgerMenu}>
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {HamburgerMenu ? (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src={logo} alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link to="/Home" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">SK-school</Link>
                                    <Link to="/Event" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Event</Link>
                                    <div className="relative">
                                        <button onClick={toggleDropdown2} className="text-gray-300 flex items-center hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:outline-none">About-Us
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg></button>
                                        {dropdownOpen2 && (
                                            <div className="absolute  right-0 mt-2 w-fit px-0.5 origin-top-right bg-gray-800 rounded-md shadow-lg">
                                                <div className="py-1">
                                                    <Link to="/MeetTheTeam" onClick={closeDropdown2} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm">Our Team</Link>
                                                    <Link to="/About" onClick={closeDropdown2} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm">About-us</Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <button onClick={toggleDropdown1} className="text-gray-300 flex items-center hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:outline-none">Academic
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg></button>
                                        {dropdownOpen1 && (
                                            <div className="absolute right-0 mt-2 w-fit px-2 origin-top-right bg-gray-800 rounded-md shadow-lg">
                                                <div className="py-1">
                                                    <Link to="/PastYear" onClick={closeDropdown1} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm">Our Result</Link>
                                                    <Link to="/Admissions" onClick={closeDropdown1} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm">Admissions</Link>
                                                    <Link to="/Alumni" onClick={closeDropdown1} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm">Our Alumni</Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <Link to="/Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <MobileMenu />
        </>
    );
}

export default Navbar;
