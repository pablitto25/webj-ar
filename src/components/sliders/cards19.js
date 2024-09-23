import React from 'react';
import imagen3 from '../Banner/assest/Como-construir-una-casita-para-perros-de-manera-rapida-y-facil.jpeg'
import './cards7.css';

function Cards19() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Cómo construir una casita para perros de manera rápida y fácil</h5>
              <p class="card-text">¿Querés construir una casita para tu perro? Te enseñamos a cómo hacerlo en esta nota.</p>
              <div class=" text-body-secondary">
                Fecha: 23/09/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards19