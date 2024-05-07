import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Banner from '../../Banner/banner'
import Cards5 from '../../sliders/cards5'
import imagen1 from './assests/tecladosolar/Imagen2.webp'
import imagen2 from './assests/tecladosolar/Imagen3.webp'
import imagen3 from './assests/tecladosolar/Imagen4.webp'
import imagen4 from './assests/tecladosolar/Imagen5.webp'
import imagen5 from './assests/tecladosolar/Imagen6.webp'



const TecladoSolar = () => {
  return (
    <div>
      <header>
        <div className='bannerConteiner'>
          <Banner />
        </div>
      </header>
      {/* Start Note */}
      <section className='NotaConteiner' >
        <div className='NotaTexConteiner'>
          <p>
            Los teclados solares son prácticos, fáciles de cargar y respetuosos con el medio ambiente. Estos teclados funcionan no solo bajo el sol, sino también con luz de lámpara, y cuando está completamente cargado, puede funcionar sin interrupciones.
          </p>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            ¿Qué es un teclado solar?
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Un teclado solar o fotovoltaico es idéntico a un teclado de computadora estándar, excepto que transmite los datos de escritura al ordenador a través de haces infrarrojos. Esto permite una experiencia inalámbrica, eliminando la posibilidad de un cable enredado detrás de tu computadora.
            Un teclado solar se carga mediante energía solar o iluminación interior, aliviando el problema de los periféricos de computadora inalámbricos que requieren un reemplazo regular de pilas. El primer teclado solar fue el Logitech K750 de 2010, anunciado por la empresa.
          </p>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            ¿Cómo funciona un teclado solar?
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            El teclado solar contiene un conjunto de células fotovoltaicas a lo largo del borde superior, se carga a partir de cualquier fuente de luz, incluyendo la luz solar y una bombilla común, puede funcionar hasta tres meses en completa oscuridad y tiene un software que muestra el estado de carga de la batería.
          </p>
          <p>
            Funciona gracias a las células fotovoltaicas que transforman la luz en energía eléctrica. Estas células fotovoltaicas suelen estar ubicadas en la superficie superior del teclado y están compuestas por un material semiconductor como el silicio.
          </p>
          <p>
            Cuando la luz incide sobre estas células, los electrones del material semiconductor se excitan y fluyen, generando una corriente eléctrica. Esta corriente se almacena en una batería recargable o un condensador, que proporciona energía al teclado incluso sin luz. Además, el teclado puede incluir un modo de ahorro de energía que se apaga automáticamente cuando no está en uso, lo que prolonga la vida útil de la batería.
          </p>
        </div>
        <div className='NotaImgConteiner'>
          <img src={imagen1} alt='imagen' />
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            Generador solar para teclado fotovoltaico
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            ¿Alguna vez te has preguntado hasta dónde ha llegado el avance tecnológico? ¿Quién hubiera imaginado que se desarrollaría un teclado inalámbrico alimentado por energía solar? Las organizaciones de tecnología de la información están considerando cambiar a teclados solares ya que no representan una carga financiera para sus operaciones.
          </p>
          <p>
            Los teclados fotovoltaicos cargan sus baterías utilizando la luz solar. Esto cuestiona también la incapacidad de los teclados con cable para tener baterías recargables en lugar de requerir reemplazos frecuentes. Por lo general, los teclados solares deben cargarse una vez para durar un período prolongado de hasta tres meses. Además, contienen un interruptor de encendido/apagado que evita la pérdida de energía cuando no están en uso.
          </p>
          <p>
            Los teclados solares son de gran valor en cuanto a su uso y portabilidad. Sin embargo, son una tecnología relativamente nueva y su producción está menos desarrollada que la de los teclados convencionales. Y si no hay suficiente luz solar, el teclado solar no funcionará correctamente. En consecuencia, un generador solar portátil puede ser más conveniente que un teclado solar para alimentar un teclado en la actualidad.
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <table className='NotaTableContainer'>
            <tbody>
              <tr>
                <td className='HeadTitleTable'>Tipos</td>
                <td className='HeadTitleTable'>Principios de funcionamiento</td>
                <td className='HeadTitleTable'>Ventajas</td>
                <td className='HeadTitleTable'>Desventajas</td>
              </tr>
              <tr>
                <td>Teclado Solar</td>
                <td>
                  - Celdas solares en la superficie superior del teclado<br />
                  - Insertar la batería recargable<br />
                  - Modo de ahorro de energía<br />
                </td>
                <td>
                  - Energía solar<br />
                  - Reduce el consumo de electricidad<br />
                  - Más fácil de conectar<br />
                  - No es necesario cargar<br />
                  - Ahorra en facturas<br />
                  - Inalámbrico<br />
                </td>
                <td>
                  - Requiere luz solar directa<br />
                  - Evitar la sobrecarga<br />
                  - Tecnología relativamente nueva, falta de experiencia<br />
                  - Altos costos de producción<br />
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>- Sostenibilidad</td>
                <td>- Sin opción de carga</td>
              </tr>
              <tr>
                <td>Generador solar para teclado</td>
                <td>
                  - Los paneles solares absorben la luz solar<br />
                  - Convierten la luz solar en electricidad<br />
                  - Almacenan la electricidad en una estación de energía para su uso posterior<br />
                </td>
                <td>
                  - Energía ilimitada<br />
                  - Económico<br />
                  - Sin necesidad de mantenimiento adicional<br />
                  - Múltiples salidas y puertos<br />
                  - Limpio, silencioso y ecológico<br />
                  - Funciona en cualquier clima, ubicación y escenario<br />
                </td>
                <td>- Algunos generadores solares con capacidades grandes pueden tener un costo un poco mayor (pero menor que los teclados solares)</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>- Carga no solo teclados, sino la mayoría de los dispositivos domésticos y de oficina</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='NotaTitleConteiner'>
          <p>
            Teclado solar alimentado por energía solar
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            El teclado inalámbrico alimentado por energía solar es un digno competidor debido a su tamaño compacto y su tecnología alimentada por energía solar que se carga mediante la luz solar y la luz artificial. El teclado se carga de forma gradual mediante una hilera de paneles solares en la parte superior, lo cual es una de las primeras cosas que uno nota:
          </p>
        </div>
        <div className='NotaImgConteiner'>
          <img src={imagen2} alt='imagen' />
        </div>
        <div className='NotaTexConteiner'>
          <p>
            El teclado solar está alimentado por el sol y tus brillantes pensamientos. Esta es la opción más libre de problemas disponible. Este teclado se recarga automáticamente en presencia de luz y conserva su carga durante al menos tres meses en completa oscuridad, permitiéndote despedirte de los problemas de las baterías.
          </p>
          <p>
            Aunque puedas pensar que estos teclados utilizan una cantidad tan pequeña de electricidad, la cantidad es enorme si la multiplicas por la cantidad de teclados utilizados hoy en día. Por lo tanto, el consumo de electricidad es considerable. Los teclados solares reducen significativamente esto, ya que no requieren electricidad.
          </p>
          <p>
            Es fácil de usar y sencillo de conectar. Debido a que suele ser inalámbrico, no estás atado a un solo lugar. En su lugar, eres libre de moverte a cualquier lugar o llevar este teclado contigo a cualquier sitio.
          </p>
          <p>
            Los paneles solares alimentan el teclado a través de la luz solar u cualquier otra fuente de luz, como una bombilla eléctrica. Los teclados solares son una fuente de energía sostenible y ayudan a reducir la contaminación generada por las baterías. Utilizar la luz solar como fuente de energía es gratuito y sencillo de implementar.
          </p>
          <p>
            En comparación con un teclado convencional, la importancia de un teclado solar alimentado por energía solar es enorme. Los teclados convencionales funcionan con electricidad, un recurso costoso y perjudicial para el medio ambiente. Persisten incertidumbres con respecto al teclado solar, como su producción inmadura, popularidad y dependencia de la luz solar. O puedes optar por un generador solar para maximizar la energía solar.
          </p>
        </div>

        <div className='NotaTitleConteiner'>
          <p>
            Generador solar para teclado
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Por lo general, los teclados solares inalámbricos cuentan con pequeños transmisores de radio. Como cualquier transmisor de radio, requieren energía para funcionar. Por lo general, los teclados funcionan con baterías; si las baterías se agotan, no puedes utilizar el teclado. Entonces, es recomendable tener un generador.
          </p>
        </div>
        <div className='NotaImgConteiner'>
          <img src={imagen3} alt='imagen' />
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Elegir un generador solar para alimentar tu teclado y otros dispositivos es prudente debido a los problemas de batería o desarrollo de los teclados solares. Hay varias razones por las cuales los generadores solares son preferibles a los teclados solares:
          </p>
          <ul>
            <li>El argumento más evidente para utilizar un generador solar es que es una opción respetuosa con el medio ambiente. No daña el medio ambiente porque se alimenta de energía solar y no utiliza fuentes de energía no renovables como el gas o el carbón. Además, debido a que el sol es una fuente de energía renovable, su energía es gratuita.</li>
            <li>Uno de los malentendidos más comunes sobre los generadores solares es que no se pueden utilizar cuando el clima está nublado o lluvioso. En realidad, el generador almacena energía durante los días soleados, lo que te permite seguir utilizando el dispositivo durante el mal tiempo.</li>
            <li>Tener un generador de respaldo para tu casa u oficina durante un corte de energía es una buena idea. Los modelos alimentados por energía solar son especialmente sensatos, ya que son beneficiosos para el medio ambiente y una inversión inteligente a largo plazo.</li>
            <li>Además, los generadores solares, como los generadores solares Jackery, requieren menos mantenimiento. Por lo tanto, solo tendrás que invertir una pequeña cantidad de dinero en ellos a lo largo de su vida útil. Los generadores solares Jackery incluyen paneles solares SolarSaga y la estación de energía Explorer. La conexión mediante cables es todo lo que se necesita para que la conversión de la luz solar en electricidad ocurra sin problemas.</li>
          </ul>
        </div>
        <div className='NotaImgConteiner'>
          <img src={imagen4} alt='imagen' />
        </div>

        <div className='NotaTitleConteiner'>
          <p>
            ¿Cuántos vatios consume un teclado?
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            En promedio, los teclados consumen 0,5 vatios por hora desde una conexión USB de 100mA@5V. Ya sea iluminado o no, los teclados consumirán un máximo de 2,5 vatios por hora desde un puerto USB de 500mA@5V. Costaría 0,62 pesos chilenos por hora alimentar el dispositivo. No hay diferencia en el consumo de energía/electricidad entre un teclado USB convencional y los teclados solares o de luz.
          </p>
          <p>
            El consumo de energía de un teclado que no se está utilizando es bajo, menos de 1W. Lo mismo no se puede decir de un teclado que se utiliza constantemente. Al escribir continuamente en un teclado, el consumo de energía puede variar entre 1,5W y 2,5W.
          </p>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            ¿Cuánta energía solar necesita un teclado?
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Es sabido que algunas marcas de teclados consumen más electricidad que otras. Sin embargo, los teclados suelen consumir más energía a medida que envejecen, independientemente de la marca. Un teclado nuevo consume en promedio 100mA, pero esto aumentará a aproximadamente 500mA.
          </p>
          <table className='NotaTableContainer'>
            <tbody>
              <tr>
                <td className='HeadTitleTable'>Teclados</td>
                <td className='HeadTitleTable'>Vatios</td>
                <td className='HeadTitleTable'>Duración de uso</td>
                <td className='HeadTitleTable'>Energía solar necesaria</td>
              </tr>
              <tr>
                <td>Promedio</td>
                <td>
                  0,5W-2,5W
                </td>
                <td>
                  8 horas
                </td>
                <td>
                  4Wh-20Wh
                </td>
              </tr>
              <tr>
                <td>Teclado iluminado</td>
                <td>1,5W-2,5W</td>
                <td>8 horas</td>
                <td>12Wh-20Wh</td>
              </tr>
              <tr>
                <td>Teclado no iluminado</td>
                <td>
                  0,5W-1,5W
                </td>
                <td>
                  8 horas
                </td>
                <td>4Wh-12Wh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='NotaTitleConteiner'>
          <p>
            Los generadores solares de Jackery para teclados
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Los teclados alimentados por energía solar son respetuosos con el medio ambiente ya que utilizan la luz solar como fuente gratuita de electricidad. Son convenientes y se pueden utilizar en cualquier lugar, ni siquiera necesitan cargadores de pared. Esto significa que su consumo puede ser minimizado, lo que resulta en un ambiente más limpio.
          </p>
        </div>
        <div className='NotaImgConteiner'>
          <img src={imagen5} alt='imagen' />
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Un generador solar portátil puede ser la solución óptima para alimentar teclados inalámbricos o estándar, ya sea en casa o fuera de la red, en comparación con los teclados solares, que están en una fase temprana de desarrollo y dependen en gran medida de las condiciones climáticas.
          </p>
          <p>
            Los generadores solares de Jackery son una solución integral para alimentar rápidamente teclados y la mayoría de los electrodomésticos. Al generar y almacenar energía, los generadores solares de Jackery no emiten contaminantes, lo que reduce tu huella de carbono. También pueden salvar vidas en numerosas situaciones. Si vives en un área expuesta a cortes de energía, tener un generador de respaldo puede marcar la diferencia entre mantenerse seguro y cómodo en casa o quedarse a oscuras.
          </p>
          <p>
            Existen varias opciones de generadores solares de Jackery disponibles para alimentar tu teclado. Ten en cuenta que un teclado inactivo no se refiere simplemente a uno que no está en uso. Un teclado seguirá consumiendo energía incluso cuando el monitor esté en hibernación. Debido a la baja cantidad de energía utilizada en estos intervalos, es posible que no lo notes.
          </p>
          <p>
            Por lo tanto, se recomienda encarecidamente el generador solar 500 y 240 de Jackery para alimentar teclados, ya que son excelentes para teclados de tamaño compacto y tienen suficiente capacidad. También hay disponibles otros productos alimentados por energía solar, como luces, teléfonos e incluso cargadores de batería. Explora tus opciones y embárcate en el camino hacia un estilo de vida más ecológico.
          </p>

          <table className='NotaTableContainer'>
            <tbody>
              <tr>
                <td className='HeadTitleTable'>Serie</td>
                <td className='HeadTitleTable'>Puertos</td>
                <td className='HeadTitleTable'>Watts del teclado</td>
                <td className='HeadTitleTable'>Horas de funcionamiento</td>
              </tr>
              <tr>
                <td className='HeadTitleTable'>Jackery Solar Generator 500
                  (518Wh)
                </td>
                <td>
                  -Salida de CA: 110V, 60Hz, 500W (1000W máximo)<br />
                  -Salida USB-A: 5V, 2,4A<br />
                  -Salida de CC: 12V, 10A<br />
                  Puerto para automóvil: 12V, 10A
                </td>
                <td>
                  -Promedio:
                  0,5W-2,5W<br />
                  -Teclado con iluminación:
                  1,5W-2,5W<br />
                  -Teclado sin iluminación:
                  0,5W-1,5W


                </td>
                <td>
                  -Promedio:
                  881H-176H<br />
                  -Teclado con iluminación:
                  294H-176H<br />
                  -Teclado sin iluminación:
                  881H-294H<br />
                </td>
              </tr>
              <tr>
                <td className='HeadTitleTable'>Jackery Solar Generator 240
                  (240Wh)
                </td>
                <td>
                  -Salida de CA: 110V, 60Hz, 200W (400W máximo)<br />
                  -2 salidas USB-A: 5V, 2.4A<br />
                  -Puerto para automóvil: 12V, 10A<br />
                </td>
                <td>
                  -Promedio:
                  0,5W-2,5W<br />
                  -Teclado con iluminación:
                  1,5W-2,5W<br />
                  -Teclado sin iluminación:
                  0,5W-1,5W<br />
                </td>
                <td>
                  -Promedio:
                  408H-81,6H<br />
                  -Teclado con iluminación:
                  136H-81,6H<br />
                  -Teclado sin iluminación:
                  408H-136H<br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='NotaTitleConteiner'>
          <p>
          Preguntas frecuentes
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p style={{fontWeight: '700', paddingLeft: '2rem'}}>
            ¿Qué tamaño de generador solar necesito para alimentar un teclado?
          </p>
          <p>
          Al decidir cómo alimentar los teclados con energía solar, es importante estimar la potencia en vatios de un teclado y elegir un generador solar de tamaño adecuado. Por lo general, un teclado consume entre 0,5W y 2,5W. En consecuencia, todos los generadores solares de Jackery pueden alimentar teclados, lo que te permite seleccionar el mejor generador que se ajuste a tus necesidades.
          </p>
          <p>
          Así es cómo puedes calcular cuánto tiempo tardará el generador solar de Jackery en cargar tus teclados:
          </p>
          <p>
          Horas de funcionamiento = capacidad del generador solar * 0,85 / vatios del teclado
          </p>
          <p>
          Por ejemplo, el generador solar Jackery 240 (capacidad de 240Wh) tardará 81,6 horas en cargar tu teclado (2,5W) (240Wh * 0,85 / 2,5W).
          </p>
          <p style={{fontWeight: '700', paddingLeft: '2rem'}}>
            ¿Cuánto tiempo tarda en cargarse un teclado solar?
          </p>
          <p>
          Por lo general, los teclados solares deben cargarse una vez para tener una duración prolongada. Algunos teclados incorporan un botón de encendido/apagado para conservar energía cuando el teclado no está en uso. Los teclados solares no utilizan baterías reemplazables, por lo que es importante considerar cómo extender la vida útil de la batería sin tener que recargarla con frecuencia.
          </p>
          <p>
          Además, la compañía te proporciona una copia de la aplicación Solar. Esta aplicación de escritorio incluye un medidor de luz que indica el nivel de batería y una alerta de consumo de energía. Incluso determina qué lugares proporcionan la mayor cantidad de energía para cargar el teclado.
          </p>
          <p style={{fontWeight: '700', paddingLeft: '2rem'}}>
          ¿Los teclados solares se cargan con luz artificial?
          </p>
          <p>
          Sí, los teclados solares pueden cargarse tanto con luz natural como con luz artificial. Los teclados solares inalámbricos son fantásticos para mantener ordenado tu lugar de trabajo. Las células solares que recubren la parte superior del dispositivo utilizan la luz ambiental para cargar el teclado, incluyendo la iluminación del escritorio, las bombillas fluorescentes del techo e incluso la luz solar para los usuarios más tradicionales. Una vez instalado, el teclado funciona continuamente siempre y cuando haya al menos algo de luz.
          </p>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
          Conclusiones
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
          Un teclado solar probablemente sea la mejor opción en términos de eficiencia y comodidad ya que está equipado con todas las funcionalidades de un teclado inalámbrico, al mismo tiempo que cuida el medioambiente. Los generadores solares de Jackery son lo más adecuados para alimentar teclados y otros dispositivos con energía renovable.
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
export default TecladoSolar;