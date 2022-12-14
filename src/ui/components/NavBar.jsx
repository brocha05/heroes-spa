import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link 
                    className={"navbar-brand"} 
                    to="/"
                >
                    Asociaciones
                </Link>
                <NavLink
                    className="nav-item nav-link" 
                    to="/marvel"
                >
                    Marvel
                </NavLink>
                <NavLink 
                    className="nav-item nav-link" 
                    to="/dc"
                >
                    DC
                </NavLink>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}