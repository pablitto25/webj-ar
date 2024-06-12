import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner6 from '../../Banner/banner6'
import { Link } from 'react-router-dom'


const DiaDeLaTierra = () => {
    return (
        <div>
            <header>
                <div className='bannerConteiner'>
                    <Banner6 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>


                    {/* inicio nueva nota */}
                    <p>
                        La Asamblea General de la Organización de las Naciones Unidas (ONU) estipuló que hoy, 22 de abril, sea el <Link to="https://www.un.org/es/observances/earth-day" target='_blank'><span style={{ color: '#F28F2E' }}>día de la tierra</span></Link>. De esta forma, la ONU pretende visibilizar las problemáticas ambientales que afectan a nuestro planeta, las cuales debemos abordar urgentemente.
                    </p>
                    <p>
                        Para lograr un verdadero cambio, resulta necesario que replanteemos nuestras acciones cotidianas con respecto a la Tierra. Ahora bien, ¿qué podemos hacer para adoptar un estilo de vida responsable con la naturaleza? ¿Qué productos deberíamos incorporar que realmente cuiden el ecosistema? Las energías renovables son una respuesta al problema y nuestra marca Jackery es una opción accesible para todos.
                    </p>
                    <p>
                        Nuestra tecnología es una <span style={{ fontWeight: '700' }}>tecnología verde</span> que ayuda a cuidar al planeta y además como compañía tenemos el compromiso en proteger el medioambiente a través de diferentes alianzas con organizaciones ecológicas y actividades de concientización dirigidas al público.
                    </p>
                    <p>
                        En tal sentido, renovamos nuestro apoyo a <span style={{ fontWeight: '700' }}>World Wildlife Fund (WWF)</span> para la protección de especies en peligro de extinción. Por ejemplo, Jackery US le ofreció sus generadores y paneles solares para que la fundación pudiera rastrear a los hurones bajo tierra, utilizando dispositivos que no emitieran contaminación ni ruido que asustara a dichos animales.
                    </p>

                    <div className='NotaConteiner'>
                        <iframe width="1278" height="719" src="https://www.youtube.com/embed/QPRbjrbjj3k" title="The most Endangered Mammal in North America: the Black-Footed Ferret @WorldWildlifeFund" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <p>
                        Asimismo, colaboramos con <span style={{ fontWeight: '700' }}>National Forest Foundation</span> con el objetivo de plantar 10 mil árboles en Estados Unidos. Incluso, brindamos apoyo a la asociación alemana la <span style={{ fontWeight: '700' }}>Nature And Biodiversity Conservation Union (NABU)</span> para preservar 10 kilómetros cuadrados de bosques.
                    </p>

                    <p>
                        Por otra parte, pusimos en marcha el proyecto “<span style={{ fontWeight: '700' }}>Vida baja en carbono con Jackery Solar</span>”, que busca alentar a que los usuarios puedan aplicar acciones concretas para cuidar la naturaleza. Para ello, publicamos una <Link to="https://www.jackery.com/pages/earth-day" target='_blank'><span style={{ color: '#F28F2E' }}>guía informativa</span></Link> que permite calcular cuánto se reduce la huella de carbono con acciones individuales concretas. Incluso, se premió a aquellos que se animaron al desafío con productos de la marca y puntos que podían canjear en el Centro de miembros de Jackery.
                    </p>

                    <p>
                        Estas acciones son una de las tantas que nuestra marca emprendió para seguir cuidando a la Tierra.
                    </p>

                    <p>
                        Continuaremos comprometiéndonos por un futuro más ecológico, tal como John Zhao, CMO de Jackery, manifestó: “Jackery se compromete a promover la sostenibilidad y reducir nuestra huella de carbono y continuará manteniendo una estrecha cooperación con las ONG ambientalistas como siempre lo hemos hecho".
                    </p>

                    <p>
                        Por último, te invitamos a que visites <Link to="https://www.jackerychile.com/PRODUCTOS/Jackery%20Explorer%20240" target='_blank'><span style={{ color: '#F28F2E' }}>nuestro catálogo</span></Link> para que adquieras alguno de nuestros productos y sigas sumando tu apoyo al planeta.
                    </p>

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
export default DiaDeLaTierra;