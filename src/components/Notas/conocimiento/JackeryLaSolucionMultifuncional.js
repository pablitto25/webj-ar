import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Link } from 'react-router-dom'
import imagen from '../conocimiento/assests/JackerLaSolucionMulfuncional/LaSolucionMultifuncional-1.jpg'
import imagen1 from '../conocimiento/assests/JackerLaSolucionMulfuncional/LaSolucionMultifuncional-2.png'
import Banner10 from '../../Banner/banner10'

const JackeryLaSolucionMultifuncional = () => {
    return (
        <div>
            <header>
                <div className='bannerConteiner'>
                    <Banner10 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        Tenemos como principal propósito brindar energía solar para todas las personas que lo precisen, sea que la requieran para actividades outdoor, indoor, o, bien, para casos de emergencia, salud, trabajo, entre otros. En efecto, nuestra marca se presenta como aquella <strong>solución multifuncional</strong> que se adapta a cualquier tipo de circunstancia.
                    </p>
                    <p>
                        <strong>Actividades outdoor</strong><br />
                        ¿Cuántas veces las personas que realizan trekking, hacen camping o, simplemente, desean hacer un picnic con amigos no pudieron realizarlo de manera prolongada ya que no tenían la suficiente energía para ello? Pues, solucionamos dicha necesidad: sus generadores, estaciones de energía y paneles solares pueden alimentar diferentes tipos de dispositivos al mismo tiempo. ¡Encima son livianos y portátiles! Realmente, son perfectos para llevarlos a la montaña, el bosque o la playa.
                    </p>

                    <div className='NotaImgConteiner'>
                        <img src={imagen} alt='imagen' />
                    </div>

                    <p>
                        <strong>Estilo de vida off grid<br /></strong>
                        Cada vez está aumentando la cantidad de personas que están construyendo una conciencia ecológica. Por esa razón, varios decidieron adoptar un modo de vida que prescinde de la red eléctrica para no generar más emisiones de efecto invernadero. Nuestra marca es la solución ideal para esa situación ya que les brinda energía independiente y limpia que puede ser usada en todo momento.

                    </p>
                    <p>
                        <strong>Actividades indoor<br /></strong>
                        Cocinar, ver series o limpiar en el hogar requieren de un buen abastecimiento de energía. Nuestros productos son sumamente efectivos para ello: energía que no genera contaminación y no sufre cortes ni constantes aumentos de tarifas.

                    </p>

                    <div className='NotaImgConteiner'>
                        <img src={imagen1} alt='imagen' />
                    </div>

                    <p>
                        <strong>Situaciones de emergencia</strong><br />
                        Nuestros productos son ideales para aquellas ocasiones en donde se corta la luz por condiciones climáticas adversas. Muchos sitios de Chile sufren cortes de energía frecuentes, lo que puede implicar un verdadero inconveniente para las personas que necesitan continuar con sus actividades domésticas, estudiar o hacer home office. Para ahorrarse un malestar, es mejor estar preparado en dichos casos. Por eso, te recomendamos que visites el <Link to="/PRODUCTOS/Jackery%20SolarSaga%20100" target='_blank'><span style={{ color: '#FF5000' }}>Jackery Explorer 240</span></Link>  y decidas cuál es el mejor para ti.
                    </p>

                    <p>
                        <strong>Problemas de salud</strong><br />
                        Nuestra marca contribuye al cuidado de pacientes críticos. Existen personas con enfermedades crónicas que requieren asistencia constante de determinados dispositivos, los cuales deben funcionar en todo contexto, incluso si la energía eléctrica fue cortada. Por lo tanto, te aconsejamos adquirir nuestros productos para que así te quedes tranquilo de que dichos sujetos recibirán un adecuado suministro.

                    </p>

                    <p>
                        <strong>Aplicaciones profesionales</strong><br />
                        Por último, nuestros productos pueden proporcionar energía a equipos de construcción, agricultura, telecomunicaciones, o eventos de producción visual, utilizados en sitios en donde no llega la red eléctrica.

                    </p>
                    <p>
                        Desde nuestra fundación en 2012, nos propusimos satisfacer todas las necesidades energéticas de los amantes del outdoor con el objetivo de inspirarlos a enfrentar aventuras con suma libertad. Asimismo, pretendemos suplir aquellas necesidades energéticas asociadas a actividades indoor, a emergencias, a circunstancias laborales o de salud complejas. Y vaya que lo logramos: actualmente, <strong>Jackery es conocida como la marca líder</strong> más renombrada y premiada en el mercado de energía verde.
                    </p>

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
export default JackeryLaSolucionMultifuncional;