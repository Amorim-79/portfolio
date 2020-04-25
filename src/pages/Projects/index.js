import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'

import './styles.css'

import imgFlappy from '../../assets/imgsProjects/flappy/projectFlappy1.jpg'
import imgBeTheHero from '../../assets/imgsProjects/be-the-hero/betheherothumb.png'
import imgGalery from '../../assets/imgsProjects/galery/projectGalery1.jpg'

import Header from '../Fixed/Header'
import Footer from '../Fixed/Footer'

export default function Projects() {
    return(
        <div className="page">
            <React.Fragment>
                <Header />
                <main className="container">
                    <div className="box-project">
                        <img className="thumb-project" src={imgFlappy}></img>
                        <h1>Flappy Bird</h1>

                        <Link to="/project/details/flappy-bird" className="link">
                        Mais detalhes
                        <FiArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="box-project">
                    <img className="thumb-project" src={imgBeTheHero}></img>
                        <h1>Be The Hero</h1>

                        <Link to="/project/details/be-the-hero" className="link">
                        Mais detalhes
                        <FiArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="box-project">
                    <img className="thumb-project" src={imgGalery}></img>
                        <h1>Galeria</h1>

                        <Link to="/project/details/galery" className="link">
                        Mais detalhes
                        <FiArrowRight size={20} />
                        </Link>
                    </div>

                </main>
                <Footer />
            </React.Fragment>
        </div>
    )
}