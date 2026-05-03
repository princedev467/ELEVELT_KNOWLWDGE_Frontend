import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { userCheck } from '../Redux/slice/auth.slice';

function PrivateRouts(props) {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(userCheck());
  // }, []);


  // const auth = useSelector(state => state.auth);
  // const user = auth?.auth;
  // console.log(user);
  
  // const isLoading = auth?.isLoading;

  // console.log('PrivateRouts → isLoading:', isLoading, '| user:', user);
const data = localStorage.getItem("user");

let storeuser = null;

if (data) {
  storeuser = JSON.parse(data);
}
  
  // if (isLoading) {
  //   return <p>---Loading...</p>;
  // }

  if (storeuser) {
    if (storeuser?.role === 'Instructor') {
      return <Outlet />
    } else{
      return <Navigate to={'/'}  />
    }
    
  }else{
    
 return <Navigate to={'/Auth'}  />
  }
}

export default PrivateRouts;