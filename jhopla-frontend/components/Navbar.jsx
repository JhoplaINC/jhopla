import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}>Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} aria-current="page" to={'/'}>Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to={'/about'}>Sobre mí</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to={'/contact'}>Contacto</NavLink>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Perfil
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to={'/login'}>Iniciar sesión</Link></li>
                            <li><Link className="dropdown-item" to={'/register'}>Registrarse</Link></li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
    )
}
