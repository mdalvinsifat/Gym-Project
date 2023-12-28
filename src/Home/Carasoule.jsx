import React from 'react';

const Carasoule = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://gym-website-25129.web.app/static/media/home-img3.0e8efcb4.jpg"  className="d-block w-100 img-fluid img" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1>Be <span className='orange'>Strong </span> Training Hard</h1>
        <h5>Shape Your Body</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://gym-website-25129.web.app/static/media/home-img2.7f77946d.jpg" className="d-block w-100 img-fluid img" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>Be <span className='orange'>Strong </span> Training Hard</h1>
        <h5>Shape Your Body</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://gym-website-25129.web.app/static/media/home-img1.2226a331.jpg" className="d-block w-100 img-fluid img" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1>Be <span className='orange'>Strong </span> Training Hard</h1>
        <h5>Shape Your Body</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    );
};

export default Carasoule;