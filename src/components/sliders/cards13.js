import React from 'react';
import imagen3 from './assests/solar_generator_for_refrigerator.jpg'
import './cards7.css';

function Cards13() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">¿Qué son los generadores solares?</h5>
              <p class="card-text">Entrá a la nota si querés conocer más sobre el funcionamiento de los generadores solares.</p>
              <div class=" text-body-secondary">
                Fecha: 25/06/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards13