import React from 'react';
import imagen3 from '../sliders/assests/Navidad-Card.png'
import './cards7.css';

function Cards31() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Energía portátil para una Navidad inolvidable
              </h5>
              <p class="card-text">¿Querés una Navidad especial para este año? Con energía portátil es posible. Entrá a la nota y enterate más.</p>
              <div class=" text-body-secondary">
                Fecha: 24/12/24
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Cards31