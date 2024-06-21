import React, {useState, useEffect, useContext} from 'react';
import './Projects.css';
import Card from '../Card/Card.jsx';
import { ProjectsContext } from '../../Contexts/ProjectsProvider.jsx';
import { Breadcumb } from '../Header/Breadcumb.jsx';
import { BASE_URL } from '../../config';
import { UserContext } from '../../Contexts/UserProvider';

const Projects = () => {

 
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');    
  const [searchTag, setSearchTag] = useState('');   
  const [searchOrder, setSearchOrder] = useState('oldest');
  
  const projectsCtx = useContext(ProjectsContext)
  const projects = projectsCtx.projects;
  const tags = projectsCtx.tags;

  const currentUserContext = useContext(UserContext);    
  let currentLanguage = currentUserContext.currentLanguage[0];
  let currentTitle = ( currentLanguage == 'esp') ? 'Proyectos.' : 'Projects';
  
  // Obtener proyectos actuales
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;

  //Filtrar proyectos por el titulo, devuelvo los proyectos que tienen el titulo coincidente.
  const projectsFiltered = projects.filter((project) => {
    const titleMatch = project.title.rendered.toLowerCase().includes(searchTerm.toLowerCase());
    const tagsMatch = project.acf.tags.some(tag => tag.toLowerCase().includes(searchTag));
    
    if (searchTerm == '' && searchTag != '') return titleMatch && tagsMatch;
    if (searchTerm == '' && searchTag == '') return titleMatch || tagsMatch;
    if (searchTerm != '' && searchTag == '') return titleMatch && tagsMatch;
    if (searchTerm != '' && searchTag != '') return titleMatch && tagsMatch;

  });

  projectsFiltered.sort((a, b) => {
    // Convertir las fechas a objetos Date para compararlas
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    // Compara las fechas y devuelve -1 si dateA es anterior a dateB, 1 si es posterior, o 0 si son iguales
    return (searchOrder == 'oldest') ? dateA - dateB : dateB - dateA;
  });

  const currentProjects = projectsFiltered.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages =  Math.ceil(projectsFiltered.length / projectsPerPage);

  
  return (    
    <section className="container section project">
      <Breadcumb currentPageName="" />
      <div className="section__sidetext__container">
        <div className="section__title__container">
          <img
            src={`${BASE_URL}/assets/icons/tactic_FILL0_wght300_GRAD0_opsz24.svg`}
            className="section__title__container__icon"
            alt="icono de proyecto"
          />
          <h2 className="section_title">{currentTitle}</h2>
        </div>
        <section className="section__description__container">
          {/*searchBar, filter, order and pagination STARTS */}
          <div className="project__searchbar__container">
            <input
              className="project__searchbar__container__input_text"
              id='searchProjectInput'
              type="text"
              placeholder="Buscar proyectos..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <select
              className="project__searchbar__container__input_combo"
              id='selectTagInput'
              value={searchTag}
              onChange={(e) => {
                setSearchTag(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">Etiqueta: Ninguna</option>
              {tags.map((tag) => (
                <option key={tag.id} value={tag.name}>
                  {tag.name}
                </option>
              ))}
            </select>
            <div className='project__searchbar__container__order__container'>
              <label className={`project__searchbar__container__order__container__btn ${searchOrder === 'newest' ? 'project__searchbar__container__order__container__btn--selected' : ''}`}>
                <input
                  className="project__searchbar__container__input_checkbox"
                  id='checkOrderNewerInput'
                  type="checkbox"
                  value="newest"
                  checked={searchOrder === "newest"} // Verifica si la opción más reciente está seleccionada
                  onChange={(e) => {
                    setSearchOrder(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                <img
                  src={`${BASE_URL}/assets/icons/arrow-down-wide-short-solid.svg`}
                  className="project__searchbar__container__order__container__icon"
                  alt="icono de orden descendente"
                /> <span>Nuevos</span>
              </label>
              <label className={`project__searchbar__container__order__container__btn ${searchOrder === 'oldest' ? 'project__searchbar__container__order__container__btn--selected' : ''}`}>
                <input
                  className="project__searchbar__container__input_checkbox"
                  id='checkOrderOlderInput'
                  type="checkbox"
                  value="oldest"
                  checked={searchOrder === "oldest"} // Verifica si la opción más antigua está seleccionada
                  onChange={(e) => setSearchOrder(e.target.value)}
                />
                <img
                  src={`${BASE_URL}/assets/icons/arrow-down-short-wide-solid.svg`}
                  className="project__searchbar__container__order__container__icon"
                  alt="icono de orden descendente"
                /> 
                <span>Antiguos</span> 
              </label>
            </div>
            <div className='project__searchbar__container__order__container'>
              <div>Paginas:</div> 
              {/* <span>Página actual: {currentPage}</span> */}
              <div className='project__searchbar__container__page-container'>
                {Array.from({ length: totalPages }, (_, index) => {
                  return (
                    <span
                      key={index + 1}
                      style={{
                        fontWeight: currentPage === index + 1 ? "bold" : "normal",
                        textDecoration:
                          currentPage === index + 1 ? "none" : "underline",
                        cursor: currentPage === index + 1 ? "default" : "pointer",
                        fontSize: currentPage === index + 1 ? "1.8em" : "1.6em", // Tamaño mayor para la página actual
                      }}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          {/*searchBar, filter, order and pagination ENDS */}

          <div className="recentprojects__container" id="projects_container">
            {currentProjects.map((project, index) => (
              //linkUrl, id, img, title, tags, setSearchTag, date
              <div key={index}>
                <Card
                  linkUrl="projects"
                  id={project.id}
                  img={project.acf.image02}
                  title={project.acf.project_title}
                  tags={project.acf.tags}
                  setSearchTag={setSearchTag}
                  date={project.date}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>    
  );
}

export default Projects