import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { auth } from '../Firebase';

const Navber = () => {

  const [user] = useAuthState(auth)
    return (
  <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark">
  <div className="container-fluid">
   
        <NavLink to="/"  className="navbar-brand" >
            <img src="https://gym-website-25129.web.app/static/media/logo.901d4f8d.webp" alt="" />
        </NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink to="/about" className="nav-link active" aria-current="page" href="#">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/shop" className="nav-link active" aria-current="page" href="#">Shop</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/trainer" className="nav-link active" aria-current="page" href="#">Out Trainer</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link active" aria-current="page" href="#">Contact</NavLink>
        </li>


        
      {
        user
         ?
         
         <li className="nav-item">
         <NavLink to="/login" className="nav-link active" aria-current="page" href="#">LogOut</NavLink>
       </li>
       : 

       <li className="nav-item">
       <NavLink to="/reg" className="nav-link active" aria-current="page" href="#">Reg</NavLink>
     </li>
  
      }
        
      </ul>
   
    </div>
  </div>
</nav>

    );
};

export default Navber;