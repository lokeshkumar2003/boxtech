import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
// import { Menu } from '@mui/material';

export const Navbar = () => {

  const options = [
      {name:'Home'},
      {name:'Product'},
      {name:'Pricing Plans'},
      {name:'Contact'},
      {name:'Login'},
      {name: <button className="bg-[#edbd0f] p-[10px] my-[20px] text-white">
          Get Started
      </button>},
      // {name:<MenuIcon />}
];


  return (
    <div className='flex sm:flex-col sm:items-start sm:justify-start justify-between items-center h-[80px] w-full'>
        <div>
          <a href="/">
              <img src='images/logo.png' alt='no-content' className='h-[50px] w-[180px]' />
          </a>
        </div>
        
        <div>
            <ul className='list-none flex sm:flex-col sm:invisible'>
                  <li className='mx-[12px] sm:mx-0'>
                        {options.map((item) =>
                          <a href="/" className="mx-[12px] text-[14px] font-[500]">
                              {
                                 item['name']
                              }
                          </a>
                        )}
                  </li>
            </ul>
        </div>

        {/* Mobile screen */}
        
    </div>
  )
}
