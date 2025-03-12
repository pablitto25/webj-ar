import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
/* import image1 from '../conocimiento/assests/nota-de-blog-2-jackery.jpg'; */
import { Helmet } from 'react-helmet'
import Banner36 from '../../Banner/banner36'
import { Link } from 'react-router-dom'

const HomeOffice = () => {
    return (
        <div>
            <Helmet>
                <title>Home office: energía portátil para hacer home en cualquier lugar</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner36 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='container NotaTexConteiner'>
                    {/* inicio nueva nota */}

                    <p>
                        ¿Tenés programado un viaje pero tenés que hacer home office por unos días?¿O, simplemente, te cansaste de hacer home en tu departamento y necesitás hacer una escapada a la naturaleza mientras seguís trabajando? Con la energía de <strong>Jackery</strong> es posible hacer home en cualquier lugar gracias a que sus estaciones de energía son livianas, portátiles, silenciosas y te permiten alimentar los dispositivos imprescindibles que necesitás para trabajar. ¡Con Jackery podés trabajar en cualquier lugar y momento sin interrupciones!
                    </p>
                    <p>
                        Por eso, te recomendamos la estación de energía <Link to="https://jackery.com.ar/PRODUCTOS/Jackery%20Explorer%20240" style={{ color: '#FF5000' }} target='_blank'>Explorer 240</Link>. Gracias a su capacidad de 241.9 Wh, podés alimentar, simultáneamente, diferentes tipos de dispositivos electrónicos que necesitás para hacer home:
                    </p>
                    <ul>
                        <li><strong>Notebook</strong>: el medio de trabajo imprescindible para hacer home. Con la Explorer 240, podrás usar la notebook Lenovo IdeaPad por 3 horas.</li>
                        <li><strong>Starlink</strong>: este dispositivo permite tener conexión a internet en cualquier lugar, lo cual es primordial para que puedas trabajar sin problemas. Si llevás tu dispositivo estándar de Starlink, podés usarlo por 2,6 horas.</li>
                        <li><strong>Celular</strong>: con la Explorer 240, podés cargar tu Iphone 15 y usarlo por 14 cargas. Así, podrás usar tu celular para poder comunicarte o hacer videollamadas.</li>
                        <li><strong>Ventilador portátil de escritorio</strong>: para un home office más cómodo, te conviene un ventilador para estar más fresco. Si, por ejemplo, cargás un ventilador portátil Xiaomi Mi Smart Standing Fan 1C con la estación de energía, podés usarlo de manera continua por 12,8 horas.</li>
                        <li><strong>Lámpara de escritorio</strong>: para tener mayor visibilidad, te conviene sumar una lámpara a un home office. Podrás cargar tu lámpara de escritorio LED TaoTronics con la estación de energía, para usarla de forma continua por 38,4 horas.</li>
                        <li><strong>Monitor</strong>: un monitor te permite trabajar mucho más cómodo y con mayor eficiencia. Con la Explorer 240, podés cargar tu Dell P2723DE (27" QHD) y usarlo por 4 horas.</li>
                        <li><strong>Auriculares</strong>: si necesitás hacer videollamadas o simplemente querés escuchar un poco de música mientras trabajás, te recomendamos cargar tus auriculares Logitech G Pro X Wireless con la Explorer ya que podrás usarlos por 95 horas.</li>
                        <li><strong>Proyector</strong>: si necesitás reducir la fatiga visual, hacer videollamadas, compartir documentos o organizar mejor tu trabajo, entonces te conviene usar un proyector.
                            Con la Explorer 240, podrás cargar tu Epson PowerLite X49 y usarlo por 1 hora.
                        </li>
                        <li><strong>Otros dispositivos</strong>: siempre viene bien tomarse un café o un licuado mientras trabajás. La Explorer 240 te permitirá disfrutar de hasta 1,3 horas de café caliente con tu cafetera Cafetera Mini Piccolo de Dolce Gusto y hacer licuados por 1,1 hora con la licuadora portátil PopBabies</li>
                    </ul>


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
export default HomeOffice;