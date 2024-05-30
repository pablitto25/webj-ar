import React from 'react';
import './cardHome.css';
import imagen1 from './assests/Explorer 240.png'
import imagen2 from './assests/Explorer 500.png'
import imagen3 from './assests/Explorer 1000.png'
import imagen4 from './assests/Solarsaga 100.png'
import imagen5 from './assests/Generador solar 240.png'
import imagen6 from './assests/Generador solar 500.png'
import imagen7 from './assests/Generador solar 1000.png'
import imagen8 from './assests/Generador solar 1000 2 paneles solares.png'




const CardHome = () => {


  

  return (
    <div className='containerHomeCard'>
      <div id="carouselExampleProductHome" className="carousel slide">
        <div className="carousel-inner border-0">
          <div className="carousel-item active border-0">
            <div className="w-100 containerCards border-0">
              <div className='card cardHome border-0'>
                <a href='/PRODUCTOS/Jackery Explorer 240'><img src={imagen3} className="card-img-top img-fluid cardImgHome" alt="..." /></a>
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Explorer 240</p>
                </div>
              </div>
              <div className='card cardHome border-0'>
                <a href='PRODUCTOS/Jackery%20Explorer%20500'><img src={imagen2} className="card-img-top img-fluid cardImgHome" alt="..." /></a>
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Explorer 500</p>
                </div>
              </div>
              <div className='card cardHome border-0'>
                <a href='/PRODUCTOS/Jackery%20Explorer%201000'><img src={imagen1} className="card-img-top img-fluid cardImgHome" alt="..." /></a>
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Explorer 1000</p>
                </div>
              </div>
              <div className='card cardHome border-0'>
                <a href='/PRODUCTOS/Jackery%20SolarSaga%20100'><img src={imagen4} className="card-img-top img-fluid cardImgHome" alt="..." /></a>
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Solarsaga 100</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item  border-0">
            <div className=" w-100 containerCards">
            <div className='card cardHome border-0'>
                <a href='/PRODUCTOS/Jackery Generador Solar 240'><img src={imagen6}
                  className="card-img-top img-fluid cardImgHome" alt="..." /></a>
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Generador solar 240</p>
                </div>
              </div>
              <div className='card cardHome border-0'>
                <a href='/PRODUCTOS/Jackery Generador Solar 500'><img src={imagen5} className="card-img-top img-fluid cardImgHome" alt="..." /></a>
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Generador solar 500</p>
                </div>
              </div>
              <div className='card cardHome border-0'>
                <a href='/PRODUCTOS/Jackery Generador Solar 1000'><img src={imagen7} className="card-img-top img-fluid cardImgHome" alt="..." /></a>
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Generador solar 1000</p>
                </div>
              </div>
              <div className='card cardHome border-0'>
                <a href='/PRODUCTOS/Jackery Generador Solar 1000 - 2 paneles'><img src={imagen8} className="card-img-top img-fluid cardImgHome" alt="..." /></a>
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Generador solar 1000 2</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleProductHome" data-bs-slide="prev">
            <svg xmlns="http://www.w3.org/2000/svg" id='arrowsSliders' width="40" height="40" fill="black" className="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12" />
            </svg>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleProductHome" data-bs-slide="next">
            <svg xmlns="http://www.w3.org/2000/svg" id='arrowsSliders' width="40" height="40" fill="black" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z" />
            </svg>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
