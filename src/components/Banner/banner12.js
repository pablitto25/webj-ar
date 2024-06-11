
import React from 'react';
import './banner.css';
import banner from './assest/nota-de-blog-expo-san-juan-miner.jpg';

const Banner12 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>Expo San Juan minera 2024: Jackery estuvo presente</h1>
                <h2 className='BannerTexSubTitle'>Participamos, por primera vez, en uno de los eventos más importantes del sector minero en Argentina. Entrá a la nota y enterate cómo nos fue.</h2>
            </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width-second">
      <img src={banner} alt="Banner" className="banner-image fluid-img"/>
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

export default Banner12;

