import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './style/contact.css';

const Contact: React.FC = () => {
    // Estados para guardar os valores dos campos do formulário
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Impede o recarregamento da página

        const phoneNumber = "556184135853"; // Seu número com código do país (55 para Brasil)
        
        // Monta a mensagem que será enviada
        const whatsappMessage = `Olá! Meu nome é ${name}.
Email: ${email}
Mensagem: ${message}`;

        // Cria o link do WhatsApp com a mensagem codificada
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Abre o link em uma nova aba
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contato" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Contato</span>
                    <h2 className="section-title">Vamos conversar?</h2>
                    <p className="section-subtitle">
                        Preencha o formulário ou entre em contato por um dos canais abaixo. Estou aqui para ajudar.
                    </p>
                </div>
                
                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Informações de Contato</h3>
                        <p>Sinta-se à vontade para me ligar ou enviar um e-mail. Responderei o mais breve possível.</p>
                        
                        <div className="info-item">
                            <FaPhoneAlt className="info-icon" />
                            <div>
                                <h4>Telefone</h4>
                                <a href="tel:+556184135853">(61) 8413-5853</a>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:contato@mylakelly.com">contato@mylakelly.com</a>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <h4>Endereço</h4>
                                <p>Endereço do consultório, Cidade - UF</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3>Envie sua mensagem</h3>
                        <div className="form-group">
                            <label htmlFor="name">Seu nome</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Digite seu nome completo" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Seu email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="exemplo@email.com"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Sua mensagem</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Escreva como posso te ajudar..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            <FaWhatsapp />
                            Enviar Mensagem via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;