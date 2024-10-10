import React from 'react';
import './Inicio.css';
import backgroundVideo from '../media/21758-321309738.mp4';

function Inicio() {
  return (
    <div className="inicio">
      {/* Video de fondo */}
      <video className="video-bg" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Roberto Alejandro Paret Pérez</h1>
        <h2>Software Developer</h2>
        <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
          Sobre mí
        </button>
      </div>
    </div>
  );
}

export default Inicio;
