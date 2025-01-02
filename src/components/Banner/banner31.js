
import React from 'react';
import './banner.css';
import banner from './assest/Navidad-Header.jpg';

const Banner30 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Energía portátil para una Navidad inolvidable</h1>
            <h2 className='BannerTexSubTitle'>¿Querés una Navidad especial para este año? Con energía portátil es posible. Entrá a la nota y enterate más.</h2>
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

