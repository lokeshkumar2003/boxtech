import React from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbar = () => {

  const options = [
      {name:'Home'},
      {name:'Product'},
      {name:'Pricing Plans'},
      {name:'Contact'},
      {name:'Login'},
      {name: <button className="bg-[#edbd0f] p-[10px] my-[20px] text-white">
          Get Started
      </button>}
];


  return (
    <div className='flex justify-between items-center h-[80px] w-full'>
        <div className='h-[40px] w-[150px] '>
          <a href="/">
              <img src='images/logo.png' alt='no-content' />
          </a>
        </div>
        <div>
            <ul className='list-none flex'>
                  <li className='mx-[12px]'>
                        {options.map((item) =>
                          <a href="/" className="mx-[12px] text-[14px] font-[500]">
                              {item['name']}
                          </a>
                        )}
                     
                  </li>
            </ul>
        </div>
    </div>
  )
}
