import React from 'react';
import { FcGoogle } from "react-icons/fc";
import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import { auth } from '../Firebase';



const Google = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

    
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
 
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }



    return (
        <div>
            <button  onClick={() =>signInWithGoogle() } type="submit" >

            <FcGoogle />
            </button>
         
        </div>
    );
};

export default Google;