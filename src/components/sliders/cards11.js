import React from 'react';
import imagen3 from './assests/JackerGeneradorSolar-portada.webp'
import './cards7.css';

function Cards11() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Jackery generador solar 240:</h5>
              <p class="card-text">Conocé el generador solar 240 de Jackery: el generador que necesitá para tu próxima escapada al aire libre.</p>
              <div class=" text-body-secondary">
                Fecha: 21/05/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards11