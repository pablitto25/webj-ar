
import React from 'react';
import './banner.css';
import banner from './assest/banner-jacker-presenta.webp';

const Banner5 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>Jackery presenta</h1>
                <h2 className='BannerTexSubTitle'>el revolucionario generador</h2>
                <h2 className='BannerTexSubTitle'>solar Mars Bot en CES 2024: </h2>
                <h2 className='BannerTexSubTitle'>una nueva era para los</h2>
                <h2 className='BannerTexSubTitle'>generadores solares</h2>
                <p className='BannerTexBody'>
                Conoce el avance que Jackery presentó con respecto a los generadores solares: se viene una nueva era
                </p>
                {/* <a href="https://tu-pagina.com" className="buttonBanner mb-3" target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
          </a> */}
            </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width">
        <img src={banner} alt="Banner" className="banner-image fluid-img" style={{height:"500px"}} />
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

export default Banner5;

