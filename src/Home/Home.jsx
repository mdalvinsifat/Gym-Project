import React from 'react';
import Layout from '../Layout/Layout';
import Carasoule from './Carasoule';
import Second from './Second';
import Three from './Three';
import Four from './Four';
import Five from './Five';

const Home = () => {
    return (
        <Layout>
            <Carasoule/>
            <Second/>
            <Three/>
            <Four/>
            <Five/>
        </Layout>
    );
};

export default Home;