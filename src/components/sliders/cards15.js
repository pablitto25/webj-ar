import React from 'react';
import imagen3 from './assests/jackery_explorer_300_dfdb7cad-d906-45bc-9b71-16b510b691e2.webp'
import './cards7.css';

function Cards15() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">¿Qué son las estaciones de energía?</h5>
              <p class="card-text">Entrá a la nota si querés conocer más sobre el funcionamiento de las estaciones de energía.</p>
              <div class=" text-body-secondary">
                Fecha: 04/07/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards15