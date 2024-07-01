
import React from 'react';
import './banner.css';
import banner from './assest/Jackery-explorer_500_5.jpg';

const Banner14 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>Jackery Explorer 500: 10 razones por las que tienes que comprarla</h1>
                <h2 className='BannerTexSubTitle'>No te pierdas la oportunidad de conocer los beneficios de tener una estación de energía solar en tu rutina.</h2>
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

export default Banner14;

