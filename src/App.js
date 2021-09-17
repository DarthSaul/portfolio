import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Routes from './components/routing/Routes';
import Navbar from './components/layout/Navbar';

import './App.css';

const App = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Switch>
                    <Route exact path={'/'}>
                        <Home />
                    </Route>
                    <Route>
                        <Routes />
                    </Route>
                </Switch>
            </>
        </Router>
    );
};

export default App;
