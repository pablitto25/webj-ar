import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner17 from '../../Banner/banner17'
import image1 from '../conocimiento/assests/img-cuerpo-1.webp'
import image2 from '../conocimiento/assests/mejora-la-experiencia-nota-de-blog-jackery-explorer-1000-arg.jpg'
import { Helmet } from 'react-helmet'

const MejoraLaExperienciaClientes = () => {
    return (
        <div>
            <Helmet>
                <title>Mejorá la experiencia de tus clientes como guía de turismo</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner17 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}
                    <p>Trabajar como <strong>guía de turismo</strong> es, en verdad, desafiante: tenés que conocer en profundidad la historia, la fauna y la flora del lugar visitado, al mismo tiempo que tenés que liderar un grupo.
                        No obstante, el desafío más importante en tu trabajo es cómo lograr una experiencia realmente inolvidable para tus clientes. Nosotros tenemos la solución: incorporar en tu equipamiento una estación de energía de Jackery, la <strong>Explorer 1000</strong>.</p>

                    <div className='NotaImgConteiner'>
                        <img src={image1} className='image-feature' alt='imagen' />
                    </div>

                    <p>
                        <strong>¿Cómo la estación portátil Explorer 1000 podría facilitar tu trabajo?</strong><br />
                        Aunque sea pequeña y liviana (sólo pesa 10 kg), posee una gran capacidad de 1002.2 Wh que permite cargar, de manera simultánea, hasta 8 dispositivos, tales como una cafetera (88 minutos), radios (10 horas), luces (76 horas), drone (13,3 horas) y cámara (50 cargas), entre otros. En efecto, la Explorer 1000 garantiza que los dispositivos más imprescindibles para la aventura permanezcan cargados en todo momento: una experiencia por la que tus clientes estarán definitivamente agradecidos con tu trabajo.

                    </p>
                    <p>
                        Asimismo, la estación es silenciosa: no interrumpirá la calma que ofrece la naturaleza con sonidos molestos. Además, es segura ya que viene equipada con protección contra la temperatura elevada, los cortocircuitos, la descarga excesiva, la sobretensión, el exceso de potencia y de sobrecarga; lo que asegura verdadera protección a tus clientes. Como si fuera poco, es apta para actividades outdoor debido a que resiste temperaturas que van de los -10° a 40°. ¡Así que podrás llevarla a cualquier lugar donde tengas que ir por tu trabajo!
                    </p>
                    <p>
                        Para finalizar, te recomendamos que, si tenés que guiar un viaje de aventura más prolongado, incorpores en tu equipamiento el <strong>panel SolarSaga 100 W</strong>. Con este producto, podrás cargar a tu estación de energía, obteniendo así un generador solar. De esta manera, no tendrás que depender de ningún suministro eléctrico y conseguirás, directamente, la energía del sol para cargar la estación portátil: lo que te garantiza verdadera independencia energética en tu trabajo como guía de turismo.
                    </p>

                    <div className='NotaImgConteiner'>
                        <img src={image2} alt='imagen' />
                    </div>

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
export default MejoraLaExperienciaClientes;