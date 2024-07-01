import React from 'react';
import imagen3 from './assests/Jackery-explorer_500_5.jpg'
import './cards7.css';

function Cards14() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Jackery Explorer 500:</h5>
              <p class="card-text">No te pierdas la oportunidad de conocer los beneficios de tener una estación de energía solar en tu rutina.</p>
              <div class=" text-body-secondary">
                Fecha: 28/06/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards14