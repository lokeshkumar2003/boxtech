import React from 'react';
import './startcnt.css';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AllOutIcon from '@mui/icons-material/AllOut';
import AddLinkIcon from '@mui/icons-material/AddLink';

const StartCnt = () => {

  const adv = {
    names: [
        {icon: <LockOpenIcon style={{'color':'white'}}/> ,name:'Speed & Security'},
        {icon: <AllOutIcon style={{'color':'white'}}/>,name:'Flexibility and Scalability'},
        {icon: <AddLinkIcon style={{'color':'white'}}/>,name:'Automated Payments'}
    ]
  }

  return (
    <div id="seperate-container" className="h-[800px] w-[100%] sm:h-auto">
        <div>
            <div className="my-[20%] mx-[18%] sm:mx-[10%] sm:my-[15%]">
                <h1 className="font-bold text-[35px] tracking-[1px] sm:text-[28px]">Best Packing & Moving software for your business!</h1>
                <p className="text-justify sm:py-[12px]">We provide an effective and powerful way to manage your operations like pickup scheduling, quotation generation, pricing, customer review, payment, etc.</p>
                <button className="bg-[#edbd0f] p-[10px] my-[20px] text-white sm:w-full">
                    Start for free
                </button>
                <div className="flex my-[8px] justify-center items-center flex-wrap sm:h-[200px] sm:w-[230px]">
                        {
                            adv.names.map((item) =>
                                <div className="flex text-left mx-[15px] my-[15px] justify-start items-center">
                                    <div className='p-[4px] bg-black'>{item.icon}</div>
                                    <h2 className="text-[14px] tracking-[1px] ml-[20px]">{item.name}</h2>
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