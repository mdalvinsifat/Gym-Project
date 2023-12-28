import React from 'react';

const Fotter = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-5 fotter-background-color">
                    <div className="col-md-3">
                        <img src="https://gym-website-25129.web.app/static/media/logo.901d4f8d.webp" alt="" srcset="" className='w-50' />
                        <p>7770 Myfield Rd. Montgomery <br/> Village, MD 20886</p>
                        <br/>
                        <p> Support@gym.com </p>
                    </div>


                    <div className="col-md-3">
                        <h3>My Account</h3>

                        <p className='color-fotter mt-3'> About US</p>
                        <p className='color-fotter'> Contact US </p>
                        <p className='color-fotter'> Service </p>
                        <p className='color-fotter'>Privacy Policy</p>
                      
                        </div>



                        <div className="col-md-3">
                        <h3>Policies </h3>

                        <p className='color-fotter mt-3'>Gift Vouchers </p>
                        <p className='color-fotter'>  Support Center </p>
                        <p className='color-fotter'>                  
                                                    Delivery Information</p>
                        <p className='color-fotter'>Terms & Condition</p>
                        <p className='color-fotter'>Returns</p>
                        </div>

                        <div className="col-md-3">
                        <h3>Information
 </h3>

                        <p className='color-fotter mt-3'>Careers </p>
                        <p className='color-fotter'>  Fitness</p>
                        <p className='color-fotter'>                  
                        Tracking</p>
                        <p className='color-fotter'>Help and Advice</p>
                     
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Fotter;