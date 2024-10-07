import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner18 from '../../Banner/banner18'
import image1 from '../conocimiento/assests/nota-de-blog-2-jackery.jpg';
import { Helmet } from 'react-helmet'

const ComoTrabajarSinConexion = () => {
    return (
        <div>
            <Helmet>
                <title>Cómo trabajar sin conexión eléctrica para un rodaje en exteriores</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner18 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}
                    <p>
                        ¿Necesitás hacer una produ para tu empresa en un lugar donde no hay electricidad? Te traemos la solución energética portátil ideal para filmar y sacar fotos en exteriores: la estación de energía Explorer 1000. Gracias a su gran capacidad de 1002.2Wh, podrás alimentar, de manera simultánea, hasta 8 dispositivos electrónicos, como por ejemplo: una Macbook Pro13 (8 cargas), una cámara Blackmagic Pocket Cinema Camera 6K (50 cargas), un Iphone 8 (100 cargas), un drone DJI Mavic Air 2 (13,3 horas), un micrófono Shure VP83F LensHopper (16 días), un grabador de audio Zoom H4n (16 días) y una luz tipo LED Nanlite Forza 60B (13,3 hs); las herramientas imprescindibles para cualquier creador de contenido. Con la <strong>Explorer 1000</strong>, podrás asegurar la carga de tus dispositivos durante toda la jornada de producción.
                    </p>

                    <p>
                        Lo mejor de todo es que la estación de energía es silenciosa, por lo que tu video no se verá afectado por molestos ruidos. Además, resiste temperaturas de -10° a 40°, lo que la hace perfecta para llevarla a donde sea que tengas que producir contenido.
                    </p>

                    <p>
                        Definitivamente, <strong>Jackery es el aliado perfecto para la producción de contenido</strong>. Para tu próxima producción, no te olvides de llevar tu Explorer 1000: te asegurarás una jornada de trabajo eficiente, segura y amigable con el medio ambiente.
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={image1} alt='imagen' />
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
export default ComoTrabajarSinConexion;