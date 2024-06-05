import React from 'react';
import './Footer.css';
import { BASE_URL } from '../../config';


const Footer = () => {
  return (
    <footer className="section container footer" id="footer">
      <div className="footer-leftside">
        <div className="footer-social">
          <h2 className="footer-title">Mis redes sociales</h2>
          <div className="footer-icons-container">
            <a
              href="https://github.com/hernanruscica"
              className="footer-icons"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mi perfil de Github"
            >
              <img
                src={`${BASE_URL}/assets/icons/fontawesome-custom/github-light.svg`}
                className="header_navbar-mobile_social"
                style={{ width: '30px' }}
                alt="icono de github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/cesar-hernan-ruscica/"
              className="footer-icons"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mi perfil de Linkedin"
            >
              <img
                src={`${BASE_URL}/assets/icons/fontawesome-custom/linkedin-light.svg`}
                className="header_navbar-mobile_social"
                style={{ width: '30px' }}
                alt="icono de linkedin"
              />
            </a>
            <a
              href="https://www.freecodecamp.org/chruscica"
              className="footer-icons"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mi perfil de Free Code Camp"
            >
              <img
                src={`${BASE_URL}/assets/icons/fontawesome-custom/free-code-camp-light.svg`}
                className="header_navbar-mobile_social"
                style={{ width: '30px' }}
                alt="icono de Free Code Camp"
              />
            </a>
          </div>
        </div>
        <div className="footer-direct-msgs">
          <h2 className="footer-title">Contacto directo</h2>
          <div className="footer-icons-container">
            <a
              href="mailto: cesarhernanruscica@gmail.com"
              className="footer-icons"
              aria-label="Mi correo electronico"
            >
              <img
                src={`${BASE_URL}/assets/icons/fontawesome-custom/envelope-light.svg`}
                className="header_navbar-mobile_social"
                alt="icono de correo electrónico"
              />
            </a>
            <a
              href="https://wa.me/+541132924558?text=¡Hello+I'm+interested+with+your+work"
              className="footer-icons"
              aria-label="Mi Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${BASE_URL}/assets/icons/fontawesome-custom/whatsapp-light.svg`}
                className="header_navbar-mobile_social"
                alt="icono de WhatsApp"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-rightside">
        <div className="footer-copyrights">
          <div className="footer-paragraph">
            Este sitio web fue desarrollado por Cesar Hernan Ruscica en el año 2023. El codigo se
            puede encontrar en este{' '}
            <a
              href="https://github.com/hernanruscica/hernanruscica.github.io"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              repositorio de Github
            </a>{' '}
            y se puede usar como plantilla para quien le sirva. <br /> Bajo la licencia de{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/3.0/igo/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://creativecommons.org/licenses/by-sa/3.0/igo/
            </a>
          </div>
          <img src="/assets/icons/by-sa.svg" style={{ width: '120px', height: '42px' }} alt="logo de creative commons" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;