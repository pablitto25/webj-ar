import React from 'react';
import imagen3 from './assests/Jackery-explorer-240_3.jpg'
import './cards7.css';

function Cards8() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Jackery Explorer: 240</h5>
              <p class="card-text">¿Buscas una estación de energía portátil para tus próximas vacaciones de invierno con tu familia o amigos? Te invitamos a que leas esta nota y conozcas la Jackery Explorer 240.</p>
              <div class=" text-body-secondary">
                Fecha: 09/05/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards8