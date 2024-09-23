
import React from 'react';
import './banner.css';
import banner from './assest/comotrabajarsinconexion.webp';

const Banner18 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Cómo trabajar sin conexión eléctrica para un rodaje en exteriores</h1>
            <h2 className='BannerTexSubTitle'>¿Tenés que producir contenido en un lugar donde no llega la electricidad? ¿Y no sabés cómo hacerlo? Tenemos la solución energética que buscás.</h2>
          </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width img-custom">
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

export default Banner18;

