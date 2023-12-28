import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import {useSignInWithGithub } from 'react-firebase-hooks/auth'
import { auth } from '../Firebase';
const Github = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
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
            <button onClick={() =>signInWithGithub()} type="submit" >
            <FaGithubSquare  className='ms-5'/>
            </button>
        </div>
    );
};

export default Github;