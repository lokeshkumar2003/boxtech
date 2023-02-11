import React from 'react';
import './startcnt.css';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AllOutIcon from '@mui/icons-material/AllOut';
import AddLinkIcon from '@mui/icons-material/AddLink';

const StartCnt = () => {

  const adv = {
    names: [
        {icon: <LockOpenIcon /> ,name:'Speed & Security'},
        {icon: <AllOutIcon />,name:'Flexibility and Scalability'},
        {icon: <AddLinkIcon />,name:'Automated Payments'}
    ]
  }

  return (
    <div id="seperate-container" className="h-[800px] w-[100%] sm:h-auto">
        <div>
            <div className="my-[20%] mx-[18%] sm:mx-[10%] sm:my-[15%]">
                <h1 className="font-bold text-[35px] tracking-[1px] sm:text-[28px]">Best Packing & Moving software for your business!</h1>
                <p className="text-justify sm:py-[12px]">We provide an effective and powerful way to manage your operations like pickup scheduling, quotation generation, pricing, customer review, payment, etc.</p>
                <button className="bg-[#edbd0f] p-[10px] my-[20px] text-white">
                    Start for free
                </button>
                <div className="flex my-[8px] justify-start items-start flex-wrap sm:h-[200px] sm:w-[230px]">
                        {
                            adv.names.map((item) =>
                                <div className="flex text-center mx-[15px] justify-start items-center">
                                    {item.icon}
                                    <h2 className="text-[12px] tracking-[1px]">{item.name}</h2>
                                </div>
                            )
                        }
                </div>
            </div>
            
        </div>
        <div>
            <img className='h-[80%] w-[100%] mr-[10%] sm:p-[10px] sm:h-[62vh] sm:mr-0' src="images/mainimg.jpg" alt="Alt img" />
        </div>
    </div>
  )
}

export default StartCnt