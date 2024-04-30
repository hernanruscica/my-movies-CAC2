import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = ({ currentPage, onPageChange }) => {
    const isActive = (pageName) => {
      return currentPage === pageName ? 'navbar-selected': '';
    };

    const handleNavbarClick = (pageName) => {
      onPageChange(pageName);
    };
    return (
      <header className="header" id="header">
        <div className="header-container">
          <Link to="/" className="header__logo-container">
            <img
              src="./assets/icons/fontawesome-custom/code-light.svg"
              className="header__logo-container__icon"
              alt="Icono en formato svg de codigo"
              style={{ width: '30px' }}
            />
            <h1 className="header__logo-container__title">
              <span style={{ color: 'var(--section04-normal)' }}>ruscica</span>
              <span style={{ color: 'var(--section03-normal)' }}>-code</span>
              <span style={{ color: 'var(--section02-light)' }}>.ar</span>
            </h1>
          </Link>
  
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="checkbtn">
            <img
              src="./assets/icons/fontawesome-custom/bars-light.svg"
              className="header__logo-container__icon"
              id="header__btn-menu-open"
              style={{ width: '20px' }}
              alt="boton de menu"
            />
          </label>
  
          <nav className="header__navbar" id="header__navbar">
            <label htmlFor="menu-toggle" className="checkbtn">
              <img
                src="./assets/icons/fontawesome-custom/xmark-light.svg"
                className="header__logo-container__icon"
                id="header__btn-menu-close"
                style={{ width: '20px' }}
                alt="icono del boton de cerrar menu"
              />
            </label>
            <ul className="header__navbar-mobile__list">
              <li className="header__navbar-mobile__list__item">
                <Link
                  to="/aboutme"
                  className={`header__navbar-mobile__link ${isActive('aboutme')}`}
                  id="aboutme_mobile_navbar_link"
                  onClick={() => handleNavbarClick('aboutme')}
                >
                  Sobre_mi
                </Link>
              </li>
              <li className="header__navbar-mobile__list__item">
                <Link
                  to="/skills"
                  className={`header__navbar-mobile__link ${isActive('skills')}`}
                  id="myskills_mobile_navbar_link"
                  onClick={() => handleNavbarClick('skills')}
                >
                  Habilidades
                </Link>
              </li>
              <li className="header__navbar-mobile__list__item">
                <Link
                  to="/projects"
                  className={`header__navbar-mobile__link ${isActive('projects')}`}
                  id="recentprojects_mobile_navbar_link"
                  onClick={() => handleNavbarClick('projects')}
                >
                  Proyectos
                </Link>
              </li>
              <li className="header__navbar-mobile__list__item">
                <Link
                  to="/links"
                  className={`header__navbar-mobile__link ${isActive('links')}`}
                  id="myLinks_mobile_navbar_link"
                  onClick={() => handleNavbarClick('links')}
                >
                  Enlaces
                </Link>
              </li>
              <li className="header__navbar-mobile__list__item">
                <Link
                  to="/contact"
                  className={`header__navbar-mobile__link ${isActive('contact')}`}
                  id="contactme_mobile_navbar_link"
                  onClick={() => handleNavbarClick('contact')}
                >
                  Contacto
                </Link>
              </li>
              <li className="header__navbar-mobile__list__item" id="social__links__navbar">
                <Link
                  to="https://github.com/hernanruscica"
                  className="footer_social_link"
                  id="github_mobile_navbar_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/icons/fontawesome-custom/github-light.svg"
                    alt="icono de github"
                    style={{ width: '30px' }}
                    className="header_navbar-mobile_social"
                  />
                </Link>
                <Link
                  to="mailto: cesarhernanruscica@gmail.com"
                  className="footer_social_link"
                  id="mail_mobile_navbar_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/icons/fontawesome-custom/envelope-light.svg"
                    alt="icono de correo electronico"
                    style={{ width: '30px' }}
                    className="header_navbar-mobile_social"
                  />
                </Link>
                <Link
                  to="https://wa.me/+541132924558?text=¡Hello+I'm+interested+with+your+work"
                  className="footer_social_link"
                  id="whatsapp_mobile_navbar_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/icons/fontawesome-custom/whatsapp-light.svg"
                    alt="icono de whatsapp"
                    style={{ width: '30px' }}
                    className="header_navbar-mobile_social"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };

export default Header