import React from 'react';
import imagen3 from './assests/nota-de-blog-expo-san-juan-mineria-pieza-2.jpg'
import './cards7.css';

function Cards12() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Expo San Juan minera:</h5>
              <p class="card-text">Participamos, por primera vez, en uno de los eventos más importantes del sector minero en Argentina. Entrá a la nota y enterate cómo nos fue.</p>
              <div class=" text-body-secondary">
                Fecha: 31/05/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards12