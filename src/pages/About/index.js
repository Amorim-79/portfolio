import React from 'react'
import {FiArrowRight} from 'react-icons/fi'

import './styles.css'

import Header from '../Fixed/Header'
import Footer from '../Fixed/Footer'

export default function About() {
    return(
        <div className="page">
            <React.Fragment>
                <Header />
                <main className="container">
                    <div className="box-content">
                        <p className="text-about">
                        Meu nome é Pedro, sou um estudante de Ciência da computação cursando atualmente o 5º semestre.
                         Tenho focado meus estudos em desenvolvimento fullstack para web e mobile,
                         a cada dia buscando por novos conhecimentos e desafios para alcançar meus objetivos como desenvolvedor.
                        </p>
                    </div>

                    <div className="box-content" style={{marginTop: '300px'}} >
                        <p className="group-skills">
                            <p className="skill">Conhecimentos: <br/>
                                HTML5/CSS3 <span className="linha">|</span> Javascript <span className="linha">|</span> Java.</p>
                            <p className="skill">Principais tecnologias: <br/>
                                ReactJs <span className="linha">|</span> NodeJs <span className="linha">|</span> ReactNativeJs <span className="linha">|</span> Git / Github</p>
                            <p className="skill">Outras tecnologias: <br/>
                                Bootstrap <span className="linha">|</span> jQuery <span className="linha">|</span> Vue JS <span className="linha">|</span> MySQL <span className="linha">|</span> Gulp <span className="linha">|</span> Webpack.</p>
                        </p>
                    </div>

                    <a target="_blank" href="https://drive.google.com/open?id=13l9jYUq-ySN4fNqI7b00LCHCW0NZlVEz" className="button-download">
                        <p className="text-download">
                        Visualize aqui o currículo
                        <FiArrowRight size={35} style={{marginLeft: '15px'}} />
                        </p>
                    </a>
                </main>
                <Footer />
            </React.Fragment>
        </div>
    )
}