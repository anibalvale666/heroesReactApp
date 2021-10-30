import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { LoginScreen } from '../auth/LoginScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { Navbar } from '../components/navBar/Navbar';
import { SearchScreen } from '../components/search/SearchScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    
    const { token } = useContext(AuthContext);  


    return (
        <>
            <Router>
                <div>
                    <Navbar />

                </div>
                <div>
                    <Switch>
                        <PublicRoute
                            exact 
                            path='/login' 
                            component={LoginScreen}
                            isAuthenticated = {!!token}    
                        />
                        <PrivateRoute 
                            exact 
                            path='/' 
                            component={HomeScreen}
                            isAuthenticated = {!!token}    
                        />
                        <PrivateRoute 
                            exact 
                            path='/search' 
                            component={SearchScreen}
                            isAuthenticated = {!!token}    
                        />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </>
    )
}
