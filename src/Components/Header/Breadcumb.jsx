
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';



export const Breadcumb = (props) => {
    //Back Home CurrentPage

    

    const { currentPage, projectName, currentLanguage} = props;
    const navigate = useNavigate();
    const handleBack = () => {
        //console.log("back");
        navigate(-1);
    }

    const LeftArrow = () => (
        <button onClick={handleBack}>
        <img 
          src={`${BASE_URL}/assets/icons/fontawesome-custom/arrow-left.svg`} 
          alt="left arrow icon" 
          style={{ width: '16px' }} 
        />
        </button>        
      );
    const RightArrow = () => (
    <img 
        src={`${BASE_URL}/assets/icons/fontawesome-custom/arrow-left.svg`} 
        alt="right arrow icon" 
        style={{ width: '16px', transform: 'rotate(180deg)' }} 
    />
    );
    
  return (
    <>
      
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ul>
            <li key={"back"}>
                <LeftArrow />
            </li>
          <li key={"home"}>
            <Link to="/">
            <span>Home</span>
            <RightArrow />
            </Link> 
          </li>
          <li key={`${currentPage}`}>
            <Link to={`/${currentPage}`}>
              <span>{currentLanguage == "esp" ? "Proyectos" : currentPage}</span> 
              <RightArrow />
            </Link>
          </li>
          <li key={"project-details"}>
            {<span aria-current="page">{projectName}</span>}
          </li>
        </ul>
      </nav>
    </>
  );
}
