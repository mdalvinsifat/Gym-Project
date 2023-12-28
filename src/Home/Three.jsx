import React from 'react';
import { CgGym } from "react-icons/cg";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
const Three = () => {
    return (
        <div>
            <h1 className='fs-1 text-center mt-5 mb-5 orange'>Benefits Our GYM Center</h1>
          <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-md-3 d-flex">
             <div className="icon1 mt-5 ">
             <CgGym  className='icon'/>
             </div>
               <div className="pera  ms-1">
               <h4>Instructional Videos</h4>
                <p>Gym trainers provide our printable calendars, thats give you the means to stay organized & motivated through each program. Cross of one day at a time and see how far you've come!</p>
               </div>

                </div>

                <div className="col-md-3 d-flex">
                
             <div className="icon1 ms-2 mt-5 ">
             <FaCalendarAlt    className='icon'/>
             </div>
               <div className="pera  ms-1">
               <h4>Training Calendars </h4>
                <p>No training program is complete solution without a great meal plan. Our Fitness care trainers provide a shopping lists, recipes, and even a great examples of weekly meal plans so.</p>
               </div>

          




                </div>

                <div className="col-md-3 d-flex">
                
             <div className="icon1 ms-2 mt-5 ">
             <FaMobile     className='icon'/>
             </div>
               <div className="pera  ms-1">
               <h4>Mobile App & Free WiFi </h4>
                <p>Choose your perfect work-out plan and track your workout with the press of a mobile app button, when ever u want. Finess Care up-coming mobile apps will make fitness fit in palm hand.</p>
               </div>

          




                </div>
                <div className="col-md-3 d-flex">
                
             <div className="icon1 ms-2 mt-5 ">
             <MdSupportAgent      className='icon'/>
             </div>
               <div className="pera  ms-1">
               <h4>Community Support</h4>
                <p>Find friends and like-minded fitness buffs on BodySpace! With an army of supporters behind you, you'll never feel like you're training alone. Instructions to every exercise so you never walk..</p>
               </div>

          




                </div>

             


            </div>
          </div>
        </div>
    );
};

export default Three;