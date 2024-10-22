import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Helmet } from 'react-helmet'
import Banner23 from '../../Banner/banner23'

const SalidaEscolar = () => {
    return (
        <div>
            <Helmet>
                <title>Salida escolar: cómo la energía portátil facilita su organización</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner23 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}
                    <p>
                        Organizar una <strong>salida escolar</strong> implica un verdadero desafío: tenés que elegir el lugar adecuado, planificar actividades educativas y asegurarte de que siempre haya energía. Pero, ¿cómo garantizar que siempre tengas energía en sitios remotos donde no hay acceso a la electricidad? Es simple, nuestras <strong>estaciones de energía portátil</strong> son las aliadas que necesitás.
                    </p>
                    <p>
                        Ya sea que tu salida escolar sea en la montaña, el campo o cualquier otro lugar al aire libre, nuestras estaciones te permitirán mantener cargados todos los dispositivos esenciales para tener una excelente experiencia. ¡Con ellas, podrás tener energía segura, portátil y amigable con el medio ambiente!
                    </p>
                    <p>
                        Especialmente, te sugerimos la <strong>Explorer 1000</strong>. Gracias a su capacidad de 1002.2 Wh, puede cargar simultáneamente hasta 8 dispositivos, por ejemplo:
                    </p>
                    <ul>
                        <li>
                            <strong>Luces LED</strong>: si luego de una caminata al aire libre, van hacer campamento, es imprescindible que tengas a mano luces. Con la Explorer 1000, podrás cargar tu Black Diamond Spot 400 Headlamp y usarla de manera continua por 8 días.
                        </li>
                        <li>
                            <strong>Radios</strong>: en caso de que no haya señal, una radio puede facilitar tu comunicación con otros profesores o con los mismos alumnos. Si, por ejemplo, cargás tu Motorola Talkabout T600, con la estación de energía, podrás usarla de manera continua por 11 días.
                        </li>
                        <li>
                            <strong>GPS</strong>: permite saber las ubicaciones y altitudes del terreno. Podrás cargar tu Garmin GPSMAP 64sx con la estación de energía, para usarla de forma continua por 16 días.
                        </li>
                        <li>
                            <strong>Botiquín electrónico de primeros auxilios con instrucciones guiadas</strong>: incluye suministros médicos esenciales y una pantalla táctil que brinda instrucciones guiadas paso a paso en caso de emergencias. Con la Explorer 1000, podrás cargar tu MedaCube Smart First Aid Kit y usarla de manera continua por 16 días.
                        </li>
                        <li>
                            <strong>Otros dispositivos</strong>: si será una salida escolar prolongada, mantener la comida y bebida en buen estado es fundamental. La Explorer 1000 te permitirá disfrutar de hasta 3 horas de café caliente con tu cafetera Makita DCM501Z, asar a la parrilla por 1 hora con tu Aigostar Hitte 30HFA y mantener tus alimentos fríos durante 13 horas con la heladera portátil Dometic CFX3.
                        </li>
                    </ul>

                    {/* Imagen Pendiente por diseño */}

                    <p>
                        En resumen, <strong>la Explorer 1000 es la compañera ideal para cualquier salida escolar</strong>. Asegurá energía constante y portátil para que la experiencia de tus alumnos sea inolvidable.
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
export default SalidaEscolar;