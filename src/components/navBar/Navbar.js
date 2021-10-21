import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {

    const handleLogout = () => {

    }


    
    return (
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
                        to="/"
                    >
                        Home
                    </NavLink>


                    
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


                    {/* <span className="nav-item nav-link text-info"  >
                        {name}
                    </span> */}
                    <button 
                        
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
