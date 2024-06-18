import React from 'react';
import imagen3 from './assests/tecnologia-verde.webp'
import './cards7.css';

function Cards7() {
  return (
    <div className='conteiner'>
        <div className=' row justify-content-center '>
        {
        <div class="card border-0 mb-3" style={{ width: '18rem' }}>
        <img src={imagen3} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title text-secondary">Tecnología verde:</h5>
        <p class="card-text">Nuestro planeta reclama la transición energética. Empezá a formar parte del cambio con la energía limpia de Jackery.</p>
        <div class=" text-body-secondary">
        Fecha: 06/05/24
        </div>
        </div>
       </div>
      }




        </div>
    </div>
    
  )
}

export default Cards7