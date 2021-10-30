import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';


export const Navbar = () => {

    
    const { token, setToken } = useContext(AuthContext);  
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    return (
        <>
        {
            (!!token) && 
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    
                    <Link
                        className="navbar-brand" 
                        to="/"
                    >
                        HeroesApp
                    </Link>

                    <div className="navbar-collapse">
                        <div className="navbar-nav">
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                exact
                                to="/search"
                            >
                                Search
                            </NavLink>
                        </div>
                    </div>

                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto">

                            <button   
                                className="btn btn-outline-danger" 
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </ul>
                    </div>
                </nav>
            
        }
        </>
    )
}
