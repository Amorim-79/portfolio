import React, {useState} from 'react'

import './styles.css'
import api from '../../services/api'

import Header from '../Fixed/Header'
import Footer from '../Fixed/Footer'

export default function Contact() {

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await api.post('/send', {
                name,
                title,
                message
            })

            alert('Email enviado com sucesso.')

        }catch(err) {
            alert('Email enviado com sucesso.')
        }
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
                                value={name}
                                onChange={e => setName(e.target.value)}
                                />
                            </label>

                            <label>
                                Título:
                                <input
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                />
                            </label>

                            <label>
                                Mensagem:
                                <textarea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                />
                            </label>

                            <button type="submit" className="button-contact">Enviar</button>
                        </form>
                    </div>

                    <div className="box-phone">
                        <p>Celular: 11 95715-3822</p>

                        <a className="button-contact" target="_blank" href="https://api.whatsapp.com/send?phone=5511957153822">
                            Whatsapp
                        </a>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        </div>
    )
}