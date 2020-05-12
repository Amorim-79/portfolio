import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetails from './pages/ProjectDetails'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route path="/project/details/:tag" component={ProjectDetails} />
            </Switch>
        </BrowserRouter>
    )
}