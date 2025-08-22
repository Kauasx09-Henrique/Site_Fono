import React from 'react';
import { Link } from 'react-scroll'; // Importado para a rolagem suave
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaHeart } from 'react-icons/fa';
import './style/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Opções para a rolagem suave (iguais às do Header)
  const scrollOptions = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          
          <div className="footer-brand">
            <h3 className="footer-logo">Myla Kelly</h3>
            <p className="footer-profession">Fonoaudióloga Clínica</p>
            <p className="footer-crfa">CRFa 1-12345</p>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Navegação</h4>
            <ul className="footer-links">
              <li><Link to="inicio" {...scrollOptions}>Início</Link></li>
              <li><Link to="sobre" {...scrollOptions}>Sobre</Link></li>
              <li><Link to="servicos" {...scrollOptions}>Serviços</Link></li>
              <li><Link to="depoimentos" {...scrollOptions}>Depoimentos</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Contato</h4>
            <ul className="footer-links">
              <li><a href="tel:+5511999999999">(11) 99999-9999</a></li>
              <li><a href="mailto:contato@mylakelly.com">contato@mylakelly.com</a></li>
              <li><p>São Paulo, SP</p></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Redes Sociais</h4>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Myla Kelly. Todos os direitos reservados.</p>
          <p className="made-with">
            Feito com <FaHeart className="heart-icon" /> por Kauã Henrique
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;