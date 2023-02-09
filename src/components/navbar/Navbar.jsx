import React from 'react';


export const Navbar = () => {

  const options = {
    values: ['Home','Product','Pricing Plans','Contact','Login','Get Started']
  };


  return (
    <div className='flex justify-between items-center h-[100px] w-[100%]'>
        <div className='h-[40px] w-[150px] '>
          <a href="/" className="mx-[15px]">
              <img src='images/logo.png' alt='no-content' />
          </a>
        </div>
        <div>
            <ul className='list-none flex'>
              
                <a href="/" className="mx-[12px]">
                <li className='text-xl'>
                  {options.values.map(
                    (item) => item
                  )}
               </li>
                </a>
            </ul>
        </div>
    </div>
  )
}
