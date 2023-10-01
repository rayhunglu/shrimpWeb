import React from 'react';
import { Outlet } from 'react-router-dom';
import { navbarButtonGroup, navbarButton } from '../styles/componentClasses';
import '../styles/index.css'
export default function Navbar() {
  return (
    <div className="bg-slate-100">
      <div className="navbar fixed h-20 w-full bg-black z-50">
        <nav className="border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
              <span className="text-white	self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shrimp Insanity</span>
            </a>
            {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button> */}
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className={navbarButtonGroup}>
                {/* <li>
                  <a href="#" className={navbarButton} aria-current="page">Home</a>
                </li> */}
                <li>
                  <a href="#" className={navbarButton}>Welcome</a>
                </li>
                <li>
                  <a href="#about" className={navbarButton}>About</a>
                </li>
                <li>
                  <a href="#awards" className={navbarButton}>Awards</a>
                </li>
                <li>
                  <a href="#products" className={navbarButton}>Products</a>
                </li>
                <li>
                  <a href="#contactInfo" className={navbarButton}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className='min-h-full'>
        <Outlet />
      </div>
      <div id='footer' className='h-10 bg-slate-500 flex justify-center text-white	'>
        <p>Design by Jui-Hung Lu</p>
      </div>
    </div>
  );
}
