import React from 'react';
import './Experiencia.css';

function Experiencia() {
  return (
    <div className="experiencia">
      <h2>Experiencia</h2>
      <div className="experiencia-content">
        <div className="experiencia-imagen">
         <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/cilindro.png`} alt="Foto ejemplo2" />
        </div>
        <div className="experiencia-texto">
          <h3>AXUTF (Altia)</h3>
          <p>
            En este proyecto, trabajé en el desarrollo de nuevas funcionalidades para una aplicación web basada en Spring y Thymeleaf, tanto en el frontend como en el backend. 
            Colaboré en la implementación de lógica de negocio en Java, además de manejar las interacciones con bases de datos y optimizar las consultas SQL para mejorar el rendimiento del sistema.
          </p>
          <h3>REGAT (Altia)</h3>
          <p>
            Actualmente, formo parte del equipo de desarrollo del proyecto REGAT, donde utilizo Struts para crear y mejorar nuevas funcionalidades de la plataforma. 
            Me encargo de integrar las diferentes capas del sistema, desarrollando con Java y JavaScript, y gestionando bases de datos para garantizar la correcta operación y escalabilidad del proyecto.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
