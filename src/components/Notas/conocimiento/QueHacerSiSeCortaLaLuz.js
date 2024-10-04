import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner21 from '../../Banner/banner21'
import image1 from '../conocimiento/assests/QueHacerSiSeCortaLaLuz/240904-Jackery-RRSS-P9CL-04B-1080x1350.webp'
import { Helmet } from 'react-helmet'

const QueHacerSiSeCortaLaLuz = () => {
    return (
        <div>
            <Helmet>
                <title>Qué hacer si se corta la luz y necesitás trabajar</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner21 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}

                    <p>
                        Argentina tiene decenas de cortes de luz al año, lo que provoca que tengamos que conseguir otra fuente de energía para poder seguir trabajando. Existen, por ejemplo, los generadores que usan combustible, pero estos emiten gases contaminantes que podrían poner en riesgo tu salud, más si te encontrás en un ambiente cerrado, como tu departamento. Por eso, necesitás un respaldo de energía que sí sea seguro y efectivo: <strong>las estaciones de energía de Jackery</strong>.
                    </p>
                    <strong>La Explorer 500, el aliado infalible para los cortes de luz</strong>
                    <div className='NotaImgConteiner'>
                        <img src={image1} className='image-feature' alt='imagen' />
                    </div>
                    <p>
                        Frente a los cortes de luz, te recomendamos la <strong>Explorer 500</strong>. Gracias a su batería de 518.4Wh, puede alimentar simultáneamente dispositivos electrónicos, tal como el módem (50 horas), la notebook (4,5 cargas), el celular (53 cargas) y una lámpara (16 horas): la combinación perfecta para trabajar home office tranquilamente en medio de un corte de luz. Asimismo, la Explorer 500 también puede cargar pequeños electrodomésticos, por lo que podrás usar la cafetera (0,8 horas), por ejemplo, para hacerte un café y tener más energía para seguir trabajando.
                    </p>
                    <p>
                        Como si fuera poco, es muy portátil ya que pesa sólo 6 kg y tiene una manija de asa para llevarla a donde sea que quieras. Además, es silenciosa por lo que tu trabajo no se verá interrumpido por ruidos molestos.
                        Más allá de poder ser usada como respaldo de energía, sirve para actividades outdoor y para ciertas aplicaciones profesionales, tal como trabajar en lugares en donde no llega la electricidad.
                    </p>
                    <p>
                        En resumen, las estaciones de energía Jackery son la mejor opción para continuar con tu trabajo cuando la luz se corta repentinamente. Conseguí la tuya y asegurate una jornada laboral tranquila.
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
export default QueHacerSiSeCortaLaLuz;