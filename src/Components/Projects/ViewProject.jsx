import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from '../../Contexts/UserProvider';
import { Link } from 'react-router-dom';
import './Projects.css';
import { BASE_URL } from '../../config';
import  ProjectSlider  from '../Sliders/ProjectSlider.jsx';


// import {fetchProjectsData, fetchTagsData} from '../utils/fetchsAxios.js';
// import Card from '../Card/Card.jsx';



const ViewProject = (props) => {
    const currentUserContext = useContext(UserContext);  
    const {id, projectName} = props;
    const currentLanguage = currentUserContext.currentLanguage[0];

    const projectImages = [
        { src: `${BASE_URL}/assets/images/agenda-cac01.jpg`, alt: "captura de Agenda de contactos con node.js" },
        { src: `${BASE_URL}/assets/images/agenda-cac02.jpg`, alt: "captura de Agenda de contactos con node.js" },
        { src: `${BASE_URL}/assets/images/agenda-cac03.jpg`, alt: "captura de Agenda de contactos con node.js" },
        { src: `${BASE_URL}/assets/images/agenda-cac04.jpg`, alt: "captura de Agenda de contactos con node.js" }
      ];
    console.log(`Viendo el proyecto con id ${id} y nombre ${projectName}`);
    return (
        <>
            {/* <h1>{`Viendo proyecto con id : ${id}`}</h1> */}
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
                            <Link to="/">Home</Link>
                        </li>
                        <li key={'projects'}>
                            <Link to="/projects">{currentLanguage == 'esp' ? 'Proyectos' : 'Projects'}</Link>
                        </li>
                        <li key={'project-details'}>
                            <span aria-current="page">{projectName}</span>
                        </li>
                    </ul>
                </nav>
                <section className="project">
                    {/* PROJECT PAGE FIRST SECTION */}
                    <section className="project_first_section" id="project_first_section">
                        
                        <ProjectSlider images={projectImages}></ProjectSlider>

                        <div className="project_first_section__links">
                        <a href="https://github.com/hernanruscica/integrador_cac_alumnos" target="_blank" className="project_first_section_link" rel="noopener noreferrer">
                            Ver Código
                            <img src="../assets/icons/fontawesome-custom/arrow-up-right-from-square-light.svg" className="section__btn__icon" alt="icono de ver en nueva pestania" />
                        </a>

                        <a href="https://agenda-cac.onrender.com/" target="_blank" className="project_first_section_link" rel="noopener noreferrer">
                            Live Demo
                            <img src="../assets/icons/fontawesome-custom/arrow-up-right-from-square-light.svg" className="section__btn__icon" alt="icono de ver en nueva pestania" />
                        </a>
                        </div>
                    </section>
                    {/* PROJECT PAGE SECOND SECTION */}
                    <section className="project_second_section" id="project_second_section">
                        <h2 className="project_second_section_title">Descripción:</h2>
                        <p className="project_second_section_paragraph">
                        Aplicación estilo CRUD hecha con <strong>node.js</strong> y <strong>mysql</strong> para administrar contactos en una agenda.<br /> 
                        Este proyecto está creado como muestra de trabajo práctico integrador de los conceptos aprendidos en el curso de  
                        <a href="https://buenosaires.gob.ar/educacion/codo-codo-40" className="project_second_section_link" target="_blank" rel="noopener noreferrer"> 
                            Codo A Codo
                        </a> 
                        4.0 edición 2022. En dicho curso se enseña el Desarrollo Web Fullstack, orientado a Javascript. Se vé tanto el frontend como backend.<br /> 
                        La frontend de esta aplicación está construída con <strong>Bootstrap</strong> y prototipo hecho con <strong>Figma</strong>, antes de hacer el curso de Diseño UX/UI.
                        <a href="https://www.figma.com/file/eeiidyltU6h7gC1VL3r0wj" className="project_second_section_link" target="_blank" rel="noopener noreferrer">
                            Agenda Telefonica_@_FIGMA
                        </a>               
                        </p>
                    </section>
                    <section className="project_second_section" id="project_second_section">
                        <h2 className="project_second_section_title">Características:</h2>
                        <ul className="project_second_section_list">
                        <li className="project_second_section_list_item">Podrá registrarse en la aplicación para poder usarla y tener sus contactos personales guardados en su agenda.</li>
                        <li className="project_second_section_list_item">Restablecer la contraseña en el caso de olvido u otro motivo.</li>
                        <li className="project_second_section_list_item">Agregar un nuevo contacto, con sus correspondientes datos como: nombres, apellidos, teléfono, correo y una foto.</li>
                        <li className="project_second_section_list_item">Editar un contacto, para corregir un error o actualizar los datos.</li>
                        <li className="project_second_section_list_item">Eliminar algún contacto, si es necesario.</li>
                        <li className="project_second_section_list_item">Buscar en la agenda por nombre y/o apellido.</li>
                        </ul>
                    </section>
                    <section className="project_second_section" id="project_second_section">
                        <h2 className="project_second_section_title">Habilidades:</h2>
                        <ul className="project_second_section_list">
                        <li className="project_second_section_list_item">HTML</li>
                        <li className="project_second_section_list_item">Node.js</li>
                        <li className="project_second_section_list_item">Express.js</li>
                        <li className="project_second_section_list_item">MySQL</li>
                        <li className="project_second_section_list_item">DOM API</li>
                        <li className="project_second_section_list_item">HTML</li>
                        <li className="project_second_section_list_item">Diseño responsivo</li>
                        <li className="project_second_section_list_item">BEM</li>
                        </ul>
                    </section>
                    </section>
            </main>
        </>
    )
}

export default ViewProject;