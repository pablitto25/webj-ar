import React from 'react';
import './cardHomeNews.css';

const CardHomeNew = () => {
  return (
    <div className='featuredProductContainer'>
      <div className='conteinerBodyText'>
        {/* <p className='homeText'>Nuevos ingresos 2024</p> */}
        <h1 className='homeTextTitle'>Jackery, la solución multifuncional</h1>
        <span className='homeText'>Nuestros productos son la solución multifuncional que estás buscando: ofrecemos fuentes de energía, pensadas para ser usadas en cualquier momento y lugar. Son ideales para ser utilizadas en el trabajo, casos de emergencia, actividades outdoor o como respaldo de energía en el hogar. Y lo mejor de todo es que son respetuosas con el medio ambiente ya que pueden ser cargadas por medio de energía solar.</span>

      </div>
      <a href="/PRODUCTOS/Jackery%20Generador%20Solar%201000%20-%202%20paneles" className="myButtonHome featuredProductButton" rel="noopener noreferrer">
        EXPLORAR MÁS
      </a>
    </div>
  );
};

export default CardHomeNew;