import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectFlappy from './pages/ProjectDetails/FlappyBird'
import ProjectBeTheHero from './pages/ProjectDetails/BeTheHero'
import ProjectGalery from './pages/ProjectDetails/Galery'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />

                <Route path="/project/details/flappy-bird" component={ProjectFlappy} />
                <Route path="/project/details/be-the-hero" component={ProjectBeTheHero} />
                <Route path="/project/details/galery" component={ProjectGalery} />
            </Switch>
        </BrowserRouter>
    )
}