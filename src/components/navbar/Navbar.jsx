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
      // {name: <button className="bg-[#edbd0f] p-[10px] my-[20px] text-white">
      //     Get Started
      // </button> , link:'/'},
      // {name:<MenuIcon />}
];

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  


  return (
    <nav className="navigation" >
      <a href="/" className="brand-name">
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
  )
}
