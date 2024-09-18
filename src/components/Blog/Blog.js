import React, { useState } from 'react';
import './Blog.css';
import Banner12 from '../Banner/banner12';
import Cards from '../sliders/cards';
import Cards2 from '../sliders/cards2';
import Cards3 from '../sliders/cards3';
import Cards4 from '../sliders/cards4';
import Cards5 from '../sliders/cards5';
import Footer from '../Footer/Footer';
import Cards6 from '../sliders/cards6';
import Cards7 from '../sliders/cards7';
import Cards8 from '../sliders/cards8';
import { Helmet } from 'react-helmet';
import Cards9 from '../sliders/cards9';
import Cards10 from '../sliders/cards10';
import Cards11 from '../sliders/cards11';
import Cards12 from '../sliders/cards12';
import Cards13 from '../sliders/cards13';
import Cards14 from '../sliders/cards14';
import Cards15 from '../sliders/cards15';
import Cards16 from '../sliders/cards16';
import Cards17 from '../sliders/cards17';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('TODOS'); // Estado para la categoría seleccionada

  return (
    <div className='conteiner'>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <div className='bannerConteiner'>
        <Banner12 />
      </div>
      <div className='conteinerBlog'>
        <div className="menuSlider">
          <p className="menuSliderTex" onClick={() => setSelectedCategory('TODOS')}>TODOS</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('CONSEJOS DE COMPRA')}>CONSEJOS DE COMPRA</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('ESTILO DE VIDA')}>ESTILO DE VIDA</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('EMERGENCIA')}>EMERGENCIA</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('APRENDEMAS')}>APRENDÉ MÁS</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('NOVEDADES')}>NOVEDADES</p>
        </div>

        <section className='conteinerCards'>
          {selectedCategory === 'TODOS' && (
            <>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Mejorá la experiencia de tus clientes como guía de turismo</p>
                <Cards17 />
                <a href="/blog/mejorar-experiencia-de-tus-clientes-como-guia-de-turismo" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">5 lugares para hacer trekking a 2 horas de Córdoba Capital</p>
                <Cards16 />
                <a href="/blog/5-lugares-para-hacer-trekking-a-2-horas-de-cordoba-capital" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">¿Qué son las estaciones de energía?</p>
                <Cards15 />
                <a href="/blog/que-son-las-estaciones-de-energia" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">10 razones por las que tenés que comprarla</p>
                <Cards14 />
                <a href="/blog/jackery-explorer-500-10-razones-por-las-que-tenes-que-comprarla" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">¿Qué son los generadores solares?</p>
                <Cards13 />
                <a href="/blog/que-son-los-generadores-solares" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Expo San Juan minera 2024: Jackery estuvo presente</p>
                <Cards12 />
                <a href="/Blog/expo-san-juan-minera-2024-jackery-estuvo-presente" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery generador solar 240: producí tu propia energía al aire libre</p>
                <Cards11 />
                <a href="/Blog/jackery-generador-solar-240-produce-tu-propia-energia-al-aire-libre" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery, la solución multifuncional</p>
                <Cards10 />
                <a href="/Blog/jackery-la-solucion-multifuncional" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Panel Jackery Solarsaga 100w: 5 beneficios de implementarlo en tu vida</p>
                <Cards9 />
                <a href="/Blog/panel-jackery-solarsaga-100w-5-beneficios-de-implementarlo-en-tu-vida" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery Explorer 240: la mejor estación de energía portátil para tus vacaciones</p>
                <Cards8 />
                <a href="/Blog/jackery-explorer-240-la-mejor-estacion-de-energia-portatil-para-tus-vacaciones" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">TECNOLOGÍA VERDE, TECNOLOGÍA JACKERY</p>
                <Cards7 />
                <a href="/Blog/tecnologia-verde-tecnologia-jackery" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">DÍA DE LA TIERRA</p>
                <Cards6 />
                <a href="/Blog/dia-de-la-tierra" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="consejosDeCompra" className="cardSlider container mb-3">
                <p className="texSlider">CONSEJOS DE COMPRA</p>
                <Cards />
                <a href="/BLOG/TecladoSolar" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="estiloDeVida" className="cardSlider container mb-3">
                <p className="texSlider">ESTILO DE VIDA</p>
                <Cards2 />
                <a href="/Blog/mejores-cargadores-solares-para-excursiones" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="emergencia" className="cardSlider container mb-3">
                <p className="texSlider">EMERGENCIA</p>
                <Cards3 />
                <a href="/Blog/corte-de-energia" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="conocimiento" className="cardSlider container mb-3">
                <p className="texSlider">APRENDÉ MÁS</p>
                <Cards4 />
                <a href="/Blog/la-guia-definitiva-de-tipos-de-paneles-solares" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">NOVEDADES</p>
                <Cards5 />
                <a href="/Blog/jackery-presenta-el-revolucionario-generador-solar" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
            </>
          )}
          {/* Agrega el resto de tus cards de blog aquí y filtra según selectedCategory */}

          {selectedCategory === 'CONSEJOS DE COMPRA' && (
            <div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">10 razones por las que tenés que comprarla</p>
                <Cards14 />
                <a href="/blog/jackery-explorer-500-10-razones-por-las-que-tenes-que-comprarla" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery generador solar 240: produce tu propia energía al aire libre</p>
                <Cards11 />
                <a href="/Blog/jackery-generador-solar-240-produce-tu-propia-energia-al-aire-libre" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Panel Jackery Solarsaga 100w: 5 beneficios de implementarlo en tu vida</p>
                <Cards9 />
                <a href="/Blog/panel-jackery-solarsaga-100w-5-beneficios-de-implementarlo-en-tu-vida" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="consejosDeCompra" className="cardSlider container mb-3">
                <p className="texSlider">CONSEJOS DE COMPRA</p>
                <Cards />
                <a href="/BLOG/TecladoSolar" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery Explorer 240: la mejor estación de energía portátil para tus vacaciones</p>
                <Cards8 />
                <a href="/Blog/jackery-explorer-240-la-mejor-estacion-de-energia-portatil-para-tus-vacaciones" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
            </div>
          )}

          {selectedCategory === 'ESTILO DE VIDA' && (
            <div id="estiloDeVida" className="cardSlider container mb-3">
              <p className="texSlider">ESTILO DE VIDA</p>
              <Cards2 />
              <a href="/Blog/mejores-cargadores-solares-para-excursiones" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
            </div>
          )}

          {selectedCategory === 'EMERGENCIA' && (
            <div id="emergencia" className="cardSlider container mb-3">
              <p className="texSlider">EMERGENCIA</p>
              <Cards3 />
              <a href="/Blog/corte-de-energia" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
            </div>
          )}

          {selectedCategory === 'APRENDEMAS' && (
            <div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">¿Qué son las estaciones de energía?</p>
                <Cards15 />
                <a href="/blog/que-son-las-estaciones-de-energia" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery, la solución multifuncional</p>
                <Cards10 />
                <a href="/Blog/jackery-la-solucion-multifuncional" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="conocimiento" className="cardSlider container mb-3">
                <p className="texSlider">APRENDÉ MÁS</p>
                <Cards4 />
                <a href="/Blog/la-guia-definitiva-de-tipos-de-paneles-solares" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
            </div>
          )}

          {selectedCategory === 'NOVEDADES' && (
            <div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Expo San Juan minera 2024: Jackery estuvo presente</p>
                <Cards12 />
                <a href="/Blog/expo-san-juan-minera-2024-jackery-estuvo-presente" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">NOVEDADES</p>
                <Cards5 />
                <a href="/Blog/jackery-presenta-el-revolucionario-generador-solar" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">TECNOLOGÍA VERDE, TECNOLOGÍA JACKERY</p>
                <Cards7 />
                <a href="/Blog/tecnologia-verde-tecnologia-jackery" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
            </div>
          )}

        </section>
      </div>
      <footer className='conteinerFooter'>
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;
