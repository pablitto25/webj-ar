import React from 'react';
import imagen3 from './assests/DiaDeLaTierra.jpg'
import './cards6.css';

function Cards6() {
  return (
    <div className='conteiner'>
        <div className=' row justify-content-center '>
        {
        <div class="card border-0 mb-3" style={{ width: '18rem' }}>
        <img src={imagen3} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title text-secondary">Día de la tierra: Jackery se compromete por un futuro más ecológico</h5>
        <p class="card-text">La asamblea Asamblea General de la Organización de las Naciones Unidas (ONU) estipuló que hoy, 22 de abril, sea el día de la tierra.</p>
        <div class=" text-body-secondary">
        Fecha: 22/04/24
        </div>
        </div>
       </div>
      }




        </div>
    </div>
    
  )
}

export default Cards6