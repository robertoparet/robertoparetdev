import React from 'react';
import './SobreMi.css';


function SobreMi() {
  return (
    <div className="sobre-mi" id="about">
      <h2>Sobre mí</h2>
      <div className="sobre-mi-content">
        <div className="sobre-mi-texto">
          <p>
            Soy un programador Full Stack con 2 años de experiencia en el desarrollo de aplicaciones con Java,
            trabajando con tecnologías como Struts y Spring Boot. Me apasiona el aprendizaje continuo y la implementación 
            de nuevas tecnologías para mejorar la calidad y eficiencia del desarrollo.
          </p>
          <p>
            Enfocado en la entrega de soluciones robustas, tanto en el frontend como en el backend, con un gran compromiso hacia
            la mejora continua y el trabajo en equipo.
          </p>
        </div>
        <div className="sobre-mi-imagen">
        <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/fotomia.jpg`} alt="Foto mia" />
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
