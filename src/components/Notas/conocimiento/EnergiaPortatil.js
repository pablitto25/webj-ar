import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner26 from '../../Banner/banner26'
/* import imagen9 from './assests/TecnologiaVerde/TecnologiaVerde.webp' */
import { Helmet } from 'react-helmet'


const EnergiaPortatil = () => {
    return (
        <div>
            <Helmet>
                <title>Cómo el uso de la energía portátil revoluciona el trabajo en la minería</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner26 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        La energía portátil está revolucionando la <strong>industria minera</strong>. Gracias a ella, la energía puede llegar a lugares remotos o subterráneos donde la electricidad convencional no siempre está disponible. De esta manera, la energía portátil asegura un continuo y eficiente proceso de trabajo.
                    </p>
                    <p>
                        Por tanto, las <strong>estaciones de energía portátil</strong> permiten que los mineros puedan operar herramientas sin depender por completo de generadores de combustibles fósiles, los cuales generan emisiones contaminantes, ruidos molestos y son perjudiciales para la salud.
                    </p>
                    <p>
                        Entonces, si necesitás una estación de energía que sea segura, silenciosa, amigable con el medio ambiente y de bajo costo, te recomendamos la <strong>Explorer 1000</strong>.
                    </p>
                    <p>
                        Gracias a su capacidad de 1002.2 Wh, puede cargar simultáneamente hasta 8 dispositivos, por ejemplo:
                    </p>
                    <ul>
                        <li><strong>Lámparas de casco</strong>: permiten ver en áreas subterráneas o zonas con poca visibilidad; son imprescindibles para el trabajo en la minería. Con la Explorer 1000, podés cargar tu Nightstick XPP-5458G y usarla, de manera continua, por 5 días.</li>
                        <li><strong>Linternas</strong>: son ideales para usar en áreas poco visibles. Si, por ejemplo, cargás con la estación de energía la linterna Milwaukee M12 LED Work Light, podés usarla por 5 días.</li>
                        <li><strong>Sensores y monitores de gas</strong>: permiten controlar la calidad del aire y detectar gases peligrosos como el monóxido de carbono. Podrás cargar tu Honeywell BW Clip4 con la estación de energía y usarla de forma continua por 2 días.</li>
                        <li><strong>Martillo de percusión compacto</strong>: sirve para perforar materiales duros, como piedra. Con la Explorer 1000, podrás cargar tu Bosch GBH 2-26 DRE y usarlo de forma continua por 1 hora.</li>
                        <li><strong>Amoladora angular</strong>: es perfecta para cortes y desbastes. Si, por ejemplo, cargás con la estación de energía la Makita GA4530R, podrás usarla de manera continua por 1,1 hora.</li>
                        <li><strong>Mini sierra circular con disco de diamante</strong>: es ideal para cortar piedras y otros materiales duros. Podrás cargar tu Worx WX427L y usarla de forma continua por 1 hora.</li>
                        <li><strong>Compresor de aire portátil de baja potencia</strong>: permite inflar neumáticos en áreas remotas. Con la Explorer 1000, podrás cargar Ryobi 18V One+ R18I-0 y usarla, de manera continua, por 8 horas.</li>
                        <li><strong>Taladro rotativo ligero</strong>: adecuado para perforaciones en concreto y piedra en trabajos de minería. Si, por ejemplo, cargás con la estación de energía Bosch GBH 2-20 D, podrás usarla de manera continua por 1,3 hora.</li>
                        <li><strong>Drone</strong>: ayuda a mapear el terreno y a inspeccionar zonas peligrosas. Con la Explorer 1000, podés cargar tu drone y usarlo de manera continua como 13,3 horas.</li>
                        <li><strong>Equipos de comunicación</strong>: permite estar conectado con el resto del grupo y estar en permanente comunicación. Si, por ejemplo, cargás con la Explorer tu Motorola MOTOTRBO R7, podrás usarla de manera continua por 3 días.</li>
                        <li><strong>Bombas de agua de baja potencia</strong>: son útiles para eliminar acumulaciones en zonas de trabajo. Podrás cargar tu WAYNE PC2 y usarla de manera continua por 3 horas.</li>
                    </ul>
                    <p>
                        En resumen, la energía portátil es el aliado perfecto para tu trabajo de minería. Su uso produce múltiples beneficios: desde bajos costos, comodidad, seguridad hasta sostenibilidad. ¡Llevá tu trabajo a otro nivel!
                    </p>

                    {/* Falta imagen de portada */}
                    {/* <div className='NotaImgConteiner'>
                        <img src={imagen9} alt='imagen' />
                    </div> */}

                    {/* fin de la nota */}
                    
                </div>

                <div id="novedades" className="cardSlider container mb-3">
                    <p className="texSlider">NOVEDADES</p>
                    <Cards3 />
                    <a href="/Blog/jackery-presenta-el-revolucionario-generador-solar" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
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
export default EnergiaPortatil;