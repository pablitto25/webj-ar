
import React from 'react';
import './banner.css';
import banner from './assest/CorteDeLuzTuSolucion_Header.png';

const Banner35 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>¿Cortes de luz? Descubrí cómo un generador solar puede ser tu solución</h1>
            <h2 className='BannerTexSubTitle'>¿Cansado de los cortes de luz en el verano? Entrá a la nota y enterate la solución que tenemos para vos.</h2>
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

export default Banner35;

