import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
/* import image1 from '../conocimiento/assests/nota-de-blog-2-jackery.jpg'; */
import { Helmet } from 'react-helmet'
import Banner28 from '../../Banner/banner28'

const EnergiaPortatilParaScout = () => {
    return (
        <div>
            <Helmet>
                <title>Cómo la energía portátil facilita las salidas scout</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner28 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='container NotaTexConteiner'>
                    {/* inicio nueva nota */}
                    <p>
                        Las <strong>salidas</strong> scout permiten que los niños y adolescentes puedan conectarse con la naturaleza, potenciar sus habilidades y socializar con sus compañeros. ¡Una oportunidad perfecta para aprender y disfrutar!
                    </p>
                    <p>
                        Ahora bien, ¿tenés que organizar una salida scout en un lugar donde no llega la electricidad? No te preocupes, la energía portátil de Jackery te permite cargar simultáneamente diferentes dispositivos que necesitás para la aventura scout.
                    </p>
                    <p>
                        Por eso, te recomendamos que consigas la Explorer 1000, con la que podrás cargar:
                    </p>
                    <ul>
                        <li><strong>Luces</strong>: si luego de las actividades al aire libre van hacer campamento, es imprescindible que tengas a disposición luces. Con la Explorer 1000, podrás cargar tu Reflectores Led Gadnic y usarla de manera continua por 40 horas.</li>
                        <li><strong>GPS</strong>: permite saber las ubicaciones y altitudes del terreno. Podrás cargar tu Garmin GPSMAP 64sx con la estación de energía, para usarla de forma continua por 16 días.</li>
                        <li><strong>Smartwatches</strong>: los relojes inteligentes permiten medir los km recorridos y valores imprescindibles de la salud. Con la Explorer 1000, podrás cargar tu Apple Watch Series 8 y usarlo de manera continua por 16 días.</li>
                        <li><strong>Radios</strong>: en caso de que no haya señal, una radio puede facilitar tu comunicación con otros organizadores o con los scout. Si, por ejemplo, cargás tu Motorola Talkabout T600, con la estación de energía, podrás usarla de manera continua por 11 días.</li>
                        <li><strong>Desfibrilador automático</strong>: este dispositivo permite atender a una persona que esté sufriendo paro cardíaco súbito. Si tenés un familiar o amigo propenso a esa enfermedad cardíaca, es recomendable que lo tengas para evitar inconvenientes. Si usás la Explorer 1000, podrás cargar tu <strong>Samaritan PAD 360P</strong> y usarla de manera continua por 32 horas.</li>
                        <li><strong>Dispositivos para la comida y bebida</strong>: si planean quedarse por mucho tiempo en el medio de la naturaleza, te conviene mantener la comida y bebida en buen estado es fundamental. La Explorer 1000 te permitirá disfrutar de hasta 3 horas de café caliente con tu cafetera Makita DCM501Z, asar a la parrilla por 1 hora con tu Aigostar Hitte 30HFA y mantener tus alimentos fríos durante 13 horas con la heladera portátil Dometic CFX3.</li>
                        <li><strong>Dispositivos para fotografiar/filmar</strong>: si deseás sacar fotos y filmar las actividades scout, podés cargar tu drone y cámara. Con la Explorer 1000 podrás cargar tu drone DJI Mini 3 Pro y usarla continuamente por 10 horas. Además, podrás cargar tu cámara Sony Alpha 7 IV y usarla por 114 horas para registrar toda tu experiencia.</li>
                        <li><strong>Otros dispositivos</strong>: tras un día lleno de actividades, podés reproducir música en el parlante Bluethooh mientras están cenando. Si, por ejemplo, cargás tu JBL Flip 6,   con la estación de energía, podrás usarla de manera continua por 40 horas.</li>
                    </ul>
                    <p>
                    Además de cargar dispositivos imprescindibles, la Explorer 1000 es silenciosa, liviana y segura ya que no provoca emisiones contaminantes.  
                    <strong>Tené la mejor travesía scout con Jackery</strong>: energía portátil para cualquier aventura.
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
export default EnergiaPortatilParaScout;