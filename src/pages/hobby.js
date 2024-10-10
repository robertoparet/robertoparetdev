import React from 'react';
import './Hobby.css';
import hobbyImage1 from '../media/pxl1.jpg'; // Reemplaza con la ruta de tu primera imagen
import hobbyImage2 from '../media/pxl2.jpg'; // Reemplaza con la ruta de tu segunda imagen

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
          <img src={hobbyImage1} alt="Hobby 1" />
          <img src={hobbyImage2} alt="Hobby 2" />
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
