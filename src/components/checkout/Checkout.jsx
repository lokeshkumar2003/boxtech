import React from 'react';
import { getAuth } from 'firebase/auth';
import { useEffect , useState } from 'react';
import Footer from '../footer/Footer';
import { collection , doc  } from "firebase/firestore"; 
import { setDoc , getDoc } from 'firebase/firestore';
// import { db } from '../firebase/firebase';
import { db } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
// import doc

const Checkout = () => {
    const [userDetails , setUserDetails] = useState(null);
    const navigate = useNavigate();
    const [subscriptions , setSubscriptions] = useState([]);

    const auth = getAuth();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUserDetails(user);
        })
      });

      const purchaseSubsciption = async () => {
        const day = new Date().getDate();
        const month = new Date().getMonth();
        const year = new Date().getFullYear();
        
        try {
            
            var docRef = doc(db, "subscriptions", userDetails.email);
            var docu = docRef.get();
            if(docu && subscriptions){
                alert('Already plan purchased');
            } else {
                await setDoc(doc(db,'subscriptions' , userDetails.email),{
                    plan : 'Free',
                    date: `${day}-${month}-${year}`,
                    validity: `${day}-${month+3}-${year}`,
                    status: 'active'
                });
                alert('Plan Subscribed successfully')
                navigate('/')
            }
        } catch (error){
            alert(error.message);
        }

      }

      useEffect((user) => {
        getDoc(doc(db, "subscriptions", user.email)).then(docSnap => {
            if (docSnap.exists()) {
              setSubscriptions(docSnap.data());
            } else {
              console.log("No such document!");
            }
          })
      })
  
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
                            <button 
                                onClick={purchaseSubsciption}
                                className='bg-black text-white w-full sm:w-[95%] p-2 my-4 mx-auto block rounded-[5px]'>
                                Get Plan
                            </button>
                        </div>
                    }
                <div className='flex flex-col justify-center items-center w-[50%] sm:w-full'>
                    <div className='w-[80%] sm:w-[95%]' style={{
                        border:'1px solid grey '
                    }}>
                        <div className='p-4 sm:p-2'>
                            <h2 className='text-[22px] font-bold p-3 sm:text-[18px]'>Order Summary</h2>
                            <div className='flex justify-between p-3 text-[16px] sm:text-[14px]'>
                                <p>Plan</p>
                                <p>Free</p>
                            </div>
                            <div className='flex justify-between p-3 text-[16px] sm:text-[14px]'>
                                <p>Duration</p>
                                <p>3 Months</p>
                            </div>
                            <div className='h-[20px] border-b-2 m-3 border-[grey]'>

                            </div>
                            <div className='flex justify-between p-3'>
                                <h3 className='font-bold text-[20px] sm:text-[16px]'>Total</h3>
                                <h3 className='font-bold text-[20px] sm:text-[16px]'>₹ 0.00</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout