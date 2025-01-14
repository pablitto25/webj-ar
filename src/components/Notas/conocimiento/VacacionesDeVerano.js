import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner33 from '../../Banner/banner33'
/* import image1 from '../conocimiento/assests/nota-de-blog-2-jackery.jpg'; */
import { Helmet } from 'react-helmet'

const VacacionesDeVerano = () => {
    return (
        <div>
            <Helmet>
                <title>Energía portátil para unas vacaciones de verano sin límites</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner33 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='container NotaTexConteiner'>
                    {/* inicio nueva nota */}
                    <p>
                        Después de un año lleno de trabajo, te merecés esas <strong>vacaciones</strong> que tanto venís soñando: momentos inolvidables con tu familia o amigos en el lugar que querés.
                    </p>
                    <p>
                        A la hora de planificar tus vacaciones, tené en cuenta que, muchas veces, la electricidad no llega a todos lados. ¡No dejés que eso te limite! Con la energía portátil de <strong>Jackery</strong>, vas a tener toda la libertad que necesitás para disfrutar sin preocuparte por enchufes ni alargadores.
                    </p>
                    <p>
                        Por eso, te recomendamos que consigas una <strong>Explorer 1000</strong>. Gracias a su capacidad de 1002.2Wh, puede cargar simultáneamente diferentes dispositivos:
                    </p>
                    <ul>
                        <li><strong>Dispositivos para la cocina</strong>: la estación de energía te permitirá evitar romper la cadena de frío de tus alimentos durante 13 horas con la heladera portátil Dometic CFX3, usar por 2 horas la licuadora Oster Classic 4655 y asar a la parrilla eléctrica por 1 hora con tu Aigostar Hitte 30HFA.</li>
                        <li><strong>Dispositivos para el entretenimiento</strong>: para que tus hijos no se aburran durante el viaje de auto o de colectivo, es importante tener energía para cargar los dispositivos que más usan. Con la Explorer 1000, podés cargar una tablet Apple iPad por 3 días y un parlante Bluetooth JBL Flip 6, por 40 horas.</li>
                        <li><strong>Dispositivos para fotos y </strong>videos: si querés sacar fotos y filmar el paisaje o las experiencias que tengas durante las vacaciones, podés cargar tu drone y cámara. Con la Explorer 1000 podrás cargar tu drone DJI Mini 3 Pro y usarla continuamente por 10 horas. Además, podrás cargar tu cámara Sony Alpha 7 IV y usarla por 114 horas para registrar toda tu experiencia.</li>
                        <li><strong>Dispositivos para la seguridad</strong>: para tener un viaje tranquilo te conviene tener un gps para saber las ubicaciones del lugar a donde vayas. Podrás cargar tu Garmin GPSMAP 64sx con la estación de energía, para usarla de forma continua por 16 días. Asimismo, si planeás hacer campamento en la montaña o estar en la playa de noche, es imprescindible que tengas a mano luces. Con la Explorer 1000, podrás cargar tu Black Diamond Spot 400 Headlamp y usarla de manera continua por 8 días.</li>
                        <li><strong>Dispositivos para la salud</strong>: si tenés algún familiar o amigo que necesite dispositivos especiales para su salud, conviene que te asegures energía para casos de emergencia. Con la Explorer 1000, podrás usar por 16 horas continuas tu Philips DreamStation Auto CPAP y tu nebulizador Omron NE-C801 por 26 horas.</li>
                    </ul>
                    <p>
                        En resumen, Jackery te permite tener energía sin límites para unas vacaciones soñadas. ¡Disfrutá la libertad energética!
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
export default VacacionesDeVerano;