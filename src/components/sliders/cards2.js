import React from 'react';
/* import imagen from './assests/nota2a.jpg';
import imagen2 from './assests/nota2b.jpg'; */
import imagen3 from './assests/nota2c.jpg'
import './cards2.css';

function cards() {
  return (
    <div className='conteiner'>
        <div className=' row justify-content-center '>

        {
        <div class="card border-0 mb-3" style={{ width: '18rem' }}>
        <img src={imagen3} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title text-secondary">Mejores cargadores solares para excursiones</h5>
        <p class="card-text">Conocé los beneficios de tener cargadores solares para tus aventuras</p>
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