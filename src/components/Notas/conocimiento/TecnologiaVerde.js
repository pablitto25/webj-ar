import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner7 from '../../Banner/banner7'
import imagen9 from './assests/TecnologiaVerde/TecnologiaVerde.webp'
import { Link } from 'react-router-dom'


const TecnologiaVerde = () => {
    return (
        <div>
            <header>
                <div className='bannerConteiner'>
                    <Banner7 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        La mayoría de los países emprendieron un proceso de <Link to="https://www.amnesty.org/es/what-we-do/climate-change/energy-transition/" target='_blank'><span style={{ color: '#FF5000' }}>transición energética</span></Link> que busca modificar la forma en la producen, distribuyen y consumen energía, con el objetivo de cuidar el medio ambiente al reducir la emisión de gases de efecto invernadero. Para lograr dicho propósito, apostaron por el desarrollo de energías renovables.
                    </p>

                    <p>
                        <span style={{ fontWeight: '700' }}>Las energías renovables son fuentes de energía que se distinguen por usar recursos inagotables o que se renuevan rápidamente</span>, tales como el sol, el agua, el viento y la biomasa vegetal o animal. Dichas energías casi no producen CO2, metano ni óxido nitroso en el medio ambiente, a diferencia de aquellas energías basadas en la quema de combustibles fósiles. En efecto, son energías verdes, es decir, energías limpias.
                    </p>

                    <p>
                        Entre ellas, destacamos <span style={{ fontWeight: '700' }}>la energía solar</span>, la cual es producida por el calor o la luz del sol. Por un lado, los colectores solares térmicos usan paneles o espejos que concentran el calor para transferirlo a un fluido que, al producir vapor, mueve una turbina o es conducido por una tubería con el objetivo de generar electricidad. Asimismo, la energía solar puede ser generada por los fotones que receptan las celdas solares de los paneles solares que, al liberar electrones, producen electricidad.
                    </p>

                    <div className='NotaImgConteiner'>
                        <img src={imagen9} alt='imagen' />
                    </div>

                    <p>
                        Ahora bien, si deseas construir una verdadera conciencia ecológica, debes incorporar productos en tu rutina que se adecúen a dicha meta. Para ese fin, no hay mejor opción que la tecnología de Jackery. Nuestra marca ofrece <span style={{ fontWeight: '700' }}>estaciones de energía portátil, paneles y generadores solares</span> que se distinguen por ser:
                    </p>

                    <ul>
                        <li><span style={{ fontWeight: '700' }}>Limpios:</span> no emiten gases de efecto invernadero, por lo tanto, son eficientes para contrarrestar las consecuencias del cambio climático.</li>
                        <li><span style={{ fontWeight: '700' }}>Seguros:</span> brindan protección contra la temperatura elevada, los cortocircuitos, la descarga excesiva, el exceso de potencia, el exceso de sobrecarga y la sobretensión. De esta manera, puedes quedarte tranquilo de que la tecnología de Jackery es segura para cargar tus dispositivos.</li>
                        <li><span style={{ fontWeight: '700' }}>Portátiles:</span> nuestra línea permite llevar la energía donde sea. Jackery ofrece verdadera libertad.</li>
                        <li><span style={{ fontWeight: '700' }}>Silenciosos:</span> nuestros productos son silenciosos, a diferencia de las estaciones de energía que funcionan con combustible. Tus aventuras o tus actividades indoor no se verán afectadas por ruidos molestos.</li>
                    </ul>

                    <p>
                    Nuestra tecnología, en definitiva, es eficiente y ecológica ya que permite generar energía para el funcionamiento de múltiples dispositivos en cualquier lugar y momento, al mismo tiempo que cuidas el medio ambiente. Te invitamos a que te dirijas a nuestro <Link to="https://www.jackerychile.com/listado/construccion/electricidad/energia-solar/" target='_blank'><span style={{ color: '#FF5000' }}>catálogo</span></Link> y veas qué producto se acomoda mejor a tus necesidades
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
export default TecnologiaVerde;