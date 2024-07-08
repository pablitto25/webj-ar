import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Link } from 'react-router-dom'
import Banner15 from '../../Banner/banner15'

const JackeryEstacionesDeEnergia = () => {
    return (
        <div>
            <header>
                <div className='bannerConteiner'>
                    <Banner15 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}

                    <p>
                        <strong>Las estaciones de energía</strong>, o bancos de energía, no pueden faltar en tu kit de energía verde ya que son generadores de energía, recargables a batería, que permiten alimentar rápidamente diferentes dispositivos, sea que lo precises para tus aventuras outdoor o para proporcionar energía a tus electrodomésticos cuando haya un corte de luz.
                    </p>

                    <p>
                        Ahora bien, <strong>¿cómo funcionan las estaciones de energía?</strong> En principio,
                        decidí con qué fuente de energía alimentarás a los bancos de energía: la batería del auto, un enchufe de pared o, mejor, podés cargarlos con paneles solares. Una vez que la batería interna de las estaciones esté cargada, se enviará dicha energía eléctrica al dispositivo electrónico que se deseés cargar a través de un puerto de salida. ¡Y listo! Ya podés volver a usar tus aparatos con suma tranquilidad.
                    </p>

                    <div className='NotaConteiner'>
                        <iframe width="1278" height="719" src="https://www.youtube.com/embed/Tz9uVgdKT4E" title="The most Endangered Mammal in North America: the Black-Footed Ferret @WorldWildlifeFund" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <p>
                        Existen diferentes tipos de estaciones de energía, tales como el banco de energía universal o los que son inalámbricos, pero únicamente las estaciones de energía solares te permitirán cargar tus dispositivos de manera eficiente al mismo tiempo que cuidas al medio ambiente. De esta forma, podrás potenciar tu conciencia ecológica.
                    </p>

                    <p>
                        Nuestras estaciones de energía se caracterizan por ser fáciles de usar, seguras, silenciosas y suavemente efectivas. Si deseás conocer más, ingresá en el siguiente <Link to="/PRODUCTOS/Jackery%20Explorer%20240" target='_blank'><span style={{ color: '#FF5000' }}>enlace</span></Link>.
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
export default JackeryEstacionesDeEnergia;