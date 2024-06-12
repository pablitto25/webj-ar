
import React from 'react';
import './banner.css';
import banner from './assest/tecnologia-verde.webp';

const Banner7 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>Tecnología verde,</h1>
                <h1 className='BannerTexTitle'>tecnología Jackery</h1>
                <h2 className='BannerTexSubTitle'>Nuestro planeta reclama la transición energética. Empezá a formar parte del cambio con la energía limpia que nuestra marca ofrece.</h2>
                {/* <h2 className='BannerTexSubTitle'>Empezá a formar parte del cambio con la energía</h2>
                <h2 className='BannerTexSubTitle'>limpia de Jackery.</h2> */}
            </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width">
        <img src={banner} alt="Banner" className="banner-image fluid-img"  />
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

export default Banner7;

