
import './Products.css'
import Cards5  from '../sliders/cards5';
import CardProduct from '../Card/cardProducts/CardProduct6'
import Gallery from '../gallery/gallery6';
import imagen from './assests/producto6/120624-Jackery-Web-Landing-Generador.jpg'
import imagen2 from './assests/producto6/120624-Jackery-Web-Landing-Generador 1000-D.jpg'
import CardIcons from '../Card/cardIcons/cardIcons6';
import Calculator from '../calculator/calculator';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const PRODUCTOS6 = () => {

  const watts = 1000;
  const wattsLimit = 1000;

  return (
  
 <div className='conteiner'>
  <Helmet>
        <title>Jackery Generador Solar 1000</title>
      </Helmet>
  <div className='conteinerProducts1'>
    <div className='conteinerProducts1Imagen'>
      <CardProduct/>
    </div>
    <div className='conteinerProducts1ImagenText'>
      <h1 className='textProducts'>Jackery Generador Solar 1000 </h1>
      {/* <h2 className='numberProducts'> $1.319.990</h2> */}
      <p className='BodyProducts'>El Jackery Generador Solar 1000 combina la estación de energía Jackery Explorer 1000 y el panel solar SolarSaga 100W. Conseguí este generador súper potente para cualquier situación: actividades outdoor, trabajo off grid o cortes de energía.</p>
          <ul className='specifications'>
            <li>Capacidad: 46.4Ah / 21.6 V (1002.2Wh)</li>
            <li>Peso: 10Kg</li>
            <li>Dimesiones: 33 x 23 x 28cm</li>
            <li>DC Entrada: 24V=7.5A (soporta 12-30V)</li>
            <li>AC Salida: 2x230V - 50Hz, 4.34A, 1000W Max Continua, 2000W pico de sobretension</li>
            <li>Puerto automovil: 12V = 10A</li>
            <li>Salida USB: USB-A, 2x USB-C PD, Qualcomm Quick Charge 3.0</li>
            <li>Batería: Ion Litio</li>
            <li>Ciclos: {'>'} 800</li>
            <li>Temperatura de funcionamiento: -10 / 40°C</li>
            <li>Temperatura de recarga: 0 / 40°C</li>
            <li>MPPT: Soporte de carga mppt de panel solar</li>
          </ul>
{/*       <p className='BodyProducts'>Jackery Generador Solar 1000: Estación de Energía Portátil Jackery Explorer 1000 + Panel Solar SolarSaga 100W</p>
      <p className='BodyProducts'>Batería de litio de gran capacidad (1002 W)</p>
      <p className='BodyProducts'>1000 W de energía (sobretensión de 2000 W) </p>
      <p className='BodyProducts'>Diseño portátil y resistente</p>
      <p className='BodyProducts'>Carga al 100% tu equipo en tan solo 8 horas</p>
      <p className='BodyProducts'>Sistema de protección BMS </p>
      <p className='BodyProducts'>Indicadores en pantalla de potencia de entrada/salida y batería restante</p> */}
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
        <h1 className='textProducts'>Descubrí más sobre energía solar</h1>
      </div>
    <div className='containerReview'>
      <div className="cardReview">
        <div className='cardImgReview'>
        <img src={imagen} className="card-img-top" alt="..."/>
        </div>
      <div className='card-body cardbodyReview'>
        <div className='card2'>
        <h1 className='titleReview'>Sumate a la energía limpia</h1>
        <p className='textReview'>Nuestro planeta reclama la transición energética. Empezá a formar parte del cambio con la energía limpia de Jackery  </p>
        </div>
      </div>
      </div>
      <div className="cardReview" >
        <div className='cardImgReview'>
        <img src={imagen2} className="card-img-top" alt="..."/>
        </div>
      <div className='card-body cardbodyReview'>
        <div className='card2'>
        <h1 className='titleReview'>Expandí tus conocimientos sobre energía solar</h1>
        <p className='textReview'> Ingresá acá si querés conocer más sobre el funcionamiento de los generadores solares</p>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div className='conteinerProducts5'>
  <h1 className='container textProducts center'>Todo lo que podés alimentar con tu Jackery Generador Solar 1000</h1>
      <p className='container BodyProducts'>La estación de energía Explorer 1000 del generador puede cargar electrodomésticos como computadoras, cámaras, máquinas CPAP, parrillas eléctricas y más.</p>
    <CardIcons/>
  </div>
  <div className='conteinerProducts6'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>Simulador de tiempo de funcionamiento</h1>
          <p className='textReview'>Ingresá el voltaje de un dispositivo (que no exceda los 1000 W) y descubrí cuánto tiempo, aproximadamente, podés usarlo de manera continua si lo alimentás con el Explorer 1000 </p>
          <Calculator watts ={watts} wattsLimit = {wattsLimit}/>
          <p>*Tené en cuenta que los resultados son aproximados</p>
        </div>
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