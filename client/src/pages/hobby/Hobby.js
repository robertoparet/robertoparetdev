import React from 'react';
import './Hobby.css';

function Hobby() {
  return (
    <div className="hobby">
      <h2>Mi Hobby</h2>
      <div className="hobby-content">
        <div className="hobby-texto">
          <p>
            En mi tiempo libre, disfruto capturando momentos únicos y transformándolos en imágenes que cuentan historias. A través de mi página "Robert's Camera Perspective" y mi cuenta de Instagram, comparto estas fotografías, que reflejan mi pasión por encontrar belleza en los pequeños detalles del día a día.
          </p>
        </div>
        <div className="hobby-imagenes">
        <img src={`${process.env.PUBLIC_URL}/assets/images/pxl1.jpg`} alt="Foto ejemplo1 " />
          <img src={`${process.env.PUBLIC_URL}/assets/images/pxl2.jpg`} alt="Foto ejemplo2" />
        </div>
      </div>
      {/* Botón debajo de las imágenes */}
      <div className="hobby-button-container">
        <a href="https://robertoparet.github.io/robertoparet-robertspixel/" target="_blank" rel="noopener noreferrer">
          <button className="hobby-button">Visitar Robert's Camera Perspective</button>
        </a>
      </div>
    </div>
  );
}

export default Hobby;
