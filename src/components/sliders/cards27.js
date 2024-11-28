import React from 'react';
import imagen3 from '../sliders/assests/corte-de-luz.jpg'
import './cards7.css';

function Cards27() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Cómo prepararse para los cortes de luz previstos para este verano
              </h5>
              <p class="card-text">Te traemos los mejores tips para afrontar los cortes de luz en este verano. Entrá a la nota y enterate más.</p>
              <div class=" text-body-secondary">
                Fecha: 28/11/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards27