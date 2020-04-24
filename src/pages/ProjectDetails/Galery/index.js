import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import '../styles.css'

import imgGalery1 from '../../../assets/imgsProjects/galery/projectGalery1.jpg'
import imgGalery2 from '../../../assets/imgsProjects/galery/projectGalery2.jpg'
import imgGalery3 from '../../../assets/imgsProjects/galery/projectGalery3.jpg'

import Footer from '../../Fixed/Footer'

export default function ProjectGalery() {
    return (
        <div className="page">
            <main className="container">
                <div className="content-detail">
                    <h1>Galeria</h1>

                    <div className="box-detail">
                        <p>Projeto de uma galeria de imagens simples desenvolvido durante o Curso Web Moderno
                                 utilizando Bootstrap.</p>

                        <p>
                            <h2>LINKS:</h2>
                            <p>Repositório:</p>
                            <p>Site:</p>
                        </p>
                    </div>

                    <div className="box-images">
                        <img className="images-project" src={imgGalery1} />
                        <img className="images-project" src={imgGalery2} />
                        <img className="images-project" src={imgGalery3} />
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