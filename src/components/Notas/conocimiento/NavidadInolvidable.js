import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner31 from '../../Banner/banner31'
import { Helmet } from 'react-helmet'

const NavidadInolvidable = () => {
    return (
        <div>
            <Helmet>
                <title>Energía portátil para una Navidad inolvidable</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner31 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='container NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        Se acerca la fiesta más amada por todos: la <strong>Navidad</strong>. Para lograr una fiesta especial, es importante organizar con tiempo los preparativos de la comida, la música, la decoración y los regalos para tus familiares.<br/>
                        Para simplificar esos preparativos y poder disfrutar de la fiesta, te recomendamos conseguir los generadores solares y las estaciones portátiles de <strong>Jackery</strong>. Con ellos, podrás dejar de depender de alargadores para usar dispositivos en lugares donde la electricidad no llega, como así también asegurarte energía portátil, silenciosa y segura en todo momento y en cualquier lugar.
                    </p>
                    <p>
                        Por lo tanto, Jackery es el aliado perfecto para esta Navidad. Si, por ejemplo, comprás la estación de energía <strong>Explorer 1000</strong>, podrás cargar simultáneamente diferentes dispositivos que te harán faltan para vivir una Navidad inolvidable:
                    </p>
                    <ul>
                        <li><strong>Luces de arbolito</strong>: con la Explorer, podrás cargar tu luces LED de cadena Fairy Lights y usarlo de manera continua por 5 días.</li>
                        <li><strong>Luces multicolor</strong>: no te pueden faltar las luces de color para animar la fiesta. Si, por ejemplo, cargás barras de luces multicolor WPA1-1502 de Alitrade con la Explorer 1000, podrás usarla de manera continua por 3 días.</li>
                        <li><strong>Heladerita portátil</strong>: con la Explorer 1000, podrás alimentar tu Dometic CFX3 y usarla de manera continua por 13 horas. Así, matendrás la cadena de frío de tus alimentos y bebidas durante toda la fiesta.</li>
                        <li><strong>Parrilla portátil</strong>: para la entrada de la cena navideña, podés usar tu parrilla eléctrica. Con la Explorer 1000, podrás cargar tu Aigostar Hitte 30HFA y usarla por 1 hora.</li>
                        <li><strong>Licuadora</strong>: si querés preparar tragos, como piña colada y daikiris, podrás hacerlo con la Explorer. Cargá la licuadora Oster Classic 4655 y podrás usarla por 2 horas continuas.</li>
                        <li><strong>Parlante</strong>: en la Navidad no puede faltar la música. Con la estación de energía, podrás cargar tu parlante Bluetooth JBL Flip 6 y usarla por 40 horas.</li>
                        <li><strong>Ventilador portátil</strong>: te permite estar más fresco durante la cena navideña. Si, por ejemplo, cargás un ventilador portátil Xiaomi Mi Smart Standing Fan 1C con la estación de energía, podrás usarlo por 21 horas.</li>
                        <li><strong>Sistema de alarma</strong>: si vas a pasar la Navidad fuera de casa, es necesario que te asegures que tu sistema de alarma proteja tu hogar en todo momento. Con la Explorer, podrás cargar tu sistema de alarma y usarla de manera continua por 20 horas.</li>
                    </ul>
                    <p>
                        En resumen, <strong>Jackery es el aliado ideal para que tengas una Navidad inolvidable</strong>. Con la energía portátil, segura, eficiente y silenciosa podrás disfrutar las fiestas al máximo. ¡Feliz Navidad!
                    </p>




                    {/* fin de la nota */}

                    {/* Falta imagen de diseño */}
                    {/* <div className='NotaImgConteiner'>
                        <img src={imagen1} alt='imagen' />
                    </div>
                    */}
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
export default NavidadInolvidable;