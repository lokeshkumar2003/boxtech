import React from 'react'

const Profits = () => {
  return (
    <div className="h-auto w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[70%] sm:w-[100%]">
            <div>
                <p className="text-[38px] tracking-[2px] text-center p-[25px] sm:text-[28px]">
                    Get Ready to Maximize Your Profits With Our     
                    Software.
                </p>
                <a href="/">
                    <button className='bg-[#edbd0f] p-[10px] my-[20px] sm:my-[12px] text-white rounded-[5px] tracking-[1px] flex mx-auto'>
                    Start for Free
                    </button>
                </a>
            </div>
        </div>
        <div className="w-full">
                <img src="images/profit-photo.png" alt='p' className="w-full h-[500px] sm:h-[30vh]"/>
        </div>
    </div>
  )
}

export default Profits