
import React from 'react';
import './banner.css';
import banner from './assest/How_Many_kWh_Does_A_House_Use.png';

const Banner25 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Generadores solares vs generadores tradicionales</h1>
            <h2 className='BannerTexSubTitle'>Se avecinan cortes de luz programados para este verano. ¿No sabés qué tipo de generador te conviene comprar? Entrá a la nota y enterate cuál es la mejor opción energética para vos.</h2>
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

export default Banner25;

