import React from 'react';
import imagen3 from '../sliders/assests/scouts-cards.png'
import './cards7.css';

function Cards28() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Cómo la energía portátil facilita las salidas scout
              </h5>
              <p class="card-text">La energía portátil es la aliada que necesitás para organizar una salida scout inolvidable. Entrá a la nota y enterate más.</p>
              <div class=" text-body-secondary">
                Fecha: 5/12/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards28