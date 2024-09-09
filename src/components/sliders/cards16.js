import React from 'react';
import imagen3 from '../Banner/assest/sierras-montanias.jpg'
import './cards7.css';

function Cards16() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">5 lugares para hacer trekking a 2 horas de Córdoba Capital</h5>
              <p class="card-text">¿Querés hacerte una escapada a las sierras? ¿Y no querés pasar todo el día manejando? Te traemos lugares imperdibles que no podés dejar de conocer.</p>
              <div class=" text-body-secondary">
                Fecha: 09/09/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards16