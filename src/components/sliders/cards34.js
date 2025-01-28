import React from 'react';
import imagen3 from '../sliders/assests/EnergiaPortatilParaTuProyecto_card.jpg'
import './cards7.css';

function Cards34() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Energía portátil para tu proyecto</h5>
              <p class="card-text">¿Querés dedicarte a tu proyecto y no querés renegar con alargadores? Entrá a la nota y enterate cómo hacerlo.</p>
              <div class=" text-body-secondary">
                Fecha: 03/01/25
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Cards34