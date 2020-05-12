import React, { useState } from 'react'

import './styles.css'
import logoImg from '../../../assets/newLogoAmorim.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    const [toggle, setToggle] = useState("menu-section")
    const [show, setShow] = useState(false)

    function menuToggle() {

        if(show) {
            setToggle("menu-section")
            document.body.style.overflow = "initial"
            setShow(false)
        }else {
            setToggle("menu-section on")
            document.body.style.overflow = "hidden"
            setShow(true)
        }
    }

    function clearToggle() {
        document.body.style.overflow = "initial"
    }

    return (
        <div className="header-container">
            <Link to="/">
                <img className="logo-style" src={logoImg} />
            </Link>

            <div className={toggle}>
                <div className="menu-toggle" onClick={menuToggle}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <nav>
                    <Link className="link-nav" to="/about" onClick={clearToggle}>
                        Sobre
                    </Link>
                    <Link className="link-nav" to="/projects" onClick={clearToggle}>
                        Projetos
                    </Link>
                    <Link className="link-nav" to="/contact" onClick={clearToggle}>
                        Contato
                    </Link>
                </nav>
            </div>
        </div>
    )
}