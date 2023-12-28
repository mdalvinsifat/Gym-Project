import React from 'react';
import Layout from '../Layout/Layout';
import TrainerCard from './TrainerCard';

const Trainer = () => {
    return (
        <Layout>
           <div className="shop-bg">
           <div className="bg-trainer">
                <h1>Out <span className='orange'> Trainer</span></h1>
            </div>


            <div className="next text-dark text-center">

                <h1 className='text-center mt-5'>Lead <span> Trainer</span></h1>
                <p className='mt-5 mb-5 '> World is committed to making participation in the event a harassment free experience for everyone, regardless of level of experience.
</p>


<div className="container">
    <div className="row">
    <div className="col-md-4 ">
                    <div className="card" style={{width: '22rem'}}>
  <img src=" https://gym-website-25129.web.app/static/media/lead-trainer1.e5777898.jpg" className="card-img-top" alt="..." />
  <div className="body p-3 text-center text-light ">
 
   <h3>JHON STATHAM</h3>
   <p> Lead Trainer</p>
  </div>
</div>
                    </div>




                    <div className="col-md-4 ">
                    <div className="card" style={{width: '22rem'}}>
  <img src=" https://gym-website-25129.web.app/static/media/lead-trainer2.c99ce0fc.jpg" className="card-img-top" alt="..." />
  <div className="body p-3 text-center text-light ">
 
   <h3>DAVID WILLIAM</h3>
   <p> Lead Trainer</p>
  </div>
</div>
                    </div>





                    <div className="col-md-4 ">
                    <div className="card" style={{width: '22rem'}}>
  <img src=" https://gym-website-25129.web.app/static/media/lead-trainer3.0384b97e.jpg" className="card-img-top" alt="..." />
  <div className="body p-3 text-center text-light ">
 
   <h3>ROBERT DANY</h3>
   <p> Lead Trainer</p>
  </div>
</div>
                    </div>
    </div>


</div>


            </div>



           <TrainerCard/>
           </div>
        </Layout>
    );
};

export default Trainer;