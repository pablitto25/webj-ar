import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner27 from '../../Banner/banner27'

const CortesDeLuz = () => {
    return (
        <div>
            <header>
                <div className='bannerConteiner'>
                    <Banner27 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        Según diversos portales, se prevén numerosos cortes de luz para este verano debido al exceso de demanda del país. ¿Y no sabés qué vas hacer en esa situación? No te preocupes, te traemos recomendaciones para que puedas seguir tu rutina con energía portátil.
                    </p>
                    <ol>
                        <li><strong>Conseguí una estación de energía portátil</strong><br />
                            Una estación de energía es el aliado energético que necesitás para los cortes de luz. Podés cargarla, con electricidad o con paneles solares, y tenerla lista en caso de emergencia. Así, podrás mantener tus equipos funcionando. Lo mejor de todo es que es fácil de usar, portátil, liviana, silenciosa y segura ya que no provoca emisiones contaminantes, por lo que podrás usarla dentro de tu departamento.
                        </li>
                        <li><strong>Invertí en un generador solar</strong><br />
                            Otra excelente opción es el generador solar que se compone de un panel solar (que convierten la luz del sol en electricidad) y una estación de energía portátil (si el corte es prolongado, podrás utilizar la energía solar para recargar tu estación).
                            A diferencia de los generadores a combustible, el generador solar sólo requiere una inversión inicial, lo que lo hace más económico. Además, es liviano, portátil y seguro para la salud.
                        </li>
                        <li><strong>Mantenete informado</strong><br />
                            Existen diversos motivos por los cuales se corta la luz. Por lo tanto, te conviene entrar con frecuencia a las redes sociales para saber cuál es la causa y, también, conocer en cuánto tiempo tardará en restablecerse el servicio.
                        </li>
                        <li><strong>Evitá tener dispositivos conectados a la red</strong><br />
                            Hasta que no se restablezca el servicio eléctrico, te recomendamos no dejar conectados dispositivos a la red mientras trabajan en ella. De esta manera, evitarás que tus equipos electrónicos se dañen por sobretensiones.
                        </li>
                        <li><strong>Cargá dispositivos imprescindibles</strong><br />
                            Si, por ejemplo, comprás la estación de energía Explorer 1000, podrás cargar simultáneamente diferentes dispositivos que te harán faltan en los cortes de luz:
                            <ul>
                                <li><strong>Heladerita portátil</strong>: con la Explorer 1000, podrás alimentar tu Dometic CFX3 y usarla de manera continua por 13 horas. Así, no se echarán a perder algunos alimentos y podrás mantener frías tus bebidas.</li>
                                <li><strong>Parrilla eléctrica portátil</strong>: si el corte de luz será prolongado, te conviene alimentar tu parrilla eléctrica portátil para poder preparar comida. Podrás alimentar tu Aigostar Hitte 30HFA con la estación de energía, para usarla de forma continua por unas 1 hora.</li>
                                <li><strong>Ventilador portátil de escritorio</strong>: te conviene un ventilador para estar más fresco en el verano. Si, por ejemplo, cargás un ventilador portátil Xiaomi Mi Smart Standing Fan 1C con la estación de energía, podrás usarlo por 21 horas.</li>
                                <li><strong>Dispositivos para trabajar</strong>: una notebook, un módem y el celular; el combo imbatible para trabajar desde casa. Que los cortes de luz no detengan tu trabajo: con la Explorer 1000, podrás usar la notebook (por 9 cargas), el módem (+100 horas) y el celular (100 cargas).</li>
                                <li><strong>Luces</strong>: con ellas podrás ver bien y evitar inconvenientes ante la ausencia de luz. Si, por ejemplo, cargás Nilight 20” LED Light Bar con la Explorer 1000, podrás usarla de manera continua por 6,3 horas.</li>
                                <li><strong>Sistemas de alarmas</strong>: aunque los sistemas de alarmas cuentan con una batería de respaldo de larga duración, tras agotarse dicha batería tu casa podría quedar desprotegida. Para evitar inconvenientes, te recomendamos que las cargues con la Explorer y podrás usarla de manera continua por 20 horas.</li>
                            </ul>
                        </li>
                    </ol>

                    <p>
                        Que la falta de electricidad no te detenga este verano. Preparate para los cortes de luz con Jackery: energía portátil y segura para seguir tu rutina.
                    </p>




                    {/* fin de la nota */}

                    {/* Falta imagen de diseño */}
                    {/* <div className='NotaImgConteiner'>
                        <img src={imagen1} alt='imagen' />
                    </div>
 */}
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
export default CortesDeLuz;