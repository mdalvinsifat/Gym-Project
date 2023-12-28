import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const RegError = () => {
    return (
     <Layout>
           <div className='mt-5 text-center'>
            <h1 className='orange mt-5 mb-5'> Please check Your Email And Password .... </h1>
            <div className="btn btn-danger ms-5">
            <Link to='/' className='text-light ms-auto ms-5' > Back to Home </Link>
            </div>
        </div>
     </Layout>
    );
};

export default RegError;