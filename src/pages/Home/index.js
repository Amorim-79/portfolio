import React from 'react'
import {Link} from 'react-router-dom'

import Header from '../Fixed/Header'
import Footer from '../Fixed/Footer'

import './styles.css'
import perfilImg from '../../assets/perfil.jpg'
import linkedinImg from '../../assets/linkedin.png'
import githubImg from '../../assets/github.png'

export default function Home() {
    return(
        <div className="page">
            <React.Fragment>
                <Header />
                
                <main className="container">
                    <div className="content">
                        <img className="photo-perfil" src={perfilImg} alt="Foto de perfil"/>
                        <div className="container-info">
                            <p>ReactJs  <span className="linha">|</span>  NodeJs  <span className="linha">|</span>  ReactNativeJs</p>
                        
                            <div className="group-social">
                                <a target="_blank" href="https://github.com/Amorim-79">
                                    <img className="link-social" src={githubImg} alt="Github link"></img>
                                </a>
                                
                                <a target="_blank" href="https://www.linkedin.com/in/pedro-henrique-815013170/">
                                    <img className="link-social" src={linkedinImg} alt="Linkedin link"></img>
                                </a>
                            </div>

                        </div>
                    </div>
                </main>
                
                <Footer />
            </React.Fragment>
        </div>
    )
}