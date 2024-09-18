
import React from 'react';
import './banner.css';
import banner from './assest/mejora-la-experiencia-de-tus-clientes.jpg';

const Banner17 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Mejorá la experiencia de tus clientes como guía de turismo</h1>
            <h2 className='BannerTexSubTitle'>¿Buscás nuevas formas para asegurar una experiencia inolvidable a tus clientes? Entrá a la nota y enterate cuál es la solución que tenemos para ofrecerte.</h2>
          </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width">
        <img src={banner} alt="Banner" className="banner-image fluid-img" />
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

export default Banner17;

