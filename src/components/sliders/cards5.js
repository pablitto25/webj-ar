import React from 'react';
/* import imagen from './assests/nota5a.jpg';
import imagen2 from './assests/nota5b.jpg'; */
import imagen3 from './assests/nota5c.jpg'
import './cards5.css';

function cards() {
  return (
    <div className='conteiner'>
        <div className=' row justify-content-center '>
        {
        <div class="card border-0 mb-3" style={{ width: '18rem' }}>
        <img src={imagen3} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title text-secondary">Jackery presenta el revolucionario generador solar Mars Bot en CES 2024:  una nueva era para los generadores solares</h5>
        <p class="card-text">Conocé el avance que Jackery presentó con respecto a los generadores solares: se viene una nueva era</p>
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