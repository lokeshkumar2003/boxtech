import React from 'react';
import './navbar.css';
import { useState } from 'react';
import OverlayCnt from '../overlay/OverlayCnt';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { CloseRounded } from '@mui/icons-material';
import {  MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
// import Select from '@mui/material';
import Select from '@mui/material/Select';

export const Navbar = () => {


  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [userDetails , setUserDetails] = useState(null);


  const auth = getAuth();

  


  const handleClick = () => {
    setShowOverlay(!showOverlay);
  }

  

  const closeOverlay = () => {
    setShowOverlay(false);
  }

  const handleLogout = () => {
    auth.signOut();
    setUserDetails(null);
  }


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        setUserDetails(user);
    })
  });



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
      {showOverlay && 
        <OverlayCnt onClickFunction={closeOverlay}/>
      }

        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul className='mr-[25px] sm:mr-[0] items-center justify-center'>
            {/* <button
              className="absolute top-[20px] right-[20px] invisible sm:visible"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            ><CloseRounded style={{'fontSize':'40px'}}/></button>    */}
              <li>
                <a href="/" className='text-[16px] sm:text-[16px]'>Home</a>
              </li>
              <li>
                <a href="#products" className='text-[16px] sm:text-[16px]'>Product</a>
              </li>
              <li>
                <a href="/pricing-plans" className='text-[16px] sm:text-[16px]'>Pricing Plans</a>
              </li>
              <li>
                <a href="#footer" className='text-[16px] sm:text-[16px]'>Contact</a>
              </li>
              {
                userDetails   
                    ? <div style={{'display':'flex' , 'alignItems':'center','justifyContent':'center'}}>               
                            <li>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    style={{
                                      backgroundImage: `url(${userDetails.photoURL})`,
                                      backgroundSize : 'cover',
                                      backgroundPosition:'center',
                                      height:'35px',
                                      width:'35px',
                                      borderRadius:'50%',
                                    }}
                                    
                                  >
                                    {/* <img src={userDetails.photoURL} alt='profile pic' className='cursor-pointer rounded-[50%] w-full h-full'/> */}
                                    <MenuItem className='text-[16px]'>
                                      <Link to='/account'>
                                          My Account
                                      </Link>
                                    </MenuItem>
                                    <MenuItem className='text-[16px]'>
                                      <Link to='/subscriptions'  >
                                          My Subscription
                                      </Link>
                                    </MenuItem>
                                    <MenuItem>
                                    <li onClick={handleLogout}>
                                      <button className='text-[16px]' onClick={handleLogout}>
                                          Logout
                                      </button>
                                    </li>
                                    </MenuItem>
                                  </Select>
                                
                            </li>
                        
                      </div>
                    : <li className='cursor-pointer'>
                        <button className='text-[16px] sm:text-[16px]'onClick={handleClick}>
                            Login
                        </button>
                      </li>
              }   
              <li>
                <button className='bg-[#edbd0f] color-white p-2 rounded-[5px] text-[16px] text-white w-[130px]'>
                    Get Started  
                </button>  
              </li>         
          </ul>
        </div>
      </nav>
    </div>
  )
}
