import React from 'react';
import { getAuth } from 'firebase/auth';
import { useEffect , useState } from 'react';
import Footer from '../footer/Footer';
import LockOpen from '@mui/icons-material/LockOpen';

const CheckoutPremium = () => {
    const [userDetails , setUserDetails] = useState(null);

    const auth = getAuth();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUserDetails(user);
        })
      });


    return (
        <div>
        <div className='h-[250px] p-[10%] sm:pl-[20px] sm:p-0 sm:py-[40%] bg-[#ffd7ef] text-[35px]'>
        </div>
        <div style={{'borderBottomRightRadius':'80%'}} className='bg-[#ffd7ef] h-[100px]'>
                 
        </div>
        <div className='w-[70%] sm:w-[95%] mx-auto p-[15px] bg-white h-auto rounded-[5px]' style={{
            transform:'translateY(-320px)'
        }}>
            <div className='m-3' style={{
                borderBottom:'1px solid grey'
            }}>
                <h3 className='p-4 text-[28px] text-[grey] sm:text-[22px]'>Checkout</h3>
            </div>
            <div className='flex flex-wrap'>
                    {
                        userDetails 
                        && <div className='w-[50%] sm:w-full'>
                            <div className='flex p-3 justify-between'>
                                    <h3 className='p-2 text-[20px] sm:text-[18px]'>✔ Sign Up</h3>
                                    <button className='underline text-black float-right'>
                                        Logout
                                    </button>
                            </div>
                            <p className='text-[16px] text-[grey] sm:text-[14px] p-3'>Logged in as : {userDetails.email}</p>
                            <div className='h-[20px] border-b-2 m-3 border-[grey]'></div>
                            <div className='flex flex-col p-3 justify-between'>
                                    {/* <h3 className='p-2 text-[20px] sm:text-[18px]'>2 &nbsp;Payment</h3> */}
                                    <div className='flex items-center justify-start'>
                                        <h3 className='text-[20px] p-2 sm:text-[18px]'>2</h3>
                                        <h3 className='pl-3 text-[18px]'>Payment</h3>
                                    </div>
                                    <h5 className='tracking-[1px] text-[16px] p-2 sm:text-[14px]'>You can't purchase this plan at the moment</h5>
                                    <p className='text-[grey] text-[16px] p-2'>Please Contact us to complete your purchase</p>
                            </div>
                            <button type="button" disabled className='bg-[grey] text-white w-full sm:w-[95%] p-2 my-4 cursor-not-allowed mx-auto block rounded-[5px]'>
                                Get Plan
                            </button>
                        </div>
                    }
                <div className='flex flex-col justify-center items-center w-[50%] sm:w-full'>
                    <div className='w-[80%] sm:w-[95%]' style={{
                        border:'1px solid grey'
                    }}>
                        <div className='p-4 sm:p-2'>
                            <h2 className='text-[22px] font-bold p-3 sm:text-[18px]'>Order Summary</h2>
                            <div className='flex justify-between p-3 text-[16px] sm:text-[14px]'>
                                <p>Plan</p>
                                <p>Premium</p>
                            </div>
                            <div className='flex justify-between p-3 text-[16px] sm:text-[14px]'>
                                <p>Duration</p>
                                <p>Until Cancelled</p>
                            </div>
                            <div className='h-[20px] border-b-2 m-3 border-[grey]'>

                            </div>
                            <div className='flex justify-between p-3'>
                                <h3 className='font-bold text-[20px] sm:text-[16px]'>Total</h3>
                                <div className='text-center'>
                                    <h3 className='font-bold text-[20px] sm:text-[16px]'>₹ 499</h3>
                                    <p className='text-[grey]'>Every Month</p>
                                </div>
                            </div>
                            <p className='text-[16px] p-3 sm:text-[14px] text-[grey]'>
                                     You will be charged monthly until canceled.
                            </p>
                        </div>
                        
                    </div>
                    <div className='flex p-4'>
                        <LockOpen />
                        <p className='text-center px-2'>Secure Checkout</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default CheckoutPremium