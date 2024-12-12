import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Helmet } from 'react-helmet'
import Banner30 from '../../Banner/banner30'

const EnergiaPortatilEnElAgro = () => {
    return (
        <div>
            <Helmet>
                <title>Algunas aplicaciones de energía portátil en el agro</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner30 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}
                    <p>
                        <strong>La energía portátil es el aliado perfecto para el sector agropecuario</strong>: permite trabajar en zonas rurales donde no llega la electricidad, reduce gastos a largo plazo y optimiza el trabajo en casos de emergencia.
                    </p>
                    <p>
                        Por tanto, las estaciones de energía portátil y los generadores solares son perfectos para los que trabajan en el campo ya que son seguras, silenciosas, amigables con el medio ambiente y eficientes. Por eso, te recomendamos la <strong>Explorer 1000</strong>. Gracias a su capacidad de 1002.2 Wh, puede cargar simultáneamente hasta 8 dispositivos, por ejemplo:
                    </p>
                    <ul>
                        <li><strong>Picadora de forraje</strong>: permite triturar pasto, ramas y todo tipo de grano de 8 y 12 mm. De esta forma, se puede obtener abono o alimento para el ganado. Si, por ejemplo, cargás con la estación de energía la picadora TRF 300G - Trapp, podés usarla por 1 hora.</li>
                        <li><strong>Ventiladores de invernadero</strong>: sirven para reducir el riesgo de enfermedades en las plantas y evitar daños por humedad. De este modo, al poner el aire en circulación, se aseguran de que los cultivos crezcan uniformemente. Podrás cargar tu Vornado 630 Mid-Size Whole Room Air Circulator y usarlo de manera continua por 16 horas.</li>
                        <li><strong>Estaciones meterológicas</strong>: permiten medir la temperatura, la dirección y velocidad del viento, la humedad, entre otros factores climáticos. Con la Explorer 1000, podés cargar tu Davis Instruments Vantage Pro2 y usarlo de manera continua por 6 días.</li>
                        <li><strong>Lámpara LED de cultivo</strong>: su tecnología permite estimular el crecimiento de plantas. Podrás cargar tu Spider Farmer SF-1000 y usarla de manera continua por 8 horas.</li>
                        <li><strong>Drone</strong>: te permite monitorear tus cultivos y detectar áreas afectadas por plagas. Si, por ejemplo, cargás con la estación de energía el drone DJI Mini 3 Pro, podés usarla por 21 horas.</li>
                        <li><strong>GPS</strong>: facilita la creación de mapas detallados del terreno con datos de elevación, pendiente y tipo de suelo, lo que permite trazar rutas eficientes para la siembra, fertilización y consecha. Asimismo, identifica zonas con problemas como falta de nutrientes, plagas o drenaje deficiente. Con la Explorer 1000, podrás cargar tu Garmin GPSMAP 66s y usarla por 6 días.</li>
                        <li><strong>Dispensadores automáticos</strong>: diseñado para liberar alimentos secos en horarios específicos para aves de corral o animales en granjas. Con la Explorer 1000, podés cargar tu Forte PF-15 y usarlo de manera continua por 20 horas.</li>
                    </ul>
                    <p>
                        En suma, la energía portátil de <strong>Jackery revoluciona el agro</strong> gracias a su bajo costo a largo plazo, seguridad, eficiencia y sustentabilidad. ¡Llevá tu trabajo a otro nivel!
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
export default EnergiaPortatilEnElAgro;