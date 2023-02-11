import React from 'react';
import './pricing.css';

const Pricing = () => {
  return (
    <div className='h-[90vh] w-full grid grid-cols-2 bg-[#F6F5F5] sm:h-auto sm:flex sm:flex-col'>
        <div className='flex flex-col justify-center items-center sm:p-[5%]'>
            <div id='con1'>
                <h1 className='my-[18px] w-[70%] sm:w-[100%] sm:text-[28px]'>Explore our <span style={{'color':'#FFBF23'}}>Pricing</span> Options</h1>
                <p className='w-[80%]'>Simple plans that grow with your business. No contracts. No Setup fees.</p>
                <a href='/'>
                    <button className='bg-black p-[10px] my-[20px] text-white rounded-[5px] tracking-[1px] sm:block sm:mx-auto'>
                        See More
                    </button>
                </a>
            </div>
        </div>
        <div>
            <div className="py-[18%] px-[10%] sm:p-[5%]">
                <div className="my-[15px] sm:m-[10px]" >
                    <h3 id="pricing" className="w-[60%] text-[30px] sm:text-[22px] tracking-[2px] font-bold sm:font-[500] sm:w-[100%] my-[12px]">Choose your pricing plan</h3>
                </div>
                <div className="rounded-[10px] border-black border-[3px] h-[360px] w-[330px] sm:w-[100%]">
                    <div className="bg-[#FFBF23] w-[100%] p-[15px] border-b-[3px] border-black">
                        <h5 className="text-[20px] font-bold tracking-[2px] py-[4px]">Free</h5>
                        <h6 className='py-[4px]'><span className='text-[11px]'>Rs </span><span className='text-[28px] font-bold'>0</span> </h6>
                        <p className='py-[4px] text-[12px]'>Access to all features</p>
                        <p className='pt-[10px] pb-[5px] text-[10px]'>Valid for 3 months</p>
                        <a href="/"><button className="bg-black p-[10px] my-[20px] text-white rounded-[5px] tracking-[1px] block mx-auto sm:w-full">
                            Get Started
                        </button></a>
                    </div>
                    <div className="p-[18px] tracking-[1px] leading-[27px] bg-[#FFD7EF]">
                            <h6 className="text-[12px]">Custom Branding</h6>
                            <h6 className="text-[12px]">Unlimited Bookings</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing