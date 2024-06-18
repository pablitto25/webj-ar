
import React from 'react';
import './banner.css';
import image1 from './assest/Imagen1.webp'

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>Teclado solar:</h1>
                <h2 className='BannerTexSubTitle'>¿Puede el generador solar alimentarlo?</h2>
                <h2 className='BannerTexSubTitle'>
                ¿Querés saber qué generador solar te conviene comprar para tu teclado solar? No te pierdas nuestra recomendación de compra?
                </h2>
                <a href="/BLOG/TecladoSolar" className="buttonBanner mb-3" rel="noopener noreferrer">
        EXPLORAR MÁS
          </a>
            </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width">
        <img src={image1} alt="Banner" className="banner-image fluid-img" style={{height:"600px"}} />
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

export default Banner;

