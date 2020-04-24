import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import '../styles.css'

import imgFlappy from '../../../assets/imgsProjects/flappy/projectFlappy.jpg'

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
                            <p>Repositório:</p>
                            <p>Site:</p>
                        </p>
                    </div>

                    <div className="box-images">
                        <img className="images-project" src={imgFlappy} />
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