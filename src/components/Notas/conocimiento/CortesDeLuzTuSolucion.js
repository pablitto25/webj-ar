import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
/* import image1 from '../conocimiento/assests/nota-de-blog-2-jackery.jpg'; */
import { Helmet } from 'react-helmet'
import Banner35 from '../../Banner/banner35'
import { Link } from 'react-router-dom'

const CortesDeLuzTuSolucion = () => {
    return (
        <div>
            <Helmet>
                <title>¿Cortes de luz? Descubrí cómo un generador solar puede ser tu solución</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner35 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='container NotaTexConteiner'>
                    {/* inicio nueva nota */}

                    <p>
                        Aunque el verano sea el momento ideal para disfrutar las vacaciones, también es la estación en donde más se corta la luz por exceso de demanda en el país. En la mayoría de las veces, estos cortes suelen ser prolongados, lo que implica tener que buscar otra fuente de energía para poder seguir con la rutina de siempre.
                    </p>
                    <p>
                        Entonces, ¿qué fuente de energía es conveniente usar? <strong>Los generadores solares de Jackery</strong> son una excelente solución para prepaparte para los cortes de luz ya que permiten generar tu propia energía para alimentar los dispositivos que necesitás e, incluso, pueden cargar tu estación de energía las veces que quieras y asegurarte energía sin interrupciones.
                    </p>
                    <p>
                        Puntualmente, te recomendamos el <Link to="/PRODUCTOS/Jackery%20Generador%20Solar%20240" target='_blank' style={{ color: '#FF5000' }}>generador solar 240</Link> que combina la estación portátil <strong>Explorer 240</strong> y el panel solar <strong>SolarSaga 100W</strong>. Este generador es liviano, portátil, silencioso, económico, ocupa poco espacio y no genera emisiones contaminantes, por lo que podés usarlo en tu departamento sin problemas.
                        Gracias a su capacidad de 241.9 Wh, podés alimentar simultáneamente diferentes dispositivos que necesitás para seguir con tu rutina hasta que regrese la electricidad:
                    </p>
                    <ul>
                        <li><strong>Para la salud</strong>: con la Explorer 240, podés cargar tu Philips DreamStation Auto CPAP y usarla por 6 horas, tu nebulizador Omron NE-C801 y usarlo de manera continua por 3,2 horas. Así vas a poder cuidar la salud de tu familia en el tiempo que dure el corte de luz.</li>
                        <li><strong>Para la cocina</strong>: la Explorer 240 te permitirá evitar romper la cadena de frío de tus alimentos durante 3,5 horas con la heladera portátil Dometic CFX3 y hacer licuados por 1,1 hora con la licuadora portátil PopBabies.</li>
                        <li><strong>Para el trabajo</strong>: si necesitás seguir trabajando, entonces asegurate de poder cargar los dispositivos que más usas. Con la Explorer 240, podrás usar la notebook Lenovo IdeaPad por 3 horas, el módem por más de 25 horas, el posnet por 19 horas y el Iphone 15 por 14 cargas.</li>
                        <li><strong>Para el entretenimiento</strong>: para que los chicos no se aburran, es fundamental poder cargar los dispositivos que más usan. Con la Explorer 240, podés cargar el parlante JBL Flip 6 y usarlo de manera continua por 9,6 horas, como así también tu tablet Apple iPad Pro 12.9 y usarla por 10 horas.</li>
                        <li><strong>Para mayor practicidad</strong>: te sugerimos cargar luces durante el corte de energía. Si, por ejemplo, cargar tu lámpara Plafón LED Luz Cálida Candela 7259 con la Explorer 240, podrás usarla de manera continua por 8 horas. Asimismo, podrás cargar un ventilador portátil de escritorio para hacer un home office más cómodo. Si, por ejemplo, cargás un ventilador portátil Honeywell HT-900 con la estación de energía, podés usarlo de manera continua por 9,6 horas</li>
                    </ul>

                    <p>
                        En resumen, el generador solar de Jackery es la solución energética a los cortes de luz del verano ya que con él podrás seguir con tu rutina sin inconvenientes. ¡Conseguí el tuyo y preparate para el próximo corte!
                    </p>


                    {/* <div className='NotaImgConteiner'>
                        <img src={image1} alt='imagen' />
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
export default CortesDeLuzTuSolucion;