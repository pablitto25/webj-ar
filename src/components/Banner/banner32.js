
import React from 'react';
import './banner.css';
import banner from './assest/TemperaturasExtremas-header.png';

const Banner30 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Corte de luz: qué hacer ante temperaturas extremas</h1>
            <h2 className='BannerTexSubTitle'>Se avecinan los calores extremos del verano, ¿y no sabés cómo prepararte para los cortes de luz? Entrá a la nota y enterate más.</h2>
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

export default Banner30;

