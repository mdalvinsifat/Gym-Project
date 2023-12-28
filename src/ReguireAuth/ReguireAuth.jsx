import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import { Navigate } from 'react-router-dom';

const ReguireAuth = ({children}) => {
    const [user] = useAuthState(auth)
    if(user){
        return children
    }else{
return <Navigate to="/login"/>
    }
  
};

export default ReguireAuth;