import React from 'react';
import './startcnt.css';

const StartCnt = () => {

  const adv = {
    names: ['Speed & Security','Flexibility and Scalability','Automated Payments']
  }

  return (
    <div className="flex h-[90vh] w-[100%]">
        <div>
            <div className="my-[20%] mx-[25%]">
                <h1>Best Packing & Moving software for your business!</h1>
                <p className="text-justify">We provide an effective and powerful way to manage your operations like pickup scheduling, quotation generation, pricing, customer review, payment, etc.</p>
                <button className="bg-[#edbd0f] p-[10px] my-[20px] text-white">
                    Start for free
                </button>
                <div className="flex my-[8px] justify-center items-center">
                    <div className="flex text-center border-black mx-[15px]">
                        {
                            adv.names.map((item) => <h2 className="text-xl">{item}</h2>)
                        }
                    </div>
                </div>
            </div>
            
        </div>
        <div>
            <img className='h-[80%] w-[100%] mr-[10%]' src="images/mainimg.jpg" alt="Alt img" />
        </div>
    </div>
  )
}

export default StartCnt