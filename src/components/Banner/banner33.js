
import React from 'react';
import './banner.css';
import banner from './assest/vacaciones_de_verano_header.png';

const Banner33 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Energía portátil para unas vacaciones de verano sin límites</h1>
            <h2 className='BannerTexSubTitle'>Ya planeaste tus vacaciones, pero ¿pensaste dónde enchufar tus dispositivos? Que tu diversión no se limite por la falta de energía. Entrá a la nota y enterate más.</h2>
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

export default Banner33;

