import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import Footer from '../Fixed/Footer'

export default function ProjectBeTheHero() {
    const [project, setProject] = useState('')
    const [images, setImages] = useState([])
    const { tag } = useParams()

    useEffect(() => {
        async function loadProject() {

            const response = await api.get(`/projects/${tag}`)

            setProject(response.data)
            setImages(response.data.images)
        }

        loadProject()
    }, [])

    return (
        <div className="page">
            <main className="container">
                <div className="content-detail">
                    <h1>{project.name}</h1>

                    <div className="box-detail">
                        <p>{project.description}</p>

                        <p>
                            <h2>LINKS:</h2>
                            <p>Repositório:<a target="_blank" href={project.link}>
                                {project.link}
                                </a>
                            </p>
                        </p>

                    </div>

                    <div className="box-images">
                        {images.map(image => (
                            <img className="images-project" src={image} />
                        ))}
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