import React, {useState, useContext} from 'react'
import './myskills.css';
import './Section.css';
import { UserContext } from '../../Contexts/UserProvider';

const Skills = () => {
  const currentUserContext = useContext(UserContext);    
  let currentLanguage = currentUserContext.currentLanguage[0];
  let currentTitle = ( currentLanguage == 'esp') ? 'Habilidades.' : 'Skills';
  return (
    <>
      <a href="#" className="btn btn-floating top_arrow" id="top_arrow">
        <img
          src="../assets/icons/fontawesome-custom/arrow-up.svg"
          className="top_arrow_icon"
          alt="icono de flecha para arriba"
          style={{ height: "35px", width: "35px" }}
        />
      </a>

      <a
        href="javascript:window.history.back();"
        className="btn btn-floating left_arrow"
        id="left_arrow"
      >
        <img
          src="../assets/icons/fontawesome-custom/arrow-left.svg"
          className="left_arrow_icon"
          alt="icono de flecha para la izquierda"
          style={{ height: "35px", width: "35px" }}
        />
      </a>

      <main className="myskills container">
        <nav aria-label="Breadcrumb" className="breadcrumb">
            <ul>
              <li key={'home'}>
                <a href="/">Home</a>
              </li>
              <li key={'projects'}>
                <span aria-current="page">{currentTitle}</span>
              </li>
            </ul>
        </nav>
        <div className="myskills_showcase">
          <img
            src="./assets/icons/html-5-svgrepo-com.svg"
            className="icon-img-format"
            style={{ width: "50px", height: "50px" }}
            alt="logo de HTML5"
            loading="lazy"
          />
          <img
            src="./assets/icons/css-3-svgrepo-com.svg"
            className="icon-img-format"
            style={{ width: "50px", height: "50px" }}
            alt="logo de CSS3"
            loading="lazy"
          />
          <img
            src="./assets/icons/javascript-svgrepo-com.svg"
            className="icon-img-format"
            style={{ width: "50px", height: "50px" }}
            alt="logo de Javascript"
            loading="lazy"
          />
          <img
            src="./assets/icons/git-icon-svgrepo-com.svg"
            className="icon-img-format"
            style={{ width: "50px", height: "50px" }}
            alt="logo de github"
            loading="lazy"
          />
          <img
            src="./assets/icons/Node.js_logo.svg"
            className="icon-img-format"
            style={{ width: "50px", height: "50px" }}
            alt="logo de node.js"
            loading="lazy"
          />
          <img
            src="./assets/icons/mysql-svgrepo-com.svg"
            className="icon-img-format"
            style={{ width: "50px", height: "50px" }}
            alt="logo de mySql"
            loading="lazy"
          />
          <img
            src="./assets/icons/React-icon.svg"
            className="icon-img-format"
            style={{ width: "50px", height: "50px" }}
            alt="logo de React"
            loading="lazy"
          />
        </div>

        <section className="myskills__section" id="skills">
          <div className="section__sidetext__container">
            <div className="section__title__container">
              <img
                src="./assets/icons/neurology_FILL0_wght300_GRAD0_opsz24.svg"
                className="myskills__section__icon"
                alt="icono de usuario"
              />
              <h2 className="section_title">{currentTitle}</h2>
            </div>
          </div>

          <div className="section__description__container">
            <p>
              Habilidades y tecnologías que manejo y que he ido desarrollando a través del tiempo!
            </p>
            <h3 className="section_title">Node.js</h3>
            <p>
              En 2023 finalicé el curso de "Desarrollo FullStack con Javascript" del Gobierno de la Ciudad de Buenos Aires, en el cual vemos Node.js y Bootstrap, entre otras tecnologías.<br />
              Como resultado de dicho curso, pude realizar por mi cuenta y por fuera del programa, un sistema de ABM, que es una agenda de contactos personales:
              <a href="./projects/project01.html" className="aboutme-main__link" target="_blank">
                Agenda de contactos personales
              </a>
            </p>
          </div>



        </section>
      </ main>    
    
  </>
  )
}

export default Skills