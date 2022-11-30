import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">Mensajería</NavLink>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/servicios">Servicios</NavLink>
                        </li>
                       {/*  <li className="nav-item">
                            <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pqr">PQR</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/nosotros">Contactenos</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/registro">Registro</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar