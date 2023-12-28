import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
    <Layout>
            <div className='mt-5 text-center'>
            <h1 className='orange mt-5 mb-5'>404 page Not Found</h1>
            <div className="btn btn-primary ms-5 mb-5">
            <Link to='/' className='text-light ms-auto ms-5' > Back to Home </Link>
            </div>
        </div>
    </Layout>
    );
};

export default NotFound;