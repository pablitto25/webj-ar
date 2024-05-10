import React from 'react';
import './Footer.css'
import icon1 from './assest/iconos redes-01.svg';
import icon2 from './assest/iconos redes-02.svg';
import icon3 from './assest/iconos redes-03.svg';
import Logo2 from './assest/Logo.svg'
import { Link } from 'react-router-dom';

const footer = () => {
    const icons = [
        { id: 1, icon: icon1, link: 'https://www.instagram.com/jackeryargentina/' },
        { id: 2, icon: icon2, link: 'https://www.youtube.com/channel/UCKzvXJBQk-y7i0vCJRKGneQ' },
        { id: 3, icon: icon3, link: 'https://www.facebook.com/jackeryargentina' },
    ];
    
    const links = [
        { id: 1, text: 'Home', route: '/' },
        { id: 2, text: 'Blog', route: '/Blog' },
        { id: 3, text: 'Contactenos', route: '/CONTACTO' },
    ];

    return (
        <footer className='conteinerFooter'>
            <section className='footerSocial'>
            <div className='footerLinksText'>
                    {links.map((link) => (    
                        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                        key={link.id} to={link.route} className="footerLinksText1">
                            {link.text}
                        </Link>
                    ))}
                </div>
            </section>
            <section className='footerTex'>
                <div className='footerTex1'>
                    <p>Elias Yofre 1250 Córdoba Argentina</p>
                </div>
                <div className='footerTex1'>
                    <p>consultas@jackery.com.ar</p>
                </div>
            </section>
            <img src={Logo2} alt='Logo' className='LogoFooter' />
            <section className='footerSocial'>
                <div className='footerLinks'>
                    {icons.map((x) => (
                        <Link key={x.id} to={x.link} target='_blank' className="iconLink">
                            <img src={x.icon} alt={`Icon ${x.id}`} className="icon" />
                        </Link>
                    ))}
                </div>
            </section>
            <p className='footerTex2'>Comercializado en Latinoamérica por Latamly S.A.</p>
        </footer>
    );
};

export default footer;
