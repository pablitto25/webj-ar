import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Link } from 'react-router-dom'
import Banner16 from '../../Banner/banner16'
import image1 from '../conocimiento/assests/LugaresParaHacerTrekking/Area-Traslasierras-Río-Chico-de-Nono.jpg'
import image2 from '../conocimiento/assests/LugaresParaHacerTrekking/nota_2.jpg'
import image3 from '../conocimiento/assests/LugaresParaHacerTrekking/Fotos-Villa-Carlos-Paz-35_Nota_3.jpg'
import image4 from '../conocimiento/assests/LugaresParaHacerTrekking/Nota_4.jpg'
import image5 from '../conocimiento/assests/LugaresParaHacerTrekking/Nota_5.jpg'
import image6 from '../conocimiento/assests/LugaresParaHacerTrekking/Nota_6.webp'
import image7 from '../conocimiento/assests/LugaresParaHacerTrekking/jackery_240.jpg'
import { Helmet } from 'react-helmet'

const LugaresParaHacerTrekking = () => {
    return (
        <div>
            <Helmet>
                <title>5 lugares para hacer trekking a 2 horas de Córdoba Capital</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner16 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}

                    <p>
                        Tras una semana de trabajo estresante, lo que más queremos es poder relajarnos por completo. ¡Y qué mejor idea que ir a las sierras de Córdoba! Pero, ¿recién saliste de trabajar al mediodía y querés aprovechar el día al máximo? ¿no sabés a dónde ir? No te preocupes que te traemos <strong>los 5 mejores lugares para hacer trekking a solo 2 horas de Córdoba Capital</strong>.
                    </p>

                    <p className='text-center'>
                        <strong>Nono, el destino ideal para la aventura</strong>
                        <div className='NotaImgConteiner'>
                            <img src={image1} className='image-feature' alt='imagen' />
                        </div>
                    </p>
                    <p>
                        <Link to="https://cordobaturismo.gov.ar/experiencias/tres-senderos-en-nono/" target='_blank'><span style={{ color: '#FF5000' }}>Nono</span></Link> está situado en el departamento de San Alberto, a sólo 150 km de la Ciudad de Córdoba. Su paisaje serrano es ideal para aquellas personas que adoran el turismo de aventura ya que pueden hacer trekking, cabalgatas y paseos en bicicletas. Además, tiene varios senderos de diferentes niveles de dificultad, tales como la Juntura (dificultad baja), el del Arroyo (dificultad media) y el Empedrado (dificultad alta).
                    </p>
                    <p className='text-center'>
                        <strong>La Serranita, tranquilidad al máximo</strong>
                        <div className='NotaImgConteiner'>
                            <img src={image2} className='image-feature' alt='imagen' />
                        </div>
                    </p>
                    <p>
                        <Link to="https://cordobaturismo.gov.ar/experiencias/parque-recreativo-la-serranita/" target='_blank'><span style={{ color: '#FF5000' }}>La Serranita</span></Link> está situada en el departamento de Santa María, a 43 km de la Ciudad de Córdoba. Este lugar se destaca por ofrecer un paisaje verdoso sumamente pacífico, a orillas del río Anisacate. Si te gustan las caminatas tranquilas, entonces no dejés de ir.
                    </p>

                    <p className='text-center'>
                        <strong>Villa Carlos Paz, la escapada más cerca de la capital</strong>
                        <div className='NotaImgConteiner'>
                            <img src={image3} className='image-feature' alt='imagen' />
                        </div>
                    </p>
                    <p>
                        <Link to="https://cordobaturismo.gov.ar/experiencias/villa-carlos-paz-cerro-de-la-cruz/" target='_blank'><span style={{ color: '#FF5000' }}>Villa Carlos Paz</span></Link> se encuentra a 35 km de la capital. Esta ciudad, que rodea al lago San Roque, posee un sinfin de actividades para hacer al aire libre; entre ellas, hacer trekking en el cerro de la Cruz. En dicha caminata, se podrá conocer la fauna y flora serrana como así también se tendrá vistas espectaculares del valle de Punilla, los barrios residenciales y, lo mejor de todo, de Los Gigantes. Si eres inexperto en el trekking o, bien, preferís una caminata fácil y accesible, este lugar es perfecto para vos.
                    </p>

                    <p className='text-center'>
                        <strong>Tanti, cerca y para toda la familia</strong>
                        <div className='NotaImgConteiner'>
                            <img src={image4} className='image-feature' alt='imagen' />
                        </div>
                    </p>
                    <p>
                        <Link to="https://cordobaturismo.gov.ar/noticias/trekking-en-tanti-cascada-los-chorrillos/" target='_blank'><span style={{ color: '#FF5000' }}>Tanti</span></Link> se ubica en el departamento de Punilla, a unos 50 km de la ciudad de Córdoba. Su paisaje de ensueño es excelente para el trekking: podrás caminar por el bosque serrano, la reserva de los Chorrillos, Piedras Lisas y el Pozo del Indio. ¡Un paseo ideal para ir con toda la familia!
                    </p>

                    <p className='text-center'>
                        <strong>La Cumbre, el lugar perfecto para relajarse</strong>
                        <div className='NotaImgConteiner'>
                            <img src={image5} className='image-feature' alt='imagen' />
                        </div>
                    </p>
                    <p>
                        <Link to="https://cordobaturismo.gov.ar/experiencias/la-cumbre-cristo-redentor-dique-san-jeronimo/" target='_blank'><span style={{ color: '#FF5000' }}>Esta localidad</span></Link> de Punilla se encuentra a tan sólo 80 km de Córdoba capital. Entre sus variados lugares para hacer trekking, podemos destacar el Cristo Redentor, Cuchi Corral y Cruz Chica-Cruz Grande. Sus caminatas no presentan alto nivel de dificultad por lo que es recomendable para aquellos que desean tener una caminata placentera y tranquila.
                    </p>

                    <p className='text-center'>
                        <strong>Jackery, el aliado de tu aventura</strong>
                        <div className='NotaImgConteiner'>
                            <img src={image6} className='image-feature' alt='imagen' />
                        </div>
                    </p>
                    <p>
                        Sea que vayas a los lugares que te recomendamos o a otros, no te olvides de llevar: gorro, ropa cómoda, zapatillas, rompevientos, mochila pequeña, protector solar, linterna y un botín de primeros auxilios. Por supuesto, también llevá una estación de energía para que te asegures la carga de tus dispositivos.
                        Puntualmente, te recomendamos llevar para tu trekking la Explorer 240 por los siguientes motivos:
                    </p>
                    <ul>
                        <li><strong>Pequeña y portátil:</strong> sólo pesa 3 kg, perfecta para llevarla a todo tipo de actividad al aire libre.</li>
                        <li><strong>Apta para outdoor:</strong> (-10° a 40°) podrás llevarla en tus caminatas en pleno invierno o verano.</li>
                        <li><strong>Práctica:</strong>cuenta con tres maneras de carga: el panel SolarSaga 100W en tan solo 5,5 horas, el tomacorriente de la pared en 5,5 horas o la batería del auto en 6,5 horas.</li>
                        <li><strong>Silenciosa:</strong> a diferencia de las estaciones de energía que usan combustible, esta estación de energía no emite ruidos molestos. ¡Podrás disfrutar tu trekking sin interrupciones!</li>
                    </ul>

                    <p className='text-center'>
                        <strong>¿Qué puedo cargar con la Explorer 240?</strong>
                    </p>
                    <p className='text-center'>Podés cargar, de manera simultánea, hasta 3 diferentes dispositivos electrónicos, tal como  se muestra a continuación:</p>
                    <div className='NotaImgConteiner'>
                        <img src={image7} className='image-feature2' alt='imagen' />
                    </div>
                    <p>
                        De esta forma, la Explorer 240 demuestra ser práctica para cargar los dispositivos electrónicos que más usamos en trekking.
                    </p>
                    <p>
                        Con toda esta información, ya no tenés excusas para seguir postergando este trekking que tanto deseás en las sierras de Córdoba. ¿Ya estás listo para tu próxima aventura?
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
export default LugaresParaHacerTrekking;