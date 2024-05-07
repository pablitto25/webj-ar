import React from 'react';
import './cardHomeNews.css';

/* 
Jackery tiene como principal propósito brindar energía solar para todas las personas que lo precisen, sea que la requieran para actividades outdoor, indoor, o, bien, para casos de emergencia, salud, trabajo, entre otros. En efecto, Jackery se presenta como aquella solución multifuncional que se adapta a cualquier tipo de circunstancia.
 */


const CardHomeNew = () => {
  return (
    <div className='featuredProductContainer'>
      <div className='conteinerBodyText'>
        {/* <p className='homeText'>Nuevos ingresos 2024</p> */}
        <h1 className='homeTextTitle'>Jackery, la solución multifuncional</h1>
        <span className='homeText'>Jackery tiene como principal propósito brindar energía solar para todas las personas que lo precisen, sea que la requieran para actividades outdoor, indoor, o, bien, para casos de emergencia, salud, trabajo, entre otros. En efecto, Jackery se presenta como aquella solución multifuncional que se adapta a cualquier tipo de circunstancia.</span>

      </div>
      <a href="/PRODUCTOS/Jackery%20Generador%20Solar%201000%20-%202%20paneles" className="myButtonHome featuredProductButton" rel="noopener noreferrer">
        EXPLORAR MÁS
      </a>
    </div>
  );
};

export default CardHomeNew;