import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';
import Contact from './components/contact/Contact';

import './App.css';

const App = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path='/'>
                        <Landing />
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                </Switch>
            </>
        </Router>
    );
};

export default App;
