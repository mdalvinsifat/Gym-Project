import React from 'react';
import Navber from './Navber';
import Fotter from './Fotter';

const Layout = ({children}) => {
    return (
        <div>
            <Navber/>
           {children} 
           <Fotter/>
        </div>
    );
};

export default Layout;