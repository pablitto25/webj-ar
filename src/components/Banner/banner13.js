
import React from 'react';
import './banner.css';
import banner from './assest/solar_generator_for_refrigerator.jpg';

const Banner13 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>¿Qué son los generadores solares?</h1>
                <h2 className='BannerTexSubTitle'>Entrá a la nota si querés conocer más sobre el funcionamiento de los generadores solares.</h2>
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

export default Banner13;

