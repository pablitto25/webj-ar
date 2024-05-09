import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Link } from 'react-router-dom'
import Banner8 from '../../Banner/banner8'


const JackeryExplorer240 = () => {
    return (
        <div>
            <header>
                <div className='bannerConteiner'>
                    <Banner8 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>

                    {/* inicio nueva nota */}

                    <p>
                        ¿Vas a tener una escapada de fin de semana y buscas con qué puedes cargar tu teléfono en medio de la montaña? Pues, tenemos la solución que tanto necesitas: <span style={{ fontWeight: '700' }}>Jackery Explorer 240</span>.
                    </p>
                    <p>
                        La <Link to="https://www.jackerychile.com/MLC-1429110817-jackery-explorer-240-estacion-de-energia-portatil-_JM#position=1&search_layout=stack&type=item&tracking_id=dbb081cb-3327-41b3-ab7f-4690d0570684" target='_blank'><span style={{ color: '#FF5000' }}>Jackery Explorer 240</span></Link> es una estación de energía portátil con el que puedes recargar todos tus dispositivos gracias a su inversor de onda sinusoidal pura. Tiene una batería de ion de litio 240 Wh (16,8 Ah, 14,4 V), una salida de corriente alterna (230 V, 200 W, 400 W pico), dos puertos USB-A y un puerto de auto de corriente continua.
                    </p>

                    <div className='NotaConteiner'>
                        <iframe width="1278" height="719" src="https://www.youtube.com/embed/_uzPLj9zOGc" title="The most Endangered Mammal in North America: the Black-Footed Ferret @WorldWildlifeFund" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <p>
                        Además de su eficiencia, este producto tiene numerosas cualidades:
                    </p>

                    <ul>
                        <li><span style={{ fontWeight: '700' }}>Transportable:</span> es ligero ya que pesa únicamente 3 kg. También, viene con una manija sólida; lo que lo hace perfecto para llevarlo a todos lados: a la playa, a la montaña, al bosque, campamentos, en fin, a donde sea.</li>
                        <li><span style={{ fontWeight: '700' }}>Práctico:</span> cuenta con tres maneras de carga. Una de las opciones es recargar el banco de energía con el panel SolarSaga 100W en tan solo 5,5 horas. También, puedes cargar la estación con el tomacorriente de la pared en 5,5 horas o con la batería del auto en 6,5 horas.</li>
                        <li><span style={{ fontWeight: '700' }}>Seguro:</span> el producto viene equipado con protección contra la temperatura elevada, los cortocircuitos, la descarga excesiva, la sobretensión, el exceso de potencia y de sobrecarga.</li>
                        <li><span style={{ fontWeight: '700' }}>Limpio:</span> es un producto verde ya que no emite gases de efecto invernadero.</li>
                        <li><span style={{ fontWeight: '700' }}>Versátil:</span> como dijimos, la estación de energía puede ser empleada para satisfacer tus necesidades energéticas que tengas en plenas vacaciones pero también sirve para cargar tus dispositivos en cortes de energía, en eventos sociales, en la atención de pacientes críticos, entre otros.</li>
                        <li><span style={{ fontWeight: '700' }}>Silencioso:</span> a diferencia de las estaciones de energía que usan combustible, esta estación de energía es, en verdad, silencioso: podrás relajarte en plena naturaleza o trabajar de manera remota con total tranquilidad.</li>
                        <li><span style={{ fontWeight: '700' }}>Excelente relación precio-calidad:</span> Jackery Explorer 240 es una de las estaciones de energía con el precio más competitivo en el mercado. Obtendrás energía de excelente calidad a un precio razonable.</li>
                    </ul>

                    <p>
                        Por todo lo anterior, <span style={{ fontWeight: '700' }}>Jackery Explorer 240</span> es la mejor estación de energía portátil que puedes adquirir en tus vacaciones. Si deseas saber más acerca del producto, te invitamos a que accedas en el siguiente <Link to="https://www.jackerychile.com/MLC-1429110817-jackery-explorer-240-estacion-de-energia-portatil-_JM#position=1&search_layout=stack&type=item&tracking_id=497e77d8-4bbb-436b-94e4-47b89e540ac1" target='_blank'><span style={{ color: '#FF5000' }}>link</span></Link>.
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
export default JackeryExplorer240;