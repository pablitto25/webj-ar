import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Banner5 from '../../Banner/banner5'
import Cards5 from '../../sliders/cards5'
import imagen2 from './assests/jackerypresenta/Imagen2.jpg'



const JackeryPresenta = () => {
  return (
    <div>
      <header>
        <div className='bannerConteiner'>
          <Banner5 />
        </div>
      </header>
      {/* Start Note */}
      <section className='NotaConteiner' >
        <div className='NotaTexConteiner'>
          <p>
            El 9 de enero, <span style={{ color: '#F28F2E' }}>Jackery</span> presentamos nuestra última innovación, el generador solar Mars Bot, que recientemente ganó el premio TIME Best Inventions of 2023, en el <span style={{ color: '#F28F2E' }}>Consumer Electronics Show (CES)</span>. Este producto pionero es un robot de servicio inteligente integrado de carga PV-ESS con un sistema de seguimiento de luz que ofrece una nueva perspectiva sobre la utilización eficiente de la energía limpia renovable y satisface diversas necesidades exteriores fuera de la red.
          </p>
          <p>
            Inspirado en Opportunity, el rover robótico que estuvo activo en Marte desde 2004 hasta 2018, el <span style={{ fontWeight: '700' }}>Jackery Solar Generator Mars Bot</span> cambia las reglas del juego en el panorama de las energías renovables. Representa un enfoque novedoso para el uso eficiente de energía limpia renovable en medio de la crisis energética, y encarna el espíritu de exploración de Jackery en su diseño y funcionalidad. El robot ofrece una tasa de conversión fotoeléctrica de alta eficiencia y garantiza una experiencia eléctrica perfecta con su sistema de movimiento inteligente superior. Es un guiño al espíritu aventurero, proporcionando una fuente de energía confiable para quienes se atreven a aventurarse hacia lo desconocido y explorar el mundo
          </p>
        </div>
        <div className='NotaImgConteiner'>
          <img src={imagen2} alt='imagen' />
        </div>
        <div className='NotaTexConteiner'>
          <p>
            El robot está equipado con el sistema Automático Girasol Solar Tracker, que incluye navegación autónoma y seguimiento de la luz solar, lo que le permite navegar de forma inteligente hacia áreas con mucha luz para la generación de energía fotovoltaica o estaciones de carga cuando las condiciones de luz son escasas.
          </p>
          <p>
            El producto integra ingeniosamente paneles solares con el sistema de almacenamiento de energía. En la parte superior se encuentran los innovadores paneles fotovoltaicos plegables. Cuando está plegado, su tamaño compacto mejora la portabilidad y el atractivo estético del producto. Cuando se expanden, estas alas solares cuentan con una potencia de 600 W, lo que demuestra una notable eficiencia de conversión solar máxima del 25 %.
          </p>
          <p>
            Todo el robot está construido con una aleación de aluminio resistente al agua y al polvo de alta resistencia, resistente a los impactos, lo que ofrece una excelente resistencia a la intemperie y a la corrosión; ideal para rescates de emergencia, fiestas en el patio, grandes espectáculos de acampada y más.
          </p>
          <p>
            Además del generador solar Mars Bot, presentamos el generador solar para carpa en la azotea: una innovadora casa terrestre todoterreno que puede proporcionar hasta 6 kWh para un día de viaje terrestre y dos semanas de vida al aire libre. Ofrece energía adicional para mayor tiempo de funcionamiento de electrodomésticos, como cafetera, manta eléctrica, proyector, teléfono móvil y más.
          </p>
          <p>
            Asimismo, exhibimos el kit doméstico del generador solar Jackery, el cual consta de un E2000Plus, una batería adicional, 2 paneles solares de 200 W y un interruptor de transferencia automática. Ante desastres naturales e interrupciones de energía, el kit de generador solar para el hogar actúa como una solución de energía de respaldo de emergencia esencial para los hogares. Está diseñado principalmente para su uso en hogares familiares y cabañas fuera de la red. El interruptor de transferencia automática cambia sin problemas a la energía de respaldo en 20 ms durante los cortes, lo que garantiza un suministro de energía ininterrumpido para los elementos esenciales del hogar, como refrigeradores y luces.
          </p>
          <p>
            También mostramos el Generador Solar Jackery 1000 Plus (Galaxy), cuya carcasa está fabricada con Residuos Plásticos Reciclados, no sólo tiene beneficios económicos sino que también potencia el compromiso de nuestra marca con la sostenibilidad.
          </p>
          <p>
            Por último, dimos a conocer la serie Jackery's Plus que incluye los modelos Jackery Solar Generator 2000 Plus, 1000 Plus, 300 Plus y 100 Plus, cada uno de ellos diseñado para ofrecer rendimiento, innovación y versatilidad incomparables en su gama.
          </p>
          <p>
            Nuestra exhibición en CES 2024 ejemplifica el firme compromiso de la marca de fomentar la innovación, al mismo tiempo que muestra su impresionante experiencia técnica. Esto consolida aún más la posición de nuestra marca como pionera en el ámbito de las soluciones de energía portátil, limpia y renovable, desafiando constantemente los límites y estableciendo nuevos puntos de referencia.
          </p>
        </div>

        {/* End Note */}

        <div id="novedades" className="cardSlider container mb-3">
          <p className="texSlider">NOVEDADES</p>
          <Cards5 />
          <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
            EXPLORAR MÁS
          </a>
        </div>

      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default JackeryPresenta;