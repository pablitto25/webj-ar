import React from 'react';
import imagen1 from './assest/reseña1.png';
import imagen2 from './assest/reseña2.png';

import './carousel1.css';

const CarouselHome = () => {
  return (
    <div>
      <p className='titleReview'>En la voz de nuestros clientes</p>
      <div id="carouselHome" className="carousel slide caruselcontHome">
        <div className="carousel-inner  ">
          <div className="carousel-item active">
            <img src={imagen1} className="carousel-image caruselImgenHome  img-fluid " alt="..." />

          </div>
          <div className="carousel-item">
            <img src={imagen2} className="carousel-image caruselImgenHome  img-fluid " alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" id='review' type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
          <svg xmlns="http://www.w3.org/2000/svg" id='arrowsSliders' width="20" height="20" fill="black" className="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12" />
          </svg>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
        <svg xmlns="http://www.w3.org/2000/svg" id='arrowsSliders' width="20" height="20" fill="black" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z" />
            </svg>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CarouselHome;
