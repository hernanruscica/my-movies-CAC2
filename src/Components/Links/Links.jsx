import React, {useContext} from 'react'
import { Breadcumb } from '../Header/Breadcumb';
import { UserContext } from '../../Contexts/UserProvider';
import './Links.css';
import { BASE_URL } from '../../config';
import { Link } from 'react-router-dom';

export const Links = () => {
  const currentUserContext = useContext(UserContext);    
  let currentLanguage = currentUserContext.currentLanguage[0];
  let currentTitle = ( currentLanguage == 'esp') ? 'Enlaces.' : 'Links';
  return (
    <main className="myskills container">
        <Breadcumb currentPageName='' />
        <div class="section__title__container"><img src={`${BASE_URL}/assets/icons/link-solid.svg`} className="myskills__section__icon" alt="icono de usuario" />
          <h2 className="section_title">{currentTitle}</h2>
        </div>  
        <div className="section__description__container">                
          <p>
              Bienvenidos, a la seccion de enlaces del sitio de  <strong>Cesar Hernan Ruscica</strong>. 
          </p>                                              
          <h3 className="section_title">Cursos gratuitos</h3>     
          <p>  
              Cursos de Codo a Codo del gobierno de la Ciudad de Buenos Aires. <br/>
              Para más información, dejo un enlace al programa:
              <Link to="https://www.buenosaires.gob.ar/educacion/codocodo/el-programa" className="aboutme-main__link" target="_blank">
                  Programa <em>Codo a Codo</em>
              </Link>
          </p>                    
          <p>
              <em>Los cursos de 
              <Link to="https://www.freecodecamp.org/" className="aboutme-main__link" target="_blank" >
              FreeCodeCamp
          </Link>                         
              , además de ser <strong>gratuitos</strong> y 100% virtuales, son de <strong>alta calidad</strong>.</em> 
              Tienen un nivel de exigencia bastante alto, con lo cual se alcanza a tener conocimientos sólidos sobre cada tema.<br/>
          </p> 
      </div>        
    </main>    
    
  )
}

export default Links;