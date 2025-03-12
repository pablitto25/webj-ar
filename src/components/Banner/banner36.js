
import React from 'react';
import './banner.css';
import banner from './assest/HomeOffice_Header.png';

const Banner36 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Home office: energía portátil para hacer home en cualquier lugar</h1>
            <h2 className='BannerTexSubTitle'>Hacé portátil tu home office con Jackery. Entrá a la nota y enterate cómo hacerlo.</h2>
          </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width-second">
        <img src={banner} alt="Banner" className="banner-image fluid-img" />
      </div>
      <div className="div3">
        <div className="stripe-2"></div>
        <div className="stripe-8">
        </div>
        <div className="stripe-2"></div>
      </div>
    </div>
  );
};

export default Banner36;

