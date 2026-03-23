import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouts(props) {
  let auth = true;

  return (
    
      auth ? <Outlet /> :<Navigate to={'/Sign_In'} />
 


  );
}

export default PrivateRouts;