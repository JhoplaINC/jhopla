import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Navbar = () => {

    const [Location, setLocation] = useState(['/']);
    
    const location = useLocation();
    
    const closeNavbar = () => {
        setLocation([...Location, location.pathname]);
        if(Location[0][0] != location) {
            const navbar = document.getElementById('navbarSupportedContent');
            navbar.classList.remove('show');
        }
    }

    useEffect(() => {
        closeNavbar();
    }, [location]);


    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'} data-toggle="collapse">Jhopla</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    id="toggler"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-toggle="collapse" data-target=".nav-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                data-toggle="collapse" data-target=".navbar-collapse.in"
                                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} 
                                aria-current="page" to={'/'}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                data-toggle="collapse" data-target=".navbar-collapse.in"
                                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} 
                                to={'/about'}
                            >
                                Sobre mí
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                data-toggle="collapse" data-target=".navbar-collapse.in"
                                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} 
                                to={'/contact'}
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
