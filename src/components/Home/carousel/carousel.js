import React from 'react'
import './Carousel.css'
import imagen from './assest/hero1.jpg'
import imagen2 from './assest/hero2.jpg'
import imagen3 from './assest/hero3.jpg'
import imagen4 from './assest/hero4.jpg'

const carousel1 = () => {
  return (

    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active d-flex align-items-center">
          <img src={imagen} className="d-block img-fluid w-100 imgHome1" alt="..." style={{ width: '1920px', height: '798px' }} />
          <div className="carousel-caption d-none d-md-block textCarousel carousel-text">
            <h1 className='carouselTexTitle'>Jackery</h1>
            <p className='carouselText'> La libertad de tener energía en cualquier lugar</p>
            <a href="#nuestroProducto" className="myButton" rel="noopener noreferrer">
              EXPLORAR MÁS
            </a>
          </div>
        </div>
        <div className="carousel-item ">
          <img src={imagen2} className="d-block img-fluid w-100 imgHome1" alt="..." style={{ width: '1920px', height: '798px' }} />
          <div className="carousel-caption d-none d-md-block carousel-text ">
            <p className='carouselText'> Anímate a crear tu estilo de vida en armonía con el entorno</p>
            <a href="/Blog/mejores-cargadores-solares-para-excursiones" className="myButton " target="_parent" rel="noopener noreferrer">
              EXPLORAR MÁS
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imagen3} className="d-block img-fluid w-100 imgHome1" alt="..." style={{ width: '1920px', height: '798px' }} />
          <div className="carousel-caption d-none d-md-block carousel-text">
            <p className='carouselText'> La marca líder en el mundo</p>
            <p className='carouselText'> 3 millones de unidades</p>
            <p className='carouselText'> más de 200 reviews en medios</p>
            <a href="/Blog/jackery-presenta-el-revolucionario-generador-solar" className="myButton " target="_blank" rel="noopener noreferrer">
              EXPLORAR MÁS
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imagen4} className="d-block img-fluid w-100 imgHome1" alt="..." style={{ width: '1920px', height: '798px' }} />
          <div className="carousel-caption d-none d-md-block carousel-text ">
            <p className='carouselText'>Energía portátil para lo que necesites:</p>
            <p className='carouselText'>aire libre, trabajo o emergencia</p>
            <a href="/Blog/corte-de-energia" className="myButton " target="_blank" rel="noopener noreferrer">
              EXPLORAR MÁS
            </a>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <svg xmlns="http://www.w3.org/2000/svg" id='arrowsSliders' width="40" height="40" fill="black" className="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12" />
        </svg>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <svg xmlns="http://www.w3.org/2000/svg" id='arrowsSliders' width="40" height="40" fill="black" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z" />
        </svg>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  )
}

export default carousel1