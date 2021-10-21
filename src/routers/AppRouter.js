import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginScreen } from '../auth/LoginScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { Navbar } from '../components/navBar/Navbar';
import { SearchScreen } from '../components/search/SearchScreen';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path='/login' component={LoginScreen}/>
                        <Route exact path='/' component={HomeScreen}/>
                        <Route exact path='/search' component={SearchScreen}/>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </>
    )
}
