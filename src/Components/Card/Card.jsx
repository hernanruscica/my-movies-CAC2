import React from 'react';
import {dateToString} from '../utils/dateHelpers.js';

const Card = (props) => {
    const {linkUrl, id, img, title, tags, setSearchTag, date} = props;

    const dateToShow = dateToString(date);

    

  return (
    <div className="recentprojects-project" >
      <div className="recentprojects-project__img-container">
        <img
          className="recentprojects-project__img-container__img"
          src={img}
          alt="captura de Juego de memoria 'Memotest"
        />
        <a
          href={'/' + linkUrl + '/' + id}
          className="btn recentprojects-project__btn"
        >
          Ver más
        </a>
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