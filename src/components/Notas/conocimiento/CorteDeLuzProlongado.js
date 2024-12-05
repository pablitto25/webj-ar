import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner29 from '../../Banner/banner29'
/* import image1 from '../conocimiento/assests/nota-de-blog-jackery-explorer-1000---2.jpg' */
import { Helmet } from 'react-helmet'

const CorteDeLuzProlongado = () => {
    return (
        <div>
            <Helmet>
                <title>Cómo prepararse para un corte de luz prolongado</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner29 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='container NotaTexConteiner'>
                    {/* inicio nueva nota */}
                    <p>
                        Diversos portales anunciaron que tendremos numerosos cortes de luz debido al exceso de demanda ante temperaturas extremas y fuertes tormentas de este verano.
                        Con frecuencia, <strong>la falta de suministro eléctrico puede demorar mucho tiempo en restablecerse</strong>, por lo que necesitás saber con anticipación cómo prepararte para esa situación:
                    </p>
                    <strong>Opciones cuando no hay electricidad</strong>
                    <p>
                        Conseguir otra manera de cargar tus dispositivos evita inconvenientes y pérdidas económicas. Existen diferentes opciones en el mercado tal como los generadores a combustible, pero estos son ruidosos, pesados y no son seguros por su emisión de contaminantes.<br />
                        Entonces, ¿qué es lo más conveniente? Definitivamente, la energía portátil de Jackery. Con nuestras estaciones de energía portátil y generadores solares, podrás cargar múltiples dispositivos, de manera simultánea y segura, y seguir funcionando en cualquier lugar.
                        Por su parte, las estaciones de energía se distinguen por su diseño compacto, portátil y liviano, podrás usarlas dentro de tu departamento. A estas, podés cargarlas con electricidad antes de que suceda el corte de luz como así también, podés cargarlas en cualquier momento si usás un panel solar.<br />
                        Por otra parte, el generador solar se compone de un un panel solar (que convierte la luz del sol en electricidad) y una estación de energía portátil (en donde se almacena la energía solar y se convierte en eléctrica para cargar tus dispositivos). El panel solar, además de ser ultra plegable y liviano, permite cargar tu estación de energía sin depender de la electricidad.<br />
                        A diferencia de los generadores a combustible, el generador solar sólo requiere una inversión inicial, lo que lo hace más económico. El generador solar es, entonces, el combo imbatible para los cortes de luz prolongados.
                    </p>
                    <strong>Buscar información</strong>
                    <p>
                        Podés consultar la redes sociales de tu proveedor de energía para saber cuándo serán los cortes de luz y si serán prolongados o no. De esta manera, podrás prepararte mejor y conseguir tu generador solar o estación de energía para asegurar la carga de tus dispositivos.
                        Una vez que suceda el corte, te recomendamos entrar a las redes sociales para saber cuándo volverá la electricidad como así también podrás saber si tus amigos o familiares se encuentran bien y si necesitan algo.

                    </p>
                    <strong>Cargar dispositivos importantes</strong>
                    <p>Si, por ejemplo, comprás el generador solar 1000, podrás cargar simultáneamente diferentes dispositivos que te harán faltan en los cortes prolongados de luz:</p>

                    <ul>
                        <li><strong>Dispositivos para la salud</strong>: si tenés un familiar que necesite cuidados especiales por su salud, es importante que te asegures tener energía en casos de emergencia. Si usás la Explorer 1000, podrás cargar tu Philips DreamStation Auto CPAP y usarla por 16 horas como así también tu nebulizador Omron NE-C801 y usarla de manera continua por 26 horas.</li>
                        <li><strong>Dispositivos para la cocina</strong>: al tratarse de un corte de luz prolongado, es esencial evitar romper la cadena de frío. La Explorer 1000 te permitirá usar por 2 horas la licuadora Oster Classic 4655, asar a la parrilla eléctrica por 1 hora con tu Aigostar Hitte 30HFA y mantener tus alimentos fríos durante 13 horas con la heladera portátil Dometic CFX3.</li>
                        <li><strong>Dispositivos para el entretenimiento</strong>: aburrirse en un corte de luz puede ser evitable con Jackery. Podrás usar de manera continua tu tablet Apple iPad por 3 días y tu parlante Bluetooth JBL Flip 6, por 40 horas.</li>
                        <li><strong>Dispositivos para trabajar</strong>: una notebook, un módem y el celular es el combo ideal para trabajar desde casa. Con la Explorer 1000, podrás usar la notebook (por 9 cargas), el módem (+100 horas) y el celular (100 cargas).</li>
                        <li><strong>Dispositivos para la seguridad</strong>: para proteger tu casa en todo momento, es importante que cargués tu sistema de alarma ya que la batería de respaldo podría agotarse antes de que regrese la electricidad. Para evitar inconvenientes, te recomendamos que las cargues con la Explorer y podrás usarla de manera continua por 20 horas.
                            Además, te sugerimos cargar luces para poder estar tranquilo ante la ausencia de luz a la noche. Si, por ejemplo, cargás Nilight 20” LED Light Bar con la Explorer 1000, podrás usarla de manera continua por 6,3 horas.
                        </li>
                    </ul>
                    <strong>Otras recomendaciones</strong>
                    <p>No dejes dispositivos conectados en lo que dure el corte. De este modo, evitarás que tus equipos electrónicos sufran sobretensiones y, por ende, se dañen.</p>
                    <p>En resumen, la mejor manera de prepararse para los cortes de luz prolongados es con la energía segura y eficiente de Jackery. Seguí funcionando, como siempre.</p>



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
export default CorteDeLuzProlongado;