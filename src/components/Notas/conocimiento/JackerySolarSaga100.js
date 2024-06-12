import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Link } from 'react-router-dom'
import Banner9 from '../../Banner/banner9'
import imagen from '../conocimiento/assests/jackerysolarsaga/jackerysolar100 portada.webp'

const JackerySolarSaga100 = () => {
    return (
        <div>
            <header>
                <div className='bannerConteiner'>
                    <Banner9 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        Seguramente, habrás notado que los paneles solares se están volviendo cada vez más populares entre los amantes de la naturaleza. Y no es nada sorprendente debido a que suponen notables ventajas económicas y ecológicas en tu vida.
                        En esta oportunidad, queremos recomendarte el <strong>panel solar Solarsaga 100</strong> y explicarte los múltiples beneficios que tiene para ofrecerte:
                    </p>

                    <ol>
                        <li><strong>Un producto completo</strong><br />
                            El <Link to="/PRODUCTOS/Jackery%20SolarSaga%20100" target='_blank'><span style={{ color: '#FF5000' }}>panel solar Solarsaga 100</span></Link> es una excelente opción para obtener energía solar debido a su conversión eficiente (hasta el 23%). Además, el panel solar es ligero, plegable, transportable y resistente gracias a que sus células solares están laminadas con ETFE. Asimismo, cuenta con puertos de salida (USB-C y USB-A) para cargar dispositivos pequeños de forma directa.</li>
                        <li><strong>Energía verde</strong><br />
                            El panel solar te permite obtener energía a partir de la transformación de la luz solar. Este proceso es totalmente amigable con el medio ambiente y, es por ello, que es una gran alternativa verde para implementar en tu vida.
                        </li>
                        <div className='NotaImgConteiner'>
                            <img src={imagen} alt='imagen' />
                        </div>
                        <li><strong>Alta compatibilidad</strong><br />
                            El SolarSaga 100 W tiene la capacidad de combinarse con las <Link to="/PRODUCTOS/Jackery%20Explorer%20240" target='_blank'><span style={{ color: '#FF5000' }}>estaciones de energía Jackery</span></Link> 240, 500 y 1000 con el objetivo de generar energía verde para alimentar a tus múltiples dispositivos de manera simultánea.</li>
                        <li><strong>Ventaja económica</strong><br />
                            Elegir la energía verde tiene también una positiva consecuencia económica: te salvarás de pagar facturas cada vez más altas de energía a largo plazo. ¡Qué excelente noticia!
                        </li>
                        <li><strong>Un verdadero aliado</strong><br />
                            Al ser compatible con estaciones de energía, puede ser un gran aliado en tu vida ya que podrás usarlo como generador de energía en cualquier momento y lugar: en tus excursiones, campamentos, casos de emergencias, para trabajar remoto, etc.
                            El <strong>panel Solarsaga 100 W</strong> te traerá muchos beneficios en tu rutina. Si deseás conocer más sobre este producto, te invitamos a que accedes en el siguiente <Link to="/PRODUCTOS/Jackery%20SolarSaga%20100" target='_blank'><span style={{ color: '#FF5000' }}>link</span></Link>.
                        </li>
                    </ol>
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
export default JackerySolarSaga100;