import React from 'react';
/* import imagen from './assests/nota4a.jpg'; */
import imagen2 from './assests/nota4b.jpg';
import './cards4.css';

function cards() {
  return (
    <div className='conteiner'>
        <div className=' row justify-content-center '>
        {
        /*
        <div class="card border-0 mb-3" style={{ width: '18rem' }}>
         <img src={imagen} class="card-img-top" alt="..."/>
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
         <img src={imagen2} class="card-img-top" alt="..."/>
         <div class="card-body">
         <h5 class="card-title text-secondary">La guía definitiva de tipos de paneles solares</h5>
         <p class="card-text">Conocé en detalle las características y el funcionamiento de los paneles solares.</p>
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