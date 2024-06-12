
import React from 'react';
import './banner.css';
import banner from './assest/jackery solarsaga100.webp';

const Banner9 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>Panel Jackery Solarsaga 100w: 5 beneficios de implementarlo en tu vida</h1>
                <h2 className='BannerTexSubTitle'>Sumate a la energía limpia que ofrecemos. Entrá a la nota y conocé las ventajas de tener un panel solar en tu casa.</h2>
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

export default Banner9;

