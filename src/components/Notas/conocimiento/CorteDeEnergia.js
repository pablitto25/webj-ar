import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Banner3 from '../../Banner/banner3'
import Cards5 from '../../sliders/cards5'
import imagen from './assests/cortedeenergia/Imagen2.webp'



const CorteDeEnergia = () => {
  return (
    <div>
      <header>
        <div className='bannerConteiner'>
          <Banner3 />
        </div>
      </header>
      {/* Start Note */}
      <section className='NotaConteiner' >
        <div className='NotaTexConteiner'>
          <p>
            Los teclados solares son prácticos, fáciles de cargar y respetuosos con el medio ambiente. Estos teclados funcionan no solo bajo el sol, sino también con luz de lámpara, y cuando está completamente cargado, puede funcionar sin interrupciones.
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            ¿Cuáles son los tipos de cortes de energía?
          </p>
          <p>
            Podemos clasificar los cortes de energía según el motivo del corte y qué tan extendido está el efecto.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            Apagón
          </p>
          <p>
            Un apagón es un corte completo de energía en un área extensa y puede ser causado por cualquier daño en la red eléctrica en cualquier lugar entre la central eléctrica y las líneas eléctricas. Esto puede ser un evento breve de unos pocos segundos o minutos y, a veces, la recuperación puede llevar días, dependiendo de la complejidad del error.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            Fallo permanente
          </p>
          <p>
            Una falla permanente suele ser una falla aislada que afecta un área más pequeña y generalmente se soluciona muy rápidamente. La mayoría de las veces se trata de una falla en el mecanismo o de un problema menor.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            Apagones continuos
          </p>
          <p>
            Los apagones continuos son cortes de energía planificados para solucionar fallas y redes inestables o infraestructura eléctrica. Es más fácil tratarlos porque forman parte del mantenimiento regular y se le informa con antelación.
          </p>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            ¿Cómo prepararse para un corte de energía?
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Incluso si todavía está determinando cuál es el motivo del corte de energía, siempre es mejor prepararse de antemano. Como ya comentamos, estos cortes de energía son cada vez más frecuentes, por lo que planificar hoy es el camino a seguir.
          </p>
          <ul>
            <li>Tené siempre alguna fuente de luz de emergencia en casa. Una fuente de luz alternativa en la habitación más utilizada mantiene a tus familiares a salvo de caídas y accidentes.</li>
            <li>Mantenete conectado a tus redes sociales también te ayuda a saber cuál es el motivo del corte de energía y cuánto tiempo tardará en restablecerse.</li>
            <li>Mantenete tu congelador frío por mucho tiempo sin volver a abrirlo. Si no lo abrís, puede mantener su temperatura durante 24 a 48 horas.</li>
            <li>Invertí en un generador de respaldo. Aunque puede ser un generador de gas o propano, la opción más sostenible y de menor mantenimiento es un generador solar. Son casi silenciosos, no cuestan combustible y se pueden enchufar en un minuto. Nuestra marca ofrece generadores solares altamente eficientes, lo que nos hace líderes en la industria: tienen la mayor conversión de energía solar de alrededor del 24-25%. El punto positivo de estos generadores es que son portátiles y pueden usarse para aventuras al aire libre. Además, cuentan con un avanzado sistema de gestión de batería y protección contra sobrecarga, sobrecalentamiento y otros ángulos de seguridad.</li>
          </ul>
          <p style={{ fontWeight: '700', paddingLeft: '2rem', fontSize: '1.5rem' }}>
            ¿Cuánto tiempo tarda en cargarse un teclado solar?
          </p>
          <p>
            El tamaño del generador depende del tamaño de su familia, del clima y de que si deseás utilizar el generador solo para cortes de energía o con regularidad. A continuación, explicaremos brevemente cómo determinar el tamaño de un generador solar.
          </p>
          <ul>
            <li>Encontrá la potencia de tu electrodoméstico, incluidos los vatios de arranque y funcionamiento. La potencia suele estar escrita en la etiqueta del producto. También enumeramos las potencias en la siguiente tabla para tu comodidad.</li>
            <li>A veces, los requisitos de energía se enumeran en voltios y amperios. Podés utilizar la siguiente fórmula para calcular los vatios de funcionamiento a partir de voltios y amperios.</li>
          </ul>
          <p style={{ fontSize: '1.3rem', paddingTop: '1rem' }}>
            Voltios (V) x Amperios (A) = Vatios (W)
          </p>
          <p style={{ paddingLeft: '2rem' }}>
            Agregá los vatios de funcionamiento de todos sus electrodomésticos y ahora Agregá los vatios iniciales más altos de la lista a este número. Esta suma es la potencia requerida del generador solar.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Vatios de arranque y funcionamiento de electrodomésticos comunes
          </p>
        </div>
        <div className='NotaTableContainer' style={{ paddingLeft: '2rem' }}>
          <table>
            <tbody>
              <tr>
                <td>Accesorios</td>
                <td>Vatios iniciales</td>
                <td>Vatios corrientes</td>
              </tr>
              <tr>
                <td>Linterna</td>
                <td>0</td>
                <td>5W</td>
              </tr>
              <tr>
                <td>Refrigerador congelador</td>
                <td>2200</td>
                <td>700</td>
              </tr>
              <tr>
                <td>Bombilla</td>
                <td>0</td>
                <td>60-75</td>
              </tr>
              <tr>
                <td>Tostadora</td>
                <td>0</td>
                <td>900</td>
              </tr>
              <tr>
                <td>Calentador</td>
                <td>0</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>Computadora portátil</td>
                <td>0</td>
                <td>50-300</td>
              </tr>
              <tr>
                <td>Ventilador de caja de 20”</td>
                <td>350</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Lavavajillas</td>
                <td>1800</td>
                <td>1300</td>
              </tr>
              <tr>
                <td>Licuadora</td>
                <td>800</td>
                <td>300</td>
              </tr>
              <tr>
                <td>Plancha de ropa</td>
                <td>0</td>
                <td>1500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Tené un plan de respaldo para no usar o limitar lavavajillas, parrillas eléctricas, calefacción y aire acondicionado para ahorrar energía incluso si tenés un generador.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            Cómo protegerse durante un corte de energía
          </p>
        </div>
        <div className='NotaImgConteiner'>
          <img src={imagen} alt='imagen' />
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Un corte de energía inesperado puede convertirse en una situación peligrosa con un poco de descuido. Apuntá siempre primero a tu seguridad y a la protección de tu equipo. A continuación, presentamos algunas pautas a seguir.
          </p>
          <ul>
            <li>Apagá todos los aparatos eléctricos, especialmente aquellos que pueden convertirse en un peligro para la seguridad si se dejan desatendidos. Los equipos eléctricos para cocinar, asar y calentar se encuentran en esta categoría.</li>
            <li>Dejá siempre al menos una luz destacada encendida para saber cuándo se reanuda la energía.</li>
            <li>Además, consultá con tus vecinos si también están experimentando un corte de energía para averiguar cuál es el motivo del corte de energía. Si tienen energía, su interruptor de disparo podría ser la causa.</li>
            <li>Ahorrá en la carga de tu teléfono y en las baterías de la linterna, ya que es posible que la energía no se reanude por mucho tiempo y vos querrás estar conectado con el mundo.</li>
            <li>Informá el corte de energía al operador de red y a las autoridades correspondientes.</li>
          </ul>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            Preguntas frecuentes sobre cortes de energía
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            1) ¿Qué tamaño de generador solar necesito cuando hay cortes de energía?
          </p>
          <p>
            El generador solar que necesita durante apagones o cortes de energía debe tener al menos una capacidad de salida de 1800 a 2000 vatios para hacer funcionar los electrodomésticos más utilizados en su casa. Sin embargo, para obtener una estimación más precisa, necesitás un cálculo de los vatios de funcionamiento de todos tus electrodomésticos y también necesitás conocer los vatios iniciales de tus dispositivos. El tamaño de su generador solar requerido excede este cálculo.
          </p>
          <p>
            Otro punto crítico es el tiempo de funcionamiento de las baterías. Ya que siempre hay una pérdida de potencia durante el trabajo. Entonces, para la estimación de las horas de trabajo del generador solar Jackery, tomamos en cuenta esta pérdida de energía del 15%. Entonces la fórmula es la siguiente:
          </p>
          <p>
            Tiempo de trabajo = Capacidad Wh * 0,85 / potencia de funcionamiento de su dispositivo.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            2) ¿Cuánto dura un corte de energía?
          </p>
          <p>
            Depende de cuál sea el motivo del corte de luz. Los errores triviales se pueden solucionar rápidamente y los cortes de energía pueden durar sólo unos segundos. Sin embargo, algunos cortes de energía pueden durar días o incluso semanas.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Pensamientos finales
          </p>
          <p>
            Los cortes de energía se han vuelto muy comunes ahora. Las razones más comunes suelen ser el clima, fallas del sistema y mantenimiento. Hemos analizado las mejores disposiciones de energía alternativa, la seguridad durante los cortes de energía y cómo encontrar el tamaño requerido de su generador de respaldo.
          </p>
        </div>
        {/* End Note */}


        {/* <div className='ProductVideo'>
          <iframe
            width='100%'
            height='400px'
            src='https://www.youtube.com/embed/TU_ID_DE_VIDEO' /* Reemplaza TU_ID_DE_VIDEO con el ID de tu video
            title='Product Video'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div> 
      */}
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
export default CorteDeEnergia;