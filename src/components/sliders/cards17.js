import React from 'react';
import imagen3 from '../Banner/assest/mejora-la-experiencia-de-tus-clientes.jpg'
import './cards7.css';

function Cards17() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Mejorá la experiencia de tus clientes como guía de turismo</h5>
              <p class="card-text">¿Buscás nuevas formas para asegurar una experiencia inolvidable a tus clientes? Entrá a la nota y enterate cuál es la solución que tenemos para ofrecerte.</p>
              <div class=" text-body-secondary">
                Fecha: 18/09/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards17