
import Contact from './components/Contact/Contact';
import HOME from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/Blog/Blog';
import PRODUCTOS from './components/Products/Jackery-Explorer-240.js';
import PRODUCTOS2 from './components/Products/Jackery-Explorer-500.js';
import PRODUCTOS3 from './components/Products/Jackery-Explorer-1000.js';
import PRODUCTOS4 from './components/Products/Jackery-SolarSaga-100.js';
import PRODUCTOS5 from './components/Products/Jackery-Generador-Solar-1000-2-paneles.js';
import PRODUCTOS6 from './components/Products/Jackery-Generador-Solar-1000.js';
import PRODUCTOS7 from './components/Products/Jackery-Generador-Solar-500.js';
import PRODUCTOS8 from './components/Products/Jackery-Generador-Solar-240.js';
import TecladoSolar from './components/Notas/conocimiento/TecladoSolar.js';
import MejoresCargadores from './components/Notas/conocimiento/MejoresCargadores.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CorteDeEnergia from './components/Notas/conocimiento/CorteDeEnergia.js';
import LaGuiaDefinitiva from './components/Notas/conocimiento/LaGuiaDefinitiva.js';
import JackeryPresenta from './components/Notas/conocimiento/JackeryPresenta.js';
import DiaDeLaTierra from './components/Notas/conocimiento/DiaDeLaTierra.js';
import TecnologiaVerde from './components/Notas/conocimiento/TecnologiaVerde.js';
import JackeryExplorer240 from './components/Notas/conocimiento/JackeryExplorer240.js';
import JackerySolarSaga100 from './components/Notas/conocimiento/JackerySolarSaga100.js';
import JackeryLaSolucionMultifuncional from './components/Notas/conocimiento/JackeryLaSolucionMultifuncional.js';
import JackerGeneradorSolar240 from './components/Notas/conocimiento/JackerGeneradorSolar240.js';
import JackeryExpoMinera from './components/Notas/conocimiento/JackeryExpoMinera.js';
import JackeryGeneradoresSolares from './components/Notas/conocimiento/JackeryGeneradoresSolares.js';
import JackeryRazones from './components/Notas/conocimiento/JackeryRazones.js';
import JackeryEstacionesDeEnergia from './components/Notas/conocimiento/JackeryEstacionesDeEnergia.js';
import LugaresParaHacerTrekking from './components/Notas/conocimiento/LugaresParaHacerTrekking.js';
import MejoraLaExperienciaClientes from './components/Notas/conocimiento/MejoraLaExperienciaClientes.js';
import ComoTrabajarSinConexion from './components/Notas/conocimiento/ComoTrabajarSinConexion.js';
import ComoConstruirUnaCasita from './components/Notas/conocimiento/ComoConstruirUnaCasita.js';
import Los5LugaresMasDesafiantes from './components/Notas/conocimiento/Los5LugaresMasDesafiantes.js';
import QueHacerSiSeCortaLaLuz from './components/Notas/conocimiento/QueHacerSiSeCortaLaLuz.js';
import LugaresIncreiblesParaHacerParacaidismo from './components/Notas/conocimiento/LugaresIncreiblesParaHacerParacaidismo.js';
import SalidaEscolar from './components/Notas/conocimiento/SalidaEscolar.js';
import Los5LugaresMasAsombrosos from './components/Notas/conocimiento/Los5LugaresMasAsombrosos.js';
import GeneradoresSolaresVsGeneradoresTradicionales from './components/Notas/conocimiento/GeneradoresSolaresVsGeneradoresTradicionales.js';
import EnergiaPortatil from './components/Notas/conocimiento/EnergiaPortatil.js';
import CortesDeLuz from './components/Notas/conocimiento/CortesDeLuz.js';
import EnergiaPortatilParaScout from './components/Notas/conocimiento/EnergiaPortatilParaScout.js';
import CorteDeLuzProlongado from './components/Notas/conocimiento/CorteDeLuzProlongado.js';
import EnergiaPortatilEnElAgro from './components/Notas/conocimiento/EnergiaPortatilEnElAgro.js';
import NavidadInolvidable from './components/Notas/conocimiento/NavidadInolvidable.js';
import TemperaturasExtremas from './components/Notas/conocimiento/TemperaturasExtremas.js';
import VacacionesDeVerano from './components/Notas/conocimiento/VacacionesDeVerano.js';
import EnergiaPortatilParaTuProyecto from './components/Notas/conocimiento/EnergiaPortatilParaTuProyecto.js';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path="/" element={<HOME/>} />
          <Route path="/HOME" element={<HOME/>} />
          <Route path="/PRODUCTOS" element={<PRODUCTOS/>} />
          <Route path="/PRODUCTOS/Jackery Explorer 240" element={<PRODUCTOS/>} />
          <Route path="/PRODUCTOS/Jackery Explorer 500" element={<PRODUCTOS2/>} />
          <Route path="/PRODUCTOS/Jackery Explorer 1000" element={<PRODUCTOS3/>} />
          <Route path="/PRODUCTOS/Jackery SolarSaga 100" element={<PRODUCTOS4/>} />
          <Route path="/PRODUCTOS/Jackery Generador Solar 1000 - 2 paneles" element={<PRODUCTOS5/>} />
          <Route path="/PRODUCTOS/Jackery Generador Solar 1000" element={<PRODUCTOS6/>} />
          <Route path="/PRODUCTOS/Jackery Generador Solar 500" element={<PRODUCTOS7/>} />
          <Route path="/PRODUCTOS/Jackery Generador Solar 240" element={<PRODUCTOS8/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Blog/TecladoSolar" element={<TecladoSolar/>} />
          <Route path="/Blog/mejores-cargadores-solares-para-excursiones" element={<MejoresCargadores/>} />
          <Route path="/Blog/corte-de-energia" element={<CorteDeEnergia/>} />
          <Route path="/Blog/la-guia-definitiva-de-tipos-de-paneles-solares" element={<LaGuiaDefinitiva/>} />
          <Route path="/Blog/jackery-presenta-el-revolucionario-generador-solar" element={<JackeryPresenta/>} />
          <Route path="/Blog/dia-de-la-tierra" element={<DiaDeLaTierra/>} />
          <Route path="/Blog/tecnologia-verde-tecnologia-jackery" element={<TecnologiaVerde/>} />
          <Route path="/Blog/jackery-explorer-240-la-mejor-estacion-de-energia-portatil-para-tus-vacaciones" element={<JackeryExplorer240/>} />
          <Route path="/Blog/panel-jackery-solarsaga-100w-5-beneficios-de-implementarlo-en-tu-vida" element={<JackerySolarSaga100/>} />
          <Route path="/Blog/jackery-la-solucion-multifuncional" element={<JackeryLaSolucionMultifuncional/>} />
          <Route path="/Blog/jackery-generador-solar-240-produce-tu-propia-energia-al-aire-libre" element={<JackerGeneradorSolar240/>} />
          <Route path="/Blog/expo-san-juan-minera-2024-jackery-estuvo-presente" element={<JackeryExpoMinera/>} />
          <Route path="/blog/que-son-los-generadores-solares" element={<JackeryGeneradoresSolares/>} />
          <Route path="/blog/jackery-explorer-500-10-razones-por-las-que-tenes-que-comprarla" element={<JackeryRazones/>} />
          <Route path="/blog/que-son-las-estaciones-de-energia" element={<JackeryEstacionesDeEnergia/>} />
          <Route path="/blog/5-lugares-para-hacer-trekking-a-2-horas-de-cordoba-capital" element={<LugaresParaHacerTrekking/>} />
          <Route path="/blog/mejorar-experiencia-de-tus-clientes-como-guia-de-turismo" element={<MejoraLaExperienciaClientes/>} />
          <Route path="/blog/como-trabajar-sin-conexion-electrica-para-un-rodaje-en-exteriores" element={<ComoTrabajarSinConexion/>} />
          <Route path="/blog/como-construir-una-casita-para-perros-de-manera-rapido-y-facil" element={<ComoConstruirUnaCasita/>} />
          <Route path="/blog/los-5-lugares-mas-desafiantes-para-hacer-4x4-en-san-juan" element={<Los5LugaresMasDesafiantes/>} />
          <Route path="/blog/que-hacer-si-se-corta-la-luz-y-necesitas-trabajar" element={<QueHacerSiSeCortaLaLuz/>} />
          <Route path="/blog/5-lugares-increibles-para-hacer-paracaidismo" element={<LugaresIncreiblesParaHacerParacaidismo/>} />
          <Route path="/blog/salida-escolar-como-la-energia-portatil-facilita-su-organizacion" element={<SalidaEscolar/>} />
          <Route path="/blog/los-5-lugares-mas-asombrosos-para-hacer-kayak-en-la-patagonia" element={<Los5LugaresMasAsombrosos/>} />
          <Route path="/blog/generadores-solares-vs-generadores-tradicionales" element={<GeneradoresSolaresVsGeneradoresTradicionales/>} />
          <Route path="/blog/como-el-uso-de-la-energia-portatil-revoluciona-el-trabajo-en-la-mina" element={<EnergiaPortatil/>} />
          <Route path="/blog/como-prepararse-para-los-cortes-de-luz-previstos-para-este-verano" element={<CortesDeLuz/>} />
          <Route path="/blog/como-la-energia-portatil-facilita-las-salidas-scout" element={<EnergiaPortatilParaScout/>} />
          <Route path="/blog/como-prepararse-para-un-corte-de-luz-prolongado" element={<CorteDeLuzProlongado/>} />
          <Route path="/blog/algunas-aplicaciones-de-energia-portatil-en-el-agro" element={<EnergiaPortatilEnElAgro/>} />
          <Route path="/blog/energia-portatil-para-una-navidad-inolvidable" element={<NavidadInolvidable/>} />
          <Route path="/blog/corte-de-luz-que-hacer-ante-temperaturas-extremas" element={<TemperaturasExtremas/>} />
          <Route path="/blog/energia-portatil-para-unas-vacaciones-de-verano-sin-limites" element={<VacacionesDeVerano/>} />
          <Route path="/blog/energia-portatil-para-tu-proyecto" element={<EnergiaPortatilParaTuProyecto/>} />
          <Route path="/CONTACTO" element={<Contact/>} />
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;



