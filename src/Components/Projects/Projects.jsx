import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Projects.css';
import {fetchMedia} from '../utils/fetchMedia.js';

const Projects = () => {

  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');  

  useEffect(() => {
    const fetchProjects = async () => {
      try{
        const response = await axios.get('https://ruscica-code.ar/wordpress_ruscicacodear/wp-json/wp/v2/project');

        const responseTags = await fetch('https://ruscica-code.ar/wordpress_ruscicacodear/wp-json/wp/v2/tags');
        const tagsData = await responseTags.json();
        const tagsDataFiltered = tagsData.map((tagsData) => {return {id: tagsData.id, name: tagsData.name}});
        //console.log(tagsDataFiltered);

        const updatedProjects = await Promise.all(
          response.data.map(async (project) => {
            if (project.acf ) {
              const {image, image02, image03 } = project.acf; 
              const imageDataResponse = await axios.get(`https://ruscica-code.ar/wordpress_ruscicacodear/wp-json/wp/v2/media/${image}`);
              if (imageDataResponse.data) project.acf.image = imageDataResponse.data.source_url;                              
              const imageDataResponse02 = await axios.get(`https://ruscica-code.ar/wordpress_ruscicacodear/wp-json/wp/v2/media/${image02}`);
              if (imageDataResponse02.data) project.acf.image02 = imageDataResponse02.data.source_url;                              
              const imageDataResponse03 = await axios.get(`https://ruscica-code.ar/wordpress_ruscicacodear/wp-json/wp/v2/media/${image03}`);
              if (imageDataResponse03.data) project.acf.image03 = imageDataResponse03.data.source_url;
              

              // Reemplazar IDs de tags por nombres
              const tagNames = project.acf.tags.map(tagId => {
                const tag = tagsDataFiltered.find(tag => tag.id === tagId);
                return tag ? tag.name : null; // Si el tag no se encuentra, retorna null
              });

              project.acf.tags = tagNames.filter(tagName => tagName !== null); // Filtrar tags null (no encontrados)

            }
            return project;
          }));
        setProjects(updatedProjects);
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
  const projectsFiltered = currentProjects.filter((project) => (
     project.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()))
  );


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
      <section className="project">
        <div className="recentprojects__container" id="projects_container">
      {projectsFiltered.map((project) => (      
             <div className="recentprojects-project" key={project.id}>
              <div className="recentprojects-project__img-container">
                <img
                  className="recentprojects-project__img-container__img"
                  src={project.acf.image}
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

                  {project.acf.tags.map((tag) => (
                    <span className="tecnology-tag">{tag}</span>
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