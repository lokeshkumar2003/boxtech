import React from 'react';
// import { Menu } from '@mui/material';
import './navbar.css';
import { useState } from 'react';
export const Navbar = () => {

  const options = [
      {name:'Home' , link:'/'},
      {name:'Product' , link:'#products'},
      {name:'Pricing Plans' , link:'/pricing-plans'},
      {name:'Contact' , link:'#footer'},
      {name:'Login',link:'/'},
];


  const [isNavExpanded, setIsNavExpanded] = useState(false);


  return (
    <div className='pl-[60px] pr-[60px] sm:pl-0 sm:pr-0'>
      <nav className="navigation" >
        <a href="/" className="brand-name" >
          <img src="images/logo.png" alt="logo" className="h-[40px] w-[140px] ml-[25px] sm:ml-[0px]"/>
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul className='mr-[25px] sm:mr-[0]'>
            {
              options.map((item) => (
                <li>
                  <a href={item.link} className='text-[16px] sm:text-[16px]'>
                    {item.name}
                  </a>
                </li>
              ))}
            
          </ul>
        </div>
      </nav>
    </div>
  )
}
