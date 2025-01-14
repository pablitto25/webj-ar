import React from 'react';
import imagen3 from '../sliders/assests/vacaciones_de_verano_card.jpg'
import './cards7.css';

function Cards33() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Energía portátil para unas vacaciones de verano sin límites
              </h5>
              <p class="card-text">Ya planeaste tus vacaciones, pero ¿pensaste dónde enchufar tus dispositivos? Que tu diversión no se limite por la falta de energía. Entrá a la nota y enterate más.</p>
              <div class=" text-body-secondary">
                Fecha: 10/01/25
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Cards33