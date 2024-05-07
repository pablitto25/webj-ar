
import './Home.css'
import Carousel1 from './carousel/carousel';
import React from 'react';
import CardHomeNew from '../cardHome/cardHomeNews.js';
import CardHome from '../Card/cardHome.js'
import Cardhome2 from '../Card/cardHome2.js';
import imagen from './assests/imagen-news-home.webp'
import CarouselHome from './carousel/carousel1.js';
import Footer from '../Footer/Footer.js';
import { Helmet } from 'react-helmet';


const HOME = () => {


  return (
  
    <div className='conteiner conteinerHome'>
      <Helmet>
        <title>Jackery Argentina - Home</title>
      </Helmet>
      <header className='conteinerHeader'>
        <div className='conteinerhome'>
        <Carousel1/>
        </div>
        <div className='SliderProducts'>
        <h1 id='nuestroProducto' className='TexTitle'>NUESTROS PRODUCTOS</h1>
        <div className='SliderCards'>
        <CardHome/>
        </div>
        </div>
      </header>

      <div className='conteinerBody'> 
        <div className='conteinerBody2'>
          <CardHomeNew/>
          <div className='conteinerBody22'>
            <img className='imagenHome' src={imagen} alt='imagen' />
          </div>
        </div>
        <div className='conteinerBody4'>
        <Cardhome2/>
        </div>
        <div className='conteinerBody3'>
          <div className='conteinerBody31'>
          </div>
          <div className='conteinerBody32'>
          <CarouselHome/>
          </div>
        </div>
      </div>
      <footer className='conteinerFooter'>
        <Footer/>
      </footer>
    </div>


  );
};

export default HOME;