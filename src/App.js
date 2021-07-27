import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Routes from './components/routing/Routes';

import ScrollToTop from './components/layout/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <>
                <ScrollToTop />
                <Switch>
                    <Route exact path={['/', 'portfolio']}>
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
