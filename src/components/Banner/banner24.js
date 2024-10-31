
import React from 'react';
import './banner.css';
import banner from './assest/Los5LugaresMasAsomobrosos_portada.png';

const Banner24 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Los 5 lugares más asombrosos para hacer kayak en la Patagonia</h1>
            <h2 className='BannerTexSubTitle'>¿Querés tener una aventura inolvidable en la Patagonia? Te traemos los mejores lugares para hacer kayak en la región sur del país.</h2>
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

export default Banner24;

