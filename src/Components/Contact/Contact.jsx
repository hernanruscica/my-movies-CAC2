import React, {useContext} from 'react'
import { Breadcumb } from '../Header/Breadcumb';
import { UserContext } from '../../Contexts/UserProvider';
import './Contact.css';
import { BASE_URL } from '../../config';
//import { Link } from 'react-router-dom';

const Contact = () => {
  const currentUserContext = useContext(UserContext);    
  let currentLanguage = currentUserContext.currentLanguage[0];
  let currentTitle = ( currentLanguage == 'esp') ? 'Contactarme.' : 'Contact me';
  return (
    <main className="myskills container">
      <Breadcumb currentPageName='' />
        <div className="section__title__container">
          <img src={`${BASE_URL}/assets/icons/fontawesome-custom/envelope.svg`} className="myskills__section__icon" alt="icono de usuario" />
          <h2 className="section_title">{currentTitle}</h2>
        </div>  
        <form action="https://formspree.io/f/mlevdjdk" method="post" className="contactme-form">
            
            <div className="contactme-form__input">
                <label htmlFor="contactme_name" className="contactme-form__input__label">Nombre:</label>
                <input type="text" name="name" className="contactme-form__input__input" id="contactme_name" placeholder="Ingrese su nombre" required />
            </div>

            <div className="contactme-form__input">
                <label htmlFor="contactme_email" className="contactme-form__input__label">Email:</label>
                <input type="email" name="email" className="contactme-form__input__input" id="contactme_email" placeholder="Ingrese su email" pattern="\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b" required />
            </div>

            <div className="contactme-form__input">
                <label htmlFor="contactme_message" className="contactme-form__input__label">Mensaje:</label>
                <textarea name="message" className="contactme-form__input__message" required id="contactme_message" placeholder="Write your message" cols="200" rows="20" wrap="hard" >
                </textarea> 
            </div>
            <div className="contactme-form__input">
                <button className="btn section__btn">  
                  <span>Enviar mensaje</span>                  
                  <img src={`${BASE_URL}/assets/icons/fontawesome-custom/paper-plane.svg`} 
                    className="section__btn__icon" 
                    style={{width: 20, height: 20}} alt="icono de avion de papel" />
                    {/* style={{marginRight: spacing + 'em'}} */}
                </button>
            </div>            
        </form>
    </main>
  )
}

export default Contact