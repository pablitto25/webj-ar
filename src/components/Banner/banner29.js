
import React from 'react';
import './banner.css';
import banner from './assest/corte-de-luz-prolongado-header.png';

const Banner29 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Cómo prepararse para un corte de luz prolongado</h1>
            <h2 className='BannerTexSubTitle'>Se acercan los cortes de luz previstos para este verano, ¿y no sabés cómo prepararte? No te preocupes, entrá a la nota y leé las recomendaciones que te traemos.</h2>
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

export default Banner29;

