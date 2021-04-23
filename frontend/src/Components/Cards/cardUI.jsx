import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

// cardUI é exatamente o que aparece na HomePage - a parte gráfica

const CardUI = ({
  imageSource, title, url, descricao,
}) => (

  <Link to={url}>
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {descricao}
        </p>
      </div>
    </div>
  </Link>

);

export default CardUI;
