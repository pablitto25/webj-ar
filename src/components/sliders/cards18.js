import React from 'react';
import imagen3 from '../Banner/assest/comotrabajarsinconexion.webp'
import './cards7.css';

function Cards17() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Cómo trabajar sin conexión eléctrica para un rodaje en exteriores</h5>
              <p class="card-text">¿Tenés que producir contenido en un lugar donde no llega la electricidad? ¿Y no sabés cómo hacerlo? Tenemos la solución energética que buscás.</p>
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

export default Cards17