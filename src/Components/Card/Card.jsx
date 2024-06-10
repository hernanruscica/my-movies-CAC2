import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {dateToString} from '../utils/dateHelpers.js';

import {makeUrlFriendly} from '../utils/textHelpers.js'
import { UserContext } from '../../Contexts/UserProvider';


const Card = (props) => {
    const {linkUrl, id, img, title, tags, setSearchTag, date} = props;

    const dateToShow = dateToString(date);

    const currentUserContext = useContext(UserContext);          
    //const currentPage = currentUserContext.currentPage[0];
    const setCurrentPage = currentUserContext.currentPage[1];

    

  return (
    <div className="recentprojects-project" >
      <div className="recentprojects-project__img-container">
        <img
          className="recentprojects-project__img-container__img"
          src={img}
          alt="captura de Juego de memoria 'Memotest"
        />
        <Link
          to={'/' + linkUrl + '/' + makeUrlFriendly(title)}
          className="btn recentprojects-project__btn"
          onClick={() => setCurrentPage("projects")} 
        >
          Ver más
        </Link>
      </div>

      <div className="recentprojects-project-info">
        <h3 className="recentprojects-project-info__title">
          {title}
        </h3>
        <div className="recentprojects-project-info__tags-container">
          {tags.map((tag, index) => (
            <span
              key={index} 
              className="tecnology-tag"
              onClick={() => setSearchTag(tag)} 
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
            <span>Publicado el </span>{dateToShow}
        </div>
      </div>
    </div>
    //  card ends
  );
};

export default Card;