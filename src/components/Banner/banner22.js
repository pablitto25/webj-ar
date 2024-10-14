
import React from 'react';
import './banner.css';
import banner from './assest/paracaidismo.jpg';

const Banner21 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>5 lugares increíbles para hacer paracaidismo en Argentina</h1>
            <h2 className='BannerTexSubTitle'>¿Querés tener una aventura extrema en el aire? Te traemos los mejores lugares para hacer paracaidismo en Argentina.</h2>
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

