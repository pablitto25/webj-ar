
import React from 'react';
import './banner.css';
import banner from './assest/corte-de-luz-blog.png';

const Banner27 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Cómo prepararse para los cortes de luz previstos para este verano</h1>
            <h2 className='BannerTexSubTitle'>Te traemos los mejores tips para afrontar los cortes de luz en este verano. Entrá a la nota y enterate más.</h2>
          </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width-three">
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

export default Banner27;

