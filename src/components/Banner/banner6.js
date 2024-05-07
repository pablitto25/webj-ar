
import React from 'react';
import './banner.css';
import banner from './assest/DiaDeLaTierrra-Blog.jpg';

const Banner6 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>Día de la tierra:</h1>
                <h2 className='BannerTexSubTitle'>Jackery se compromete por</h2>
                <h2 className='BannerTexSubTitle'>un futuro más ecológico.</h2>
                {/* <p className='BannerTexBody'>
                Conoce el avance que Jackery presentó con respecto a los generadores solares: se viene una nueva era
                </p> */}
                <a href="/Blog/dia-de-la-tierra" className="buttonBanner mb-3" rel="noopener noreferrer">
        EXPLORAR MÁS
          </a>
            </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width">
        <img src={banner} alt="Banner" className="banner-image fluid-img"  />
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

export default Banner6;

