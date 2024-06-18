
import React from 'react';
import './banner.css';
import banner from './assest/JackerGeneradorSolar-portada.webp';

const Banner11 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>Jackery generador solar 240: produce tu propia energía al aire libre</h1>
                <h2 className='BannerTexSubTitle'>Conoce el Generador solar 240 de Jackery: el generador que necesitás para tu próxima escapada al aire libre.</h2>
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

export default Banner11;

