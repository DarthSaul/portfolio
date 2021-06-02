import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactPage from '../contact/ContactPage';
import ProjectsPage from '../projects/ProjectsPage';
import Footer from '../layout/Footer';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/contact'>
                    <ContactPage />
                </Route>
                <Route exact path='/projects'>
                    <ProjectsPage />
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default Routes;
