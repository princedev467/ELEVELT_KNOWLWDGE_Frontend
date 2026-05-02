import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { userCheck } from '../Redux/slice/auth.slice';

function PrivateRouts(pro) {



   const dispatch=useDispatch()

  useEffect(()=>{
 dispatch(userCheck())

  },[])
 
    let auth = useSelector(state => state.auth);
  console.log(auth);





  let user = auth?.auth

console.log(user);

 
  if (user === undefined) {
   return <p>---Loading</p>
  }


  if(user?.role==='Instructor'){
    return <Outlet/>

  }else if(user?.role==='user'){
    return <Navigate to={'/'} />
  }


 

  // return (

  //   // role==='Instructor' ? <Outlet /> :<Navigate to={'/'} replace />

  //   user?.role === 'Instructor' ? <Outlet /> : <Navigate to={'/'} />

  // );
}

export default PrivateRouts;