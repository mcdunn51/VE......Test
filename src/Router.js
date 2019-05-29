import React from 'react';
import { Route } from 'react-router-dom';

import PhotoViewer from './Components/PhotoViewer'
import NewUser from './Components/NewUser'
import Dashboard from './Components/Dashboard'

const Router = () => {
    return (
        <div>
            <Route exact path="/" component={PhotoViewer} />
            <Route exact path="/newuser" component={NewUser} />
            <Route exact path="/dashboard" component={Dashboard} />
        </div>
    )
}

export default Router; 
