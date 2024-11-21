
import React from 'react';
import './banner.css';
import banner from './assest/Cargadora-Frontal.jpg';

const Banner26 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Cómo el uso de la energía portátil revoluciona el trabajo en la minería</h1>
            <h2 className='BannerTexSubTitle'>¿Un aliado para la industria minera? Es la energía portátil de Jackery. Entrá a la nota y enterate más.</h2>
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

export default Banner26;

