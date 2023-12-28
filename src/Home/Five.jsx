import React from 'react';

const Five = () => {
    return (
        <div className='bg-image-from'>
        <div className="container-fluid mt-5">
            <div className="row mt-5">
                <div className="col-md-5">
             <h1>   BMI <span className='orange'>CHART</span></h1>




             {/* table start  */}


<table className='border'>
    <thead>
        <tr>
            <th> BMI</th>
            <th> WEIGHT STATUS </th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td> 18.5-24.9 </td>
            <td> Healthy </td>
        </tr>


        <tr>
            <td> 25.0-29.9 </td>
            <td> Overweight</td>
        </tr>





        <tr>
            <td>30 and Above</td>
            <td>Obese </td>
        </tr>


    </tbody>
</table>
             {/* table end  */}
                </div>


                <div className="col-md-6">
                    <h2>CALCULATE <span className='orange'>  YOUR BMI</span></h2>

                    <div className="d-flex ms-5">
   <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Height/cm</label>
  <input type="email" className="form-control bg-transparent " placeholder='Enter Your Height' id="exampleInputEmail1" aria-describedby="emailHelp" />
  
</div>

   <div className="mb-3 ms-5">
  <label htmlFor="exampleInputEmail1" className="form-label">Height/kg</label>
  <input type="email" className="form-control bg-transparent " placeholder='Enter Your Weight' id="exampleInputEmail1" aria-describedby="emailHelp" />
  
</div>
          </div>


          <div className="mb-3  mt-3 ms-5">
  <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
  <input type="email" className="form-control bg-transparent " placeholder='Enter Your Height' id="exampleInputEmail1" aria-describedby="emailHelp" />
</div>

<div className="d-flex ms-5">
<div className="d-flex ms-3">
    <p><input type="radio" />  Male </p>
</div>

<div className="d-flex ms-3">
    <p><input type="radio" />  FeMale </p>
</div>



<div className="d-flex ms-3">
    <p><input type="radio" />  Other's </p>
</div>
</div>



<div className="btn btn-warning ms-5">
Calculte
</div>

                </div>



            </div>
        </div>
        </div>
    );
};

export default Five;