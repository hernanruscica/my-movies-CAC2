import {Link} from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    return (     
        <>
            <nav className="navbar"> 
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to = "/">Inicio</Link>                        
                    </li>                   
                    <li className="navbar__item">
                        <Link to = "/movies">Movies</Link>
                    </li>
                    <li className="navbar__item">
                    <Link to = "/profile">Profile</Link>
                    </li>
                </ul>
            </nav>   
        </>       
    )
}