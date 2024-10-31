import React from 'react';
import imagen3 from '../sliders/assests/IZI8Bo4x-_720x0__1.jpg'
import './cards7.css';

function Cards24() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Los 5 lugares más asombrosos para hacer kayak en la Patagonia</h5>
              <p class="card-text">¿Querés tener una aventura inolvidable en la Patagonia? Te traemos los mejores lugares para hacer kayak en la región sur del país.</p>
              <div class=" text-body-secondary">
                Fecha: 31/10/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards24