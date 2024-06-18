
import React from 'react';
import './banner.css';
import banner from './assest/banner1.webp';

const Banner3 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>Corte de energía: ¿cuál es la razón por la que se corta la luz?</h1>
                <h2 className='BannerTexSubTitle'>
                ¿Quieres saber cuál es el motivo por el cual se corta la energía? ¿Quieres saber cómo actuar frente a esta situación?
                </h2>
            </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width">
        <img src={banner} alt="Banner" className="banner-image fluid-img" style={{height:"600px"}} />
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

export default Banner3;

