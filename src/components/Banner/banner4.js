
import React from 'react';
import './banner.css';
import banner from './assest/banner4.webp';

const Banner4 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>La guía definitiva</h1>
                <h2 className='BannerTexSubTitle'>de tipos de paneles </h2>
                <h2 className='BannerTexSubTitle'>solares</h2>
                <p className='BannerTexBody'>
                Conoce en detalle las características y el funcionamiento de los paneles solares
                </p>
                {/* <a href="https://tu-pagina.com" className="buttonBanner mb-3" target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
          </a> */}
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

export default Banner4;

