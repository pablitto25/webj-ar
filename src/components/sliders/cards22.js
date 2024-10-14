import React from 'react';
import imagen3 from '../sliders/assests/Screenshot_1.png'
import './cards7.css';

function Cards20() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">5 lugares increíbles para hacer paracaidismo en Argentina</h5>
              <p class="card-text">¿Querés tener una aventura extrema en el aire? Te traemos los mejores lugares para hacer paracaidismo en Argentina.</p>
              <div class=" text-body-secondary">
                Fecha: 10/10/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards20