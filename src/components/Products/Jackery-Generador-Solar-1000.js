
import './Products.css'
import Cards5  from '../sliders/cards5';
import CardProduct from '../Card/cardProducts/CardProduct6'
import Gallery from '../gallery/gallery6';
import imagen from './assests/producto6/240131-Jackery-Web-Aspectos Generador Solar 1000-1920x1080-01.jpg'
import imagen2 from './assests/producto6/240131-Jackery-Web-Aspectos Generador Solar 1000-1920x1080-02.jpg'
/* import CardIcons from '../Card/cardIcons/cardIcons6';
import Calculator from '../calculator/calculator'; */
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const PRODUCTOS6 = () => {

  /* const watts = 1000;
  const wattsLimit = 1000; */

  return (
  
 <div className='conteiner'>
  <Helmet>
        <title>Todo lo que puedes alimentar con tu Explorer 240</title>
      </Helmet>
  <div className='conteinerProducts1'>
    <div className='conteinerProducts1Imagen'>
      <CardProduct/>
    </div>
    <div className='conteinerProducts1ImagenText'>
      <h1 className='textProducts'>Jackery Generador Solar 1000 </h1>
      {/* <h2 className='numberProducts'> $1.319.990</h2> */}
      <p className='BodyProducts'>Jackery Generador Solar 1000: Estación de Energía Portátil Jackery Explorer 1000 + Panel Solar SolarSaga 100W</p>
      <p className='BodyProducts'>Batería de litio de gran capacidad (1002 W)</p>
      <p className='BodyProducts'>1000 W de energía (sobretensión de 2000 W) </p>
      <p className='BodyProducts'>Diseño portátil y resistente</p>
      <p className='BodyProducts'>Carga al 100% tu equipo en tan solo 8 horas</p>
      <p className='BodyProducts'>Sistema de protección BMS </p>
      <p className='BodyProducts'>Indicadores en pantalla de potencia de entrada/salida y batería restante</p>
      <a href="/CONTACTO" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
        CONSULTAR
      </a>
      {/* <a href="https://www.mercadolibre.cl/ms/gz/checkout/buy-ms?px_variant_id=25186&item_id=MLC1428920151&parent_url=https://jackery.mercadoshops.cl/MLC-1428920151-jackery-generador-solar-1000-_JM&context=vip-mshops&channel=mshops&ms_store=jackery.mercadoshops.cl&quantity=1" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
        COMPRAR AHORA
      </a> */}
    </div>
  </div>
  <div className='conteinerProducts2'>
    <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Generador Solar 1000 </h1>
    <div className='borderContainer'>
            <p className='BodyProducts'>
            Jackery Generador Solar 1000 es la fórmula perfecta para proporcionar energía verde a tus diferentes dispositivos en simultáneo, debido a sus múltiples puertos de salida. ¡Ya no tienes de qué preocuparte en tus aventuras!
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
    <p className='BodyProducts'>Jackery generador solar 1000 es una solución solar que combina la central eléctrica portátil Jackery Explorer 1000 con 2 paneles solares SolarSaga de 100W. Convierte la energía solar capturada por los paneles solares SolarSaga de 100 W en energía eléctrica y luego la almacena en la central eléctrica portátil Explorer 1000 para su uso posterior. Este generador solar es una fuente de energía confiable y limpia para casas rodantes, vehículos recreativos o como respaldo de emergencia si se corta la energía.</p>
    </div>

  </div>
  <div className='conteinerProducts3'>
  <div className='ProductDescription'> 
    <h1 className='textProducts'>¿Por qué elegir el Jackery Generador Solar 1000? </h1>
  </div>
  <Gallery/>
  </div>
  <div className='conteinerProducts4'>
      <div className='ProductDescription'> 
        <h1 className='textProducts'>Descubre más sobre energía solar</h1>
      </div>
    <div className='containerReview'>
      <div className="cardReview">
        <div className='cardImgReview'>
        <img src={imagen} className="card-img-top" alt="..."/>
        </div>
      <div className='card-body cardbodyReview'>
        <div className='card2'>
        <h1 className='titleReview'>Súmate a la energía limpia</h1>
        <p className='textReview'>Nuestro planeta reclama la transición energética. Empieza a formar parte del cambio con la energía limpia de Jackery  </p>
        </div>
      </div>
      </div>
      <div className="cardReview" >
        <div className='cardImgReview'>
        <img src={imagen2} className="card-img-top" alt="..."/>
        </div>
      <div className='card-body cardbodyReview'>
        <div className='card2'>
        <h1 className='titleReview'>Expande tus conocimientos sobre energía solar</h1>
        <p className='textReview'> Ingresa aquí si quieres conocer más sobre el funcionamiento de los generadores solares</p>
        </div>
      </div>
      </div>
    </div>
  </div>
  {/* <div className='conteinerProducts5'>
  <h1 className='container textProducts center'>Todo lo que puedes alimentar con tu Jackery Generador Solar 1000</h1>
      <p className='container BodyProducts'>La estación de energía Explorer 1000 del generador puede cargar electrodomésticos como computadoras, cámaras, máquinas CPAP, parrillas eléctricas y más.</p>
    <CardIcons/>
  </div> */}
  <div className='conteinerProducts6'>
        {/* <div className='ProductDescription'>
          <h1 className='textProducts'>Simulador de tiempo de funcionamiento</h1>
          <p className='textReview'>Ingresa el voltaje de un dispositivo (que no exceda los 1000 W) y descubre cuánto tiempo, aproximadamente, puedes usarlo de manera continua si lo alimentas con el Explorer 1000 </p>
          <Calculator watts ={watts} wattsLimit = {wattsLimit}/>
          <p>*Ten en cuenta que los resultados son aproximados</p>
        </div> */}
        <p> </p>
        <div id="novedades" className="cardSlider container mb-3">
        <p className="texSlider">NOVEDADES</p>
          <Cards5 />
          <a href="/Blog/jackery-presenta-el-revolucionario-generador-solar" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
          </a>
        </div>
      </div>
      <footer className='conteinerFooter'>
        <Footer/>
      </footer>

 </div>




  );
};

export default PRODUCTOS6;