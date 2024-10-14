import React from 'react';
import './FormacionAcademica.css';

function FormacionAcademica() {
  return (
    <div className="formacion-academica">
      <h2>Formación Académica</h2>
      <div className="formacion-academica-content">
        <div className="formacion-academica-imagen">
         <img src={`${process.env.PUBLIC_URL}/assets/images/cilindro.png`} alt="Foto ejemplo2" />
        </div>
        <div className="formacion-academica-texto">
          <p>
            <strong>Formación Académica:</strong> Técnico Superior en Desarrollo de Aplicaciones Multiplataforma<br />
            Antón Losada Diéguez IES | 2022
          </p>
          <p>
            <strong>Habilidades Técnicas</strong><br />
            <strong>Lenguajes:</strong> Java, JavaScript, HTML, CSS<br />
            <strong>Frameworks:</strong> Spring Boot, Struts, Thymeleaf<br />
            <strong>Bases de Datos:</strong> Oracle, SQL<br />
            <strong>Herramientas:</strong> Git, SQL Developer, Maven<br />
            <strong>Otros:</strong> Java Server Pages (JSP), Control de versiones
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormacionAcademica;
