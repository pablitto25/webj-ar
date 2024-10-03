
import React from 'react';
import './banner.css';
import banner from './assest/Los5LugaresMasDesafiantes.jpg';

const Banner17 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Los 5 lugares más desafiantes para hacer 4x4 en San Juan</h1>
            <h2 className='BannerTexSubTitle'>Conocé los sitios de San Juan en donde vas a sentir verdadera adrenalina. No te vas a arrepentir.</h2>
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

export default Banner17;

