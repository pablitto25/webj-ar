import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner20 from '../../Banner/banner20'
import image1 from '../conocimiento/assests/Los5Mejores/Lost5Mejores (1).jpg'
import image2 from '../conocimiento/assests/Los5Mejores/Lost5Mejores (2).jpg'
import image3 from '../conocimiento/assests/Los5Mejores/Lost5Mejores (3).jpg'
import image4 from '../conocimiento/assests/Los5Mejores/Lost5Mejores (4).jpg'
import image5 from '../conocimiento/assests/Los5Mejores/Lost5Mejores (5).jpg'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Los5LugaresMasDesafiantes = () => {
    return (
        <div>
            <Helmet>
                <title>Los 5 lugares más desafiantes para hacer 4x4 en San Juan</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner20 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}
                    <p>
                        Definitivamente, uno de los mejores planes para sentir verdadera adrenalina, mientras conocés un territorio, es hacer 4x4. Existen varios sitios para hacerlo, pero, ¿no sabés a dónde ir? Te traemos los 5 lugares más desafiantes para hacer 4x4 en San Juan.
                    </p>
                    <strong>
                        Parque nacional San Guillermo
                    </strong>
                    <p>
                        <Link to={"https://www.argentina.gob.ar/interior/ambiente/parquesnacionales/sanguillermo"}><span style={{ color: '#FF5000' }}>El parque nacional San Guillermo</span></Link> está situado a 80 km de la ciudad de San Juan, en el departamento Iglesia. Su territorio agreste y salvaje se perfila como el mejor escenario para el 4x4 ya que tiene quebradas y caminos sinuosos imperdibles.
                        Si elegís esta travesía, te recomendamos que realices el circuito Caserones. Este camino parte del refugio Agua del Goco, pasa el Cerro Potosí y llega a la vega de Caserones, en donde podrás ver el impresionante arroyo La Cueva.
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={image1} className='image-feature' alt='imagen' />
                    </div>
                    <strong>
                        El Valle de Calingasta
                    </strong>
                    <p>
                        <Link to={"https://www.sanjuan.tur.ar/tengo-que-ir/calingasta"}><span style={{ color: '#FF5000' }}>El Valle de Calingasta</span></Link> se encuentra en la precordillera, a 173 km de la ciudad de San Juan. Este territorio se distingue por su clima árido, la presencia fuerte del viento Zonda y por sus suelos pedregosos: la combinación perfecta para la mejor travesía 4x4.
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={image2} className='image-feature' alt='imagen' />
                    </div>
                    <strong>
                        El cerro Precalingastino
                    </strong>
                    <p>
                        El cerro <Link to={"https://es.wikiloc.com/rutas-todo-terreno/cerro-precalingastino-3532-m-s-n-m-76934851"}><span style={{ color: '#FF5000' }}>Precalingastino</span></Link> está ubicado a 3532 msnm, en los departamentos de Zonda y Calingasta (precordillera sanjuanina), que se encuentran a unos 70 km de la ciudad de San Juan. Este paisaje cordillerano es perfecto para hacer 4x4 debido a su terreno desértico y pedregoso, lleno de bifurcaciones y caminos zigzagueantes. Dado que el cerro tiene un plano de 24 grados de inclinación, recomendamos que elijan esta aventura personas que verdaderamente aman la adrenalina.
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={image3} className='image-feature' alt='imagen' />
                    </div>
                    <strong>
                        Laguna blanca
                    </strong>
                    <p>
                        <Link to={"https://sanjuan.tur.ar/aventura/2335-los-morrillos"}><span style={{ color: '#FF5000' }}>Laguna blanca</span></Link> se sitúa a 3120 msnm, al pie del Cerro Mercedario. Su paisaje es de ensueño: álamos blancos, laderas rocosas y ríos de aguas cristalinas.
                        El recorrido 4x4 que se recomienda hacer es aquel que parte de Barreal para, luego, atravesar la Pampa del Indio y Las Caletas hasta llegar al puente de La Junta. Una vez que se llega a Laguna Blanca, verás que el viento generará fuertes remolinos de arena: adrenalina al 100%

                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={image4} className='image-feature' alt='imagen' />
                    </div>
                    <strong>
                        Cerro Las Pircas
                    </strong>
                    <p>
                        Este <Link to={"https://es.wikiloc.com/rutas-todo-terreno/cerro-el-pircas-20956740"}><span style={{ color: '#FF5000' }}>cerro</span></Link> se encuentra en el cordón montañoso El Tontal, a 4371 msnm. Realmente, este cerro es un desafío para todos los fanáticos del 4x4 ya que tiene pendientes totalmente pronunciadas, un ambiente agreste y un desnivel de 1000 metros desde la base hasta su pico, lo que exige la fuerza de la camioneta al máximo.
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={image5} className='image-feature' alt='imagen' />
                    </div>
                    <strong>Jackery, el aliado de tu aventura 4x4</strong>
                    <p>
                        Para tener una experiencia segura e inolvidable, no tenés que olvidarte de llevar ciertos dispositivos electrónicos. Como vas a estar en un territorio donde no llega la electricidad, te recomendamos que lleves la estación de energía portátil Explorer 1000 para que puedas alimentar, de manera simultánea, los dispositivos que necesités en tu travesía:
                    </p>
                    <ul>
                        <li><strong>GPS</strong>: te permite saber rutas y mapas específicos en áreas remotas donde no hay señal de celular. Si, por ejemplo, cargás tu gps Garmin Overlander con la Explorer 1000, podrás usarla de manera continua por 80 horas</li>
                        <li><strong>Radio VHF</strong>: te habilita a comunicarte con otros vehículos o servicios de emergencia en zonas sin cobertura. Con la Explorer 1000, podrás cargar tu Midland GXT1000VP4 y usarla de manera continua por 160 horas.</li>
                        <li><strong>Compresor de aire portátil</strong>: podrás ajustar la presión de los neumáticos en función del terreno o en el caso de que tengas alguna pinchadura. Podrás cargar tu Viair 88Pm con la estación de energía, para usarla de forma continua por 3,3 horas.</li>
                        <li><strong>Luces LED</strong>: te permite mejorar la visibilidad en la noche en terrenos hostiles. Si, por ejemplo, cargás Nilight 20” LED Light Bar con la Explorer 1000, podrás usarla de manera continua por 6,3 horas.</li>
                        <li><strong>Refrigerador portátil</strong>: mantiene los alimentos y las bebidas frías; ideal para climas cálidos como el de San Juan. Con la Explorer 1000, podrás alimentar tu Dometic CFX3 y usarla de manera continua por 13 horas</li>
                        <li><strong>Parrilla eléctrica portátil</strong>: te conviene llevar una parrilla para cocinarte unas ricas hamburguesas ya que los vientos son tan fuertes que impiden prender el fuego fácilmente. Podrás alimentar tu Aigostar Hitte 30HFA con la estación de energía, para usarla de forma continua por unas 1 hora.</li>
                        <li><strong>Drone y cámara</strong>: con la Explorer 1000 podrás cargar tu drone DJI Mini 3 Pro y usarla continuamente por 10 horas. Además, podrás cargar tu cámara Sony Alpha 7 IV y usarla por 114 horas para registrar toda tu experiencia.</li>
                    </ul>

                    <p>
                        Además de alimentar dispositivos imprescindibles para el 4x4, la Explorer 1000 se distingue por ser silenciosa, amigable con el medio ambiente, segura y portátil: sólo pesa 10 kg, lo cual permite llevarla a cualquier tipo de aventura que tengas.
                        En conclusión, <strong>la Explorer 1000 es el mejor aliado que podés tener en tu travesía de 4x4</strong>. Tené verdadera independencia energética en una aventura de máxima adrenalina.
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
export default Los5LugaresMasDesafiantes;