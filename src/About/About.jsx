import React from 'react';
import Layout from '../Layout/Layout';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <Layout>
            <div className="about-color">
            <div className='bg-image-about'>
                <h1 className='text-center mt-5'>About</h1>
            </div>



            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 p-5">
<h5>WellCome</h5>
<h1> Welcome To Crossfit GYM</h1>
<p> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>


                    <div className="col-md-5">
                 <img src="https://i.ibb.co/LYFML0J/product1.png" alt="" srcset="" className='ms-5' />
                    </div>
                </div>




                <div className="row">
                    <div className="col-md-5">
                        <img src="https://gym-website-25129.web.app/static/media/about-me.0731b5c2.webp" alt="" srcset="" className='img-fluid ' />
                    </div>


                    <div className="col-md-5 ms-5">
                        <h1>About Me</h1>

                        <p>
                        You’ll look at graphs and charts in Task One, how to approach the task and the language needed for a successful answer. You’ll examine Task Two questions and learn how to plan, write and check academic essays.
                        <br/>
                        <br/>
Task One, how to approach the task and the language needed for a successful answer. You’ll examine Task Two questions and learn how to plan, write and check academic essays.
                        </p>
                    </div>
                </div>
            </div>

            <AboutCard/>
            </div>
        </Layout>
    );
};

export default About;