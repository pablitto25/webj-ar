import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Link } from 'react-router-dom'
import Banner11 from '../../Banner/banner11'

const JackerGeneradorSolar240 = () => {
    return (
        <div>
            <header>
                <div className='bannerConteiner'>
                    <Banner11 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        A la hora de planificar aventuras, los amantes del outdoor se percatan de que deben buscar una forma de cargar sus celulares, computadoras y demás dispositivos al aire libre. Asimismo, desean que dicha fuente de energía sea limpia, segura y silenciosa. Entonces, ¿cuál es la mejor opción para este caso? ¡El <strong>generador solar 240</strong> es la respuesta!
                    </p>
                    <p>
                        <strong>¿Cuáles son las ventajas del generador?</strong><br />
                        El <Link to="/PRODUCTOS/Jackery%20Generador%20Solar%20240" target='_blank'><span style={{ color: '#FF5000' }}>generador solar 240</span></Link> está equipado con la estación de energía solar <strong>Explorer 240</strong> y el <strong>panel Solarsaga 100W</strong>: una combinación infalible para proporcionar energía a tus artefactos electrónicos. Además de su eficiencia energética, este generador se destaca por ser:
                    </p>
                    <ul>
                        <li>Altamente resistente</li>
                        <li>Apto para outdoor (-10° a 40°)</li>
                        <li>Durable gracias a su diseño robusto</li>
                        <li>Transportable debido a su manija de asa</li>
                        <li>Fácil de mantener</li>
                        <li>Carga rápida</li>
                        <li>Capacidad de cargar dispositivos simultáneamente</li>
                    </ul>

                    <div className='NotaConteiner'>
                        <iframe width="1278" height="719" src="https://www.youtube.com/embed/Tz9uVgdKT4E" title="The most Endangered Mammal in North America: the Black-Footed Ferret @WorldWildlifeFund" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <p>
                        <strong>¿Cómo funciona el generador?</strong><br />
                        El <Link to="/PRODUCTOS/Jackery%20SolarSaga%20100" target='_blank'><span style={{ color: '#FF5000' }}>panel solar SolarSaga de 100 W</span></Link> está compuesto por células solares individuales que se encargan de transformar la luz del sol en energía. Precisamente, los fotones, es decir, la luz solar, separan los electrones, lo que produce una capa de carga positiva y otra negativa en la misma célula. Tal energía eléctrica se almacena en la estación <Link to="/PRODUCTOS/Jackery%20Explorer%20240" target='_blank'><span style={{ color: '#FF5000' }}>Explorer 240</span></Link> para su uso posterior. ¡Una manera simple y limpia de generar energía!
                    </p>
                    <p>
                        <strong>¿Para qué lo puedo usar?</strong><br />
                        Puedes llevarlo a tus diferentes actividades outdoor: excursiones, campamentos, salidas a la montaña o a donde sea. Su diseño súper transportable te permite llevarlo a cualquier sitio y asegurarte que tus dispositivos grandes y pequeños estén cargados.También, puedes usarlo en casos de emergencia, eventos sociales o si necesitas trabajar de manera remota.
                    </p>
                    <p>
                        En conclusión, <strong>el generador solar Jackery 240</strong> es una excelente alternativa para alimentar a tus dispositivos en cualquier momento y espacio. ¿Qué esperas para adquirirlo?
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
export default JackerGeneradorSolar240;