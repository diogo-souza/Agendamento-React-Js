import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import '../../Styles/index.css';

const Footer = () => (
  <footer className="footer text-center header-footer-theme">
    <div className="text-muted container">
      <p className="text-members">
        Site por: Diogo Souza
        <a href="https://github.com/diogo-souza/agendamento" title="Link para o GitHub">
          {' '}
          <GoMarkGithub />
        </a>
      </p>
      <div> © 2021 Copyright </div>
    </div>
  </footer>
);

export default Footer;
