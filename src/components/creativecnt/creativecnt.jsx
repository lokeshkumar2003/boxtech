import React from "react";
import './creativecnt.css';

const CreativeCnt = () => {
  return (
    <div className="grid grid-cols-2 w-[full] h-[90vh]">
      <div>
        <img className="w-full h-full" src="images/creative-section.png" alt="phot" />
      </div>
      <div className="flex justify-center items-center">
        <div id="desc-card" className="w-[550px]">
            <h1 className="w-[90%]">Built for <span style={{'color':'#ffbe23'}}>Businesses</span>, by <span style={{'color':'#ffbe23'}}>Creatives.</span></h1>
            <div className="w-[60%] my-[18px]" >
                <p className="text-justify">
                    Manage your Staff, Bookings, Customers, Pricing, Payments, Analytics,
                    Support, Enquiries all in one integrated dashboard. Let software
                    handle all the manual work.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeCnt;
