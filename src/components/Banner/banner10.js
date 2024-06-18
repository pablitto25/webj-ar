
import React from 'react';
import './banner.css';
import banner from './assest/LasolucionMultifuncional.webp';

const Banner10 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>Jackery, la solución multifuncional</h1>
                <h2 className='BannerTexSubTitle'>Descubrí todo lo que puedes hacer con una estación de energía Jackery. Animate a inventar tu propio estilo de vida.</h2>
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

export default Banner10;

