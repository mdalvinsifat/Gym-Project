import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Second = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <div>
         <h1 className='color fs-1 text-center mt-5 mb-5 font-change '>What I Offer</h1>


         <div className="container-fluid">
            <div className="row  mb-5">
                <div className="col-md-4"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000">
      <div className="card" style={{width: '18rem'}}>
  <img src="https://gym-website-25129.web.app/static/media/offer1.e2e5579c.webp" className="card-img-top" alt="..." />
  <div className="body p-3 text-center">
    <h3>Body Building te</h3>
    <p>You’ll look at graphs and charts in Task One, how to approach the task</p>
  </div>
</div>

                </div>


                <div className="col-md-4"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" >
      <div className="card" style={{width: '18rem'}}>
  <img src="https://gym-website-25129.web.app/static/media/offer2.d369be63.webp" className="card-img-top" alt="..." />
  <div className="body p-3 text-center">
    <h3>Muscle Gain</h3>
    <p>You’ll look at graphs and charts in Task One, how to approach the task</p>
  </div>
</div>

                </div>






                <div className="col-md-4"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000">
      <div className="card" style={{width: '18rem'}}>
  <img src="https://gym-website-25129.web.app/static/media/offer3.a899e6b3.webp" className="card-img-top" alt="..." />
  <div className="body p-3 text-center">
    <h3>Weight Loss</h3>
    <p>You’ll look at graphs and charts in Task One, how to approach the task</p>
  </div>
</div>

                </div>
            </div>
         </div>
        </div>
    );
};

export default Second;