import React, {useState, useEffect} from 'react';
import './Projects.css';
import {fetchProjectsData} from '../utils/fetchsAxios.js';

const Projects = () => {

  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');    
  const [searchTag, setSearchTag] = useState('');  

  useEffect(() => {
    const fetchProjects = async () => {
      try{
        const projectsData = await fetchProjectsData();
        
        setProjects(projectsData);
        setError(null);        
      }catch(error){
        setError('Error al obtener el proyecto');
        console.error('Error al obtener el proyecto', error);
      }
      setLoading(false);
    };
    fetchProjects();           
  }, []);   
  
  console.log(projects);
  // Obtener proyectos actuales
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);


  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Filtrar proyectos por el titulo, devuelvo los proyectos que tienen el titulo coincidente.
  const projectsFiltered = currentProjects.filter((project) => {
    const titleMatch = project.title.rendered.toLowerCase().includes(searchTerm.toLowerCase());
    const tagsMatch = project.acf.tags.some(tag => tag.toLowerCase().includes(searchTag));
  
    return titleMatch || tagsMatch;
  });
  


  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
//console.log(projectsFiltered);
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

      <main className="project-main container">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ul>
            <li key={'home'}>
              <a href="../index.html">Home</a>
            </li>
            <li key={'projects'}>
              <span aria-current="page">proyectos</span>
            </li>
          </ul>
        </nav>
      
      {/* Barra de busqueda, filtrado y orden */}
        <input
        type="text"
        placeholder="Buscar proyectos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder={searchTag}
        value={searchTag}       
        onChange={(e) => setSearchTag(e.target.value)} 
      />
      <section className="project">
        <div className="recentprojects__container" id="projects_container">
      {projectsFiltered.map((project) => (      
             <div className="recentprojects-project" key={project.id}>
              <div className="recentprojects-project__img-container">
                <img
                  className="recentprojects-project__img-container__img"
                  src={project.acf.image02}
                  alt="captura de Juego de memoria 'Memotest"
                />
                <a
                  href={"/projects/" + project.id}
                  className="btn recentprojects-project__btn"
                >
                  Ver más
                </a>
              </div>

              <div className="recentprojects-project-info">
                <h3 className="recentprojects-project-info__title">
                {project.acf.project_title}
                
                </h3>
                <div className="recentprojects-project-info__tags-container">

                  {project.acf.tags.map((tag, index) => (
                    <span
                    key={index} // Asegúrate de incluir una key única para cada elemento en un array renderizado
                    className="tecnology-tag"
                    onClick={() => setSearchTag(tag)} // Establece el estado searchTag al nombre del tag al hacer clic
                  >
                    {tag}
                  </span>
                  ))
                  }

                </div>
              </div>
            </div>               
      ))}
          </div>
        </section>  
      </main>
    </>
  );
}

export default Projects