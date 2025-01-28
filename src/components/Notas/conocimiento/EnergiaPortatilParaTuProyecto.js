import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
/* import image1 from '../conocimiento/assests/nota-de-blog-2-jackery.jpg'; */
import { Helmet } from 'react-helmet'
import Banner34 from '../../Banner/banner34'
import { Link } from 'react-router-dom'

const EnergiaPortatilParaTuProyecto = () => {
    return (
        <div>
            <Helmet>
                <title>Energía portátil para tu proyecto</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner34 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}

                    <p>
                        ¿Querés construir una casita para tu perrito? ¿Buscás tener una actividad de construcción con tus hijos? ¿O simplemente necesitás arreglar un mueble? Sea cual sea tu <strong>proyecto</strong>, es importante que tengas energía eficiente y segura en cualquier momento y lugar.
                    </p>
                    <p>
                        Para trabajar cómodo, te recomendamos que consigas una estación de energía ya que podrás ocuparte en tu proyecto sin depender de enchufes o alargadores. Además, la energía portátil te permite trabajar en el patio, en el jardín o a donde que sea más conveniente, lo que evita el polvillo, manchas de pintura y suciedad en el interior de tu casa. Por eso, la mejor opción es la <Link to={"https://jackery.com.ar/PRODUCTOS/Jackery%20Explorer%201000"}><span style={{ color: '#FF5000' }}>Explorer 1000</span></Link>.
                    </p>
                    <p>
                        Gracias a su gran capacidad de 1002.2 Wh, puede cargar simultáneamente hasta 8 dispositivos:
                    </p>
                    <ul>
                        <li><strong>Sierra eléctrica</strong>: en todo proyecto, no puede faltar la sierra: con ella podés cortar diferentes tipos de materiales como la madera, el metal o el plástico, según el tipo de sierra que tengas. Con la Explorer 1000, podrás cargar tu Bosch PST 800 y usarla de manera continua por 1,5 horas.</li>
                        <li><strong>Taladro</strong>: ideal para perforar agujeros en diferentes materiales que necesités. Si cargás tu Dewalt DCD777C2 con la Explorer, podrás usarla de manera continua por 2,6 horas.</li>
                        <li><strong>Lijadora excéntrica</strong>: esta herramienta te permite obtener acabados finos en madera, metal o pintura. Si usás la Explorer 1000, podrás cargar tu Bosch PEX 400 AE y usarla por 2 horas.</li>
                        <li><strong>Destornillador eléctrico</strong>: te sirve para ensamblar muebles, instalar aparatos o arreglar algún mueble. Con la estación de energía eléctrica, podrás cargar tu Bosch IXO 7 y usarla por 5 horas.</li>
                        <li><strong>Compresor de pintura</strong>: si tenés que pintar paredes, muebles o autos, te conviene tener a mano tu compresor de pintura. Con la Explorer, podrás cargar tu compresor de aerografía Airum Mini 20 y usarlo de manera continua por 5 horas.</li>
                        <li><strong>Otros dispositivos</strong>: la Explorer te permite cargar una Macbook Pro13 (8 cargas) y un Iphone 13 (100 cargas), por si querés escuchar música mientras trabajás en tu proyecto o querés seguir un tutorial en Youtube.</li>
                    </ul>

                    <p>
                        En definitiva, <strong>Jackery es el aliado perfecto para tus proyectos</strong>. Ocupate de tus proyectos sin depender de alargadores ni enchufes: tené verdadera independencia energética con Jackery.
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
export default EnergiaPortatilParaTuProyecto;