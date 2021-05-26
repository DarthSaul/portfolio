import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Footer from '../layout/Footer';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/contact'>
                    <Contact />
                </Route>
                <Route exact path='/projects'>
                    <Projects />
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default Routes;
