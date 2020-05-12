import React, { useState } from 'react'

import './styles.css'
import logoImg from '../../../assets/newLogoAmorim.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    const [toggle, setToggle] = useState("")
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

    return (
        <div className="header-container">
            <Link to="/">
                <img className="logo-style" src={logoImg} />
            </Link>

            <div className={toggle} onClick={menuToggle}>
                <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
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
        </div>
    )
}