import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';

import './App.css';

const App = () => {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path='/'>
                        <Landing />
                    </Route>
                </Switch>
            </Fragment>
        </Router>
    );
};

export default App;
