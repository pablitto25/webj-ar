import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner32 from '../../Banner/banner32'
import { Helmet } from 'react-helmet'

const TemperaturasExtremas = () => {
    return (
        <div>
            <Helmet>
                <title>Corte de luz: qué hacer ante temperaturas extremas</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner32 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='container NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        Según el Sistema Meteorológico de Argentina, <strong>se pronostica temperaturas superiores a lo normal para este verano</strong>. Ante esta situación, la demanda de electricidad aumentará fuertemente al punto de producirse numeros cortes de energía.
                    </p>
                    <p>
                        ¿Qué conviene hacer frente a esto? La respuesta es fácil: <strong>Jackery, tu aliado infalible para los cortes de luz</strong>. Con los generadores solares y las estaciones de energía portátil podrás cargar todos tus dispositivos y seguir tu vida con completa normalidad.
                    </p>
                    <p>
                        Específicamente, te recomendamos el <strong>generador solar 1000</strong> que combina la central eléctrica portátil Explorer 1000 y SolarSaga 100W. Cuando la luz del sol incide sobre el panel solar SolarSaga de 100 W, las células fotovoltaicas convierten la energía del sol en electricidad. Luego, la central eléctrica almacena dicha electricidad para cargar diferentes dispositivos. ¡El combo perfecto para generar tu propia energía ante los cortes de luz debido a temperaturas extremas!
                    </p>
                    <p>
                        Además, a diferencia de los generadores a combustible, son livianos, portátiles, silenciosos, fácil de usar, económicos, ocupan poco espacio y seguros para tu salud porque no generan emisiones contaminantes.
                    </p>
                    <p>
                        Ahora bien, ¿qué dispositivos se pueden cargar con la <strong>Explorer 1000</strong>? Gracias a su capacidad de 1002.2Wh, puede cargar simultáneamente diferentes dispositivos:
                    </p>

                    <ul>
                        <li><strong>Dispositivos para la salud</strong>: si tenés algún familiar que necesite dispositivos especiales para cuidar su salud, entonces te conviene asegurarte de tener energía de respaldo para casos de emergencia. Con la Explorer 1000, podrás cargar tu Philips DreamStation Auto CPAP y usarla por 16 horas, tu nebulizador Omron NE-C801 y usarla de manera continua por 26 horas como así también podrás cargar tu desfibrilador automático Samaritan PAD 360P y usarla de manera continua por 32 horas.</li>
                        <li><strong>Dispositivos para la cocina</strong>: la Explorer 1000 te permitirá evitar romper la cadena de frío de tus alimentos durante 13 horas con la heladera portátil Dometic CFX3, usar por 2 horas la licuadora Oster Classic 4655 y asar a la parrilla eléctrica por 1 hora con tu Aigostar Hitte 30HFA.</li>
                        <li><strong>Dispositivos para el entretenimiento</strong>: para no aburrirse en un corte de luz, es importante tener energía que te permita cargar los dispositivos para tus hijos o para vos mismo. Podrás usar de manera continua tu tablet Apple iPad por 3 días y tu parlante Bluetooth JBL Flip 6, por 40 horas.</li>
                        <li><strong>Dispositivos para trabajar</strong>: para poder trabajar de casa es necesario tener una notebook, un módem y el celular. Con la Explorer 1000, podrás usar la notebook (por 9 cargas), el módem (+100 horas) y el celular (100 cargas).</li>
                        <li><strong>Dispositivos para la seguridad</strong>: es importante que esté cargado tu sistema de alarma ya que la batería de respaldo podría agotarse antes de que regrese la electricidad. Entonces, te recomendamos que la cargues con la Explorer ya que podrás usarla de manera continua por 20 horas.
                            Además, te sugerimos cargar luces para poder estar tranquilo durante lo que dure el corte de luz. Si, por ejemplo, cargás Nilight 20” LED Light Bar con la Explorer 1000, podrás usarla de manera continua por 6,3 horas.
                        </li>
                    </ul>
                    <p>
                        <u><strong>Otras recomendaciones para enfrentar las temperaturas extremas</strong></u>
                    </p>
                    <ul>
                        <li>Aumentar el consumo de agua sin esperar a tener sed para evitar una deshidratación adecuada.</li>
                        <li>No exponerse al sol en exceso, especialmente entre las 10 y las 16 horas.</li>
                        <li>Prestar atención a los bebés, niños y a las personas mayores.</li>
                        <li>Evitar las bebidas con cafeína, con alcohol o muy azucaradas.</li>
                        <li>Comer verduras y frutas.</li>
                        <li>Reducir la actividad física.</li>
                        <li>Usar ropa ligera, holgada y de colores claros.</li>
                    </ul>
                    <p>
                        En resumen, <strong>Jackery es tu aliado infalible para los cortes de luz ante temperaturas extremas</strong>. Que la falta de electricidad no te detenga: seguí funcionando con energía portátil.
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
export default TemperaturasExtremas;