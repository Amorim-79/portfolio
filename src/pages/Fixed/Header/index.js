import React from 'react'

import './styles.css'
import logoImg from '../../../assets/newLogoAmorim.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <div className="header-container">
            <Link to="/">
                <img className="logo-style" src={logoImg} />
            </Link>
            
            <nav>
                <Link className="link-nav" to="/about">
                    Sobre
                </Link>
                <Link className="link-nav" to="/projects">
                    Projetos
                </Link>
                <Link className="link-nav" to="/contact">
                    Contato
                </Link>
            </nav>
        </div>
    )
}