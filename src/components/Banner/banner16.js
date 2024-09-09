
import React from 'react';
import './banner.css';
import banner from './assest/sierras-montanias.jpg';

const Banner16 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>5 lugares para hacer trekking a 2 horas de Córdoba Capital</h1>
            <h2 className='BannerTexSubTitle'>¿Querés hacerte una escapada a las sierras? ¿Y no querés pasar todo el día manejando? Te traemos lugares imperdibles que no podés dejar de conocer.</h2>
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

export default Banner16;

