
import React from 'react';
import './banner.css';
import banner from './assest/salida_escolar_2.png';

const Banner23 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Salida escolar: cómo la energía portátil facilita su organización</h1>
            <h2 className='BannerTexSubTitle'>¿Tenés que planear una salida escolar al aire libre y no sabés cómo asegurarte de que no falte la energía? Entrá a la nota y enterate la solución que tenemos para vos.</h2>
          </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width-second">
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

export default Banner23;

