import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Projects.css';

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
        setProjects(response.data);
        setError(null);        
      }catch(error){
        setError('Error al obtener el proyecto');
        console.error('Error al obtener el proyecto', error);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  // Obtener proyectos actuales
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

console.log(currentProjects);
  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filtrar proyectos
  // const filteredProjects = currentProjects.filter((project) =>
  //   project.acf.project_title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
console.log(projects);
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
      {currentProjects.map((project) => (      
            <div className="recentprojects-project"  key={project.id}>
              <div className="recentprojects-project__img-container">
                <img
                  className="recentprojects-project__img-container__img"
                  src="/assets/images/memotest01.jpg"
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
                  <span className="tecnology-tag">DOM</span>
                  <span className="tecnology-tag">HTML</span>
                  <span className="tecnology-tag">CSS</span>
                  <span className="tecnology-tag">JAVASCRIPT</span>
                  <span className="tecnology-tag">setTimeOut</span>
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