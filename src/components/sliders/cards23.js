import React from 'react';
import imagen3 from '../sliders/assests/salida_escolar.jpg'
import './cards7.css';

function Cards23() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Salida escolar: cómo la energía portátil facilita su organización</h5>
              <p class="card-text">¿Tenés que planear una salida escolar al aire libre y no sabés cómo asegurarte de que no falte la energía? Entrá a la nota y enterate la solución que tenemos para vos.</p>
              <div class=" text-body-secondary">
                Fecha: 22/10/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards23