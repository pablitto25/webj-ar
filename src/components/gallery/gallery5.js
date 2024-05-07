import React from 'react'
import './gallery.css'

import imagen from './assests/gallery5/2 años de garantía oficial.png'
import imagen2 from './assests/gallery5/A prueba de agua y polvo IP65.png'
import imagen3 from './assests/gallery5/Alta eficiencia de conversión de hasta el 23_.png'
import imagen4 from './assests/gallery5/Apta para outdoor (-10° a 40°).png'
import imagen5 from './assests/gallery5/Fácil de instalar.png'
import imagen6 from './assests/gallery5/Portátil, durable y silencioso_.png'
import imagen7 from './assests/gallery5/Salidas USB-C y USB-A.png'


const gallery5 = () => {
  return (
    <div className='containerImg'>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen} alt='imagen1' >
                    </img>
                    <figcaption className='imgCaption'>Portátil y silencioso</figcaption>
                </figure>

        </div>
        <div className='boxImg'>

                <figure>
                    <img className='imgGallery' src={imagen2} alt='imagen1' >
                    </img>
                    <figcaption className='imgCaption'>Fácil de instalar</figcaption>
                </figure>

        </div>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen3} alt='imagen1' >
                    </img>
                    <figcaption className='imgCaption'>Controlador de carga MPPT incorporado</figcaption>
                </figure>
        </div>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen4} alt='imagen1' >
                    </img>
                    <figcaption className='imgCaption'>Hecho para durar:</figcaption>
                    <figcaption className='imgCaption2'>a prueba de golpes y polvo</figcaption>
                </figure>
        </div>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen5} alt='imagen1' >
                    </img>
                    <figcaption className='imgCaption'>2 años de garantía oficial</figcaption>
                </figure>
        </div>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen6} alt='imagen1' >
                    </img>
                    <figcaption className='imgCaption'>Apta para outdoor (-10° a 40°)</figcaption>
                </figure>
        </div>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen7} alt='imagen1' >
                    </img>
                    <figcaption className='imgCaption'>A prueba de agua y polvo IP65</figcaption>
                </figure>
        </div>

    </div>
  )
}

export default gallery5