
import React from 'react';
import './banner.css';
import banner from './assest/jackery_explorer_300_dfdb7cad-d906-45bc-9b71-16b510b691e2.webp';

const Banner15 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>¿Qué son las estaciones de energía?</h1>
                <h2 className='BannerTexSubTitle'>Entrá a la nota si querés conocer más sobre el funcionamiento de las estaciones de energía.</h2>
            </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width">
        <img src={banner} alt="Banner" className="banner-image fluid-img"/>
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

export default Banner15;

