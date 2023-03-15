import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer'
// import { Navbar } from '../navbar/Navbar'
import './pricing-plans.css';
// import { ForkRight } from '@mui/icons-material'

const PricingPlans = () => {
  return (
    <div>
        <div className='h-[150px] p-[10%] sm:py-[40%] bg-[#ffd7ef] text-center'>
                <h1 className='text-[38px] tracking-[1px] p-[10px]'>Start for Free,then Pay as you go</h1>
                <p className='text-[12px] tracking-[1px]'>Use this area to describe one of your memberships.</p>
        </div>
        <div style={{'borderBottomRightRadius':'80%'}} className='bg-[#ffd7ef] h-[100px]'></div>
        <div 
          style={{transform:'translateY(-50px)'}}
          className='flex justify-around items-center m-[3%] mb-[70px] w-[50%] sl:w-[80%] mr:w-[90%] sm:p-[20px] h-auto mx-auto sm:w-[100%] sm:flex-col'>
          {/**First col */}
                <div className="rounded-[10px] h-[390px] w-[330px] m-[18px] sm:m-[5%] sm:mt-[50px] sm:w-[100%]">
                    <div className="bg-[#FFBF23] w-[100%] p-[10%] rounded-t-[10px]">
                        <h5 className="text-[25px] font-bold tracking-[2px] py-[4px]">Free</h5>
                        <h6 className='py-[4px]'><span className='text-[11px]'>Rs </span><span className='text-[28px] font-bold'>0</span> </h6>
                        <p className='py-[4px] text-[12px]'>Access to all features</p>
                        <p className='pt-[10px] pb-[5px] text-[10px]'>Valid for 3 months</p>
                        <Link to="/checkout"><button className="bg-black p-[10px] my-[20px] w-full  text-white rounded-[5px] tracking-[1px] block mx-auto sm:w-full">
                            Get Started
                        </button></Link>
                    </div>
                    <div className="p-[18px] tracking-[1px] leading-[27px] bg-[#FFD7EF] h-[125px] w-full rounded-b-[10px]">
                      <ul className='points'>
                            <li className="text-[12px]">Custom Branding</li>
                            <li className="text-[12px]">Unlimited Bookings</li>
                      </ul>
                    </div>
                </div>
            {/** Second col */}
                <div className="rounded-[10px] h-[390px] w-[330px] m-[18px] sm:m-[5%] sm:w-[100%] sm:mt-[90px]">
                    <div className='badge absolute bg-[#FFBF23] p-[10px] text-[12px] font-bold border-black border-1 tracking-[1px]'>
                        <h3>Best value</h3>
                    </div>
                    <div className="bg-black w-[100%] p-[10%] text-white rounded-t-[10px]">
                        <h5 className="text-[25px] font-bold tracking-[2px] py-[4px] ">Premium</h5>
                        <h6 className='py-[4px]'><span className='text-[11px]'>Rs </span><span className='text-[28px] font-bold'>0</span> </h6>
                        <p className='py-[4px] text-[12px]'>Access to all features</p>
                        <p className='pt-[10px] pb-[5px] text-[10px]'>Valid for 3 months</p>
                        <Link to="/checkout-premium"><button className="bg-white p-[10px] my-[20px] w-full text-black rounded-[5px] tracking-[1px] block mx-auto sm:w-full">
                            Get Started
                        </button></Link>
                    </div>
                    <div className="p-[18px] tracking-[1px] leading-[27px] h-[125px] w-full bg-[#FFD7EF] rounded-b-[10px]">
                      <ul className='points'>
                            <li className="text-[12px]">Custom Branding</li>
                            <li className="text-[12px]">Unlimited Bookings</li>
                            <li className="text-[12px]">Premium Support</li>
                      </ul>
                    </div>
                </div>
        </div>
        <Footer />
    </div>
  )
}

export default PricingPlans