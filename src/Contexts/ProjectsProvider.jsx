import React, {createContext, useState, useEffect} from "react";
import { fetchProjectsData, fetchTagsData } from "../Components/utils/fetchsAxios";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children  }) => {
    const [projects, setProjects] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
        try {
            const dataProjects = await fetchProjectsData()            
            setProjects(dataProjects);
            const dataTags = await fetchTagsData();
            setTags(dataTags);
        } catch (error) {
            console.log("Error al cargar los proyectos", error);            
        } finally {
            setLoading(false);    
        }   
        };     
        fetchDataFromAPI();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
      }

    const contextValue = {
        projects: projects,
        tags: tags
    }

    return (
        <ProjectsContext.Provider value={contextValue}>
            {children}
        </ProjectsContext.Provider>
    )
}