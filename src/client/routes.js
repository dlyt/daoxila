import React from 'react';
import Home from './containers/Home';
import { Router,Route } from 'react-router';
import createHistory from 'history/createHashHistory';

const history = createHistory();

export default (
    <div>
        <Router history={history}>
            <Route exact path='/' component={Home} />
        </Router>
    </div>
)
