import React from 'react';
import imagen3 from '../sliders/assests/How_Many_kWh_Does_A_House_Use.webp'
import './cards7.css';

function Cards25() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Generadores solares vs generadores tradicionales</h5>
              <p class="card-text">Se avecinan cortes de luz programados para este verano. ¿No sabés qué tipo de generador te conviene comprar? Entrá a la nota y enterate cuál es la mejor opción energética para vos.</p>
              <div class=" text-body-secondary">
                Fecha: 07/11/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards25