import React from 'react'

const Footer = () => {

  const contact = [
    {name:'General Inquiries',det:8336801389},
    {name:'Sales',det:'miuractech@gmail.com'},
    {name:'Address',det:'Bangalore , Karnataka'},
    {name:'Customer Care',det:'info@miurac.com'}
  ];

  
  return (
    <div>
        <div className="h-[50vh] bg-[#FFBF23] w-full">
            <div className="p-[15px]">
                <a href="/">
                    <img src="images/logo.png" alt="logo" className="w-[140px] h-[40px] ml-[50px]" />
                </a>
            </div>
            <div className="ml-[20px]">
                <div>
                    <h4>Contact</h4>
                    <div>
                        {
                            contact.map(
                                (item) => <div className="w-[100px] p-[6px]">
                                    <h5>{item['name']}</h5>
                                    <p>{item['det']}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
        <div className="h-auto p-[8px] bg-black">
            <h6 className="text-white text-[12px] tracking-[1px] text-center">© 2035 by boxtech. Powered and secured by <a href="https://miurac.com"><u>miurac</u></a></h6>
        </div>
    </div>
  )
}

export default Footer