import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import '../styles.css'

import Footer from '../../Fixed/Footer'

import imgBeTheHero from '../../../assets/imgsProjects/be-the-hero/betheherothumb.png'

export default function ProjectBeTheHero() {
    return (
        <div className="page">
            <main className="container">
                <div className="content-detail">
                    <h1>Be The Hero</h1>

                    <div className="box-detail">
                        <p>O Be The Hero é um meio de conectar ONGS que necessitam de algum tipo
                        de ajuda a pessoas que podem contribuir. Esse projeto foi
                        desenvolvimento durante a Semana OmniStack 11.0, um evento
                        da Rocketseat, onde construimos uma aplicação completa com
                        Node.js no back-end, ReactJS no front-end e React Native no mobile.
                            </p>

                        <p>
                            <h2>LINKS:</h2>
                            <p>Repositório:</p>
                            <p>Site:</p>
                        </p>

                    </div>

                    <div className="box-images">
                        <img className="images-project" src={imgBeTheHero} />
                    </div>

                    <Link to="/projects" className="link">
                        <FiArrowLeft />
                            Voltar para todos os projetos
                        </Link>
                </div>
            </main>
            <Footer />
        </div>
    )
}