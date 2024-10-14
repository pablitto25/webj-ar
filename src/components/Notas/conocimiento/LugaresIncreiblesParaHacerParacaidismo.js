import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner22 from '../../Banner/banner22'
import image1 from '../conocimiento/assests/LugaresParacaidas/IMG_2277_edited.webp'
import image2 from '../conocimiento/assests/LugaresParacaidas/Paracaidismo_1.jpg'
import image3 from '../conocimiento/assests/LugaresParacaidas/veni-a-hacer-skydive.jpg'
import image4 from '../conocimiento/assests/LugaresParacaidas/DSC05177.webp'
import image5 from '../conocimiento/assests/LugaresParacaidas/salto-3.jpg'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const LugaresIncreiblesParaHacerParacaidismo = () => {
    return (
        <div>
            <Helmet>
                <title>5 lugares increíbles para hacer paracaidismo en Argentina</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner22 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>
                    {/* inicio nueva nota */}
                    <p>
                        ¿Buscás una nueva aventura? ¿Y querés sentir verdadera adrenalina? Entonces, te recomendamos hacer paracaidismo. Conocé 5 sitios increíbles para hacerlo.
                    </p>
                    <p><strong>Lobos (Buenos Aires) Ideal para saltos de bautismo</strong></p>
                    <div className='NotaImgConteiner'>
                        <img src={image1} className='image-feature' alt='imagen' />
                    </div>
                    <p><Link to="https://www.instagram.com/paracaidismoenlobos/" target='_blank'><span style={{ color: '#FF5000' }}>La escuela de paracaidismo de Lobos</span></Link> está situada en la ruta 205 km, a 100 km de Capital Federal. Además de formar profesionales por más de 50 años, esta escuela se destaca por ofrecer una experiencia de paracaidismo de otro nivel, especialmente por brindar inolvidables saltos de bautismo. Tras un vuelo de 20 minutos hasta llegar a 1500 metros de altura, comienza la caída libre: caerás a más de 200 km/h durante 40 segundos. Luego de 8 minutos, aterrizarás en el aeródromo de Lobos.</p>

                    <p><strong>Pocito (San Juan) Paracaidismo con la mejor vista</strong></p>
                    <div className='NotaImgConteiner'>
                        <img src={image2} className='image-feature2' alt='imagen' />
                    </div>
                    <p>
                        <Link to="https://www.sanjuan.tur.ar/que-hago/aventura/aire/paracaidismo-y-parapente" target='_blank'><span style={{ color: '#FF5000' }}>Pocito</span></Link> se encuentra a 17 km de la ciudad de San Juan, en el Valle de Tulúm. En el Centro de Aviación Civil de Pocito, podrás tener una experiencia de paracaidismo inolvidable: su escenarario de viñedos y montañas ofrece una vista impresionante durante la aventura.
                        Tené en cuenta que el vuelo se realiza a 3000 metros de altura durante 30 minutos de vuelo. Tras despegar el avión, el salto se lleva a cabo con 30 segundos de caída libre y el descenso lleva 7 minutos con el paracídas desplegado.

                    </p>
                    <p><strong>Aeródromo Rivadavia (Mendoza)
                        Perfecto para sentir adrenalina al 100%
                    </strong></p>
                    <div className='NotaImgConteiner'>
                        <img src={image3} className='image-feature2' alt='imagen' />
                    </div>
                    <p>
                        <Link to="https://turismomendoza.com.ar/producto/paracaidismo/" target='_blank'><span style={{ color: '#FF5000' }}>El Aeródromo Rivadavia</span></Link> se ubica a 70 km de la ciudad de Mendoza. Tras la charla de seguridad, se procede al vuelo. El avión alcanza una altura de 2500 metros para dar lugar a una caída libre de 25 segundos. Una vez que se abre el paracaídas, podrás disfrutar de la emoción que brindan los 8 minutos de vuelo con el mejor paisaje serrano.
                    </p>

                    <p><strong>Rosario (Santa Fe)
                        La aventura más extrema
                    </strong></p>
                    <div className='NotaImgConteiner'>
                        <img src={image4} className='image-feature2' alt='imagen' />
                    </div>
                    <p>
                        <Link to="https://saltaenrosario.com/" target='_blank'><span style={{ color: '#FF5000' }}>Rosario</span></Link> es uno de los sitios más buscados para hacer paracaidismo. Una vez que te expliquen las medidas de seguridad, te subirás al avión que llegará hasta 3000 metros de altura. Luego, vivirás adrenalina al 100%: por 40 segundos de caída libre, podrás apreciar al máximo la belleza del río Paraná y de la vegetación de la ciudad. Tras 5 minutos de vuelo, se comienza el aterrizaje. ¡Una experiencia imperdible!
                    </p>

                    <p><strong>Villa Mercedes (San Luis)
                        El destino más desafiante
                    </strong></p>
                    <div className='NotaImgConteiner'>
                        <img src={image5} alt='imagen' />
                    </div>
                    <p>
                        <Link to="https://sanluisvip.com/finde-en-san-luis-a-puro-paracaidismo/" target='_blank'><span style={{ color: '#FF5000' }}>Villa Mercedes</span></Link> se encuentra a 100 km de la ciudad de San Luis. Tené en consideración que luego de que el avión alcance los 3000 metros de altura, se procederá a la caída libre: caerás por 30 segundos a más de 200 km/h, antes de que se abra el paracaídas y puedas volar durante 7 minutos hasta tocar tierra.
                    </p>

                    <p><strong>Jackery, el aliado de la aventura más extrema</strong></p>
                    <p>
                        Si planeás hacer paracaidismo es importante que lleves ropa cómoda (como un jogging y camiseta manga larga tipo polera), lentes de sol, zapatillas, rompevientos y, por supuesto, una <strong>estación de energía Jackery</strong>.
                        No te olvides de que en los lugares, en donde se realiza paracaidismo, no llega la electricidad tan fácilmente: lo que podría ocasionar que no puedas usar ciertos dispositivos. Entonces, para que te asegurés una excelente experiencia en todos los sentidos, te recomendamos que consigas la <strong>Explorer 240</strong>, la cual puede cargar de manera simultánea diferentes tipos de dispositivos electrónicos que necesitás para tu aventura:
                    </p>
                    <ul>
                        <li>
                            <strong>GoPro</strong>: esta cámara es perfecta para grabar saltos debido a su diseño compacto y resistente. Podés ponerla en tu casco y grabar tu experiencia. Si, por ejemplo, cargás tu GoPro HERO11 con la estación de energía, podrás usarla de manera continua por 27.4 horas.
                        </li>
                        <li>
                            <strong>Reloj deportivo con altímetro</strong>: un reloj como este te permite tener datos precisos de la altitud y terreno de tu paracaidismo. Con la Explorer 240, podrás cargar tu Garmin Instinct Solar y usarla de manera continua por 8 días.
                        </li>
                        <li>
                            <strong>Cascos con comunicación</strong>: si sos un paracaidista experto, te recomendamos que lleves estos casos para poder comunicarte manos libres con otros saltadores. Podrás cargar tu Cookie G4 con la estación de energía, para usarla de forma continua por 4 días.
                        </li>
                        <li>
                            <strong>Drone</strong>: ideal para capturar tu experiencia en el aire. Si, por ejemplo, cargás DJI Mini 3 Pro con la Explorer 240, podrás usarla de manera continua por 2 horas.
                        </li>
                    </ul>

                    {/* Aca falta imagen de diseño */}

                    <p>
                        Además, la Explorer 240 se distingue por ser silenciosa, amigable con el medio ambiente, segura y portátil: sólo pesa 3 kg, lo cual permite llevarla a cualquier tipo de aventura que tengas.
                        En conclusión, <strong>la Explorer 240 es el mejor aliado que podés tener en tu experiencia de paracaidismo</strong>. Tené verdadera independencia energética en una aventura de máxima adrenalina.
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
export default LugaresIncreiblesParaHacerParacaidismo;