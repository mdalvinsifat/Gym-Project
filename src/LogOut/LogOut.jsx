import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { auth } from '../Firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Home from '../Home/Home';
import RegError from '../Error/RegError';
const LogOut = () => {

      const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (error) {
    return (
      <Layout>
     <RegError/>
      </Layout>
    );
  }
  if (loading) {
    return <Layout>
        <h1 className='mt-5 text-light '> Wait Some Momment .... </h1>
    </Layout>;
  }
  if (user) {
    return (
      <div>
       <Home/>
      </div>
    );
  }




    return (
        <Layout>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-5">
<img src="https://gym-website-25129.web.app/static/media/login-img.e9633564.svg" className='img-fluid' alt="" srcset="" />
                    </div>

                    <div className="col-md-5 ms-3">
<h1 className='orange'>
Log In Your Account</h1>

<div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1"  className="form-label">Email address</label>
    <input type="email"   value={email}
        onChange={(e) => setEmail(e.target.value)} className="form-control bg-transparent text-light" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1"  className="form-label">Password</label>
    <input type="password"  value={password}
        onChange={(e) => setPassword(e.target.value)} className="form-control bg-transparent text-light" id="exampleInputPassword1" />
  </div>
  <div className="btn btn-warning text-light" onClick={() => signInWithEmailAndPassword(email, password)}>
    Login 
  </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default LogOut;