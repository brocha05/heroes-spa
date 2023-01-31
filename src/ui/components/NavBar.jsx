import { Link, NavLink, useNavigate } from 'react-router-dom';

export const NavBar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate("/login", {
            replace: true,
        });
    }

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
                <NavLink 
                    className="nav-item nav-link" 
                    to="/search"
                >
                    Search
                </NavLink>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                        onClick={ onLogout }
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}