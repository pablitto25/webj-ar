
import React from 'react';
import './banner.css';
import banner from './assest/Jackery-explorer-240_3.jpg';

const Banner8 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
         <div className='BannerTex'>
                <h1 className='BannerTexTitle'>Jackery Explorer 240:</h1>
             {/*<h1 className='BannerTexTitle'>la mejor estación de</h1>
                <h1 className='BannerTexTitle'>energía portátil para</h1>
                <h1 className='BannerTexTitle'>tus vacaciones</h1> */}
                <h2 className='BannerTexSubTitle'>¿Buscas una estación de energía portátil para tus próximas vacaciones de invierno con tu familia o amigos? Te invitamos a que leas esta nota y conozcas la Jackery Explorer 240.</h2>
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

export default Banner8;

