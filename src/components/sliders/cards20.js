import React from 'react';
import imagen3 from '../sliders/assests/pexels-bartosz-bartkowiak-2071510-3699828.jpg'
import './cards7.css';

function Cards20() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Los 5 lugares más desafiantes para hacer 4x4 en San Juan</h5>
              <p class="card-text">Conocé los sitios de San Juan en donde vas a sentir verdadera adrenalina. No te vas a arrepentir.</p>
              <div class=" text-body-secondary">
                Fecha: 02/10/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards20