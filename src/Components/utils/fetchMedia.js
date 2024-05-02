import axios from "axios";

export const  fetchMedia = async (idImage) => {
    try{
      const response = await axios.get(`https://ruscica-code.ar/wordpress_ruscicacodear/wp-json/wp/v2/media/34`);
      //const mediaData = await response.json();
      return response;      
    }catch(error){      
      console.error('Error al obtener el contenido multimedia', error);
      return null;
    }    
  };
