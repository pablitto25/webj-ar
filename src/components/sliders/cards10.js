import React from 'react';
import imagen3 from './assests/SolucionMultifuncional-portada.webp'
import './cards7.css';

function Cards10() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Jackery, la solución multifuncional</h5>
              <p class="card-text">Descubrí todo lo que podés hacer con una estación de energía Jackery. Animate a inventar tu propio estilo de vida.</p>
              <div class=" text-body-secondary">
                Fecha: 17/05/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards10