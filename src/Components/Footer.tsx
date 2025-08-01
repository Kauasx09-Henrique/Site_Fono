import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaHeart } from 'react-icons/fa';
import './style/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Myla Kelly</h3>
            <p className="footer-profession">Fonoaudióloga Clínica</p>
            <p className="footer-crfa">CRFa 1-12345</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Links Rápidos</h4>
              <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Contato</h4>
              <ul>
                <li><a href="tel:+5511999999999">(11) 99999-9999</a></li>
                <li><a href="mailto:contato@milakellyfono.com.br">contato@milakellyfono.com.br</a></li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h4 className="footer-title">Redes Sociais</h4>
            <div className="social-icons">
              <a href="#" aria-label="Instagram" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Myla Kelly. Todos os direitos reservados.</p>
            <p className="made-with">
              Feito com <FaHeart className="heart-icon" /> por Kauã Henrique
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;