import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import './styles.css'

import Header from '../Fixed/Header'
import Footer from '../Fixed/Footer'

export default function About() {
    return (
        <div className="page">
            <React.Fragment>
                <Header />
                <main className="container">
                    <div className="container-skills">
                        <div className="box-content">
                            <p className="text-about">
                                Meu nome é Pedro, sou um estudante de Ciência da computação cursando atualmente o 5º semestre.
                                Tenho focado meus estudos em desenvolvimento Front-end para web e mobile,
                                a cada dia buscando por novos conhecimentos e desafios para alcançar meus objetivos como desenvolvedor.
                            </p>
                        </div>

                        <div className="box-content" >
                            <div className="group-skills">
                                <h3>Conhecimentos:</h3>
                                <p className="skill">HTML5/CSS3<span className="linha">|</span>Javascript<span className="linha">|</span>Bootstrap
                                <span className="linha">|</span>jQuery<span className="linha">|</span>
                                <br/>
                                VueJS<span className="linha">|</span>SQL<span className="linha">|</span>Gulp<span className="linha">|</span>Webpack<span className="linha">|</span>MongoDB<span className="linha">|</span>
                                <br/>
                                Git / Github<span className="linha">|</span>Jest<span className="linha">|</span>NodeJs<span className="linha">|</span>.</p>
                                <h3>Principais tecnologias:</h3>
                                <p className="skill">ReactJs<span className="linha">|</span>ReactNativeJs<span className="linha">|</span>Typescript</p>
                            </div>
                        </div>
                    </div>

                    <a target="_blank" href="https://drive.google.com/open?id=1Nl6EN8Lf3RDfVanmHMIvuRqMiCT8Jmog" className="button-cv">
                        <p className="text-cv">
                            Visualize o currículo
                        </p>
                        <FiArrowRight size={35} color="#E02041" style={{ marginLeft: '15px' }} />
                    </a>
                </main>
                <Footer />
            </React.Fragment>
        </div>
    )
}