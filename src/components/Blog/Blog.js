import React, { useState } from 'react';
import './Blog.css';
import Banner6 from '../Banner/banner6';
import Cards from '../sliders/cards';
import Cards2 from '../sliders/cards2';
import Cards3 from '../sliders/cards3';
import Cards4 from '../sliders/cards4';
import Cards5 from '../sliders/cards5';
/* import { Link } from 'react-scroll'; */
import Footer from '../Footer/Footer';
import Cards6 from '../sliders/cards6';
import Cards7 from '../sliders/cards7';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('TODOS'); // Estado para la categoría seleccionada

  return (
    <div className='conteiner'>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <div className='bannerConteiner'>
        <Banner6 />
      </div>
      <div className='conteinerBlog'>
        <div className="menuSlider">
          <p className="menuSliderTex" onClick={() => setSelectedCategory('TODOS')}>TODOS</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('CONSEJOS DE COMPRA')}>CONSEJOS DE COMPRA</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('ESTILO DE VIDA')}>ESTILO DE VIDA</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('EMERGENCIA')}>EMERGENCIA</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('CONOCIMIENTO')}>CONOCIMIENTO</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('NOVEDADES')}>NOVEDADES</p>
        </div>

        <section className='conteinerCards'>
          {selectedCategory === 'TODOS' && (
            <>
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
                <p className="texSlider">CONOCIMIENTO</p>
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
            <div id="consejosDeCompra" className="cardSlider container mb-3">
              <p className="texSlider">CONSEJOS DE COMPRA</p>
              <Cards />
              <a href="/BLOG/TecladoSolar" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
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

          {selectedCategory === 'CONOCIMIENTO' && (
            <div id="conocimiento" className="cardSlider container mb-3">
              <p className="texSlider">CONOCIMIENTO</p>
              <Cards4 />
              <a href="/Blog/la-guia-definitiva-de-tipos-de-paneles-solares" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
            </div>
          )}

          {selectedCategory === 'NOVEDADES' && (
            <div>
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
