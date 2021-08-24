import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProjectsPage from '../projects/ProjectsPage';
import AboutPage from '../about/AboutPage';
import Footer from '../layout/Footer';
import NotFound from '../layout/NotFound';
// import ContactPage from '../contact/ContactPage';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/portfolio/projects'>
                    <ProjectsPage />
                </Route>
                <Route exact path='/portfolio/about'>
                    <AboutPage />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default Routes;
