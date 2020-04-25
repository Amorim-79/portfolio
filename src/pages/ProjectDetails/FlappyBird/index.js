import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import '../styles.css'

import imgFlappy1 from '../../../assets/imgsProjects/flappy/projectFlappy1.jpg'
import imgFlappy2 from '../../../assets/imgsProjects/flappy/projectFlappy2.jpg'
import imgFlappy3 from '../../../assets/imgsProjects/flappy/projectFlappy3.jpg'

import Footer from '../../Fixed/Footer'

export default function ProjectFlappy() {
    return (
        <div className="page">
            <main className="container">
                <div className="content-detail">
                    <h1>Flappy Bird</h1>

                    <div className="box-detail">
                        <p>Projeto de um jogo simples desenvolvido durante o Curso Web Moderno
                                 utilizando apenas HTML/CSS e Javascript puro.</p>

                        <p>
                            <h2>LINKS:</h2>
                            <p>Repositório:<a target="_blank" href="https://github.com/Amorim-79/flappy-bird">
                                https://github.com/Amorim-79/flappy-bird
                                </a>
                            </p>
                            <p>Site:<a target="_blank" href="https://amorim-79.github.io/flappy-bird/Flappy-Bird/index.html">
                               https://amorim-79.github.io/flappy-bird/Flappy-Bird/index.html
                                </a>
                            </p>
                        </p>
                    </div>

                    <div className="box-images">
                        <img className="images-project" src={imgFlappy1} />
                        <img className="images-project" src={imgFlappy2} />
                        <img className="images-project" src={imgFlappy3} />
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