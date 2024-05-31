import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Link } from 'react-router-dom'
import Banner12 from '../../Banner/banner12'
import imagen2 from '../conocimiento/assests/ExpoMinera/nota-de-blog-expo-san-juan-mineria-pieza-3.jpg'

const JackeryExpoMinera = () => {
    return (
        <div>
            <header>
                <div className='bannerConteiner'>
                    <Banner12 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        Del 21 al 23 de mayo, se llevó a cabo en el predio Cepas Sanjuaninas la décima edición de uno de los eventos más prestigiosos del sector minero en Argentina: <Link to="https://exposanjuan.com.ar/es" target='_blank'><span style={{ color: '#FF5000' }}>la Expo San Juan Minera</span></Link>. Dicha feria, organizada bianualmente, reunió a empresas del sector privado y público de la industria, representantes del exterior, proveedores e instituciones científicas, con el motivo de compartir experiencias, ideas e innovaciones acerca de la minería.
                    </p>
                    <p>
                        Asimismo, la expo contó con la participación especial del gobernador de la provincia, Marcelo Orrego, como así también albergó más de 300 expositores y 22 mil visitantes de diferentes provincias y países. Fruto de ese diverso encuentro, se desarrollaron acuerdos, tratados y negocios entre los diferentes actores de los sectores previamente mencionados.
                    </p>
                    <p>
                        Ante la magnitud de tal evento, no podíamos dejar de participar. Es por ello que nuestros representantes, Emiliano Zanuzzi y Franco Cella, viajaron hasta San Juan para acompañar a <strong>Industria Geo y Segufer S.A</strong> en esta expo. También, acercaron los productos de <Link to="https://jackery.com.ar/" target='_blank'><span style={{ color: '#FF5000' }}>Jackery</span></Link> a nuevos rubros, ofrenciéndolos como la solución de energía portátil para aquellos profesionales del sector que realizan su trabajo en entornos sumamente hostiles, donde el acceso a la red eléctrica es imposible.
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={imagen2} className='image-feature' alt='imagen' />
                    </div>
                    <p>
                        De esta manera, nuestras <strong>estaciones de energía, paneles solares y generadores solares</strong> son las aliadas off-grid perfectas para los profesionales de la minería ya que se distinguen por su amplitud térmica (de -10° a 40°), no apunarse en altas alturas, no emitir ningún tipo de ruido ni emisiones contaminantes a diferencia de los generadores convencionales.<br />
                        Desde alimentar una laptop o cargar un teléfono hasta soportar dispositivos de iluminación o calefacción, nuestros equipos amplían notablemente las posibilidades y mejoran las condiciones de quienes se manejan habitualmente en entornos fuera de la red.

                    </p>
                    <p>
                        Además, la expo contó con mesas de conferencias, rondas de negocio, shows en vivo y exposición de maquinarias, insumos y servicios sobre la minería, en donde pudimos reforzar nuestras relaciones con otras empresas como así también pudimos incrementar nuestro conocimiento acerca de la minería.
                    </p>
                    <p>
                        ¡Estamos felices por los resultados de nuestra participación en esta expo! Seguiremos trabajando para que más y más personas de Latinoamérica puedan tener la energía que necesitan dondequiera que vayan.
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
export default JackeryExpoMinera;