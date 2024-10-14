import React from 'react';
import './Inicio.css';

function Inicio() {
  return (
    <div className="inicio">
      {/* Video de fondo */}   
      <video className="video-bg" autoPlay loop muted src={`${process.env.REACT_APP_PUBLIC_URL}/assets/videos/video.mp4`} controls>
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
