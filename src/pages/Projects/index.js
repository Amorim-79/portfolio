import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import ReactLoading from 'react-loading'

import api from '../../services/api'
import './styles.css'



import Header from '../Fixed/Header'
import Footer from '../Fixed/Footer'

export default function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function loadProjects() {
            const response = await api.get('/projects')

            setProjects(response.data)
        }

        loadProjects()
    }, [])

    return (
        <div className="page">
            <>
                <Header />
                {projects.length > 0 ?
                    <main className="container">
                        {projects.map(project => (
                            <div className="box-project">
                                <img className="thumb-project" src={project.images[0]}></img>
                                <h1>{project.name}</h1>

                                <Link to={`/project/details/${project.tag}`} className="link">
                                    Mais detalhes
                        <FiArrowRight size={20} />
                                </Link>
                            </div>
                        ))}

                    </main> :
                    <ReactLoading className="loading" type={'spinningBubbles'} color={'#E02041'} height={'10%'} width={'10%'} />}

                <Footer />
            </>
        </div>
    )
}