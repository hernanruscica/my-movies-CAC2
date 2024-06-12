import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from '../../Contexts/UserProvider';
import { ProjectsContext } from '../../Contexts/ProjectsProvider.jsx';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Projects.css';
import { BASE_URL } from '../../config';
import  ProjectSlider  from '../Sliders/ProjectSlider.jsx';
import { makeUrlFriendly } from '../utils/textHelpers.js';
import { Breadcumb } from '../Header/Breadcumb.jsx';

const ViewProject = () => {
    const currentUserContext = useContext(UserContext);      
    const currentLanguage = currentUserContext.currentLanguage[0];    
    const currentPage = currentUserContext.currentPage[0];

    const projectsCtx = useContext(ProjectsContext)
    const projects = projectsCtx.projects;        
    const { titulo } = useParams();
    const project = projects.find(p => makeUrlFriendly(p.acf.project_title) === titulo);

    const projectImages = [
        { src: project.acf.image, alt: "captura del proyecto" },
        { src: project.acf.image02, alt: "captura del proyecto" },
        { src: project.acf.image03, alt: "captura del proyecto" }        
      ];
    const [linkCode, linkDemo] = project.acf.links.split(' ');
    const projectName =  project.acf.project_title;      
    const description = project.acf.project_description;
    const features = project.acf.project_features;
    const skills = project.acf.tags;                                            
    
    return (
         <>             
             <a href="#" className="btn btn-floating top_arrow" id="top_arrow">
                 <img
                 src={`${BASE_URL}/assets/icons/fontawesome-custom/arrow-up.svg`}
                 className="top_arrow_icon"
                 alt="icono de flecha para arriba"
                 style={{ height: "35px", width: "35px" }}
                 />
             </a>             
             <main className="project-main container">                 
                 
                 <Breadcumb currentPageName = {projectName} ></Breadcumb> 

                 <section className="project">
                     {/* PROJECT PAGE FIRST SECTION */}
                     <section className="project_first_section" id="project_first_section">                        
                        <ProjectSlider images={projectImages}></ProjectSlider> 
                         <div className="project_first_section__links">
                         <Link to={linkCode} target="_blank" className="project_first_section_link" rel="noopener noreferrer">
                                {currentLanguage == 'esp' ? 'Ver código' : 'See code'}
                                <img src={`${BASE_URL}/assets/icons/fontawesome-custom/arrow-up-right-from-square-light.svg`} className="section__btn__icon" alt="icono de ver en nueva pestania" />
                         </Link>
                         <Link to={linkDemo} target="_blank" className="project_first_section_link" rel="noopener noreferrer">
                            {currentLanguage == 'esp' ? 'Ver demo' : 'See demo'}
                             <img src={`${BASE_URL}/assets/icons/fontawesome-custom/arrow-up-right-from-square-light.svg`} className="section__btn__icon" alt="icono de ver en nueva pestania" />
                         </Link>
                         </div>
                     </section>
                     {/* PROJECT PAGE SECOND SECTION */}
                     <section className="project_second_section" id="project_second_section">                         
                         <p className="project_second_section_paragraph"
                            dangerouslySetInnerHTML={{ __html: description }}             
                         >
                         </p>
                     </section>
                     <section className="project_second_section" id="project_second_section">
                        <p className="project_second_section_paragraph"
                            dangerouslySetInnerHTML={{ __html: features }}             
                         >
                         </p>
                    </section>
                    <section className="project_second_section" id="project_second_section">
                        <h2 className="project_second_section_title">Habilidades:</h2>
                        <ul className="project_second_section_list">
                        {skills.map((skill, index) => (
                            <li key={index} className="project_second_section_list_item">
                            {skill}
                            </li>
                        ))}                            
                        </ul>
                    </section>
                    </section>
            </main>
        </>        
    )
}

export default ViewProject;