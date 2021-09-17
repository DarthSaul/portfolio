import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import NotFound from './components/layout/NotFound';

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
                    <NotFound />
                </Switch>
                <Footer />
            </>
        </Router>
    );
};

export default App;
