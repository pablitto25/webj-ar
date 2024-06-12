
import './Products.css'
import React from 'react';
import Cards5 from '../sliders/cards5';
import CardProduct from '../Card/cardProducts/CardProduct3'
import Gallery from '../gallery/gallery3';
import imagen from './assests/producto3/240131-Jackery-Web-Aspectos Edxplorer 1000-1920x1080-01.jpg'
import imagen2 from './assests/producto3/240131-Jackery-Web-Aspectos Edxplorer 1000-1920x1080-02.jpg'
import CardIcons from '../Card/cardIcons/cardIcons3';
import Calculator from '../calculator/calculator';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const PRODUCTOS3 = () => {

  const watts = 1000;
  const wattsLimit = 1000;

  return (

    <div className='conteiner'>
      <Helmet>
        <title>Jackery Explorer 1000</title>
      </Helmet>
      <div className='conteinerProducts1'>
        <div className='conteinerProducts1Imagen'>
          <CardProduct />
        </div>
        <div className='conteinerProducts1ImagenText'>
          <h1 className='textProducts'>Jackery Explorer 1000 <br /> Estación de energía portátil</h1>
          <h2 className='numberProducts'> $2.559.999</h2>
          <p className='BodyProducts'>La Jackery Explorer 1000 es tan potente que carga ocho dispositivos simultáneamente. Ademeás, cuenta con una capacidad de batería de 1002Wh: la hace perfecta para el trabajo fuera de red y los cortes de energía.</p>
          <ul className='specifications'>
            <li>Capacidad: 46.4Ah / 21.6V (1002.2Wh)</li>
            <li>Peso: 10Kg</li>
            <li>Dimesiones: 33 x 23 x 28cm</li>
            <li>DC Entrada: 24V=7.5 A (soporta 12-30V)</li>
            <li>AC Salida: 2x230V - 50Hz, 4.34A, 1000W Max Continua, 2000W pico de sobretension</li>
            <li>Puerto automovil: 12V = 10A</li>
            <li>Salida USB: USB-A 2x USB-C PD, Qualcomm Quick Charge 3.0</li>
            <li>Batería: Ion Litio</li>
            <li>Ciclos: {'>'} 800</li>
            <li>Temperatura de funcionamiento: -10 / 40°C</li>
            <li>Temperatura de recarga: 0 / 40°C</li>
            <li>MPPT: Soporte de carga mppt de panel solar</li>
          </ul>
          {/* <p className='BodyProducts'>Batería de litio de 1002 Wh</p>
          <p className='BodyProducts'>1000 W de salida (2000 W de sobrecarga)</p>
          <p className='BodyProducts'>Diseño portátil</p>
          <p className='BodyProducts'>3 opciones de carga</p>
          <p className='BodyProducts'>4 modalidades de salida</p>
          <p className='BodyProducts'>Alimenta hasta 7 dispositivos en simultáneo</p>
          <p className='BodyProducts'>Indicadores en pantalla de potencia de entrada/salida y batería restante</p> */}
          {/* <a href="/CONTACTO" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
            CONSULTAR
          </a> */}
          <a href="https://www.mercadolibre.com.ar/ms/gz/checkout/buy-ms?px_variant_id=25186&item_id=MLA1714277028&parent_url=https://shipinarba.mercadoshops.com.ar/estacion-de-energia-portatil-jackery-explorer-1000w-camping/p/MLA27793308&context=pdp-mshops&channel=mshops&ms_store=shipinarba.mercadoshops.com.ar&quantity=1" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
            COMPRAR AHORA
          </a>
        </div>
      </div>
      <div className='conteinerProducts2'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>Jackery Explorer 1000</h1>
          <div className='borderContainer'>
            <p className='BodyProducts'>
              ¡Creá tu propio estilo de vida! La Explorer 1000 es una estación de energía portátil lo suficientemente potente para alimentar tus dispositivos electrónicos favoritos y lo suficientemente liviana para llevarla a cualquier parte.
            </p>
          </div>
        </div>
        <div className='ProductVideo'>
          <div className='ProductVideo'>
            <iframe
              width='100%'
              height='400px'
              src="https://www.youtube.com/embed/8GAqwHSyzkk"
              title='Product Video'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className='ProductDescription'>
          <p className='BodyProducts'>La Jackery Explorer 1000 es una de las estaciones de energía más poderosas por su batería de 1002 Wh y múltiples puertos. El control de carga del MPPT incorporado asegura una carga solar eficiente y estable para alimentar las máquinas CPAP, taladros eléctricos, computadoras, y más.</p>
        </div>

      </div>
      <div className='conteinerProducts3'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>¿Por qué elegir la Jackery Explorer 1000?</h1>
        </div>
        <Gallery />
      </div>
      <div className='conteinerProducts4'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>Descubrí más sobre energía solar</h1>
        </div>
        <div className='containerReview'>
          <div className="cardReview">
            <div className='cardImgReview'>
              <img src={imagen} className="card-img-top" alt="..." />
            </div>
            <div className='card-body cardbodyReview'>
              <div className='card2'>
                <h1 className='titleReview'>La solución multifuncional</h1>
                <p className='textReview'>Descubrí todo lo que puedes hacer con una estación de energía Jackery. Anímate a inventar tu propio estilo de vida</p>
              </div>
            </div>
          </div>
          <div className="cardReview" >
            <div className='cardImgReview'>
              <img src={imagen2} className="card-img-top" alt="..." />
            </div>
            <div className='card-body cardbodyReview'>
              <div className='card2'>
                <h1 className='titleReview'>Súmate a la energía limpia</h1>
                <p className='textReview'>Nuestro planeta reclama la transición energética. Empezá a formar parte del cambio con la energía limpia de Jackery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='conteinerProducts5'>
        <h1 className='container textProducts center'>Todo lo que podés alimentar con tu Explorer 1000</h1>
        <p className='container BodyProducts'>Equipada con varios puertos, incluyendo dos USB-C, dos USB-A, dos tomas de corriente AC y un puerto de auto DC, la Explorer 1000 puede cargar electrodomésticos como computadoras, cámaras, máquinas CPAP, parrillas eléctricas y más.</p>
        <CardIcons />
      </div>
      <div className='conteinerProducts6'>
        <div className='ProductDescription'>
          <div className='text-center'>
            <h1 className='textProducts'>Simulador de tiempo de funcionamiento</h1>
            <p className='textReview'>Ingresá el voltaje de un dispositivo (que no exceda los 1000 W) y descubrí cuánto tiempo, aproximadamente, podés usarlo de manera continua si lo alimentás con la Explorer 1000. </p>
          </div>
          <Calculator watts={watts} wattsLimit={wattsLimit} />
          <p>*Tené en cuenta que los resultados son aproximados</p>
        </div>
        <div id="novedades" className="cardSlider container mb-3">
          <p className="texSlider">NOVEDADES</p>
          <Cards5 />
          <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
            EXPLORAR MÁS
          </a>
        </div>
      </div>
      <footer className='conteinerFooter'>
        <Footer />
      </footer>

    </div>




  );
};

export default PRODUCTOS3;