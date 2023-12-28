import React from 'react';
import Layout from '../Layout/Layout';

const Contact = () => {
    return (
        <Layout>
            <div className="bg-contact-image ">
                <h1> Contact Page </h1>
            </div>

            




            {/* form  */}

<div className="container-fluid">
    <div className="row mt-5">
        
            
        <div className="col-md-6 mt-5">

                    <div className="d-flex ms-5">
   <div className="mb-3">

  <input type="email" className="form-control bg-transparent " placeholder='Fast Name ' id="exampleInputEmail1" aria-describedby="emailHelp" />
  
</div>

   <div className="mb-3 ms-5">
  <input type="email" className="form-control bg-transparent " placeholder='Last Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
  
</div>
          </div>


          <div className="mb-3  mt-3 ms-5">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

  <input type="email" className="form-control bg-transparent " placeholder='Enter Your Height' id="exampleInputEmail1" aria-describedby="emailHelp" />
</div>


          <div className="mb-3  mt-3 ms-5">

          <label htmlFor="exampleInputEmail1" className="form-label">Example textarea</label>
          <br/>
<textarea name="messgae" id="" className='bg-transparent ' cols="70" rows="10"></textarea>
</div>

<div className="btn btn-primary ms-5">
    Submite
</div>





                </div>


                <div className="col-md-5 mt-5">
            <img src="https://gym-website-25129.web.app/static/media/map.899fde35.png" className='img-fluid mt-5' alt="" srcset="" />
        </div>

        </div>



        
    </div>



        </Layout>
    );
};

export default Contact;