import React, {useState, useContext} from 'react'
import './About.css';
import './Section.css';
import { UserContext } from '../../Contexts/UserProvider';
import { Breadcumb } from '../Header/Breadcumb';

export const About = () => {
  const currentUserContext = useContext(UserContext);    
  let currentLanguage = currentUserContext.currentLanguage[0];
  let currentTitle = ( currentLanguage == 'esp') ? 'Acerca de mí.' : 'About me';
  let cvBtn = (currentLanguage == 'esp') ? 'Bajar C.V.' : 'Download C.V.';

  return (
    <section className="container section aboutme-main" id="aboutme">
      <Breadcumb currentPageName='' />
      <div className="section__image__container">
        <img
          className="section_image"
          src="/assets/images/perfil-DEC2023B-small.webp"
          srcSet="/assets/images/perfil-DEC2023B-small.webp 400w"
          alt="Foto de perfil de Cesar Hernan Ruscica"
        />
        <a
          href="./assets/documentos/CV28470361.pdf"
          className="btn section_image__container-btn-download"
        >
          <img
            src="./assets/icons/fontawesome-custom/download.svg"
            className="section__btn__icon"
            alt="icono de download"
          />
          <span>{cvBtn}</span>
        </a>
      </div>
      <div className="section__sidetext__container">
        <div className="section__title__container">
          <img
            src="./assets/icons/fontawesome-custom/user.svg"
            className="section__title__container__icon"
            alt="icono de usuario"
          />
          <h2 className="section_title">{currentTitle}</h2>
        </div>
        {/* contenido cargado del blog segun el idioma */}
        <div className="section__description__container">
          <p>
            Sitio web de <strong>Cesar Hernan Ruscica</strong>.
          </p>
          <p>
            <strong>Desarrollador de software</strong>, puedo llevar adelante su proyecto web, desde la idea o necesidad hasta la puesta en
            producción. Poseo conocimientos de programación, diseño UX/UI, y estoy en <strong>constante aprendizaje</strong> de las nuevas
            tecnologías.
          </p>
          <p>
            Conocimientos en programación con @bases sólidas, adquiridos por mi paso por la universidad, en la carrera de Ingeniería
            en Informática. Los últimos tres años los dediqué a desarrollar mi <strong>perfil de desarrollador Full Stack</strong>, el cual me
            permite desarrollar aplicaciones web, que cumplan con las necesidades del cliente. Desde la toma de requerimientos hasta
            la puesta en producción.
          </p>
          <p>
            Enfocado en el <strong>stack Javascript</strong>, Node.js, React.js, etc. Aunque manejo otros lenguajes como PHP, Python, y C#. Para ver
            más, pueden ir a la sección de mis
            <a href="projects/index.html" className="aboutme-main__link">
              proyectos recientes
            </a>
          </p>
          <p>
            <strong>Conocimientos en maquetación</strong> de páginas web con CSS y Javascript, pasando del diseño al HTML. Como así también
            <strong>conocimientos avanzados en Figma.</strong>
            Algunos ejemplos de maquetación pueden ser mis trabajos en frontmentor.io enlace:
            <a
              href="https://www.frontendmentor.io/profile/hernanruscica/solutions"
              target="_blank"
              className="aboutme-main__link"
            >
              hernanruscica@frontendmentor.io
            </a>
          </p>
          <h3 className="section_title">2023</h3>
          <p>
            En <strong>Septiembre</strong>, recibí los certificados de finalización de los cursos que realicé en la primera mitad del año:
          </p>
          <ul>
            <li>
              <strong>“Especialización en React”</strong>, también de Codo a Codo.
            </li>
            <li>
              <strong>“Diseño UX/UI”</strong>, de "Codo a Codo" del Gobierno de la Ciudad Autónoma de Buenos Aires.
            </li>
          </ul>
          <p>
            En <strong>Julio</strong>, para profundizar en la tecnología Node.js, además del proyecto de la agenda, decidí hacer una <strong>API REST CRUD</strong>,
            con autenticación <strong>Json Web Token (JWT)</strong>, y control de acceso.
            <a
              href="https://github.com/hernanruscica/vicionando_series_2"
              className="aboutme-main__link"
              target="_blank"
            >
              Código en Github
            </a> Se puede probar en esta
            <a
              href="https://vicionando-series-2-api.onrender.com/"
              className="aboutme-main__link"
              target="_blank"
            >
              Live demo
            </a>
          </p>
          <h3 className="section_title">2022</h3>
          <p>
            En <strong>Diciembre</strong>, finalicé el curso de <strong>“Desarrollo Web Full Stack”</strong> del programa
            <em>“Codo a Codo 4.0”</em> de la <strong>Ciudad Autónoma de Buenos Aires</strong>.
          </p>
          <p>
            En el mismo, aprendimos el desarrollo Frontend con <strong>HTML, CSS, Javascript y
            Bootstrap</strong>. Mientras que para el backend, vemos Bases de datos <strong>mySql, servidores y Node.js</strong>.
            Para más información, dejo un enlace al programa:
            <a
              href="https://www.buenosaires.gob.ar/educacion/codocodo/el-programa"
              className="aboutme-main__link"
              target="_blank"
            >
              Programa <em>Codo a Codo</em>
            </a>
          </p>
          <p>
            <strong>Al finalizar</strong> este curso, fui capaz de <strong>realizar</strong> completamente sólo este <strong>proyecto</strong>, 
            que queda como ejemplo de los <strong>conocimientos adquiridos</strong>:
            <a href="projects/project01.html" className="aboutme-main__link">
              <em>Agenda</em> de contactos personales
            </a>
          </p>
          <h3 className="section_title">2021</h3>
          <p>
            Durante este año, realicé dos cursos de <strong>FreeCodeCamp</strong>, el primero fue <strong>“Diseño Web Responsivo”</strong> 
            y el segundo, <strong>“Algoritmos y estructuras de datos en JavaScript”</strong>.
          </p>
          <p>
            <em>Los cursos de 
            <a href="https://www.freecodecamp.org/" className="aboutme-main__link" target="_blank">
              FreeCodeCamp
            </a>                         
            , además de ser <strong>gratuitos</strong> y 100% virtuales, son de <strong>alta calidad</strong>.</em>
            Tienen un nivel de exigencia bastante alto, con lo cual se alcanza a tener conocimientos sólidos sobre cada tema.
          </p>
          <p>
            Adjunto los enlaces a los certificados de los mismos:
            <a
              href="https://www.freecodecamp.org/certification/chruscica/responsive-web-design"
              className="aboutme-main__link"
              target="_blank"
            >
              Diseño Web Responsivo
            </a><br />
            <a
              href="https://www.freecodecamp.org/certification/chruscica/javascript-algorithms-and-data-structures"
              className="aboutme-main__link"
              target="_blank"
            >
              Algoritmos y estructuras de datos en JavaScript
            </a>
          </p>
          <p>
            Como ejemplos de proyectos realizados con estos cursos, realicé estos dos proyectos:<br />
            <a
              href="https://github.com/hernanruscica/cajaRegistradora"
              className="aboutme-main__link"
              target="_blank"
            >
              Simulador de caja registradora
            </a><br />
            <a href="projects/project02.html" className="aboutme-main__link">
              juego de memoria (MemoTest)
            </a>
          </p>
          <h3 className="section_title">2019</h3>
          <p>
            Me llevo muy bien con el <strong>aprendizaje autodidacta</strong> y creo que una forma de fortalecer los conocimientos adquiridos es
            compartirlos. Con eso en mente es como también me <strong>dediqué a difundirlos</strong> a través de un proyecto llamado “Demmake”, desde
            un canal de YouTube. Donde además desarrollé mis habilidades para la <strong>creación de contenidos, diseño y edición</strong>
            de videos.
            <a href="https://www.youtube.com/@deMMake" className="aboutme-main__link" target="_blank">
              Demmake@youtube
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;