
import './Products.css'
import Cards5  from '../sliders/cards5';
import CardProduct from '../Card/cardProducts/CardProduct5'
import Gallery from '../gallery/gallery5';
import imagen from './assests/producto5/240131-Jackery-Web-Aspectos Generador Solar 1000x2-1920x1080-02.jpg'
import imagen2 from './assests/producto5/240131-Jackery-Web-Aspectos Generador Solar 1000x2-1920x1080-01.jpg'
import CardIcons from '../Card/cardIcons/cardIcons5';
import Calculator from '../calculator/calculator';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const PRODUCTOS5 = () => {

  const watts = 240;
  const wattsLimit = 1000;

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
      <h1 className='textProducts'>Jackery Generador Solar 1000 - 2 paneles</h1>
      {/* <h2 className='numberProducts'> $1.939.990</h2> */}
      <p className='BodyProducts'>Jackery Generador Solar 1000 - 2 paneles: Estación de Energía Portátil Jackery Explorer 1000 + 2 Paneles Solares SolarSaga 100W</p>
      <p className='BodyProducts'>Batería de litio de 1002 W (46,4 Ah)</p>
      <p className='BodyProducts'>1000 W de energía (sobretensión de 2000 W) </p>
      <p className='BodyProducts'>12 capas de protección contra cortocircuitos</p>
      <p className='BodyProducts'>Carga al 100% tu equipo en tan solo 8 horas</p>
      <p className='BodyProducts'>Salidas múltiples (AC, DC, USB-C y USB-A)</p>
      <p className='BodyProducts'>Alta eficiencia de conversión de hasta el 23%</p>
      <p className='BodyProducts'>Indicadores en pantalla de potencia de entrada/salida y batería restante</p>
      {/* <a href="https://www.mercadolibre.cl/ms/gz/checkout/buy-ms?px_variant_id=25186&item_id=MLC2028414692&parent_url=https://jackery.mercadoshops.cl/MLC-2028414692-jackery-generador-solar-1000-2-paneles-_JM&context=vip-mshops&channel=mshops&ms_store=jackery.mercadoshops.cl&quantity=1" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
        COMPRAR AHORA
      </a> */}
      <a href="/CONTACTO" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
        CONSULTAR
      </a>
    </div>
  </div>
  <div className='conteinerProducts2'>
    <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Generador Solar 1000 - 2 paneles</h1>
    <div className='borderContainer'>
            <p className='BodyProducts'>
            Jackery Generador Solar 1000 es realmente poderoso: puede alimentar hasta 7 dispositivos al mismo tiempo. Energía imbatible, energía verde. 
            </p>
    </div>
    </div>
    <div className='ProductVideo'>
    <div className='ProductVideo'>
      <iframe
        width='100%' 
        height='400px' 
        src="https://www.youtube.com/embed/J7G7Qhfv3n4"
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
    <h1 className='textProducts'>¿Por qué elegir el Jackery Generador Solar 1000 - 2 paneles?</h1>
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
  <div className='conteinerProducts5'>
  <h1 className='container textProducts center'>Todo lo que puedes alimentar con tu Jackery Generador Solar 1000</h1>
      <p className='container BodyProducts'>La estación de energía Explorer 1000 del generador puede cargar electrodomésticos como computadoras, cámaras, máquinas CPAP, parrillas eléctricas y más.</p>
    <CardIcons/>
  </div>
  <div className='conteinerProducts6'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>Simulador de tiempo de funcionamiento</h1>
          <p className='textReview'>Ingresa el voltaje de un dispositivo (que no exceda los 200 W) y descubre cuánto tiempo, aproximadamente, puedes usarlo de manera continua si lo alimentas con el Explorer 1000 </p>
          <Calculator watts ={watts} wattsLimit = {wattsLimit}/>
          <p>*Ten en cuenta que los resultados son aproximados</p>
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
        <Footer/>
      </footer>

 </div>




  );
};

export default PRODUCTOS5;