import React from 'react';
import imagen3 from '../sliders/assests/corte-de-luz-card.jpg'
import './cards7.css';

function Cards29() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Cómo prepararse para un corte de luz prolongado
              </h5>
              <p class="card-text">Se acercan los cortes de luz previstos para este verano, ¿y no sabés cómo prepararte? No te preocupes, entrá a la nota y leé las recomendaciones que te traemos.</p>
              <div class=" text-body-secondary">
                Fecha: 6/12/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards29