import React from 'react';
import './Distribuidores.css';
import imagen1 from "./assest/shipin.png";
import imagen2 from "./assest/mundo-generador.png";
import { Link } from 'react-router-dom';

const Distribuidores = () => {


    return (
        <div className='containerDistribuidor'>
            <div>
                <p className='titleDistri'>Estos son algunos de los clientes que confía en nosotros y a los que hemos ayudado a crecer, construyendo relaciones sólidas en el largo plazo.</p>
            </div>
            <div className='containerDistri'>
                <div className='NotaImgConteiner'>
                    <Link to={'https://shipin.ar'} target='_blank'><img src={imagen1} alt='imagen' /></Link>
                </div>
                <div className='NotaImgConteiner'>
                <Link to={'https://www.mundogenerador.com/'} target='_blank'><img src={imagen2} alt='imagen' /></Link>
                </div>
            </div>
        </div>
    );
};

export default Distribuidores;
