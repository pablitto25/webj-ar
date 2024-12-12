import React from 'react';
import imagen3 from '../sliders/assests/agro.png'
import './cards7.css';

function Cards29() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Algunas aplicaciones de energía portátil en el agro
              </h5>
              <p class="card-text">Conocé cómo la energía portátil puede revolucionar el agro. Entrá a la nota y enterate más.</p>
              <div class=" text-body-secondary">
                Fecha: 12/12/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards29