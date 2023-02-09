import React from 'react';
import './secondcnt.css';

const SecondCnt = () => {

  return (
    <div id="cont" className='h-[80vh] w-full grid grid-cols-2'>
        <div>
            <div className="px-[20%] py-[20%]">
                <h1>
                    With the Right Software, Scale your Business Rapidly
                </h1>
                <p id='quote'>
                    Easy to setup and go online in few minutes. Cross browser compatability, works seamlessly across different platforms.
                </p>
            </div>
        </div>
        <div className='w-full '>
            <img src="images/mob.jpg" alt="computer and mobile screen"/>
        </div>
    </div>
  )
}

export default SecondCnt