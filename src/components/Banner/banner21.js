
import React from 'react';
import './banner.css';
import banner from './assest/QueHacerCuandoSeCortaLaLuz.png';

const Banner21 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Qué hacer si se corta la luz y necesitás trabajar</h1>
            <h2 className='BannerTexSubTitle'>¿Cuántas veces sufriste cortes de luz en plena jornada laboral y no sabías cómo seguir trabajando? Entrá a la nota y enterate la solución energética que tenemos para vos.</h2>
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

export default Banner21;

