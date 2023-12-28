import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import Google from './Google';
import Github from './Github';
import Home from '../Home/Home';
import RegError from '../Error/RegError';
const Reg = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
     <RegError/>
      </div>
    );
  }
  if (loading) {
    return <div>
        <h1 className='mt-5 text-light '> Wait Some Momment .... </h1>
    </div>;
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
                <div className="row mt-5 ">
                    <div className="col-md-6">
                        <img src="https://gym-website-25129.web.app/static/media/register.ee342221.svg" className='img-fluid' alt="" srcset="" />
                    </div>
                    <div className="col-md-5 froms mt-5 ">

                    <form>
  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1"  className="form-label">Email address</label>
    <input type="email"  
    
    value={email}
        onChange={(e) => setEmail(e.target.value)}
    className="form-control text-light bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="form-control bg-transparent text-light" id="exampleInputPassword1" />
  </div>
 
 <div className="d-flex">
 <button type="submit" className="btn btn-warning text-light " onClick={() => createUserWithEmailAndPassword(email, password)}>Register</button>
 <Link to="/login" className='ms-4 mt-2' > Already have a Account</Link>
 </div>



 <br/>
 <br/>

 <p className='text-center'>-----------------OR--------------------</p>
 <div className="d-flex fs-1 formsa">
<Google/>
<Github/>

 </div>
</form>
                    </div>


                </div>
            </div>
        </Layout>
    );
};

export default Reg;