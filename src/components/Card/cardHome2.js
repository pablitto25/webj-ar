
import React from 'react';
import './cardHome2.css'
import imagen1 from './assests/Generador solar 240.png'
import imagen2 from './assests/Generador solar 500.png'
import imagen3 from './assests/Generador solar 1000.png'
import imagen4 from './assests/Solarsaga 100.png'
import imagen5 from './assests/Generador solar 1000 2 paneles solares.png'


const cardhome2 = () => {
  return (

    <div className='containerCards2'>
      <p className='homeTextTitle'>Productos destacados</p>
      <div id="carouselExample2" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='containerCards2'>
              <div className="card border-0 cardHome2" >
                <a href='/PRODUCTOS/Jackery%20Generador%20Solar%20240'><img src={imagen2} className="card-img-top cardImgHome2" alt="..." /></a>
                <div className="card-body">
                  <p className="card-text cardText2">Combo</p>
                  <p className="card-text cardTextTitle2">Generador solar 240</p>
                </div>
              </div>
              <div className="card border-0 cardHome2" >
                <a href='/PRODUCTOS/Jackery%20Generador%20Solar%20500'><img src={imagen1} className="card-img-top cardImgHome2" alt="..." /></a>
                <div className="card-body">
                  <p className="card-text cardText2">Combo</p>
                  <p className="card-text cardTextTitle2">Generador solar 500</p>
                </div>
              </div>
              <div className="card border-0 cardHome2" >
                <a href='/PRODUCTOS/Jackery%20Generador%20Solar%201000'><img src={imagen3} className="card-img-top cardImgHome2" alt="..." /></a>
                <div className="card-body">
                  <p className="card-text cardText2">Combo</p>
                  <p className="card-text cardTextTitle2">Generador solar 1000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className='containerCards2'>
              <div className="card border-0 cardHome2" >
                <img src={imagen4} className="card-img-top cardImgHome2" alt="..." />
                <div className="card-body">
                  <p className="card-text cardText2 ">Panel solar</p>
                  <p className="card-text cardTextTitle2">Solarsaga 100</p>
                </div>
              </div>
              <div className="card border-0 cardHome2">
                <a href='/PRODUCTOS/Jackery Generador Solar 1000'><img src={imagen5} className="card-img-top cardImgHome2" alt="..." /></a>
                <div className="card-body">
                  <p className="card-text cardText2">Combo</p>
                  <p className="card-text cardTextTitle2">Generador solar 1000 2</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
        <svg xmlns="http://www.w3.org/2000/svg" id='arrowsSliders' width="40" height="40" fill="black" className="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12" />
            </svg>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
        <svg xmlns="http://www.w3.org/2000/svg" id='arrowsSliders' width="40" height="40" fill="black" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z" />
            </svg>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>


  );
};

export default cardhome2;
