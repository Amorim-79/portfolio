import React, {useState} from 'react'

import './styles.css'
import api from '../../services/api'

import Header from '../Fixed/Header'
import Footer from '../Fixed/Footer'

export default function Contact() {

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        await api.post('/send', {
            name,
            title,
            message,
            email
        })

        alert('Email enviado com sucesso.')
        
    }

    return(
        <div className="page">
            <React.Fragment>
                <Header />
                <main className="container">
                    <h1>Entre em Contato</h1>

                    <div className="box-email">
                        <h2>Via e-mail</h2>
                        
                        <form method="post" onSubmit={handleSubmit}>
                            <label>
                                Nome:
                                <input
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                                />
                            </label>

                            <label>
                                E-mail:
                                <input
                                type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                />
                            </label>

                            <label>
                                Título:
                                <input
                                required
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                />
                            </label>

                            <label>
                                Mensagem:
                                <textarea
                                required
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                />
                            </label>

                            <button type="submit" className="button-contact">Enviar</button>
                        </form>
                    </div>

                    <div className="box-phone">
                        <a className="button-contact" target="_blank" href={process.env.REACT_APP_WHATSAPP}>
                            Whatsapp
                        </a>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        </div>
    )
}