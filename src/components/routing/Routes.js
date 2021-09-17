import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutPage from '../about/AboutPage';
import Footer from '../layout/Footer';
import NotFound from '../layout/NotFound';

const Routes = () => {
    return (
        <>
            <Switch>
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
