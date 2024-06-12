import React from 'react';
/* import imagen from './assests/nota3a.jpg';
import imagen2 from './assests/nota3b.jpg'; */
import imagen3 from './assests/nota3c.jpg'
import './cards3.css';

function cards() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          /*
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
           <img src={imagen} class="card-img-top " alt="..."/>
           <div class="card-body">
           <h5 class="card-title text-secondary">Card title</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div class=" text-body-secondary">
            2 days ago
           </div>
           </div>
          </div>
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
           <img src={imagen2} class="card-img-top" alt="..."/>
           <div class="card-body">
           <h5 class="card-title text-secondary">Card title</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div class=" text-body-secondary">
            2 days ago
           </div>
           </div>
          </div>
          */
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Corte de energía: ¿cuál es la razón por la que se corta la luz?</h5>
              <p class="card-text">¿Querés saber cuál es el motivo por el cual se corta la energía? ¿Querés saber cómo actuar frente a esta situación? Entrá a la nota.</p>
              <div class=" text-body-secondary">
                Fecha: 05/03/24
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default cards