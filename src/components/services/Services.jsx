import React from "react";
import './services.css';

const Services = () => {

  const options = [
    {heading:'Pickup Scheduling',desc:'Customers can schedule pickup, book a slot for loading and unloading  the freight.'},
    {heading:'Automatic Quotation Generation',desc:'Generate automatic quotations with the help of software.'},
    {heading:'Pricing management and Payment',desc:'Manage pricing and payments all in one integrated dashboard.'},
    {heading:'Analytics and Customer review',desc:'Analyze your sales, revenue. Record your customer feedback to know them better.'}
  ];

  return (
    <div className="w-full h-[100vh] sm:h-auto">
      <div className="p-[15%]">
        <div>
          <h1>
            What <span style={{ color: "#ffbe23" }}>We Offer?</span>
          </h1>
          <div className="my-[20px] w-[45%] sm:w-[100%] text-justify leading-[25px]">
            <p id="quote-sol">
                Software that can manage packing and moving business. Let your
                customers select their valuables to be shifted and schedule a pickup
                and pay online.
            </p>
          </div>
          <div className="flex justify-start items-center py-[18px] sm:flex-wrap">
            {/* <div></div>
            <div></div>
            <div></div>
            <div></div> */}
            {
                options.map((item) => 
                    <div id="card" className='my-[15px] p-[8px] w-[250px] h-[170px] sm:h-[140px] sm:my-[5px]'>
                        <h3 className='text-xl font-bold text-[20px] p-[8px] h-[80px] sm:h-[60px]' >{item['heading']}</h3>
                        <p>{item['desc']}</p>
                    </div>
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
