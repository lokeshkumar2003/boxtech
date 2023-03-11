import React from 'react';
// import { auth } from '../firebase/firebase';
import { useState , useEffect} from 'react';
import { getAuth } from 'firebase/auth';
import { TextField } from '@mui/material';


const MyAccount = () => {


    
    const [userDetails , setUserDetails] = useState(null);
    const [accountSection , setAccountSection] = useState(false);

    const auth = getAuth();


    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUserDetails(user);
        })
      });

    
    return (
        <div>
        {
            userDetails 
            ?  (<div>
                <div className='w-[80%] mx-auto'>
                    <div className='w-[80%] mx-auto'>
                        { /* Top banner */}
                        <div className='bg-[#edbd0f] h-[300px] flex flex-col justify-end'>
                            <div className='flex items-end w-[80%] mx-auto p-3'>
                                <div className='rounded-[50%] h-[130px] w-[130px] mx-3'>
                                    <img src={userDetails.photoURL} alt="User Profile" className='rounded-[50%] h-full w-full'/>    
                                </div>
                                <div>
                                    <h3 className='font-bold text-[25px] tracking-[1px] pb-[12px]'>{userDetails.displayName}</h3>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <button onClick={setAccountSection(!accountSection)}>
                                My Account
                            </button>
                            <button>
                                MySubscriptions
                            </button>
                        </div> */}
                        <div className='my-4 border-b-2 border-black flex justify-between items-center'>
                            <div>
                                <h1 className='text-[20px] p-2'>My Account</h1>
                                <p className='text-[16px] p-2'>View and edit your personal info below</p>
                            </div>
                            <div>
                                <button className='bg-[grey] text-white text-[16px] mx-3 my-4 p-2 rounded-[5px]'>
                                    Discard Info
                                </button>
                                <button className='bg-[#edbd0f] m-2 text-white mx-3 my-4 p-2 rounded-[5px]'>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-[20px] p-2 font-bold'>Account</h2>
                            <p className='text-[16px] p-2'>Update your personal information</p>
                        </div>
                        <div>
                            <p className='p-2'>
                                Login Email : <br/>
                                { userDetails.email }
                            </p>
                            <p className='text-[grey] text-[14px] p-2'>
                                Your Login Email can't be changed
                            </p>
                        </div>
                        {/* Form */}
                        <div className='flex flex-col'>
                            <TextField
                                id="outlined-read-only-input"
                                label="First Name"
                                defaultValue={userDetails.displayName.split(' ')[0]}
                                InputProps={{
                                    readOnly: true,
                                }}
                                style={{'margin':'12px'}}
                            />
                             <TextField
                                id="outlined-read-only-input"
                                label="Last Name"
                                defaultValue={userDetails.displayName.split(' ')[1]}
                                InputProps={{
                                    readOnly: true,
                                }}
                                style={{'margin':'12px'}}
                                
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Email Id"
                                defaultValue={userDetails.email}
                                InputProps={{
                                    readOnly: true,
                                }}
                                style={{'margin':'12px'}}
                            />

                        </div>
                        {/* Buttons */}
                        <div className='m-4 flex justify-center items-center'>
                            <button className='bg-[grey] text-white text-[16px] mx-3 my-4 p-2 rounded-[5px]'>
                                Discard Info
                            </button>
                            <button className='bg-[#edbd0f] m-2 text-white mx-3 my-4 p-2 rounded-[5px]'>
                                Save Changes
                            </button>
                        </div>

                    </div>
                </div>
            </div>)
            : <div className='text-center'>
                Please login to access this page
            </div>
        }
        </div>
       
    )
}

export default MyAccount