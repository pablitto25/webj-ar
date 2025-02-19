import React from 'react';
import imagen3 from '../sliders/assests/CorteDeLuzTuSolucion_Card.webp'
import './cards7.css';

function Cards34() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">¿Cortes de luz? Descubrí cómo un generador solar puede ser tu solución</h5>
              <p class="card-text">¿Cansado de los cortes de luz en el verano? Entrá a la nota y enterate la solución que tenemos para vos.</p>
              <div class=" text-body-secondary">
                Fecha: 18/02/25
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Cards34