import axios from "axios";

const API_URL = 'https://ruscica-code.ar/wordpress_ruscicacodear/wp-json/wp/v2';

export const  fetchMediaData = async (idImage) => {
    try{
      const response = await axios.get(`${API_URL}/media/${idImage}`);      
      return (response.data) ? response.data : null;      
    }catch(error){      
      console.error('Error al obtener el contenido multimedia', error);
      return null;
    }    
  };

  export const fetchTagsData = async () => {
    try {
      const response = await axios.get(`${API_URL}/tags`);
      return response.data.map(tag => ({ id: tag.id, name: tag.name }));
    } catch (error) {
      console.log('Error al obtener las etiquetas', error);
      //throw new Error('Error al obtener las etiquetas');
      return null;
    }
  };

  export const fetchProjectsData = async () => {
    try {
      const projectsData = await axios.get(`${API_URL}/project`);     
      const tags = await fetchTagsData();        
      const updatedProjects = await Promise.all(
        projectsData.data.map(async (project) => {
          if (project.acf ) {
            const {image, image02, image03 } = project.acf; 
            const imageDataResponse = await fetchMediaData(image);
            project.acf.image = imageDataResponse.source_url;                              
            const imageDataResponse02 = await fetchMediaData(image02);
            project.acf.image02 = imageDataResponse02.source_url;                              
            const imageDataResponse03 = await fetchMediaData(image03);
            project.acf.image03 = imageDataResponse03.source_url;              

            // Reemplazar IDs de tags por nombres
            const tagNames = project.acf.tags.map(tagId => {
              const tag = tags.find(tag => tag.id === tagId);
              return tag ? tag.name : null; // Si el tag no se encuentra, retorna null
            });
            project.acf.tags = tagNames.filter(tagName => tagName !== null); // Filtrar tags null (no encontrados)
          }
          return project;
          })
      );
      return (updatedProjects) ? updatedProjects : null;
    } catch (error) {
      console.error('Error al obtener los proyectos', error);
      //throw new Error('Error al obtener los proyectos');
      return null;
    }
  };

