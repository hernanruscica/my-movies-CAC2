import React, {useState, useEffect} from 'react';
import './Projects.css';
import {fetchProjectsData, fetchTagsData} from '../utils/fetchsAxios.js';

const Projects = () => {

  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');    
  const [searchTag, setSearchTag] = useState('');  
  const [tags, setTags] = useState([]);
  const [searchOrder, setSearchOrder] = useState('oldest');

  useEffect(() => {
    const fetchProjects = async () => {
      try{
        const projectsData = await fetchProjectsData();        
        setProjects(projectsData);
        const tags = await fetchTagsData();
        setTags(tags);
        setError(null);        
      }catch(error){
        setError('Error al obtener el proyecto');
        console.error('Error al obtener el proyecto', error);
      }
      setLoading(false);
    };
    
    fetchProjects();    
          
  }, []);   
  
  
  //console.log(projects);
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


  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
//console.log(projectsSorted);
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
      
      
      <section className="project">

        {/* Barra de busqueda, filtrado y orden */}
        <div className="project__searchbar__container">
          <input className="project__searchbar__container__input_text"
            type="text"
            placeholder="Buscar proyectos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="project__searchbar__container__input_combo"
            value={searchTag}
            onChange={(e) => setSearchTag(e.target.value)}
          >            
            <option value="">Etiqueta: Ninguna</option>
            {tags.map((tag) => (
              <option key={tag.id} value={tag.name}>{tag.name}</option>
            ))}
          </select>
          <div>
            <label>
              <input className="project__searchbar__container__input_checkbox"
                type="checkbox"
                value="newest"
                checked={searchOrder === 'newest'} // Verifica si la opción más reciente está seleccionada
                onChange={(e) => setSearchOrder(e.target.value)}
              />
              Más recientes
            </label>
            <label>
              <input className="project__searchbar__container__input_checkbox"
                type="checkbox"
                value="oldest"
                checked={searchOrder === 'oldest'} // Verifica si la opción más antigua está seleccionada
                onChange={(e) => setSearchOrder(e.target.value)}
              />
              Más antiguos
            </label>
          </div>

        </div>
        
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