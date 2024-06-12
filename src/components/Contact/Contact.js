import './Contact.css'
import React from 'react';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const CONTACTO = () => {


  return (
  
    <div className='conteinerContact'>
      <Helmet>
        <title>Contacto</title>
      </Helmet>
      <header className='conteinerContactImg'>
        <div>
          <h1 className='ContactTitle'>Contactanos</h1>
        </div>

      </header>
      <div className='conteinerCon'>
      <div className='conteinerContactForm'>
          <div className='conteinerForm'>
            <Form/>
          </div>
      </div>
      </div>
      <footer className='conteinerFooter'>
        <Footer/>
      </footer>

    </div>


  );
};

export default CONTACTO;