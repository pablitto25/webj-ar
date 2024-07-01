import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Link } from 'react-router-dom'
import Banner14 from '../../Banner/banner14'

const JackeryRazones = () => {
    return (
        <div>
            <header>
                <div className='bannerConteiner'>
                    <Banner14 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}
                    <p>
                        ¿Buscás una estación de energía limpia para llevarla a tu próxima salida al aire libre? ¿Necesitás un banco de energía que sea resistente, transportable y eficiente? Pues, no lo dudes más…te traemos 10 motivos para comprar <strong>Jackery Explorer 500.</strong>
                    </p>

                    <ol>
                        <li>
                            <strong>Ahorrarás dinero</strong><br />
                            Tras una inversión inicial, vas a obtener la <Link to="/PRODUCTOS/Jackery%20Explorer%20500" target='_blank'><span style={{ color: '#FF5000' }}>Jackery Explorer 500</span></Link> que te salvará de gastar dinero a largo plazo. Decile chau a las facturas de energía que constantemente incrementan su precio.
                        </li>
                        <li>
                            <strong>Cuidas la naturaleza</strong><br />
                            Para mejorar las condiciones ambientales actuales es necesario que nos comprometamos a adoptar comportamientos más ecológicos en nuestra cotidianidad. Qué mejor opción que una estación de energía para ello: energía solar que no emite gases de efecto invernadero.
                        </li>
                        <li>
                            <strong>Libertad energética</strong><br />
                            Gracias a su diseño transportable y su confección liviana, puedes llevar la Explorer 500 a donde sea que te llame la aventura. La energía solar te da verdadera libertad.
                        </li>
                        <li>
                            <strong>Fácil de cargar</strong><br />
                            Para alimentar tus múltiples dispositivos con la estación de energía, primero debes cargarla. Existen 3 formas de hacerlo:
                            <ul>
                                <li>Red eléctrica</li>
                                <li>Salida 12 V del auto</li>
                                <li>Panel solar Jackery</li>
                            </ul>
                        </li>
                        <li>
                            <strong>No te quedas sin energía ni un solo momento</strong><br />
                            ¿Cuántas veces los cortes de luz interrumpieron nuestras actividades? Ciento de veces…Pero, no te preocupes. Si adquieres la Jackery Explorer 500, podrás prescindir de la energía eléctrica y asegurarte una fuente confiable de energía en todo momento y lugar.
                        </li>
                        <div className='NotaConteiner'>
                            <iframe width="1278" height="719" src="https://www.youtube.com/embed/D0sgYdQppd0" title="The most Endangered Mammal in North America: the Black-Footed Ferret @WorldWildlifeFund" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <li>
                            <strong>Altamente durable</strong><br />
                            Gracias a su diseño robusto y resistente, puedes llevarlo a donde quieras, sin temor de que el polvo o algún golpe lo estropee.
                        </li>
                        <li>
                            <strong>Perfecta para actividades outdoor</strong><br />
                            La Jackery Explorer 500 es ideal para tus aventuras al aire libre ya que soporta temperaturas que van de -10° a 40°
                        </li>
                        <li>
                            <strong>Solución multifuncional</strong><br />
                            Además de ser útil para actividades outdoor, la estación de energía te sirve para diferentes tipos de situaciones: cortes de energía, asistencia a pacientes críticos, estilo de vida off rid, eventos sociales, aplicaciones profesionales, entre otros.
                        </li>
                        <li>
                            <strong>Seguridad garantizada</strong><br />
                            Este banco de energía se distingue por ser seguro. Está equipado con un sistema espacial contra los cortocircuitos, la sobretensión, el exceso de potencia y sobrecarga.
                        </li>
                        <li>
                            <strong>Silencioso</strong><br />
                            A diferencia de las estaciones de energía que funcionan a partir de combustible, la Explorer 500 no emite ruidos molestos. Así que puedes relajarte por completo en tus salidas al aire libre.
                        </li>
                    </ol>
                    <p>
                        Estas y muchas otras razones justifican que la <strong>Jackery Explorer 500</strong> sea una excelente opción verde para que la incluyas en tu vida. Accedé al siguiente <Link to="/PRODUCTOS/Jackery%20Explorer%20500" target='_blank'><span style={{ color: '#FF5000' }}>link</span></Link> si deseás tener más información.
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
export default JackeryRazones;