import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Link } from 'react-router-dom'
import Banner13 from '../../Banner/banner13'
import imagen1 from '../conocimiento/assests/JackeryGeneradoresSolares/Solar_Generator_Quick_Solar_Charging_PC_1200x.webp'

const JackeryGeneradoresSolares = () => {
    return (
        <div>
            <header>
                <div className='bannerConteiner'>
                    <Banner13 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        La tendencia actual marca que las personas están más preocupadas por el cuidado del medio ambiente. Es por ello que buscan productos alternativos para obtener energía que alimente a sus múltiples dispositivos en diferentes lugares, momentos y situaciones.
                    </p>

                    <p>
                        Una opción perfecta para ese propósito son los <strong>generadores solares</strong>. Básicamente, son centrales eléctricas portátiles que emplean paneles solares con el objetivo de convertir la luz del sol en electricidad. Al aprovechar la energía solar, los generadores no emiten gases nocivos al medio ambiente. Asimismo, son silenciosos, seguros, fáciles de mantener y altamente resistentes. Por todo lo anterior, conviene invertir en generadores solares en vez de adquirir generadores que funcionan a base de combustión.
                    </p>

                    <p>
                        Ahora bien, <strong>¿cómo se componen los generadores solares? ¿y cómo funcionan?</strong> En principio, incluyen paneles solares que permiten convertir la luz del sol en electricidad. Una vez hecha esta transformación, se transfiere la energía al controlador de carga, el cual se ocupa de acondicionar la electricidad con el motivo de no generar sobrecarga. De esta forma, la energía se almacena en la batería de litio para que pueda ser usada posteriormente. Por último, el inversor convierte la corriente continua de los paneles solares en corriente alterna, es decir, extrae energía de la batería para conducirla a los electrodomésticos u otros dispositivos.
                    </p>

                    <div className='NotaImgConteiner'>
                        <img src={imagen1} alt='imagen' />
                    </div>

                    <p>Existen diferentes <strong>tipos de generadores solares:</strong></p>

                    <ul>
                        <li>Generador conectado a la red: mediante un proceso de transformación de corriente continua a alterna, el generador se puede conectar a la red eléctrica y alimentar los diferentes tipos de electrodomésticos.</li>
                        <li>Generador fuera de la red: su funcionamiento implica el uso de baterías alimentadas por paneles solares. Son ideales para aventuras outdoor.</li>
                        <li>Generador híbrido: funcionan como los generadores tradicionales solamente que usan una fuente de energía respetuosa con el medio ambiente.</li>
                    </ul>


                    <p>
                        Si deseás adquirir un generador, te recomendamos que sea de nuestra marca: <Link to="/PRODUCTOS/Jackery%20Generador%20Solar%20240" target='_blank'><span style={{ color: '#FF5000' }}>Jackery</span></Link>. Nuestros generadores se distinguen por ser sumamente confiables, eficientes, rentables, durables y de fácil uso. Ingresá al siguiente <Link to="https://www.jackerychile.com/" target='_blank'><span style={{ color: '#FF5000' }}>link</span></Link> para tener más información de nuestros productos.
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
export default JackeryGeneradoresSolares;