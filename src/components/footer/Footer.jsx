import React from 'react';


const Footer = () => {

  const contact = [
    {name:'General Inquiries:',det:8336801389,link:'tel:+918336801389'},
    {name:'Sales:',det:'miuractech@gmail.com' , link:'mailto:miuractech@gmail.com'},
    {name:'Address:',det:'Bangalore , Karnataka',link:'/'},
    {name:'Customer Care:',det:'info@miurac.com',link:'mailto:info@miurac.com'}
  ];

  
  return (
    <div id="footer">
        <div className="h-auto bg-[#FFBF23] w-full">
            <div className="p-[15px]">
                <a href="/">
                    <img src="images/logo-black.png" alt="logo" className="w-[160px] h-[50px] ml-[50px] sm:ml-[10px]" />
                </a>
            </div>
            <div className="flex justify-around items-start p-[25px] sm:flex-col">
                {/* Contact */}
                <div>
                    <div className="h-[80px]">
                        <h4 className="font-bold text-[14px] py-[14px]">Contact</h4>
                    </div>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center">
                        {
                            contact.map(
                                (item) => <div className="w-[150px] h-[130px] md:p-0 md:[h-70px] p-[6px] text-[14px] tracking-[1px]">
                                    <h5 className='font-bold'>{item['name']}</h5>
                                    <u><a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <p className='break-words'>{item['det']}</p>
                                    </a></u>
                                </div>
                            )
                        }
                    </div>
                </div>
                
                {/** Quick Links */}
                <div>
                    <div className="h-[80px] sm:h-[40px]">
                        <h4 className="font-bold text-[14px] py-[14px] sm:py-[5px]">Quick Links</h4>
                    </div>
                    <ul>
                        <li className="py-[4px] tracking-[1px] text-[14px]"><a href="/terms-conditions"><u>Terms and Conditions</u></a></li>
                        <li className="py-[4px] tracking-[1px] text-[14px]"><a href="/privacy-policy"><u>Privacy Policy</u></a></li>
                    </ul>
                </div>

                {/* Subscription */}
                <div>
                    <div className="h-[80px] sm:h-[50px]">
                        <h4 className="font-bold text-[14px] py-[14px]">Subscription</h4>
                    </div>
                    <p className="text-[14px] tracking-[1px]">
                        Sign up to get the latest news on our product.
                    </p>
                    <p className="py-[20px] text-[14px] tracking-[1px]">
                        Email*
                    </p>
                    <div className="flex">
                        <input type="text" placeholder="Your Email" className="text-[12px] p-[5px] border-black border-[2px] "/>
                        <button className='bg-black p-[5px] text-white text-[12px]'>
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Follow */}
                <div >
                    <div className="h-[80px] sm:h-[40px]">
                        <h4 className="font-bold text-[14px] py-[14px]">Follow</h4>
                    </div>
                    <p className="text-[14px]">
                        <u><a href="/">LinkedIn</a></u>
                    </p>
                </div>

            </div>

        </div>
        <div className="h-auto p-[8px] bg-black">
            <h6 className="text-white text-[12px] tracking-[1px] text-center">© 2023 by boxtech. Powered and secured by <a href="https://miurac.com"><u>miurac</u></a></h6>
        </div>
    </div>
  )
}

export default Footer