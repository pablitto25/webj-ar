import React from 'react';
import imagen3 from '../sliders/assests/Cargadora-Frontal_2.png'
import './cards7.css';

function Cards26() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Cómo el uso de la energía portátil revoluciona el trabajo en la minería
              </h5>
              <p class="card-text">¿Un aliado para la industria minera? Es la energía portátil de Jackery. Entrá a la nota y enterate más.</p>
              <div class=" text-body-secondary">
                Fecha: 21/11/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards26