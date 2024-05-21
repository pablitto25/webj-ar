import React from 'react';
import imagen3 from './assests/SolucionMultifuncional-portada.webp'
import './cards7.css';

function Cards10() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Panel Jackery Solarsaga 100w</h5>
              <p class="card-text">Sumate a la energía limpia que ofrecemos. Entra a la nota y conoce las ventajas de tener un panel solar en tu casa.</p>
              <div class=" text-body-secondary">
                Fecha: 17/05/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards10