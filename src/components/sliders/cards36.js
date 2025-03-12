import React from 'react';
import imagen3 from '../sliders/assests/HomeOfice_Card.jpg'
import './cards7.css';

function Cards36() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Home office: energía portátil para hacer home en cualquier lugar</h5>
              <p class="card-text">Hacé portátil tu home office con Jackery. Entrá a la nota y enterate cómo hacerlo.</p>
              <div class=" text-body-secondary">
                Fecha: 08/03/25
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Cards36