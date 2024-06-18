import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Banner4 from '../../Banner/banner4'
import Cards5 from '../../sliders/cards5'
import imagen2 from './assests/laguiadefinitiva/Imagen2.webp'
import imagen3 from './assests/laguiadefinitiva/Imagen3.jpg'
import imagen4 from './assests/laguiadefinitiva/Imagen4.webp'
import imagen5 from './assests/laguiadefinitiva/Imagen5.webp'



const LaGuiaDefinitiva = () => {
  return (
    <div>
      <header>
        <div className='bannerConteiner'>
          <Banner4 />
        </div>
      </header>
      {/* Start Note */}
      <section className='NotaConteiner' >
        <div className='NotaTexConteiner'>
          <p>
            Los cortes frecuentes de energía eléctrica, facturas de luz cada vez más caras y la creciente necesidad de cuidar el ambiente son algunas de las razones que conducen a las personas a recurrir a la energía solar.
          </p>
          <p>
            Los paneles solares son una excelente manera de alimentar su hogar y ahorrar dinero, pero muchos tipos de paneles solares disponibles hacen que sea difícil elegir la mejor opción.
          </p>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            ¿Qué es un panel solar?
          </p>
        </div>
        <div className='NotaImgConteiner'>
          <img src={imagen2} alt='imagen' />
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Los <span style={{ color: '#F28F2E' }}>paneles solares</span> son células fotovoltaicas o PV que absorben los rayos del sol y los convierten en energía eléctrica. El típico panel solar está compuesto de capas de silicio, boro y fósforo.
          </p>
          <p>
            La capa de boro proporciona una carga positiva, mientras que la capa de fósforo proporciona una carga negativa. La capa interna entre el boro y el fósforo es de silicio, que actúa como un semiconductor.
          </p>
          <p>
            Las células de silicio liberan electrones y crean una corriente eléctrica. La corriente eléctrica liberada y almacenada en la batería se utiliza luego para alimentar dispositivos eléctricos durante cortes de energía o aventuras al aire libre.
          </p>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            ¿Qué es un panel solar?
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Los paneles solares utilizan la luz solar como combustible para generar energía. Cuando un rayo del solo golpea los paneles, la superficie convierte la luz solar en electricidad.
          </p>
          <p>
            Los paneles solares están compuestos por células que contienen electrones: la carga negativa del boro y la carga positiva del fósforo crean un campo magnético. La luz solar que cae sobre las células desestabiliza los electrones y libera los electrones cargados negativamente. El movimiento de los electrones libres produce corriente o electricidad. Sin embargo, esta corriente eléctrica no es adecuada para los electrodomésticos del hogar. Y aquí es donde entra en juego el papel del inversor solar.
          </p>
          <p>
            El inversor solar convierte la electricidad producida de CC a CA para que puedas cargar tus electrodomésticos.
          </p>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            Los 4 tipos principales de paneles solares
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Hay cuatro tipos principales de paneles solares: monocristalinos, policristalinos, PERC y película delgada. Dependiendo del tipo de células solares, los paneles solares se clasifican en diferentes categorías que se muestran en la tabla a continuación.
          </p>
          <table className='NotaTableContainer'>
            <table>
              <tbody>
                <tr>
                  <td>Parámetros</td>
                  <td>Monocristalino</td>
                  <td>Policristalino</td>
                  <td>Película delgada</td>
                  <td>PERC</td>
                </tr>
                <tr>
                  <td>Costo</td>
                  <td>Alto</td>
                  <td>Medio</td>
                  <td>Depende del material</td>
                  <td>Más alto</td>
                </tr>
                <tr>
                  <td>Eficiencia</td>
                  <td>Alta</td>
                  <td>Media</td>
                  <td>Baja</td>
                  <td>Más eficiente</td>
                </tr>
                <tr>
                  <td>Aspecto</td>
                  <td>Células de color negro oscuro con forma octogonal</td>
                  <td>Células de color azul con bordes cuadrados</td>
                  <td>Depende del material</td>
                  <td>Células de color negro con bordes redondeados</td>
                </tr>
                <tr>
                  <td>Vida útil</td>
                  <td>25-40 años</td>
                  <td>25-35 años</td>
                  <td>10-20 años</td>
                  <td>25-30 años</td>
                </tr>
                <tr>
                  <td>Huella de carbono</td>
                  <td>
                    Baja
                    38.1 g per kWh
                  </td>
                  <td>
                    Baja
                    27.2 g per kWh
                  </td>
                  <td>Más bajo</td>
                  <td>Baja</td>
                </tr>
                <tr>
                  <td>Ventajas</td>
                  <td>Eficiente energéticamente y resistente al calor</td>
                  <td>Asequible y menos residuos durante la fabricación</td>
                  <td>Ligero y bajo coste de instalación</td>
                  <td>
                    Ocupa menos espacio y es más eficiente
                    Desventajas
                  </td>
                </tr>
                <tr>
                  <td>Desventajas</td>
                  <td>Caro</td>
                  <td>Baja eficiencia energética y baja resistencia al calor</td>
                  <td>Se degrada más rápido y es menos eficiente</td>
                  <td>Caro</td>
                </tr>
              </tbody>
            </table>
          </table>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            Paneles solares monocristalinos
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Más conocidos como paneles de una sola cristalina, los paneles solares monocristalinos están hechos utilizando una forma pura de cristales de silicio. El cristal se corta en múltiples obleas con forma de octágono formando células.
          </p>
          <p>
            Estos paneles se construyen con la tecnología de las células Half Cut. Dentro de los paneles solares, las células de forma cuadrada se cortan para producir el doble de células.
          </p>
          <p>
            Las células en las dos mitades de los paneles solares están conectadas en dos series diferentes, asegurando una generación de energía constante incluso si hay sombra en la mitad del panel.
          </p>
        </div>
        <div className='NotaImgConteiner'>
          <img src={imagen3} alt='imagen' />
        </div>
        <div className='NotaTexConteiner'>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Características de los paneles solares monocristalinos
          </p>
          <ul>
            <li>
              Como el tipo monocristalino de paneles solares está compuesto por un solo cristal de silicio, suelen tener altas tasas de conversión en comparación con otros paneles disponibles
            </li>
            <li>
              Este tipo de paneles solares es un poco más caro que otros tipos debido a la complejidad del proceso de fabricación de células de silicio de un solo cristal
            </li>
            <li>
              El panel solar tiene una mayor resistencia al calor que otros paneles, lo que significa que puede producir más electricidad a altas temperaturas
            </li>
          </ul>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Ventajas
          </p>
          <ul>
            <li>
              Están hechos de la más alta calidad de cristal de silicio, lo que los convierte en una opción altamente eficiente y popular entre los propietarios de viviendas
            </li>
            <li>
              Los pequeños paneles solares monocristalinos pueden producir la misma energía que las células policristalinas o de película delgada grandes
            </li>
            <li>
              Tienen la vida útil más larga en comparación con otros tipos, lo que garantiza que se pueda disfrutar de la energía solar durante décadas
            </li>
          </ul>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Desventajas
          </p>
          <ul>
            <li>
              Una gran desventaja del tipo de panel solar monocristalino es su alto costo inicial debido al pesado proceso de producción necesario para su fabricación
            </li>
            <li>
              La eficiencia de los paneles solares disminuye cuando están cubiertos de nieve, hojas o suciedad
            </li>
          </ul>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            Paneles solares policristalinos
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            También llamados paneles multicristalinos, estos paneles solares suelen ser más baratos que los paneles monocristalinos. Esto se debe a que los fragmentos de silicio fabrican células solares en lugar de cristales de silicio puros.
          </p>
          <p>
            Un proceso de fabricación sencillo reduce el costo total del panel solar. Sin embargo, en términos de espacio y conversión de energía, son menos eficientes y tienen una menor tolerancia al calor.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Características de los paneles solares
          </p>
          <ul>
            <li>
              Están formados por múltiples cristales de silicio, por lo que hay poco espacio para el movimiento de electrones.Por eso tienen una eficiencia menor
            </li>
            <li>
              En lugar de parecerse a los monocristalinos, estos tipos de paneles solares tienen células de forma cuadrada y bordes rectos
            </li>
            <li>
              Como se desperdicia menos silicio durante la fabricación de los paneles y el proceso de fabricación es bastante sencillo, estos paneles son más asequibles que otros tipos
            </li>
          </ul>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Ventajas
          </p>
          <ul>
            <li>
              En condiciones de poca luz, los cristales policristalinos son más eficientes en comparación con otros tipos
            </li>
            <li>
              Son soluciones menos costosas para los propietarios de viviendas que desean cambiar a energía solar
            </li>
            <li>
              Produce menos residuos durante la fabricación y ofrece el máximo rendimiento
            </li>
          </ul>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Desventajas
          </p>
          <ul>
            <li>
              Son menos duraderos que otros tipos de paneles solares
            </li>
            <li>
              Los paneles son más grandes, por lo que pueden ocupar más espacio en el hogar para producir la misma cantidad de electricidad
            </li>
          </ul>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            Paneles solares de película delgada
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Los paneles solares de película delgada tienen calificaciones de eficiencia más bajas, por lo que generalmente se utilizan en instalaciones solares de servicios públicos o industriales a gran escala.
          </p>
          <p>
            Se producen depositando una capa de sustancia fotovoltaica, como el seleniuro de indio, galio y cobre (CIGS), silicio amorfo (a-Si) o telururo de cadmio (CdTe), sobre vidrio.
          </p>
          <p>
            Aunque cada material crea un panel solar diferente, todos caen dentro de las células solares de película delgada.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Características de los paneles de película delgada
          </p>
          <ul>
            <li>
              El coeficiente de temperatura de los paneles de película fina es de aproximadamente - 0,2% por C, lo que significa que pueden soportar mejor el calor que los tipos de panel mono y poli
            </li>
            <li>
              Al ser más fáciles de instalar sin ningún tipo de equipamiento, el costo de los paneles de película fina es mucho menor
            </li>
            <li>
              Estos tipos de paneles solares son atractivos y tienen menos cableado y barras colectoras
            </li>
            <li>
              A menudo se denominan células solares de segunda y tercera generación ya que se fabrican mezclando distintos materiales
            </li>
          </ul>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Ventajas
          </p>
          <ul>
            <li>
              La producción de tipos de paneles solares delgados es más rápida y sencilla que las células solares de primera generación, lo que lo hace rentable
            </li>
            <li>
              Puede resistir altas temperaturas en días soleados y brillantes
            </li>
            <li>
              Pesa menos en comparación con los paneles monocristalinos y policristalinos
            </li>
          </ul>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Desventajas
          </p>
          <ul>
            <li>
              El cadmio en CdTe es altamente tóxico y puede dañar la salud humana si se inhala o ingiere
            </li>
            <li>
              Algunos metales presentes en GaAs, CdTe y CIGS son raros, lo que dificulta a los fabricantes producir grandes cantidades de células delgadas
            </li>
            <li>
              En comparación con los paneles mono y poli, estos paneles solares tienen la vida útil más corta
            </li>
          </ul>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            Paneles solares PERC
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            La célula trasera y emisora pasivada (células PERC) es una nueva tecnología que consiste en añadir una capa de pasivación a la superficie trasera de la célula. La última tecnología en paneles solares PERC aumenta la cantidad de radiación solar absorbida al reflejar la luz de nuevo en la célula.
          </p>
          <p>
            La captación de energía es alta en los paneles PERC, por lo que son ideales para espacios limitados. Sin embargo, son un poco caros en comparación con los paneles solares tradicionales.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Características de los paneles solares PERC
          </p>
          <ul>
            <li>
              Debido a la capa de preservación, estos tipos de paneles solares son altamente eficientes, incluso más que los monocristalinos
            </li>
            <li>
              Son capaces de funcionar bien tanto en ambientes de alta temperatura como de baja luminosidad
            </li>
            <li>
              Los paneles solares PERC permiten obtener la misma potencia con menos paneles
            </li>
          </ul>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Ventajas
          </p>
          <ul>
            <li>
              Una capa exterior adicional añade protección, lo que los hace más eficientes
            </li>
            <li>
              Tienen la mayor potencia nominal en comparación con el resto de paneles solares disponibles
            </li>
          </ul>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Desventajas
          </p>
          <ul>
            <li>
              En comparación con los paneles tradicionales, los paneles PERC son ligeramente más caros
            </li>
          </ul>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            Otros tipos de paneles solares
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Además de los tipos comunes de paneles solares, existen algunas células solares menos conocidas, incluyendo:
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            Paneles solares bifaciales
          </p>
          <p>
            Como su nombre indica, las células solares bifaciales pueden absorber luz en ambos lados y convertirla en energía. La parte posterior del panel absorbe la luz que se refleja desde el suelo. Podemos considerar la colocación de un espejo detrás de estos paneles para obtener una producción máxima de electricidad.
          </p>
          <p>
            Los estudios revelan que los modelos bifaciales pueden producir entre un 10% y un 20% más de energía que los paneles tradicionales o monocristalinos. No obstante, la eficiencia tiene un costo: tendrás que pagar casi un 15% más que los paneles solares monocristalinos por una mayor eficiencia y potencia.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            Paneles solares transparentes
          </p>
          <p>
            Funcionan como un panel normal, pero con una transparencia ligera o total. Es importante tener en cuenta que estos paneles solares son más adecuados para contextos comerciales que residenciales. Además, no son portátiles, lo que los hace menos adecuados para aventureros al aire libre.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            Tejas solares
          </p>
          <p>
            Las tejas solares funcionan con el mismo concepto: ayudan a convertir la luz solar en electricidad. La estética atractiva es la única razón por la que la gente elige tejas solares en lugar de paneles solares.
          </p>
          <p>
            Pero antes de invertir en tejas solares, tené en cuenta que pueden costarte el doble que los paneles solares. Además, son menos eficientes a la hora de convertir la luz solar en electricidad.
          </p>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            ¿Cómo clasificar los tipos de paneles solares?
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            No todos los paneles son iguales cuando hablamos de eficiencia, rendimiento, costes y otros factores.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Tipos de paneles solares según su eficiencia
          </p>
          <p>
            La eficiencia es uno de los factores decisivos más importantes a la hora de elegir un tipo de panel solar. La eficiencia varía en función del panel solar que elija.
          </p>
          <ul>
            <li>
              Los paneles monocristalinos tienen una eficiencia del 20% (superior a todos los demás disponibles)
            </li>
            <li>
              La eficiencia de los paneles policristalinos se sitúa entre el 15 y el 17%
            </li>
            <li>
              Los paneles PERC tienen la mayor eficiencia (casi un 15-20% general y un 5% extra debido a la capa de pasivación)
            </li>
            <li>
              La eficiencia de los paneles solares de capa fina se sitúa entre el 6-15%, dependiendo del material utilizado
            </li>
          </ul>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            Tipos de paneles solares según su eficiencia
          </p>
          <p>
            La capacidad energética depende de cuánta energía puede producir el panel solar durante las horas punta.
          </p>
          <ul>
            <li>
              Las células solares monocristalinas tienen la mayor capacidad de potencia debido a su construcción monocristalina. Si elige paneles monocristalinos, puede esperar una potencia de hasta 300 W o más
            </li>
            <li>
              Las policristalinas son una dura competencia para las monocristalinas, con una potencia de entre 240 y 300 W
            </li>
            <li>
              Al igual que la eficiencia, la potencia de los paneles solares de capa fina depende del material utilizado y del tamaño del panel. Por lo general, las láminas delgadas producen menos potencia que los paneles monocristalinos y policristalinos
            </li>
            <li>
              Los paneles solares PERC son más eficientes y absorben más luz solar que otros tipos debido a su capa adicional
            </li>
          </ul>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            Tipos de paneles solares por aspecto
          </p>
          <p>
            A continuación desglosaremos las diferencias de aspecto entre los distintos tipos de paneles solares.
          </p>
          <ul>
            <li>
              Los paneles monocristalinos tienen un aspecto negro sólido y un diseño elegante. Los tamaños y formas perfectos e iguales de las células solares les confieren un aspecto organizado y atractivo a la vista
            </li>
            <li>
              Los paneles policristalinos, en cambio, tienen un aspecto azul jaspeado. Cada célula o panel individual tendrá una forma diferente a los demás, lo que le dará un aspecto desorganizado
            </li>
            <li>
              Los paneles de capa fina tienen un aspecto totalmente negro y limpio, con un diseño delgado. El menor número de cables y barras colectoras le confiere un aspecto despejado y elegante
            </li>
            <li>
              Los paneles PERC tienen una forma negra uniforme, lo que les da un buen aspecto
            </li>
          </ul>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            Tipos de paneles solares por costo
          </p>
          <p>
            Si estás listo para ir al solar, la comprensión de los costos asociados con la compra de paneles solares es fundamental.
          </p>
          <p>
            Los paneles monocristalinos tienen un precio elevado debido al complejo proceso de fabricación que consiste en combinar el cristal de silicio de mayor calidad.
          </p>
          <p>
            A diferencia de los monocristalinos, los policristalinos no utilizan un único cristal de silicio puro. En su lugar, utiliza restos de fragmentos de cristal que abaratan el coste de producción.
          </p>
          <p>
            Entre todos los paneles solares de capa fina, el CIGS es el más caro, seguido del CdTe y el a-Si. La naturaleza ligera y flexible de los paneles solares reduce los costos de mano de obra.
          </p>
          <p>
            Por PERC, los propietarios deben pagar alrededor de 302,13 - 660,92 pesos chilenos por vatio.
          </p>
          <p>
            <span style={{ fontWeight: '700' }}>Nota</span> - Esta es la estimación general de costos para cada tipo. El gasto exacto relacionado con los paneles solares dependerá de otros factores como la marca, los requisitos de electricidad, el tamaño, etc.
          </p>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            ¿Cómo elegir los tipos de paneles solares?
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Más allá del costo y la eficiencia de los paneles solares, algunos factores influyen en la elección de los paneles solares.
          </p>
          <p style={{ fontWeight: '700', paddingLeft: '2rem' }}>
            Índice de granizo
          </p>
          <p>
            Si la zona donde vivís es propensa al granizo o a la nieve, es mejor buscar un panel solar que pueda soportar el impacto del granizo sin sufrir daños. Los paneles monocristalinos y policristalinos se fabrican con materiales gruesos. Por lo tanto, son una opción fiable para los propietarios de viviendas que viven en zonas propensas al granizo.
          </p>
          <p style={{ fontWeight: '700', paddingLeft: '2rem' }}>
            Degradación inducida por la luz (LID)
          </p>
          <p>
            La degradación inducida por la luz, o LID, es la degradación del panel solar que se produce durante las primeras horas de exposición al sol. Cuanto mayor sea la tasa de LID de un panel solar, menor será su calidad. Por lo tanto, es preferible elegir un panel solar con un LID inferior al 3% para obtener el máximo rendimiento.
          </p>
          <p style={{ fontWeight: '700', paddingLeft: '2rem' }}>
            Coeficiente de temperatura
          </p>
          <p>
            La generación de electricidad y la temperatura de los paneles solares están relacionadas entre sí. Asegúrate de comprobar el coeficiente de temperatura del panel solar antes de realizar la compra. Debe oscilar entre -0,2% °C y -0,5% °C, para obtener la máxima potencia.
          </p>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            Los mejores paneles solares con Jackery
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Elegir los paneles solares adecuados con un montón de opciones disponibles puede ser un desafío. ¡Pero ya no más! Te traemos la mejor solución para aprovechar la energía del sol y cargar todos tus aparatos eléctricos.
          </p>
          <p>
            Los paneles solares portátiles Jackery SolarSaga son fáciles de transportar y tienen la mayor eficiencia del 25%. Para maximizar la producción de electricidad, puedes combinarlo con las centrales eléctricas móviles recargables de nuestra marca
          </p>
        </div>
        <div className='NotaImgConteiner'>
          <img src={imagen4} alt='imagen' />
        </div>
        <div className='NotaTexConteiner'>
          <p>
            <span style={{ color: '#F28F2E' }}>Paneles Solares Jackery SolarSaga 100W</span>
          </p>
          <p>
            Jackery SolarSaga 100W es el más adecuado para cortes de energía inesperados. Además, el mango plegable, ligero y fácil de llevar hace que sea la elección perfecta para los aventureros al aire libre. Gracias a la tecnología de células de múltiples capas y células solares de silicio monocristalino, los paneles solares funcionan mejor con una alta eficiencia de conversión del 23.7%
          </p>
        </div>
        <ul>
          <li>
            La carcasa laminada con ETFE, la calidad de resistencia al agua IP65 y las cremalleras de bolsillo de las células solares lo hacen duradero y aumentan su vida útil
          </li>
          <li>
            La bolsa de almacenamiento con el kit de paneles solares SolarSaga 100W almacena y protege los puertos y cables de golpes y polvo
          </li>
          <li>
            Los paneles solares avanzados vienen con un diseño plegable, asa de goma y tamaño compacto para facilitar su transporte
          </li>
          <li>
            Es compatible con las estaciones de energía Jackery Explorer 500/1000/1500 Pro
          </li>
        </ul>
        <div className='NotaTitleConteiner'>
          <p>
            Preguntas frecuentes sobre los tipos de paneles solares
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Los paneles solares monocristalinos son la mejor opción para la mayoría de los sistemas de energía solar residenciales. Sin embargo, si todavía no estás convencido acerca de la elección, la siguiente información puede ayudarte en tu elección.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
            ¿Cuánto duran los paneles solares monocristalinos Jackery?
          </p>
          <p>
            Nuestros paneles solares monocristalinos pueden durar mucho tiempo si están bien mantenidos. La solución solar de mayor calidad puede durar más de 25 años si se combina con centrales solares explorer.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.2rem', paddingLeft: '2rem' }}>
            ¿Cuál es el tipo de panel solar más eficiente?
          </p>
          <p>
            El tipo de panel solar monocristalino es el más eficiente, con índices de entre el 17% y el 25%. Como las moléculas de silicio están debidamente alineadas en el panel solar, convierten la energía solar en electricidad más rápidamente.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.2rem', paddingLeft: '2rem' }}>
            ¿Cuál es el tipo de panel solar más barato?
          </p>
          <p>
            Entre todos los paneles solares que se venden comercialmente, los de capa fina son los más baratos. Esto se debe a que su proceso de fabricación es sencillo y requiere menos materiales. No obstante, estos paneles también suelen ser los menos eficientes.
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.2rem', paddingLeft: '2rem' }}>
            ¿Cómo aprovechar al máximo los paneles solares Jackery?
          </p>
          <p>
            Nuestros paneles utilizan células solares de silicio monocristalino, que proporcionan una mayor tasa de conversión del 24,3%. Considerá la posibilidad de acoplar el <span style={{ color: '#F28F2E' }}>nuestro panel solar</span> con un generador solar para mejorar la capacidad de generación de energía.
          </p>
          <ul>
            <li>
              Los paneles solares Jackery SolarSaga de 100W y las centrales eléctricas Explorer pueden ser una excelente opción para alimentar todos los electrodomésticos y disfrutar de acampadas u otras aventuras al aire libre
            </li>
          </ul>
          <div className='NotaImgConteiner'>
            <img src={imagen5} alt='imagen' />
          </div>
        </div>
        <div className='NotaTitleConteiner'>
          <p>
            Conclusiones
          </p>
        </div>
        <div className='NotaTexConteiner'>
          <p>
            Considerá invertir en los <span style={{ color: '#F28F2E' }}>paneles solares Jackery SolarSaga</span>. Son altamente eficientes y superan a otros paneles solares disponibles en el mercado.
          </p>
          <p>
            Entonces, ¿qué estás esperando? Convertite a la energía solar con la combinación de paneles solares de la más alta calidad y una estación de energía portátil.
          </p>
        </div>

        {/* End Note */}


        {/* <div className='ProductVideo'>
          <iframe
            width='100%'
            height='400px'
            src='https://www.youtube.com/embed/TU_ID_DE_VIDEO' /* Reemplaza TU_ID_DE_VIDEO con el ID de tu video
            title='Product Video'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div> 
      */}
        <div id="novedades" className="cardSlider container mb-3">
          <p className="texSlider">NOVEDADES</p>
          <Cards5 />
          <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
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
export default LaGuiaDefinitiva;