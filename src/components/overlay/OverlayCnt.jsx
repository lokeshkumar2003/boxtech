import React from 'react';
import { CloseRounded } from '@mui/icons-material';
import { useState } from 'react';
import './overlay.css';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';

const OverlayCnt = (props) => {
  const [isLogin, setIsLogin] = useState(true);


  const handleLogin = () => {
        setIsLogin(true);
  };
       
  const handleSignup = () => {
        setIsLogin(false);
  };

    

  return (
    <div className="overlay">
          <div className='flex justify-center items-center'>
            <div className='float-right p-2 absolute top-[35px] right-[35px]'>
              <CloseRounded 
                style = {{ 'color':'black' , 'fontSize':'45' }}
                className='cursor-pointer'
                onClick={props.onClickFunction}
              />
            </div>
            <div className='mt-[150px]'>
              {
                isLogin 
                  ? <Login clickFunction={handleSignup}/> 
                  : <SignUp clickFunction={handleLogin}/>
              }
            </div>
          </div>
        </div>
  );
}

export default OverlayCnt