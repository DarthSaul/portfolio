import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactPage from '../contact/ContactPage';
import ProjectsPage from '../projects/ProjectsPage';
import AboutPage from '../about/AboutPage';
import Footer from '../layout/Footer';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/projects'>
                    <ProjectsPage />
                </Route>
                <Route exact path='/about'>
                    <AboutPage />
                </Route>
                <Route exact path='/contact'>
                    <ContactPage />
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default Routes;
