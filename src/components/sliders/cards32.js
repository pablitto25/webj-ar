import React from 'react';
import imagen3 from '../sliders/assests/TemperaturasExtremas-Card.webp'
import './cards7.css';

function Cards32() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Corte de luz: qué hacer ante temperaturas extremas
              </h5>
              <p class="card-text">Se avecinan los calores extremos del verano, ¿y no sabés cómo prepararte para los cortes de luz? Entrá a la nota y enterate más.</p>
              <div class=" text-body-secondary">
                Fecha: 26/12/24
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Cards32