import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import image1 from '../conocimiento/assests/Los5MejoresLugaresParaKayak/calabozos3-kayak.jpg'
import image2 from '../conocimiento/assests/Los5MejoresLugaresParaKayak/IZI8Bo4x-_720x0__1.jpg'
import image3 from '../conocimiento/assests/Los5MejoresLugaresParaKayak/fotoc-11.jpg'
import image4 from '../conocimiento/assests/Los5MejoresLugaresParaKayak/thumb_13808_cactus_product_tours_by_locals_large.jpeg.webp'
import image5 from '../conocimiento/assests/Los5MejoresLugaresParaKayak/suit_8749.jpg'
import image6 from '../conocimiento/assests/Los5MejoresLugaresParaKayak/Pieza-8-carrusel-7.jpg'
import { Helmet } from 'react-helmet'
import Banner24 from '../../Banner/banner24'
import { Link } from 'react-router-dom'

const Los5LugaresMasAsombrosos = () => {
    return (
        <div>
            <Helmet>
                <title>Los 5 lugares más asombrosos para hacer kayak en la Patagonia</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner24 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}
                    <p>
                        La Patagonia es la región perfecta para hacer kayak: sus increíbles paisajes y sus aguas cristalinas ofrecen una vista fantástica que no vas a olvidar. Existen varios sitios para hacerlo, pero, ¿no sabés a dónde ir? Te traemos los <strong>5 lugares más asombrosos para hacer kayak en la Patagonia</strong>.
                    </p>
                    <h2><strong>Lago Puelo (Chubut)</strong></h2>
                    <i>Un lugar sumamente tranquilo</i>
                    <div className='NotaImgConteiner'>
                        <img src={image1} className='image-feature2' alt='imagen' />
                    </div>
                    <p>
                        El <Link to="https://lagopuelo.gob.ar/turismo/" target='_blank'><span style={{ color: '#FF5000' }}>lago Puelo</span></Link> está ubicado en el Parque Nacional Lago Puelo. Este lago ofrece las aguas  turquesas más calmas que pueden existir, rodeadas de un paisaje de bosques andinos patagónicos.
                        Una de las travesías más elegidas es Puntilla de las papas, un recorrido que lleva 8 km de navegación. Se parte del puerto de Lago Puelo y se llega a destino a la última punta del cerro Currumahuida.

                    </p>
                    <h2><strong>Río Limay (Neuquén/Río Negro)</strong></h2>
                    <i>Una travesía completa</i>
                    <div className='NotaImgConteiner'>
                        <img src={image2} className='image-feature2' alt='imagen' />
                    </div>
                    <p>
                        <Link to="https://turismo.rionegro.gov.ar/actividad/anp-y34;rio-limayy34;_408" target='_blank'><span style={{ color: '#FF5000' }}>Río Limay</span></Link> es el límite natural entre Neuquén y Río Negro. Este río es ideal para aquellas personas que les gusta la tranquilidad y el desafío en un mismo lugar.
                        Uno de los recorridos más elegidos es aquel que parte de Espigones de China Muerta, a 5 kilómetros de la localidad de Plottier. En el primer tramo del río, verás la transparencia de las aguas y podrás contemplar la estepa y las diferentes aves que habitan allí. Luego, se pasea por los fascinantes acantilados del río Limay y, finalmente, se pasa por el balneario de Plottier, la zona de La Herradura y el puente Las Perlas.
                    </p>

                    <h2><strong>Lago Lácar (San Martín de los Andes, Neuquén)</strong></h2>
                    <i>Serenidad al 100%</i>
                    <div className='NotaImgConteiner'>
                        <img src={image3} className='image-feature2' alt='imagen' />
                    </div>
                    <p>
                        El <Link to="https://www.laninturismo.com/es/kayak-en-san-martin-de-los-andes.html" target='_blank'><span style={{ color: '#FF5000' }}> lago Lácar</span></Link> está dentro del Parque Nacional Lanín. Este lago ofrece aguas cristalinas rodeadas de montañas y bosques: ideal para una navegación tranquila y para los amantes de la naturaleza. Uno de los recorridos más favoritos es aquel que parte de la costa de San Martín de los Andes. Luego, se bordea el margen norte del Lago Lácar. Tras 5 km de navegación, llegarás a La Islita, un sitio ideal para disfrutar de la serenidad de la naturaleza.
                    </p>

                    <h2><strong>Lago Cóndor (El Chaltén, Santa Cruz)</strong></h2>
                    <i>Un kayak de ensueño</i>
                    <div className='NotaImgConteiner'>
                        <img src={image4} className='image-feature2' alt='imagen' />
                    </div>
                    <p>
                        El <Link to="https://elchalten.com/v4/es/chalten-kayak-rio-de-las-vueltas.php" target='_blank'><span style={{ color: '#FF5000' }}> Lago Cóndor</span></Link> está ubicado cerca del cerro Fitz Roy. Su vista a la imponente cordillera garantiza una experiencia mágica. El recorrido parte en la Laguna Cóndor; tras un rato, verás la cara noreste y este del Fitz Roy. Luego de 12 km, llegarás a Estancia Bonanza, en donde tendrás una vista panorámica del cerro que no olvidarás.
                    </p>

                    <h2><strong>Canal Beagle (Tierra del Fuego)</strong></h2>
                    <i>Una experiencia a otro nivel</i>
                    <div className='NotaImgConteiner'>
                        <img src={image5} className='image-feature2' alt='imagen' />
                    </div>
                    <p>
                        El <Link to="https://turismoenushuaia.com/producto/navegacion-por-el-canal-beagle/?gad_source=1&gclid=Cj0KCQjw4Oe4BhCcARIsADQ0cskB-hucZMKQN2FE_gG6IaTg-IDNHQjUwxpHlzUOwJuR07VM7NmiKe4aAvyeEALw_wcB" target='_blank'><span style={{ color: '#FF5000' }}> Canal Beagle</span></Link> se encuentra en Ushuaia. La navegación por el canal de Beagle te asegura una aventura inolvidable ya que ofrece vistas impresionantes del lugar. Uno de los itinerarios más elegidos es aquel que parte de Bahía Golondrina, bordeando la costa occidental del Canal Beagle, pasando por Bahía Cucharita y culminando en Bahía Cauquenes.
                    </p>
                    <p><strong>Jackery, el aliado de tu aventura en kayak</strong></p>
                    <p>
                        Si planeás hacer kayak es importante que tengas a disposición otro conjunto de ropa interior, lentes de sol, ropa de neopreme, toalla, casco y una estación de energía portátil.
                        No te olvides de que en los lugares donde se realiza kayak, no llega la electricidad tan fácilmente. Entonces, para que te asegurés una excelente experiencia, te recomendamos que consigas la Explorer 240, la cual puede cargar de manera simultánea diferentes tipos de dispositivos electrónicos que necesitás para tu aventura:
                    </p>
                    <ul>
                        <li><strong>Reloj deportivo resistente al agua</strong>: te permite tener un seguimiento de actividad y contar con GPS de alta precisión. Con la Explorer 240, podrás cargar tu Garmin Instintc Solar y usarlo, de manera continua, por 8 días.
                        </li>
                        <li><strong>GPS resistente al agua</strong>: permite saber las ubicaciones de tu recorrido. Si llevás tu Garmin GPSMAP 66s, podrás cargarlo con la Explorer 240 y usarlo, de manera continua, por 4 días.</li>
                        <li><strong>GoPro Hero 10 Black</strong>: esta cámara es perfecta para grabar tu aventura debido a su diseño compacto y resistente. Podés ponerla en tu casco y grabar tu experiencia. Con la Explorer 240, podrás cargarla y usarla, de manera continua, por 1 día.</li>
                        <li><strong>Inflador eléctrico portátil</strong>: si optas por un kayak inflable, te conviene llevar un inflador eléctrico portátil ya que se conecta a la toma de 12V del auto. Es ligero y tiene varios adaptadores de válvula para inflar distintos tipos de kayaks. Si llevás tu inflador Sevylor 12V Electric Pump, podrás cargarlo con la Explorer 240 y usuarlo de manera continua por 2 horas.</li>
                        <li><strong>Linterna de cabeza</strong>: una linterna que sea resistente al agua es muy útil para ver tanto de cerca como de lejos en diversas condiciones acuáticas y de poca iluminación. Si llevás tu linterna Petzl Actik Core, podrás cargarla con la Explorer 240 y usuarlo de manera continua por 27 horas.</li>
                    </ul>

                    <div className='NotaImgConteiner'>
                        <img src={image6} className='image-feature2' alt='imagen' />
                    </div>

                    <p>
                        Además, la Explorer 240 se distingue por ser silenciosa, amigable con el medio ambiente, segura y portátil: sólo pesa 3 kg, lo cual permite llevarla a cualquier tipo de aventura que tengas. En conclusión, la Explorer 240 es el mejor aliado que podés tener en tu experiencia de kayak. Tené verdadera independencia energética en una aventura inolvidable.
                    </p>

                    <hr />
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
export default Los5LugaresMasAsombrosos;